<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
</script>

<template>
  <header class="bg-[#181818] text-[#ebddc4] p-4 sticky top-0 w-full z-50 shadow-md">
    <nav class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo -->
      <a href="#home" class="text-lg font-bold">CHARLENE</a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-6 items-center">
        <li><a href="#about" class="hover:text-gray-400 transition">About</a></li>
        <li><a href="#testimony" class="hover:text-gray-400 transition">Testimony</a></li>
        <li><a href="#contact" class="hover:text-gray-400 transition">Contact</a></li>
        <li>
          <a
            href="/public/Charlene Jose Resume 2025.pdf"
            download
            class="px-5 py-2 text-sm font-semibold uppercase border border-secondary-600 bg-primary text-secondary rounded-full hover:bg-[#d6c6a8] hover:text-primary transition-colors duration-300"
          >
            Download CV
          </a>
        </li>
      </ul>

      <!-- Hamburger -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-[#ebddc4] focus:outline-none"
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu with smooth transition -->
    <transition name="menu-slide">
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-[#181818] px-6 pt-4 pb-6 flex flex-col space-y-4 text-center"
      >
        <a href="#about" class="hover:text-gray-400 transition">About</a>
        <a href="#projects" class="hover:text-gray-400 transition">Projects</a>
        <a href="#contact" class="hover:text-gray-400 transition">Contact</a>
        <a
          href="/public/Charlene Jose Resume 2025.pdf"
          download
          class="inline-block mt-2 px-5 py-2 text-sm font-semibold uppercase border border-secondary-600 bg-primary text-secondary rounded-full hover:bg-[#d6c6a8] hover:text-primary transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.3s ease;
}
.menu-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.menu-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.menu-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
