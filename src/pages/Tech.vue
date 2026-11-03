<script setup>
import technologies from "../data/technologies.json";
import { tech as texts } from "../locales/ui";
import techCard from "../components/techCard.vue";

import { defineProps } from "vue";

let props = defineProps({
  language: { type: String, default: "pt" },
});
</script>

<template>
  <section class="flex flex-col gap-8 items-start">
    <h2 class="text-primaryColor font-poppins font-semibold text-[2rem]">
      {{ texts.title[language] }}
    </h2>
    <div class="flex flex-wrap gap-6 justify-center md:justify-start">
      <techCard
        v-for="technology in technologies"
        :key="technology.icon"
        :icon="technology.icon"
        :name="technology.name"
      />
    </div>
  </section>
</template>
