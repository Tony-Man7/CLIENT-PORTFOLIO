<script setup>
import ImageProvider from './ImageProvider.vue';
import FadeIn from '@/components/transitions/FadeIn.vue'
import SlideRight from './transitions/SlideRight.vue';
</script>

<template>
  <ImageProvider section="about" v-slot="{ image }">
    <section class="min-h-screen flex items-center py-20 bg-white text-gray-800" id="about">
      <div class="container mx-auto px-6 md:px-12 lg:px-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <FadeIn>
              <div class="flex items-center mb-6">
                <div class="text-center mr-6">
                  <h1 class="text-9xl font-extrabold text-gray-900">10</h1>
                  <p class="text-sm tracking-[20px] uppercase">Years</p>
                </div>
                <h3 class="text-2xl sm:text-4xl font-semibold leading-snug">
                  Experience Virtual Assistant · Customer Service Specialist 
                </h3>
              </div>
        

            <p class="mb-4 text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Hi, I’m Charlene Jose — a virtual assistant experienced in property management, real estate support, customer service, and travel consulting. I handle everything from tenant communication and admin tasks to calendar management and travel bookings. I’ve supported clients across Australia, the U.S. adapting to different systems and workflows with ease. I thrive in fast-paced environments where clear communication and strong organization are key. I’m here to help streamline your workflow and support your business goals.
            </p>

            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-primary mr-3 mt-1">
                    <FontAwesomeIcon :icon="['far', 'check-circle']"/>

                </span>
                <span>Responsive & Reliable Support</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-3 mt-1">
                    <FontAwesomeIcon :icon="['far', 'check-circle']"/>

                </span>
                <span>Detail-Oriented & Organized</span>
              </li>
              <li class="flex items-start">
                <span class="text-primary mr-3 mt-1">
                    <FontAwesomeIcon :icon="['far', 'check-circle']"/>

                </span>
                <span>Real Estate & Admin Expertise</span>
              </li>
            </ul>
            <div class="flex gap-5">
                <div>
                    <a href="#contact" class="px-6 py-3 text-sm md:text-base font-semibold uppercase bg-primary text-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors duration-300">
                        Let's Talk
                    </a>
                </div>
            
                <div>
                    <a href="#testimony" class="px-6 py-3 text-sm md:text-base font-semibold uppercase bg-primary text-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors duration-300">
                    Testimony
                    </a>
                </div>
            </div>
            </FadeIn>
          </div>

          <!-- Right Content -->
          <SlideRight>
            <div>
              <div class="grid grid-cols-1 gap-4 mb-6">
                  <img :src="image" alt="About Image 1" class="rounded-lg shadow-md w-full h-auto object-cover" />
              </div>

              <div class="mb-4 text-base">
                <div class="flex items-center mb-1">
                  <h5 class="text-lg font-medium border-r pr-3 mr-3">Happy Clients</h5>
                  <h2 class="text-primary text-2xl font-bold">05</h2>
                </div>
                <p class="mb-4 text-gray-600 text-base md:text-lg lg:text-xl text- leading-relaxed max-w-2xl mx-auto">
                  Trusted by clients across Australia and the U.S. for dependable, efficient, and professional virtual assistance tailored to their business needs.
                </p>
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </section>
  </ImageProvider>
</template>
