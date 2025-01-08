<script setup>
import { RouterLink } from "vue-router";

const props = defineProps([
  'page'
])
</script>


<template>
  <section v-if="page == 'Home'"
    class="background-image grid grid-cols-2 min-h-screen bg-teal-500/50 lg:text-xl leading-tight duration-1000 py-16 px-4">
    <div class="vc-image-1 col-span-2 lg:col-span-1 flex flex-col justify-end">
      <img class="my-20 lg:mx-10"
        src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="">
    </div>
    <div class="col-span-2 lg:col-span-1 flex flex-col justify-around lg:justify-center space-y-12 lg:me-40">
      <h1 class="font-black font-sans text-4xl lg:text-6xl">
        Pain makes people change
      </h1>
      <p class="text-sm lg:text-xl font-normal text-gray-800">Massage has a positive effect on every medical
        condition we have
        looked at massage
        is to work
        and act on teh
        body with pressure.</p>
      <div>
        <RouterLink :to="{ name: 'About' }" class="bg-blue-500 text-white px-6 py-2 rounded-sm">
          About Us
        </RouterLink>
      </div>
    </div>

  </section>
</template>


<style scoped>
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(239, 239, 239, 0.9) 80%, rgba(239, 239, 239, 0.9)),
    url('https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.vc-image-1 img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}
</style>