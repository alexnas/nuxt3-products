<script lang="ts" setup>
const currencyOfChoice = 'RUB';

const { data: currencyRate } = await useFetch(
  `/api/currency/${currencyOfChoice}`
);

const { data } = await useFetch<IAboutSummary>('api/example/?name=Alex', {
  method: 'post',
  body: { age: 33 },
});
</script>

<template>
  <div>
    <h2>About Server Routes</h2>

    <h3>Sent message</h3>
    <p>{{ data?.message }}</p>

    <h3>{{ currencyOfChoice }} Currency Rate</h3>
    <pre>{{ currencyRate }}</pre>

    <h3>Currencies</h3>
    <p>{{ data?.currencies }}</p>
  </div>
</template>

<style scoped>
h2 {
  margin-top: 20px;
  font-size: 36px;
}

h3 {
  margin-top: 20px;
  font-size: 24px;
}

p {
  margin-top: 5px;
}
</style>
