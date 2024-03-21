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
      description: props.language ? "Project still under development" : "Elaboração do Ui/Ux da página, alem de seu desenvolvimento front-ent",
      cover: "https://i.ibb.co/6scR3Wn/project-Img.png",
      url: "https://bitcodesolucoes.com.br/",
      repositoryUrl: "",
    },
    {
      name: props.language ? "Pokedex" : "Pokedex",
      description: props.language ? "Project developed with VueJs with the use of API PokeApi" : "Projeto feito em VueJs com o consumo da API PokeAPI",
      cover: "https://i.ibb.co/6scR3Wn/project-Img.png",
      url: "https://emanuelmarquessf.github.io/Pokedex-Project-Vue/",
      repositoryUrl: "https://github.com/EmanuelMarquessf/Pokedex-Project-Vue.git",
    },
    {
      name: props.language ? "It`s Comming" : "Em breve",
      description: props.language ? "Project still under development" : "Projeto ainda em desenvolvimento",
      cover: "https://i.ibb.co/6scR3Wn/project-Img.png",
      url: "",
      repositoryUrl: "",
    },
    {
      name: props.language ? "It`s Comming" : "Em breve",
      description: props.language ? "Project still under development" : "Projeto ainda em desenvolvimento",
      cover: "https://i.ibb.co/6scR3Wn/project-Img.png",
      url: "",
      repositoryUrl: "",
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
