<template>
  <nav class="bg-secondary shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <NuxtLink to="/" class="flex items-center">
            <span class="text-xl font-bold text-white">MoniKode</span>
          </NuxtLink>
        </div>
        <div class="hidden sm:flex sm:items-center sm:space-x-8">
          <NuxtLink to="/" class="text-white hover:text-primary px-3 py-2">Home</NuxtLink>
          <NuxtLink to="/projects" class="text-white hover:text-primary px-3 py-2">Projects</NuxtLink>
          <NuxtLink to="/about" class="text-white hover:text-primary px-3 py-2">About</NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-primary px-3 py-2">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
