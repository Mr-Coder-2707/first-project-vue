<template>
  <div class="product-details-page">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>
    
    <div v-else-if="!product" class="not-found">
      <h2>Product not found</h2>
      <router-link to="/" class="btn btn-primary">Back to Home</router-link>
    </div>
    
    <div v-else class="product-details">
      <div class="product-gallery">
        <img :src="product.image" :alt="product.name" class="product-main-image" />
        <span v-if="product.discount" class="discount-badge">
          -{{ product.discount }}%
        </span>
      </div>
      
      <div class="product-info-section">
        <h1 class="product-title">{{ product.name }}</h1>
        
        <div class="product-rating">
          <span class="stars">{{ '⭐'.repeat(product.rating) }}</span>
          <span class="rating-text">{{ product.rating }} out of 5</span>
          <span class="reviews-count">({{ product.reviews }} reviews)</span>
        </div>
        
        <div class="product-price-section">
          <span v-if="product.originalPrice" class="original-price">
            ${{ product.originalPrice }}
          </span>
          <span class="current-price">${{ product.price }}</span>
          <span v-if="product.discount" class="savings">
            You Save: ${{ (product.originalPrice - product.price).toFixed(2) }} ({{ product.discount }}%)
          </span>
        </div>
        
        <div class="product-category">
          <span class="label">Category:</span>
          <span class="value">{{ product.category }}</span>
        </div>
        
        <div class="product-description">
          <h3>About this product</h3>
          <p>{{ product.description }}</p>
        </div>
        
        <div class="product-actions-section">
          <button @click="toggleFavorite" class="btn btn-secondary">
            <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
            {{ isFavorite ? 'إزالة من المفضلة' : 'أضف للمفضلة' }}
          </button>
          <button @click="addToCartHandler" class="btn btn-warning" :disabled="itemInCart">
            <i :class="itemInCart ? 'fas fa-check' : 'fas fa-cart-plus'"></i>
            {{ itemInCart ? 'في العربة' : 'أضف للعربة' }}
          </button>
          <button @click="orderViaWhatsApp" class="btn btn-whatsapp">
            <i class="fab fa-whatsapp"></i>
            اطلب عبر واتساب
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { sendWhatsAppOrder } from '../services/whatsapp'
import { addToCart, isInCart } from '../store/cartStore'
import productsData from '../data/products.json'

export default {
  name: 'ProductDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const product = ref(null)
    const loading = ref(true)
    const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'))
    
    const isFavorite = computed(() => {
      return product.value && favorites.value.includes(product.value.id)
    })
    
    const itemInCart = computed(() => {
      return product.value && isInCart(product.value.id)
    })
    
    const loadProduct = () => {
      const productId = parseInt(route.params.id)
      product.value = productsData.find(p => p.id === productId)
      loading.value = false
    }
    
    const toggleFavorite = () => {
      if (!product.value) return
      
      if (isFavorite.value) {
        favorites.value = favorites.value.filter(id => id !== product.value.id)
      } else {
        favorites.value.push(product.value.id)
      }
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
    
    const addToCartHandler = () => {
      if (product.value && !itemInCart.value) {
        addToCart(product.value)
      }
    }
    
    const orderViaWhatsApp = () => {
      if (product.value) {
        sendWhatsAppOrder(product.value)
      }
    }
    
    onMounted(() => {
      loadProduct()
    })
    
    return {
      product,
      loading,
      isFavorite,
      itemInCart,
      toggleFavorite,
      addToCartHandler,
      orderViaWhatsApp
    }
  }
}
</script>

<style scoped>
.product-details-page {
  max-width: 1200px;
  margin: 0 auto;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.not-found h2 {
  font-size: 32px;
  margin-bottom: 20px;
  color: var(--text-primary);
}

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: var(--shadow);
}

.product-gallery {
  position: relative;
}

.product-main-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: var(--shadow);
}

.discount-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #cc0c39;
  color: white;
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: bold;
}

.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.product-title {
  font-size: 32px;
  font-weight: bold;
  color: var(--text-primary);
  line-height: 1.3;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.stars {
  font-size: 20px;
}

.rating-text {
  color: var(--primary-color);
  font-weight: 600;
}

.reviews-count {
  color: var(--text-secondary);
}

.product-price-section {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 20px 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

.original-price {
  color: var(--text-secondary);
  text-decoration: line-through;
  font-size: 20px;
}

.current-price {
  color: #cc0c39;
  font-size: 36px;
  font-weight: bold;
}

.savings {
  color: var(--success-color);
  font-weight: 600;
  font-size: 14px;
}

.product-category {
  display: flex;
  gap: 10px;
  font-size: 16px;
}

.product-category .label {
  color: var(--text-secondary);
  font-weight: 600;
}

.product-category .value {
  color: var(--primary-color);
  font-weight: 600;
  text-transform: uppercase;
}

.product-description {
  margin: 20px 0;
}

.product-description h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.product-description p {
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 15px;
}

.product-actions-section {
  display: flex;
  gap: 12px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.product-actions-section .btn {
  flex: 1;
  justify-content: center;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 150px;
}

.btn-warning {
  background: var(--primary-color);
  border: none;
  color: #000;
}

.btn-warning:hover:not(:disabled) {
  background: #cc7a00;
}

.btn-warning:disabled {
  background: #6c757d;
  color: white;
  cursor: not-allowed;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .product-details {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 20px;
  }
  
  .product-title {
    font-size: 24px;
  }
  
  .current-price {
    font-size: 28px;
  }
  
  .product-actions-section {
    flex-direction: column;
  }
  
  .discount-badge {
    top: 10px;
    left: 10px;
    padding: 8px 16px;
    font-size: 14px;
  }
}
</style>
