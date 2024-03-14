<script setup>
import Header from "./pages/Header.vue";
import Home from "./pages/Home.vue";
// import About from './pages/About.vue';
import Formation from "./pages/Formation.vue";
import Tecno from "./pages/Tecno.vue";
import Projects from "./pages/Projects.vue";
import Contact from "./pages/Contact.vue";
</script>

<template>
  <div class="bg-secondaryColor">
    <Header></Header>
    <Home id="home" class="z-10"></Home>

    <div class="flex flex-col gap-24 mx-6 md:mx-12 xl:mx-40 2xl:mx-48">
      <About id="about"></About>
      <Formation id="experience"></Formation>
      <Tecno id="tecno"></Tecno>
      <Projects id="projects"></Projects>
      <!-- <Contact id="contact"></Contact> -->
    </div>
  </div>
</template>
