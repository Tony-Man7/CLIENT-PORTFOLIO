<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header class="bg-[#181818] text-[#ebddc4] p-4 sticky w-full z-50 top-0">
      <nav class="max-w-7xl mx-auto flex justify-between">
        
        <a href="/"><div class="text-lg font-bold">CHARLENE</div></a>

        <ul class="flex space-x-4">
          <li><a href="#about" class="hover:text-blue-400">About</a></li>
          <li><a href="#projects" class="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" class="hover:text-blue-400">Contact</a></li>
        </ul>

      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    box-shadow: 0 2px 4px rgba(235, 221, 196, 0.1);
  }
  </style>
  