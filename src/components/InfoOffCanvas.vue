<script setup>
import { useRoute } from "vue-router";
import { SERVICE_ITEMS } from "../data/index.js";
import { ref } from "vue";

const route = useRoute()
const services = ref(SERVICE_ITEMS)
</script>


<template>
  <div class="flex flex-col h-full bg-fm-teal lg:ms-8 z-20 p-4 text-fm-pink">
    <div class="flex font-bold text-xl pb-4">
      <h1 class="border-b-4 border-fm-orange pb-1 w-1/2">
        Services
      </h1>
    </div>

    <ul class="space-y-4 pb-4">
      <li v-for="service, index in services">
        <router-link :to="{ name: 'ServiceDetails', params: { serviceId: index } }"
          class="border-b-2 pb-1 hover:text-fm-orange"
          :class="route.params.serviceId == index ? 'border-fm-pink' : 'border-transparent'">
          {{ service.title }}
        </router-link>
      </li>
    </ul>

    <div class="flex font-bold text-xl pb-4">
      <h2 class="border-b-4 border-fm-orange pb-1 w-1/2">
        Get In Touch
      </h2>
    </div>

    <div class="w-1/2">
      <ul class=" space-y-4">
        <li class="font-bold text-base text-fm-pink">Address: <span class="font-normal text-sm text-fm-pink">1217 3rd
            St
            S Suite 105,
            Nampa, ID
            83651</span></li>
        <li class="font-bold text-base text-fm-pink">Phone: <span
            class="font-normal text-sm text-fm-pink">xxx-xxx-xxxx</span></li>
        <li class="font-bold text-base text-fm-pink">Email: <span
            class="font-normal text-sm text-fm-pink">email@emai.com</span></li>
      </ul>
    </div>

    <div>
      <ul class="flex py-8 space-x-8 text-white">
        <a target="_blank" href="https://www.facebook.com/profile.php?id=100090973550375&mibextid=ZbWKwL"
          class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-facebook text-xl"></i>
        </a>
        <a target="_blank" href="https://www.instagram.com/focusmassagebydana"
          class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-instagram text-xl"></i>
        </a>
        <a target="_blank" href="https://danawhalen.glossgenius.com/"
          class="bg-fm-blue rounded-full h-8 w-8 flex justify-center items-center">
          <i class="relative mdi mdi-alpha-g text-4xl"></i>
        </a>

      </ul>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>