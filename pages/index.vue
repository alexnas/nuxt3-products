<script lang="ts" setup></script>

<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <h2>Home page</h2>
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
