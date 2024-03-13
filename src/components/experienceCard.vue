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
    class="bg-[#31313f] relative p-4 rounded-md w-[380px] h-[150px]"
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
            class="text-[#c1c1c1] font-poppins text-[16px] font-bold uppercase"
          >
            {{ props.titleCourse }}
          </p>
          <p class="text-white text-[1.5rem] font-bold capitalize">
            {{ props.course }}
          </p>
        </div>
        <div>
          <p
            class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase"
          >
            {{ props.institutionTitle }}
          </p>
          <p class="text-white font-poppins text-[1.5rem] font-bold capitalize">
            {{ props.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="bg-[#31313f] relative p-4 rounded-md w-[380px]"
    v-else
    @click="viewCard = !viewCard"
  >
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[15px]"
    ></div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-2">
        <img class="w-[1.5rem] h-[1.5rem]" :src="props.image" alt="" />
        <span class="text-white font-poppins text-[14px] font-bold uppercase">
          {{ props.course }} - {{ props.institution }}
        </span>
      </div>
      <div class="flex flex-col justify-between gap-4">
        <span class="text-[#f2f2f2] text-[12px] text-justify">
          {{ props.description }}
        </span>
        <div class="flex flex-row justify-center gap-2">
          <div
            class="flex items-center bg-[#121214] rounded-full p-2"
            v-for="tecnologie in arrayTechnologies"
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

    <!-- <div v-if="viewCard" class="bg-[#31313f] text-[#c1c1c1] w-full text-justify ">
      {{ props.description }}
    </div> -->
  </div>
</template>
