# reCAPTCHA Setup Instructions

## Current Status

The contact form now includes **Google reCAPTCHA v3** for security. reCAPTCHA v3 runs in the background and provides a risk score (0.0 to 1.0) without showing a checkbox to users.

**Site Label**: URSOD Contact  
**Site Key**: 6LeJxAQsAAAAAJ0TWESlEC1vst5dJrgAxxrKEwZr  
**Secret Key**: 6LeJxAQsAAAAAFzKjh08SNeQFdpDrwO9V9ueaedc

## Get Your Own reCAPTCHA Site Key

### Step 1: Register with Google reCAPTCHA

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Sign in with your Google account
3. Click **"+"** to create a new site

### Step 2: Configure Your Site

1. **Label**: Enter "URSOD Contact" (or any name)
2. **reCAPTCHA type**: Select **"reCAPTCHA Enterprise v3"** (score-based, invisible)
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
2. Find the reCAPTCHA Enterprise script tag (around line 14):
   ```html
   <script src="https://www.google.com/recaptcha/enterprise.js?render=YOUR_SITE_KEY"></script>
   ```
3. Replace `YOUR_SITE_KEY` with your **Site Key**
4. Also update the `RECAPTCHA_SITE_KEY` constant in `script.js` (around line 107)
5. Note: reCAPTCHA Enterprise uses `grecaptcha.enterprise.execute()` instead of `grecaptcha.execute()`

### Step 5: Server-Side Verification (Required for Production)

**Important**: reCAPTCHA v3 requires server-side verification to check the risk score.

1. When the form is submitted, send the `recaptcha_token` to your server
2. On your server, make a POST request to:
   ```
   https://www.google.com/recaptcha/api/siteverify
   ```
   With parameters:
   - `secret`: Your Secret Key (6LeJxAQsAAAAAFzKjh08SNeQFdpDrwO9V9ueaedc)
   - `response`: The reCAPTCHA token from the form
   - `remoteip`: User's IP address (optional)

3. Google will return a JSON response:
   ```json
   {
     "success": true,
     "score": 0.9,
     "action": "contact_form_submit",
     "challenge_ts": "2024-01-01T12:00:00Z"
   }
   ```

4. **Check the score**: 
   - Score of 1.0 = very likely a human
   - Score of 0.0 = very likely a bot
   - **Recommended threshold**: Accept scores above 0.5
   - For sensitive forms, use 0.7 or higher

## Current Production Keys

✅ **Site Key**: `6LekygMsAAAAAE21dh56onPEYK9kdT5UKbscsQX9` (configured)  
✅ **Type**: reCAPTCHA Enterprise v3

⚠️ **Note**: For server-side verification, use your Enterprise secret key from the Google Cloud Console. Store it as an environment variable on your server.

## Security Features Added

✅ **reCAPTCHA Enterprise v3** - Invisible, score-based bot protection with advanced features
✅ **Input Sanitization** - Prevents XSS attacks
✅ **Email Validation** - Ensures valid email format
✅ **Character Limits** - Message field limited to 2000 characters
✅ **Real-time Validation** - Visual feedback on form fields
✅ **Form Status Messages** - Clear success/error feedback

## How reCAPTCHA Enterprise v3 Works

- **Invisible**: No checkbox or challenge for users
- **Score-based**: Returns a score from 0.0 (bot) to 1.0 (human)
- **Background**: Runs automatically when the form is submitted
- **User Experience**: Seamless - users don't see anything
- **Enterprise Features**: Advanced analytics, fraud detection, and more detailed insights

## Testing

1. ✅ Production keys are already configured
2. Test the form submission - it should work seamlessly
3. Check browser console for reCAPTCHA initialization message
4. For server-side: Verify the score in your backend (recommended threshold: 0.5+)

