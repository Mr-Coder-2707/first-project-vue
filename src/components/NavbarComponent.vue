<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
    <div class="container-fluid">
      <!-- Logo & Brand -->
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <i class="fas fa-shopping-bag fs-3 text-warning ms-2"></i>
        <span class="fw-bold">
          <span class="text-warning">سمارت</span>
          <span class="text-white">شوب</span>
        </span>
      </router-link>

      <!-- Mobile Toggle Button -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active">
              <i class="fas fa-home ms-1"></i>
              الرئيسية
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorites" class="nav-link" active-class="active">
              <i class="fas fa-heart ms-1"></i>
              المفضلة
              <span v-if="favoritesCount > 0" class="badge bg-danger rounded-pill me-1">
                {{ favoritesCount }}
              </span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link position-relative" active-class="active">
              <i class="fas fa-shopping-cart ms-1"></i>
              عربة التسوق
              <span v-if="cartCount > 0" class="badge bg-warning text-dark rounded-pill me-1">
                {{ cartCount }}
              </span>
            </router-link>
          </li>
        </ul>

        <!-- WhatsApp Contact -->
        <div class="d-flex align-items-center">
          <a 
            :href="whatsappLink" 
            target="_blank"
            class="btn btn-success btn-sm d-flex align-items-center"
          >
            <i class="fab fa-whatsapp fs-5 ms-2"></i>
            <span class="d-none d-md-inline">اتصل بنا</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getCartCount } from '../store/cartStore'

export default {
  name: 'NavbarComponent',
  setup() {
    const favoritesCount = ref(0)
    const cartCount = getCartCount
    const phoneNumber = '+201557609572' // رقم واتساب مصري
    const whatsappLink = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=مرحباً! أنا مهتم بمنتجاتكم`
    
    const updateFavoritesCount = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      favoritesCount.value = favorites.length
    }
    
    onMounted(() => {
      updateFavoritesCount()
      setInterval(updateFavoritesCount, 1000)
    })
    
    return {
      favoritesCount,
      cartCount,
      whatsappLink
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%) !important;
  backdrop-filter: blur(10px);
  border-bottom: 3px solid var(--primary-color);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 900;
  transition: transform 0.3s ease;
}

.navbar-brand:hover {
  transform: scale(1.05);
}

.nav-link {
  font-weight: 600;
  padding: 0.5rem 1rem !important;
  margin: 0 0.25rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.85) !important;
}

.nav-link:hover {
  background: rgba(255, 153, 0, 0.1);
  color: var(--primary-color) !important;
  transform: translateY(-2px);
}

.nav-link.active {
  background: var(--primary-color);
  color: #000 !important;
  font-weight: 700;
}

.badge {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.btn-success {
  background: var(--success-color);
  border: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.btn-success:hover {
  background: #1faa52;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
}

@media (max-width: 991px) {
  .navbar-nav {
    padding: 1rem 0;
  }
  
  .nav-link {
    margin: 0.25rem 0;
  }
}
</style>
