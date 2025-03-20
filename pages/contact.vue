<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h1 class="text-3xl font-extrabold text-white sm:text-4xl">Get in Touch</h1>
        <p class="mt-4 text-lg text-light">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div class="mt-8 space-y-6">
          <div class="flex items-center">
            <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="ml-3 text-light">your.email@example.com</span>
          </div>
          <div class="flex items-center">
            <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="ml-3 text-light">Your Location</span>
          </div>
        </div>
      </div>
      
      <div class="mt-12 lg:mt-0">
        <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-light">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              v-model="form.name"
              class="mt-1 block w-full rounded-md bg-secondary border-gray-600 text-light shadow-sm focus:border-accent focus:ring-accent"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-light">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              v-model="form.email"
              class="mt-1 block w-full rounded-md bg-secondary border-gray-600 text-light shadow-sm focus:border-accent focus:ring-accent"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-light">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows="4" 
              v-model="form.message"
              class="mt-1 block w-full rounded-md bg-secondary border-gray-600 text-light shadow-sm focus:border-accent focus:ring-accent"
            ></textarea>
          </div>
          
          <div>
            <button 
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>