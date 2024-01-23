<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/">home</RouterLink>
        <RouterLink to="/sobre">sobre</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

