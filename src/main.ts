import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './infrastructure/views/router'

createApp(App).use(router).mount('#app')
