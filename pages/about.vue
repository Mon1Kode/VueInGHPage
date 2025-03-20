<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="lg:w-1/2">
        <h1 class="text-3xl font-extrabold text-white sm:text-4xl">About Me</h1>
        <p class="mt-4 text-lg text-light">
          I'm a passionate mobile developer with a focus on creating intuitive and performant applications.
          With years of experience in mobile development, I've worked on various projects that have helped me grow as a
          developer.
        </p>

        <div class="mt-8">
          <h2 class="text-2xl font-bold text-white">Experience Timeline</h2>
          <div class="mt-4 space-y-8">
            <div v-for="(experience, index) in experiences" :key="index" class="relative pl-8 border-l-2 border-accent">
              <div class="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
              <div class="mb-2">
                <h3 class="text-lg font-semibold text-white">{{ experience.role }}</h3>
                <p class="text-sm text-light">{{ experience.company }} • {{ experience.period }}</p>
              </div>
              <p class="text-light">
                <span v-for="(line, index) in experience.description.split('\n')" :key="index">
                  {{ line }}<br/>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12">
        <img
            src="https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?t=st=1742390048~exp=1742393648~hmac=9103c59559a6a1b86d3d333da4847e57efecb132e3e3f302a3223646be7e92b8&w=2000"
            alt="Profile"
            class="rounded-lg shadow-lg border-4 border-accent"
        >

        <div class="mt-8 bg-secondary p-6 rounded-lg shadow">
          <h2 class="text-xl font-bold text-white">Fun Fact</h2>
          <p class="mt-2 text-light">
            When I'm not coding, you'll find me exploring new festivals and events in different cities.
            Music and food are my two favorite things, and I love trying new style of music.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experiences = [
  {
    role: 'Flutter Mobile Developer',
    company: 'Draw your Fight',
    period: '2024 - Present',
    description: "Developing a mobile application 'La Passerelle', an innovative therapeutic education program to support people with chronic pain who are awaiting specialized care.\nThis mobile app contains activities and tools inspired by it in order to live better with pain."
  },
  {
    role: 'C# Backend Developer/QA',
    company: 'Kappa Engineering',
    period: 'Sep. 2023 - Jun. 2024',
    description: "First 19-week 14-hour contract for initial experience in back-end development (C#, .Net)\n Then 4-month internship, implementation of automated tests, API, log reporting, database in CI (Continuous integration) working method\n"
  },
  {
    role: 'iOS Mobile Developer',
    company: 'STIILT',
    period: 'Aug. 2022 – Dec. 2022',
    description: "Development of a mobile application for the management of the company's fleet of vehicles\nThis was a 5-month internship to gain initial experience in iOS mobile development using the Agile Scrum method."
  },
]
</script>
