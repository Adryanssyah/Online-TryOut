import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

import axios from 'axios'
import sessionCheck from '@/composables/Auth/sessionCheck'
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

const app = createApp(App)
app.use(createPinia())
const { check } = sessionCheck()

async function startApp() {
  await check()
  app.use(router)
  app.mount('#app')
}

startApp()
