# Fix "Not Secure" Warning on ursod.co

## Changes Made:

1. ✅ Added HTTPS redirect in `vercel.json`
2. ✅ Added security headers (HSTS, CSP, etc.)
3. ✅ Added meta tags to force HTTPS

## Next Steps:

### Step 1: Verify Domain in Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to **Settings** → **Domains**
4. Make sure `ursod.co` is listed and shows:
   - ✅ **Valid Configuration**
   - ✅ **SSL Certificate** status (should show "Valid" or "Ready")
   - If it shows "Pending" or "Error", wait a few minutes or click "Refresh"

### Step 2: Check DNS Settings

In Namecheap (or your DNS provider):

1. **A Record** for `@` should point to Vercel's IP (usually `76.76.21.21`)
2. **CNAME Record** for `www` should point to `cname.vercel-dns.com.`
3. Wait 5-30 minutes for DNS to propagate

### Step 3: Force HTTPS in Vercel Settings

1. In Vercel Dashboard → **Settings** → **Domains**
2. Make sure **"Redirect to HTTPS"** is enabled (should be automatic)
3. Check **"Force HTTPS"** option if available

### Step 4: Clear Browser Cache

The "Not Secure" warning might be cached:

1. **Chrome**: Press `Ctrl + Shift + Delete` → Clear cached images and files
2. Or try **Incognito Mode**: `Ctrl + Shift + N`
3. Or hard refresh: `Ctrl + F5`

### Step 5: Redeploy

After making changes, redeploy:

```powershell
vercel --prod
```

### Step 6: Verify SSL Certificate

Check your SSL certificate:
- Visit: https://www.ssllabs.com/ssltest/analyze.html?d=ursod.co
- Should show **Grade A** or **A+**

## Common Issues:

### Issue 1: SSL Certificate Not Provisioned
- **Solution**: Wait 5-30 minutes after adding domain to Vercel
- SSL certificates are automatically provisioned by Vercel

### Issue 2: DNS Not Propagated
- **Solution**: Check DNS propagation at [whatsmydns.net](https://www.whatsmydns.net)
- Enter `ursod.co` and check if A record shows Vercel's IP

### Issue 3: Mixed Content
- **Solution**: Already fixed with `upgrade-insecure-requests` meta tag
- All resources now force HTTPS

### Issue 4: Browser Cache
- **Solution**: Clear cache or use incognito mode
- The warning might be from a cached HTTP version

## Test Your Site:

1. Visit: `https://ursod.co` (make sure to use HTTPS, not HTTP)
2. Check the padlock icon in the address bar
3. Click the padlock → Should show "Connection is secure"
4. Certificate should show "Valid" and issued by Vercel

## If Still Not Working:

1. Check Vercel deployment logs for errors
2. Verify domain is correctly added in Vercel
3. Wait 24 hours for SSL to fully provision (can take time)
4. Contact Vercel support if issue persists

