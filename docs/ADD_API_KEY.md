# Adding reCAPTCHA API Key to Vercel

You've provided your reCAPTCHA Enterprise API key. Follow these steps to add it to your Vercel project.

## ⚠️ Security Note

**Important:** API keys should be kept secret. Since this key has been shared, consider regenerating it after setup for security.

## Quick Setup Steps

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **ursod-website** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Key:** `RECAPTCHA_SECRET_KEY`
   - **Value:** `AIzaSyCvoM9YeW39iElUYLV56n6xhZNqWlHwARk`
   - **Environment:** Select all (Production, Preview, Development)
6. Click **Save**
7. **Redeploy** your site:
   - Go to **Deployments** tab
   - Click **"..."** on the latest deployment
   - Select **Redeploy**

### Option 2: Via Vercel CLI

```powershell
vercel env add RECAPTCHA_SECRET_KEY
# When prompted, paste: AIzaSyCvoM9YeW39iElUYLV56n6xhZNqWlHwARk
# Select: Production, Preview, Development (all)
```

Then redeploy:
```powershell
vercel --prod
```

## ✅ Verify It's Working

1. After redeployment, test the contact form on your site
2. Submit a test message
3. Check that:
   - Form submits successfully
   - You receive an email at `info@ursod.co`
   - No "reCAPTCHA verification failed" errors

## 🔒 Security Best Practices

1. **Regenerate the key** (optional but recommended):
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to **APIs & Services** → **Credentials**
   - Find your API key and regenerate it
   - Update the environment variable with the new key

2. **Restrict the API key**:
   - In Google Cloud Console, edit your API key
   - Add **Application restrictions** (HTTP referrers)
   - Add your domain: `ursod.co/*`, `*.ursod.co/*`
   - Add **API restrictions** to only allow reCAPTCHA Enterprise API

3. **Never commit API keys to Git**:
   - ✅ Already handled - keys are in environment variables
   - ✅ `.env` files are in `.gitignore`

## 📝 Next Steps

After adding the reCAPTCHA key, you still need:

- [ ] `RESEND_API_KEY` - For sending emails (get from [resend.com](https://resend.com))

See [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for complete setup instructions.

---

**Need help?** Check the Vercel deployment logs if the form isn't working after setup.

