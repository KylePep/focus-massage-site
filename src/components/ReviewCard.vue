<script setup>
const props = defineProps(['review']);

</script>

<template>
  <div
    class="flex flex-col justify-center items-center bg-fm-teal text-fm-pink rounded-sm py-8 mx-4 space-y-4 lg:w-3/4 mx-auto">
    <div class="grid grid-cols-2 gap-4 h-24 w-full">
      <div class="flex justify-end">
        <img class="icon h-20 w-20 rounded-full object-cover object-center" :src="review.icon" alt="">
      </div>
      <div>
        <h1 class="text-xl font-semibold">{{ review.name }}</h1>
        <h2 class="text-sm font-light">{{ review.title }}</h2>
      </div>

    </div>
    <p class="h-24 font-light text-fm-pink text-center lg:text-xl lg:w-3/4">{{ review.content }}</p>
    <div class="flex">
      <i v-for="index in 5" class="mdi mdi-star text-3xl"
        :class="[index <= review.rating ? 'text-fm-orange' : 'text-fm-blue']"></i>
    </div>
  </div>
</template>


<style scoped>
.icon {
  overflow-clip-margin: unset;
}
</style>