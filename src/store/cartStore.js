import { reactive, computed } from 'vue'

// Cart Store - إدارة عربة التسوق
const state = reactive({
  items: JSON.parse(localStorage.getItem('cart') || '[]')
})

// حفظ العربة في LocalStorage
const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(state.items))
}

// إضافة منتج للعربة
export const addToCart = (product) => {
  const existingItem = state.items.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity++
  } else {
    state.items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    })
  }
  
  saveCart()
}

// إزالة منتج من العربة
export const removeFromCart = (productId) => {
  const index = state.items.findIndex(item => item.id === productId)
  if (index > -1) {
    state.items.splice(index, 1)
    saveCart()
  }
}

// تحديث كمية المنتج
export const updateQuantity = (productId, quantity) => {
  const item = state.items.find(item => item.id === productId)
  if (item) {
    if (quantity <= 0) {
      removeFromCart(productId)
    } else {
      item.quantity = quantity
      saveCart()
    }
  }
}

// تفريغ العربة
export const clearCart = () => {
  state.items = []
  saveCart()
}

// الحصول على عناصر العربة
export const getCartItems = computed(() => state.items)

// عدد المنتجات في العربة
export const getCartCount = computed(() => {
  return state.items.reduce((total, item) => total + item.quantity, 0)
})

// إجمالي السعر
export const getCartTotal = computed(() => {
  return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
})

// التحقق من وجود منتج في العربة
export const isInCart = (productId) => {
  return state.items.some(item => item.id === productId)
}

// الحصول على كمية منتج معين
export const getItemQuantity = (productId) => {
  const item = state.items.find(item => item.id === productId)
  return item ? item.quantity : 0
}
