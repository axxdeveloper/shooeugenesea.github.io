import importlib.util
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('update_market', ROOT / 'scripts/update_market_data.py')
update = importlib.util.module_from_spec(spec)
spec.loader.exec_module(update)


class OfficialSourceTest(unittest.TestCase):
    def test_official_snapshot_date_symbol_and_price(self):
        row = update.price_row((ROOT / 'reports/source-evidence/price-2026-11-08.csv').read_bytes())
        self.assertEqual(row, {'date': '2026-11-06', 'close': 92.5})

    def test_monthly_amount_unit_and_pdf_crosscheck(self):
        rows = update.monthly_rows((ROOT / 'reports/source-evidence/cbc-2026-11-08.csv').read_bytes())
        self.assertEqual(len(rows), 332)
        self.assertEqual(rows[0]['date'], '1999-02')
        self.assertEqual(rows[-1], {'date': '2026-09', 'amountTwd': 834297000000})
        # CBC 133_EG25_A4L.pdf: amounts in millions of TWD; June 2026 = 803510.
        self.assertEqual(next(r['amountTwd'] for r in rows if r['date'] == '2026-06'), 803510000000)

    def test_reject_wrong_price_missing_and_duplicate_months(self):
        with self.assertRaises(ValueError):
            update.price_row('日期,證券代號,收盤價\n1151106,0056,92.5\n'.encode())
        for months in ['1999M02,1\n1999M04,2\n', '1999M02,1\n1999M02,2\n', '1999M02,-\n1999M03,2\n']:
            with self.subTest(months=months), self.assertRaises((ValueError, ArithmeticError)):
                update.monthly_rows(('月,融資-餘額-金額-原始值\n' + months).encode())


if __name__ == '__main__':
    unittest.main()
