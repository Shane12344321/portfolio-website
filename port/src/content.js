/* ─────────────────────────────────────────────────────────────
   PORTFOLIO CONTENT: everything below is filler. Edit freely.
   Menus and windows are generated from this object.
   ───────────────────────────────────────────────────────────── */
const C = {
  name: 'Jordan Vale',
  first: 'Jordan',
  role: 'Software Engineer',
  location: 'Brooklyn, NY',
  hours: 'New York time (UTC−5)',
  about: [
    "I'm a software engineer with seven years of experience across backend infrastructure, developer tooling, and the occasional frontend I get attached to.",
    "I like problems where correctness matters and latency shows: sync engines, schedulers, anything with a queue in the middle. Off the clock I maintain a couple of open-source CLIs and restore old computers, which explains the machine you're using."
  ],
  facts: [
    ['Now', 'Senior Software Engineer, Northwind Labs'],
    ['Focus', 'Distributed systems, developer tools'],
    ['Usual stack', 'TypeScript, Go, Rust, Postgres'],
    ['Status', 'Open to staff-level roles']
  ],
  whoami: '$ whoami\njordan: builds systems that stay up\n$ uptime\n7 yrs in production, 0 pages ignored',

  // `art` picks the dithered banner: pages | orbit | waves | terminal | ledger
  projects: [
    { id: 'slate', name: 'Slate', year: 2025, kind: 'Local-first notes app', role: 'Creator', status: 'Shipping', art: 'pages',
      summary: 'A notes app that works offline first and syncs through CRDTs, so edits from a laptop, phone and tablet merge without conflicts or a spinner.',
      stats: [['12k', 'weekly users'], ['28 ms', 'p95 sync'], ['4.8★', 'App Store rating']],
      highlights: [
        'Designed the sync protocol on Yjs, with a Rust server fanning updates out over WebSockets.',
        'Cut cold start from 1.9 s to 340 ms by moving the search index into on-device SQLite.',
        'Built the conflict-free outline editor used for nested lists.'
      ],
      stack: ['TypeScript', 'Rust', 'SQLite', 'Yjs', 'WebSockets'],
      link: { label: 'slate.example.com', href: 'https://example.com' } },
    { id: 'orbit', name: 'Orbit', year: 2024, kind: 'Distributed job scheduler', role: 'Tech lead', status: 'In production', art: 'orbit',
      summary: "Runs 40 million background jobs a day for Northwind's platform, with at-least-once delivery, priority lanes, and a dashboard people actually open.",
      stats: [['40M', 'jobs per day'], ['99.99%', 'uptime, 12 months'], ['−62%', 'infra cost']],
      highlights: [
        'Replaced a cron-and-Redis setup with a Postgres-backed lease queue, adding no new infrastructure.',
        'Built backpressure that sheds low-priority work before the database notices.',
        'Led a team of four through the migration with zero dropped jobs.'
      ],
      stack: ['Go', 'Postgres', 'gRPC', 'Kubernetes', 'Grafana'],
      link: { label: 'Read the write-up', href: 'https://example.com' } },
    { id: 'tidepool', name: 'Tidepool', year: 2023, kind: 'Real-time ocean data map', role: 'Side project', status: 'Live', art: 'waves',
      summary: 'Streams readings from 900 ocean buoys onto a WebGL map, so surfers and sailors can watch swell, wind and water temperature update as it happens.',
      stats: [['900', 'live buoys'], ['60 fps', 'on a 2019 phone'], ['3.1k', 'monthly visitors']],
      highlights: [
        'Tiled and delta-encoded the feed to fit 900 stations into 40 KB per update.',
        'Rendered swell direction as an instanced particle field in WebGL2.',
        "Featured in a sailing club newsletter, which I'm prouder of than I should be."
      ],
      stack: ['TypeScript', 'WebGL2', 'Python', 'FastAPI', 'Redis'],
      link: { label: 'tidepool.example.com', href: 'https://example.com' } },
    { id: 'hexkit', name: 'Hexkit', year: 2022, kind: 'Open-source scaffolder', role: 'Maintainer', status: 'Open source', art: 'terminal',
      summary: 'A Rust CLI that generates production-ready service templates, with logging, config, CI and Docker included, in under a second.',
      stats: [['2.1k', 'GitHub stars'], ['48', 'contributors'], ['0.8 s', 'to a new project']],
      highlights: [
        'Template engine with typed variables and a dry-run diff before anything is written.',
        'Plugin system on WASM so teams can ship their own generators.',
        'Reviewed and merged 300+ community pull requests.'
      ],
      stack: ['Rust', 'WASM', 'Tera', 'GitHub Actions'],
      link: { label: 'github.com/jordanvale/hexkit', href: 'https://github.com' } },
    { id: 'ledgerline', name: 'Ledgerline', year: 2021, kind: 'Payments reconciliation', role: 'Backend engineer', status: 'Shipped at Parcel & Pine', art: 'ledger',
      summary: "Matches every payout against bank statements overnight and flags the handful that don't add up, replacing a spreadsheet three people used to maintain.",
      stats: [['$1.2B', 'reconciled per year'], ['99.7%', 'auto-matched'], ['9 min', 'nightly run, was 6 h']],
      highlights: [
        'Built a rules engine the finance team edits without a deploy.',
        'Parallelized matching by merchant, taking the nightly run from six hours to nine minutes.',
        'Added an audit trail that passed SOC 2 review on the first try.'
      ],
      stack: ['Kotlin', 'Postgres', 'Kafka', 'dbt'],
      link: { label: 'Case study', href: 'https://example.com' } }
  ],

  work: [
    { company: 'Northwind Labs', title: 'Senior Software Engineer', dates: '2023 – now', place: 'New York', team: 'Platform',
      summary: 'Own the job scheduling and eventing platform every product team at Northwind builds on.',
      points: ['Tech lead for Orbit, the scheduler handling 40M jobs a day.', 'Cut p99 API latency 48% by reworking connection pooling across 30 services.', 'Mentor four engineers and run the backend interview loop.'],
      stack: ['Go', 'Postgres', 'Kubernetes', 'gRPC'] },
    { company: 'Parcel & Pine', title: 'Software Engineer', dates: '2020 – 2023', place: 'Remote', team: 'Payments',
      summary: 'Early engineer on payments for an e-commerce platform that grew from 200 to 9,000 merchants.',
      points: ['Built Ledgerline, the reconciliation engine behind every payout.', 'Moved card processing to a second provider with no downtime.', 'Wrote on-call runbooks that halved incident resolution time.'],
      stack: ['Kotlin', 'Kafka', 'Postgres', 'AWS'] },
    { company: 'Bluefin Systems', title: 'Engineering Intern', dates: 'Summer 2019', place: 'Boston', team: 'Developer tools',
      summary: 'Worked on build tooling for a 400-engineer monorepo.',
      points: ['Added remote caching to the build; median CI time fell from 22 to 9 minutes.', "Wrote a flaky-test detector that, I'm told, is still running."],
      stack: ['Python', 'Bazel', 'Go'] }
  ],
  education: { school: 'Northfield University', degree: 'B.S. Computer Science', dates: '2016 – 2020',
    notes: ['Minor in Mathematics', 'Teaching assistant, Operating Systems', 'Thesis: consistency models for mobile sync'] },

  // [name, comfort 0–100, note]
  skills: {
    Languages: { blurb: 'What I reach for, roughly in order of how often.',
      items: [['TypeScript', 95, '7 years'], ['Go', 88, '4 years'], ['SQL', 90, '7 years'], ['Rust', 74, '3 years'], ['Kotlin', 70, '3 years'], ['Python', 80, '8 years']] },
    Systems: { blurb: "The parts of a stack I'm happiest being paged for.",
      items: [['Postgres', 92, 'tuning, HA'], ['Kafka', 75, 'streams'], ['Kubernetes', 78, 'operators'], ['gRPC', 82, 'service mesh'], ['Redis', 80, 'caching'], ['WebSockets', 85, 'realtime']] },
    Toolbox: { blurb: 'Day-to-day tools and practices.',
      items: [['Observability', 86, 'Grafana, OTel'], ['CI/CD', 84, 'GH Actions'], ['Profiling', 78, 'pprof, perf'], ['Testing', 88, 'property, fuzz'], ['Design docs', 90, 'RFC culture'], ['Mentoring', 85, '4 mentees']] }
  },
  learning: ['Zig, by rewriting a toy key-value store', 'Formal methods with TLA+', 'Analog electronics, for restoring this Mac'],

  contact: {
    email: 'hello@jordanvale.dev',
    github: { label: 'github.com/jordanvale', href: 'https://github.com' },
    linkedin: { label: 'linkedin.com/in/jordanvale', href: 'https://www.linkedin.com' },
    availability: 'Open to senior and staff roles in platform or developer tooling, plus short contract work. I usually reply within two days.'
  },
  repos: [['hexkit', 'Scaffold services in under a second', 2140], ['tidepool', 'Live ocean buoy map', 412], ['pgqueue', 'Lease-based job queue on Postgres', 388], ['crdt-notes', 'Tiny CRDT playground', 156]]
};
