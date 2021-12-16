import { createApp } from 'vue'
import "bulma";
import "@fortawesome/fontawesome-free/css/all.css";

import { Autocomplete } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga-full.css'

import '@/assets/styles/styles.css'

import App from './App.vue'
import router from './router'
//import VueMeta from 'vue-meta'

const app = createApp(App)
//app.use(VueMeta)
app.use(router)
app.use(Autocomplete);
app.mount('#app')
