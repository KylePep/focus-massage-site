<script setup>
import { nextTick, ref } from "vue";
import FAQCard from "./FAQCard.vue";

const faqs = ref([
  { question: 'What is physiotherapy and how can I benefit?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', state: true },
  { question: 'What is involved in the initial consultation?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', state: false },
  { question: 'Does insurance cover your services?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', state: false },
  { question: 'What if I was injured through a car accident?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', state: false },
])

function setAccordionClass(index) {
  // const newValues = []
  faqs.value.forEach((a, i) => {
    if (i != index) {
      faqs.value[i].state = false;
    } else {
      faqs.value[i].state = !faqs.value[index].state
    }
  });

  // nextTick(() =>
  //   faqs.value = newValues)

}

</script>


<template>
  <div class="min-h-72 space-y-4">

    <FAQCard v-for="faq, index in faqs" :key="index" :id="index" :faq="faq" @setAccordionClass="setAccordionClass" />

  </div>
</template>


<style scoped>
/* Define the transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Prevent overflow clipping during transition */
p {
  overflow: hidden;
}
</style>