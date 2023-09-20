<template>
  <div>
    <button class="bg-primaryColor py-[12px] px-[25px] rounded-lg flex items-center gap-[0.38rem]">
      <span class="text-white font-poppins font-semibold text-[1rem]"><slot></slot></span>
      <box-icon class="w-[1rem]" color="#ffffff" type='solid' name='user'></box-icon>
    </button>
  </div>
</template>