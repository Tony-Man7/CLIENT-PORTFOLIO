<script setup>
import FadeIn from '@/components/transitions/FadeIn.vue'
import SlideRight from './transitions/SlideRight.vue';
import SlideLeft from './transitions/SlideLeft.vue';

import ImageProvider from './ImageProvider.vue'

const educationList = [
  {
    year: '2005 - 2009',
    university: 'Jose C. Feliciano College',
    description: 'Bachelor’s Degree in BS Nursing',
  },
  {
    year: '2004 - 2005',
    university: 'Southern Leyte State University',
    description: 'Computer Science Technician (1st yr. 2nd sem.)',
  },
]
</script>

<template>
  <ImageProvider section="education" v-slot="{ image }">
    <section class="bg-white text-primary px-6 py-20">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title -->
        <FadeIn :delay="300">
          <h1 class="text-4xl md:text-6xl font-extrabold uppercase text-center mb-20">
            Education
          </h1>
        </FadeIn>

        <!-- Grid: Image left, Timeline right -->
    
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Side: Image -->
          <FadeIn :delay="500">
            <div class="w-full flex justify-center lg:justify-start">
              <img
                :src="image"
                alt="Education Image"
                class="rounded-xl object-cover w-full max-w-lg shadow-lg"
              />
            </div>
          </FadeIn>

          <!-- Right Side: Timeline -->
           <SlideRight :delay="300" :duration="1200">
          <div class="relative">
            <!-- Vertical line -->
            <div class="absolute left-6 md:left-8 top-0 w-0.5 h-full bg-gray-300"></div>

            <div
              v-for="(item, index) in educationList"
              :key="index"
              class="relative mb-16 pl-12 md:pl-24"
            >
              <!-- Dot -->
              <div
                class="absolute left-4 md:left-6 top-4 w-4 h-4 bg-white border-4 border-gray-300 rounded-full z-10"
              ></div>

              <!-- Triangle -->
              <div
                class="absolute left-9 md:left-20 top-1 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-[#f3f3f3]"
              ></div>

              <!-- Card -->
              <div class="bg-[#f3f3f3] text-primary rounded-xl p-6 shadow-md">
                <h3 class="text-xl md:text-3xl font-bold mb-2">{{ item.university }}</h3>
                <p class="text-sm text-gray-500 italic mb-2">{{ item.year }}</p>
                <p class="text-base md:text-lg text-gray-700">{{ item.description }}</p>
              </div>
            </div>
          </div>
          </SlideRight>
        </div>
      </div>
    </section>
  </ImageProvider>
</template>

