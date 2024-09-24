<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="greetings">
    <h1 class="green">Julien Minville</h1>
    <h2>{{t('message.home.title')}}</h2>
    <h3>
      {{t('message.home.heroText')}}
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.4rem;
 
}
h2 {
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.2rem;
}
.greetings h1{
  text-align: center;
  margin-right: 2rem;
}

.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
