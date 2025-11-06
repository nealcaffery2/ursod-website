# Fix SSL Certificate Issue on Vercel

## The Problem
Your domain `ursod.co` is showing "Not secure" because the SSL certificate hasn't been properly configured.

## Solution Steps

### 1. Check Domain Configuration in Vercel

1. Go to your Vercel dashboard: https://vercel.com/trevors-projects-c2bcb460/ursod-website
2. Click on **Settings** → **Domains**
3. Check if `ursod.co` and `www.ursod.co` are listed
4. Check the status of each domain:
   - ✅ **Valid Configuration** = Good
   - ⚠️ **Invalid Configuration** = Needs DNS update
   - ⏳ **Pending** = Waiting for DNS/SSL

### 2. Verify DNS Settings in Namecheap

1. Log in to **Namecheap**: https://www.namecheap.com
2. Go to **Domain List** → Click **Manage** next to `ursod.co`
3. Go to **Advanced DNS** tab
4. Make sure you have these records (Vercel will show the exact values):

   **For ursod.co (Apex domain):**
   - Type: `A Record`
   - Host: `@`
   - Value: `76.76.21.21` (or the IP Vercel shows)
   - TTL: `Automatic`

   **For www.ursod.co:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `cname.vercel-dns.com.` (or what Vercel shows)
   - TTL: `Automatic`

### 3. Wait for SSL Certificate

- Vercel automatically provisions SSL certificates via Let's Encrypt
- This usually takes **5-30 minutes** after DNS is correctly configured
- Can take up to **24 hours** in some cases

### 4. Force SSL Certificate Generation

If it's been more than 24 hours:

1. In Vercel dashboard → **Settings** → **Domains**
2. Click on your domain
3. Click **Remove** (don't worry, you can add it back)
4. Wait 1 minute
5. Click **Add Domain** and re-add `ursod.co`
6. This will trigger a new SSL certificate request

### 5. Check DNS Propagation

Visit: https://www.whatsmydns.net
- Enter: `ursod.co`
- Check if the A record points to Vercel's IP
- All locations should show the same IP

### 6. Clear Browser Cache

After SSL is active:
- Clear your browser cache
- Try incognito/private mode
- The padlock should appear

## Common Issues

**Issue:** Domain shows "Invalid Configuration"
- **Fix:** Update DNS records in Namecheap to match Vercel's requirements

**Issue:** SSL certificate stuck on "Pending"
- **Fix:** Wait 24 hours, then remove and re-add the domain in Vercel

**Issue:** Mixed content warnings
- **Fix:** Make sure all resources (CSS, JS, images) are loaded via HTTPS

## Still Not Working?

1. Check Vercel's domain status page
2. Verify DNS records are correct
3. Wait 24-48 hours for full propagation
4. Contact Vercel support if still not working after 48 hours

