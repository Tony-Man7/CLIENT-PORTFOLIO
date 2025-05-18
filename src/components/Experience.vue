<script setup>
import ImageProvider from './ImageProvider.vue';
import FadeIn from '@/components/transitions/FadeIn.vue'
import SlideRight from './transitions/SlideRight.vue';
import SlideLeft from './transitions/SlideLeft.vue';


const experiences = [
  {
    title: 'Property Management VA | Resident Success Specialist',
    company: 'Re/Max Haven PMD',
    period: '2023 - Present',
    description:
      'Handled tenant support, maintenance coordination, leasing paperwork, and account updates across platforms.',
  },
  {
    title: 'Property Management Virtual Assistant | Maintenance Manager',
    company: 'Clark Outsoursing',
    period: '2021 - 2023',
    description:
      'Oversaw property maintenance coordination, administrative tasks, email/calendar management, bank reconciliation, and CRM updates.',
  },
  {
    title: 'Customer Service | Travel Consultant | Online Reservation Agent',
    company: 'Dnata Travel Inc.',
    period: '2019 - 2021',
    description:
      'Supported travel clients using GDS tools. Managed calls, created travel itineraries, and assisted with lead generation.',
  },
  {
    title: 'Passenger Service Agent',
    company: 'National Aviation Services (Kuwait)',
    period: '2016 - 2018',
    description:
      'Managed check-ins, baggage tracking, boarding, and ramp duties, ensuring full compliance with airline protocols.',
  },
  {
    title: 'Customer Service | Travel Consultant | Online Reservation Agent',
    company: 'Sitel Philippines',
    period: '2012 - 2013',
    description:
      'Provided reservation support, call handling, and customer service using GDS tools across multiple channels.',
  },
]
</script>

<template>
  <div class="bg-primary text-secondary px-6 py-20">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-extrabold uppercase text-center mb-20">
        Work Experience
      </h1>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 md:left-8 top-0 w-0.5 h-full bg-gray-500"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative mb-16 pl-12 md:pl-24"
        >
          <!-- Dot -->
          <div
            class="absolute left-4 md:left-6 top-4 w-4 h-4 bg-primary border-4 border-gray-500 rounded-full z-10"
          ></div>

          <!-- Triangle pointer -->
          <div
            class="absolute left-9 md:left-20 top-1 w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-[#333]"
          ></div>

        <SlideLeft
          :delay="index * 200"
          :duration="1200"
        >
          <!-- Experience Card -->
          <div class="bg-[#333] text-secondary rounded-xl p-6 shadow-md">
            <h3 class="text-xl md:text-3xl font-bold mb-2">{{ exp.title }}</h3>
            <p class="text-lg text-secondary-300 font-semibold mb-1">{{ exp.company }}</p>
            <p class="text-sm text-secondary-400 mb-4 italic">{{ exp.period }}</p>
            <p class="text-base md:text-lg text-secondary-200 leading-relaxed">{{ exp.description }}</p>
          </div>
        </SlideLeft>

        </div>
      </div>
    </div>
  </div>
</template>
