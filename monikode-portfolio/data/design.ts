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
    }
];
