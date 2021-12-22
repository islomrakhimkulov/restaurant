import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import "@/plugins/firebase"
import 'core-js'


createApp(App)
    .use(router)
    .mount('#app')
