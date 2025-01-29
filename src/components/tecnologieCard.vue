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
    class="flex flex-col gap-2 bg-cardColor rounded  shadow justify-center items-center w-[6rem] h-[6rem] md:w-[8rem] md:h-[8rem] opacity-80 hover:opacity-100 hover:scale-110 transition-transform duration-500 ease-in-out will-change-transform hover:border-primaryColor hover:border-b-[2px] select-none"
  >
    <img
      :src="'/icons/' + props.icon + '.svg'"
      :type="props.type"
      class="w-[3rem] h-[3rem]"
    />
    <h3
      class="text-zinc-50 font-poppins text-[12px] md:text-[16px] font-semibold transform-none"
    >
      {{ props.name }}
    </h3>
  </div>
</template>
