<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  titleCourse: String,
  course: String,
  institutionTitle: String,
  institution: String,
  image: String,
  description: String,
  tecnologie: String,
});

let arrayTechnologies = (props.tecnologie || "").split(", ");

let viewCard = ref(false);
</script>

<template>
  <div
    class="bg-[#31313f] relative p-4 rounded-md w-full md:w-[340px] md:h-[150px] cursor-pointer items-center"
    v-if="!viewCard"
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[15px]"
    ></div>
    <div class="flex flex-row items-center gap-4">
      <img class="w-[6rem] h-[6rem]" :src="props.image" alt="" />
      <div class="flex flex-col justify-between gap-2">
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{ props.titleCourse }}
          </p>
          <p
            class="text-white text-[1.2rem] md:text-[1.25rem] font-bold capitalize"
          >
            {{ props.course }}
          </p>
        </div>
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{ props.institutionTitle }}
          </p>
          <p
            class="text-white font-poppins text-[1.4rem] md:text-[1.3rem] lg:text-[1.4rem] font-bold capitalize"
          >
            {{ props.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-[#31313f] relative p-4 rounded-md w-full md:max-w-none md:w-[340px] md:h-[320px] cursor-pointer"
    v-else
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[15px]"
    ></div>
    <div class="flex flex-col justify-between gap-4 h-full">
      <div class="flex flex-row gap-4 items-center">
        <img class="w-[2rem] h-[2rem]" :src="props.image" alt="" />
        <div class="flex flex-col">
          <span
            class="text-[#c1c1c1] font-poppins text-[10px] font-bold uppercase"
          >
            {{ props.institution }}
          </span>
          <span class="text-white font-poppins text-[16px] font-bold uppercase">
            {{ props.course }}
          </span>
        </div>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <span class="text-[#f2f2f2] text-[14px] text-justify">
          {{ props.description }}
        </span>
      </div>
      <div class="flex flex-row justify-between gap-2">
        <div
          class="flex items-center bg-[#121214] rounded-full p-2"
          v-if="arrayTechnologies[0] != ''"
          v-for="tecnologie in arrayTechnologies"
          :title="tecnologie.charAt(0).toUpperCase() + tecnologie.slice(1)"
        >
          <box-icon
            type="logo"
            :name="tecnologie"
            class="w-[2rem] h-[2rem]"
            color="#7562e0"
          ></box-icon>
        </div>
      </div>
    </div>
  </div>
</template>
