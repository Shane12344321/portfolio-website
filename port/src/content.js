/* Content grounded in Shane's public résumé and portfolio. */
const C = {
  name: 'Shane Sarosh',
  first: 'Shane',
  role: 'CS Student · AI & Software Engineering',
  location: 'Kochi, India',
  hours: 'India Standard Time (UTC+5:30)',
  about: [
    "I'm a Computer Science and Engineering undergraduate at VIT, interested in understanding how AI systems work and building software that makes them useful.",
    "My work spans mechanistic interpretability, developer tools, and applied AI. I have probed a chess model's internal representations, built a fault-tolerant job monitoring pipeline, and developed an AI-assisted QA tool during an internship at South Indian Bank."
  ],
  facts: [
    ['Now', 'B.Tech in Computer Science and Engineering, VIT'],
    ['Focus', 'AI research, interpretability, software engineering'],
    ['Experience', 'AI Intern, South Indian Bank (2026)'],
    ['Graduation', 'May 2028']
  ],
  whoami: '$ whoami\nshane: curious about how intelligent systems work\n$ ls projects\nsearchless-chess  hybrid-job-hunter  noteforge  aspf  chalk',
  projects: [
    { id: 'searchless-chess', name: 'Searchless Chess', year: 2026, kind: 'Mechanistic interpretability', role: 'Research project', status: 'Research', art: 'orbit',
      summary: "Probed DeepMind's 270M-parameter Searchless Chess transformer to study what it represents about the board and where those representations appear.",
      stats: [['136', 'linear probes'], ['5,488', 'positions'], ['17', 'layers']],
      highlights: ['Tested eight chess concepts across all 17 layers.', 'Recovered material balance with R² = 0.999 and center control with R² = 0.989 from layer activations.', 'Built a Chrome extension and WebSocket pipeline to visualize move preferences during post-game analysis.'],
      stack: ['Python', 'JAX', 'Scikit-learn', 'WebSockets', 'Chrome Extensions'],
      link: { label: 'Explore my GitHub', href: 'https://github.com/Shane12344321' } },
    { id: 'hybrid-job-hunter', name: 'Hybrid Job Hunter', year: 2026, kind: 'Job monitoring automation', role: 'Builder', status: 'Open source', art: 'terminal',
      summary: 'Monitors career pages through structured APIs and browser automation, with scheduled runs and per-source fault tracking.',
      stats: [['7', 'career platforms'], ['2', 'adapter modes']],
      highlights: ['Built adapters for seven ATS and career platforms, including JavaScript-rendered sites.', 'Added per-source health tracking, request budgets, and queued retries.', 'Runs on a schedule with GitHub Actions and no dedicated server.'],
      stack: ['Python', 'Playwright', 'GitHub Actions', 'Telegram API'],
      link: { label: 'View repository', href: 'https://github.com/Shane12344321/hybrid-job-hunter' } },
    { id: 'noteforge', name: 'NoteForge', year: 2026, kind: 'AI-assisted banking QA', role: 'AI Intern, South Indian Bank', status: 'Internship project', art: 'pages',
      summary: 'Turns banking business requirements into structured, traceable test cases for QA workflows.',
      stats: [],
      highlights: ['Built the generation workflow with FastAPI, Pydantic, and LLM-based generation.', 'Validated test cases against digital banking flows covering identity verification, core banking, and real-time payments.'],
      stack: ['Python', 'FastAPI', 'Pydantic', 'LLMs'],
      link: { label: 'View repository', href: 'https://github.com/Shane12344321/NoteForge' } },
    { id: 'aspf', name: 'Adaptive Shortest-Path Framework', year: 2026, kind: 'Algorithm selection', role: 'Builder', status: 'Research project', art: 'ledger',
      summary: 'Selects among BFS, Dijkstra, and Dial algorithms at runtime using structural features of a graph.',
      stats: [['88%', 'held-out selection accuracy'], ['up to 73%', 'faster on sparse graphs']],
      highlights: ['Trained a Random Forest classifier to choose the fastest shortest-path algorithm.', 'Measured up to 73% faster execution than fixed Dijkstra on sparse graphs and 58% on uniform-weight graphs.'],
      stack: ['C++', 'Python', 'Scikit-learn', 'NetworkX'],
      link: { label: 'Explore my GitHub', href: 'https://github.com/Shane12344321' } },
    { id: 'chalk', name: 'CHALK', year: 2026, kind: 'Conversational whiteboard prototype', role: 'Builder', status: 'Open source prototype', art: 'waves',
      summary: 'An experimental voice-driven whiteboard that turns a conversation into structured, validated drawing instructions.',
      stats: [],
      highlights: ['Separates the voice conversation from generation of board instructions.', 'Validates drawing instructions before rendering them on the board.'],
      stack: ['Realtime voice', 'Structured generation', 'Web'],
      link: { label: 'Explore CHALK', href: 'https://shanesarosh.xyz/chalk/' } }
  ],
  work: [
    { company: 'South Indian Bank', title: 'AI Intern', dates: 'May – Jun 2026', place: 'Kochi, India', team: 'AI',
      summary: 'Built NoteForge, an AI-assisted platform for turning banking requirements into traceable QA test cases.',
      points: ['Developed the requirements-to-test-case workflow with FastAPI, Pydantic, and LLM-based generation.', 'Validated against eKYC, core-banking integration, payment limits, and failure handling across UPI, IMPS, NEFT, and RTGS.'],
      stack: ['Python', 'FastAPI', 'Pydantic', 'LLMs'] }
  ],
  education: { school: 'Vellore Institute of Technology (VIT)', degree: 'B.Tech, Computer Science and Engineering', dates: 'Aug 2024 – May 2028',
    notes: ['Vellore, India', 'CGPA: 8.79/10 (as listed on my résumé)'] },
  skills: {
    Languages: { blurb: 'Languages listed on my résumé.', items: ['Python', 'C++', 'JavaScript', 'LaTeX'] },
    'ML & Interpretability': { blurb: 'Methods and libraries used in my projects.', items: ['JAX', 'Scikit-learn', 'Linear probing', 'NetworkX'] },
    'Tools & Infra': { blurb: 'Tools used across my research and engineering work.', items: ['FastAPI', 'Pydantic', 'Playwright', 'GitHub Actions', 'Git', 'WebSockets', 'Chrome Extensions', 'Telegram API'] }
  },
  learning: ['Mechanistic interpretability', 'Interactive learning tools', 'Reliable AI-assisted software'],
  contact: {
    email: 'shanesarosh@gmail.com',
    github: { label: 'github.com/Shane12344321', href: 'https://github.com/Shane12344321' },
    linkedin: { label: 'linkedin.com/in/shanesarosh', href: 'https://www.linkedin.com/in/shanesarosh' },
    availability: 'Open to conversations about AI research, software engineering, and interesting projects. Email me to get in touch.'
  },
  repos: [
    ['Hybrid Job Hunter', 'Career-page monitoring pipeline', 'https://github.com/Shane12344321/hybrid-job-hunter'],
    ['NoteForge', 'AI-assisted QA test-case generation', 'https://github.com/Shane12344321/NoteForge'],
    ['CHALK', 'Conversational whiteboard prototype', 'https://github.com/Shane12344321/chalk2']
  ]
};
