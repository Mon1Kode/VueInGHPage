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
        slug: 'lapasserelle',
        title: 'La Passerelle',
        subtitle: 'Social support network',
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
    {
        slug: 'fitphone',
        title: 'FitPhone',
        subtitle: 'Phone habits',
        description:
            'FitPhone helps you reduce phone addiction and build better habits by replacing screen time with meaningful offline activities. Discover local events, track your phone usage, and reflect with guided journaling. Improve your well-being and make every moment count!',
        image: '/screens/fitphone-1.png',
        logo: '/logos/fitphone.png',
        stack: ['Flutter', 'Firebase', 'Figma', 'Riverpod'],
        screenshots: [
            '/screens/fitphone-1.png',
            '/screens/fitphone-2.png',
            '/screens/fitphone-3.png',
            '/screens/fitphone-7.png',
            '/screens/fitphone-4.png',
            '/screens/fitphone-5.png',
            '/screens/fitphone-6.png',
            '/screens/fitphone-8.png',
        ],
        link: 'https://apps.apple.com/us/app/fontys-fitphone/id6738086490',
        cta: 'View on App Store',
    },
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
    },
    {
        slug: 'festpocket',
        title: 'FestPocket',
        subtitle: 'Music Festival Companion',
        description:
            'FestPocket: Your Ultimate Festival Companion! Love festivals but hate the chaos of planning? FestPocket is here to make your festival experience seamless, exciting, and stress-free! Whether you’re budgeting for tickets, tracking your countdown, or planning multiple events, FestPocket has got you covered.',
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
]
