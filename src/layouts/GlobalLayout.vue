<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const isAtTop = ref(0);

const handleScroll = () => {
  isAtTop.value = Math.round(window.scrollY);
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});
</script>


<template>
  <div class="relative flex flex-col bg-page min-h-screen overflow-x-hidden">

    <section class="bg-black text-white py-1 w-full">
      <div class="grid grid-cols-2 max-w-7xl mx-auto text-center lg:text-start">
        <div class="lg:flex col-span-2 lg:col-span-1">
          <div class="lg:border-r px-4 my-2">
            Email us: <span>email@exampleemail.com</span>
          </div>
          <div class="px-4 my-2">
            Call us: <span>1-234-567-8910</span>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-1 flex justify-center lg:justify-end items-center my-2">
          <a target="_blank" href="https://danawhalen.glossgenius.com/services"
            class="py-1 px-8 bg-white rounded text-black">
            Book an Appointment
          </a>
        </div>
      </div>

    </section>

    <nav>
      <slot name="nav"></slot>
    </nav>

    <nav class="fixed duration-1000 w-full z-20" :class="!isAtTop ? '-top-80' : 'top-0'">
      <slot name="nav"></slot>
    </nav>

    <header>
      <slot name="header"></slot>
    </header>

    <main class="flex-1 mt-10 lg:mt-14 min-h-screen">
      <slot />
    </main>

    <footer class="">
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