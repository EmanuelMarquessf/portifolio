<script setup>
import { defineProps } from "vue";
import Button from "./Button.vue";

const props = defineProps({
  project: Object,
  language:Boolean
});
</script>

<template>
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
        <Button
        :href="props.project.url"
        :text="props.language ? 'View Live' : 'Acessar'"
        :type="true"
        target="_blank"
      />
      <Button
      :href="props.project.repositoryUrl"
      text="GitHub Repo"
      :type="false"
      target="_blank"
    />

    </div>
  </div>
</template>
