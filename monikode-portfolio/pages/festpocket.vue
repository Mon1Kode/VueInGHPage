<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-[1100px] mx-auto px-5 pt-6">
      <header class="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
        <img src="/assets/images/festpocket-logo-2.png" alt="Logo" class="h-12 w-12 object-contain rounded-lg bg-transparent" />
        <div class="ml-auto sm:ml-0 order-3 sm:order-none w-full sm:w-auto">
          <select
            v-model="language"
            @change="onChangeLanguage"
            class="w-full bg-white text-gray-900 border border-gray-300 px-3 py-2 rounded-lg dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
          >
            <option value="en">English</option>
            <option value="nl">Nederlands</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <button
          class="bg-emerald-500 text-green-950 font-bold border-0 px-4 py-2 rounded-xl cursor-pointer shadow-[0_6px_16px_rgba(34,197,94,0.4)] transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(34,197,94,0.45)] w-full sm:w-auto order-2 sm:order-none"
          @click="openModal"
        >
          {{ t.download }}
        </button>
      </header>

      <div class="text-center text-gray-900 dark:text-gray-200 pt-14 pb-10 px-4">
        <h1 class="text-[clamp(28px,4vw,46px)] font-extrabold tracking-tight mb-3">{{ t.title }}</h1>
        <p class="text-[clamp(16px,2vw,20px)] text-gray-700 dark:text-slate-300 font-bold">{{ t.subtitle }}</p>
        <p class="text-[clamp(16px,2vw,20px)] text-gray-700 dark:text-slate-300">"Plan smarter, party harder!🎉"</p>
      </div>
    </div>

    <div class="bg-gray-50 border-y border-gray-200 py-10 px-5 dark:bg-slate-950 dark:border-gray-800">
      <h2 class="text-gray-900 dark:text-gray-100 text-center text-2xl mb-6">{{ t.reasonTitle }}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[1100px] mx-auto">
        <div class="bg-white border border-gray-200 rounded-2xl p-5 text-gray-700 flex flex-col items-center text-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          <h3 class="text-gray-900 dark:text-gray-50 text-lg">{{ t.card1Title }}</h3>
          <p class="text-gray-600 dark:text-slate-300 text-sm min-h-[44px]">{{ t.card1Text }}</p>
          <img src="/assets/images/ui-icon.png" alt="UI Icon" class="w-16 h-16 object-contain [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.4))]" />
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-5 text-gray-700 flex flex-col items-center text-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          <h3 class="text-gray-900 dark:text-gray-50 text-lg">{{ t.card2Title }}</h3>
          <p class="text-gray-600 dark:text-slate-300 text-sm min-h-[44px]">{{ t.card2Text }}</p>
          <img src="/assets/images/tracking-icon.png" alt="Tracking Icon" class="w-16 h-16 object-contain [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.4))]" />
        </div>
        <div class="bg-white border border-gray-200 rounded-2xl p-5 text-gray-700 flex flex-col items-center text-center gap-2 transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)] dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300">
          <h3 class="text-gray-900 dark:text-gray-50 text-lg">{{ t.card3Title }}</h3>
          <p class="text-gray-600 dark:text-slate-300 text-sm min-h-[44px]">{{ t.card3Text }}</p>
          <img src="/assets/images/organized-icon.png" alt="Organized Icon" class="w-16 h-16 object-contain [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.4))]" />
        </div>
      </div>
    </div>

    <div class="pt-8 px-5 pb-16 flex flex-col items-center gap-2">
      <h2 class="text-gray-900 dark:text-gray-100 font-bold">{{ t.follow }}</h2>
      <a
        href="https://www.instagram.com/festpocket/"
        target="_blank"
        class="inline-flex items-center gap-2 no-underline px-3 py-2 rounded-full border transition-colors duration-150 text-indigo-600 bg-gray-100 border-gray-300 hover:bg-gray-200 dark:text-indigo-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-slate-700 hover:-translate-y-0.5"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
          alt="Instagram Icon"
          class="w-6 h-6"
        />
        @festpocket
      </a>
    </div>

    <div v-if="isModalOpen" id="downloadModal" @click.self="closeModal" class="fixed inset-0 bg-black/60 flex justify-center items-center p-4 z-50">
      <div class="relative bg-white text-gray-900 border border-gray-200 rounded-2xl w-full max-w-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.25)] dark:bg-slate-950 dark:text-gray-200 dark:border-gray-800">
        <span class="absolute right-3 top-2 text-[28px] leading-none cursor-pointer text-gray-500 dark:text-gray-400" @click="closeModal">&times;</span>
        <h2 class="text-xl font-semibold">Download FestPocket</h2>
        <p class="text-gray-600 dark:text-slate-300 mt-1">Choose your preferred store to download FestPocket:</p>
        <div class="grid grid-cols-2 gap-3 mt-3">
          <a href="https://apps.apple.com" target="_blank" class="text-center py-3 rounded-xl no-underline font-bold bg-white text-gray-900">Apple Store</a>
          <a href="https://play.google.com" target="_blank" class="text-center py-3 rounded-xl no-underline font-bold bg-emerald-400 text-green-950">Google Play Store</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const language = ref<'en' | 'nl' | 'fr'>('en')

const translations = {
  en: {
    title: 'Your Ultimate Festival Companion 🎶✨',
    subtitle: 'Love festivals but hate the chaos of planning?',
    reasonTitle: 'More reasons to download FestPocket',
    card1Title: 'User-Friendly Interface',
    card1Text: 'Intuitive design makes it easy to manage your festivals and budgets.',
    card2Title: 'Comprehensive Tracking',
    card2Text: 'Keep all your festival details in one place and get a clear overview of your spending.',
    card3Title: 'Stay Organized',
    card3Text: 'Never miss a festival or go over budget again with FestPocket.',
    download: 'Download',
    follow: 'Follow us on Instagram',
  },
  nl: {
    title: 'Jouw ultieme festivalmaatje 🎶✨',
    subtitle: 'Hou je van festivals maar haat je de chaos van het plannen?',
    reasonTitle: 'Meer redenen om FestPocket te downloaden',
    card1Title: 'Gebruiksvriendelijke interface',
    card1Text: 'Intuïtief ontwerp maakt het gemakkelijk om uw festivals en budgetten te beheren.',
    card2Title: 'Uitgebreid volgen',
    card2Text: 'Houd al uw festivalgegevens op één plek en krijg een duidelijk overzicht van uw uitgaven.',
    card3Title: 'Blijf georganiseerd',
    card3Text: 'Mis nooit meer een festival of ga over budget met FestPocket.',
    download: 'Downloaden',
    follow: 'Volg ons op Instagram',
  },
  fr: {
    title: 'Votre compagnon de festival ultime 🎶✨',
    subtitle: 'Vous aimez les festivals mais détestez le chaos de la planification?',
    reasonTitle: 'Plus de raisons de télécharger FestPocket',
    card1Title: 'Interface conviviale',
    card1Text: 'La conception intuitive facilite la gestion de vos festivals et de vos budgets.',
    card2Title: 'Suivi complet',
    card2Text:
      "Gardez tous les détails de votre festival au même endroit et obtenez un aperçu clair de vos dépenses.",
    card3Title: 'Rester organisé',
    card3Text: "Ne manquez jamais un festival ou ne dépassez plus votre budget avec FestPocket.",
    download: 'Télécharger',
    follow: 'Suivez-nous sur Instagram',
  },
} as const

const t = computed(() => translations[language.value])

const isModalOpen = ref(false)
const openModal = () => (isModalOpen.value = true)
const closeModal = () => (isModalOpen.value = false)
const onChangeLanguage = () => {
  // nothing else needed, reactive binding updates UI
}

useHead({
  title: 'FestPocket',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/assets/images/festpocket-logo-2.png' },
  ],
})
</script>
