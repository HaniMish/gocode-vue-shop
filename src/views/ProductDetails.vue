<template>
  <div v-if="!product">
    <router-link to="/">Go back to Home Page</router-link>
  </div>
  <div v-else>
    <h3 class="product-category">{{ product.category }}</h3>
    <div class="product">
      <div class="product-info">
        <h1 class="product-title">{{ product.title }}</h1>
        <div class="product-description">{{ product.description }}</div>
        <div class="product-price">price: {{ product.price }}</div>
      </div>
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: []
    };
  },
  async mounted() {
    try {
      this.product = (
        await axios.get(
          `https://fakestoreapi.com/products/${this.$route.params.id}`
        )
      ).data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
.product {
  display: flex;
}
img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 700px;
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
}
.product-info * {
  padding-bottom: 16px;
}
</style>
