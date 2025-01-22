<script setup>
import { computed } from "vue"

const props = defineProps(['id', 'faq'])
const emit = defineEmits(['setAccordionClass'])

const buttonClasses = computed(() => {
  return {
    true: 'mdi mdi-plus',
    false: 'mdi mdi-close'
  }[props.faq.state]
})

function setAccordionClass() {
  emit('setAccordionClass', props.id)
}
</script>


<template>
  <section class="flex border border-gray-300">
    <button @click="setAccordionClass()" class="flex flex-col bg-gray-200 p-4">
      <i :class="buttonClasses"></i>
    </button>

    <div class="p-4">
      <h1 class="text-xl font-semibold pb-2">
        {{ faq.question }}
      </h1>

      <p :class="faq.state ? 'h-24' : 'h-0'" class="text-sm duration-300 overflow-y-hidden">
        {{ faq.answer }}
      </p>

    </div>
  </section>
</template>


<style lang="scss" scoped></style>
