<script lang="ts" setup>
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
    <h2>Specific page for product "{{ product.title }}"</h2>
    <p>{{ product.title }}</p>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>
    <p>{{ product.category }}</p>
    <p>{{ product.description }}</p>
    <img :src="`${product.image}`" alt="" />
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
