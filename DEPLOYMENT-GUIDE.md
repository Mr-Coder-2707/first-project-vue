# 🚀 GitHub Pages Deployment Guide

This guide explains how to deploy your Vue.js app to GitHub Pages.

## ✅ Prerequisites Checklist

- [x] GitHub account
- [x] Node.js and npm installed
- [x] Working Vue.js project
- [x] `gh-pages` package installed
- [x] `vite.config.js` configured with correct base path
- [x] Deploy script added to `package.json`

## 🎯 Quick Deployment

### Option 1: Using the Automated Script (Recommended)

Simply run:

**Windows (PowerShell):**
```powershell
.\deploy.ps1
```

**Linux/Mac (Bash):**
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 2: Manual Deployment

```bash
npm run deploy
```

## 📋 One-Time GitHub Setup

If this is your first deployment, follow these steps:

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/Mr-Coder-2707/first-project-vue
2. Click **Settings** → **Pages**
3. Under **Branch**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

### 2. Wait for Deployment

After 1-2 minutes, your site will be live at:

```
https://Mr-Coder-2707.github.io/first-project-vue/
```

## 🔧 Configuration Details

### Vite Configuration (`vite.config.js`)

```javascript
export default defineConfig({
  base: '/first-project-vue/', // Must match your repo name
  // ... other config
})
```

### Package.json Scripts

```json
{
  "scripts": {
    "build": "vite build",
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

## 🐛 Troubleshooting

### Issue: 404 Page Not Found

**Solution:** Make sure the `base` path in `vite.config.js` matches your repository name exactly.

### Issue: Blank Page After Deployment

**Solutions:**
1. Check browser console for errors
2. Verify `base` path is correct
3. Clear browser cache
4. Make sure GitHub Pages is enabled on the `gh-pages` branch

### Issue: CSS/JS Files Not Loading

**Solution:** This is usually caused by an incorrect `base` path. It should be `/your-repo-name/` (with leading and trailing slashes).

### Issue: Deployment Script Fails

**Solutions:**
1. Make sure you've committed all changes: `git add . && git commit -m "Update"`
2. Ensure you have write access to the repository
3. Check your internet connection
4. Try running `npm install` to ensure all dependencies are installed

## 🔄 Redeployment

To update your live site after making changes:

1. Make your changes
2. Commit them to git (optional but recommended)
3. Run the deployment script again:
   ```bash
   npm run deploy
   ```

## 📝 Important Notes

- **Every deployment creates a new commit** on the `gh-pages` branch
- The `gh-pages` branch is **automatically managed** by the script
- Your source code stays on the `main` branch
- The `dist` folder is **not committed** to your main branch
- GitHub Pages serves the content from the `gh-pages` branch

## 🌐 Custom Domain (Optional)

If you want to use a custom domain:

1. Add a file named `CNAME` in the `public/` folder with your domain:
   ```
   yourdomain.com
   ```
2. Configure your DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package](https://www.npmjs.com/package/gh-pages)

## 🎉 Success!

Once deployed, share your live URL:
```
https://Mr-Coder-2707.github.io/first-project-vue/
```

Happy coding! 🚀
