import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import ProductDetails from './views/ProductDetails.vue'
import Favorites from './views/Favorites.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import OrderSuccess from './views/OrderSuccess.vue'
import './style.css'

// Create router with hash mode for GitHub Pages
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/order-success',
      name: 'OrderSuccess',
      component: OrderSuccess
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

createApp(App).use(router).mount('#app')
