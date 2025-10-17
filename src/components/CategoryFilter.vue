<template>
  <div class="category-filter">
    <button
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
      class="category-btn"
      :class="{ active: selected === category }"
    >
      {{ category }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'CategoryFilter',
  props: {
    categories: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      default: 'All'
    }
  },
  emits: ['select'],
  setup(props, { emit }) {
    const selectCategory = (category) => {
      emit('select', category)
    }
    
    return {
      selectCategory
    }
  }
}
</script>

<style scoped>
.category-filter {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.category-btn {
  padding: 10px 20px;
  background: white;
  border: 2px solid var(--border-color);
  border-radius: 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: pointer;
}

.category-btn:hover {
  border-color: var(--primary-color);
  background: rgba(255, 153, 0, 0.1);
  transform: translateY(-2px);
}

.category-btn.active {
  background: var(--primary-color);
  border-color: var(--primary-color);
  color: var(--text-primary);
  font-weight: 600;
  box-shadow: 0 4px 8px rgba(255, 153, 0, 0.3);
}

@media (max-width: 768px) {
  .category-filter {
    gap: 8px;
  }
  
  .category-btn {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
