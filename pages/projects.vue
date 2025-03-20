<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-extrabold text-white sm:text-4xl mb-8">Projects</h1>

    <!-- Filters -->
    <div class="flex space-x-4 mb-8">
      <button
          v-for="filter in filters"
          :key="filter"
          @click="activeFilter = filter"
          :class="[
          'px-4 py-2 rounded-md',
          activeFilter === filter
            ? 'bg-accent text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        {{ filter }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-secondary rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      >
        <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
        <div class="p-6">
          <h3 class="text-xl font-bold text-lightAccent">{{ project.name }}</h3>
          <p class="mt-2 text-white">{{ project.description }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-gray-100 text-accent text-sm rounded"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mt-6 flex space-x-4">
            <a
                v-if="project.appStore"
                :href="project.appStore"
                class="text-white hover:text-primary"
                target="_blank"
            >
              App Store
            </a>
            <a
                v-if="project.github"
                :href="project.github"
                class="text-white hover:text-primary"
                target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const filters = ['All', 'Solo Dev', 'Team Project', 'Live App']
const activeFilter = ref('All')

const projects = [
  {
    id: 1,
    name: 'Buurtwerf greenup platform',
    description: 'A Flutter app for the volunteer organization Buurtwerf. The main goal of the app is to help volunteers track the number of tiles removed from the terraces of houses in the Bennekel neighborhood of Eindhoven.',
    image: 'https://media.licdn.com/dms/image/v2/D4E2DAQHR2zIbexhnFA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1737988998112?e=1742990400&v=beta&t=YMH1j7yPoHx_93bhu3Qjvh62aKj3cfaLEv7g2eM1UJ0',
    technologies: ['Flutter',  'Figma', 'Firebase'],
    category: 'Team Project',
  },
  {
    id: 2,
    name: 'FestPocket',
    description: 'FestPocket: Your Ultimate Festival Companion! Love festivals but hate the chaos of planning? FestPocket is here to make your festival experience seamless, exciting, and stress-free! ',
    image: 'https://www.monikode.com/FestPocket/assets/images/festpocket-logo-2.png',
    technologies: ['Flutter',  'Figma'],
    category: ['Solo Dev','Live App'],
    appStore: 'https://apps.apple.com/us/app/festpocket/id1560730734',
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(project => project.category.includes(activeFilter.value))
})
</script>
