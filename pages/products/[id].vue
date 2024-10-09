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
  <div>
    <Head>
      <Title>Nuxt3 Products | {{ product?.title }}</Title>
      <Meta name="description" :content="product?.description" />
    </Head>

    <div v-if="product">
      <ProductDetails :product="product" />
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
