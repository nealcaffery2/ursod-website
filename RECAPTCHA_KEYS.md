# reCAPTCHA Keys for URSOD

## Site Key (Public)
**6LeJxAQsAAAAAJ0TWESlEC1vst5dJrgAxxrKEwZr**

This key is used in the HTML and is safe to expose publicly.

## Secret Key (Private)
**6LeJxAQsAAAAAFzKjh08SNeQFdpDrwO9V9ueaedc**

⚠️ **KEEP THIS SECRET!** This key should only be used on your server-side code.

## Server-Side Verification

When you set up a backend API to handle form submissions, use the secret key to verify the reCAPTCHA response:

### Example (Node.js/Express):

```javascript
const axios = require('axios');

async function verifyRecaptcha(token) {
    const secretKey = '6LeJxAQsAAAAAFzKjh08SNeQFdpDrwO9V9ueaedc';
    const response = await axios.post('https://www.google.com/recaptcha/api/siteverify', null, {
        params: {
            secret: secretKey,
            response: token
        }
    });
    
    return response.data.success;
}
```

### Example (Python/Flask):

```python
import requests

def verify_recaptcha(token):
    secret_key = '6LeJxAQsAAAAAFzKjh08SNeQFdpDrwO9V9ueaedc'
    response = requests.post(
        'https://www.google.com/recaptcha/api/siteverify',
        data={
            'secret': secret_key,
            'response': token
        }
    )
    return response.json()['success']
```

## Security Notes

- ✅ Site Key is now updated in `index.html`
- ⚠️ Secret Key should NEVER be exposed in client-side code
- ⚠️ Secret Key should be stored as an environment variable on your server
- ✅ Current implementation uses the site key correctly in the frontend

