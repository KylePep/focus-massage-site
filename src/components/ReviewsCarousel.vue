<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/skyblue';
import ReviewCard from "./ReviewCard.vue";
import { ref } from "vue";

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

  <Splide class="pb-10" aria-label="Customer Reviews" data-splide='{
    "type": "fade", 
    "rewind": true,
    "arrows": true, 
    "autoplay": true, 
    "interval": 30000, 
    "perPage": 1,
    "pagination": false
  }'>
    <template v-for="review in reviews" :key="review.name">
      <SplideSlide>
        <ReviewCard :review="review" />
      </SplideSlide>
    </template>
  </Splide>
</template>


<style lang="scss" scoped></style>