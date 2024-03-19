<script setup>
import FormationCard from "../components/formationCard.vue";
import ExperienceCard from "../components/experienceCard.vue";

import { ref, defineProps, watchEffect } from "vue";

let props = defineProps({
  language: Boolean,
});

let formationArray = ref([]);
let experienceArray = ref([]);

watchEffect(() => {
  formationArray.value = [
    {
      courseType: props.language ? "technical" : "técnico",
      courseName: props.language
        ? "integrated technician"
        : "Informática Integrado",
      institutionTitle: props.language ? "institution" : "instituição",
      institution: "Instituto Federal",
      image: "../../public/ifspLogo.png",
      description: props.language
        ? ""
        : "Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente.",
      technologies: "html5",
    },
    {
      courseType: props.language ? "technology" : "técnologo",
      courseName: props.language ? "systems analysis" : "Análise de Sistemas",
      institutionTitle: props.language ? "institution" : "instituição",
      institution: "Instituto Federal",
      image: "../../public/ifspLogo.png",
      description: props.language
        ? ""
        : "Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente.",
      technologies: "",
    },
  ];

  experienceArray.value = [
    {
      expTitle: props.language ? "internship - 1 year" : "estagio - 1 ano",
      expName: props.language ? "support analyst" : "ánalista de suporte",
      instTitle: props.language ? "company" : "empresa",
      institution: "Isasoft Softwares",
      image: "../../public/isasoftLogo.png",
      description: props.language
        ? ""
        : "Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente.",
      technologies: "html5, css3, javascript, postgresql",
    },
    {
      expTitle: props.language ? "Freelance - current" : "Freelance - atual",
      expName: "Dev. Front-end Jr.",
      instTitle: props.language ? "company" : "empresa",
      institution: "Bitcode Soluções",
      image: "../../public/isasoftLogo.png",
      description: props.language
        ? ""
        : "Desenvolvimento de páginas web. Responsável pela criação de interfaces atraentes e intuitivas para o usuário, utilizando das tecnologias HTML, CSS, JavaScript, VueJs e TailwindCss. Além disso, participação ativa na concepção e design das interfaces através do Figma, garantindo uma experiência visualmente agradável e funcional para os usuários.",
      technologies: "html5, css3, javascript, vuejs, tailwind-css, figma",
    },
  ];
});
</script>
<template>
  <div class="flex flex-row gap-8 flex-wrap justify-between">
    <div class="flex flex-col flex-wrap gap-8">
      <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
        {{ props.language ? "Formation" : "Formação" }}
      </h2>
      <div class="flex flex-row gap-6 flex-wrap md:flex-nowrap lg:flex-wrap">
        <FormationCard
          v-for="formation in formationArray"
          :formation="formation"
        />
      </div>
    </div>
    <div id="experiencias" class="flex flex-col gap-8">
      <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
        {{ props.language ? "Experience" : "Expepiências" }}
      </h2>
      <div class="flex flex-row gap-6 flex-wrap md:flex-nowrap lg:flex-wrap">
        <ExperienceCard
          v-for="experience in experienceArray"
          :experience="experience"
        />
      </div>
    </div>
  </div>
</template>
