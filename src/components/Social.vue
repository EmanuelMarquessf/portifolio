<script setup>
import { defineProps } from "vue";

defineProps({
  icon: String,
  text: String,
  href: String,
  target: Boolean,
});
</script>

<template>
  <a
    class="flex items-center gap-4 opacity-70 hover:opacity-100 transition-all duration-500 ease-in-out hover:scale-105"
    :href="href"
    :target="target ? '_blank' : ''"
    :title="text"
  >
    <VIcon
      class="w-9 h-9 "
      :name="icon"
    />
    <span class="text-cardTitle">{{ text }}</span>
  </a>
</template>
