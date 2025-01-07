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
    "perPage": 3, 
    "breakpoints": {
      "640": { "perPage": 1 }
    }
  }'>
    <SplideSlide>
      <PricingCard>
        <template #time>30</template>
        <template #price>$65.00</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>48</template>
        <template #price>$75.00</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>60</template>
        <template #price>$90.00</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>90</template>
        <template #price>$120.00</template>
      </PricingCard>
    </SplideSlide>
    <SplideSlide>
      <PricingCard>
        <template #time>120</template>
        <template #price>$160.00</template>
      </PricingCard>
    </SplideSlide>
  </Splide>
</template>


<style lang="scss" scoped></style>