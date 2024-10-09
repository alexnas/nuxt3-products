<script lang="ts" setup>
import ProductDetails from '~/components/ProductDetails.vue';

definePageMeta({
  layout: 'products',
});

const { id } = await useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

// fetch the product with id
const { data: product, error } = await useFetch<IProduct | null>(uri, {
  key: 'id',
});

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
    fatal: true,
  });
}
</script>

<template>
  <div v-if="product">
    <ProductDetails :product="product" />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
