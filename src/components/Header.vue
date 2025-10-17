<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">🛍️</span>
        <span class="logo-text">SmartShop</span>
      </router-link>
      
      <nav class="nav-menu">
        <router-link to="/" class="nav-link" exact-active-class="active">
          <span class="icon">🏠</span>
          <span>Home</span>
        </router-link>
        <router-link to="/favorites" class="nav-link" active-class="active">
          <span class="icon">❤️</span>
          <span>Favorites</span>
          <span v-if="favoritesCount > 0" class="badge">{{ favoritesCount }}</span>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Header',
  setup() {
    const favoritesCount = ref(0)
    
    const updateFavoritesCount = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      favoritesCount.value = favorites.length
    }
    
    onMounted(() => {
      updateFavoritesCount()
      
      // Listen for storage changes
      window.addEventListener('storage', updateFavoritesCount)
      
      // Also update on visibility change
      setInterval(updateFavoritesCount, 1000)
    })
    
    return {
      favoritesCount
    }
  }
}
</script>

<style scoped>
.header {
  background: var(--secondary-color);
  color: white;
  padding: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-color), #ffb84d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  font-size: 15px;
}

.nav-link .icon {
  font-size: 18px;
}

.nav-link:hover {
  background: var(--accent-color);
  transform: translateY(-2px);
}

.nav-link.active {
  background: var(--accent-color);
  box-shadow: 0 2px 8px rgba(255, 153, 0, 0.3);
}

.badge {
  background: #cc0c39;
  color: white;
  border-radius: 12px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 15px;
  }
  
  .logo-text {
    font-size: 20px;
  }
  
  .logo-icon {
    font-size: 28px;
  }
  
  .nav-menu {
    gap: 12px;
  }
  
  .nav-link span:not(.icon):not(.badge) {
    display: none;
  }
  
  .nav-link {
    padding: 8px 12px;
  }
}
</style>
