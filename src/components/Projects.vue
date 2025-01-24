<script setup>
import { ref } from 'vue';
import ImageProvider from './ImageProvider.vue';

const projects = ref([
  {
    id: 1,
    title: 'First Project',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'Second Project',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    title: 'Third Project',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]);

const currentIndex = ref(0);
</script>

<template>
    <section class="bg-white text-cream flex items-center justify-center p-6 py-20" id="projects">
      <div class="max-w-7xl w-full flex flex-col items-center space-y-6">
        
        <!-- Splide Container for Carousel -->
        <Splide
          :options="{
            type: 'loop',
            autoplay: true,
            interval: 3000,
            perPage: 1,
            arrows: true,
            pagination: true,
          }"
          aria-label="My Projects"
          class="w-full"
        >
          <!-- SplideSlide for each project -->
          <SplideSlide v-for="(project, index) in projects" :key="project.id">
            <ImageProvider section="projects" :index="index" v-slot="{ image }">
              <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div class="w-full flex items-center justify-center">
                  <img
                    :src="image"
                    alt="Project Image"
                    class="rounded-lg object-cover w-full max-w-lg shadow-lg"
                  />
                </div>

                <div class="flex flex-col justify-center space-y-6">
                  <h1 class="text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
                    {{ project.title }}
                  </h1>
                  <p class="bg-cream text-black p-4 rounded-md text-sm lg:text-base shadow-md">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </ImageProvider>

          </SplideSlide>
        </Splide>
      </div>
    </section>
</template>

<style scoped>
.text-cream {
  color: #f5deb3;
}

.bg-black {
  background-color: #1a1a1a;
}

.bg-cream {
  background-color: #f5deb3;
}

.splide__slide img {
  width: 100%; 
  object-fit: cover;
}
</style>
