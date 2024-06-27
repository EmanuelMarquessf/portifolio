<script setup>
import { defineProps } from "vue";

const props = defineProps({
  type: String,
  icon: String,
  name: String,
  text: String,
});
</script>

<template>
  <div
    class="flex flex-col gap-1 bg-cardColor rounded  shadow justify-center items-center h-[8rem] w-[8rem] opacity-80 hover:opacity-100 hover:scale-110 hover:shadow-lg transition-transform transition-opacity duration-500 ease-in-out will-change-transform hover:border-primaryColor hover:border-b-[2px]"
  >
    <img
      :src="'/icons/' + props.icon + '.svg'"
      :type="props.type"
      class="w-[3rem] h-[3rem]"
    />
    <h3
      class="text-zinc-50 font-poppins text-[1rem] font-semibold transform-none"
    >
      {{ props.name }}
    </h3>
  </div>
</template>
