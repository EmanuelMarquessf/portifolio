<script setup>
import { defineProps, ref } from "vue";

defineProps({
  formation: Object,
});

let viewCard = ref(false);
</script>

<template>
  <div
    class="max-w-[500px] bg-cardColor relative p-4 rounded w-full  cursor-pointer items-center opacity-80 hover:opacity-100 hover:scale-105 focus:scale-105 hover:shadow-lg transition-transform  duration-500 ease-in-out will-change-transform hover:border-primaryColor hover:border-b-[2px]"
    v-if="!viewCard"  
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[10%]"
    ></div>
    <div class="flex flex-row items-center gap-4">
      <img class="w-[5rem] h-[7rem] object-cover" :src=" formation.image" alt="" />
      <div class="flex flex-col justify-between gap-2">
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{  formation.courseType }}
          </p>
          <p class="text-zinc-50 text-[20px] font-bold capitalize font-roboto">
            {{  formation.courseName }}
          </p>
        </div>
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{  formation.institutionTitle }}
          </p>
          <p class="text-zinc-50 font-roboto text-[20px] font-bold capitalize">
            {{  formation.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    @click="viewCard = !viewCard"
    class="max-w-[500px] md:h-[260px] bg-cardColor relative p-4 rounded-md col-span-6 md:col-span-3 cursor-pointer hover:opacity-100 hover:scale-105 focus:scale-105 hover:shadow-lg transition-transform duration-500 ease-in-out will-change-transform hover:border-primaryColor hover:border-b-[2px]"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[35px]"
    ></div>
    <div class="flex flex-col gap-4 h-full justify-between">
      <div class="flex flex-row gap-4 items-center">
        <img class="h-[4rem] object-cover" :src=" formation.image" alt="" />
        <div class="flex flex-col">
          <span
            class="text-[#c1c1c1] font-roboto text-[12px] font-bold uppercase"
          >
            {{  formation.institution }}
          </span>
          <span
            class="text-zinc-50 font-poppins text-[16px] font-bold uppercase"
          >
            {{  formation.courseName }}
          </span>
          <span
            class="text-zinc-50 font-roboto text-[12px] font-light uppercase"
          >
            {{  formation.period }}
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <span class="text-[#f2f2f2] text-[14px] text-justify font-roboto">
          {{  formation.description }}
        </span>
      </div>
      <div class="flex flex-row gap-4">
        <div
          class="flex items-center bg-[#121214] rounded-full p-2"
          v-if=" formation.technologies.length"
          v-for="tec in  formation.technologies"
          :title="tec.name"
        >
          <VIcon
            :name="tec.icon"
            class="w-[1.5rem] h-[1.5rem]"
            color="#7562e0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
