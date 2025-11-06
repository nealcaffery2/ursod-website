# Quick Reference Guide

## 🚀 Deploy to Vercel

**Option 1: Auto-deploy (if GitHub connected)**
- Just push to GitHub: `git push origin main`
- Vercel auto-deploys in 1-2 minutes

**Option 2: Manual deploy**
```powershell
.\scripts\deploy.ps1
```

**Option 3: Direct CLI**
```powershell
vercel login
vercel --prod
```

## 📁 File Locations

### Main Pages (Root)
- `index.html` - Homepage
- All other `.html` files - Category pages

### Configuration (Root)
- `vercel.json` - Vercel settings
- `package.json` - Dependencies
- `sitemap.xml` - Google Search Console
- `robots.txt` - Crawler rules
- `favicon.svg` - Site icon

### Documentation
- `README.md` - Project overview (root)
- `PROJECT_STRUCTURE.md` - File organization
- `docs/` - All other documentation

### Scripts
- `scripts/deploy.ps1` - Deploy to Vercel
- `scripts/push-to-github.ps1` - Push to GitHub
- `scripts/setup-github.ps1` - GitHub setup

## 🔍 Finding Things Fast

**Need to edit navigation?**
→ Edit `index.html` (lines 18-69), then copy to other pages

**Need to add a new page?**
→ Create HTML file in root, copy structure from similar page

**Need deployment help?**
→ Check `docs/DEPLOYMENT.md`

**Need reCAPTCHA info?**
→ Check `docs/RECAPTCHA_SETUP.md`

**Need to update SEO?**
→ Edit meta tags in `<head>` section of HTML files

## 📊 SEO Files

- **Sitemap**: `sitemap.xml` → Submit to Google Search Console
- **Robots**: `robots.txt` → Auto-discovered by Google
- **Structured Data**: In `<head>` of each HTML file (JSON-LD)

## 🎯 Common Commands

```powershell
# Push to GitHub
git add .
git commit -m "Your message"
git push origin main

# Deploy to Vercel
.\scripts\deploy.ps1

# Check status
git status
```

## 📞 Quick Links

- **Sitemap URL**: https://ursod.co/sitemap.xml
- **Google Search Console**: https://search.google.com/search-console
- **Vercel Dashboard**: https://vercel.com/dashboard

