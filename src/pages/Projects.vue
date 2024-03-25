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
      description: props.language ? "Project still under development" : "Site institucional da empresa Bitcode Soluções",
      tecs: ['figma', 'html5', 'css3', 'javascript', 'vuejs', 'tailwindcss'],
      cover: "../../public/bitcodeSite.png",
      url: "https://bitcodesolucoes.com.br/",
      repositoryUrl: "",
      status: props.language ? "Finished" : "Finalizado",
    },
    {
      name: props.language ? "Pokedex" : "Pokedex",
      description: props.language ? "Pokedex consuming from the PokeApi API." : "Pokedex consumindo da API PokeApi.",
      tecs: ['html5', 'css3', 'javascript', 'vuejs'],
      cover: "../../public/pokedex.png",
      url: "https://emanuelmarquessfpokedex.netlify.app/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/Pokedex-Project-Vue.git",
      status: props.language ? "In Progress" : "Em desenvolvimento",
    },
    {
      name: props.language ? "League Viewer" : "League Viewer",
      description: props.language ? "League of Legends character/skin viewer" : "Visualizador de personagens/skins do jogo League of Legends",
      tecs: ['figma', 'vuejs', 'tailwind-css'],
      cover: "../../public/LeagueViewer.png",
      url: "",
      repositoryUrl: "",
      status: props.language ? "In Progress" : "Em desenvolvimento",
    },
    {
      name: props.language ? "It's Comming" : "Em breve",
      description: props.language ? "Project still under development" : "Site consumindo a API",
      tecs: '',
      cover: "https://i.ibb.co/6scR3Wn/project-Img.png",
      url: "",
      repositoryUrl: "",
      status: props.language ? "In Progress" : "Em desenvolvimento",
    },
  ];
});
</script>

<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
      {{ props.language ? "Featured Projects" : "Projeto em Destaque" }}
    </h2>
    <div class="flex flex-wrap gap-[1rem]">
      <ProjectCard
        v-for="project in projectsArray"
        :project="project"
      />
    </div>
  </section>
</template>
