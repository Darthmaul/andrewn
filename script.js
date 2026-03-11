// ── Respect reduced motion preference ──
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ── Mobile nav toggle ──
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
  }
});

// ── Nav scroll style ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Active nav highlighting ──
const sections = document.querySelectorAll('section[id]');
const sectionNavLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      sectionNavLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

sections.forEach(section => navObserver.observe(section));

// ── Scroll animations ──
if (!prefersReducedMotion) {
  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    animObserver.observe(el);
  });
} else {
  // Show everything immediately
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.classList.add('visible');
  });
}

// ── Stat counter animation ──
function animateCounter(el, target, suffix, duration) {
  const startTime = performance.now();
  duration = duration || 1800;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    el.textContent = current + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

if (!prefersReducedMotion) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, target, suffix, 1800);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    counterObserver.observe(el);
  });
} else {
  // Show final values immediately
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = el.getAttribute('data-target');
    const suffix = el.getAttribute('data-suffix') || '';
    el.textContent = target + suffix;
  });
}

// ── Typed text effect ──
const typedEl = document.getElementById('typed-text');
const phrases = ['B2B SaaS Platforms', 'Platform & Integrations', 'Security & Compliance'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (prefersReducedMotion) {
    typedEl.textContent = phrases[0];
    return;
  }

  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === current.length) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 2000);
      return;
    }
    setTimeout(typeEffect, 70);
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 400);
      return;
    }
    setTimeout(typeEffect, 35);
  }
}

typeEffect();

// ── Experience expand/collapse ──
document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const details = document.getElementById(targetId);
    const isOpen = details.classList.contains('open');

    details.classList.toggle('open');
    btn.classList.toggle('active');

    if (isOpen) {
      btn.innerHTML = 'Read more <span class="toggle-icon">+</span>';
    } else {
      btn.innerHTML = 'Show less <span class="toggle-icon">+</span>';
    }
  });
});
