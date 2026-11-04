<script setup>
import experienceArray from "../data/experiences.json";
import formationArray from "../data/formation.json";
import { formation as texts } from "../locales/ui";
import FormationCard from "../components/formationCard.vue";
import ExperienceCard from "../components/experienceCard.vue";

defineProps({
  language: { type: String, default: "pt" },
});
</script>
<template>
  <div class="flex flex-col  justify-between gap-20 md:gap-24">
    <div class="flex flex-col gap-8 col-span-3 md:col-span-6">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl">
        {{ texts.academicTitle[language] }}
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 items-start">
        <FormationCard
          v-for="formation in formationArray"
          :formation="formation"
          :language="language"
          :key="formation.courseName.pt"
        />
      </div>
    </div>
    <div class="flex flex-col gap-8 col-span-6">
      <h2 class="text-primaryColor font-poppins font-semibold text-3xl ">
        {{
          texts.experienceTitle[language]
        }}
      </h2>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 items-start">
        <ExperienceCard
          v-for="experience in experienceArray"
          :experience="experience"
          :language="language"
          :key="experience.institution"
        />
      </div>
    </div>
  </div>
</template>
