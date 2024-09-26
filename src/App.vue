<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">{{ t('message.nav.home') }}</RouterLink>
      <RouterLink to="/about">{{ t('message.nav.about') }}</RouterLink>
      <RouterLink to="/projects">{{ t('message.nav.projects') }}</RouterLink>
      <RouterLink to="/contact">{{ t('message.nav.contact') }}</RouterLink>
    </nav>
  </header>
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped lang="sass">
header
  line-height: 1.5
  max-height: 20vh

nav
  width: 100%
  padding: auto
  font-size: 0.6rem
  text-align: center
  margin-top: 2rem

nav a.router-link-exact-active
  color: var(--color-text)

nav a.router-link-exact-active:hover
  background-color: transparent

nav a
  display: inline-block
  padding: 0 1rem
  border-left: 1px solid var(--color-border)

nav a:first-of-type
  border: 0

.fade-enter-active, .fade-leave-active
  transition: opacity 0.8s ease

.fade-enter, .fade-leave-to
  opacity: 0

@media (min-width: 1024px)
  header
    display: flex
    place-items: center
    padding-right: calc(var(--section-gap) / 2)
    margin-bottom: 2rem

  nav
    text-align: center
    font-size: 1.5rem
    padding: 1rem 0
    margin-bottom: 1rem
</style>
