<script setup></script>


<template>
  <div class="relative flex flex-col justify-center text-center h-56">
    <div class="h-16 w-16 text-fm-blue mx-auto mb-8">
      <slot name="icon"></slot>
    </div>

    <div class="relative flex justify-center">
      <div
        class="bubble-shadow absolute z-10 bg-white rounded-lg px-16 font-normal focus:outline-none after:content-[''] after:absolute after:w-0 after:h-0 after:border-4 after:border-white after:-top-1 after:left-1/2 after:-translate-x-1/2 after:rotate-45 h-32 flex flex-col">
        <p class="text-4xl font-black text-fm-teal mt-6">
          <slot name="value"></slot>
        </p>
        <p class="text-gray-600 mt-2 text-nowrap">
          <slot name="title"></slot>
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.bubble-shadow {

  -webkit-box-shadow: 0px 5px 8px 0px rgba(79, 79, 79, 0.5), 0px -5px 8px 0px rgba(79, 79, 79, 0.5);
  -moz-box-shadow: 0px 5px 8px 0px rgba(79, 79, 79, 0.5), 0px -5px 8px 0px rgba(79, 79, 79, 0.5);
  box-shadow: 0px 5px 8px 0px rgba(79, 79, 79, 0.5), 0px -5px 8px 0px rgba(79, 79, 79, 0.5);

}
</style>