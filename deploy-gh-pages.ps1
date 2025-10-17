# Build the project
npm run build

# Create a .nojekyll file to bypass Jekyll processing
New-Item -Path "dist/.nojekyll" -ItemType File -Force

# Create CNAME file if you have a custom domain (optional)
# "yourdomain.com" | Out-File -FilePath "dist/CNAME" -Encoding ascii

Write-Host "Build completed! Deploy the 'dist' folder to GitHub Pages."
Write-Host ""
Write-Host "Quick Deploy Options:"
Write-Host "1. Install gh-pages: npm install -g gh-pages"
Write-Host "2. Deploy: gh-pages -d dist"
Write-Host ""
Write-Host "Or manually:"
Write-Host "1. Go to your GitHub repo settings"
Write-Host "2. Navigate to Pages section"
Write-Host "3. Select the branch and /dist folder"
Write-Host "4. Push the dist folder to your repository"
