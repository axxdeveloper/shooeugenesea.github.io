"""Check actual Jekyll output, not source substitutions."""
from html.parser import HTMLParser
from pathlib import Path
import sys
from urllib.parse import unquote, urlsplit

site = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[1] / '_site'
home = (site / 'index.html').read_text()
assert 'market-dashboard' in home and 'id="recent-posts"' not in home
assert 'class="entries-list"' not in home
assert 'href="/notes/"' in home
assert 'data-market="listed"' not in home and 'data-market="otc"' not in home
assert 'market-margin-data' not in home
notes = (site / 'notes/index.html').read_text()
assert 'us-price-pipeline-margin-squeeze-zh/' in notes
assert (site / '2026/04/17/us-price-pipeline-margin-squeeze-zh/index.html').exists()
assert 'class="masthead' in home, 'requires complete Jekyll output'
assert 'data-symbol="0050"' in home
assert '1999-02' in home and '2026-09' in home, 'monthly series must be embedded'
assert '92.5' in home and '2026-11-06' in home, '0050 snapshot must be embedded'
pages = sorted(site.glob('page/*/index.html'))
assert pages, 'pagination pages must be generated'
for page in pages:
    text = page.read_text()
    assert 'data-symbol="QQQ"' not in text, page
    assert 'recent-posts' in text, page


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.links += [v for k, v in attrs if k == 'href']


parser = Links()
parser.feed(home)
checked = 0
for href in parser.links:
    parsed = urlsplit(href)
    if parsed.scheme or parsed.netloc or not parsed.path.startswith('/'):
        continue
    target = site / unquote(parsed.path).lstrip('/')
    if target.is_dir():
        target = target / 'index.html'
    assert target.exists(), href
    checked += 1
for private in ['tests', 'vendor', 'reports/dashboard-review.md', 'scripts/import_margin.py', 'scripts/update_market_data.py', 'reports/source-evidence']:
    assert not (site / private).exists(), private
print(f'PASS: homepage, {len(pages)} archive pages, {checked} local homepage links; development files excluded.')
