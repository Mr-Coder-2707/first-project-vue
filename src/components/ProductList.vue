<template>
  <div class="product-list-container">
    <div class="filters-section">
      <SearchBar @search="handleSearch" />
      <CategoryFilter 
        :categories="categories"
        :selected="selectedCategory"
        @select="handleCategorySelect"
      />
    </div>
    
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>
    
    <div v-else-if="filteredProducts.length === 0" class="no-results">
      <h3>No products found</h3>
      <p>Try adjusting your search or filters</p>
    </div>
    
    <div v-else class="products-grid">
      <ProductCard 
        v-for="product in filteredProducts" 
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import ProductCard from './ProductCard.vue'
import SearchBar from './SearchBar.vue'
import CategoryFilter from './CategoryFilter.vue'
import productsData from '../data/products.json'

export default {
  name: 'ProductList',
  components: {
    ProductCard,
    SearchBar,
    CategoryFilter
  },
  setup() {
    const products = ref([])
    const loading = ref(true)
    const searchQuery = ref('')
    const selectedCategory = ref('All')
    
    const categories = computed(() => {
      const cats = ['All', ...new Set(products.value.map(p => p.category))]
      return cats
    })
    
    const filteredProducts = computed(() => {
      let filtered = products.value
      
      // Filter by category
      if (selectedCategory.value !== 'All') {
        filtered = filtered.filter(p => p.category === selectedCategory.value)
      }
      
      // Filter by search query
      if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        )
      }
      
      return filtered
    })
    
    const handleSearch = (query) => {
      searchQuery.value = query
    }
    
    const handleCategorySelect = (category) => {
      selectedCategory.value = category
    }
    
    onMounted(() => {
      // Simulate loading
      setTimeout(() => {
        products.value = productsData
        loading.value = false
      }, 500)
    })
    
    return {
      products,
      loading,
      filteredProducts,
      categories,
      selectedCategory,
      handleSearch,
      handleCategorySelect
    }
  }
}
</script>

<style scoped>
.product-list-container {
  width: 100%;
}

.filters-section {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-secondary);
}

.no-results h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--text-primary);
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
