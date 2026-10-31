const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const KEY = 'fastlane-road-school-v1';
function loadState(){ try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
const S = Object.assign({ done: {}, quiz: {}, plan: {}, name: '', sort: {}, seeds: {}, cents: {} }, loadState());

const LANGS = { en:{ label:'EN', name:'English', locale:'en-US' }, pt:{ label:'PT', name:'Português', locale:'pt-BR' }, es:{ label:'ES', name:'Español', locale:'es-419' } };
let lang = (() => {
  if (LANGS[S.lang]) return S.lang;
  const n = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGS[n] ? n : 'en';
})();
const loc = () => LANGS[lang].locale;
const T = () => I18N[lang];

function money(n){
  const a = Math.abs(n), f = (v, d) => v.toLocaleString(loc(), { maximumFractionDigits: d });
  if (lang === 'pt') {
    if (a >= 1e9) return '$' + f(n / 1e9, a >= 1e10 ? 0 : 2) + ' bi';
    if (a >= 1e6) return '$' + f(n / 1e6, a >= 1e7 ? 1 : 2) + ' mi';
    if (a >= 1e4) return '$' + f(n / 1e3, 0) + ' mil';
  } else if (lang === 'es') {
    if (a >= 1e9) return '$' + f(n / 1e6, 0) + ' M';
    if (a >= 1e6) return '$' + f(n / 1e6, a >= 1e7 ? 1 : 2) + ' M';
    if (a >= 1e4) return '$' + f(n / 1e3, 0) + ' mil';
  } else {
    if (a >= 1e9) return '$' + f(n / 1e9, a >= 1e10 ? 0 : 2) + 'B';
    if (a >= 1e6) return '$' + f(n / 1e6, a >= 1e7 ? 1 : 2) + 'M';
    if (a >= 1e4) return '$' + f(n / 1e3, 0) + 'K';
  }
  return '$' + f(n, 0);
}
const num = n => Math.round(n).toLocaleString(loc());

function shield(n){
  return `<svg class="shield" viewBox="0 0 40 44" aria-hidden="true"><path d="M5 3C13 6 27 6 35 3C39 12 40 20 37 28C34 35 27 39 20 42C13 39 6 35 3 28C0 20 1 12 5 3Z" fill="var(--shield-blue)" stroke="#fff" stroke-width="2.2"/><path d="M5.6 4.6C13 7.4 27 7.4 34.4 4.6C35.6 7.6 36.4 10.4 36.8 13L3.2 13C3.6 10.4 4.4 7.6 5.6 4.6Z" fill="var(--shield-red)"/><text x="20" y="32.5" text-anchor="middle" font-family="Overpass,sans-serif" font-weight="900" font-size="17" fill="#fff">${n}</text></svg>`;
}
function arrow(deg){
  return `<svg viewBox="0 0 34 34" aria-hidden="true" style="transform:rotate(${deg}deg)"><path d="M17 3 L29 16 H21 V31 H13 V16 H5 Z" fill="#fff"/></svg>`;
}
const key = (title, text) => `<div class="callout"><div class="ico key" aria-hidden="true">↑</div><div><b>${title}</b><p>${text}</p></div></div>`;
const warn = (title, text) => `<div class="callout"><div class="ico warn" aria-hidden="true"><span>!</span></div><div><b>${title}</b><p>${text}</p></div></div>`;
const W = name => `<div class="widget" data-widget="${name}"></div>`;
const eq = (cls, label, main, sub) => `<div class="eq ${cls}"><small>${label}</small><strong>${main}</strong><span>${sub}</span></div>`;
const cmd = (l, h, p, flagsLabel, flags) => `<div class="cmd"><div class="letter" aria-hidden="true">${l}</div><div><h4>${h}</h4><p>${p}</p><p class="flags"><b>${flagsLabel}</b> · ${flags}</p></div></div>`;
const seed = (h, b, p) => `<div class="seed"><h4><i aria-hidden="true"></i>${h}</h4><p><b>${b}</b> ${p}</p></div>`;

/* ---------- Structure shared by every language (answer keys live here) ---------- */
const META = [
  { id:'road-trip', exit:1, mins:8, a:[0,2,1] },
  { id:'sidewalk', exit:2, mins:7, a:[1,2,1] },
  { id:'slowlane', exit:3, mins:10, a:[1,1,1] },
  { id:'fastlane', exit:4, mins:12, a:[1,1,1] },
  { id:'driver', exit:5, mins:8, a:[2,1,1] },
  { id:'cents', exit:6, mins:11, a:[2,1,1] },
  { id:'money-trees', exit:7, mins:8, a:[1,1,0] },
  { id:'accelerate', exit:8, mins:10, a:[1,1,1] },
  { id:'final-exam', exit:9, mins:6, final:true, a:[0,1,1,1,2,1,1,0,1,0] }
];
const PASS = m => m.final ? 8 : 2;
const SORT_KEY = [0,1,2,0,1,2,0,1,2];
const SEED_KEY = [1,0,2,3,4,0,1,2,0];
const CENTS_PRESETS = { saas:[2,2,2,2,2], coffee:[2,1,2,0,0], mlm:[0,0,1,1,1], freelance:[2,1,2,0,0], rental:[2,1,2,2,1], mine:[null,null,null,null,null] };
const EFFECT_PRESETS = [[1,60000],[20,5000],[30000,10],[300000,5],[1000000,3],[40,500000]];
const EN_SEEDS = ['', 'Rental system', 'Computer system', 'Content system', 'Distribution system', 'Human resource system'];
const EN_CMDS = ['', 'Control', 'Entry', 'Need', 'Time', 'Scale'];
// Plans saved before translation stored English labels; convert them to indexes once.
if (S.plan.seed && isNaN(+S.plan.seed)) S.plan.seed = String(Math.max(0, EN_SEEDS.indexOf(S.plan.seed)));
if (S.plan.weak && isNaN(+S.plan.weak)) S.plan.weak = String(Math.max(0, EN_CMDS.indexOf(S.plan.weak)));

