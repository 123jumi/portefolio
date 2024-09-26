<script setup lang="ts">
import { BContainer } from 'bootstrap-vue-next'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <BContainer class="hero">
    <h1 class="color-primary">Julien Minville</h1>
    <h2>{{ t('message.home.title') }}</h2>
    <h3>
      {{ t('message.home.heroText') }}
    </h3>
  </BContainer>
</template>

<style lang="sass" scoped>
h1
  font-weight: 400
  font-size: 2rem
  text-align: left
  justify-content: center
  margin: 1rem 0
  padding: auto

h2
  font-weight: 300
  font-size: 1rem
  margin: 0 0 1rem 0
  text-align: right
  justify-content: center

h3
  font-size: 0.8rem
  text-align: justify

@media (min-width: 1024px)
  .hero
    padding-left: 7%

  h1, h2, h3
    padding: 1rem
    text-align: left
    max-width: 65%

  h1
    font-weight: 500
    font-size: 2.5rem
    padding: 2rem 0

  h2
    margin: 1rem 0 1rem 3rem
    font-weight: 400
    font-size: 2rem

  h3
    margin: 1rem 0 2rem 6rem
    font-size: 1.5rem
</style>
