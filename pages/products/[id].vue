<script lang="ts" setup>
definePageMeta({
  layout: 'products',
});

const { id } = useRoute().params;
</script>

<template>
  <div>
    <h2>Specific page for product {{ id }}</h2>
    <p>
      Fusce fermentum odio nec arcu. Pellentesque egestas, neque sit amet
      convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non
      est.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipiscing elit ultrices platea
      tincidunt suspendisse, eros penatibus nunc ante vulputate diam orci
      fermentum taciti arcu. Eros mauris mus conubia nascetur faucibu
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate libero
      laudantium quidem dolor repudiandae quaerat rem doloribus illum temporibus
      ipsam, omnis aspernatur commodi assumenda nesciunt culpa praesentium quasi
      architecto vitae.
    </p>
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
