# GitHub Setup Script
Write-Host "`n📦 Setting up GitHub repository...`n" -ForegroundColor Cyan

# Check if remote exists
$remote = git remote get-url origin 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Remote already exists: $remote" -ForegroundColor Green
    Write-Host "`nPushing to GitHub...`n" -ForegroundColor Yellow
    git push -u origin master
} else {
    Write-Host "⚠️  No GitHub remote found.`n" -ForegroundColor Yellow
    Write-Host "Please create a GitHub repository first:" -ForegroundColor White
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor Cyan
    Write-Host "2. Repository name: ursod-website" -ForegroundColor Cyan
    Write-Host "3. Don't initialize with README" -ForegroundColor Cyan
    Write-Host "4. Click 'Create repository'`n" -ForegroundColor Cyan
    Write-Host "Then run this command (replace YOUR_USERNAME):" -ForegroundColor White
    Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/ursod-website.git" -ForegroundColor Yellow
    Write-Host "   git branch -M main" -ForegroundColor Yellow
    Write-Host "   git push -u origin main`n" -ForegroundColor Yellow
}

