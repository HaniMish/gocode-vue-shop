<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-info">
      <h5>{{ product.title }}</h5>
      <h6>{{ product.price }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
};
</script>

<style scoped>
</style>