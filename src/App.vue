<template>
  <header>
    <div class="wrapper">
      <TopSide />
      <nav class="tw-my-10 tw-text-neutral-700 tw-text-center tw-font-bold animate__animated animate__bounce">
        <RouterLink class="tw-mx-2" to="/">HOME</RouterLink>
        <RouterLink class="tw-mx-2" to="/login">LOGIN</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopSide from './components/TopSide.vue'
</script>
