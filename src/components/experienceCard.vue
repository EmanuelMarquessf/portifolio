<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  experience: Object,
});

let arrayTechnologies = (props.experience.technologies || "").split(", ");

let viewCard = ref(false);
</script>

<template>
  <div
    class="bg-cardColor relative p-4 rounded-md w-full md:w-[340px] md:h-[150px] cursor-pointer items-center opacity-80 hover:opacity-100 hover:scale-105 focus:scale-105 transition-transform duration-500 ease-in-out will-change-transform hover:border-primaryColor hover:border-b-[2px]"
    v-if="!viewCard"
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[15px]"
    ></div>
    <div class="flex flex-row items-center gap-4">
      <img class="w-[6rem] h-[6rem]" :src="props.experience.image" alt="" />
      <div class="flex flex-col justify-between gap-2">
        <div>
          <p class="text-[#c1c1c1] font-roboto text-[14px] font-bold uppercase">
            {{ props.experience.expTitle }}
          </p>
          <p class="text-zinc-50 text-[20px] font-bold capitalize">
            {{ props.experience.expName }}
          </p>
        </div>
        <div>
          <p class="text-[#c1c1c1] font-roboto text-[14px] font-bold uppercase">
            {{ props.experience.instTitle }}
          </p>
          <p class="text-zinc-50 font-poppins text-[20px] font-bold capitalize">
            {{ props.experience.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-cardColor relative p-4 rounded-md w-full md:w-[340px] md:h-[340px] cursor-pointer"
    v-else
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[15px]"
    ></div>
    <div class="flex flex-col gap-4 h-full justify-between">
      <div class="flex flex-row gap-4 items-center">
        <img
          class="w-[2.5rem] h-[2.5rem]"
          :src="props.experience.image"
          alt=""
        />
        <div class="flex flex-col">
          <span
            class="text-[#c1c1c1] font-poppins text-[10px] font-bold uppercase"
          >
            {{ props.experience.institution }}
          </span>
          <span
            class="text-zinc-50 font-poppins text-[16px] font-bold uppercase"
          >
            {{ props.experience.expName }}
          </span>
          <span
            class="text-zinc-50 font-poppins text-[12px] font-light uppercase"
          >
            {{ props.experience.period }}
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <span class="text-[#f2f2f2] text-[14px] text-justify">
          {{ props.experience.description }}
        </span>
      </div>
      <div class="flex flex-row justify-between gap-2">
        <div
          class="flex items-center bg-[#121214] rounded-full p-2"
          v-if="arrayTechnologies[0] != ''"
          v-for="technologies in arrayTechnologies"
          :title="technologies.charAt(0).toUpperCase() + technologies.slice(1)"
        >
          <VIcon
            :name="technologies"
            class="w-[2rem] h-[2rem]"
            color="#7562e0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
