<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import AccordionFAQ from "./AccordionFAQ.vue";
import NewClientOffer from "./NewClientOffer.vue";
import { FAQ_ITEMS } from "../data/index.js";
import { ref } from "vue";

const faqs = ref(FAQ_ITEMS)

</script>


<template>
  <div>
    <NewClientOffer />
    <SectionLayout width="base">

      <div class="grid grid-cols-2 py-12 lg:px-4">

        <section class="image-wrapper col-span-2 lg:col-span-1 h-96 space-y-4 px-4 my-12">
          <div class="background-image vc-image-1 relative h-full">

          </div>
        </section>

        <section class=" col-span-2 lg:col-span-1 space-y-4 px-4 lg:px-8">
          <h2 class="text-4xl font-semibold text-gray-600 pb-2">
            Frequently Asked Questions
          </h2>
          <AccordionFAQ :faqs />
        </section>

      </div>
    </SectionLayout>
  </div>
</template>


<style scoped>
.background-image {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 80%, rgba(255, 255, 255, 0.25)),
    url('https://images.unsplash.com/photo-1617952986600-802f965dcdbc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}

.image-wrapper {
  position: relative;
  display: inline-block;
}

.image-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--color-fm-orange));
  opacity: 0.25;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  /* Match the image's border-radius */
  z-index: 0;
}

.vc-image-1 {
  border-radius: 70% 30% 30% 70% / 70% 70% 30% 30% !important;
}
</style>