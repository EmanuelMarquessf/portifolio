<script setup>
import { ref, onMounted, defineProps, defineEmits } from "vue";
import { initFlowbite } from "flowbite";

import { BiGithub } from "oh-vue-icons/icons";

const emit = defineEmits(["languageSelect"]);

const menu = ref(true);

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
  <nav
    id="header"
    class="border-gray-200 bg-darkColor z-50 fixed w-full scroll-smooth"
  >
    <div
      class="max-w-screen-3xl flex flex-col md:flex-row items-center justify-between md:mx-4 p-4"
    >
      <div
        :class="[
          'flex w-full items-center gap-2 md:gap-4',
          menu ? 'flex-row  ' : 'flex-col md:flex-row',
        ]"
      >
        <div class="flex flex-col gap-4  md:flex-row md:items-center w-full">
          <button
            @click="() => (menu = !menu)"
            type="button"
            class="focus:outline-none px-4 text-left opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <VIcon
              class="w-8 h-8 text-customPurple"
              :name="menu ? 'hi-solid-menu' : 'io-close-sharp'"
            />
          </button>
          <div
            :class="[
              'transition-all ease-in-out md:duration-1000 relative flex-1',
              menu ? 'hidden' : '',
            ]"
          >
            <ul
              class="flex flex-col w-full md:flex-row gap-4 font-medium font-roboto bg-[#18181b] md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 md:text-lg capitalize"
            >
              <li>
                <a
                  href="#home"
                  class="block py-2 w-full px-3 md:p-0 text-[#989898] rounded hover:text-[#fffff0] md:bg-transparent transition-all ease-in-out duration-500"
                  aria-current="page"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#experience"
                  class="block py-2 px-3 md:p-0 text-[#989898] rounded hover:text-[#fffff0] md:bg-transparent transition-all ease-in-out duration-500"
                  aria-current="page"
                  >{{ languageRef ? "Experiences" : "Experiências" }}
                </a>
              </li>
              <li>
                <a
                  href="#tecnologie"
                  class="block py-2 px-3 md:p-0 text-[#989898] rounded hover:text-[#fffff0] md:bg-transparent transition-all ease-in-out duration-500"
                  aria-current="page"
                  >{{ languageRef ? "Technologies" : "Tecnologias" }}</a
                >
              </li>
              <li>
                <a
                  href="#projects"
                  class="block py-2 px-3 md:p-0 text-[#989898] rounded hover:text-[#fffff0] md:bg-transparent transition-all ease-in-out duration-500"
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
        <div class="flex flex-row w-full justify-evenly md:justify-end">

          <div class="flex flex-row items-center gap-1 text-customPurple">
            <a
              class="flex items-center"
              href="https://wa.me/5512996360065"
              target="_blank"
              title="+55 (12) 99636-0065"
            >
              <VIcon
                class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
                name="co-whatsapp"
              />
            </a>
            <a
              class="flex items-center"
              href="https://www.linkedin.com/in/emanuel-fonseca-dev/"
              target="_blank"
              title="https://www.linkedin.com/in/emanuel-fonseca-dev/"
            >
              <VIcon
                class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
                name="co-linkedin-in"
              />
            </a>
            <a
              class="flex items-center"
              href="mailto:emanuel.marquessf@gmail.com"
              target="_blank"
              title="emanuel.marquessf@gmail.com"
            >
              <VIcon
                class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
                name="md-email-outlined"
              />
            </a>
            <a
              class="flex items-center"
              href="https://github.com/EmanuelMarquessf"
              target="_blank"
              title="@EmanuelMarquessf"
            >
              <VIcon
                class="w-8 h-8 opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-500 ease-in-out"
                name="bi-github"
              />
            </a>
          </div>
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
            <span
              v-if="languageRef"
              class="text-zinc-50 font-bold font-roboto text-[12px] px-1"
              >EN</span
            >
            <span
              v-else
              class="text-primaryColor px-7 font-bold font-roboto text-[12px]"
              >PT</span
            >
          </div>
          <span
            class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          ></span>
        </label>
        </div>
      </div>
    </div>
  </nav>
</template>
