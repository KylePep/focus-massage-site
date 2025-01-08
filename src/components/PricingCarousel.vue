<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/skyblue';
import PricingCard from './PricingCard.vue'



</script>


<template>

  <Splide class="pb-10" aria-label="Therapy Pricing" data-splide='{
    "type": "loop", 
    "arrows": false, 
    "autoplay": true, 
    "interval": 3000, 
    "perPage": 2, 
    "breakpoints": {
      "640": { "perPage": 1 }
    }
  }'>
    <SplideSlide>
      <PricingCard>
        <template #time>60</template>
        <template #type>Minute Massage</template>
        <template #price>$80</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>90</template>
        <template #type>Minute Massage</template>
        <template #price>$110</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>120</template>
        <template #type>Minute Massage</template>
        <template #price>$160</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>6 X 60</template>
        <template #type>Bundle Massage Bundle</template>
        <template #price>Price Varies</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>6 x 90</template>
        <template #type>Bundle Massage Bundle</template>
        <template #price>Price Varies</template>
      </PricingCard>
    </SplideSlide>
  </Splide>
</template>


<style lang="scss" scoped></style>