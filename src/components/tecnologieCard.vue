<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    icon: String,
    name: String,
    text: String,
  })

</script>

<template>
  <div class="flex flex-col bg-transparent justify-center items-center text-center border border-primaryColor rounded grow h-[20rem]">
    <box-icon type="logo" :name="props.icon" class="w-[3.5rem] h-[3.5rem]" color="#ffffff"></box-icon>
    <h3 class="text-white font-poppins text-[1.5rem] font-semibold leading-10">{{ props.name }}</h3>
    <p class="text-white font-poppins  text-[1] font-medium leading-8 w-[18rem]">{{ props.text }}</p>
  </div>
</template>