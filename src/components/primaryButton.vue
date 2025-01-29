<template>
  <div>
    <button
      class="bg-primaryColor py-[12px] px-[25px] rounded-lg flex items-center gap-[0.38rem]"
    >
      <span class="text-zinc-50 font-poppins font-semibold text-[1rem]"
        ><slot></slot
      ></span>

      <VIcon name="ri-user-3-fill" class="w-[1rem]" color="#ffffff" />
    </button>
  </div>
</template>
