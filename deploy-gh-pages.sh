# Deploy to GitHub Pages Script
# Run this script to deploy your app to GitHub Pages

# Build the project
npm run build

# Create a temporary gh-pages branch
git checkout --orphan gh-pages

# Add the dist folder
git --work-tree dist add --all

# Commit the changes
git --work-tree dist commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin HEAD:gh-pages --force

# Return to main branch
git checkout -f main

# Clean up
git branch -D gh-pages
