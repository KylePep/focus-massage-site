<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isAtTop = ref(0);

const handleScroll = () => {
  isAtTop.value = Math.round(window.scrollY);
  console.log(isAtTop.value)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});
</script>


<template>
  <div class="relative flex flex-col bg-page min-h-screen">

    <section class="bg-black text-white py-1 w-full">
      <div class="grid grid-cols-2 max-w-7xl mx-auto text-center lg:text-start">
        <div class="lg:flex col-span-2 lg:col-span-1">
          <div class="lg:border-r px-4 my-2">
            Email us: <span>email@email.com</span>
          </div>
          <div class="px-4 my-2">
            Call us: <span>x-xxx-xxx-xxxx</span>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end">
          <button class="py-1 px-8 bg-white rounded text-black">Book an Appointment</button>
        </div>
      </div>

    </section>

    <nav>
      <slot name="nav"></slot>
    </nav>

    <nav class="fixed duration-1000 w-full" :class="!isAtTop ? '-top-80' : 'top-0'">
      <slot name="nav"></slot>
    </nav>

    <header
      class="background-image grid grid-cols-2 min-h-screen bg-teal-500/50 lg:text-xl leading-tight duration-1000 py-10 px-4">
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
          body with pressure</p>
        <!-- <slot name="header"></slot> -->
        <div>
          <button class="bg-blue-500 text-white px-6 py-2 rounded-sm">About Us</button>
        </div>
      </div>

    </header>

    <main class="grid grid-cols-6 flex-1 mt-10 lg:mt-14">
      <div class="col-span-4 col-start-2">
        <slot />
      </div>
    </main>

    <footer class="mt-20">
      <slot name="footer"></slot>
    </footer>

  </div>
</template>


<style scoped>
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 80%, rgba(255, 255, 255, 0.9)),
    url('https://images.unsplash.com/photo-1542848284-8afa78a08ccb?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.vc-image-1 img {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70% !important;
}
</style>