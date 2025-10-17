# 🚀 Deployment Guide - SmartShop

## Quick Deployment Options

Choose one of these deployment methods based on your preference:

---

## 🟢 Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (No Git Required)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify Drop:**
   - Visit: https://app.netlify.com/drop
   - Or login to Netlify and click "Add new site" → "Deploy manually"

3. **Drag the `dist` folder** from your project to the drop zone

4. **Done!** Your site is live in seconds!
   - Netlify will give you a URL like: `https://random-name-123.netlify.app`
   - You can change this to a custom domain in settings

### Method B: Git Integration (Auto-Deploy)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Automatic deployments:**
   - Every push to main branch will auto-deploy!

---

## 🔵 Option 2: GitHub Pages

### Step 1: Update Configuration

Edit `vite.config.js` and change the base URL:

```javascript
export default defineConfig({
  plugins: [vue()],
  base: '/your-repo-name/', // ← Change this to your GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

**Example:** If your repo is `smartshop-store`, use `base: '/smartshop-store/'`

### Step 2: Build the Project

```bash
npm run build
```

### Step 3: Deploy Using gh-pages

#### On Windows (PowerShell):

```powershell
# Install gh-pages globally
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

#### On Mac/Linux (Bash):

```bash
# Install gh-pages globally
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/your-repo-name/`

---

## 🟣 Option 3: Vercel

### Method 1: Import from Git

1. **Push to GitHub** (if not already done)

2. **Go to Vercel:**
   - Visit: https://vercel.com
   - Sign up/login with GitHub

3. **Import repository:**
   - Click "Add New" → "Project"
   - Select your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

4. **Done!** Your site is live at: `https://your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

---

## 🟡 Option 4: Custom Server (VPS/Cloud)

### Prerequisites:
- VPS with Node.js installed
- Domain name (optional)
- SSH access

### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your server:
   ```bash
   scp -r dist/* user@your-server.com:/var/www/smartshop/
   ```

3. **Configure Nginx** (example):
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/smartshop;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

4. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

---

## ⚙️ Configuration Before Deploy

### Important: Update WhatsApp Number

**Before deploying, make sure to update your WhatsApp number!**

File: `src/services/whatsapp.js`

```javascript
const WHATSAPP_NUMBER = '+201012345678' // ← Change this
```

### Optional: Update Meta Tags

File: `index.html`

```html
<meta name="description" content="Your store description">
<meta property="og:title" content="SmartShop - WhatsApp Store">
<meta property="og:description" content="Shop easily via WhatsApp">
```

### Optional: Add Custom Domain

#### For Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records (Netlify will guide you)

#### For GitHub Pages:
1. Add a `CNAME` file to `dist` folder with your domain
2. Update DNS records to point to GitHub Pages

#### For Vercel:
1. Go to Project settings → Domains
2. Add custom domain
3. Update DNS records (Vercel will guide you)

---

## 🧪 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] WhatsApp number is updated in `whatsapp.js`
- [ ] Products are added/updated in `products.json`
- [ ] Contact info is updated in `Footer.vue`
- [ ] Colors/branding are customized
- [ ] Site title is correct in `index.html`
- [ ] All images load correctly
- [ ] Test WhatsApp integration locally
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] No console errors in browser

---

## 📊 Performance Tips

### Optimize for Production

1. **Compress Images:**
   - Use WebP format when possible
   - Compress with tools like TinyPNG
   - Recommended size: under 100KB per image

2. **Enable Caching:**
   - Already configured in `netlify.toml`
   - For other platforms, add cache headers

3. **Use CDN:**
   - Netlify/Vercel automatically use CDN
   - For custom servers, consider Cloudflare

4. **Lazy Load Images:**
   - Add `loading="lazy"` to img tags (already done in components)

---

## 🔒 Security Notes

### Environment Variables

If you want to hide your WhatsApp number from source code:

1. **Create `.env` file:**
   ```env
   VITE_WHATSAPP_NUMBER=+201012345678
   ```

2. **Update `whatsapp.js`:**
   ```javascript
   const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER
   ```

3. **Add to Netlify/Vercel:**
   - Go to site settings
   - Add environment variable: `VITE_WHATSAPP_NUMBER`

### Important:
- Never commit `.env` to Git
- Already in `.gitignore`

---

## 🐛 Troubleshooting Deployment

### Issue: 404 Page Not Found

**Solution:**
- Ensure hash routing is enabled (already done)
- Check base URL in `vite.config.js`
- Verify redirects are configured (already in `netlify.toml`)

### Issue: WhatsApp Not Working

**Solution:**
- Check phone number format in `whatsapp.js`
- Test locally first: `npm run dev`
- Ensure WhatsApp is installed on test device

### Issue: Images Not Loading

**Solution:**
- Check image URLs in `products.json`
- Ensure CORS is allowed (Unsplash allows this)
- Test image URLs in browser first

### Issue: Build Fails

**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete node_modules
rm -rf node_modules package-lock.json

# Reinstall
npm install

# Try build again
npm run build
```

---

## 📈 After Deployment

### 1. Test Your Live Site

- [ ] Visit the deployment URL
- [ ] Test all features
- [ ] Check WhatsApp integration
- [ ] Test on mobile devices
- [ ] Verify search and filters work
- [ ] Test favorites system
- [ ] Check product details pages

### 2. Monitor Performance

Add Google Analytics or similar:

```html
<!-- Add to index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

### 3. Share Your Store

- Share on social media
- Add to your WhatsApp status
- Share with customers
- Add to business cards

---

## 🔄 Updating Your Site

### For Netlify (Drag & Drop):
1. Make changes locally
2. Run `npm run build`
3. Drag new `dist` folder to Netlify

### For Netlify (Git):
1. Make changes locally
2. Commit and push to GitHub
3. Netlify auto-deploys!

### For GitHub Pages:
1. Make changes locally
2. Run `npm run build`
3. Run `gh-pages -d dist`

### For Vercel:
1. Make changes locally
2. Commit and push to GitHub
3. Vercel auto-deploys!

---

## 💰 Cost Comparison

| Platform | Free Tier | Custom Domain | Build Time | CDN |
|----------|-----------|---------------|------------|-----|
| **Netlify** | 100GB/month | ✅ | ~30s | ✅ |
| **GitHub Pages** | 100GB/month | ✅ | ~2min | ✅ |
| **Vercel** | 100GB/month | ✅ | ~20s | ✅ |
| **VPS** | Varies | ✅ | N/A | Optional |

**Recommendation:** Netlify or Vercel for best experience

---

## 🎯 Quick Deploy Commands

### Netlify CLI
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

### Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

---

## 📞 Need Help?

If you encounter issues:

1. **Check the logs** - Look for error messages
2. **Test locally first** - Run `npm run dev`
3. **Read documentation** - Platform-specific docs
4. **Ask for help** - Open a GitHub issue

---

## 🎉 Congratulations!

Once deployed, your store is live and ready for customers!

**Share your WhatsApp store link and start selling! 🛍️**

---

**Deployment URL Examples:**
- Netlify: `https://smartshop-store.netlify.app`
- Vercel: `https://smartshop-store.vercel.app`
- GitHub Pages: `https://yourusername.github.io/smartshop-store`
- Custom: `https://yourstore.com`

---

*Good luck with your store! 🚀*
