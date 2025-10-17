# 🛍️ سمارت شوب - متجر إلكتروني مصري

<div align="center">

![SmartShop Logo](public/shopping-cart.svg)

**منصة تسوق إلكترونية حديثة مع عربة تسوق ونظام طلب عبر واتساب**

[![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-6.5-339AF0?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)

[عرض مباشر](#) | [التوثيق](#المميزات) | [الإبلاغ عن خطأ](../../issues)

</div>

---

## 📖 نظرة عامة

**سمارت شوب** هي منصة تسوق إلكترونية متكاملة مصممة خصيصاً للسوق المصري، مبنية بـ **Vue.js** و **Bootstrap 5 RTL** مع دعم كامل للغة العربية.

### 🎯 ما يميز المشروع؟

- ✅ **عربة تسوق متكاملة** - إضافة وحذف وتعديل الكميات
- ✅ **نموذج بيانات احترافي** - جمع معلومات المشتري بالكامل (الاسم، الهاتف، العنوان بالتفصيل)
- ✅ **تكامل واتساب** - إرسال الطلبات مباشرة مع كل التفاصيل
- ✅ **Bootstrap 5 RTL** - تصميم احترافي من اليمين لليسار
- ✅ **Font Awesome 6** - أيقونات حديثة ومميزة
- ✅ **الدفع عند الاستلام** - بدون الحاجة لبوابات دفع إلكترونية

---

## ✨ المميزات الكاملة

### 🛒 **نظام عربة التسوق**
- ✅ إضافة منتجات للعربة
- ✅ تحديث الكميات
- ✅ حذف المنتجات
- ✅ حساب الإجمالي تلقائياً
- ✅ حفظ العربة في LocalStorage
- ✅ عرض عدد المنتجات في Navbar
- ✅ تفريغ العربة بالكامل

### 📝 **نموذج بيانات المشتري**
- 👤 **المعلومات الشخصية:**
  - الاسم الكامل
  - رقم الهاتف (11 رقم)
  - رقم واتساب (إن كان مختلف)
  - البريد الإلكتروني (اختياري)

- 📍 **عنوان الشحن التفصيلي:**
  - اختيار المحافظة (قائمة بجميع محافظات مصر)
  - المدينة
  - العنوان بالتفصيل
  - رقم العمارة/الفيلا
  - رقم الشقة

- 💰 **طريقة الدفع:**
  - الدفع عند الاستلام

- 📋 **ملاحظات إضافية:**
  - مساحة لكتابة أي ملاحظات خاصة

### 💬 **تكامل واتساب المطور**
عند إتمام الطلب، يتم إرسال رسالة منسقة تحتوي على:
```
🛍️ طلب جديد من سمارت شوب

👤 بيانات العميل:
الاسم: محمد أحمد
الهاتف: 01012345678
واتساب: 01012345678
البريد: example@email.com

📍 عنوان الشحن:
المحافظة: القاهرة
المدينة: المعادي
العنوان: شارع النيل، بجوار مسجد السلام، الطابق الثالث، شقة 5
رقم العمارة: 15
رقم الشقة: 5

📦 المنتجات المطلوبة:
1. Wireless Bluetooth Headphones
   الكمية: 2
   السعر: 159.98 ج.م
2. Smart Watch Series 7
   الكمية: 1
   السعر: 299.99 ج.م

💰 الإجمالي: 459.97 ج.م
💵 طريقة الدفع: الدفع عند الاستلام

📝 ملاحظات:
يرجى التواصل قبل الشحن

✅ يرجى تأكيد الطلب
```

### 🎨 **واجهة احترافية**
- ✅ Navbar احترافي مع Bootstrap
- ✅ أيقونات Font Awesome حديثة
- ✅ تصميم RTL كامل
- ✅ خط Cairo العربي
- ✅ ألوان متناسقة ومميزة
- ✅ Responsive للموبايل
- ✅ انميشن وتأثيرات حركية

### 📱 **صفحات المشروع**
1. **الصفحة الرئيسية** - عرض المنتجات مع البحث والفلاتر
2. **تفاصيل المنتج** - معلومات كاملة + زر إضافة للعربة
3. **عربة التسوق** - إدارة المنتجات المضافة
4. **صفحة الدفع** - نموذج البيانات الكامل
5. **صفحة المفضلة** - المنتجات المفضلة
6. **صفحة النجاح** - تأكيد إتمام الطلب

---

## 🚀 البدء السريع

### 1️⃣ تثبيت المشروع

```bash
# استنساخ المشروع
git clone https://github.com/yourusername/smartshop.git
cd smartshop

# تثبيت الاعتماديات
npm install

# تشغيل الخادم
npm run dev
```

### 2️⃣ ضبط رقم واتساب

افتح ملف `src/services/whatsapp.js` وعدّل الرقم:

```javascript
const WHATSAPP_NUMBER = '+201012345678' // ضع رقمك هنا
```

**مهم:** الرقم يجب أن يكون بصيغة `+20` ثم 10 أرقام (مثال: +201012345678)

### 3️⃣ تصفح الموقع

افتح المتصفح على: `http://localhost:5173`

---

## 📦 التقنيات المستخدمة

| التقنية | الاستخدام |
|---------|-----------|
| **Vue.js 3** | إطار عمل JavaScript |
| **Vue Router** | التنقل بين الصفحات |
| **Bootstrap 5 RTL** | تصميم احترافي من اليمين لليسار |
| **Font Awesome 6** | أيقونات حديثة |
| **Vite** | أداة البناء والتطوير |
| **LocalStorage** | حفظ العربة والمفضلة |
| **WhatsApp Business API** | إرسال الطلبات |
| **Google Fonts (Cairo)** | خط عربي احترافي |

---

## 🎯 المكونات الرئيسية

### 1. نظام إدارة العربة (Cart Store)
```javascript
// src/store/cartStore.js
- addToCart() - إضافة منتج
- removeFromCart() - حذف منتج
- updateQuantity() - تحديث الكمية
- clearCart() - تفريغ العربة
- getCartTotal - حساب الإجمالي
- getCartCount - عدد المنتجات
```

### 2. مكونات Vue
```
src/components/
├── NavbarComponent.vue  - شريط التنقل الاحترافي
├── ProductCard.vue      - بطاقة المنتج مع زر العربة
├── ProductList.vue      - قائمة المنتجات
├── SearchBar.vue        - شريط البحث
├── CategoryFilter.vue   - فلتر الأقسام
└── Footer.vue          - تذييل الموقع
```

### 3. الصفحات
```
src/views/
├── Home.vue            - الصفحة الرئيسية
├── ProductDetails.vue  - تفاصيل المنتج
├── Cart.vue           - عربة التسوق
├── Checkout.vue       - نموذج الدفع
├── Favorites.vue      - المفضلة
└── OrderSuccess.vue   - تأكيد الطلب
```

---

## 🎨 التخصيص

### تغيير الألوان
افتح `src/style.css`:

```css
:root {
  --primary-color: #ff9900;      /* اللون الأساسي */
  --secondary-color: #1a1a2e;    /* لون ثانوي */
  --success-color: #25d366;      /* لون واتساب */
}
```

### إضافة محافظات
افتح `src/views/Checkout.vue`:

```javascript
const governorates = [
  'القاهرة', 'الجيزة', 'الإسكندرية',
  // أضف محافظات أخرى
]
```

### تعديل المنتجات
افتح `src/data/products.json` وعدّل حسب الحاجة.

---

## 📱 صور من المشروع

### الصفحة الرئيسية
- Hero Section مع ميزات (شحن مجاني - دفع آمن - دعم 24/7)
- شريط بحث واسع
- فلاتر الأقسام
- بطاقات المنتجات مع أزرار "أضف للعربة"

### عربة التسوق
- قائمة المنتجات المضافة
- تحكم بالكميات (+/-)
- زر حذف المنتج
- ملخص الطلب (المجموع الفرعي + الشحن + الإجمالي)
- زر "إتمام الطلب"

### صفحة الدفع
- نموذج شامل ومنظم
- جميع حقول البيانات المطلوبة
- ملخص جانبي للطلب
- أيقونات توضيحية لكل حقل

---

## 🌐 النشر

### Netlify (الأسهل)

```bash
# بناء المشروع
npm run build

# ارفع مجلد dist على netlify.com/drop
```

### GitHub Pages

```bash
# عدّل vite.config.js
base: '/اسم-المستودع/'

# ابنِ المشروع
npm run build

# انشر
gh-pages -d dist
```

---

## 💡 كيفية الاستخدام

### للعملاء:
1. تصفح المنتجات
2. أضف للعربة
3. اذهب للعربة
4. أكمل الطلب
5. املأ البيانات
6. أرسل عبر واتساب

### لصاحب المتجر:
1. استقبل الطلب على واتساب
2. جميع البيانات منسقة وواضحة
3. تواصل مع العميل
4. أكد الطلب
5. شحن المنتجات

---

## 🔧 الأوامر المتاحة

```bash
npm install       # تثبيت الاعتماديات
npm run dev       # تشغيل الخادم (منفذ 5173)
npm run build     # بناء المشروع للإنتاج
npm run preview   # معاينة النسخة الإنتاجية
```

---

## 📝 الميزات المضافة

### ✅ Bootstrap 5 RTL
- تصميم من اليمين لليسار
- Grid system احترافي
- Components جاهزة
- Utilities مفيدة

### ✅ Font Awesome 6
- 2000+ أيقونة
- Brands (فيسبوك، واتساب، إلخ)
- Solid & Regular styles
- سهولة في الاستخدام

### ✅ نظام عربة متقدم
- State management
- Persistence في LocalStorage
- Computed properties للأداء
- Watchers للتحديثات التلقائية

### ✅ نموذج شامل
- Validation للحقول
- Required fields
- Pattern matching للأرقام
- Textarea للملاحظات
- Select للمحافظات
- Checkbox للموافقة

---

## 🎓 ما تعلمته من هذا المشروع

- ✅ إدارة الحالة بدون Vuex
- ✅ تكامل Bootstrap مع Vue
- ✅ RTL layout مع CSS
- ✅ Font Awesome في Vue
- ✅ LocalStorage API
- ✅ Form validation
- ✅ WhatsApp API
- ✅ Router navigation
- ✅ Responsive design
- ✅ Arabic typography

---

## 🤝 المساهمة

المساهمات مرحب بها دائماً!

1. Fork المشروع
2. أنشئ فرع للميزة (`git checkout -b feature/amazing`)
3. Commit التغييرات (`git commit -m 'إضافة ميزة رائعة'`)
4. Push للفرع (`git push origin feature/amazing`)
5. افتح Pull Request

---

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف [LICENSE](LICENSE)

---

## 👨‍💻 المطور

**اسمك**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- WhatsApp: +201012345678

---

## 🙏 شكر خاص

- [Vue.js](https://vuejs.org/) - إطار العمل الرائع
- [Bootstrap](https://getbootstrap.com/) - مكتبة التصميم
- [Font Awesome](https://fontawesome.com/) - الأيقونات المميزة
- [Vite](https://vitejs.dev/) - أداة البناء السريعة
- [Unsplash](https://unsplash.com/) - الصور المجانية

---

## 📞 الدعم

إذا كان لديك أي استفسار:
- 📧 Email: info@smartshop.com
- 💬 WhatsApp: +201012345678
- 🐛 [GitHub Issues](../../issues)

---

## 🌟 إذا أعجبك المشروع

اترك نجمة ⭐️ على GitHub!

---

<div align="center">

**بُني بـ ❤️ باستخدام Vue.js و Bootstrap**

**متجرك الإلكتروني الآن جاهز! 🚀🛍️**

</div>
