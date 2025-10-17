<template>
  <div class="search-bar">
    <div class="search-input-container">
      <span class="search-icon">🔍</span>
      <input 
        type="text"
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="ابحث عن المنتجات..."
        class="search-input"
      />
      <button 
        v-if="searchQuery"
        @click="clearSearch"
        class="clear-btn"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SearchBar',
  emits: ['search'],
  setup(props, { emit }) {
    const searchQuery = ref('')
    
    const handleSearch = () => {
      emit('search', searchQuery.value)
    }
    
    const clearSearch = () => {
      searchQuery.value = ''
      emit('search', '')
    }
    
    return {
      searchQuery,
      handleSearch,
      clearSearch
    }
  }
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-container {
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.search-input-container:focus-within {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.1);
}

.search-icon {
  padding: 0 12px;
  font-size: 18px;
  color: var(--text-secondary);
}

.search-input {
  flex: 1;
  padding: 14px 12px;
  border: none;
  outline: none;
  font-size: 15px;
  color: var(--text-primary);
}

.search-input::placeholder {
  color: var(--text-secondary);
}

.clear-btn {
  padding: 0 16px;
  background: transparent;
  color: var(--text-secondary);
  font-size: 18px;
  transition: all 0.3s ease;
}

.clear-btn:hover {
  color: var(--text-primary);
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .search-input {
    padding: 12px 10px;
    font-size: 14px;
  }
}
</style>
