<script setup>
import tecnologieCard from "../components/tecnologieCard.vue";

import { defineProps } from "vue";

let props = defineProps({
  language: Boolean,
});
</script>

<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
      {{ props.language ? "Technologies" : "Tecnologias" }}
    </h2>
    <div class="flex flex-wrap gap-[1rem] justify-center">
      <tecnologieCard
        icon="figma"
        name="Figma"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="html5"
        name="HTML5"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="css3"
        name="CSS3"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="javascript"
        name="JavaScript"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="bootstrap"
        name="Bootstrap"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="vuejs"
        name="VueJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="nuxt"
        name="NuxtJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="react"
        name="React"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="tailwind-css"
        name="TailwindCss"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        icon="sass"
        name="Sass"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
    </div>
  </section>
</template>
