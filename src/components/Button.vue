<script setup>
import { GiTargetArrows } from "oh-vue-icons/icons";
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
      'text-zinc-50 font-roboto font-medium text-[16px]',
      !href ? 'pointer-events-none opacity-40' : '',
      !layout ? 'grow' : '',
    ]"
  >
    <button
      :class="[
        'hover:scale-105 py-[12px] px-[24px] rounded-lg border-solid border-2 border-primaryColor  flex items-center gap-[12px]  transition-all duration-500 ease-in-out justify-center opacity-70 hover:text-cardTitle',
        layout === true
          ? 'bg-primaryColor hover:opacity-100 '
          : 'bg-transparent hover:bg-secondaryColor hover:opacity-100',
        target ? 'w-full' : '',
      ]"
    >
      <span>{{ text }}</span>

      <VIcon v-if="icon" :name="icon" class="w-[20px]" color="#eee5ff" />
    </button>
  </a>
</template>
