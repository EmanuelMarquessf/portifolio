<script setup>
  import { defineProps } from "vue";

  const props = defineProps({ 
    project : Array,
  })
</script>

<template>
  <div class="flex flex-col justify-between p-4 bg-[#31313f] rounded shadow grow gap-2 opacity-80 hover:scale-105 hover:opacity-100 transition-all duration-500 ease-in-out">
    <img class="rounded-sm  w-full" :src=props.project.cover alt="">
    <h3 class="text-primaryColor font-poppins text-[1.5rem] font-semibold">{{ props.project.name }}</h3>
    <p class="text-white text-[1.125rem] font-poppins font-medium w-full md:w-[20rem] md:h-[4rem]">{{ props.project.description}}</p>
    <div class="flex flex-row gap-4 mt-4">
      <a v-if="props.project.url" :href=props.project.url target="_blank" class="bg-primaryColor py-[12px] rounded-lg flex items-center grow justify-center hover:bg-white transition-colors duration-500 hover:text-primaryColor text-white font-poppins font-semibold text-[1rem]">
        <span>{{ props.language ? "View Live" : "Acessar" }}</span>
      </a>
      <a v-else :href=props.url target="_blank" class="bg-primaryColor py-[12px] rounded-lg flex items-center grow justify-center pointer-events-none opacity-40">
        <span class="text-white font-poppins font-semibold text-[1rem]">{{ props.language ? "View Live" : "Acessar" }}</span>
      </a>

      <a v-if="props.project.repositoryUrl" :href=props.project.repositoryUrl target="_blank" class="bg-transparent hover:bg-secondaryColor py-[12px] rounded-lg border-solid border-2 border-primaryColor text-white flex items-center grow justify-center transition-colors duration-500">
        <span class="text-white font-poppins font-semibold text-[1rem]">GitHub Repo</span>
      </a>
      <a v-else :href=props.repositoryUrl target="_blank" class="bg-transparent py-[12px] rounded-lg border-solid border-2 border-primaryColor text-white flex items-center grow justify-center pointer-events-none opacity-40">
        <span class="text-white font-poppins font-semibold text-[1rem]">GitHub Repo</span>
      </a>
    </div>
  </div>
</template>