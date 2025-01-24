<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import AccordionFAQ from "./AccordionFAQ.vue";
import InfoOffCanvas from "./InfoOffCanvas.vue";

const props = defineProps(['service'])
</script>


<template>

  <SectionLayout width="base">
    <div class="grid grid-cols-4 lg:gap-32 ">
      <section class="col-span-4 lg:col-span-3 space-y-16">
        <img :src="service.image" class="rounded-sm" :alt="service.title">

        <h1 class="text-4xl">{{ service.title }}</h1>
        <p class="font-light">{{ service.description }}</p>
        <div class="border-l-8 border-blue-400 outline outline-2 outline-gray-300 outline-offset-0 px-8 py-14">
          <p class="text-lg font-semibold text-gray-700">"{{ service.quote }}"</p>
        </div>

        <ul class="space-y-4">
          <li v-for="benefit in service.benefits" :key="benefit" class="flex items-start gap-2">
            <span class="mdi mdi-star-four-points-circle-outline text-blue-500 flex-shrink-0"></span>
            <span class="flex-1 font-light lg:font-semibold text-gray-700">{{ benefit }}</span>
          </li>
        </ul>

        <AccordionFAQ :faqs="service.faqs" />

      </section>

      <section class="col-span-4 lg:col-span-3 flex flex-col space-y-4 my-32">
        <h3 class="text-2xl lg:text-4xl font-semibold mb-4 text-center">
          Make an Appointment
        </h3>
        <div class="flex-1 flex flex-col justify-around space-y-8 text-center">
          <a href="https://danawhalen.glossgenius.com/services" class="w-full flex justify-center">
            <button
              class="bg-blue-500 px-8 lg:px-16 py-2 lg:py-4 text-lg lg:text-4xl text-white font-black rounded hover:bg-blue-800 duration-300">Book
              Now</button>
          </a>
          <div class="flex flex-col items-center">
            <p class="font-semibold text-gray-500 lg:-mb-8">Powered by</p>
            <img
              src="https://kellercenter.princeton.edu/sites/default/files/styles/free_style/public/images/logo-horizontal62.png?itok=vKd0LoV7"
              alt="Gloss Genius Logo">
          </div>
        </div>
      </section>

      <!-- <section class="lg:hidden col-span-4">
        <InfoOffCanvas />
      </section> -->

    </div>
  </SectionLayout>

</template>


<style lang="scss" scoped></style>