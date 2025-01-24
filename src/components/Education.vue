<script setup>
import ImageProvider from './ImageProvider.vue';

    const educationList = [
        {
            year: "2019",
            university: "Borcell University",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            year: "2020",
            university: "Giggling University",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            year: "2021",
            university: "Rimberio University",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
</script>


<template>
    <ImageProvider section="education" v-slot="{ image }">
        <section class="min-h-screen bg-black text-secondary flex items-center justify-center p-6">
            <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="flex flex-col justify-center space-y-8" data-aos="fade-right">
                    <h1 class="font-extrabold text-3xl md:text-5xl lg:text-7xl text-secondary uppercase text-center md:text-left leading-relaxed">Education</h1>
                    <div class="space-y-8">
                        <div v-for="(item, index) in educationList" :key="index" class="flex flex-col space-y-2">
                            <h3 class="text-lg font-semibold text-white">{{ item.year }}</h3>
                            <h2 class="text-xl font-bold text-cream">{{ item.university }}</h2>
                            <p class="text-gray-400">{{ item.description }}</p>
                        </div>
                    </div>
                </div>

                <div class="w-full flex items-center justify-center" data-aos="fade-left">
                    <img :src="image" alt="Education Image"
                        class="rounded-lg object-cover w-full max-w-lg shadow-lg" />
                </div>
            </div>
        </section>
    </ImageProvider>
</template>


<style>

</style>