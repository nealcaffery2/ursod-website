# Contact Form Setup Guide

The contact form is now fully functional and will send emails to `info@ursod.co` when submitted.

## ✅ What's Been Set Up

1. **Frontend Form** - Contact form with reCAPTCHA v3 Enterprise protection
2. **API Endpoint** - `/api/contact.js` serverless function on Vercel
3. **Email Service** - Integrated with Resend for reliable email delivery
4. **Security** - reCAPTCHA verification and input sanitization

## 🔧 Required Environment Variables

You need to set up the following environment variables in your Vercel project:

### 1. reCAPTCHA Secret Key

**Variable Name:** `RECAPTCHA_SECRET_KEY`

**Value:** Your reCAPTCHA Enterprise secret key

**How to get it:**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Navigate to reCAPTCHA Enterprise
- Find your site and copy the **Secret Key**

**Note:** The current site key in use is `6LekygMsAAAAAE21dh56onPEYK9kdT5UKbscsQX9`. You'll need the corresponding secret key from Google Cloud Console.

### 2. Resend API Key

**Variable Name:** `RESEND_API_KEY`

**Value:** Your Resend API key

**How to get it:**
1. Go to [resend.com](https://resend.com) and sign up (free tier available)
2. Navigate to **API Keys** in your dashboard
3. Create a new API key
4. Copy the key (starts with `re_`)

**Free Tier:** Resend offers 3,000 emails/month for free, which should be plenty for a contact form.

## 📝 Setting Environment Variables in Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your **ursod-website** project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - **Name:** `RECAPTCHA_SECRET_KEY`
   - **Value:** (your secret key)
   - **Environment:** Production, Preview, Development (select all)
   - Click **Save**
5. Repeat for `RESEND_API_KEY`

### Option 2: Via Vercel CLI

```powershell
vercel env add RECAPTCHA_SECRET_KEY
# Paste your secret key when prompted
# Select: Production, Preview, Development

vercel env add RESEND_API_KEY
# Paste your API key when prompted
# Select: Production, Preview, Development
```

### Option 3: Via vercel.json (Not Recommended for Secrets)

⚠️ **Don't put secrets in vercel.json** - use environment variables instead.

## 🚀 After Setting Environment Variables

1. **Redeploy your site:**
   - Go to Vercel dashboard → **Deployments**
   - Click **"..."** on the latest deployment → **Redeploy**
   - Or push a new commit to trigger auto-deployment

2. **Test the form:**
   - Visit your site and fill out the contact form
   - Submit and check that you receive an email at `info@ursod.co`

## 📧 Email Configuration

The contact form sends emails with:
- **From:** `URSOD Contact Form <noreply@ursod.co>`
- **To:** `info@ursod.co`
- **Reply-To:** The submitter's email address
- **Subject:** `New Contact Form Submission: [Inquiry Type]`

### Customizing the "From" Email

To use a custom "from" email address:

1. **Verify your domain in Resend:**
   - Go to Resend dashboard → **Domains**
   - Add `ursod.co` and verify it (follow DNS instructions)

2. **Update the API code:**
   - Edit `api/contact.js`
   - Change the `from` field in the email request:
     ```javascript
     from: 'URSOD Contact Form <noreply@ursod.co>',
     ```
   - Or use a verified email address:
     ```javascript
     from: 'info@ursod.co',
     ```

## 🔍 Troubleshooting

### Form submission fails with "Server configuration error"

- **Cause:** Environment variables not set
- **Fix:** Add `RECAPTCHA_SECRET_KEY` and `RESEND_API_KEY` in Vercel dashboard

### reCAPTCHA verification fails

- **Cause:** Wrong secret key or token expired
- **Fix:** Verify the secret key matches your site key in Google Cloud Console

### Email not received

1. **Check Resend dashboard:**
   - Go to Resend → **Logs**
   - Look for the email attempt and any error messages

2. **Check spam folder:**
   - Emails might be filtered as spam initially

3. **Verify API key:**
   - Make sure `RESEND_API_KEY` is correct and active

4. **Check domain verification:**
   - If using custom domain, ensure it's verified in Resend

### "Network error" message

- **Cause:** API endpoint not accessible
- **Fix:** 
  - Check Vercel deployment logs
  - Verify the `/api/contact` endpoint exists
  - Check browser console for detailed error

## 🧪 Testing Locally

For local testing, you can:

1. **Set up local environment variables:**
   ```powershell
   # Create .env.local file
   RECAPTCHA_SECRET_KEY=your_secret_key
   RESEND_API_KEY=your_api_key
   ```

2. **Use Vercel CLI:**
   ```powershell
   vercel dev
   ```
   This will load environment variables and run the API locally.

## 📚 Alternative Email Services

If you prefer a different email service, you can modify `api/contact.js`:

### Using SendGrid

```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
    to: 'info@ursod.co',
    from: 'noreply@ursod.co',
    subject: emailSubject,
    html: emailHtml,
    text: emailText
});
```

### Using Nodemailer (SMTP)

```javascript
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

await transporter.sendMail({
    from: 'noreply@ursod.co',
    to: 'info@ursod.co',
    subject: emailSubject,
    html: emailHtml,
    text: emailText
});
```

## ✅ Success Checklist

- [ ] `RECAPTCHA_SECRET_KEY` environment variable set in Vercel
- [ ] `RESEND_API_KEY` environment variable set in Vercel
- [ ] Site redeployed after setting environment variables
- [ ] Test form submission works
- [ ] Email received at `info@ursod.co`
- [ ] Reply-to address works correctly

---

**Need help?** Check the Vercel deployment logs or Resend dashboard for detailed error messages.

