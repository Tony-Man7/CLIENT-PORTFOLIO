<script setup>
</script>

<template>
  <section id="home" class="relative flex justify-center items-center h-screen bg-primary px-4 overflow-hidden">
    <!-- Centered Content Box -->
    <div class="relative w-full max-w-5xl h-[80vh] rounded-xl overflow-hidden shadow-xl bg-white border border-white/30 ring-1 ring-gray-300 ring-opacity-50">
 
      <!-- Overlay -->
      <div class="absolute inset-0 bg-primary bg-opacity-20 backdrop-blur-sm"></div>

      <!-- Hero Content -->
      <div class="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 animate-fade-in">
        <p class="font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-[3rem] tracking-wide uppercase mb-2 text-primary">
         Hi I'm 
        </p>
        <h1 class="font-extrabold text-5xl md:text-7xl lg:text-8xl xl:text-[9rem] tracking-tight uppercase">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600">
             Charlene
          </span>
        </h1>
        <p class="mt-4 text-base md:text-lg lg:text-xl text-primary max-w-2xl">
          Virtual Assistant &middot; Real Estate VA &middot; Customer Service Specialist &middot; Travel Consultant
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#contact"
            class="px-6 py-3 text-sm md:text-base font-semibold uppercase bg-primary text-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            Let’s Talk
          </a>
          <a
            href="/Charlene Jose Resume.pdf"
            download
            class="px-6 py-3 text-sm md:text-base font-semibold uppercase bg-primary text-secondary rounded-lg hover:bg-accent hover:text-primary transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 2s ease-out both;
}

</style>
