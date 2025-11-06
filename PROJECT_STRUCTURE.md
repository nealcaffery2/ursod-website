# URSOD Website - Project Structure

## 📁 Directory Organization

```
URSOD/
├── 📄 Core Files (Root)
│   ├── index.html              # Homepage
│   ├── styles.css              # Main stylesheet
│   ├── script.js               # Main JavaScript
│   ├── vercel.json             # Vercel configuration
│   ├── package.json             # Node.js dependencies
│   ├── server.js               # Local development server
│   ├── robots.txt              # Search engine crawler rules
│   ├── sitemap.xml             # Google Search Console sitemap
│   ├── site.webmanifest        # PWA manifest
│   └── favicon.svg             # Site favicon
│
├── 🏠 Main Pages
│   └── index.html              # Homepage
│
├── 🛢️ Upstream Pages
│   ├── upstream.html
│   ├── upstream-minerals.html
│   ├── upstream-lease.html
│   ├── upstream-permian.html
│   ├── upstream-haynes.html
│   ├── upstream-eagle-ford.html
│   └── upstream-bakken.html
│
├── ⛽ Midstream Pages
│   ├── midstream.html
│   ├── midstream-vopak.html
│   ├── midstream-kinder.html
│   ├── midstream-fob.html
│   └── midstream-spot.html
│
├── 🏢 Real Estate Pages
│   ├── office.html
│   ├── industrial.html
│   ├── multifamily.html
│   ├── self-storage.html
│   ├── btr.html
│   └── datacenter.html
│
├── 💰 Services Pages
│   └── raising-money.html
│
├── 📚 Documentation (docs/)
│   ├── README.md               # Project overview
│   ├── DEPLOYMENT.md           # Deployment instructions
│   ├── RECAPTCHA_SETUP.md      # reCAPTCHA configuration
│   ├── RECAPTCHA_KEYS.md       # reCAPTCHA keys (keep secret!)
│   └── DO_THIS_NOW.txt         # Quick tasks
│
└── 🔧 Scripts (scripts/)
    ├── deploy.ps1              # Vercel deployment script
    ├── push-to-github.ps1     # GitHub push script
    └── setup-github.ps1       # GitHub setup script
```

## 🚀 Quick Reference

### Main Files
- **index.html** - Homepage with full navigation
- **styles.css** - All styling
- **script.js** - All JavaScript functionality
- **vercel.json** - Deployment configuration

### SEO Files
- **sitemap.xml** - Submit to Google Search Console
- **robots.txt** - Auto-discovered by Google
- **favicon.svg** - Site icon

### Key Pages by Category

**Upstream (7 pages)**
- Main: `/upstream.html`
- Sub-pages: minerals, lease, permian, haynes, eagle-ford, bakken

**Midstream (5 pages)**
- Main: `/midstream.html`
- Sub-pages: vopak, kinder, fob, spot

**Real Estate (6 pages)**
- office, industrial, multifamily, self-storage, btr, datacenter

**Services (1 page)**
- `/raising-money.html`

## 📝 File Naming Convention

- **Main category pages**: `category.html` (e.g., `upstream.html`)
- **Sub-category pages**: `category-subcategory.html` (e.g., `upstream-minerals.html`)
- **Kebab-case** for multi-word (e.g., `self-storage.html`, `upstream-eagle-ford.html`)

## 🔍 Finding Files

- **All HTML pages**: Root directory, organized by category
- **Documentation**: `docs/` folder
- **Scripts**: `scripts/` folder
- **Configuration**: Root directory (vercel.json, package.json, etc.)

## 🎯 Common Tasks

### Add a New Page
1. Create HTML file in root (e.g., `new-page.html`)
2. Copy structure from similar page
3. Update navigation in all pages
4. Add to `sitemap.xml`
5. Commit and push

### Update Navigation
- Edit navigation in `index.html` (main template)
- Copy to all other HTML pages
- Or use find/replace across all HTML files

### Deploy Changes
```powershell
git add .
git commit -m "Your message"
git push origin main
# Vercel auto-deploys if connected
```

## 📊 SEO Checklist

- ✅ Meta tags on all pages
- ✅ Structured data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Favicon

