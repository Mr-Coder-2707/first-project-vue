<template>
  <div class="product-card">
    <div class="product-image-container">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <button 
        class="favorite-btn" 
        @click.prevent="toggleFavorite"
        :class="{ active: isFavorite }"
      >
        {{ isFavorite ? '❤️' : '🤍' }}
      </button>
      <span v-if="product.discount" class="discount-badge">
        -{{ product.discount }}%
      </span>
    </div>
    
    <div class="product-info">
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-category">{{ product.category }}</p>
      
      <div class="product-rating">
        <span class="stars">{{ '⭐'.repeat(product.rating) }}</span>
        <span class="rating-count">({{ product.reviews }})</span>
      </div>
      
      <div class="product-price">
        <span v-if="product.originalPrice" class="original-price">
          ${{ product.originalPrice }}
        </span>
        <span class="current-price">${{ product.price }}</span>
      </div>
      
      <div class="product-actions">
        <button @click="addToCartHandler" class="btn btn-cart" :disabled="itemInCart">
          <i :class="itemInCart ? 'fas fa-check' : 'fas fa-cart-plus'"></i>
          {{ itemInCart ? 'في العربة' : 'أضف للعربة' }}
        </button>
        <router-link :to="`/product/${product.id}`" class="btn btn-details">
          <i class="fas fa-eye"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { addToCart, isInCart } from '../store/cartStore'

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const favorites = ref(JSON.parse(localStorage.getItem('favorites') || '[]'))
    
    const isFavorite = computed(() => {
      return favorites.value.includes(props.product.id)
    })
    
    const itemInCart = computed(() => {
      return isInCart(props.product.id)
    })
    
    const toggleFavorite = () => {
      if (isFavorite.value) {
        favorites.value = favorites.value.filter(id => id !== props.product.id)
      } else {
        favorites.value.push(props.product.id)
      }
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
    
    const addToCartHandler = () => {
      if (!itemInCart.value) {
        addToCart(props.product)
      }
    }
    
    return {
      isFavorite,
      itemInCart,
      toggleFavorite,
      addToCartHandler
    }
  }
}
</script>

<style scoped>
.product-card {
  background: var(--bg-white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.product-card:hover {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.product-image-container {
  position: relative;
  padding-top: 100%;
  background: var(--bg-light);
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.favorite-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
}

.favorite-btn:hover {
  transform: scale(1.1);
  background: white;
}

.favorite-btn.active {
  animation: pulse 0.3s ease;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #cc0c39;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: bold;
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
  min-height: 44px;
}

.product-category {
  color: var(--text-secondary);
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.stars {
  color: var(--primary-color);
}

.rating-count {
  color: var(--text-secondary);
  font-size: 12px;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
}

.original-price {
  color: var(--text-secondary);
  text-decoration: line-through;
  font-size: 14px;
}

.current-price {
  color: #cc0c39;
  font-size: 22px;
  font-weight: bold;
}

.product-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.product-actions .btn {
  justify-content: center;
  font-size: 13px;
  padding: 10px 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-cart {
  flex: 2;
  background: var(--primary-color);
  color: #000;
  border: 2px solid var(--primary-color);
}

.btn-cart:hover:not(:disabled) {
  background: #cc7a00;
  transform: translateY(-2px);
}

.btn-cart:disabled {
  background: #6c757d;
  border-color: #6c757d;
  color: white;
  cursor: not-allowed;
  opacity: 0.7;
}

.btn-details {
  flex: 0;
  width: 45px;
  background: var(--secondary-color);
  color: white;
  border: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-details:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .product-name {
    font-size: 14px;
  }
  
  .current-price {
    font-size: 20px;
  }
  
  .product-actions .btn {
    font-size: 12px;
    padding: 8px 10px;
  }
}
</style>
