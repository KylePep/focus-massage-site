<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import ReviewsCarousel from "./ReviewsCarousel.vue";
import SectionTitle from "./SectionTitle.vue";

</script>


<template>
  <SectionLayout width="base">

    <div class="space-y-8">
      <SectionTitle>
        What my clients say
      </SectionTitle>

      <ReviewsCarousel />
    </div>
  </SectionLayout>
</template>


<style lang="scss" scoped></style>