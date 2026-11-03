<script setup>
import { defineProps } from "vue";

defineProps({
  href: String,
  text: String,
  icon: String,
  layout: Boolean,
  active: Boolean,
  target: String,
});
</script>

<template>
  <a
    :target="target"
    :href="href"
    :class="[
      'font-roboto font-medium text-[16px]',
      !href ? 'pointer-events-none opacity-40' : '',
      !layout ? 'grow' : '',
    ]"
  >
    <button
      :class="[
        'hover:scale-105 py-[12px] px-[24px] rounded-lg border-solid border-2 border-primaryColor  flex items-center gap-[12px]  transition-all duration-500 ease-in-out justify-center opacity-100',
        layout === true
          ? 'bg-primaryColor text-darkColor hover:bg-primaryColorHover hover:border-primaryColorHover '
          : 'bg-transparent text-primaryColor hover:bg-secondaryColor hover:border-primaryColorHover',
        target ? 'w-full' : '',
      ]"
    >
      <span>{{ text }}</span>

      <AppIcon v-if="icon" :name="icon" class="w-[20px]" color="currentColor" />
    </button>
  </a>
</template>
