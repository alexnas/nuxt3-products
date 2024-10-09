<script lang="ts" setup>
import ProductCard from '~/components/ProductCard.vue';

definePageMeta({
  layout: 'products',
});

// fetch products
const { data: products } = await useFetch<IProduct[] | null>(
  'https://fakestoreapi.com/products'
);

useHead({
  title: 'Nuxt3 Products | Stock',
  meta: [{ name: 'description', content: 'Nuxt3 stock' }],
});
</script>

<template>
  <div>
    <div v-if="products" class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" />
      </div>
    </div>
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
