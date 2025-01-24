<script setup>
// No need to import FontAwesomeIcon since it's globally registered
</script>

<template>
    <section id="contact" class="bg-primary text-white py-20">
        <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20">
            <div class="mb-12 text-center lg:text-left">
                <h2 class="font-extrabold text-4xl md:text-6xl lg:text-7xl text-secondary uppercase text-center md:text-left leading-relaxed">
                    Contact Me
                </h2>
                <p class="mt-4 text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Have a project in mind or just want to say hello? Feel free to reach out!
                </p>
                <div class="mt-6 space-x-6 flex justify-center lg:justify-start">
                    <a href="https://www.facebook.com" target="_blank" class="text-xl text-secondary hover:text-white">
                        <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" class="text-xl text-secondary hover:text-white">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                    <a href="https://twitter.com" target="_blank" class="text-xl text-secondary hover:text-white">
                        <FontAwesomeIcon icon="fa-brands fa-twitter" />
                    </a>
             
                </div>
            </div>

            <div class="flex flex-col items-center lg:items-start space-y-8">
                <form class="w-full max-w-xl">
                    <div class="grid gap-6  md:grid-cols-2">
                        <div>
                            <label for="full_name" class="block mb-2 text-sm font-medium text-secondary">Full
                                Name</label>
                            <input type="text" id="full_name"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="John" required />
                        </div>
                        <div class="">
                            <label for="email" class="block mb-2 text-sm font-medium text-secondary">Email
                                Address</label>
                            <input type="email" id="email"
                                class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="john.doe@company.com" required />
                        </div>
                    </div>

                    <div>
                        <label for="message" class="block text-lg font-semibold text-secondary">
                        </label>
                        <textarea id="message" rows="4"
                            class="w-full p-4 mt-2 rounded-md bg-white text-black placeholder-gray-500"
                            placeholder="Write your message here"></textarea>
                    </div>

                    <div class="">
                        <button type="submit"
                            class="px-8 py-3 uppercase bg-transparent border-2 border-[#BFBBA9] rounded-md py-2 px-4 hover:bg-[#BFBBA9] duration-300">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom styles if needed */
</style>
