<template>
    <div class="cart">Cart Quantity: {{count}}</div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>

</style>