<script setup>
import tecnologieCard from "../components/tecnologieCard.vue";

import { defineProps } from "vue";

let props = defineProps({
  language: Boolean,
});
</script>

<template>
  <section class="flex flex-col gap-8 items-start">
    <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
      {{ props.language ? "Technologies" : "Tecnologias" }}
    </h2>
    <div class="flex flex-wrap gap-[1.5rem] justify-start">
      <tecnologieCard
        type="logo"
        icon="figma"
        name="Figma"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="html5"
        name="HTML5"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="css3"
        name="CSS3"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="javascript"
        name="JavaScript"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="bootstrap"
        name="Bootstrap"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="vuejs"
        name="VueJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="landscape"
        icon="nuxtjs"
        name="NuxtJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="react"
        name="React"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="landscape"
        icon="nextjs"
        name="NextJS"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="tailwind-css"
        name="TailwindCss"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <tecnologieCard
        type="logo"
        icon="sass"
        name="Sass"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
    </div>
  </section>
</template>
