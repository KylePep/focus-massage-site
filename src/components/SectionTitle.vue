<script setup></script>


<template>
  <div class="lg:w-1/2 mx-auto">
    <div class="relative border-b-2 border-blue-500 mb-10">
      <h2
        class="w-fit px-8 lg:w-1/2 absolute inset-x-0 -top-5 lg:-top-6 mx-auto text-center bg-page text-2xl lg:text-4xl">
        <slot />
      </h2>
    </div>

    <div class="text-center">
      <slot name="subtitle" />
    </div>
  </div>
</template>


<style lang="scss" scoped></style>