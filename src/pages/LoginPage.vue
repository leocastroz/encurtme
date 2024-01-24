<template>
  <div
    class="tw-mt-20 tw-bg-neutral-800 tw-rounded-xl tw-p-10 tw-max-w-md tw-mx-auto tw-border-dashed tw-border-2 tw-border-neutral-600 animate__animated animate__fadeInLeft">
    <h1 class="tw-text-center tw-text-white tw-text-xl tw-font-bold tw-py-2">LOGIN</h1>
    <form @submit.prevent="submit" class="tw-grid">
      <input type="text" v-model="email" placeholder="Email"
        class="tw-bg-neutral-600 tw-mt-4 tw-p-3 tw-text-gray-400 tw-rounded tw-border-solid tw-border-[1px] tw-border-gray-400 tw-w-full" />
      <input type="password" v-model="password" placeholder="Password"
        class="tw-bg-neutral-600 tw-mt-4 tw-p-3 tw-text-gray-400 tw-rounded tw-border-solid tw-border-[1px] tw-border-gray-400 tw-w-full" />
      <button type="submit"
        class="tw-bg-indigo-500 tw-w-20 tw-rounded tw-mt-10 tw-mx-auto tw-p-1 tw-text-white">entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Cookie from 'js-cookie';
import router from '@/router';
import { useToast } from "vue-toastification";

const toast = useToast();
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
    toast.success("Usuário autenticado com sucesso!");
    router.push('/painel')
    Cookie.set('token', response.data.token);
  } catch (error) {
    toast.error('Autenticação falhou!');
  }
};
</script>
