document.addEventListener("DOMContentLoaded", () => {
	document.body.classList.add("js-ready");

	initSmoothScroll();
	initRevealOnScroll();
	initReviewSlider();
});

function initSmoothScroll() {
	const links = document.querySelectorAll('a[href^="#"]');

	links.forEach((link) => {
		link.addEventListener("click", (event) => {
			const hash = link.getAttribute("href");
			if (!hash || hash === "#") {
				return;
			}

			const target = document.querySelector(hash);
			if (!target) {
				return;
			}

			event.preventDefault();

			const header = document.querySelector(".site-header");
			const offset = header ? header.offsetHeight + 16 : 0;
			const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

			window.scrollTo({
				top: targetPosition,
				behavior: "smooth"
			});
		});
	});
}

function initRevealOnScroll() {
	const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
	if (!revealItems.length) {
		return;
	}

	if (!("IntersectionObserver" in window)) {
		revealItems.forEach((item) => item.classList.add("is-visible"));
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			});
		},
		{
			threshold: 0.18,
			rootMargin: "0px 0px -40px 0px"
		}
	);

	revealItems.forEach((item) => observer.observe(item));
}

function initReviewSlider() {
	const slider = document.querySelector("[data-review-slider]");
	if (!slider) {
		return;
	}

	const slides = Array.from(slider.querySelectorAll("[data-slide]"));
	const prevButton = slider.querySelector("[data-prev]");
	const nextButton = slider.querySelector("[data-next]");
	const dotsContainer = slider.querySelector("[data-dots]");

	if (!slides.length || !prevButton || !nextButton || !dotsContainer) {
		return;
	}

	let activeIndex = 0;
	let autoRotateId = null;

	const dots = slides.map((_, index) => {
		const dot = document.createElement("button");
		dot.type = "button";
		dot.setAttribute("aria-label", `Arată review-ul ${index + 1}`);
		dot.addEventListener("click", () => {
			showSlide(index);
			restartAutoRotate();
		});
		dotsContainer.append(dot);
		return dot;
	});

	function showSlide(index) {
		activeIndex = (index + slides.length) % slides.length;

		slides.forEach((slide, slideIndex) => {
			const isActive = slideIndex === activeIndex;
			slide.classList.toggle("is-active", isActive);
			slide.setAttribute("aria-hidden", String(!isActive));
		});

		dots.forEach((dot, dotIndex) => {
			const isActive = dotIndex === activeIndex;
			dot.classList.toggle("is-active", isActive);
			dot.setAttribute("aria-pressed", String(isActive));
		});
	}

	function startAutoRotate() {
		if (autoRotateId) {
			return;
		}

		autoRotateId = window.setInterval(() => {
			showSlide(activeIndex + 1);
		}, 5000);
	}

	function stopAutoRotate() {
		if (!autoRotateId) {
			return;
		}

		window.clearInterval(autoRotateId);
		autoRotateId = null;
	}

	function restartAutoRotate() {
		stopAutoRotate();
		startAutoRotate();
	}

	prevButton.addEventListener("click", () => {
		showSlide(activeIndex - 1);
		restartAutoRotate();
	});

	nextButton.addEventListener("click", () => {
		showSlide(activeIndex + 1);
		restartAutoRotate();
	});

	slider.addEventListener("mouseenter", stopAutoRotate);
	slider.addEventListener("mouseleave", startAutoRotate);
	slider.addEventListener("focusin", stopAutoRotate);
	slider.addEventListener("focusout", (event) => {
		if (event.relatedTarget && slider.contains(event.relatedTarget)) {
			return;
		}

		startAutoRotate();
	});

	showSlide(0);
	startAutoRotate();
}
