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
    <div class="flex flex-wrap gap-6 justify-center md:justify-start">
      <techCard
        icon="figma"
        name="Figma"
      />
      <techCard
        icon="html"
        name="HTML5"
      />
      <techCard
        icon="css"
        name="CSS3"
      />
      <techCard
        icon="javascript"
        name="JavaScript"
      />
      <techCard
        icon="typescript"
        name="TypeScript"
      />
      <techCard
        icon="bootstrap"
        name="Bootstrap"
      />
      <techCard
        icon="vue"
        name="VueJs"
      />
      <techCard
        icon="nuxt"
        name="NuxtJs"
      />
      <techCard
        icon="react"
        name="React"
      />
      <techCard
        icon="next"
        name="NextJS"
      />
      <techCard
        icon="tailwind"
        name="TailwindCss"
      />
      <techCard
        icon="sass"
        name="Sass"
      />
    </div>
  </section>
</template>
