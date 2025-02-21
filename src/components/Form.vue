<script setup>
import { ref, defineProps } from "vue";

import { apiKey, serviceID, templateID } from "../../config/config";

import emailjs from "@emailjs/browser";

defineProps({
  language: Boolean,
});

const form = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = async () => {
  await emailjs.send(
    serviceID,
    templateID,
    {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    },
    apiKey
  );
  alert("Email sent successfully!");
  form.value.name= "";
  form.value.email= "";
  form.value.message= "";
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <form
      @submit.prevent="sendEmail"
      class="flex flex-col gap-4 text-lowPriority font-roboto items-start"
    >
      <div class="flex flex-col md:flex-row gap-4 w-full">
        <input
          v-model="form.name"
          class="flex-1 p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
          type="text"
          :placeholder="language ? 'Name' : 'Nome'"
          required
        />
        <input
          v-model="form.email"
          class="flex-1 p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <textarea
        v-model="form.message"
        class="flex-1 w-full p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none resize-none"
        :placeholder="language ? 'Message' : 'Mensagem'"
        cols="30"
        rows="6"
        required
      ></textarea>

      <button
  type="submit"
  :class="[
    'bg-primaryColor py-[12px] px-24 rounded-lg flex items-center text-zinc-50 font-poppins font-semibold text-[1rem] w-full md:w-auto justify-center cursor-pointer ',
    !(form.name && form.email && form.message) ? 'disabled opacity-70 cursor-context-menu' : ' hover:scale-105 opacity-90 hover:opacity-100 hover:text-cardTitle transition-all duration-500 ease-in-out'
  ]"
>
  {{ language ? 'Submit' : 'Enviar' }}
</button>
    </form>
  </div>
</template>
