<template>
  <section
      class="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white font-sans animate-fade-in-down dark:bg-gray-800 dark:shadow-lg"
  >
    <div class="max-w-2xl">
      <h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
        Hi, I'm <span class="text-blue-600">Victor Delamonica</span>
      </h1>
      <p class="mt-4 text-lg text-gray-700 dark:text-gray-400 ">
        Mobile developer passionate about creating beautiful and functional applications that make a difference.
      </p>
      <a @click.prevent="scrollToProjects" class="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md">See My Work</a>
    </div>
  </section>
</template>

<script setup>
const scrollToProjects = () => {
  const el = document.getElementById('projects')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
