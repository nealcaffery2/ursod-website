# Script to push to GitHub
param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername
)

Write-Host "`n🚀 Pushing to GitHub...`n" -ForegroundColor Cyan

# Check if remote exists
$remoteCheck = git remote get-url origin 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Remote exists: $remoteCheck" -ForegroundColor Green
    Write-Host "Pushing to GitHub...`n" -ForegroundColor Yellow
    git push -u origin master
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Successfully pushed to GitHub!`n" -ForegroundColor Green
        Write-Host "Next: Go to https://vercel.com/new and import your repository" -ForegroundColor Cyan
    }
} else {
    Write-Host "Adding GitHub remote...`n" -ForegroundColor Yellow
    git remote add origin "https://github.com/$GitHubUsername/ursod-website.git"
    git branch -M main
    git push -u origin main
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Successfully pushed to GitHub!`n" -ForegroundColor Green
        Write-Host "Next: Go to https://vercel.com/new and import your repository" -ForegroundColor Cyan
    } else {
        Write-Host "`n❌ Failed to push. Make sure:" -ForegroundColor Red
        Write-Host "1. Repository exists at: https://github.com/$GitHubUsername/ursod-website" -ForegroundColor Yellow
        Write-Host "2. You're authenticated with GitHub`n" -ForegroundColor Yellow
    }
}

