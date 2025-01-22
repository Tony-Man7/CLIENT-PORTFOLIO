<script setup>
import ImageProvider from './ImageProvider.vue';
</script>

<template>
    <ImageProvider section="experience" v-slot="{ image }">
        <div class="min-h-screen bg-primary text-secondary flex items-center justify-center px-6">
            <div class="max-w-8xl w-[80%] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="w-full max-w-6xl overflow-hidden rounded-lg">
                    <img :src="image" alt="About Image" />
                </div>

                <div class="flex flex-col space-y-4 text-secondary font-semibold">
                    <div>
                        <h1 class="font-extrabold text-4xl md:text-6xl lg:text-8xl text-secondary uppercase">Work Experience</h1>
                    </div>

                    <div class="relative">
                        <div class="absolute w-1 bg-gray-300 h-full left-2 top-0"></div>
                        <div class="space-y-8">
                            <div class="flex items-start space-x-4">
                                <div class="flex-shrink-0">
                                    <div class="w-5 h-5 bg-gray-300 rounded-full border-2 border-gray-300"></div>
                                </div>
                                <div>
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
                                <div>
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
                                <div>
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
                                <div>
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
