<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(['id']);

</script>
<template>
  <div
    class="pointer- group card-bg col-span-3 lg:col-span-1 flex flex-col justify-around text-center space-y-4 p-4 hover:bg-fm-teal/20 duration-1000 relative overflow-hidden">
    <i
      class="relative h-16 w-16 mx-auto text-fm-blue group-hover:translate-y-12 group-hover:text-transparent  duration-1000">
      <slot name="icon" />
    </i>
    <h2 class="relative font-semibold group-hover:-translate-y-12  duration-1000">
      <slot name="title" />
    </h2>
    <p class="relative text-sm group-hover:-translate-y-12 duration-1000">
      <slot name="content" />
    </p>

    <router-link :to="{ name: 'ServiceDetails', params: { serviceId: props.id } }"
      class="relative flex justify-center z-10 text-lg font-black group-hover:-translate-y-6 text-transparent group-hover:text-fm-teal duration-1000 py-4">
      Read more
    </router-link>

    <i class="absolute -right-16 -bottom-16 h-64 w-64 text-transparent group-hover:text-black/10 duration-1000">
      <slot name="icon" />
    </i>
    <div class="absolute bottom-0 left-0 w-0 group-hover:w-full border-b-2 border-fm-blue duration-1000"></div>
  </div>
</template>

<style lang="scss" scoped></style>