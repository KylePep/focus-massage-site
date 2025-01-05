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
import { computed } from 'vue'
import { AppState } from './AppState'
import NavBar from "./components/NavBar.vue";

const appState = computed(() => AppState)
</script>

<style></style>