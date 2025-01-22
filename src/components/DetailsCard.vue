<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import AccordionFAQ from "./AccordionFAQ.vue";

const props = defineProps(['service'])
</script>


<template>
  <SectionLayout width="base">
    <div class="grid grid-cols-4 gap-8">
      <section class="col-span-4 lg:col-span-3 space-y-8">
        <img :src="service.image" class="" :alt="service.title">

        <h1 class="text-4xl">{{ service.title }}</h1>
        <p class="font-light">{{ service.description }}</p>
        <div class="border border-gray-400 border-l-4 border-blue-500 px-8 py-16">
          <p>{{ service.quote }}</p>
        </div>

        <ul>
          <li v-for="benefit in service.benefits" :key="benefit">
            <span class="mdi mdi-star-four-points-circle-outline me-4"></span>{{ benefit }}
          </li>
        </ul>

        <AccordionFAQ :faqs="service.faqs" />

      </section>

      <!-- Green Section -->
      <section class="relative bg-green-200 col-span-4 lg:col-span-1">
        <!-- Sticky OtherStuff -->
        <div class="sticky top-32 bg-red-200 p-4">
          <h2 class="font-bold">OtherStuff</h2>
          <p>Additional information or content goes here.</p>
        </div>
      </section>

    </div>
  </SectionLayout>
</template>


<style lang="scss" scoped></style>