<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  formation: Array,
});

let arrayTechnologies = (props.formation.technologies || "").split(", ");
let viewCard = ref(false);
</script>

<template>
  <div
    class="bg-[#31313f] relative p-4 rounded-md w-full md:w-[340px] md:h-[150px] cursor-pointer items-center opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-in-out"
    v-if="!viewCard"
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[10%]"
    ></div>
    <div class="flex flex-row items-center gap-4">
      <img class="w-[5rem] h-[7rem]" :src="props.formation.image" alt="" />
      <div class="flex flex-col justify-between gap-2">
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{ props.formation.courseType }}
          </p>
          <p
            class="text-white text-[1.4rem] md:text-[1.25rem] font-bold capitalize"
          >
            {{ props.formation.courseName }}
          </p>
        </div>
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{ props.formation.institutionTitle }}
          </p>
          <p class="text-white font-poppins text-[1.5rem] font-bold capitalize">
            {{ props.formation.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    @click="viewCard = !viewCard"
    class="bg-[#31313f] relative p-4 rounded-md w-full md:w-[340px] md:h-[300px] cursor-pointer"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[35px]"
    ></div>
    <div class="flex flex-col gap-8 h-full">
      <div class="flex flex-row gap-4 items-center">
        <img class="w-[1.5rem] h-[2rem]" :src="props.formation.image" alt="" />
        <div class="flex flex-col">
          <span
            class="text-[#c1c1c1] font-poppins text-[10px] font-bold uppercase"
          >
            {{ props.formation.institution }}
          </span>
          <span class="text-white font-poppins text-[16px] font-bold uppercase">
            {{ props.formation.courseName }}
          </span>
          <span class="text-white font-poppins text-[12px] font-light uppercase">
            {{ props.formation.period }}
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">

        <span class="text-[#f2f2f2] text-[14px] text-justify">
          {{ props.formation.description }}
        </span>
      </div>
      <div class="flex flex-row justify-between gap-2">
        <div
          class="flex items-center bg-[#121214] rounded-full p-2"
          v-if="arrayTechnologies[0] != ''"
          v-for="technologies in arrayTechnologies"
          :title="technologies.charAt(0).toUpperCase() + technologies.slice(1)"
        >
          <box-icon
            type="logo"
            :name="technologies"
            class="w-[2rem] h-[2rem]"
            color="#7562e0"
          ></box-icon>
        </div>
      </div>
    </div>
  </div>
</template>
