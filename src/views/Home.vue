<template>
  <div class="home-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <i class="fas fa-store text-warning"></i>
          مرحباً بك في سمارت شوب
        </h1>
        <p class="hero-subtitle">
          <i class="fas fa-shopping-bag ms-2"></i>
          متجرك الإلكتروني الموثوق في مصر
        </p>
        <p class="hero-description">
          <i class="fab fa-whatsapp text-success ms-2"></i>
          تصفح منتجاتنا المميزة واطلب مباشرة عبر واتساب!
          بدون تسجيل، بدون بوابات دفع - فقط تسوق بسيط وسريع
        </p>
        <div class="hero-features">
          <div class="feature-badge">
            <i class="fas fa-truck text-primary"></i>
            <span>شحن مجاني</span>
          </div>
          <div class="feature-badge">
            <i class="fas fa-shield-alt text-success"></i>
            <span>دفع آمن</span>
          </div>
          <div class="feature-badge">
            <i class="fas fa-headset text-warning"></i>
            <span>دعم 24/7</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="products-section">
      <ProductList />
    </section>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
}

.hero-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  color: white;
  padding: 60px 20px;
  border-radius: 16px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: var(--shadow);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--primary-color), #ffb84d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 24px;
  margin-bottom: 16px;
  opacity: 0.9;
}

.hero-description {
  font-size: 18px;
  line-height: 1.8;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 2rem;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.feature-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  min-width: 120px;
  transition: all 0.3s ease;
}

.feature-badge:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.feature-badge i {
  font-size: 2rem;
}

.feature-badge span {
  font-size: 14px;
  font-weight: 600;
  color: white;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 40px 20px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-description {
    font-size: 14px;
  }
  
  .hero-features {
    gap: 1rem;
  }
  
  .feature-badge {
    min-width: 100px;
    padding: 0.75rem;
  }
  
  .feature-badge i {
    font-size: 1.5rem;
  }
}
</style>
