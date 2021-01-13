<template>
  <div class="cart">Cart Quantity: {{ count }}</div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}
</style>
