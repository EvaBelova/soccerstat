<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <div class="main">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.main {
  flex: 1;
}
</style>
