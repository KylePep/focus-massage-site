<script setup>
import { computed } from "vue"

const props = defineProps(['id', 'faq'])
const emit = defineEmits(['setAccordionClass'])

const buttonClasses = computed(() => {
  return {
    true: 'mdi mdi-close',
    false: 'mdi mdi-plus'
  }[props.faq.state]
})

function setAccordionClass() {
  emit('setAccordionClass', props.id)
}
</script>


<template>
  <section class="flex border border-fm-teal">
    <button @click="setAccordionClass()" class="flex flex-col bg-fm-blue p-4">
      <i :class="buttonClasses" class="text-fm-pink"></i>
    </button>

    <div class="p-4 bg-fm-teal text-fm-pink">
      <h1 class="lg:text-xl font-semibold pb-2">
        {{ faq.question }}
      </h1>

      <p :class="faq.state ? 'h-24' : 'h-0'" class="text-sm duration-300 overflow-y-hidden">
        {{ faq.answer }}
      </p>

    </div>
  </section>
</template>


<style lang="scss" scoped></style>
