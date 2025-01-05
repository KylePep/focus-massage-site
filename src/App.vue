<template>

  <GlobalLayout>
    <template #header>
      <NavBar />
    </template>


    <RouterView />

    <template #footer>
      Footer
    </template>

  </GlobalLayout>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView } from 'vue-router'

</script>

<style></style>