/* ============================================
   FILO D'IDENTITÀ — MAIN JS
   ============================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ════════════════════════════════════════
     NAV SCROLL + COLOR
     ════════════════════════════════════════ */
  const nav = document.querySelector('.site-nav');

  function updateNav() {
    if (!nav) return;
    const scrolled = window.scrollY > 60;
    nav.classList.toggle('scrolled', scrolled);
  }

  if (nav) {
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // run once on load
  }

  /* ════════════════════════════════════════
     HAMBURGER / MOBILE MENU
     ════════════════════════════════════════ */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');

  function openMenu() {
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Hamburger spans always appear light on dark overlay
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.background = 'var(--parchment)';
    });
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    // Restore correct colour based on scroll + hero
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.background = '';
    });
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }

  /* ════════════════════════════════════════
     FADE-UP ON SCROLL
     ════════════════════════════════════════ */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const delay = +(e.target.dataset.delay || 0);
          setTimeout(() => e.target.classList.add('visible'), delay);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => io.observe(el));
  }

  /* ════════════════════════════════════════
     TICKER — duplicate for seamless loop
     ════════════════════════════════════════ */
  const ticker = document.querySelector('.ticker');
  if (ticker) {
    const clone = ticker.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    ticker.parentElement.appendChild(clone);
  }

  /* ════════════════════════════════════════
     COUNT-UP ANIMATION
     ════════════════════════════════════════ */
  document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || '';
      let current = 0;
      const steps = 55;
      const interval = setInterval(() => {
        current = Math.min(current + target / steps, target);
        el.textContent = Math.round(current) + suffix;
        if (current >= target) clearInterval(interval);
      }, 1200 / steps);
      io.unobserve(el);
    }, { threshold: 0.5 });
    io.observe(el);
  });

  /* ════════════════════════════════════════
     ACTIVE NAV LINK
     ════════════════════════════════════════ */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/^\.\.\//, '/');
    if (!href || href === '/' || href === '/index.html') return;
    // match by filename stem
    const stem = href.replace(/\.html$/, '').split('/').pop();
    if (stem && path.includes(stem)) a.classList.add('active');
  });

});
