<template>
  <main>
    <!-- Hero Section -->
    <section class="relative bg-primary overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-primary sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Turning ideas into</span>
                <span class="block text-accent xl:inline"> mobile experiences</span>
              </h1>
              <p class="mt-3 text-base text-light sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Mobile developer passionate about creating beautiful and functional applications that make a difference.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <NuxtLink to="/projects" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-accent md:py-4 md:text-lg md:px-10">
                    View My Work
                  </NuxtLink>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-12 bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Skills & Technologies
          </h2>
          <p class="mt-4 max-w-2xl text-xl text-light lg:mx-auto">
            Here are the technologies I work with to bring ideas to life.
          </p>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            <div v-for="skill in skills" :key="skill.name" class="col-span-1 flex justify-center py-8 px-8 bg-secondary rounded-lg shadow hover:shadow-lg hover:border-accent hover:border-2 transition-all duration-300">
              <img class="max-h-12" :src="skill.icon" :alt="skill.name">
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const skills = [
  { name: 'Flutter', icon: 'https://raw.githubusercontent.com/flutter/website/main/src/_assets/image/flutter-logomark-320px.png' },
  { name: 'Firebase', icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
  { name: 'Vue.js', icon: 'https://vuejs.org/images/logo.png' },
  { name: 'React Native', icon: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg' }
]
</script>