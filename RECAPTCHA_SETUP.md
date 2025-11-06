# reCAPTCHA Setup Instructions

## Current Status

The contact form now includes Google reCAPTCHA v2 for security. Currently, it's using a **test site key** that works for development but needs to be replaced with your own production key.

## Get Your Own reCAPTCHA Site Key

### Step 1: Register with Google reCAPTCHA

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click **"+"** to create a new site

### Step 2: Configure Your Site

1. **Label**: Enter "URSOD Contact Form" (or any name)
2. **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
3. **Domains**: Add your domains:
   - `ursod.co`
   - `www.ursod.co`
   - `*.vercel.app` (for Vercel preview deployments)
4. Accept the reCAPTCHA Terms of Service
5. Click **Submit**

### Step 3: Get Your Keys

After creating the site, you'll get:
- **Site Key** (public key - used in HTML)
- **Secret Key** (private key - used on server)

### Step 4: Update Your Site

1. Open `index.html`
2. Find this line (around line 269):
   ```html
   <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" ...>
   ```
3. Replace `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` with your **Site Key**

### Step 5: Server-Side Verification (Recommended)

For production, you should verify the reCAPTCHA response on your server:

1. When the form is submitted, send the `recaptcha` token to your server
2. On your server, make a POST request to:
   ```
   https://www.google.com/recaptcha/api/siteverify
   ```
   With parameters:
   - `secret`: Your Secret Key
   - `response`: The reCAPTCHA token from the form
   - `remoteip`: User's IP address (optional)

3. Google will return a JSON response indicating if the verification passed

## Current Test Key

The current key (`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`) is Google's test key that:
- ✅ Always passes verification (for testing)
- ✅ Works on any domain
- ⚠️ **Should NOT be used in production**

## Security Features Added

✅ **reCAPTCHA v2** - Bot protection
✅ **Input Sanitization** - Prevents XSS attacks
✅ **Email Validation** - Ensures valid email format
✅ **Character Limits** - Message field limited to 2000 characters
✅ **Real-time Validation** - Visual feedback on form fields
✅ **Form Status Messages** - Clear success/error feedback

## Testing

1. The form will work with the test key for development
2. Replace with your production key before going live
3. Test the form submission to ensure reCAPTCHA appears and works

