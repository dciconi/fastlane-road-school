const I18N = { en: EN, pt: PT, es: ES };
const MODULES = () => META.map(m => { const t = T().mod[m.id]; return { ...m, title: t.title, sub: t.sub, body: t.body, quiz: t.quiz.map((q, i) => ({ q: q[0], o: q[1], why: q[2], a: m.a[i] })) }; });

/* ---------- Widgets ---------- */
const WIDGETS = {};

WIDGETS.roads = el => {
  const t = T().w.roads, look = [['var(--stop)','#fff'],['var(--warn)','var(--on-warn)'],['var(--sign)','#fff']];
  let cur = 2;
  const paint = () => {
    const r = t.roads[cur];
    el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
    <div class="tabs" role="tablist">${t.roads.map((v, k) => `<button class="tab-btn" role="tab" type="button" data-k="${k}" aria-selected="${k === cur}" style="--c:${look[k][0]};--tc:${look[k][1]}">${v.name}</button>`).join('')}</div>
    <div class="dest"><strong>${r.dest}</strong><code>${r.eq}</code></div>
    <dl class="kv">${r.rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  };
  el.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) { cur = +b.dataset.k; paint(); el.querySelector(`[data-k="${cur}"]`).focus(); } });
  paint();
};

function sortWidget(el, t, answers, stateKey, fbText){
  const ui = T().ui;
  const paint = () => {
    const st = S[stateKey], n = Object.keys(st).length, got = Object.values(st).filter(v => v.ok).length;
    el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
    <ul class="sort-list">${t.items.map((txt, i) => { const s = st[i], a = answers[i]; return `<li class="sort-item"><p>${txt}</p><div class="chips">${t.names.map((nm, j) => {
      let cls = ''; if (s) { if (j === a) cls = 'right'; else if (j === s.pick) cls = 'wrong'; }
      return `<button type="button" class="chip ${cls}" data-i="${i}" data-j="${j}" ${s ? 'disabled' : ''}>${nm}</button>`; }).join('')}</div>${s ? `<p class="fb ${s.ok ? 'good' : 'bad'}">${fbText(s.ok, a)}</p>` : ''}</li>`; }).join('')}</ul>
    <p class="score-line">${n ? `${ui.score(got, n)}${n === t.items.length ? '' : ` · ${t.left(t.items.length - n)}`}` : t.todo(t.items.length)} ${n ? `<button type="button" class="btn small" data-reset>${t.again}</button>` : ''}</p>`;
  };
  el.addEventListener('click', e => {
    if (e.target.closest('[data-reset]')) { S[stateKey] = {}; save(); return paint(); }
    const b = e.target.closest('.chip'); if (!b || b.disabled) return;
    const i = +b.dataset.i, j = +b.dataset.j; S[stateKey][i] = { pick:j, ok: answers[i] === j }; save(); paint();
  });
  paint();
}
WIDGETS.sorter = el => { const t = T().w.sorter, ui = T().ui; sortWidget(el, t, SORT_KEY, 'sort', (ok, a) => `${ok ? ui.correct : ui.notQuite} ${t.why[a]}`); };
WIDGETS.seeds = el => { const t = T().w.seeds; sortWidget(el, t, SEED_KEY, 'seeds', (ok, a) => t.fb(ok, t.names[a])); };

WIDGETS.week = el => {
  const t = T().w.week;
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="week">${t.days.map((d, i) => `<div class="day ${i < 5 ? 'sold' : 'free'}">${d}<small>${i < 5 ? t.sold : t.yours}</small></div>`).join('')}</div>
  <div class="slider"><label for="wk-years">${t.years}</label><output id="wk-out"></output><input id="wk-years" type="range" min="5" max="50" value="40"></div>
  <div class="stats" id="wk-stats"></div>`;
  const upd = () => {
    const y = +$('#wk-years', el).value; $('#wk-out', el).textContent = t.yearsOut(y);
    const v = [y * 50 * 5, y * 50 * 40, y * 52 * 2, y * 2 * 5], cls = ['lo', '', 'hl', ''];
    $('#wk-stats', el).innerHTML = t.stats.map((s, i) => `<div class="stat ${cls[i]}"><small>${s}</small><b>${num(v[i])}</b></div>`).join('');
  };
  $('#wk-years', el).addEventListener('input', upd); upd();
};

function niceStep(v){ const e = Math.pow(10, Math.floor(Math.log10(v))), f = v / e; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * e; }

WIDGETS.slowcalc = el => {
  const t = T().w.slow, ids = ['sl-age','sl-inc','sl-save','sl-ret','sl-spend','sl-yield'], attrs = ['min="16" max="70" value="25"','min="0" step="1000" value="60000"','min="0" max="90" value="10"','min="0" max="15" step="0.5" value="7"','min="0" step="1000" value="45000"','min="1" max="10" step="0.5" value="4"'];
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="grid-form">${ids.map((id, i) => `<div class="field"><label for="${id}">${t.fields[i]}</label><input id="${id}" type="number" ${attrs[i]}></div>`).join('')}</div>
  <div class="stats" id="sl-stats"></div>
  <svg class="chart" id="sl-chart" viewBox="0 0 640 260" role="img" aria-label="${t.aria}"></svg>
  <p class="w-note">${t.note}</p>`;
  const v = id => Math.max(0, parseFloat($('#' + id, el).value) || 0);
  const upd = () => {
    const age = Math.min(70, Math.max(16, v('sl-age'))), inc = v('sl-inc'), sp = v('sl-save') / 100, r = v('sl-ret') / 100, spend = v('sl-spend'), yd = Math.max(0.01, v('sl-yield') / 100);
    const target = spend / yd, contrib = inc * sp, maxY = 85 - age;
    let bal = 0, free = null; const pts = [{ x: age, y: 0 }];
    for (let y = 1; y <= maxY; y++) { bal = bal * (1 + r) + contrib; pts.push({ x: age + y, y: bal }); if (free === null && bal >= target) free = y; }
    const showTo = Math.min(maxY, (free ?? maxY) + 4), P = pts.slice(0, showTo + 1);
    const fb = free !== null ? pts[free].y : 0, paid = contrib * (free ?? 0);
    $('#sl-stats', el).innerHTML = `<div class="stat"><small>${t.stats[0]}</small><b>${money(target)}</b></div>
      <div class="stat lo"><small>${t.stats[1]}</small><b>${free !== null ? age + free : t.never}</b></div>
      <div class="stat"><small>${t.stats[2]}</small><b>${free !== null ? free : maxY + '+'}</b></div>
      <div class="stat"><small>${t.stats[3]}</small><b>${free !== null && paid > 0 ? money(fb - paid) + ' / ' + money(paid) : '—'}</b></div>`;
    const Wd = 640, H = 260, pl = 66, pr = 14, pt = 14, pb = 32;
    const yMaxRaw = Math.max(target, ...P.map(p => p.y)) * 1.05 || 1, step = niceStep(yMaxRaw / 4), yMax = Math.ceil(yMaxRaw / step) * step;
    const x0 = P[0].x, x1 = P[P.length - 1].x, sx = x => pl + (x - x0) / Math.max(1, x1 - x0) * (Wd - pl - pr), sy = y => H - pb - y / yMax * (H - pt - pb);
    let g = '';
    for (let k = 0; k <= yMax + 1e-6; k += step) g += `<line x1="${pl}" x2="${Wd - pr}" y1="${sy(k)}" y2="${sy(k)}" stroke="var(--rule)" stroke-width="1"/><text x="${pl - 8}" y="${sy(k) + 4}" text-anchor="end">${money(k)}</text>`;
    const xs = x1 - x0 > 40 ? 10 : 5;
    for (let a = Math.ceil(x0 / xs) * xs; a <= x1; a += xs) g += `<text x="${sx(a)}" y="${H - 10}" text-anchor="middle">${a}</text>`;
    const line = P.map((p, i) => (i ? 'L' : 'M') + sx(p.x).toFixed(1) + ' ' + sy(p.y).toFixed(1)).join(' ');
    g += `<path d="${line} L${sx(x1)} ${sy(0)} L${sx(x0)} ${sy(0)} Z" fill="var(--warn)" fill-opacity=".22"/><path d="${line}" fill="none" stroke="var(--warn-text)" stroke-width="2.5"/>`;
    g += `<line x1="${pl}" x2="${Wd - pr}" y1="${sy(target)}" y2="${sy(target)}" stroke="var(--sign)" stroke-width="2" stroke-dasharray="6 5"/><text x="${pl + 6}" y="${sy(target) - 6}" style="fill:var(--sign);font-weight:600">${t.target}</text>`;
    if (free !== null) { const fx = sx(age + free), fy = sy(pts[free].y); g += `<circle cx="${fx}" cy="${fy}" r="5" fill="var(--sign)" stroke="var(--card)" stroke-width="2"/><text x="${fx - 8}" y="${fy + 18}" text-anchor="end" style="fill:var(--ink);font-weight:600">${t.freeAt(age + free)}</text>`; }
    g += `<line x1="${pl}" x2="${Wd - pr}" y1="${sy(0)}" y2="${sy(0)}" stroke="var(--muted)" stroke-width="1"/>`;
    $('#sl-chart', el).innerHTML = g;
  };
  el.addEventListener('input', upd); upd();
};

function logSlider(id, label, min, max, val, fmt){
  return { html:`<div class="slider"><label for="${id}">${label}</label><output id="${id}-o"></output><input id="${id}" type="range" min="0" max="1000" value="${Math.round((Math.log10(val) - Math.log10(min)) / (Math.log10(max) - Math.log10(min)) * 1000)}"></div>`,
    get(el){ const t = +$('#' + id, el).value / 1000; const raw = Math.pow(10, Math.log10(min) + t * (Math.log10(max) - Math.log10(min))); const m = Math.pow(10, Math.floor(Math.log10(raw)) - 1); const v = Math.round(raw / m) * m; $('#' + id + '-o', el).textContent = fmt(v); return v; } };
}

WIDGETS.fastcalc = el => {
  const t = T().w.fast, u = logSlider('fc-units', t.units, 10, 2e6, 20000, num), p = logSlider('fc-profit', t.profit, 1, 20000, 25, money);
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="two"><div>${u.html}${p.html}
    <div class="slider"><label for="fc-mult">${t.mult}</label><output id="fc-mult-o"></output><input id="fc-mult" type="range" min="1" max="10" step="0.5" value="3"></div>
    <div class="field"><label for="fc-sal">${t.salary}</label><input id="fc-sal" type="number" min="1000" step="1000" value="60000"></div></div>
  <div><div class="stats" id="fc-stats" style="margin-top:0"></div><div class="bars" id="fc-bars"></div></div></div>
  <p class="w-note">${t.note}</p>`;
  const upd = () => {
    const U = u.get(el), P = p.get(el), M = +$('#fc-mult', el).value, sal = Math.max(1000, +$('#fc-sal', el).value || 60000);
    $('#fc-mult-o', el).textContent = M.toLocaleString(loc()) + '×';
    const np = U * P, av = np * M, w = np + av, career = sal * 40, yrs = w / sal;
    $('#fc-stats', el).innerHTML = `<div class="stat"><small>${t.stats[0]}</small><b>${money(np)}</b></div><div class="stat"><small>${t.stats[1]}</small><b>${money(av)}</b></div><div class="stat hl"><small>${t.stats[2]}</small><b>${money(w)}</b></div><div class="stat lo"><small>${t.stats[3]}</small><b>${yrs >= 1000 ? num(1000) + '+' : yrs.toLocaleString(loc(), { maximumFractionDigits: yrs < 10 ? 1 : 0 })}</b></div>`;
    const mx = Math.max(w, career);
    $('#fc-bars', el).innerHTML = `<div class="bar-row"><small>${t.barF} <b>${money(w)}</b></small><div class="bar-track"><div class="bar-fill" style="width:${w / mx * 100}%;background:var(--sign)"></div></div></div>
      <div class="bar-row"><small>${t.barS} <b>${money(career)}</b></small><div class="bar-track"><div class="bar-fill" style="width:${career / mx * 100}%;background:var(--warn)"></div></div></div>`;
  };
  el.addEventListener('input', upd); upd();
};

WIDGETS.effection = el => {
  const t = T().w.eff, L = logSlider('ef-lives', t.lives, 1, 1e7, 1, num), V = logSlider('ef-val', t.value, 1, 1e7, 60000, money);
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="presets">${t.presets.map((p, i) => `<button type="button" class="chip" data-p="${i}">${p}</button>`).join('')}</div>
  <div class="two"><div>${L.html}${V.html}<div class="stats" id="ef-stats"></div></div>
  <svg class="chart" id="ef-chart" viewBox="0 0 360 300" role="img" aria-label="${t.aria}"></svg></div>
  <p class="w-note">${t.note}</p>`;
  const setLog = (id, min, max, v) => { $('#' + id, el).value = Math.round((Math.log10(v) - Math.log10(min)) / (Math.log10(max) - Math.log10(min)) * 1000); };
  const upd = () => {
    const l = L.get(el), v = V.get(el), e = l * v, ll = Math.log10(l), lv = Math.log10(v);
    $('#ef-stats', el).innerHTML = `<div class="stat hl"><small>${t.stats[0]}</small><b>${money(e)}</b></div><div class="stat"><small>${t.stats[1]}</small><b>${t.lean[l <= 1 ? 0 : ll > lv + 1 ? 1 : lv > ll + 1 ? 2 : 3]}</b></div>`;
    const W0 = 360, H = 300, pl = 44, pr = 10, pt = 10, pb = 34, X = k => pl + k / 7 * (W0 - pl - pr), Y = k => H - pb - k / 7 * (H - pt - pb);
    const short = k => ['1','10','100','1K','10K','100K','1M','10M'][k];
    let g = `<rect x="${pl}" y="${pt}" width="${W0 - pl - pr}" height="${H - pt - pb}" fill="var(--paper)"/>`;
    for (let k = 0; k <= 7; k++) g += `<text x="${X(k)}" y="${H - 18}" text-anchor="middle">${short(k)}</text><text x="${pl - 6}" y="${Y(k) + 4}" text-anchor="end">$${short(k)}</text>`;
    [3, 6, 9, 12].forEach((k, n) => { const a = Math.max(0, k - 7), b = Math.min(7, k); g += `<line x1="${X(a)}" y1="${Y(k - a)}" x2="${X(b)}" y2="${Y(k - b)}" stroke="var(--muted)" stroke-dasharray="4 5" stroke-width="1"/><text x="${X(b) - 4}" y="${Y(k - b) - 6}" text-anchor="end" style="fill:var(--ink)">${t.iso[n]}</text>`; });
    EFFECT_PRESETS.forEach(p => { g += `<circle cx="${X(Math.log10(p[0]))}" cy="${Y(Math.log10(p[1]))}" r="3.5" fill="var(--muted)"/>`; });
    g += `<text x="${(pl + W0 - pr) / 2}" y="${H - 2}" text-anchor="middle">${t.axis}</text>`;
    g += `<circle cx="${X(ll)}" cy="${Y(lv)}" r="8" fill="var(--sign)" stroke="var(--card)" stroke-width="3"/>`;
    $('#ef-chart', el).innerHTML = g;
  };
  el.addEventListener('input', upd);
  el.addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b) return; const p = EFFECT_PRESETS[+b.dataset.p]; setLog('ef-lives', 1, 1e7, p[0]); setLog('ef-val', 1, 1e7, p[1]); upd(); });
  upd();
};

WIDGETS.moneysys = el => {
  const t = T().w.money, sum = logSlider('ms-sum', t.sum, 1e5, 5e7, 5e6, money);
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="two"><div>${sum.html}<div class="slider"><label for="ms-y">${t.yield}</label><output id="ms-y-o"></output><input id="ms-y" type="range" min="1" max="8" step="0.25" value="4"></div></div>
  <div class="stats" id="ms-stats" style="margin-top:0"></div></div>
  <p class="w-note">${t.note}</p>`;
  const upd = () => { const s = sum.get(el), y = +$('#ms-y', el).value; $('#ms-y-o', el).textContent = y.toLocaleString(loc(), { maximumFractionDigits: 2 }) + '%'; const a = s * y / 100;
    $('#ms-stats', el).innerHTML = `<div class="stat hl"><small>${t.stats[0]}</small><b>${money(a)}</b></div><div class="stat"><small>${t.stats[1]}</small><b>${money(a / 12)}</b></div><div class="stat lo"><small>${t.stats[2]}</small><b>0</b></div>`; };
  el.addEventListener('input', upd); upd();
};

WIDGETS.timeaudit = el => {
  const t = T().w.time;
  const cats = [['sleep',56,'life'],['job',40,'sold'],['commute',5,'sold'],['recover',12,'sold'],['screens',24,'consume'],['family',16,'life'],['learn',2,'build'],['build',1,'build']];
  const col = { sold:'var(--warn)', consume:'var(--stop)', build:'var(--sign)', life:'var(--route)', other:'var(--rule)' };
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="audit">${cats.map((c, i) => `<div class="field"><label for="ta-${c[0]}">${t.cats[i]}</label><input id="ta-${c[0]}" type="number" min="0" max="168" step="1" value="${c[1]}"></div>`).join('')}</div>
  <div class="stack" id="ta-stack" aria-hidden="true"></div>
  <div class="legend">${['sold','consume','build','life','other'].map((k, i) => `<span><i style="background:${col[k]}"></i>${t.legend[i]}</span>`).join('')}</div>
  <div class="out-card" id="ta-out"></div>
  <p class="w-note">${t.note}</p>`;
  const upd = () => {
    const h = {}; cats.forEach(c => h[c[0]] = Math.max(0, +$('#ta-' + c[0], el).value || 0));
    const g = { sold:0, consume:0, build:0, life:0 }; cats.forEach(c => g[c[2]] += h[c[0]]);
    const total = g.sold + g.consume + g.build + g.life, other = Math.max(0, 168 - total), base = Math.max(168, total);
    $('#ta-stack', el).innerHTML = ['sold','consume','build','life'].map(k => `<div style="flex:0 0 ${g[k] / base * 100}%;background:${col[k]}"></div>`).join('') + `<div style="flex:0 0 ${other / base * 100}%;background:${col.other}"></div>`;
    const moved = Math.round(h.screens / 2) * 52;
    $('#ta-out', el).innerHTML = total > 168 ? t.over(total) : t.out(g.sold, g.consume, g.build, num(moved), Math.round(moved / 40));
  };
  el.addEventListener('input', upd); upd();
};

WIDGETS.cents = el => {
  const t = T().w.cents;
  let cur = 'saas';
  const scores = k => S.cents[k] || CENTS_PRESETS[k].slice();
  const paint = () => {
    const sc = scores(cur), filled = sc.filter(x => x !== null), total = filled.reduce((a, b) => a + b, 0);
    const v = filled.length < 5 ? t.v.rate : sc[2] === 0 ? t.v.noneed : total >= 9 ? t.v.fast : total >= 6 ? t.v.pot : total >= 3 ? t.v.job : t.v.trap;
    const notes = t.presets[cur][1];
    el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
    <div class="presets">${Object.keys(CENTS_PRESETS).map(k => `<button type="button" class="chip ${k === cur ? 'sel' : ''}" data-preset="${k}" aria-pressed="${k === cur}">${t.presets[k][0]}</button>`).join('')}</div>
    <div>${t.names.map((nm, i) => `<div class="cents-row"><div class="letter" aria-hidden="true">${'CENTS'[i]}</div><div><strong>${nm}</strong><span>${notes[i]}</span></div>
      <div class="seg" role="group" aria-label="${nm}">${[2, 1, 0].map((val, j) => `<button type="button" data-c="${i}" data-v="${val}" aria-pressed="${sc[i] === val}">${t.seg[j]}</button>`).join('')}</div></div>`).join('')}</div>
    <div class="verdict"><div class="big">${filled.length === 5 ? total : '–'}<small style="font-size:14px;color:var(--muted)">/10</small></div><div><strong>${v[0]}</strong><span>${v[1]}</span></div></div>
    ${S.cents[cur] ? `<p class="w-note"><button type="button" class="btn small" data-restore>${t.restore}</button></p>` : ''}`;
  };
  el.addEventListener('click', e => {
    const pr = e.target.closest('[data-preset]'); if (pr) { cur = pr.dataset.preset; return paint(); }
    if (e.target.closest('[data-restore]')) { delete S.cents[cur]; save(); return paint(); }
    const b = e.target.closest('[data-c]'); if (!b) return;
    const sc = scores(cur); sc[+b.dataset.c] = +b.dataset.v; S.cents[cur] = sc; save(); paint();
    el.querySelector(`[data-c="${b.dataset.c}"][data-v="${b.dataset.v}"]`).focus();
  });
  paint();
};

WIDGETS.opportunity = el => {
  const t = T().w.opp, ids = ['op-who','op-pain','op-now'];
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="grid-form">${ids.map((id, i) => `<div class="field"><label for="${id}">${t.fields[i]}</label><input id="${id}" type="text" value="${esc(t.defaults[i])}"></div>`).join('')}</div>
  <div class="out-card" id="op-out"></div>
  <p class="w-note">${t.note}</p>`;
  const upd = () => {
    const [who, pain, now] = ids.map((id, i) => $('#' + id, el).value.trim() || t.fallback[i]);
    $('#op-out', el).innerHTML = t.out(esc(who.charAt(0).toUpperCase() + who.slice(1)), esc(pain), esc(now)) + `<ul>${t.list.map(li => `<li>${li}</li>`).join('')}</ul>`;
  };
  el.addEventListener('input', upd); upd();
};

WIDGETS.plan = el => {
  const t = T().w.plan, p = S.plan;
  const opts = (list, val) => list.map((s, i) => `<option value="${i}" ${String(val ?? '0') === String(i) ? 'selected' : ''}>${s}</option>`).join('');
  el.innerHTML = `<p class="w-label">${t.label}</p><h4 class="w-title">${t.title}</h4>
  <div class="grid-form" style="grid-template-columns:minmax(0,1fr)">
    <div class="field"><label for="pl-need">${t.need}</label><textarea id="pl-need" data-k="need" placeholder="${esc(t.needPh)}">${esc(p.need)}</textarea></div>
  </div>
  <div class="grid-form" style="margin-top:14px">
    <div class="field"><label for="pl-seed">${t.seed}</label><select id="pl-seed" data-k="seed">${opts(t.seeds, p.seed)}</select></div>
    <div class="field"><label for="pl-weak">${t.weak}</label><select id="pl-weak" data-k="weak">${opts(t.cmds, p.weak)}</select></div>
    <div class="field"><label for="pl-hours">${t.hours}</label><input id="pl-hours" data-k="hours" type="number" min="0" max="80" value="${esc(p.hours ?? '')}" placeholder="10"></div>
  </div>
  <div class="grid-form" style="grid-template-columns:minmax(0,1fr);margin-top:14px">
    <div class="field"><label for="pl-fix">${t.fix}</label><input id="pl-fix" data-k="fix" type="text" value="${esc(p.fix)}" placeholder="${esc(t.fixPh)}"></div>
    <div class="field"><label for="pl-act">${t.act}</label><input id="pl-act" data-k="act" type="text" value="${esc(p.act)}" placeholder="${esc(t.actPh)}"></div>
  </div>
  <p class="w-note"><span class="saved" id="pl-saved" hidden>${t.saved}</span></p>`;
  let timer;
  el.addEventListener('input', e => { const k = e.target.dataset.k; if (!k) return; S.plan[k] = e.target.value; save(); const s = $('#pl-saved', el); s.hidden = false; clearTimeout(timer); timer = setTimeout(() => s.hidden = true, 1600); });
};

/* ---------- Quiz ---------- */
function mountQuiz(m, box){
  const ui = T().ui, ans = S.quiz[m.id] || (S.quiz[m.id] = {}), pass = PASS(m), mods = MODULES();
  box.innerHTML = m.quiz.map((q, i) => `<fieldset class="q" data-i="${i}"><legend><span class="qn">Q${i + 1}</span>${q.q}</legend><div class="opts">${q.o.map((o, j) => `<button type="button" class="opt" data-j="${j}">${o}</button>`).join('')}</div><p class="why" hidden></p></fieldset>`).join('') + `<div class="quiz-score" aria-live="polite"></div>`;
  const paint = () => {
    $$('.q', box).forEach(fs => {
      const i = +fs.dataset.i, q = m.quiz[i], a = ans[i], why = $('.why', fs);
      $$('.opt', fs).forEach(b => { const j = +b.dataset.j; b.className = 'opt'; b.disabled = a != null; if (a != null) { if (j === q.a) b.classList.add('right'); else if (j === a) b.classList.add('wrong'); else b.classList.add('dim'); } });
      why.hidden = a == null; if (a != null) why.innerHTML = `<b class="${a === q.a ? 'good' : 'bad'}">${a === q.a ? ui.correct : ui.notQuite}</b> ${q.why}`;
    });
    const n = Object.keys(ans).length, right = m.quiz.filter((q, i) => ans[i] === q.a).length, sc = $('.quiz-score', box);
    if (n < m.quiz.length) { sc.innerHTML = ''; return; }
    const ok = right >= pass;
    if (ok && !S.done[m.id]) { S.done[m.id] = true; save(); refreshChrome(); if (m.final) renderLicense(); }
    const next = mods[mods.findIndex(x => x.id === m.id) + 1];
    sc.innerHTML = `<span>${ui.score(right, m.quiz.length)} · ${ok ? (m.final ? ui.licEarned : ui.exitCleared) : ui.need(pass)}</span>${ok && next ? `<a class="btn small primary" href="#${next.id}">${ui.continueTo(next.exit)}</a>` : ''}<button type="button" class="btn small" data-retake>${ui.retake}</button>`;
  };
  box.addEventListener('click', e => {
    if (e.target.closest('[data-retake]')) { Object.keys(ans).forEach(k => delete ans[k]); save(); paint(); $('.opt', box).focus(); return; }
    const b = e.target.closest('.opt'); if (!b || b.disabled) return;
    const i = +b.closest('.q').dataset.i; ans[i] = +b.dataset.j; save(); paint();
  });
  paint();
}

/* ---------- License ---------- */
function renderLicense(){
  const box = $('#license'); if (!box) return;
  const L = T().ui.lic;
  if (!S.done['final-exam']) { box.innerHTML = `<div class="lic-locked">${L.locked}</div>`; return; }
  const fm = META.find(m => m.final), ans = S.quiz['final-exam'] || {}, right = fm.a.filter((a, i) => ans[i] === a).length;
  const cleared = META.filter(m => !m.final && S.done[m.id]).length;
  const d = S.issued || (S.issued = new Date().toISOString().slice(0, 10)); save();
  const no = 'FL-' + d.replace(/-/g, '').slice(2) + '-' + String(right) + String(cleared);
  const seedIdx = +S.plan.seed || 0, seedName = seedIdx ? T().w.plan.seeds[seedIdx] : '';
  box.innerHTML = `<div class="field" style="max-width:520px"><label for="lic-name">${L.nameLbl}</label><input id="lic-name" type="text" value="${esc(S.name)}" placeholder="${L.namePh}"></div>
  <div class="license" role="img" aria-label="${L.aria}">
    <div class="lic-top"><span>${L.top[0]}</span><span>${L.top[1]}</span></div>
    <div class="lic-body"><div class="lic-photo">${shield('F')}</div>
      <div class="lic-fields">
        <div class="full"><small>${L.name}</small><b class="lic-name" id="lic-name-out">${esc(S.name) || L.namePh}</b></div>
        <div><small>${L.cls}</small><b>${L.clsVal}</b></div><div><small>${L.no}</small><b>${no}</b></div>
        <div><small>${L.issued}</small><b>${d}</b></div><div><small>${L.score}</small><b>${right}/10</b></div>
        <div><small>${L.exits}</small><b>${cleared}/8</b></div><div><small>${L.endorse}</small><b>C·E·N·T·S</b></div>
        <div class="full"><small>${L.tree}</small><b>${esc(seedName) || L.treeNone}</b></div>
        <div class="full"><small>${L.act}</small><b>${esc(S.plan.act) || L.actNone}</b></div>
      </div></div></div>`;
  $('#lic-name', box).addEventListener('input', e => { S.name = e.target.value; save(); $('#lic-name-out').textContent = S.name || L.namePh; });
}

/* ---------- Views ---------- */
function applyChrome(){
  const ui = T().ui;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en';
  $('#brand-name').textContent = ui.brand;
  $('#brand').setAttribute('aria-label', ui.homeAria);
  $('#odo-label').textContent = ui.exitsCleared;
  $('#route-btn').textContent = ui.route;
  $('#rail').setAttribute('aria-label', ui.courseRoute);
  $('#rail-label').textContent = ui.routeMap;
  $('#rail-note').textContent = ui.railNote;
  $('#foot-text').innerHTML = ui.foot;
  $('#reset').textContent = ui.reset;
  $('#lang').setAttribute('aria-label', ui.langAria);
  $('#lang').innerHTML = Object.entries(LANGS).map(([k, v]) => `<button type="button" data-lang="${k}" lang="${k}" aria-pressed="${k === lang}" title="${v.name}">${v.label}</button>`).join('');
}

function refreshChrome(){
  const ui = T().ui, mods = MODULES(), n = mods.filter(m => S.done[m.id]).length;
  $('#odo').innerHTML = String(n).padStart(2, '0').split('').map(d => `<b>${d}</b>`).join('') + '<span style="margin:0 4px">/</span>' + '09'.split('').map(d => `<b>${d}</b>`).join('');
  $('#odo-bar').style.width = (n / mods.length * 100) + '%';
  const cur = location.hash.slice(1) || 'start';
  $('#road').innerHTML = mods.map(m => `<li><a class="exit-link" href="#${m.id}" ${cur === m.id ? 'aria-current="page"' : ''}>${shield(m.exit)}<span><small>${ui.exit} ${m.exit} · ${m.mins} ${ui.min}</small><strong>${m.title}</strong></span><span class="tick ${S.done[m.id] ? 'on' : ''}" aria-label="${S.done[m.id] ? ui.cleared : ui.notCleared}"></span></a></li>`).join('');
}

function home(){
  const ui = T().ui, mods = MODULES(), nextUp = mods.find(m => !S.done[m.id]), started = mods.some(m => S.done[m.id]);
  const arrows = [-135, 45, 0];
  return `<section class="hero">
    <div class="gantry" role="img" aria-label="${ui.gantryAria}">
      ${ui.signs.map((s, i) => `<div class="panel"><span class="tab">${ui.exit.toUpperCase()} ${i + 2}</span><span class="txt"><b>${s[0]}</b><small>${s[1]}</small></span>${arrow(arrows[i])}</div>`).join('')}
    </div>
    <h1>${ui.brand}</h1>
    <p class="lede">${ui.lede}</p>
    <div class="actions">${nextUp ? `<a class="btn primary" href="#${nextUp.id}">${started ? ui.cont(nextUp.exit) : ui.start}</a>` : `<a class="btn primary" href="#final-exam">${ui.viewLicense}</a>`}<span style="color:var(--muted)">${ui.meta}</span></div>
  </section>
  <h2 class="section-h">${ui.routeH}</h2>
  <p class="section-sub">${ui.routeSub}</p>
  <ol class="trip">${mods.map(m => `<li><a href="#${m.id}">${shield(m.exit)}<div><strong>${m.title}</strong><span>${m.sub}</span><em class="${S.done[m.id] ? 'done' : ''}">${S.done[m.id] ? ui.cleared : m.mins + ' ' + ui.min}</em></div></a></li>`).join('')}</ol>
  <h2 class="section-h">${ui.howH}</h2>
  <div class="about">${ui.how.map(([h, p]) => `<div><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>`;
}

function lesson(m, mods){
  const ui = T().ui, i = mods.findIndex(x => x.id === m.id), prev = mods[i - 1], next = mods[i + 1];
  return `<article>
    <header class="lesson-head">${shield(m.exit)}<div><p class="eyebrow">${ui.exitOf(m.exit, mods.length, m.mins)}${S.done[m.id] ? ' · ' + ui.cleared : ''}</p><h1>${m.title}</h1><p class="sub">${m.sub}</p></div></header>
    <div class="prose">${m.body}</div>
    <section class="checkpoint" aria-labelledby="cp-h"><h2 id="cp-h">${m.final ? ui.finalExam : ui.checkpoint}</h2><p>${m.final ? ui.finalNote : ui.cpNote}</p><div id="quiz"></div></section>
    ${m.final ? `<section class="checkpoint" aria-labelledby="lic-h"><h2 id="lic-h">${ui.yourLicense}</h2><p>${ui.licNote}</p><div id="license"></div></section>` : ''}
    <nav class="pager" aria-label="${ui.navAria}">${prev ? `<a href="#${prev.id}"><small>← ${ui.exit} ${prev.exit}</small><strong>${prev.title}</strong></a>` : `<a href="#start"><small>← ${ui.startLbl}</small><strong>${ui.overview}</strong></a>`}${next ? `<a class="next" href="#${next.id}"><small>${ui.exit} ${next.exit} →</small><strong>${next.title}</strong></a>` : ''}</nav>
  </article>`;
}

function route(keepScroll){
  const mods = MODULES(), id = location.hash.slice(1), m = mods.find(x => x.id === id), view = $('#view');
  view.innerHTML = m ? lesson(m, mods) : home();
  if (m) {
    $$('[data-widget]', view).forEach(w => WIDGETS[w.dataset.widget]?.(w));
    mountQuiz(m, $('#quiz', view));
    if (m.final) renderLicense();
  }
  document.body.classList.remove('rail-open'); $('#route-btn').setAttribute('aria-expanded', 'false');
  refreshChrome();
  if (!keepScroll) window.scrollTo(0, 0);
  document.title = m ? `${m.title} · ${T().ui.brand}` : T().ui.brand;
}

$('#lang').addEventListener('click', e => {
  const b = e.target.closest('[data-lang]'); if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang; S.lang = lang; save();
  const y = window.scrollY; applyChrome(); route(true); window.scrollTo(0, y);
  $(`#lang [data-lang="${lang}"]`).focus();
});
$('#route-btn').addEventListener('click', () => { const o = document.body.classList.toggle('rail-open'); $('#route-btn').setAttribute('aria-expanded', String(o)); if (o) window.scrollTo(0, 0); });
let resetArmed = false;
$('#reset').addEventListener('click', e => {
  const ui = T().ui;
  if (!resetArmed) { resetArmed = true; e.target.textContent = ui.resetConfirm; setTimeout(() => { resetArmed = false; e.target.textContent = T().ui.reset; }, 3000); return; }
  Object.assign(S, { done:{}, quiz:{}, plan:{}, name:'', sort:{}, seeds:{}, cents:{} }); delete S.issued; save(); resetArmed = false; e.target.textContent = ui.resetDone; route();
});
window.addEventListener('hashchange', () => route());
applyChrome();
route();
