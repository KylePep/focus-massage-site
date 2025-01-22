<script setup>
import { ref } from "vue";
import FAQCard from "./FAQCard.vue";

const props = defineProps(['faqs'])
const faqList = ref(props.faqs)

function setAccordionClass(index) {
  faqList.value.forEach((a, i) => {
    if (i != index) {
      faqList.value[i].state = false;
    } else {
      faqList.value[i].state = !faqList.value[index].state
    }
  });
}

</script>


<template>
  <div class="min-h-72 space-y-4">

    <FAQCard v-for="faq, index in faqs" :key="index" :id="index" :faq="faq" @setAccordionClass="setAccordionClass" />

  </div>
</template>


<style scoped></style>