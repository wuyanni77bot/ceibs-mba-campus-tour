const stops = [
  {
    title: "Gate & Jinhe Tree",
    story: "Where CEIBS begins — and the idea of 合",
    photos: [
      { src: "assets/map-gate.png", alt: "Campus map showing the gate area", caption: "Map view · Gate area" },
      { src: "assets/gate.jpg", alt: "Main gate of CEIBS Shanghai campus", caption: "Main entrance" },
      { src: "assets/jinhe-tree.jpg", alt: "Jinhe Tree and plaque", caption: "Jinhe Tree" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <ul>
          <li>CEIBS was established in <b>1994</b> in Shanghai, as a joint initiative between the Chinese government and the European Union.</li>
          <li>The China–Europe connection has therefore been part of the school from the beginning.</li>
          <li>Today, CEIBS often describes itself through the positioning <b>“China Depth, Global Breadth”</b> and the motto <b>“Conscientiousness, Innovation and Excellence.”</b></li>
          <li>The Chinese idea of <b>合 (coming together)</b> is also a useful way to introduce CEIBS — different people, perspectives and cultures meeting in one place.</li>
        </ul>
      </section>
      <section class="guide-card"><h3>Jinhe Tree</h3>
        <p>The osmanthus tree here was donated by <b>EMBA 2003 Shanghai Class 3</b> when they graduated and was named the <b>Jinhe Tree</b>.</p>
        <p>More than twenty years later, the same class returned and donated RMB 1 million to the school, and the nearby courtyard at AC1 was named <b>Jinhe Garden</b>.</p>
        <div class="quote"><div class="cn">和而不同，美美与共</div><div style="margin-top:8px">Harmony without requiring everyone to be the same.</div></div>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>The management education collaboration behind CEIBS began even earlier, with a China–EU management education initiative dating back to <b>1984</b>.</p></section>`
  },
  {
    title: "AC1 & Auditorium / Classroom",
    story: "What learning at CEIBS looks like",
    photos: [
      { src: "assets/map-ac1-auditorium.png", alt: "Campus map showing AC1 and the Auditorium", caption: "Map view · AC1 & Auditorium" },
      { src: "assets/classroom-wide.jpg", alt: "Classroom at CEIBS", caption: "A typical classroom setting" },
      { src: "assets/classroom-group.jpg", alt: "Students in a classroom activity", caption: "Interactive learning" }
    ],
    essential: `
      <section class="guide-card"><h3>Learning format</h3>
        <p>CEIBS classrooms use a mix of faculty teaching, case discussion, group work, peer learning and interaction with business practitioners.</p>
        <p>One teaching format developed at CEIBS is the <b>Real Situation Learning Method (RSLM)</b>.</p>
        <p>Instead of working only from a written case, students engage with executives from the company itself and discuss a real business situation the organisation is dealing with.</p>
      </section>
      <section class="guide-card"><h3>Around you</h3>
        <p>In this part of campus, people usually start noticing the courtyards, covered walkways, water, and the clean white-and-grey materials.</p>
        <p>The Shanghai campus was designed by <b>I. M. Pei’s architectural studio</b>, with a design language that brings together modern architecture and elements inspired by Chinese courtyards and gardens.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>CEIBS has built a large body of China-focused management knowledge over the years, including research, cases and company engagement rooted in the Chinese business environment.</p></section>`
  },
  {
    title: "Information Center / Library",
    story: "Knowledge, China and the wider world",
    photos: [
      { src: "assets/map-library.png", alt: "Campus map showing the Information Center / Library", caption: "Map view · Library" },
      { src: "assets/library-lounge.jpg", alt: "Interior of a CEIBS library lounge or study area", caption: "Study and discussion space" },
      { src: "assets/pyramid-water.jpg", alt: "Campus water courtyard near the library", caption: "Water courtyard nearby" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <p>The library sits close to the centre of the original Shanghai campus, surrounded by water and academic buildings.</p>
        <p><b>“China Depth, Global Breadth”</b> is a phrase visitors will hear often at CEIBS.</p>
        <p>For MBA students, China is not only where the programme is located. Chinese companies, markets and management questions also appear in faculty research, cases, company projects, classroom discussions and interaction with executives.</p>
      </section>
      <section class="guide-card"><h3>MBA2005 Library Windows</h3>
        <p>Some of the library windows carry alumni or class names.</p>
        <p>MBA2005 later explained why their class chose to support the library windows: they remembered spending a great deal of time studying here and described CEIBS itself as a kind of <b>window</b> — based in Shanghai and China, while looking out to a much wider world.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>This is also a useful place to talk about how CEIBS has evolved from bringing international management education into China towards increasingly producing and sharing management knowledge rooted in China.</p></section>`
  },
  {
    title: "Canteen & Social Spaces",
    story: "Where everyday community happens",
    photos: [
      { src: "assets/map-canteen.png", alt: "Campus map showing the canteen area", caption: "Map view · Canteen" },
      { src: "assets/student-event.jpg", alt: "Students at a CEIBS community event", caption: "A glimpse of student life" }
    ],
    essential: `
      <section class="guide-card"><h3>Community</h3>
        <p>A large part of the MBA experience happens outside formal class time.</p>
        <div class="fact-strip"><div class="fact"><b>29</b><span>countries & regions</span></div><div class="fact"><b>~6</b><span>years average experience</span></div><div class="fact"><b>M28</b><span>current class</span></div></div>
        <p>Students come from different industries, professional backgrounds and cultures.</p>
        <p>The canteen and nearby shared spaces are where people meet between classes, have lunch, work in groups or continue conversations from class.</p>
      </section>
      <section class="guide-card"><h3>Student life</h3>
        <p>Much of campus life is organised by students themselves. Current communities and clubs cover areas such as AI & Digital, Consulting, Finance & Investment, Entrepreneurship & Innovation, Family Business, Healthcare, International Club, Social Impact and Women Leadership.</p>
        <p>Students are also involved in events such as TEDxCEIBS and topic-focused forums.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>The current MBA class is approximately half overseas talent and more than 40% women. The International Club is one example of how Chinese and international students share cultures with one another through activities, trips and events.</p></section>`
  },
  {
    title: "Gym & Wellness",
    story: "A practical part of daily student life",
    photos: [
      { src: "assets/map-gym.png", alt: "Campus map showing the gym location", caption: "Map view · Gym" },
      { src: "assets/pyramid-water.jpg", alt: "Campus exterior near the gym area", caption: "Nearby campus view" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <p>The fitness centre is another place applicants often ask about because daily rhythm matters during a full-time MBA.</p>
        <p>According to CEIBS campus facilities information, the fitness centre includes a <b>gymnasium, badminton and basketball courts, and body-building equipment</b>.</p>
        <p>This stop is a natural moment to mention that campus life is not only about class and recruiting, but also about keeping a sustainable routine.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>If the group asks practical questions, this can naturally lead into everyday routines such as exercise, meal times, study blocks and how students balance academics with recruiting and social life.</p></section>`
  },
  {
    title: "InnoLab",
    story: "Innovation, entrepreneurship and experimentation",
    photos: [
      { src: "assets/map-innolab.png", alt: "Campus map showing InnoLab", caption: "Map view · InnoLab" },
      { src: "assets/innolab.jpg", alt: "InnoLab interior at CEIBS", caption: "InnoLab" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <p>InnoLab is the innovation and entrepreneurship centre of the CEIBS MBA programme.</p>
        <p>It is open not only to current MBA students, but also to <b>CEIBS MBA alumni</b>.</p>
        <p>You do not need to be starting a company to participate. Its activities broadly support people interested in developing innovation skills, driving innovation inside an existing company, or developing an entrepreneurial idea or venture.</p>
        <p>One flagship programme is <b>INNOVATEChina</b>, first launched in <b>2008</b>, where teams work on real innovation challenges provided by corporate partners.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>InnoLab was upgraded in 2025 and now operates across the Shanghai and Shenzhen campuses. Activities include Inno Talks, workshops, mentoring, Demo Day and INNOVATEChina.</p></section>`
  },
  {
    title: "MBA Student Residence",
    story: "The everyday rhythm of a full-time MBA",
    photos: [
      { src: "assets/map-residence.png", alt: "Campus map showing the MBA student residence", caption: "Map view · Student residence" },
      { src: "assets/pyramid-water.jpg", alt: "Campus exterior near the residence", caption: "Residence area nearby" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <p>The student residence is located directly on campus.</p>
        <p>For students who live here, classrooms, the library, group meeting spaces, clubs, dining and campus events are all within a short walk.</p>
        <p>A normal MBA day may include different combinations of classes, group projects, recruiting activities, club meetings, talks, events and informal time with classmates.</p>
        <p>This is also a natural place for visitors to ask practical questions about everyday student life.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>Depending on the group, conversations here might naturally cover living on campus, daily life in Shanghai, commuting, weekends, food and the interaction between Chinese and international students.</p></section>`
  },
  {
    title: "Pyramid & Courtyard",
    story: "A memorable image of the campus",
    photos: [
      { src: "assets/map-pyramid.png", alt: "Campus map showing the central courtyard and pyramid area", caption: "Map view · Courtyard" },
      { src: "assets/pyramid-water.jpg", alt: "Water courtyard and pyramid area on campus", caption: "Pyramid and water courtyard" }
    ],
    essential: `
      <section class="guide-card"><h3>Essential talking points</h3>
        <p>The pyramid and courtyard area is one of the most recognisable visual elements of the Shanghai campus.</p>
        <p>It brings together several recurring campus themes at once: geometric form, water, movement between buildings, and the idea of open but connected spaces.</p>
        <p>For many visitors, this is simply one of the places where the campus feels most distinct.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>If useful, this can be a brief moment to mention that the campus is often seen as an expression of CEIBS' wider identity: East and West, tradition and modernity, all held together without feeling overly formal.</p></section>`
  },
  {
    title: "Duan Yongping Academic Center",
    story: "A window into the alumni network",
    photos: [
      { src: "assets/map-duan.png", alt: "Campus map showing the Duan Yongping Academic Center area", caption: "Map view · Duan Yongping Academic Center" },
      { src: "assets/duan-center-plaque.jpg", alt: "Duan Yongping Academic Center plaque", caption: "Duan Yongping Academic Center" }
    ],
    essential: `
      <section class="guide-card"><h3>Duan Yongping</h3>
        <p>This building is the <b>Duan Yongping Academic Center</b>.</p>
        <p>Duan Yongping is the entrepreneur and investor associated with BBK and the early development of businesses including OPPO and vivo.</p>
        <p>He is a <b>CEIBS EMBA alumnus</b> and has maintained a long relationship with the school.</p>
        <p>In 2024, during CEIBS' 30th anniversary year, he donated securities worth <b>RMB 100 million</b> to the CEIBS Education Foundation. It was the Foundation’s first listed-securities donation and, at the time, its largest single donation. The former Academic Center IV was subsequently named the Duan Yongping Academic Center.</p>
      </section>
      <section class="guide-card"><h3>Alumni community</h3>
        <div class="fact-strip"><div class="fact"><b>35,000+</b><span>alumni</span></div><div class="fact"><b>91</b><span>countries & regions</span></div><div class="fact"><b>154+</b><span>alumni organisations</span></div></div>
        <p>The network spans all CEIBS programmes and a wide range of industries and generations.</p>
        <div class="person"><b>Tang Binsen</b><span>Founder of Genki Forest and Challenger Capital</span></div>
        <div class="person"><b>Liu Qiangdong</b><span>Founder and Chairman of JD.com</span></div>
        <p>Across the tour, visitors have already seen smaller traces of the alumni network as well — Jinhe Tree, Jinhe Garden, named library windows and other donor-supported spaces.</p>
      </section>`,
    explore: `<section class="guide-card"><h3 class="secondary">Explore more · 45 min</h3><p>CEIBS alumni communities include geographic chapters in China and overseas, industry associations, programme-based communities such as the MBA Club, as well as professional and interest-based clubs. Together they form a long-term community rather than only a classroom network.</p></section>`
  }
];

const app = document.getElementById('app');
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const btn = document.querySelector('[data-install]');
  if (btn) btn.hidden = false;
});

function brandbar() {
  return `<header class="brandbar"><div class="wordmark"><span class="brand-main">CEIBS</span><span class="brand-divider">|</span><span class="brand-sub">MBA</span></div><div class="brandtag"><strong>中国深度 全球广度</strong>China Depth Global Breadth</div></header>`;
}

function renderGallery(stop) {
  if (!stop.photos?.length) return '';
  return `<section class="photo-strip">${stop.photos.map((p) => `
    <figure class="photo-card">
      <img src="${p.src}" alt="${p.alt}" loading="lazy">
      <figcaption>${p.caption}</figcaption>
    </figure>`).join('')}
  </section>`;
}

function getState() {
  const h = location.hash.replace(/^#/, '');
  if (!h || h === 'home') return { page:'home' };
  if (h === 'about') return { page:'about' };
  const m = h.match(/^tour\/(30|45)\/(\d+)$/);
  if (m) return { page:'tour', mode:Number(m[1]), index:Math.min(Math.max(Number(m[2])-1,0),stops.length-1) };
  return { page:'home' };
}

function renderHome() {
  app.innerHTML = `<main class="shell">${brandbar()}
    <section class="home-hero">
      <div class="eyebrow">Student Volunteer Guide</div>
      <h1>CEIBS MBA<br>Campus Tour</h1>
      <p class="lead">A practical mobile guide to the stories, people and places behind the Shanghai campus. Help candidates get a real sense of studying and living at CEIBS.</p>
    </section>
    <section class="home-body">
      <p class="section-label">Choose a tour</p>
      <div class="mode-grid">
        <button class="mode-card" onclick="startTour(30)"><div class="mode-time">30<small>MIN</small></div><div><h2>Essential Tour</h2><p>Fast, focused overview across all nine stops.</p></div><div class="arrow">›</div></button>
        <button class="mode-card alt" onclick="startTour(45)"><div class="mode-time">45<small>MIN</small></div><div><h2>Full Tour</h2><p>Same route, with more context, stories and conversation.</p></div><div class="arrow">›</div></button>
      </div>
      <div class="utility-row">
        <button class="pill-button primary" data-install hidden onclick="installApp()">Install on this phone</button>
        <button class="pill-button" onclick="showInstallHelp()">Add to Home Screen</button>
        <button class="pill-button" onclick="location.hash='about'">About this guide</button>
      </div>
      <div class="mini-note"><b>This is a guide, not a script.</b> Use the facts, stories and talking points that feel natural, adapt to the group, and follow visitors’ interests.</div>
    </section>
  </main>`;
}

function startTour(mode) {
  localStorage.setItem('ceibs-tour-mode', String(mode));
  location.hash = `tour/${mode}/1`;
}

function renderTour(mode, index) {
  const stop = stops[index];
  const pct = ((index+1)/stops.length)*100;
  app.innerHTML = `<main class="shell">${brandbar()}
    <section class="tour-head"><div class="tour-topline"><span class="mode-chip ${mode===45?'full':''}">${mode} MIN · ${mode===30?'ESSENTIAL':'FULL'} TOUR</span></div><div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div></section>
    <section class="stop-hero"><div class="stop-num">Stop ${index+1} of ${stops.length}</div><h1>${stop.title}</h1><p class="storyline">${stop.story}</p></section>
    ${renderGallery(stop)}
    <article class="content">${stop.essential}${mode===45?stop.explore:''}</article>
    <nav class="bottom-nav">
      <button class="nav-btn" ${index===0?'disabled':''} onclick="goStop(${mode},${index})">‹ Previous</button>
      <button class="mini-nav" onclick="showRoute(${mode},${index})">Route</button>
      <button class="mini-nav" onclick="location.hash='home'">Home</button>
      <button class="nav-btn next" onclick="${index===stops.length-1?`finishTour(${mode})`:`goStop(${mode},${index+2})`}">${index===stops.length-1?'Finish':'Next ›'}</button>
    </nav>
  </main>`;
  window.scrollTo(0,0);
}

function goStop(mode, n) { location.hash = `tour/${mode}/${n}`; }

function finishTour(mode) {
  app.innerHTML = `<main class="shell">${brandbar()}
    <section class="home-hero">
      <div class="eyebrow">Tour complete</div>
      <h1>Thank you.</h1>
      <p class="lead">Here are a few natural ways to close the conversation.</p>
    </section>
    <section class="home-body finish-body">
      <section class="guide-card"><h3>Open-ended questions</h3>
        <div class="finish-list">
          <div class="finish-item">“What questions do you still have about daily student life at CEIBS?”</div>
          <div class="finish-item">“Is there anything about the programme or campus you’d like to see again before we finish?”</div>
          <div class="finish-item">“Would it be helpful to hear a little more about academics, recruiting, or life in Shanghai?”</div>
        </div>
      </section>
      <section class="guide-card"><h3>Optional next-step ideas</h3>
        <div class="finish-list">
          <div class="finish-item">“If helpful, I can point you to upcoming MBA events or the admissions team.”</div>
          <div class="finish-item">“If you’d like a more personal perspective, you can also ask about a coffee chat with a current student when available.”</div>
        </div>
      </section>
      <div class="utility-row">
        <button class="pill-button primary" onclick="location.hash='home'">Back to tour home</button>
        <button class="pill-button" onclick="location.hash='tour/${mode}/1'">Restart ${mode}-minute tour</button>
      </div>
    </section>
  </main>`;
  window.scrollTo(0,0);
}

function showRoute(mode, current) {
  const overlay = document.createElement('div');
  overlay.className='overlay';
  overlay.innerHTML = `<div class="sheet"><div class="sheet-head"><h2>${mode}-minute route</h2><button class="close-btn" aria-label="Close">×</button></div><div class="route-list">${stops.map((s,i)=>`<button class="route-item ${i===current?'active':''}" data-go="${i+1}"><span class="route-index">${i+1}</span><span><b>${s.title}</b><span>${s.story}</span></span></button>`).join('')}</div></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if(e.target===overlay || e.target.closest('.close-btn')) overlay.remove(); });
  overlay.querySelectorAll('[data-go]').forEach(btn=>btn.addEventListener('click',()=>{ overlay.remove(); goStop(mode,Number(btn.dataset.go)); }));
}

function showInstallHelp() {
  const overlay = document.createElement('div');
  overlay.className='overlay';
  overlay.innerHTML=`<div class="sheet"><div class="sheet-head"><h2>Add to Home Screen</h2><button class="close-btn">×</button></div><p><b>iPhone / iPad:</b> open this site in Safari → tap Share → <b>Add to Home Screen</b>.</p><p><b>Android:</b> open in Chrome → browser menu → <b>Install app</b> or <b>Add to Home screen</b>.</p><p>Once installed, the guide opens like a standalone app. The core tour is also cached for offline use after the first visit.</p></div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.closest('.close-btn'))overlay.remove();});
}

async function installApp() {
  if (!deferredPrompt) return showInstallHelp();
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
}

function renderAbout() {
  app.innerHTML=`<main class="shell">${brandbar()}<article class="about-page"><button class="pill-button" onclick="location.hash='home'">← Back</button><h1 style="margin-top:26px">About this guide</h1><p>This mobile guide supports CEIBS MBA student volunteers leading applicant campus tours. It uses one nine-stop route with two levels of depth: a 30-minute Essential Tour and a 45-minute Full Tour.</p><h2>Design approach</h2><p>The interface is mobile-first and visually aligned to the current CEIBS MBA brochure style, using CEIBS red, light grey backgrounds, white content panels and clean typography.</p><h2>Content approach</h2><p>The guide is designed as talking-point support rather than a fixed script. Core facts are easy to scan; optional depth appears only in the 45-minute route. Each stop now also includes quick visual references to help volunteers recognise where they are on campus.</p><h2>Maintenance</h2><p>Update cohort statistics, alumni totals and organisation counts when new official figures are released. The app is intentionally static and can be hosted on GitHub Pages with no database.</p></article></main>`;
}

function render() {
  const s=getState();
  if(s.page==='tour') renderTour(s.mode,s.index);
  else if(s.page==='about') renderAbout();
  else renderHome();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  render();
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
});
