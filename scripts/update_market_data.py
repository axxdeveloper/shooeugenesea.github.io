#!/usr/bin/env python3
"""Update only the explicitly licensed, public official datasets.
No historical website scraping, retries, credentials, scheduling or deployment.
"""
import argparse
import copy
import csv
from datetime import date, datetime, timezone
from decimal import Decimal
import io
import json
from pathlib import Path
import re
from urllib.request import urlopen
from urllib.error import HTTPError, URLError

ROOT = Path(__file__).resolve().parents[1]
PRICE = 'https://www.twse.com.tw/exchangeReport/STOCK_DAY_ALL?response=open_data'
CREDIT = 'https://www.cbc.gov.tw/public/data/OpenData/%E7%B6%93%E7%A0%94%E8%99%95/EG25M01.csv'
# Dataset 11672 links this CSV directly. The OpenAPI mirror can lag a trading day.
MARKET = 'https://www.twse.com.tw/exchangeReport/FMTQIK?response=open_data'
LICENSE = 'https://data.gov.tw/license'


def price_row(raw):
    records = [row for row in csv.DictReader(io.StringIO(raw.decode('utf-8-sig')))
               if row.get('證券代號') == '0050']
    if len(records) != 1:
        raise ValueError('expected exactly one 0050 row')
    row = records[0]
    stamp = row['日期']
    if not re.fullmatch(r'\d{7}', stamp):
        raise ValueError('invalid ROC date')
    day = date(int(stamp[:3]) + 1911, int(stamp[3:5]), int(stamp[5:]))
    close = Decimal(row['收盤價'])
    if day > date.today() or not close.is_finite() or close <= 0:
        raise ValueError('invalid close or future date')
    return {'date': day.isoformat(), 'close': float(close)}


def monthly_rows(raw):
    result = []
    previous = None
    for row in csv.DictReader(io.StringIO(raw.decode('utf-8-sig'))):
        month = row['月']
        if not re.fullmatch(r'\d{4}M\d{2}', month):
            raise ValueError('invalid month')
        year, mon = map(int, month.split('M'))
        date(year, mon, 1)
        if month < '1999M02':
            continue  # earlier scope does not consistently include OTC
        sequence = year * 12 + mon
        if previous is not None and sequence != previous + 1:
            raise ValueError('missing, duplicate or unordered month')
        if sequence >= date.today().year * 12 + date.today().month:
            raise ValueError('not a completed month')
        amount = Decimal(row['融資-餘額-金額-原始值'].replace(',', '')) * 1_000_000
        if not amount.is_finite() or amount < 0 or amount != int(amount) or amount > 9007199254740991:
            raise ValueError('invalid monthly financing amount')
        result.append({'date': f'{year:04d}-{mon:02d}', 'amountTwd': int(amount)})
        previous = sequence
    if len(result) < 2 or result[0]['date'] != '1999-02':
        raise ValueError('incomplete monthly series')
    return result


def download(url):
    # One request only. In particular, do not evade or retry 403/530 responses.
    with urlopen(url, timeout=30) as response:
        return response.read()


def market_rows(raw):
    text = raw.decode('utf-8-sig').lstrip()
    if text.startswith(('[', '{')):
        records = json.loads(text)  # Retain offline OpenAPI fixture compatibility.
    else:
        reader = csv.DictReader(io.StringIO(text))
        mapping = {'日期':'Date', '發行量加權股價指數':'TAIEX', '漲跌點數':'Change', '成交金額':'TradeValue'}
        if not reader.fieldnames or not set(mapping).issubset(reader.fieldnames):
            raise ValueError('unexpected official market CSV headers')
        records = [{key:row[column] for column,key in mapping.items()} for row in reader]
    if not isinstance(records, list) or not records:
        raise ValueError('empty market report')
    result = []
    for row in records:
        stamp = row['Date']
        if not re.fullmatch(r'\d{7}', stamp):
            raise ValueError('invalid market date')
        day = date(int(stamp[:3]) + 1911, int(stamp[3:5]), int(stamp[5:]))
        close, change, amount = [Decimal(row[k].replace(',', '')) for k in ('TAIEX', 'Change', 'TradeValue')]
        if (day > date.today() or any(not n.is_finite() for n in (close, change, amount))
                or close <= 0 or close - change <= 0 or amount < 0 or amount != int(amount)
                or amount > 9007199254740991):
            raise ValueError('invalid market values')
        result.append(dict(date=day.isoformat(), close=float(close), change=float(change),
                           tradeValueTwd=int(amount)))
    result.sort(key=lambda row: row['date'])
    if len({r['date'] for r in result}) != len(result):
        raise ValueError('duplicate market date')
    return result


def refresh(old, fetch=download, checked_at=None):
    """Refresh sources independently; keep the last good values on any failure."""
    data = copy.deepcopy(old)
    checked_at = checked_at or datetime.now(timezone.utc).isoformat()
    sources = {
        'price0050': dict(source=PRICE, dataset='https://data.gov.tw/dataset/11549',
                          license=LICENSE, provider='臺灣證券交易所／金融監督管理委員會證券期貨局',
                          adjustment='unadjusted'),
        'creditMonthly': dict(source=CREDIT, dataset='https://data.gov.tw/dataset/10805',
                              license=LICENSE, provider='中央銀行', frequency='monthly',
                              scope='上市及上櫃合計（自1999-02）', sourceUnit='新台幣百萬元'),
        'taiwanMarket': dict(source=MARKET, dataset='https://data.gov.tw/dataset/11672',
                            license=LICENSE, provider='臺灣證券交易所', frequency='daily',
                            scope='集中市場（上市），不含上櫃', sourceUnit='新台幣元／指數點')
    }
    for key, metadata in sources.items():
        previous = data.get(key, {})
        observations = previous.get('observations', [])
        status = dict(checkedAt=checked_at,
                      lastSuccessAt=previous.get('update', {}).get('lastSuccessAt'))
        try:
            raw = fetch(metadata['source'])
            if key == 'price0050':
                row = price_row(raw)
                if observations and row['date'] < observations[-1]['date']:
                    raise ValueError('source date regressed')
                updated = [r for r in observations if r['date'] != row['date']] + [row]
            elif key == 'creditMonthly':
                updated = monthly_rows(raw)
                if observations and updated[-1]['date'] < observations[-1]['date']:
                    raise ValueError('source month regressed')
            else:
                updated = market_rows(raw)
                if observations and updated[-1]['date'] < observations[-1]['date']:
                    raise ValueError('source date regressed')
            status.update(status='ok', lastSuccessAt=checked_at)
        except (HTTPError, URLError, TimeoutError, OSError, ValueError, ArithmeticError, KeyError, TypeError, AttributeError) as error:
            if isinstance(error, HTTPError) and error.code == 429:
                raise  # Stop immediately on rate limits; never retry or publish a partial run.
            updated = observations
            # Publish only a safe, stable error code, never a response body or exception text.
            code = 'http_' + str(error.code) if isinstance(error, HTTPError) else (
                'network' if isinstance(error, (URLError, TimeoutError, OSError)) else 'invalid_data')
            status.update(status='error', errorCode=code)
        data[key] = dict(metadata, observations=updated, update=status)
    # fetchedAt from the old format is not a current data date. Per-source update
    # metadata now distinguishes a check attempt from a successful retrieval.
    data.pop('fetchedAt', None)
    return data


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--price-csv', type=Path)
    parser.add_argument('--credit-csv', type=Path)
    parser.add_argument('--market-json', type=Path)
    parser.add_argument('--output', type=Path, default=ROOT / '_data/market_extra.json')
    args = parser.parse_args()
    if any((args.price_csv, args.credit_csv, args.market_json)) and not all((args.price_csv, args.credit_csv, args.market_json)):
        parser.error('provide all three cached source files, or none')
    old = json.loads(args.output.read_text()) if args.output.exists() else {}
    files = {PRICE:args.price_csv, CREDIT:args.credit_csv, MARKET:args.market_json}
    fetch = (lambda url: files[url].read_bytes()) if args.price_csv else download
    data = refresh(old, fetch)
    temporary = args.output.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(args.output)
    for key in ('price0050', 'creditMonthly', 'taiwanMarket'):
        value = data[key]
        last = value['observations'][-1]['date'] if value['observations'] else 'unavailable'
        print(f"{key}: {value['update']['status']}; data date {last}; no deployment.")
        if value['update']['status'] == 'error':
            print(f"::warning::{key}: {value['update']['errorCode']}; kept last good data")


if __name__ == '__main__':
    main()
