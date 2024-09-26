<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/nav-bar/NavBar.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <Transition name="fade" mode="out-in">
    <RouterView :key="$i18n.locale" />
  </Transition>
</template>

<style scoped lang="sass">
header
  line-height: 1.5
  max-height: 20vh

.fade-enter-active, .fade-leave-active
  transition: opacity 0.6s ease

.fade-enter, .fade-leave-to
  opacity: 0

@media (min-width: 1024px)
  header
    display: flex
    place-items: center
    padding-right: calc(var(--section-gap) / 2)
    margin-bottom: 2rem
</style>
