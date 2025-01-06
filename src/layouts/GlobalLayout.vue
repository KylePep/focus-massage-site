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
      class="lg:h-32 flex justify-center items-end font-semibold lg:text-xl leading-tight space-x-3 max-w-7xl mx-auto py-6 px-4 lg:px-8 uppercase duration-1000">
      <slot name="header"></slot>
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


<style scoped></style>