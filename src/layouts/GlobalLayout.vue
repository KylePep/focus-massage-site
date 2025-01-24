<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isAtTop = ref(true);
const isPastHeader = ref(false);
const isAtBottom = ref(false);
const headerBottom = ref(0);
const footerTop = ref();

const updateHeaderBottom = () => {
  const header = document.querySelector("header");
  if (header) {
    headerBottom.value = header.offsetTop + header.offsetHeight;
  }
};

const updateFooterTop = () => {
  const footer = document.querySelector("footer");
  if (footer) {
    footerTop.value = footer.offsetHeight;
  }
};

const handleScroll = () => {
  const scrollY = Math.round(window.scrollY);
  isAtTop.value = scrollY <= 0;
  isPastHeader.value = scrollY > (headerBottom.value) / 3;
  isAtBottom.value = scrollY >= (document.body.scrollHeight - window.innerHeight - footerTop.value);
  console.log(isPastHeader.value, isAtBottom.value, document.body.scrollHeight - window.innerHeight - footerTop.value, scrollY)
};

onMounted(() => {
  updateFooterTop();
  updateHeaderBottom();
  window.addEventListener("resize", updateFooterTop); // Recalculate on window resize
  window.addEventListener("resize", updateHeaderBottom); // Recalculate on window resize
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateFooterTop);
  window.removeEventListener("resize", updateHeaderBottom);
  window.removeEventListener("scroll", handleScroll);
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

    <nav class="fixed duration-1000 w-full z-20" :class="isAtTop ? '-top-80' : 'top-0'">
      <slot name="nav"></slot>
    </nav>

    <header id="header">
      <slot name="header"></slot>
    </header>

    <main class="flex-1 min-h-screen">
      <slot />
    </main>

    <section v-if="route.name == 'ServiceDetails'" :class="isPastHeader && !isAtBottom ? 'right-0' : '-right-full'"
      class="hidden lg:block lg:fixed w-1/3 h-screen pt-24 duration-1000">
      <div class="flex flex-col h-full bg-white ms-8 z-20 p-4">
        <div class="flex font-bold text-xl pb-4">
          <h1 class="border-b-2 border-blue-500">
            Services
          </h1>
        </div>
        <ul class="space-y-4 pb-4">
          <li class="border-b">Financial Analysis</li>
          <li class="border-b">Business Consulting</li>
          <li class="border-b">Corporate Finance</li>
          <li class="border-b">Financial Planning</li>
          <li class="border-b">Business Growth</li>
          <li class="border-b">Wealth Management</li>
        </ul>

        <div class="flex font-bold text-xl pb-4">
          <h2 class="border-b-2 border-blue-500">
            Get In Touch
          </h2>
        </div>

        <div>
          <ul class="space-y-4">
            <li>Address: 2726 Avenue Papineau Montreal, QC, Canada</li>
            <li>Phone: 1-800-915-6270
            </li>
            <li>Email: info@example.com</li>
          </ul>
        </div>

        <div>
          <ul class="flex py-8 space-x-8">
            <li><i class="mdi mdi-twitter text-2xl"></i></li>
            <li><i class="mdi mdi-facebook text-2xl"></i></li>
            <li><i class="mdi mdi-pinterest text-2xl"></i></li>
            <li><i class="mdi mdi-linkedin text-2xl"></i></li>

          </ul>
        </div>
      </div>
    </section>

    <footer id="footer" class="">
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