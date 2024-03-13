<template>
  <main class="flex flex-row items-end justify-between lg:gap-40 mx-6 md:mx-12 xl:mx-52 2xl:mx-64 h-[35rem]">
    <div>
      <p class="text-white font-poppins font-semibold text-[2rem]">
        Hello, I`m
      </p>
      <p class="text-white font-poppins font-semibold text-[3.25rem]">
        Emanuel Fonseca
      </p>
      <p class="text-white font-poppins font-medium text-[1.125rem] w-[27rem]">
        Desenvolvedor Front-end & Designer Ui/Ux
      </p>
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
    <div class="flex justify-end">
      <div
        class="bg-primaryColor rounded-[250px] w-[30.375rem] h-[30.375rem] absolute z-0 translate-y-[-22.4rem]"
      >
        <img
          class="w-[24rem] relative translate-x-[5%] translate-y-[-13.61rem] scale-[105%]"
          src="../../public/fotoPerfil2.png"
        />
      </div>
    </div>
  </main>
  <div class="bg-darkColor h-[8rem] w-full relative z-10"></div>
</template>
