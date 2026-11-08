#!/usr/bin/env python3
"""Update only the two explicitly licensed, public official datasets.
No historical website scraping, retries, credentials, scheduling or deployment.
"""
import argparse
import csv
from datetime import date, datetime, timezone
from decimal import Decimal
import io
import json
from pathlib import Path
import re
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]
PRICE = 'https://www.twse.com.tw/exchangeReport/STOCK_DAY_ALL?response=open_data'
CREDIT = 'https://www.cbc.gov.tw/public/data/OpenData/%E7%B6%93%E7%A0%94%E8%99%95/EG25M01.csv'
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


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--price-csv', type=Path)
    parser.add_argument('--credit-csv', type=Path)
    parser.add_argument('--output', type=Path, default=ROOT / '_data/market_extra.json')
    args = parser.parse_args()
    if bool(args.price_csv) != bool(args.credit_csv):
        parser.error('provide both cached official CSV files, or neither')
    # urlopen raises on 403/530; do not retry with a proxy, cookies or another identity.
    if args.price_csv:
        price_raw, credit_raw = args.price_csv.read_bytes(), args.credit_csv.read_bytes()
    else:
        with urlopen(PRICE, timeout=30) as response:
            price_raw = response.read()
        with urlopen(CREDIT, timeout=30) as response:
            credit_raw = response.read()
    price, credit = price_row(price_raw), monthly_rows(credit_raw)
    old = json.loads(args.output.read_text()) if args.output.exists() else {}
    observations = old.get('price0050', {}).get('observations', [])
    if observations and price['date'] < observations[-1]['date']:
        raise ValueError('refuse stale price snapshot')
    if old.get('creditMonthly', {}).get('observations', []) and credit[-1]['date'] < old['creditMonthly']['observations'][-1]['date']:
        raise ValueError('refuse stale monthly series')
    observations = [row for row in observations if row['date'] != price['date']] + [price]
    data = {
        'fetchedAt': datetime.now(timezone.utc).isoformat(),
        'price0050': dict(source=PRICE, dataset='https://data.gov.tw/dataset/11549',
                          license=LICENSE, provider='臺灣證券交易所／金融監督管理委員會證券期貨局',
                          adjustment='unadjusted', observations=observations),
        'creditMonthly': dict(source=CREDIT, dataset='https://data.gov.tw/dataset/10805',
                              license=LICENSE, provider='中央銀行', frequency='monthly',
                              scope='上市及上櫃合計（自1999-02）', sourceUnit='新台幣百萬元', observations=credit)
    }
    temporary = args.output.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(args.output)
    print(f"Updated 0050 {price['date']} and {len(credit)} monthly observations through {credit[-1]['date']}; no deployment.")


if __name__ == '__main__':
    main()
