<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import SectionTitle from "./SectionTitle.vue";

</script>


<template>
  <SectionLayout width="base">
    <div class="space-y-16 mb-10">

      <SectionTitle>
        Your Specialist
        <template #subtitle>
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an cule dicta iriure at
          phaedrum.
        </template>
      </SectionTitle>

      <section class="grid grid-cols-3 ">
        <div class="relative col-span-3 lg:col-span-1 lg:col-start-2 p-4 text-center space-y-2 group">
          <img class="rounded-sm" src="/img/DanaHead.jpg" alt="Dana Whalen Massage Therapist">
          <h1 class="font-light">Registered Massage Therapist</h1>
          <h2 class="text-lg font-semibold">Dana Whalen</h2>
          <div class="absolute bottom-0 left-0 w-0 group-hover:w-full border-b-2 border-blue-500 duration-1000"></div>
        </div>
      </section>
    </div>
  </SectionLayout>
</template>


<style lang="scss" scoped></style>