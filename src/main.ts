import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'
import { store, key } from './store'
import '../index.css'

const head = createHead()
const app = createApp(App)

app.use(store, key)
app.use(router)
app.use(head)
app.mount('#app')
