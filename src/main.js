import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/flowbite-vue/dist/index.css'

import AppIcon from './components/AppIcon.vue';

const app = createApp(App);

app.component('AppIcon', AppIcon)

app.mount("#app")
