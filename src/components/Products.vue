<template>
  <Cart :count="counter" />
  <nav class="product-filter">
    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select v-model="selectedCategory">
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>

      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>

  <section class="products">
    <Product
      v-for="product in filteredProducts"
      :key="product.id"
      :product="product"
      @addProduct="setCounter()"
    >
    </Product>
  </section>
</template>

<script>
import Product from "./Product";
import Cart from "./Cart";
import axios from "axios";
import { groupBy } from "@/composables/utils.js";
export default {
  components: { Product, Cart },
  data() {
    return {
      selectedCategory: "--Please choose an option--",
      products: [],
      counter: 0
    };
  },
  async mounted() {
    try {
      this.products = (
        await axios.get("https://fakestoreapi.com/products")
      ).data;
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    categories() {
      return [
        "--Please choose an option--",
        ...Object.keys(groupBy(this.products, "category"))
      ];
    },
    filteredProducts() {
      if (this.selectedCategory === "--Please choose an option--")
        return this.products;
      else {
        return this.products.filter(
          product => product.category === this.selectedCategory
        );
      }
    }
  },
  methods: {
    setCounter() {
      this.counter++;
    }
  }
};
</script>

<style scoped></style>
