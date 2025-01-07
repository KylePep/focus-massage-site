<script setup>
import '@splidejs/vue-splide/css/core';
import ReviewCard from "./ReviewCard.vue";
import { ref } from "vue";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";

const reviews = ref([
  {
    name: "Penny Beaird",
    title: "Financer",
    icon: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget pharetra lorem. Vestibulum dolor ipsum, cursus vel leo eget, fermentum venenatis lectus. Ut maximus ultrices."
  },
  {
    name: "Trisha Vangogh",
    title: "Stylist",
    icon: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed luctus nibh, nec fringilla est. In hac habitasse platea dictumst. Nunc hendrerit lectus tellus, eget."
  },
  {
    name: "Ken Maxly",
    title: "Entrepreneur",
    icon: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel fermentum justo. Fusce suscipit malesuada."
  }
])

</script>


<template>
  <Splide :has-track="false" aria-label="Customer Reviews" data-splide='{
      "type": "fade", 
      "rewind": true,
      "arrows": true, 
      "autoplay": true, 
      "interval": 30000, 
      "perPage": 1,
      "pagination": false
    }'>
    <SplideTrack>
      <template v-for="review in reviews" :key="review.name">
        <SplideSlide>
          <ReviewCard :review="review" />
        </SplideSlide>
      </template>
    </SplideTrack>
    <div class="splide__arrows relative lg:static mt-8">
      <button
        class="splide__arrow splide__arrow--prev mdi mdi-arrow-left text-4xl hover:text-blue-500 duration-300"></button>
      <button
        class="splide__arrow splide__arrow--next mdi mdi-arrow-right text-4xl hover:text-blue-500 duration-300"></button>
    </div>
  </Splide>
</template>


<style scoped></style>