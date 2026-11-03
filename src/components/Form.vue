<script setup>
import { form as texts } from "../locales/ui";
import { ref, defineProps } from "vue";

import { apiKey, serviceID, templateID } from "../../config/config";

import emailjs from "@emailjs/browser";

const props = defineProps({
  language: { type: String, default: "pt" },
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
      from_name: form.value.name,
      from_email: form.value.email,
      message: form.value.message,
    },
    apiKey
  );
  alert(texts.success[props.language]);
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
          name="from_name"
          class="flex-1 p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
          type="text"
          :placeholder="texts.name[language]"
          required
        />
        <input
          v-model="form.email"
          name="from_email"
          class="flex-1 p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <textarea
        v-model="form.message"
        class="flex-1 w-full p-4 bg-cardColor rounded-lg grow border-0 focus:border-none focus:outline-none focus:ring-0 focus:shadow-none resize-none"
        :placeholder="texts.message[language]"
        cols="30"
        rows="8"
        name="message"
        required
      ></textarea>

      <button
        type="submit"
        class="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-lg border-2 border-solid border-primaryColor bg-primaryColor text-darkColor font-roboto font-medium text-base opacity-100 cursor-pointer hover:scale-105 hover:bg-primaryColorHover hover:border-primaryColorHover transition-all duration-500 ease-in-out"
      >
        {{ texts.submit[language] }}
      </button>
    </form>
  </div>
</template>
