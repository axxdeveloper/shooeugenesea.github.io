"""Data-integrity regression checks; fixtures never enter the site's data directory."""
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class MarginImportTest(unittest.TestCase):
    def test_atomic_validation_and_market_isolation(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory)
            output = path / 'margin.json'
            output.write_text((ROOT / '_data/margin.json').read_text())
            csv = path / 'rows.csv'
            command = [sys.executable, str(ROOT / 'scripts/import_margin.py'),
                       'listed', str(csv), '--source', 'https://example.org/fixture',
                       '--license', 'Test fixture only', '--output', str(output)]
            csv.write_text('date,amount_twd\n2025-01-02,100000000\n2025-01-03,200000000\n')
            self.assertEqual(subprocess.run(command, capture_output=True).returncode, 0)
            data = json.loads(output.read_text())
            self.assertEqual(data['markets']['listed']['observations'][-1]['amountTwd'], 200000000)
            self.assertFalse(data['markets']['otc']['verified'])
            prior = output.read_bytes()
            for content in ['', '2025-01-03,5\n2025-01-03,6\n',
                            '2099-01-01,5\n', '2025-01-01,-1\n',
                            '2025-02-30,5\n', '2025-01-01,NaN\n']:
                with self.subTest(content=content):
                    csv.write_text('date,amount_twd\n' + content)
                    self.assertNotEqual(subprocess.run(command, capture_output=True).returncode, 0)
                    self.assertEqual(output.read_bytes(), prior)


if __name__ == '__main__':
    unittest.main()
