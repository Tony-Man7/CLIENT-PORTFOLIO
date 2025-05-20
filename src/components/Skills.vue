<script setup>
import ImageProvider from './ImageProvider.vue';
import FadeIn from '@/components/transitions/FadeIn.vue'
import SlideRight from './transitions/SlideRight.vue';
import SlideUp from './transitions/SlideUp.vue';

const coreSkills = [
  { name: 'Administration', percent: 95, color: 'bg-purple-600' },
  { name: 'Customer Service Specialist', percent: 98, color: 'bg-pink-500' },
  { name: 'Email Management', percent: 95, color: 'bg-blue-400' },
  { name: 'Real Estate Specialist', percent: 90, color: 'bg-green-500' },
  { name: 'Time & Calendar Management', percent: 92, color: 'bg-yellow-400' },
  { name: 'Data Entry & File Management', percent: 95, color: 'bg-cyan-500' },
  { name: 'Invoice & Bank Reconciliation', percent: 88, color: 'bg-red-400' },
  { name: 'System CRM Software', percent: 90, color: 'bg-indigo-500' },
  { name: 'MS Office Suite Expertise', percent: 90, color: 'bg-emerald-500' },
  { name: 'Creating Contracts & Documents', percent: 85, color: 'bg-teal-500' },
  { name: 'Travel & Bookings Management', percent: 87, color: 'bg-orange-400' }
]

const tools = [
  'Property Tree',
  'Propertyware',
  'Jivo Chat',
  'Monday.com',
  'CRM Sales Force',
  'DocuSign',
  'CRM Eagle',
  'Property Management',
  'Inspection Express',
  'Excel, Google Drive, MS, Word, Teams',
  'REI Forms Live DocuSign',
  'Residential Bond Board',
  'Smoke Alarm Solution agent site for compliance',
  'City Council agent site for redirections of Bills'
]
</script>

<template>
  <div class="py-12 px-6 bg-white text-primary">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <FadeIn :delay="0">
        <h1 class="font-extrabold text-4xl md:text-6xl mb-6 uppercase">Skills & Expertise</h1>
        <p class="mb-12 text-gray-600 text-lg md:text-xl leading-relaxed">
          I offer a comprehensive range of administrative and client-support skills tailored for property management,
          scheduling, CRM systems, and more. Below is a breakdown of my strongest areas of expertise.
        </p>
      </FadeIn>

      <!-- Core Skills -->
      <SlideUp :delay="300">
        <h2 class="text-3xl font-bold mb-6">Core Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div v-for="skill in coreSkills" :key="skill.name">
            <div class="flex justify-between text-base font-medium mb-2">
              <span>{{ skill.name }}</span>
              <span>{{ skill.percent }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
              <div :class="`${skill.color} h-3 rounded-full`" :style="`width: ${skill.percent}%`"></div>
            </div>
          </div>
        </div>
      </SlideUp>

      <!-- Tools & Software -->
      <SlideRight :delay="600" :duration="1500">
        <h2 class="text-3xl font-bold mb-4">Tools & Software</h2>
        <p class="mb-6 text-gray-600 text-lg md:text-xl leading-relaxed">
          Experienced in using a wide range of property management, communication, and productivity tools:
        </p>
        <div class="flex flex-wrap gap-4">
          <span
            v-for="tool in tools"
            :key="tool"
            class="uppercase bg-[#BFBBA9] border-2 border-[#BFBBA9] rounded-full py-2 px-4 hover:bg-transparent transition duration-300 text-base"
          >
            {{ tool }}
          </span>
        </div>
      </SlideRight>
    </div>
  </div>
</template>
