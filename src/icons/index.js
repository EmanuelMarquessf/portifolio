import { addIcons } from 'oh-vue-icons';
import {
  CoWhatsapp,
  CoLinkedinIn,
  MdEmailOutlined,
  BiGithub,
  CoFigma,
  IoLogoVue,
  SiTailwindcss,
  SiNuxtdotjs,
  CoReact,
  CoSass,
  CoNextJs,
  CoHtml5Shield,
  FaCss3Alt,
  CoJavascript,
  CoPostgresql,
  SiCsharp,
  BiCodeSlash,
  SiTypescript,
  HiSolidMenu,
  IoCloseSharp,
  BiBootstrap
} from 'oh-vue-icons/icons';

// Public names used by AppIcon. Library names and logo paths stay here.
export const icons = {
  whatsapp: { icon: CoWhatsapp },
  linkedin: { icon: CoLinkedinIn },
  email: { icon: MdEmailOutlined },
  github: { icon: BiGithub },
  figma: { icon: CoFigma, logo: 'icons/figma.svg' },
  vue: { icon: IoLogoVue, logo: 'icons/vuejs.svg' },
  tailwind: { icon: SiTailwindcss, logo: 'icons/tailwind-css.svg' },
  nuxt: { icon: SiNuxtdotjs, logo: 'icons/nuxtjs.svg' },
  react: { icon: CoReact, logo: 'icons/react.svg' },
  sass: { icon: CoSass, logo: 'icons/sass.svg' },
  next: { icon: CoNextJs, logo: 'icons/nextjs.svg' },
  html: { icon: CoHtml5Shield, logo: 'icons/html5.svg' },
  css: { icon: FaCss3Alt, logo: 'icons/css3.svg' },
  javascript: { icon: CoJavascript, logo: 'icons/javascript.svg' },
  postgresql: { icon: CoPostgresql },
  csharp: { icon: SiCsharp },
  code: { icon: BiCodeSlash },
  typescript: { icon: SiTypescript, logo: 'icons/typescript.svg' },
  menu: { icon: HiSolidMenu },
  close: { icon: IoCloseSharp },
  bootstrap: { icon: BiBootstrap, logo: 'icons/bootstrap.svg' },
};

addIcons(...Object.values(icons).map(({ icon }) => icon));
