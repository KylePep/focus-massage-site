<template>
  <div class="flex flex-col justify-center items-center bg-fm-teal border border-gray-300 shadow-lg py-4 m-4 space-y-2">
    <div>
      <div class="text-5xl lg:text-6xl font-black text-center text-fm-pink">
        <slot name="time" />
      </div>
      <p class="text-center font-light text-fm-pink">
        <slot name="type" />
      </p>
    </div>
    <div class="border-b border-fm-orange w-1/4 lg:w-1/2"></div>
    <div class="text-fm-pink text-2xl">
      <slot name="price" />
    </div>
  </div>
</template>
