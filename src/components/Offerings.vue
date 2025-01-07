<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import PricingCarousel from './PricingCarousel.vue'

</script>


<template>
  <SectionLayout width="xl">
    <div
      class="background-image-blue bg-blue-500 min-h-24 flex flex-col lg:flex-row items-center px-4 lg:px-36 py-16 lg:py-24">
      <div>
        <h1 class="text-white lg:text-2xl mb-1">New Client Special Offer</h1>
        <h2 class="text-white text-2xl lg:text-4xl">For your convenience, you can book your appointment</h2>
      </div>
      <div class="lg:mx-auto mt-8">
        <RouterLink :to="{ name: 'About' }" class="bg-white px-6 py-2 rounded-sm lg:text-xl">Book an Appointment
        </RouterLink>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <section class=" col-span-2 lg:col-span-1 space-y-4 bg-white lg:ps-48 py-24 lg:pe-8 px-4">
        <h1 class="text-3xl font-semibold">
          <span class="text-2xl"><mark class="bg-transparent text-blue-500">Benefits</mark> of</span><br>
          Registered Massage Therapy
        </h1>
        <p class="font-light">There are remarkable benefits to be achieved through regular massage therapy treatments
          from a Registered
          Massage Therapist. Massage therapy can be an important part of your health maintenance plan.</p>
        <ul>
          <li class="text-blue-500"><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Reducing or
            eliminating pain</li>
          <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving joint mobility</li>
          <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Circulatory problems</li>
          <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Improving lymphatic drainage</li>
          <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>reducing muscular tension</li>
          <li><span class="mdi mdi-star-four-points-circle-outline me-4"></span>Post-surgical rehabilitation</li>
        </ul>
      </section>
      <section class="background-image-white col-span-2 lg:col-span-1 space-y-4 lg:pe-48 py-24 lg:ps-8 px-4">
        <h2 class="text-3xl font-semibold">
          Therapy
          <mark class="bg-transparent text-blue-500">Rates</mark>
        </h2>
        <p class="font-light">New and returning clients are encouraged to book a massage appointment online by clicking
          the book an
          appointment button</p>
        <div>
          <p class="text-lg font-semibold">Rates (Reducing or eliminating pain)</p>
          <PricingCarousel />
        </div>
      </section>
    </div>
  </SectionLayout>
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

.background-image-white {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 80%, rgba(255, 255, 255, 0.95)),
    url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>