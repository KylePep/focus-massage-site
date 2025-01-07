<template>
  <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
    <div>
      <div class="text-6xl font-black">
        <slot name="time" />
      </div>
      <p class="text-center">Minute</p>
    </div>
    <div class="border-b border-blue-500 w-1/2"></div>
    <div class="text-blue-500 text-2xl">
      <slot name="price" />
    </div>
  </div>
</template>
