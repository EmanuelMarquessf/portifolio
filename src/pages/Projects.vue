<script setup>
import projectsArray from "../data/projects.json";
import { projects as texts } from "../locales/ui";
import ProjectCard from "../components/projectCard.vue";

defineProps({
  language: { type: String, default: "pt" },
});
</script>

<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-primaryColor font-poppins font-semibold text-3xl">
      {{ texts.title[language] }}
    </h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projectsArray" :key="project.name" :project="project"
      :language="language"/>
    </div>
  </section>
</template>
