<script setup>
import Header from "./components/Header.vue";
import Home from "./pages/Home.vue";
// import About from './pages/About.vue';
import Formation from "./pages/Formation.vue";
import Tecno from "./pages/Tecno.vue";
import Projects from "./pages/Projects.vue";

import { ref } from "vue";

const language = ref(false);

function languageSelect(newValue){
  language.value = newValue;
}

</script>

<template>

  <div class="bg-secondaryColor ">
    <Header @languageSelect="languageSelect" :language="language"></Header>
    <Home id="home" class="z-10" :language="language"></Home>
    <div class="flex flex-col gap-28">
      <div
        class="flex flex-col gap-24 mx-6 mb-20 md:mx-12 xl:mx-40 2xl:mx-48"
        :language="language"
      >
        <About id="about" :language="language"></About>
        <Formation id="experience" :language="language"></Formation>
        <Tecno id="tecnologie" :language="language"></Tecno>
        <Projects id="projects" :language="language"></Projects>
      </div>
      <!-- <Contact id="contact" :language="language"></Contact> -->
    </div>
  </div>
</template>
