export interface Project {
    slug: string
    title: string
    subtitle: string
    description: string
    image: string
    logo: string
    stack: string[]
    screenshots: string[]
    link: string
    cta: string
}

export const projects: Project[] = [
    {
        slug: 'buurtwerf',
        title: 'Buurtwerf',
        subtitle: 'Greenup platform for neighborhoods',
        description:
            'Buurtwerf helps communities organize eco-friendly actions and initiatives. Built with Flutter and Firebase.',
        image: '/screens/buurtwerf-1.png',
        logo: '/logos/buurtwerf.png',
        stack: ['Flutter', 'Firebase', 'Figma'],
        screenshots: [
            '/screens/buurtwerf-1.png',
            '/screens/buurtwerf-2.png',
            '/screens/buurtwerf-3.png',
            '/screens/buurtwerf-4.png',
        ],
        link: 'https://apps.apple.com/your-buurtwerf-link',
        cta: 'View on App Store',
    },
    {
        slug: 'festpocket',
        title: 'FestPocket',
        subtitle: 'Event & ticket management',
        description:
            'All-in-one app for organizing festivals, selling tickets, and managing entrances. Built with Flutter & Supabase.',
        image: '/screens/festpocket-1.png',
        logo: '/logos/festpocket.png',
        stack: ['Flutter', "Figma"],
        screenshots: [
            '/screens/festpocket-1.png',
            '/screens/festpocket-2.png',
            '/screens/festpocket-3.png',
            '/screens/festpocket-4.png',
        ],
        link: 'https://apps.apple.com/fr/app/festpocket/id1560730734',
        cta: 'View on App Store',
    },
    {
        slug: 'lapasserelle',
        title: 'La Passerelle',
        subtitle: 'Social support network.',
        description:
            'La Passerelle stands out as an innovative support program, specially designed for individuals awaiting care in a specialized service.',
        image: '/screens/lapasserelle-1.png',
        logo: '/logos/lapasserelle.png',
        stack: ['Flutter', 'Firebase', "Figma"],
        screenshots: [
            '/screens/lapasserelle-1.png',
            '/screens/lapasserelle-2.png',
            '/screens/lapasserelle-3.png',
            '/screens/lapasserelle-4.png',
        ],
        link: 'https://apps.apple.com/us/app/la-passerelle-draw-your-fight/id6502902535',
        cta: 'View on App Store',
    },
]
