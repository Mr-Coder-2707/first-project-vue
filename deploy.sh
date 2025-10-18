#!/bin/bash

# ========================================
# 🚀 GitHub Pages Deployment Script
# ========================================
# This script automates the deployment of your Vue.js app to GitHub Pages

echo "🚀 Starting GitHub Pages Deployment..."
echo ""

# Step 1: Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Step 2: Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

if [ $? -ne 0 ]; then
    echo "❌ Deployment failed!"
    exit 1
fi

echo ""
echo "✅ Deployment successful!"
echo ""
echo "🎉 Your site will be live in 1-2 minutes at:"
echo "   https://Mr-Coder-2707.github.io/first-project-vue/"
echo ""
echo "📝 Note: Make sure GitHub Pages is enabled in your repository settings:"
echo "   Settings → Pages → Branch: gh-pages / (root)"
echo ""
