<script lang="ts" setup>
import ProductDetails from '~/components/ProductDetails.vue';

definePageMeta({
  layout: 'products',
});

const { id } = await useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id;

// fetch the product with id
const { data: product, error } = await useFetch<IProduct | null>(uri, {
  pick: ['id', 'title', 'price', 'image', 'category', 'description'],
  lazy: true,
  key: 'id',
});
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
