<script setup>
import heroImage from '../assets/hero-bg.png';
import aboutImage from '../assets/about-img.png';
import experienceImage from '../assets/exp-banner.png';


const images = {
  hero: heroImage,
  about: aboutImage,
  experience: experienceImage,
};

defineProps({
  section: String,
});
</script>

<template>
  <slot :image="images[section]"></slot>
</template>
