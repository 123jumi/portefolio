<script setup lang="ts">
import HeroSection from '../components/HeroSection.vue'
</script>

<template>
  <main>
    <div class="wrapper">
      <HeroSection />
    </div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>
</template>

<style scoped lang="sass">
@media (min-width: 1024px)
  .about
    min-height: 100vh
    display: flex
    align-items: center
</style>
