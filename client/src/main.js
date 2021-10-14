import { createApp } from 'vue'
import "bulma";
import "@fortawesome/fontawesome-free";

import '@/assets/styles/styles.css'

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
