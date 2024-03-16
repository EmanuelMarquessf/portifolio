<script setup>
import FormationCard from "../components/formationCard.vue";
import ExperienceCard from "../components/experienceCard.vue";
</script>

<template>
  <div class="flex flex-row gap-8 flex-wrap justify-between">
    <div class="flex flex-col flex-wrap gap-8">
      <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
        Formação:
      </h2>
      <div class="flex flex-row gap-4 flex-wrap md:flex-nowrap lg:flex-wrap">
        <FormationCard
          titleCourse="técnico"
          course="Informática Integrado"
          institutionTitle="instituição"
          institution="Instituto Federal"
          image="../../public/ifspLogo.png"
          description=""
        />
        <FormationCard
          titleCourse="técnologo"
          course="Análise de Sistemas"
          institutionTitle="instituição"
          institution="Instituto Federal"
          image="../../public/ifspLogo.png"
          description=""
        />
      </div>
    </div>
    <div id="experiencias" class="flex flex-col gap-8">
      <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
        Experiências:
      </h2>
      <div class="flex flex-row gap-4 flex-wrap md:flex-nowrap lg:flex-wrap">
        <ExperienceCard
          titleCourse="estagio - 1 ano"
          course="ánalista de suporte"
          institutionTitle="empresa"
          institution="isasoft softwares"
          image="../../public/isasoftLogo.png"
          description="Prestei suporte aos clientes, forneci orientação e treinamento, colaborei com a equipe de desenvolvimento com base no feedback dos clientes, realizei testes detalhados do sistema e gerenciei bancos de dados para identificar bugs. Contribuí para a melhoria da qualidade dos produtos e da experiência do cliente."
          tecnologie="html5, css3, javascript, postgresql"
        />
        <ExperienceCard
          titleCourse="Freelance - atual"
          course="Dev. Front-end Jr."
          institutionTitle="empresa"
          institution="Bitcode Soluções"
          image="../../public/bitcodeLogo.png"
          description="Desenvolvimento de páginas web. Responsável pela criação de interfaces atraentes e intuitivas para o usuário, utilizando das tecnologias HTML, CSS, JavaScript, VueJs e TailwindCss. Além disso, participação ativa na concepção e design das interfaces através do Figma, garantindo uma experiência visualmente agradável e funcional para os usuários."
          tecnologie="html5, css3, javascript, vuejs, tailwind-css, figma"
        />
      </div>
    </div>
  </div>
</template>
