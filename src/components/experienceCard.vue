<script setup>
import { ref } from "vue";
import { translate } from "../locales/translate";
import { expandableCard as texts } from "../locales/ui";

defineProps({
  experience: { type: Object, required: true },
  language: { type: String, default: "pt" },
});

const expanded = ref(false);
</script>

<template>
  <article class="relative w-full min-w-0 rounded-2xl border border-cardBorder/30 bg-gradient-to-br from-cardColor to-cardDark shadow-sm transition-all duration-300 hover:border-primaryColor/60 hover:shadow-lg hover:shadow-primaryColor/5">
    <span aria-hidden="true" class="absolute -left-1 top-10 h-16 w-1 rounded-full bg-primaryColor"></span>

    <button
      type="button"
      class="group flex w-full flex-col rounded-2xl p-4 text-left font-roboto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryColor focus-visible:ring-offset-2 focus-visible:ring-offset-secondaryColor sm:p-5 xl:p-6"
      :aria-expanded="expanded"
      @click="expanded = !expanded"
    >
      <span class="flex w-full min-w-0 items-start gap-3 sm:items-center sm:gap-4">
        <span class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-darkColor/70 p-3 sm:h-20 sm:w-20 sm:p-4 xl:h-24 xl:w-24 xl:p-5">
          <img :src="experience.image" alt="" class="h-full w-full object-contain" />
        </span>
        <span class="flex min-w-0 flex-1 flex-col gap-1.5">
          <span class="break-words text-xs font-semibold uppercase tracking-wide text-lowPriority sm:text-sm">
            {{ translate(experience.expTitle, language) }}
          </span>
          <span class="break-words font-poppins text-lg font-bold leading-snug text-cardTitle sm:text-2xl xl:text-[28px]">
            {{ translate(experience.expName, language) }}
          </span>
          <span class="flex min-w-0 items-start gap-2 text-sm text-lowPriority sm:text-base xl:text-lg">
            <AppIcon name="company" class="h-5 w-5 shrink-0 sm:h-6 sm:w-6" color="currentColor" />
            <span class="min-w-0 break-words">{{ experience.institution }}</span>
          </span>
        </span>
      </span>

      <span class="mt-4 flex w-full flex-col items-start gap-3 min-[400px]:flex-row min-[400px]:flex-wrap min-[400px]:items-center min-[400px]:justify-between border-t border-cardBorder pt-4">
        <span class="flex items-center gap-2 text-sm text-lowPriority sm:text-base">
          <AppIcon name="calendar" class="h-5 w-5 shrink-0" color="currentColor" />
          {{ translate(experience.period, language) }}
        </span>
        <span class="flex items-center gap-1.5 text-sm font-semibold text-primaryColor transition-colors group-hover:text-primaryColorHover sm:text-base">
          {{ expanded ? texts.hideDetails[language] : texts.showDetails[language] }}
          <AppIcon name="arrow-up-right" class="h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none" :class="expanded ? 'rotate-180' : ''" color="currentColor" />
        </span>
      </span>
    </button>

    <Transition name="details">
      <div v-if="expanded" class="details-panel">
        <div class="min-h-0 overflow-hidden">
          <div class="flex flex-col gap-5 border-t border-primaryColor/20 px-4 pb-4 pt-4 sm:px-5 sm:pb-5 xl:px-6 xl:pb-6">
            <p class="break-words font-roboto text-sm leading-7 text-cardTitle">
              {{ translate(experience.description, language) }}
            </p>
            <ul v-if="experience.technologies?.length" class="flex flex-wrap gap-3">
              <li v-for="technology in experience.technologies" :key="technology.icon" :title="technology.name" class="flex items-center justify-center rounded-full bg-secondaryColor p-2">
                <AppIcon :name="technology.icon" class="h-6 w-6 text-primaryColor" color="currentColor" />
                <span class="sr-only">{{ technology.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  </article>
</template>

<style scoped>
.details-panel {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
}

.details-enter-active,
.details-leave-active {
  transition: grid-template-rows 300ms ease, opacity 300ms ease;
}

.details-enter-from,
.details-leave-to {
  grid-template-rows: 0fr;
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {

  .details-enter-active,
  .details-leave-active {
    transition: none;
  }
}
</style>
