<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";
import SectionTitle from "./SectionTitle.vue";

</script>


<template>
  <SectionLayout width="base">

    <div class="space-y-8 mb-16">
      <SectionTitle>
        Why Focus Massage
        <template #subtitle>
          Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum vocent mediocritatem an cule dicta iriure at
          phaedrum.
        </template>
      </SectionTitle>

      <div class="flex flex-col lg:flex-row justify-around border-b-2 border-gray-400 space-y-10 lg:space-y-0">
        <button>
          <div class="group border-b-2 border-transparent hover:border-fm-teal duration-300 pb-10 ">
            <div class="h-16 w-16 text-black hover:text-fm-blue mx-auto">
              <IconFM />
            </div>
            <p>
              My Mission
            </p>
          </div>
        </button>

        <button>
          <div class="group border-b-2 border-transparent hover:border-fm-teal duration-300 pb-10 ">
            <div class="h-16 w-16 text-black hover:text-fm-blue mx-auto">
              <IconFM />
            </div>
            <p>
              My Vision & Values
            </p>
          </div>
        </button>

        <button>
          <div class="group border-b-2 border-transparent hover:border-fm-teal duration-300 pb-10 ">
            <div class="h-16 w-16 text-black hover:text-fm-blue mx-auto">
              <IconFM />
            </div>
            <p>
              My Quality
            </p>
          </div>
        </button>

      </div>

    </div>


  </SectionLayout>
</template>


<style lang="scss" scoped></style>