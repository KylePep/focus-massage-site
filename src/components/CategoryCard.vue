<template>
  <section
    class="group card-bg col-span-3 lg:col-span-1 flex flex-col justify-around text-center space-y-4 p-4 hover:bg-blue-700/20 duration-1000 relative overflow-hidden">
    <i class="h-16 w-16 mx-auto text-fm-blue">
      <slot name="icon" />
    </i>
    <h2 class="font-semibold">
      <slot name="title" />
    </h2>
    <p class="text-sm">
      <slot name="content" />
    </p>
    <i class="absolute -right-16 -bottom-16 h-64 w-64 text-transparent group-hover:text-black/10 duration-1000">
      <slot name="icon" />
    </i>
    <div class="absolute bottom-0 left-0 w-0 group-hover:w-full border-b-4 border-blue-500 duration-1000"></div>
  </section>
</template>
