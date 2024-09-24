// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './utils'
import { createBootstrap } from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'
import '@/assets/sass/styles.sass'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(createBootstrap())
app.mount('#app')
