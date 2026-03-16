import empty from "mocked-exports/empty";

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
        slug: 'lalternatve',
        title: "L'Alternative",
        subtitle: 'Social support network',
        description:
            "L'Alternative, powered by IncluSens, stands out as an innovative support program, specially designed for individuals awaiting care in a specialized service.",
        image: '/screens/lalternatve-1.png',
        logo: '/logos/lalternatve.png',
        stack: ['Flutter', 'Firebase', "Figma"],
        screenshots: [
            '/screens/lalternatve-1.png',
            '/screens/lalternatve-2.png',
            '/screens/lalternatve-3.png',
            '/screens/lalternatve-4.png',
            '/screens/lalternatve-5.png',
        ],
        link: "",
        cta: "",
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
        link: "",
        cta: ""
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
    {
        slug: 'myworld',
        title: 'My Wolrd',
        subtitle: 'Live intelligence layers for a world in motion.',
        description:
            'MyWorld is a real-time geopolitical map that fuses conflict alerts, humanitarian signals, economic infrastructure, and situational overlays into a single intuitive interface. Toggle curated data layers, ranging from sanctions or displacement flows to naval patrols and AI datacenters, to grasp emerging hotspots at a glance and drill into verified sources with one tap',
        image: '/screens/myworld.jpg',
        logo: '/logos/myworld.png',
        stack: ['Flutter', "Figma"],
        screenshots: [
            '/screens/myworld-1.jpg',
            '/screens/myworld-2.jpg',
            '/screens/myworld-3.jpg',
            '/screens/myworld-4.jpg',
            '/screens/myworld-5.jpg',
            '/screens/myworld-6.jpg',
            '/screens/myworld-7.jpg',
            '/screens/myworld-8.jpg',
            '/screens/myworld-9.jpg',
        ],
    },
]
