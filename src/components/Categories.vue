<script setup>
import CategoryCard from './CategoryCard.vue'</script>


<template>

  <div class=" grid grid-cols-3 gap-4">

    <CategoryCard>
      <template #icon>
        <FMIcon />
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
        <FMIcon />
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
        <FMIcon />
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
</template>


<style></style>