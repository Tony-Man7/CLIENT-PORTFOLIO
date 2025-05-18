<script setup>
import heroImage from '../assets/hero-bg.png';
import aboutImage from '../assets/about-img.webp';
import experienceImage from '../assets/exp-banner.png';
import educationImage from '../assets/education-img.webp';
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';

const images = {
  hero: heroImage,
  about: aboutImage,
  experience: experienceImage,
  education: educationImage,
  projects: [projectImage1, projectImage2, projectImage3], 
};

defineProps({
  section: String,
  index: {
    type: Number,
    default: 0, 
  },
});
</script>

<template>
  <slot :image="Array.isArray(images[section]) ? images[section][index] : images[section]"></slot>
</template>
