<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import AccordionFAQ from "./AccordionFAQ.vue";
import InfoOffCanvas from "./InfoOffCanvas.vue";

const props = defineProps(['service'])
</script>


<template>

  <SectionLayout width="base">
    <div class="grid grid-cols-4 gap-8 ">
      <section class="col-span-4 lg:col-span-3 space-y-8">
        <img :src="service.image" class="rounded-sm" :alt="service.title">

        <h1 class="text-4xl">{{ service.title }}</h1>
        <p class="font-light">{{ service.description }}</p>
        <div class="border border-gray-400 border-l-4 px-8 py-14">
          <p class="text-lg font-semibold text-gray-700">"{{ service.quote }}"</p>
        </div>

        <ul>
          <li v-for="benefit in service.benefits" :key="benefit">
            <span class="mdi mdi-star-four-points-circle-outline me-4"></span>{{ benefit }}
          </li>
        </ul>

        <AccordionFAQ :faqs="service.faqs" />

      </section>

      <section class="lg:hidden col-span-4">
        <InfoOffCanvas />
      </section>

    </div>
  </SectionLayout>

</template>


<style lang="scss" scoped></style>