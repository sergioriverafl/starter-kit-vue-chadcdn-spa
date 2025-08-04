import './assets/css/tw.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeTheme } from './composables/useAppearance'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

initializeTheme()
