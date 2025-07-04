// ~/data/design.ts
export interface Design {
    slug: string
    title: string
    subtitle: string
    description: string
    cover: string
    image: string
    tools: string[]
    colors?: string[]
    references?: string[]
    screenshots: string[]
}

export const designs: Design[] = [
    {
        slug: "finance-dashboard-exercise-2",
        title: "Dark-Mode Finance Dashboard",
        subtitle: "Personal Finance UI Exercise",
        description: "A dark-mode mobile screen design showcasing three account balances, a list of recent transactions, and visual savings-goal progress. Crafted with high-contrast neon-yellow accents on a charcoal background, built on an 8-point grid, and meeting accessibility contrast standards.",
        cover: "/screens/designs/finance-dashboard-cover.png",
        image: "/screens/designs/finance-dashboard-image.png",
        tools: ["Figma", "June 2025"],
        colors: ["#1A1A1A", "#F0F0F0", "#FFEA00"],
        references: [
            "/screens/designs/exo2-ref.png",
        ],
        screenshots: [
            "/screens/designs/exo2-first-submit.png",
            "/screens/designs/exo2-second-submit.png"
        ],
    },
    {
        slug: "travel-itinerary-exercise-3",
        title: "My Day Travel Itinerary",
        subtitle: "Light-Themed Itinerary UI Exercise",
        description: "A clean, light-mode mobile screen for a travel‐itinerary app showing your next reservation, today’s schedule timeline, and a map preview with quick actions. Built on an 8-point grid, with sky-blue accents, friendly typography, and clear tap targets.",
        image: "/screens/designs/travel-itinerary-cover.png",
        cover: "/screens/designs/travel-itinerary-cover.png",
        tools: ["Figma", "June 2025"],
        colors: [
            "#FDFBFB",
            "#BAE6FD",
            "#FDD1BA",
            "#191B1C",
        ],
        references: [
            "/screens/designs/exo3-ref.png",
        ],
        screenshots: [
            "/screens/designs/exo3-first-submit.png",
            "/screens/designs/exo3-final-submit.png"
        ],
    },
    {
        slug: "fitness-tracker-exercise-4",
        title: "Fitness Tracker Home Screen",
        subtitle: "Daily Progress & Quick-Start UI Exercise",
        description:
            "A light-mode fitness-tracker home screen showing daily summary cards (steps, calories, active minutes), a workout-streak meter, and a prominent Start Workout button. Built on an 8-point grid with white background and teal/orange accents.",
        cover: "/screens/designs/fitness-tracker-cover.png",
        image: "/screens/designs/fitness-tracker-cover.png",
        tools: ["Figma", "June 2025"],
        colors: [
            "#FFFFFF",
            "#069494",
            "#FF7017",
            "#000000"
        ],
        references: [
            "/screens/designs/exo4-ref.png",
        ],
        screenshots: [
            "/screens/designs/exo4-first-submit.png",
            "/screens/designs/exo4-final-submit.png",
        ],
    },
    {
        slug: "product-detail-exercise-5",
        title: "E-Commerce Product Detail Screen",
        subtitle: "Mobile Shopping UI Exercise",
        description:
            "A light-mode product-detail screen featuring an image carousel with thumbnails, clear product info (name, price, rating, description), and a sticky bottom panel with quantity selector, Add to Cart button, and Buy Now link. Designed on an 8-point grid with white background and navy/coral accents.",
        cover: "/screens/designs/product-detail-cover.png",
        image: "/screens/designs/product-detail-cover.png",
        tools: ["Figma", "June 2025"],
        colors: [
            "#F8F8F8",
            "#001F48",
            "#FF8559",
            "#FFFFFF"
        ],
        references: [
            "/screens/designs/exo5-ref.png",
        ],
        screenshots: [
            "/screens/designs/exo5-first-submit.png",
            "/screens/designs/exo5-final-submit.png"
        ],
    },
    {
        slug: "mental-health-checkin-exercise-6",
        title: "Mental Health Check-In Screen",
        subtitle: "Calm UI Exercise for Well-being",
        description:
            "A soothing, pastel-themed mobile screen for a daily mental-health check-in. Includes a mood selector, a quick journal prompt, and a self-care suggestion card, all arranged in a tranquil, spacious layout with clear tap targets.",
        image: "/screens/designs/mental-health-cover.png",
        cover: "/screens/designs/mental-health-cover.png",
        tools: ["Figma", "June 2025"],
        colors: [
            "#CFF4D2",
            "#CCCCCC",
            "#9A9AEC",
        ],
        references: [
            "/screens/designs/ref-mood-selector.png",
            "/screens/designs/ref-activity.png"
        ],
        screenshots: [
            "/screens/designs/exo6-first-submit.png",
            "/screens/designs/exo6-final-submit.png"
        ],
    }
];
