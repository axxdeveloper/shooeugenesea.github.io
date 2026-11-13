import copy
import importlib.util
import json
from pathlib import Path
import unittest
from urllib.error import HTTPError, URLError

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('refresh', ROOT / 'scripts/update_market_data.py')
u = importlib.util.module_from_spec(spec)
spec.loader.exec_module(u)

class RefreshTest(unittest.TestCase):
    def setUp(self):
        self.files = {
            u.PRICE: (ROOT/'reports/source-evidence/price-2026-11-08.csv').read_bytes(),
            u.CREDIT: (ROOT/'reports/source-evidence/cbc-2026-11-08.csv').read_bytes(),
            u.MARKET: json.dumps([{'Date':'1151106','TAIEX':'100','Change':'-5','TradeValue':'100000000'}]).encode()
        }
        self.old = u.refresh({}, self.files.__getitem__, '2026-11-08T00:00:00Z')
    def test_official_csv_uses_own_date_and_units(self):
        raw = (ROOT/'reports/source-evidence/market-2026-11-13.csv').read_bytes()
        result = u.market_rows(raw)
        self.assertEqual(result[-1],dict(date='2026-11-13',close=43675.12,change=583.25,tradeValueTwd=951580008082))
        for bad in ['date,close\n2026-11-13,123\n', '日期,發行量加權股價指數,漲跌點數,成交金額\n1151113,43675.12,583.25,-1\n']:
            with self.assertRaises(ValueError):u.market_rows(bad.encode())

    def test_repeat_and_revision(self):
        new = u.refresh(self.old, self.files.__getitem__, '2026-11-09T00:00:00Z')
        self.assertEqual(len(new['price0050']['observations']), 1)
        self.files[u.PRICE] = '日期,證券代號,收盤價\n1151106,0050,93.00\n'.encode()
        new = u.refresh(self.old, self.files.__getitem__)
        self.assertEqual(new['price0050']['observations'][-1]['close'], 93)
    def test_partial_failure_retains_values_and_success_time(self):
        def fetch(url):
            if url == u.PRICE: raise HTTPError(url,403,'forbidden',None,None)
            return self.files[url]
        new = u.refresh(self.old, fetch, '2026-11-09T00:00:00Z')
        self.assertEqual(new['price0050']['observations'], self.old['price0050']['observations'])
        self.assertEqual(new['price0050']['update']['lastSuccessAt'], '2026-11-08T00:00:00Z')
        self.assertEqual(new['price0050']['update']['errorCode'], 'http_403')
        self.assertEqual(new['creditMonthly']['update']['status'], 'ok')
    def test_invalid_and_regressed_data_do_not_replace(self):
        for bad in [b'<html>error</html>', b'[]', b'[null]', b'[{"Date":"1151105","TAIEX":"100","Change":"-5","TradeValue":"1"}]']:
            files = {**self.files, u.MARKET:bad}
            new = u.refresh(self.old, files.__getitem__)
            self.assertEqual(new['taiwanMarket']['observations'], self.old['taiwanMarket']['observations'])
            self.assertEqual(new['taiwanMarket']['update']['status'], 'error')
    def test_rate_limit_stops_without_retry(self):
        called=[]
        def fetch(url):
            called.append(url)
            raise HTTPError(url,429,'rate limited',None,None)
        with self.assertRaises(HTTPError): u.refresh(self.old,fetch)
        self.assertEqual(called,[u.PRICE])
    def test_market_units_and_bad_rows(self):
        row=u.market_rows(self.files[u.MARKET])[0]
        self.assertEqual(row,dict(date='2026-11-06',close=100,change=-5,tradeValueTwd=100000000))
        for val in ['NaN','-1','1.5']:
            raw=json.loads(self.files[u.MARKET]);raw[0]['TradeValue']=val
            with self.assertRaises(ValueError):u.market_rows(json.dumps(raw).encode())
        raw=json.loads(self.files[u.MARKET]);raw+=copy.deepcopy(raw)
        with self.assertRaises(ValueError):u.market_rows(json.dumps(raw).encode())

if __name__ == '__main__':unittest.main()
