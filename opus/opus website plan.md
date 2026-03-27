

# NEXUS Gaming — Complete Web Project

## Project Analysis & Plan

**Architecture:** 9 files — 7 HTML pages, 1 shared CSS, 1 shared JS
**Design System:** Dark theme (#0a0a12 base) with cyan (#00e5ff) + purple (#a855f7) neon accents
**Layout:** Responsive CSS Grid/Flexbox, mobile‑first hamburger menu
**Interactivity:** Category filter (Games), review carousel (Community), dynamic event detail page (URL params), mobile nav toggle
**Content Brand:** "NEXUS Gaming"

---

## style.css

```css
/* ========================================
   NEXUS GAMING — Master Stylesheet
   ======================================== */

/* ===== VARIABLES & RESET ===== */
:root {
    --bg-primary: #0a0a12;
    --bg-secondary: #10101f;
    --bg-card: #151530;
    --bg-card-hover: #1a1a3d;
    --accent-1: #00e5ff;
    --accent-2: #a855f7;
    --accent-gradient: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    --text-primary: #eeeef5;
    --text-secondary: #9898b8;
    --text-muted: #5a5a78;
    --border-color: rgba(255,255,255,0.06);
    --shadow: 0 4px 24px rgba(0,0,0,0.3);
    --shadow-glow: 0 0 24px rgba(0,229,255,0.15);
    --radius: 14px;
    --radius-sm: 8px;
    --transition: 0.3s ease;
    --max-width: 1200px;
    --nav-h: 70px;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'Segoe UI',system-ui,-apple-system,sans-serif;background:var(--bg-primary);color:var(--text-primary);line-height:1.6;overflow-x:hidden}
::selection{background:var(--accent-1);color:var(--bg-primary)}
::-webkit-scrollbar{width:7px}
::-webkit-scrollbar-track{background:var(--bg-secondary)}
::-webkit-scrollbar-thumb{background:var(--accent-2);border-radius:4px}
a{text-decoration:none;color:inherit}
ul{list-style:none}
img{max-width:100%;display:block}

/* ===== UTILITY ===== */
.container{max-width:var(--max-width);margin:0 auto;padding:0 20px}

/* ===== BUTTONS ===== */
.btn{display:inline-block;padding:13px 30px;border-radius:var(--radius-sm);font-size:1rem;font-weight:600;cursor:pointer;transition:var(--transition);border:none;text-align:center}
.btn-primary{background:var(--accent-gradient);color:var(--bg-primary)}
.btn-primary:hover{transform:translateY(-3px);box-shadow:var(--shadow-glow)}
.btn-outline{background:transparent;border:2px solid var(--accent-1);color:var(--accent-1)}
.btn-outline:hover{background:var(--accent-1);color:var(--bg-primary);transform:translateY(-3px)}
.btn-sm{padding:9px 20px;font-size:.875rem}

/* ===== NAVBAR ===== */
.navbar{position:fixed;top:0;left:0;right:0;height:var(--nav-h);background:rgba(10,10,18,.88);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border-color);z-index:1000;display:flex;align-items:center}
.navbar .container{display:flex;align-items:center;justify-content:space-between;width:100%}
.nav-brand{font-size:1.5rem;font-weight:800;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:2px}
.nav-links{display:flex;gap:32px}
.nav-links a{color:var(--text-secondary);font-weight:500;position:relative;padding:4px 0;transition:var(--transition)}
.nav-links a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:2px;background:var(--accent-gradient);transition:var(--transition)}
.nav-links a:hover,.nav-links a.active{color:var(--text-primary)}
.nav-links a:hover::after,.nav-links a.active::after{width:100%}
.nav-toggle{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:4px}
.nav-toggle span{width:24px;height:2px;background:var(--text-primary);transition:var(--transition);border-radius:2px;display:block}
.nav-toggle.active span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
.nav-toggle.active span:nth-child(2){opacity:0}
.nav-toggle.active span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}

/* ===== HERO ===== */
.hero{min-height:100vh;display:flex;align-items:center;padding-top:var(--nav-h);position:relative;overflow:hidden;background:radial-gradient(ellipse at 70% 50%,rgba(0,229,255,.07) 0%,transparent 50%),radial-gradient(ellipse at 20% 80%,rgba(168,85,247,.07) 0%,transparent 50%),var(--bg-primary)}
.hero::before{content:'';position:absolute;top:50%;right:-80px;width:480px;height:480px;background:radial-gradient(circle,rgba(0,229,255,.1),transparent 70%);border-radius:50%;transform:translateY(-50%);animation:pulse 6s ease-in-out infinite}
.hero::after{content:'';position:absolute;bottom:-120px;left:-60px;width:360px;height:360px;background:radial-gradient(circle,rgba(168,85,247,.08),transparent 70%);border-radius:50%;animation:pulse 8s ease-in-out infinite reverse}
.hero-grid{position:absolute;right:0;top:50%;transform:translateY(-50%);width:42%;height:75%;background:linear-gradient(rgba(0,229,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.04) 1px,transparent 1px);background-size:44px 44px;-webkit-mask-image:radial-gradient(ellipse,black 20%,transparent 70%);mask-image:radial-gradient(ellipse,black 20%,transparent 70%)}
@keyframes pulse{0%,100%{transform:translateY(-50%) scale(1);opacity:.7}50%{transform:translateY(-50%) scale(1.12);opacity:1}}
.hero-content{position:relative;z-index:1;max-width:620px}
.hero-tag{display:inline-block;padding:6px 18px;background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.25);border-radius:20px;font-size:.82rem;color:var(--accent-1);margin-bottom:22px;letter-spacing:1.5px;text-transform:uppercase}
.hero-title{font-size:3.4rem;font-weight:800;line-height:1.08;margin-bottom:22px}
.hero-title span{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-text{font-size:1.12rem;color:var(--text-secondary);margin-bottom:34px;max-width:480px;line-height:1.7}

/* ===== SECTIONS ===== */
.section{padding:90px 0}
.section.bg-alt{background:var(--bg-secondary)}
.section-header{text-align:center;margin-bottom:52px}
.section-title{font-size:2.1rem;font-weight:700;margin-bottom:10px}
.section-title span{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.section-sub{color:var(--text-secondary);font-size:1.05rem;max-width:560px;margin:0 auto}

/* ===== CARDS GRID ===== */
.cards-grid{display:grid;gap:24px}
.grid-2{grid-template-columns:repeat(2,1fr)}
.grid-3{grid-template-columns:repeat(3,1fr)}
.grid-4{grid-template-columns:repeat(4,1fr)}

/* ===== GAME CARD ===== */
.card{background:var(--bg-card);border-radius:var(--radius);overflow:hidden;border:1px solid var(--border-color);transition:var(--transition)}
.card:hover{transform:translateY(-7px);border-color:rgba(0,229,255,.18);box-shadow:0 12px 40px rgba(0,0,0,.35),0 0 24px rgba(0,229,255,.06)}
.card-img{height:200px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.card-img-label{font-size:2.8rem;font-weight:900;color:rgba(255,255,255,.12);letter-spacing:4px;text-transform:uppercase;user-select:none}
.card-badge{position:absolute;top:12px;right:12px;padding:4px 12px;background:rgba(0,0,0,.55);backdrop-filter:blur(6px);border-radius:20px;font-size:.72rem;color:var(--accent-1);font-weight:600;text-transform:uppercase;letter-spacing:.5px}
.card-body{padding:22px}
.card-title{font-size:1.12rem;font-weight:700;margin-bottom:6px}
.card-genre{font-size:.8rem;color:var(--accent-2);font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px}
.card-text{color:var(--text-secondary);font-size:.88rem;margin-bottom:18px;line-height:1.55}
.card-foot{display:flex;align-items:center;justify-content:space-between}
.card-rating{color:#ffd700;font-size:.88rem;font-weight:600}
.card-score{color:var(--text-secondary);font-size:.85rem;margin-left:6px}

/* ===== NEWS CARDS ===== */
.news-card{background:var(--bg-card);border-radius:var(--radius);padding:26px;border:1px solid var(--border-color);transition:var(--transition)}
.news-card:hover{transform:translateY(-5px);border-color:rgba(168,85,247,.18)}
.news-tag{display:inline-block;padding:4px 10px;border-radius:4px;font-size:.72rem;font-weight:700;text-transform:uppercase;margin-bottom:14px;letter-spacing:.5px}
.news-tag.release{background:rgba(0,229,255,.12);color:var(--accent-1)}
.news-tag.dlc{background:rgba(168,85,247,.12);color:var(--accent-2)}
.news-tag.deals{background:rgba(74,222,128,.12);color:#4ade80}
.news-tag.hardware{background:rgba(251,191,36,.12);color:#fbbf24}
.news-card h3{font-size:1.02rem;margin-bottom:8px;line-height:1.35}
.news-card p{color:var(--text-secondary);font-size:.86rem;line-height:1.5}

/* ===== PAGE HEADER ===== */
.page-header{padding:130px 0 55px;text-align:center;background:radial-gradient(ellipse at 50% 100%,rgba(0,229,255,.05) 0%,transparent 70%),var(--bg-primary)}
.page-header h1{font-size:2.6rem;font-weight:800;margin-bottom:12px}
.page-header h1 span{background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.page-header p{color:var(--text-secondary);font-size:1.05rem;max-width:560px;margin:0 auto}

/* ===== FILTER BAR ===== */
.filter-bar{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-bottom:44px}
.filter-btn{padding:8px 22px;border-radius:22px;border:1px solid var(--border-color);background:var(--bg-card);color:var(--text-secondary);cursor:pointer;font-size:.88rem;font-weight:500;transition:var(--transition)}
.filter-btn:hover,.filter-btn.active{background:var(--accent-gradient);color:var(--bg-primary);border-color:transparent;font-weight:600}

/* ===== GUIDE ===== */
.guide-block{background:var(--bg-card);border-radius:var(--radius);padding:42px;margin-bottom:30px;border:1px solid var(--border-color);transition:var(--transition)}
.guide-block:hover{border-color:rgba(0,229,255,.12)}
.guide-icon{font-size:2.6rem;margin-bottom:14px}
.guide-block h2{font-size:1.5rem;margin-bottom:10px;color:var(--accent-1)}
.guide-block>p{color:var(--text-secondary);margin-bottom:24px;font-size:.98rem;line-height:1.65;max-width:700px}
.guide-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.guide-item{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;background:rgba(255,255,255,.025);border-radius:var(--radius-sm);border:1px solid var(--border-color);transition:var(--transition)}
.guide-item:hover{border-color:rgba(0,229,255,.15);background:rgba(0,229,255,.03)}
.guide-item .gi-icon{color:var(--accent-1);font-size:1.15rem;margin-top:2px;flex-shrink:0}
.guide-item strong{color:var(--text-primary);display:block;margin-bottom:2px;font-size:.92rem}
.guide-item span{color:var(--text-secondary);font-size:.84rem;line-height:1.45}

/* ===== PLATFORMS ===== */
.plat-block{background:var(--bg-card);border-radius:var(--radius);padding:42px;margin-bottom:30px;border:1px solid var(--border-color)}
.plat-head{display:flex;align-items:center;gap:18px;margin-bottom:22px}
.plat-logo{width:58px;height:58px;border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:900;color:#fff;flex-shrink:0}
.plat-head h2{font-size:1.5rem}
.plat-desc{color:var(--text-secondary);margin-bottom:20px;font-size:.98rem;line-height:1.65;max-width:720px}
.plat-tags{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:28px}
.plat-tags span{padding:6px 14px;background:rgba(0,229,255,.07);border:1px solid rgba(0,229,255,.14);border-radius:20px;font-size:.82rem;color:var(--accent-1)}
.plat-games-title{font-size:1.08rem;font-weight:600;margin-bottom:16px;color:var(--text-primary)}
.plat-game{display:flex;align-items:center;justify-content:space-between;padding:18px;background:rgba(255,255,255,.02);border-radius:var(--radius-sm);border:1px solid var(--border-color);margin-bottom:12px;transition:var(--transition)}
.plat-game:hover{border-color:rgba(0,229,255,.15)}
.plat-game h4{font-size:.98rem;margin-bottom:4px}
.plat-game p{color:var(--text-secondary);font-size:.83rem}
.plat-price{font-size:1.08rem;font-weight:700;color:var(--accent-1);white-space:nowrap}
.plat-price.free{color:#4ade80}

/* ===== SLIDER ===== */
.slider-wrapper{position:relative;max-width:680px;margin:0 auto}
.slider-viewport{overflow:hidden;border-radius:var(--radius)}
.slider-track{display:flex;transition:transform .45s ease}
.slide{min-width:100%;padding:44px 36px;background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius);text-align:center}
.slide-avatar{width:68px;height:68px;border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:1.7rem;font-weight:700;color:#fff}
.slide-name{font-size:1.08rem;font-weight:700;margin-bottom:3px}
.slide-game{color:var(--accent-1);font-size:.88rem;margin-bottom:6px}
.slide-rating{color:#ffd700;font-size:.95rem;margin-bottom:18px;letter-spacing:2px}
.slide-text{color:var(--text-secondary);font-size:1rem;line-height:1.7;font-style:italic;max-width:520px;margin:0 auto}
.slider-btn{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:var(--bg-secondary);border:1px solid var(--border-color);color:var(--text-primary);font-size:1.15rem;cursor:pointer;transition:var(--transition);display:flex;align-items:center;justify-content:center;z-index:10}
.slider-btn:hover{background:var(--accent-1);color:var(--bg-primary);border-color:var(--accent-1)}
.slider-btn.prev{left:-24px}
.slider-btn.next{right:-24px}
.slider-dots{display:flex;justify-content:center;gap:9px;margin-top:26px}
.slider-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.12);cursor:pointer;transition:var(--transition);border:none}
.slider-dot.active{background:var(--accent-1);box-shadow:0 0 10px rgba(0,229,255,.4)}

/* ===== EVENTS ===== */
.event-card{display:flex;background:var(--bg-card);border-radius:var(--radius);overflow:hidden;border:1px solid var(--border-color);margin-bottom:24px;transition:var(--transition);cursor:pointer;text-decoration:none;color:inherit}
.event-card:hover{border-color:rgba(0,229,255,.18);transform:translateX(8px);box-shadow:0 6px 28px rgba(0,0,0,.3)}
.event-card-img{width:300px;min-height:220px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:3.2rem}
.event-card-body{padding:30px;display:flex;flex-direction:column;justify-content:center}
.event-card-date{font-size:.82rem;color:var(--accent-1);font-weight:600;margin-bottom:8px;text-transform:uppercase;letter-spacing:1.2px}
.event-card-title{font-size:1.35rem;font-weight:700;margin-bottom:10px}
.event-card-text{color:var(--text-secondary);font-size:.92rem;line-height:1.55;margin-bottom:18px}
.event-card-arrow{color:var(--accent-1);font-weight:600;font-size:.88rem;display:inline-flex;align-items:center;gap:6px;transition:var(--transition)}
.event-card:hover .event-card-arrow{gap:12px}

/* ===== EVENT DETAIL ===== */
.ev-detail{padding-top:var(--nav-h)}
.ev-banner{height:340px;display:flex;align-items:center;justify-content:center;position:relative;font-size:5rem}
.ev-banner::after{content:'';position:absolute;bottom:0;left:0;right:0;height:120px;background:linear-gradient(to top,var(--bg-primary),transparent)}
.ev-content{max-width:780px;margin:-36px auto 0;padding:0 20px 90px;position:relative;z-index:1}
.ev-content h1{font-size:2.3rem;font-weight:800;margin-bottom:20px}
.ev-meta{display:flex;flex-wrap:wrap;gap:22px;margin-bottom:28px}
.ev-meta-item{display:flex;align-items:center;gap:8px;color:var(--text-secondary);font-size:.92rem}
.ev-meta-item .ico{color:var(--accent-1)}
.ev-desc{color:var(--text-secondary);font-size:1.02rem;line-height:1.75;margin-bottom:36px}
.ev-schedule{background:var(--bg-card);border-radius:var(--radius);padding:30px;border:1px solid var(--border-color);margin-bottom:36px}
.ev-schedule h3{font-size:1.15rem;margin-bottom:18px;color:var(--accent-1)}
.sch-item{display:flex;gap:18px;padding:13px 0;border-bottom:1px solid var(--border-color)}
.sch-item:last-child{border-bottom:none}
.sch-time{font-weight:700;color:var(--accent-1);min-width:70px;font-size:.95rem}
.sch-desc{color:var(--text-secondary);font-size:.92rem}

/* ===== IMAGE GRADIENTS ===== */
.img-elden{background:linear-gradient(135deg,#c9a84c,#8b6914,#4a3508)}
.img-cyber{background:linear-gradient(135deg,#00d4ff,#c724b1,#1a0030)}
.img-valo{background:linear-gradient(135deg,#ff4655,#53212b,#0f1923)}
.img-forza{background:linear-gradient(135deg,#ff7043,#f9a825,#2196f3)}
.img-tlou{background:linear-gradient(135deg,#66bb6a,#2e7d32,#1b3d1b)}
.img-warz{background:linear-gradient(135deg,#8bc34a,#4a6a1e,#1a2a0a)}
.img-rdr2{background:linear-gradient(135deg,#ef6c00,#bf360c,#3e1008)}
.img-hollow{background:linear-gradient(135deg,#5c6bc0,#283593,#0d1640)}
.img-ev1{background:linear-gradient(135deg,#7c4dff,#304ffe,#1a0a4e)}
.img-ev2{background:linear-gradient(135deg,#ff4655,#c62828,#1a0808)}
.img-ev3{background:linear-gradient(135deg,#00e676,#00897b,#003d30)}
.logo-steam{background:linear-gradient(135deg,#1b2838,#2a475e)}
.logo-epic{background:linear-gradient(135deg,#333,#111)}
.av-1{background:linear-gradient(135deg,#ff6b6b,#ee5a24)}
.av-2{background:linear-gradient(135deg,#4ecdc4,#1abc9c)}
.av-3{background:linear-gradient(135deg,#a55eea,#8854d0)}
.av-4{background:linear-gradient(135deg,#ffd32a,#f9a825)}
.av-5{background:linear-gradient(135deg,#3ae374,#2ed573)}

/* ===== FOOTER ===== */
.footer{background:var(--bg-secondary);border-top:1px solid var(--border-color);padding:60px 0 0}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
.footer-brand{font-size:1.4rem;font-weight:800;background:var(--accent-gradient);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:10px}
.footer-desc{color:var(--text-secondary);font-size:.88rem;line-height:1.6;margin-bottom:16px}
.footer-social{display:flex;gap:10px}
.footer-social a{width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid var(--border-color);display:flex;align-items:center;justify-content:center;color:var(--text-secondary);transition:var(--transition);font-size:.85rem}
.footer-social a:hover{background:var(--accent-1);color:var(--bg-primary);border-color:var(--accent-1)}
.footer-col h4{font-size:.95rem;font-weight:700;margin-bottom:16px}
.footer-col ul li{margin-bottom:10px}
.footer-col ul li a{color:var(--text-secondary);font-size:.88rem;transition:var(--transition)}
.footer-col ul li a:hover{color:var(--accent-1)}
.footer-bottom{border-top:1px solid var(--border-color);padding:20px 0;text-align:center;color:var(--text-muted);font-size:.82rem}

/* ===== ANIMATIONS ===== */
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.fade-up{animation:fadeUp .5s ease both}

/* ===== RESPONSIVE ===== */
@media(max-width:1024px){
    .grid-3{grid-template-columns:repeat(2,1fr)}
    .grid-4{grid-template-columns:repeat(2,1fr)}
    .footer-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:768px){
    .nav-toggle{display:flex}
    .nav-links{position:fixed;top:var(--nav-h);left:0;right:0;background:rgba(10,10,18,.96);backdrop-filter:blur(14px);flex-direction:column;align-items:center;padding:28px 0;gap:18px;transform:translateY(-120%);opacity:0;transition:var(--transition);border-bottom:1px solid var(--border-color);pointer-events:none}
    .nav-links.open{transform:translateY(0);opacity:1;pointer-events:all}
    .hero-title{font-size:2.3rem}
    .hero-text{font-size:1rem}
    .grid-2,.grid-3,.grid-4{grid-template-columns:1fr}
    .event-card{flex-direction:column}
    .event-card-img{width:100%;min-height:170px}
    .guide-grid{grid-template-columns:1fr}
    .footer-grid{grid-template-columns:1fr}
    .section-title{font-size:1.7rem}
    .page-header h1{font-size:2rem}
    .slider-btn.prev{left:6px}
    .slider-btn.next{right:6px}
    .hero-grid{display:none}
    .plat-block,.guide-block{padding:28px}
}
@media(max-width:480px){
    .hero-title{font-size:1.9rem}
    .slide{padding:30px 20px}
    .page-header{padding:110px 0 40px}
}
```

---

## script.js

```javascript
/* ========================================
   NEXUS GAMING — Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Mobile nav toggle ---- */
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (toggle) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
        document.querySelectorAll('.nav-links a').forEach(a =>
            a.addEventListener('click', () => {
                toggle.classList.remove('active');
                navLinks.classList.remove('open');
            })
        );
    }

    /* ---- Active nav highlight ---- */
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
    });

    /* ---- Game filter (games.html) ---- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const gameCards = document.querySelectorAll('.game-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.dataset.filter;
            gameCards.forEach(c => {
                const show = f === 'all' || c.dataset.category === f;
                c.style.display = show ? '' : 'none';
                if (show) { c.style.animation = 'none'; c.offsetHeight; c.style.animation = 'fadeUp .4s ease both'; }
            });
        });
    });

    /* ---- Community slider ---- */
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    let cur = 0, autoTimer;

    function goTo(i) {
        if (!slides.length) return;
        cur = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${cur * 100}%)`;
        dots.forEach((d, idx) => d.classList.toggle('active', idx === cur));
    }
    if (prevBtn) prevBtn.addEventListener('click', () => { goTo(cur - 1); resetAuto(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goTo(cur + 1); resetAuto(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));

    function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => goTo(cur + 1), 5000); }
    if (slides.length) { goTo(0); autoTimer = setInterval(() => goTo(cur + 1), 5000); }

    /* ---- Event detail page ---- */
    if (page === 'event-details.html') {
        const id = parseInt(new URLSearchParams(location.search).get('id'));
        fillEvent(id);
    }
});

/* ========== EVENT DATA ========== */
const events = [
    {
        id: 1, title: 'GameFest 2025', date: 'August 15 – 17, 2025',
        location: 'Los Angeles Convention Center — Physical Event',
        emoji: '🎮', gradient: 'img-ev1',
        desc: 'GameFest 2025 is the ultimate gaming convention bringing together developers, players, and industry leaders for three unforgettable days of world-premiere reveals, hands-on demos, developer panels, community tournaments, and after-parties. Whether you\'re a casual gamer or a hardcore competitor, GameFest has something for everyone. Explore massive exhibition halls filled with the latest hardware and upcoming titles, attend masterclasses hosted by top game designers, and compete in open tournaments across multiple genres.',
        schedule: [
            ['09:00','Doors open — Registration & welcome kits'],
            ['10:00','Opening ceremony & keynote by featured studio'],
            ['11:30','New game reveals & cinematic trailer showcase'],
            ['13:00','Lunch break — Demo floor opens to all attendees'],
            ['14:30','Developer panels & live Q&A sessions'],
            ['16:00','Community tournaments begin (FPS / Fighting / Racing)'],
            ['18:00','Evening showcase & award ceremony'],
            ['20:00','After-party & networking mixer']
        ]
    },
    {
        id: 2, title: 'Valorant Champions 2025', date: 'September 5 – 8, 2025',
        location: 'Seoul, South Korea — Hybrid (Online + On-site)',
        emoji: '🏆', gradient: 'img-ev2',
        desc: 'The pinnacle of competitive Valorant returns as 16 of the world\'s best teams battle for the Champions title and a $2 000 000 prize pool. Taking place in the iconic Seoul Olympic Gymnastics Arena, this four-day event combines nail-biting tactical gameplay with an electric live audience atmosphere. Fans worldwide can tune in for every clutch, ace, and overtime through the official broadcast. Expect exclusive skin drops, talent meet-and-greets, and a cosplay showcase during breaks between matches.',
        schedule: [
            ['10:00','Pre-show analysis & team introductions'],
            ['11:00','Quarter-finals — Best of 3'],
            ['14:00','Semi-finals — Best of 3'],
            ['16:30','Show matches & community games'],
            ['18:00','Grand final — Best of 5'],
            ['21:00','Award ceremony, MVP announcement & closing']
        ]
    },
    {
        id: 3, title: 'Indie Showcase Live 2025', date: 'October 12, 2025',
        location: 'Online — Global Livestream',
        emoji: '🌟', gradient: 'img-ev3',
        desc: 'A lovingly curated digital showcase spotlighting over 30 of the most promising indie games headed to PC and consoles in 2025-2026. Hosted by popular content creators, the event features world-premiere trailers, developer deep-dive interviews, and an Audience Choice award voted on live by viewers. From hand-drawn metroidvanias to narrative-driven sci-fi adventures, Indie Showcase Live celebrates the creativity and passion of independent game development.',
        schedule: [
            ['16:00','Livestream begins — Host introduction & hype reel'],
            ['16:15','Segment 1 — Action & Adventure reveals'],
            ['17:00','Developer spotlight interviews (3 studios)'],
            ['17:30','Segment 2 — RPG & Strategy reveals'],
            ['18:15','Audience Choice live vote & results'],
            ['18:45','Final surprise reveals & closing remarks']
        ]
    }
];

function fillEvent(id) {
    const ev = events.find(e => e.id === id);
    if (!ev) return;
    document.title = ev.title + ' — NEXUS Gaming';
    const banner = document.querySelector('.ev-banner');
    if (banner) { banner.className = 'ev-banner ' + ev.gradient; banner.querySelector('span').textContent = ev.emoji; }
    const h1 = document.querySelector('.ev-content h1'); if (h1) h1.textContent = ev.title;
    const d = document.getElementById('ev-date'); if (d) d.textContent = ev.date;
    const l = document.getElementById('ev-loc'); if (l) l.textContent = ev.location;
    const desc = document.querySelector('.ev-desc'); if (desc) desc.textContent = ev.desc;
    const list = document.querySelector('.sch-list');
    if (list) list.innerHTML = ev.schedule.map(s => `<div class="sch-item"><span class="sch-time">${s[0]}</span><span class="sch-desc">${s[1]}</span></div>`).join('');
}
```

---

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>NEXUS Gaming — Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu">
            <span></span><span></span><span></span>
        </button>
    </div>
</nav>

<!-- HERO -->
<section class="hero">
    <div class="hero-grid"></div>
    <div class="container">
        <div class="hero-content fade-up">
            <span class="hero-tag">🎮 Welcome to the Gaming Universe</span>
            <h1 class="hero-title">Discover Your Next<br><span>Gaming Adventure</span></h1>
            <p class="hero-text">Explore the latest releases, master new strategies, join a passionate community, and stay ahead in the ever-evolving world of video games.</p>
            <a href="games.html" class="btn btn-primary">Explore Games →</a>
        </div>
    </div>
</section>

<!-- RECOMMENDED GAMES -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Recommended <span>Games</span></h2>
            <p class="section-sub">Hand-picked titles that every gamer should experience right now.</p>
        </div>
        <div class="cards-grid grid-3">
            <!-- Card 1 -->
            <div class="card fade-up">
                <div class="card-img img-elden">
                    <span class="card-img-label">ER</span>
                    <span class="card-badge">RPG</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Elden Ring</h3>
                    <p class="card-genre">Action RPG</p>
                    <p class="card-text">Explore the Lands Between in this epic action RPG crafted by FromSoftware and George R.R. Martin. Face punishing foes and uncover a rich, dark fantasy world.</p>
                    <div class="card-foot">
                        <span class="card-rating">★★★★★ <span class="card-score">9.8</span></span>
                        <a href="games.html" class="btn btn-outline btn-sm">Details</a>
                    </div>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="card fade-up">
                <div class="card-img img-cyber">
                    <span class="card-img-label">CP</span>
                    <span class="card-badge">Open World</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Cyberpunk 2077</h3>
                    <p class="card-genre">Open World RPG</p>
                    <p class="card-text">Dive into Night City, a megalopolis obsessed with power, glamour, and body modification. Live the story of V, a mercenary outlaw chasing immortality.</p>
                    <div class="card-foot">
                        <span class="card-rating">★★★★☆ <span class="card-score">9.0</span></span>
                        <a href="games.html" class="btn btn-outline btn-sm">Details</a>
                    </div>
                </div>
            </div>
            <!-- Card 3 -->
            <div class="card fade-up">
                <div class="card-img img-valo">
                    <span class="card-img-label">VL</span>
                    <span class="card-badge">FPS</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">Valorant</h3>
                    <p class="card-genre">Tactical FPS</p>
                    <p class="card-text">A tactical 5v5 character-based shooter where precise gunplay meets unique agent abilities. Communication and strategy are key to victory.</p>
                    <div class="card-foot">
                        <span class="card-rating">★★★★☆ <span class="card-score">8.7</span></span>
                        <a href="games.html" class="btn btn-outline btn-sm">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- LATEST NEWS -->
<section class="section bg-alt">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Latest <span>News</span></h2>
            <p class="section-sub">Stay updated with the hottest headlines from the gaming world.</p>
        </div>
        <div class="cards-grid grid-4">
            <div class="news-card fade-up">
                <span class="news-tag release">Release</span>
                <h3>GTA VI Official Release Date Confirmed</h3>
                <p>Rockstar Games finally reveals the official launch window for the most anticipated title of the decade.</p>
            </div>
            <div class="news-card fade-up">
                <span class="news-tag dlc">DLC</span>
                <h3>Elden Ring DLC Breaks Sales Records</h3>
                <p>Shadow of the Erdtree becomes the fastest-selling DLC in gaming history within its first week.</p>
            </div>
            <div class="news-card fade-up">
                <span class="news-tag deals">Deals</span>
                <h3>Steam Summer Sale Dates Announced</h3>
                <p>Mark your calendars — thousands of titles will be discounted up to 90% during the annual summer event.</p>
            </div>
            <div class="news-card fade-up">
                <span class="news-tag hardware">Hardware</span>
                <h3>New PlayStation VR2 Titles Revealed</h3>
                <p>Sony unveils a wave of exclusive VR2 experiences pushing the boundaries of immersive gaming.</p>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <div class="footer-brand">NEXUS</div>
                <p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community. Built by gamers, for gamers.</p>
                <div class="footer-social">
                    <a href="#" aria-label="Twitter">𝕏</a>
                    <a href="#" aria-label="Discord">D</a>
                    <a href="#" aria-label="YouTube">▶</a>
                    <a href="#" aria-label="Twitch">T</a>
                </div>
            </div>
            <div class="footer-col">
                <h4>Pages</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="games.html">Video Games</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="guide.html">Guide</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>More</h4>
                <ul>
                    <li><a href="platforms.html">Platforms</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">© 2025 NEXUS Gaming. All rights reserved.</div>
    </div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## games.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Video Games — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>Video <span>Games</span></h1>
        <p>Browse our curated collection of popular titles across every genre.</p>
    </div>
</header>

<section class="section">
    <div class="container">
        <!-- Filters -->
        <div class="filter-bar">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="rpg">RPG</button>
            <button class="filter-btn" data-filter="fps">FPS</button>
            <button class="filter-btn" data-filter="openworld">Open World</button>
            <button class="filter-btn" data-filter="racing">Racing</button>
            <button class="filter-btn" data-filter="adventure">Adventure</button>
        </div>

        <div class="cards-grid grid-4">
            <!-- 1 -->
            <div class="card game-card" data-category="rpg">
                <div class="card-img img-elden"><span class="card-img-label">ER</span><span class="card-badge">RPG</span></div>
                <div class="card-body">
                    <h3 class="card-title">Elden Ring</h3>
                    <p class="card-genre">Action RPG</p>
                    <p class="card-text">A vast open-world dark fantasy epic with challenging combat and deep lore.</p>
                    <div class="card-foot"><span class="card-rating">★★★★★ <span class="card-score">9.8</span></span></div>
                </div>
            </div>
            <!-- 2 -->
            <div class="card game-card" data-category="openworld">
                <div class="card-img img-cyber"><span class="card-img-label">CP</span><span class="card-badge">Open World</span></div>
                <div class="card-body">
                    <h3 class="card-title">Cyberpunk 2077</h3>
                    <p class="card-genre">Open World RPG</p>
                    <p class="card-text">Night City awaits — a neon-lit metropolis full of danger, intrigue, and cyberware.</p>
                    <div class="card-foot"><span class="card-rating">★★★★☆ <span class="card-score">9.0</span></span></div>
                </div>
            </div>
            <!-- 3 -->
            <div class="card game-card" data-category="fps">
                <div class="card-img img-valo"><span class="card-img-label">VL</span><span class="card-badge">FPS</span></div>
                <div class="card-body">
                    <h3 class="card-title">Valorant</h3>
                    <p class="card-genre">Tactical FPS</p>
                    <p class="card-text">Precise gunplay meets unique agent abilities in this 5v5 competitive shooter.</p>
                    <div class="card-foot"><span class="card-rating">★★★★☆ <span class="card-score">8.7</span></span></div>
                </div>
            </div>
            <!-- 4 -->
            <div class="card game-card" data-category="racing">
                <div class="card-img img-forza"><span class="card-img-label">FH</span><span class="card-badge">Racing</span></div>
                <div class="card-body">
                    <h3 class="card-title">Forza Horizon 5</h3>
                    <p class="card-genre">Racing / Open World</p>
                    <p class="card-text">Race through a vibrant open-world Mexico with hundreds of the world's greatest cars.</p>
                    <div class="card-foot"><span class="card-rating">★★★★★ <span class="card-score">9.2</span></span></div>
                </div>
            </div>
            <!-- 5 -->
            <div class="card game-card" data-category="adventure">
                <div class="card-img img-tlou"><span class="card-img-label">TL</span><span class="card-badge">Adventure</span></div>
                <div class="card-body">
                    <h3 class="card-title">The Last of Us Part II</h3>
                    <p class="card-genre">Action Adventure</p>
                    <p class="card-text">A harrowing journey of survival and the devastating cycle of violence and revenge.</p>
                    <div class="card-foot"><span class="card-rating">★★★★★ <span class="card-score">9.5</span></span></div>
                </div>
            </div>
            <!-- 6 -->
            <div class="card game-card" data-category="fps">
                <div class="card-img img-warz"><span class="card-img-label">WZ</span><span class="card-badge">FPS</span></div>
                <div class="card-body">
                    <h3 class="card-title">Call of Duty: Warzone</h3>
                    <p class="card-genre">Battle Royale FPS</p>
                    <p class="card-text">Drop in, gear up, and survive — a free-to-play battle royale built on the COD engine.</p>
                    <div class="card-foot"><span class="card-rating">★★★★☆ <span class="card-score">8.5</span></span></div>
                </div>
            </div>
            <!-- 7 -->
            <div class="card game-card" data-category="openworld">
                <div class="card-img img-rdr2"><span class="card-img-label">RD</span><span class="card-badge">Open World</span></div>
                <div class="card-body">
                    <h3 class="card-title">Red Dead Redemption 2</h3>
                    <p class="card-genre">Open World Adventure</p>
                    <p class="card-text">An epic tale of life in America's unforgiving heartland with stunning open-world detail.</p>
                    <div class="card-foot"><span class="card-rating">★★★★★ <span class="card-score">9.7</span></span></div>
                </div>
            </div>
            <!-- 8 -->
            <div class="card game-card" data-category="adventure">
                <div class="card-img img-hollow"><span class="card-img-label">HK</span><span class="card-badge">Adventure</span></div>
                <div class="card-body">
                    <h3 class="card-title">Hollow Knight</h3>
                    <p class="card-genre">Metroidvania</p>
                    <p class="card-text">Descend into Hallownest, a vast underground kingdom of insects, in this award-winning 2D epic.</p>
                    <div class="card-foot"><span class="card-rating">★★★★★ <span class="card-score">9.4</span></span></div>
                </div>
            </div>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <div class="footer-brand">NEXUS</div>
                <p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p>
                <div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div>
            </div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## guide.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Guide — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>Gaming <span>Guide</span></h1>
        <p>Level up your skills — from your very first match to advanced competitive strategies.</p>
    </div>
</header>

<section class="section">
    <div class="container">

        <!-- BEGINNER TUTORIALS -->
        <div class="guide-block fade-up">
            <div class="guide-icon">📖</div>
            <h2>Beginner Tutorials</h2>
            <p>New to gaming? Everyone starts somewhere. These fundamentals will help you build a solid foundation so you can enjoy any game with confidence.</p>
            <div class="guide-grid">
                <div class="guide-item">
                    <span class="gi-icon">🎯</span>
                    <div>
                        <strong>Choose Your First Game</strong>
                        <span>Pick a genre that matches your interests — story-driven, competitive, or sandbox — and start with a well-reviewed, beginner-friendly title.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🕹️</span>
                    <div>
                        <strong>Learn the Controls</strong>
                        <span>Spend 15 minutes in a tutorial or practice mode. Familiarize yourself with movement, camera, and core actions before jumping online.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">⚙️</span>
                    <div>
                        <strong>Set Your Sensitivity</strong>
                        <span>Finding the right mouse / stick sensitivity makes aiming natural. Start low and increase gradually until tracking feels smooth.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🏅</span>
                    <div>
                        <strong>Enter Competitive Play</strong>
                        <span>Play unranked matches first to understand maps and meta. Once comfortable, dive into ranked and focus on consistent improvement.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- STRATEGIES -->
        <div class="guide-block fade-up">
            <div class="guide-icon">♟️</div>
            <h2>Strategies</h2>
            <p>Winning isn't about reflexes alone — smart decision-making separates good players from great ones. Apply these strategies in both multiplayer and single-player experiences.</p>
            <div class="guide-grid">
                <div class="guide-item">
                    <span class="gi-icon">📦</span>
                    <div>
                        <strong>Resource Management</strong>
                        <span>Don't waste ammo, potions, or currency early. Learn when to save and when to spend for maximum efficiency.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">📍</span>
                    <div>
                        <strong>Positioning & Map Awareness</strong>
                        <span>Always know where enemies could approach from. Hold high ground, use cover, and avoid predictable movement patterns.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🤝</span>
                    <div>
                        <strong>Team Tactics</strong>
                        <span>Communicate with pings or voice chat. Coordinate pushes, share resources, and support teammates in their assigned roles.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🧙</span>
                    <div>
                        <strong>Character & Loadout Selection</strong>
                        <span>Pick characters or loadouts that complement your team composition. Versatility wins more games than raw firepower.</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- GAMEPLAY -->
        <div class="guide-block fade-up">
            <div class="guide-icon">🎮</div>
            <h2>Gameplay Styles</h2>
            <p>Every player has a natural style. Understanding yours — and knowing when to adapt — will give you an edge in any title.</p>
            <div class="guide-grid">
                <div class="guide-item">
                    <span class="gi-icon">🥷</span>
                    <div>
                        <strong>Stealth Approach</strong>
                        <span>Stay hidden, use distractions, and eliminate targets silently. Perfect for games like Hitman, Dishonored, and stealth-RPGs.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">💥</span>
                    <div>
                        <strong>Aggressive Rush</strong>
                        <span>Apply constant pressure, take space quickly, and overwhelm opponents. Ideal for FPS entry-fraggers and action game veterans.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🛡️</span>
                    <div>
                        <strong>Defensive Play</strong>
                        <span>Anchor positions, control choke-points, and let the enemy make mistakes. Patience is your greatest weapon.</span>
                    </div>
                </div>
                <div class="guide-item">
                    <span class="gi-icon">🌍</span>
                    <div>
                        <strong>Open World Exploration</strong>
                        <span>Ignore the main quest — wander, discover hidden secrets, and let the world tell its story organically. The journey is the reward.</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div><div class="footer-brand">NEXUS</div><p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p><div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div></div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## platforms.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Gaming Platforms — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>Gaming <span>Platforms</span></h1>
        <p>Where to buy and play your favorite titles — the two biggest PC storefronts compared.</p>
    </div>
</header>

<section class="section">
    <div class="container">

        <!-- STEAM -->
        <div class="plat-block fade-up">
            <div class="plat-head">
                <div class="plat-logo logo-steam">S</div>
                <h2>Steam</h2>
            </div>
            <p class="plat-desc">Developed by Valve Corporation, Steam is the world's largest digital distribution platform for PC gaming. With over 50,000 titles, a thriving community, Workshop mod support, and legendary seasonal sales, it remains the go-to storefront for gamers worldwide.</p>
            <div class="plat-tags">
                <span>Massive Library</span>
                <span>Workshop Mods</span>
                <span>Community Forums</span>
                <span>Steam Deck Support</span>
                <span>Achievement System</span>
            </div>
            <h4 class="plat-games-title">Popular Titles on Steam</h4>
            <div class="plat-game">
                <div>
                    <h4>Counter-Strike 2</h4>
                    <p>The definitive tactical FPS experience, rebuilt on the Source 2 engine with updated maps and mechanics.</p>
                </div>
                <span class="plat-price free">Free to Play</span>
            </div>
            <div class="plat-game">
                <div>
                    <h4>Baldur's Gate 3</h4>
                    <p>A sprawling, critically acclaimed RPG with deep narrative choices, turn-based combat, and co-op support.</p>
                </div>
                <span class="plat-price">$59.99</span>
            </div>
        </div>

        <!-- EPIC GAMES STORE -->
        <div class="plat-block fade-up">
            <div class="plat-head">
                <div class="plat-logo logo-epic">E</div>
                <h2>Epic Games Store</h2>
            </div>
            <p class="plat-desc">Launched by Epic Games (the creators of Unreal Engine and Fortnite), the Epic Games Store has rapidly grown by offering weekly free games, exclusive titles, and a more favorable revenue split for developers. It's a must-install for any PC gamer looking to expand their library for free.</p>
            <div class="plat-tags">
                <span>Weekly Free Games</span>
                <span>Exclusive Titles</span>
                <span>Unreal Engine Integration</span>
                <span>Creator Revenue Split</span>
            </div>
            <h4 class="plat-games-title">Popular Titles on Epic Games Store</h4>
            <div class="plat-game">
                <div>
                    <h4>Fortnite</h4>
                    <p>The cultural phenomenon — a battle royale with building mechanics, live events, and constant content updates.</p>
                </div>
                <span class="plat-price free">Free to Play</span>
            </div>
            <div class="plat-game">
                <div>
                    <h4>Alan Wake 2</h4>
                    <p>A survival horror masterpiece blending live-action sequences with atmospheric psychological tension.</p>
                </div>
                <span class="plat-price">$49.99</span>
            </div>
        </div>

    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div><div class="footer-brand">NEXUS</div><p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p><div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div></div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## community.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Community — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>Community <span>Reviews</span></h1>
        <p>Real opinions from real gamers — see what the NEXUS community is playing and loving.</p>
    </div>
</header>

<section class="section">
    <div class="container">
        <div class="slider-wrapper">
            <div class="slider-viewport">
                <div class="slider-track">
                    <!-- Slide 1 -->
                    <div class="slide">
                        <div class="slide-avatar av-1">A</div>
                        <div class="slide-name">Alex M.</div>
                        <div class="slide-game">Playing: Elden Ring</div>
                        <div class="slide-rating">★★★★★</div>
                        <p class="slide-text">"The open-world design is breathtaking. Every cave, ruin, and boss encounter feels hand-crafted. FromSoftware outdid themselves — this is the definitive action RPG of the decade."</p>
                    </div>
                    <!-- Slide 2 -->
                    <div class="slide">
                        <div class="slide-avatar av-2">S</div>
                        <div class="slide-name">Sarah K.</div>
                        <div class="slide-game">Playing: Cyberpunk 2077</div>
                        <div class="slide-rating">★★★★☆</div>
                        <p class="slide-text">"After the major updates, this game is genuinely incredible. Night City feels alive, the storylines are emotional, and the Phantom Liberty expansion is a masterclass in DLC design."</p>
                    </div>
                    <!-- Slide 3 -->
                    <div class="slide">
                        <div class="slide-avatar av-3">M</div>
                        <div class="slide-name">Marcus J.</div>
                        <div class="slide-game">Playing: Valorant</div>
                        <div class="slide-rating">★★★★★</div>
                        <p class="slide-text">"Best tactical shooter on the market, period. The agent diversity keeps the meta fresh, and the ranked system actually feels fair. I've clocked over 2,000 hours and I'm still hooked."</p>
                    </div>
                    <!-- Slide 4 -->
                    <div class="slide">
                        <div class="slide-avatar av-4">E</div>
                        <div class="slide-name">Emily R.</div>
                        <div class="slide-game">Playing: Red Dead Redemption 2</div>
                        <div class="slide-rating">★★★★★</div>
                        <p class="slide-text">"A masterpiece of storytelling and world-building. Arthur Morgan's journey had me in tears by the end. The attention to detail — from wildlife to weather — is unmatched in gaming."</p>
                    </div>
                    <!-- Slide 5 -->
                    <div class="slide">
                        <div class="slide-avatar av-5">D</div>
                        <div class="slide-name">David L.</div>
                        <div class="slide-game">Playing: Hollow Knight</div>
                        <div class="slide-rating">★★★★★</div>
                        <p class="slide-text">"Don't let the simple art style fool you — this is one of the deepest and most rewarding metroidvanias ever created. The bosses are tough but fair, and the world is hauntingly beautiful."</p>
                    </div>
                </div>
            </div>
            <button class="slider-btn prev" aria-label="Previous">◀</button>
            <button class="slider-btn next" aria-label="Next">▶</button>
            <div class="slider-dots">
                <button class="slider-dot active" aria-label="Slide 1"></button>
                <button class="slider-dot" aria-label="Slide 2"></button>
                <button class="slider-dot" aria-label="Slide 3"></button>
                <button class="slider-dot" aria-label="Slide 4"></button>
                <button class="slider-dot" aria-label="Slide 5"></button>
            </div>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div><div class="footer-brand">NEXUS</div><p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p><div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div></div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## events.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Events — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<header class="page-header">
    <div class="container">
        <h1>Upcoming <span>Events</span></h1>
        <p>Tournaments, expos, and showcases — don't miss what's happening in the gaming world.</p>
    </div>
</header>

<section class="section">
    <div class="container">

        <!-- Event 1 -->
        <a href="event-details.html?id=1" class="event-card fade-up">
            <div class="event-card-img img-ev1"><span>🎮</span></div>
            <div class="event-card-body">
                <div class="event-card-date">📅 August 15 – 17, 2025</div>
                <h3 class="event-card-title">GameFest 2025</h3>
                <p class="event-card-text">The ultimate gaming convention — three days of world-premiere reveals, hands-on demos, developer panels, community tournaments, and unforgettable after-parties in Los Angeles.</p>
                <span class="event-card-arrow">View Details →</span>
            </div>
        </a>

        <!-- Event 2 -->
        <a href="event-details.html?id=2" class="event-card fade-up">
            <div class="event-card-img img-ev2"><span>🏆</span></div>
            <div class="event-card-body">
                <div class="event-card-date">📅 September 5 – 8, 2025</div>
                <h3 class="event-card-title">Valorant Champions 2025</h3>
                <p class="event-card-text">Sixteen of the world's best teams clash for the Champions title and a $2M prize pool in Seoul. Experience elite tactical gameplay at its finest — live or online.</p>
                <span class="event-card-arrow">View Details →</span>
            </div>
        </a>

        <!-- Event 3 -->
        <a href="event-details.html?id=3" class="event-card fade-up">
            <div class="event-card-img img-ev3"><span>🌟</span></div>
            <div class="event-card-body">
                <div class="event-card-date">📅 October 12, 2025</div>
                <h3 class="event-card-title">Indie Showcase Live 2025</h3>
                <p class="event-card-text">A curated livestream spotlighting 30+ of the most promising indie titles headed to PC and consoles. Featuring world-premiere trailers and live Audience Choice voting.</p>
                <span class="event-card-arrow">View Details →</span>
            </div>
        </a>

    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div><div class="footer-brand">NEXUS</div><p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p><div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div></div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## event-details.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>Event Details — NEXUS Gaming</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<nav class="navbar">
    <div class="container">
        <a href="index.html" class="nav-brand">NEXUS</a>
        <div class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Video Games</a>
            <a href="events.html">Event</a>
            <a href="guide.html">Guide</a>
            <a href="platforms.html">Gaming Platforms</a>
            <a href="community.html">Community</a>
        </div>
        <button class="nav-toggle" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>
</nav>

<main class="ev-detail">
    <!-- Banner — gradient & emoji set by JS -->
    <div class="ev-banner img-ev1">
        <span>🎮</span>
    </div>

    <div class="ev-content">
        <h1>Loading Event…</h1>

        <div class="ev-meta">
            <div class="ev-meta-item"><span class="ico">📅</span> <span id="ev-date">—</span></div>
            <div class="ev-meta-item"><span class="ico">📍</span> <span id="ev-loc">—</span></div>
        </div>

        <p class="ev-desc">Loading description…</p>

        <div class="ev-schedule">
            <h3>📋 Schedule</h3>
            <div class="sch-list">
                <!-- filled by JS -->
            </div>
        </div>

        <a href="events.html" class="btn btn-outline" style="margin-right:12px;">← Back to Events</a>
        <button class="btn btn-primary">Reserve a Spot 🎟️</button>
    </div>
</main>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div><div class="footer-brand">NEXUS</div><p class="footer-desc">Your ultimate destination for gaming news, guides, reviews, and community.</p><div class="footer-social"><a href="#">𝕏</a><a href="#">D</a><a href="#">▶</a><a href="#">T</a></div></div>
            <div class="footer-col"><h4>Pages</h4><ul><li><a href="index.html">Home</a></li><li><a href="games.html">Video Games</a></li><li><a href="events.html">Events</a></li><li><a href="guide.html">Guide</a></li></ul></div>
            <div class="footer-col"><h4>More</h4><ul><li><a href="platforms.html">Platforms</a></li><li><a href="community.html">Community</a></li></ul></div>
            <div class="footer-col"><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Use</a></li></ul></div>
        </div>
    </div>
    <div class="footer-bottom"><div class="container">© 2025 NEXUS Gaming. All rights reserved.</div></div>
</footer>

<script src="script.js"></script>
</body>
</html>
```

---

## How It All Works Together

| Feature | Implementation |
|---|---|
| **Responsive nav** | CSS media query hides links → JS toggles `.open` class + hamburger-to-X animation |
| **Active nav link** | JS compares `location.pathname` to each `<a>` href on load |
| **Game category filter** | `data-filter` on buttons, `data-category` on cards — JS toggles `display` + re-triggers `fadeUp` animation |
| **Community slider** | Flexbox track translated by `−(index × 100)%`; prev/next buttons, clickable dots, 5-second autoplay interval |
| **Event detail page** | Single `event-details.html` template populated by JS from the `events` array using `?id=` URL param |
| **Image placeholders** | CSS gradient classes (`.img-elden`, `.img-ev1`, etc.) with faint text labels — fully self-contained, no external assets needed |
| **Dark gaming theme** | CSS custom properties for a #0a0a12 base with cyan/purple neon accents, glow shadows, and backdrop-blur navbar |

Create the nine files in a single folder, open `index.html` in any browser, and everything works — no build step, no dependencies, no server required.