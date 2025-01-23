<script setup>
import ImageProvider from './ImageProvider.vue';
</script>

<template>
    <ImageProvider section="experience" v-slot="{ image }">
        <div class="min-h-screen bg-primary text-secondary flex items-center justify-center px-6">
            <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 py-20">
                <div class="w-full overflow-hidden rounded-lg" data-aos="fade-right">
                    <img :src="image" alt="Experience Image" class="w-full h-auto object-cover" />
                </div>

                <div class="flex flex-col space-y-6 text-secondary">
                    <div data-aos="fade-left">
                        <h1 class="font-extrabold text-3xl md:text-5xl lg:text-7xl text-secondary uppercase text-center md:text-left leading-relaxed">
                        Work Experience
                        </h1>
                    </div>
                    <div class="relative">
                        <div class="absolute w-1 bg-gray-300 h-full left-2 top-0"></div>
                        <div class="space-y-8">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="500">
                                    <h3 class="text-xl font-bold">Job Title 1</h3>
                                    <p class="text-gray-400">Company Name</p>
                                    <p class="text-sm text-gray-500">Jan 2020 - Dec 2021</p>
                                    <p class="text-base text-secondary">
                                        Brief description of your responsibilities and achievements.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div  data-aos="fade-left" data-aos-duration="800">
                                    <h3 class="text-xl font-bold">Job Title 2</h3>
                                    <p class="text-gray-400">Company Name</p>
                                    <p class="text-sm text-gray-500">Jan 2022 - Present</p>
                                    <p class="text-base text-secondary">
                                        Brief description of your responsibilities and achievements.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="1000">
                                    <h3 class="text-xl font-bold">Job Title 3</h3>
                                    <p class="text-gray-400">Company Name</p>
                                    <p class="text-sm text-gray-500">Jan 2022 - Present</p>
                                    <p class="text-base text-secondary">
                                        Brief description of your responsibilities and achievements.
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div data-aos="fade-left" data-aos-duration="1200">
                                    <h3 class="text-xl font-bold">Job Title 4</h3>
                                    <p class="text-gray-400">Company Name</p>
                                    <p class="text-sm text-gray-500">Jan 2022 - Present</p>
                                    <p class="text-base text-secondary">
                                        Brief description of your responsibilities and achievements.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ImageProvider>
</template>

<style></style>
