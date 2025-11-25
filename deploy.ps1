# Firebase Hosting Deployment Script
# This script builds and deploys your React app to Firebase Hosting

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Step 1: Build the React app
Write-Host "`n📦 Building React app..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
  exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green

# Step 2: Deploy to Firebase Hosting
Write-Host "`n🌐 Deploying to Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Deployment failed!" -ForegroundColor Red
  exit 1
}

Write-Host "`n✅ Deployment successful!" -ForegroundColor Green
Write-Host "🌍 Your app is live at: https://derrelwinter.com" -ForegroundColor Cyan
