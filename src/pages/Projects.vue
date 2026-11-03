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
    <div class="grid grid-cols-12 gap-6">
      <ProjectCard class="col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3" v-for="project in projectsArray" :key="project.name" :project="project"
      :language="language"/>
    </div>
  </section>
</template>
