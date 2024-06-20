<script setup>
import { defineProps } from "vue";

const props = defineProps({
  language: Boolean,
});
</script>

<template>
  <main class="flex flex-col pt-[4rem]">
    <div
      class="flex flex-col xl:flex-row items-center mx-10 z-0 md:mx-12 lg:mx-14 xl:mx-40 2xl:mx-48 my-16 lg:my-24"
    >
      <div class="flex flex-col my-0 md:my-4 lg:my-0 gap-8 lg:gap-10">
        <div class="flex flex-col gap-5 md:gap-12">
          <div class="flex flex-col leading-[40px] md:leading-[64px]">
            <span
              class="md:hidden xl:block text-zinc-50 font-poppins font-semibold text-[1.5rem] lg:text-[2rem] 2xl:text-[2.5rem] whitespace-nowrap"
            >
              {{ props.language ? "Hello I'm" : "Olá, eu sou" }}
            </span>
            <span
              class="md:hidden xl:block text-primaryColor font-poppins font-semibold text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] whitespace-nowrap"
            >
              Emanuel Marques
            </span>
            <span
              class="md:hidden xl:block text-zinc-50 font-poppins font-medium text-[18px] md:text-[24px] whitespace-nowrap"
            >
              {{
                props.language
                  ? "Front-end Developer & Ui/Ux Designer"
                  : "Desenvolvedor Front-end & Designer Ui/Ux"
              }}
            </span>
          </div>
          <div class="flex flex-col gap-5">
            <div
              class="w-[76px] border-lowPriority border-solid border-2"
            ></div>
            <p
              class="w-full xl:w-[80%] text-lowPriority font-poppins font-normal text-[18px] lg:text-[24px] md:leading-8 xl:leading-10 text-justify lg:text-left"
            >
              {{
                props.language
                  ? "Hello, I'm Emanuel, a graduate in Systems Analysis and Development from IFSP Campus Campos do Jordão. Currently, I am focused on deepening my knowledge in web development, with an emphasis on Frontend."
                  : "Olá, sou o Emanuel, graduado em Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campos do Jordão. Atualmente, estou focado em aprofundar meus conhecimentos em desenvolvimento web, com ênfase no Frontend."
              }}
            </p>
          </div>
        </div>
        <div class="flex flex-row justify-between md:justify-start md:gap-8 items-center">
          <a
            href="https://drive.usercontent.google.com/download?id=1MRk3ikyFikFkr8tosFzFOxMVRSumWRjc&export=download&authuser=0"
          >
            <button
              class="bg-primaryColor py-[12px] px-[24px] rounded-lg text-zinc-50 flex items-center gap-[0.38rem] border-solid border-2 border-primaryColor"
            >
              <span
                class="text-zinc-50 font-poppins font-medium text-[16px] whitespace-nowrap"
              >
                Download CV
              </span>
            </button>
          </a>
          <a href="#projects">
            <button
              class="bg-transparent py-[12px] px-[24px] rounded-lg border-solid border-2 border-primaryColor text-zinc-50 flex items-center gap-[12px]"
            >
              <span
                class="text-zinc-50 font-poppins font-medium text-[16px] whitespace-nowrap"
                >{{ props.language ? "Projects" : "Projetos" }}</span
              ><box-icon
                class="w-[20px]"
                name="code-alt"
                color="#ffffff"
              ></box-icon>
            </button>
          </a>
        </div>
      </div>
      <div
        class="md:w-full flex flex-col md:flex-row md:items-center order-first xl:order-last gap-10"
      >
        <div class="bg-primaryColor rounded-full">
          <img
            class="bg-transparent w-[15rem] md:w-[20rem] xl:w-[50rem] rounded-full"
            src="/fotoperfil.png"
          />
        </div>
        <div class="md:flex md:flex-col hidden xl:hidden">
          <span
            class="text-zinc-50 font-poppins font-semibold md:text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem] whitespace-nowrap"
          >
            {{ props.language ? "Hello I'm" : "Olá, eu sou" }}
          </span>
          <span
            class="text-primaryColor font-poppins font-semibold md:text-[2.8rem] lg:text-[3.25rem] xl:text-[4rem] whitespace-nowrap"
          >
            Emanuel Marques
          </span>
          <span
            class="text-[#c1c1c1] font-poppins font-medium md:text-[1.5rem] whitespace-nowrap"
          >
            {{
              props.language
                ? "Front-end Developer & Ui/Ux Designer"
                : "Desenvolvedor Front-end & Designer Ui/Ux"
            }}
          </span>
        </div>
      </div>
    </div>
    <div class="bg-darkColor h-[6.1rem] md:h-[9rem] w-full relative z-40"></div>
  </main>
</template>
