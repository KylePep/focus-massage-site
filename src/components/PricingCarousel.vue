<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/skyblue';



</script>


<template>

  <Splide class="pb-10" aria-label="My Favorite Images" data-splide='{
    "type": "loop", 
    "arrows": false, 
    "autoplay": true, 
    "interval": 3000, 
    "perPage": 3, 
    "breakpoints": {
      "640": { "perPage": 1 }
    }
  }'>
    <SplideSlide>
      <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
        <div>
          <div class="text-6xl font-black">
            30
          </div>
          <p class="text-center">Minute</p>
        </div>
        <div class="border-b border-blue-500 w-1/2"></div>
        <div class="text-blue-500 text-2xl">$65.00</div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
        <div>
          <div class="text-6xl font-black">
            45
          </div>
          <p class="text-center">Minute</p>
        </div>
        <div class="border-b border-blue-500 w-1/2"></div>
        <div class="text-blue-500 text-2xl">$75.00</div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
        <div>
          <div class="text-6xl font-black">
            60
          </div>
          <p class="text-center">Minute</p>
        </div>
        <div class="border-b border-blue-500 w-1/2"></div>
        <div class="text-blue-500 text-2xl">$90.00</div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
        <div>
          <div class="text-6xl font-black">
            90
          </div>
          <p class="text-center">Minute</p>
        </div>
        <div class="border-b border-blue-500 w-1/2"></div>
        <div class="text-blue-500 text-2xl">$120.00</div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div class="flex flex-col justify-center items-center bg-white shadow-lg py-4 m-4 space-y-4">
        <div>
          <div class="text-6xl font-black">
            120
          </div>
          <p class="text-center">Minute</p>
        </div>
        <div class="border-b border-blue-500 w-1/2"></div>
        <div class="text-blue-500 text-2xl">$160.00</div>
      </div>
    </SplideSlide>
  </Splide>
</template>


<style lang="scss" scoped></style>