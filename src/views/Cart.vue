<template>
  <div class="cart-page">
    <div class="container py-5">
      <!-- Page Header -->
      <div class="row mb-4">
        <div class="col-12">
          <h1 class="display-5 fw-bold text-center mb-2">
            <i class="fas fa-shopping-cart text-warning ms-2"></i>
            عربة التسوق
          </h1>
          <p class="text-center text-muted">
            {{ cartCount }} منتج في عربتك
          </p>
        </div>
      </div>

      <!-- Empty Cart -->
      <div v-if="cartItems.length === 0" class="text-center py-5">
        <div class="empty-cart">
          <i class="fas fa-shopping-cart fa-5x text-muted mb-4"></i>
          <h3 class="mb-3">عربة التسوق فارغة</h3>
          <p class="text-muted mb-4">لم تقم بإضافة أي منتجات بعد</p>
          <router-link to="/" class="btn btn-warning btn-lg">
            <i class="fas fa-arrow-left ms-2"></i>
            تصفح المنتجات
          </router-link>
        </div>
      </div>

      <!-- Cart Items -->
      <div v-else class="row">
        <!-- Products List -->
        <div class="col-lg-8 mb-4">
          <div class="card shadow-sm border-0">
            <div class="card-header bg-dark text-white">
              <h5 class="mb-0">
                <i class="fas fa-list ms-2"></i>
                المنتجات المضافة
              </h5>
            </div>
            <div class="card-body p-0">
              <div 
                v-for="item in cartItems" 
                :key="item.id" 
                class="cart-item border-bottom"
              >
                <div class="row align-items-center g-3 p-3">
                  <!-- Product Image -->
                  <div class="col-md-2 col-3">
                    <img 
                      :src="item.image" 
                      :alt="item.name" 
                      class="img-fluid rounded"
                    />
                  </div>

                  <!-- Product Info -->
                  <div class="col-md-4 col-9">
                    <h6 class="mb-1 fw-bold">{{ item.name }}</h6>
                    <p class="text-muted small mb-0">
                      <i class="fas fa-tag ms-1"></i>
                      {{ item.category }}
                    </p>
                  </div>

                  <!-- Quantity Controls -->
                  <div class="col-md-3 col-6">
                    <div class="input-group input-group-sm">
                      <button 
                        class="btn btn-outline-secondary"
                        @click="decreaseQuantity(item.id)"
                      >
                        <i class="fas fa-minus"></i>
                      </button>
                      <input 
                        type="number" 
                        class="form-control text-center" 
                        :value="item.quantity"
                        @input="updateQty(item.id, $event.target.value)"
                        min="1"
                      />
                      <button 
                        class="btn btn-outline-secondary"
                        @click="increaseQuantity(item.id)"
                      >
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Price & Remove -->
                  <div class="col-md-2 col-4 text-start">
                    <div class="fw-bold text-success mb-2">
                      {{ (item.price * item.quantity).toFixed(2) }} ج.م
                    </div>
                    <button 
                      class="btn btn-danger btn-sm"
                      @click="removeItem(item.id)"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Clear Cart Button -->
          <div class="mt-3">
            <button 
              class="btn btn-outline-danger"
              @click="confirmClearCart"
            >
              <i class="fas fa-trash-alt ms-2"></i>
              تفريغ العربة
            </button>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="col-lg-4">
          <div class="card shadow-sm border-0 sticky-top" style="top: 100px;">
            <div class="card-header bg-warning text-dark">
              <h5 class="mb-0 fw-bold">
                <i class="fas fa-receipt ms-2"></i>
                ملخص الطلب
              </h5>
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>عدد المنتجات:</span>
                <strong>{{ cartCount }}</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>المجموع الفرعي:</span>
                <strong>{{ cartTotal.toFixed(2) }} ج.م</strong>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>الشحن:</span>
                <strong class="text-success">مجاني</strong>
              </div>
              <hr>
              <div class="d-flex justify-content-between mb-3">
                <span class="fs-5 fw-bold">الإجمالي:</span>
                <span class="fs-4 fw-bold text-success">
                  {{ cartTotal.toFixed(2) }} ج.م
                </span>
              </div>

              <!-- Checkout Button -->
              <router-link 
                to="/checkout" 
                class="btn btn-success btn-lg w-100 mb-2"
              >
                <i class="fas fa-check-circle ms-2"></i>
                إتمام الطلب
              </router-link>

              <!-- Continue Shopping -->
              <router-link 
                to="/" 
                class="btn btn-outline-secondary w-100"
              >
                <i class="fas fa-arrow-left ms-2"></i>
                متابعة التسوق
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { 
  getCartItems, 
  getCartCount, 
  getCartTotal,
  removeFromCart,
  updateQuantity,
  clearCart
} from '../store/cartStore'

export default {
  name: 'CartPage',
  setup() {
    const cartItems = getCartItems
    const cartCount = getCartCount
    const cartTotal = getCartTotal

    const removeItem = (productId) => {
      if (confirm('هل تريد حذف هذا المنتج من العربة؟')) {
        removeFromCart(productId)
      }
    }

    const increaseQuantity = (productId) => {
      const item = cartItems.value.find(i => i.id === productId)
      if (item) {
        updateQuantity(productId, item.quantity + 1)
      }
    }

    const decreaseQuantity = (productId) => {
      const item = cartItems.value.find(i => i.id === productId)
      if (item && item.quantity > 1) {
        updateQuantity(productId, item.quantity - 1)
      }
    }

    const updateQty = (productId, value) => {
      const qty = parseInt(value)
      if (qty > 0) {
        updateQuantity(productId, qty)
      }
    }

    const confirmClearCart = () => {
      if (confirm('هل تريد تفريغ العربة بالكامل؟')) {
        clearCart()
      }
    }

    return {
      cartItems,
      cartCount,
      cartTotal,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
      updateQty,
      confirmClearCart
    }
  }
}
</script>

<style scoped>
.cart-page {
  min-height: 80vh;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.empty-cart {
  background: white;
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cart-item {
  transition: all 0.3s ease;
  background: white;
}

.cart-item:hover {
  background: #f8f9fa;
}

.cart-item:last-child {
  border-bottom: none !important;
}

.input-group input[type="number"] {
  max-width: 60px;
}

.input-group input[type="number"]::-webkit-inner-spin-button,
.input-group input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.card {
  border-radius: 15px;
  overflow: hidden;
}

.card-header {
  border: none;
  padding: 1rem 1.5rem;
}

@media (max-width: 768px) {
  .cart-item .col-md-2 {
    text-align: center;
  }
  
  .sticky-top {
    position: relative !important;
    top: 0 !important;
  }
}
</style>
