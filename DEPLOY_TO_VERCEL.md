# Deploy to Vercel - Quick Guide

## Step 1: Login to Vercel (if not already logged in)

Run this command in PowerShell:

```powershell
vercel login
```

This will:
1. Show you a URL like `https://vercel.com/oauth/device?user_code=XXXX-XXXX`
2. Open your browser automatically (or you can copy/paste the URL)
3. Complete the authentication in your browser
4. Return to the terminal when done

## Step 2: Deploy to Production

Once logged in, run:

```powershell
vercel --prod
```

Or use the automated script:

```powershell
.\deploy.ps1
```

## What Happens Next:

1. **First Deployment**: Vercel will ask you some questions:
   - "Set up and deploy?" → Type `Y` and press Enter
   - "Which scope?" → Select your account
   - "Link to existing project?" → Type `N` (for first time) or `Y` (if you've deployed before)
   - "What's your project's name?" → Type `ursod-website` or press Enter for default
   - "In which directory is your code located?" → Press Enter for `./`

2. **Deployment URL**: After deployment, you'll get a URL like:
   - `https://ursod-website.vercel.app` (or similar)

3. **Custom Domain**: To add your custom domain (ursod.co):
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click on your project
   - Go to **Settings** → **Domains**
   - Add `ursod.co` and `www.ursod.co`
   - Follow the DNS setup instructions

## Automatic Deployments

After the first deployment, you can set up automatic deployments from GitHub:
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Every push will automatically deploy!

## Troubleshooting

- **Not logged in?** Run `vercel login` first
- **Deployment failed?** Check that all files are saved and committed
- **Need to update?** Just run `vercel --prod` again after making changes

