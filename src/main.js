import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'boxicons'
import '../node_modules/flowbite-vue/dist/index.css'

const app = createApp(App);

app.config.globalProperties.language = 'pt-br'

app.mount("#app")
