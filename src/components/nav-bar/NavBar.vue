<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
const { t } = useI18n()
const { locale } = useI18n()

const toggleLang = computed(() => {
  return locale.value === 'en-US' ? 'FR' : 'EN'
})

const changeLocale = () => {
  locale.value = locale.value === 'en-US' ? 'fr-CA' : 'en-US'
}
</script>

<template>
  <nav>
    <RouterLink to="/">{{ t('message.nav.home') }}</RouterLink>
    <RouterLink to="/about">{{ t('message.nav.about') }}</RouterLink>
    <RouterLink to="/projects">{{ t('message.nav.projects') }}</RouterLink>
    <RouterLink to="/contact">{{ t('message.nav.contact') }}</RouterLink>
    <a variant="info" class="lang" @click="changeLocale">{{ toggleLang }}</a>
  </nav>
</template>

<style scoped lang="sass">
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
.lang
  padding:0 1rem
  border-radius: 0

.lang:not(:last-child)
  border-right: 0.1rem solid white
  margin-left: 0.6rem

@media (min-width: 1024px)
  nav
    text-align: center
    font-size: 1.5rem
    padding: 1rem 0
    margin-bottom: 1rem
</style>
