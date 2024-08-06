export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string[];
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    projectsPerPage?: number;
    postsPerPage?: number;
    speakingPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Kelly Vaughn | Engineering Leader, Speaker, Author',
    subtitle: 'Engineering Leader | Speaker | Author',
    description: 'Engineering Leader, Speaker, Author',
    image: {
        src: '/kelly-vaughn.jpg',
        alt: 'Kelly Vaughn | Engineering Leader, Speaker, Author'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Speaking',
            href: '/speaking'
        },
        {
            text: 'Course',
            href: '/course'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: '•',
            href: ''
        },
        {
            text: 'Modern Leader',
            href: 'https://modernleader.is/subscribe'
        },
        {
            text: 'Tiny Triumphs',
            href: 'https://www.tinytriumphs.xyz/subscribe'
        },
        {
            text: 'Podcast',
            href: 'https://ladybug.dev'
        }
    ],
    footerNavLinks: [
        {
            text: 'Newsletter',
            href: 'https://modernleader.is/subscribe'
        },
        {
            text: 'Course',
            href: 'https://maven.com/kellyvaughn'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Twitter',
            href: 'https://twitter.com/kvlly'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/kellyvaughn'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/kelllyvaughn'
        },
        {
            text: 'Threads',
            href: 'https://www.threads.net/@kelllyvaughn'
        }
    ],
    hero: {
        text: [
            "I'm **Kelly Vaughn**, an engineering leader and speaker based in Atlanta, GA. I'm currently Director of Engineering at Spot AI and I'm passionate about coaching individual contributors into leadership roles and mentoring engineering managers to be impactful, empowering leaders.",
            'I run an online course titled [*Building Influence for Engineers & EMs*](/course) and conduct conference and corporate workshops on the same topic. I also write a weekly newsletter titled [*The Modern Leader*](https://modernleader.is/subscribe).',
            "A frequent podcaster and public speaker, I co-host the [*Ladybug Podcast*](https://ladybug.dev), have a recurring position on the [*Dev Interrupted*](https://devinterrupted.com) Podcast, and I also guest on others' podcasts and speak at conferences and events around the world.",
            "When I'm not working, you'll probably find me running, traveling to a new country, or spending time at a coffee shop to make a tiny dent in my never-ending book collection."
        ],
        image: {
            src: '/kelly-vaughn.jpg',
            alt: 'Headshot of Kelly Vaughn'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    speakingPerPage: 8
};

export default siteConfig;
