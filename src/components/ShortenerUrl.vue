<template>
  <div
    class="tw-max-w-md tw-text-white tw-bg-gradient-to-r tw-from-indigo-500 tw-from-50% tw-via-sky-500 tw-via-100% tw-mx-auto tw-py-5 tw-mt-10 tw-rounded-md tw-flex tw-justify-between tw-items-center animate__animated animate__fadeInLeft">
    <div class="tw-w-3/6 tw-flex tw-justify-center">
      <label for="urlInput" class="tw-font-bold tw-text-sm">DIGITAR URL:</label>
    </div>
    <input v-model="originalUrl" id="urlInput" type="text" placeholder="Insira a URL"
      class="tw-text-black tw-w-full tw-p-2 tw-rounded tw-mr-5">
  </div>

  <div
    class="tw-max-w-md tw-mx-auto tw-py-5 tw-rounded-md tw-flex tw-justify-between animate__animated animate__fadeInLeft">
    <button v-if="isPostSuccessful" @click="clearSearch"
      class="tw-bg-red-500 tw-w-20 tw-rounded tw-p-1 tw-text-white">Limpar</button>
    <button @click="encurtarURL"
      class="tw-bg-neutral-600 tw-w-20 tw-rounded tw-p-1 tw-text-neutral-400 tw-border-solid tw-border-[0.5px] tw-border-gray-400">Encurtar</button>
  </div>

  <div v-if="shortenedUrl"
    class="tw-text-white tw-bg-neutral-800 tw-max-w-md tw-mx-auto tw-py-5 tw-my-10 tw-rounded-md tw-text-center animate__animated animate__fadeInRight">
    <p>URL encurtada: <a :href="shortenedUrl" target="_blank" class="tw-mx-10 tw-underline tw-decoration-1">{{
      shortenedUrl }}</a></p>
  </div>

  <div v-if="shortenedUrls.length"
    class="tw-text-white tw-bg-neutral-800 tw-max-w-md tw-mx-auto tw-py-5 tw-my-10 tw-rounded-md tw-text-center animate__animated animate__fadeInDown">
    <h2>LINKS ENCURTADOS</h2>
    <ul>
      <li v-for="(url, index) in shortenedUrls" :key="index"
        class="tw-bg-neutral-700 tw-my-5 tw-mx-5 tw-rounded tw-py-4 tw-px-10 tw-flex tw-justify-between tw-items-center">
        <a :href="url" target="_blank" @click="incrementClickCount(index)"
          class="tw-mx-10 tw-underline tw-decoration-1">{{ url }}</a>
        <span class="tw-bg-indigo-500 tw-ml-2 tw-no-underline tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">Clicado {{
          clickCounts[index] || 0 }} vezes</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from "vue-toastification";

const toast = useToast();
const BASE_URL = import.meta.env.VITE_BITLY;
const TOKEN_KEY = import.meta.env.VITE_TOKEN;

const originalUrl = ref('');
const shortenedUrl = ref('');
const isPostSuccessful = ref(false);
const shortenedUrls = ref([]);
const clickCounts = ref([]);


const encurtarURL = async () => {
  try {
    const response = await axios.post(BASE_URL, {
      long_url: originalUrl.value
    }, {
      headers: {
        'Authorization': TOKEN_KEY,
        'Content-Type': 'application/json'
      }
    });
    toast.success("Link encurtado com sucesso!");
    if (response.status === 201) {
      isPostSuccessful.value = true;
    }
    shortenedUrl.value = response.data.link;
    shortenedUrls.value.push(response.data.link);
    clickCounts.value.push(0);
  } catch (error) {
    toast.error("Erro ao encurtar link!");
    console.error(error);
  }
};

const incrementClickCount = (index) => {
  clickCounts.value[index]++;
};

const clearSearch = () => {
  originalUrl.value = '';
  shortenedUrl.value = '';
  isPostSuccessful.value = false;
};
</script>
