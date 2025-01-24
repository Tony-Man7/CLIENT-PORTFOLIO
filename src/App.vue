<script setup>
import Header from './components/Header.vue'
import Home from './components/HomeComponent.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'





</script>

<template>
  <div class="wrapper">
    <Header />
    <Home />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Projects />
    <Contact />

  </div>
</template>

<style scoped>
  html {
    scroll-behavior: smooth;
  }
</style>
