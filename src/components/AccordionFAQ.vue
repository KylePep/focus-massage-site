<script setup>
import { ref } from "vue";


const accordionState = ref([false, true, true])

function buttonClasses(state) {
  return {
    true: 'mdi mdi-plus',
    false: 'mdi mdi-close'
  }[state]
}

function setAccordionClass(index) {

  accordionState.value.forEach((a, i) => {
    if (i != index) {
      accordionState.value[i] = false;
    }
  });

  accordionState.value[index] = !accordionState.value[index]

}

</script>


<template>
  <div>

    <section class="flex">
      <button @click="setAccordionClass(0)" class="bg-gray-200 px-4">
        <i :class="buttonClasses(accordionState[0])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>
        <p v-show="accordionState[0]" class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </section>

    <section class="flex">
      <button @click="setAccordionClass(1)" class="bg-gray-200 px-4">
        <i :class="buttonClasses(accordionState[1])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>
        <p v-show="accordionState[1]" class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </section>

    <section class="flex">
      <button @click="setAccordionClass(2)" class="bg-gray-200 px-4">
        <i :class="buttonClasses(accordionState[2])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>
        <p v-show="accordionState[2]" class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </section>


  </div>
</template>


<style scoped></style>