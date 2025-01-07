import '@mdi/font/css/materialdesignicons.css'
import './assets/index.css'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide';
import { router } from "./router.js"
import { registerGlobalComponents } from './registerGlobalComponents.js'

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
  root
    .use(router)
    .use(VueSplide)
    .mount('#app')
}
init()