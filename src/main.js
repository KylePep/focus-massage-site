import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
// @ts-ignore
import App from './App.vue'
import { router } from "./router.js"
import { registerGlobalComponents } from './registerGlobalComponents.js'

const root = createApp(App)
async function init() {
  await registerGlobalComponents(root)
  root
    .use(router)
    .mount('#app')
}
init()