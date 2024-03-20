<script setup>
import { defineProps } from "vue";

const props = defineProps({
  language: Boolean,
});
</script>

<template>
  <main
    class="flex flex-col pt-[6rem] md:pt-[9rem] lg:pt-[10rem] xl:pt-[12rem] 2xl:pt-[15.5rem]"
  >
    <div
      class="flex flex-col gap-4 md:gap-8 lg:gap-12 xl:gap-28 2xl:gap-36 lg:flex-row lg:justify-between items-center mx-10 z-0 md:mx-12 lg:mx-14 xl:mx-40 2xl:mx-48"
    >
      <div class="flex flex-col my-0 md:my-4 lg:my-0 gap-8 lg:gap-10">
        <div class="flex flex-col">
          <span
            class="md:hidden lg:block text-white font-poppins font-semibold text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem]"
          >
            {{ props.language ? "Hello I'm" : "Olá, eu sou" }}
          </span>
          <span
            class="md:hidden lg:block text-white font-poppins font-semibold text-[2rem] md:text-[2.8rem] lg:text-[3.25rem] xl:text-[4rem]"
          >
            Emanuel Marques
          </span>
          <div class="flex flex-col gap-8">
            <span
              class="md:hidden lg:block text-white font-poppins font-medium text-[1.05rem] lg:text-[1.2rem] xl:text-[1.3rem] md:w-[27rem]"
            >
              {{
                props.language
                  ? "Front-end Developer & Ui/Ux Designer"
                  : "Desenvolvedor Front-end & Designer Ui/Ux"
              }}
            </span>
            <p
              class="text-white font-poppins font-normal md:font-medium text-left md:text-justify text-[1rem] md:text-[1rem] lg:w-[400px] xl:w-[550px] 2xl:w-[700px]"
            >
              {{
                props.language
                  ? "Hello, my name is Emanuel and I am a Frontend web developer from Campos do Jordão, São Paulo. I like programing and my goal is to create awesome websites and applications that solve real world problems while looking beautiful on every device. I'm currently looking for my first working with frontend developer."
                  : "Olá, eu sou Emanuel Marques, tenho 23 anos e sou graduado em Análise e Desenvolvimento de Sistemas pelo IFSP Campus Campos do Jordão. No momento, estou dedicando meu tempo aos estudos na área de desenvolvimento web, com um foco específico no front-end. Estou focado em encontrar minha primeira oportunidade como programador."
              }}
            </p>
          </div>
        </div>
        <div
          class="flex flex-row justify-between mb-16 items-center lg:mt-[1.81rem] lg:mb-[3rem]"
        >
          <!-- <button
            class="bg-primaryColor py-[12px] px-[25px] rounded-lg flex items-center gap-[0.38rem]"
          >
            <span class="text-white font-poppins font-semibold text-[1rem]"
              >{{ props.language ? "About" : "Sobre" }}</span
            ><box-icon
              class="w-[1rem]"
              color="#ffffff"
              type="solid"
              name="user"
            ></box-icon>
          </button> -->
          <a href="#projects">
            <button
              class="bg-transparent py-[12px] px-[25px] rounded-lg border-solid border-2 border-primaryColor text-white flex items-center gap-[0.38rem]"
            >
              <span class="text-white font-poppins font-semibold text-[1rem]">{{
                props.language ? "Projects" : "Projetos"
              }}</span
              ><box-icon name="code-alt" color="#ffffff"></box-icon>
            </button>
          </a>
        </div>
      </div>
      <div
        class="md:w-full md:justify-around flex flex-col md:flex-row md:items-center lg:relative lg:bottom-[-130px] 2xl:bottom-[-126px] order-first lg:order-last"
      >
        <div
          class="bg-primaryColor rounded-full lg:w-[27rem] lg:h-[27rem] xl:w-[30.5rem] xl:h-[30.5rem] 2xl:w-[33.5rem] 2xl:h-[33.5rem]"
        >
          <img
            class="bg-transparent w-[14rem] lg:w-[24rem] rounded-full lg:rounded-none lg:relative md:scale-[100%] lg:scale-[130%] xl:scale-[140%] 2xl:scale-[160%] lg:left-[40px] xl:left-[60px] lg:bottom-[105px] xl:bottom-[90px] 2xl:bottom-[100px]"
            src="https://i.ibb.co/Rh2KByL/fotoperfil6.png"
          />
        </div>
        <div class="md:flex md:flex-col hidden lg:hidden">
          <span
            class="text-white font-poppins font-semibold md:text-[1.5rem] lg:text-[2rem] 2xl:text-[3rem]"
          >
            {{ props.language ? "Hello I'm" : "Olá, eu sou" }}
          </span>
          <span
            class="text-white font-poppins font-semibold md:text-[2.8rem] lg:text-[3.25rem] xl:text-[4rem]"
          >
            Emanuel Marques
          </span>
          <span class="text-white font-poppins font-medium md:text-[1.1rem]">
            {{
              props.language
                ? "Front-end Developer & Ui/Ux Designer"
                : "Desenvolvedor Front-end & Designer Ui/Ux"
            }}
          </span>
        </div>
      </div>
    </div>
    <div class="bg-darkColor h-[6.1rem] md:h-[8rem] w-full relative z-40"></div>
  </main>
</template>
