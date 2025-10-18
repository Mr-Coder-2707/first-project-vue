# ========================================
# 🚀 GitHub Pages Deployment Script
# ========================================
# This script automates the deployment of your Vue.js app to GitHub Pages

Write-Host "🚀 Starting GitHub Pages Deployment..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the project
Write-Host "📦 Building the project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix the errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Deploy to GitHub Pages
Write-Host "🌐 Deploying to GitHub Pages..." -ForegroundColor Yellow
npm run deploy

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Deployment successful!" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Your site will be live in 1-2 minutes at:" -ForegroundColor Cyan
Write-Host "   https://Mr-Coder-2707.github.io/first-project-vue/" -ForegroundColor White
Write-Host ""
Write-Host "📝 Note: Make sure GitHub Pages is enabled in your repository settings:" -ForegroundColor Yellow
Write-Host "   Settings → Pages → Branch: gh-pages / (root)" -ForegroundColor White
Write-Host ""
