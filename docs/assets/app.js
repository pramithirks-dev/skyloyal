// SkyLoyal prototype, vanilla JS, no build step.
// Loads docs/mock-data.json and renders the CSM dashboard.
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  // Run only on dashboard page
  if (!$('#flyer-list-body')) return;

  let allData = [];
  let selectedId = null;
  let filters = { tier: '', risk: '', archetype: '', q: '' };

  fetch('mock-data.json')
    .then((r) => r.json())
    .then((data) => {
      allData = data;
      populateArchetypeFilter(data);
      render();
      if (data.length) selectFlyer(data[0].member_id);
    })
    .catch((err) => {
      console.error(err);
      $('#flyer-list-body').innerHTML =
        '<tr><td colspan="6">Could not load mock-data.json. Open via http://localhost or the live Pages URL, file:// blocks fetch.</td></tr>';
    });

  function populateArchetypeFilter(data) {
    const sel = $('#filter-archetype');
    if (!sel) return;
    const archs = new Set();
    data.forEach((d) => d.archetypes.forEach((a) => archs.add(a)));
    Array.from(archs)
      .sort()
      .forEach((a) => {
        const opt = document.createElement('option');
        opt.value = a;
        opt.textContent = a;
        sel.appendChild(opt);
      });
  }

  function render() {
    const tbody = $('#flyer-list-body');
    tbody.innerHTML = '';
    const list = allData.filter((d) => {
      if (filters.tier && d.tier !== filters.tier) return false;
      if (filters.risk && d.risk_label !== filters.risk) return false;
      if (filters.archetype && !d.archetypes.includes(filters.archetype)) return false;
      if (filters.q) {
        const q = filters.q.toLowerCase();
        if (
          !(d.name + ' ' + d.member_id + ' ' + d.home_hub + ' ' + d.archetypes.join(' '))
            .toLowerCase()
            .includes(q)
        )
          return false;
      }
      return true;
    });
    $('#count-pill').textContent = list.length + ' of ' + allData.length;

    list.forEach((d) => {
      const tr = document.createElement('tr');
      tr.dataset.id = d.member_id;
      if (d.member_id === selectedId) tr.classList.add('selected');
      tr.innerHTML =
        '<td>' +
        d.member_id +
        '</td>' +
        '<td>' +
        escapeHtml(d.name) +
        '</td>' +
        '<td><span class="tier-pill tier-' +
        d.tier +
        '">' +
        d.tier +
        '</span></td>' +
        '<td>' +
        d.home_hub +
        '</td>' +
        '<td><span class="risk-dots risk-' +
        d.risk_label +
        '">' +
        renderDots(d.risk_score) +
        '</span></td>' +
        '<td>' +
        d.archetypes.join(', ') +
        '</td>';
      tr.addEventListener('click', () => selectFlyer(d.member_id));
      tbody.appendChild(tr);
    });
  }

  function renderDots(n) {
    return '●'.repeat(n) + '○'.repeat(5 - n);
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function selectFlyer(id) {
    selectedId = id;
    const d = allData.find((x) => x.member_id === id);
    if (!d) return;
    $$('.selected').forEach((el) => el.classList.remove('selected'));
    const tr = $('tr[data-id="' + id + '"]');
    if (tr) tr.classList.add('selected');

    const reasons = [];
    if (d.flights_last_12m > 0 && d.flights_last_3m === 0)
      reasons.push('flights_last_3m = 0 (silent quiet)');
    if (d.miles_expiring_90d > 0)
      reasons.push('miles_expiring_90d = ' + d.miles_expiring_90d.toLocaleString());
    if (
      d.flights_last_12m > 0 &&
      d.alliance_partner_flights / Math.max(d.flights_last_12m, 1) > 0.4
    )
      reasons.push(
        'alliance leakage ' +
          Math.round((100 * d.alliance_partner_flights) / Math.max(d.flights_last_12m, 1)) +
          '%'
      );
    if (d.last_complaint_type !== 'none' && d.last_complaint_nps <= 0)
      reasons.push('IROP: ' + d.last_complaint_type + ', NPS ' + d.last_complaint_nps);

    $('#detail-name').textContent = d.name + '   (' + d.member_id + ')';
    $('#detail-meta').innerHTML =
      'Tier <strong>' +
      d.tier +
      '</strong> · Hub ' +
      d.home_hub +
      ' · Tenure ' +
      d.tenure_years +
      'y · Miles ' +
      d.miles_balance.toLocaleString();

    $('#detail-rows').innerHTML =
      '<div class="row"><span class="k">Flights last 12m</span><span class="v">' +
      d.flights_last_12m +
      '</span></div>' +
      '<div class="row"><span class="k">Flights last 3m</span><span class="v">' +
      d.flights_last_3m +
      '</span></div>' +
      '<div class="row"><span class="k">Miles balance</span><span class="v">' +
      d.miles_balance.toLocaleString() +
      '</span></div>' +
      '<div class="row"><span class="k">Miles expiring 90d</span><span class="v">' +
      d.miles_expiring_90d.toLocaleString() +
      '</span></div>' +
      '<div class="row"><span class="k">Partner-airline flights</span><span class="v">' +
      d.alliance_partner_flights +
      '</span></div>' +
      '<div class="row"><span class="k">Last complaint</span><span class="v">' +
      d.last_complaint_type +
      ' / NPS ' +
      d.last_complaint_nps +
      '</span></div>';

    $('#detail-reasons').innerHTML = reasons.length
      ? reasons.map((r) => '<li>' + escapeHtml(r) + '</li>').join('')
      : '<li>No active risk signals</li>';

    $('#detail-interventions').innerHTML = renderInterventions(d);
  }

  function renderInterventions(d) {
    const items = [];
    const has = (a) => d.archetypes.includes(a);

    if (has('Status-Slipper'))
      items.push({
        cd: ['CD2', 'CD4'],
        title: 'Send Touch 1: "Your year so far in numbers"',
        body: 'Personalised stats, miles earned, distance flown. Anchors Ownership and Development before any retention nudge.',
      });
    if (has('Miles-Hoarder'))
      items.push({
        cd: ['CD4'],
        title: 'Send "138,000 miles, 6 trip ideas"',
        body: 'Redemption-led, no flight pressure. Frame the miles as an asset, not a liability.',
      });
    if (has('Alliance-Drifter'))
      items.push({
        cd: ['CD1', 'CD3'],
        title: 'Send "Where SkyLoyal beats partners"',
        body: 'Real route-by-route comparison. No badmouthing the alliance, only differentiation.',
      });
    if (has('Complaint-Scarred'))
      items.push({
        cd: ['CD3'],
        title: 'Acknowledge the IROP first',
        body: 'A short, factual note from a named CSM. No apology theatre, no upsell. The relationship reset starts here.',
      });
    if (!items.length)
      items.push({
        cd: ['CD2'],
        title: 'Standard tier-progress nudge',
        body: 'Low risk: maintain cadence, no extra contact required.',
      });

    return items
      .map(
        (i) =>
          '<div class="intervention">' +
          i.cd.map((c) => '<span class="cd-tag">' + c + '</span>').join('') +
          '<strong>' +
          escapeHtml(i.title) +
          '</strong><br>' +
          escapeHtml(i.body) +
          '</div>'
      )
      .join('');
  }

  // Filter wiring
  ['filter-tier', 'filter-risk', 'filter-archetype'].forEach((id) => {
    const el = $('#' + id);
    if (!el) return;
    el.addEventListener('change', (e) => {
      const key = id.replace('filter-', '');
      filters[key] = e.target.value;
      render();
    });
  });
  const search = $('#filter-q');
  if (search)
    search.addEventListener('input', (e) => {
      filters.q = e.target.value;
      render();
    });
})();

// Style picker on flyer-view.html (CD3)
(function () {
  const wrap = document.querySelector('.style-picker');
  if (!wrap) return;
  const labels = wrap.querySelectorAll('label');
  function refresh() {
    labels.forEach((l) => {
      const r = l.querySelector('input[type=radio]');
      l.classList.toggle('checked', r && r.checked);
    });
  }
  labels.forEach((l) =>
    l.addEventListener('change', refresh)
  );
  refresh();
})();
