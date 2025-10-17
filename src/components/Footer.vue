<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>
          <i class="fas fa-store text-warning ms-2"></i>
          عن سمارت شوب
        </h3>
        <p>متجرك الإلكتروني الموثوق في مصر. تسوق بسهولة واطلب مباشرة عبر واتساب!</p>
        <div class="social-links mt-3">
          <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
          <a :href="whatsappLink" target="_blank" class="social-icon"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      
      <div class="footer-section">
        <h3>
          <i class="fas fa-link text-warning ms-2"></i>
          روابط سريعة
        </h3>
        <ul>
          <li><router-link to="/"><i class="fas fa-home ms-2"></i>الرئيسية</router-link></li>
          <li><router-link to="/favorites"><i class="fas fa-heart ms-2"></i>المفضلة</router-link></li>
          <li><router-link to="/cart"><i class="fas fa-shopping-cart ms-2"></i>عربة التسوق</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>
          <i class="fas fa-phone text-warning ms-2"></i>
          تواصل معنا
        </h3>
        <div class="contact-info">
          <a :href="whatsappLink" target="_blank" class="whatsapp-contact mb-2">
            <i class="fab fa-whatsapp ms-2"></i>
            واتساب: {{ phoneNumber }}
          </a>
          <div class="contact-item">
            <i class="fas fa-envelope ms-2 text-warning"></i>
            <span>info@smartshop.com</span>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt ms-2 text-warning"></i>
            <span>القاهرة، مصر</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} سمارت شوب. جميع الحقوق محفوظة.</p>
      <p class="tech-info">
        <i class="fas fa-code ms-1"></i>
        تم التطوير بـ Vue.js
        <i class="fas fa-heart text-danger mx-1"></i>
      </p>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'Footer',
  setup() {
    const phoneNumber = '+201557609572' // Replace with your WhatsApp number
    const currentYear = new Date().getFullYear()
    
    const whatsappLink = computed(() => {
      return `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Hello! I'm interested in your products.`
    })
    
    return {
      phoneNumber,
      currentYear,
      whatsappLink
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--secondary-color);
  color: white;
  margin-top: 60px;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.footer-section p {
  color: #ccc;
  line-height: 1.6;
  font-size: 14px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ccc;
  transition: color 0.3s ease;
  font-size: 14px;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.whatsapp-contact {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--success-color);
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
  width: fit-content;
}

.whatsapp-contact:hover {
  background: #1faa52;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(37, 211, 102, 0.3);
}

.contact-item {
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 14px;
  margin-bottom: 10px;
}

.contact-item i {
  margin-left: 8px;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 153, 0, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: var(--primary-color);
  color: #000;
  transform: translateY(-3px);
}

.footer-bottom {
  border-top: 1px solid var(--accent-color);
  padding: 20px;
  text-align: center;
}

.footer-bottom p {
  color: #ccc;
  font-size: 14px;
  margin: 5px 0;
}

.tech-info {
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px 20px;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .whatsapp-contact {
    margin: 0 auto;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
