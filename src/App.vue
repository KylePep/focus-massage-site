<template>
  <header class="sticky-top">
    Header
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { AppState } from './AppState'

const appState = computed(() => AppState)
</script>

<style></style>