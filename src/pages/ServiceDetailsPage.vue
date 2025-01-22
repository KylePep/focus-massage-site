<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { SERVICE_ITEMS } from "../data/index.js";

const services = ref(SERVICE_ITEMS)

const route = useRoute()

const serviceData = computed(() => {
  const serviceId = String(route.params.serviceId);
  return services.value[serviceId];
})
</script>


<template>
  <div class="space-y-16 lg:space-y-32">
    {{ serviceData }}
  </div>
</template>


<style lang="scss" scoped></style>