import { createApp } from 'vue'
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";

import '@/assets/styles/styles.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
