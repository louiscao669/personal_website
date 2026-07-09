/**
 * Single source of truth: résumé copy + data for the interactive strips (cards, carousel, menu).
 */
const placeholder =
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'

export const site = {
  name: 'Louis Cao',
  headline: "Engineer · Builder · Curious about what's next",
  heroLead: '',

  about: {
    title: '',
    paragraphs: [
      "Pursuing a B.S. degree in Computer Science, I am an aspiring software engineer currently contributing full-time to HCI research at University of Notre Dame.",
    ],
    profile: {
      blurb: '',
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

  cta: {
    hireLabel: 'Hire me',
    hireHref: 'mailto:lcao4@nd.edu',
    cvLabel: 'Download CV',
    cvHref: 'https://drive.google.com/file/d/1RqKcOh-WdmTt7oSVxjCwQ5F7vTSvMu5_/view?usp=drive_link',
    cvDownloadHref: 'https://drive.google.com/uc?export=download&id=1RqKcOh-WdmTt7oSVxjCwQ5F7vTSvMu5_',
  },

  resume: {
    title: 'Resume',
    work: [
      {
        role: 'LLM Research Assistant',
        dates: 'August 2025 – Present',
        org: 'ETEN Bible Translation Project, HCI Lab — University of Notre Dame',
        detail:
          'Built an LLM-based LangChain pipeline to select, simplify and score Bible Q/A pairs along with an NLI-based precision-recall evaluation framework, used to crowdsource comprehension of translated Bible passages. Evaluated the pipeline by simulating user response using small language models to translations of varying qualities and developed question assignment algorithm based on Item Response Theory. Developed a React/Flask analytical platform with Supabase-backed workflows for QA-item management, participant tracking, response review, analytics dashboards, and structured data exports. Built and deployed a WhatsApp integrated backend that assigns translation questions, captures participant audio/text responses, triggers reminders, and syncs review data for human-in-the-loop translation quality assessment.',
      },
      {
        role: 'Data Mining & LLM Research Assistant',
        dates: 'March 2026 – Present',
        org: 'MoReBench LLM Moral Reasoning Benchmark, DMDM Lab — University of Notre Dame',
        detail:
          'Reproducing benchmarks for evaluating procedural integrity and pluralistic reasoning of LLMs in complex moral dilemmas.',
      },
      {
        role: 'Teaching Assistant',
        dates: 'August 2025 – May 2026',
        org: 'Department of Mathematics, University of Notre Dame',
        detail:
          'Selected as teaching assistant by the professor due to outstanding performance in Math Reasoning. Evaluated proofs and provided feedback for 30 students, focusing on rigorous mathematical writing.',
      },
      {
        role: 'LLM Research Assistant',
        dates: 'January 2025 – April 2025',
        org: 'Personalized Recommendations & User Privacy Project, HCI Lab — University of Notre Dame',
        detail:
          'Created 200+ unique, reproducible synthetic personas with personal attributes, schedules, and browsing histories using LLMs with retrieval-augmented generation, ensuring data realism. Automated manipulation of 200+ Google accounts using JavaScript, Google Account APIs, and Puppeteer to vary personal attributes and measure effects on ad recommendations. Produced a 20-page research paper on the correlation between personal data and online content recommendation.',
      },
    ],
    projects: [
      {
        role: 'Participant, 1st Place Winner',
        dates: 'April 2025',
        org: 'University of Notre Dame Hackathon, Notre Dame, IN',
        detail:
          'Developed an online meeting application providing real-time speech-to-text transcription, LLM-based context-aware response generation, and an ML-powered mind map to assist people with hearing or speech disabilities in meetings, built using Python, JavaScript, React, and React Flow. Invited by two businesses to continue developing the project; placed 1st among 8 teams and 25+ participants.',
      },
    ],
    leadership: [
      {
        role: 'Intern, Head Volunteer',
        dates: 'June 2025 – July 2025',
        org: 'Saint Francis Inn, Philadelphia, PA',
        detail:
          'Coordinated 50+ volunteers and collaborated with staff to provide daily services to 300+ community members in a high-volume, fast-paced environment.',
      },
    ],
    skills: [
      {
        category: 'Platforms',
        items: ['Linux', 'MacOS', 'Windows'],
      },
      {
        category: 'Programming',
        items: [
          'Python',
          'C',
          'Java',
          'JavaScript',
          'HTML/CSS',
          'React.js',
          'MATLAB',
          'Git',
          'SQL',
        ],
      },
      {
        category: 'Technical',
        items: [
          'LLM integration',
          'Data structures & algorithms',
          'Backend development',
          'Frontend development',
          'Data mining',
          'Machine learning',
          'Modeling',
          'Operating systems',
          'Distributed systems',
          'Debugging',
          'Software architecture',
        ],
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science',
        dates: 'Expected May 2028',
        school: 'University of Notre Dame, Notre Dame, IN',
        major: 'Computer Science & Mathematics',
        concentration: 'Human-Computer Interactions, Large Language Models',
        honors:
          "GPA 3.86 · Putnam Mathematical Competition National Top 28% · Dean's List · Glynn Family Honors Program",
        detail:
          'Related coursework includes distributed systems, programming paradigms, AI, systems programming, data structures, computer architecture, and advanced mathematics.',
      },
    ],
    monthlyTimelineIntro:
      'Bars show each experience over time. Drag the handle on the bottom line to browse month by month.',
    monthlyExperiences: [
      {
        id: 'nd-degree',
        startMonth: '2024-08',
        endMonth: '2028-05',
        color: '#e07a3a',
        category: 'education',
        title: 'B.S. Computer Science & Mathematics',
        org: 'University of Notre Dame',
        detail:''
      },
      {
        id: 'hci-privacy',
        startMonth: '2025-01', 
        endMonth: '2025-04',
        color: '#c93d4a',
        category: 'work',
        title: 'LLM Research Assistant',
        org: 'HCI Lab — Personalized Recommendations',
        detail:
          'Synthetic personas, Google account automation for ad-recommendation research, and a 20-page paper on personal data and online recommendations.',
      },
      {
        id: 'hackathon-2025',
        startMonth: '2025-04',
        endMonth: '2025-04',
        color: '#7b4bb8',
        category: 'project',
        title: 'Hackathon — 1st Place',
        org: 'University of Notre Dame',
        detail:
          'Accessible meeting app with speech-to-text, LLM responses, and mind maps; invited by two businesses to continue development.',
      },
      {
        id: 'saint-francis',
        startMonth: '2025-06',
        endMonth: '2025-07',
        color: '#d4a017',
        category: 'activity',
        title: 'Intern, Head Volunteer',
        org: 'Saint Francis Inn, Philadelphia',
        detail:
          'Coordinated 50+ volunteers serving 300+ community members daily in a high-volume environment.',
      },
      {
        id: 'hci-eten',
        startMonth: '2025-08',
        endMonth: 'present',
        color: '#2a9d8f',
        category: 'work',
        title: 'LLM Research Assistant',
        org: 'HCI Lab — ETEN Bible Translation',
        detail:
          'Built an LLM-based LangChain pipeline to select, simplify and score Bible Q/A pairs; developed a React/Flask analytics platform; and deployed a WhatsApp integrated backend for human-in-the-loop translation quality assessment.',
      },
      {
        id: 'math-ta',
        startMonth: '2025-08',
        endMonth: '2026-05',
        color: '#3d6fb4',
        category: 'work',
        title: 'Teaching Assistant',
        org: 'Department of Mathematics, Notre Dame',
        detail: 'Proof evaluation and feedback for 30 students in Math Reasoning.',
      },
      {
        id: 'dmdm-morebench',
        startMonth: '2026-03',
        endMonth: 'present',
        color: '#b83f8f',
        category: 'work',
        title: 'Data Mining & LLM Research Assistant',
        org: 'DMDM Lab — MoReBench',
        detail:
          'Reproducing benchmarks for procedural integrity and pluralistic moral reasoning in LLMs.',
      },
    ],
  },

  /** Same entries power the résumé line items and the horizontal involvement strip. */
  work: {
    kicker: '',
    title: 'Projects',
    intro: '',
  },

  projects: {
    title: 'Check out my creations.',
    items: [
      {
        title: 'Accessible meeting app (Hackathon)',
        summary:
          '1st place at ND Hackathon: real-time speech-to-text, LLM responses, and mind maps for accessible meetings.',
        image:
          'https://i.postimg.cc/pV78fdDR/Screenshot-2026-06-21-at-5-31-05-PM.png',
        alt: 'Accessible meeting app interface screenshot',
        links: [
          'https://github.com/Leoreoreo/Meeting_Assistant',
        ],
      },
      {
        title: 'Distributed Prediction Market Platform (YCombinator)',
        summary:
          'Built a forecasting platform with a Kafka-based AWS backend, React/Next.js market UI, and a read-optimized MySQL/Redis data layer with leader failover and reliable transaction handling.',
        readMoreText: [
          'Designed an asynchronous, event-driven architecture using Kafka/MSK clusters on AWS for operation polling.',
          'Deployed 12 FastAPI services across EC2 behind a load balancer, distributing workloads by assigning each server a dedicated task type. Built a read-optimized MySQL cluster with one leader and four read replicas, including automatic leader failover. Deployed a Redis cache to reduce database load and read latency.',
          'Built a React/Vite frontend for sign-in, user dashboards, organization management, event dashboards, and market trading pages. Architected core business backend for users, organizations, events, markets, permissions, token balances, transactions, payouts, quotes, and analytics, along with seed data and benchmark scripts.',
        ],
        image: 'https://i.postimg.cc/0Qnn513j/Screenshot-2026-06-21-at-5-28-04-PM.png',
        alt: 'Prediction market platform interface screenshot',
        paper: {
          label: 'Project paper',
          href: 'https://drive.google.com/file/d/1FJFq60kMv0CQRQydHWGdJTypmei-WZEM/view?usp=drive_link',
        },
        links: [
          { label: 'GitHub', href: 'https://github.com/louiscao669/Polaris', icon: 'github' },
        ],
      },
      {
        title: 'Peer-to-Peer Distributed File Replication System',
        summary:
          'In my distributed systems course, I built a fault-tolerant Bit-Torrent-style P2P file replication system.',
        readMoreText: [
          'The system has several nodes that replicate files from each other. Each node runs an identical peer that combines a storage server and client to share files across multiple machines.',
          'I implemented a persistent, crash-recoverable hash-table store using disk-backed data with atomic checkpoint and log file. I also designed an event-driven server using epoll to concurrently serve and download files across many simultaneous connections with dynamic peer discovery through a network name service.',
          'Further, I designed transparent fault tolerance via idempotent RPC operations and exponential-backoff retry, along with a randomized, load-balanced download policy to eliminate single points of failure.',
        ],
        image: 'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2Fec9cdb4b851c46579175de39d08275c9',
        alt: 'Prediction market platform interface screenshot',
        links: [
          { label: 'GitHub', href: 'https://github.com/louiscao669/Polaris', icon: 'github' },
        ],
      },
      {
        title: 'QA Analytical Platform',
        summary:
          "Built a Flask + React admin/expert application with an anchor-Item-Response-Theory (1PL/Rasch) backend that lets admin/expert import QA items, assign/send questions to participants, view metadata, monitor participant engagement, and review participants' answers.",
        readMoreText: [
          'Each route of the platform API is a thin controller that opens a SQLAlchemy session over Supabase Postgres and delegates to a service module.',
          'Built an anchor-IRT algorithm in the backend for assigning questions. Used a transparent 1PL/Rasch MAP estimator that treats participants as respondents and QA items as test items to jointly estimate participant ability and item difficulty, and uses Fisher information to drive adaptive question selection, recommending the item that is most informative for a participant of a given ability.',
          'Functionally, admins import questions from JSON, manage QA items with full CRUD, per-item stats, responses, assignments, and open/MCQ/TF types. They can also view an analytics dashboard aggregating participant and response counts, average correctness, flag rates, and coverage against targets.',
          'Experts record per-language question audio and review flagged responses. All participant audio and recordings are served through an authenticated media proxy, and data can be exported as responses CSV or zipped audio archives.',
        ],
        alt: 'QA Analytical Platform project preview',
        links: [],
      },
    ],
  },

  activities: {
    title: 'Leadership & extracurriculars.',
    intro: 'Roles outside research and coursework.',
    items: [
      {
        title: 'Intern, Head Volunteer',
        org: 'Saint Francis Inn, Philadelphia',
        detail:
          'Coordinated 50+ volunteers serving 300+ community members daily during a two-month summer placement.',
        image:
          'https://i.postimg.cc/R0jGpTtK/IMG-8903.jpg',
        alt: 'Community volunteering',
      },
    ],
  },

  interests: {
    title: 'Outside the editor',
    intro: 'A few things that keep me grounded—same gallery as before, framed for the new palette.',
    items: [
      {
        image:
          'https://i.postimg.cc/tCMxkXNV/IMG-8921.jpg',
        link: 'https://i.postimg.cc/tCMxkXNV/IMG-8921.jpg',
        title: 'Service',
        description: 'Spent 1500+ hours serving communities in South Bend and Philadelphia',
        showReadMore: true,
        readMoreHref: '#/service',
      },
      {
        image:
          'https://i.postimg.cc/y8wXhJ8N/24ec6b69849e52b6016aa81aaad91a22.jpg',
        link: 'https://i.postimg.cc/y8wXhJ8N/24ec6b69849e52b6016aa81aaad91a22.jpg',
        title: 'Fellowship',
        description: 'Time with my fellowhip that I spend 5+ hours a week with',
      },
      {
        image:
          'https://i.postimg.cc/7Yd57Kqq/a01973f2a268fced3544127d59fcabd0.jpg',
        link: 'https://i.postimg.cc/7Yd57Kqq/a01973f2a268fced3544127d59fcabd0.jpg',
        title: 'Church',
        description: 'Staying grounded in my faith and serving my church',
      },
      {
        image:
          'https://i.postimg.cc/597PY2Lx/IMG-0896-2.jpg',
        link: 'https://i.postimg.cc/597PY2Lx/IMG-0896-2.jpg',
        description: 'My favorite sport since I was 7 has taught me teamwork, concentration under stress, and courage...',
        title: 'Soccer',
      },
      {
        image:
          'https://i.postimg.cc/3xj3R1NM/IMG-6775.jpg',
        link: 'https://i.postimg.cc/3xj3R1NM/IMG-6775.jpg',
        title: 'Notre Dame Football',
      },
      {
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F0d88d53327eb415b829245f89e174361',
        link: 'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F0d88d53327eb415b829245f89e174361',
        title: 'Performance',
        description: 'Performing in Notre Dame CSSA spring gala',
      },
      {
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F719f41c85513411bb6b767b09a6c6aac',
        link: 'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F719f41c85513411bb6b767b09a6c6aac',
        title: 'Hiking',
        imageRotation: -90,
      },
      {
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F997df4c0f8714583b4d14bad21d3f6ad',
        link: 'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F997df4c0f8714583b4d14bad21d3f6ad',
        title: 'Basketball',
      }
      
    ],
  },

  stats: [
    { value: 15, suffix: '+', label: 'Projects' },
    { value: 3, suffix: '', label: 'Awards / honors' },
    { value: 1000, suffix: '+', label: 'Hours coding' },
    { value: 100, suffix: '+', label: 'Books read' },
  ],

  contact: {
    title: 'Contact me',
    intro:
      'Have a research idea, software project, or internship opportunity in mind? Send a note and I will get back to you.',
    location: 'Notre Dame, IN',
    email: 'lcao4@nd.edu',
    social: [
      { label: 'GitHub', href: 'https://github.com/louiscao669' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/louis-cao0669' },
    ],
  },
}

/** Strip fields for InvolvementCard (title on card; org/detail in modal later if you extend). */
export function involvementStripItems(activities) {
  if (!activities?.items?.length) return []
  return activities.items.map((a) => ({
    title: a.title,
    summary: [a.org, a.detail].filter(Boolean).join('. '),
    image: a.image ?? placeholder,
    alt: a.alt ?? a.title,
  }))
}
