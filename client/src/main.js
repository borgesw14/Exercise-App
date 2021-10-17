import { createApp } from 'vue'
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";


import '@/assets/styles/styles.css'

import App from './App.vue'
import router from './router'
//import VueMeta from 'vue-meta'

const app = createApp(App)
//app.use(VueMeta)
app.use(router)
app.mount('#app')
