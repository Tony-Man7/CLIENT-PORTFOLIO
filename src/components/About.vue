<script setup>
import ImageProvider from './ImageProvider.vue';
</script>

<template>
    <ImageProvider section="about" v-slot="{ image }">

        <section class="relative bg-primary text-white py-20" id="about">
            <div class="container mx-auto px-6 md:px-12 lg:px-20 text-center" data-aos="fade-down">
                <div class="flex flex-col items-center">
                    <div class="w-full max-w-3xl overflow-hidden rounded-lg">
                        <img :src="image" alt="About Image" />
                    </div>

                    <div class="mt-8">
                        <h2 class="font-extrabold text-4xl md:text-6xl lg:text-7xl text-secondary">
                            INTRODUCTION
                        </h2>
                        <p class="mt-4 text-base md:text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                            I'm Charlene, a passionate virtual assistant dedicated to providing top-notch administrative
                            support
                            and project management services. With years of experience in customer service and
                            organization, I
                            help businesses streamline their operations and grow efficiently.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    </ImageProvider>

</template>

<style></style>