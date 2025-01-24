<script setup></script>


<template>
  <div class="lg:w-1/2 px-4 mx-auto">
    <div class="relative border-b-2 border-fm-teal mb-10">
      <h2
        class="absolute inset-x-0 -top-5 lg:-top-6 w-fit px-4 lg:px-8 mx-auto font-semibold text-center text-nowrap bg-page text-2xl lg:text-4xl">
        <slot />
      </h2>
    </div>

    <div class="text-center text-gray-600 font-light">
      <slot name="subtitle" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>