# Deployment Guide for URSOD Website

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `ursod-website` (or any name you prefer)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have files)
6. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/YOUR_USERNAME/ursod-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use "Sign in with GitHub")
2. Click "Add New..." → "Project"
3. Import your `ursod-website` repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: ./
   - **Install Command**: `npm install`
5. Click "Deploy"

## Step 3.5: Enable Auto-Deployment ⚡

**IMPORTANT:** Enable auto-deployment so every GitHub push automatically deploys!

See **[AUTO_DEPLOYMENT_SETUP.md](AUTO_DEPLOYMENT_SETUP.md)** for detailed instructions.

**Quick version:**
1. Vercel dashboard → Your project → **Settings** → **Git**
2. Make sure **Production Branch** = `main`
3. Enable **Automatic deployments from Git**
4. Done! Now every `git push` auto-deploys 🚀

## Step 4: Add Custom Domain (ursod.co)

### In Vercel:

1. Go to your project dashboard on Vercel
2. Click on "Settings" → "Domains"
3. Add your domain: `ursod.co`
4. Also add: `www.ursod.co` (optional, for www version)
5. Vercel will show you DNS records to add

### In Namecheap:

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to "Domain List" → Click "Manage" next to ursod.co
3. Go to "Advanced DNS" tab
4. Add these records (Vercel will provide exact values):

   **For ursod.co:**
   - Type: `A` Record
   - Host: `@`
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   - TTL: Automatic

   **For www.ursod.co (optional):**
   - Type: `CNAME` Record
   - Host: `www`
   - Value: `cname.vercel-dns.com.` (or what Vercel shows)
   - TTL: Automatic

5. **OR** if Vercel shows nameservers, you can use those instead:
   - Go to "Nameservers" section in Namecheap
   - Select "Custom DNS"
   - Add Vercel's nameservers (usually something like `ns1.vercel-dns.com`)

### Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually takes 15-30 minutes
- Check status in Vercel dashboard under "Domains"

## Step 5: SSL Certificate

Vercel automatically provides SSL certificates (HTTPS) for your domain. This happens automatically after DNS is configured correctly.

## Troubleshooting

- **Domain not working?** Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- **SSL not ready?** Wait 24 hours after DNS is configured
- **Auto-deployment not working?** See [AUTO_DEPLOYMENT_SETUP.md](AUTO_DEPLOYMENT_SETUP.md)
- **Need to update site?** Just push to GitHub - Vercel auto-deploys on push! (if enabled)

## Quick Commands Reference

```bash
# Make changes to your files, then:
git add .
git commit -m "Your commit message"
git push

# Vercel will automatically deploy!
```

