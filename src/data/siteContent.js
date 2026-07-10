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
          "Built a Flask + React admin/expert application with an anchor-Item-Response-Theory (2PL) backend that lets admin/expert import QA items, assign/send questions to participants, view metadata, monitor participant engagement, and review participants' answers.",
        readMoreText: [
          'Each route of the platform API is a thin controller that opens a SQLAlchemy session over Supabase Postgres and delegates to a service module.',
          'Built an anchor-IRT algorithm in the backend for assigning questions. Used a transparent 2PL MAP estimator that treats participants as respondents and QA items as test items to jointly estimate participant ability, item difficulty, and item discrimination, and uses Fisher information to drive adaptive question selection, recommending the item that is most informative for a participant of a given ability.',
          'Functionally, admins import questions from JSON, manage QA items with full CRUD, per-item stats, responses, assignments, and open/MCQ/TF types. They can also view an analytics dashboard aggregating participant and response counts, average correctness, flag rates, and coverage against targets.',
          'Experts record per-language question audio and review flagged responses. All participant audio and recordings are served through an authenticated media proxy, and data can be exported as responses CSV or zipped audio archives.',
        ],
        alt: 'QA Analytical Platform project preview',
        links: [],
      },
      {
        title: 'Gamified Answer Collection and Engagement Dashboard',
        summary:
          'Built a Duolingo-inspired QA response dashboard using HCI principles for engagement, with guided question paths, streak tracking, achievements, rewards, leaderboards, profile customization, and daily challenge flows.',
        readMoreText: [
          'Built a Duolingo-inspired QA response dashboard using HCI principles for engagement to motivate users to complete assigned question-answering tasks.',
          'Implemented guided question paths, daily challenge flows, streak tracking, achievements, rewards, leaderboards, profile customization, and an in-app shop experience.',
          'Integrated the dashboard with user-specific QA assignment data, completion state, reward claiming, cosmetic selection, and answer submission flows to create a responsive, interactive experience for tracking progress and encouraging repeated participation.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F6f5d69eba3c14ae9a378ea4671231876',
        alt: 'Gamified answer collection and engagement dashboard',
        links: [],
      },
      {
        title: 'WhatsApp Question-Answer Routing and Response Backend',
        summary:
          'Built a Flask-based WhatsApp backend that manages participant QA workflows through Meta WhatsApp webhooks, handling assignment delivery, text/audio answer intake, scoring, reminders, streaks, badges, and reward logic backed by Supabase/Postgres.',
        readMoreText: [
          'Built a Flask backend for a WhatsApp-based QA collection system using Meta’s WhatsApp webhook and Graph API. Designed a provider-separated architecture where WhatsApp transport, webhook security, and outbound messaging are isolated from the core participant workflow.',
          'Implemented participant session management, QA assignment selection, batch continuation, incomplete assignment recovery, text and audio response handling, transcription integration, keyword and multiple-choice scoring, expert-review flagging, and persistent event logging in Supabase/Postgres.',
          'Added engagement mechanics including reminders, streak updates, badge awards, currency rewards, batch-completion bonuses, and adaptive batch-size nudges to improve participant completion and retention.',
        ],
        image:
          'https://cdbuilder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2Fcceb872672d844aba4a8a0dc0c717754',
        alt: 'WhatsApp question-answer routing backend project',
        links: [],
      },
      {
        title: 'Bible Translation QA Preparation and Assessment Pipeline',
        summary:
          'Built an LLM-assisted Python pipeline that converts Bible translation Q/A data into cleaner, shorter, assessment-ready records supporting both open-answer and multiple-choice formats.',
        readMoreText: [
          'Built an AI-assisted Bible QA processing system using Python, LangChain, OpenAI APIs, Pydantic, NLTK, scikit-learn, and JSON-based data pipelines.',
          'The project uses LangChain to orchestrate multi-step LLM workflows, OpenAI chat models for scoring, rewriting, filtering, and multiple-choice conversion, and OpenAI embeddings with cosine similarity to detect near-duplicate questions. Pydantic provides structured schemas for reliable LLM outputs, while NLTK and WordNet support keyword extraction, lemmatization, and lexical analysis.',
          'The pipeline processes UW Bible translation Q/A metadata into structured JSON outputs, preserving source traceability while adding assessment metadata, difficulty labels, answer keywords, and format variants such as open-answer and multiple-choice questions.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2Fe62c46fa1fe042ea864c5016580609d5',
        alt: 'Bible translation QA preparation and assessment pipeline',
        links: [
          { label: 'GitHub', href: 'https://github.com/AnthonyBatt/ETEN-Bible-translation-project', icon: 'github' },
        ],
      },
      {
        title: 'Cross-Platform Spotify and YouTube Music Playlist Conversion System',
        summary:
          'Built a full-stack playlist migration tool that converts playlists between Spotify, YouTube, and YouTube Music using a React frontend, Flask backend, OAuth authentication, streaming progress updates, and API integrations with Spotify, Google/YouTube, and ytmusicapi.',
        readMoreText: [
          'Developed a full-stack playlist conversion platform that supports bidirectional migration between Spotify and YouTube/YouTube Music. The React 19 frontend can run both as a local web app and as a Chrome/Edge browser extension injected into Spotify Web Player and YouTube Music. The UI handles OAuth login flows, playlist selection, conversion direction, destination playlist options, and real-time conversion progress.',
          'The Python backend uses Flask, Flask-CORS, and Requests to expose REST and streaming endpoints for playlist import/export workflows. It integrates with the Spotify Web API for playlist creation, track search, liked songs access, and track insertion, while Google API clients and ytmusicapi provide YouTube and YouTube Music playlist access. It also handles Spotify and Google OAuth, token persistence, credential refresh, and extension-compatible authentication.',
          'Playlist parsing and matching services normalize pasted or imported track lists into canonical Artist - Title records, combining rule-based parsing with optional LLM-assisted cleanup through local Ollama models or OpenAI Chat Completions. Additional Playwright tooling captures YouTube Music browser headers when cookie-based access is needed.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2Fd67941ed8c464b02821d9b9654348805',
        alt: 'Spotify and YouTube Music playlist conversion system',
        links: [
          { label: 'GitHub', href: 'https://github.com/louiscao669/Playlist_Converter', icon: 'github' },
        ],
      },
      {
        title: 'Translation Quality Proxy Validation and Evaluation Framework with Small Language Models',
        summary:
          'Built an end-to-end evaluation framework to test whether small-language-model question-answering accuracy can serve as a proxy for Bible translation quality, demonstrating that the QA proxy measures meaning preservation rather than fluency.',
        readMoreText: [
          'Designed and implemented a multi-stage Python evaluation pipeline that translates QA items into a decanonicalized Chinese stand-in language, protects canonical entities via token masking, generates answers from verse-windowed context using ability-tiered answer models, back-translates open responses, and scores them against gold English answers. Per-stage caching and force-rerun flags support reproducible experiment iteration.',
          'Manufactured the translation-quality axis with Hugging Face Transformers and PyTorch, running NLLB-200-1.3B with configurable dropout for controlled degradation alongside mBART-50 and Helsinki-NLP OPUS baselines. The respondent-ability axis uses Ollama-hosted quantized models—including Llama 3.2 1B, Qwen 2.5 1.5B, and Qwen 3 1.7B—while the OpenAI API supports answer scoring, synthetic defect-bank generation, and MQM-style error annotation.',
          'A suite of roughly thirty argparse CLI scripts generates variants across eight defect families, performs MQM scoring with regex-based verse alignment, compares models, and aggregates results. Experiments produce structured JSON/CSV grids spanning translation method, answer model, chapter, defect type, and dose, rendered as Matplotlib visualizations and auto-generated PowerPoint reports.',
        ],
        alt: 'Translation quality proxy validation framework',
        links: [],
      },
      {
        title: 'Causal Inference Pipeline for Smoking–Lung Cancer Risk',
        summary:
          'My high school research project estimated the causal effect of smoking on lung cancer from observational patient data using backdoor adjustment, front-door adjustment, and counterfactual analysis.',
        readMoreText: [
          'Built on Judea Pearl’s structural causal model framework—directed acyclic graphs, the do-operator, and do-calculus—the project models smoking, alcohol use, fatigue, occupational hazard, passive smoking, chronic lung disease, and lung cancer. The graph encodes which factors confound smoking and which mediate its path to cancer.',
          'Applied three identification strategies. Backdoor adjustment conditions on observed confounders to block spurious paths between smoking and cancer. Front-door adjustment recovers the causal effect through a mediator even when unobserved confounders exist between smoking and cancer. Counterfactual analysis moves from population estimates to the individual level, estimating how a specific patient’s cancer risk would change under different smoking habits.',
          'The patient-level observational data requires causal analysis rather than plain regression because correlation cannot separate smoking’s effect from its confounders. The Python workflow uses pandas and NumPy for data handling and conditional-probability tables, with backdoor and front-door adjustment formulas expressed through pgmpy.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F8b265a82002749c385d0601f5db39626',
        alt: 'Causal inference analysis of smoking and lung cancer risk',
        paper: {
          label: 'Research paper',
          href: 'https://www.regate.net/publication/382604710_Effect_of_smoking_on_lung_cancer_A_causal_inference_approach',
        },
        links: [],
      },
      {
        title: 'Generative Persona and Ad-Auditing Pipeline Development',
        summary:
          'Generated 200 diverse persona descriptions and supervised an end-to-end pipeline that expanded personas into schedules and browsing histories, modified Google My Ad Center attributes, and validated the resulting advertising experiences.',
        readMoreText: [
          'Developed persona-generation workflows using Python, GPT-4o, LangChain few-shot prompting, Pydantic structured-output validation, and Sentence Transformers for similarity-based example selection. Supervised the downstream generation of schedules and browsing histories and refined prompts to improve consistency and realism.',
          'Oversaw a Node.js/Puppeteer automation workflow that translated persona attributes—including age, gender, income, education, employment, homeownership, and parental status—into Google Account and My Ad Center settings.',
          'Validated modifications through automated Chrome sessions, SQLite-based browsing-history injection, ad-iframe detection, and Sharp-powered screenshot processing.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2F43e52369522642258ae2b5e2f1092c51',
        alt: 'Generative persona and advertising audit pipeline',
        links: [
          { label: 'GitHub', href: 'https://github.com/louiscao669/AI-Project-1-ChaoRan-', icon: 'github' },
        ],
      },
      {
        title: 'Gomoku AI Self-Play Training and Neural Search Pipeline',
        summary:
          'Developed an AlphaZero-inspired Gomoku AI that combines Monte Carlo Tree Search with a residual policy-value neural network, trained through iterative self-play and evaluated against heuristic opponents.',
        readMoreText: [
          'Built in Python using PyTorch, NumPy, and Gymnasium. Implemented a residual CNN with policy and value heads, Monte Carlo Tree Search move selection, experience replay, Dirichlet exploration, and checkpointed self-play training.',
          'Added heuristic warm-start policies, rule-based evaluation, Matplotlib game visualization, and hardware acceleration across CUDA, Apple Metal (MPS), and CPU.',
        ],
        image:
          'https://cdn.builder.io/api/v1/image/assets%2F049e22941f084988b8dad46dae79b4c5%2Fd99d17f0caec4a06b387ea617228d9d0',
        alt: 'Gomoku AI self-play and neural search pipeline',
        links: [
          { label: 'GitHub', href: 'https://github.com/louiscao669/ai_gomoku', icon: 'github' },
        ],
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
