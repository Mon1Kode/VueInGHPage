<template>
  <section class="py-20 px-6 bg-white  text-center dark:text-gray-400 dark:bg-gray-800 dark:shadow-lg">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-semibold text-gray-900 dark:text-white  mb-6">Get in Touch</h2>
      <p class="text-gray-700 dark:text-gray-400 mb-8">
        Have a project in mind or just want to say hi? Feel free to drop a message!
      </p>

      <form @submit.prevent class="grid gap-4 text-left">
        <input
            type="text"
            placeholder="Your name"
            class=" bg-white dark:bg-gray-800 w-full px-4 py-3 border border-gray-300 dark:border-white  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
            type="email"
            placeholder="Your email"
            class="bg-white dark:bg-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
            placeholder="Your message"
            rows="5"
            class="bg-white dark:bg-gray-800 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
            type="submit"
            class="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          Send Message (inactive)
        </button>
      </form>

      <div class="mt-10 flex justify-center gap-6 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/Mon1Kode" target="_blank" class="hover:text-black">GitHub</a>
        <a href="https://www.linkedin.com/in/victor-delamonica/" target="_blank" class="hover:text-blue-700">LinkedIn</a>
        <a href="mailto:victor.delamonica@icloud.com" class="hover:text-blue-500">Email</a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
</script>
