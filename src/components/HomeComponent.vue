<script setup>
import ImageProvider from './ImageProvider.vue';
</script>


<template>
  <ImageProvider section="hero" v-slot="{ image }">
    <section class="relative h-screen text-white overflow-hidden">
      <div class="absolute inset-0">
        <img :src="image"
        alt="Background" class="w-full h-full object-cover" />
      </div>

      <div class="absolute inset-0 flex flex-col bg-white items-center justify-center text-center">
        <p class="text-md md:text-base tracking-wide uppercase mb-4 text-primary">
          Hello, My
        </p>
        <h1 class="relative font-extrabold text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-tight uppercase">
          <span class="bg-clip-text text-primary bg-gradient-to-r from-white to-gray-300">
            PORTFOLIO
          </span>
        </h1>
        <p class="mt-6 text-lg md:text-xl uppercase text-primary">
          Charlene Gabronino Jose
        </p>

        <a
          href="#contact"
          class="mt-6 px-6 py-3 text-sm md:text-base font-semibold uppercase bg-primary text-secondary rounded-full hover:bg-[#d6c6a8] transition-colors duration-300"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  </ImageProvider>
</template>


<style></style>
