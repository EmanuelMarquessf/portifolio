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
      image: "/ifspLogo.png",
      description: props.language
        ? "I studied in the High School integrated with a Technical course in Informatics, where I took my first steps in programming. As a final project, I developed an e-commerce platform for selling games, integrated with PagSeguro. "
        : "No Ensino Médio integrado ao Técnico em Informática, foi onde dei meus primeiros passos na programação. Como projeto final, desenvolvi uma plataforma de e-commerce para venda de jogos, integrada ao PagSeguro.",
      technologies: "co-html5-shield, fa-css3-alt, co-javascript",
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
      technologies: "si-csharp, co-html5-shield, fa-css3-alt, co-javascript",
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
        ? "I provided customer support, offered guidance and training, collaborated with the development team based on customer feedback, conducted detailed system testing, and managed databases to identify bugs. I contributed to improving product quality and the customer experience."
        : "Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente.",
      technologies: "co-html5-shield, fa-css3-alt, co-javascript, co-postgresql",
      period: "(2021 - 2022)",
    },
    {
      expTitle: props.language ? "Freelance" : "Freelance",
      expName: "Dev. Front-end Jr.",
      instTitle: props.language ? "company" : "empresa",
      institution: "Bitcode Soluções",
      image: "/bitcodeLogo.png",
      description: props.language
        ? "Web page development. Responsible for creating attractive and intuitive user interfaces using HTML, CSS, JavaScript, VueJs, and TailwindCss technologies. Additionally, actively participated in the conception and design of interfaces through Figma, ensuring a visually pleasing and functional experience for users."
        : "Desenvolvimento de páginas web. Responsável pela criação de interfaces atraentes e intuitivas para o usuário, utilizando das tecnologias HTML, CSS, JavaScript, VueJs e TailwindCss. Além disso, participação ativa na concepção e design das interfaces através do Figma, garantindo uma experiência visualmente agradável e funcional para os usuários.",
      technologies: "io-logo-vue, si-tailwindcss, co-figma",
      period: "(2023 - 2024)",
    },
  ];
});
</script>
<template>
  <div class="grid grid-cols-6  justify-between gap-12">
    <div class="col-span-6">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl pb-8">
        {{ props.language ? "Formation" : "Formação" }}
      </h2>
      <div class="grid grid-cols-6 col-span-6 md:col-span-8 gap-8 items-start">
        <FormationCard
          v-for="formation in formationArray"
          :formation="formation"
        />
      </div>
    </div>
    <div id="experiencias" class="col-span-6 md:grid-cols-12">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl pb-8">
        {{ props.language ? "Experience" : "Experiências" }}
      </h2>
      <div class="grid grid-cols-6  gap-8 items-start">
        <ExperienceCard
          v-for="experience in experienceArray"
          :experience="experience"
        />
      </div>
    </div>
  </div>
</template>
