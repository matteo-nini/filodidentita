/* ============================================
   FILO D'IDENTITÀ — PARTIALS
   Inietta nav e footer. Chiamato DOPO main.js.

   Variabile globale opzionale (prima di caricare questo file):
     window.SITE_ROOT = '../'   ← per pagine in sottocartelle (es. edizioni/)
     window.SITE_ROOT = ''      ← per pagine nella root (default)
   ============================================ */
(function () {
  'use strict';

  const ROOT = (typeof window.SITE_ROOT !== 'undefined') ? window.SITE_ROOT : '';

  /* ── NAV HTML ── */
  const navHTML = `
<nav class="site-nav" aria-label="Navigazione principale">
  <a href="${ROOT}index.html" class="nav-logo" aria-label="Filo d'identità — home">
    <img src="${ROOT}assets/logo.svg" alt="Filo d'identità" />
  </a>
  <ul class="nav-links" role="list">
    <li><a href="${ROOT}chi-siamo.html">Chi siamo</a></li>
    <li><a href="${ROOT}edizioni.html">Edizioni</a></li>
    <li><a href="${ROOT}edizioni/4-2025.html">Programma</a></li>
    <li><a href="${ROOT}gallery.html">Gallery</a></li>
    <li><a href="${ROOT.replace(/\/$/, '') || '.'}/../blog" target="_self">Blog</a></li>
    <li><a href="${ROOT}contatti.html" class="nav-cta">Segui il filo</a></li>
  </ul>
  <button class="nav-hamburger" aria-label="Apri menu" aria-expanded="false" aria-controls="nav-mobile">
    <span></span><span></span><span></span>
  </button>
</nav>

<div class="nav-mobile" id="nav-mobile" role="dialog" aria-label="Menu mobile" aria-modal="true">
  <a href="${ROOT}chi-siamo.html">Chi siamo</a>
  <a href="${ROOT}edizioni.html">Edizioni</a>
  <a href="${ROOT}edizioni/4-2025.html">Programma</a>
  <a href="${ROOT}gallery.html">Gallery</a>
  <a href="/blog">Blog</a>
  <a href="${ROOT}contatti.html" class="nav-mobile-cta">Segui il filo →</a>
  <div class="nav-mobile-footer">
    <a href="https://instagram.com/filodidentita" target="_blank" rel="noopener">Instagram</a>
    <a href="https://facebook.com/filodidentita" target="_blank" rel="noopener">Facebook</a>
    <a href="${ROOT}contatti.html">Contatti</a>
  </div>
</div>`;

  /* ── FOOTER HTML ── */
  const footerHTML = `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${ROOT}assets/logo.svg" alt="Filo d'identità" class="footer-logo" />
        <p>Un festival letterario e artistico che esplora l'identità attraverso parola, immagine e suono. Dal 2022, tra Pisa e Firenze.</p>
      </div>
      <div class="footer-col">
        <h4>Navigazione</h4>
        <ul>
          <li><a href="${ROOT}chi-siamo.html">Chi siamo</a></li>
          <li><a href="${ROOT}edizioni.html">Edizioni</a></li>
          <li><a href="${ROOT}edizioni/4-2025.html">Programma 2025</a></li>
          <li><a href="${ROOT}gallery.html">Gallery</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Informazioni</h4>
        <ul>
          <li><a href="${ROOT}contatti.html">Contatti</a></li>
          <li><a href="${ROOT}privacy.html">Privacy Policy</a></li>
          <li><a href="${ROOT}cookie.html">Cookie Policy</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Seguici</h4>
        <div class="footer-social">
          <a href="https://instagram.com/filodidentita" aria-label="Instagram" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://facebook.com/filodidentita" aria-label="Facebook" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
        </div>
        <p style="font-size:.7rem;color:rgba(250,246,247,.25);margin-top:1rem;line-height:1.6">
          #filodidentita<br>@filodidentita
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Filo d'identità. Tutti i diritti riservati.</p>
      <p>Progetto letterario tra <a href="https://www.comune.pontedera.pi.it" target="_blank" rel="noopener">Pisa</a> e <a href="https://www.comune.fucecchio.fi.it" target="_blank" rel="noopener">Firenze</a></p>
    </div>
  </div>
</footer>`;

  /* ── Injection ── */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ── Re-init nav interactions after DOM injection ── */
  const nav       = document.querySelector('.site-nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const mobile    = document.querySelector('.nav-mobile');

  function updateScrollState() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  if (hamburger && mobile) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobile.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    mobile.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobile.classList.contains('open')) {
        hamburger.classList.remove('open');
        mobile.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Active link highlight ── */
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (!href || href === '/' || href.includes('index.html')) return;
    const stem = href.replace(/\.html$/, '').split('/').pop();
    if (stem && path.includes(stem)) a.classList.add('active');
  });

})();
