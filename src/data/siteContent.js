/**
 * Single source of truth: résumé copy + data for the interactive strips (cards, carousel, menu).
 */
const placeholder =
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'

export const site = {
  name: 'Louis Cao',
  headline: "Engineer · Builder · Curious about what's next",
  heroLead:
    "I'm a software engineer who enjoys turning problems into products and creates with clear purposes. Scroll down to learn more about me.",

  about: {
    title: 'Let me introduce myself.',
    paragraphs: [
      "I care about thoughtful interfaces, reliable systems, and collaboration that ships. Below is a short overview—swap in your own story, school, and focus areas.",
      "I'm open to roles where I can own features end-to-end, mentor others, and learn from users and teammates.",
    ],
    profile: {
      blurb:
        "Currently building this portfolio as a living document. If you think we'd work well together, say hello via email.",
      bullets: [
        { label: 'Full name', value: 'Louis Cao' },
        { label: 'Location', value: 'Notre Dame, IN' },
        { label: 'Education', value: 'B.S. in Computer Science, Mathematics\nUniversity of Notre Dame' },
        { label: 'LinkedIn', value: 'https://www.linkedin.com/in/louis-cao0669', href: 'https://www.linkedin.com/in/louis-cao0669' },
        { label: 'GitHub', value: 'https://github.com/louiscao669', href: 'https://github.com/louiscao669' },
        { label: 'Email', value: 'lcao4@nd.edu', href: 'mailto:lcao4@nd.edu' },
      ],
    },
    /** Shown on the stacked cards (original template), using portfolio typography. */
    flipCards: [
      { title: 'Build', text: 'Product-minded engineering from prototype to polish.' },
      { title: 'Collaborate', text: 'Design, PM, and users in the loop early and often.' },
      { title: 'Learn', text: 'Comfortable diving deep on new domains and tools.' },
    ],
    /** Pull-quote beside the cards (replaces the old lorem block). */
    cardAside:
      'The card stack is the playful layer; the copy above is the concise layer. Edit both in this file so they tell one story.',
  },

  skillsIntro:
    "Highlights of tools and languages I reach for most often. Adjust percentages to match your comfort level.",

  skills: [
    { name: 'TypeScript / React', percent: 85 },
    { name: 'Python', percent: 80 },
    { name: 'System design', percent: 70 },
    { name: 'Data & APIs', percent: 75 },
    { name: 'Design collaboration', percent: 65 },
  ],

  cta: {
    hireLabel: 'Hire me',
    hireHref: 'mailto:you@example.com',
    cvLabel: 'Download CV',
    cvHref: 'https://drive.google.com/file/d/1RqKcOh-WdmTt7oSVxjCwQ5F7vTSvMu5_/view?usp=drive_link',
  },

  resume: {
    title: 'More of my credentials.',
    work: [
      {
        role: 'Software Engineer',
        dates: '20XX – Present',
        org: 'Your Company',
        detail:
          'Describe scope, stack, and impact. Quantify wins where you can (latency, revenue, reliability).',
      },
      {
        role: 'Intern / Contractor',
        dates: '20XX – 20XX',
        org: 'Previous org',
        detail:
          'Shipped features X and Y; collaborated across design and backend; learned Z.',
      },
    ],
    education: [
      {
        degree: "Bachelor's degree",
        dates: '20XX – 20XX',
        school: 'Your University',
        detail: 'Major, honors, clubs, or thesis title in one line.',
      },
      {
        degree: 'High school',
        dates: '20XX – 20XX',
        school: 'Your school',
        detail: 'Notable awards or leadership in one line.',
      },
    ],
  },

  /** Same entries power the résumé line items and the horizontal involvement strip. */
  work: {
    kicker: 'Portfolio',
    title: 'Projects & involvements',
    intro:
      'The same story as above, in the original wide format: scrub horizontally, flip tabs, and explore the 3D interests menu—all styled to match the rest of the site.',
  },

  projects: {
    title: 'Check out my creations.',
    items: [
      {
        title: 'Personal website',
        summary:
          'This portfolio: Vite, React, and a single content file so updates stay easy. Deployed on GitHub Pages.',
        image: placeholder,
        alt: 'Code on a laptop screen',
      },
      {
        title: 'Project two',
        summary: 'One or two sentences on problem, approach, and outcome.',
        image:
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        alt: 'Analytics dashboard',
      },
      {
        title: 'Project three',
        summary: 'Link to repo or demo when you have one.',
        image:
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
        alt: 'Laptop on a desk',
      },
    ],
  },

  activities: {
    title: 'Leadership & extracurriculars.',
    intro: 'Summary of roles outside day-to-day work.',
    items: [
      {
        title: 'Club / org role',
        org: 'Organization name',
        detail:
          'What you did, who it helped, and a measurable or qualitative outcome.',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
        alt: 'Team collaboration',
      },
      {
        title: 'Volunteering',
        org: 'Community',
        detail: 'Short description with link if relevant.',
        image:
          'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80',
        alt: 'Volunteering',
      },
    ],
  },

  interests: {
    title: 'Outside the editor',
    intro: 'A few things that keep me grounded—same gallery as before, framed for the new palette.',
    items: [
      {
        image:
          'https://api.builder.io/api/v1/image/assets/TEMP/2365485c0050abdd386287efcf0aa8768998f174?width=912',
        link: 'https://example.com',
        title: 'Hiking',
        description: 'Trails, maps, and long days outside.',
      },
      {
        image:
          'https://api.builder.io/api/v1/image/assets/TEMP/17de13a8711d29a39425f4ea7b220c88910cee8e?width=578',
        link: 'https://example.com',
        title: 'Rowing',
        description: 'Rhythm, crew, early mornings.',
      },
      {
        image:
          'https://api.builder.io/api/v1/image/assets/TEMP/e881db67cc2243b2f9c381757729571b5ffae4aa?width=452',
        link: 'https://example.com',
        title: 'Sports',
        description: 'Watching or playing—both recharge me.',
      },
    ],
  },

  stats: [
    { value: 12, suffix: '+', label: 'Projects shipped' },
    { value: 3, suffix: '', label: 'Awards / honors' },
    { value: 1000, suffix: '+', label: 'Hours coding' },
    { value: 50, suffix: '+', label: 'Books read' },
  ],

  contact: {
    title: "I'd love to connect with you.",
    intro: 'Tell me what you are building or learning.',
    location: 'Your city, region',
    email: 'you@example.com',
    social: [
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    ],
  },
}

/** Strip fields for InvolvementCard (title on card; org/detail in modal later if you extend). */
export function involvementStripItems(activities) {
  if (!activities?.items?.length) return []
  return activities.items.map((a) => ({
    title: `${a.title} — ${a.org}`,
    image: a.image ?? placeholder,
    alt: a.alt ?? a.title,
  }))
}
