<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    type: String,
    icon: String,
    name: String,
    text: String,
  })

</script>

<template>
  <div class="flex flex-col bg-transparent justify-center items-center text-center border border-primaryColor rounded h-[12rem] w-[12rem] grow opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-500 ">
    <box-icon v-if="props.icon" :type="props.type" :name="props.icon" class="w-[3.5rem] h-[3.5rem]" color="#ffffff"></box-icon>
    <img v-else src="/icons/nuxt.svg"  class="w-[3.5rem] h-[3.5rem]">
    <h3 class="text-white font-poppins text-[1.5rem] font-semibold leading-10">{{ props.name }}</h3>
    <!-- <p class="text-white font-poppins  text-[1] font-medium leading-8 w-[18rem]">{{ props.text }}</p> -->
  </div>
</template>