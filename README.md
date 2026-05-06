# Filo d'identità — Sito Custom + WordPress su /blog
## Guida completa al deploy su SiteGround

---

## Struttura del progetto

```
filodidentita/
├── index.html          → Homepage
├── chi-siamo.html      → Chi siamo
├── programma.html      → Programma 2025
├── edizioni.html       → Archivio edizioni
├── gallery.html        → Gallery fotografica
├── contatti.html       → Contatti (con form)
├── css/
│   ├── base.css        → Variabili, tipografia, componenti
│   └── nav-footer.css  → Navigazione e footer
├── js/
│   └── main.js         → Interattività (nav, animazioni, ecc.)
└── assets/             → Immagini e loghi (da aggiungere)
    ├── logo.svg
    ├── hero-photo.jpg
    ├── team-photo.jpg
    ├── edition-2022.jpg
    ├── edition-2023.jpg
    ├── edition-2024.jpg
    ├── edition-2025.jpg
    ├── team/
    │   ├── member-1.jpg … member-N.jpg
    ├── partners/
    │   ├── partner-1.png … partner-N.png
    └── gallery/
        ├── foto-01.jpg … foto-N.jpg
```

---

## Parte 1 — Spostare WordPress su `/blog`

Questo è il passaggio più delicato. Segui la procedura nell'ordine esatto.

### 1.1 — Backup completo prima di tutto

1. In SiteGround, vai su **Site Tools → Security → Backups**
2. Crea un backup manuale completo (file + database)
3. Scaricalo in locale come sicurezza

### 1.2 — Sposta WordPress in una sottocartella

WordPress è attualmente installato nella root (`public_html/`). Lo sposti in `public_html/blog/`.

**Metodo consigliato: usa SiteGround Migrator o file manager**

1. Vai su **Site Tools → File Manager** (o usa FTP/SFTP)
2. Accedi a `public_html/`
3. Crea una nuova cartella chiamata `blog`
4. Sposta **tutti i file WordPress** (wp-admin, wp-content, wp-includes, wp-*.php, xmlrpc.php, ecc.) nella cartella `blog/`
   - **NON spostare** `.htaccess` della root — lo riscriveremo

### 1.3 — Aggiorna gli URL di WordPress nel database

1. Accedi al **phpMyAdmin** da Site Tools → Database → phpMyAdmin
2. Seleziona il database del sito
3. Vai su **SQL** e lancia questa query (sostituisci i valori):

```sql
-- Aggiorna l'URL del sito
UPDATE wp_options SET option_value = 'https://filodidentita.it/blog' WHERE option_name = 'siteurl';
UPDATE wp_options SET option_value = 'https://filodidentita.it' WHERE option_name = 'home';
```

⚠️ **Importante**: `siteurl` deve puntare a `/blog`, ma `home` rimane alla root — questo permette a WordPress di girare sotto `/blog` mentre la homepage custom è alla radice.

### 1.4 — Aggiorna wp-config.php

Connettiti via SFTP e modifica `public_html/blog/wp-config.php`. Aggiungi queste righe **prima** di `/* That's all, stop editing! */`:

```php
define('WP_HOME', 'https://filodidentita.it');
define('WP_SITEURL', 'https://filodidentita.it/blog');
```

### 1.5 — Crea il nuovo `.htaccess` nella root

Questo file gestisce sia il routing di WordPress che le pagine statiche.
Crea (o sostituisci) `public_html/.htaccess`:

```apache
# ── Security headers ──
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options "nosniff"
    Header always set X-Frame-Options "SAMEORIGIN"
    Header always set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# ── Compressione Gzip ──
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript text/javascript image/svg+xml
</IfModule>

# ── Cache statici ──
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css              "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/jpeg            "access plus 6 months"
    ExpiresByType image/png             "access plus 6 months"
    ExpiresByType image/svg+xml         "access plus 6 months"
    ExpiresByType image/webp            "access plus 6 months"
    ExpiresByType font/woff2            "access plus 1 year"
</IfModule>

# ── Routing principale ──
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Forza HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Forza www → no-www (o viceversa, scegli)
    # RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]
    # RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

    # Lascia passare le richieste reali (file esistenti)
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Instrada /blog/* a WordPress
    RewriteRule ^blog(/.*)?$ blog/index.php [L]

    # Le pagine statiche rispondono direttamente (già file esistenti)
    # Nient'altro da fare per loro
</IfModule>
```

### 1.6 — Aggiorna il file `.htaccess` di WordPress

Il `.htaccess` dentro `public_html/blog/` deve restare quello standard di WordPress:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /blog/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /blog/index.php [L]
</IfModule>
# END WordPress
```

### 1.7 — Verifica

- `https://filodidentita.it` → mostra `index.html` (homepage custom)
- `https://filodidentita.it/blog` → mostra il blog WordPress
- `https://filodidentita.it/blog/wp-admin` → accesso al pannello WordPress
- Le pagine WordPress (post, categorie) continuano a funzionare

---

## Parte 2 — Caricare le pagine statiche

### 2.1 — Upload via File Manager o SFTP

Carica nella root `public_html/` (NON dentro `/blog/`):

```
public_html/
├── index.html
├── chi-siamo.html
├── programma.html
├── edizioni.html
├── gallery.html
├── contatti.html
├── css/
│   ├── base.css
│   └── nav-footer.css
├── js/
│   └── main.js
└── assets/
    └── (tutte le immagini)
```

### 2.2 — Struttura URL risultante

| URL | File servito |
|-----|-------------|
| `filodidentita.it/` | `public_html/index.html` |
| `filodidentita.it/chi-siamo` | `public_html/chi-siamo.html` |
| `filodidentita.it/programma` | `public_html/programma.html` |
| `filodidentita.it/edizioni` | `public_html/edizioni.html` |
| `filodidentita.it/gallery` | `public_html/gallery.html` |
| `filodidentita.it/contatti` | `public_html/contatti.html` |
| `filodidentita.it/blog` | WordPress |
| `filodidentita.it/blog/wp-admin` | WordPress admin |

---

## Parte 3 — Personalizzare i contenuti

### 3.1 — Logo

Sostituisci `assets/logo.svg` con il logo ufficiale di Filo d'identità.
Il logo è referenziato ovunque con `src="assets/logo.svg"` — basta tenere lo stesso nome.

Per il footer il logo viene invertito con `filter: invert(1)` — assicurati che il logo SVG sia in nero su sfondo trasparente.

### 3.2 — Immagini principali

| File | Dove viene usato | Dimensione consigliata |
|------|-----------------|----------------------|
| `assets/hero-photo.jpg` | Hero homepage | 1200×900px min |
| `assets/team-photo.jpg` | Sezione "Chi siamo" homepage | 800×700px |
| `assets/edition-2025.jpg` | Pagina Edizioni, card 2025 | 800×600px |
| `assets/edition-2024.jpg` | Pagina Edizioni, card 2024 | 800×600px |
| `assets/edition-2023.jpg` | Pagina Edizioni, card 2023 | 800×600px |
| `assets/edition-2022.jpg` | Pagina Edizioni, card 2022 | 800×600px |

### 3.3 — Team

In `chi-siamo.html` trovi blocchi `<article class="team-card">` da duplicare per ogni membro:

```html
<article class="team-card fade-up" data-delay="0">
  <div class="team-photo">
    <img src="assets/team/nome-cognome.jpg" alt="Nome Cognome" loading="lazy" />
  </div>
  <div class="team-info">
    <h3>Nome Cognome</h3>
    <p class="team-role">Ruolo nel team</p>
    <p>Breve descrizione...</p>
  </div>
</article>
```

Immagini team: `assets/team/` — formato verticale 4:5, almeno 400×500px.

### 3.4 — Partner e sponsor

In `chi-siamo.html`, sezione `.partners-logos`, aggiungi un `<div class="partner-logo">` per ogni partner:

```html
<div class="partner-logo">
  <img src="assets/partners/nome-partner.png" alt="Nome Partner" loading="lazy" />
</div>
```

I loghi vengono automaticamente colorati di grigio chiaro (filter: invert + brightness) su sfondo scuro. Usa loghi PNG con sfondo trasparente.

### 3.5 — Programma

In `programma.html`, ogni riga evento segue questo schema:

```html
<div class="event-row" data-type="lett|music|perf" data-place="pontedera|sanminiato|fucecchio|montopoli">
  <span class="ev-time">18:30</span>
  <div class="ev-title">Titolo evento<small>Sottotitolo / ospite</small></div>
  <span class="ev-place">Nome luogo</span>
  <span class="ev-type type-lett|type-music|type-perf">Categoria</span>
  <span class="ev-cta">Info →</span>
</div>
```

Per gli eventi in evidenza aggiungi la classe `featured-row`.

### 3.6 — Gallery

In `gallery.html`, ogni foto segue questo schema:

```html
<figure class="masonry-item tall|wide|sq fade-up" data-year="2024" data-caption="Descrizione">
  <img src="assets/gallery/nome-foto.jpg" alt="Descrizione" loading="lazy" />
  <div class="masonry-item-overlay">
    <p class="masonry-item-caption">Descrizione</p>
    <p class="masonry-item-year">2024</p>
  </div>
</figure>
```

Classi di proporzione:
- `.tall` → ritratto verticale
- `.wide` → paesaggio orizzontale
- `.sq` → quadrato

Ottimizza le immagini prima del caricamento: usa WebP se possibile, massimo 200-400KB per foto.

---

## Parte 4 — Form di contatto

Il form in `contatti.html` usa **Formspree** (gratuito fino a 50 invii/mese).

### Setup Formspree:
1. Registrati su [formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Copia il codice del form `action` (tipo `https://formspree.io/f/TUOID`)
4. In `contatti.html` sostituisci `https://formspree.io/f/TUOID` con il tuo endpoint

### Alternative:
- **Netlify Forms**: se passi a Netlify
- **WPForms / ContactForm7 via WordPress**: puoi incorporare un form da `/blog` in un iframe
- **PHP nativo**: crea un file `send-mail.php` nella root e punta il form lì

---

## Parte 5 — WordPress sotto /blog

### Aggiorna il menu di WordPress

Nel pannello WordPress (`/blog/wp-admin`):
- Vai su **Aspetto → Menu** e aggiorna i link interni
- Assicurati che i link puntino a `/blog/...` e non a `/...`

### Aggiorna il tema WordPress

Se vuoi che il blog sia visivamente coerente con il sito custom, puoi:
1. Aggiungere un link al CSS custom nel tema WordPress
2. O creare un tema child con le stesse variabili CSS

Un modo semplice: aggiungi nel file `functions.php` del tema:

```php
function filodidentita_enqueue() {
    wp_enqueue_style('custom-base', get_stylesheet_directory_uri() . '/custom-brand.css');
}
add_action('wp_enqueue_scripts', 'filodidentita_enqueue');
```

### Link al sito custom dal blog

Nel menu di WordPress, aggiungi un link custom:
- `https://filodidentita.it/` → "Home"
- `https://filodidentita.it/programma` → "Programma"

---

## Parte 6 — Performance e SEO

### Immagini
- Comprimi tutto con [Squoosh](https://squoosh.app) o [TinyPNG](https://tinypng.com)
- Usa formato **WebP** dove possibile
- Aggiungi sempre l'attributo `alt` significativo

### SEO base
Ogni pagina ha il suo `<title>` e `<meta name="description">`. Per migliorare:

```html
<!-- Aggiungi in <head> di ogni pagina -->
<link rel="canonical" href="https://filodidentita.it/nome-pagina.html" />

<!-- Open Graph (per condivisioni social) -->
<meta property="og:title" content="Titolo pagina — Filo d'identità" />
<meta property="og:description" content="Descrizione pagina" />
<meta property="og:image" content="https://filodidentita.it/assets/og-image.jpg" />
<meta property="og:url" content="https://filodidentita.it/nome-pagina.html" />
<meta property="og:type" content="website" />
```

### Favicon

Aggiungi in `<head>` di ogni pagina:

```html
<link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
<link rel="icon" type="image/png" href="/assets/favicon.png" />
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
```

### Cache con SiteGround

In **Site Tools → Speed → Caching**:
- Attiva **Dynamic Cache** (livello 3)
- Attiva **Memcached** se disponibile
- Attiva il **Lazy Load** delle immagini

---

## Parte 7 — Checklist pre-lancio

- [ ] Logo caricato in `assets/logo.svg`
- [ ] Tutte le immagini principali caricate e ottimizzate
- [ ] Team aggiornato in `chi-siamo.html`
- [ ] Programma completo inserito in `programma.html`
- [ ] Gallery popolata con le foto reali
- [ ] Loghi partner aggiornati
- [ ] Form di contatto configurato (Formspree o alternativa)
- [ ] WordPress spostato in `/blog`
- [ ] `.htaccess` root aggiornato
- [ ] Test su mobile (Chrome DevTools o dispositivo reale)
- [ ] Test form contatti (invia un messaggio di prova)
- [ ] Favicon aggiunta
- [ ] Meta OG aggiunte a ogni pagina
- [ ] Canonical URL aggiunti
- [ ] Certificato SSL attivo (SiteGround lo gestisce via Let's Encrypt)
- [ ] Redirect www → non-www (o viceversa) nel `.htaccess`
- [ ] Google Analytics / Plausible configurato (opzionale)
- [ ] Test velocità con [PageSpeed Insights](https://pagespeed.web.dev/)

---

## Note sullo stile

Il design usa:
- **Cormorant Garamond** (Google Fonts) — serif editoriale per titoli e accenti
- **Montserrat** (Google Fonts) — sans-serif per navigazione e body

Palette colori (CSS variables in `base.css`):
```
--cream:      #F5F0E8   → sfondo principale
--sand:       #E8DFD0   → sfondo sezioni alternate
--terracotta: #C4714A   → colore accento principale
--rust:       #A8502E   → accento scuro
--night:      #1A1614   → quasi-nero
--charcoal:   #2E2926   → grigio scuro
--warm-gray:  #8A7F76   → testi secondari
--gold:       #B8924A   → accento musica
```

Per modificare il colore del brand è sufficiente cambiare `--terracotta` in `base.css`.

---

*Ultima revisione: giugno 2025*
