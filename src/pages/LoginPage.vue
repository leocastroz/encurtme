<template>
  <div class="tw-mt-20 tw-bg-neutral-800 tw-p-5 tw-rounded-xl tw-w-2/6 tw-mx-auto">
    <h1 class="tw-text-center tw-text-white tw-text-xl tw-font-bold tw-py-2">LOGIN</h1>
    <form @submit.prevent="submit" class="tw-grid">
      <input type="text" v-model="email" placeholder="Email" class="tw-bg-neutral-600 tw-mt-4 tw-p-3 tw-text-gray-400 tw-rounded tw-border-solid tw-border-[1px] tw-border-gray-400 tw-w-full" />
      <input type="password" v-model="password" placeholder="Password" class="tw-bg-neutral-600 tw-mt-4 tw-p-3 tw-text-gray-400 tw-rounded tw-border-solid tw-border-[1px] tw-border-gray-400 tw-w-full" />
      <button type="submit" class="tw-bg-neutral-600 tw-w-20 tw-rounded tw-mt-10 tw-font- tw-mx-auto tw-p-1 tw-text-white ">entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Cookie from 'js-cookie';
import router from '@/router';

let email = ref('');
let password = ref('');

onMounted(() => {
  Cookie.remove('token');
});

const submit = async () => {
  const payload = {
    email: email.value,
    password: password.value
  };
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', payload, {
      headers: {
        'Content-Type': 'application/json',
        'Access': 'application/json'
      }
    });
    router.push('/painel')
    Cookie.set('token', response.data.token);
    console.log(response.data);
  } catch (error) {
    console.log(error.response.data.error);
  }
};
</script>
