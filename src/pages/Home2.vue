<template>
  <main class="flex flex-row justify-between mx-6 z-0 md:mx-12 xl:mx-52 2xl:mx-64 pt-36 items-center">
    <div class="flex flex-col gap-10">
      <div class="flex flex-col">
        <span class="text-white font-poppins font-semibold text-[2rem]">
          Hello, I`m
        </span>
        <span class="text-white font-poppins font-semibold text-[3.25rem]">
          Emanuel Fonseca
        </span>
        <span
          class="text-white font-poppins font-medium text-[1.125rem] w-[27rem]"
        >
          Desenvolvedor Front-end & Designer Ui/Ux
        </span>
      </div>
      <div class="flex flex-row justify-between mt-[1.81rem] mb-[3rem]">
        <button
          class="bg-primaryColor py-[12px] px-[25px] rounded-lg flex items-center gap-[0.38rem]"
        >
          <span class="text-white font-poppins font-semibold text-[1rem]"
            >About me</span
          ><box-icon
            class="w-[1rem]"
            color="#ffffff"
            type="solid"
            name="user"
          ></box-icon>
        </button>
        <button
          class="bg-transparent py-[12px] px-[25px] rounded-lg border-solid border-2 border-primaryColor text-white flex items-center gap-[0.38rem]"
        >
          <span class="text-white font-poppins font-semibold text-[1rem]"
            >Projects</span
          ><box-icon name="code-alt" color="#ffffff"></box-icon>
        </button>
      </div>
    </div>
    <div class="relative bottom-[-50px] flex items-center justify-center">
      <div class="bg-primaryColor rounded-[250px] w-[28rem] h-[28rem]">
        <img class="w-[24rem] relative scale-[125%] left-[30px] bottom-[30px]" src="../../public/fotoPerfil5.png" />
      </div>
    </div>
  </main>
  <div class="bg-darkColor h-[8rem] w-full relative z-50"></div>

</template>
