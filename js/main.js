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
     HERO CAROUSEL
     ════════════════════════════════════════ */
  (function () {
    const BASE = 'https://filodidentita.it/wp-content/uploads/2025/02/';
    const files = [
      'Filo.marte-10-scaled.jpg','Filo.marte-11-scaled.jpg','Filo.marte-12-scaled.jpg',
      'Filo.marte-15-scaled.jpg','Filo.marte-16-scaled.jpg','Filo.marte-17-scaled.jpg',
      'Filo.marte-18-scaled.jpg','Filo.marte-19-scaled.jpg','Filo.marte-20-scaled.jpg',
      'Filo.marte-21-scaled.jpg','Filo.marte-22-scaled.jpg','Filo.marte-23-scaled.jpg',
      'Filo.marte-24-scaled.jpg','Filo.marte-25-scaled.jpg','Filo.marte-26-scaled.jpg',
      'Filo.marte-27-scaled.jpg','Filo.marte-28-scaled.jpg','Filo.marte-29-scaled.jpg',
      'Filo.marte-30-scaled.jpg','Filo.marte-31-scaled.jpg','Filo.marte-32-scaled.jpg',
      'Filo.marte-33-scaled.jpg','Filo.marte-34-scaled.jpg','Filo.marte-35-scaled.jpg',
      'Filo.marte-36-scaled.jpg','Filo.marte-37-scaled.jpg','Filo.marte-38-scaled.jpg',
      'Filo.marte-48-scaled.jpg','Filo.marte-49-scaled.jpg','Filo.marte-58-scaled.jpg',
      'Filo.marte-59-scaled.jpg','Filo.marte-61-scaled.jpg','Filo.marte-62-scaled.jpg',
      'Filo.marte-63-scaled.jpg','Filo.marte-64-scaled.jpg','Filo.marte-65-scaled.jpg',
      'Filo.marte-66-scaled.jpg','Filo.marte-67-scaled.jpg','Filo.marte-70-scaled.jpg',
      'Filo.marte-71-scaled.jpg','Filo.marte-72-scaled.jpg','Filo.marte-73-scaled.jpg',
      'Filo.marte-74-scaled.jpg','Filo.marte-75-scaled.jpg','Filo.marte-76-scaled.jpg',
      'Filo.marte-77-scaled.jpg','Filo.marte-78-scaled.jpg','Filo.marte-79-scaled.jpg',
      'Filo.marte-80-scaled.jpg','Filo.marte-81-scaled.jpg','Filo.marte-82-scaled.jpg',
      'Filo.marte-83-scaled.jpg','Filo.marte-84-scaled.jpg','Filo.marte-85-scaled.jpg',
      'Filo.marte-86-scaled.jpg','Filo.marte-87-scaled.jpg',
      '1-scaled.jpg','2-scaled.jpg','3-scaled.jpg','4-scaled.jpg','5-scaled.jpg',
      '6-scaled.jpg','7-scaled.jpg','8-scaled.jpg','9-scaled.jpg','10-scaled.jpg',
      '23-scaled.jpg','24-scaled.jpg','25-scaled.jpg','26-scaled.jpg','27-scaled.jpg',
      '28-scaled.jpg','29-scaled.jpg','30-scaled.jpg','31-scaled.jpg','32-scaled.jpg','33-scaled.jpg',
    ];

    // Fisher-Yates shuffle
    for (let i = files.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [files[i], files[j]] = [files[j], files[i]];
    }

    const imgs = document.querySelectorAll('.hero-carousel img');
    if (!imgs.length) return;

    let idx = 0;
    let current = imgs[0];
    let next    = imgs[1];

    function loadAndSwap() {
      const url = BASE + files[idx];
      next.onload = () => {
        current.classList.remove('active');
        next.classList.add('active');
        [current, next] = [next, current];
        idx = (idx + 1) % files.length;
      };
      next.src = url;
    }

    // Prima immagine subito
    current.src = BASE + files[idx];
    current.classList.add('active');
    idx = (idx + 1) % files.length;

    setInterval(loadAndSwap, 5000);
  })();

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
