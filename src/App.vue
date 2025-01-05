<template>
  <header class="sticky-top">
    <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from "./components/NavBar.vue";

</script>

<style></style>