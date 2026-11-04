<script setup>
import { projectCard as texts } from "../locales/ui";
import { computed } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  project: Object,
  language: { type: String, default: "pt" }
});
const statusIcon = computed(() =>
  props.project.status?.en === "In Progress" ? "clock" : "check"
);
</script>

<template>
  <article
    class="flex h-full w-full min-w-0 flex-col gap-4 rounded-2xl border border-cardBorder/30 bg-gradient-to-br from-cardColor to-cardDark p-4 shadow-sm transform-gpu will-change-transform [backface-visibility:hidden] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-primaryColor/60 hover:shadow-lg hover:shadow-primaryColor/5 motion-reduce:transform-none motion-reduce:will-change-auto motion-reduce:transition-none sm:p-5"
  >
    <div class="relative aspect-video w-full shrink-0 overflow-hidden rounded-xl">
      <img
        :src="project.cover"
        :alt="project.name"
        loading="lazy"
        class="absolute inset-0 block h-full w-full object-cover object-top"
      />
      <div
        v-if="project.tecs?.length"
        class="absolute bottom-2 right-2 left-2 flex flex-wrap justify-end gap-1"
      >
        <div class="flex max-w-full flex-wrap justify-end gap-1 rounded-lg bg-secondaryColor p-1.5">
          <AppIcon
            v-for="technology in project.tecs"
            :key="technology.name"
            :name="technology.name"
            :title="technology.title"
            class="h-5 w-5 shrink-0 text-primaryColor"
            color="currentColor"
          />
        </div>
      </div>
    </div>

    <div class="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
      <h3 class="min-w-0 flex-1 basis-40 break-words font-poppins text-xl font-semibold text-cardTitle sm:text-2xl">
        {{ project.name }}
      </h3>
      <span
        v-if="project.status[language]"
        class="flex flex-row  max-w-full items-center gap-2 rounded-xl  px-3 py-0.5 font-roboto text-sm font-semibold leading-6 text-lowPriority"
      >

        <AppIcon :name="statusIcon" class="h-4 w-4 shrink-0 text-primaryColorHover" color="currentColor" />
        {{ project.status[language] }}
      </span>
    </div>

    <p class="min-w-0 break-words font-roboto text-base leading-6 text-lowPriority">
      {{ project.description[language] }}
    </p>

    <div class="mt-auto flex flex-wrap gap-3 pt-2">
      <Button
        class="min-w-0 flex-1 basis-40 [&_button]:px-3 [&_button]:text-cardTitle"
        :href="project.url"
        :text="texts.viewLive[language]"
        icon-left="external-link"
        :layout="true"
        target="_blank"
      />
      <Button
        class="min-w-0 flex-1 basis-40 [&_button]:px-3"
        :href="project.repositoryUrl"
        :text="texts.repository[language]"
        icon-left="github"
        :layout="false"
        target="_blank"
      />
    </div>
  </article>
</template>
