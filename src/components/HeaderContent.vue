<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps([
  'page'
]);
const isBgLoaded = ref(false);
const isImgLoaded = ref(false);
</script>

<template>
  <section v-if="page == 'Home'"
    class="relative grid grid-cols-2 min-h-screen bg-white lg:text-xl leading-tight duration-1000 py-16 px-4">
    <!-- Background container -->
    <div class="absolute inset-0 bg-gray-300 transition-opacity duration-500"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(239, 239, 239, 0.9) 80%, rgba(239, 239, 239, 0.9)), url(https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }"
      :class="{ 'opacity-0': isBgLoaded, 'opacity-100': !isBgLoaded }" @load="isBgLoaded = true">
    </div>

    <div class=" col-span-2 lg:col-span-1 flex flex-col justify-end relative z-10">
      <!-- Temporary placeholder while image loads -->
      <div v-if="!isImgLoaded" class="w-full h-full my-20 lg:px-10">
        <i class="vc-image-1 block w-full h-full bg-white animate-pulse"></i>
      </div>

      <!-- Actual image -->
      <img v-show="isImgLoaded"
        class="vc-image-1 w-full h-full my-20 lg:px-10 transition-opacity duration-500 opacity-0"
        :class="{ 'opacity-100': isImgLoaded }"
        src="https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" @load="isImgLoaded = true" />
    </div>

    <div
      class="col-span-2 lg:col-span-1 flex flex-col justify-around lg:justify-center space-y-12 lg:me-40 relative z-10">
      <h1 class="font-black font-sans text-4xl lg:text-6xl">
        Pain makes people change
      </h1>
      <p class="text-sm lg:text-xl font-normal text-gray-800">
        Massage has a positive effect on every medical condition we have
        looked at massage is to work and act on the body with pressure.
      </p>
      <div>
        <RouterLink :to="{ name: 'About' }" class="bg-blue-500 text-white px-6 py-2 rounded-sm">
          About Us
        </RouterLink>
      </div>
    </div>
  </section>

  <section v-if="page == 'About'"
    class="relative grid grid-cols-2 bg-white lg:text-xl leading-tight duration-1000 py-32 px-4">
    <!-- Background container -->
    <div
      class="background-image flex flex-col justify-center items-center absolute inset-0 bg-gray-300 transition-opacity duration-500"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(128, 128, 128, 0.6) 80%, rgba(128, 128, 128, 0.6)), url(https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }"
      :class="{ 'opacity-0': isBgLoaded, 'opacity-100': !isBgLoaded }" @load="isBgLoaded = true">
      <h1 class="font-bold text-2xl lg:text-4xl text-white">About Focus Massage</h1>
      <h2 class="flex text-white mt-4 gap-2">
        <RouterLink :to="{ name: 'Home' }" class="border-b-2 border-transparent hover:border-white">Home</RouterLink> /
        <span>About</span>
      </h2>
    </div>

  </section>

  <section v-if="page == 'Service'"
    class="relative grid grid-cols-2 bg-white lg:text-xl leading-tight duration-1000 py-32 px-4">
    <!-- Background container -->
    <div
      class="background-image flex flex-col justify-center items-center absolute inset-0 bg-gray-300 transition-opacity duration-500"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(128, 128, 128, 0.6) 80%, rgba(128, 128, 128, 0.6)), url(https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }"
      :class="{ 'opacity-0': isBgLoaded, 'opacity-100': !isBgLoaded }" @load="isBgLoaded = true">
      <h1 class="font-bold text-2xl lg:text-4xl text-white">Services</h1>
      <h2 class="flex text-white mt-4 gap-2">
        <RouterLink :to="{ name: 'Home' }" class="border-b-2 border-transparent hover:border-white">Home</RouterLink> /
        <span>Service</span>
      </h2>
    </div>

  </section>

  <section v-if="page == 'ServiceDetails'"
    class="relative grid grid-cols-2 bg-white lg:text-xl leading-tight duration-1000 py-32 px-4">
    <!-- Background container -->
    <div
      class="background-image flex flex-col justify-center items-center absolute inset-0 bg-gray-300 transition-opacity duration-500"
      :style="{ backgroundImage: 'linear-gradient(to bottom, rgba(128, 128, 128, 0.6) 80%, rgba(128, 128, 128, 0.6)), url(https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }"
      :class="{ 'opacity-0': isBgLoaded, 'opacity-100': !isBgLoaded }" @load="isBgLoaded = true">
      <h1 class="font-bold text-2xl lg:text-4xl text-white">Services Details</h1>
      <h2 class="flex text-white mt-4 gap-2">
        <RouterLink :to="{ name: 'Home' }" class="border-b-2 border-transparent hover:border-white">Home</RouterLink> /
        <RouterLink :to="{ name: 'Service' }" class="border-b-2 border-transparent hover:border-white">Service
        </RouterLink> /
        <span>Details</span>
      </h2>
    </div>

  </section>
</template>

<style scoped>
.background-image {
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.vc-image-1 {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}
</style>