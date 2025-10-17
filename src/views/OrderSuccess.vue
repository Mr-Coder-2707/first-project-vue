<template>
  <div class="order-success-page">
    <div class="container">
      <div class="success-card">
        <div class="success-icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <h1 class="success-title">تم إرسال طلبك بنجاح!</h1>
        <p class="success-message">
          شكراً لك! تم إرسال طلبك عبر واتساب.
          <br>
          سنقوم بالتواصل معك قريباً لتأكيد الطلب.
        </p>
        
        <div class="order-info">
          <div class="info-item">
            <i class="fas fa-clock text-warning"></i>
            <span>سيتم التواصل معك خلال 24 ساعة</span>
          </div>
          <div class="info-item">
            <i class="fas fa-truck text-primary"></i>
            <span>الشحن خلال 2-3 أيام عمل</span>
          </div>
          <div class="info-item">
            <i class="fas fa-headset text-success"></i>
            <span>خدمة عملاء متاحة 24/7</span>
          </div>
        </div>

        <div class="action-buttons">
          <router-link to="/" class="btn btn-warning btn-lg">
            <i class="fas fa-home ms-2"></i>
            العودة للرئيسية
          </router-link>
          <a :href="whatsappLink" target="_blank" class="btn btn-success btn-lg">
            <i class="fab fa-whatsapp ms-2"></i>
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSuccess',
  setup() {
    const phoneNumber = '+201557609572'
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=مرحباً! أريد الاستفسار عن طلبي`
    
    return {
      whatsappLink
    }
  }
}
</script>

<style scoped>
.order-success-page {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
}

.success-card {
  background: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 600px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: slideUp 0.5s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: 5rem;
  color: var(--success-color);
  margin-bottom: 1.5rem;
  animation: scaleIn 0.5s ease 0.2s both;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.success-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.success-message {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.order-info {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.info-item i {
  font-size: 1.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.action-buttons .btn {
  padding: 1rem 2rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 768px) {
  .success-card {
    padding: 2rem 1.5rem;
  }
  
  .success-icon {
    font-size: 4rem;
  }
  
  .success-title {
    font-size: 1.5rem;
  }
  
  .success-message {
    font-size: 1rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .action-buttons .btn {
    width: 100%;
  }
}
</style>
