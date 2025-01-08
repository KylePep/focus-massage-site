<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import CategoryCard from './CategoryCard.vue'</script>


<template>
  <SectionLayout width="base">
    <div class="grid grid-cols-3 gap-4">

      <CategoryCard>
        <template #icon>
          <MassageIcon />
        </template>
        <template #title>
          Massage Therapy
        </template>
        <template #content>
          Massage therapy is the manipulation of the soft tissues of the body including muscles,
          connective tissue,
          tendons, ligaments and joints.
        </template>
      </CategoryCard>

      <CategoryCard>
        <template #icon>
          <PhysioIcon />
        </template>
        <template #title>
          Physio Therapy
        </template>
        <template #content>
          Physiotherapists spend years studying how the body works, how injuries impact performance & how
          to recover and repair injured tissues.
        </template>
      </CategoryCard>

      <CategoryCard>
        <template #icon>
          <SpaIcon />
        </template>
        <template #title>
          Acupuncture
        </template>
        <template #content>
          Acupuncture is a form of alternative medicine in which thin needles are inserted into the body.
          It is a key component of medicine.
        </template>
      </CategoryCard>

    </div>
  </SectionLayout>
</template>


<style></style>