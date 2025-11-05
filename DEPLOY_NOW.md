# 🚀 Quick Deploy Instructions

## Option 1: Deploy via GitHub + Vercel (EASIEST - Recommended)

### Step 1: Create GitHub Repo (2 minutes)

1. Go to: **https://github.com/new**
2. Repository name: `ursod-website`
3. **Keep it Public** (or Private - your choice)
4. **DO NOT** check "Add a README file"
5. Click **"Create repository"**

### Step 2: Push to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` with your GitHub username):

```powershell
cd C:\Users\trevo\URSOD
git remote add origin https://github.com/YOUR_USERNAME/ursod-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel (5 minutes)

1. Go to: **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Select your `ursod-website` repository
4. Click **"Import"**
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: (leave empty)
   - **Output Directory**: `./`
6. Click **"Deploy"**

✅ **Your site will be live in 30 seconds!**

### Step 4: Add Custom Domain

1. In Vercel dashboard → Your project → **Settings** → **Domains**
2. Add: `ursod.co`
3. Add: `www.ursod.co` (optional)
4. Copy the DNS records shown

### Step 5: Update Namecheap DNS

1. Go to **Namecheap** → Domain List → **Manage** → **Advanced DNS**
2. Add the DNS records from Vercel:
   - **Type**: A Record
   - **Host**: `@`
   - **Value**: (IP from Vercel)
   - **TTL**: Automatic
   
   - **Type**: CNAME Record  
   - **Host**: `www`
   - **Value**: (from Vercel)
   - **TTL**: Automatic

3. Wait 5-30 minutes for DNS propagation

---

## Option 2: Deploy via Vercel CLI

### Step 1: Login

```powershell
vercel login
```

Visit the URL shown in terminal to authenticate.

### Step 2: Deploy

```powershell
vercel --prod --yes
```

Done! Your site will be live immediately.

---

**Need help?** The GitHub + Vercel method (Option 1) is the easiest and sets up automatic deployments!

