<script setup>
import Form from "../components/Form.vue";
import Social from "../components/Social.vue";

defineProps({
  language: Boolean,
});

</script>
<template>
  <section class="flex flex-col gap-20 md:gap-24">
    <div class="flex flex-col md:flex-row gap-4 md:gap-20 lg:gap-32 items-center">
      <div class=" bg-customPurple/70 rounded-full overflow-hidden md:w-[300px] lg:w-[410px] lg:h-[410px]">
        <img
          class="w-full h-full object-cover bg-transparent "
          src="/cat.png"
        />
      </div>
      <div class="flex flex-col gap-4 md:gap-8 flex-1">
        <div class="flex flex-col gap-2">
          <h2 class="text-primaryColor font-poppins font-semibold text-3xl">
            {{
              language
                ? "Let's Talk!"
                : "Vamos conversar"
            }}
          </h2>
          <p class="text-cardTitle font-roboto text-lg font-medium">
            {{
              language
                ? "Did you like my work? Why not send me a message?"
                : "Gostou do meu trabalho? Porque não me manda uma mensagem?"
            }}
          </p>
        </div>
        <Form class="flex-1" :language="language" />
      </div>

    </div>
    <div
      class="col-span-4 flex flex-row flex-wrap gap-8 justify-center text-primaryColor font-roboto font-medium text-base md:text-lg"
    >
      <Social
        text="+55 (12) 99636-0065"
        icon="co-whatsapp"
        :target="true"
        href="https://wa.me/5512996360065"
      />
      <Social
        text="/emanuel-fonseca-dev"
        icon="co-linkedin-in"
        :target="true"
        href="https://www.linkedin.com/in/emanuel-fonseca-dev/"
      />
      <Social
        text="emanuel.marquessf@gmail.com"
        icon="md-email-outlined"
        :target="true"
        href="mailto:emanuel.marquessf@gmail.com"
      />
      <Social
        text="/EmanuelMarquessf"
        icon="bi-github"
        :target="true"
        href="https://github.com/EmanuelMarquessf"
      />
    </div>
  </section>
</template>
