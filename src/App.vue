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

<style>
:root {
  --main-height: calc(100vh - 32px - 64px);
  --color-fm-orange: rgb(249, 170, 140);
  --color-fm-pink: rgb(250, 227, 233);
  --color-fm-teal: rgb(83, 146, 161);
  --color-fm-blue: rgb(0, 78, 97);
}
</style>