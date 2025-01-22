<script setup>
import Header from './components/Header.vue'
import Home from './components/HomeComponent.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'


</script>

<template>
  <div class="wrapper">
    <Header />
    <Home />
    <About />
    <Skills />
    <Experience />

  
    <!-- <Projects /> -->
    <!-- <Contact /> -->
  </div>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
</style>
