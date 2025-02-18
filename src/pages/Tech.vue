<script setup>
import techCard from "../components/techCard.vue";

import { defineProps } from "vue";

let props = defineProps({
  language: Boolean,
});
</script>

<template>
  <section class="flex flex-col gap-8 items-start">
    <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
      {{ props.language ? "Tech Stack" : "Tech Stack" }}
    </h2>
    <div class="flex flex-wrap gap-[1.5rem] justify-center md:justify-start">
      <techCard
        type="logo"
        icon="figma"
        name="Figma"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="html5"
        name="HTML5"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="css3"
        name="CSS3"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="javascript"
        name="JavaScript"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="typescript"
        name="TypeScript"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="bootstrap"
        name="Bootstrap"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="vuejs"
        name="VueJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="landscape"
        icon="nuxtjs"
        name="NuxtJs"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="react"
        name="React"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="landscape"
        icon="nextjs"
        name="NextJS"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="tailwind-css"
        name="TailwindCss"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
      <techCard
        type="logo"
        icon="sass"
        name="Sass"
        text="I design beautiful web iterfaces with Figma and Adove XD"
      />
    </div>
  </section>
</template>
