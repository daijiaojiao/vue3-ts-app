import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'
// import 'ant-design-vue/dist/reset.css'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
