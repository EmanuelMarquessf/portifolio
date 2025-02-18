<script setup>
import { defineProps } from "vue";

const props = defineProps({
  project: Object,
});
</script>

<template>
  <!-- <div
    class="w-full md:w-[672px] lg:w-[456px] xl:w-[362px]  flex flex-col justify-between p-4 bg-cardColor rounded xl:grow gap-2 opacity-70 hover:scale-105 hover:opacity-100 transition-all duration-500 ease-in-out shadow-md cursor-pointer"
  > -->
  <div
  class="w-full col-span-12 md:col-span-4 2xl:col-span-3 flex flex-col justify-between p-4 bg-cardColor rounded xl:grow gap-2 opacity-70 hover:scale-105 hover:opacity-100 transition-all duration-500 ease-in-out shadow-md cursor-pointer"
>
    <div
      class="bg-cover w-full h-[176px] flex flex-col justify-end items-end"
      :style="{ 'background-image': 'url(' + props.project.cover + ')' }"
    >
      <div
        v-if="props.project.tecs"
        class="flex flex-row justify-end bg-secondaryColor rounded-full m-1 p-1"
      >
        <VIcon
          v-for="tec in props.project.tecs"
          :name="tec.name"
          :title="tec.title"
          class="w-[1.2rem] h-[1.2rem]"
          color="#7562e0"
        />
      </div>
    </div>
    <div class="flex flex-row justify-between items-center">
      <h3 class="text-cardTitle font-poppins text-[24px] font-semibold">
        {{ props.project.name }}
      </h3>
      <h3
        v-if="props.project.status != ''"
        class="text-cardTitle font-poppins text-[0.9rem] font-semibold"
      >
        {{ props.project.status }}
      </h3>
    </div>
    <p
      class="text-lowPriority text-[16px] font-roboto   md:w-[20rem] xl:w-[20.5rem] md:h-[4.rem] leading-6"
    >
      {{ props.project.description }}
    </p>

    <div class="flex flex-row gap-4 mt-4">
      <a
        v-if="props.project.url"
        :href="props.project.url"
        target="_blank"
        class="bg-primaryColor py-[12px] rounded-lg flex items-center grow justify-center hover:bg-zinc-50 transition-colors duration-500 hover:text-primaryColor text-zinc-50 font-roboto font-medium text-[16px]"
      >
        <span>{{ props.language ? "View Live" : "Acessar" }}</span>
      </a>
      <a
        v-else
        :href="props.url"
        target="_blank"
        class="bg-primaryColor py-[12px] rounded-lg flex items-center grow justify-center pointer-events-none opacity-40"
      >
        <span class="text-zinc-50 font-roboto font-semibold text-[1rem]">{{
          props.language ? "View Live" : "Acessar"
        }}</span>
      </a>

      <a
        v-if="props.project.repositoryUrl"
        :href="props.project.repositoryUrl"
        target="_blank"
        class="bg-transparent hover:bg-secondaryColor py-[12px] rounded-lg border-solid border-2 border-primaryColor text-zinc-50 flex items-center grow justify-center transition-colors duration-500"
      >
        <span class="text-zinc-50 font-poppins font-medium text-[16px]"
          >GitHub Repo</span
        >
      </a>
      <a
        v-else
        :href="props.repositoryUrl"
        target="_blank"
        class="bg-transparent py-[12px] rounded-lg border-solid border-2 border-primaryColor text-zinc-50 flex items-center grow justify-center pointer-events-none opacity-40"
      >
        <span class="text-zinc-50 font-poppins font-semibold text-[1rem]"
          >GitHub Repo</span
        >
      </a>
    </div>
  </div>
</template>
