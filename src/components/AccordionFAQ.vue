<script setup>
import { nextTick, ref } from "vue";


const accordionState = ref([true, false, false])

function buttonClasses(state) {
  return {
    true: 'mdi mdi-plus',
    false: 'mdi mdi-close'
  }[state]
}

function setAccordionClass(index) {
  const newValues = []
  accordionState.value.forEach((a, i) => {
    if (i != index) {
      newValues[i] = false;
    } else {
      newValues[i] = !accordionState.value[index]
    }
  });

  nextTick(() =>
    accordionState.value = newValues)

}

</script>


<template>
  <div class="min-h-72 space-y-4">


    <section class="flex border border-gray-300">
      <button @click="setAccordionClass(0)" class="flex flex-col bg-gray-200 p-4">
        <i :class="buttonClasses(accordionState[0])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>

        <p :class="accordionState[0] ? 'h-24' : 'h-0'" class="text-sm duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>

      </div>
    </section>

    <section class="flex border border-gray-300">
      <button @click="setAccordionClass(1)" class="flex flex-col bg-gray-200 p-4">
        <i :class="buttonClasses(accordionState[1])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>

        <p :class="accordionState[1] ? 'h-24' : 'h-0'" class="text-sm duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>

      </div>
    </section>

    <section class="flex border border-gray-300">
      <button @click="setAccordionClass(2)" class="flex flex-col bg-gray-200 p-4">
        <i :class="buttonClasses(accordionState[2])"></i>
      </button>

      <div class="p-4">
        <h1 class="text-xl font-semibold pb-2">
          Question
        </h1>

        <p :class="accordionState[2] ? 'h-24' : 'h-0'" class="text-sm duration-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>

      </div>
    </section>


  </div>
</template>


<style scoped>
/* Define the transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Prevent overflow clipping during transition */
p {
  overflow: hidden;
}
</style>