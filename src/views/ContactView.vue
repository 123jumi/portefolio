<script setup lang="ts">
import ContactForm from '../components/cta/CTA.vue'
</script>
<template>
  <main>
    <div class="wrapper contact">
      <ContactForm />
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
