<script setup></script>


<template>
  <div
    class="background-image-blue bg-blue-500 min-h-24 flex flex-col lg:flex-row lg:items-center px-4 lg:px-36 py-16 lg:py-24">
    <div>
      <h1 class="text-white lg:text-2xl mb-1">New Client Special Offer</h1>
      <h2 class="text-white text-2xl lg:text-4xl">For your convenience, you can book your appointment</h2>
    </div>
    <div class="lg:mx-auto mt-8">
      <a target="_blank" href="https://danawhalen.glossgenius.com/services"
        class="w-full bg-white px-6 py-2 rounded-sm lg:text-xl">
        Book an Appointment
      </a>
    </div>
  </div>
</template>


<style scoped>
.background-image-blue {
  background-image:
    linear-gradient(to bottom, rgba(0, 135, 197, 0.8) 80%, rgba(0, 135, 197, 0.8)),
    url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>