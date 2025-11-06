# Auto-Deployment Setup Guide

This guide will help you enable automatic deployment from GitHub to Vercel. Once set up, every push to the `main` branch will automatically deploy to your live site.

## ✅ Step-by-Step Instructions

### Step 1: Connect GitHub to Vercel (If Not Already Connected)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click on your profile icon (top right) → **Settings**
3. Go to **Git** → **GitHub**
4. Click **Connect** or **Configure** next to GitHub
5. Authorize Vercel to access your GitHub repositories
6. Select the repositories you want to give Vercel access to (or select "All repositories")

### Step 2: Import/Configure Your Project

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. If you don't see your project:
   - Click **Add New...** → **Project**
   - Find and select `ursod-website` repository
   - Click **Import**
3. If you already have the project:
   - Click on your **ursod-website** project
   - Go to **Settings** → **Git**

### Step 3: Enable Auto-Deployment

1. In your project dashboard, go to **Settings** → **Git**
2. Make sure **Production Branch** is set to `main` (or `master` if that's your branch)
3. Under **Deploy Hooks**, verify that:
   - ✅ **Automatic deployments from Git** is enabled
   - ✅ **Production Branch** is set correctly
4. Scroll down to **Ignored Build Step** and make sure it's empty (unless you have a specific reason to ignore builds)

### Step 4: Configure Build Settings

1. Go to **Settings** → **General**
2. Verify these settings:
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave empty or set to `./`)
   - **Build Command**: (leave empty - no build needed for static site)
   - **Output Directory**: `./` (leave empty or set to `./`)
   - **Install Command**: `npm install` (optional, but won't hurt)

### Step 5: Test Auto-Deployment

1. Make a small change to any file (or use the command below)
2. Commit and push to GitHub:
   ```powershell
   git add .
   git commit -m "Test auto-deployment"
   git push origin main
   ```
3. Go to your Vercel dashboard → **Deployments**
4. You should see a new deployment start automatically within seconds
5. Wait for it to complete (usually 30-60 seconds)
6. Check your live site - changes should be live!

## 🔍 Verify Auto-Deployment is Working

### Check Deployment History

1. Go to Vercel dashboard → Your project → **Deployments**
2. You should see deployments with:
   - ✅ **Source**: GitHub (with commit message)
   - ✅ **Status**: Ready
   - ✅ **Branch**: main

### Check GitHub Integration

1. In Vercel dashboard → **Settings** → **Git**
2. You should see:
   - ✅ **Connected Repository**: `nealcaffery2/ursod-website`
   - ✅ **Production Branch**: `main`
   - ✅ **Automatic deployments from Git**: Enabled

## 🚨 Troubleshooting

### Auto-deployment not working?

1. **Check GitHub connection:**
   - Vercel dashboard → Settings → Git
   - Make sure repository is connected
   - Try disconnecting and reconnecting

2. **Check branch name:**
   - Make sure you're pushing to `main` (not `master` or another branch)
   - Verify Production Branch in Vercel matches your GitHub branch

3. **Check Vercel webhooks:**
   - GitHub → Your repo → Settings → Webhooks
   - You should see a Vercel webhook
   - If missing, reconnect the repo in Vercel

4. **Manual trigger:**
   - Vercel dashboard → Deployments → Click "..." → **Redeploy**

### Deployment fails?

1. Check the deployment logs in Vercel dashboard
2. Common issues:
   - Build command errors (should be empty for static sites)
   - Missing files (check `.vercelignore`)
   - Environment variables missing (if any)

## 📝 Quick Reference

**After setup, to deploy:**
```powershell
git add .
git commit -m "Your changes"
git push origin main
# Vercel automatically deploys! 🚀
```

**Check deployment status:**
- Vercel dashboard → Deployments tab

**View live site:**
- https://ursod.co (or your custom domain)

## ✅ Success Checklist

- [ ] GitHub repository connected to Vercel
- [ ] Production branch set to `main`
- [ ] Auto-deployment enabled
- [ ] Tested with a push to GitHub
- [ ] Deployment appears in Vercel dashboard
- [ ] Changes appear on live site

---

**Need help?** Check Vercel's official docs: [vercel.com/docs/concepts/git](https://vercel.com/docs/concepts/git)

