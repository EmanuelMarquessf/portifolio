import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '../node_modules/flowbite-vue/dist/index.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { CoWhatsapp, CoLinkedinIn, MdEmailOutlined, BiGithub, CoFigma, IoLogoVue, SiTailwindcss, SiNuxtdotjs, CoReact, CoSass, CoNextJs, RiUser3Fill, CoHtml5Shield, FaCss3Alt, CoJavascript, CoPostgresql, SiCsharp, BiCodeSlash, BiInstagram, SiTypescript } from 'oh-vue-icons/icons';

addIcons(CoWhatsapp, CoLinkedinIn, MdEmailOutlined, BiGithub, CoFigma, IoLogoVue, SiTailwindcss, SiNuxtdotjs, CoReact, CoSass, CoNextJs, RiUser3Fill, CoHtml5Shield, FaCss3Alt, CoJavascript, CoPostgresql, SiCsharp, BiCodeSlash, BiInstagram, SiTypescript ); 

const app = createApp(App);

app.component('VIcon', OhVueIcon)

app.mount("#app")
