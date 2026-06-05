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
    const BASE = 'https://filodidentita.it/blog/wp-content/uploads/2025/02/';
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
     IMMAGINI PER EDIZIONE
     ════════════════════════════════════════ */
  (function () {
    const B = 'https://filodidentita.it/blog/wp-content/uploads/';

    const PHOTOS = {
      2025: [
        B+'2025/06/Michela-Panichi-819x1024.jpeg',
        B+'2025/06/Gabriele-Cavallini-819x1024.jpeg',
        B+'2025/06/Chiara-Tagliaferri-819x1024.png',
        B+'2025/06/Giulia-Muscatelli-819x1024.png',
        B+'2025/06/Fumettibrutti-opzione-1-819x1024.png',
        B+'2025/06/Flavio-Nuccitelli-819x1024.png',
        B+'2025/06/Veronica-Lucchesi-opzione-1-819x1024.png',
        B+'2025/06/Giuliana-Sgrena-819x1024.png',
        B+'2025/06/Aldo-Simeone-819x1024.png',
        B+'2025/06/Beatrice-Salvioni--819x1024.png',
        B+'2025/06/Emanuela-Crosetti-819x1024.png',
        B+'2025/06/TARA-approvata-819x1024.png',
        B+'2025/06/Carolina-Capria-819x1024.png',
        B+'2025/06/Simona-Conigliaro-819x1024.png',
        B+'2025/06/Simone-Matteuzzi-819x1024.png',
        B+'2025/06/Teresa-Ciabatti-819x1024.png',
        B+'2025/06/Gloria-Riggio-819x1024.png',
        B+'2025/06/Fabio-Schember-819x1024.png',
      ],
      2024: [
        B+'2025/02/Filo.marte-38-scaled.jpg', B+'2025/02/Filo.marte-34-scaled.jpg',
        B+'2025/02/Filo.marte-35-scaled.jpg', B+'2025/02/Filo.marte-21-scaled.jpg',
        B+'2025/02/Filo.marte-37-scaled.jpg', B+'2025/02/Filo.marte-23-scaled.jpg',
        B+'2025/02/Filo.marte-22-scaled.jpg', B+'2025/02/Filo.marte-36-scaled.jpg',
        B+'2025/02/Filo.marte-32-scaled.jpg', B+'2025/02/Filo.marte-26-scaled.jpg',
        B+'2025/02/Filo.marte-27-scaled.jpg', B+'2025/02/Filo.marte-33-scaled.jpg',
        B+'2025/02/Filo.marte-25-scaled.jpg', B+'2025/02/Filo.marte-31-scaled.jpg',
        B+'2025/02/Filo.marte-19-scaled.jpg', B+'2025/02/Filo.marte-18-scaled.jpg',
        B+'2025/02/Filo.marte-30-scaled.jpg', B+'2025/02/Filo.marte-24-scaled.jpg',
        B+'2025/02/Filo.marte-62-scaled.jpg', B+'2025/02/Filo.marte-76-1-scaled.jpg',
      ],
      2023: [
        B+'2025/02/28-scaled.jpg', B+'2025/02/29-scaled.jpg', B+'2025/02/23-scaled.jpg',
        B+'2025/02/33-scaled.jpg', B+'2025/02/27-scaled.jpg', B+'2025/02/26-scaled.jpg',
        B+'2025/02/32-scaled.jpg', B+'2025/02/24-scaled.jpg', B+'2025/02/30-scaled.jpg',
        B+'2025/02/31-scaled.jpg', B+'2025/02/25-scaled.jpg',
      ],
      2022: [
        B+'2025/06/alectrenta.png',           B+'2025/06/pellegrino-1024x1024.png',
        B+'2025/06/marsicano-1024x1024.png',  B+'2025/06/nativo-1024x1024.png',
        B+'2025/06/nuccitelli-1024x1024.png',
        B+'2025/02/Filo-didentita-background-img-scaled.jpg',
        B+'2025/02/Filo-dIdentita-2023-Brochure-sfondo-scaled.jpg',
      ],
    };

    function shuffle(arr) {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    // 1. Immagine casuale edizione corrente (edizioni.html)
    const edVisualImg = document.querySelector('.ed-visual img');
    if (edVisualImg) edVisualImg.src = shuffle(PHOTOS[2025])[0];

    // 2. Immagini casuali edizioni passate (edizioni.html)
    document.querySelectorAll('.past-card').forEach(card => {
      const link = card.querySelector('.past-link');
      if (!link) return;
      const m = (link.getAttribute('href') || '').match(/(\d{4})\.html/);
      if (!m) return;
      const pool = PHOTOS[parseInt(m[1])];
      if (!pool) return;
      const img = card.querySelector('.past-img img');
      if (img) img.src = shuffle(pool)[0];
    });

    // 3. Carosello hero singole pagine edizione
    const heroBg = document.querySelector('.ed-hero-bg');
    if (!heroBg) return;
    const pm = window.location.pathname.match(/(\d{4})\.html/);
    if (!pm) return;
    const pool = PHOTOS[parseInt(pm[1])];
    if (!pool) return;

    const shuffled = shuffle(pool);
    let imgs = Array.from(heroBg.querySelectorAll('img'));
    if (imgs.length === 1) {
      const clone = document.createElement('img');
      clone.alt = imgs[0].alt;
      heroBg.appendChild(clone);
      imgs = Array.from(heroBg.querySelectorAll('img'));
    }

    let idx = 0;
    let cur = imgs[0], nxt = imgs[1];
    cur.src = shuffled[idx];
    cur.classList.add('active');
    idx = (idx + 1) % shuffled.length;

    setInterval(() => {
      nxt.onload = () => {
        cur.classList.remove('active');
        nxt.classList.add('active');
        [cur, nxt] = [nxt, cur];
        idx = (idx + 1) % shuffled.length;
      };
      nxt.src = shuffled[idx];
    }, 5000);
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
     THREAD DRAW-ON
     Each SVG path with .thread-path draws itself
     via stroke-dashoffset animation when it enters
     the viewport. The hero thread fires on load.
     ════════════════════════════════════════ */
  (function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Immediately reveal all thread paths for reduced-motion users
      document.querySelectorAll('.thread-path').forEach(p => {
        p.style.strokeDasharray = 'none';
        p.style.strokeDashoffset = '0';
      });
      document.querySelectorAll('.town-group').forEach(g => g.classList.add('visible'));
      return;
    }

    const EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';

    function prepPath(path) {
      const len = Math.ceil(path.getTotalLength());
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      return len;
    }

    function drawPath(path, duration, delay) {
      setTimeout(() => {
        path.style.transition = `stroke-dashoffset ${duration}ms ${EXPO}`;
        path.style.strokeDashoffset = '0';
      }, delay);
    }

    // ── Hero thread: fires ~600ms after DOMContentLoaded ──
    const heroThread = document.querySelector('[data-thread-hero]');
    if (heroThread) {
      heroThread.querySelectorAll('.thread-path').forEach((path, i) => {
        prepPath(path);
        drawPath(path, 2500, 600 + i * 320);
      });
    }

    // ── Scroll-triggered thread SVGs ──
    document.querySelectorAll('[data-thread-svg]').forEach(svg => {
      const paths = [...svg.querySelectorAll('.thread-path')];
      paths.forEach(prepPath);

      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        paths.forEach((path, i) => drawPath(path, 1900, 20 + i * 260));
        io.unobserve(svg);
      }, { threshold: 0.15 });

      io.observe(svg);
    });

    // ── Territory map: thread draws first, then town dots stagger in ──
    const mapSvg = document.querySelector('[data-territory-map]');
    if (mapSvg) {
      const mainPath = mapSvg.querySelector('.thread-path');
      const townGroups = [...mapSvg.querySelectorAll('.town-group')];
      if (mainPath) prepPath(mainPath);

      const io = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        if (mainPath) drawPath(mainPath, 2100, 20);
        // Dots appear while thread is drawing (starting at 700ms, 230ms apart)
        townGroups.forEach((g, i) => {
          setTimeout(() => g.classList.add('visible'), 700 + i * 230);
        });
        io.unobserve(mapSvg);
      }, { threshold: 0.2 });

      io.observe(mapSvg);
    }
  })();


});
