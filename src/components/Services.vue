<script setup>
import SectionTitle from "./SectionTitle.vue";
import ServiceCard from "./ServiceCard.vue";

</script>


<template>
  <div class="space-y-8">
    <SectionTitle>
      Our Services
      <template #subtitle>
        Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an cule dicta iriure at
        phaedrum.
      </template>
    </SectionTitle>

    <section class="grid grid-cols-3 gap-4">
      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Sports Rehabilitation
        </template>
        <template #content>
          Aromatherapy uses plant materials and arom atic plant oils, including essential oils. It can be offered as a
          complementary therapy.
        </template>
      </ServiceCard>

      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Home Care Physiotherapy
        </template>
        <template #content>
          Physiotherapists spend years studying how the body works, how injuries impact performance & how to recover and
          repair injured tissues.
        </template>
      </ServiceCard>

      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Aroma Therapy
        </template>
        <template #content>
          Aromatherapy uses plant materials and arom atic plant oils, including essential oils. It can be offered as a
          complementary therapy.
        </template>
      </ServiceCard>

      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Physiotherapy
        </template>
        <template #content>
          A personal injury from vehicle accident trauma is common many times effects of an vehicle injury are delayed
          or subtle.
        </template>
      </ServiceCard>

      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Relaxation Massage
        </template>
        <template #content>
          This type of massage treatment is strictly for the purposes of rest and relaxation. massage technique is not
          designed for therapy.
        </template>
      </ServiceCard>

      <ServiceCard>
        <template #icon>
          <FMIcon />
        </template>
        <template #title>
          Vehicle Injury Treatment
        </template>
        <template #content>
          A personal injury from vehicle accident trauma is common many times effects of an vehicle injury are delayed
          or subtle.
        </template>
      </ServiceCard>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>