<script lang="ts" setup></script>

<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Products</NuxtLink>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>
