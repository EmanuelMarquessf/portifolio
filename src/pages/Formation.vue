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
      technologies: [
        { name: "HTML", icon: "co-html5-shield" },
        { name: "CSS", icon: "fa-css3-alt" },
        { name: "Javascript", icon: "co-javascript" },
      ],
      period: "(2016 - 2019)",
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
      technologies: [
        { name: "C#", icon: "si-csharp" },
        { name: "HTML", icon: "co-html5-shield" },
        { name: "CSS", icon: "fa-css3-alt" },
        { name: "Javascript", icon: "co-javascript" },
      ],
      period: "(2019 - 2023)",
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
      technologies: [
        { name: "HTML", icon: "co-html5-shield" },
        { name: "CSS", icon: "fa-css3-alt" },
        { name: "JavaScript", icon: "co-javascript" },
        { name: "Postgree SQL", icon: "co-postgresql" },
      ],
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
      technologies: [
        { name: "VueJS", icon: "io-logo-vue" },
        { name: "Tailwind CSS", icon: "si-tailwindcss" },
        { name: "Figma", icon: "co-figma" },
      ],
      period: "(2023 - 2024)",
    },
  ];
});
</script>
<template>
  <div class="grid grid-cols-6  justify-between gap-20 md:gap-24">
    <div class="col-span-6">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl pb-8">
        {{ props.language ? "Academic Background" : "Formação Acadêmica" }}
      </h2>
      <div class="flex flex-col md:flex-row grid-cols-6  gap-8 items-start">
        <FormationCard
          v-for="formation in formationArray"
          :formation="formation"
        />
      </div>
    </div>
    <div id="experiencias" class="col-span-6 md:grid-cols-12">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl pb-8">
        {{ props.language ? "Professional Experience" : "Experiência Profissional" }}
      </h2>
      <div class="flex flex-col md:flex-row grid-cols-6  gap-8 items-start">
        <ExperienceCard
          v-for="experience in experienceArray"
          :experience="experience"
        />
      </div>
    </div>
  </div>
  <!-- <div class="flex flex-col gap-12">
    <h2 class="text-primaryColor font-poppins font-semibold text-3xl pb-8">
      {{
        props.language ? "Professional Experience" : "Experiencia Profissional"
      }}
    </h2>
    <ul>
      <li class="flex gap-4 p-4">
        <VIcon
          class="w-10 h-10 transition duration-200 ease-in-out bg-customPurple rounded-full p-2 mt-4"
          color="#ffffff"
          name="md-businesscenter"
        />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
            <span
              class="text-[#c1c1c1] font-poppins text-[10px] font-bold uppercase"
            >
              Isasoft Softwares
            </span>
            <span
              class="text-zinc-50 font-poppins text-[16px] font-bold uppercase"
            >
              Desenvolvedor Front-end
            </span>
            <span
              class="text-zinc-50 font-poppins text-[12px] font-light uppercase"
            >
              2022-2023
            </span>
          </div>
          <div class="border w-10"></div>
          <p class="text-gray-400 font-serif">
            Desenvolvimento de páginas web. Responsável pela criação de
            interfaces atraentes e intuitivas para o usuário, utilizando das
            tecnologias HTML, CSS, JavaScript, VueJs e TailwindCss. Além disso,
            participação ativa na concepção e design das interfaces através do
            Figma, garantindo uma experiência visualmente agradável e funcional
            para os usuários.
          </p>
          <p>Stacks: HTML,
          </p>
        </div>
      </li>
    </ul>
  </div> -->
</template>
