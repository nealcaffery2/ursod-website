# Vercel Deployment Script for URSOD Website
Write-Host "`n🚀 Deploying URSOD website to Vercel...`n" -ForegroundColor Cyan

# Check if logged in
Write-Host "Checking Vercel authentication..." -ForegroundColor Yellow
vercel whoami 2>&1 | Out-Null

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n⚠️  Not logged in to Vercel. Please log in first:" -ForegroundColor Yellow
    Write-Host "   Run: vercel login" -ForegroundColor White
    Write-Host "   Or visit the URL shown above to authenticate`n" -ForegroundColor White
    exit 1
}

Write-Host "✅ Authenticated!`n" -ForegroundColor Green

# Deploy to production
Write-Host "Deploying to production..." -ForegroundColor Yellow
vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment successful!`n" -ForegroundColor Green
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Go to Vercel dashboard to add your domain (ursod.co)" -ForegroundColor White
    Write-Host "2. Update DNS settings in Namecheap as shown in Vercel`n" -ForegroundColor White
} else {
    Write-Host "`n❌ Deployment failed. Please check the error above.`n" -ForegroundColor Red
}

