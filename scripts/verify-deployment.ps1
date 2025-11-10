# Script to verify GitHub and Vercel connection

Write-Host "`n🔍 Verifying Deployment Setup...`n" -ForegroundColor Cyan

# Check Git remote
Write-Host "📦 Git Remote:" -ForegroundColor Yellow
git remote -v

Write-Host "`n📝 Recent Commits:" -ForegroundColor Yellow
git log --oneline -5

Write-Host "`n🔄 Checking sync with GitHub..." -ForegroundColor Yellow
git fetch origin
$localCommit = git rev-parse HEAD
$remoteCommit = git rev-parse origin/main

if ($localCommit -eq $remoteCommit) {
    Write-Host "✅ Local and remote are in sync!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Local and remote are out of sync" -ForegroundColor Red
    Write-Host "   Local:  $localCommit" -ForegroundColor Gray
    Write-Host "   Remote: $remoteCommit" -ForegroundColor Gray
}

Write-Host "`n📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Check GitHub: https://github.com/nealcaffery2/ursod-website" -ForegroundColor White
Write-Host "2. Check Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "3. Verify Vercel is connected to: nealcaffery2/ursod-website" -ForegroundColor White
Write-Host "4. Check that auto-deployment is enabled in Vercel Settings → Git" -ForegroundColor White
Write-Host "`n"


