<template>
  <div class="flex flex-col justify-center items-center bg-white border border-gray-300 shadow-lg py-4 m-4 space-y-2">
    <div>
      <div class="text-5xl lg:text-6xl font-black text-center">
        <slot name="time" />
      </div>
      <p class="text-center font-light">
        <slot name="type" />
      </p>
    </div>
    <div class="border-b border-blue-500 w-1/4 lg:w-1/2"></div>
    <div class="text-blue-500 text-2xl">
      <slot name="price" />
    </div>
  </div>
</template>
