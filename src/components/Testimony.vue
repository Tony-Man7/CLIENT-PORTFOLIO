<script setup>
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const testimonies = ref([
  {
    id: 1,
    name: 'Upwork Client',
    testimony: 'Great, absolutely enjoyed working with her.',
  },
  {
    id: 2,
    name: 'Kandis Hartley',
    testimony:
      "Big shout-out to Charlene! Charlene is the definition of teamwork and positivity! She's always ready to jump in, help with tasks big or small, and tackle challenges head-on. Whether it's handling resident texts or knocking out a mountain of reservation fees, she does it all with a smile! Charlene, your willingness to support your team and find solutions makes a huge impact - thank you for always bringing your A-game!",
  },
  {
    id: 3,
    name: 'Ariel',
    testimony:
      'Shout out to Charlene for #servicefirst for jumping the gun and always handling everything accordingly.',
  },
  {
    id: 4,
    name: 'Kristin Remax',
    testimony:
      'Shout outs! Charlene for always being helpful & willing to learn new things for her team in CS!',
  },
])
</script>

<template>
  <section class="bg-white text-black px-6 py-20" id="testimony">
    <div class="max-w-5xl mx-auto text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold uppercase mb-16">Testimonials</h1>

      <Splide
        :options="{
          type: 'loop',
          autoplay: true,
          interval: 3000,
          perPage: 1,
          arrows: true,
          pagination: true,
        }"
        aria-label="Client Testimonials"
      >
        <SplideSlide
          v-for="(testimony, index) in testimonies"
          :key="testimony.id"
          class="px-4"
        >
          <div class="bg-gray-100 p-8 rounded-xl max-w-3xl mx-auto">
            <p class="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
              “{{ testimony.testimony }}”
            </p>
            <div class="text-right">
              <span class="text-base md:text-lg font-semibold text-gray-600">
                — {{ testimony.name }}
              </span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>
