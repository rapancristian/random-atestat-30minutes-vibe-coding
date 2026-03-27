### Project Analysis and Execution Plan

**1. Requirement Analysis**
*   **Core Goal:** Build a purely vanilla HTML, CSS, and JS website dedicated to video games. No frameworks allowed.
*   **Design Language:** A dark theme with vibrant, "neon" gaming accents (e.g., deep space blues, neon cyan, purple), rounded corners, smooth hover animations, and elegant card-based layouts. Responsive across all devices.
*   **Content:** 7 unique pages (`index`, `games`, `guide`, `platforms`, `community`, `events`, `event-details`). Each has specific data requirements (e.g., 3 game cards on home, 6 on games page, JS sliders, filtering, realistic mock data).

**2. Project Structure & File Organization**
To keep everything cohesive and easy to maintain, all HTML files will share a single `style.css` for consistent design, and a single `script.js` for interactivity.

*   `style.css`: Will contain global variables (colors, fonts), structural classes (nav, footer, grids, containers), UI components (buttons, cards, badges), and page-specific tweaks.
*   `script.js`: Will use defensive programming (`if (element) { ... }`) to ensure functions like the game filter or community slider only run on their respective pages without throwing errors on others.
*   `HTML files`: Will follow standard semantic HTML5 structures (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

**3. Interactivity Plan**
*   **Mobile Menu:** A hamburger icon that toggles an active class on the nav menu.
*   **Game Filter (Video Games Page):** Buttons that match a `data-category` attribute on game cards to show/hide them instantly.
*   **Testimonial Slider (Community Page):** An array of slides handled by JS to track the `currentIndex`, shifting the carousel via CSS `transform: translateX()`.

---

### File 1: `style.css`
This handles the dark gaming theme, neon accents, card shadows, responsive grids, and global styles.

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Poppins:wght@300;400;600&display=swap');

/* GLOBAL VARIABLES */
:root {
  --bg-dark: #0b0c10;
  --bg-card: #1f2833;
  --accent-cyan: #66fcf1;
  --accent-cyan-hover: #45a29e;
  --text-main: #c5c6c7;
  --text-light: #ffffff;
  --font-heading: 'Orbitron', sans-serif;
  --font-body: 'Poppins', sans-serif;
  --transition: all 0.3s ease;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: var(--font-body);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4 { color: var(--text-light); font-family: var(--font-heading); letter-spacing: 1px; }
a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { max-width: 100%; display: block; border-radius: 8px; }

/* LAYOUT & UTILITIES */
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.section-title { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; color: var(--accent-cyan); text-transform: uppercase; }
.btn {
  display: inline-block;
  background: transparent;
  color: var(--accent-cyan);
  border: 2px solid var(--accent-cyan);
  padding: 10px 24px;
  border-radius: 4px;
  font-family: var(--font-heading);
  cursor: pointer;
  transition: var(--transition);
  text-transform: uppercase;
  font-size: 0.9rem;
}
.btn:hover, .btn.active { background: var(--accent-cyan); color: var(--bg-dark); box-shadow: 0 0 15px var(--accent-cyan); }
.btn-solid { background: var(--accent-cyan); color: var(--bg-dark); }
.btn-solid:hover { background: var(--accent-cyan-hover); border-color: var(--accent-cyan-hover); }

/* NAVBAR */
header { background: rgba(11, 12, 16, 0.95); position: sticky; top: 0; z-index: 100; border-bottom: 1px solid #1f2833; backdrop-filter: blur(10px); }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; }
.logo { font-family: var(--font-heading); font-size: 1.8rem; color: var(--text-light); }
.logo span { color: var(--accent-cyan); }
.nav-links { display: flex; gap: 20px; }
.nav-links a { font-weight: 600; text-transform: uppercase; font-size: 0.9rem; transition: var(--transition); }
.nav-links a:hover, .nav-links a.active { color: var(--accent-cyan); text-shadow: 0 0 8px var(--accent-cyan); }
.hamburger { display: none; font-size: 1.8rem; cursor: pointer; color: var(--accent-cyan); }

/* HERO SECTION */
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(to right, rgba(11, 12, 16, 0.9), rgba(11, 12, 16, 0.3)), url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1920&q=80') center/cover;
}
.hero-content { max-width: 600px; }
.hero h1 { font-size: 4rem; line-height: 1.2; margin-bottom: 1rem; text-shadow: 2px 2px 4px #000; }
.hero p { font-size: 1.1rem; margin-bottom: 2rem; }

/* GRID & CARDS */
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-bottom: 4rem; }
.card {
  background: var(--bg-card);
  border-radius: 12px;
  padding: 20px;
  transition: var(--transition);
  border: 1px solid transparent;
  display: flex; flex-direction: column;
}
.card:hover { transform: translateY(-10px); border-color: var(--accent-cyan); box-shadow: 0 10px 20px rgba(102, 252, 241, 0.1); }
.card img { height: 200px; object-fit: cover; margin-bottom: 15px; }
.card-content { flex-grow: 1; display: flex; flex-direction: column; }
.card-title { font-size: 1.4rem; margin-bottom: 10px; }
.card-meta { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 0.85rem; color: #a0a0a0; }
.badge { background: rgba(102, 252, 241, 0.1); color: var(--accent-cyan); padding: 3px 8px; border-radius: 4px; }
.card p { font-size: 0.9rem; margin-bottom: 20px; flex-grow: 1; }

/* NEWS SECTION */
.news-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; padding: 4rem 0; }
.news-item { background: var(--bg-card); padding: 15px; border-left: 4px solid var(--accent-cyan); border-radius: 0 8px 8px 0; }

/* FILTER (Games Page) */
.filter-menu { display: flex; justify-content: center; gap: 15px; margin-bottom: 3rem; flex-wrap: wrap; }

/* GUIDE PAGE */
.guide-block { background: var(--bg-card); border-radius: 12px; padding: 40px; margin-bottom: 30px; display: flex; gap: 30px; align-items: center; border-bottom: 3px solid var(--accent-cyan); }
.guide-block:nth-child(even) { flex-direction: row-reverse; }
.guide-text { flex: 1; }
.guide-text ul { margin-top: 15px; margin-left: 20px; list-style-type: square; color: var(--accent-cyan); }
.guide-text ul span { color: var(--text-main); }
.guide-img { flex: 1; max-width: 400px; }

/* PLATFORMS PAGE */
.platform-section { margin-bottom: 5rem; background: var(--bg-card); padding: 40px; border-radius: 12px; position: relative; overflow: hidden; }
.platform-header { display: flex; align-items: center; gap: 20px; margin-bottom: 30px; }
.platform-header img { width: 60px; height: 60px; object-fit: contain; }
.platform-games { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px; }
.platform-game { background: var(--bg-dark); padding: 15px; border-radius: 8px; border-left: 3px solid var(--accent-cyan); }
.price { color: var(--accent-cyan); font-weight: bold; font-family: var(--font-heading); font-size: 1.2rem; margin-top: 10px; }

/* COMMUNITY SLIDER */
.slider-container { position: relative; max-width: 800px; margin: 4rem auto; overflow: hidden; background: var(--bg-card); border-radius: 15px; padding: 40px; text-align: center; border: 1px solid #333; }
.slider-track { display: flex; transition: transform 0.5s ease-in-out; }
.slide { min-width: 100%; padding: 0 20px; }
.avatar { width: 80px; height: 80px; border-radius: 50%; border: 3px solid var(--accent-cyan); margin: 0 auto 15px; }
.rating { color: #f3e600; font-size: 1.2rem; margin-bottom: 15px; }
.review-text { font-style: italic; font-size: 1.1rem; margin-bottom: 20px; }
.slider-controls { display: flex; justify-content: space-between; position: absolute; top: 50%; left: 0; right: 0; transform: translateY(-50%); padding: 0 20px; pointer-events: none; }
.slider-btn { pointer-events: all; background: var(--bg-dark); border: 2px solid var(--accent-cyan); color: var(--accent-cyan); width: 40px; height: 40px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; transition: var(--transition); }
.slider-btn:hover { background: var(--accent-cyan); color: var(--bg-dark); }

/* EVENT DETAILS */
.event-hero { height: 50vh; display: flex; align-items: flex-end; padding-bottom: 3rem; background: linear-gradient(to top, var(--bg-dark), transparent), url('https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80') center/cover; }
.event-meta-banner { display: flex; gap: 20px; margin-top: 10px; font-family: var(--font-heading); color: var(--accent-cyan); }
.event-body { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; padding: 4rem 0; }
.event-sidebar { background: var(--bg-card); padding: 30px; border-radius: 12px; height: fit-content; }
.event-sidebar h3 { margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }
.schedule-item { margin-bottom: 15px; }
.schedule-item strong { color: var(--accent-cyan); display: block; }

/* FOOTER */
footer { background: #07080a; padding: 3rem 0; margin-top: 4rem; border-top: 1px solid #1f2833; }
.footer-content { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
.footer-col h3 { margin-bottom: 15px; color: var(--accent-cyan); font-size: 1.2rem; }
.footer-col ul li { margin-bottom: 10px; }
.footer-col ul li a:hover { color: var(--accent-cyan); }
.footer-bottom { text-align: center; margin-top: 3rem; padding-top: 20px; border-top: 1px solid #1f2833; font-size: 0.9rem; color: #777; }

/* RESPONSIVE */
@media (max-width: 768px) {
  .nav-links { display: none; flex-direction: column; width: 100%; position: absolute; top: 100%; left: 0; background: rgba(11, 12, 16, 0.98); padding: 20px; border-bottom: 2px solid var(--accent-cyan); }
  .nav-links.active { display: flex; }
  .hamburger { display: block; }
  .hero h1 { font-size: 2.5rem; }
  .guide-block, .guide-block:nth-child(even) { flex-direction: column; }
  .event-body { grid-template-columns: 1fr; }
}
```

---

### File 2: `script.js`
This file contains all the pure vanilla JS interactivity.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 2. Video Games Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const gameCards = document.querySelectorAll(".game-card-item");

  if (filterBtns.length > 0 && gameCards.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-category");

        gameCards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          if (category === "all" || category === cardCategory) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  // 3. Community Testimonial Slider
  const track = document.querySelector(".slider-track");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (track && prevBtn && nextBtn) {
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const updateSlider = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
    });

    // Optional Auto-play
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
    }, 5000);
  }
});
```

---

### File 3: `index.html` (Home Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Home</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Shared Header -->
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <section class="hero">
    <div class="container hero-content">
      <h1>Discover the Next Generation of Gaming</h1>
      <p>Dive into epic worlds, discover the latest hits, learn pro strategies, and connect with a community that shares your passion for video games.</p>
      <a href="games.html" class="btn btn-solid">Explore Games</a>
    </div>
  </section>

  <main class="container">
    <h2 class="section-title" style="margin-top: 4rem;">Recommended Games</h2>
    <div class="grid">
      <!-- Card 1 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80" alt="Cyber Neon">
        <div class="card-content">
          <h3 class="card-title">Cyber Uprising</h3>
          <div class="card-meta">
            <span class="badge">RPG / Open World</span>
          </div>
          <p>Explore a dense metropolis filled with rogue AI, factions, and limitless customization in this next-gen RPG.</p>
          <a href="#" class="btn">Details</a>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80" alt="Space Shooter">
        <div class="card-content">
          <h3 class="card-title">Galactic Vanguard</h3>
          <div class="card-meta">
            <span class="badge">FPS / Multiplayer</span>
          </div>
          <p>Join the cosmic fleet. Engage in high-octane 6v6 battles across zero-gravity space stations.</p>
          <a href="#" class="btn">Details</a>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=600&q=80" alt="Fantasy Game">
        <div class="card-content">
          <h3 class="card-title">Elden Legacy</h3>
          <div class="card-meta">
            <span class="badge">Action / Souls-like</span>
          </div>
          <p>A brutal, beautiful dark fantasy journey where every enemy tests your skill and patience.</p>
          <a href="#" class="btn">Details</a>
        </div>
      </div>
    </div>

    <h2 class="section-title">Latest News</h2>
    <div class="news-grid">
      <div class="news-item">
        <h4>Galactic Vanguard: Season 4 Update</h4>
        <p style="font-size: 0.9rem; margin-top: 10px;">New maps, weapons, and a completely revamped battle pass launching next Tuesday.</p>
      </div>
      <div class="news-item">
        <h4>Cyber Uprising DLC Announced</h4>
        <p style="font-size: 0.9rem; margin-top: 10px;">"Neon Shadows" expansion will add 20+ hours of story and new cybernetic abilities.</p>
      </div>
      <div class="news-item">
        <h4>Next-Gen Consoles Price Drop</h4>
        <p style="font-size: 0.9rem; margin-top: 10px;">Major gaming platforms are permanently dropping hardware prices ahead of the holidays.</p>
      </div>
    </div>
  </main>

  <!-- Shared Footer -->
  <footer>
    <div class="container footer-content">
      <div class="footer-col">
        <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
        <p style="margin-top: 15px; font-size: 0.9rem; max-width: 300px;">Your ultimate hub for everything video games. Play hard, stay informed.</p>
      </div>
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="games.html">All Games</a></li>
          <li><a href="events.html">Upcoming Events</a></li>
          <li><a href="guide.html">Player Guides</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Connect</h3>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">YouTube</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; 2023 NexusGaming. All rights reserved. Built purely with HTML, CSS, & Vanilla JS.
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

### File 4: `games.html` (Video Games Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Video Games</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html" class="active">Video Games</a></li>
        <li><a href="events.html">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <main class="container" style="padding-top: 4rem;">
    <h1 class="section-title">Popular Titles</h1>
    
    <!-- JS Filter Buttons -->
    <div class="filter-menu">
      <button class="btn active filter-btn" data-category="all">All</button>
      <button class="btn filter-btn" data-category="rpg">RPG</button>
      <button class="btn filter-btn" data-category="fps">FPS</button>
      <button class="btn filter-btn" data-category="racing">Racing</button>
    </div>

    <div class="grid">
      <!-- Game 1 -->
      <div class="card game-card-item" data-category="rpg">
        <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80" alt="RPG">
        <div class="card-content">
          <h3 class="card-title">Cyber Uprising</h3>
          <div class="card-meta"><span class="badge">RPG</span> <span>Rating: 9.2/10</span></div>
          <p>Deep narrative and open-world exploration in a dystopian future.</p>
        </div>
      </div>
      <!-- Game 2 -->
      <div class="card game-card-item" data-category="fps">
        <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=600&q=80" alt="FPS">
        <div class="card-content">
          <h3 class="card-title">Galactic Vanguard</h3>
          <div class="card-meta"><span class="badge">FPS</span> <span>Rating: 8.8/10</span></div>
          <p>Competitive multiplayer space warfare with intense gunplay.</p>
        </div>
      </div>
      <!-- Game 3 -->
      <div class="card game-card-item" data-category="rpg">
        <img src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&w=600&q=80" alt="RPG">
        <div class="card-content">
          <h3 class="card-title">Elden Legacy</h3>
          <div class="card-meta"><span class="badge">RPG</span> <span>Rating: 9.8/10</span></div>
          <p>A masterpiece of dark fantasy map design and boss encounters.</p>
        </div>
      </div>
      <!-- Game 4 -->
      <div class="card game-card-item" data-category="racing">
        <img src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=600&q=80" alt="Racing">
        <div class="card-content">
          <h3 class="card-title">Neon Drift</h3>
          <div class="card-meta"><span class="badge">Racing</span> <span>Rating: 8.5/10</span></div>
          <p>High-speed street racing through synthwave-inspired cityscapes.</p>
        </div>
      </div>
      <!-- Game 5 -->
      <div class="card game-card-item" data-category="fps">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" alt="FPS">
        <div class="card-content">
          <h3 class="card-title">Tactical Ops: Zero</h3>
          <div class="card-meta"><span class="badge">FPS</span> <span>Rating: 9.0/10</span></div>
          <p>Squad-based tactical shooter where communication is survival.</p>
        </div>
      </div>
      <!-- Game 6 -->
      <div class="card game-card-item" data-category="rpg">
        <img src="https://images.unsplash.com/photo-1627856013091-fed6e4e30025?auto=format&fit=crop&w=600&q=80" alt="RPG">
        <div class="card-content">
          <h3 class="card-title">Chronicles of Aethel</h3>
          <div class="card-meta"><span class="badge">RPG</span> <span>Rating: 8.9/10</span></div>
          <p>Classic turn-based RPG mechanics mixed with stunning 3D graphics.</p>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### File 5: `guide.html` (Guides Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Guide</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html">Event</a></li>
        <li><a href="guide.html" class="active">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <main class="container" style="padding-top: 4rem;">
    <h1 class="section-title">Master the Game</h1>

    <!-- Section 1 -->
    <div class="guide-block">
      <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" alt="Beginner" class="guide-img">
      <div class="guide-text">
        <h2>1. Beginner Tutorials</h2>
        <p>Starting out can be overwhelming. Learn the basics to build a solid foundation across all genres.</p>
        <ul>
          <li><span><strong>Choosing your first game:</strong> Start with single-player story games to learn mechanics.</span></li>
          <li><span><strong>Learning controls:</strong> Practice movement and camera control simultaneously.</span></li>
          <li><span><strong>Setting sensitivity:</strong> Lower your mouse/stick sensitivity for better aim accuracy in shooters.</span></li>
        </ul>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="guide-block">
      <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" alt="Strategy" class="guide-img">
      <div class="guide-text">
        <h2>2. Strategies</h2>
        <p>Take your skills to the next level by understanding macro and micro mechanics in multiplayer and single-player environments.</p>
        <ul>
          <li><span><strong>Resource Management:</strong> Always keep health potions and ammo in reserve. Don't waste ultimates.</span></li>
          <li><span><strong>Positioning:</strong> High ground provides line of sight and cover advantages.</span></li>
          <li><span><strong>Team Tactics:</strong> Communicate cooldowns and coordinate pushes with your squad.</span></li>
        </ul>
      </div>
    </div>

    <!-- Section 3 -->
    <div class="guide-block">
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" alt="Gameplay" class="guide-img">
      <div class="guide-text">
        <h2>3. Gameplay Styles</h2>
        <p>Identify and optimize the playstyle that suits you best for maximum enjoyment and efficiency.</p>
        <ul>
          <li><span><strong>Stealth:</strong> Use sound to your advantage. Crouch-walk and analyze patrol routes before striking.</span></li>
          <li><span><strong>Aggressive/Rush:</strong> Master movement mechanics to close the gap quickly and catch enemies off guard.</span></li>
          <li><span><strong>Co-op Support:</strong> Focus on healing, buffing, and providing utility to keep the primary attackers alive.</span></li>
        </ul>
      </div>
    </div>
  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### File 6: `platforms.html` (Gaming Platforms Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Platforms</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html" class="active">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <main class="container" style="padding-top: 4rem;">
    <h1 class="section-title">Gaming Platforms</h1>

    <!-- Steam Section -->
    <section class="platform-section">
      <div class="platform-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam Logo">
        <div>
          <h2>Steam</h2>
          <p>The undisputed king of PC gaming, offering thousands of titles, huge seasonal sales, and robust community features like Workshop and Forums.</p>
        </div>
      </div>
      <h3>Top Titles on Steam</h3>
      <div class="platform-games">
        <div class="platform-game">
          <h4>Counter-Strike 2</h4>
          <p>The ultimate competitive tactical shooter focusing on team coordination and precise aim.</p>
          <div class="price">Free to Play</div>
        </div>
        <div class="platform-game">
          <h4>Baldur's Gate 3</h4>
          <p>A massive, deep, and heavily narrative-driven RPG set in the Dungeons & Dragons universe.</p>
          <div class="price">$59.99</div>
        </div>
      </div>
    </section>

    <!-- Epic Games Section -->
    <section class="platform-section">
      <div class="platform-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg" alt="Epic Logo" style="filter: invert(1);">
        <div>
          <h2>Epic Games Store</h2>
          <p>A modern digital storefront known for high-profile exclusives, a generous developer revenue split, and giving away free premium games every week.</p>
        </div>
      </div>
      <h3>Top Titles on Epic Games</h3>
      <div class="platform-games">
        <div class="platform-game">
          <h4>Fortnite</h4>
          <p>The genre-defining battle royale with massive live events and infinite crossover skins.</p>
          <div class="price">Free to Play</div>
        </div>
        <div class="platform-game">
          <h4>Alan Wake 2</h4>
          <p>A visually stunning psychological survival horror masterpiece exclusive to the platform.</p>
          <div class="price">$49.99</div>
        </div>
      </div>
    </section>

  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### File 7: `community.html` (Community Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Community</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html" class="active">Community</a></li>
      </ul>
    </div>
  </header>

  <main class="container" style="padding-top: 4rem;">
    <h1 class="section-title">What the Community Says</h1>

    <!-- JS Slider -->
    <div class="slider-container">
      <div class="slider-track">
        <!-- Slide 1 -->
        <div class="slide">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="avatar">
          <h3>Alex "Sniper" Mercer</h3>
          <p style="color: var(--accent-cyan); margin-bottom: 5px;">Playing: Galactic Vanguard</p>
          <div class="rating">★★★★★</div>
          <p class="review-text">"Absolutely mind-blowing mechanics. The movement feels fluid, and the community is highly competitive yet welcoming to new players."</p>
        </div>
        <!-- Slide 2 -->
        <div class="slide">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" class="avatar">
          <h3>Sarah_Jenova</h3>
          <p style="color: var(--accent-cyan); margin-bottom: 5px;">Playing: Cyber Uprising</p>
          <div class="rating">★★★★☆</div>
          <p class="review-text">"The story drew me in completely. I spent 80 hours just exploring the side quests. Wish there were a few more weapon types, but an incredible RPG overall."</p>
        </div>
        <!-- Slide 3 -->
        <div class="slide">
          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" class="avatar">
          <h3>DaveTheTank</h3>
          <p style="color: var(--accent-cyan); margin-bottom: 5px;">Playing: Elden Legacy</p>
          <div class="rating">★★★★★</div>
          <p class="review-text">"Died 400 times. Loved every second of it. The map design is a masterclass in how to build open worlds without handholding."</p>
        </div>
        <!-- Slide 4 -->
        <div class="slide">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" class="avatar">
          <h3>Luna_Drift</h3>
          <p style="color: var(--accent-cyan); margin-bottom: 5px;">Playing: Neon Drift</p>
          <div class="rating">★★★★☆</div>
          <p class="review-text">"The synthwave soundtrack alone makes this worth playing. The drifting physics are arcadey in the best way possible."</p>
        </div>
      </div>
      
      <!-- Controls -->
      <div class="slider-controls">
        <button class="slider-btn" id="prevBtn">&#10094;</button>
        <button class="slider-btn" id="nextBtn">&#10095;</button>
      </div>
    </div>
  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### File 8: `events.html` (Events Hub Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Events</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html" class="active">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <main class="container" style="padding-top: 4rem;">
    <h1 class="section-title">Upcoming Gaming Events</h1>
    
    <div class="grid">
      <!-- Event 1 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80" alt="Expo">
        <div class="card-content">
          <h3 class="card-title">Global Game Expo 2024</h3>
          <div class="card-meta"><span class="badge">Convention</span> <span>Oct 12, 2024</span></div>
          <p>The largest gathering of developers and fans. Witness world premieres of next-generation titles.</p>
          <a href="event-details.html" class="btn">View Details</a>
        </div>
      </div>

      <!-- Event 2 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80" alt="eSports">
        <div class="card-content">
          <h3 class="card-title">Vanguard World Championship</h3>
          <div class="card-meta"><span class="badge">eSports</span> <span>Nov 05, 2024</span></div>
          <p>The top 16 teams battle it out for a $2 Million prize pool in the ultimate FPS showdown.</p>
          <a href="event-details.html" class="btn">View Details</a>
        </div>
      </div>

      <!-- Event 3 -->
      <div class="card">
        <img src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=600&q=80" alt="Livestream">
        <div class="card-content">
          <h3 class="card-title">Indie Showcase Livestream</h3>
          <div class="card-meta"><span class="badge">Digital Event</span> <span>Dec 01, 2024</span></div>
          <p>Discover the hidden gems of the year. A 3-hour digital stream highlighting upcoming indie releases.</p>
          <a href="event-details.html" class="btn">View Details</a>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```

---

### File 9: `event-details.html` (Specific Event Page)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NexusGaming | Event Details</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <div class="container navbar">
      <a href="index.html" class="logo">Nexus<span>Gaming</span></a>
      <div class="hamburger">☰</div>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="games.html">Video Games</a></li>
        <li><a href="events.html" class="active">Event</a></li>
        <li><a href="guide.html">Guide</a></li>
        <li><a href="platforms.html">Platforms</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
  </header>

  <!-- Large Event Hero Banner -->
  <section class="event-hero">
    <div class="container">
      <h1 style="font-size: 3.5rem; text-shadow: 2px 2px 10px #000;">Global Game Expo 2024</h1>
      <div class="event-meta-banner">
        <span>📅 October 12 - 14, 2024</span>
        <span>📍 Los Angeles Convention Center & Online</span>
      </div>
    </div>
  </section>

  <main class="container event-body">
    <!-- Main Description -->
    <div class="event-details-text">
      <h2 style="color: var(--accent-cyan); margin-bottom: 20px;">About the Event</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">The Global Game Expo (GGX) 2024 is the ultimate destination for gamers, creators, and developers worldwide. For three consecutive days, experience hands-on demos, exclusive world premieres, and deep-dive panels with industry legends.</p>
      
      <p style="margin-bottom: 20px; font-size: 1.1rem;">Whether you are attending physically in Los Angeles or joining via our interactive digital hub, you will have front-row access to the future of interactive entertainment.</p>

      <h2 style="color: var(--accent-cyan); margin-top: 40px; margin-bottom: 20px;">What to Expect</h2>
      <ul style="list-style: square; margin-left: 20px; line-height: 2;">
        <li>Over 150 playable demo stations.</li>
        <li>Keynote presentations from top-tier publishers.</li>
        <li>Live eSports exhibition matches.</li>
        <li>Exclusive merchandise and collector's editions available only at the venue.</li>
      </ul>
    </div>

    <!-- Sidebar / Schedule -->
    <aside class="event-sidebar">
      <h3>Event Schedule</h3>
      <div class="schedule-item">
        <strong>Day 1: Oct 12 (10:00 AM)</strong>
        <p>Opening Keynote & Major Console Reveals</p>
      </div>
      <div class="schedule-item">
        <strong>Day 2: Oct 13 (12:00 PM)</strong>
        <p>Developer Panels & eSports Showmatch</p>
      </div>
      <div class="schedule-item">
        <strong>Day 3: Oct 14 (09:00 AM)</strong>
        <p>Indie Highlights & Closing Ceremony</p>
      </div>

      <div style="margin-top: 30px;">
        <button class="btn btn-solid" style="width: 100%; padding: 15px; font-size: 1.1rem;">Reserve a Spot</button>
      </div>
    </aside>
  </main>

  <footer>
    <div class="container footer-bottom" style="margin-top: 0; padding-top: 0; border: none;">
      &copy; 2023 NexusGaming. All rights reserved.
    </div>
  </footer>
  <script src="script.js"></script>
</body>
</html>
```