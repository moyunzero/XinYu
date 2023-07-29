import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import KMR  from './components/KMR/index'
import './common.scss'


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(KMR)
app.use(store)
app.mount('#app')
