# Fix Deployment Issue - Vercel Not Auto-Deploying

## Problem
Vercel dashboard shows deployment from old commit `1db2f6f` instead of latest `616ed2e`. Auto-deployment is not working.

## Solution Steps

### Step 1: Verify Auto-Deployment is Enabled
1. Go to Vercel Dashboard → Your Project → **Settings** → **Git**
2. Check:
   - ✅ **Connected Repository**: `nealcaffery2/ursod-website`
   - ✅ **Production Branch**: `main`
   - ✅ **Automatic deployments from Git**: **ENABLED** (toggle should be ON)

### Step 2: If Auto-Deployment is Disabled
1. Toggle **"Automatic deployments from Git"** to **ON**
2. Save settings
3. Vercel should automatically detect the latest commits and deploy

### Step 3: Manual Redeploy (If Auto-Deploy Still Doesn't Work)
1. Go to Vercel Dashboard → **Deployments** tab
2. Find the latest deployment (or any deployment)
3. Click the **"..."** menu (three dots)
4. Click **"Redeploy"**
5. Wait 30-60 seconds for deployment to complete

### Step 4: Verify Latest Commit is Deployed
After redeploy, check:
- Deployment should show commit `616ed2e` or newer
- Visit `https://www.ursod.co` and verify phone number shows `+1 (210) 850-8849`

## Current Status
- ✅ Latest commits are in GitHub
- ✅ Phone number is correct in code: `+1 (210) 850-8849`
- ❌ Vercel is deploying old commit `1db2f6f` instead of latest `616ed2e`
- ❌ Auto-deployment appears to be disabled or not working

## Quick Fix
**Go to Vercel Dashboard → Settings → Git → Enable "Automatic deployments from Git" → Save**

Then either:
- Wait for auto-deploy to trigger
- OR manually redeploy from Deployments tab



