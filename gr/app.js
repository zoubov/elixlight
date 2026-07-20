// ================================================================
//  RENDER ENGINE — Design-agnostic. Only touches the DOM.
// ================================================================
let lang = 'en';
let qi = 0;
let revealed = false;
let si = 0;
let animInterval = null;

function t(keyPath) {
  const keys = keyPath.split('.');
  let val = i18n[lang];
  for (const k of keys) {
    if (val == null) return '';
    val = val[k];
  }
  return val;
}

function renderHeroServices() {
  const container = document.getElementById('heroServices');
  const services = t('hero.services');
  const cat1 = t('hero.cat1Label');
  const cat2 = t('hero.cat2Label');

  let html = '<p class="s-super" onclick="goCat(\'homehotel\')">' + cat1 + '</p>';
  html += renderServiceItem(services[0]);
  html += renderServiceItem(services[1]);
  html += '<p class="s-super" onclick="goCat(\'project\')">' + cat2 + '</p>';
  html += renderServiceItem(services[2]);
  html += renderServiceItem(services[3]);

  container.innerHTML = html;
}

function renderServiceItem(svc) {
  return '<div class="s-item" onclick="toggleDesc(this)">' +
    '<div class="s-row"><span class="s-name">' + svc.name + '</span>' +
    '<span class="s-price">' + svc.price + '</span></div>' +
    '<div class="s-desc">' + svc.desc + '<br><a class="s-contact" href="mailto:hello@elixlight.com">' + svc.contact + '</a></div></div>';
}

function toggleDesc(item) {
  const desc = item.querySelector('.s-desc');
  const isOpen = desc.classList.contains('open');
  document.querySelectorAll('.s-desc').forEach(d => d.classList.remove('open'));
  if (!isOpen) desc.classList.add('open');
}

function renderQA() {
  document.getElementById('qLabel').textContent = t('qa.label');
  document.getElementById('qbtn').textContent = t('qa.revealBtn');
  document.getElementById('qnext').textContent = t('qa.nextBtn');
  document.getElementById('qsci').textContent = t('qa.sciBtn');
  qi = Math.floor(Math.random() * t('qa.questions').length);
  loadQ(qi);
}

function loadQ(i) {
  const questions = t('qa.questions');
  document.getElementById('qbelief').textContent = questions[i].b;
  document.getElementById('qanswer').textContent = '';
  document.getElementById('qanswer').classList.remove('show');
  document.getElementById('qbtn').style.display = 'inline-block';
  document.getElementById('qactions').classList.remove('show');
  revealed = false;
}

function reveal() {
  const questions = t('qa.questions');
  document.getElementById('qanswer').textContent = questions[qi].a;
  document.getElementById('qanswer').classList.add('show');
  document.getElementById('qbtn').style.display = 'none';
  document.getElementById('qactions').classList.add('show');
  revealed = true;
}

function nextQ() {
  const questions = t('qa.questions');
  qi = (qi + 1) % questions.length;
  loadQ(qi);
}

function renderScience() {
  document.getElementById('sciTitle').textContent = t('science.title');
  const s = i18n[lang].science;

  let html = '';
  s.paragraphs.forEach(p => html += '<p>' + p + '</p>');
  html += '<div class="sci-pull">' + s.pullQuote + '</div>';
  s.postPull.forEach(p => html += '<p>' + p + '</p>');
  html += '<p><strong>' + s.hormonesTitle + '</strong></p>';

  html += '<div class="sci-hormones">';
  s.hormones.forEach(h => {
    html += '<div class="sci-h-row"><div class="sci-h-name">' + h.name + '</div>' +
      '<div class="sci-h-desc">' + h.desc + '</div></div>';
  });
  html += '</div>';

  s.closing.forEach(p => html += '<p>' + p + '</p>');
  html += '<div class="sci-end"><p style="font-size:13px;color:var(--text-muted);">' +
    s.cta + '<a href="mailto:hello@elixlight.com" style="color:var(--accent)">hello@elixlight.com</a></p></div>';

  document.getElementById('sciBody').innerHTML = html;
}

function renderCat(pageKey) {
  const data = t(pageKey);
  document.getElementById(pageKey + 'Title').textContent = data.title;
  document.getElementById(pageKey + 'Intro').textContent = data.intro;

  let html = '';
  data.services.forEach(svc => {
    html += '<div class="cat-service"><div class="cat-service-header">' +
      '<span class="cat-service-name">' + svc.name + '</span>' +
      '<span class="cat-service-price">' + svc.price + '</span></div>' +
      '<p class="cat-service-body">' + svc.body + '</p>' +
      '<p class="cat-service-meta">' + svc.meta + '</p></div>';
  });
  document.getElementById(pageKey + 'Services').innerHTML = html;
  document.getElementById(pageKey + 'Footer').innerHTML = data.footer;
}

// ========== ROOM ANIMATION ==========
function startRoomAnim() {
  if (animInterval) clearInterval(animInterval);
  si = 0;
  const states = t('room.states');
  applyState(states[0]);
  animInterval = setInterval(() => {
    si = (si + 1) % states.length;
    applyState(states[si]);
  }, 2200);
}

function applyState(s) {
  document.getElementById('box').style.background = s.b;
  document.getElementById('dot').style.background = s.d;
  document.getElementById('dot').style.boxShadow = s.g;
  document.getElementById('vtime').textContent = s.t;
  document.getElementById('vstate').textContent = s.s;
}

// ========== NAVIGATION ==========
function hideAll() {
  document.getElementById('homeContent').classList.add('hidden');
  document.getElementById('sciPage').classList.remove('active');
  document.getElementById('catHomehotel').classList.remove('active');
  document.getElementById('catProject').classList.remove('active');
}

function goHome() {
  hideAll();
  document.getElementById('homeContent').classList.remove('hidden');
  window.scrollTo(0, 0);
}

function goScience() {
  hideAll();
  document.getElementById('sciPage').classList.add('active');
  window.scrollTo(0, 0);
}

function goCat(cat) {
  hideAll();
  if (cat === 'homehotel') document.getElementById('catHomehotel').classList.add('active');
  if (cat === 'project') document.getElementById('catProject').classList.add('active');
  window.scrollTo(0, 0);
}

// ========== LANGUAGE SWITCH ==========
function toggleLang() {
  lang = lang === 'en' ? 'el' : 'en';
  document.getElementById('langBtn').textContent = lang === 'en' ? 'EL' : 'EN';
  document.documentElement.lang = i18n[lang].meta.lang;
  document.title = i18n[lang].meta.title;
  init();
}

function init() {
  document.getElementById('navTagline').textContent = t('nav.tagline');
  document.getElementById('navScience').textContent = t('nav.science');
  document.querySelectorAll('.sci-back, .cat-back').forEach(b => b.textContent = t('nav.back'));

  renderHeroServices();
  renderQA();
  renderScience();
  renderCat('catHomehotel');
  renderCat('catProject');
  startRoomAnim();
}

// ========== BOOT ==========
init();
