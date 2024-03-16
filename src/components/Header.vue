<template>
  <nav
    id="header"
    class="border-gray-200 bg-[#121214] z-50 fixed w-full"
  >
    <div
      class="max-w-screen-3xl flex flex-wrap items-center justify-between md:mx-4 p-4"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../../public/EMLogo.png"
          class="w-10 bg-"
          alt="Flowbite Logo"
        />
        <!-- <span class="self-center text-2xl whitespace-nowrap text-[#7562e0] font-[cherry] font-[700]">Em</span> -->
      </a>
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
              >Experience</a
            >
          </li>
          <li>
            <a
              href="#tecnologie"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >Tecnologias</a
            >
          </li>
          <li>
            <a
              href="#clientes"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >projects</a
            >
          </li>
          <li>
            <a
              href="#contato"
              class="block py-2 px-3 md:p-0 text-[#b2b2b2] rounded hover:text-[#fffff0] md:bg-transparent md:text-xl capitalize"
              aria-current="page"
              >Contato</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
