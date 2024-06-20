<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { initFlowbite } from "flowbite";

const emit = defineEmits(["languageSelect"]);

onMounted(() => {
  initFlowbite();
});

const props = defineProps(["language"]);

const languageRef = ref(props.language);

function langSelect() {
  languageRef.value = !languageRef.value;
  emit("languageSelect", languageRef.value);
}
</script>

<template>
  <nav id="header" class="border-gray-200 bg-darkColor z-50 fixed w-full">
    <div
      class="max-w-screen-3xl flex flex-wrap items-center justify-between md:mx-4 p-4"
    >
      <div class="flex flex-row items-center gap-2 md:gap-4">
        <label
          class="mx-4 z-50 inline-flex items-center cursor-pointer opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-in-out"
        >
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            v-model="languageRef"
            @click="langSelect"
          />
          <div
            :class="languageRef ? 'bg-image' : ''"
            class="relative px-1 w-14 h-7 bg-zinc-50 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primaryColor dark:peer-focus:primaryColor rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-zinc-50 after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-primaryColor after:border-primaryColor after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primaryColor"
          >
            <span v-if="languageRef" class="text-zinc-50 font-bold">EN</span>
            <span v-else class="text-primaryColor px-6 font-bold">PT</span>
          </div>
          <span
            class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></span>
        </label>
        <div class="flex flex-row items-center gap-1">
          <a
            class="flex items-center"
            href="https://wa.me/5512996360065"
            target="_blank"
            title="+55 (12) 99636-0065"
          >
            <box-icon
              class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
              name="whatsapp"
              type="logo"
              color="#7562E0"
            ></box-icon>
          </a>
          <a
            class="flex items-center"
            href="https://www.linkedin.com/in/emanuel-fonseca-dev/"
            target="_blank"
            title="https://www.linkedin.com/in/emanuel-fonseca-dev/"
          >
            <box-icon
              class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
              name="linkedin-square"
              type="logo"
              color="#7562E0"
            ></box-icon>
          </a>
          <a
            class="flex items-center"
            href="mailto:emanuel.marquessf@gmail.com"
            target="_blank"
            title="emanuel.marquessf@gmail.com"
          >
            <box-icon
              class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
              name="envelope"
              type="solid"
              color="#7562E0"
            ></box-icon>
          </a>
          <a
            class="flex items-center"
            href="https://github.com/EmanuelMarquessf"
            target="_blank"
            title="@EmanuelMarquessf"
          >
            <box-icon
              class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
              name="github"
              type="logo"
              color="#7562E0"
            ></box-icon>
          </a>
        </div>
      </div>
      <!-- <span class="self-center text-2xl -zinc-50space-nowrap text-[#7562e0] font-[cherry] font-[700]">Em</span> -->
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#7562e0] rounded-lg md:hidden focus:outline-none focus:ring-[#c8c9cb]"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul
          class="flex flex-col font-medium mt-4 bg-[#18181b] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
        >
          <li>
            <a
              href="#home"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#experience"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >{{ languageRef ? "Experiences" : "Experiências" }}
            </a>
          </li>
          <li>
            <a
              href="#tecnologie"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >{{ languageRef ? "Technologies" : "Tecnologias" }}</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >{{ languageRef ? "Projects" : "Projetos" }}</a
            >
          </li>
          <!-- <li>
            <a
              href="#contato"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >{{ languageRef ? "Contact" : "Contato" }}</a
            >
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>
