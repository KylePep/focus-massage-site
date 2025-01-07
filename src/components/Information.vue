<script setup>
import SectionLayout from "../layouts/SectionLayout.vue";

</script>


<template>
  <SectionLayout width="xl">
    <div class="background-image-white grid grid-cols-8 py-24">

      <section
        class="col-span-8 lg:col-span-3 lg:col-start-2 space-y-4 bg-white border-2 border-gray-300 shadow-lg px-8 py-4 lg:px-12 lg:py-8 mx-4 lg:mx-0">
        <div class="mb-8">

          <h1 class="font-medium text-xl mb-4">Opening Hours</h1>
          <table class="w-full border-collapse">
            <tbody>
              <tr class="border-b border-gray-500 border-dotted">
                <td class="py-2 font-light">Tuesday</td>
                <td class="py-2 text-right font-light">11 AM - 6 PM</td>
              </tr>
              <tr class="border-b border-gray-500 border-dotted">
                <td class="py-2 font-light">Wednesday</td>
                <td class="py-2 text-right font-light">8 AM - 1 PM</td>
              </tr>
              <tr class="border-b border-gray-500 border-dotted">
                <td class="py-2 font-light">Thursday</td>
                <td class="py-2 text-right font-light">11 AM - 6 PM</td>

              </tr>
              <tr class="border-b border-gray-500 border-dotted">
                <td class="py-2 font-light">Friday</td>
                <td class="py-2 text-right font-light">8 AM - 3 PM</td>
              </tr>
              <tr class="border-b border-gray-500 border-dotted">
                <td class="py-2 font-light">Saturday - Monday</td>
                <td class="py-2 text-right font-light">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2 class="font-medium text-xl mb-4">Contact Details</h2>
          <table class="w-full border-collapse lg:w-3/4">
            <tbody>

              <tr class="">
                <td class="py-2 font-semibold align-top">Address</td>
                <td class="py-2 font-light px-4 align-top">:</td>
                <td class="py-2 text-right font-light align-top">
                  2726 Avenue Papineau Montreal, QC, Canada
                </td>
              </tr>

              <tr class="">
                <td class="py-2 font-semibold align-top">Phone</td>
                <td class="py-2 font-light px-4 align-top">:</td>
                <td class="py-2 text-right font-light align-top">xxx-xxx-xxxx</td>
              </tr>

              <tr class="">
                <td class="py-2 font-semibold align-top">Email</td>
                <td class="py-2 font-light px-4 align-top">:</td>
                <td class="py-2 text-right font-light align-top">email@exampleemail.com</td>
              </tr>

            </tbody>
          </table>
        </div>
      </section>

      <section class="col-span-8 lg:col-span-3 flex flex-col space-y-4 lg:px-8 mx-4 lg:mx-0 mt-8">
        <h3 class="text-4xl font-semibold mb-4">
          Make an Appointment
        </h3>
        <div class="flex-1 flex flex-col justify-center">
          <a href="https://danawhalen.glossgenius.com/services" class="w-full">
            <button
              class="bg-blue-500 px-16 py-4 text-4xl text-white font-black rounded hover:bg-blue-800 duration-300">Book
              Now</button>
          </a>
        </div>
      </section>

    </div>
  </SectionLayout>
</template>


<style scoped>
.background-image-white {
  background-image:
    linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 80%, rgba(255, 255, 255, 0.85)),
    url('https://img.freepik.com/free-vector/cutout-purple-blue_78370-131.jpg');
  background-position: 0% 25%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>