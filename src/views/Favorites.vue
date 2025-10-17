<template>
  <div class="favorites-page">
    <div class="page-header">
      <h1>
        <i class="fas fa-heart text-danger"></i>
        قائمة المفضلة
      </h1>
      <p v-if="favoriteProducts.length > 0" class="text-muted">
        لديك {{ favoriteProducts.length }} منتج في المفضلة
      </p>
    </div>
    
    <div v-if="favoriteProducts.length === 0" class="empty-favorites">
      <div class="empty-icon">
        <i class="far fa-heart"></i>
      </div>
      <h2>لا توجد منتجات في المفضلة</h2>
      <p>ابدأ بإضافة المنتجات التي تعجبك!</p>
      <router-link to="/" class="btn btn-warning btn-lg">
        <i class="fas fa-shopping-bag ms-2"></i>
        تصفح المنتجات
      </router-link>
    </div>
    
    <div v-else class="favorites-grid">
      <ProductCard 
        v-for="product in favoriteProducts" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import productsData from '../data/products.json'

export default {
  name: 'Favorites',
  components: {
    ProductCard
  },
  setup() {
    const favoriteProducts = ref([])
    
    const loadFavorites = () => {
      const favoriteIds = JSON.parse(localStorage.getItem('favorites') || '[]')
      favoriteProducts.value = productsData.filter(p => favoriteIds.includes(p.id))
    }
    
    onMounted(() => {
      loadFavorites()
      
      // Reload favorites when storage changes
      window.addEventListener('storage', loadFavorites)
      
      // Also check periodically for updates
      const interval = setInterval(loadFavorites, 2000)
      
      return () => {
        window.removeEventListener('storage', loadFavorites)
        clearInterval(interval)
      }
    })
    
    return {
      favoriteProducts
    }
  }
}
</script>

<style scoped>
.favorites-page {
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 36px;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.page-header p {
  color: var(--text-secondary);
  font-size: 16px;
}

.empty-favorites {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.empty-icon {
  font-size: 6rem;
  margin-bottom: 1.5rem;
  color: #ccc;
}

.empty-icon i {
  animation: heartbeat 1.5s ease infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.empty-favorites h2 {
  font-size: 1.75rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 700;
}

.empty-favorites p {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 28px;
  }
  
  .favorites-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
  
  .empty-icon {
    font-size: 60px;
  }
  
  .empty-favorites h2 {
    font-size: 24px;
  }
}
</style>
