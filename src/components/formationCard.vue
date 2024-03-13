<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    titleCourse: String,
    course: String,
    institutionTitle: String,
    institution: String,
    image: String,
    tecnologies: String
  })

</script>

<template>
  <div class="bg-[#31313f] relative p-4 rounded-md w-[380px]">
    <div
      class="bg-primaryColor w-[10px] h-[50px] absolute left-[-5px] top-[10%]"
    ></div>
    <div class="flex flex-row items-center gap-4">
      <img
        class="w-[5rem] h-[7rem]"
        :src="props.image"
        alt=""
      />
      <div class="flex flex-col justify-between gap-2">
        <div>
          <p class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase">
            {{ props.titleCourse }}
          </p>
          <p class="text-white text-[1.5rem] font-bold capitalize">
            {{ props.course}}
          </p>
        </div>
        <div>
          <p class="text-[#c1c1c1] font-poppins text-[14px] font-bold uppercase">
            {{ props.institutionTitle }}
          </p>
          <p class="text-white font-poppins text-[1.5rem] font-bold capitalize">
            {{ props.institution }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>