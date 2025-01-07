<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import NavLink from "./NavLink.vue";
import { RouterLink, useRoute } from "vue-router";
import ResponsiveNavLink from "./ResponsiveNavLink.vue";

const route = useRoute();

const showingNavigationDropdown = ref(false);

const isAtTop = ref(0);

const handleScroll = () => {
  isAtTop.value = Math.round(window.scrollY);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
});
</script>


<template>

  <nav class="duration-1000 py-4 w-full bg-white">

    <!-- Primary Navigation Menu -->
    <div class="relative flex justify-between h-16 mx-auto px-4 sm:px-6 lg:px-8 ">

      <!-- Logo -->
      <div class="flex items-center w-full -my-2">
        <RouterLink :to="{ name: 'Home' }" class="inline-flex items-center px-1 py-1 me-4">
          <FMIcon class="duration-1000 bg-fm-blue text-fm-orange rounded-full h-16 w-16 p-2" />
        </RouterLink>
        <h1 class="font-serif text-2xl lg:text-4xl">Focus Massage <span class="hidden lg:inline-flex">by Dana</span>
        </h1>
      </div>

      <!-- Navigation Links -->
      <div class="hidden space-x-8 sm:-my-2 sm:flex me-4">
        <NavLink href="Home" :active="route.name == 'Home'">
          Home
        </NavLink>
      </div>

      <div class="hidden space-x-8 sm:-my-2 sm:flex me-4">
        <NavLink href="About" :active="route.name == 'About'">
          About
        </NavLink>
      </div>
      <!-- Navigation Links -->
      <div class="hidden space-x-8 sm:-my-2 sm:flex me-4">
        <NavLink href="About" :active="route.name == 'About'">
          Book
        </NavLink>
      </div>
      <!-- Navigation Links -->
      <div class="hidden space-x-8 sm:-my-2 sm:flex me-4">
        <NavLink href="About" :active="route.name == 'About'">
          Contact
        </NavLink>
      </div>


      <!-- Hamburger -->
      <div class="-me-2 flex items-center sm:hidden">
        <button aria-label="nav drop down" @click="showingNavigationDropdown = !showingNavigationDropdown"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{
              hidden: showingNavigationDropdown,
              'inline-flex': !showingNavigationDropdown,
            }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{
              hidden: !showingNavigationDropdown,
              'inline-flex': showingNavigationDropdown,
            }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">

        <ResponsiveNavLink href="About" :active="route.name == 'About'">
          About
        </ResponsiveNavLink>
        <ResponsiveNavLink href="About" :active="route.name == 'About'">
          Book
        </ResponsiveNavLink>
        <ResponsiveNavLink href="About" :active="route.name == 'About'">
          Contact
        </ResponsiveNavLink>
      </div>

    </div>

  </nav>

  <button @click="scrollToTop" :class="isAtTop ? 'right-0' : '-right-40'"
    class="duration-1000 fixed bottom-0 m-8 bg-blue-500 h-8 w-8 lg:h-12 lg:w-12 lg:text-3xl rounded-full mdi mdi-arrow-up text-white"></button>
</template>


<style lang="scss" scoped></style>