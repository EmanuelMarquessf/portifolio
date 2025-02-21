<script setup>
import ProjectCard from "../components/projectCard.vue";
import { ref, defineProps, watchEffect } from "vue";

let props = defineProps({
  language: Boolean,
});

let projectsArray = ref([]);

watchEffect(() => {
  projectsArray.value = [
    {
      name: "Bitcode Soluções",
      description: props.language
        ? "The website of the software development company Bitcode Solutions."
        : "Site da empresa de desenvolvimento de software Bitcode Soluções",
      tecs: [
        { name: "co-figma", title: "Figma" },
        { name: "io-logo-vue", title: "VueJS" },
        { name: "si-tailwindcss", title: "TailwindCss" },
      ],
      cover: "/bitcodeSite.png",
      url: "https://bitcodesolucoes.com.br/",
      repositoryUrl: "",
      status: props.language ? "Finished" : "Finalizado",
    },
    {
      name: props.language ? "GamesView" : "GamesView",
      description: props.language
        ? "Website for querying data and news about video games"
        : "Site para consulta de dados e noticias sobre jogos de video-game usando a API Rawg",
      tecs: [
        { name: "co-figma", title: "Figma" },
        { name: "co-react", title: "React" },
        { name: "si-tailwindcss", title: "TailwindCss" },
      ],
      cover: "/gamesView.png",
      url: "https://gamesview.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/Games-View",
      status: props.language ? "Finished" : "Finalizado",
    },
    {
      name: props.language ? "League Viewer" : "League Viewer",
      description: props.language
        ? "League of Legends character/skin viewer"
        : "Visualizador de personagens/skins do jogo League of Legends",
      tecs: [
        { name: "co-figma", title: "Figma" },
        { name: "si-nuxtdotjs", title: "Nuxt" },
        { name: "si-tailwindcss", title: "TailwindCss" },
      ],
      cover: "/LeagueViewer.png",
      url: "https://lolchampionsviewer.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/lolSkinViewer",
      status: props.language ? "Finished" : "Finalizado",
    },

    {
      name: props.language ? "The Noote" : "The Noote",
      description: props.language
        ? "Website for storing notes with text and image uploads, offering a simple and organized experience."
        : "Website para anotações com texto e upload de imagens, oferecendo uma experiência simples e organizada.",
      tecs: [
        { name: "co-figma", title: "Figma" },
        { name: "io-logo-vue", title: "VueJS" },
        { name: "si-typescript", title: "TypeScript" },
        { name: "si-tailwindcss", title: "TailwindCss" },
      ],
      cover: "/noote.png",
      url: "https://thenoote.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/Noote",
      status: props.language ? "Finished" : "Finalizado",
    },

    {
      name: props.language ? "Cambio Converter" : "Cambio Converter",
      description: props.language
        ? "Global Currency Conversion using FreeCurrency API"
        : "Conversão de cambio globalmente utilizando da API FreeCurrency",
      tecs: [
        { name: "io-logo-vue", title: "VueJS" },
        { name: "co-sass", title: "SASS" },
      ],
      cover: "/cambioConverter.png",
      url: "https://cambioconverter.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/CambioConverter",
      status: props.language ? "Finished" : "Finalizado",
    },
    {
      name: props.language ? "WeatherNow" : "WeatherNow",
      description: props.language
        ? "Temperature and weather check for any place in the world"
        : "Consulta de temperatura e clima de qualquer lugar do mundo",
      tecs: [
        { name: "si-nuxtdotjs", title: "Nuxt" },
        { name: "co-sass", title: "SASS" },
      ],
      cover: "/weatherNow.png",
      url: "https://weeathernow.netlify.app",
      repositoryUrl: "https://github.com/EmanuelMarquessf/weatherNow",
      status: props.language ? "Finished" : "Finalizado",
    },
    {
      name: props.language ? "PetFriend" : "PetFriend",
      description: props.language
        ? "A user-friendly website for adopting cats and dogs, utilizing an API to dynamically generate pet profiles."
        : "Um site intuitivo para adoção de gatos e cachorros, utilizando uma API para gerar perfis de pets de forma dinâmica.",
      tecs: [
        { name: "co-next-js", title: "NextJS" },
        { name: "si-tailwindcss", title: "TailwindCss" },
        { name: "co-figma", title: "Figma" },
      ],
      cover: "/PetFriend.png",
      url: "https://petfriendd.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/petFriendReact",
      status: props.language ? "In Progress" : "Em desenvolvimento",
    },
    {
      name: props.language ? "Pokedex" : "Pokedex",
      description: props.language
        ? "Pokedex consuming from the PokeApi API"
        : "Pokedex consumindo da API PokeApi",
      tecs: [{ name: "io-logo-vue", title: "VueJS" }],
      cover: "/pokedex.png",
      url: "https://emanuelmarquessfpokedex.netlify.app/",
      repositoryUrl:
        "https://github.com/EmanuelMarquessf/Pokedex-Project-Vue.git",
      status: props.language ? "In Progress" : "Em desenvolvimento",
    },
  ];
});
</script>

<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-primaryColor font-poppins font-semibold text-3xl">
      {{ props.language ? "Featured Projects" : "Projetos em Destaque" }}
    </h2>
    <div class="grid grid-cols-12 gap-6">
      <ProjectCard class="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3" v-for="project in projectsArray" :project="project" 
      :language="language"/>
    </div>
  </section>
</template>
