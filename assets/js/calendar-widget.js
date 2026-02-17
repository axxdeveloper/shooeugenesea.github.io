(function () {
  var postsMap = {};
  var currentYear, currentMonth;
  var postDate = '';

  var calEl = document.querySelector('.sidebar-calendar');
  if (!calEl) return;

  var rawDate = calEl.getAttribute('data-post-date');
  if (rawDate) {
    postDate = rawDate;
    var parts = rawDate.split('-');
    currentYear = parseInt(parts[0], 10);
    currentMonth = parseInt(parts[1], 10) - 1;
  } else {
    var now = new Date();
    currentYear = now.getFullYear();
    currentMonth = now.getMonth();
  }

  var baseurl = '';
  var meta = document.querySelector('meta[name="baseurl"]');
  if (meta) baseurl = meta.getAttribute('content') || '';

  var jsonUrl = baseurl + '/assets/js/posts.json';

  fetch(jsonUrl)
    .then(function (r) { return r.json(); })
    .then(function (posts) {
      posts.forEach(function (p) {
        var d = p.date;
        if (!postsMap[d]) postsMap[d] = [];
        postsMap[d].push(p);
      });
      if (!rawDate && posts.length > 0) {
        var latest = posts[0].date.split('-');
        currentYear = parseInt(latest[0], 10);
        currentMonth = parseInt(latest[1], 10) - 1;
      }
      render();
    });

  document.getElementById('cal-prev').addEventListener('click', function () {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    render();
  });

  document.getElementById('cal-next').addEventListener('click', function () {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    render();
  });

  var monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function render() {
    document.getElementById('cal-title').textContent =
      monthNames[currentMonth] + ' ' + currentYear;

    var firstDay = new Date(currentYear, currentMonth, 1).getDay();
    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    var tbody = document.getElementById('cal-body');
    tbody.innerHTML = '';

    var row = document.createElement('tr');
    for (var i = 0; i < firstDay; i++) {
      row.appendChild(document.createElement('td'));
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var key = currentYear + '-' + pad(currentMonth + 1) + '-' + pad(day);
      var td = document.createElement('td');

      if (postsMap[key]) {
        var a = document.createElement('a');
        a.href = postsMap[key][0].url;
        a.textContent = day;
        a.className = 'sidebar-calendar__day--has-post';

        var titles = postsMap[key].map(function (p) { return p.title; });
        a.title = titles.join('\n');

        td.appendChild(a);
      } else {
        td.textContent = day;
      }

      if (key === postDate) {
        td.classList.add('sidebar-calendar__day--current');
      }

      row.appendChild(td);

      if ((firstDay + day) % 7 === 0) {
        tbody.appendChild(row);
        row = document.createElement('tr');
      }
    }

    if (row.children.length > 0) {
      while (row.children.length < 7) {
        row.appendChild(document.createElement('td'));
      }
      tbody.appendChild(row);
    }
  }
})();
