# 🛍️ SmartShop - WhatsApp Store

<div align="center">

![SmartShop Logo](public/shopping-cart.svg)

**Modern e-commerce platform with WhatsApp order integration**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](#) | [Documentation](#features) | [Report Bug](../../issues)

</div>

---

## 📖 About The Project

**SmartShop** is a modern e-commerce platform built with **Vue.js**, designed to provide users with a fast, responsive, and intuitive shopping experience similar to **Amazon** and **Noon**.

### 🎯 What Makes It Unique?

The unique feature of this website is that **orders are processed directly through WhatsApp**, allowing customers to send product details and purchase requests instantly **without registration or payment gateways**.

When a user clicks on the **"Order via WhatsApp"** button, the site automatically opens WhatsApp with a pre-filled message that includes:
- ✅ Product name
- ✅ Price and discount information
- ✅ Product rating and reviews
- ✅ Direct product link
- ✅ Professional order request message

---

## ✨ Features

### 🛒 **E-Commerce Features**
- 🏪 **Product Catalog** - Browse through a wide range of products
- 🔍 **Smart Search** - Quick product search with real-time filtering
- 🏷️ **Category Filters** - Filter products by category
- ⭐ **Product Ratings & Reviews** - See what others think
- 💰 **Dynamic Pricing** - Show original price, discounts, and savings
- ❤️ **Favorites System** - Save products you love
- 📱 **Fully Responsive** - Works perfectly on all devices

### 💬 **WhatsApp Integration**
- 📲 **One-Click Ordering** - Order products instantly via WhatsApp
- 📝 **Auto-Formatted Messages** - Professional pre-filled order messages
- 🔗 **Product Links** - Share product details easily
- 🌐 **Universal Compatibility** - Works on all devices with WhatsApp

### 🎨 **User Experience**
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Intuitive Navigation** - Easy-to-use interface
- 🌈 **Modern Design** - Clean and professional UI
- 📊 **Product Details Page** - Comprehensive product information
- 🔄 **Smooth Transitions** - Animated page transitions
- 💾 **Persistent Favorites** - LocalStorage-based favorites

---

## 🚀 Technology Stack

| Technology | Purpose |
|------------|---------|
| **Vue.js 3** | Frontend framework with Composition API |
| **Vue Router** | Client-side routing and navigation |
| **Vite** | Build tool and development server |
| **CSS3** | Modern styling with custom properties |
| **LocalStorage API** | Client-side data persistence |
| **WhatsApp Business API** | Direct order integration |

---

## 📁 Project Structure

```
smartshop-whatsapp-store/
├── public/
│   └── shopping-cart.svg          # App favicon
├── src/
│   ├── components/
│   │   ├── ProductCard.vue        # Individual product card
│   │   ├── ProductList.vue        # Products grid with filters
│   │   ├── SearchBar.vue          # Search functionality
│   │   ├── CategoryFilter.vue     # Category filtering
│   │   ├── Header.vue             # App header/navigation
│   │   └── Footer.vue             # App footer
│   ├── views/
│   │   ├── Home.vue               # Homepage with product list
│   │   ├── ProductDetails.vue     # Product detail page
│   │   └── Favorites.vue          # User's favorite products
│   ├── services/
│   │   └── whatsapp.js            # WhatsApp integration logic
│   ├── data/
│   │   └── products.json          # Product database
│   ├── App.vue                    # Root component
│   ├── main.js                    # App entry point
│   └── style.css                  # Global styles
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── package.json                   # Dependencies
├── .gitignore                     # Git ignore rules
├── netlify.toml                   # Netlify deployment config
└── README.md                      # This file
```

---

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git** (for cloning)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/smartshop-whatsapp-store.git
cd smartshop-whatsapp-store
```

### Step 2: Install Dependencies

```bash
npm install
# or
yarn install
```

### Step 3: Configure WhatsApp Number

Open `src/services/whatsapp.js` and replace the phone number:

```javascript
const WHATSAPP_NUMBER = '+201012345678' // Replace with your WhatsApp Business number
```

**Format:** `+[country_code][phone_number]` (no spaces or special characters)

### Step 4: Run Development Server

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` in your browser.

### Step 5: Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder.

---

## 🌐 Deployment

### Deploy to **GitHub Pages**

1. **Update `vite.config.js`** with your repository name:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your repository name
   })
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   # Install gh-pages
   npm install -g gh-pages

   # Deploy
   gh-pages -d dist
   ```

4. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings** → **Pages**
   - Select **gh-pages** branch
   - Save

### Deploy to **Netlify**

#### Option 1: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist` folder

#### Option 2: Git Integration
1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click **"New site from Git"**
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click **"Deploy site"**

The `netlify.toml` file is already configured for optimal deployment.

---

## 📝 Customization Guide

### Adding New Products

Edit `src/data/products.json`:

```json
{
  "id": 21,
  "name": "Your Product Name",
  "category": "Electronics",
  "price": 99.99,
  "originalPrice": 149.99,
  "discount": 33,
  "rating": 5,
  "reviews": 100,
  "image": "https://your-image-url.com/product.jpg",
  "description": "Your product description here"
}
```

### Changing Colors

Edit CSS variables in `src/style.css`:

```css
:root {
  --primary-color: #ff9900;      /* Brand color */
  --secondary-color: #232f3e;    /* Dark background */
  --success-color: #25d366;      /* WhatsApp green */
}
```

### Updating Contact Information

Edit `src/components/Footer.vue`:

```javascript
const phoneNumber = '+201012345678' // Your WhatsApp number
```

---

## 🎓 How It Works

### WhatsApp Integration Flow

1. **User browses products** on the website
2. **User clicks "Order via WhatsApp"** on any product
3. **System generates formatted message** with product details
4. **WhatsApp opens automatically** with pre-filled message
5. **User sends message** to seller/business
6. **Order processed** via WhatsApp conversation

### Message Format Example

```
🛍️ *New Order Request*

📦 *Product:* Wireless Bluetooth Headphones
💰 *Price:* $79.99
📁 *Category:* Electronics

~~$129.99~~ 🔥 *38% OFF*

⭐ *Rating:* ⭐⭐⭐⭐⭐ (1243 reviews)

🔗 *Product Link:* https://yoursite.com/#/product/1

✅ I would like to order this product!
```

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [WhatsApp Business API](https://www.whatsapp.com/business/api)
- [Unsplash](https://unsplash.com/) for product images
- Icons: Emoji Unicode characters

---

## 📞 Support

If you have any questions or need help, feel free to:
- 📧 Email: your.email@example.com
- 💬 WhatsApp: +201012345678
- 🐛 [Open an issue](../../issues)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">

**Built with ❤️ using Vue.js**

</div>
