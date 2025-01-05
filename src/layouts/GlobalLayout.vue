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

    <nav>
      <slot name="nav"></slot>
    </nav>

    <header
      class="h-40 lg:h-32 flex justify-center items-end font-semibold lg:text-xl leading-tight space-x-3 max-w-7xl mx-auto py-6 px-4 lg:px-8 uppercase duration-1000">
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