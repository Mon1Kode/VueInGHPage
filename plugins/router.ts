import { defineNuxtPlugin } from '#app';
import { createRouter, createWebHashHistory } from 'vue-router';

export default defineNuxtPlugin((nuxtApp) => {
    const router = createRouter({
        history: createWebHashHistory(), // Use Hash Mode to support GitHub Pages
        routes: [], // Nuxt auto-generates routes, so we don't need to define them here
    });

    nuxtApp.vueApp.use(router);
});
