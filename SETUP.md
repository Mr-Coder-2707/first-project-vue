# SmartShop - Quick Setup Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure WhatsApp Number
Open `src/services/whatsapp.js` and change:
```javascript
const WHATSAPP_NUMBER = '+201012345678' // Your number here
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit: http://localhost:5173

### Step 4: Customize Products (Optional)
Edit `src/data/products.json` to add your products.

### Step 5: Build & Deploy
```bash
npm run build
```

Deploy the `dist` folder to:
- **Netlify**: Drag & drop to netlify.com/drop
- **GitHub Pages**: Use `gh-pages -d dist`

---

## 📞 Important Configuration

### WhatsApp Number Format
✅ Correct: `+201012345678`
❌ Wrong: `+20 10 1234 5678` or `201012345678`

### Contact Information
Update these files:
- `src/services/whatsapp.js` - Main WhatsApp number
- `src/components/Footer.vue` - Footer contact info

---

## 🎨 Customization

### Change Brand Colors
Edit `src/style.css`:
```css
:root {
  --primary-color: #ff9900;
  --secondary-color: #232f3e;
}
```

### Add/Remove Products
Edit `src/data/products.json`:
- Each product needs: id, name, category, price, image, description
- Optional: originalPrice, discount, rating, reviews

---

## 🐛 Troubleshooting

**Problem:** WhatsApp doesn't open
- Check phone number format in `whatsapp.js`
- Ensure WhatsApp is installed on device

**Problem:** Images not showing
- Check image URLs in `products.json`
- Use Unsplash or your own hosted images

**Problem:** Build fails
- Run `npm install` again
- Check Node.js version (should be v16+)

---

## 📚 Learn More

- Full documentation: See [README.md](README.md)
- Vue.js docs: https://vuejs.org
- Vite docs: https://vitejs.dev

---

**Need Help?** Open an issue on GitHub!
