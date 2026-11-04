<script setup>
import { defineProps } from "vue";

const props = defineProps({
  icon: String,
  name: String,
});

</script>

<template>
  <div
    class="flex h-24 w-24 flex-col items-center justify-center gap-3 rounded-2xl border border-cardBorder/30 bg-gradient-to-br from-cardColor to-cardDark p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primaryColor/60 hover:shadow-lg hover:shadow-primaryColor/5 motion-reduce:transform-none motion-reduce:transition-none md:h-32 md:w-32 select-none"
  >
    <AppIcon
      :name="props.icon"
      variant="logo"
      class="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
    />
    <h3
      class="max-w-full break-words text-center font-poppins text-xs font-semibold text-cardTitle md:text-base"
    >
      {{ props.name }}
    </h3>
  </div>
</template>
