<template>

  <GlobalLayout>
    <template #nav>
      <NavBar />
    </template>

    <template #header>
      {{ route.name }}
    </template>


    <RouterView />

    <template #footer>
      <FooterContent />
    </template>

  </GlobalLayout>
</template>

<script setup>
import FooterContent from "./components/FooterContent.vue";
import NavBar from "./components/Nav/NavBar.vue";
import GlobalLayout from './layouts/GlobalLayout.vue'
import { RouterView, useRoute } from 'vue-router'

const route = useRoute();
</script>

<style></style>