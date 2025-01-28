<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { SERVICE_ITEMS } from "../data/index.js";
import DetailsCard from "../components/DetailsCard.vue";

const services = ref(SERVICE_ITEMS)

const route = useRoute()

const serviceData = computed(() => {
  const serviceId = String(route.params.serviceId);
  return services.value[serviceId];
})
</script>


<template>
  <div class="space-y-24 lg:space-y-32 ">
    <DetailsCard :service="serviceData" />
  </div>
</template>


<style lang="scss" scoped></style>