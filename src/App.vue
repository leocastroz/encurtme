<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <nav class="tw-bg-blue-500 tw-text-center tw-font-bold">
        <RouterLink class="tw-mx-2" to="/">HOME</RouterLink>
        <RouterLink class="tw-mx-2" to="/login">LOGIN</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
