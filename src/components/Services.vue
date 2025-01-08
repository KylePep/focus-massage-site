<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import AromaIcon from "./Icons/AromaIcon.vue";
import ExerciseIcon from "./Icons/ExerciseIcon.vue";
import PhysioTherapyIcon from "./Icons/PhysioTherapyIcon.vue";
import RelaxIcon from "./Icons/RelaxIcon.vue";
import SportsRehabIcon from "./Icons/SportsRehabIcon.vue";
import VehicleIcon from "./Icons/VehicleIcon.vue";
import SectionTitle from "./SectionTitle.vue";
import ServiceCard from "./ServiceCard.vue";

</script>


<template>
  <SectionLayout width="base">

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
            <SportsRehabIcon />
          </template>
          <template #title>
            Sports Rehabilitation
          </template>
          <template #content>
            Aromatherapy uses plant materials and arom atic plant oils, including essential oils. It can be offered as a
            complementary therapy.
          </template>
        </ServiceCard>

        <ServiceCard class="hidden lg:flex">
          <template #icon>
            <ExerciseIcon />
          </template>
          <template #title>
            Home Care Physiotherapy
          </template>
          <template #content>
            Physiotherapists spend years studying how the body works, how injuries impact performance & how to recover
            and
            repair injured tissues.
          </template>
        </ServiceCard>

        <ServiceCard class="hidden lg:flex">
          <template #icon>
            <AromaIcon />
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
            <PhysioTherapyIcon />
          </template>
          <template #title>
            Physiotherapy
          </template>
          <template #content>
            A personal injury from vehicle accident trauma is common many times effects of an vehicle injury are delayed
            or subtle.
          </template>
        </ServiceCard>

        <ServiceCard class="hidden lg:flex">
          <template #icon>
            <RelaxIcon />
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
            <VehicleIcon />
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
  </SectionLayout>

</template>


<style lang="scss" scoped></style>