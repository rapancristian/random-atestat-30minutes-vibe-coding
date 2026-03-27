/* ========================================
   NEXUS GAMING - Main JavaScript
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
    /* ---- Mobile nav toggle ---- */
    const toggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");
            navLinks.classList.toggle("open");
        });

        document.querySelectorAll(".nav-links a").forEach((a) => {
            a.addEventListener("click", () => {
                toggle.classList.remove("active");
                navLinks.classList.remove("open");
            });
        });
    }

    /* ---- Active nav highlight ---- */
    const page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach((a) => {
        const href = a.getAttribute("href");
        if (href === page || (page === "" && href === "index.html")) {
            a.classList.add("active");
        }
    });

    /* ---- Game filter (games.html) ---- */
    const filterBtns = document.querySelectorAll(".filter-btn");
    const gameCards = document.querySelectorAll(".game-card");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;
            gameCards.forEach((card) => {
                const show = filter === "all" || card.dataset.category === filter;
                card.style.display = show ? "" : "none";

                if (show) {
                    card.style.animation = "none";
                    card.offsetHeight;
                    card.style.animation = "fadeUp .4s ease both";
                }
            });
        });
    });

    /* ---- Community slider ---- */
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dot");
    const prevBtn = document.querySelector(".slider-btn.prev");
    const nextBtn = document.querySelector(".slider-btn.next");

    let cur = 0;
    let autoTimer;

    function goTo(index) {
        if (!slides.length || !track) {
            return;
        }

        cur = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${cur * 100}%)`;
        dots.forEach((dot, idx) => dot.classList.toggle("active", idx === cur));
    }

    function resetAuto() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => goTo(cur + 1), 5000);
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            goTo(cur - 1);
            resetAuto();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            goTo(cur + 1);
            resetAuto();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener("click", () => {
            goTo(idx);
            resetAuto();
        });
    });

    if (slides.length) {
        goTo(0);
        autoTimer = setInterval(() => goTo(cur + 1), 5000);
    }

    /* ---- Event detail page ---- */
    if (page === "event-details.html") {
        const idParam = new URLSearchParams(location.search).get("id");
        const id = Number.parseInt(idParam, 10);
        fillEvent(id);
    }
});

/* ========== EVENT DATA ========== */
const events = [
    {
        id: 1,
        title: "GameFest 2025",
        date: "August 15 - 17, 2025",
        location: "Los Angeles Convention Center - Physical Event",
        emoji: "G",
        gradient: "img-ev1",
        desc: "GameFest 2025 is the ultimate gaming convention bringing together developers, players, and industry leaders for three unforgettable days of world-premiere reveals, hands-on demos, developer panels, community tournaments, and after-parties. Whether you are a casual gamer or a hardcore competitor, GameFest has something for everyone. Explore massive exhibition halls filled with the latest hardware and upcoming titles, attend masterclasses hosted by top game designers, and compete in open tournaments across multiple genres.",
        schedule: [
            ["09:00", "Doors open - Registration and welcome kits"],
            ["10:00", "Opening ceremony and keynote by featured studio"],
            ["11:30", "New game reveals and cinematic trailer showcase"],
            ["13:00", "Lunch break - Demo floor opens to all attendees"],
            ["14:30", "Developer panels and live Q&A sessions"],
            ["16:00", "Community tournaments begin (FPS / Fighting / Racing)"],
            ["18:00", "Evening showcase and award ceremony"],
            ["20:00", "After-party and networking mixer"]
        ]
    },
    {
        id: 2,
        title: "Valorant Champions 2025",
        date: "September 5 - 8, 2025",
        location: "Seoul, South Korea - Hybrid (Online + On-site)",
        emoji: "T",
        gradient: "img-ev2",
        desc: "The pinnacle of competitive Valorant returns as 16 of the world best teams battle for the Champions title and a $2,000,000 prize pool. Taking place in the iconic Seoul Olympic Gymnastics Arena, this four-day event combines nail-biting tactical gameplay with an electric live audience atmosphere. Fans worldwide can tune in for every clutch, ace, and overtime through the official broadcast. Expect exclusive skin drops, talent meet-and-greets, and a cosplay showcase during breaks between matches.",
        schedule: [
            ["10:00", "Pre-show analysis and team introductions"],
            ["11:00", "Quarter-finals - Best of 3"],
            ["14:00", "Semi-finals - Best of 3"],
            ["16:30", "Show matches and community games"],
            ["18:00", "Grand final - Best of 5"],
            ["21:00", "Award ceremony, MVP announcement and closing"]
        ]
    },
    {
        id: 3,
        title: "Indie Showcase Live 2025",
        date: "October 12, 2025",
        location: "Online - Global Livestream",
        emoji: "*",
        gradient: "img-ev3",
        desc: "A lovingly curated digital showcase spotlighting over 30 of the most promising indie games headed to PC and consoles in 2025-2026. Hosted by popular content creators, the event features world-premiere trailers, developer deep-dive interviews, and an Audience Choice award voted on live by viewers. From hand-drawn metroidvanias to narrative-driven sci-fi adventures, Indie Showcase Live celebrates the creativity and passion of independent game development.",
        schedule: [
            ["16:00", "Livestream begins - Host introduction and hype reel"],
            ["16:15", "Segment 1 - Action and Adventure reveals"],
            ["17:00", "Developer spotlight interviews (3 studios)"],
            ["17:30", "Segment 2 - RPG and Strategy reveals"],
            ["18:15", "Audience Choice live vote and results"],
            ["18:45", "Final surprise reveals and closing remarks"]
        ]
    }
];

function fillEvent(id) {
    const ev = events.find((event) => event.id === id);
    if (!ev) {
        return;
    }

    document.title = `${ev.title} - NEXUS Gaming`;

    const banner = document.querySelector(".ev-banner");
    if (banner) {
        banner.className = `ev-banner ${ev.gradient}`;
        const label = banner.querySelector("span");
        if (label) {
            label.textContent = ev.emoji;
        }
    }

    const h1 = document.querySelector(".ev-content h1");
    if (h1) {
        h1.textContent = ev.title;
    }

    const dateEl = document.getElementById("ev-date");
    if (dateEl) {
        dateEl.textContent = ev.date;
    }

    const locEl = document.getElementById("ev-loc");
    if (locEl) {
        locEl.textContent = ev.location;
    }

    const desc = document.querySelector(".ev-desc");
    if (desc) {
        desc.textContent = ev.desc;
    }

    const list = document.querySelector(".sch-list");
    if (list) {
        list.innerHTML = ev.schedule
            .map(
                (item) =>
                    `<div class="sch-item"><span class="sch-time">${item[0]}</span><span class="sch-desc">${item[1]}</span></div>`
            )
            .join("");
    }
}
