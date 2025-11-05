# Quick Deploy to Vercel

## Step 1: Login to Vercel

Run this command in your terminal:

```powershell
vercel login
```

This will:
- Open your browser automatically
- Or show you a URL to visit (like `https://vercel.com/oauth/device?user_code=XXXX-XXXX`)
- Complete the authentication in your browser
- Return to the terminal when done

## Step 2: Deploy

Once logged in, run:

```powershell
vercel --prod --yes
```

Or use the deployment script:

```powershell
.\deploy.ps1
```

## Step 3: Add Your Domain

After deployment:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Domains**
4. Add: `ursod.co`
5. Add: `www.ursod.co` (optional)
6. Copy the DNS records shown

## Step 4: Update Namecheap DNS

1. Log in to [Namecheap](https://www.namecheap.com)
2. Go to **Domain List** → Click **Manage** next to ursod.co
3. Go to **Advanced DNS** tab
4. Add the DNS records from Vercel:
   - **A Record** for `@` pointing to Vercel's IP
   - **CNAME Record** for `www` pointing to Vercel's CNAME

Wait 5-30 minutes for DNS to propagate, then your site will be live at ursod.co!

---

**Note:** The deployment will give you a URL like `ursod-website.vercel.app` immediately. Your custom domain will work after DNS is configured.

