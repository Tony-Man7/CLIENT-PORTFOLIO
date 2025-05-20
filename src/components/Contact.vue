<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const showSuccess = ref(false)
const showError = ref(false)

const sendEmail = async (e) => {
  e.preventDefault()

  const form = e.target
  const params = {
    full_name: form.full_name.value,
    email: form.email.value,
    message: form.message.value,
  }

  try {
    await emailjs.send(
      'service_4d116ip',    
      'template_93mx0qc',   
      params,
      'jGrPKoaEbWkQrg4lS'    
    )

    showSuccess.value = true
    setTimeout(() => {
      showSuccess.value = false
      form.reset()
    }, 3000)
  } catch (error) {
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 3000)
  }
}

</script>


<template>
  <section id="contact" class="bg-primary text-white py-20">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20">
      <!-- Left Section -->
      <div class="mb-12 text-center lg:text-left">
        <h2 class="font-extrabold text-4xl md:text-6xl lg:text-7xl text-secondary uppercase text-center md:text-left leading-relaxed">
          Contact Me
        </h2>
        <p class="mt-4 text-lg lg:text-xl text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0">
          Have something in mind? Let's work together, Feel free to reach out!
        </p>

       <!-- Contact Info -->
        <div class="mt-6 space-y-4 text-left text-base text-secondary">
          <div class="flex items-start gap-3">
            <FontAwesomeIcon :icon="['fas', 'phone']" class="mt-1 text-lg text-secondary" />
            <span>+63 976 182 3544</span>
          </div>
          <div class="flex items-start gap-3">
            <FontAwesomeIcon :icon="['fas', 'envelope']" class="mt-1 text-lg text-secondary" />
            <a href="mailto:vacharlene98@gmail.com"><span>vacharlene98@gmail.com</span></a>
          </div>
          <div class="flex items-start gap-3">
            <FontAwesomeIcon :icon="['fas', 'location-dot']" class="mt-1 text-lg text-secondary" />
            <span>672 Mac Arthur Highway, San Francisco, Mabalacat, Pampanga 2010</span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mt-6 flex justify-center lg:justify-start space-x-6">
          <a href="https://www.facebook.com" target="_blank" class="text-xl text-secondary hover:text-secondary">
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

      <!-- Right Section: Form -->
    <form class="w-full max-w-xl" @submit="sendEmail">
        <div class="grid gap-6 md:grid-cols-2">
          <div>
            <label for="full_name" class="block mb-2 text-sm font-medium text-secondary">Full Name</label>
            <input v-model="fullName" type="text" id="full_name"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              placeholder="John" required />
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-secondary">Email Address</label>
            <input v-model="email" type="email" id="email"
              class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
              placeholder="john.doe@company.com" required />
          </div>
        </div>

        <div class="mt-4">
          <label for="message" class="block mb-2 text-sm font-medium text-secondary">Message</label>
          <textarea v-model="message" id="message" rows="4"
            class="w-full p-4 rounded-md bg-white text-black placeholder-gray-500"
            placeholder="Write your message here"></textarea>
        </div>

        <div class="mt-6">
          <button type="submit"
            class="uppercase bg-transparent border-2 border-[#BFBBA9] text-white py-3 px-6 rounded-md hover:bg-[#BFBBA9] transition duration-300"
            :disabled="sending">
            {{ sending ? 'Sending...' : 'Submit' }}
          </button>
        </div>
      </form>

      <!-- Notification Overlay -->
      <transition name="fade">
        <div
          v-if="showSuccess"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div class="bg-white text-primary px-8 py-6 rounded-xl shadow-lg text-center max-w-sm w-full">
            <h2 class="text-2xl font-bold mb-2">Success!</h2>
            <p>Your message has been sent.</p>
          </div>
        </div>
      </transition>

      <!-- Error Notification -->
      <transition name="fade">
        <div
          v-if="showError"
          class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div class="bg-white text-red-700 px-8 py-6 rounded-xl shadow-lg text-center max-w-sm w-full border border-red-500">
            <h2 class="text-2xl font-bold mb-2">Oops!</h2>
            <p>Failed to send message. Please try again.</p>
          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<style scoped>
</style>
