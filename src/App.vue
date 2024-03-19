<script setup>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
// import About from './pages/About.vue';
import Formation from "./pages/Formation.vue";
import Tecno from "./pages/Tecno.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";
import Footer from "./components/Footer.vue";

import { ref } from "vue";

const language = ref(false);

function languageSelect(lang){
  language.value = lang;
  console.log(language.value)
}

</script>

<template>
  <label
    class="fixed bottom-0 my-2 mx-4 z-50 inline-flex items-center cursor-pointer"
  >
    <input
      type="checkbox"
      value=""
      class="sr-only peer"
      v-model="language"
      @click="language = !language"
    />
    <div
      :class="language ? 'bg-image' : ''"
      class="relative px-1 w-14 h-7 bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primaryColor dark:peer-focus:primaryColor rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-primaryColor after:border-primaryColor after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-primaryColor"
    >
      <span v-if="language" class="text-white font-bold">EN</span>
      <span v-else class="text-primaryColor px-6 font-bold">PT</span>

    </div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span
    >
  </label>
  <div class="bg-secondaryColor ">
    <Header @languageSelect="languageSelect" :language="language"></Header>
    <Home id="home" class="z-10" :language="language"></Home>
    <div class="flex flex-col gap-28">
      <div
        class="flex flex-col gap-24 mx-6 md:mx-12 xl:mx-40 2xl:mx-48"
        :language="language"
      >
        <About id="about" :language="language"></About>
        <Formation id="experience" :language="language"></Formation>
        <Tecno id="tecnologie" :language="language"></Tecno>
        <Projects id="projects" :language="language"></Projects>
      </div>
      <Contact id="contact" :language="language"></Contact>

    </div>
  </div>
</template>
