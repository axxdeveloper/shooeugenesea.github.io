#!/usr/bin/env python3
"""Import reviewed market-level financing amounts; never fetch or publish data.
CSV columns: date,amount_twd (ISO date and whole TWD, not shares/lots).
Both source and license must describe the specific dataset's verified reuse terms.
"""
import argparse
import csv
from datetime import date
import json
from pathlib import Path
from urllib.parse import urlparse


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('market', choices=['listed', 'otc'])
    parser.add_argument('csv', type=Path)
    parser.add_argument('--source', required=True)
    parser.add_argument('--license', required=True)
    parser.add_argument('--output', type=Path, default=Path(__file__).resolve().parents[1] / '_data/margin.json')
    args = parser.parse_args()
    if urlparse(args.source).scheme != 'https' or not urlparse(args.source).netloc:
        parser.error('source must be an HTTPS URL')
    if not args.license.strip() or args.license.lower() == 'pending':
        parser.error('supply verified dataset-specific license evidence')
    rows = []
    previous = ''
    with args.csv.open(newline='') as source:
        for item in csv.DictReader(source):
            day = date.fromisoformat(item['date'])
            amount = int(item['amount_twd'])
            if day.isoformat() != item['date'] or day > date.today() or item['date'] <= previous or amount < 0 or amount > 9007199254740991:
                raise ValueError('dates must be canonical, unique, ascending and not future; amounts must be nonnegative whole TWD')
            rows.append({'date': item['date'], 'amountTwd': amount})
            previous = item['date']
    if not rows:
        raise ValueError('empty input: existing data was not replaced')
    data = json.loads(args.output.read_text())
    if data['schemaVersion'] != 1:
        raise ValueError('unsupported schema')
    data['markets'][args.market] = dict(verified=True, source=args.source, license=args.license, observations=rows)
    temporary = args.output.with_suffix('.json.tmp')
    temporary.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(args.output)
    print(f'Imported {len(rows)} reviewed observations for {args.market}; no deployment performed.')


if __name__ == '__main__':
    main()
