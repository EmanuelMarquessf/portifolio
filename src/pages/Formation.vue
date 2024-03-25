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
      image: "https://i.ibb.co/w4pBwgm/ifspLogo.png",
      description: props.language
        ? "I studied in the High School integrated with a Technical course in Informatics, where I took my first steps in programming. As a final project, I developed an e-commerce platform for selling games, integrated with PagSeguro. "
        : "No Ensino Médio integrado ao Técnico em Informática, foi onde dei meus primeiros passos na programação. Como projeto final, desenvolvi uma plataforma de e-commerce para venda de jogos, integrada ao PagSeguro.",
      technologies: "html5, css3, javascript",
      period: "(2016 - 2019)"
    },
    {
      courseType: props.language ? "technology" : "técnologo",
      courseName: props.language ? "systems analysis" : "Análise de Sistemas",
      institutionTitle: props.language ? "institution" : "instituição",
      institution: "Instituto Federal",
      image: "/ifspLogo.png",
      description: props.language
        ? "I consolidated my studies in computer science by developing a management system for a bookstore as my final project, featuring sales functions, inventory control, and report generation."
        : "Consolidei meus estudos na computação, como projeto final, desenvolvi um sistema de gerenciamento para uma livraria com funções de venda, controle de estoque e emissão de relatórios.",
      technologies: "c-plus-plus, html5, css3, javascript",
      period: "(2019 - 2023)"
    },
  ];

  experienceArray.value = [
    {
      expTitle: props.language ? "internship - 1 year" : "estagio - 1 ano",
      expName: props.language ? "support analyst" : "ánalista de suporte",
      instTitle: props.language ? "company" : "empresa",
      institution: "Isasoft Softwares",
      image: "/isasoftLogo.png",
      description: props.language
        ? ""
        : "Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente.",
      technologies: "html5, css3, javascript, postgresql",
      period: "(2021 - 2022)",
    },
    {
      expTitle: props.language ? "Freelance - current" : "Freelance - atual",
      expName: "Dev. Front-end Jr.",
      instTitle: props.language ? "company" : "empresa",
      institution: "Bitcode Soluções",
      image: "/bitcodeLogo.png",
      description: props.language
        ? ""
        : "Desenvolvimento de páginas web. Responsável pela criação de interfaces atraentes e intuitivas para o usuário, utilizando das tecnologias HTML, CSS, JavaScript, VueJs e TailwindCss. Além disso, participação ativa na concepção e design das interfaces através do Figma, garantindo uma experiência visualmente agradável e funcional para os usuários.",
      technologies: "html5, css3, javascript, vuejs, tailwind-css, figma",
      period: "(2023 - atual)",
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
        {{ props.language ? "Experience" : "Experiências" }}
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
