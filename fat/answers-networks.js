window.ATLAS_NETWORKS_ANSWERS = {
 "53906f9fe1691697": {
  "sections": [
   [
    "i. Protocol",
    [
     "Go-Back-N ARQ — the receiver discards the out-of-order frames 4 and 5, and the sender resends 3, 4 and 5 (everything from the lost frame onward)."
    ]
   ],
   [
    "ii. Minimum window and sequence bits",
    [
     "Frames 0–5 are all sent before ACK 3 reaches the sender, so six frames are outstanding at once → minimum sender window = 6.",
     "Go-Back-N needs Ws ≤ 2ᵐ − 1 → 2ᵐ ≥ 7 → m = 3 bits (sequence numbers 0–7)."
    ]
   ],
   [
    "iii. Cases and handling",
    [
     "Lost frame: Data 3 never reaches the receiver.",
     "Out-of-order frames: 4 and 5 arrive while the receiver expects 3; with a receive window of 1 they are discarded (no buffering).",
     "Handling: the receiver keeps acknowledging only up to 2 (ACK 3 = next expected). The sender’s timer for frame 3 expires and it goes back and resends 3, 4, 5 — frames 4 and 5 are sent twice.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 783.2 396\" width=\"783.2\" height=\"396\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mj-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mj-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"191.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"241.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"241.6\" y1=\"33\" x2=\"241.6\" y2=\"368\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"491.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"541.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"541.6\" y1=\"33\" x2=\"541.6\" y2=\"368\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"368\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"241.6\" y1=\"50\" x2=\"541.6\" y2=\"76\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"318.7\" y=\"48.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"57.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 0</text><line x1=\"241.6\" y1=\"76\" x2=\"541.6\" y2=\"102\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"318.7\" y=\"74.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"83.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 1</text><line x1=\"241.6\" y1=\"102\" x2=\"541.6\" y2=\"128\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"318.7\" y=\"100.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"109.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 2</text><line x1=\"241.6\" y1=\"128\" x2=\"427.6\" y2=\"144.1\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"420.6\" y1=\"137.1\" x2=\"434.6\" y2=\"151.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"420.6\" y1=\"151.1\" x2=\"434.6\" y2=\"137.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"306.7\" y=\"125.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"331.6\" y=\"134.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Data 3</text><line x1=\"241.6\" y1=\"154\" x2=\"541.6\" y2=\"180\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"318.7\" y=\"152.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"161.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 4</text><line x1=\"241.6\" y1=\"180\" x2=\"541.6\" y2=\"206\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"318.7\" y=\"178.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"187.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 5</text><line x1=\"541.6\" y1=\"128\" x2=\"241.6\" y2=\"213.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2f7a4f)\"/><rect x=\"418.2\" y=\"147.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"439.6\" y=\"156.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3</text><line x1=\"241.6\" y1=\"258\" x2=\"541.6\" y2=\"284\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"287.4\" y=\"256.8\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"265.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 3 (resent)</text><line x1=\"241.6\" y1=\"284\" x2=\"541.6\" y2=\"310\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"287.4\" y=\"282.8\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"291.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 4 (resent)</text><line x1=\"241.6\" y1=\"310\" x2=\"541.6\" y2=\"336\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mj-2c5d8f)\"/><rect x=\"287.4\" y=\"308.8\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343.6\" y=\"317.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 5 (resent)</text><text x=\"551.6\" y=\"128\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">0–2 accepted → ACK 3</text><text x=\"551.6\" y=\"180\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">discarded (expects 3)</text><text x=\"551.6\" y=\"206\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">discarded</text><text x=\"231.60000000000002\" y=\"239.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timer for 3 expires → go back to 3</text><text x=\"391.6\" y=\"387\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Fig 1 redrawn — Go-Back-N</text></svg>",
      "alt": "Fig 1 redrawn — Go-Back-N"
     }
    ]
   ],
   [
    "iv. Better protocol for a noisy channel: Selective Repeat",
    [
     "Receiver window > 1, so 4 and 5 are buffered instead of discarded.",
     "On seeing the gap the receiver sends NAK 3 (or the sender’s timer for 3 alone expires).",
     "Only frame 3 is retransmitted; when it arrives the receiver delivers 3, 4, 5 in order and sends a cumulative ACK 6.",
     "Saves the bandwidth of re-sending 4 and 5 — important when errors are frequent.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 648.2 338.8\" width=\"648.2\" height=\"338.8\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mk-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mk-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"100\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"150\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"150\" y1=\"33\" x2=\"150\" y2=\"310.8\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"400\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"450\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"450\" y1=\"33\" x2=\"450\" y2=\"310.8\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"310.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"150\" y1=\"50\" x2=\"450\" y2=\"76\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2c5d8f)\"/><rect x=\"220.2\" y=\"48.8\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"57.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 0–2</text><line x1=\"150\" y1=\"128\" x2=\"336\" y2=\"144.1\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"329\" y1=\"137.1\" x2=\"343\" y2=\"151.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"329\" y1=\"151.1\" x2=\"343\" y2=\"137.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"215.1\" y=\"125.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"134.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Data 3</text><line x1=\"150\" y1=\"154\" x2=\"450\" y2=\"180\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2c5d8f)\"/><rect x=\"227.1\" y=\"152.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"161.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 4</text><line x1=\"150\" y1=\"180\" x2=\"450\" y2=\"206\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2c5d8f)\"/><rect x=\"227.1\" y=\"178.8\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"187.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 5</text><line x1=\"450\" y1=\"180\" x2=\"150\" y2=\"221.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2f7a4f)\"/><rect x=\"326.6\" y=\"184.1\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"193.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">NAK 3</text><line x1=\"150\" y1=\"226.8\" x2=\"450\" y2=\"252.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2c5d8f)\"/><rect x=\"202.8\" y=\"225.6\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"234.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data 3 (only)</text><line x1=\"450\" y1=\"252.8\" x2=\"150\" y2=\"278.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mk-2f7a4f)\"/><rect x=\"326.6\" y=\"251.6\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"260.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 6</text><text x=\"460\" y=\"180\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">4 buffered</text><text x=\"460\" y=\"206\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">5 buffered</text><text x=\"460\" y=\"252.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">3 arrives → deliver 3, 4, 5</text><text x=\"324.1\" y=\"329.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Same situation with Selective Repeat</text></svg>",
      "alt": "Same situation with Selective Repeat"
     }
    ]
   ],
   [
    "v. Maximum windows with 5-bit sequence numbers (0–31)",
    [
     {
      "table": {
       "head": [
        "Protocol",
        "Send window",
        "Receive window",
        "Rule"
       ],
       "rows": [
        [
         "Stop-and-Wait",
         "1",
         "1",
         "only one outstanding frame"
        ],
        [
         "Go-Back-N",
         "2⁵ − 1 = 31",
         "1",
         "Ws ≤ 2ᵐ − 1"
        ],
        [
         "Selective Repeat",
         "2⁴ = 16",
         "16",
         "Ws = Wr ≤ 2ᵐ⁻¹"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on flow control (Stop-and-Wait, Go-Back-N, Selective Repeat)"
  ]
 },
 "28c0e4dc4812d1c8": {
  "sections": [
   [
    "a) Pure ALOHA throughput",
    [
     "Frame time Tfr = 100 bits / 100 kbps = 1 ms. Load G = frames per second × Tfr. Pure ALOHA: S = G·e^(−2G).",
     {
      "table": {
       "head": [
        "Load",
        "G",
        "S = G e^(−2G)",
        "Throughput (textbook: frames × S)",
        "Successful frames/s (exact: S ÷ Tfr)"
       ],
       "rows": [
        [
         "100 frames/s",
         "G = 100 × 1 ms = 0.1",
         "S = 0.1·e^(−0.2) = 0.0819",
         "100 × 0.0819 ≈ 8.2",
         "81.9"
        ],
        [
         "400 frames/s",
         "G = 400 × 1 ms = 0.4",
         "S = 0.4·e^(−0.8) = 0.1797",
         "400 × 0.1797 ≈ 71.9",
         "179.7"
        ],
        [
         "300 frames/s",
         "G = 300 × 1 ms = 0.3",
         "S = 0.3·e^(−0.6) = 0.1646",
         "300 × 0.1646 ≈ 49.4",
         "164.6"
        ]
       ]
      }
     },
     "Exam note: Forouzan’s examples (and VIT keys) report throughput as offered frames × S. Strictly, S is per frame time, so the number of frames that actually survive per second is S ÷ Tfr = offered frames × e^(−G) (slotted) or × e^(−2G) (pure). The two agree only at G = 1. Write the textbook figure, and add the exact one if asked to interpret.",
     "Maximum possible is S = 0.184 at G = 0.5 (500 frames/s → about 92 frames/s)."
    ]
   ],
   [
    "b) CSMA/CD between A and B",
    [
     "Propagation time Tp = 2000 m / (2 × 10⁸ m/s) = 10 µs.",
     "Collision detection needs Tfr ≥ 2Tp = 20 µs → minimum frame = 10 Mbps × 20 µs = 200 bits = 25 bytes.",
     "Time for A to detect a collision: if A and B start together, the signals meet midway at 5 µs and B’s signal reaches A at Tp = 10 µs. In the worst case (B starts just before A’s first bit reaches it) A detects at 2Tp = 20 µs.",
     "The 1500-byte frame (1.2 ms) is far longer than 20 µs, so CSMA/CD works for it."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on ALOHA and CSMA/CD"
  ]
 },
 "aa35eddeab61787a": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "a) 200.36.2.3",
         "First byte 200 is in 192–223",
         "Class C"
        ],
        [
         "b) 10001001 10001110 11010000 00110001",
         "137 | 142 | 208 | 49",
         "137.142.208.49"
        ],
        [
         "c) n = 14",
         "14 ones: 11111111 11111100 00000000 00000000",
         "255.252.0.0"
        ],
        [
         "d) 135.1.1.25, mask 255.255.248.0",
         "248 = 11111000 → 8 + 8 + 5 = 21 ones",
         "135.1.1.25/21"
        ],
        [
         "e) Class C, mask 255.255.255.0",
         "8 host bits: 2⁸ − 2 (network, broadcast)",
         "254 usable hosts"
        ],
        [
         "f-i) 70.110.19.17/16",
         "keep 16 bits, host bits → 0s / 1s",
         "70.110.0.0 – 70.110.255.255"
        ],
        [
         "f-ii) 14.12.72.8/18",
         "third byte 72 = 01001000 → keep 01 → 64; last = 64 + 63 = 127",
         "14.12.64.0 – 14.12.127.255"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Method for first/last address",
    [
     "First address = address AND mask (set all 32 − n host bits to 0).",
     "Last address = address OR (NOT mask) (set all host bits to 1). Number of addresses = 2^(32 − n)."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 11–51 (classful) and 104–126 (classless addressing)"
  ]
 },
 "14490bd8cb52719b": {
  "sections": [
   [
    "Note",
    [
     "The printed /23 is corrected to /22 on the paper — and it must be: the five departments need blocks of 256 + 128 + 128 + 64 + 32 = 608 addresses, more than the 512 in a /23."
    ]
   ],
   [
    "a) Total addresses",
    [
     "203.0.112.0/22 → 2^(32−22) = 1024 addresses: 203.0.112.0 – 203.0.115.255."
    ]
   ],
   [
    "b) Subnets (VLSM, largest first)",
    [
     "Each block must hold hosts + 2 (network and broadcast) and be a power of two: 200 → 256 (/24), 100 → 128 (/25), 80 → 128 (/25), 50 → 64 (/26), 30 → 32 (/27).",
     {
      "table": {
       "head": [
        "Subnet",
        "Hosts needed",
        "Block",
        "CIDR",
        "Mask",
        "Network ID",
        "Usable range",
        "Broadcast",
        "Unused in block"
       ],
       "rows": [
        [
         "IT",
         200,
         256,
         "203.0.112.0/24",
         "255.255.255.0",
         "203.0.112.0",
         "203.0.112.1 – 203.0.112.254",
         "203.0.112.255",
         54
        ],
        [
         "Finance",
         100,
         128,
         "203.0.113.0/25",
         "255.255.255.128",
         "203.0.113.0",
         "203.0.113.1 – 203.0.113.126",
         "203.0.113.127",
         26
        ],
        [
         "Sales",
         80,
         128,
         "203.0.113.128/25",
         "255.255.255.128",
         "203.0.113.128",
         "203.0.113.129 – 203.0.113.254",
         "203.0.113.255",
         46
        ],
        [
         "Marketing",
         50,
         64,
         "203.0.114.0/26",
         "255.255.255.192",
         "203.0.114.0",
         "203.0.114.1 – 203.0.114.62",
         "203.0.114.63",
         12
        ],
        [
         "HR",
         30,
         32,
         "203.0.114.64/27",
         "255.255.255.224",
         "203.0.114.64",
         "203.0.114.65 – 203.0.114.94",
         "203.0.114.95",
         0
        ]
       ]
      }
     }
    ]
   ],
   [
    "c) Unused addresses",
    [
     "Used 608 of 1024. Unallocated block: 203.0.114.96 – 203.0.115.255 (416 addresses) — free for future departments (e.g. as 203.0.114.96/27, 203.0.114.128/25, 203.0.115.0/24).",
     "Inside the allocated subnets a further 138 host addresses are spare (block size − 2 − hosts).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"95\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">IT</text><text x=\"95\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">203.0.112.0/24</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.112.0</text><rect x=\"170.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"207.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Finance</text><text x=\"207.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">203.0.113.0/25</text><line x1=\"170\" y1=\"76\" x2=\"170\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"172\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.113.0</text><rect x=\"245.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"282.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Sales</text><text x=\"282.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">203.0.113.128/25</text><line x1=\"245\" y1=\"76\" x2=\"245\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"247\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.113.128</text><rect x=\"320.0\" y=\"30\" width=\"37.5\" height=\"46\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"320\" y1=\"76\" x2=\"320\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"322\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.114.0</text><rect x=\"357.5\" y=\"30\" width=\"18.8\" height=\"46\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"357.5\" y1=\"76\" x2=\"357.5\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"359.5\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.114.64</text><rect x=\"376.3\" y=\"30\" width=\"243.8\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"498.125\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"498.125\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">416</text><line x1=\"376.3\" y1=\"76\" x2=\"376.3\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"378.25\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">203.0.114.96</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">203.0.112.0/22 allocation</text></svg>",
      "alt": "203.0.112.0/22 allocation"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126 (classless addressing, subnetting)"
  ]
 },
 "e483fb7ebc2b443c": {
  "sections": [
   [
    "Answer",
    [
     "Go-Back-N: 18 transmissions; ratio = 10/18 = 0.556 (55.6 %).",
     "Selective Repeat: 12 transmissions; ratio = 10/12 = 0.833 (83.3 %)."
    ]
   ],
   [
    "i. Go-Back-N (window 3)",
    [
     "Every 5th transmission is lost; the sender sends the rest of the window, then times out and resends from the lost frame. Out-of-order frames are discarded.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 642.4 600\" width=\"642.4\" height=\"600\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"ml-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"127.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"177.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"177.6\" y1=\"33\" x2=\"177.6\" y2=\"572\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"387.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"437.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"437.6\" y1=\"33\" x2=\"437.6\" y2=\"572\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"572\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"177.6\" y1=\"50\" x2=\"437.6\" y2=\"69.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"46.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"55.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"177.6\" y1=\"74\" x2=\"437.6\" y2=\"93.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"70.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"177.6\" y1=\"98\" x2=\"437.6\" y2=\"117.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"94.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"103.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"177.6\" y1=\"122\" x2=\"437.6\" y2=\"141.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"118.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"127.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"177.6\" y1=\"146\" x2=\"338.8\" y2=\"157.9\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"150.9\" x2=\"345.8\" y2=\"164.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"164.9\" x2=\"345.8\" y2=\"150.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"141.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"150.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F5</text><line x1=\"177.6\" y1=\"170\" x2=\"437.6\" y2=\"189.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"166.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6</text><line x1=\"177.6\" y1=\"194\" x2=\"437.6\" y2=\"213.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"190.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"199.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7</text><line x1=\"177.6\" y1=\"239.6\" x2=\"437.6\" y2=\"258.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"237.6\" y=\"236.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"245.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5 (re)</text><line x1=\"177.6\" y1=\"263.6\" x2=\"437.6\" y2=\"282.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"237.6\" y=\"260.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"269.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6 (re)</text><line x1=\"177.6\" y1=\"287.6\" x2=\"338.8\" y2=\"299.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"292.5\" x2=\"345.8\" y2=\"306.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"306.5\" x2=\"345.8\" y2=\"292.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"227.2\" y=\"283.4\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"292.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"311.6\" x2=\"437.6\" y2=\"330.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"308.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"317.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8</text><line x1=\"177.6\" y1=\"335.6\" x2=\"437.6\" y2=\"354.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"255\" y=\"332.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"341.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F9</text><line x1=\"177.6\" y1=\"381.2\" x2=\"437.6\" y2=\"400.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"237.6\" y=\"377.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"386.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"405.2\" x2=\"437.6\" y2=\"424.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"237.6\" y=\"401.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"410.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8 (re)</text><line x1=\"177.6\" y1=\"429.2\" x2=\"338.8\" y2=\"441.1\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"434.1\" x2=\"345.8\" y2=\"448.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"448.1\" x2=\"345.8\" y2=\"434.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"227.2\" y=\"425\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"434\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F9 (re)</text><line x1=\"177.6\" y1=\"453.2\" x2=\"437.6\" y2=\"472.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"251.6\" y=\"449.7\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"458.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F10</text><line x1=\"177.6\" y1=\"498.8\" x2=\"437.6\" y2=\"518\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"237.6\" y=\"495.3\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"504.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F9 (re)</text><line x1=\"177.6\" y1=\"522.8\" x2=\"437.6\" y2=\"542\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#ml-2c5d8f)\"/><rect x=\"234.2\" y=\"519.3\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"528.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F10 (re)</text><text x=\"447.6\" y=\"69.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#1 accepted</text><text x=\"447.6\" y=\"93.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#2 accepted</text><text x=\"447.6\" y=\"117.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#3 accepted</text><text x=\"447.6\" y=\"141.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#4 accepted</text><text x=\"447.6\" y=\"165.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#5 lost</text><text x=\"447.6\" y=\"189.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#6 discarded (out of order)</text><text x=\"447.6\" y=\"213.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#7 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"222.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F5</text><text x=\"447.6\" y=\"258.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#8 accepted</text><text x=\"447.6\" y=\"282.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#9 accepted</text><text x=\"447.6\" y=\"306.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#10 lost</text><text x=\"447.6\" y=\"330.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#11 discarded (out of order)</text><text x=\"447.6\" y=\"354.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#12 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"364.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F7</text><text x=\"447.6\" y=\"400.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#13 accepted</text><text x=\"447.6\" y=\"424.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#14 accepted</text><text x=\"447.6\" y=\"448.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#15 lost</text><text x=\"447.6\" y=\"472.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#16 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"482\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F9</text><text x=\"447.6\" y=\"518\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#17 accepted</text><text x=\"447.6\" y=\"542\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#18 accepted</text><text x=\"321.2\" y=\"591\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Go-Back-N: 18 transmissions for 10 frames</text></svg>",
      "alt": "Go-Back-N: 18 transmissions for 10 frames"
     },
     "Sequence of frames sent: 1 2 3 4 [5✕] 6 7 5 6 [7✕] 8 9 7 8 [9✕] 10 9 10"
    ]
   ],
   [
    "ii. Selective Repeat (window 3)",
    [
     "Frames after the loss are buffered; after the timeout only the lost frame is resent.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 615.2 434.40000000000003\" width=\"615.2\" height=\"434.40000000000003\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mm-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"127.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"177.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"177.6\" y1=\"33\" x2=\"177.6\" y2=\"406.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"387.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"437.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"437.6\" y1=\"33\" x2=\"437.6\" y2=\"406.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"406.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"177.6\" y1=\"50\" x2=\"437.6\" y2=\"69.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"46.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"55.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"177.6\" y1=\"74\" x2=\"437.6\" y2=\"93.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"70.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"177.6\" y1=\"98\" x2=\"437.6\" y2=\"117.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"94.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"103.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"177.6\" y1=\"122\" x2=\"437.6\" y2=\"141.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"118.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"127.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"177.6\" y1=\"146\" x2=\"338.8\" y2=\"157.9\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"150.9\" x2=\"345.8\" y2=\"164.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"164.9\" x2=\"345.8\" y2=\"150.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"141.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"150.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F5</text><line x1=\"177.6\" y1=\"170\" x2=\"437.6\" y2=\"189.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"166.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6</text><line x1=\"177.6\" y1=\"194\" x2=\"437.6\" y2=\"213.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"190.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"199.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7</text><line x1=\"177.6\" y1=\"239.6\" x2=\"437.6\" y2=\"258.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"237.6\" y=\"236.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"245.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5 (re)</text><line x1=\"177.6\" y1=\"263.6\" x2=\"437.6\" y2=\"282.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"255\" y=\"260.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"269.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8</text><line x1=\"177.6\" y1=\"287.6\" x2=\"338.8\" y2=\"299.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"292.5\" x2=\"345.8\" y2=\"306.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"306.5\" x2=\"345.8\" y2=\"292.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"283.4\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"292.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F9</text><line x1=\"177.6\" y1=\"311.6\" x2=\"437.6\" y2=\"330.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"251.6\" y=\"308.1\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"317.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F10</text><line x1=\"177.6\" y1=\"357.2\" x2=\"437.6\" y2=\"376.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mm-2c5d8f)\"/><rect x=\"237.6\" y=\"353.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"362.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F9 (re)</text><text x=\"447.6\" y=\"69.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#1 accepted</text><text x=\"447.6\" y=\"93.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#2 accepted</text><text x=\"447.6\" y=\"117.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#3 accepted</text><text x=\"447.6\" y=\"141.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#4 accepted</text><text x=\"447.6\" y=\"165.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#5 lost</text><text x=\"447.6\" y=\"189.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#6 buffered</text><text x=\"447.6\" y=\"213.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#7 buffered</text><text x=\"167.60000000000002\" y=\"222.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F5</text><text x=\"447.6\" y=\"258.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#8 accepted</text><text x=\"447.6\" y=\"282.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#9 accepted</text><text x=\"447.6\" y=\"306.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#10 lost</text><text x=\"447.6\" y=\"330.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#11 buffered</text><text x=\"167.60000000000002\" y=\"340.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F9</text><text x=\"447.6\" y=\"376.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#12 accepted</text><text x=\"307.6\" y=\"425.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Selective Repeat: 12 transmissions for 10 frames</text></svg>",
      "alt": "Selective Repeat: 12 transmissions for 10 frames"
     },
     "Sequence of frames sent: 1 2 3 4 [5✕] 6 7 5 8 [9✕] 10 9"
    ]
   ],
   [
    "b) Slotted ALOHA, 800-bit frames, 400 kbps",
    [
     "Tfr = 800 / 400 000 = 2 ms. G = frames/s × Tfr. Slotted ALOHA: S = G·e^(−G).",
     {
      "table": {
       "head": [
        "Frames/s",
        "G",
        "S = G e^(−G)",
        "Throughput (textbook: frames × S)",
        "Successful frames/s (exact: S ÷ Tfr)"
       ],
       "rows": [
        [
         "2000",
         "4",
         "0.0733",
         "2000 × 0.0733 ≈ 146.5",
         "36.6"
        ],
        [
         "1000",
         "2",
         "0.2707",
         "1000 × 0.2707 ≈ 270.7",
         "135.3"
        ],
        [
         "500",
         "1",
         "0.3679",
         "500 × 0.3679 ≈ 183.9",
         "183.9"
        ]
       ]
      }
     },
     "Exam note: Forouzan’s examples (and VIT keys) report throughput as offered frames × S. Strictly, S is per frame time, so the number of frames that actually survive per second is S ÷ Tfr = offered frames × e^(−G) (slotted) or × e^(−2G) (pure). The two agree only at G = 1. Write the textbook figure, and add the exact one if asked to interpret.",
     "Vulnerable time (slotted ALOHA) = Tfr = 2 ms (pure ALOHA would be 2Tfr = 4 ms)."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on sliding window and ALOHA"
  ]
 },
 "dbfcad6b22d3ea1d": {
  "sections": [
   [
    "Design",
    [
     "128 addresses → 7 host bits → /25; 64 → /26; 32 → /27. Allocate groups one after another from 188.50.0.0.",
     {
      "table": {
       "head": [
        "Group",
        "Customers × size",
        "Prefix",
        "First customer",
        "Last customer",
        "Group range"
       ],
       "rows": [
        [
         "Group 1",
         "30 × 128",
         "/25",
         "188.50.0.0/25 (188.50.0.0 – 188.50.0.127)",
         "188.50.14.128/25 (188.50.14.128 – 188.50.14.255)",
         "188.50.0.0 – 188.50.14.255"
        ],
        [
         "Group 2",
         "50 × 64",
         "/26",
         "188.50.15.0/26 (188.50.15.0 – 188.50.15.63)",
         "188.50.27.64/26 (188.50.27.64 – 188.50.27.127)",
         "188.50.15.0 – 188.50.27.127"
        ],
        [
         "Group 3",
         "20 × 32",
         "/27",
         "188.50.27.128/27 (188.50.27.128 – 188.50.27.159)",
         "188.50.29.224/27 (188.50.29.224 – 188.50.29.255)",
         "188.50.27.128 – 188.50.29.255"
        ]
       ]
      }
     },
     "Group 1: 188.50.0.0/25, 188.50.0.128/25, 188.50.1.0/25, … , 188.50.14.128/25 (30 blocks).",
     "Group 2: 188.50.15.0/26, 188.50.15.64/26, … , 188.50.27.64/26 (50 blocks).",
     "Group 3: 188.50.27.128/27, 188.50.27.160/27, … , 188.50.29.224/27 (20 blocks)."
    ]
   ],
   [
    "Addresses still available",
    [
     "Allocated = 30 × 128 + 50 × 64 + 20 × 32 = 3840 + 3200 + 640 = 7680.",
     "Available = 65 536 − 7680 = 57856 (from 188.50.30.0 to 188.50.255.255).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"35.2\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">188.50.0.0</text><rect x=\"55.2\" y=\"30\" width=\"29.3\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"55.2\" y1=\"76\" x2=\"55.2\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"57.15625\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">188.50.15.0</text><rect x=\"84.5\" y=\"30\" width=\"5.9\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"84.5\" y1=\"76\" x2=\"84.5\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"86.453125\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">188.50.27.128</text><rect x=\"90.3\" y=\"30\" width=\"529.7\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"355.15625\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"355.15625\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">57856</text><line x1=\"90.3\" y1=\"76\" x2=\"90.3\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"92.3125\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">188.50.30.0</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">188.50.0.0/16</text></svg>",
      "alt": "188.50.0.0/16"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126 (address allocation by an ISP)"
  ]
 },
 "3540f7322bec9221": {
  "sections": [
   [
    "(a) IPv4 vs IPv6 header",
    [
     {
      "table": {
       "head": [
        "Feature",
        "IPv4 header",
        "IPv6 header"
       ],
       "rows": [
        [
         "Size",
         "20–60 bytes (variable, HLEN field)",
         "Fixed 40 bytes (no length field needed)"
        ],
        [
         "Address size",
         "32-bit source/destination",
         "128-bit source/destination"
        ],
        [
         "Fields",
         "13 fields",
         "8 fields (simplified)"
        ],
        [
         "Checksum",
         "Header checksum, recomputed at every hop",
         "None (left to link and transport layers)"
        ],
        [
         "Fragmentation",
         "Identification, flags, offset in base header; routers may fragment",
         "Only the source fragments (Fragment extension header)"
        ],
        [
         "Options",
         "Options field inside the header",
         "Extension headers chained by Next header"
        ],
        [
         "Lifetime",
         "Time to live (TTL)",
         "Hop limit"
        ],
        [
         "Upper protocol",
         "Protocol field",
         "Next header field"
        ],
        [
         "QoS",
         "Type of service / DSCP",
         "Traffic class + 20-bit Flow label"
        ],
        [
         "Length field",
         "Total length (header + data)",
         "Payload length (data after base header)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "(b) Decoding the header",
    [
     {
      "table": {
       "head": [
        "Field",
        "Hex",
        "Value / meaning"
       ],
       "rows": [
        [
         "Version | HLEN",
         "45",
         "4 | 5 → header = 5 × 4 = 20 bytes (no options)"
        ],
        [
         "Service type",
         "00",
         "0 → routine / best effort"
        ],
        [
         "Total length",
         "0054",
         "84 bytes → data = 84 − 20 = 64 bytes"
        ],
        [
         "Identification",
         "0003",
         "3"
        ],
        [
         "Flags | Fragment offset",
         "0000",
         "DF = 0, MF = 0, offset = 0"
        ],
        [
         "Time to live",
         "20",
         "32 hops"
        ],
        [
         "Protocol",
         "06",
         "6 → TCP"
        ],
        [
         "Header checksum",
         "0000",
         "0000 (not filled in)"
        ],
        [
         "Source address",
         "7C 4E 03 02",
         "124.78.3.2"
        ],
        [
         "Destination address",
         "B4 0E 0F 02",
         "180.14.15.2"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Answers",
    [
     "i. Not fragmented: DF = 0, MF = 0 and offset = 0 → this is a complete datagram (first and last fragment).",
     "ii. Data size = total length − header = 84 − 20 = 64 bytes.",
     "iii. TTL = 0x20 = 32: the packet can visit up to 32 more routers (each router decrements TTL; it is discarded when TTL reaches 0).",
     "iv. Identification = 0x0003 = 3.",
     "v. Fragment offset = 0.",
     "vi. Source = 7C.4E.03.02 = 124.78.3.2; destination = B4.0E.0F.02 = 180.14.15.2. (Protocol 06 = TCP.)"
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–247 (IPv4 datagram, header fields)"
  ]
 },
 "31349c50bccb340c": {
  "sections": [
   [
    "Answer",
    [
     "The graph is directed, so an edge can only be relaxed in the arrow’s direction.",
     "Shortest distances from V1: V2 = 4 (V1→V2), V3 = 2 (V1→V3), V4 = 3 (V1→V3→V4), V5 = 9 (V1→V2→V5), V6 = 5 (V1→V3→V4→V6), V7 = 8 (V1→V3→V4→V6→V7)."
    ]
   ],
   [
    "Iteration table",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(V2), p(V2)",
        "D(V3), p(V3)",
        "D(V4), p(V4)",
        "D(V5), p(V5)",
        "D(V6), p(V6)",
        "D(V7), p(V7)"
       ],
       "rows": [
        [
         0,
         "V1",
         "4, V1",
         "2, V1",
         "8, V1",
         "∞",
         "∞",
         "∞"
        ],
        [
         1,
         "V1V3",
         "4, V1",
         "2, V1",
         "3, V3",
         "∞",
         "12, V3",
         "∞"
        ],
        [
         2,
         "V1V3V4",
         "4, V1",
         "—",
         "3, V3",
         "10, V4",
         "5, V4",
         "∞"
        ],
        [
         3,
         "V1V3V4V2",
         "4, V1",
         "—",
         "—",
         "9, V2",
         "5, V4",
         "∞"
        ],
        [
         4,
         "V1V3V4V2V6",
         "—",
         "—",
         "—",
         "9, V2",
         "5, V4",
         "8, V6"
        ],
        [
         5,
         "V1V3V4V2V6V7",
         "—",
         "—",
         "—",
         "9, V2",
         "—",
         "8, V6"
        ],
        [
         6,
         "V1V3V4V2V6V7V5",
         "—",
         "—",
         "—",
         "9, V2",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     }
    ]
   ],
   [
    "Shortest paths",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "V2",
         "V1 → V2",
         4,
         "V2"
        ],
        [
         "V3",
         "V1 → V3",
         2,
         "V3"
        ],
        [
         "V4",
         "V1 → V3 → V4",
         3,
         "V3"
        ],
        [
         "V5",
         "V1 → V2 → V5",
         9,
         "V2"
        ],
        [
         "V6",
         "V1 → V3 → V4 → V6",
         5,
         "V3"
        ],
        [
         "V7",
         "V1 → V3 → V4 → V6 → V7",
         8,
         "V3"
        ]
       ]
      },
      "caption": "Routing table at V1"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 480 310\" width=\"480\" height=\"310\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m1i-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker><marker id=\"m1i-9fb3a5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#9fb3a5\"/></marker></defs><line x1=\"147\" y1=\"45\" x2=\"321\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"227.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"235\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"119.3\" y1=\"58.2\" x2=\"57\" y2=\"135.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"79.9\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"87.5\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"142\" y1=\"57\" x2=\"221.6\" y2=\"136.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"174.9\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"182.5\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"247\" y1=\"138\" x2=\"326.6\" y2=\"58.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"279.9\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.5\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"62\" y1=\"150\" x2=\"216\" y2=\"150\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"132.4\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"140\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"351.1\" y1=\"57.9\" x2=\"417.6\" y2=\"135.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"377.4\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"385\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"252\" y1=\"150\" x2=\"411\" y2=\"150\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"324.9\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"332.5\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"55.7\" y1=\"163.2\" x2=\"118\" y2=\"240.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"76.3\" y=\"193.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"87.5\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"223\" y1=\"162\" x2=\"143.4\" y2=\"241.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"174.9\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"182.5\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"328\" y1=\"243\" x2=\"248.4\" y2=\"163.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"279.9\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.5\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"418.9\" y1=\"162.9\" x2=\"352.4\" y2=\"240.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m1i-9fb3a5)\"/><rect x=\"377.4\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"385\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"147\" y1=\"255\" x2=\"321\" y2=\"255\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m1i-2f7a4f)\"/><rect x=\"227.4\" y=\"246\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"235\" y=\"255\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><circle cx=\"130\" cy=\"45\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"130\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V1</text><rect x=\"122.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"130\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"340\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"340\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V2</text><rect x=\"332.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"340\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"45\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"45\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V3</text><rect x=\"37.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">2</text><circle cx=\"235\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"235\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V4</text><rect x=\"227.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"235\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"430\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V5</text><rect x=\"422.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">9</text><circle cx=\"130\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"130\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V6</text><rect x=\"122.7\" y=\"274\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"130\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"340\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"340\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">V7</text><rect x=\"332.7\" y=\"274\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"340\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">8</text><text x=\"240\" y=\"302\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from V1 (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from V1 (green) · blue = final cost"
     }
    ]
   ],
   [
    "How each step works",
    [
     "Start: N′ = {V1}; D(v) = link cost if V1 → v exists, else ∞.",
     "Repeat: pick the unvisited vertex with the smallest D, add it to N′, then for each outgoing edge (u → v) set D(v) = min(D(v), D(u) + c(u,v)).",
     "Key improvements: V3 (2) gives V4 = 2 + 1 = 3 (better than the direct 8); V4 (3) gives V6 = 3 + 2 = 5 (better than 12) and V2 stays 4 (3 + 2 = 5 is worse); V6 (5) gives V7 = 5 + 3 = 8; V2 (4) gives V5 = 4 + 5 = 9 (better than 3 + 7 = 10)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "c784f10afb2ec06c": {
  "sections": [
   [
    "Network",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 440 215\" width=\"440\" height=\"215\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"137\" y1=\"45\" x2=\"303\" y2=\"45\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"208.8\" y=\"36\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">18</text><line x1=\"49.2\" y1=\"155.7\" x2=\"110.8\" y2=\"59.3\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"68.8\" y=\"98.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"80\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">21</text><line x1=\"129.9\" y1=\"58.8\" x2=\"200.1\" y2=\"156.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"153.8\" y=\"98.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"165\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">12</text><line x1=\"308.8\" y1=\"57.8\" x2=\"221.2\" y2=\"157.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"257.4\" y=\"98.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"265\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"328.3\" y1=\"59.8\" x2=\"381.7\" y2=\"155.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"343.8\" y=\"98.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"355\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"57\" y1=\"170\" x2=\"193\" y2=\"170\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"113.8\" y=\"161\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"125\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">15</text><line x1=\"227\" y1=\"170\" x2=\"373\" y2=\"170\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"288.8\" y=\"161\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">17</text><circle cx=\"120\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"120\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"320\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"320\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"40\" cy=\"170\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"40\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"210\" cy=\"170\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"390\" cy=\"170\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"390\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><text x=\"220\" y=\"207\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">A = Adam, B = Bert, C = Clog, D = Dodo, E = Eve</text></svg>",
      "alt": "A = Adam, B = Bert, C = Clog, D = Dodo, E = Eve"
     }
    ]
   ],
   [
    "(i) Initial routing table of Eve",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         "∞",
         "—"
        ],
        [
         "B",
         "∞",
         "—"
        ],
        [
         "C",
         11,
         "C"
        ],
        [
         "D",
         17,
         "D"
        ],
        [
         "E",
         0,
         "—"
        ]
       ]
      },
      "caption": "Eve knows only its own links E–C (11) and E–D (17)."
     }
    ]
   ],
   [
    "(ii) After 1st iteration",
    [
     "Eve receives its neighbours’ initial vectors: C advertises (A ∞, B 18, C 0, D 5, E 11); D advertises (A 15, B 12, C 5, D 0, E 17).",
     "DE(A) = min{ C: 11+∞=∞, D: 17+15=32 } = 32\nDE(B) = min{ C: 11+18=29, D: 17+12=29 } = 29\nDE(C) = min{ C: 11+0=11, D: 17+5=22 } = 11\nDE(D) = min{ C: 11+5=16, D: 17+0=17 } = 16",
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         32,
         "D"
        ],
        [
         "B",
         29,
         "C"
        ],
        [
         "C",
         11,
         "C"
        ],
        [
         "D",
         16,
         "C"
        ],
        [
         "E",
         0,
         "—"
        ]
       ]
      }
     }
    ]
   ],
   [
    "(ii) After 2nd iteration",
    [
     "C and D have also updated once, so now C advertises (A 20, B 17, C 0, D 5, E 11); D advertises (A 15, B 12, C 5, D 0, E 16).",
     "DE(A) = min{ C: 11+20=31, D: 17+15=32 } = 31\nDE(B) = min{ C: 11+17=28, D: 17+12=29 } = 28\nDE(C) = min{ C: 11+0=11, D: 17+5=22 } = 11\nDE(D) = min{ C: 11+5=16, D: 17+0=17 } = 16",
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         31,
         "C"
        ],
        [
         "B",
         28,
         "C"
        ],
        [
         "C",
         11,
         "C"
        ],
        [
         "D",
         16,
         "C"
        ],
        [
         "E",
         0,
         "—"
        ]
       ]
      },
      "caption": "Eve’s table is stable from here (converged after round 2)."
     }
    ]
   ],
   [
    "(iii) How a node transmits updates",
    [
     "Each router sends its full distance vector (destination, cost) to directly connected neighbours only — periodically (RIP: every 30 s) and immediately when an entry changes (triggered update).",
     "Neighbours apply Dx(y) = min{c(x,v) + Dv(y)} and propagate changes further, so news travels one hop per exchange."
    ]
   ],
   [
    "(iv) How node/link failures are identified",
    [
     "Link/node failure is detected by missing updates: if no update arrives from a neighbour before the expiration (invalid) timer runs out (RIP: 180 s), routes through it are marked ∞ (16 in RIP).",
     "Hardware/link-layer signals (loss of carrier, failed hello/keep-alive) mark the interface down immediately.",
     "The router then sends a triggered update with the new (infinite) cost; the garbage-collection timer (RIP: 120 s) finally deletes the entry."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "bb1f5218f1dddad7": {
  "sections": [
   [
    "a) Selective Repeat windows (m = 3 bits)",
    [
     "Sequence numbers 0–7; Selective Repeat window = 2ᵐ⁻¹ = 4 for both sender and receiver.",
     {
      "table": {
       "head": [
        "Event",
        "Sender window",
        "Receiver window"
       ],
       "rows": [
        [
         "Start",
         "[0][1][2][3] 4  5  6  7 ",
         "[0][1][2][3] 4  5  6  7 "
        ],
        [
         "i) F0 sent, ACK 0",
         " 0 [1][2][3][4] 5  6  7 ",
         " 0 [1][2][3][4] 5  6  7 "
        ],
        [
         "ii) F1, F2 sent and ACKed",
         " 0  1  2 [3][4][5][6] 7 ",
         " 0  1  2 [3][4][5][6] 7 "
        ],
        [
         "iii) F3, F4, F5 sent; ACK 4 (and 3) back; timer 5 expires → resend 5",
         "[0] 1  2  3  4 [5][6][7]",
         "[0] 1  2  3  4 [5][6][7]"
        ],
        [
         "iv) F5, F6, F7 sent; ACK 4–7",
         "[0][1][2][3] 4  5  6  7 ",
         "[0][1][2][3] 4  5  6  7 "
        ]
       ]
      },
      "caption": "[n] = inside the window. Windows are shown after each event."
     },
     "Step iii: frame 4 is acknowledged but the window cannot move past 3/5 until they are acknowledged; for step iv to be allowed to send frame 7, frame 3’s ACK must also have arrived (window 5–0). Frame 5’s timer expires → only frame 5 is resent (selective).",
     "Step iv: the resent 5 and new 6, 7 are acknowledged together with 4 → both windows slide to 0–3."
    ]
   ],
   [
    "b) Probability that exactly one station transmits in a slot",
    [
     "Chosen station sends (p) and the other n − 1 stay silent ((1 − p)ⁿ⁻¹); any of the n stations can be the one:",
     "P(exactly one) = n · p · (1 − p)ⁿ⁻¹",
     "This is maximised at p = 1/n, giving (1 − 1/n)ⁿ⁻¹ → 1/e ≈ 0.368 for large n — the slotted-ALOHA limit."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Selective Repeat and slotted ALOHA"
  ]
 },
 "c20b551cdb427d13": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer"
       ],
       "rows": [
        [
         "i. Class and default mask",
         "First byte 10 → Class A; default mask 255.0.0.0 (/8)"
        ],
        [
         "ii. Addresses in each subnetwork",
         "2^(32−16) / 16 = 65 536 / 16 = 4096"
        ],
        [
         "iii. Subnet mask",
         "4096 = 2¹² → 12 host bits → /20 → 255.255.240.0"
        ],
        [
         "iv. CIDR of each subnetwork",
         "/20"
        ],
        [
         "vi. Bits borrowed",
         "16 = 2⁴ → 4 bits borrowed from the host part of the /16 block (16 → 20)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "v. Start and end of each subnetwork",
    [
     {
      "table": {
       "head": [
        "#",
        "CIDR",
        "Start",
        "End"
       ],
       "rows": [
        [
         1,
         "10.10.0.0/20",
         "10.10.0.0",
         "10.10.15.255"
        ],
        [
         2,
         "10.10.16.0/20",
         "10.10.16.0",
         "10.10.31.255"
        ],
        [
         3,
         "10.10.32.0/20",
         "10.10.32.0",
         "10.10.47.255"
        ],
        [
         4,
         "10.10.48.0/20",
         "10.10.48.0",
         "10.10.63.255"
        ],
        [
         5,
         "10.10.64.0/20",
         "10.10.64.0",
         "10.10.79.255"
        ],
        [
         6,
         "10.10.80.0/20",
         "10.10.80.0",
         "10.10.95.255"
        ],
        [
         7,
         "10.10.96.0/20",
         "10.10.96.0",
         "10.10.111.255"
        ],
        [
         8,
         "10.10.112.0/20",
         "10.10.112.0",
         "10.10.127.255"
        ],
        [
         9,
         "10.10.128.0/20",
         "10.10.128.0",
         "10.10.143.255"
        ],
        [
         10,
         "10.10.144.0/20",
         "10.10.144.0",
         "10.10.159.255"
        ],
        [
         11,
         "10.10.160.0/20",
         "10.10.160.0",
         "10.10.175.255"
        ],
        [
         12,
         "10.10.176.0/20",
         "10.10.176.0",
         "10.10.191.255"
        ],
        [
         13,
         "10.10.192.0/20",
         "10.10.192.0",
         "10.10.207.255"
        ],
        [
         14,
         "10.10.208.0/20",
         "10.10.208.0",
         "10.10.223.255"
        ],
        [
         15,
         "10.10.224.0/20",
         "10.10.224.0",
         "10.10.239.255"
        ],
        [
         16,
         "10.10.240.0/20",
         "10.10.240.0",
         "10.10.255.255"
        ]
       ]
      },
      "caption": "Each block steps by 16 in the third octet"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 61–92 (subnet masks, subnetting)"
  ]
 },
 "ecc7c7fcbccd1c0e": {
  "sections": [
   [
    "a) 45000054 00030000 2006…",
    [
     {
      "table": {
       "head": [
        "Question",
        "Field",
        "Answer"
       ],
       "rows": [
        [
         "i. Header size",
         "HLEN = 5",
         "5 × 4 = 20 bytes"
        ],
        [
         "ii. Options?",
         "20 bytes = minimum",
         "No options"
        ],
        [
         "iii. Data size",
         "Total length = 0x0054 = 84",
         "84 − 20 = 64 bytes"
        ],
        [
         "iv. Fragmented?",
         "Flags/offset = 0x0000",
         "No — DF = 0, MF = 0, offset = 0"
        ],
        [
         "v. More routers",
         "TTL = 0x20",
         "32 more routers (hops)"
        ],
        [
         "vi. Protocol",
         "0x06",
         "6 = TCP"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) Flags for the two cases (20-byte header assumed)",
    [
     "i) 200-byte datagram, MTU 400: fits → no fragmentation. DF = 0 (or 1, it doesn’t matter), MF = 0, offset = 0.",
     "ii) 1500-byte datagram, MTU 400: data per fragment = ⌊(400 − 20)/8⌋ × 8 = 376 bytes → 4 fragments. DF must be 0.",
     {
      "table": {
       "head": [
        "Fragment",
        "Total length",
        "Data bytes",
        "Byte range",
        "MF",
        "Offset field"
       ],
       "rows": [
        [
         1,
         396,
         376,
         "0–375",
         1,
         "0"
        ],
        [
         2,
         396,
         376,
         "376–751",
         1,
         "47 (376/8)"
        ],
        [
         3,
         396,
         376,
         "752–1127",
         1,
         "94 (752/8)"
        ],
        [
         4,
         372,
         352,
         "1128–1479",
         0,
         "141 (1128/8)"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 322.4 82\" width=\"322.4\" height=\"82\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"101.19999999999999\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><rect x=\"101.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"121.19999999999999\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">0 (reserved)</text><rect x=\"141.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"161.2\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">DF</text><rect x=\"181.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"201.2\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">MF</text><text x=\"161.2\" y=\"72\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Flags: DF = do not fragment, MF = more fragments</text></svg>",
      "alt": "Flags: DF = do not fragment, MF = more fragments"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219 (fragmentation fields)"
  ]
 },
 "d2f8aee0e97100eb": {
  "sections": [
   [
    "(a) Count-to-infinity on A → B → C → D → E",
    [
     "Before the failure the costs to A are B = 1, C = 2, D = 3, E = 4 (each link costs 1).",
     "When A fails, B loses its direct route, but C is still advertising ‘A at cost 2’. B cannot tell that C’s path goes through B itself, so B sets A = 2 + 1 = 3 via C.",
     "C then hears B’s 3 and sets 4 via B; B hears 4 and sets 5; … the two routers bounce the destination between them, each time adding 1. D and E follow. The costs climb until they reach the protocol’s infinity (16 in RIP) — only then is A declared unreachable. Meanwhile packets for A loop between B and C.",
     {
      "table": {
       "head": [
        "Exchange",
        "B’s cost to A",
        "C’s cost to A",
        "D’s cost to A",
        "E’s cost to A"
       ],
       "rows": [
        [
         "Before failure",
         "1",
         "2",
         "3",
         "4"
        ],
        [
         "A fails: B sees link down",
         "∞ → takes C’s 2+1 = 3 (via C)",
         "2",
         "3",
         "4"
        ],
        [
         "Next exchange",
         "3",
         "B said 3 → 4 (via B)",
         "3",
         "4"
        ],
        [
         "Next",
         "C said 4 → 5",
         "4",
         "C said 4 → 5",
         "4"
        ],
        [
         "Next",
         "5",
         "B said 5 → 6",
         "5",
         "D said 5 → 6"
        ],
        [
         "…",
         "7, 9, 11 …",
         "6, 8, 10 …",
         "…",
         "…"
        ],
        [
         "Until ∞ (16 in RIP)",
         "16 = unreachable",
         "16",
         "16",
         "16"
        ]
       ]
      },
      "caption": "Bad news travels slowly: B and C keep using each other as the path to A."
     },
     {
      "img": "scans/networks/notes/m5-009-016.webp",
      "caption": "Two-node instability / count to infinity (notes p. 9)",
      "alt": "Two-node instability / count to infinity (notes p. 9)"
     }
    ]
   ],
   [
    "Solution",
    [
     "Split horizon: never advertise a route back on the interface it was learned from (B does not tell A about A’s own networks).",
     "Poison reverse: advertise it back but with cost ∞ (16), so the neighbour immediately discards that path.",
     "Hold-down timer: after a route goes bad, ignore worse ‘good news’ about it for a while so stale information can die out.",
     "Triggered updates: send changes immediately instead of waiting for the 30 s timer — shortens convergence."
    ]
   ],
   [
    "(b) Network and initial distance vectors",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 255\" width=\"380\" height=\"255\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"77\" y1=\"45\" x2=\"203\" y2=\"45\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"132.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"140\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"60\" y1=\"62\" x2=\"60\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"52.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"60\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"209.2\" y1=\"58.1\" x2=\"160.8\" y2=\"116.9\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"177.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"185\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"223.9\" y1=\"61.5\" x2=\"256.1\" y2=\"198.5\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"232.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"310.2\" y1=\"143.9\" x2=\"269.8\" y2=\"201.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"77\" y1=\"215\" x2=\"243\" y2=\"215\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"152.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><circle cx=\"60\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"60\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"220\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"220\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"150\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><circle cx=\"320\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"320\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"60\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"60\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"260\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"260\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text></svg>",
      "alt": "Network graph"
     },
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         "∞",
         3,
         8,
         "∞",
         "∞"
        ],
        [
         "B",
         "∞",
         0,
         "∞",
         "∞",
         2,
         "∞"
        ],
        [
         "C",
         3,
         "∞",
         0,
         "∞",
         1,
         6
        ],
        [
         "D",
         8,
         "∞",
         "∞",
         0,
         2,
         "∞"
        ],
        [
         "E",
         "∞",
         2,
         1,
         2,
         0,
         "∞"
        ],
        [
         "F",
         "∞",
         "∞",
         6,
         "∞",
         "∞",
         0
        ]
       ]
      },
      "caption": "Initial vectors (each router knows only its own links)"
     },
     "Each node knows only the cost to its neighbours (row = the vector that node advertises). After exchanging vectors repeatedly, the converged vectors are:",
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         6,
         3,
         6,
         4,
         9
        ],
        [
         "B",
         6,
         0,
         3,
         4,
         2,
         9
        ],
        [
         "C",
         3,
         3,
         0,
         3,
         1,
         6
        ],
        [
         "D",
         6,
         4,
         3,
         0,
         2,
         9
        ],
        [
         "E",
         4,
         2,
         1,
         2,
         0,
         7
        ],
        [
         "F",
         9,
         9,
         6,
         9,
         7,
         0
        ]
       ]
      },
      "caption": "Converged distance vectors"
     },
     "Example: A reaches E via C at 3 + 1 = 4 (cheaper than A–D–E = 10); A reaches B via C, E at 3 + 1 + 2 = 6; D reaches C via E at 2 + 1 = 3."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41",
   "Module 5 ADHD notes p. 9 (two-node instability figure)"
  ]
 },
 "7aaea18ad78599b3": {
  "sections": [
   [
    "Answer",
    [
     "Apply D(v) = min(D(v), D(w) + c(w,v)) each time a new node w is added to N′ (the set whose least cost is final).",
     "Result from u: v = 2 (u→v), w = 3 (u→x→y→w), x = 1 (u→x), y = 2 (u→x→y), z = 4 (u→x→y→z)."
    ]
   ],
   [
    "Table (Step, N′, D(v),p(v) … D(z),p(z))",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(v), p(v)",
        "D(w), p(w)",
        "D(x), p(x)",
        "D(y), p(y)",
        "D(z), p(z)"
       ],
       "rows": [
        [
         0,
         "u",
         "2, u",
         "5, u",
         "1, u",
         "∞",
         "∞"
        ],
        [
         1,
         "ux",
         "2, u",
         "4, x",
         "1, u",
         "2, x",
         "∞"
        ],
        [
         2,
         "uxv",
         "2, u",
         "4, x",
         "—",
         "2, x",
         "∞"
        ],
        [
         3,
         "uxvy",
         "—",
         "3, y",
         "—",
         "2, x",
         "4, y"
        ],
        [
         4,
         "uxvyw",
         "—",
         "3, y",
         "—",
         "—",
         "4, y"
        ],
        [
         5,
         "uxvywz",
         "—",
         "—",
         "—",
         "—",
         "4, y"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     }
    ]
   ],
   [
    "Routing (forwarding) table of u",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "v",
         "u → v",
         2,
         "v"
        ],
        [
         "w",
         "u → x → y → w",
         3,
         "x"
        ],
        [
         "x",
         "u → x",
         1,
         "x"
        ],
        [
         "y",
         "u → x → y",
         2,
         "x"
        ],
        [
         "z",
         "u → x → y → z",
         4,
         "x"
        ]
       ]
      },
      "caption": "Routing table at u"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 490 265\" width=\"490\" height=\"265\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"59\" y1=\"120.3\" x2=\"146\" y2=\"59.7\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"94.9\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"102.5\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"61.3\" y1=\"125.3\" x2=\"303.7\" y2=\"54.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"174.9\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"182.5\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"59\" y1=\"139.7\" x2=\"146\" y2=\"200.3\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"94.9\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"102.5\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"177\" y1=\"50\" x2=\"303\" y2=\"50\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"232.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"160\" y1=\"67\" x2=\"160\" y2=\"193\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"152.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"308\" y1=\"62\" x2=\"172\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"232.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"320\" y1=\"67\" x2=\"320\" y2=\"193\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"312.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"320\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"334.1\" y1=\"59.4\" x2=\"425.9\" y2=\"120.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"372.4\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"177\" y1=\"210\" x2=\"303\" y2=\"210\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"232.4\" y=\"201\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"334.1\" y1=\"200.6\" x2=\"425.9\" y2=\"139.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"372.4\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><circle cx=\"45\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">u</text><rect x=\"37.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"160\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">v</text><rect x=\"152.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">2</text><circle cx=\"320\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"320\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">w</text><rect x=\"312.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"320\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"160\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">x</text><rect x=\"152.7\" y=\"229\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"320\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"320\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">y</text><rect x=\"312.7\" y=\"229\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"320\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">2</text><circle cx=\"440\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"440\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">z</text><rect x=\"432.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"440\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><text x=\"245\" y=\"257\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from u (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from u (green) · blue = final cost"
     }
    ]
   ],
   [
    "Reading the table",
    [
     "Step 1 adds x (cost 1): w improves to 1 + 3 = 4, y becomes 1 + 1 = 2.",
     "Step 3 adds y (cost 2): w improves again to 2 + 1 = 3 and z becomes 2 + 2 = 4.",
     "Ties (v and y both 2) can be broken either way; the final costs are the same."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "85e2cf0757ad189d": {
  "sections": [
   [
    "a) Number of stations",
    [
     "Each station: 1000 bits every 100 s = 10 bps.",
     "Pure ALOHA usable throughput at best = 18.4 % × 56 kbps = 0.184 × 56 000 ≈ 10 304 bps.",
     "N = 10 304 / 10 ≈ 1030 stations."
    ]
   ],
   [
    "b) Standard: IEEE 802.11 (Wi-Fi) in infrastructure mode",
    [
     "X’s phone joins the aircraft’s Wi-Fi: on-board access points form a BSS; several APs along the cabin are linked by a distribution system into one ESS.",
     "The on-board server/portal connects the cabin network to the ground through a satellite (or air-to-ground cellular) link, which carries traffic to the Internet.",
     "Architecture components: Station (STA) — X’s device; Access Point (AP) — cabin AP; BSS — one AP and its stations; Distribution System (DS) — wired/wireless backbone joining APs; ESS — set of BSSs on the same DS appearing as one LAN; Portal — bridge from 802.11 to other networks (here the satellite gateway).",
     "Access: CSMA/CA with optional RTS/CTS (DCF), authentication and association to the AP, WPA2/WPA3 security.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 250\" width=\"620\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"95,60 150,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polyline points=\"95,110 150,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polyline points=\"95,160 150,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polyline points=\"230,110 270,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"330,130 330,190\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"390,110 435,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"505,110 530,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"25\" y=\"46\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"60\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">STA 1</text><rect x=\"25\" y=\"96\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"60\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">STA 2</text><rect x=\"25\" y=\"146\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"60\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">STA 3</text><rect x=\"150\" y=\"93\" width=\"80\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"190\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">AP 1</text><rect x=\"270\" y=\"90\" width=\"120\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Distribution</text><text x=\"330\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">system</text><rect x=\"290\" y=\"190\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">AP 2</text><rect x=\"435\" y=\"93\" width=\"70\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"470\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Portal</text><ellipse cx=\"570\" cy=\"110\" rx=\"40\" ry=\"20\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"570\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">802.x LAN /</text><text x=\"570\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Internet</text><text x=\"120\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\"></text><text x=\"115\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">BSS 1 (stations + AP)</text><text x=\"330\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">AP 2 → BSS 2 …   BSS 1 + BSS 2 via DS = ESS</text></svg>",
      "alt": "Diagram"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on ALOHA and IEEE 802.11 architecture"
  ]
 },
 "065e46a7b3390642": {
  "sections": [
   [
    "Design",
    [
     {
      "table": {
       "head": [
        "Group",
        "Customers × size",
        "Prefix",
        "First customer",
        "Last customer",
        "Group range"
       ],
       "rows": [
        [
         "Group 1",
         "200 × 128",
         "/25",
         "150.80.0.0/25 (150.80.0.0 – 150.80.0.127)",
         "150.80.99.128/25 (150.80.99.128 – 150.80.99.255)",
         "150.80.0.0 – 150.80.99.255"
        ],
        [
         "Group 2",
         "400 × 16",
         "/28",
         "150.80.100.0/28 (150.80.100.0 – 150.80.100.15)",
         "150.80.124.240/28 (150.80.124.240 – 150.80.124.255)",
         "150.80.100.0 – 150.80.124.255"
        ],
        [
         "Group 3",
         "2048 × 4",
         "/30",
         "150.80.125.0/30 (150.80.125.0 – 150.80.125.3)",
         "150.80.156.252/30 (150.80.156.252 – 150.80.156.255)",
         "150.80.125.0 – 150.80.156.255"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Requested subnets",
    [
     {
      "table": {
       "head": [
        "Subnet",
        "Working",
        "Range"
       ],
       "rows": [
        [
         "200th of group 1 (/25)",
         "150.80.0.0 + 199 × 128 = offset 25 472",
         "150.80.99.128/25: 150.80.99.128 – 150.80.99.255"
        ],
        [
         "400th of group 2 (/28)",
         "group starts 150.80.100.0; + 399 × 16 = 6384",
         "150.80.124.240/28: 150.80.124.240 – 150.80.124.255"
        ],
        [
         "2048th of group 3 (/30)",
         "group starts 150.80.125.0; + 2047 × 4 = 8188",
         "150.80.156.252/30: 150.80.156.252 – 150.80.156.255"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Addresses still available",
    [
     "Allocated = 200 × 128 + 400 × 16 + 2048 × 4 = 25 600 + 6400 + 8192 = 40192.",
     "Available = 65 536 − 40192 = 25344 (150.80.157.0 – 150.80.255.255).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"234.4\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"137.1875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 1</text><text x=\"137.1875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">200 × /25</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.0.0</text><rect x=\"254.4\" y=\"30\" width=\"58.6\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"283.671875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 2</text><text x=\"283.671875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">400 × /28</text><line x1=\"254.4\" y1=\"76\" x2=\"254.4\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"256.375\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.100.0</text><rect x=\"313.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"350.46875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 3</text><text x=\"350.46875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">2048 × /30</text><line x1=\"313\" y1=\"76\" x2=\"313\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"314.96875\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.125.0</text><rect x=\"388.0\" y=\"30\" width=\"232.0\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"503.984375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"503.984375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">25344</text><line x1=\"388\" y1=\"76\" x2=\"388\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"389.96875\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.157.0</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">150.80.0.0/16</text></svg>",
      "alt": "150.80.0.0/16"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126"
  ]
 },
 "06ff8a092ac11ef3": {
  "sections": [
   [
    "a) Offset of the third fragment = 144",
    [
     "IP data = 4500 − 20 = 4480 bytes (the 40-byte TCP header is part of IP’s data).",
     "Each fragment: 600 − 20 = 580 bytes available → data must be a multiple of 8 → 576 bytes.",
     "Offsets (in 8-byte units): fragment 1 = 0, fragment 2 = 576/8 = 72, fragment 3 = 1152/8 = 144.",
     {
      "table": {
       "head": [
        "Fragment",
        "Total length",
        "Data bytes",
        "Byte range",
        "MF",
        "Offset field"
       ],
       "rows": [
        [
         1,
         596,
         576,
         "0–575",
         1,
         "0"
        ],
        [
         2,
         596,
         576,
         "576–1151",
         1,
         "72 (576/8)"
        ],
        [
         3,
         596,
         576,
         "1152–1727",
         1,
         "144 (1152/8)"
        ],
        [
         4,
         596,
         576,
         "1728–2303",
         1,
         "216 (1728/8)"
        ],
        [
         5,
         596,
         576,
         "2304–2879",
         1,
         "288 (2304/8)"
        ],
        [
         6,
         596,
         576,
         "2880–3455",
         1,
         "360 (2880/8)"
        ],
        [
         7,
         596,
         576,
         "3456–4031",
         1,
         "432 (3456/8)"
        ],
        [
         8,
         468,
         448,
         "4032–4479",
         0,
         "504 (4032/8)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) Network Address Translation (NAT)",
    [
     "The company uses private addresses internally and a single public IP on its router; NAT rewrites addresses (and ports) at the boundary, so the outside world sees only one address and cannot count or reach the internal hosts.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 210\" width=\"640\" height=\"210\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"130,50 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,105 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,160 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"355,105 415,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"525,105 540,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"35\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.11</text><rect x=\"10\" y=\"90\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.12</text><rect x=\"10\" y=\"145\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.13</text><rect x=\"225\" y=\"80\" width=\"130\" height=\"50\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"290\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">NAT router</text><text x=\"290\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">in: 192.168.10.1</text><text x=\"290\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">out: 203.0.113.5</text><ellipse cx=\"470\" cy=\"105\" rx=\"55\" ry=\"30\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"470\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Internet</text><rect x=\"540\" y=\"88\" width=\"90\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"585\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">Server</text><text x=\"585\" y=\"112.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">93.184.216.34</text><text x=\"120\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Private network 192.168.10.0/24</text><text x=\"470\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Public side: one address 203.0.113.5</text></svg>",
      "alt": "Diagram"
     },
     {
      "table": {
       "head": [
        "Private IP",
        "Private port",
        "Public IP",
        "Public port",
        "Destination",
        "Protocol"
       ],
       "rows": [
        [
         "192.168.10.11",
         "50001",
         "203.0.113.5",
         "40001",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.12",
         "50001",
         "203.0.113.5",
         "40002",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.13",
         "53500",
         "203.0.113.5",
         "40003",
         "8.8.8.8:53",
         "UDP"
        ]
       ]
      },
      "caption": "NAT/PAT translation table (port numbers keep the flows apart)"
     },
     "Outgoing: a host sends 192.168.10.11:50001 → server:443. The NAT router replaces the source with 203.0.113.5:40001, records the mapping, fixes the IP/TCP checksums and forwards it.",
     "Incoming: the reply arrives for 203.0.113.5:40001; the router looks up the table and rewrites the destination back to 192.168.10.11:50001.",
     "Because the port number distinguishes flows, all employees share one public IP (NAPT / PAT). Outsiders cannot open connections to inside hosts unless a static mapping (port forwarding) exists."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219 (fragmentation), 261–262 (NAT)"
  ]
 },
 "30c5aa8ed2dd581d": {
  "sections": [
   [
    "Answer",
    [
     "From node 0: 1 = 4 (0→1), 2 = 12 (0→1→2), 3 = 19 (0→1→2→3), 4 = 21 (0→7→6→5→4), 5 = 11 (0→7→6→5), 6 = 9 (0→7→6), 7 = 8 (0→7), 8 = 14 (0→1→2→8).",
     "From node 4: 0 = 21 (4→5→6→7→0), 1 = 22 (4→5→2→1), 2 = 14 (4→5→2), 3 = 9 (4→3), 5 = 10 (4→5), 6 = 12 (4→5→6), 7 = 13 (4→5→6→7), 8 = 16 (4→5→2→8).",
     "In particular the shortest path between node 0 and node 4 costs 21 (0 → 7 → 6 → 5 → 4)."
    ]
   ],
   [
    "Dijkstra from node 0",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(1), p(1)",
        "D(2), p(2)",
        "D(3), p(3)",
        "D(4), p(4)",
        "D(5), p(5)",
        "D(6), p(6)",
        "D(7), p(7)",
        "D(8), p(8)"
       ],
       "rows": [
        [
         0,
         "0",
         "4, 0",
         "∞",
         "∞",
         "∞",
         "∞",
         "∞",
         "8, 0",
         "∞"
        ],
        [
         1,
         "01",
         "4, 0",
         "12, 1",
         "∞",
         "∞",
         "∞",
         "∞",
         "8, 0",
         "∞"
        ],
        [
         2,
         "017",
         "—",
         "12, 1",
         "∞",
         "∞",
         "∞",
         "9, 7",
         "8, 0",
         "15, 7"
        ],
        [
         3,
         "0176",
         "—",
         "12, 1",
         "∞",
         "∞",
         "11, 6",
         "9, 7",
         "—",
         "15, 7"
        ],
        [
         4,
         "01765",
         "—",
         "12, 1",
         "25, 5",
         "21, 5",
         "11, 6",
         "—",
         "—",
         "15, 7"
        ],
        [
         5,
         "017652",
         "—",
         "12, 1",
         "19, 2",
         "21, 5",
         "—",
         "—",
         "—",
         "14, 2"
        ],
        [
         6,
         "0176528",
         "—",
         "—",
         "19, 2",
         "21, 5",
         "—",
         "—",
         "—",
         "14, 2"
        ],
        [
         7,
         "01765283",
         "—",
         "—",
         "19, 2",
         "21, 5",
         "—",
         "—",
         "—",
         "—"
        ],
        [
         8,
         "017652834",
         "—",
         "—",
         "—",
         "21, 5",
         "—",
         "—",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "1",
         "0 → 1",
         4,
         "1"
        ],
        [
         "2",
         "0 → 1 → 2",
         12,
         "1"
        ],
        [
         "3",
         "0 → 1 → 2 → 3",
         19,
         "1"
        ],
        [
         "4",
         "0 → 7 → 6 → 5 → 4",
         21,
         "7"
        ],
        [
         "5",
         "0 → 7 → 6 → 5",
         11,
         "7"
        ],
        [
         "6",
         "0 → 7 → 6",
         9,
         "7"
        ],
        [
         "7",
         "0 → 7",
         8,
         "7"
        ],
        [
         "8",
         "0 → 1 → 2 → 8",
         14,
         "1"
        ]
       ]
      },
      "caption": "Routing table at 0"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 590 270\" width=\"590\" height=\"270\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"53.5\" y1=\"119.6\" x2=\"136.5\" y2=\"55.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"87.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"53.5\" y1=\"140.4\" x2=\"136.5\" y2=\"204.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"87.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"167\" y1=\"45\" x2=\"273\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"212.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"150\" y1=\"62\" x2=\"150\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"138.8\" y=\"121\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"150\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"307\" y1=\"45\" x2=\"413\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"352.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"290\" y1=\"62\" x2=\"290\" y2=\"113\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"282.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"300.8\" y1=\"58.1\" x2=\"419.2\" y2=\"201.9\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"352.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"443.5\" y1=\"55.4\" x2=\"526.5\" y2=\"119.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"477.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"485\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"430\" y1=\"62\" x2=\"430\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"418.8\" y=\"121\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"430\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">14</text><line x1=\"526.5\" y1=\"140.4\" x2=\"443.5\" y2=\"204.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"473.8\" y=\"163.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"485\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"413\" y1=\"215\" x2=\"307\" y2=\"215\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"352.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"273\" y1=\"215\" x2=\"167\" y2=\"215\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"212.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"290\" y1=\"198\" x2=\"290\" y2=\"147\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"164.5\" y1=\"206.2\" x2=\"275.5\" y2=\"138.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"212.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><circle cx=\"40\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"40\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">0</text><rect x=\"32.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"150\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">1</text><rect x=\"142.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"290\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">2</text><rect x=\"279.3\" y=\"64\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">12</text><circle cx=\"430\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">3</text><rect x=\"419.3\" y=\"64\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">19</text><circle cx=\"540\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"540\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">4</text><rect x=\"529.3\" y=\"149\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"540\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">21</text><circle cx=\"430\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">5</text><rect x=\"419.3\" y=\"234\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">11</text><circle cx=\"290\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">6</text><rect x=\"282.7\" y=\"234\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">9</text><circle cx=\"150\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">7</text><rect x=\"142.7\" y=\"234\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">8</text><circle cx=\"290\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">8</text><rect x=\"279.3\" y=\"149\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><text x=\"295\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from 0 (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from 0 (green) · blue = final cost"
     }
    ]
   ],
   [
    "Dijkstra from node 4",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(0), p(0)",
        "D(1), p(1)",
        "D(2), p(2)",
        "D(3), p(3)",
        "D(5), p(5)",
        "D(6), p(6)",
        "D(7), p(7)",
        "D(8), p(8)"
       ],
       "rows": [
        [
         0,
         "4",
         "∞",
         "∞",
         "∞",
         "9, 4",
         "10, 4",
         "∞",
         "∞",
         "∞"
        ],
        [
         1,
         "43",
         "∞",
         "∞",
         "16, 3",
         "9, 4",
         "10, 4",
         "∞",
         "∞",
         "∞"
        ],
        [
         2,
         "435",
         "∞",
         "∞",
         "14, 5",
         "—",
         "10, 4",
         "12, 5",
         "∞",
         "∞"
        ],
        [
         3,
         "4356",
         "∞",
         "∞",
         "14, 5",
         "—",
         "—",
         "12, 5",
         "13, 6",
         "18, 6"
        ],
        [
         4,
         "43567",
         "21, 7",
         "24, 7",
         "14, 5",
         "—",
         "—",
         "—",
         "13, 6",
         "18, 6"
        ],
        [
         5,
         "435672",
         "21, 7",
         "22, 2",
         "14, 5",
         "—",
         "—",
         "—",
         "—",
         "16, 2"
        ],
        [
         6,
         "4356728",
         "21, 7",
         "22, 2",
         "—",
         "—",
         "—",
         "—",
         "—",
         "16, 2"
        ],
        [
         7,
         "43567280",
         "21, 7",
         "22, 2",
         "—",
         "—",
         "—",
         "—",
         "—",
         "—"
        ],
        [
         8,
         "435672801",
         "—",
         "22, 2",
         "—",
         "—",
         "—",
         "—",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "0",
         "4 → 5 → 6 → 7 → 0",
         21,
         "5"
        ],
        [
         "1",
         "4 → 5 → 2 → 1",
         22,
         "5"
        ],
        [
         "2",
         "4 → 5 → 2",
         14,
         "5"
        ],
        [
         "3",
         "4 → 3",
         9,
         "3"
        ],
        [
         "5",
         "4 → 5",
         10,
         "5"
        ],
        [
         "6",
         "4 → 5 → 6",
         12,
         "5"
        ],
        [
         "7",
         "4 → 5 → 6 → 7",
         13,
         "5"
        ],
        [
         "8",
         "4 → 5 → 2 → 8",
         16,
         "5"
        ]
       ]
      },
      "caption": "Routing table at 4"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 590 270\" width=\"590\" height=\"270\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"53.5\" y1=\"119.6\" x2=\"136.5\" y2=\"55.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"87.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"53.5\" y1=\"140.4\" x2=\"136.5\" y2=\"204.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"87.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"167\" y1=\"45\" x2=\"273\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"212.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"150\" y1=\"62\" x2=\"150\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"138.8\" y=\"121\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"150\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"307\" y1=\"45\" x2=\"413\" y2=\"45\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"352.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"290\" y1=\"62\" x2=\"290\" y2=\"113\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"282.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"300.8\" y1=\"58.1\" x2=\"419.2\" y2=\"201.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"352.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"443.5\" y1=\"55.4\" x2=\"526.5\" y2=\"119.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"477.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"485\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"430\" y1=\"62\" x2=\"430\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"418.8\" y=\"121\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"430\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">14</text><line x1=\"526.5\" y1=\"140.4\" x2=\"443.5\" y2=\"204.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"473.8\" y=\"163.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"485\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"413\" y1=\"215\" x2=\"307\" y2=\"215\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"352.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"273\" y1=\"215\" x2=\"167\" y2=\"215\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"212.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"290\" y1=\"198\" x2=\"290\" y2=\"147\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"164.5\" y1=\"206.2\" x2=\"275.5\" y2=\"138.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"212.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><circle cx=\"40\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"40\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">0</text><rect x=\"29.3\" y=\"149\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">21</text><circle cx=\"150\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">1</text><rect x=\"139.3\" y=\"64\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">22</text><circle cx=\"290\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">2</text><rect x=\"279.3\" y=\"64\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><circle cx=\"430\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">3</text><rect x=\"422.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">9</text><circle cx=\"540\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"540\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">4</text><rect x=\"532.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"540\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"430\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">5</text><rect x=\"419.3\" y=\"234\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><circle cx=\"290\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">6</text><rect x=\"279.3\" y=\"234\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">12</text><circle cx=\"150\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">7</text><rect x=\"139.3\" y=\"234\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">13</text><circle cx=\"290\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">8</text><rect x=\"279.3\" y=\"149\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"290\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">16</text><text x=\"295\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from 4 (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from 4 (green) · blue = final cost"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "f4bf352487684e67": {
  "sections": [
   [
    "Network",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 255\" width=\"500\" height=\"255\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"59.3\" y1=\"120.8\" x2=\"155.7\" y2=\"59.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"59.3\" y1=\"139.2\" x2=\"155.7\" y2=\"200.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"170\" y1=\"67\" x2=\"170\" y2=\"193\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"162.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"187\" y1=\"50\" x2=\"313\" y2=\"50\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"242.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"250\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"187\" y1=\"210\" x2=\"313\" y2=\"210\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"242.4\" y=\"201\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"250\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"330\" y1=\"67\" x2=\"330\" y2=\"193\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"322.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"344.1\" y1=\"59.4\" x2=\"435.9\" y2=\"120.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"382.4\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"344.1\" y1=\"200.6\" x2=\"435.9\" y2=\"139.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"382.4\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><circle cx=\"45\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R1</text><circle cx=\"170\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R2</text><circle cx=\"170\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R3</text><circle cx=\"330\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R4</text><circle cx=\"330\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R5</text><circle cx=\"450\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"450\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">R6</text></svg>",
      "alt": "Network graph"
     }
    ]
   ],
   [
    "(i) Routing table of R1",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Initial",
        "After round 1",
        "After round 2",
        "After round 3"
       ],
       "rows": [
        [
         "R1",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "R2",
         "6 via R2",
         "5 via R3",
         "5 via R3",
         "5 via R3"
        ],
        [
         "R3",
         "3 via R3",
         "3 via R3",
         "3 via R3",
         "3 via R3"
        ],
        [
         "R4",
         "∞",
         "13 via R2",
         "12 via R3",
         "12 via R3"
        ],
        [
         "R5",
         "∞",
         "12 via R3",
         "12 via R3",
         "12 via R3"
        ],
        [
         "R6",
         "∞",
         "∞",
         "16 via R3",
         "16 via R3"
        ]
       ]
      },
      "caption": "Distance vector of R1 (cost via next hop). Stable after round 2."
     },
     "Round 1: R2 advertises (R1 6, R2 0, R3 2, R4 7, R5 ∞, R6 ∞); R3 advertises (R1 3, R2 2, R3 0, R4 ∞, R5 9, R6 ∞).",
     "DR1(R2) = min{ R2: 6+0=6, R3: 3+2=5 } = 5\nDR1(R3) = min{ R2: 6+2=8, R3: 3+0=3 } = 3\nDR1(R4) = min{ R2: 6+7=13, R3: 3+∞=∞ } = 13\nDR1(R5) = min{ R2: 6+∞=∞, R3: 3+9=12 } = 12\nDR1(R6) = min{ R2: 6+∞=∞, R3: 3+∞=∞ } = ∞",
     "Round 2: R2 advertises (R1 5, R2 0, R3 2, R4 7, R5 8, R6 15); R3 advertises (R1 3, R2 2, R3 0, R4 9, R5 9, R6 13).",
     "DR1(R2) = min{ R2: 6+0=6, R3: 3+2=5 } = 5\nDR1(R3) = min{ R2: 6+2=8, R3: 3+0=3 } = 3\nDR1(R4) = min{ R2: 6+7=13, R3: 3+9=12 } = 12\nDR1(R5) = min{ R2: 6+8=14, R3: 3+9=12 } = 12\nDR1(R6) = min{ R2: 6+15=21, R3: 3+13=16 } = 16",
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "R1",
         0,
         "—"
        ],
        [
         "R2",
         5,
         "R3"
        ],
        [
         "R3",
         3,
         "R3"
        ],
        [
         "R4",
         12,
         "R3"
        ],
        [
         "R5",
         12,
         "R3"
        ],
        [
         "R6",
         16,
         "R3"
        ]
       ]
      },
      "caption": "Final routing table of R1"
     }
    ]
   ],
   [
    "(ii) Links never used for data",
    [
     "Unused links: R1–R2 (cost 6), R4–R6 (cost 8) — 2 links.",
     "A link carries data only if it lies on at least one least-cost path.",
     "R1–R2 (6) is never chosen: R1 → R3 → R2 costs 3 + 2 = 5 < 6, and every path that could use R1–R2 is cheaper through R3.",
     "R4–R6 (8) is never chosen: R4 → R5 → R6 costs 1 + 4 = 5 < 8.",
     "R3–R5 (9) is still used (R3 → R5 costs 9 directly vs 10 via R2–R4), so it is not in the list."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "3ddd29cbafe1da57": {
  "sections": [
   [
    "(i) Protocol",
    [
     "Selective Repeat ARQ (with negative acknowledgement): the receiver buffers 3, 4, 5 after the gap and asks for frame 2 only."
    ]
   ],
   [
    "(ii) Windows and sequence bits",
    [
     "Sender window = 4 and receiver window = 4 (the shaded window covers four frames, 0–3 then 2–5).",
     "Sequence numbers wrap 0–7 → m = 3 bits; Selective Repeat requires W ≤ 2ᵐ⁻¹ = 4 ✓."
    ]
   ],
   [
    "(iii) What happened",
    [
     "Frames 0 and 1 arrive → cumulative ACK 2 (next expected = 2).",
     "Frame 2 is lost. Frame 3 arrives out of order → buffered, and the receiver sends NAK 2 at once.",
     "Frames 4, 5 also arrive and are buffered. The sender resends only frame 2.",
     "With 2 received, 2–5 are delivered in order and ACK 6 is sent; frames 6, 7 follow and ACK 0 (seq numbers wrapped) acknowledges them.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 615.2 379\" width=\"615.2\" height=\"379\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mo-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mo-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"100\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"150\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"150\" y1=\"33\" x2=\"150\" y2=\"351\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"400\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"450\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"450\" y1=\"33\" x2=\"450\" y2=\"351\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"351\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"150\" y1=\"50\" x2=\"450\" y2=\"72.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"47.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"56.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 0</text><line x1=\"150\" y1=\"75\" x2=\"450\" y2=\"97.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"72.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"81.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 1</text><line x1=\"450\" y1=\"97.5\" x2=\"150\" y2=\"120\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2f7a4f)\"/><rect x=\"326.6\" y=\"95.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"104.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"150\" y1=\"100\" x2=\"336\" y2=\"114\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"329\" y1=\"107\" x2=\"343\" y2=\"121\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"329\" y1=\"121\" x2=\"343\" y2=\"107\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"211.6\" y=\"96.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"105.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Frame 2</text><line x1=\"150\" y1=\"125\" x2=\"450\" y2=\"147.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"122.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"131.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 3</text><line x1=\"150\" y1=\"150\" x2=\"450\" y2=\"172.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"147.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"156.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 4</text><line x1=\"150\" y1=\"175\" x2=\"450\" y2=\"197.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"172.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"181.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 5</text><line x1=\"450\" y1=\"147.5\" x2=\"150\" y2=\"187.5\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2f7a4f)\"/><rect x=\"326.6\" y=\"151.1\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"160.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">NAK 2</text><line x1=\"150\" y1=\"200\" x2=\"450\" y2=\"222.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"192.3\" y=\"197.7\" width=\"119.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"206.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 2 (resent)</text><line x1=\"450\" y1=\"222.5\" x2=\"150\" y2=\"245\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2f7a4f)\"/><rect x=\"326.6\" y=\"220.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"229.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 6</text><line x1=\"150\" y1=\"250\" x2=\"450\" y2=\"272.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"247.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"256.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 6</text><line x1=\"150\" y1=\"275\" x2=\"450\" y2=\"297.5\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2c5d8f)\"/><rect x=\"223.6\" y=\"272.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"252\" y=\"281.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 7</text><line x1=\"450\" y1=\"297.5\" x2=\"150\" y2=\"320\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mo-2f7a4f)\"/><rect x=\"326.6\" y=\"295.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348\" y=\"304.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 0</text><text x=\"460\" y=\"147.5\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">gap: 3 buffered, NAK 2</text><text x=\"460\" y=\"172.5\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">4 buffered</text><text x=\"460\" y=\"197.5\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">5 buffered</text><text x=\"460\" y=\"222.5\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">deliver 2,3,4,5</text><text x=\"307.6\" y=\"370\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Fig 1 — Selective Repeat with NAK</text></svg>",
      "alt": "Fig 1 — Selective Repeat with NAK"
     }
    ]
   ],
   [
    "(iv) Sliding windows",
    [
     {
      "table": {
       "head": [
        "Event",
        "Sender window",
        "Receiver window"
       ],
       "rows": [
        [
         "Start",
         "[0][1][2][3] 4  5  6  7 ",
         "[0][1][2][3] 4  5  6  7 "
        ],
        [
         "ACK 2 received",
         " 0  1 [2][3][4][5] 6  7 ",
         " 0  1 [2][3][4][5] 6  7 "
        ],
        [
         "3, 4, 5 buffered; NAK 2",
         " 0  1 [2][3][4][5] 6  7   (3,4,5 sent)",
         " 0  1 [2][3][4][5] 6  7   (3,4,5 held)"
        ],
        [
         "2 resent → ACK 6",
         "[0][1] 2  3  4  5 [6][7]",
         "[0][1] 2  3  4  5 [6][7]"
        ],
        [
         "6, 7 sent → ACK 0",
         "[0][1][2][3] 4  5  6  7 ",
         "[0][1][2][3] 4  5  6  7 "
        ]
       ]
      },
      "caption": "[n] = in window"
     }
    ]
   ],
   [
    "(v) Effect of NAK; GBN alternative",
    [
     "Yes — a NAK triggers the retransmission as soon as the gap is seen, instead of waiting for frame 2’s timer, so throughput improves and buffered frames are released sooner.",
     "With a larger sender window but receiver window 1 (Go-Back-N), frames 3, 4, 5 would be discarded; the sender would go back to 2 and resend 2, 3, 4, 5 — four transmissions instead of one."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Selective Repeat ARQ"
  ]
 },
 "a782b59c89b73ccf": {
  "sections": [
   [
    "a) CSMA/CD between X and Z (2500 m, 10 Mbps)",
    [
     "Propagation time Tp = 2500 / (2 × 10⁸) = 12.5 µs.",
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "(i) Minimum frame",
         "Tfr ≥ 2Tp = 25 µs → 10 Mbps × 25 µs",
         "250 bits"
        ],
        [
         "(ii) Z hears collision",
         "X’s first bit reaches Z at 0 + 12.5",
         "t = 12.5 µs"
        ],
        [
         "(iii) X hears collision",
         "Z’s first bit reaches X at 3 + 12.5",
         "t = 15.5 µs"
        ],
        [
         "(iv) Bits sent by X",
         "15.5 µs × 10 Mbps",
         "155 bits"
        ],
        [
         "(v) Bits sent by Z",
         "(12.5 − 3) µs × 10 Mbps",
         "95 bits"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 931.2 447\" width=\"931.2\" height=\"447\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mp-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"255.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"305.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">X</text><line x1=\"305.6\" y1=\"33\" x2=\"305.6\" y2=\"419\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"575.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"625.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Z</text><line x1=\"625.6\" y1=\"33\" x2=\"625.6\" y2=\"419\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"419\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"305.6\" y1=\"50\" x2=\"625.6\" y2=\"325\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mp-2c5d8f)\"/><rect x=\"337.3\" y=\"133.5\" width=\"154.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"414.40000000000003\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">X’s first bit (t = 0)</text><line x1=\"625.6\" y1=\"116\" x2=\"305.6\" y2=\"391\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mp-2c5d8f)\"/><rect x=\"429.3\" y=\"199.5\" width=\"175\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"516.8\" y=\"208.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Z’s first bit (t = 3 µs)</text><text x=\"635.6\" y=\"325\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">Z hears collision at 12.5 µs → 95 bits sent</text><text x=\"295.6\" y=\"391\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">X hears collision at 15.5 µs → 155 bits sent</text><text x=\"295.6\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t = 0</text><text x=\"635.6\" y=\"116\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t = 3 µs</text><text x=\"465.6\" y=\"438\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Time axis in µs (1 unit = 1 µs)</text></svg>",
      "alt": "Time axis in µs (1 unit = 1 µs)"
     }
    ]
   ],
   [
    "b) Probability that A wins the second back-off race",
    [
     "Binary exponential back-off: after the n-th collision of a frame, pick K uniformly from {0, …, 2ⁿ − 1}.",
     "Second collision: A is sending a new frame, so this is its 1st collision → K_A ∈ {0, 1}. B is still on its old frame, now its 2nd collision → K_B ∈ {0, 1, 2, 3}.",
     "A wins if K_A < K_B: P = P(K_A = 0)·P(K_B ≥ 1) + P(K_A = 1)·P(K_B ≥ 2) = ½·¾ + ½·½ = 3/8 + 2/8 = 5/8 = 0.625.",
     "(Equal values collide again; B wins with probability 1/8 + … — A has the advantage because its contention window is smaller.)"
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on CSMA/CD and back-off"
  ]
 },
 "f82f618bb8d4dd10": {
  "sections": [
   [
    "(i) The block",
    [
     "172.110.96.0/22 → 2¹⁰ = 1024 addresses: 172.110.96.0 – 172.110.99.255.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 230\" width=\"640\" height=\"230\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"120,110 75,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"150,93 150,45\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"330,93 330,45\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"330,127 330,180\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"510,127 510,180\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"180,110 300,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"219.3\" y=\"101\" width=\"41.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">WAN-1</text><polyline points=\"360,110 480,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"399.3\" y=\"101\" width=\"41.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">WAN-2</text><rect x=\"120\" y=\"93\" width=\"60\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R1</text><rect x=\"300\" y=\"93\" width=\"60\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R2</text><rect x=\"480\" y=\"93\" width=\"60\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R3</text><rect x=\"5\" y=\"95\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"40\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bldg A</text><rect x=\"115\" y=\"15\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bldg B</text><rect x=\"295\" y=\"15\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bldg C</text><rect x=\"295\" y=\"180\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bldg E</text><rect x=\"475\" y=\"180\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bldg D</text></svg>",
      "alt": "Diagram"
     }
    ]
   ],
   [
    "(ii) Subnet allocation (largest first)",
    [
     "Block size = next power of two ≥ addresses + 2: 200 → 256, 100 → 128, 50 → 64, 20 → 32, 10 → 16, each WAN link 2 → 4 (/30).",
     {
      "table": {
       "head": [
        "Subnet",
        "Addresses needed",
        "Block",
        "CIDR",
        "Mask",
        "Network ID",
        "Usable range",
        "Broadcast",
        "Unused in block"
       ],
       "rows": [
        [
         "Building A",
         200,
         256,
         "172.110.96.0/24",
         "255.255.255.0",
         "172.110.96.0",
         "172.110.96.1 – 172.110.96.254",
         "172.110.96.255",
         54
        ],
        [
         "Building B",
         100,
         128,
         "172.110.97.0/25",
         "255.255.255.128",
         "172.110.97.0",
         "172.110.97.1 – 172.110.97.126",
         "172.110.97.127",
         26
        ],
        [
         "Building C",
         50,
         64,
         "172.110.97.128/26",
         "255.255.255.192",
         "172.110.97.128",
         "172.110.97.129 – 172.110.97.190",
         "172.110.97.191",
         12
        ],
        [
         "Building D",
         20,
         32,
         "172.110.97.192/27",
         "255.255.255.224",
         "172.110.97.192",
         "172.110.97.193 – 172.110.97.222",
         "172.110.97.223",
         10
        ],
        [
         "Building E",
         10,
         16,
         "172.110.97.224/28",
         "255.255.255.240",
         "172.110.97.224",
         "172.110.97.225 – 172.110.97.238",
         "172.110.97.239",
         4
        ],
        [
         "WAN-1",
         2,
         4,
         "172.110.97.240/30",
         "255.255.255.252",
         "172.110.97.240",
         "172.110.97.241 – 172.110.97.242",
         "172.110.97.243",
         0
        ],
        [
         "WAN-2",
         2,
         4,
         "172.110.97.244/30",
         "255.255.255.252",
         "172.110.97.244",
         "172.110.97.245 – 172.110.97.246",
         "172.110.97.247",
         0
        ]
       ]
      }
     }
    ]
   ],
   [
    "(iii) Unallocated addresses and wastage",
    [
     {
      "table": {
       "head": [
        "Subnet",
        "Usable",
        "Needed",
        "Unused inside the block"
       ],
       "rows": [
        [
         "Building A",
         254,
         200,
         54
        ],
        [
         "Building B",
         126,
         100,
         26
        ],
        [
         "Building C",
         62,
         50,
         12
        ],
        [
         "Building D",
         30,
         20,
         10
        ],
        [
         "Building E",
         14,
         10,
         4
        ],
        [
         "WAN-1",
         2,
         2,
         0
        ],
        [
         "WAN-2",
         2,
         2,
         0
        ]
       ]
      }
     },
     "Total allocated = 504; internal waste = 106 host addresses.",
     "Unallocated range: 172.110.97.248 – 172.110.99.255 = 520 addresses, kept for future growth."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126 (VLSM)"
  ]
 },
 "f673066b92f8b8d0": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer"
       ],
       "rows": [
        [
         "(i) 205.16.37.65/28",
         "28 ones → 255.255.255.240 (block of 16: 205.16.37.64 – 205.16.37.79)"
        ],
        [
         "(iii) 4321:0DB8:0001:0000:0000:0AG9:C0A8:0102",
         "Invalid — ‘G’ in 0AG9 is not a hexadecimal digit (only 0–9, A–F)"
        ],
        [
         "(iv) 1234:0078:0000:0000:0000:ABCD:0000:0001",
         "1234:78::ABCD:0:1 (drop leading zeros; replace the longest run of zero groups by :: once)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "(ii) Why classless addressing is better",
    [
     "Classful blocks come in only three sizes (16 777 216, 65 536, 256). An organisation needing 2000 addresses had to take a class B (65 536) → ~63 000 wasted, or several class Cs → more routing entries.",
     "CIDR allows any prefix length /n, so the block (2^(32−n)) can match the need (2048 → /21), using the address space efficiently.",
     "Route aggregation (supernetting): contiguous blocks are advertised as one prefix, shrinking routing tables.",
     "Supports subnetting/VLSM inside an organisation and hierarchical allocation by ISPs."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126, 226 (IPv6 abbreviation)"
  ]
 },
 "aea1394edfc1336e": {
  "sections": [
   [
    "Answer",
    [
     "Final (stable) routing table of A: B = 5 via C, C = 2 via C, D = 3 via C, E = 6 via C, F = 8 via C. Every route leaves A through C because A–C–D (2 + 1 = 3) is far cheaper than the direct A–D link (10)."
    ]
   ],
   [
    "Network",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 430 295\" width=\"430\" height=\"295\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"61\" y1=\"89.3\" x2=\"184\" y2=\"45.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"114.9\" y=\"58.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"61.2\" y1=\"100.2\" x2=\"183.8\" y2=\"139.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"111.3\" y=\"111\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"200\" y1=\"57\" x2=\"200\" y2=\"128\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"192.4\" y=\"83.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"200\" y=\"92.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"215.5\" y1=\"46.9\" x2=\"364.5\" y2=\"113.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"278.8\" y=\"71\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">18</text><line x1=\"216.8\" y1=\"142.7\" x2=\"363.2\" y2=\"122.3\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"123.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"123.4\" y1=\"204.6\" x2=\"186.6\" y2=\"155.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"147.4\" y=\"171\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"155\" y=\"180\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"126.2\" y1=\"220\" x2=\"223.8\" y2=\"250\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"167.4\" y=\"226\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"175\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"205.8\" y1=\"161\" x2=\"234.2\" y2=\"239\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"208.8\" y=\"191\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"252.2\" y1=\"243.2\" x2=\"367.8\" y2=\"131.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"302.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"310\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><circle cx=\"45\" cy=\"95\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"200\" cy=\"40\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"200\" cy=\"145\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"380\" cy=\"120\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"380\" y=\"120.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><circle cx=\"110\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"240\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"240\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text></svg>",
      "alt": "Network graph"
     }
    ]
   ],
   [
    "Convergence",
    [
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         "∞",
         2,
         10,
         "∞",
         "∞"
        ],
        [
         "B",
         "∞",
         0,
         "∞",
         2,
         1,
         "∞"
        ],
        [
         "C",
         2,
         "∞",
         0,
         1,
         "∞",
         18
        ],
        [
         "D",
         10,
         2,
         1,
         0,
         11,
         6
        ],
        [
         "E",
         "∞",
         1,
         "∞",
         11,
         0,
         2
        ],
        [
         "F",
         "∞",
         "∞",
         18,
         6,
         2,
         0
        ]
       ]
      },
      "caption": "Initial vectors (each router knows only its own links)"
     },
     "Round 1: C advertises (A 2, B ∞, C 0, D 1, E ∞, F 18); D advertises (A 10, B 2, C 1, D 0, E 11, F 6).",
     "DA(B) = min{ C: 2+∞=∞, D: 10+2=12 } = 12\nDA(C) = min{ C: 2+0=2, D: 10+1=11 } = 2\nDA(D) = min{ C: 2+1=3, D: 10+0=10 } = 3\nDA(E) = min{ C: 2+∞=∞, D: 10+11=21 } = 21\nDA(F) = min{ C: 2+18=20, D: 10+6=16 } = 16",
     "Round 2: C advertises (A 2, B 3, C 0, D 1, E 12, F 7); D advertises (A 3, B 2, C 1, D 0, E 3, F 6).",
     "DA(B) = min{ C: 2+3=5, D: 10+2=12 } = 5\nDA(C) = min{ C: 2+0=2, D: 10+1=11 } = 2\nDA(D) = min{ C: 2+1=3, D: 10+0=10 } = 3\nDA(E) = min{ C: 2+12=14, D: 10+3=13 } = 13\nDA(F) = min{ C: 2+7=9, D: 10+6=16 } = 9",
     "Round 3: C advertises (A 2, B 3, C 0, D 1, E 4, F 7); D advertises (A 3, B 2, C 1, D 0, E 3, F 5).",
     "DA(B) = min{ C: 2+3=5, D: 10+2=12 } = 5\nDA(C) = min{ C: 2+0=2, D: 10+1=11 } = 2\nDA(D) = min{ C: 2+1=3, D: 10+0=10 } = 3\nDA(E) = min{ C: 2+4=6, D: 10+3=13 } = 6\nDA(F) = min{ C: 2+7=9, D: 10+5=15 } = 9",
     "Round 4: C advertises (A 2, B 3, C 0, D 1, E 4, F 6); D advertises (A 3, B 2, C 1, D 0, E 3, F 5).",
     "DA(B) = min{ C: 2+3=5, D: 10+2=12 } = 5\nDA(C) = min{ C: 2+0=2, D: 10+1=11 } = 2\nDA(D) = min{ C: 2+1=3, D: 10+0=10 } = 3\nDA(E) = min{ C: 2+4=6, D: 10+3=13 } = 6\nDA(F) = min{ C: 2+6=8, D: 10+5=15 } = 8",
     {
      "table": {
       "head": [
        "Destination",
        "Initial",
        "After round 1",
        "After round 2",
        "After round 3",
        "After round 4",
        "After round 5"
       ],
       "rows": [
        [
         "A",
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "B",
         "∞",
         "12 via D",
         "5 via C",
         "5 via C",
         "5 via C",
         "5 via C"
        ],
        [
         "C",
         "2 via C",
         "2 via C",
         "2 via C",
         "2 via C",
         "2 via C",
         "2 via C"
        ],
        [
         "D",
         "10 via D",
         "3 via C",
         "3 via C",
         "3 via C",
         "3 via C",
         "3 via C"
        ],
        [
         "E",
         "∞",
         "21 via D",
         "13 via D",
         "6 via C",
         "6 via C",
         "6 via C"
        ],
        [
         "F",
         "∞",
         "16 via D",
         "9 via C",
         "9 via C",
         "8 via C",
         "8 via C"
        ]
       ]
      },
      "caption": "Distance vector of A (cost via next hop). Stable after round 4."
     },
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         5,
         2,
         3,
         6,
         8
        ],
        [
         "B",
         5,
         0,
         3,
         2,
         1,
         3
        ],
        [
         "C",
         2,
         3,
         0,
         1,
         4,
         6
        ],
        [
         "D",
         3,
         2,
         1,
         0,
         3,
         5
        ],
        [
         "E",
         6,
         1,
         4,
         3,
         0,
         2
        ],
        [
         "F",
         8,
         3,
         6,
         5,
         2,
         0
        ]
       ]
      },
      "caption": "Converged distance vectors"
     },
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         0,
         "—"
        ],
        [
         "B",
         5,
         "C"
        ],
        [
         "C",
         2,
         "C"
        ],
        [
         "D",
         3,
         "C"
        ],
        [
         "E",
         6,
         "C"
        ],
        [
         "F",
         8,
         "C"
        ]
       ]
      },
      "caption": "Final routing table of A"
     }
    ]
   ],
   [
    "Why it converges",
    [
     "Each exchange extends every router’s knowledge by one hop; after at most (diameter) rounds no vector changes, so the tables are stable.",
     "The interesting entry is F: 16 via D after round 1, 9 via C after round 2, and finally 8 via C in round 4, once the cheap D–B–E–F path (2 + 1 + 2 = 5) has reached D and then C."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "d2a6bf58c5282b0a": {
  "sections": [
   [
    "a) Slotted ALOHA, 300-bit frames on 300 kbps",
    [
     "Frame transmission time Tfr = 300 / 300 × 10³ = 1 ms (1000 slots per second).",
     "Slotted ALOHA: S = G·e^(−G). Using the G values given in the question, throughput = frames offered × S:",
     {
      "table": {
       "head": [
        "Frames/s",
        "G",
        "S",
        "Throughput (textbook / key: frames × S)",
        "Frames surviving (frames × e^(−G))"
       ],
       "rows": [
        [
         2000,
         1,
         "1·e^(−1) = 0.368",
         "2000 × 0.368 ≈ 736 frames/s",
         "2000 × e^(−1) ≈ 736"
        ],
        [
         700,
         0.5,
         "0.5·e^(−0.5) = 0.303",
         "700 × 0.303 ≈ 212 frames/s",
         "700 × e^(−0.5) ≈ 425"
        ],
        [
         650,
         0.25,
         "0.25·e^(−0.25) = 0.195",
         "650 × 0.195 ≈ 127 frames/s",
         "650 × e^(−0.25) ≈ 506"
        ]
       ]
      }
     },
     "Exam note: Forouzan’s examples (and VIT keys) report throughput as offered frames × S. Strictly, S is per frame time, so the number of frames that actually survive per second is S ÷ Tfr = offered frames × e^(−G) (slotted) or × e^(−2G) (pure). The two agree only at G = 1. Write the textbook figure, and add the exact one if asked to interpret.",
     "Note: the offered loads 2000, 700, 650 frames/s would strictly give G = 2, 0.7, 0.65; the answer above follows the G stated in the paper (as the answer key does). Maximum S = 0.368 occurs at G = 1."
    ]
   ],
   [
    "b) Stop-and-wait, 2 Mbps, Tp = 22.5 ms, 1 KB packet",
    [
     "Transmission time Tt = 1 KB / 2 Mbps = 8192 / (2 × 10⁶) = 4.096 ms.",
     "Total time per frame = Tt + 2Tp = 4.096 + 45 = 49.096 ms.",
     "Link efficiency η = Tt / (Tt + 2Tp) = 4.096 / 49.096 = 0.0834 ≈ 8.34 %.",
     "Throughput = η × bandwidth = 0.0834 × 2 Mbps ≈ 166.9 kbps."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on slotted ALOHA and Stop-and-Wait efficiency"
  ]
 },
 "e48a9f0b0e769ac8": {
  "sections": [
   [
    "Design (largest block first to keep blocks aligned)",
    [
     "Block sizes: 12 → 16 (/28), 25 → 32 (/27), 50 → 64 (/26).",
     {
      "table": {
       "head": [
        "Organisation",
        "Needs",
        "Block",
        "CIDR",
        "Range"
       ],
       "rows": [
        [
         "Org 3",
         50,
         64,
         "198.60.4.0/26",
         "198.60.4.0 – 198.60.4.63"
        ],
        [
         "Org 2",
         25,
         32,
         "198.60.4.64/27",
         "198.60.4.64 – 198.60.4.95"
        ],
        [
         "Org 1",
         12,
         16,
         "198.60.4.96/28",
         "198.60.4.96 – 198.60.4.111"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Addresses still available",
    [
     "Allocated 64 + 32 + 16 = 112; available = 256 − 112 = 144 (198.60.4.112 – 198.60.4.255).",
     "(If the addresses are host counts, add 2 for network/broadcast — the block sizes stay the same: 14, 27, 52 still fit 16, 32, 64.)"
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126"
  ]
 },
 "8e2cece83cc0095f": {
  "sections": [
   [
    "a-i) IPv4 vs IPv6",
    [
     {
      "table": {
       "head": [
        "Aspect",
        "IPv4",
        "IPv6"
       ],
       "rows": [
        [
         "Address space",
         "32-bit, ≈ 4.3 billion; exhausted",
         "128-bit, ≈ 3.4 × 10³⁸"
        ],
        [
         "Configuration",
         "Manual or DHCP",
         "SLAAC (auto-configuration from router advertisements), DHCPv6"
        ],
        [
         "Header",
         "20–60 bytes, 13 fields, checksum, routers fragment",
         "Fixed 40 bytes, 8 fields, no checksum, extension headers"
        ],
        [
         "Broadcast",
         "Yes (ARP broadcasts)",
         "No broadcast — multicast/anycast (Neighbor Discovery)"
        ],
        [
         "Security",
         "IPsec optional add-on",
         "IPsec designed in (extension headers)"
        ],
        [
         "Efficiency",
         "NAT needed, router fragmentation, variable header",
         "End-to-end addressing, faster fixed-header forwarding, flow label for QoS"
        ]
       ]
      }
     }
    ]
   ],
   [
    "a-ii) Problems with staying on IPv4; benefits of IPv6",
    [
     "Thousands of sensors, cameras and phones exhaust the campus’s public (and even private) pool; layers of NAT break end-to-end reachability (remote camera access, peer-to-peer) and complicate logging.",
     "DHCP scopes and manual addressing grow hard to manage; broadcast traffic (ARP) grows with device count.",
     "IPv6 gives every device a global address, plug-and-play SLAAC, efficient multicast instead of broadcast, built-in IPsec and simpler routing."
    ]
   ],
   [
    "a-iii) Recommendation",
    [
     "Migrate with a dual-stack deployment (IPv4 + IPv6 on the same network), give IoT VLANs IPv6-only addressing, use NAT64/DNS64 for legacy IPv4-only services, and phase IPv4 out over time."
    ]
   ],
   [
    "b) Classes and default masks",
    [
     {
      "table": {
       "head": [
        "Address",
        "Dotted decimal",
        "Class",
        "Default mask"
       ],
       "rows": [
        [
         "(i) 01000001 00001011 00001011 11101111",
         "65.11.11.239",
         "A (first bit 0)",
         "255.0.0.0"
        ],
        [
         "(ii) 11110001 10000011 00011011 11111111",
         "241.131.27.255",
         "E (first bits 1111)",
         "none — reserved"
        ],
        [
         "(iii) 126.23.120.8",
         "—",
         "A (0–127)",
         "255.0.0.0"
        ],
        [
         "(iv) 190.5.15.111",
         "—",
         "B (128–191)",
         "255.255.0.0"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b-v) 11101011.5.15.8",
    [
     "Error: binary and dotted-decimal notation are mixed. Read as decimal, 11101011 is far above 255 (a byte’s maximum), so the address is invalid. Written correctly it is 235.5.15.8 (11101011₂ = 235), a class E address."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 11–51 (classes), 234–247 (IPv6)"
  ]
 },
 "ecca39a425a44811": {
  "sections": [
   [
    "Answer",
    [
     "Least-cost paths from F: A = 5 (F→B→A), B = 4 (F→B), C = 6 (F→E→D→C), D = 5 (F→E→D), E = 1 (F→E)."
    ]
   ],
   [
    "Iterations",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(A), p(A)",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)"
       ],
       "rows": [
        [
         0,
         "F",
         "∞",
         "4, F",
         "∞",
         "∞",
         "1, F"
        ],
        [
         1,
         "FE",
         "∞",
         "4, F",
         "∞",
         "5, E",
         "1, F"
        ],
        [
         2,
         "FEB",
         "5, B",
         "4, F",
         "7, B",
         "5, E",
         "—"
        ],
        [
         3,
         "FEBA",
         "5, B",
         "—",
         "7, B",
         "5, E",
         "—"
        ],
        [
         4,
         "FEBAD",
         "—",
         "—",
         "6, D",
         "5, E",
         "—"
        ],
        [
         5,
         "FEBADC",
         "—",
         "—",
         "6, D",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     }
    ]
   ],
   [
    "Result",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         "F → B → A",
         5,
         "B"
        ],
        [
         "B",
         "F → B",
         4,
         "B"
        ],
        [
         "C",
         "F → E → D → C",
         6,
         "E"
        ],
        [
         "D",
         "F → E → D",
         5,
         "E"
        ],
        [
         "E",
         "F → E",
         1,
         "E"
        ]
       ]
      },
      "caption": "Routing table at F"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 490 285\" width=\"490\" height=\"285\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"58.8\" y1=\"130.1\" x2=\"156.2\" y2=\"59.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"99.9\" y=\"86\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"62\" y1=\"140\" x2=\"153\" y2=\"140\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"131\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"58.5\" y1=\"150.3\" x2=\"156.5\" y2=\"224.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"170\" y1=\"67\" x2=\"170\" y2=\"123\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"162.4\" y=\"86\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"184.3\" y1=\"59.2\" x2=\"295.7\" y2=\"130.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"228.8\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><path d=\"M186.1 55.4 Q317.6 57.1 423.9 134.6\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"310\" y=\"48.1\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"317.6491106406736\" y=\"57.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"170\" y1=\"157\" x2=\"170\" y2=\"218\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"162.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"184.1\" y1=\"225.5\" x2=\"295.9\" y2=\"149.5\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"232.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"327\" y1=\"140\" x2=\"423\" y2=\"140\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"367.4\" y=\"131\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"375\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><circle cx=\"45\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"45\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"37.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"170\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"162.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"170\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"162.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"170\" cy=\"235\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"235.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"162.7\" y=\"254\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"263\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"310\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"310\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"302.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"310\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"440\" cy=\"140\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"440\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"432.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"440\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><text x=\"245\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from F (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from F (green) · blue = final cost"
     }
    ]
   ],
   [
    "Process",
    [
     "Initialise N′ = {F}; D(B) = 4, D(E) = 1 (F’s neighbours), others ∞.",
     "Add E (1): D(D) = 1 + 4 = 5; D(B) stays 4 (1 + 10 = 11 is worse).",
     "Add B (4): D(A) = 4 + 1 = 5, D(C) = 4 + 3 = 7.",
     "Add A (5) and D (5) (tie): through D, C becomes 5 + 1 = 6 < 7.",
     "Add C (6). All nodes are permanent; read paths back through the predecessors.",
     {
      "img": "scans/networks/notes/m5-013-022.webp",
      "caption": "Dijkstra’s algorithm as used in link-state routing (notes p. 13)",
      "alt": "Dijkstra’s algorithm as used in link-state routing (notes p. 13)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "9c56d078b9ed7494": {
  "sections": [
   [
    "Answer",
    [
     "Taking A as the source router, Bellman-Ford gives: B = 5 (A→C→B), C = 3 (A→C), D = 12 (A→C→B→D), E = 12 (A→C→E), F = 16 (A→C→E→F).",
     "The same relaxation run at every router gives the complete set of routing tables (below)."
    ]
   ],
   [
    "Network",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 260\" width=\"500\" height=\"260\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"59.3\" y1=\"120.8\" x2=\"155.7\" y2=\"59.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"59.3\" y1=\"139.2\" x2=\"155.7\" y2=\"200.8\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"99.9\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"170\" y1=\"67\" x2=\"170\" y2=\"193\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"162.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"187\" y1=\"50\" x2=\"313\" y2=\"50\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"242.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"250\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"187\" y1=\"210\" x2=\"313\" y2=\"210\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"242.4\" y=\"201\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"250\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"330\" y1=\"67\" x2=\"330\" y2=\"193\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"322.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"344.1\" y1=\"59.4\" x2=\"435.9\" y2=\"120.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"382.4\" y=\"81\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"344.1\" y1=\"200.6\" x2=\"435.9\" y2=\"139.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"382.4\" y=\"161\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><circle cx=\"45\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"37.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"170\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"162.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"170\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"162.7\" y=\"229\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"330\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"319.3\" y=\"69\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">12</text><circle cx=\"330\" cy=\"210\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"210.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"319.3\" y=\"229\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"238\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">12</text><circle cx=\"450\" cy=\"130\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"450\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"439.3\" y=\"149\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"450\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">16</text><text x=\"250\" y=\"252\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Least-cost tree from A</text></svg>",
      "alt": "Least-cost tree from A"
     }
    ]
   ],
   [
    "Bellman-Ford iterations from A",
    [
     "D(v) = min over neighbours u of { D(u) + c(u,v) }; start D(A) = 0, others ∞.",
     {
      "table": {
       "head": [
        "Iteration",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "0",
         "∞",
         "∞",
         "∞",
         "∞",
         "∞"
        ],
        [
         "1",
         "6 (A)",
         "3 (A)",
         "∞",
         "∞",
         "∞"
        ],
        [
         "2",
         "5 (C)",
         "3 (A)",
         "13 (B)",
         "12 (C)",
         "∞"
        ],
        [
         "3",
         "5 (C)",
         "3 (A)",
         "12 (B)",
         "12 (C)",
         "16 (E)"
        ],
        [
         "4",
         "5 (C)",
         "3 (A)",
         "12 (B)",
         "12 (C)",
         "16 (E)"
        ]
       ]
      },
      "caption": "cost (predecessor); no change in the last row → done"
     }
    ]
   ],
   [
    "Routing table at A",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         5,
         "C"
        ],
        [
         "C",
         3,
         "C"
        ],
        [
         "D",
         12,
         "C"
        ],
        [
         "E",
         12,
         "C"
        ],
        [
         "F",
         16,
         "C"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Converged tables at every router",
    [
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         5,
         3,
         12,
         12,
         16
        ],
        [
         "B",
         5,
         0,
         2,
         7,
         8,
         12
        ],
        [
         "C",
         3,
         2,
         0,
         9,
         9,
         13
        ],
        [
         "D",
         12,
         7,
         9,
         0,
         1,
         5
        ],
        [
         "E",
         12,
         8,
         9,
         1,
         0,
         4
        ],
        [
         "F",
         16,
         12,
         13,
         5,
         4,
         0
        ]
       ]
      },
      "caption": "Converged distance vectors"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "0b4b61b05d92fcfb": {
  "sections": [
   [
    "A-a) Possible sequence numbers in the sender’s window",
    [
     "Window size 8, numbers 0–511. The receiver expects 100, so it has received and acknowledged 0–99.",
     "If all those ACKs have reached the sender, its window is 100–107.",
     "If some ACKs are still in transit, the window may lag: its base can be as low as 92 (window 92–99) — it cannot be lower, because the receiver could only have received 99 if the sender’s window included 99.",
     "So the window can be any 8 consecutive numbers from [92–99] to [100–107]; possible sequence numbers 92 to 107. (Once ACKs arrive: 100, 101, …, 107.)"
    ]
   ],
   [
    "A-b) Three packets, the 2nd lost",
    [
     "Sender sends 100, 101, 102. 100 is accepted (ACK 101). 101 is lost. 102 arrives out of order → discarded; the receiver repeats ACK 101.",
     "The timer for 101 expires; the sender goes back and resends 101 and 102 (all outstanding packets). Both are accepted → ACK 103.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 663.2 328.4\" width=\"663.2\" height=\"328.4\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mq-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mq-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"108.4\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"158.4\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"158.4\" y1=\"33\" x2=\"158.4\" y2=\"300.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"408.4\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"458.4\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"458.4\" y1=\"33\" x2=\"458.4\" y2=\"300.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"300.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"158.4\" y1=\"50\" x2=\"458.4\" y2=\"76\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2c5d8f)\"/><rect x=\"232\" y=\"48.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260.40000000000003\" y=\"57.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Pkt 100</text><line x1=\"158.4\" y1=\"76\" x2=\"344.4\" y2=\"92.1\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"337.4\" y1=\"85.1\" x2=\"351.4\" y2=\"99.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"337.4\" y1=\"99.1\" x2=\"351.4\" y2=\"85.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"220\" y=\"73.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"248.4\" y=\"82.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Pkt 101</text><line x1=\"158.4\" y1=\"102\" x2=\"458.4\" y2=\"128\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2c5d8f)\"/><rect x=\"232\" y=\"100.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260.40000000000003\" y=\"109.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Pkt 102</text><line x1=\"458.4\" y1=\"76\" x2=\"158.4\" y2=\"107.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2f7a4f)\"/><rect x=\"328\" y=\"76.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"356.4\" y=\"85.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 101</text><line x1=\"458.4\" y1=\"128\" x2=\"158.4\" y2=\"159.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2f7a4f)\"/><rect x=\"307.2\" y=\"128.6\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"356.4\" y=\"137.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 101 (dup)</text><line x1=\"158.4\" y1=\"190.4\" x2=\"458.4\" y2=\"216.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2c5d8f)\"/><rect x=\"200.7\" y=\"189.2\" width=\"119.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260.40000000000003\" y=\"198.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Pkt 101 (resent)</text><line x1=\"158.4\" y1=\"216.4\" x2=\"458.4\" y2=\"242.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2c5d8f)\"/><rect x=\"200.7\" y=\"215.2\" width=\"119.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260.40000000000003\" y=\"224.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Pkt 102 (resent)</text><line x1=\"458.4\" y1=\"242.4\" x2=\"158.4\" y2=\"268.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mq-2f7a4f)\"/><rect x=\"328\" y=\"241.2\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"356.4\" y=\"250.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 103</text><text x=\"468.4\" y=\"128\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">102 out of order → discarded</text><text x=\"148.4\" y=\"177.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timer for 101 expires</text><text x=\"331.6\" y=\"319.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Go-Back-N: lose 101 → resend 101 and 102</text></svg>",
      "alt": "Go-Back-N: lose 101 → resend 101 and 102"
     }
    ]
   ],
   [
    "B) Why CSMA/CA is preferred in wireless LANs",
    [
     "1. Collision detection is not feasible: a radio cannot listen while transmitting (its own signal swamps the receiver), and received signals are very weak — so collisions cannot be detected reliably; they must be avoided.",
     "2. Hidden stations: in a classroom of 50 laptops, two laptops at opposite ends can both hear the AP but not each other; carrier sensing says ‘idle’ and they collide at the AP. RTS/CTS lets the AP’s CTS silence every laptop in its range.",
     "3. Signal fading and interference mean a collision at the AP may not be heard at the sender at all.",
     "How CSMA/CA works: sense the channel → wait DIFS → random back-off (contention window) → (optional) RTS/CTS reservation → DATA → wait SIFS → ACK. All other stations set their NAV (virtual carrier sense) from the duration field and stay silent.",
     "In the classroom, laptops uploading assignments, streaming lectures and downloading resources all defer to the reserved transmission, so expensive collisions of long frames are replaced by short RTS collisions at worst.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 903.2 281.6\" width=\"903.2\" height=\"281.6\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mr-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mr-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"191.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"241.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Laptop A</text><line x1=\"241.6\" y1=\"33\" x2=\"241.6\" y2=\"253.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"400.4\" y=\"8\" width=\"102.4\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"451.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Access point</text><line x1=\"451.6\" y1=\"33\" x2=\"451.6\" y2=\"253.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"592.4\" y=\"8\" width=\"138.4\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"661.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Laptop C (hidden)</text><line x1=\"661.6\" y1=\"33\" x2=\"661.6\" y2=\"253.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"253.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"241.6\" y1=\"76\" x2=\"451.6\" y2=\"102\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mr-2c5d8f)\"/><rect x=\"298.6\" y=\"74.8\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"313\" y=\"83.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">RTS</text><line x1=\"451.6\" y1=\"112.4\" x2=\"241.6\" y2=\"138.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mr-2f7a4f)\"/><rect x=\"365.8\" y=\"111.2\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380.20000000000005\" y=\"120.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">CTS</text><line x1=\"451.6\" y1=\"112.4\" x2=\"661.6\" y2=\"138.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mr-2c5d8f)\"/><rect x=\"508.6\" y=\"111.2\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"523\" y=\"120.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">CTS</text><line x1=\"241.6\" y1=\"148.8\" x2=\"451.6\" y2=\"185.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mr-2c5d8f)\"/><rect x=\"295.1\" y=\"151.2\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"313\" y=\"160.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">DATA</text><line x1=\"451.6\" y1=\"195.6\" x2=\"241.6\" y2=\"221.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mr-2f7a4f)\"/><rect x=\"365.8\" y=\"194.4\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380.20000000000005\" y=\"203.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK</text><text x=\"231.60000000000002\" y=\"60.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">sense idle, DIFS + random back-off</text><text x=\"671.6\" y=\"164.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">C sets NAV → stays silent</text><text x=\"451.6\" y=\"272.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">CSMA/CA with RTS/CTS — the hidden laptop C defers</text></svg>",
      "alt": "CSMA/CA with RTS/CTS — the hidden laptop C defers"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Go-Back-N and CSMA/CA"
  ]
 },
 "d4d7cfe7d38586d3": {
  "sections": [
   [
    "A) Subnet allocation",
    [
     "256 addresses → /24, 64 → /26, 512 → /23, 1024 → /22. Groups are placed one after another; each group starts on a boundary of its own block size (all do here).",
     {
      "table": {
       "head": [
        "Group",
        "Customers × size",
        "Prefix",
        "First customer",
        "Last customer",
        "Group range"
       ],
       "rows": [
        [
         "Group 1",
         "64 × 256",
         "/24",
         "150.200.0.0/24 (150.200.0.0 – 150.200.0.255)",
         "150.200.63.0/24 (150.200.63.0 – 150.200.63.255)",
         "150.200.0.0 – 150.200.63.255"
        ],
        [
         "Group 2",
         "128 × 64",
         "/26",
         "150.200.64.0/26 (150.200.64.0 – 150.200.64.63)",
         "150.200.95.192/26 (150.200.95.192 – 150.200.95.255)",
         "150.200.64.0 – 150.200.95.255"
        ],
        [
         "Group 3",
         "32 × 512",
         "/23",
         "150.200.96.0/23 (150.200.96.0 – 150.200.97.255)",
         "150.200.158.0/23 (150.200.158.0 – 150.200.159.255)",
         "150.200.96.0 – 150.200.159.255"
        ],
        [
         "Group 4",
         "16 × 1024",
         "/22",
         "150.200.160.0/22 (150.200.160.0 – 150.200.163.255)",
         "150.200.220.0/22 (150.200.220.0 – 150.200.223.255)",
         "150.200.160.0 – 150.200.223.255"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"95\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 1</text><text x=\"95\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">64 × /24</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.200.0.0</text><rect x=\"170.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"207.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 2</text><text x=\"207.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">128 × /26</text><line x1=\"170\" y1=\"76\" x2=\"170\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"172\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.200.64.0</text><rect x=\"245.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"320\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 3</text><text x=\"320\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32 × /23</text><line x1=\"245\" y1=\"76\" x2=\"245\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"247\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.200.96.0</text><rect x=\"395.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"470\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 4</text><text x=\"470\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16 × /22</text><line x1=\"395\" y1=\"76\" x2=\"395\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"397\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.200.160.0</text><rect x=\"545.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"582.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"582.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8192</text><line x1=\"545\" y1=\"76\" x2=\"545\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"547\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.200.224.0</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Subnet allocation diagram for 150.200.0.0/16</text></svg>",
      "alt": "Subnet allocation diagram for 150.200.0.0/16"
     },
     "Total allocated = 16 384 + 8192 + 16 384 + 16 384 = 57344; still available = 8192 (150.200.224.0 – 150.200.255.255)."
    ]
   ],
   [
    "B) NAT for 192.168.10.0/24 behind 203.0.113.5",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 210\" width=\"640\" height=\"210\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"130,50 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,105 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,160 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"355,105 415,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"525,105 540,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"35\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.11</text><rect x=\"10\" y=\"90\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.12</text><rect x=\"10\" y=\"145\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.13</text><rect x=\"225\" y=\"80\" width=\"130\" height=\"50\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"290\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">NAT router</text><text x=\"290\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">in: 192.168.10.1</text><text x=\"290\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">out: 203.0.113.5</text><ellipse cx=\"470\" cy=\"105\" rx=\"55\" ry=\"30\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"470\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Internet</text><rect x=\"540\" y=\"88\" width=\"90\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"585\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">Server</text><text x=\"585\" y=\"112.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">93.184.216.34</text><text x=\"120\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Private network 192.168.10.0/24</text><text x=\"470\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Public side: one address 203.0.113.5</text></svg>",
      "alt": "Diagram"
     },
     {
      "table": {
       "head": [
        "Private IP",
        "Private port",
        "Public IP",
        "Public port",
        "Destination",
        "Protocol"
       ],
       "rows": [
        [
         "192.168.10.11",
         "50001",
         "203.0.113.5",
         "40001",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.12",
         "50001",
         "203.0.113.5",
         "40002",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.13",
         "53500",
         "203.0.113.5",
         "40003",
         "8.8.8.8:53",
         "UDP"
        ]
       ]
      },
      "caption": "NAT/PAT translation table (port numbers keep the flows apart)"
     },
     "Outgoing: a host sends 192.168.10.11:50001 → server:443. The NAT router replaces the source with 203.0.113.5:40001, records the mapping, fixes the IP/TCP checksums and forwards it.",
     "Incoming: the reply arrives for 203.0.113.5:40001; the router looks up the table and rewrites the destination back to 192.168.10.11:50001.",
     "Because the port number distinguishes flows, all employees share one public IP (NAPT / PAT). Outsiders cannot open connections to inside hosts unless a static mapping (port forwarding) exists."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126, 261–262"
  ]
 },
 "6c91106ea5ca6d6b": {
  "sections": [
   [
    "Decoding",
    [
     {
      "table": {
       "head": [
        "Field",
        "Hex",
        "Value / meaning"
       ],
       "rows": [
        [
         "Version | HLEN",
         "47",
         "4 | 7 → header = 7 × 4 = 28 bytes (8 bytes of options)"
        ],
        [
         "Service type",
         "00",
         "0 → routine / best effort"
        ],
        [
         "Total length",
         "0040",
         "64 bytes → data = 64 − 28 = 36 bytes"
        ],
        [
         "Identification",
         "0003",
         "3"
        ],
        [
         "Flags | Fragment offset",
         "5850",
         "DF = 1, MF = 0, offset = 6224 (× 8 = 49792 bytes)"
        ],
        [
         "Time to live",
         "20",
         "32 hops"
        ],
        [
         "Protocol",
         "06",
         "6 → TCP"
        ],
        [
         "Header checksum",
         "0000",
         "0000 (not filled in)"
        ],
        [
         "Source address",
         "8D 2A 05 00",
         "141.42.5.0"
        ],
        [
         "Destination address",
         "A4 0B 0F 03",
         "164.11.15.3"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Answers",
    [
     "a. Options: HLEN = 7 → header = 28 bytes → yes, 28 − 20 = 8 bytes of options.",
     "b. Corruption: the checksum field is 0x0000 and the 8 option bytes are not given, so the header cannot be verified from this dump. A real header always carries a computed checksum; the receiver would recompute the one’s-complement sum over all 28 bytes and discard the datagram if it is not FFFF. With a zero checksum the check would fail → treat it as corrupted.",
     "c. Fragmented: 0x5850 = 010 1100001010000 → DF = 1, MF = 0, offset = 0x1850 = 6224 (× 8 = 49792 bytes). A non-zero offset means this is a fragment — the last one (MF = 0) of a larger datagram.",
     "d. Data = total length 0x40 = 64 − 28 = 36 bytes; upper-layer protocol 06 = TCP.",
     "e. TTL = 0x20 = 32 → up to 32 more routers.",
     "f. Identification = 0x0003 = 3.",
     "g. Type of service = 0x00 → normal (routine precedence, no special delay/throughput/reliability request; DSCP 0 = best effort).",
     "h. MTU 40 bytes: the 64-byte datagram does not fit, but DF = 1, so the router may not fragment it — it is dropped and an ICMP ‘fragmentation needed’ message goes back to the source. (Even if DF were 0, each fragment could carry only 8 bytes of data after the 28-byte header.)"
    ]
   ],
   [
    "i. Addresses",
    [
     {
      "table": {
       "head": [
        "",
        "Hex",
        "Dotted decimal",
        "Binary",
        "Class",
        "Default mask"
       ],
       "rows": [
        [
         "Source",
         "8D 2A 05 00",
         "141.42.5.0",
         "10001101 00101010 00000101 00000000",
         "B",
         "255.255.0.0"
        ],
        [
         "Destination",
         "A4 0B 0F 03",
         "164.11.15.3",
         "10100100 00001011 00001111 00000011",
         "B",
         "255.255.0.0"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–219 (IPv4 header, options, fragmentation)"
  ]
 },
 "99a303bf876e180e": {
  "sections": [
   [
    "Answer",
    [
     "Least-cost paths from control centre A: B = 6 (A→C→D→B), C = 1 (A→C), D = 3 (A→C→D), E = 4 (A→C→D→E)."
    ]
   ],
   [
    "Dijkstra steps",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)"
       ],
       "rows": [
        [
         0,
         "A",
         "8, A",
         "1, A",
         "∞",
         "∞"
        ],
        [
         1,
         "AC",
         "7, C",
         "1, A",
         "3, C",
         "6, C"
        ],
        [
         2,
         "ACD",
         "6, D",
         "—",
         "3, C",
         "4, D"
        ],
        [
         3,
         "ACDE",
         "6, D",
         "—",
         "—",
         "4, D"
        ],
        [
         4,
         "ACDEB",
         "6, D",
         "—",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         "A → C → D → B",
         6,
         "C"
        ],
        [
         "C",
         "A → C",
         1,
         "C"
        ],
        [
         "D",
         "A → C → D",
         3,
         "C"
        ],
        [
         "E",
         "A → C → D → E",
         4,
         "C"
        ]
       ]
      },
      "caption": "Routing table at A"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 410 270\" width=\"410\" height=\"270\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"53.9\" y1=\"120.2\" x2=\"146.1\" y2=\"54.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"92.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">8</text><line x1=\"53.9\" y1=\"139.8\" x2=\"146.1\" y2=\"205.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"92.4\" y=\"163.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"172.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"160\" y1=\"62\" x2=\"160\" y2=\"198\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"152.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"177\" y1=\"45\" x2=\"343\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"252.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"173\" y1=\"204\" x2=\"347\" y2=\"56\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"252.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"177\" y1=\"215\" x2=\"343\" y2=\"215\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"252.4\" y=\"206\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"260\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"360\" y1=\"62\" x2=\"360\" y2=\"198\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"352.4\" y=\"121\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><circle cx=\"40\" cy=\"130\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"40\" y=\"130.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"32.7\" y=\"149\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"160\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"152.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"360\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"360\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"352.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"360\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"160\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"152.7\" y=\"234\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"360\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"360\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"352.7\" y=\"234\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"360\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><text x=\"205\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from A (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from A (green) · blue = final cost"
     }
    ]
   ],
   [
    "a. Why Dijkstra (link state) rather than Bellman-Ford",
    [
     "Each junction floods its link costs, so the control centre has the whole map and computes all least-cost paths in one O(E log V) run — no waiting for rounds of neighbour exchanges.",
     "Converges quickly after a change and is loop-free (no count-to-infinity), which matters when traffic data must keep flowing.",
     "All link costs here are positive (bandwidth/delay/energy), which is exactly the condition Dijkstra needs; Bellman-Ford’s ability to handle negative weights is not required."
    ]
   ],
   [
    "b. If one link’s cost suddenly rises",
    [
     "Example: if D–E rises from 1 to 6, E’s path A→C→D→E (4) becomes 1 + 2 + 6 = 9, so E switches to A→C→E (6); B stays A→C→D→B (6).",
     "The routers at the ends of the link detect the change and flood a new LSA (higher sequence number); every node updates its link-state database and re-runs Dijkstra, so only the paths that used that link change."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "6295a0ac855ea024": {
  "sections": [
   [
    "Mapping and network",
    [
     "Nodes in sequence: A = Administration, B = ICU, C = Radiology, D = Pharmacy, E = Emergency, F = Outpatient. (Note the figure’s A links go to C and D, i.e. Radiology and Pharmacy, as the question says.)",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 430 295\" width=\"430\" height=\"295\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"61\" y1=\"89.3\" x2=\"184\" y2=\"45.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"114.9\" y=\"58.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"61.2\" y1=\"100.2\" x2=\"183.8\" y2=\"139.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"111.3\" y=\"111\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"200\" y1=\"57\" x2=\"200\" y2=\"128\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"192.4\" y=\"83.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"200\" y=\"92.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"215.5\" y1=\"46.9\" x2=\"364.5\" y2=\"113.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"278.8\" y=\"71\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">18</text><line x1=\"216.8\" y1=\"142.7\" x2=\"363.2\" y2=\"122.3\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"123.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"123.4\" y1=\"204.6\" x2=\"186.6\" y2=\"155.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"147.4\" y=\"171\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"155\" y=\"180\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"126.2\" y1=\"220\" x2=\"223.8\" y2=\"250\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"167.4\" y=\"226\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"175\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"205.8\" y1=\"161\" x2=\"234.2\" y2=\"239\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"208.8\" y=\"191\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"252.2\" y1=\"243.2\" x2=\"367.8\" y2=\"131.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"302.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"310\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><circle cx=\"45\" cy=\"95\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"200\" cy=\"40\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"200\" cy=\"145\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"380\" cy=\"120\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"380\" y=\"120.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><circle cx=\"110\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"240\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"240\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text></svg>",
      "alt": "Network graph"
     }
    ]
   ],
   [
    "Bellman-Ford from A",
    [
     "Initialise D(A) = 0, all others ∞. In each iteration relax every edge: D(v) = min(D(v), D(u) + c(u,v)). Iteration k gives the best path that uses at most k links.",
     {
      "table": {
       "head": [
        "Iteration",
        "B (ICU)",
        "C (Radiology)",
        "D (Pharmacy)",
        "E (Emergency)",
        "F (Outpatient)"
       ],
       "rows": [
        [
         "0",
         "∞",
         "∞",
         "∞",
         "∞",
         "∞"
        ],
        [
         "1",
         "∞",
         "2 (A)",
         "10 (A)",
         "∞",
         "∞"
        ],
        [
         "2",
         "12 (D)",
         "2 (A)",
         "3 (C)",
         "21 (D)",
         "16 (D)"
        ],
        [
         "3",
         "5 (D)",
         "2 (A)",
         "3 (C)",
         "13 (B)",
         "9 (D)"
        ],
        [
         "4",
         "5 (D)",
         "2 (A)",
         "3 (C)",
         "6 (B)",
         "9 (D)"
        ],
        [
         "5",
         "5 (D)",
         "2 (A)",
         "3 (C)",
         "6 (B)",
         "8 (E)"
        ]
       ]
      },
      "caption": "Cost (predecessor) after each iteration; the last iteration makes no change → converged."
     }
    ]
   ],
   [
    "Routing table at A (final)",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Path",
        "Next hop"
       ],
       "rows": [
        [
         "B ICU",
         5,
         "A → C → D → B",
         "C"
        ],
        [
         "C Radiology",
         2,
         "A → C",
         "C"
        ],
        [
         "D Pharmacy",
         3,
         "A → C → D",
         "C"
        ],
        [
         "E Emergency",
         6,
         "A → C → D → B → E",
         "C"
        ],
        [
         "F Outpatient",
         8,
         "A → C → D → B → E → F",
         "C"
        ]
       ]
      }
     }
    ]
   ],
   [
    "(a) Link failure / cost oscillation on A–D",
    [
     "If A–D fails, A’s table is unaffected (it routes via C anyway), but C, B, E and F that learned ‘A via D’ must recompute. With plain DV, routers that still advertise old routes to A make others count up slowly (count-to-infinity) and packets can loop until convergence.",
     "If the A–D cost oscillates (congestion-based metric), routes flip back and forth between C and D every update → route flapping, out-of-order delivery and wasted update traffic."
    ]
   ],
   [
    "(b) Remedies (apply split horizon with poison reverse)",
    [
     "Split horizon: never advertise a route back on the interface it was learned from (B does not tell A about A’s own networks).",
     "Poison reverse: advertise it back but with cost ∞ (16), so the neighbour immediately discards that path.",
     "Hold-down timer: after a route goes bad, ignore worse ‘good news’ about it for a while so stale information can die out.",
     "Triggered updates: send changes immediately instead of waiting for the 30 s timer — shortens convergence.",
     "Applied: D learned its route to A via C, so D advertises ‘A = ∞’ back to C. If A–C later fails, C can never pick the stale route through D, so no loop forms and the bad news converges in one update."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "69f1f3aa80194118": {
  "sections": [
   [
    "Why the hybrid design created hidden dependencies",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 215\" width=\"620\" height=\"215\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"20,85 600,85\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"4\"/><polyline points=\"60,55 60,85\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"200,85 200,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"360,85 360,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"520,85 520,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"285,78 295,92\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"3\"/><polyline points=\"295,78 285,92\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"3\"/><rect x=\"15\" y=\"25\" width=\"90\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"60\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Server</text><rect x=\"160\" y=\"115\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept switch</text><rect x=\"320\" y=\"115\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"360\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept switch</text><rect x=\"480\" y=\"115\" width=\"80\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"520\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept switch</text><text x=\"290\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">cable fault on the shared bus</text><text x=\"360\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">each department switch → star of medical devices</text><text x=\"310\" y=\"207\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Current design: department stars hung off a single bus</text></svg>",
      "alt": "Current design: department stars hung off a single bus"
     },
     "In a bus every department’s traffic to the server shares one backbone cable. A break or bad tap does not just cut one link: it splits the bus into two segments and, because the cable ends are no longer terminated, signals reflect back and corrupt frames on the remaining segments too.",
     "Every star segment depends on the bus to reach the central server, so devices whose own star links are perfect still lose connectivity intermittently — the bus is a single point of failure for the whole hospital.",
     "A shared bus is also one collision domain: retransmissions after reflections and collisions amplify the outage. Fault isolation is hard because the symptom appears far from the fault."
    ]
   ],
   [
    "Improved, cost-effective configuration",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 250\" width=\"620\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"310,43 200,90\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"310,43 420,90\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"255,105 365,105\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"200,120 110,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"420,120 110,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"200,120 310,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"420,120 310,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"200,120 510,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><polyline points=\"420,120 510,190\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\"/><rect x=\"245\" y=\"13\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"310\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Server (dual NIC)</text><rect x=\"145\" y=\"90\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch 1</text><rect x=\"365\" y=\"90\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"420\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch 2</text><rect x=\"60\" y=\"190\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"110\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept A switch</text><rect x=\"260\" y=\"190\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"310\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept B switch</text><rect x=\"460\" y=\"190\" width=\"100\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Dept C switch</text><text x=\"310\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Improved: hierarchical (extended) star with dual-homed uplinks</text></svg>",
      "alt": "Improved: hierarchical (extended) star with dual-homed uplinks"
     },
     "Replace the bus with a hierarchical (extended) star: each department switch has its own uplink to a core switch — a fault on one uplink affects only that department.",
     "For critical wards add a second core switch and dual-home each department switch (two uplinks, with spanning tree / link aggregation) and dual-home the server — no single cable or switch can isolate a department.",
     "Cost stays low: departments keep their existing star wiring; only uplinks and one or two core switches are added. Faults are isolated to one link and easy to locate."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "3713cfc7bd91dd8c": {
  "sections": [
   [
    "Answer",
    [
     "Packet switching. With bursty sources a reserved circuit would sit idle most of the time; packet switching shares the link statistically, so many more users can be served and each burst gets the full link rate."
    ]
   ],
   [
    "Comparison for bursty traffic",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Circuit switching",
        "Packet switching (datagram)"
       ],
       "rows": [
        [
         "Path",
         "Dedicated end-to-end path reserved at setup",
         "No reservation; each packet routed independently"
        ],
        [
         "Phases",
         "Setup → data transfer → teardown",
         "Data transfer only (no setup)"
        ],
        [
         "Resource use",
         "Bandwidth reserved even when idle",
         "Shared on demand (statistical multiplexing)"
        ],
        [
         "Delay",
         "Setup delay, then constant low delay, no queuing",
         "Per-hop store-and-forward + variable queuing delay (jitter)"
        ],
        [
         "Ordering",
         "In order (single path)",
         "May arrive out of order"
        ],
        [
         "Addressing",
         "Only at setup",
         "Full destination address in every packet"
        ],
        [
         "Failure",
         "Path breaks → call drops",
         "Packets re-routed around failures"
        ],
        [
         "Charging",
         "By time and distance",
         "By volume (bytes/packets)"
        ],
        [
         "Congestion",
         "Calls blocked at setup",
         "Packets delayed or dropped"
        ],
        [
         "Best for",
         "Continuous, constant-rate traffic (classic voice)",
         "Bursty data (web, e-mail, file transfer)"
        ]
       ]
      }
     },
     "Example: a 1 Mbps link and users who need 100 kbps but are active only 10 % of the time. Circuit switching supports 10 users. With packet switching and 35 users, the chance that more than 10 are active at once is below 0.0004 — so ~3.5× more users get essentially the same service.",
     "Circuit setup time is also wasted for short, occasional bursts; packet switching sends immediately."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "b38c3300db5c5085": {
  "sections": [
   [
    "Row and column parity (even)",
    [
     {
      "table": {
       "head": [
        "Data (7 bits)",
        "1s",
        "Row parity",
        "Transmitted byte"
       ],
       "rows": [
        [
         "1110110",
         5,
         "1",
         "11101101"
        ],
        [
         "1101010",
         4,
         "0",
         "11010100"
        ],
        [
         "0111110",
         5,
         "1",
         "01111101"
        ],
        [
         "0110100",
         3,
         "1",
         "01101001"
        ],
        [
         "1100010",
         3,
         "1",
         "11000101"
        ],
        [
         "0010101",
         3,
         "1",
         "00101011"
        ],
        [
         "1100000",
         2,
         "0",
         "11000000"
        ],
        [
         "Column parity byte",
         "",
         "1",
         "00000011"
        ]
       ]
      }
     },
     "Column parity byte = 00000011 (each column of the 8-bit bytes made even, the last bit is the parity of the parity column)."
    ]
   ],
   [
    "i. All two-bit errors? — Yes",
    [
     "Two errors in the same row: that row’s parity is unchanged, but the two affected columns each change → detected by the column parities.",
     "Two errors in different rows: both row parities fail → detected. (Same column, different rows: the row parities catch it.)",
     "So every 2-bit error changes at least one parity bit."
    ]
   ],
   [
    "ii. All three-bit errors? — Yes",
    [
     "With three flipped bits, at least one row (or column) contains an odd number (1 or 3) of them, so that row’s or column’s parity fails.",
     "2-D parity detects all 1-, 2- and 3-bit errors; it first fails at 4 errors placed on the corners of a rectangle (two rows × two columns), where every row and column still has an even count.",
     {
      "img": "scans/networks/notes/m3-010-011.webp",
      "caption": "Two-dimensional parity: 3 errors are detected, but 4 errors in a rectangle are not (notes p. 10)",
      "alt": "Two-dimensional parity: 3 errors are detected, but 4 errors in a rectangle are not (notes p. 10)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 9–10 (simple and two-dimensional parity)"
  ]
 },
 "1e830810d9e11b64": {
  "sections": [
   [
    "i. CSMA/CD in wireless? — No",
    [
     "CSMA/CD needs a station to transmit and listen at the same time and to notice a collision by a change in signal level. A radio’s own transmission is far stronger than any received signal, so it cannot detect a collision while sending (half-duplex radios).",
     "Hidden terminals: a collision at the receiver may not be audible at the sender at all. Signals also fade, so energy levels are not reliable.",
     "Wireless LANs therefore use CSMA/CA (avoid collisions with IFS, random back-off, RTS/CTS and ACKs)."
    ]
   ],
   [
    "ii. Reading Figure 1",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 170\" width=\"620\" height=\"170\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"75\" y=\"19\" width=\"90\" height=\"22\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"120\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">RTS</text><rect x=\"220\" y=\"49\" width=\"70\" height=\"22\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"255\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">CTS</text><rect x=\"310\" y=\"19\" width=\"180\" height=\"22\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">DATA</text><rect x=\"510\" y=\"49\" width=\"70\" height=\"22\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"545\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">ACK</text><rect x=\"230\" y=\"79\" width=\"340\" height=\"22\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">NAV (set on hearing RTS)</text><rect x=\"340\" y=\"109\" width=\"230\" height=\"22\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"455\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">NAV (set on hearing CTS)</text><text x=\"20\" y=\"30\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13\">A</text><text x=\"20\" y=\"60\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13\">B</text><text x=\"20\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13\">C</text><text x=\"20\" y=\"120\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13\">D</text><text x=\"330\" y=\"158\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time →</text></svg>",
      "alt": "Diagram"
     },
     "A wants to send to B. A sends RTS; B answers CTS; A sends DATA; B returns ACK.",
     "C sets its NAV right after the RTS — so C heard A’s RTS: C is inside A’s transmission range.",
     "D sets its NAV only after the CTS (from the start of DATA) — D heard B’s CTS but not A’s RTS: D is outside A’s range but inside B’s range — a hidden station relative to A.",
     "B is the receiver, within A’s range.",
     "Process: the RTS/CTS durations tell every station that hears them how long the medium is reserved; they set NAV (virtual carrier sense) and stay silent until the ACK ends. This protects A’s data from D, which could not have sensed A. After the ACK, stations contend again with DIFS + back-off."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on CSMA/CA, RTS/CTS and NAV"
  ]
 },
 "3bd362cd2e05afba": {
  "sections": [
   [
    "i. How the OSI architecture isolates errors",
    [
     "Each layer has a defined job and talks only to its peer layer (peer-to-peer protocol) using its own header/trailer. A fault therefore shows up in one layer’s checks: bad frames in the data-link CRC on a specific hop, routing faults in network-layer TTL/ICMP, end-to-end corruption in transport checksums.",
     "Engineers can test layer by layer (cable → link → IP reachability → TCP session → application) and pin the corruption to the hop or node where it starts — e.g. an intermediate router corrupting packets in memory, which hop-by-hop CRC cannot see.",
     {
      "img": "scans/networks/notes/m1-009-007.webp",
      "caption": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)",
      "alt": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)"
     }
    ]
   ],
   [
    "ii. Network-support vs user-support layers",
    [
     {
      "table": {
       "head": [
        "",
        "Network support (Physical, Data link, Network)",
        "User support (Session, Presentation, Application)"
       ],
       "rows": [
        [
         "Scope",
         "Every hop: run in end hosts and in intermediate switches/routers",
         "End hosts only"
        ],
        [
         "Integrity role",
         "Physical: signal quality; Data link: CRC per frame, retransmission on a link; Network: header checksum, routing",
         "Session: checkpoints so long transaction batches can resume; Presentation: encryption + message authentication (MAC/digital signature) detect any tampering; Application: transaction-level validation, sequence numbers, idempotent commits, audit"
        ],
        [
         "Limit",
         "Protects each link separately — data can still be corrupted inside a router between links",
         "Sees the data exactly as the sender produced it — true end-to-end integrity"
        ]
       ]
      }
     },
     "The transport layer links the two groups: its end-to-end checksum and sequence numbers catch what hop-by-hop checks miss. For finance, the end-to-end (user-side) protection is what guarantees integrity; the lower layers make it efficient."
    ]
   ],
   [
    "iii. Error control at data link vs transport for financial transactions",
    [
     {
      "table": {
       "head": [
        "",
        "Data-link layer",
        "Transport layer"
       ],
       "rows": [
        [
         "Coverage",
         "One hop (frame CRC between neighbours)",
         "End to end (segment checksum, sequence numbers, ACKs)"
        ],
        [
         "Detects corruption inside routers",
         "No — each router recomputes the CRC on already-corrupted data",
         "Yes — the receiver checks the segment as the sender built it"
        ],
        [
         "Segmentation & reassembly",
         "Not aware of the message; frames carry pieces of packets",
         "Splits the transaction into segments, numbers them, reorders, detects loss and duplicates, reassembles the whole message"
        ],
        [
         "Speed of recovery",
         "Fast local retransmission on noisy links",
         "Slower (RTT), but complete"
        ]
       ]
      }
     },
     "Conclusion: transport-layer (plus application-level) error control is essential for banking — only it guarantees that the reassembled transaction is complete, ordered and unaltered. Data-link error control is a useful performance optimisation on error-prone links, not a substitute (end-to-end argument)."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)",
   "Module 6 slides on TCP reliability"
  ]
 },
 "d60f98f7312349a0": {
  "sections": [
   [
    "i. Latency with packet switching (store-and-forward)",
    [
     {
      "table": {
       "head": [
        "Link",
        "Rate",
        "Transmission 5000 bits / R",
        "Propagation",
        "Link total"
       ],
       "rows": [
        [
         "Link 1",
         "1 Gbps",
         "5 µs",
         "10 µs",
         "15 µs"
        ],
        [
         "Link 2",
         "1 Gbps",
         "5 µs",
         "10 µs",
         "15 µs"
        ],
        [
         "Link 3",
         "2 Gbps",
         "2.5 µs",
         "10 µs",
         "12.5 µs"
        ],
        [
         "Link 4",
         "2 Gbps",
         "2.5 µs",
         "10 µs",
         "12.5 µs"
        ]
       ]
      }
     },
     "Each switch must receive the whole packet before forwarding, so the delays add: latency = 5 + 5 + 2.5 + 2.5 (transmission) + 4 × 10 (propagation) = 55 µs."
    ]
   ],
   [
    "ii. Queuing?",
    [
     "No. Queues form only when packets arrive at a switch faster than its outgoing link can send them. Here the outgoing links are as fast or faster (1 → 1 → 2 → 2 Gbps), and the queues start empty, so every packet is forwarded immediately. (If links got slower downstream, a stream of packets would queue at the slower link.)"
    ]
   ],
   [
    "iii. Circuit switching with 10 µs setup",
    [
     "Once the circuit exists, bits stream through the switches without store-and-forward; the circuit runs at the bottleneck rate of 1 Gbps.",
     "Latency = setup 10 µs + transmission once (5000 / 1 Gbps = 5 µs) + propagation 4 × 10 µs = 55 µs.",
     "So the two are equal here (55 µs): circuit switching saves the repeated per-hop transmission times (15 − 5 = 10 µs) but spends exactly that on setup. For longer messages circuit switching would win; for many short messages packet switching would."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "a1134b2f9c6587eb": {
  "sections": [
   [
    "Answer",
    [
     "RTT = 2 ms, timeout = 2 × RTT = 4 ms (measured from the moment a frame is sent). All 8 frames are transferred and acknowledged at t = 32 ms."
    ]
   ],
   [
    "Timeline",
    [
     {
      "table": {
       "head": [
        "Event",
        "Sender action",
        "Time"
       ],
       "rows": [
        [
         "Frames 0–2 (given)",
         "each frame + ACK takes one RTT",
         "0 → 6 ms"
        ],
        [
         "i. 4th frame (Frame 3)",
         "lost at 6, timeout 10; lost at 10, timeout 14; sent at 14, ACK 4 at 16",
         "6 → 16 ms"
        ],
        [
         "ii. 5th frame (Frame 4)",
         "lost at 16, timeout 20; resent at 20, ACK 5 at 22",
         "16 → 22 ms"
        ],
        [
         "iii. 6th frame (Frame 5)",
         "sent 22, ACK 6 at 24",
         "22 → 24 ms"
        ],
        [
         "iv. 7th frame (Frame 6)",
         "delivered at 25 but ACK 7 lost; timeout 28; resent 28 — receiver discards the duplicate (same sequence number) and re-sends ACK 7 at 30",
         "24 → 30 ms"
        ],
        [
         "v. 8th frame (Frame 7)",
         "sent 30, ACK 8 at 32",
         "30 → 32 ms"
        ]
       ]
      }
     },
     "Total = 8 RTTs of useful exchanges (16 ms) + 4 timeouts × 4 ms (16 ms) = 32 ms.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608.2 645\" width=\"608.2\" height=\"645\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mt-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mt-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"100\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"150\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"150\" y1=\"33\" x2=\"150\" y2=\"617\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"360\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"410\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"410\" y1=\"33\" x2=\"410\" y2=\"617\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"617\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"150\" y1=\"50\" x2=\"410\" y2=\"67\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"45.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"54.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 0</text><line x1=\"410\" y1=\"67\" x2=\"150\" y2=\"84\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"62.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"71.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 1</text><line x1=\"150\" y1=\"84\" x2=\"410\" y2=\"101\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"79.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"88.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 1</text><line x1=\"410\" y1=\"101\" x2=\"150\" y2=\"118\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"96.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"105.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"150\" y1=\"118\" x2=\"410\" y2=\"135\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"113.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"122.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 2</text><line x1=\"410\" y1=\"135\" x2=\"150\" y2=\"152\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"130.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"139.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3</text><line x1=\"150\" y1=\"152\" x2=\"311.2\" y2=\"162.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"304.2\" y1=\"155.5\" x2=\"318.2\" y2=\"169.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"304.2\" y1=\"169.5\" x2=\"318.2\" y2=\"155.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"199.6\" y=\"147.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"228\" y=\"156.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Frame 3</text><line x1=\"150\" y1=\"220\" x2=\"311.2\" y2=\"230.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"304.2\" y1=\"223.5\" x2=\"318.2\" y2=\"237.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"304.2\" y1=\"237.5\" x2=\"318.2\" y2=\"223.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"199.6\" y=\"215.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"228\" y=\"224.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Frame 3</text><line x1=\"150\" y1=\"288\" x2=\"410\" y2=\"305\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"283.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"292.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 3</text><line x1=\"410\" y1=\"305\" x2=\"150\" y2=\"322\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"300.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"309.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 4</text><line x1=\"150\" y1=\"322\" x2=\"311.2\" y2=\"332.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"304.2\" y1=\"325.5\" x2=\"318.2\" y2=\"339.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"304.2\" y1=\"339.5\" x2=\"318.2\" y2=\"325.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"199.6\" y=\"317.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"228\" y=\"326.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">Frame 4</text><line x1=\"150\" y1=\"390\" x2=\"410\" y2=\"407\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"385.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"394.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 4</text><line x1=\"410\" y1=\"407\" x2=\"150\" y2=\"424\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"402.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"411.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 5</text><line x1=\"150\" y1=\"424\" x2=\"410\" y2=\"441\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"419.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"428.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 5</text><line x1=\"410\" y1=\"441\" x2=\"150\" y2=\"458\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"436.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"445.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 6</text><line x1=\"150\" y1=\"458\" x2=\"410\" y2=\"475\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"453.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"462.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 6</text><line x1=\"410\" y1=\"475\" x2=\"248.8\" y2=\"485.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"241.8\" y1=\"478.5\" x2=\"255.8\" y2=\"492.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"241.8\" y1=\"492.5\" x2=\"255.8\" y2=\"478.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"310.6\" y=\"470.1\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"332\" y=\"479.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">ACK 7</text><line x1=\"150\" y1=\"526\" x2=\"410\" y2=\"543\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"521.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"530.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 6</text><line x1=\"410\" y1=\"543\" x2=\"150\" y2=\"560\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"538.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"547.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 7</text><line x1=\"150\" y1=\"560\" x2=\"410\" y2=\"577\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2c5d8f)\"/><rect x=\"210\" y=\"555.8\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"238.4\" y=\"564.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Frame 7</text><line x1=\"410\" y1=\"577\" x2=\"150\" y2=\"594\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mt-2f7a4f)\"/><rect x=\"300.2\" y=\"572.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"321.6\" y=\"581.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 8</text><text x=\"140\" y=\"220\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">t=10 timeout</text><text x=\"140\" y=\"288\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">t=14 timeout</text><text x=\"140\" y=\"390\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">t=20 timeout</text><text x=\"140\" y=\"526\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">t=28 timeout</text><text x=\"420\" y=\"543\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">duplicate → discard, re-ACK</text><text x=\"140\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=0</text><text x=\"140\" y=\"84\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=2</text><text x=\"140\" y=\"118\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=4</text><text x=\"140\" y=\"152\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=6</text><text x=\"140\" y=\"322\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=16</text><text x=\"140\" y=\"424\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=22</text><text x=\"140\" y=\"458\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=24</text><text x=\"140\" y=\"560\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=30</text><text x=\"140\" y=\"594\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">t=32</text><text x=\"304.1\" y=\"636\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">1 unit = 1 ms (one-way delay 1 ms, RTT 2 ms, timeout 4 ms)</text></svg>",
      "alt": "1 unit = 1 ms (one-way delay 1 ms, RTT 2 ms, timeout 4 ms)"
     }
    ]
   ],
   [
    "Why sequence numbers matter",
    [
     "In case iv the receiver already has frame 6; the repeated sequence number tells it the retransmission is a duplicate, so it discards it but still acknowledges it — otherwise the data would be delivered twice."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Stop-and-Wait ARQ"
  ]
 },
 "c9adb0b38bab7b7c": {
  "sections": [
   [
    "Figure re-drawn (values read from the plot)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 330\" width=\"640\" height=\"330\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"63.44\" y=\"18\" width=\"148.72000000000003\" height=\"268\" fill=\"#e9f2df\" opacity=\"0.55\"/><text x=\"137.8\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">slow start</text><rect x=\"212.16000000000003\" y=\"18\" width=\"160.16000000000003\" height=\"268\" fill=\"#f2efe0\" opacity=\"0.55\"/><text x=\"292.24\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">congestion avoidance</text><rect x=\"372.32000000000005\" y=\"18\" width=\"114.39999999999998\" height=\"268\" fill=\"#e9f2df\" opacity=\"0.55\"/><text x=\"429.52000000000004\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">slow start</text><rect x=\"486.72\" y=\"18\" width=\"102.95999999999992\" height=\"268\" fill=\"#f2efe0\" opacity=\"0.55\"/><text x=\"538.2\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">CA</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"286\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><line x1=\"52\" y1=\"252.5\" x2=\"624\" y2=\"252.5\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"252.5\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><line x1=\"52\" y1=\"219\" x2=\"624\" y2=\"219\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"219\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">20</text><line x1=\"52\" y1=\"185.5\" x2=\"624\" y2=\"185.5\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"185.5\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">30</text><line x1=\"52\" y1=\"152\" x2=\"624\" y2=\"152\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"152\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">40</text><line x1=\"52\" y1=\"118.5\" x2=\"624\" y2=\"118.5\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"118.5\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">50</text><line x1=\"52\" y1=\"85\" x2=\"624\" y2=\"85\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"85\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">60</text><line x1=\"52\" y1=\"51.5\" x2=\"624\" y2=\"51.5\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"51.5\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">70</text><line x1=\"52\" y1=\"18\" x2=\"624\" y2=\"18\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"18\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">80</text><text x=\"52\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><text x=\"166.4\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">5</text><text x=\"280.8\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><text x=\"395.2\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">15</text><text x=\"509.6\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">20</text><text x=\"624\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">25</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><polyline points=\"74.9,282.7 97.8,279.3 120.6,272.6 143.5,259.2 166.4,232.4 189.3,178.8 212.2,71.6 235,68.3 257.9,64.9 280.8,61.5 303.7,58.2 326.6,172.1 349.4,168.8 372.3,165.4 395.2,282.7 418.1,279.3 441,272.6 463.8,259.2 486.7,232.4 509.6,229.1 532.5,225.7 555.4,222.4 578.2,219\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"2\"/><circle cx=\"74.9\" cy=\"282.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"97.8\" cy=\"279.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"120.6\" cy=\"272.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"143.5\" cy=\"259.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"166.4\" cy=\"232.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"189.3\" cy=\"178.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"212.2\" cy=\"71.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"235\" cy=\"68.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"257.9\" cy=\"64.9\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"280.8\" cy=\"61.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"303.7\" cy=\"58.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"326.6\" cy=\"172.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"349.4\" cy=\"168.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"372.3\" cy=\"165.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"395.2\" cy=\"282.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"418.1\" cy=\"279.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"441\" cy=\"272.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"463.8\" cy=\"259.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"486.7\" cy=\"232.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"509.6\" cy=\"229.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"532.5\" cy=\"225.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"555.4\" cy=\"222.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"578.2\" cy=\"219\" r=\"3\" fill=\"#2c5d8f\"/><rect x=\"166.7\" y=\"46.6\" width=\"90.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"212.16000000000003\" y=\"55.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">ssthresh = 64</text><rect x=\"267.8\" y=\"63.2\" width=\"71.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"303.68\" y=\"72.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">3 dup ACKs</text><rect x=\"346\" y=\"170.4\" width=\"52.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"372.32000000000005\" y=\"179.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">timeout</text><text x=\"338\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Transmission round</text><text x=\"14\" y=\"152\" transform=\"rotate(-90 14 152)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#52615a\">cwnd (MSS)</text></svg>",
      "alt": "Chart"
     }
    ]
   ],
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer",
        "Reason"
       ],
       "rows": [
        [
         "a) Slow start",
         "Rounds 1 → 7 and 15 → 19",
         "cwnd doubles each round (1, 2, 4, … 64 and 1, 2, 4, 8, 16)"
        ],
        [
         "b) Congestion avoidance",
         "Rounds 7 → 11, 12 → 14 and 19 → 23",
         "cwnd grows by 1 MSS per round"
        ],
        [
         "c) Initial ssthresh",
         "64 MSS",
         "Exponential growth stops at 64 and becomes linear"
        ],
        [
         "d) Loss after the 11th RTT",
         "Triple duplicate ACK",
         "cwnd only halves (≈ 68 → 34) and keeps growing linearly — fast recovery, not a restart"
        ],
        [
         "e) Loss after the 14th RTT",
         "Timeout",
         "cwnd falls to 1 MSS and slow start restarts"
        ],
        [
         "e) New values",
         "ssthresh = 36 / 2 = 18 MSS, cwnd = 1 MSS",
         "Slow start runs until cwnd reaches 18, then linear growth"
        ]
       ]
      }
     }
    ]
   ],
   [
    "ii. One open-loop method — leaky bucket traffic shaping",
    [
     "The host (or edge router) puts outgoing packets in a bucket (queue) that leaks at a constant rate r. Bursts are absorbed by the bucket and sent out smoothly, so the network never receives more than r on average; packets that arrive when the bucket is full are discarded.",
     "It prevents congestion in advance — no feedback from the network is needed. (Other open-loop policies: retransmission, window, acknowledgment, discarding and admission policies.)",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 200\" width=\"600\" height=\"200\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m27-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker><marker id=\"m27-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><polyline points=\"160,60 300,60 300,40\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"300,140 300,165 300,165 425,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"355,60 420,60\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"1.5\" marker-end=\"url(#m27-b3412c)\"/><rect x=\"333.5\" y=\"51\" width=\"108.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"387.5\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11.5\">overflow → drop</text><rect x=\"20\" y=\"40\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"90\" y=\"52.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bursty input</text><text x=\"90\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(variable rate)</text><rect x=\"245\" y=\"40\" width=\"110\" height=\"100\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bucket</text><text x=\"300\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(queue of</text><text x=\"300\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">capacity C)</text><rect x=\"425\" y=\"130\" width=\"150\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"500\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Smooth output</text><text x=\"500\" y=\"157.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">at fixed rate r</text><text x=\"300\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Leaky bucket: any burst leaves at rate r; excess beyond C is discarded</text></svg>",
      "alt": "Leaky bucket: any burst leaves at rate r; excess beyond C is discarded"
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)"
  ]
 },
 "b16b7710716e3f06": {
  "sections": [
   [
    "i. ece.chennai.vit.ac.in.",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer"
       ],
       "rows": [
        [
         "a. Labels",
         "ece, chennai, vit, ac, in (and the empty root label after the final dot)"
        ],
        [
         "b. Levels of hierarchy",
         "5 levels below the root: in (1, top-level) → ac (2) → vit (3) → chennai (4) → ece (5); 6 counting the root"
        ],
        [
         "c. FQDN or PQDN?",
         "FQDN — it ends with a dot (terminated by the null root label), so it is complete"
        ],
        [
         "d. Domain type",
         "Country domain (.in = India; ac.in = academic institutions in India)"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 250\" width=\"640\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"320,39 70,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 150,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 230,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 350,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 430,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 560,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"350,109 350,141\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"350,169 350,196\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"560,109 560,141\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"285\" y=\"11\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">root ( . )</text><rect x=\"42\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">com</text><rect x=\"122\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">edu</text><rect x=\"202\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"230\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">org</text><rect x=\"322\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">in</text><rect x=\"402\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"430\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">uk</text><rect x=\"525\" y=\"81\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">arpa</text><rect x=\"322\" y=\"141\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">ac</text><rect x=\"322\" y=\"196\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">vit</text><rect x=\"515\" y=\"141\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">in-addr</text><text x=\"150\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Generic domains</text><text x=\"390\" y=\"135\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Country domains</text><text x=\"560\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Inverse domain</text><text x=\"420\" y=\"215\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">→ chennai → ece</text><text x=\"320\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Domain name space: an inverted tree of labels (max depth 128, each label ≤ 63 characters)</text></svg>",
      "alt": "Domain name space: an inverted tree of labels (max depth 128, each label ≤ 63 characters)"
     }
    ]
   ],
   [
    "e. Why DNS when IP addresses work?",
    [
     "Names are easy to remember; IP addresses (especially 128-bit IPv6) are not.",
     "Indirection: a server can move to a new IP or be replaced without users noticing — only the DNS record changes.",
     "Load distribution and resilience: one name can map to many addresses (round-robin, CDNs, geographic routing).",
     "Services are discovered through records: MX for mail servers, SRV for services, CNAME aliases."
    ]
   ],
   [
    "ii. Recursive vs iterative resolution",
    [
     {
      "table": {
       "head": [
        "",
        "Recursive resolution",
        "Iterative resolution"
       ],
       "rows": [
        [
         "Who does the work",
         "The queried server resolves completely (asks other servers itself)",
         "The queried server returns the best referral; the asker contacts the next server"
        ],
        [
         "Reply",
         "Always the final answer (or error)",
         "Answer or a referral to another server"
        ],
        [
         "Load",
         "Heavy on upper-level servers (root/TLD would have to recurse)",
         "Light on root/TLD servers; work stays with the resolver"
        ],
        [
         "Typical use",
         "Host (stub resolver) → its local DNS server",
         "Local DNS server → root, TLD, authoritative servers"
        ],
        [
         "Caching",
         "Every server on the chain caches the answer",
         "Mainly the local server caches"
        ],
        [
         "Messages (example)",
         "Fewer for the client (1 query, 1 reply)",
         "More messages for the resolver"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 692 348.20000000000005\" width=\"692\" height=\"348.20000000000005\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2f-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2f-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"20\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client A</text><line x1=\"70\" y1=\"48\" x2=\"70\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"158\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"208\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Local DNS</text><text x=\"208\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"208\" y1=\"48\" x2=\"208\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"296\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"346\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Root</text><text x=\"346\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"346\" y1=\"48\" x2=\"346\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"434\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"484\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">.in TLD</text><text x=\"484\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"484\" y1=\"48\" x2=\"484\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"567.2\" y=\"8\" width=\"109.6\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"622\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">vit.ac.in</text><text x=\"622\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">authoritative</text><line x1=\"622\" y1=\"48\" x2=\"622\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"320.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"70\" y1=\"65\" x2=\"208\" y2=\"90.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2c5d8f)\"/><rect x=\"12\" y=\"63.6\" width=\"209.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"116.92\" y=\"72.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">1 query ece.chennai.vit.ac.in</text><line x1=\"208\" y1=\"93\" x2=\"346\" y2=\"118.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2c5d8f)\"/><rect x=\"247.4\" y=\"91.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"254.92000000000002\" y=\"100.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">2</text><line x1=\"346\" y1=\"121\" x2=\"484\" y2=\"146.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2c5d8f)\"/><rect x=\"385.4\" y=\"119.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"392.92\" y=\"128.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">3</text><line x1=\"484\" y1=\"149\" x2=\"622\" y2=\"174.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2c5d8f)\"/><rect x=\"523.4\" y=\"147.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"530.92\" y=\"156.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">4</text><line x1=\"622\" y1=\"177\" x2=\"484\" y2=\"202.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2f7a4f)\"/><rect x=\"557.2\" y=\"175.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"575.08\" y=\"184.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">5 IP</text><line x1=\"484\" y1=\"205\" x2=\"346\" y2=\"230.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2f7a4f)\"/><rect x=\"419.2\" y=\"203.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"437.08\" y=\"212.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">6 IP</text><line x1=\"346\" y1=\"233\" x2=\"208\" y2=\"258.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2f7a4f)\"/><rect x=\"281.2\" y=\"231.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"299.08\" y=\"240.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">7 IP</text><line x1=\"208\" y1=\"261\" x2=\"70\" y2=\"286.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2f-2f7a4f)\"/><rect x=\"129.2\" y=\"259.6\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"161.07999999999998\" y=\"268.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">8 answer</text><text x=\"346\" y=\"339.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Recursive: each server asks the next on the requester’s behalf; the answer returns along the chain</text></svg>",
      "alt": "Recursive: each server asks the next on the requester’s behalf; the answer returns along the chain"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 692 348.20000000000005\" width=\"692\" height=\"348.20000000000005\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2g-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2g-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"20\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client A</text><line x1=\"70\" y1=\"48\" x2=\"70\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"158\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"208\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Local DNS</text><text x=\"208\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"208\" y1=\"48\" x2=\"208\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"296\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"346\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Root</text><text x=\"346\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"346\" y1=\"48\" x2=\"346\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"434\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"484\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">.in TLD</text><text x=\"484\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"484\" y1=\"48\" x2=\"484\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"567.2\" y=\"8\" width=\"109.6\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"622\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">vit.ac.in</text><text x=\"622\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">authoritative</text><line x1=\"622\" y1=\"48\" x2=\"622\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"320.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"70\" y1=\"65\" x2=\"208\" y2=\"90.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2c5d8f)\"/><rect x=\"12\" y=\"63.6\" width=\"209.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"116.92\" y=\"72.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">1 query ece.chennai.vit.ac.in</text><line x1=\"208\" y1=\"93\" x2=\"346\" y2=\"118.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2c5d8f)\"/><rect x=\"226.6\" y=\"91.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"254.92000000000002\" y=\"100.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">2 query</text><line x1=\"346\" y1=\"121\" x2=\"208\" y2=\"146.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2f7a4f)\"/><rect x=\"229\" y=\"119.6\" width=\"140.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"299.08\" y=\"128.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">3 referral: ask TLD</text><line x1=\"208\" y1=\"149\" x2=\"484\" y2=\"174.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2c5d8f)\"/><rect x=\"273.5\" y=\"147.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"301.84000000000003\" y=\"156.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">4 query</text><line x1=\"484\" y1=\"177\" x2=\"208\" y2=\"202.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2f7a4f)\"/><rect x=\"316.6\" y=\"175.6\" width=\"147.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390.15999999999997\" y=\"184.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">5 referral: ask auth</text><line x1=\"208\" y1=\"205\" x2=\"622\" y2=\"230.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2c5d8f)\"/><rect x=\"320.4\" y=\"203.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348.76\" y=\"212.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">6 query</text><line x1=\"622\" y1=\"233\" x2=\"208\" y2=\"258.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2f7a4f)\"/><rect x=\"435.5\" y=\"231.6\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"481.24\" y=\"240.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">7 IP address</text><line x1=\"208\" y1=\"261\" x2=\"70\" y2=\"286.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2g-2f7a4f)\"/><rect x=\"97.9\" y=\"259.6\" width=\"126.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"161.07999999999998\" y=\"268.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">8 answer (cached)</text><text x=\"346\" y=\"339.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Iterative: servers return referrals; the local DNS server asks each one itself</text></svg>",
      "alt": "Iterative: servers return referrals; the local DNS server asks each one itself"
     }
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 8–36 (domain name space, FQDN/PQDN, resolution)"
  ]
 },
 "6b7d75f1b4392251": {
  "sections": [
   [
    "i. Why classful addressing wastes addresses",
    [
     "Only three fixed block sizes: class A = 16 777 216, class B = 65 536, class C = 256 addresses. Organisations rarely fit them.",
     "A company needing 1000 hosts must take a class B → about 64 500 addresses are idle; one needing 300 gets a class B or two class Cs.",
     "Class A blocks (128 of them) went to a few organisations that used a tiny fraction; class D/E (1/8 of the space) are not assignable to hosts.",
     "Addresses cannot be shared between organisations, so the unused part of a block is lost — this hastened IPv4 exhaustion and led to CIDR."
    ]
   ],
   [
    "ii-a) Subnetting 172.16.8.0/23 (512 addresses)",
    [
     "Block size = 2^k ≥ hosts + 2, allocated largest first: 120 → 128 (/25), 60 → 64 (/26), 30 → 32 (/27), 25 → 32 (/27), 10 → 16 (/28).",
     {
      "table": {
       "head": [
        "Subnet",
        "Hosts needed",
        "Block",
        "CIDR",
        "Mask",
        "Network ID",
        "Usable range",
        "Broadcast",
        "Unused in block"
       ],
       "rows": [
        [
         "Engineering Block",
         120,
         128,
         "172.16.8.0/25",
         "255.255.255.128",
         "172.16.8.0",
         "172.16.8.1 – 172.16.8.126",
         "172.16.8.127",
         6
        ],
        [
         "Science Block",
         60,
         64,
         "172.16.8.128/26",
         "255.255.255.192",
         "172.16.8.128",
         "172.16.8.129 – 172.16.8.190",
         "172.16.8.191",
         2
        ],
        [
         "Library & Learning",
         25,
         32,
         "172.16.8.192/27",
         "255.255.255.224",
         "172.16.8.192",
         "172.16.8.193 – 172.16.8.222",
         "172.16.8.223",
         5
        ],
        [
         "Wi-Fi Access",
         30,
         32,
         "172.16.8.224/27",
         "255.255.255.224",
         "172.16.8.224",
         "172.16.8.225 – 172.16.8.254",
         "172.16.8.255",
         0
        ],
        [
         "Administration",
         10,
         16,
         "172.16.9.0/28",
         "255.255.255.240",
         "172.16.9.0",
         "172.16.9.1 – 172.16.9.14",
         "172.16.9.15",
         4
        ]
       ]
      }
     }
    ]
   ],
   [
    "ii-b) Range used and remaining",
    [
     "Used: 172.16.8.0 – 172.16.9.15 (272 addresses).",
     "Remaining: 172.16.9.16 – 172.16.9.255 (240 addresses).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"95\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Engineering</text><text x=\"95\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">172.16.8.0/25</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.8.0</text><rect x=\"170.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"207.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Science</text><text x=\"207.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">172.16.8.128/26</text><line x1=\"170\" y1=\"76\" x2=\"170\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"172\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.8.128</text><rect x=\"245.0\" y=\"30\" width=\"37.5\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"245\" y1=\"76\" x2=\"245\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"247\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.8.192</text><rect x=\"282.5\" y=\"30\" width=\"37.5\" height=\"46\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"282.5\" y1=\"76\" x2=\"282.5\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"284.5\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.8.224</text><rect x=\"320.0\" y=\"30\" width=\"18.8\" height=\"46\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"320\" y1=\"76\" x2=\"320\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"322\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.9.0</text><rect x=\"338.8\" y=\"30\" width=\"281.3\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"479.375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"479.375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">240</text><line x1=\"338.8\" y1=\"76\" x2=\"338.8\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"340.75\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">172.16.9.16</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">172.16.8.0/23</text></svg>",
      "alt": "172.16.8.0/23"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 11–51 (classful), 104–126 (classless)"
  ]
 },
 "16cc825756ef4191": {
  "sections": [
   [
    "(i) Link costs",
    [
     {
      "table": {
       "head": [
        "Link",
        "Bandwidth (Mbps)",
        "Delay (ms)",
        "Cost = delay/bandwidth × 100"
       ],
       "rows": [
        [
         "A–B",
         50,
         10,
         "10/50 × 100 = 20"
        ],
        [
         "A–C",
         25,
         25,
         "25/25 × 100 = 100"
        ],
        [
         "B–D",
         20,
         10,
         "10/20 × 100 = 50"
        ],
        [
         "B–E",
         30,
         9,
         "9/30 × 100 = 30"
        ],
        [
         "C–D",
         40,
         8,
         "8/40 × 100 = 20"
        ],
        [
         "D–E",
         25,
         15,
         "15/25 × 100 = 60"
        ],
        [
         "D–F",
         10,
         10,
         "10/10 × 100 = 100"
        ],
        [
         "E–F",
         20,
         2,
         "2/20 × 100 = 10"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 285\" width=\"510\" height=\"285\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"59.1\" y1=\"130.6\" x2=\"165.9\" y2=\"59.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"101.3\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"112.5\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">20</text><line x1=\"59.1\" y1=\"149.4\" x2=\"165.9\" y2=\"220.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"97.6\" y=\"176\" width=\"29.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"112.5\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">100</text><line x1=\"190.9\" y1=\"63.1\" x2=\"319.1\" y2=\"216.9\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"243.8\" y=\"131\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">50</text><line x1=\"197\" y1=\"50\" x2=\"313\" y2=\"50\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"243.8\" y=\"41\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">30</text><line x1=\"197\" y1=\"230\" x2=\"313\" y2=\"230\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"243.8\" y=\"221\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">20</text><line x1=\"330\" y1=\"213\" x2=\"330\" y2=\"67\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"318.8\" y=\"131\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">60</text><line x1=\"344\" y1=\"220.3\" x2=\"446\" y2=\"149.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"380.1\" y=\"176\" width=\"29.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"395\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">100</text><line x1=\"344\" y1=\"59.7\" x2=\"446\" y2=\"130.3\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"383.8\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"395\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><circle cx=\"45\" cy=\"140\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"180\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"180\" cy=\"230\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"230.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"330\" cy=\"230\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"230.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"330\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><circle cx=\"460\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"460\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><text x=\"255\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Weighted graph</text></svg>",
      "alt": "Weighted graph"
     }
    ]
   ],
   [
    "(ii) Dijkstra from A",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)",
        "D(F), p(F)"
       ],
       "rows": [
        [
         0,
         "A",
         "20, A",
         "100, A",
         "∞",
         "∞",
         "∞"
        ],
        [
         1,
         "AB",
         "20, A",
         "100, A",
         "70, B",
         "50, B",
         "∞"
        ],
        [
         2,
         "ABE",
         "—",
         "100, A",
         "70, B",
         "50, B",
         "60, E"
        ],
        [
         3,
         "ABEF",
         "—",
         "100, A",
         "70, B",
         "—",
         "60, E"
        ],
        [
         4,
         "ABEFD",
         "—",
         "90, D",
         "70, B",
         "—",
         "—"
        ],
        [
         5,
         "ABEFDC",
         "—",
         "90, D",
         "—",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 285\" width=\"510\" height=\"285\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"59.1\" y1=\"130.6\" x2=\"165.9\" y2=\"59.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"101.3\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"112.5\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">20</text><line x1=\"59.1\" y1=\"149.4\" x2=\"165.9\" y2=\"220.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"97.6\" y=\"176\" width=\"29.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"112.5\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">100</text><line x1=\"190.9\" y1=\"63.1\" x2=\"319.1\" y2=\"216.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"243.8\" y=\"131\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">50</text><line x1=\"197\" y1=\"50\" x2=\"313\" y2=\"50\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"243.8\" y=\"41\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">30</text><line x1=\"197\" y1=\"230\" x2=\"313\" y2=\"230\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"243.8\" y=\"221\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">20</text><line x1=\"330\" y1=\"213\" x2=\"330\" y2=\"67\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"318.8\" y=\"131\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">60</text><line x1=\"344\" y1=\"220.3\" x2=\"446\" y2=\"149.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"380.1\" y=\"176\" width=\"29.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"395\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">100</text><line x1=\"344\" y1=\"59.7\" x2=\"446\" y2=\"130.3\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"383.8\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"395\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">10</text><circle cx=\"45\" cy=\"140\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"37.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"180\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"169.3\" y=\"69\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"180\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">20</text><circle cx=\"180\" cy=\"230\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"230.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"169.3\" y=\"249\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"180\" y=\"258\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">90</text><circle cx=\"330\" cy=\"230\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"230.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"319.3\" y=\"249\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"258\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">70</text><circle cx=\"330\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"319.3\" y=\"69\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">50</text><circle cx=\"460\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"460\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"449.3\" y=\"159\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"460\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">60</text><text x=\"255\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from A (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from A (green) · blue = final cost"
     }
    ]
   ],
   [
    "(iii) Routing table of A",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         "A → B",
         20,
         "B"
        ],
        [
         "C",
         "A → B → D → C",
         90,
         "B"
        ],
        [
         "D",
         "A → B → D",
         70,
         "B"
        ],
        [
         "E",
         "A → B → E",
         50,
         "B"
        ],
        [
         "F",
         "A → B → E → F",
         60,
         "B"
        ]
       ]
      },
      "caption": "Routing table at A"
     },
     "Summary: B = 20 (A→B), C = 90 (A→B→D→C), D = 70 (A→B→D), E = 50 (A→B→E), F = 60 (A→B→E→F)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "6090ca3c91008ce7": {
  "sections": [
   [
    "Types of topology",
    [
     "Mesh, star, bus, ring, and hybrid/tree (combinations).",
     {
      "table": {
       "head": [
        "Topology",
        "Links for n devices",
        "Pros",
        "Cons"
       ],
       "rows": [
        [
         "Mesh",
         "n(n − 1)/2 duplex; n − 1 ports each",
         "Dedicated links, no traffic sharing, robust, private, easy fault isolation",
         "Expensive cabling and ports; hard to install"
        ],
        [
         "Star",
         "n (one per device)",
         "Cheap, easy to install/reconfigure, a link failure affects one device, easy fault isolation",
         "Hub/switch is a single point of failure"
        ],
        [
         "Bus",
         "1 backbone + n drop lines",
         "Least cable, easy to install",
         "Backbone break stops all; signal reflections; hard to add devices; collisions"
        ],
        [
         "Ring",
         "n (each device to two neighbours)",
         "Easy fault isolation (signal circulates), equal access with tokens",
         "A break disables the ring (unless dual ring); adding devices disrupts it"
        ],
        [
         "Hybrid / tree",
         "mix",
         "Combines strengths (e.g. star of stars)",
         "Complex design and management"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Mesh topology",
    [
     "Every device has a dedicated point-to-point link to every other device: n(n − 1)/2 duplex links, n − 1 I/O ports per device.",
     "Advantages: no shared links (no traffic problems), robust (one link failure affects only that pair), privacy, easy fault identification. Disadvantages: cabling and ports grow as n²; expensive. Used for WAN backbones between a few core routers.",
     {
      "img": "scans/networks/notes/m1-007-003.webp",
      "caption": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)",
      "alt": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)"
     }
    ]
   ],
   [
    "Star topology",
    [
     "Each device has one dedicated link to a central controller (hub/switch); devices communicate through it.",
     "Advantages: cheap (one link and port per device), easy to install and reconfigure, a broken cable affects only one device, central fault detection. Disadvantage: the hub/switch is a single point of failure. Used in almost all office Ethernet LANs.",
     {
      "img": "scans/networks/notes/m1-007-004.webp",
      "caption": "Star: every device has its own link to a central hub/switch (notes p. 7)",
      "alt": "Star: every device has its own link to a central hub/switch (notes p. 7)"
     }
    ]
   ],
   [
    "Others (for reference)",
    [
     {
      "img": "scans/networks/notes/m1-008-005.webp",
      "caption": "Bus: one backbone cable; devices attach with drop lines and taps (notes p. 8)",
      "alt": "Bus: one backbone cable; devices attach with drop lines and taps (notes p. 8)"
     },
     {
      "img": "scans/networks/notes/m1-008-006.webp",
      "caption": "Ring: each device connects to two neighbours; repeaters pass the signal around (notes p. 8)",
      "alt": "Ring: each device connects to two neighbours; repeaters pass the signal around (notes p. 8)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8 (topologies)"
  ]
 },
 "65f3e66c1255b765": {
  "sections": [
   [
    "Packet vs circuit switching",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Circuit switching",
        "Packet switching (datagram)"
       ],
       "rows": [
        [
         "Path",
         "Dedicated end-to-end path reserved at setup",
         "No reservation; each packet routed independently"
        ],
        [
         "Phases",
         "Setup → data transfer → teardown",
         "Data transfer only (no setup)"
        ],
        [
         "Resource use",
         "Bandwidth reserved even when idle",
         "Shared on demand (statistical multiplexing)"
        ],
        [
         "Delay",
         "Setup delay, then constant low delay, no queuing",
         "Per-hop store-and-forward + variable queuing delay (jitter)"
        ],
        [
         "Ordering",
         "In order (single path)",
         "May arrive out of order"
        ],
        [
         "Addressing",
         "Only at setup",
         "Full destination address in every packet"
        ],
        [
         "Failure",
         "Path breaks → call drops",
         "Packets re-routed around failures"
        ],
        [
         "Charging",
         "By time and distance",
         "By volume (bytes/packets)"
        ],
        [
         "Congestion",
         "Calls blocked at setup",
         "Packets delayed or dropped"
        ],
        [
         "Best for",
         "Continuous, constant-rate traffic (classic voice)",
         "Bursty data (web, e-mail, file transfer)"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m2-007-007.webp",
      "caption": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)",
      "alt": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)"
     }
    ]
   ],
   [
    "Voice traffic and QoS",
    [
     "Voice needs low delay (< 150 ms one way), very low jitter and steady bandwidth (64 kbps PCM), but tolerates a little loss.",
     "Circuit switching suits voice best: once the call is set up, delay is fixed and small, there is no queuing jitter and the bandwidth is guaranteed — exactly the QoS voice needs. That is why the telephone network (PSTN) is circuit-switched.",
     "Packet-switched voice (VoIP) works only with QoS mechanisms that imitate a circuit: priority queuing/DiffServ (EF class), resource reservation (RSVP/IntServ), small packets and jitter buffers at the receiver."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)",
   "Module 6 slides 146–160 (QoS)"
  ]
 },
 "20ce2f376e8f8210": {
  "sections": [
   [
    "Answer",
    [
     "Minimum frame = 512 bits = 64 bytes."
    ]
   ],
   [
    "Working",
    [
     "A station must still be transmitting when news of a collision returns, so frame transmission time ≥ 2 × maximum propagation time.",
     "Tfr = 2 × 25.6 µs = 51.2 µs.",
     "Minimum size = bandwidth × Tfr = 10 × 10⁶ × 51.2 × 10⁻⁶ = 512 bits = 64 bytes — exactly the minimum frame length of standard Ethernet."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 26 (Ethernet frame sizes)",
   "Module 3 slides on CSMA/CD"
  ]
 },
 "093b42e3bf93c0ca": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer"
       ],
       "rows": [
        [
         "(i) 01111111 11110000 01100111 01111101",
         "127.240.103.125"
        ],
        [
         "(ii) 129.14.6.8",
         "10000001 00001110 00000110 00001000"
        ],
        [
         "(iii) 2340:0000:0000:0000:0000:119A:A001:0000",
         "2340::119A:A001:0"
        ],
        [
         "(iv) 0:1234::3",
         "0000:1234:0000:0000:0000:0000:0000:0003"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Rules",
    [
     "Each IPv4 byte = 8 bits; convert each with place values 128 64 32 16 8 4 2 1.",
     "IPv6 shortening: remove leading zeros in each group; replace one run of consecutive all-zero groups by ‘::’ (only once).",
     "Expanding: count the groups present (here 3) — ‘::’ stands for the 8 − 3 = 5 missing zero groups."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 11–35 (notation), 226 (IPv6 abbreviation)"
  ]
 },
 "db6cfeea1d6f6881": {
  "sections": [
   [
    "Comparison",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Distance vector (e.g. RIP)",
        "Link state (e.g. OSPF)"
       ],
       "rows": [
        [
         "Knowledge",
         "Only neighbours’ distance vectors (“routing by rumour”)",
         "Complete topology map (link-state database)"
        ],
        [
         "What is sent",
         "Whole routing table / vector",
         "Link-state packet (LSP/LSA): own links and costs"
        ],
        [
         "Sent to",
         "Directly connected neighbours",
         "Every router (flooding)"
        ],
        [
         "When",
         "Periodically (30 s) + triggered",
         "On change + long refresh (30 min)"
        ],
        [
         "Algorithm",
         "Bellman-Ford (distributed)",
         "Dijkstra (each router computes its own tree)"
        ],
        [
         "Convergence",
         "Slow; count-to-infinity possible",
         "Fast; loop-free once databases agree"
        ],
        [
         "Metric",
         "Hop count (RIP, max 15)",
         "Configurable cost (bandwidth based)"
        ],
        [
         "CPU / memory",
         "Low",
         "Higher (LSDB + SPF computation)"
        ],
        [
         "Bandwidth",
         "Large periodic updates",
         "Small LSAs, but flooding bursts on change"
        ],
        [
         "Scalability",
         "Small networks",
         "Large networks; areas give hierarchy"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Key points",
    [
     "Distance vector: tell your neighbours about the whole world. Link state: tell the whole world about your neighbours.",
     "DV loop-prevention needs split horizon, poison reverse, hold-down; LS avoids loops because every router has the same map."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m5-004-004.webp",
      "caption": "Intradomain routing: distance vector (RIP) and link state (OSPF); interdomain: path vector (BGP) (notes p. 4)",
      "alt": "Intradomain routing: distance vector (RIP) and link state (OSPF); interdomain: path vector (BGP) (notes p. 4)"
     },
     {
      "img": "scans/networks/notes/m5-007-012.webp",
      "caption": "Distance-vector update: receive neighbour vector, add link cost, compare, keep the cheaper entry (notes p. 7)",
      "alt": "Distance-vector update: receive neighbour vector, add link cost, compare, keep the cheaper entry (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 4–13",
   "Module 5 ADHD notes p. 32 (cheat sheet)"
  ]
 },
 "75c2c1da5f0424cb": {
  "sections": [
   [
    "Answer",
    [
     {
      "table": {
       "head": [
        "Segment",
        "Sequence number",
        "Bytes carried"
       ],
       "rows": [
        [
         "1",
         "10 001",
         "10 001 – 11 000"
        ],
        [
         "2",
         "11 001",
         "11 001 – 12 000"
        ],
        [
         "3",
         "12 001",
         "12 001 – 13 000"
        ],
        [
         "4",
         "13 001",
         "13 001 – 14 000"
        ],
        [
         "5",
         "14 001",
         "14 001 – 15 000"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Rule",
    [
     "TCP numbers bytes, not segments. A segment’s sequence number is the number of its first byte: seq(k) = 10 001 + (k − 1) × 1000. The receiver’s ACK number is the next byte it expects (e.g. ACK 11 001 after segment 1)."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 50–66 (TCP segment, sequence numbers)"
  ]
 },
 "8cec1815577db6f1": {
  "sections": [
   [
    "Why OSI knowledge qualifies you",
    [
     "Every networking role works at specific layers: a network architect designs across all seven; a design engineer chooses media, switching and addressing (layers 1–3); a support engineer and admin troubleshoot bottom-up through the layers; a tester validates each protocol against its layer’s specification. The OSI model gives the common vocabulary and the divide-and-conquer method for all of them."
    ]
   ],
   [
    "Functions and services of each layer",
    [
     {
      "table": {
       "head": [
        "#",
        "Layer",
        "Responsibility",
        "Unit / address",
        "Protocols / devices"
       ],
       "rows": [
        [
         "7",
         "Application",
         "Services for users: e-mail, file transfer, web, remote login, directory",
         "Message",
         "HTTP, FTP, SMTP, DNS, SNMP, Telnet"
        ],
        [
         "6",
         "Presentation",
         "Translation (character codes), encryption/decryption, compression",
         "—",
         "TLS/SSL, JPEG, MPEG, ASCII/Unicode"
        ],
        [
         "5",
         "Session",
         "Dialog control (half/full duplex), synchronisation checkpoints, session setup/teardown",
         "—",
         "RPC, NetBIOS, SIP (session part)"
        ],
        [
         "4",
         "Transport",
         "Process-to-process delivery, segmentation & reassembly, port addressing, connection control, end-to-end flow and error control",
         "Segment / port number",
         "TCP, UDP, SCTP"
        ],
        [
         "3",
         "Network",
         "Host-to-host (source-to-destination) delivery across networks, logical addressing, routing",
         "Packet / IP address",
         "IP, ICMP, OSPF, RIP — routers"
        ],
        [
         "2",
         "Data link",
         "Node-to-node (hop) delivery: framing, physical (MAC) addressing, flow control, error control, media access",
         "Frame / MAC address",
         "Ethernet, Wi-Fi MAC, PPP — switches, bridges"
        ],
        [
         "1",
         "Physical",
         "Transmission of the raw bit stream over the medium: signals, encoding, data rate, synchronisation, topology, transmission mode",
         "Bit",
         "Cables, hubs, repeaters, connectors"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-014-018.webp",
      "caption": "Summary of OSI layer responsibilities (notes p. 14)",
      "alt": "Summary of OSI layer responsibilities (notes p. 14)"
     }
    ]
   ],
   [
    "Interaction between layers",
    [
     "Encapsulation: going down, each layer adds its header (and the data link layer a trailer) to the unit from above; going up, each layer removes its own header and passes the rest up.",
     "Peer-to-peer processes: layer n on one machine logically talks to layer n on the other; physically, data passes down to layer 1, across the medium and up. Intermediate nodes (routers) use only layers 1–3.",
     {
      "img": "scans/networks/notes/m1-019-024.webp",
      "caption": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)",
      "alt": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)"
     },
     {
      "img": "scans/networks/notes/m1-009-007.webp",
      "caption": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)",
      "alt": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "1be2bdda2c466638": {
  "sections": [
   [
    "Answer",
    [
     "Circuit switching ≈ 2.0477 s; packet (datagram) switching ≈ 2.1393 s."
    ]
   ],
   [
    "Circuit switching",
    [
     "Delay = call set-up + message transmission + propagation over all hops (no store-and-forward).",
     "= 1 s + 10 000 / 9600 + 6 × 1 ms = 1 + 1.0417 + 0.006 = 2.0477 s."
    ]
   ],
   [
    "Packet switching",
    [
     "Packets = 10 000 / 2000 = 5, each 2048 bits → transmission per hop = 2048 / 9600 = 0.21333 s.",
     "The first packet needs k = 6 transmissions; after that one packet completes every transmission time (pipelining):",
     "Delay = (np + k − 1) × tp + k × D = (5 + 6 − 1) × 0.21333 + 6 × 0.001 = 2.1333 + 0.006 = 2.1393 s."
    ]
   ],
   [
    "Comment",
    [
     "Circuit switching is faster here because the long message hides the 1 s set-up; packet switching pays the 48-bit overhead on every packet and per-hop store-and-forward. With shorter messages or more hops the comparison changes.",
     {
      "img": "scans/networks/notes/m2-007-007.webp",
      "caption": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)",
      "alt": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "0998738acbe7a37c": {
  "sections": [
   [
    "Rules used",
    [
     "Sender window = 4: frames 0–3 may be outstanding; each frame has its own timer; each frame is acknowledged individually (ACK n = frame n received).",
     "The window slides only when its left-most frame is acknowledged."
    ]
   ],
   [
    "(i) No frame lost",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 668 261.6\" width=\"668\" height=\"261.6\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mu-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mu-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"134\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"184\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"184\" y1=\"33\" x2=\"184\" y2=\"233.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"434\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"484\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"484\" y1=\"33\" x2=\"484\" y2=\"233.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"233.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"184\" y1=\"50\" x2=\"484\" y2=\"83.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"51.4\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"60.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 0</text><line x1=\"184\" y1=\"64.4\" x2=\"484\" y2=\"98\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"65.8\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"74.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 1</text><line x1=\"184\" y1=\"78.8\" x2=\"484\" y2=\"112.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"80.2\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"89.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 2</text><line x1=\"184\" y1=\"93.2\" x2=\"484\" y2=\"126.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"94.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"103.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 3</text><line x1=\"484\" y1=\"83.6\" x2=\"184\" y2=\"117.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"85\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"94\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 0</text><line x1=\"484\" y1=\"98\" x2=\"184\" y2=\"131.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"99.4\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"108.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 1</text><line x1=\"484\" y1=\"112.4\" x2=\"184\" y2=\"146\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"113.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"122.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"484\" y1=\"126.8\" x2=\"184\" y2=\"160.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"128.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"137.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3</text><line x1=\"184\" y1=\"122\" x2=\"484\" y2=\"155.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"123.4\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"132.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 4</text><line x1=\"184\" y1=\"136.4\" x2=\"484\" y2=\"170\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2c5d8f)\"/><rect x=\"268.1\" y=\"137.8\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"286\" y=\"146.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 5</text><line x1=\"484\" y1=\"155.6\" x2=\"184\" y2=\"189.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"157\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 4</text><line x1=\"484\" y1=\"170\" x2=\"184\" y2=\"203.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mu-2f7a4f)\"/><rect x=\"360.6\" y=\"171.4\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"382\" y=\"180.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 5</text><text x=\"174\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">window [0 1 2 3]</text><text x=\"174\" y=\"117.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">ACK 0 → [1 2 3 4], send 4</text><text x=\"174\" y=\"131.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">ACK 1 → [2 3 4 5], send 5</text><text x=\"174\" y=\"203.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">all 6 acknowledged</text><text x=\"334\" y=\"252.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">(i) No loss</text></svg>",
      "alt": "(i) No loss"
     },
     "Window movement: [0 1 2 3] → ACK 0 → [1 2 3 4] (send 4) → ACK 1 → [2 3 4 5] (send 5) → ACKs 2–5 → done."
    ]
   ],
   [
    "(ii) SN 1 lost",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 757.6 396\" width=\"757.6\" height=\"396\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mv-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mv-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"178.8\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"228.8\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"228.8\" y1=\"33\" x2=\"228.8\" y2=\"368\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"478.8\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"528.8\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"528.8\" y1=\"33\" x2=\"528.8\" y2=\"368\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"368\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"228.8\" y1=\"50\" x2=\"528.8\" y2=\"83.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"312.9\" y=\"51.4\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"60.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 0</text><line x1=\"228.8\" y1=\"64.4\" x2=\"414.8\" y2=\"85.2\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"407.8\" y1=\"78.2\" x2=\"421.8\" y2=\"92.2\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"407.8\" y1=\"92.2\" x2=\"421.8\" y2=\"78.2\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"300.9\" y=\"64.5\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"318.8\" y=\"73.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">SN 1</text><line x1=\"228.8\" y1=\"78.8\" x2=\"528.8\" y2=\"112.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"312.9\" y=\"80.2\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"89.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 2</text><line x1=\"228.8\" y1=\"93.2\" x2=\"528.8\" y2=\"126.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"312.9\" y=\"94.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"103.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 3</text><line x1=\"528.8\" y1=\"83.6\" x2=\"228.8\" y2=\"117.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"85\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"94\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 0</text><line x1=\"528.8\" y1=\"112.4\" x2=\"228.8\" y2=\"146\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"113.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"122.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"528.8\" y1=\"126.8\" x2=\"228.8\" y2=\"160.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"128.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"137.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3</text><line x1=\"228.8\" y1=\"122\" x2=\"528.8\" y2=\"155.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"312.9\" y=\"123.4\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"132.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 4</text><line x1=\"528.8\" y1=\"155.6\" x2=\"228.8\" y2=\"189.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"157\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 4</text><line x1=\"228.8\" y1=\"198.8\" x2=\"528.8\" y2=\"232.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"281.6\" y=\"200.2\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"209.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 1 (resent)</text><line x1=\"528.8\" y1=\"232.4\" x2=\"228.8\" y2=\"266\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"233.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"242.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 1</text><line x1=\"228.8\" y1=\"270.8\" x2=\"528.8\" y2=\"304.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2c5d8f)\"/><rect x=\"312.9\" y=\"272.2\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"330.8\" y=\"281.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SN 5</text><line x1=\"528.8\" y1=\"304.4\" x2=\"228.8\" y2=\"338\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mv-2f7a4f)\"/><rect x=\"405.4\" y=\"305.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.79999999999995\" y=\"314.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 5</text><text x=\"218.8\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">window [0 1 2 3]</text><text x=\"218.8\" y=\"117.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">ACK 0 → [1 2 3 4], send 4</text><text x=\"218.8\" y=\"160.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">2, 3, 4 acked; base stuck at 1</text><text x=\"218.8\" y=\"194\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timer(1) expires → resend 1 only</text><text x=\"218.8\" y=\"266\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">ACK 1 → [5 6 7 8], send 5</text><text x=\"538.8\" y=\"112.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">2 buffered</text><text x=\"538.8\" y=\"126.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">3 buffered</text><text x=\"538.8\" y=\"232.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">deliver 1, 2, 3, 4</text><text x=\"378.8\" y=\"387\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">(ii) Second frame (SN 1) lost</text></svg>",
      "alt": "(ii) Second frame (SN 1) lost"
     },
     "Frames 2, 3, 4 arrive out of order; the receiver buffers and acknowledges them individually.",
     "Only frame 1’s timer expires, so only SN 1 is retransmitted (Go-Back-N would resend 1, 2, 3, 4).",
     "When ACK 1 arrives the window jumps past 1–4 and SN 5 is sent."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Selective Repeat ARQ"
  ]
 },
 "386049bf612fd0f7": {
  "sections": [
   [
    "(i) Block",
    [
     "128.64.0.0/24 → 2⁸ = 256 addresses: 128.64.0.0 – 128.64.0.255."
    ]
   ],
   [
    "(ii) Per business unit",
    [
     "120 → 128 (/25), 60 → 64 (/26), 30 → 32 (/27) — largest first.",
     {
      "table": {
       "head": [
        "Unit",
        "Needs",
        "Block",
        "CIDR",
        "Mask",
        "Range"
       ],
       "rows": [
        [
         "Engineering",
         120,
         128,
         "128.64.0.0/25",
         "255.255.255.128",
         "128.64.0.0 – 128.64.0.127"
        ],
        [
         "Finance",
         60,
         64,
         "128.64.0.128/26",
         "255.255.255.192",
         "128.64.0.128 – 128.64.0.191"
        ],
        [
         "Administration",
         30,
         32,
         "128.64.0.192/27",
         "255.255.255.224",
         "128.64.0.192 – 128.64.0.223"
        ]
       ]
      }
     },
     "If the counts are hosts (needing network + broadcast too), 120 + 2 and 60 + 2 still fit 128 and 64, but 30 + 2 = 32 exactly fills a /27."
    ]
   ],
   [
    "(iii) Unallocated",
    [
     "128.64.0.224 – 128.64.0.255 = 32 addresses (a /27) remain for future use.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"300.0\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"170\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Engineering</text><text x=\"170\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">128.64.0.0/25</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">128.64.0.0</text><rect x=\"320.0\" y=\"30\" width=\"150.0\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"395\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Finance</text><text x=\"395\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">128.64.0.128/26</text><line x1=\"320\" y1=\"76\" x2=\"320\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"322\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">128.64.0.128</text><rect x=\"470.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"507.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Administration</text><text x=\"507.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">128.64.0.192/27</text><line x1=\"470\" y1=\"76\" x2=\"470\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"472\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">128.64.0.192</text><rect x=\"545.0\" y=\"30\" width=\"75.0\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"582.5\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"582.5\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">128.64.0.224/27</text><line x1=\"545\" y1=\"76\" x2=\"545\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"547\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">128.64.0.224</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">128.64.0.0/24</text></svg>",
      "alt": "128.64.0.0/24"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126"
  ]
 },
 "59513dcc3730b54a": {
  "sections": [
   [
    "Topology",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 360\" width=\"600\" height=\"360\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"172,35 254,35\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"150,48 90,85\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"428,35 346,35\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"450,48 510,85\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"300,87 300,50\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"300,113 300,150\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"90,152 90,115\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"112,165 254,165\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"90,178 90,220\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"510,152 510,115\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"488,165 346,165\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"510,178 510,220\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"300,222 300,180\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"300,248 300,285\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"90,287 90,250\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"112,300 254,300\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"488,300 346,300\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"510,287 510,250\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><ellipse cx=\"300\" cy=\"35\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"300\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">16.0.0.0</text><ellipse cx=\"90\" cy=\"100\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"90\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">15.0.0.0</text><ellipse cx=\"510\" cy=\"100\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"510\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">10.0.0.0</text><ellipse cx=\"300\" cy=\"165\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"300\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">13.0.0.0</text><ellipse cx=\"90\" cy=\"235\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"90\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">14.0.0.0</text><ellipse cx=\"510\" cy=\"235\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"510\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">11.0.0.0</text><ellipse cx=\"300\" cy=\"300\" rx=\"46\" ry=\"15\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"300\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">12.0.0.0</text><rect x=\"128\" y=\"22\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R6</text><rect x=\"428\" y=\"22\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"450\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R7</text><rect x=\"278\" y=\"87\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"100\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R5</text><rect x=\"68\" y=\"152\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"90\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R2</text><rect x=\"488\" y=\"152\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R8</text><rect x=\"278\" y=\"222\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R3</text><rect x=\"68\" y=\"287\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"90\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R1</text><rect x=\"488\" y=\"287\" width=\"44\" height=\"26\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">R4</text><text x=\"300\" y=\"352\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Fig. 2 redrawn: routers (boxes) and the networks they join</text></svg>",
      "alt": "Fig. 2 redrawn: routers (boxes) and the networks they join"
     },
     "R1 is attached to 14.0.0.0 (shared with R2) and 12.0.0.0 (shared with R3 and R4). R1’s RIP neighbours are therefore R2 (14.0.0.2), R3 (12.0.0.2) and R4 (12.0.0.1)."
    ]
   ],
   [
    "Initial table of R1",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Hop count",
        "Next hop"
       ],
       "rows": [
        [
         "12.0.0.0",
         "1",
         "— (direct)"
        ],
        [
         "14.0.0.0",
         "1",
         "— (direct)"
        ]
       ]
      },
      "caption": "Initial table of R1 — only its directly connected networks"
     }
    ]
   ],
   [
    "RIP process",
    [
     "Every 30 s (and on change) each router multicasts a RIP response containing its table (destination network, hop count) to its neighbours.",
     "Round 1: R1 hears R2 {13: 1, 14: 1, 15: 1}, R3 {12: 1, 13: 1}, R4 {11: 1, 12: 1}. It adds 1 to each hop count and keeps new or cheaper entries → 15 (2, via R2), 13 (2, via R3), 11 (2, via R4).",
     "Round 2: neighbours now also know two-hop networks (R2: 16 via R6 = 2, R4: 10 via R8 = 2), so R1 adds 16 (3, via R2) and 10 (3, via R4). Nothing changes after this — converged.",
     "Rules: equal cost from a different neighbour is ignored (first learned kept); a worse cost from the current next hop is accepted (it is the route actually in use); 16 = unreachable.",
     "Timers: periodic 30 s (25–35 s randomised), expiration 180 s, garbage collection 120 s.",
     {
      "img": "scans/networks/notes/m5-018-028.webp",
      "caption": "RIP timers (notes p. 18)",
      "alt": "RIP timers (notes p. 18)"
     }
    ]
   ],
   [
    "Final routing table of R1",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Hop count",
        "Next hop",
        "Learned"
       ],
       "rows": [
        [
         "10.0.0.0",
         "3",
         "12.0.0.1 (R4)",
         "round 2 (R4 learns it from R8)"
        ],
        [
         "11.0.0.0",
         "2",
         "12.0.0.1 (R4)",
         "round 1"
        ],
        [
         "12.0.0.0",
         "1",
         "direct",
         "initial"
        ],
        [
         "13.0.0.0",
         "2",
         "12.0.0.2 (R3)",
         "round 1 (R2 offers the same 2)"
        ],
        [
         "14.0.0.0",
         "1",
         "direct",
         "initial"
        ],
        [
         "15.0.0.0",
         "2",
         "14.0.0.2 (R2)",
         "round 1"
        ],
        [
         "16.0.0.0",
         "3",
         "14.0.0.2 (R2)",
         "round 2 (via R6; also 3 via R3→R5)"
        ]
       ]
      },
      "caption": "Final RIP table of R1 (hop count counts networks to cross, direct = 1)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 17–19 (RIP)",
   "Module 5 slides 76–85 (RIP example)"
  ]
 },
 "6ed1455c23294d5d": {
  "sections": [
   [
    "How TCP controls congestion",
    [
     "TCP keeps a congestion window cwnd; the sender may have min(cwnd, rwnd) bytes unacknowledged. Congestion is inferred from loss: a timeout (severe) or three duplicate ACKs (mild).",
     {
      "table": {
       "head": [
        "Phase / event",
        "Rule",
        "Effect on cwnd"
       ],
       "rows": [
        [
         "Slow start (cwnd < ssthresh)",
         "cwnd += 1 MSS per ACK",
         "Doubles every RTT (exponential)"
        ],
        [
         "Congestion avoidance (cwnd ≥ ssthresh)",
         "cwnd += 1 MSS per RTT (additive increase)",
         "Linear growth"
        ],
        [
         "3 duplicate ACKs (mild congestion)",
         "ssthresh = cwnd/2; cwnd = ssthresh (+3) — fast retransmit / fast recovery (Reno)",
         "Halves; continue linearly"
        ],
        [
         "Timeout (severe congestion)",
         "ssthresh = cwnd/2; cwnd = 1 MSS",
         "Restart slow start"
        ]
       ]
      }
     },
     "This additive-increase / multiplicative-decrease (AIMD) behaviour probes for bandwidth, backs off on loss and shares the bottleneck fairly between flows."
    ]
   ],
   [
    "Interpreting Fig. 3 (values read from the plot)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 330\" width=\"640\" height=\"330\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"65.61904761904762\" y=\"18\" width=\"95.33333333333334\" height=\"268\" fill=\"#e9f2df\" opacity=\"0.55\"/><text x=\"113.28571428571429\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">SS</text><rect x=\"160.95238095238096\" y=\"18\" width=\"272.38095238095235\" height=\"268\" fill=\"#f2efe0\" opacity=\"0.55\"/><text x=\"297.1428571428571\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">congestion avoidance</text><rect x=\"433.3333333333333\" y=\"18\" width=\"108.9523809523809\" height=\"268\" fill=\"#e9f2df\" opacity=\"0.55\"/><text x=\"487.80952380952374\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">SS</text><rect x=\"542.2857142857142\" y=\"18\" width=\"68.09523809523819\" height=\"268\" fill=\"#f2efe0\" opacity=\"0.55\"/><text x=\"576.3333333333333\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">CA</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"286\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><line x1=\"52\" y1=\"232.4\" x2=\"624\" y2=\"232.4\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"232.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">5</text><line x1=\"52\" y1=\"178.8\" x2=\"624\" y2=\"178.8\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"178.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><line x1=\"52\" y1=\"125.2\" x2=\"624\" y2=\"125.2\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"125.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">15</text><line x1=\"52\" y1=\"71.6\" x2=\"624\" y2=\"71.6\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"71.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">20</text><line x1=\"52\" y1=\"18\" x2=\"624\" y2=\"18\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"18\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">25</text><text x=\"52\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><text x=\"188.19047619047618\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">5</text><text x=\"324.38095238095235\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><text x=\"460.57142857142856\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">15</text><text x=\"596.7619047619047\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">20</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><polyline points=\"79.2,264.6 106.5,243.1 133.7,200.2 161,114.5 188.2,103.8 215.4,93 242.7,82.3 269.9,71.6 297.1,60.9 324.4,50.2 351.6,168.1 378.9,157.4 406.1,146.6 433.3,135.9 460.6,275.3 487.8,264.6 515,243.1 542.3,211 569.5,200.2 596.8,189.5\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"2\"/><circle cx=\"79.2\" cy=\"264.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"106.5\" cy=\"243.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"133.7\" cy=\"200.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"161\" cy=\"114.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"188.2\" cy=\"103.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"215.4\" cy=\"93\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"242.7\" cy=\"82.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"269.9\" cy=\"71.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"297.1\" cy=\"60.9\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"324.4\" cy=\"50.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"351.6\" cy=\"168.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"378.9\" cy=\"157.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"406.1\" cy=\"146.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"433.3\" cy=\"135.9\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"460.6\" cy=\"275.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"487.8\" cy=\"264.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"515\" cy=\"243.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"542.3\" cy=\"211\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"569.5\" cy=\"200.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"596.8\" cy=\"189.5\" r=\"3\" fill=\"#2c5d8f\"/><rect x=\"115.5\" y=\"89.5\" width=\"90.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160.95238095238096\" y=\"98.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">ssthresh = 16</text><rect x=\"288.5\" y=\"55.2\" width=\"71.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.38095238095235\" y=\"64.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">3 dup ACKs</text><rect x=\"407\" y=\"140.9\" width=\"52.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"433.3333333333333\" y=\"149.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">timeout</text><text x=\"338\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Transmission round</text><text x=\"14\" y=\"152\" transform=\"rotate(-90 14 152)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#52615a\">cwnd (MSS)</text></svg>",
      "alt": "Chart"
     },
     {
      "table": {
       "head": [
        "Rounds",
        "What happens"
       ],
       "rows": [
        [
         "1 → 4",
         "Slow start: cwnd doubles 2 → 4 → 8 → 16. Initial ssthresh = 16"
        ],
        [
         "4 → 10",
         "Congestion avoidance: +1 MSS per round, 16 → 22"
        ],
        [
         "After 10",
         "Loss detected by 3 duplicate ACKs: ssthresh = 22/2 = 11, cwnd = 11 (TCP Reno fast recovery — no slow start)"
        ],
        [
         "11 → 14",
         "Congestion avoidance again: 11 → 14"
        ],
        [
         "After 14",
         "Timeout: ssthresh = 14/2 = 7, cwnd = 1 MSS"
        ],
        [
         "15 → 18",
         "Slow start 1 → 2 → 4, capped at ssthresh 7"
        ],
        [
         "18 → 20",
         "Congestion avoidance 7 → 8 → 9"
        ]
       ]
      }
     },
     "(The question’s caption swaps the axes: cwnd is on the y-axis and the transmission round on the x-axis.)"
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)"
  ]
 },
 "f399bee585a48709": {
  "sections": [
   [
    "(a) HTTP transaction",
    [
     "A transaction is one request message from client to server and one response message back. Request = request line (method, URL, version) + headers + blank line + optional body. Response = status line (version, status code, phrase) + headers + blank line + body.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 787 198\" width=\"787\" height=\"198\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2h-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2h-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"144\" y=\"8\" width=\"131.2\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"209.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client (browser)</text><line x1=\"209.6\" y1=\"33\" x2=\"209.6\" y2=\"170\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"459.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"509.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Server</text><line x1=\"509.6\" y1=\"33\" x2=\"509.6\" y2=\"170\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"170\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"209.6\" y1=\"50\" x2=\"509.6\" y2=\"86\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2h-2c5d8f)\"/><rect x=\"210.2\" y=\"52.2\" width=\"202.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"311.6\" y=\"61.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">GET /usr/bin/image1 HTTP/1.1</text><line x1=\"509.6\" y1=\"98\" x2=\"209.6\" y2=\"134\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2h-2f7a4f)\"/><rect x=\"327\" y=\"100.2\" width=\"161.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"407.6\" y=\"109.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">HTTP/1.1 200 OK + body</text><text x=\"199.60000000000002\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Accept: image/gif, image/jpeg</text><text x=\"519.6\" y=\"98\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Content-Type: image/gif, Content-Length</text><text x=\"393.5\" y=\"189\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">(i) Retrieve a document — GET</text></svg>",
      "alt": "(i) Retrieve a document — GET"
     },
     "Example request: GET /usr/bin/image1 HTTP/1.1 · Accept: image/gif · Accept: image/jpeg. Response: HTTP/1.1 200 OK · Date · Server · MIME-version · Content-Type: image/gif · Content-Length · (image data).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 885.6 198\" width=\"885.6\" height=\"198\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2i-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2i-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"227.2\" y=\"8\" width=\"131.2\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"292.8\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client (browser)</text><line x1=\"292.8\" y1=\"33\" x2=\"292.8\" y2=\"170\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"542.8\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"592.8\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Server</text><line x1=\"592.8\" y1=\"33\" x2=\"592.8\" y2=\"170\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"170\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"292.8\" y1=\"50\" x2=\"592.8\" y2=\"86\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2i-2c5d8f)\"/><rect x=\"265.5\" y=\"52.2\" width=\"258.6\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"394.8\" y=\"61.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">POST /cgi-bin/doc.pl HTTP/1.1 + body</text><line x1=\"592.8\" y1=\"98\" x2=\"292.8\" y2=\"134\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2i-2f7a4f)\"/><rect x=\"403.3\" y=\"100.2\" width=\"175\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"490.79999999999995\" y=\"109.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">HTTP/1.1 200 OK (result)</text><text x=\"282.8\" y=\"50\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Content-Type, Content-Length; data in body</text><text x=\"442.8\" y=\"189\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">(ii) Send data to the server — POST</text></svg>",
      "alt": "(ii) Send data to the server — POST"
     },
     "Example: POST /cgi-bin/doc.pl HTTP/1.1 · Content-Type, Content-Length · (form data). The server runs the program with the data and returns the result document. (PUT is used to upload a whole document.)"
    ]
   ],
   [
    "(b) Transport service and connection modes",
    [
     "HTTP uses TCP (well-known port 80; HTTPS 443) for reliable, ordered delivery.",
     {
      "table": {
       "head": [
        "Mode",
        "Working",
        "Cost"
       ],
       "rows": [
        [
         "Non-persistent (HTTP/1.0)",
         "A new TCP connection for every object: open, request, response, close",
         "2 RTT + transfer time per object; heavy server load"
        ],
        [
         "Persistent (HTTP/1.1 default)",
         "One TCP connection stays open for several requests/responses; closed on request or timeout",
         "1 RTT per object after the first; less overhead"
        ],
        [
         "Persistent with pipelining",
         "Client sends several requests without waiting for each response",
         "≈ 1 RTT for all referenced objects"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 150–186 (HTTP)"
  ]
 },
 "533e0057c390a96a": {
  "sections": [
   [
    "Suggested topology: tree (hierarchical star / star of stars)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 290\" width=\"640\" height=\"290\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"320,45 320,80\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 110,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 320,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 530,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"110,185 35,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 65,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 95,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 125,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 155,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 185,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 245,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 275,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 305,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 335,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 365,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 395,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 455,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 485,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 515,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 545,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 575,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 605,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><rect x=\"245\" y=\"15\" width=\"150\" height=\"30\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router + firewall</text><rect x=\"255\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch</text><rect x=\"50\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"110\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 1 switch</text><rect x=\"260\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 2 switch</text><rect x=\"470\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"530\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 3 switch</text><rect x=\"23\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"35\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"53\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"65\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"83\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"95\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"113\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"125\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"143\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"155\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"173\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"185\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"233\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"245\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"263\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"275\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"293\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"305\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"323\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"335\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"353\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"365\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"383\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"395\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"443\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"455\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"473\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"485\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"503\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"515\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"533\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"545\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"563\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"575\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"593\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"605\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><text x=\"320\" y=\"280\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">S = scientist, E = engineer · each team is its own star/VLAN</text></svg>",
      "alt": "Diagram"
     },
     "Each scientist and their 5 engineers form a separate star on their own switch (one VLAN per project). The three team switches connect in a star to a core switch, which reaches outside networks only through a router with a firewall."
    ]
   ],
   [
    "Justification",
    [
     "Confidentiality: each project’s traffic stays inside its own switch/VLAN; inter-team traffic must pass the core where access-control lists decide what is allowed — teams cannot see each other’s data.",
     "Reliability: a cable fault affects only one device; a team-switch fault affects only that team.",
     "Manageability and cost: 18 links + 3 uplinks, cheap to cable, easy to monitor centrally, easy to add engineers.",
     "Why not others: bus/ring share one medium (every station sees all traffic — poor for secrecy; one break stops all); full mesh of 18 devices needs 153 links.",
     "(Optional for higher resilience: dual uplinks from each team switch to two core switches.)"
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8"
  ]
 },
 "a59ee85f5f8db185": {
  "sections": [
   [
    "Protocols to know",
    [
     {
      "table": {
       "head": [
        "Protocol",
        "Layer",
        "Port",
        "Purpose"
       ],
       "rows": [
        [
         "HTTP / HTTPS",
         "Application",
         "80 / 443 (TCP)",
         "Web: request–response transfer of pages and APIs; HTTPS adds TLS encryption"
        ],
        [
         "DNS",
         "Application",
         "53 (UDP, TCP for large replies)",
         "Translates domain names into IP addresses"
        ],
        [
         "SMTP",
         "Application",
         "25 / 587 (TCP)",
         "Sends and relays e-mail between clients and mail servers"
        ],
        [
         "FTP",
         "Application",
         "21 control, 20 data (TCP)",
         "File transfer with separate control and data connections"
        ],
        [
         "TCP",
         "Transport",
         "—",
         "Connection-oriented, reliable, ordered byte stream with flow and congestion control"
        ],
        [
         "UDP",
         "Transport",
         "—",
         "Connectionless, unreliable, low-overhead datagrams (DNS, streaming, VoIP)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Point",
    [
     "Any four with their purpose answer the question; pairing application protocols with the transport they use (HTTP/SMTP/FTP over TCP, DNS mostly over UDP) shows understanding of both layers."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 22–66 (UDP, TCP)",
   "Module 7 slides (DNS, HTTP, SMTP, FTP)"
  ]
 },
 "3861f7a70bfea468": {
  "sections": [
   [
    "Delay of each datagram",
    [
     "Delay = propagation (path length / 2 × 10⁸ m/s) + sum of the delays of the switches visited (5, 10, 15, 10, 20 ms for switches 1–5).",
     {
      "table": {
       "head": [
        "Datagram",
        "Path length",
        "Propagation",
        "Switches",
        "Switch delay",
        "Total delay"
       ],
       "rows": [
        [
         1,
         "3200 km",
         "16 ms",
         "1, 3, 5",
         "40 ms",
         "56 ms"
        ],
        [
         2,
         "11700 km",
         "58.5 ms",
         "1, 2, 5",
         "35 ms",
         "93.5 ms"
        ],
        [
         3,
         "12200 km",
         "61 ms",
         "1, 2, 3, 5",
         "50 ms",
         "111 ms"
        ],
        [
         4,
         "10200 km",
         "51 ms",
         "1, 4, 5",
         "35 ms",
         "86 ms"
        ],
        [
         5,
         "10700 km",
         "53.5 ms",
         "1, 4, 3, 5",
         "50 ms",
         "103.5 ms"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Order of arrival",
    [
     "Sent one after another (transmission time ignored), they arrive in the order 1, 4, 2, 5, 3 — not the sending order 1–5.",
     "This is typical of the datagram approach: each packet takes its own route, so the destination (transport layer) must reorder them.",
     {
      "img": "scans/networks/notes/m2-006-005.webp",
      "caption": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)",
      "alt": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "e3ea8159ae2fbabb": {
  "sections": [
   [
    "Phases",
    [
     "1. Circuit establishment (setup): the caller sends a request; each switch on the route reserves a channel (time slot / frequency) on its outgoing link and passes the request on; the called party accepts and an acknowledgement returns. No data is sent before this completes.",
     "2. Data transfer: data flows over the dedicated path in both directions at the reserved rate, with no addressing or routing per bit and constant delay.",
     "3. Circuit disconnect (teardown): one party signals release; each switch frees its reserved channel so others can use it."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m2-003-002.webp",
      "caption": "Circuit-switched network: a dedicated path of channels through switches I–IV (notes p. 3)",
      "alt": "Circuit-switched network: a dedicated path of channels through switches I–IV (notes p. 3)"
     },
     {
      "img": "scans/networks/notes/m2-007-007.webp",
      "caption": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)",
      "alt": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 3–4, 7"
  ]
 },
 "43c98c60c90d6b5f": {
  "sections": [
   [
    "Answer — choose Selective Repeat",
    [
     {
      "table": {
       "head": [
        "Protocol",
        "Transmissions for 8 frames",
        "Efficiency 8/total",
        "Comment"
       ],
       "rows": [
        [
         "Stop-and-Wait",
         10,
         "80 %",
         "few retransmissions but one frame per RTT → slowest"
        ],
        [
         "Go-Back-3",
         19,
         "42.1 %",
         "pipelined, but every loss resends the whole window"
        ],
        [
         "Selective Repeat (window 3)",
         10,
         "80 %",
         "pipelined and resends only the lost frame"
        ]
       ]
      }
     },
     "Selective Repeat is the best choice: it sends the fewest frames and keeps the pipe full. Stop-and-Wait also resends little, but it waits a full round trip (plus a timeout on every loss) for each frame, so it takes far longer."
    ]
   ],
   [
    "Timing diagrams (every 4th transmission lost)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 615.2 386.40000000000003\" width=\"615.2\" height=\"386.40000000000003\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mw-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"127.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"177.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"177.6\" y1=\"33\" x2=\"177.6\" y2=\"358.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"387.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"437.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"437.6\" y1=\"33\" x2=\"437.6\" y2=\"358.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"358.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"177.6\" y1=\"50\" x2=\"437.6\" y2=\"69.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"46.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"55.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"177.6\" y1=\"74\" x2=\"437.6\" y2=\"93.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"70.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"177.6\" y1=\"98\" x2=\"437.6\" y2=\"117.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"94.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"103.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"177.6\" y1=\"122\" x2=\"338.8\" y2=\"133.9\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"126.9\" x2=\"345.8\" y2=\"140.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"140.9\" x2=\"345.8\" y2=\"126.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"117.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"126.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"177.6\" y1=\"167.6\" x2=\"437.6\" y2=\"186.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"237.6\" y=\"164.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"173.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4 (re)</text><line x1=\"177.6\" y1=\"191.6\" x2=\"437.6\" y2=\"210.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"188.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"197.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5</text><line x1=\"177.6\" y1=\"215.6\" x2=\"437.6\" y2=\"234.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"212.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"221.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6</text><line x1=\"177.6\" y1=\"239.6\" x2=\"338.8\" y2=\"251.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"244.5\" x2=\"345.8\" y2=\"258.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"258.5\" x2=\"345.8\" y2=\"244.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"235.4\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"244.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F7</text><line x1=\"177.6\" y1=\"285.2\" x2=\"437.6\" y2=\"304.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"237.6\" y=\"281.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"290.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"309.2\" x2=\"437.6\" y2=\"328.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mw-2c5d8f)\"/><rect x=\"255\" y=\"305.7\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"314.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8</text><text x=\"447.6\" y=\"69.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#1 accepted</text><text x=\"447.6\" y=\"93.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#2 accepted</text><text x=\"447.6\" y=\"117.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#3 accepted</text><text x=\"447.6\" y=\"141.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#4 lost</text><text x=\"167.60000000000002\" y=\"150.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F4</text><text x=\"447.6\" y=\"186.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#5 accepted</text><text x=\"447.6\" y=\"210.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#6 accepted</text><text x=\"447.6\" y=\"234.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#7 accepted</text><text x=\"447.6\" y=\"258.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#8 lost</text><text x=\"167.60000000000002\" y=\"268.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F7</text><text x=\"447.6\" y=\"304.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#9 accepted</text><text x=\"447.6\" y=\"328.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#10 accepted</text><text x=\"307.6\" y=\"377.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Stop-and-Wait: 10 transmissions</text></svg>",
      "alt": "Stop-and-Wait: 10 transmissions"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 642.4 645.5999999999999\" width=\"642.4\" height=\"645.5999999999999\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mx-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"127.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"177.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"177.6\" y1=\"33\" x2=\"177.6\" y2=\"617.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"387.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"437.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"437.6\" y1=\"33\" x2=\"437.6\" y2=\"617.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"617.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"177.6\" y1=\"50\" x2=\"437.6\" y2=\"69.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"46.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"55.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"177.6\" y1=\"74\" x2=\"437.6\" y2=\"93.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"70.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"177.6\" y1=\"98\" x2=\"437.6\" y2=\"117.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"94.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"103.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"177.6\" y1=\"122\" x2=\"338.8\" y2=\"133.9\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"126.9\" x2=\"345.8\" y2=\"140.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"140.9\" x2=\"345.8\" y2=\"126.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"117.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"126.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"177.6\" y1=\"146\" x2=\"437.6\" y2=\"165.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"142.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"151.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5</text><line x1=\"177.6\" y1=\"170\" x2=\"437.6\" y2=\"189.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"166.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6</text><line x1=\"177.6\" y1=\"215.6\" x2=\"437.6\" y2=\"234.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"212.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"221.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4 (re)</text><line x1=\"177.6\" y1=\"239.6\" x2=\"338.8\" y2=\"251.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"244.5\" x2=\"345.8\" y2=\"258.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"258.5\" x2=\"345.8\" y2=\"244.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"227.2\" y=\"235.4\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"244.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F5 (re)</text><line x1=\"177.6\" y1=\"263.6\" x2=\"437.6\" y2=\"282.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"260.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"269.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6 (re)</text><line x1=\"177.6\" y1=\"287.6\" x2=\"437.6\" y2=\"306.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"284.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"293.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7</text><line x1=\"177.6\" y1=\"333.2\" x2=\"437.6\" y2=\"352.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"329.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"338.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5 (re)</text><line x1=\"177.6\" y1=\"357.2\" x2=\"338.8\" y2=\"369.1\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"362.1\" x2=\"345.8\" y2=\"376.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"376.1\" x2=\"345.8\" y2=\"362.1\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"227.2\" y=\"353\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"362\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F6 (re)</text><line x1=\"177.6\" y1=\"381.2\" x2=\"437.6\" y2=\"400.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"377.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"386.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"405.2\" x2=\"437.6\" y2=\"424.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"255\" y=\"401.7\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"410.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8</text><line x1=\"177.6\" y1=\"450.8\" x2=\"437.6\" y2=\"470\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"447.3\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"456.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6 (re)</text><line x1=\"177.6\" y1=\"474.8\" x2=\"338.8\" y2=\"486.7\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"479.7\" x2=\"345.8\" y2=\"493.7\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"493.7\" x2=\"345.8\" y2=\"479.7\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"227.2\" y=\"470.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"479.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"498.8\" x2=\"437.6\" y2=\"518\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"495.3\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"504.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8 (re)</text><line x1=\"177.6\" y1=\"544.4\" x2=\"437.6\" y2=\"563.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"540.9\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"549.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><line x1=\"177.6\" y1=\"568.4\" x2=\"437.6\" y2=\"587.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mx-2c5d8f)\"/><rect x=\"237.6\" y=\"564.9\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"573.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8 (re)</text><text x=\"447.6\" y=\"69.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#1 accepted</text><text x=\"447.6\" y=\"93.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#2 accepted</text><text x=\"447.6\" y=\"117.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#3 accepted</text><text x=\"447.6\" y=\"141.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#4 lost</text><text x=\"447.6\" y=\"165.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#5 discarded (out of order)</text><text x=\"447.6\" y=\"189.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#6 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"198.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F4</text><text x=\"447.6\" y=\"234.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#7 accepted</text><text x=\"447.6\" y=\"258.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#8 lost</text><text x=\"447.6\" y=\"282.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#9 discarded (out of order)</text><text x=\"447.6\" y=\"306.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#10 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"316.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F5</text><text x=\"447.6\" y=\"352.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#11 accepted</text><text x=\"447.6\" y=\"376.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#12 lost</text><text x=\"447.6\" y=\"400.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#13 discarded (out of order)</text><text x=\"447.6\" y=\"424.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#14 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"434\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F6</text><text x=\"447.6\" y=\"470\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#15 accepted</text><text x=\"447.6\" y=\"494\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#16 lost</text><text x=\"447.6\" y=\"518\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#17 discarded (out of order)</text><text x=\"167.60000000000002\" y=\"527.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F7</text><text x=\"447.6\" y=\"563.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#18 accepted</text><text x=\"447.6\" y=\"587.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#19 accepted</text><text x=\"321.2\" y=\"636.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Go-Back-3: 19 transmissions</text></svg>",
      "alt": "Go-Back-3: 19 transmissions"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 615.2 386.40000000000003\" width=\"615.2\" height=\"386.40000000000003\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"my-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker></defs><rect x=\"127.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"177.60000000000002\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sender</text><line x1=\"177.6\" y1=\"33\" x2=\"177.6\" y2=\"358.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"387.6\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"437.6\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Receiver</text><line x1=\"437.6\" y1=\"33\" x2=\"437.6\" y2=\"358.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"358.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"177.6\" y1=\"50\" x2=\"437.6\" y2=\"69.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"46.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"55.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"177.6\" y1=\"74\" x2=\"437.6\" y2=\"93.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"70.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"79.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"177.6\" y1=\"98\" x2=\"437.6\" y2=\"117.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"94.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"103.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"177.6\" y1=\"122\" x2=\"338.8\" y2=\"133.9\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"126.9\" x2=\"345.8\" y2=\"140.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"140.9\" x2=\"345.8\" y2=\"126.9\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"117.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"126.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"177.6\" y1=\"146\" x2=\"437.6\" y2=\"165.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"142.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"151.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F5</text><line x1=\"177.6\" y1=\"170\" x2=\"437.6\" y2=\"189.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"166.5\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"175.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F6</text><line x1=\"177.6\" y1=\"215.6\" x2=\"437.6\" y2=\"234.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"237.6\" y=\"212.1\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"221.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4 (re)</text><line x1=\"177.6\" y1=\"239.6\" x2=\"338.8\" y2=\"251.5\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"331.8\" y1=\"244.5\" x2=\"345.8\" y2=\"258.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"331.8\" y1=\"258.5\" x2=\"345.8\" y2=\"244.5\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"244.6\" y=\"235.4\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"255.60000000000002\" y=\"244.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F7</text><line x1=\"177.6\" y1=\"263.6\" x2=\"437.6\" y2=\"282.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"255\" y=\"260.1\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"269.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F8</text><line x1=\"177.6\" y1=\"309.2\" x2=\"437.6\" y2=\"328.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#my-2c5d8f)\"/><rect x=\"237.6\" y=\"305.7\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"266\" y=\"314.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F7 (re)</text><text x=\"447.6\" y=\"69.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#1 accepted</text><text x=\"447.6\" y=\"93.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#2 accepted</text><text x=\"447.6\" y=\"117.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#3 accepted</text><text x=\"447.6\" y=\"141.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#4 lost</text><text x=\"447.6\" y=\"165.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#5 buffered</text><text x=\"447.6\" y=\"189.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#6 buffered</text><text x=\"167.60000000000002\" y=\"198.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F4</text><text x=\"447.6\" y=\"234.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#7 accepted</text><text x=\"447.6\" y=\"258.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">#8 lost</text><text x=\"447.6\" y=\"282.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">#9 buffered</text><text x=\"167.60000000000002\" y=\"292.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-size=\"11.5\">timeout → resend from F7</text><text x=\"447.6\" y=\"328.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">#10 accepted</text><text x=\"307.6\" y=\"377.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Selective Repeat: 10 transmissions</text></svg>",
      "alt": "Selective Repeat: 10 transmissions"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Stop-and-Wait, Go-Back-N, Selective Repeat"
  ]
 },
 "cfe0725abba61dc4": {
  "sections": [
   [
    "Answer",
    [
     "7 data bits need r parity bits with 2^r ≥ 7 + r + 1 → r = 4, so the codeword has 11 bits (parity at positions 1, 2, 4, 8). The syndrome is 7, so bit position 7 is wrong. Corrected codeword: 01011111101."
    ]
   ],
   [
    "Layout of the received word",
    [
     {
      "table": {
       "head": [
        "Position",
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Role",
         "D",
         "D",
         "D",
         "P8",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Received",
         "0",
         "1",
         "0",
         "1",
         "0",
         "1",
         "1",
         "1",
         "1",
         "0",
         "1"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Checking each parity group (even parity)",
    [
     "C1: positions 1,3,5,7,9,11 → 1⊕1⊕1⊕0⊕0⊕0 = 1\nC2: positions 2,3,6,7,10,11 → 0⊕1⊕1⊕0⊕1⊕0 = 1\nC4: positions 4,5,6,7 → 1⊕1⊕1⊕0 = 1\nC8: positions 8,9,10,11 → 1⊕0⊕1⊕0 = 0\nSyndrome (C8 C4 C2 C1) = 0111 = 7"
    ]
   ],
   [
    "Correction steps",
    [
     "1. Recompute each parity group at the receiver; a group with odd parity gives a 1 in the syndrome.",
     "2. Read the syndrome as a binary number C8C4C2C1 = 0111 = 7.",
     "3. Invert bit 7: 01010111101 → 01011111101.",
     "4. Remove the parity bits (positions 1, 2, 4, 8) to recover the 7-bit temperature value: 0101111."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 },
 "d939b15011c03636": {
  "sections": [
   [
    "Answer",
    [
     "The panic/SOS wearable (key-chain button, smart band) talks to the phone over Bluetooth (IEEE 802.15.1, usually Bluetooth Low Energy). The phone then sends the alert and GPS location over the cellular network (SMS/data)."
    ]
   ],
   [
    "Features of Bluetooth",
    [
     {
      "table": {
       "head": [
        "Feature",
        "Value"
       ],
       "rows": [
        [
         "Standard",
         "IEEE 802.15.1 — wireless PAN"
        ],
        [
         "Band",
         "2.4 GHz ISM (licence-free)"
        ],
        [
         "Access",
         "FHSS: 79 × 1 MHz channels, 1600 hops/s (BLE: 40 × 2 MHz channels)"
        ],
        [
         "Range",
         "≈ 10 m (class 2), up to 100 m (class 1)"
        ],
        [
         "Topology",
         "Piconet: 1 primary + up to 7 active secondaries; piconets join into a scatternet"
        ],
        [
         "Data rate",
         "1–3 Mbps (BR/EDR); BLE ≈ 1–2 Mbps"
        ],
        [
         "Power",
         "Very low (BLE runs for months on a coin cell)"
        ],
        [
         "Security",
         "Pairing, 128-bit AES encryption"
        ],
        [
         "Layers",
         "Radio, baseband (TDD slots), L2CAP, profiles"
        ]
       ]
      }
     },
     "Why it suits the device: tiny, battery-powered, always paired with the phone, instant connection, no infrastructure needed."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on IEEE 802.15 Bluetooth and RFID"
  ]
 },
 "d95903d6501f7dd3": {
  "sections": [
   [
    "a) Header format with the captured values",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 218\" width=\"608\" height=\"218\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Ver 4</text><rect x=\"88\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"124\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN 5</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">TOS 0x00</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Total length 0x004D = 77</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification 0xA548 = 42312</text><rect x=\"304\" y=\"56\" width=\"54\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"331\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Flags 000</text><rect x=\"358\" y=\"56\" width=\"234\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"475\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Offset 0</text><rect x=\"16\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">TTL 0x80 = 128</text><rect x=\"160\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Protocol 0x11 = UDP</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Checksum 0x0000</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source 192.168.43.127 (C0 A8 2B 7F)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination 192.168.43.1 (C0 A8 2B 01)</text><text x=\"304\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Captured IPv4 header (20 bytes, no options)</text></svg>",
      "alt": "Captured IPv4 header (20 bytes, no options)"
     },
     {
      "table": {
       "head": [
        "Field",
        "Hex",
        "Value / meaning"
       ],
       "rows": [
        [
         "Version | HLEN",
         "45",
         "4 | 5 → header = 5 × 4 = 20 bytes (no options)"
        ],
        [
         "Service type",
         "00",
         "0 → routine / best effort"
        ],
        [
         "Total length",
         "004D",
         "77 bytes → data = 77 − 20 = 57 bytes"
        ],
        [
         "Identification",
         "A548",
         "42312"
        ],
        [
         "Flags | Fragment offset",
         "0000",
         "DF = 0, MF = 0, offset = 0"
        ],
        [
         "Time to live",
         "80",
         "128 hops"
        ],
        [
         "Protocol",
         "11",
         "17 → UDP"
        ],
        [
         "Header checksum",
         "0000",
         "0000 (not filled in)"
        ],
        [
         "Source address",
         "C0 A8 2B 7F",
         "192.168.43.127"
        ],
        [
         "Destination address",
         "C0 A8 2B 01",
         "192.168.43.1"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) Fragmented or corrupted?",
    [
     "Not fragmented: flags = 000 (DF = 0, MF = 0) and offset = 0 → whole datagram.",
     "Checksum field = 0x0000, but the correct one’s-complement checksum of this header is 0xBD86. A receiver verifying it would get a non-FFFF sum and treat the header as corrupted.",
     "In practice this pattern is typical of a capture taken on the sending PC with checksum offloading: the NIC fills in the checksum after Wireshark copies the packet, so 0x0000 here does not prove corruption — Wireshark marks it ‘unverified’. (Payload: 77 − 20 = 57 bytes of UDP, e.g. a DNS query to the home router 192.168.43.1.)"
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–219"
  ]
 },
 "9b4b9c73e3f8a5ee": {
  "sections": [
   [
    "Subnet mask",
    [
     "459 hosts + 2 ≤ 2ʰ → h = 9 host bits (2⁹ − 2 = 510 ≥ 459). Fewest host bits = most subnets.",
     "Class B default /16 → borrow 16 − 9 = 7 bits → /23 → mask 255.255.254.0.",
     "Number of subnets = 2⁷ = 128, each with 510 usable hosts."
    ]
   ],
   [
    "Layout of 4 valid subnets",
    [
     {
      "table": {
       "head": [
        "",
        "CIDR",
        "Network (first) address",
        "Usable host range",
        "Broadcast"
       ],
       "rows": [
        [
         "Subnet 1",
         "172.12.0.0/23",
         "172.12.0.0",
         "172.12.0.1 – 172.12.1.254",
         "172.12.1.255"
        ],
        [
         "Subnet 2",
         "172.12.2.0/23",
         "172.12.2.0",
         "172.12.2.1 – 172.12.3.254",
         "172.12.3.255"
        ],
        [
         "Subnet 3",
         "172.12.4.0/23",
         "172.12.4.0",
         "172.12.4.1 – 172.12.5.254",
         "172.12.5.255"
        ],
        [
         "Subnet 4",
         "172.12.6.0/23",
         "172.12.6.0",
         "172.12.6.1 – 172.12.7.254",
         "172.12.7.255"
        ]
       ]
      }
     },
     "Subnets step by 2 in the third octet. (If ‘subnet zero’ is not allowed by the older convention, start from 172.12.2.0/23 instead.)"
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 61–92 (subnetting)"
  ]
 },
 "1225d3bb6125a88a": {
  "sections": [
   [
    "Answer",
    [
     "Links are undirected, so the shortest path from every node to A is the reverse of A’s shortest path to it.",
     "Shortest distances to A: B = 3 (A→B), C = 5 (A→C), D = 11 (A→C→E→D), E = 7 (A→C→E), F = 10 (A→C→E→F), G = 7 (A→B→G)."
    ]
   ],
   [
    "Dijkstra (source A)",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)",
        "D(F), p(F)",
        "D(G), p(G)"
       ],
       "rows": [
        [
         0,
         "A",
         "3, A",
         "5, A",
         "∞",
         "∞",
         "12, A",
         "∞"
        ],
        [
         1,
         "AB",
         "3, A",
         "5, A",
         "12, B",
         "10, B",
         "12, A",
         "7, B"
        ],
        [
         2,
         "ABC",
         "—",
         "5, A",
         "12, B",
         "7, C",
         "12, A",
         "7, B"
        ],
        [
         3,
         "ABCE",
         "—",
         "—",
         "11, E",
         "7, C",
         "10, E",
         "7, B"
        ],
        [
         4,
         "ABCEG",
         "—",
         "—",
         "11, E",
         "—",
         "10, E",
         "7, B"
        ],
        [
         5,
         "ABCEGF",
         "—",
         "—",
         "11, E",
         "—",
         "10, E",
         "—"
        ],
        [
         6,
         "ABCEGFD",
         "—",
         "—",
         "11, E",
         "—",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         "A → B",
         3,
         "B"
        ],
        [
         "C",
         "A → C",
         5,
         "C"
        ],
        [
         "D",
         "A → C → E → D",
         11,
         "C"
        ],
        [
         "E",
         "A → C → E",
         7,
         "C"
        ],
        [
         "F",
         "A → C → E → F",
         10,
         "C"
        ],
        [
         "G",
         "A → B → G",
         7,
         "B"
        ]
       ]
      },
      "caption": "Routing table at A"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 570 340\" width=\"570\" height=\"340\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"54.7\" y1=\"136.4\" x2=\"145.3\" y2=\"83.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"92.4\" y=\"101\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"54.1\" y1=\"154.4\" x2=\"145.9\" y2=\"215.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"92.4\" y=\"176\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"160\" y1=\"92\" x2=\"160\" y2=\"208\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"152.4\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"176\" y1=\"69.3\" x2=\"284\" y2=\"30.7\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"222.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"230\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"315.2\" y1=\"32.6\" x2=\"384.8\" y2=\"67.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"338.8\" y=\"41\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"350\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">14</text><line x1=\"177\" y1=\"75\" x2=\"383\" y2=\"75\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"272.4\" y=\"66\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"280\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"174.4\" y1=\"84\" x2=\"385.6\" y2=\"216\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"219.6\" y=\"108\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"227.2\" y=\"117\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"174.4\" y1=\"216\" x2=\"385.6\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"216\" y=\"174\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"227.2\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"177\" y1=\"225\" x2=\"383\" y2=\"225\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"272.4\" y=\"216\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"280\" y=\"225\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"400\" y1=\"92\" x2=\"400\" y2=\"208\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"392.4\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"400\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"414.7\" y1=\"83.6\" x2=\"505.3\" y2=\"136.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"452.4\" y=\"101\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"460\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"414.1\" y1=\"215.6\" x2=\"505.9\" y2=\"154.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"452.4\" y=\"176\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"460\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><path d=\"M57 145 Q280 240 503 145\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"268.8\" y=\"231\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"280\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">12</text><circle cx=\"40\" cy=\"145\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"40\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"32.7\" y=\"164\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"173\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"160\" cy=\"75\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"75.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"152.7\" y=\"94\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"160\" cy=\"225\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"225.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"152.7\" y=\"244\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"253\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"300\" cy=\"25\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"25.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">G</text><rect x=\"292.7\" y=\"44\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"300\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><circle cx=\"400\" cy=\"75\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"400\" y=\"75.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"389.3\" y=\"94\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"400\" y=\"103\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">11</text><circle cx=\"400\" cy=\"225\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"400\" y=\"225.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"392.7\" y=\"244\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"400\" y=\"253\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><circle cx=\"520\" cy=\"145\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"520\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"509.3\" y=\"164\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"520\" y=\"173\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><text x=\"285\" y=\"332\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from A (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from A (green) · blue = final cost"
     }
    ]
   ],
   [
    "Notes",
    [
     "E is reached through C (5 + 2 = 7), which beats A–B–E (3 + 7 = 10).",
     "F is reached as A–C–E–F = 10, cheaper than the direct dashed link (12).",
     "D: A–C–E–D = 5 + 2 + 4 = 11 beats A–B–D = 12 and A–C–E–F–D = 13.",
     "G: only reachable through B (A–B–G = 7) or D (much longer)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "21983f84a8aafb16": {
  "sections": [
   [
    "Setting",
    [
     "Client A sends its query to its configured DNS server (here the server at abd.org) asking for the address of vit.edu. That server can resolve it in two ways."
    ]
   ],
   [
    "Recursive resolution",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 692 348.20000000000005\" width=\"692\" height=\"348.20000000000005\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2j-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2j-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"20\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client A</text><line x1=\"70\" y1=\"48\" x2=\"70\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"158\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"208\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">DNS server</text><text x=\"208\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">(abd.org)</text><line x1=\"208\" y1=\"48\" x2=\"208\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"296\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"346\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Root</text><text x=\"346\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"346\" y1=\"48\" x2=\"346\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"434\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"484\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">.edu TLD</text><text x=\"484\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"484\" y1=\"48\" x2=\"484\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"567.2\" y=\"8\" width=\"109.6\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"622\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">vit.edu</text><text x=\"622\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">authoritative</text><line x1=\"622\" y1=\"48\" x2=\"622\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"320.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"70\" y1=\"65\" x2=\"208\" y2=\"90.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2c5d8f)\"/><rect x=\"60.7\" y=\"63.6\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"116.92\" y=\"72.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">1 query vit.edu</text><line x1=\"208\" y1=\"93\" x2=\"346\" y2=\"118.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2c5d8f)\"/><rect x=\"247.4\" y=\"91.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"254.92000000000002\" y=\"100.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">2</text><line x1=\"346\" y1=\"121\" x2=\"484\" y2=\"146.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2c5d8f)\"/><rect x=\"385.4\" y=\"119.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"392.92\" y=\"128.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">3</text><line x1=\"484\" y1=\"149\" x2=\"622\" y2=\"174.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2c5d8f)\"/><rect x=\"523.4\" y=\"147.6\" width=\"15\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"530.92\" y=\"156.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">4</text><line x1=\"622\" y1=\"177\" x2=\"484\" y2=\"202.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2f7a4f)\"/><rect x=\"557.2\" y=\"175.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"575.08\" y=\"184.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">5 IP</text><line x1=\"484\" y1=\"205\" x2=\"346\" y2=\"230.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2f7a4f)\"/><rect x=\"419.2\" y=\"203.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"437.08\" y=\"212.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">6 IP</text><line x1=\"346\" y1=\"233\" x2=\"208\" y2=\"258.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2f7a4f)\"/><rect x=\"281.2\" y=\"231.6\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"299.08\" y=\"240.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">7 IP</text><line x1=\"208\" y1=\"261\" x2=\"70\" y2=\"286.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2j-2f7a4f)\"/><rect x=\"129.2\" y=\"259.6\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"161.07999999999998\" y=\"268.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">8 answer</text><text x=\"346\" y=\"339.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Recursive: each server asks the next on the requester’s behalf; the answer returns along the chain</text></svg>",
      "alt": "Recursive: each server asks the next on the requester’s behalf; the answer returns along the chain"
     },
     "abd.org’s server asks the root server; the root (acting recursively) asks the .edu server, which asks vit.edu’s authoritative server. The answer comes back along the same chain and every server caches it; finally abd.org returns the IP to A."
    ]
   ],
   [
    "Iterative resolution",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 692 348.20000000000005\" width=\"692\" height=\"348.20000000000005\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2k-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2k-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"20\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"70\" y=\"28\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client A</text><line x1=\"70\" y1=\"48\" x2=\"70\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"158\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"208\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">DNS server</text><text x=\"208\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">(abd.org)</text><line x1=\"208\" y1=\"48\" x2=\"208\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"296\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"346\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Root</text><text x=\"346\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"346\" y1=\"48\" x2=\"346\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"434\" y=\"8\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"484\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">.edu TLD</text><text x=\"484\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">server</text><line x1=\"484\" y1=\"48\" x2=\"484\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"567.2\" y=\"8\" width=\"109.6\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"622\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">vit.edu</text><text x=\"622\" y=\"35.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">authoritative</text><line x1=\"622\" y1=\"48\" x2=\"622\" y2=\"320.2\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"320.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"70\" y1=\"65\" x2=\"208\" y2=\"90.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2c5d8f)\"/><rect x=\"60.7\" y=\"63.6\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"116.92\" y=\"72.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">1 query vit.edu</text><line x1=\"208\" y1=\"93\" x2=\"346\" y2=\"118.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2c5d8f)\"/><rect x=\"226.6\" y=\"91.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"254.92000000000002\" y=\"100.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">2 query</text><line x1=\"346\" y1=\"121\" x2=\"208\" y2=\"146.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2f7a4f)\"/><rect x=\"229\" y=\"119.6\" width=\"140.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"299.08\" y=\"128.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">3 referral: ask TLD</text><line x1=\"208\" y1=\"149\" x2=\"484\" y2=\"174.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2c5d8f)\"/><rect x=\"273.5\" y=\"147.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"301.84000000000003\" y=\"156.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">4 query</text><line x1=\"484\" y1=\"177\" x2=\"208\" y2=\"202.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2f7a4f)\"/><rect x=\"316.6\" y=\"175.6\" width=\"147.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"390.15999999999997\" y=\"184.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">5 referral: ask auth</text><line x1=\"208\" y1=\"205\" x2=\"622\" y2=\"230.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2c5d8f)\"/><rect x=\"320.4\" y=\"203.6\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"348.76\" y=\"212.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">6 query</text><line x1=\"622\" y1=\"233\" x2=\"208\" y2=\"258.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2f7a4f)\"/><rect x=\"435.5\" y=\"231.6\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"481.24\" y=\"240.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">7 IP address</text><line x1=\"208\" y1=\"261\" x2=\"70\" y2=\"286.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2k-2f7a4f)\"/><rect x=\"97.9\" y=\"259.6\" width=\"126.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"161.07999999999998\" y=\"268.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">8 answer (cached)</text><text x=\"346\" y=\"339.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Iterative: servers return referrals; the local DNS server asks each one itself</text></svg>",
      "alt": "Iterative: servers return referrals; the local DNS server asks each one itself"
     },
     "abd.org’s server asks the root, which replies with a referral to the .edu TLD servers; it asks .edu, which refers it to vit.edu’s authoritative server; that server returns the IP. abd.org caches it and answers A. Root and TLD servers do little work."
    ]
   ],
   [
    "Comparison",
    [
     {
      "table": {
       "head": [
        "",
        "Recursive resolution",
        "Iterative resolution"
       ],
       "rows": [
        [
         "Who does the work",
         "The queried server resolves completely (asks other servers itself)",
         "The queried server returns the best referral; the asker contacts the next server"
        ],
        [
         "Reply",
         "Always the final answer (or error)",
         "Answer or a referral to another server"
        ],
        [
         "Load",
         "Heavy on upper-level servers (root/TLD would have to recurse)",
         "Light on root/TLD servers; work stays with the resolver"
        ],
        [
         "Typical use",
         "Host (stub resolver) → its local DNS server",
         "Local DNS server → root, TLD, authoritative servers"
        ],
        [
         "Caching",
         "Every server on the chain caches the answer",
         "Mainly the local server caches"
        ],
        [
         "Messages (example)",
         "Fewer for the client (1 query, 1 reply)",
         "More messages for the resolver"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 33–36 (recursive and iterative resolution)"
  ]
 },
 "abb36d5fab89cca8": {
  "sections": [
   [
    "Difference",
    [
     {
      "table": {
       "head": [
        "",
        "Open-loop (prevention)",
        "Closed-loop (removal)"
       ],
       "rows": [
        [
         "Idea",
         "Policies that stop congestion before it happens",
         "Detect congestion and react through feedback"
        ],
        [
         "Feedback",
         "None — decided in advance",
         "Yes — from network or receiver"
        ],
        [
         "Mechanisms",
         "Retransmission policy, window policy (Selective Repeat), acknowledgment policy (delayed/cumulative ACKs), discarding policy (drop less important packets), admission policy, traffic shaping (leaky/token bucket)",
         "Back-pressure, choke packets (ICMP source quench), implicit signalling (TCP sees loss/delay), explicit signalling (ECN bits, forward/backward)"
        ],
        [
         "Pros",
         "Simple, no signalling delay, predictable",
         "Adapts to actual load, uses capacity fully"
        ],
        [
         "Cons",
         "Cannot react to unexpected load; may under-use capacity",
         "Reacts after the fact; feedback delay can cause oscillation"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Two open-loop mechanisms",
    [
     "Retransmission policy: set retransmission timers and policies (e.g. Selective Repeat instead of Go-Back-N) so that retransmissions do not add unnecessary load.",
     "Admission / traffic-shaping policy: a router or virtual-circuit network refuses a new flow if its resources would be exceeded; leaky/token buckets limit the rate a source injects."
    ]
   ],
   [
    "Two closed-loop mechanisms",
    [
     "Back-pressure: a congested node stops accepting packets from its upstream neighbour, which in turn slows down — the pressure propagates back to the source.",
     "Choke packet / explicit signalling: the congested router sends a packet (or sets an ECN bit) telling the source to reduce its rate. (Implicit signalling — TCP inferring congestion from loss or delay — is another.)"
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)"
  ]
 },
 "aaf37562badc244a": {
  "sections": [
   [
    "Five cloud security measures for IoT",
    [
     {
      "table": {
       "head": [
        "Measure",
        "What it does"
       ],
       "rows": [
        [
         "1. Strong identity and access management",
         "Unique credentials/X.509 certificates per device, multi-factor authentication for users, least-privilege roles and policies"
        ],
        [
         "2. Encryption in transit and at rest",
         "TLS/DTLS from device to cloud, encrypted storage (AES-256) with managed keys (KMS/HSM)"
        ],
        [
         "3. Network segmentation and firewalls",
         "Isolate IoT devices in separate VPCs/VLANs/subnets, security groups, API gateways, rate limiting and DDoS protection"
        ],
        [
         "4. Secure device lifecycle and patching",
         "Secure boot, signed over-the-air firmware updates, removing default passwords, vulnerability scanning"
        ],
        [
         "5. Monitoring, logging and incident response",
         "Central logging (SIEM), anomaly/intrusion detection on device behaviour, alerts, backup and recovery plans"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Note",
    [
     "This question is outside the current syllabus modules; the measures follow standard cloud/IoT security practice (shared-responsibility model)."
    ]
   ]
  ],
  "sources": [
   "Outside the CN syllabus — general cloud security practice"
  ]
 },
 "d54b04d79e8e4a2b": {
  "sections": [
   [
    "a) Topology per department",
    [
     {
      "table": {
       "head": [
        "Dept",
        "Topology",
        "Cost-effectiveness",
        "Reliability",
        "Accessibility",
        "Challenges"
       ],
       "rows": [
        [
         "1 — 50 PCs, each linked to two others, one-way data",
         "Ring (unidirectional, token passing)",
         "n = 50 links; cheap",
         "Single break stops the whole ring (use dual ring / bypass)",
         "Orderly equal access by token; delay grows with 50 stations",
         "Adding/removing a PC breaks the ring; token loss handling; troubleshooting needs ring monitoring"
        ],
        [
         "2 — narrow room, one cable along the lab",
         "Bus",
         "Least cable: 1 backbone + short drop lines",
         "Backbone break or bad tap stops everyone; needs terminators",
         "Easy to attach in a narrow room",
         "Collisions and reflections; limited length and number of taps; fault isolation is hard"
        ],
        [
         "3 — research lab, must survive failures, cost not a concern",
         "Full mesh (or redundant mesh of switches)",
         "Most expensive: n(n − 1)/2 links",
         "Highest: a failed link or device does not affect others; alternative paths",
         "Dedicated links, no contention, high privacy",
         "Large number of ports and cables, complex installation and management"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Diagrams",
    [
     {
      "img": "scans/networks/notes/m1-008-006.webp",
      "caption": "Ring: each device connects to two neighbours; repeaters pass the signal around (notes p. 8)",
      "alt": "Ring: each device connects to two neighbours; repeaters pass the signal around (notes p. 8)"
     },
     {
      "img": "scans/networks/notes/m1-008-005.webp",
      "caption": "Bus: one backbone cable; devices attach with drop lines and taps (notes p. 8)",
      "alt": "Bus: one backbone cable; devices attach with drop lines and taps (notes p. 8)"
     },
     {
      "img": "scans/networks/notes/m1-007-003.webp",
      "caption": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)",
      "alt": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)"
     }
    ]
   ],
   [
    "b) Need for protocols and standards",
    [
     "Protocols are the agreed rules — syntax (format of data), semantics (meaning of each field/action) and timing (when and how fast) — without which devices could exchange bits but not understand them.",
     "Standards (de jure from ISO, IEEE, ITU-T, ANSI; de facto from widespread use; Internet RFCs from IETF) guarantee interoperability between products of different vendors, create a competitive market, lower cost and allow networks to grow and be upgraded."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8"
  ]
 },
 "260efd513bfb00ad": {
  "sections": [
   [
    "Assumptions",
    [
     "Propagation speed 2 × 10⁸ m/s (not given), 1 mile = 1.609 km, MB/KB in decimal units. Path: server → node 1 → node 2 → node 3 → server = 2 server–node links (50 mi) + 2 node–node links (400 mi)."
    ]
   ],
   [
    "i. Propagation delays per packet",
    [
     "Server ↔ node: 50 × 1609 m / 2 × 10⁸ = 0.402 ms.",
     "Node ↔ node: 400 × 1609 m / 2 × 10⁸ = 3.219 ms.",
     "Whole path: 2 × 0.402 ms + 2 × 3.219 ms = 7.242 ms."
    ]
   ],
   [
    "ii. Total time",
    [
     "Packets = 200 MB / 10 KB = 20000; each packet = 10 000 + 40 bytes = 80320 bits → transmission per link = 0.8032 ms.",
     "Pipelined store-and-forward: the source sends all 20000 packets back-to-back (16.064 s); the last packet then needs 3 more link transmissions, the propagation delay and 0.2 s processing at each of the 3 nodes:",
     "T = (20000 + 3) × 0.8032 ms + 7.242 ms + 3 × 0.2 s ≈ 16.674 s.",
     "(Textbook shortcut that ignores headers and per-hop pipelining: 200 × 8 / 100 s + 0.6 s + 7.242 ms ≈ 16.607 s.)"
    ]
   ],
   [
    "b) Circuit vs packet switching",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Circuit switching",
        "Packet switching (datagram)"
       ],
       "rows": [
        [
         "Path",
         "Dedicated end-to-end path reserved at setup",
         "No reservation; each packet routed independently"
        ],
        [
         "Phases",
         "Setup → data transfer → teardown",
         "Data transfer only (no setup)"
        ],
        [
         "Resource use",
         "Bandwidth reserved even when idle",
         "Shared on demand (statistical multiplexing)"
        ],
        [
         "Delay",
         "Setup delay, then constant low delay, no queuing",
         "Per-hop store-and-forward + variable queuing delay (jitter)"
        ],
        [
         "Ordering",
         "In order (single path)",
         "May arrive out of order"
        ],
        [
         "Addressing",
         "Only at setup",
         "Full destination address in every packet"
        ],
        [
         "Failure",
         "Path breaks → call drops",
         "Packets re-routed around failures"
        ],
        [
         "Charging",
         "By time and distance",
         "By volume (bytes/packets)"
        ],
        [
         "Congestion",
         "Calls blocked at setup",
         "Packets delayed or dropped"
        ],
        [
         "Best for",
         "Continuous, constant-rate traffic (classic voice)",
         "Bursty data (web, e-mail, file transfer)"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "32f327420a2e5d1e": {
  "sections": [
   [
    "CSMA/CD vs CSMA/CA",
    [
     {
      "table": {
       "head": [
        "Basis",
        "CSMA/CD",
        "CSMA/CA"
       ],
       "rows": [
        [
         "Used in",
         "Wired LANs (classic Ethernet, IEEE 802.3)",
         "Wireless LANs (IEEE 802.11)"
        ],
        [
         "Idea",
         "Detect collisions quickly and stop",
         "Avoid collisions before they happen"
        ],
        [
         "When it acts",
         "After a collision occurs",
         "Before transmitting"
        ],
        [
         "Mechanism",
         "Sense → send while listening → on collision send jam, abort, back off",
         "Sense → IFS → random back-off (contention window) → optional RTS/CTS → data → ACK"
        ],
        [
         "Acknowledgement",
         "None at MAC level (collision-free = success)",
         "Explicit ACK for every frame"
        ],
        [
         "Minimum frame",
         "Required (Tfr ≥ 2Tp)",
         "Not required"
        ],
        [
         "Hidden terminal",
         "Not an issue on a cable",
         "Solved with RTS/CTS + NAV"
        ],
        [
         "Efficiency",
         "High at low load; wasted time is short",
         "Overhead of IFS, back-off and ACKs"
        ]
       ]
      }
     }
    ]
   ],
   [
    "CSMA/CA working (flowchart)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 590\" width=\"520\" height=\"590\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mz-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"210,40 210,60\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,90 210,117\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,163 210,185\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"196\" y=\"165\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210\" y=\"174\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">yes</text><polyline points=\"130,140 60,140 60,103 205,103\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"49.3\" y=\"112.5\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"60\" y=\"121.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">no</text><polyline points=\"210,215 210,235\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,265 210,285\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,315 210,337\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,383 210,405\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"196\" y=\"385\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210\" y=\"394\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">yes</text><polyline points=\"290,360 410,360 410,398\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"399.3\" y=\"370\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"410\" y=\"379\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">no</text><polyline points=\"210,435 210,457\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><polyline points=\"210,503 210,535\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"196\" y=\"510\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210\" y=\"519\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">yes</text><polyline points=\"290,480 410,480 410,442\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"399.3\" y=\"452\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"410\" y=\"461\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">no</text><polyline points=\"485,420 500,420 500,250 330,250\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mz-152b24)\"/><rect x=\"479.3\" y=\"326\" width=\"41.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"500\" y=\"335\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">retry</text><rect x=\"130\" y=\"10\" width=\"160\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Station has a frame</text><rect x=\"130\" y=\"60\" width=\"160\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Set back-off stage K = 0</text><polygon points=\"210,117 290,140 210,163 130,140\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.3\"/><text x=\"210\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Channel idle?</text><rect x=\"125\" y=\"185\" width=\"170\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Wait DIFS</text><rect x=\"90\" y=\"235\" width=\"240\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"250\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Pick R in 0 … 2ᴷ − 1, wait R slots</text><rect x=\"125\" y=\"285\" width=\"170\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Send RTS</text><polygon points=\"210,337 290,360 210,383 130,360\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.3\"/><text x=\"210\" y=\"360\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">CTS received?</text><rect x=\"110\" y=\"405\" width=\"200\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"420\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Wait SIFS, send DATA</text><polygon points=\"210,457 290,480 210,503 130,480\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.3\"/><text x=\"210\" y=\"480\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">ACK received?</text><rect x=\"150\" y=\"535\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"210\" y=\"550\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Success</text><rect x=\"335\" y=\"398\" width=\"150\" height=\"44\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"410\" y=\"412.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">K = K + 1</text><text x=\"410\" y=\"427.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">(abort if K &gt; limit)</text><text x=\"60\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">keep sensing</text><text x=\"260\" y=\"582\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">CSMA/CA (DCF) flowchart</text></svg>",
      "alt": "CSMA/CA (DCF) flowchart"
     },
     "Steps: sense the channel; when idle wait DIFS; wait a random number of slots (freeze the counter if the channel becomes busy); send RTS; receiver replies CTS after SIFS; send data; wait for ACK. No ACK → increase K and retry; give up after the limit."
    ]
   ],
   [
    "Pure ALOHA working (flowchart)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 470\" width=\"560\" height=\"470\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m10-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"200,40 200,60\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><polyline points=\"200,90 200,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><polyline points=\"200,145 200,170\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><polyline points=\"200,200 200,232\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><polyline points=\"200,278 200,315\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><rect x=\"186\" y=\"287.5\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"200\" y=\"296.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">yes</text><polyline points=\"280,255 380,255 380,285\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><rect x=\"369.3\" y=\"261\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380\" y=\"270\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">no</text><polyline points=\"380,315 380,347\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><polyline points=\"380,393 380,425\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><rect x=\"366\" y=\"400\" width=\"28\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"380\" y=\"409\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">yes</text><polyline points=\"455,370 490,370 490,252\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><rect x=\"479.3\" y=\"302\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"490\" y=\"311\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">no</text><polyline points=\"490,208 490,130 285,130\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m10-152b24)\"/><rect x=\"366.8\" y=\"121\" width=\"41.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"387.5\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">retry</text><rect x=\"120\" y=\"10\" width=\"160\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Station has a frame</text><rect x=\"140\" y=\"60\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">K = 0</text><rect x=\"115\" y=\"115\" width=\"170\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Send the frame</text><rect x=\"95\" y=\"170\" width=\"210\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Wait time-out (2 × Tp) for ACK</text><polygon points=\"200,232 280,255 200,278 120,255\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.3\"/><text x=\"200\" y=\"255\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">ACK received?</text><rect x=\"140\" y=\"315\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"330\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Success</text><rect x=\"320\" y=\"285\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"380\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">K = K + 1</text><polygon points=\"380,347 455,370 380,393 305,370\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.3\"/><text x=\"380\" y=\"370\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">K &gt; Kmax (15)?</text><rect x=\"335\" y=\"425\" width=\"90\" height=\"30\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"380\" y=\"440\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Abort</text><rect x=\"430\" y=\"208\" width=\"120\" height=\"44\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"490\" y=\"222.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Wait R × Tfr</text><text x=\"490\" y=\"237.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">R in 0 … 2ᴷ − 1</text><text x=\"280\" y=\"462\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Pure ALOHA flowchart</text></svg>",
      "alt": "Pure ALOHA flowchart"
     },
     "Steps: transmit whenever a frame is ready; wait 2 × Tp (round trip) for an ACK; if none, increase K, wait a random back-off R × Tfr (or R × Tp) and resend; abort after Kmax attempts. Vulnerable time = 2Tfr, maximum throughput 18.4 % at G = 0.5."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on ALOHA, CSMA/CD and CSMA/CA flowcharts"
  ]
 },
 "7e7bca1aab75c726": {
  "sections": [
   [
    "a) Subnet mask",
    [
     "400 hosts + 2 → 9 host bits (510 usable). Mask /23 = 255.255.254.0.",
     "From the /16 that borrows 7 bits → 128 possible subnets; the 8 required subnets are the first eight.",
     "(Alternative reading — split the whole /16 into exactly 8: borrow 3 bits → /19 = 255.255.224.0 with 8190 hosts each. /23 is the efficient answer: it meets the 400-host need without wasting space.)"
    ]
   ],
   [
    "b) Network, usable range and broadcast of each subnet (/23)",
    [
     {
      "table": {
       "head": [
        "Subnet",
        "Network address",
        "Usable host range",
        "Broadcast"
       ],
       "rows": [
        [
         1,
         "190.168.0.0",
         "190.168.0.1 – 190.168.1.254",
         "190.168.1.255"
        ],
        [
         2,
         "190.168.2.0",
         "190.168.2.1 – 190.168.3.254",
         "190.168.3.255"
        ],
        [
         3,
         "190.168.4.0",
         "190.168.4.1 – 190.168.5.254",
         "190.168.5.255"
        ],
        [
         4,
         "190.168.6.0",
         "190.168.6.1 – 190.168.7.254",
         "190.168.7.255"
        ],
        [
         5,
         "190.168.8.0",
         "190.168.8.1 – 190.168.9.254",
         "190.168.9.255"
        ],
        [
         6,
         "190.168.10.0",
         "190.168.10.1 – 190.168.11.254",
         "190.168.11.255"
        ],
        [
         7,
         "190.168.12.0",
         "190.168.12.1 – 190.168.13.254",
         "190.168.13.255"
        ],
        [
         8,
         "190.168.14.0",
         "190.168.14.1 – 190.168.15.254",
         "190.168.15.255"
        ]
       ]
      }
     }
    ]
   ],
   [
    "c) Total usable addresses",
    [
     "8 subnets × 510 = 4080 usable host addresses (with /19 it would be 8 × 8190 = 65 520)."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 61–92"
  ]
 },
 "738fa70479c36e43": {
  "sections": [
   [
    "a) IPv4 vs IPv6 headers",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 252\" width=\"608\" height=\"252\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"124\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN (4)</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Service type / DSCP (8)</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Total length (16)</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification (16)</text><rect x=\"304\" y=\"56\" width=\"54\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"331\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Flags (3)</text><rect x=\"358\" y=\"56\" width=\"234\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"475\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Fragment offset (13)</text><rect x=\"16\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Time to live (8)</text><rect x=\"160\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Protocol (8)</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Header checksum (16)</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source IP address (32)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination IP address (32)</text><rect x=\"16\" y=\"192\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Options + padding (0–40 bytes)</text><text x=\"304\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)</text></svg>",
      "alt": "IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 308\" width=\"608\" height=\"308\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"26\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Traffic class (8)</text><rect x=\"232\" y=\"22\" width=\"360\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"412\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Flow label (20)</text><rect x=\"16\" y=\"48\" width=\"288\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Payload length (16)</text><rect x=\"304\" y=\"48\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"376\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Next header (8)</text><rect x=\"448\" y=\"48\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"520\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Hop limit (8)</text><rect x=\"16\" y=\"74\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"87\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source address (128 bits)</text><rect x=\"16\" y=\"100\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"126\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"139\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"152\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"178\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination address (128 bits)</text><rect x=\"16\" y=\"204\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"217\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"230\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"256\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"269\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><text x=\"304\" y=\"298\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv6 base header: fixed 40 bytes (extension headers follow via Next header)</text></svg>",
      "alt": "IPv6 base header: fixed 40 bytes (extension headers follow via Next header)"
     },
     {
      "table": {
       "head": [
        "Feature",
        "IPv4 header",
        "IPv6 header"
       ],
       "rows": [
        [
         "Size",
         "20–60 bytes (variable, HLEN field)",
         "Fixed 40 bytes (no length field needed)"
        ],
        [
         "Address size",
         "32-bit source/destination",
         "128-bit source/destination"
        ],
        [
         "Fields",
         "13 fields",
         "8 fields (simplified)"
        ],
        [
         "Checksum",
         "Header checksum, recomputed at every hop",
         "None (left to link and transport layers)"
        ],
        [
         "Fragmentation",
         "Identification, flags, offset in base header; routers may fragment",
         "Only the source fragments (Fragment extension header)"
        ],
        [
         "Options",
         "Options field inside the header",
         "Extension headers chained by Next header"
        ],
        [
         "Lifetime",
         "Time to live (TTL)",
         "Hop limit"
        ],
        [
         "Upper protocol",
         "Protocol field",
         "Next header field"
        ],
        [
         "QoS",
         "Type of service / DSCP",
         "Traffic class + 20-bit Flow label"
        ],
        [
         "Length field",
         "Total length (header + data)",
         "Payload length (data after base header)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) NAT",
    [
     "Network Address Translation lets hosts with private addresses reach the Internet through a router that maps them to one or a few public addresses (and ports) and back.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 210\" width=\"640\" height=\"210\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"130,50 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,105 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"130,160 225,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"355,105 415,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"525,105 540,105\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"10\" y=\"35\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.11</text><rect x=\"10\" y=\"90\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.12</text><rect x=\"10\" y=\"145\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">192.168.10.13</text><rect x=\"225\" y=\"80\" width=\"130\" height=\"50\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"290\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">NAT router</text><text x=\"290\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">in: 192.168.10.1</text><text x=\"290\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">out: 203.0.113.5</text><ellipse cx=\"470\" cy=\"105\" rx=\"55\" ry=\"30\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"470\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Internet</text><rect x=\"540\" y=\"88\" width=\"90\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"585\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">Server</text><text x=\"585\" y=\"112.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">93.184.216.34</text><text x=\"120\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Private network 192.168.10.0/24</text><text x=\"470\" y=\"15\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Public side: one address 203.0.113.5</text></svg>",
      "alt": "Diagram"
     },
     {
      "table": {
       "head": [
        "Private IP",
        "Private port",
        "Public IP",
        "Public port",
        "Destination",
        "Protocol"
       ],
       "rows": [
        [
         "192.168.10.11",
         "50001",
         "203.0.113.5",
         "40001",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.12",
         "50001",
         "203.0.113.5",
         "40002",
         "93.184.216.34:443",
         "TCP"
        ],
        [
         "192.168.10.13",
         "53500",
         "203.0.113.5",
         "40003",
         "8.8.8.8:53",
         "UDP"
        ]
       ]
      },
      "caption": "NAT/PAT translation table (port numbers keep the flows apart)"
     }
    ]
   ],
   [
    "When NAT is required",
    [
     "Address shortage: many hosts with private addresses (10/8, 172.16/12, 192.168/16) share one or a few public IPv4 addresses.",
     "Privacy/security: internal addressing and the number of hosts are hidden; unsolicited inbound traffic is dropped.",
     "Changing ISP without renumbering internal hosts.",
     "Connecting overlapping private networks (e.g. after a company merger) and home/SOHO broadband routers."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–247, 261–262"
  ]
 },
 "bb9da6f0eb1f7df4": {
  "sections": [
   [
    "(a) Distance-vector computation at F",
    [
     "F’s neighbours are B (4) and E (1). Each round F receives its neighbours’ vectors and applies DF(y) = min{c(F,v) + Dv(y)}.",
     {
      "table": {
       "head": [
        "Router",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "A",
         0,
         1,
         3,
         4,
         "∞",
         "∞"
        ],
        [
         "B",
         1,
         0,
         3,
         "∞",
         10,
         4
        ],
        [
         "C",
         3,
         3,
         0,
         1,
         "∞",
         "∞"
        ],
        [
         "D",
         4,
         "∞",
         1,
         0,
         4,
         "∞"
        ],
        [
         "E",
         "∞",
         10,
         "∞",
         4,
         0,
         1
        ],
        [
         "F",
         "∞",
         4,
         "∞",
         "∞",
         1,
         0
        ]
       ]
      },
      "caption": "Initial vectors (each router knows only its own links)"
     },
     "Round 1: B advertises (A 1, B 0, C 3, D ∞, E 10, F 4); E advertises (A ∞, B 10, C ∞, D 4, E 0, F 1).",
     "DF(A) = min{ B: 4+1=5, E: 1+∞=∞ } = 5\nDF(B) = min{ B: 4+0=4, E: 1+10=11 } = 4\nDF(C) = min{ B: 4+3=7, E: 1+∞=∞ } = 7\nDF(D) = min{ B: 4+∞=∞, E: 1+4=5 } = 5\nDF(E) = min{ B: 4+10=14, E: 1+0=1 } = 1",
     "Round 2: B advertises (A 1, B 0, C 3, D 4, E 5, F 4); E advertises (A 8, B 5, C 5, D 4, E 0, F 1).",
     "DF(A) = min{ B: 4+1=5, E: 1+8=9 } = 5\nDF(B) = min{ B: 4+0=4, E: 1+5=6 } = 4\nDF(C) = min{ B: 4+3=7, E: 1+5=6 } = 6\nDF(D) = min{ B: 4+4=8, E: 1+4=5 } = 5\nDF(E) = min{ B: 4+5=9, E: 1+0=1 } = 1",
     {
      "table": {
       "head": [
        "Destination",
        "Initial",
        "After round 1",
        "After round 2",
        "After round 3"
       ],
       "rows": [
        [
         "A",
         "∞",
         "5 via B",
         "5 via B",
         "5 via B"
        ],
        [
         "B",
         "4 via B",
         "4 via B",
         "4 via B",
         "4 via B"
        ],
        [
         "C",
         "∞",
         "7 via B",
         "6 via E",
         "6 via E"
        ],
        [
         "D",
         "∞",
         "5 via E",
         "5 via E",
         "5 via E"
        ],
        [
         "E",
         "1 via E",
         "1 via E",
         "1 via E",
         "1 via E"
        ],
        [
         "F",
         "0",
         "0",
         "0",
         "0"
        ]
       ]
      },
      "caption": "Distance vector of F (cost via next hop). Stable after round 2."
     }
    ]
   ],
   [
    "Shortest-path routes from F",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Route",
        "Cost"
       ],
       "rows": [
        [
         "A",
         "F → B → A",
         5
        ],
        [
         "B",
         "F → B",
         4
        ],
        [
         "C",
         "F → E → D → C",
         6
        ],
        [
         "D",
         "F → E → D",
         5
        ],
        [
         "E",
         "F → E",
         1
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 490 285\" width=\"490\" height=\"285\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"58.8\" y1=\"130.1\" x2=\"156.2\" y2=\"59.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"99.9\" y=\"86\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"62\" y1=\"140\" x2=\"153\" y2=\"140\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"131\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"58.5\" y1=\"150.3\" x2=\"156.5\" y2=\"224.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"99.9\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"107.5\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"170\" y1=\"67\" x2=\"170\" y2=\"123\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"162.4\" y=\"86\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"184.3\" y1=\"59.2\" x2=\"295.7\" y2=\"130.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"228.8\" y=\"86\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><path d=\"M186.1 55.4 Q317.6 57.1 423.9 134.6\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"310\" y=\"48.1\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"317.6491106406736\" y=\"57.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"170\" y1=\"157\" x2=\"170\" y2=\"218\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"162.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"170\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"184.1\" y1=\"225.5\" x2=\"295.9\" y2=\"149.5\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"232.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"327\" y1=\"140\" x2=\"423\" y2=\"140\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"367.4\" y=\"131\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"375\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><circle cx=\"45\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"45\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"37.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"170\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"162.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"170\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"162.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"170\" cy=\"235\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"170\" y=\"235.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"162.7\" y=\"254\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"170\" y=\"263\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"310\" cy=\"140\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"310\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"302.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"310\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"440\" cy=\"140\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"440\" y=\"140.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"432.7\" y=\"159\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"440\" y=\"168\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><text x=\"245\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from F (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from F (green) · blue = final cost"
     }
    ]
   ],
   [
    "(b) Count to infinity — solutions and limits",
    [
     "Split horizon: never advertise a route back on the interface it was learned from (B does not tell A about A’s own networks).",
     "Poison reverse: advertise it back but with cost ∞ (16), so the neighbour immediately discards that path.",
     "Hold-down timer: after a route goes bad, ignore worse ‘good news’ about it for a while so stale information can die out.",
     "Triggered updates: send changes immediately instead of waiting for the 30 s timer — shortens convergence.",
     "Maximum hop count (RIP infinity = 16) bounds how long the count can run.",
     "Limitations: split horizon / poison reverse only break loops between two routers — loops through three or more routers can still count to infinity; hold-down slows convergence even for genuine new routes; a small ‘infinity’ (16) limits the network diameter to 15 hops."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "a933ece2e90c2114": {
  "sections": [
   [
    "Techniques",
    [
     {
      "table": {
       "head": [
        "",
        "Open-loop (prevention)",
        "Closed-loop (removal)"
       ],
       "rows": [
        [
         "Idea",
         "Policies that stop congestion before it happens",
         "Detect congestion and react through feedback"
        ],
        [
         "Feedback",
         "None — decided in advance",
         "Yes — from network or receiver"
        ],
        [
         "Mechanisms",
         "Retransmission policy, window policy (Selective Repeat), acknowledgment policy (delayed/cumulative ACKs), discarding policy (drop less important packets), admission policy, traffic shaping (leaky/token bucket)",
         "Back-pressure, choke packets (ICMP source quench), implicit signalling (TCP sees loss/delay), explicit signalling (ECN bits, forward/backward)"
        ],
        [
         "Pros",
         "Simple, no signalling delay, predictable",
         "Adapts to actual load, uses capacity fully"
        ],
        [
         "Cons",
         "Cannot react to unexpected load; may under-use capacity",
         "Reacts after the fact; feedback delay can cause oscillation"
        ]
       ]
      }
     },
     {
      "table": {
       "head": [
        "Technique",
        "How it improves QoS"
       ],
       "rows": [
        [
         "Traffic shaping (leaky bucket, token bucket)",
         "Smooths bursts so delay and loss stay predictable; token bucket also allows controlled bursts"
        ],
        [
         "Scheduling (FIFO, priority queuing, weighted fair queuing)",
         "Gives delay-sensitive traffic precedence and guarantees each class a fair share of bandwidth"
        ],
        [
         "Admission control",
         "Accepts a new flow only if its required bandwidth/delay can be met without hurting existing flows"
        ],
        [
         "Resource reservation (RSVP / IntServ)",
         "Reserves buffers and bandwidth along the path for a flow"
        ],
        [
         "Differentiated services (DiffServ)",
         "Marks packets (DSCP) into classes with different per-hop behaviours (EF, AF, BE)"
        ],
        [
         "TCP congestion control (AIMD, slow start, fast recovery) and ECN/RED",
         "End systems adapt their rate to the network’s capacity; routers signal early before queues overflow"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 200\" width=\"600\" height=\"200\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m27-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker><marker id=\"m27-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><polyline points=\"160,60 300,60 300,40\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"300,140 300,165 300,165 425,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"355,60 420,60\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"1.5\" marker-end=\"url(#m27-b3412c)\"/><rect x=\"333.5\" y=\"51\" width=\"108.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"387.5\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11.5\">overflow → drop</text><rect x=\"20\" y=\"40\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"90\" y=\"52.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bursty input</text><text x=\"90\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(variable rate)</text><rect x=\"245\" y=\"40\" width=\"110\" height=\"100\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bucket</text><text x=\"300\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(queue of</text><text x=\"300\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">capacity C)</text><rect x=\"425\" y=\"130\" width=\"150\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"500\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Smooth output</text><text x=\"500\" y=\"157.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">at fixed rate r</text><text x=\"300\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Leaky bucket: any burst leaves at rate r; excess beyond C is discarded</text></svg>",
      "alt": "Leaky bucket: any burst leaves at rate r; excess beyond C is discarded"
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)",
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "ea1a7d9b3e8a3e25": {
  "sections": [
   [
    "a) DNS messages",
    [
     "Two types: query and response, with the same format. A query carries the header and question section; a response carries the header, the question copied back and answer, authoritative and additional resource-record sections.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 286\" width=\"608\" height=\"286\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Flags</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Number of question records</text><rect x=\"304\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Number of answer records</text><rect x=\"16\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Number of authoritative records</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Number of additional records</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Question section (variable)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Answer section — resource records (response only)</text><rect x=\"16\" y=\"192\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Authoritative section (response only)</text><rect x=\"16\" y=\"226\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Additional section (response only)</text><text x=\"304\" y=\"276\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">DNS message: 12-byte header + variable sections</text></svg>",
      "alt": "DNS message: 12-byte header + variable sections"
     },
     {
      "table": {
       "head": [
        "Header field",
        "Purpose"
       ],
       "rows": [
        [
         "Identification (16 bits)",
         "Matches a response to its query"
        ],
        [
         "Flags (16 bits)",
         "QR (query/response), OpCode, AA (authoritative answer), TC (truncated), RD (recursion desired), RA (recursion available), rCode (error code)"
        ],
        [
         "Question / answer / authoritative / additional counts",
         "Number of records in each section"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) Categories of HTTP headers",
    [
     {
      "table": {
       "head": [
        "Category",
        "Used in",
        "Description",
        "Examples"
       ],
       "rows": [
        [
         "General headers",
         "Requests and responses",
         "Information about the message itself",
         "Date, Connection, Cache-Control, MIME-version"
        ],
        [
         "Request headers",
         "Requests only",
         "Client’s configuration and preferred formats",
         "Accept, Accept-Language, Host, User-Agent, Authorization, If-Modified-Since"
        ],
        [
         "Response headers",
         "Responses only",
         "Server’s configuration and info about the request",
         "Server, Location, Age, WWW-Authenticate, Retry-After"
        ],
        [
         "Entity headers",
         "Body of request or response",
         "Information about the document/body",
         "Content-Type, Content-Length, Content-Encoding, Last-Modified, Expires"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 37–42 (DNS messages)",
   "Module 7 slides 181–186 (HTTP headers)"
  ]
 },
 "2f4c7207fc982d31": {
  "sections": [
   [
    "Answer",
    [
     "CRC = 10010011; transmitted message = 1011 0010 0100 1011 10010011. If the leftmost bit is inverted, the receiver’s remainder is 10110110 (non-zero), so the error is detected."
    ]
   ],
   [
    "i. Polynomial long division",
    [
     "Generator x⁸ + x² + x + 1 = 100000111 (degree 8) → append 8 zeros: 1011001001001011 00000000",
     "100000111 ) 101100100100101100000000\n            100000111\n            ─────────\n              110001110\n              100000111\n              ─────────\n               100010010\n               100000111\n               ─────────\n                   101011011\n                   100000111\n                   ─────────\n                     101110000\n                     100000111\n                     ─────────\n                       111011100\n                       100000111\n                       ─────────\n                        110110110\n                        100000111\n                        ─────────\n                         101100010\n                         100000111\n                         ─────────\n                           110010100\n                           100000111\n                           ─────────\n                            10010011   ← remainder",
     "Remainder (CRC) = 10010011 → transmitted codeword = 1011001001001011 10010011"
    ]
   ],
   [
    "ii. Leftmost bit inverted",
    [
     "Received: 001100100100101110010011",
     "100000111 ) 001100100100101110010011\n              100000111\n              ─────────\n               100101010\n               100000111\n               ─────────\n                  101101101\n                  100000111\n                  ─────────\n                    110101011\n                    100000111\n                    ─────────\n                     101011000\n                     100000111\n                     ─────────\n                       101111101\n                       100000111\n                       ─────────\n                         111101000\n                         100000111\n                         ─────────\n                          111011111\n                          100000111\n                          ─────────\n                           110110001\n                           100000111\n                           ─────────\n                            10110110   ← remainder",
     "Remainder = 10110110 ≠ 00000000. The receiver divides the whole received codeword by the same generator; a correct codeword is an exact multiple of G(x), so any non-zero remainder means an error.",
     "Why it must be caught: the error polynomial is E(x) = x¹⁵⁺⁸ = x²³, a single term; G(x) has more than one term (it contains the +1), so G(x) can never divide xⁱ → every single-bit error is detected."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m3-015-015.webp",
      "caption": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)",
      "alt": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)",
   "Figures: notes p. 15"
  ]
 },
 "e9d7ec465bc4dcae": {
  "sections": [
   [
    "i) Maximum distance between the hosts",
    [
     "Tfr = 1000 bits / 1 Gbps = 1 µs. CSMA/CD needs Tfr ≥ 2Tp → Tp ≤ 0.5 µs.",
     "Distance = Tp × v = 0.5 × 10⁻⁶ × 2 × 10⁸ = 100 m."
    ]
   ],
   [
    "ii) Efficiency",
    [
     "Ethernet efficiency: η = 1 / (1 + 6.44a), with a = Tp / Tfr.",
     "At 100 m: a = 0.5 µs / 1 µs = 0.5 → η = 1 / (1 + 3.22) = 0.237 ≈ 23.7 %.",
     "At 1 m: Tp = 1 / (2 × 10⁸) = 5 ns, a = 0.005 → η = 1 / (1 + 0.0322) = 0.969 ≈ 96.9 %.",
     "Yes — shorter distance means a smaller a (less time wasted in contention per frame), so efficiency rises sharply. (With the simpler model η = 1/(1 + 2a): 50 % at 100 m vs 99 % at 1 m — same conclusion.)"
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on CSMA/CD and Ethernet efficiency"
  ]
 },
 "3bc087f01c75ee0c": {
  "sections": [
   [
    "i) 600-byte packet from link 3 to link 2 (MTU 420)",
    [
     "600 > 420, so the router must fragment it (if DF = 1 it drops it and sends ICMP ‘fragmentation needed’).",
     "Fields updated in every fragment: Total length, Flags (MF), Fragment offset, Header checksum — plus TTL (decremented as always). Identification, addresses and protocol are copied unchanged."
    ]
   ],
   [
    "ii) Fragments sent on link 2",
    [
     "Data = 600 − 20 = 580 bytes. Max data per fragment = ⌊(420 − 20)/8⌋ × 8 = 400 bytes → at least 2 packets.",
     {
      "table": {
       "head": [
        "Fragment",
        "Total length",
        "Data bytes",
        "Byte range",
        "MF",
        "Offset field"
       ],
       "rows": [
        [
         1,
         420,
         400,
         "0–399",
         1,
         "0"
        ],
        [
         2,
         200,
         180,
         "400–579",
         0,
         "50 (400/8)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "iii) 20 fragments from link 1 sent on link 3",
    [
     "20 packets. Routers never reassemble fragments (only the final destination does), and each fragment (≤ 60 bytes) already fits the 1000-byte MTU, so they are forwarded one by one."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219"
  ]
 },
 "981dc397c8e0768e": {
  "sections": [
   [
    "Answer",
    [
     "Shortest paths from E: A = 9 (E→B→A), B = 7 (E→B), C = 10 (E→B→C), D = 14 (E→B→C→D), F = 16 (E→H→F), G = 13 (E→H→G), H = 7 (E→H)."
    ]
   ],
   [
    "Link-state procedure",
    [
     "1. Each router discovers neighbours (hello) and measures link costs.",
     "2. Each router builds an LSP (its ID, sequence number, age, list of neighbours + costs) and floods it to all routers.",
     "3. Every router stores all LSPs in an identical link-state database (the full map).",
     "4. Each router runs Dijkstra with itself as root to build its shortest-path tree, then derives its forwarding table."
    ]
   ],
   [
    "Dijkstra from E",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(A), p(A)",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(F), p(F)",
        "D(G), p(G)",
        "D(H), p(H)"
       ],
       "rows": [
        [
         0,
         "E",
         "∞",
         "7, E",
         "∞",
         "∞",
         "∞",
         "∞",
         "7, E"
        ],
        [
         1,
         "EB",
         "9, B",
         "7, E",
         "10, B",
         "∞",
         "22, B",
         "∞",
         "7, E"
        ],
        [
         2,
         "EBH",
         "9, B",
         "—",
         "10, B",
         "∞",
         "16, H",
         "13, H",
         "7, E"
        ],
        [
         3,
         "EBHA",
         "9, B",
         "—",
         "10, B",
         "16, A",
         "16, H",
         "13, H",
         "—"
        ],
        [
         4,
         "EBHAC",
         "—",
         "—",
         "10, B",
         "14, C",
         "16, H",
         "13, H",
         "—"
        ],
        [
         5,
         "EBHACG",
         "—",
         "—",
         "—",
         "14, C",
         "16, H",
         "13, H",
         "—"
        ],
        [
         6,
         "EBHACGD",
         "—",
         "—",
         "—",
         "14, C",
         "16, H",
         "—",
         "—"
        ],
        [
         7,
         "EBHACGDF",
         "—",
         "—",
         "—",
         "—",
         "16, H",
         "—",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 520 320\" width=\"520\" height=\"320\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"52.8\" y1=\"138.8\" x2=\"147.2\" y2=\"56.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"92.4\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"57\" y1=\"150\" x2=\"143\" y2=\"150\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"92.4\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"52.8\" y1=\"161.2\" x2=\"147.2\" y2=\"243.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"92.4\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"100\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"160\" y1=\"62\" x2=\"160\" y2=\"133\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"152.4\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"177\" y1=\"45\" x2=\"313\" y2=\"45\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"237.4\" y=\"36\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"245\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"174.5\" y1=\"53.9\" x2=\"315.5\" y2=\"141.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"233.8\" y=\"88.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"245\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">15</text><line x1=\"160\" y1=\"167\" x2=\"160\" y2=\"238\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"152.4\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"160\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"174.5\" y1=\"158.9\" x2=\"315.5\" y2=\"246.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"203.4\" y=\"172.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"211\" y=\"181.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"174.5\" y1=\"246.1\" x2=\"315.5\" y2=\"158.9\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"203.4\" y=\"214.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"211\" y=\"223.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"177\" y1=\"255\" x2=\"313\" y2=\"255\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"237.4\" y=\"246\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"245\" y=\"255\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"343.6\" y1=\"55.2\" x2=\"456.4\" y2=\"139.8\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"392.4\" y=\"88.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"400\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"347\" y1=\"150\" x2=\"453\" y2=\"150\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"392.4\" y=\"141\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"400\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"343.6\" y1=\"244.8\" x2=\"456.4\" y2=\"160.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"392.4\" y=\"193.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"400\" y=\"202.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">6</text><circle cx=\"40\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"40\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"32.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">9</text><circle cx=\"160\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"152.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><circle cx=\"160\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"149.3\" y=\"169\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><circle cx=\"160\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"149.3\" y=\"274\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><circle cx=\"330\" cy=\"45\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"330\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"322.7\" y=\"64\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"330\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"319.3\" y=\"169\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">16</text><circle cx=\"330\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">G</text><rect x=\"319.3\" y=\"274\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">13</text><circle cx=\"470\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"470\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">H</text><rect x=\"462.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"470\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><text x=\"260\" y=\"312\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from E (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from E (green) · blue = final cost"
     }
    ]
   ],
   [
    "Forwarding table at E",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         "E → B → A",
         9,
         "B"
        ],
        [
         "B",
         "E → B",
         7,
         "B"
        ],
        [
         "C",
         "E → B → C",
         10,
         "B"
        ],
        [
         "D",
         "E → B → C → D",
         14,
         "B"
        ],
        [
         "F",
         "E → H → F",
         16,
         "H"
        ],
        [
         "G",
         "E → H → G",
         13,
         "H"
        ],
        [
         "H",
         "E → H",
         7,
         "H"
        ]
       ]
      },
      "caption": "Routing table at E"
     }
    ]
   ],
   [
    "Challenges in link-state routing",
    [
     "Flooding overhead: every change is flooded network-wide; large networks need areas (OSPF) to contain it.",
     "Memory and CPU: each router stores the full database and re-runs Dijkstra (O(E log V)) after every change.",
     "Consistency: during flooding, routers may briefly hold different maps → transient loops; sequence numbers and ageing are needed to discard old LSPs.",
     "Security/robustness: one wrong or forged LSA corrupts everyone’s view; authentication is required.",
     "Route oscillation when costs depend on load (traffic-sensitive metrics)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "33a2c8ebeb912022": {
  "sections": [
   [
    "i) Recommended topology: hierarchical (extended) star",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 300\" width=\"640\" height=\"300\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"320,39 320,66\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"320,94 250,126\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"320,94 390,126\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"305,140 335,140\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"250,154 80,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"335,140 135,210\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"250,154 240,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"390,154 240,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"250,154 400,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"390,154 400,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"305,140 505,210\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"390,154 560,196\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"80,224 80,257\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"240,224 240,257\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"400,224 400,257\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><polyline points=\"560,224 560,257\" fill=\"none\" stroke=\"#52615a\" stroke-width=\"1.5\"/><ellipse cx=\"320\" cy=\"25\" rx=\"80\" ry=\"14\" fill=\"#f2f5f0\" stroke=\"#52615a\" stroke-width=\"1.3\" stroke-dasharray=\"4 3\"/><text x=\"320\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Internet / ISP</text><rect x=\"240\" y=\"66\" width=\"160\" height=\"28\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router + firewall</text><rect x=\"195\" y=\"126\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"250\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch 1</text><rect x=\"335\" y=\"126\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"390\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch 2</text><rect x=\"25\" y=\"196\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"80\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Floor 1 switch</text><rect x=\"185\" y=\"196\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"240\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Floor 2 switch</text><rect x=\"345\" y=\"196\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Floor 3 switch</text><rect x=\"505\" y=\"196\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Floor 4 switch</text><rect x=\"20\" y=\"257\" width=\"120\" height=\"26\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"80\" y=\"270\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Finance VLAN 10</text><rect x=\"180\" y=\"257\" width=\"120\" height=\"26\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"240\" y=\"270\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HR VLAN 20</text><rect x=\"340\" y=\"257\" width=\"120\" height=\"26\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"270\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Engineering VLAN 30</text><rect x=\"500\" y=\"257\" width=\"120\" height=\"26\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"270\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Lobby/Café APs VLAN 40</text><text x=\"320\" y=\"292\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Hierarchical star: core (redundant) → floor access switches → departmental VLANs</text></svg>",
      "alt": "Hierarchical star: core (redundant) → floor access switches → departmental VLANs"
     },
     "Each floor has an access switch in a star to its users; floor switches uplink to two core switches (dual-homed) in the server room. Each department becomes its own segment, satisfying requirement (a).",
     "Why: dedicated segments reduce congestion; a link fault affects one user; adding floors/ports means adding switches (scalable); central core simplifies security policy; redundancy removes the single point of failure of a simple star."
    ]
   ],
   [
    "ii) VLANs for security and traffic management",
    [
     "A VLAN groups ports into a separate broadcast domain regardless of floor — Finance, HR and Engineering each get their own VLAN (tagged with IEEE 802.1Q on trunks).",
     "Security: hosts in one VLAN cannot reach another except through a router/layer-3 switch where ACLs/firewall rules control access (e.g. only Finance reaches the accounting server).",
     "Traffic: broadcasts stay inside each VLAN; heavy engineering transfers do not flood HR; QoS can be applied per VLAN; moving a user only means changing port membership."
    ]
   ],
   [
    "iii) Wireless for lobby and cafeteria",
    [
     "Ceiling-mounted 802.11ax (Wi-Fi 6) access points placed from a site survey (overlapping cells on non-overlapping channels 1/6/11 and 5 GHz), PoE-powered from the floor switch, managed by a WLAN controller.",
     "Security: WPA3-Enterprise (802.1X/RADIUS) for staff on the corporate VLAN; a separate guest SSID mapped to an isolated guest VLAN with captive portal, client isolation and Internet-only access through the firewall."
    ]
   ],
   [
    "iv) Future-proofing",
    [
     "Modular/stackable switches with spare ports and 10 G uplinks; Cat6A copper to desks and fibre (OM4/single-mode) for riser/backbone links.",
     "Structured cabling with spare runs; hierarchical IP plan with spare subnets (VLSM) and IPv6 readiness.",
     "Redundancy (dual core, link aggregation), centralised management/monitoring (SNMP, controller-based Wi-Fi), and room in the rack and power budget (PoE) for growth."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8",
   "Lab: VLAN using Cisco Packet Tracer",
   "Module 3 slides on IEEE 802.11"
  ]
 },
 "24771109cff4129e": {
  "sections": [
   [
    "i) 1 MB at 64 kbps with 2 s setup",
    [
     "Data = 1 MB = 8 × 10⁶ bits → transmission = 8 × 10⁶ / 64 000 = 125 s.",
     "Total = setup + transmission = 2 + 125 = 127 s (propagation not given → neglected). (With 1 MB = 2²⁰ bytes: 8 388 608 / 64 000 = 131.07 s → 133.07 s.)"
    ]
   ],
   [
    "ii) 5 MB at 10 Mbps, setup 100 ms, propagation 15 ms",
    [
     "Transmission = 5 × 8 × 10⁶ / 10⁷ = 4 s.",
     "Total = 0.1 + 4 + 0.015 = 4.115 s. (Binary MB: 41 943 040 / 10⁷ = 4.194 s → 4.309 s.)",
     "Setup and propagation are tiny next to transmission — circuit switching is efficient for large transfers."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "3887b5a608a6e3d7": {
  "sections": [
   [
    "i. 16-bit checksum",
    [
     "  Data 1      1001 1001 1100 1101\n  Data 2    + 1010 1010 1111 0000\n  Data 3    + 1101 0111 0010 1101\n  ────────────────────────────────\n  Raw sum 10 0001 1011 1110 1010   (carry 2 out of 16 bits)\n  Wrap      0001 1011 1110 1100   (add the carry back in)\n  Checksum  1110 0100 0001 0011   (one’s complement)",
     "Checksum appended = 1110 0100 0001 0011 (0xE413). At the receiver, Data 1 + Data 2 + Data 3 + checksum (with wrap-around) = 1111 1111 1111 1111, whose complement is 0 → no error."
    ]
   ],
   [
    "ii. CRC with G(x) = x³ + x + 1",
    [
     "Generator x³ + x + 1 = 1011 (degree 3) → append 3 zeros: 110101 000",
     "1011 ) 110101000\n       1011\n       ────\n        1100\n        1011\n        ────\n         1111\n         1011\n         ────\n          1000\n          1011\n          ────\n            1100\n            1011\n            ────\n             111   ← remainder",
     "Remainder (CRC) = 111 → transmitted codeword = 110101 111",
     "1011 ) 110101111\n       1011\n       ────\n        1100\n        1011\n        ────\n         1111\n         1011\n         ────\n          1001\n          1011\n          ────\n            1011\n            1011\n            ────\n             000   ← remainder"
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 21–24 (checksum, one’s-complement arithmetic)",
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)"
  ]
 },
 "068d9afd114f8525": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "i. 172.16.0.0 with default mask",
         "Class B → /16 → 16 host bits",
         "2¹⁶ − 2 = 65 534 hosts"
        ],
        [
         "ii. /20 subnet",
         "borrow 4 bits from /16; 12 host bits",
         "2⁴ = 16 subnets, 2¹² − 2 = 4094 hosts each"
        ],
        [
         "iii. 172.16.0.0/22",
         "block of 1024: 172.16.0.0 – 172.16.3.255",
         "valid hosts 172.16.0.1 – 172.16.3.254"
        ],
        [
         "iv. Next subnet after 172.16.0.0/24",
         "block of 256",
         "172.16.1.0/24"
        ],
        [
         "v. /19",
         "2^(32−19)",
         "8192 addresses (8190 usable)"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 61–92"
  ]
 },
 "b3602227c5f034ff": {
  "sections": [
   [
    "IPv4 header",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 252\" width=\"608\" height=\"252\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"124\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN (4)</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Service type / DSCP (8)</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Total length (16)</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification (16)</text><rect x=\"304\" y=\"56\" width=\"54\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"331\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Flags (3)</text><rect x=\"358\" y=\"56\" width=\"234\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"475\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Fragment offset (13)</text><rect x=\"16\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Time to live (8)</text><rect x=\"160\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Protocol (8)</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Header checksum (16)</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source IP address (32)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination IP address (32)</text><rect x=\"16\" y=\"192\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Options + padding (0–40 bytes)</text><text x=\"304\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)</text></svg>",
      "alt": "IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)"
     },
     {
      "table": {
       "head": [
        "Field",
        "Bits",
        "Purpose"
       ],
       "rows": [
        [
         "Version",
         "4",
         "IP version = 4"
        ],
        [
         "HLEN",
         "4",
         "Header length in 4-byte words (5–15 → 20–60 bytes)"
        ],
        [
         "Service type / DSCP + ECN",
         "8",
         "Priority / QoS class and congestion notification"
        ],
        [
         "Total length",
         "16",
         "Header + data in bytes (max 65 535)"
        ],
        [
         "Identification",
         "16",
         "Same value in all fragments of one datagram"
        ],
        [
         "Flags",
         "3",
         "Reserved, DF (don’t fragment), MF (more fragments)"
        ],
        [
         "Fragment offset",
         "13",
         "Position of this fragment’s data, in 8-byte units"
        ],
        [
         "Time to live",
         "8",
         "Hop limit; decremented by each router, discarded at 0 (prevents loops)"
        ],
        [
         "Protocol",
         "8",
         "Upper-layer protocol: 1 ICMP, 6 TCP, 17 UDP, 89 OSPF"
        ],
        [
         "Header checksum",
         "16",
         "One’s-complement checksum of the header only; recomputed per hop"
        ],
        [
         "Source / destination address",
         "32 + 32",
         "Sender and final receiver"
        ],
        [
         "Options",
         "0–320",
         "Record route, source route, timestamp…; padding to 32-bit boundary"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Main IPv6 header fields",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 308\" width=\"608\" height=\"308\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"26\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Traffic class (8)</text><rect x=\"232\" y=\"22\" width=\"360\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"412\" y=\"35\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Flow label (20)</text><rect x=\"16\" y=\"48\" width=\"288\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Payload length (16)</text><rect x=\"304\" y=\"48\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"376\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Next header (8)</text><rect x=\"448\" y=\"48\" width=\"144\" height=\"26\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"520\" y=\"61\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Hop limit (8)</text><rect x=\"16\" y=\"74\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"87\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source address (128 bits)</text><rect x=\"16\" y=\"100\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"113\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"126\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"139\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"152\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"165\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"178\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"191\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination address (128 bits)</text><rect x=\"16\" y=\"204\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"217\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"230\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><rect x=\"16\" y=\"256\" width=\"576\" height=\"26\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"269\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\"></text><text x=\"304\" y=\"298\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv6 base header: fixed 40 bytes (extension headers follow via Next header)</text></svg>",
      "alt": "IPv6 base header: fixed 40 bytes (extension headers follow via Next header)"
     },
     {
      "table": {
       "head": [
        "Field",
        "Bits",
        "Purpose"
       ],
       "rows": [
        [
         "Version",
         "4",
         "= 6"
        ],
        [
         "Traffic class",
         "8",
         "Priority / DSCP (like IPv4 TOS)"
        ],
        [
         "Flow label",
         "20",
         "Identifies a flow needing special handling (real-time)"
        ],
        [
         "Payload length",
         "16",
         "Bytes after the 40-byte base header"
        ],
        [
         "Next header",
         "8",
         "Type of the next extension header or upper-layer protocol"
        ],
        [
         "Hop limit",
         "8",
         "Same role as TTL"
        ],
        [
         "Source / destination address",
         "128 + 128",
         "Sender and receiver"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–247"
  ]
 },
 "b8f69e8225357cf1": {
  "sections": [
   [
    "(i)/(ii) Shortest path and transfer time from S1",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Path",
        "Total time (ms)"
       ],
       "rows": [
        [
         "S2",
         "S1 → S2",
         7
        ],
        [
         "S3",
         "S1 → S3",
         9
        ],
        [
         "S4",
         "S1 → S3 → S4",
         20
        ],
        [
         "S5",
         "S1 → S3 → S6 → S5",
         20
        ],
        [
         "S6",
         "S1 → S3 → S6",
         11
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 490 330\" width=\"490\" height=\"330\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"58.4\" y1=\"200.5\" x2=\"146.6\" y2=\"269.5\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"94.9\" y=\"226\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"102.5\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"61.8\" y1=\"187.3\" x2=\"183.2\" y2=\"167.7\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"114.9\" y=\"168.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"177.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"57.8\" y1=\"178.8\" x2=\"197.2\" y2=\"56.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"116.3\" y=\"108.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"127.5\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">14</text><line x1=\"165.6\" y1=\"263.9\" x2=\"194.4\" y2=\"181.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"168.8\" y=\"213.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"180\" y=\"222.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"177\" y1=\"278.9\" x2=\"383\" y2=\"266.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"268.8\" y=\"263.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"280\" y=\"272.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">15</text><line x1=\"215.2\" y1=\"172.6\" x2=\"384.8\" y2=\"257.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"288.8\" y=\"206\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"215\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"201.4\" y1=\"148.1\" x2=\"208.6\" y2=\"61.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"197.4\" y=\"96\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"205\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"403\" y1=\"248.3\" x2=\"427\" y2=\"116.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"407.4\" y=\"173.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"415\" y=\"182.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"413.5\" y1=\"95.9\" x2=\"226.5\" y2=\"49.1\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"312.4\" y=\"63.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"320\" y=\"72.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><circle cx=\"45\" cy=\"190\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"45\" y=\"190.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S1</text><rect x=\"37.7\" y=\"209\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"218\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"160\" cy=\"280\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"160\" y=\"280.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S2</text><rect x=\"152.7\" y=\"299\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"160\" y=\"308\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><circle cx=\"200\" cy=\"165\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"165.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S3</text><rect x=\"192.7\" y=\"184\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"200\" y=\"193\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">9</text><circle cx=\"400\" cy=\"265\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"400\" y=\"265.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S4</text><rect x=\"389.3\" y=\"284\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"400\" y=\"293\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">20</text><circle cx=\"430\" cy=\"100\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"430\" y=\"100.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S5</text><rect x=\"419.3\" y=\"119\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"430\" y=\"128\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">20</text><circle cx=\"210\" cy=\"45\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"45.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">S6</text><rect x=\"199.3\" y=\"64\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"210\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">11</text><text x=\"245\" y=\"322\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from S1 (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from S1 (green) · blue = final cost"
     }
    ]
   ],
   [
    "Iterations",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(S2), p(S2)",
        "D(S3), p(S3)",
        "D(S4), p(S4)",
        "D(S5), p(S5)",
        "D(S6), p(S6)"
       ],
       "rows": [
        [
         0,
         "S1",
         "7, S1",
         "9, S1",
         "∞",
         "∞",
         "14, S1"
        ],
        [
         1,
         "S1S2",
         "7, S1",
         "9, S1",
         "22, S2",
         "∞",
         "14, S1"
        ],
        [
         2,
         "S1S2S3",
         "—",
         "9, S1",
         "20, S3",
         "∞",
         "11, S3"
        ],
        [
         3,
         "S1S2S3S6",
         "—",
         "—",
         "20, S3",
         "20, S6",
         "11, S3"
        ],
        [
         4,
         "S1S2S3S6S4",
         "—",
         "—",
         "20, S3",
         "20, S6",
         "—"
        ],
        [
         5,
         "S1S2S3S6S4S5",
         "—",
         "—",
         "—",
         "20, S6",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     }
    ]
   ],
   [
    "(iii) How the algorithm works",
    [
     "Selecting the next node: among nodes not yet finalised, pick the one with the smallest tentative time (a priority queue). Its time is now final, because every other route to it would pass through a node that is already at least as far.",
     "Updating (relaxation): for each neighbour v of the newly finalised node u, if time(u) + w(u,v) < time(v), set time(v) = time(u) + w(u,v) and predecessor(v) = u.",
     "Example: when S3 (9) is finalised, S6 drops from 14 to 9 + 2 = 11 and S4 from 7 + 15 = 22 to 9 + 11 = 20; when S6 (11) is finalised, S5 becomes 11 + 9 = 20.",
     "Stop when all nodes are finalised; follow predecessors back to S1 to read each path."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "cb28a925584efabd": {
  "sections": [
   [
    "Why routing loops occur in distance vector",
    [
     "A DV router only knows ‘destination X is d away via neighbour N’ — not the path. When a router fails, its neighbour may still receive an older advertisement for X from another router whose route actually goes back through it.",
     "Both routers then point at each other for X, and each update adds the link cost (count-to-infinity) while packets loop until the cost reaches 16 (RIP infinity).",
     {
      "img": "scans/networks/notes/m5-009-016.webp",
      "caption": "Two-node instability / count to infinity (notes p. 9)",
      "alt": "Two-node instability / count to infinity (notes p. 9)"
     }
    ]
   ],
   [
    "Technique 1 — Split horizon (with poison reverse)",
    [
     "A router never advertises a route back out of the interface it learned it on (or, with poison reverse, advertises it with metric 16).",
     "So after GlobalTech’s router fails, its neighbours cannot get the dead route ‘back’ from each other, and a two-router loop cannot form."
    ]
   ],
   [
    "Technique 2 — Hold-down timers",
    [
     "When a route is marked unreachable, the router starts a hold-down timer (RIP ≈ 180 s) and ignores any advertisement for that destination with an equal or worse metric until it expires.",
     "Stale ‘good news’ circulating from other routers is therefore not believed, giving the true failure time to reach every router."
    ]
   ],
   [
    "Also useful",
    [
     "Triggered updates (send immediately on change) and route poisoning (set metric to 16 at once) speed up convergence.",
     "Moving to OSPF removes the root cause: every router has the full map and runs Dijkstra, so loops are transient and convergence is fast."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "38bea249bf525e51": {
  "sections": [
   [
    "i) Role of queuing mechanisms",
    [
     "Queues absorb short bursts at routers; how they are managed decides who waits and who is dropped when demand exceeds the link rate.",
     {
      "table": {
       "head": [
        "Mechanism",
        "Working",
        "Effect"
       ],
       "rows": [
        [
         "FIFO",
         "Single queue, first come first served; tail-drop when full",
         "Simple; no isolation — a burst delays everyone"
        ],
        [
         "Priority queuing",
         "Several queues; always serve the highest-priority non-empty queue",
         "Low delay for real-time traffic; low classes may starve"
        ],
        [
         "Weighted fair queuing (WFQ)",
         "One queue per class/flow, served round-robin in proportion to weights",
         "Fair bandwidth shares, bounded delay; isolates misbehaving flows"
        ],
        [
         "Active queue management (RED)",
         "Drop/mark packets randomly before the queue is full, more as the average queue grows",
         "Signals TCP early, avoids global synchronisation and keeps queues short"
        ]
       ]
      }
     }
    ]
   ],
   [
    "ii) Congestion-avoidance mechanisms in TCP",
    [
     "Additive increase: once cwnd ≥ ssthresh, grow by only 1 MSS per RTT, probing gently.",
     "Multiplicative decrease: on loss, halve ssthresh (and cwnd on duplicate ACKs).",
     "Slow-start threshold: switches from exponential to linear growth before reaching the previous loss point.",
     "Fast retransmit / fast recovery: resend after 3 duplicate ACKs without waiting for a timeout and continue from half the window.",
     "Router assistance: RED and Explicit Congestion Notification (ECN) mark packets so TCP slows down before drops occur.",
     {
      "table": {
       "head": [
        "Phase / event",
        "Rule",
        "Effect on cwnd"
       ],
       "rows": [
        [
         "Slow start (cwnd < ssthresh)",
         "cwnd += 1 MSS per ACK",
         "Doubles every RTT (exponential)"
        ],
        [
         "Congestion avoidance (cwnd ≥ ssthresh)",
         "cwnd += 1 MSS per RTT (additive increase)",
         "Linear growth"
        ],
        [
         "3 duplicate ACKs (mild congestion)",
         "ssthresh = cwnd/2; cwnd = ssthresh (+3) — fast retransmit / fast recovery (Reno)",
         "Halves; continue linearly"
        ],
        [
         "Timeout (severe congestion)",
         "ssthresh = cwnd/2; cwnd = 1 MSS",
         "Restart slow start"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)",
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "28a6ac9d690f8520": {
  "sections": [
   [
    "i) FTP",
    [
     "a. How it works: the client opens a control connection to server port 21 (USER, PASS, STOR/RETR commands and replies stay open all session); for each file a separate data connection is opened (active mode: server port 20 → client; passive mode: client → a server port given by PASV).",
     "Possible issues: (1) passive/active mode blocked by firewalls or NAT, so data connections stall or drop; (2) wrong transfer type (ASCII instead of binary corrupts large binary files); (3) idle/timeout limits on the control connection during long uploads; (4) TCP throughput limited by high RTT and small windows, or congested links.",
     "b. Improvements: use passive mode and open the right port range on firewalls; use binary (image) mode; enable restart (REST) so failed transfers resume; increase TCP window/buffer sizes; compress or split files; switch to SFTP/FTPS or a managed transfer tool with integrity checks."
    ]
   ],
   [
    "ii) HTTP",
    [
     "a. How it works: the browser resolves the name (DNS), opens a TCP (+TLS) connection, sends a request (GET/POST + headers), the server returns a status line, headers and body; a page with many objects triggers many requests.",
     "b. Optimisations: persistent connections and HTTP/2 multiplexing; caching (Cache-Control, ETag, conditional GET), proxy/CDN caches near users; compression (gzip/Brotli) and minification; load balancers across several servers; asynchronous/lazy loading; database and application caching."
    ]
   ],
   [
    "iii) SMTP",
    [
     "a. How it works: the client’s mail user agent submits to its mail server (port 587); the server looks up the recipient domain’s MX record and opens SMTP (port 25) to the receiver’s server: HELO/EHLO, MAIL FROM, RCPT TO, DATA, message, QUIT; failed deliveries are queued and retried, then bounced.",
     "Causes of delay/failure: DNS/MX lookup errors; receiving server down or greylisting; being on a spam blacklist or failing SPF/DKIM/DMARC; message too large; authentication/TLS misconfiguration; outbound port 25 blocked; queue backlog.",
     "b. Strategies: inspect the mail queue and server logs/bounce codes (4xx temporary, 5xx permanent) and test with telnet/openssl to port 25/587; verify DNS (MX, SPF, DKIM, rDNS) and check blacklists; fix relay/authentication settings and size limits; monitor queue length with alerts."
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 45–120 (SMTP, FTP)",
   "Module 7 slides 150–186 (HTTP)"
  ]
 },
 "11e0ddb907a0df95": {
  "sections": [
   [
    "i) Maximum throughput",
    [
     "Slot = frame time = 1000 bits / 1 Mbps = 1 ms → 1000 slots/s.",
     "Slotted ALOHA peaks at S = 1/e ≈ 0.368 (at G = 1).",
     "Maximum throughput = 0.368 × 1 Mbps ≈ 368 kbps ≈ 368 packets per second."
    ]
   ],
   [
    "ii) Probability of collision",
    [
     "Each user sends 0.5 packet/s; slot = 1 ms → probability a given user transmits in a slot p = 0.5 × 0.001 = 0.0005.",
     "A packet collides if at least one of the other 9 users transmits in the same slot:",
     "P(collision) = 1 − (1 − p)⁹ = 1 − (0.9995)⁹ ≈ 0.00449 (≈ 0.45 %).",
     "(Poisson form: G_others = 9 × 0.0005 = 0.0045, P = 1 − e^(−0.0045) ≈ 0.00449 — the same.) The load is so light that collisions are rare."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on slotted ALOHA"
  ]
 },
 "37f357e939f103cb": {
  "sections": [
   [
    "i) What happens",
    [
     "B sensed ‘idle’ because A’s first bits had not yet reached B (propagation delay). Both frames overlap on the medium → collision; both frames are corrupted.",
     "In plain CSMA neither station notices: each keeps transmitting its entire frame, so the whole frame time is wasted. The loss is discovered only when no acknowledgement arrives (timeout); each station then waits a random back-off time and retransmits.",
     "How CSMA helps: by sensing first it avoids collisions with transmissions already under way; collisions can only happen inside the vulnerable window = propagation time Tp (much shorter than ALOHA’s 2Tfr). Persistence strategies (1-persistent, non-persistent, p-persistent) control how stations retry after sensing busy."
    ]
   ],
   [
    "ii) Advantages of CSMA/CD over CSMA",
    [
     "Early abort: the station keeps listening while sending; on a collision it stops at once and sends a short jam signal, so only about 2Tp of channel time is wasted instead of a whole frame.",
     "Faster recovery: no need to wait for an ACK timeout — collision is known within 2Tp, and binary exponential back-off spreads retries out as load rises.",
     "Higher efficiency: η = 1/(1 + 6.44a) — close to 100 % when frames are long relative to propagation delay.",
     "Fairness and stability under load through the back-off limits; requires a minimum frame size (Tfr ≥ 2Tp) so collisions are always detected."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on CSMA and CSMA/CD"
  ]
 },
 "46b15dd9faf02a13": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Question",
        "Field (hex)",
        "Answer"
       ],
       "rows": [
        [
         "i) Header size",
         "45 → HLEN 5",
         "5 × 4 = 20 bytes"
        ],
        [
         "ii) Options?",
         "20 = minimum",
         "No options"
        ],
        [
         "iii) Data size",
         "Total length 0054 = 84",
         "84 − 20 = 64 bytes"
        ],
        [
         "iv) Fragmented?",
         "0000 → DF 0, MF 0, offset 0",
         "No — complete datagram"
        ],
        [
         "v) More routers",
         "TTL 20 (hex) = 32",
         "32 more hops"
        ]
       ]
      }
     }
    ]
   ],
   [
    "How to read the hex",
    [
     "Bytes 1–2: version/HLEN and TOS; 3–4: total length; 5–6: identification (0003); 7–8: flags + offset; 9: TTL; 10: protocol (66 hex as printed; the usual version of this problem has 06 = TCP)."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 178–219"
  ]
 },
 "4bfd631cf85b05ba": {
  "sections": [
   [
    "Assumption",
    [
     "The question gives no costs for the original links, so each is taken as cost 1; the new link B–E has cost 4."
    ]
   ],
   [
    "(i) LSA flooding after B–E comes up",
    [
     "B and E detect the new adjacency (hello packets), form an adjacency and each originate a new Router LSA with a higher sequence number listing B–E (cost 4).",
     "Flooding: B sends its LSA to A, C, D (and E); E sends to C (and B). Each receiver checks the sequence number — if newer than its stored copy it installs it, acknowledges it and forwards it on every interface except the one it arrived on; older/duplicate copies are dropped.",
     "Within a few hops every router has the same updated link-state database.",
     "Each router then reruns Dijkstra (SPF) with itself as root and rebuilds its routing table; only routes for which B–E is now cheaper change.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 380 235\" width=\"380\" height=\"235\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"77\" y1=\"60\" x2=\"183\" y2=\"60\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"122.4\" y=\"51\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"130\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"69.1\" y1=\"74.3\" x2=\"120.9\" y2=\"155.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"87.4\" y=\"106\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"190.9\" y1=\"74.3\" x2=\"139.1\" y2=\"155.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"157.4\" y=\"106\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"165\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"217\" y1=\"60\" x2=\"313\" y2=\"60\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"257.4\" y=\"51\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"265\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"146.9\" y1=\"172.2\" x2=\"263.1\" y2=\"187.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"197.4\" y=\"171\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"205\" y=\"180\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"208.9\" y1=\"74.5\" x2=\"271.1\" y2=\"175.5\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"232.4\" y=\"116\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"240\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><circle cx=\"60\" cy=\"60\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"60\" y=\"60.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"200\" cy=\"60\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"60.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"130\" cy=\"170\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"130\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"330\" cy=\"60\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"60.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"280\" cy=\"190\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"280\" y=\"190.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><text x=\"190\" y=\"227\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">New link B–E (green) is advertised by both B and E</text></svg>",
      "alt": "New link B–E (green) is advertised by both B and E"
     }
    ]
   ],
   [
    "(ii) Shortest path D → E after the change",
    [
     "D → B → C → E costs 1 + 1 + 1 = 3; D → B → E costs 1 + 4 = 5. So the shortest path stays D → B → C → E with cost 3.",
     "The new link would only be used if the B–C–E path cost more than 4 (e.g. if those links had higher costs)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)",
   "Module 5 ADHD notes p. 16 (LSP flooding, sequence numbers, ageing)"
  ]
 },
 "79decf7eb3a0def8": {
  "sections": [
   [
    "i. Architecture: redundant hierarchical design with industrial rings",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 280\" width=\"640\" height=\"280\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"290,40 350,40\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"410,55 560,95\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"560,125 560,175\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"230,55 100,116\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"410,55 300,116\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"145,130 255,130\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"300,144 300,216\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"255,230 145,230\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"100,216 100,144\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><rect x=\"170\" y=\"25\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"230\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core L3 switch 1</text><rect x=\"350\" y=\"25\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"410\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core L3 switch 2</text><rect x=\"500\" y=\"95\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">OT/IT firewall (DMZ)</text><rect x=\"505\" y=\"175\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">IT network</text><rect x=\"55\" y=\"116\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"100\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">OT ring sw A</text><rect x=\"255\" y=\"116\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">OT ring sw B</text><rect x=\"255\" y=\"216\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">OT ring sw C</text><rect x=\"55\" y=\"216\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"100\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">OT ring sw D</text><text x=\"200\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">industrial Ethernet ring</text><text x=\"200\" y=\"198\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"10.5\">(&lt; 50 ms failover)</text></svg>",
      "alt": "Diagram"
     },
     "Core: two layer-3 switches (redundant pair) in the plant server room. Access: ruggedised industrial switches in each production section connected as a ring (e.g. ITU-T G.8032 ERPS / MRP), with the ring dual-homed to both core switches.",
     "High reliability: a ring tolerates any single cable or switch failure, re-converging in < 50 ms — fast enough not to stop the lines; dual cores remove the central single point of failure; critical machines can be dual-attached (PRP/HSR for zero-loss redundancy)."
    ]
   ],
   [
    "ii. Future-proofing for scalability",
    [
     "Modular switches with spare ports and 10/25 G uplinks; spare fibre pairs in conduits; PoE budget for cameras and sensors.",
     "Hierarchical VLAN/IP plan with room for thousands of IIoT sensors (dedicated sensor VLANs/subnets, IPv6 ready); edge gateways aggregating low-power protocols (Zigbee, LoRaWAN, wireless HART) onto Ethernet; Wi-Fi 6 / private 5G for mobile assets.",
     "Centralised management (SNMP/NetFlow, controller-based configuration) and documentation so new cells can be added without redesign."
    ]
   ],
   [
    "iii. Media and hardware for a harsh environment",
    [
     "Fibre optic (multimode for short runs, single-mode for longer) for backbone and ring links — immune to electromagnetic interference from motors and welders.",
     "Shielded Cat6A (S/FTP) industrial-grade cable with M12/IP67 connectors for machine-level copper runs; armoured or oil/UV-resistant jackets in cable trays.",
     "DIN-rail industrial switches (IEC 61850-3 / IEEE 1613 class, −40 to 75 °C, fanless, IP30–IP67), industrial access points with sealed housings.",
     "Standards: IEEE 802.3 Gigabit/10 G Ethernet, IEEE 802.1Q VLANs, IEEE 802.1p priority, PoE+ (802.3at) for devices."
    ]
   ],
   [
    "iv. QoS for real-time OT traffic",
    [
     "Primary: traffic classification and strict-priority queuing — mark OT control traffic with IEEE 802.1p CoS / DSCP EF at the edge and serve it from a priority queue on every switch, so it never waits behind office traffic.",
     "Secondary: bandwidth reservation and isolation — put OT on its own VLAN with guaranteed bandwidth (weighted fair queuing / policing of IT traffic), or use Time-Sensitive Networking (IEEE 802.1Qbv time-aware scheduling) for deterministic latency.",
     "The OT/IT firewall (with a DMZ for historian/MES servers) provides the required security segmentation: no direct IT → OT traffic."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8",
   "Module 6 slides 146–160 (QoS)"
  ]
 },
 "5c64a285bc5420d6": {
  "sections": [
   [
    "a) Importance of a layered approach",
    [
     "Divides the complex communication task into small, well-defined sub-tasks (modularity); each layer can be designed, tested and replaced independently as long as its interface stays the same (e.g. Wi-Fi replaces Ethernet without changing TCP).",
     "Standard interfaces let vendors build interoperable products; troubleshooting can proceed layer by layer.",
     "Each layer uses the services of the layer below and offers services to the layer above; peer layers on different machines talk through their protocol headers."
    ]
   ],
   [
    "How OSI enables communication",
    [
     {
      "img": "scans/networks/notes/m1-009-007.webp",
      "caption": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)",
      "alt": "OSI layers on two end devices and intermediate nodes: peer-to-peer protocols between matching layers (notes p. 9)"
     },
     {
      "table": {
       "head": [
        "#",
        "Layer",
        "Responsibility",
        "Unit / address",
        "Protocols / devices"
       ],
       "rows": [
        [
         "7",
         "Application",
         "Services for users: e-mail, file transfer, web, remote login, directory",
         "Message",
         "HTTP, FTP, SMTP, DNS, SNMP, Telnet"
        ],
        [
         "6",
         "Presentation",
         "Translation (character codes), encryption/decryption, compression",
         "—",
         "TLS/SSL, JPEG, MPEG, ASCII/Unicode"
        ],
        [
         "5",
         "Session",
         "Dialog control (half/full duplex), synchronisation checkpoints, session setup/teardown",
         "—",
         "RPC, NetBIOS, SIP (session part)"
        ],
        [
         "4",
         "Transport",
         "Process-to-process delivery, segmentation & reassembly, port addressing, connection control, end-to-end flow and error control",
         "Segment / port number",
         "TCP, UDP, SCTP"
        ],
        [
         "3",
         "Network",
         "Host-to-host (source-to-destination) delivery across networks, logical addressing, routing",
         "Packet / IP address",
         "IP, ICMP, OSPF, RIP — routers"
        ],
        [
         "2",
         "Data link",
         "Node-to-node (hop) delivery: framing, physical (MAC) addressing, flow control, error control, media access",
         "Frame / MAC address",
         "Ethernet, Wi-Fi MAC, PPP — switches, bridges"
        ],
        [
         "1",
         "Physical",
         "Transmission of the raw bit stream over the medium: signals, encoding, data rate, synchronisation, topology, transmission mode",
         "Bit",
         "Cables, hubs, repeaters, connectors"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) Disabling transport-layer error checking",
    [
     "Data-link error control protects only individual hops. Errors introduced inside routers/switches (memory faults, software bugs), in a hop without link-level ARQ (Ethernet only discards bad frames), or packets lost/dropped/duplicated/reordered by congestion are not corrected by the data link layer.",
     "Without transport checks the receiving application could accept corrupted, missing, duplicated or out-of-order data silently — e.g. a corrupted file or financial record.",
     "End-to-end argument: only the endpoints can guarantee correctness of the whole path; lower-layer checks just improve performance. The transport (or application) layer must keep its checksum, sequence numbers and retransmission."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "6ce7d27cf2c4c214": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "i. Packets",
         "50 000 000 / 1480 = 33783.78 → round up",
         "33784 packets"
        ],
        [
         "ii. Transmission time (no headers)",
         "50 × 10⁶ × 8 / 5 × 10⁶",
         "80 s"
        ],
        [
         "iii. First packet end-to-end",
         "(1480 + 20) × 8 / 5 Mbps + 80 ms = 2.4 ms + 80 ms",
         "82.4 ms"
        ]
       ]
      }
     }
    ]
   ],
   [
    "iv. Why total ≈ transmission time + one propagation delay",
    [
     "Packets are pipelined: while packet 1 is propagating, packets 2, 3, … are already being pushed onto the link. The propagation delays of different packets overlap in time, so they are not added up.",
     "The sender is busy for the whole transmission time (80 s); the last bit then needs one more propagation delay (80 ms) to arrive: total ≈ 80 s + 0.08 s ≈ 80.08 s (≈ 80.9 s if the 20-byte headers are counted).",
     "Adding every packet’s propagation delay would give 80 s + 33784 × 80 ms ≈ 2783 s — wrong, because it assumes the sender waits for each packet to arrive before sending the next."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "11f7d88de504efb2": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "i. Mask",
         "512 = 2⁹ subnets → borrow 9 bits: /16 + 9 = /25",
         "255.255.255.128"
        ],
        [
         "ii. Addresses per subnet",
         "2^(32−25)",
         "128 (126 allocatable)"
        ],
        [
         "iii. Subnet 1",
         "125.238.0.0/25",
         "125.238.0.1 – 125.238.0.126"
        ],
        [
         "iv. Subnet 14",
         "13 × 128 = 1664 = 6 × 256 + 128 → 125.238.6.128/25",
         "125.238.6.129 – 125.238.6.254"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Note",
    [
     "Subnet k starts at 125.238.0.0 + (k − 1) × 128; the first and last addresses of each block (network and broadcast) are not allocatable."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 61–92"
  ]
 },
 "6084cd8ff28a561b": {
  "sections": [
   [
    "i. Fragmenting 2400 bytes over MTU 700",
    [
     "Data = 2400 − 20 = 2380 bytes; per fragment ⌊(700 − 20)/8⌋ × 8 = 680 bytes → 4 fragments.",
     {
      "table": {
       "head": [
        "Fragment",
        "Total length",
        "Data bytes",
        "Byte range",
        "MF",
        "Offset field",
        "ID"
       ],
       "rows": [
        [
         1,
         700,
         680,
         "0–679",
         1,
         "0",
         422
        ],
        [
         2,
         700,
         680,
         "680–1359",
         1,
         "85 (680/8)",
         422
        ],
        [
         3,
         700,
         680,
         "1360–2039",
         1,
         "170 (1360/8)",
         422
        ],
        [
         4,
         360,
         340,
         "2040–2379",
         0,
         "255 (2040/8)",
         422
        ]
       ]
      }
     },
     "All fragments carry identification 422 and DF = 0; MF = 1 except the last; offsets are byte position ÷ 8."
    ]
   ],
   [
    "ii. IPv6 notations",
    [
     "a) ::0F53:6382:AB00:67DB:BB27:7332 — correct: 6 groups written, ‘::’ stands for the 2 leading zero groups.",
     "b) 7803:42F2::88EC:D4BA:B75D:11CD — correct: 6 groups written, ‘::’ used once for 2 zero groups.",
     "Both are valid (‘::’ appears only once and every group is ≤ 4 hex digits)."
    ]
   ],
   [
    "iii. IPv4 header structure",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 252\" width=\"608\" height=\"252\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"124\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN (4)</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Service type / DSCP (8)</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Total length (16)</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification (16)</text><rect x=\"304\" y=\"56\" width=\"54\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"331\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Flags (3)</text><rect x=\"358\" y=\"56\" width=\"234\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"475\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Fragment offset (13)</text><rect x=\"16\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Time to live (8)</text><rect x=\"160\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Protocol (8)</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Header checksum (16)</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source IP address (32)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination IP address (32)</text><rect x=\"16\" y=\"192\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Options + padding (0–40 bytes)</text><text x=\"304\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)</text></svg>",
      "alt": "IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 322.4 82\" width=\"322.4\" height=\"82\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"101.19999999999999\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><rect x=\"101.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"121.19999999999999\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">0 (reserved)</text><rect x=\"141.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"161.2\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">DF</text><rect x=\"181.2\" y=\"22\" width=\"40\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"201.2\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">MF</text><text x=\"161.2\" y=\"72\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Flags: DF = do not fragment, MF = more fragments</text></svg>",
      "alt": "Flags: DF = do not fragment, MF = more fragments"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219, 226"
  ]
 },
 "45c612f0642ee080": {
  "sections": [
   [
    "i. Why voice/video often use TCP today",
    [
     "Firewalls and NATs often block UDP but always allow TCP (especially HTTP/HTTPS on 80/443), so TCP reaches everyone.",
     "Most video is stored, not live: streaming over HTTP (DASH/HLS) uses large client buffers, so TCP’s retransmission delays are hidden; reliability means no visible artefacts.",
     "TCP’s congestion control makes the stream fair to other traffic and adaptive bit-rate players choose a quality that matches TCP’s throughput.",
     "CDNs, caches and existing web infrastructure work with HTTP/TCP. (Interactive calls still prefer UDP/RTP or QUIC for minimum delay.)"
    ]
   ],
   [
    "ii. Congestion window and congestion policy",
    [
     "cwnd limits unacknowledged data: sending window = min(cwnd, rwnd).",
     "Avoiding congestion: slow start grows cwnd exponentially up to ssthresh, then congestion avoidance grows it by one MSS per RTT, slowly approaching the network’s capacity.",
     "Detecting congestion after it occurs: a timeout (strong sign) → ssthresh = cwnd/2, cwnd = 1, slow start; three duplicate ACKs (mild) → ssthresh = cwnd/2, cwnd = ssthresh (+3), fast retransmit and fast recovery (Reno).",
     {
      "table": {
       "head": [
        "Phase / event",
        "Rule",
        "Effect on cwnd"
       ],
       "rows": [
        [
         "Slow start (cwnd < ssthresh)",
         "cwnd += 1 MSS per ACK",
         "Doubles every RTT (exponential)"
        ],
        [
         "Congestion avoidance (cwnd ≥ ssthresh)",
         "cwnd += 1 MSS per RTT (additive increase)",
         "Linear growth"
        ],
        [
         "3 duplicate ACKs (mild congestion)",
         "ssthresh = cwnd/2; cwnd = ssthresh (+3) — fast retransmit / fast recovery (Reno)",
         "Halves; continue linearly"
        ],
        [
         "Timeout (severe congestion)",
         "ssthresh = cwnd/2; cwnd = 1 MSS",
         "Restart slow start"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 330\" width=\"640\" height=\"330\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"286\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><line x1=\"52\" y1=\"232.4\" x2=\"624\" y2=\"232.4\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"232.4\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">5</text><line x1=\"52\" y1=\"178.8\" x2=\"624\" y2=\"178.8\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"178.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><line x1=\"52\" y1=\"125.2\" x2=\"624\" y2=\"125.2\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"125.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">15</text><line x1=\"52\" y1=\"71.6\" x2=\"624\" y2=\"71.6\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"71.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">20</text><line x1=\"52\" y1=\"18\" x2=\"624\" y2=\"18\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"18\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">25</text><text x=\"52\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><text x=\"83.77777777777777\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">1</text><text x=\"115.55555555555554\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">2</text><text x=\"147.33333333333331\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">3</text><text x=\"179.1111111111111\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">4</text><text x=\"210.88888888888889\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">5</text><text x=\"242.66666666666666\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">6</text><text x=\"274.44444444444446\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">7</text><text x=\"306.2222222222222\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">8</text><text x=\"338\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">9</text><text x=\"369.77777777777777\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">10</text><text x=\"401.5555555555556\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">11</text><text x=\"433.3333333333333\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">12</text><text x=\"465.1111111111111\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">13</text><text x=\"496.8888888888889\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">14</text><text x=\"528.6666666666667\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">15</text><text x=\"560.4444444444443\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">16</text><text x=\"592.2222222222222\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">17</text><text x=\"624\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">18</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><polyline points=\"83.8,275.3 115.6,264.6 147.3,243.1 179.1,200.2 210.9,114.5 242.7,103.8 274.4,93 306.2,82.3 338,71.6 369.8,178.8 401.6,168.1 433.3,157.4 465.1,275.3 496.9,264.6 528.7,243.1 560.4,221.7 592.2,211\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"2\"/><circle cx=\"83.8\" cy=\"275.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"115.6\" cy=\"264.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"147.3\" cy=\"243.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"179.1\" cy=\"200.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"210.9\" cy=\"114.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"242.7\" cy=\"103.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"274.4\" cy=\"93\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"306.2\" cy=\"82.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"338\" cy=\"71.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"369.8\" cy=\"178.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"401.6\" cy=\"168.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"433.3\" cy=\"157.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"465.1\" cy=\"275.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"496.9\" cy=\"264.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"528.7\" cy=\"243.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"560.4\" cy=\"221.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"592.2\" cy=\"211\" r=\"3\" fill=\"#2c5d8f\"/><rect x=\"181.4\" y=\"89.5\" width=\"59\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210.88888888888889\" y=\"98.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">ssthresh</text><rect x=\"302.1\" y=\"76.6\" width=\"71.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"338\" y=\"85.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">3 dup ACKs</text><rect x=\"407\" y=\"162.4\" width=\"52.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"433.3333333333333\" y=\"171.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">timeout</text><text x=\"338\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Transmission round</text><text x=\"14\" y=\"152\" transform=\"rotate(-90 14 152)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#52615a\">cwnd (MSS)</text></svg>",
      "alt": "Chart"
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)"
  ]
 },
 "ba4d257d442e0334": {
  "sections": [
   [
    "i. Decoding the TCP header",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 218\" width=\"608\" height=\"218\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source port 0x0532</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination port 0x0017</text><rect x=\"16\" y=\"56\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Sequence number 0x00000001</text><rect x=\"16\" y=\"90\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Acknowledgment number 0x00000000</text><rect x=\"16\" y=\"124\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN 5</text><rect x=\"88\" y=\"124\" width=\"108\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"142\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Rsvd</text><rect x=\"196\" y=\"124\" width=\"108\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"250\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Flags 000010</text><rect x=\"304\" y=\"124\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Window 0x07FF</text><rect x=\"16\" y=\"158\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Checksum 0x0000</text><rect x=\"304\" y=\"158\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Urgent pointer 0x0000</text><text x=\"304\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">TCP header fields filled with the dump</text></svg>",
      "alt": "TCP header fields filled with the dump"
     },
     {
      "table": {
       "head": [
        "Question",
        "Field (hex)",
        "Answer"
       ],
       "rows": [
        [
         "a. Source port",
         "0532",
         "1330"
        ],
        [
         "b. Sequence number",
         "00000001",
         "1"
        ],
        [
         "c. Acknowledgment number",
         "00000000",
         "0 (ACK flag not set, so unused)"
        ],
        [
         "d. Header length",
         "5 (first nibble of 5002)",
         "5 × 4 = 20 bytes — no options"
        ],
        [
         "e. Segment type",
         "flags 0x02",
         "SYN only → connection request (first segment of the three-way handshake)"
        ],
        [
         "f. Window size",
         "07FF",
         "2047 bytes"
        ]
       ]
      }
     },
     "Destination port 0x0017 = 23 → Telnet; this is a client opening a Telnet connection."
    ]
   ],
   [
    "ii. Traffic shaping",
    [
     "Traffic shaping controls the amount and rate of traffic a source sends into the network, turning bursty traffic into a regulated flow (an open-loop congestion-control technique).",
     "Token bucket: tokens are added to a bucket at rate r up to a capacity b; each packet (or byte) needs a token to be sent. Idle time builds up tokens, so a burst of up to b can go at once, but the long-term rate cannot exceed r. Maximum data in time t = b + r·t.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 190\" width=\"600\" height=\"190\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m28-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"300,40 300,65\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"300,105 300,133\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"185,150 245,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"355,150 415,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><rect x=\"200\" y=\"10\" width=\"200\" height=\"30\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Tokens added at rate r</text><rect x=\"225\" y=\"65\" width=\"150\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Token bucket (size b)</text><rect x=\"55\" y=\"133\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"120\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Packets arrive</text><rect x=\"245\" y=\"133\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Send if token</text><rect x=\"415\" y=\"133\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"480\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Output (burst ≤ b)</text><text x=\"300\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Token bucket: allows bursts up to b, long-term rate r</text></svg>",
      "alt": "Token bucket: allows bursts up to b, long-term rate r"
     },
     "(Leaky bucket is the alternative: output at a strictly constant rate, no bursts.)"
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 50–66 (TCP header)",
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "4512da40da583575": {
  "sections": [
   [
    "i. FTP’s two connections",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 180\" width=\"620\" height=\"180\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2m-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2m-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><polyline points=\"185,75 435,75\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"1.5\" marker-end=\"url(#m2m-2c5d8f)\" marker-start=\"url(#m2m-2c5d8f)\"/><rect x=\"159.3\" y=\"66\" width=\"301.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"310\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">control connection — port 21 (whole session)</text><polyline points=\"185,120 435,120\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"1.5\" marker-end=\"url(#m2m-2f7a4f)\" marker-start=\"url(#m2m-2f7a4f)\"/><rect x=\"185.9\" y=\"111\" width=\"248.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"310\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"11.5\">data connection — port 20 (per file)</text><rect x=\"35\" y=\"30\" width=\"150\" height=\"120\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"110\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Client</text><text x=\"110\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">user interface</text><text x=\"110\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">control process</text><text x=\"110\" y=\"112.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">data process</text><rect x=\"435\" y=\"30\" width=\"150\" height=\"120\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"510\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Server</text><text x=\"510\" y=\"82.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\"></text><text x=\"510\" y=\"97.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">control process</text><text x=\"510\" y=\"112.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">data process</text><text x=\"310\" y=\"172\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">FTP uses two TCP connections</text></svg>",
      "alt": "FTP uses two TCP connections"
     },
     "Control connection (port 21): opened once, stays open for the whole session; carries commands (USER, PASS, LIST, RETR, STOR, QUIT) and replies, one line at a time (NVT ASCII).",
     "Data connection (port 20 or a passive port): opened for each file or directory listing and closed after the transfer; carries the actual data."
    ]
   ],
   [
    "File types and transmission modes",
    [
     {
      "table": {
       "head": [
        "File types",
        "Transmission modes"
       ],
       "rows": [
        [
         "ASCII file (text, default)",
         "Stream mode (default): data sent as a continuous stream of bytes; end of file = closing the data connection"
        ],
        [
         "EBCDIC file (IBM text)",
         "Block mode: data sent in blocks, each with a 3-byte header (descriptor + size) — supports restart"
        ],
        [
         "Image (binary) file: sent as a continuous bit stream without interpretation",
         "Compressed mode: run-length encoding compresses repeated bytes"
        ]
       ]
      }
     },
     "(Data structures: file, record or page structure.)"
    ]
   ],
   [
    "ii. Domain name space",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 250\" width=\"640\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"320,39 70,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 150,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 230,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 350,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 430,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,39 560,81\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"350,109 350,141\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"350,169 350,196\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"560,109 560,141\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"285\" y=\"11\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">root ( . )</text><rect x=\"42\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">com</text><rect x=\"122\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">edu</text><rect x=\"202\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"230\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">org</text><rect x=\"322\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">in</text><rect x=\"402\" y=\"81\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"430\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">uk</text><rect x=\"525\" y=\"81\" width=\"70\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">arpa</text><rect x=\"322\" y=\"141\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">ac</text><rect x=\"322\" y=\"196\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">vit</text><rect x=\"515\" y=\"141\" width=\"90\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"155\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">in-addr</text><text x=\"150\" y=\"140\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Generic domains</text><text x=\"390\" y=\"135\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Country domains</text><text x=\"560\" y=\"195\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"700\" font-size=\"11.5\">Inverse domain</text><text x=\"420\" y=\"215\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">→ chennai → ece</text><text x=\"320\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Domain name space: an inverted tree of labels (max depth 128, each label ≤ 63 characters)</text></svg>",
      "alt": "Domain name space: an inverted tree of labels (max depth 128, each label ≤ 63 characters)"
     },
     "Generic domains: classify hosts by organisation type — com, edu, gov, org, net, mil, int, plus newer ones (info, biz, …).",
     "Country domains: two-letter country codes (in, uk, us, …), often with second-level labels (ac.in, co.uk).",
     "Inverse domain: in-addr.arpa (ip6.arpa for IPv6) maps an IP address back to a name (PTR records), e.g. 1.2.3.4 → 4.3.2.1.in-addr.arpa.",
     "Each node has a label (≤ 63 characters); a node’s domain name is the sequence of labels up to the root; a domain is a subtree; zones are the parts a server is responsible for."
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 8–26 (name space)",
   "Module 7 slides 95–120 (FTP)"
  ]
 },
 "d9de15831835c4d8": {
  "sections": [
   [
    "Stop-and-wait to a distant planet",
    [
     "Tp = 9 × 10¹⁰ / 3 × 10⁸ = 300 s.",
     "Frame = 32 KB = 32 × 1024 × 8 = 262 144 bits; Tt = 262 144 / 64 × 10⁶ = 4.096 ms.",
     "Utilisation U = Tt / (Tt + 2Tp) = 0.004096 / 600.004096 ≈ 6.83e-6 (≈ 0.00068 %).",
     "The link is idle almost all the time — stop-and-wait is useless for such a long-delay path; a large sliding window would be needed."
    ]
   ],
   [
    "Pure ALOHA — maximum N",
    [
     "Each station: 1000 bits / 100 s = 10 bps. Usable pure-ALOHA capacity = 18.4 % × 56 kbps ≈ 10 304 bps.",
     "N = 10 304 / 10 ≈ 1030 stations."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Stop-and-Wait efficiency and ALOHA"
  ]
 },
 "9802f4cff5f3c70b": {
  "sections": [
   [
    "Answer",
    [
     "CRC = 10010011; transmitted message = 1011 0010 0100 1011 10010011. If the leftmost bit is inverted, the receiver’s remainder is 10110110 (non-zero), so the error is detected."
    ]
   ],
   [
    "i. Polynomial long division",
    [
     "Generator x⁸ + x² + x + 1 = 100000111 (degree 8) → append 8 zeros: 1011001001001011 00000000",
     "100000111 ) 101100100100101100000000\n            100000111\n            ─────────\n              110001110\n              100000111\n              ─────────\n               100010010\n               100000111\n               ─────────\n                   101011011\n                   100000111\n                   ─────────\n                     101110000\n                     100000111\n                     ─────────\n                       111011100\n                       100000111\n                       ─────────\n                        110110110\n                        100000111\n                        ─────────\n                         101100010\n                         100000111\n                         ─────────\n                           110010100\n                           100000111\n                           ─────────\n                            10010011   ← remainder",
     "Remainder (CRC) = 10010011 → transmitted codeword = 1011001001001011 10010011"
    ]
   ],
   [
    "ii. Leftmost bit inverted",
    [
     "Received: 001100100100101110010011",
     "100000111 ) 001100100100101110010011\n              100000111\n              ─────────\n               100101010\n               100000111\n               ─────────\n                  101101101\n                  100000111\n                  ─────────\n                    110101011\n                    100000111\n                    ─────────\n                     101011000\n                     100000111\n                     ─────────\n                       101111101\n                       100000111\n                       ─────────\n                         111101000\n                         100000111\n                         ─────────\n                          111011111\n                          100000111\n                          ─────────\n                           110110001\n                           100000111\n                           ─────────\n                            10110110   ← remainder",
     "Remainder = 10110110 ≠ 00000000. The receiver divides the whole received codeword by the same generator; a correct codeword is an exact multiple of G(x), so any non-zero remainder means an error.",
     "Why it must be caught: the error polynomial is E(x) = x¹⁵⁺⁸ = x²³, a single term; G(x) has more than one term (it contains the +1), so G(x) can never divide xⁱ → every single-bit error is detected."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m3-015-015.webp",
      "caption": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)",
      "alt": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)",
   "Figures: notes p. 15"
  ]
 },
 "b851823137046e8d": {
  "sections": [
   [
    "1. Initial distance table of C",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         2,
         "A"
        ],
        [
         "B",
         "∞",
         "—"
        ],
        [
         "C",
         0,
         "—"
        ],
        [
         "D",
         1,
         "D"
        ],
        [
         "E",
         "∞",
         "—"
        ],
        [
         "F",
         18,
         "F"
        ]
       ]
      },
      "caption": "C knows only its links C–A (2), C–D (1), C–F (18)."
     }
    ]
   ],
   [
    "2. Shortest paths from C",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Initial",
        "After round 1",
        "After round 2",
        "After round 3",
        "After round 4",
        "After round 5"
       ],
       "rows": [
        [
         "A",
         "2 via A",
         "2 via A",
         "2 via A",
         "2 via A",
         "2 via A",
         "2 via A"
        ],
        [
         "B",
         "∞",
         "3 via D",
         "3 via D",
         "3 via D",
         "3 via D",
         "3 via D"
        ],
        [
         "C",
         "0",
         "0",
         "0",
         "0",
         "0",
         "0"
        ],
        [
         "D",
         "1 via D",
         "1 via D",
         "1 via D",
         "1 via D",
         "1 via D",
         "1 via D"
        ],
        [
         "E",
         "∞",
         "12 via D",
         "4 via D",
         "4 via D",
         "4 via D",
         "4 via D"
        ],
        [
         "F",
         "18 via F",
         "7 via D",
         "7 via D",
         "6 via D",
         "6 via D",
         "6 via D"
        ]
       ]
      },
      "caption": "Distance vector of C (cost via next hop). Stable after round 4."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         2,
         "A"
        ],
        [
         "B",
         3,
         "D"
        ],
        [
         "C",
         0,
         "—"
        ],
        [
         "D",
         1,
         "D"
        ],
        [
         "E",
         4,
         "D"
        ],
        [
         "F",
         6,
         "D"
        ]
       ]
      },
      "caption": "Final routing table of C"
     },
     "Paths: A = C→A (2); B = C→D→B (3); D = C→D (1); E = C→D→B→E (4); F = C→D→B→E→F (6).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 430 315\" width=\"430\" height=\"315\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"61\" y1=\"89.3\" x2=\"184\" y2=\"45.7\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"114.9\" y=\"58.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"61.2\" y1=\"100.2\" x2=\"183.8\" y2=\"139.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"111.3\" y=\"111\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"122.5\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"200\" y1=\"57\" x2=\"200\" y2=\"128\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"192.4\" y=\"83.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"200\" y=\"92.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"215.5\" y1=\"46.9\" x2=\"364.5\" y2=\"113.1\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"278.8\" y=\"71\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"80\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">18</text><line x1=\"216.8\" y1=\"142.7\" x2=\"363.2\" y2=\"122.3\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"282.4\" y=\"123.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"290\" y=\"132.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><line x1=\"123.4\" y1=\"204.6\" x2=\"186.6\" y2=\"155.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"147.4\" y=\"171\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"155\" y=\"180\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"126.2\" y1=\"220\" x2=\"223.8\" y2=\"250\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"167.4\" y=\"226\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"175\" y=\"235\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"205.8\" y1=\"161\" x2=\"234.2\" y2=\"239\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"208.8\" y=\"191\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"220\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"252.2\" y1=\"243.2\" x2=\"367.8\" y2=\"131.8\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"302.4\" y=\"178.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"310\" y=\"187.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><circle cx=\"45\" cy=\"95\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"45\" y=\"95.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"37.7\" y=\"114\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"45\" y=\"123\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">2</text><circle cx=\"200\" cy=\"40\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"200\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"192.7\" y=\"59\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"200\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"200\" cy=\"145\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"145.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"192.7\" y=\"164\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"200\" y=\"173\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"380\" cy=\"120\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"380\" y=\"120.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"372.7\" y=\"139\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"380\" y=\"148\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"110\" cy=\"215\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"110\" y=\"215.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"102.7\" y=\"234\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"110\" y=\"243\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">3</text><circle cx=\"240\" cy=\"255\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"240\" y=\"255.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"232.7\" y=\"274\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"240\" y=\"283\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><text x=\"215\" y=\"307\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from C</text></svg>",
      "alt": "Shortest-path tree from C"
     }
    ]
   ],
   [
    "ii. Deciding that a host is unreachable",
    [
     "Problem: count-to-infinity. When a destination becomes unreachable, neighbours that still hold (stale) routes keep advertising finite costs, and routers increase the cost by one step per exchange instead of learning ‘unreachable’ at once. Routing loops exist meanwhile.",
     "It is impossible to resolve with split horizon/poison reverse when there is a loop of three or more routers (e.g. X, Y, Z all mutually connected): each learns the stale route from a different neighbour, so the poisoned advertisement never reaches the router that created the loop. Only the ‘infinity’ limit (16 in RIP) eventually stops it — which also limits network diameter to 15 hops.",
     {
      "img": "scans/networks/notes/m5-009-016.webp",
      "caption": "Two-node instability / count to infinity (notes p. 9)",
      "alt": "Two-node instability / count to infinity (notes p. 9)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "67d883989177557f": {
  "sections": [
   [
    "Answer",
    [
     "Links are one-way (arrows), so only outgoing edges are relaxed.",
     "From F: A = 4 (F→A), B = 6 (F→A→B), C = 6 (F→D→C), D = 1 (F→D), E = 14 (F→A→B→G→E), G = 10 (F→A→B→G)."
    ]
   ],
   [
    "Dijkstra from F",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(A), p(A)",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)",
        "D(G), p(G)"
       ],
       "rows": [
        [
         0,
         "F",
         "4, F",
         "∞",
         "∞",
         "1, F",
         "∞",
         "∞"
        ],
        [
         1,
         "FD",
         "4, F",
         "∞",
         "6, D",
         "1, F",
         "∞",
         "∞"
        ],
        [
         2,
         "FDA",
         "4, F",
         "6, A",
         "6, D",
         "—",
         "∞",
         "∞"
        ],
        [
         3,
         "FDAB",
         "—",
         "6, A",
         "6, D",
         "—",
         "∞",
         "10, B"
        ],
        [
         4,
         "FDABC",
         "—",
         "—",
         "6, D",
         "—",
         "∞",
         "10, B"
        ],
        [
         5,
         "FDABCG",
         "—",
         "—",
         "—",
         "—",
         "14, G",
         "10, B"
        ],
        [
         6,
         "FDABCGE",
         "—",
         "—",
         "—",
         "—",
         "14, G",
         "—"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "A",
         "F → A",
         4,
         "A"
        ],
        [
         "B",
         "F → A → B",
         6,
         "A"
        ],
        [
         "C",
         "F → D → C",
         6,
         "D"
        ],
        [
         "D",
         "F → D",
         1,
         "D"
        ],
        [
         "E",
         "F → A → B → G → E",
         14,
         "A"
        ],
        [
         "G",
         "F → A → B → G",
         10,
         "A"
        ]
       ]
      },
      "caption": "Routing table at F"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 420 285\" width=\"420\" height=\"285\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m23-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker><marker id=\"m23-9fb3a5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#9fb3a5\"/></marker></defs><line x1=\"74.4\" y1=\"125.9\" x2=\"193.9\" y2=\"50.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"127.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"135\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"210\" y1=\"57\" x2=\"210\" y2=\"116\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"202.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"224.4\" y1=\"49.1\" x2=\"343.9\" y2=\"124.8\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"277.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"285\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"343\" y1=\"135\" x2=\"229\" y2=\"135\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"277.4\" y=\"126\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"285\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"193\" y1=\"135\" x2=\"79\" y2=\"135\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"127.4\" y=\"126\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"135\" y=\"135\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"60\" y1=\"152\" x2=\"60\" y2=\"226\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"52.4\" y=\"181\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"60\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">1</text><line x1=\"73.7\" y1=\"234.9\" x2=\"194.7\" y2=\"146.2\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"127.4\" y=\"181\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"135\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"210\" y1=\"218\" x2=\"210\" y2=\"154\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"202.4\" y=\"176\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"210\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"193\" y1=\"236.1\" x2=\"79\" y2=\"243.7\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"127.4\" y=\"231\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"135\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"346.3\" y1=\"234.9\" x2=\"225.3\" y2=\"146.2\" stroke=\"#9fb3a5\" stroke-width=\"1.6\" marker-end=\"url(#m23-9fb3a5)\"/><rect x=\"277.4\" y=\"181\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"285\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"360\" y1=\"152\" x2=\"360\" y2=\"226\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"352.4\" y=\"181\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"360\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"343\" y1=\"243.9\" x2=\"229\" y2=\"236.3\" stroke=\"#2f7a4f\" stroke-width=\"3.2\" marker-end=\"url(#m23-2f7a4f)\"/><rect x=\"277.4\" y=\"231\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"285\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><circle cx=\"210\" cy=\"40\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"202.7\" y=\"59\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"210\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"60\" cy=\"135\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"60\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"52.7\" y=\"154\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"60\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"210\" cy=\"135\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"202.7\" y=\"154\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"210\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"360\" cy=\"135\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"360\" y=\"135.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"352.7\" y=\"154\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"360\" y=\"163\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">6</text><circle cx=\"60\" cy=\"245\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"60\" y=\"245.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"52.7\" y=\"264\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"60\" y=\"273\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">1</text><circle cx=\"210\" cy=\"235\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"210\" y=\"235.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"199.3\" y=\"254\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"210\" y=\"263\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><circle cx=\"360\" cy=\"245\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"360\" y=\"245.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">G</text><rect x=\"349.3\" y=\"264\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"360\" y=\"273\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><text x=\"210\" y=\"277\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from F (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from F (green) · blue = final cost"
     }
    ]
   ],
   [
    "Key observations",
    [
     "C has two equal-cost routes: F→A→C (4 + 2) and F→D→C (1 + 5) both cost 6.",
     "E and G are reachable only through B → G, so they come last (G = 10, E = 14)."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "b0b2da1348f320e1": {
  "sections": [
   [
    "a) OSI layers for a chat message (with protocols)",
    [
     {
      "table": {
       "head": [
        "Layer",
        "At the client (sending)",
        "Protocols"
       ],
       "rows": [
        [
         "7 Application",
         "Chat app creates the message",
         "HTTP/WebSocket, XMPP, MQTT; DNS to find the server"
        ],
        [
         "6 Presentation",
         "Encode (UTF-8/JSON), compress, encrypt",
         "TLS, JSON/Protobuf"
        ],
        [
         "5 Session",
         "Keep the chat session open, re-establish after drops",
         "TLS session, WebSocket session"
        ],
        [
         "4 Transport",
         "Segment, add ports (client 50xxx → server 443), reliable ordered delivery",
         "TCP (or UDP for voice/video calls)"
        ],
        [
         "3 Network",
         "Add source/destination IP, choose next hop (default gateway)",
         "IPv4/IPv6, ICMP"
        ],
        [
         "2 Data link",
         "Frame with MAC addresses (ARP for gateway MAC), CRC",
         "Ethernet 802.3, Wi-Fi 802.11"
        ],
        [
         "1 Physical",
         "Send bits as signals",
         "Copper, fibre, radio"
        ]
       ]
      }
     },
     "The server reverses the process (1 → 7). The switch reads only layer-2 headers to forward the frame; the router strips the frame, reads the IP header, decrements TTL, picks the next hop and builds a new frame with new MAC addresses."
    ]
   ],
   [
    "b) Architecture: client → switch → router → server",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 686 274\" width=\"686\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m6-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"607\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Server</text><rect x=\"548\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"548\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"548\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"548\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"548\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"548\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"548\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,163 323,163 323,232 363,232 363,137 499,137 499,232 539,232 539,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#m6-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"666\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><rect x=\"138.6\" y=\"237\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"167\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">Ethernet</text><rect x=\"314.6\" y=\"237\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">Ethernet</text><rect x=\"472.4\" y=\"237\" width=\"93.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"519\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">WAN / Internet</text><text x=\"343\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">End hosts use all 7 layers; the switch works up to layer 2, the router up to layer 3</text></svg>",
      "alt": "End hosts use all 7 layers; the switch works up to layer 2, the router up to layer 3"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "ca6e765fdeafa5d3": {
  "sections": [
   [
    "Model",
    [
     "Setup is a two-way exchange and teardown a one-way message, so control signalling costs three propagation times and three control-message transmission times; the data transfer then costs one propagation time plus the data transmission time (Forouzan’s method).",
     "Tp = 4000 km / 2 × 10⁸ m/s = 20 ms; control transmission = 1500 / 2 Mbps = 0.75 ms.",
     "Setup + teardown = 3 × (20 ms + 0.75 ms) = 62.25 ms."
    ]
   ],
   [
    "Total delays",
    [
     {
      "table": {
       "head": [
        "Data bits",
        "Data transmission",
        "Data phase (Tp + Tt)",
        "Total delay",
        "Delay per 1500 bits"
       ],
       "rows": [
        [
         "2,000",
         "1 ms",
         "21 ms",
         "83.25 ms",
         "62.438 ms"
        ],
        [
         "5,00,000",
         "250 ms",
         "270 ms",
         "332.25 ms",
         "0.997 ms"
        ],
        [
         "50,00,000",
         "2500 ms",
         "2520 ms",
         "2582.25 ms",
         "0.775 ms"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Conclusion",
    [
     "The setup/teardown overhead is fixed, so it dominates short exchanges and becomes negligible for long ones. The delay per unit of data falls sharply as the amount of data grows — circuit switching is efficient for long, continuous transfers and inefficient for short bursts."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "a103fded1e2b56a5": {
  "sections": [
   [
    "Answer",
    [
     "Host B receives 7 fragments. (A → R1 link: 3 fragments; after R1: 5; after R2: 7.)"
    ]
   ],
   [
    "i. Fragmentation along the path (20-byte headers)",
    [
     "8400 bytes cannot even leave A on a 3500-byte MTU, so A (the source) fragments first; routers never reassemble — each router only splits fragments that are too large for the next link.",
     {
      "table": {
       "head": [
        "#",
        "Total length",
        "Data",
        "Bytes",
        "MF",
        "Offset"
       ],
       "rows": [
        [
         1,
         3500,
         3480,
         "0–3479",
         1,
         0
        ],
        [
         2,
         3500,
         3480,
         "3480–6959",
         1,
         435
        ],
        [
         3,
         1440,
         1420,
         "6960–8379",
         0,
         870
        ]
       ]
      },
      "caption": "Sent by A (MTU 3500: up to 3480 data bytes)"
     },
     {
      "table": {
       "head": [
        "#",
        "Total length",
        "Data",
        "Bytes",
        "MF",
        "Offset"
       ],
       "rows": [
        [
         1,
         2500,
         2480,
         "0–2479",
         1,
         0
        ],
        [
         2,
         1020,
         1000,
         "2480–3479",
         1,
         310
        ],
        [
         3,
         2500,
         2480,
         "3480–5959",
         1,
         435
        ],
        [
         4,
         1020,
         1000,
         "5960–6959",
         1,
         745
        ],
        [
         5,
         1440,
         1420,
         "6960–8379",
         0,
         870
        ]
       ]
      },
      "caption": "After R1 (MTU 2500: up to 2480 data bytes)"
     },
     {
      "table": {
       "head": [
        "#",
        "Total length",
        "Data",
        "Bytes",
        "MF",
        "Offset"
       ],
       "rows": [
        [
         1,
         1500,
         1480,
         "0–1479",
         1,
         0
        ],
        [
         2,
         1020,
         1000,
         "1480–2479",
         1,
         185
        ],
        [
         3,
         1020,
         1000,
         "2480–3479",
         1,
         310
        ],
        [
         4,
         1500,
         1480,
         "3480–4959",
         1,
         435
        ],
        [
         5,
         1020,
         1000,
         "4960–5959",
         1,
         620
        ],
        [
         6,
         1020,
         1000,
         "5960–6959",
         1,
         745
        ],
        [
         7,
         1440,
         1420,
         "6960–8379",
         0,
         870
        ]
       ]
      },
      "caption": "After R2 (MTU 1500: up to 1480 data bytes) — received by B"
     }
    ]
   ],
   [
    "ii. Fields updated at R1 and R2",
    [
     "Total length, MF flag, fragment offset and header checksum (and TTL as always). Identification, DF, protocol and addresses are copied unchanged into every fragment.",
     "Offsets stay relative to the original datagram, and a fragment cut from a non-last fragment keeps MF = 1."
    ]
   ],
   [
    "iii. Header of each fragment at B",
    [
     "Every fragment: Version 4 | HLEN 5 | TOS 0 | Total length (column) | same Identification | Flags 0 DF=0 MF | Offset (column) | TTL − hops | Protocol | new checksum | A → B addresses.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 252\" width=\"608\" height=\"252\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"52\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Version (4)</text><rect x=\"88\" y=\"22\" width=\"72\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"124\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">HLEN (4)</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Service type / DSCP (8)</text><rect x=\"304\" y=\"22\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Total length (16)</text><rect x=\"16\" y=\"56\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"160\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Identification (16)</text><rect x=\"304\" y=\"56\" width=\"54\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"331\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Flags (3)</text><rect x=\"358\" y=\"56\" width=\"234\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"475\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Fragment offset (13)</text><rect x=\"16\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Time to live (8)</text><rect x=\"160\" y=\"90\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Protocol (8)</text><rect x=\"304\" y=\"90\" width=\"288\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"448\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Header checksum (16)</text><rect x=\"16\" y=\"124\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Source IP address (32)</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Destination IP address (32)</text><rect x=\"16\" y=\"192\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Options + padding (0–40 bytes)</text><text x=\"304\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)</text></svg>",
      "alt": "IPv4 header: 20 bytes fixed + up to 40 bytes options (orange = fragmentation fields)"
     }
    ]
   ],
   [
    "iv. Count at host B",
    [
     "7 fragments: 1500 + 1020 + 1020 + 1500 + 1020 + 1020 + 1440 bytes of datagrams carrying 8380 data bytes (= 8380). B reassembles them using identification + offset, finishing when the MF = 0 fragment and all gaps are filled."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219"
  ]
 },
 "e4a704e09f00c1be": {
  "sections": [
   [
    "Design (largest blocks first so every block is aligned)",
    [
     "256 → /24, 128 → /25, 64 → /26, 32 → /27.",
     {
      "table": {
       "head": [
        "Group",
        "Customers × size",
        "Prefix",
        "First customer",
        "Last customer",
        "Group range"
       ],
       "rows": [
        [
         "Delhi",
         "50 × 256",
         "/24",
         "180.0.0.0/24 (180.0.0.0 – 180.0.0.255)",
         "180.0.49.0/24 (180.0.49.0 – 180.0.49.255)",
         "180.0.0.0 – 180.0.49.255"
        ],
        [
         "Mumbai",
         "50 × 128",
         "/25",
         "180.0.50.0/25 (180.0.50.0 – 180.0.50.127)",
         "180.0.74.128/25 (180.0.74.128 – 180.0.74.255)",
         "180.0.50.0 – 180.0.74.255"
        ],
        [
         "Chennai",
         "100 × 64",
         "/26",
         "180.0.75.0/26 (180.0.75.0 – 180.0.75.63)",
         "180.0.99.192/26 (180.0.99.192 – 180.0.99.255)",
         "180.0.75.0 – 180.0.99.255"
        ],
        [
         "Bangalore",
         "100 × 32",
         "/27",
         "180.0.100.0/27 (180.0.100.0 – 180.0.100.31)",
         "180.0.112.96/27 (180.0.112.96 – 180.0.112.127)",
         "180.0.100.0 – 180.0.112.127"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"117.2\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"78.59375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Delhi</text><text x=\"78.59375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">50 × /24</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">180.0.0.0</text><rect x=\"137.2\" y=\"30\" width=\"58.6\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"166.484375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Mumbai</text><text x=\"166.484375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">50 × /25</text><line x1=\"137.2\" y1=\"76\" x2=\"137.2\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"139.1875\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">180.0.50.0</text><rect x=\"195.8\" y=\"30\" width=\"58.6\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"225.078125\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Chennai</text><text x=\"225.078125\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">100 × /26</text><line x1=\"195.8\" y1=\"76\" x2=\"195.8\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"197.78125\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">180.0.75.0</text><rect x=\"254.4\" y=\"30\" width=\"29.3\" height=\"46\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><line x1=\"254.4\" y1=\"76\" x2=\"254.4\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"256.375\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">180.0.100.0</text><rect x=\"283.7\" y=\"30\" width=\"336.3\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"451.8359375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"451.8359375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">36736</text><line x1=\"283.7\" y1=\"76\" x2=\"283.7\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"285.671875\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">180.0.112.128</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">180.0.0.0/16</text></svg>",
      "alt": "180.0.0.0/16"
     }
    ]
   ],
   [
    "v. Addresses available after allocation",
    [
     "Allocated = 50 × 256 + 50 × 128 + 100 × 64 + 100 × 32 = 12 800 + 6400 + 6400 + 3200 = 28800. Available = 65 536 − 28800 = 36736 (180.0.112.128 – 180.0.255.255)."
    ]
   ],
   [
    "Note",
    [
     "Allocating in the listed order (Mumbai first) would need padding before Delhi’s /24 blocks (Delhi would start at 180.0.63.0 after skipping 128 addresses); ordering by size avoids that waste."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126"
  ]
 },
 "ceada37371c8bedb": {
  "sections": [
   [
    "Open-loop methods (prevention)",
    [
     "Admission control and capacity planning: reject or reschedule jobs whose bandwidth would exceed link capacity; place workloads to avoid hot spots.",
     "Traffic shaping (token bucket per tenant/VM) and rate limiting at hypervisors/top-of-rack switches to cap bursts (e.g. backup jobs).",
     "Retransmission/ACK/window policies tuned for the data centre (selective ACKs, delayed ACKs), discarding policy (drop low-priority packets first), QoS classes with scheduling (WFQ, priority) and load-balanced multipath routing (ECMP)."
    ]
   ],
   [
    "Closed-loop methods (detection and reaction)",
    [
     "Implicit feedback: TCP congestion control reduces cwnd on loss/delay.",
     "Explicit feedback: ECN marking at switch queues; DCTCP scales its window to the fraction of marked packets, keeping queues short; choke packets/back-pressure (Ethernet PAUSE, priority flow control) stop upstream senders.",
     "Monitoring (SNMP, sFlow) triggers re-routing or migration of heavy flows."
    ]
   ],
   [
    "Which is optimal?",
    [
     {
      "table": {
       "head": [
        "",
        "Open-loop (prevention)",
        "Closed-loop (removal)"
       ],
       "rows": [
        [
         "Idea",
         "Policies that stop congestion before it happens",
         "Detect congestion and react through feedback"
        ],
        [
         "Feedback",
         "None — decided in advance",
         "Yes — from network or receiver"
        ],
        [
         "Mechanisms",
         "Retransmission policy, window policy (Selective Repeat), acknowledgment policy (delayed/cumulative ACKs), discarding policy (drop less important packets), admission policy, traffic shaping (leaky/token bucket)",
         "Back-pressure, choke packets (ICMP source quench), implicit signalling (TCP sees loss/delay), explicit signalling (ECN bits, forward/backward)"
        ],
        [
         "Pros",
         "Simple, no signalling delay, predictable",
         "Adapts to actual load, uses capacity fully"
        ],
        [
         "Cons",
         "Cannot react to unexpected load; may under-use capacity",
         "Reacts after the fact; feedback delay can cause oscillation"
        ]
       ]
      }
     },
     "Neither alone. Open-loop measures prevent most congestion cheaply but cannot predict sudden peaks; closed-loop measures handle the peaks that still occur. For a data centre the best practice is shaping + admission control + QoS classes (open loop) combined with ECN-based DCTCP and fast feedback (closed loop). If one must be chosen for peak-time slowdowns, closed-loop control is more effective because it reacts to the actual load."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)",
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "cb041b3a9a926e37": {
  "sections": [
   [
    "i. Packets dropped",
    [
     "Input 50 packets/s, output 10 packets/s → the bucket fills at 40 packets/s and is full after 100 / 40 = 2.5 s; after that 40 packets/s overflow.",
     "Total: arrived 250, leaked 50, held 100 → dropped = 250 − 50 − 100 = 100 packets.",
     {
      "table": {
       "head": [
        "Second",
        "Arrive",
        "Dropped",
        "In bucket after leak"
       ],
       "rows": [
        [
         1,
         50,
         0,
         40
        ],
        [
         2,
         50,
         0,
         80
        ],
        [
         3,
         50,
         30,
         90
        ],
        [
         4,
         50,
         40,
         90
        ],
        [
         5,
         50,
         40,
         90
        ]
       ]
      },
      "caption": "Step-by-step check (arrivals at the start of each second, then 10 leak): dropped 110 — the small difference comes only from treating arrivals as one burst per second."
     }
    ]
   ],
   [
    "ii. Bucket size for bursts of 200 every 10 s, output 20 packets/s",
    [
     "Average input = 200 / 10 s = 20 packets/s = output rate, so the bucket only needs to hold one burst: if the 200 packets arrive at once, size ≥ 200 packets. They drain in exactly 200 / 20 = 10 s, just before the next burst.",
     "(If the burst itself lasts t seconds, the bucket can be 200 − 20t smaller.)"
    ]
   ],
   [
    "iii. Input above 5 Mbps",
    [
     "The output stays at exactly 5 Mbps; the excess (up to 5 Mbps when input is 10 Mbps) accumulates in the bucket. When input later falls below 5 Mbps (e.g. 2 Mbps) the backlog drains. If the input stays above 5 Mbps long enough to fill the bucket, the overflow is dropped — so the bucket must be sized for the longest burst above 5 Mbps, and the average input must not exceed 5 Mbps.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 200\" width=\"600\" height=\"200\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m27-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker><marker id=\"m27-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><polyline points=\"160,60 300,60 300,40\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"300,140 300,165 300,165 425,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m27-152b24)\"/><polyline points=\"355,60 420,60\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"1.5\" marker-end=\"url(#m27-b3412c)\"/><rect x=\"333.5\" y=\"51\" width=\"108.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"387.5\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11.5\">overflow → drop</text><rect x=\"20\" y=\"40\" width=\"140\" height=\"40\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"90\" y=\"52.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bursty input</text><text x=\"90\" y=\"67.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(variable rate)</text><rect x=\"245\" y=\"40\" width=\"110\" height=\"100\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"75\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Bucket</text><text x=\"300\" y=\"90\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(queue of</text><text x=\"300\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">capacity C)</text><rect x=\"425\" y=\"130\" width=\"150\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"500\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Smooth output</text><text x=\"500\" y=\"157.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">at fixed rate r</text><text x=\"300\" y=\"192\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Leaky bucket: any burst leaves at rate r; excess beyond C is discarded</text></svg>",
      "alt": "Leaky bucket: any burst leaves at rate r; excess beyond C is discarded"
     }
    ]
   ],
   [
    "iv. Token bucket burst",
    [
     "Rate = 1 token / 100 ms = 10 tokens/s; capacity 50 tokens.",
     "Maximum instantaneous burst = 50 requests (a full bucket). Over a longer burst of t seconds the maximum is 50 + 10t (e.g. 60 requests in 1 s), and the sustained rate is 10 requests/s.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 190\" width=\"600\" height=\"190\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m28-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"300,40 300,65\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"300,105 300,133\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"185,150 245,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><polyline points=\"355,150 415,150\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m28-152b24)\"/><rect x=\"200\" y=\"10\" width=\"200\" height=\"30\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"25\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Tokens added at rate r</text><rect x=\"225\" y=\"65\" width=\"150\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"85\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Token bucket (size b)</text><rect x=\"55\" y=\"133\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"120\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Packets arrive</text><rect x=\"245\" y=\"133\" width=\"110\" height=\"34\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Send if token</text><rect x=\"415\" y=\"133\" width=\"130\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"480\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Output (burst ≤ b)</text><text x=\"300\" y=\"182\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Token bucket: allows bursts up to b, long-term rate r</text></svg>",
      "alt": "Token bucket: allows bursts up to b, long-term rate r"
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "0f1426938a63557b": {
  "sections": [
   [
    "i. DNS caching under heavy load",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 660 250\" width=\"660\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2n-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker><marker id=\"m2n-9fb3a5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#9fb3a5\"/></marker></defs><polyline points=\"70,65 175,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2n-152b24)\"/><polyline points=\"125,110 175,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2n-152b24)\"/><polyline points=\"70,155 175,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2n-152b24)\"/><polyline points=\"285,110 330,110\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2n-152b24)\"/><rect x=\"273.5\" y=\"101\" width=\"68\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"307.5\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">miss only</text><polyline points=\"400,88 590,54\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" marker-end=\"url(#m2n-9fb3a5)\"/><rect x=\"437.6\" y=\"62\" width=\"114.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"495\" y=\"71\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#9fb3a5\" font-weight=\"600\" font-size=\"11.5\">first query only</text><polyline points=\"470,110 530,110\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\" marker-end=\"url(#m2n-9fb3a5)\"/><rect x=\"15\" y=\"35\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Applicant 1</text><rect x=\"15\" y=\"95\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Applicant 2</text><rect x=\"15\" y=\"155\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"70\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Applicant N</text><rect x=\"175\" y=\"88\" width=\"110\" height=\"44\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"230\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Browser / OS</text><text x=\"230\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">cache</text><rect x=\"330\" y=\"88\" width=\"140\" height=\"44\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">ISP resolver</text><text x=\"400\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">cache (TTL)</text><rect x=\"535\" y=\"26\" width=\"110\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"590\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Root / .in</text><rect x=\"530\" y=\"93\" width=\"120\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"590\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">vit.ac.in</text><text x=\"590\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">authoritative</text><rect x=\"535\" y=\"185\" width=\"110\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"590\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Web servers</text><text x=\"400\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11\">cache hit → answered locally</text><text x=\"400\" y=\"176\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"10.5\">(no traffic to VIT’s DNS)</text><text x=\"330\" y=\"242\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Millions of lookups for www.vit.ac.in are answered from caches</text></svg>",
      "alt": "Millions of lookups for www.vit.ac.in are answered from caches"
     },
     "The first lookup of www.vit.ac.in through an ISP’s resolver goes to the root, .in and VIT’s authoritative servers; the answer is stored in the resolver’s cache for the record’s TTL (e.g. 300 s). Every other applicant using that resolver within the TTL gets the answer immediately from the cache; browsers and operating systems also cache it.",
     "Benefits: lookups take ~1 ms instead of several round trips, pages start loading faster; VIT’s DNS servers see only one query per resolver per TTL instead of millions; root/TLD load is reduced too. Negative caching also stores ‘no such name’ answers.",
     "Combined with several A records / a CDN, the cached answers can also spread users over multiple web servers."
    ]
   ],
   [
    "ii. Alice → Bob with SMTP over TCP",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 625 506.4\" width=\"625\" height=\"506.4\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2o-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2o-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"18\" y=\"8\" width=\"124\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"80\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Alice’s PC (UA)</text><line x1=\"80\" y1=\"33\" x2=\"80\" y2=\"478.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"162.5\" y=\"8\" width=\"145\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"235\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Alice’s mail server</text><line x1=\"235\" y1=\"33\" x2=\"235\" y2=\"478.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"320.8\" y=\"8\" width=\"138.4\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"390\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Bob’s mail server</text><line x1=\"390\" y1=\"33\" x2=\"390\" y2=\"478.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"495\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"545\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Bob’s PC</text><line x1=\"545\" y1=\"33\" x2=\"545\" y2=\"478.4\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"478.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"80\" y1=\"50\" x2=\"235\" y2=\"72\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"69.5\" y=\"47.5\" width=\"126.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"132.7\" y=\"56.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SMTP submit (587)</text><line x1=\"235\" y1=\"85.2\" x2=\"390\" y2=\"107.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"245.4\" y=\"82.7\" width=\"84.6\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"91.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">TCP SYN :25</text><line x1=\"390\" y1=\"111.6\" x2=\"235\" y2=\"133.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"288.1\" y=\"109.1\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"118.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">SYN+ACK / 220</text><line x1=\"235\" y1=\"138\" x2=\"390\" y2=\"160\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"269.8\" y=\"135.5\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"144.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">EHLO</text><line x1=\"390\" y1=\"162.2\" x2=\"235\" y2=\"184.2\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"322.9\" y=\"159.7\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"168.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">250</text><line x1=\"235\" y1=\"186.4\" x2=\"390\" y2=\"208.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"224.5\" y=\"183.9\" width=\"126.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"192.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">MAIL FROM:&lt;alice&gt;</text><line x1=\"390\" y1=\"210.6\" x2=\"235\" y2=\"232.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"312.4\" y=\"208.1\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"217.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">250 OK</text><line x1=\"235\" y1=\"234.8\" x2=\"390\" y2=\"256.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"238.5\" y=\"232.3\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"241.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">RCPT TO:&lt;bob&gt;</text><line x1=\"390\" y1=\"259\" x2=\"235\" y2=\"281\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"312.4\" y=\"256.5\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"265.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">250 OK</text><line x1=\"235\" y1=\"283.2\" x2=\"390\" y2=\"305.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"255.9\" y=\"280.7\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"289.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">DATA … .</text><line x1=\"390\" y1=\"307.4\" x2=\"235\" y2=\"329.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"298.5\" y=\"304.9\" width=\"77.6\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"313.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">250 queued</text><line x1=\"235\" y1=\"331.6\" x2=\"390\" y2=\"353.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"269.8\" y=\"329.1\" width=\"35.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.7\" y=\"338.1\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">QUIT</text><line x1=\"390\" y1=\"355.8\" x2=\"235\" y2=\"377.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"308.9\" y=\"353.3\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"337.3\" y=\"362.3\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">221 bye</text><line x1=\"545\" y1=\"402\" x2=\"390\" y2=\"424\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2f7a4f)\"/><rect x=\"436.1\" y=\"399.5\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"492.3\" y=\"408.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">IMAP/POP3 fetch</text><line x1=\"390\" y1=\"428.4\" x2=\"545\" y2=\"450.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m2o-2c5d8f)\"/><rect x=\"414.3\" y=\"425.9\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"442.7\" y=\"434.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">message</text><text x=\"400\" y=\"329.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">stored in Bob’s mailbox</text><text x=\"312.5\" y=\"497.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">SMTP is push (over TCP); Bob pulls with IMAP/POP3</text></svg>",
      "alt": "SMTP is push (over TCP); Bob pulls with IMAP/POP3"
     },
     "1. Alice’s user agent submits the message to her mail server (SMTP, port 587, usually authenticated/TLS).",
     "2. Her server looks up the MX record of Bob’s domain (DNS) and opens a TCP connection to Bob’s mail server on port 25 (three-way handshake; server greets with 220).",
     "3. SMTP dialogue: EHLO → MAIL FROM → RCPT TO → DATA (headers + body, ends with a line containing only “.”) → QUIT; each step gets a reply code (250 OK, 354 start input, 221 closing).",
     "4. Bob’s server stores the message in Bob’s mailbox. Bob later retrieves it with IMAP or POP3 (SMTP is only for pushing mail)."
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 33 (caching)",
   "Module 7 slides 45–81 (SMTP)"
  ]
 },
 "7f4090eb31604f5a": {
  "sections": [
   [
    "i. SNMP components in this scenario",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 220\" width=\"640\" height=\"220\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2p-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m2p-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><polyline points=\"195,110 380,45\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"1.5\" marker-end=\"url(#m2p-2c5d8f)\"/><rect x=\"220.1\" y=\"68.5\" width=\"134.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.5\" y=\"77.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">Get / Set (UDP 161)</text><polyline points=\"380,110 195,110\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"1.5\" marker-end=\"url(#m2p-b3412c)\"/><rect x=\"206.8\" y=\"101\" width=\"161.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"287.5\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11.5\">Trap / Inform (UDP 162)</text><polyline points=\"195,110 380,175\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"1.5\" marker-end=\"url(#m2p-2c5d8f)\"/><rect x=\"25\" y=\"75\" width=\"170\" height=\"70\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"110\" y=\"102.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">NMS / Manager</text><text x=\"110\" y=\"117.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(SNMP manager process)</text><rect x=\"380\" y=\"25\" width=\"200\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"480\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router 1: agent + MIB</text><rect x=\"380\" y=\"90\" width=\"200\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"480\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router 2: agent + MIB</text><rect x=\"380\" y=\"155\" width=\"200\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"480\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Switch / server: agent + MIB</text><text x=\"320\" y=\"212\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">SNMP manager–agent model</text></svg>",
      "alt": "SNMP manager–agent model"
     },
     {
      "table": {
       "head": [
        "Component",
        "Role here"
       ],
       "rows": [
        [
         "Manager (NMS)",
         "Receives the TRAP alerts, then polls routers with Get/GetBulk to read CPU load and interface error/drop counters, correlates them and, if needed, changes settings with Set"
        ],
        [
         "Agent",
         "Software on each router/switch/server; answers manager requests from its MIB and sends Traps when thresholds are crossed (high packet loss, CPU)"
        ],
        [
         "MIB (Management Information Base)",
         "The set of managed objects on a device, e.g. ifInErrors, ifOutDiscards, hrProcessorLoad — what can be read or set"
        ],
        [
         "SMI (Structure of Management Information)",
         "Rules for naming objects (OID tree, e.g. 1.3.6.1.2.1.2.2 for the interfaces table), their types and BER encoding"
        ]
       ]
      }
     },
     "Diagnosis flow: Traps point to the affected routers → GetBulk the interface table and CPU OIDs → identify the congested/faulty interface → fix by re-routing, rate-limiting, or Set to administratively shut a flapping port."
    ]
   ],
   [
    "ii. SNMPv3 messages (PDUs)",
    [
     {
      "table": {
       "head": [
        "PDU",
        "Direction",
        "Purpose"
       ],
       "rows": [
        [
         "GetRequest",
         "Manager → agent",
         "Read the value of one or more objects"
        ],
        [
         "GetNextRequest",
         "Manager → agent",
         "Read the next object in the MIB (walk a table)"
        ],
        [
         "GetBulkRequest",
         "Manager → agent",
         "Read a large block of data (whole tables) efficiently"
        ],
        [
         "SetRequest",
         "Manager → agent",
         "Write (change) an object value"
        ],
        [
         "Response",
         "Agent → manager (or manager → manager)",
         "Reply to Get/Set/Inform with values or error status"
        ],
        [
         "SNMPv2-Trap",
         "Agent → manager",
         "Unsolicited alert of an event (UDP 162, not acknowledged)"
        ],
        [
         "InformRequest",
         "Manager/agent → manager",
         "Acknowledged alert (receiver sends Response)"
        ],
        [
         "Report",
         "Between SNMP engines",
         "Reports security/processing errors (e.g. unknown user, time window)"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 608 218\" width=\"608\" height=\"218\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><text x=\"16\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">0</text><text x=\"88\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">4</text><text x=\"160\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">8</text><text x=\"232\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">12</text><text x=\"304\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">16</text><text x=\"376\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">20</text><text x=\"448\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">24</text><text x=\"520\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">28</text><text x=\"592\" y=\"12\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">32</text><rect x=\"16\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">msgVersion = 3</text><rect x=\"160\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">msgID</text><rect x=\"304\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"376\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">msgMaxSize</text><rect x=\"448\" y=\"22\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"520\" y=\"39\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">msgFlags (auth/priv)</text><rect x=\"16\" y=\"56\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"73\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">msgSecurityParameters (USM: engine ID, user, auth/priv params)</text><rect x=\"16\" y=\"90\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"107\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">contextEngineID + contextName (scoped PDU)</text><rect x=\"16\" y=\"124\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"88\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">PDU type</text><rect x=\"160\" y=\"124\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"232\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Request ID</text><rect x=\"304\" y=\"124\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"376\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Error status</text><rect x=\"448\" y=\"124\" width=\"144\" height=\"34\" rx=\"0\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"520\" y=\"141\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Error index</text><rect x=\"16\" y=\"158\" width=\"576\" height=\"34\" rx=\"0\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1.1\"/><text x=\"304\" y=\"175\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12\">Variable bindings: (OID, value), (OID, value), …</text><text x=\"304\" y=\"208\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">SNMPv3 message (conceptual layout — fields are BER-encoded, not fixed width)</text></svg>",
      "alt": "SNMPv3 message (conceptual layout — fields are BER-encoded, not fixed width)"
     },
     "SNMPv3 adds the User-based Security Model: authentication (HMAC-SHA/MD5), privacy (DES/AES encryption) and time-window checks to stop replay — important when managing routers over the campus network."
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 121–158 (SNMP, MIB, SMI, PDUs)"
  ]
 },
 "ae98849acfff9217": {
  "sections": [
   [
    "Answer",
    [
     "Shortest paths from A: B = 4 (A→B), C = 5 (A→C), D = 13 (A→B→D), E = 8 (A→C→E), F = 14 (A→C→E→F)."
    ]
   ],
   [
    "Dijkstra iterations",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)",
        "D(F), p(F)"
       ],
       "rows": [
        [
         0,
         "A",
         "4, A",
         "5, A",
         "∞",
         "∞",
         "∞"
        ],
        [
         1,
         "AB",
         "4, A",
         "5, A",
         "13, B",
         "11, B",
         "∞"
        ],
        [
         2,
         "ABC",
         "—",
         "5, A",
         "13, B",
         "8, C",
         "∞"
        ],
        [
         3,
         "ABCE",
         "—",
         "—",
         "13, B",
         "8, C",
         "14, E"
        ],
        [
         4,
         "ABCED",
         "—",
         "—",
         "13, B",
         "—",
         "14, E"
        ],
        [
         5,
         "ABCEDF",
         "—",
         "—",
         "—",
         "—",
         "14, E"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     }
    ]
   ],
   [
    "Result",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         "A → B",
         4,
         "B"
        ],
        [
         "C",
         "A → C",
         5,
         "C"
        ],
        [
         "D",
         "A → B → D",
         13,
         "B"
        ],
        [
         "E",
         "A → C → E",
         8,
         "C"
        ],
        [
         "F",
         "A → C → E → F",
         14,
         "C"
        ]
       ]
      },
      "caption": "Routing table at A"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 255\" width=\"450\" height=\"255\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"54\" y1=\"115.4\" x2=\"136\" y2=\"59.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"87.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"54\" y1=\"134.6\" x2=\"136\" y2=\"190.4\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"87.4\" y=\"153.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"162.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"150\" y1=\"67\" x2=\"150\" y2=\"183\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"138.8\" y=\"116\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"150\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"167\" y1=\"50\" x2=\"283\" y2=\"50\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"217.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"162\" y1=\"62\" x2=\"288\" y2=\"188\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"217.4\" y=\"116\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"300\" y1=\"67\" x2=\"300\" y2=\"183\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"288.8\" y=\"116\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">13</text><line x1=\"314\" y1=\"59.6\" x2=\"396\" y2=\"115.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"347.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"355\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"167\" y1=\"200\" x2=\"283\" y2=\"200\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"217.4\" y=\"191\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"314\" y1=\"190.4\" x2=\"396\" y2=\"134.6\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"347.4\" y=\"153.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"355\" y=\"162.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">6</text><circle cx=\"40\" cy=\"125\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"40\" y=\"125.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"32.7\" y=\"144\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"40\" y=\"153\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"150\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"142.7\" y=\"69\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">4</text><circle cx=\"300\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"289.3\" y=\"69\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"300\" y=\"78\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">13</text><circle cx=\"150\" cy=\"200\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"200.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"142.7\" y=\"219\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"150\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">5</text><circle cx=\"300\" cy=\"200\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"200.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"292.7\" y=\"219\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"300\" y=\"228\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">8</text><circle cx=\"410\" cy=\"125\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"410\" y=\"125.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text><rect x=\"399.3\" y=\"144\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"410\" y=\"153\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><text x=\"225\" y=\"247\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from A (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from A (green) · blue = final cost"
     }
    ]
   ],
   [
    "Process",
    [
     "Pick the unvisited node with the least tentative cost, make it permanent, relax its links; repeat.",
     "B (4) gives D = 13 and E = 11; C (5) then improves E to 5 + 3 = 8; E (8) gives F = 14; D (13) gives F = 15 (worse), so F stays 14 via E.",
     {
      "img": "scans/networks/notes/m5-013-022.webp",
      "caption": "Dijkstra’s algorithm as used in link-state routing (notes p. 13)",
      "alt": "Dijkstra’s algorithm as used in link-state routing (notes p. 13)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "fb62730c1ec4c1c8": {
  "sections": [
   [
    "i. Working of distance-vector routing",
    [
     "Each router keeps a vector D(dest) = best known cost and next hop. Initially it knows only its directly connected neighbours (cost of the link) — every other entry is ∞.",
     "Periodically (RIP: every 30 s) and on change (triggered update) a router sends its whole vector to its neighbours only.",
     "On receiving neighbour v’s vector, router x recomputes Bellman-Ford: Dx(y) = min over neighbours v of { c(x,v) + Dv(y) } and records v as next hop when it wins.",
     "Repeat until no vector changes — the network has converged."
    ]
   ],
   [
    "ii. Bellman-Ford from A",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 255\" width=\"450\" height=\"255\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"54\" y1=\"115.4\" x2=\"136\" y2=\"59.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"87.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"54\" y1=\"134.6\" x2=\"136\" y2=\"190.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"87.4\" y=\"153.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"95\" y=\"162.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">5</text><line x1=\"150\" y1=\"67\" x2=\"150\" y2=\"183\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"138.8\" y=\"116\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"150\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">11</text><line x1=\"167\" y1=\"50\" x2=\"283\" y2=\"50\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"217.4\" y=\"41\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><line x1=\"162\" y1=\"62\" x2=\"288\" y2=\"188\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"217.4\" y=\"116\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"300\" y1=\"67\" x2=\"300\" y2=\"183\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"288.8\" y=\"116\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">13</text><line x1=\"314\" y1=\"59.6\" x2=\"396\" y2=\"115.4\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"347.4\" y=\"78.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"355\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">2</text><line x1=\"167\" y1=\"200\" x2=\"283\" y2=\"200\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"217.4\" y=\"191\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"225\" y=\"200\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"314\" y1=\"190.4\" x2=\"396\" y2=\"134.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"347.4\" y=\"153.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"355\" y=\"162.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">6</text><circle cx=\"40\" cy=\"125\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"40\" y=\"125.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><circle cx=\"150\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><circle cx=\"300\" cy=\"50\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"50.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><circle cx=\"150\" cy=\"200\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"150\" y=\"200.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><circle cx=\"300\" cy=\"200\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"300\" y=\"200.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><circle cx=\"410\" cy=\"125\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"410\" y=\"125.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">F</text></svg>",
      "alt": "Network graph"
     },
     "D(A) = 0, others ∞. In each iteration relax every link: D(v) = min(D(v), D(u) + c(u,v)).",
     {
      "table": {
       "head": [
        "Iteration",
        "B",
        "C",
        "D",
        "E",
        "F"
       ],
       "rows": [
        [
         "0",
         "∞",
         "∞",
         "∞",
         "∞",
         "∞"
        ],
        [
         "1",
         "4 (A)",
         "5 (A)",
         "∞",
         "∞",
         "∞"
        ],
        [
         "2",
         "4 (A)",
         "5 (A)",
         "13 (B)",
         "8 (C)",
         "∞"
        ],
        [
         "3",
         "4 (A)",
         "5 (A)",
         "13 (B)",
         "8 (C)",
         "14 (E)"
        ],
        [
         "4",
         "4 (A)",
         "5 (A)",
         "13 (B)",
         "8 (C)",
         "14 (E)"
        ]
       ]
      },
      "caption": "cost (predecessor)"
     },
     {
      "table": {
       "head": [
        "Destination",
        "Cost",
        "Path"
       ],
       "rows": [
        [
         "B",
         4,
         "A → B"
        ],
        [
         "C",
         5,
         "A → C"
        ],
        [
         "D",
         13,
         "A → B → D"
        ],
        [
         "E",
         8,
         "A → C → E"
        ],
        [
         "F",
         14,
         "A → C → E → F"
        ]
       ]
      }
     }
    ]
   ],
   [
    "iii. Detecting and handling node/link failures",
    [
     "Link/node failure is detected by missing updates: if no update arrives from a neighbour before the expiration (invalid) timer runs out (RIP: 180 s), routes through it are marked ∞ (16 in RIP).",
     "Hardware/link-layer signals (loss of carrier, failed hello/keep-alive) mark the interface down immediately.",
     "The router then sends a triggered update with the new (infinite) cost; the garbage-collection timer (RIP: 120 s) finally deletes the entry.",
     "Split horizon: never advertise a route back on the interface it was learned from (B does not tell A about A’s own networks).",
     "Poison reverse: advertise it back but with cost ∞ (16), so the neighbour immediately discards that path.",
     "Hold-down timer: after a route goes bad, ignore worse ‘good news’ about it for a while so stale information can die out."
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 5–9 (distance vector, Bellman-Ford, count to infinity)",
   "Module 5 slides 28–41"
  ]
 },
 "90d329525881cb5b": {
  "sections": [
   [
    "Answer",
    [
     "m = 8 → r = 4 (2⁴ = 16 ≥ 8 + 4 + 1). Codeword sent = 101001011111. With bit 6 inverted the receiver gets 101001111111; syndrome = 6 → bit 6 is flipped back."
    ]
   ],
   [
    "i. Encoding (even parity)",
    [
     "Parity bits sit at positions 1, 2, 4, 8 (counted from the right); data bits fill 12, 11, 10, 9, 7, 6, 5, 3 in order.",
     {
      "table": {
       "head": [
        "Position",
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Bit",
         "D",
         "D",
         "D",
         "D",
         "P8",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Value",
         "1",
         "0",
         "1",
         "0",
         "0",
         "1",
         "0",
         "1",
         "1",
         "1",
         "1",
         "1"
        ]
       ]
      }
     },
     "P1 covers 1,3,5,7,9,11 → XOR of data at 3,5,7,9,11 = 1⊕1⊕1⊕0⊕0 → P1 = 1\nP2 covers 2,3,6,7,10,11 → XOR of data at 3,6,7,10,11 = 1⊕0⊕1⊕1⊕0 → P2 = 1\nP4 covers 4,5,6,7,12 → XOR of data at 5,6,7,12 = 1⊕0⊕1⊕1 → P4 = 1\nP8 covers 8,9,10,11,12 → XOR of data at 9,10,11,12 = 0⊕1⊕0⊕1 → P8 = 0",
     "Transmitted codeword: 101001011111"
    ]
   ],
   [
    "ii. Detection and correction",
    [
     "Received (bit 6 corrupted): 101001111111",
     "C1: positions 1,3,5,7,9,11 → 1⊕1⊕1⊕1⊕0⊕0 = 0\nC2: positions 2,3,6,7,10,11 → 1⊕1⊕1⊕1⊕1⊕0 = 1\nC4: positions 4,5,6,7,12 → 1⊕1⊕1⊕1⊕1 = 1\nC8: positions 8,9,10,11,12 → 0⊕0⊕1⊕0⊕1 = 0\nSyndrome (C8 C4 C2 C1) = 0110 = 6",
     "Syndrome 6 = position 6 → invert it: 101001111111 → 101001011111 (= sent codeword). Removing positions 1, 2, 4, 8 gives the message 10101011."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 },
 "cd0b9da17630b139": {
  "sections": [
   [
    "Selective Repeat ARQ",
    [
     "Sender and receiver both keep windows of size ≤ 2ᵐ⁻¹ = 2³ = 8 (m = 4). Each frame has its own timer; the receiver accepts and buffers any frame inside its window and acknowledges each one individually; only frames whose timer expires are resent; data is delivered to the upper layer in order."
    ]
   ],
   [
    "Timing diagram for the scenario",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 744.8 333.6\" width=\"744.8\" height=\"333.6\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m11-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m11-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"164\" y=\"8\" width=\"116.8\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"222.4\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Sensor station</text><line x1=\"222.4\" y1=\"33\" x2=\"222.4\" y2=\"305.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"453.2\" y=\"8\" width=\"138.4\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"522.4\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Monitoring system</text><line x1=\"522.4\" y1=\"33\" x2=\"522.4\" y2=\"305.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"305.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"222.4\" y1=\"50\" x2=\"522.4\" y2=\"81.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"313.4\" y=\"50.6\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"59.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F0</text><line x1=\"222.4\" y1=\"64.4\" x2=\"408.4\" y2=\"83.7\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"401.4\" y1=\"76.7\" x2=\"415.4\" y2=\"90.7\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"401.4\" y1=\"90.7\" x2=\"415.4\" y2=\"76.7\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"301.4\" y=\"63.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"312.4\" y=\"72.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">F1</text><line x1=\"222.4\" y1=\"78.8\" x2=\"522.4\" y2=\"110\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"313.4\" y=\"79.4\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"88.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2</text><line x1=\"222.4\" y1=\"93.2\" x2=\"522.4\" y2=\"124.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"313.4\" y=\"93.8\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"102.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3</text><line x1=\"222.4\" y1=\"107.6\" x2=\"522.4\" y2=\"138.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"313.4\" y=\"108.2\" width=\"21.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"117.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F4</text><line x1=\"522.4\" y1=\"81.2\" x2=\"222.4\" y2=\"112.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"399\" y=\"81.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420.4\" y=\"90.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 0</text><line x1=\"522.4\" y1=\"110\" x2=\"336.4\" y2=\"129.3\" stroke=\"#b3412c\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"/><line x1=\"329.4\" y1=\"122.3\" x2=\"343.4\" y2=\"136.3\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><line x1=\"329.4\" y1=\"136.3\" x2=\"343.4\" y2=\"122.3\" stroke=\"#b3412c\" stroke-width=\"2.4\"/><rect x=\"411\" y=\"109.4\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"432.4\" y=\"118.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"522.4\" y1=\"124.4\" x2=\"222.4\" y2=\"222.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"280.2\" y=\"175.4\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"336.4\" y=\"184.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3 (delayed)</text><line x1=\"522.4\" y1=\"138.8\" x2=\"222.4\" y2=\"170\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"399\" y=\"139.4\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420.4\" y=\"148.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 4</text><line x1=\"222.4\" y1=\"179.6\" x2=\"522.4\" y2=\"210.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"278.6\" y=\"180.2\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"189.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F1 (timeout)</text><line x1=\"222.4\" y1=\"194\" x2=\"522.4\" y2=\"225.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"278.6\" y=\"194.6\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"203.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F2 (timeout)</text><line x1=\"222.4\" y1=\"208.4\" x2=\"522.4\" y2=\"239.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2c5d8f)\"/><rect x=\"278.6\" y=\"209\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.40000000000003\" y=\"218\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">F3 (timeout)</text><line x1=\"522.4\" y1=\"210.8\" x2=\"222.4\" y2=\"242\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"399\" y=\"211.4\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420.4\" y=\"220.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 1</text><line x1=\"522.4\" y1=\"225.2\" x2=\"222.4\" y2=\"256.4\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"399\" y=\"225.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420.4\" y=\"234.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 2</text><line x1=\"522.4\" y1=\"239.6\" x2=\"222.4\" y2=\"270.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m11-2f7a4f)\"/><rect x=\"399\" y=\"240.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"420.4\" y=\"249.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">ACK 3</text><text x=\"532.4\" y=\"110\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">2 buffered</text><text x=\"532.4\" y=\"124.4\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">3 buffered</text><text x=\"532.4\" y=\"138.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">4 buffered</text><text x=\"532.4\" y=\"210.8\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">1 arrives → deliver 1,2,3,4</text><text x=\"532.4\" y=\"225.2\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">duplicate 2 → discard, re-ACK</text><text x=\"532.4\" y=\"239.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">duplicate 3 → discard, re-ACK</text><text x=\"212.4\" y=\"275.6\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"11.5\">window slides past 0–4 → 5, 6 …</text><text x=\"372.4\" y=\"324.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">4-bit sequence numbers (0–15) → window up to 8; F0–F4 all fit</text></svg>",
      "alt": "4-bit sequence numbers (0–15) → window up to 8; F0–F4 all fit"
     },
     "F1 lost → its timer expires → only F1 is resent; on arrival the receiver delivers the buffered 2, 3, 4 too.",
     "ACK 2 lost → F2’s timer expires and F2 is resent; the receiver recognises the duplicate, discards it and re-sends ACK 2.",
     "ACK 3 delayed beyond F3’s timer → F3 is resent unnecessarily; the duplicate is discarded and re-acknowledged; the late ACK 3 is simply ignored."
    ]
   ],
   [
    "Which CSMA for Ethernet? — 1-persistent CSMA/CD",
    [
     "Ethernet is a wired bus/shared medium where a station can listen while transmitting, so collisions are detectable → CSMA/CD.",
     "1-persistent: as soon as the channel becomes idle the station transmits — minimises idle time on a LAN with short propagation delay.",
     "On collision: abort, send 48-bit jam, binary exponential back-off (K ≤ 10, give up after 16 attempts).",
     "Minimum frame 64 bytes guarantees detection within the 2Tp slot (51.2 µs at 10 Mbps). (Modern switched full-duplex Ethernet has no collisions at all.)"
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on Selective Repeat and Ethernet CSMA/CD"
  ]
 },
 "5557ae05e72cc762": {
  "sections": [
   [
    "Architectural consequences",
    [
     "No ports: IP delivers to a host, not to a process — the application would need its own demultiplexing (in practice using raw sockets with a custom protocol number), and only one such application could easily share the host.",
     "No reliability, ordering, flow or congestion control: lost, duplicated or reordered packets reach the app; it must re-implement what it needs. Without congestion control it can flood shared links and hurt other users (fairness).",
     "No segmentation: messages larger than the MTU trigger IP fragmentation, which is inefficient and fragile (one lost fragment loses the whole message).",
     "Middleboxes (NAT, firewalls) expect TCP/UDP headers — packets with an unknown protocol number are often dropped; portability and security suffer; it violates layer independence, making the app tied to IP details."
    ]
   ],
   [
    "When could it improve performance?",
    [
     "In a controlled, private network (data-centre, HPC cluster, studio LAN) with very low loss, where the app tolerates loss (media streaming with FEC) and handles its own lightweight sequencing — removing TCP’s handshakes, head-of-line blocking and retransmission delays can cut latency.",
     "When the application’s own protocol already provides exactly the needed functions (e.g. RTP-like timestamps, application-level rate control) and the extra header/processing matters (tiny packets at very high rates).",
     "In practice the same benefit is obtained without breaking layering by using UDP (8-byte header, no connection state) or QUIC on top of UDP."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)",
   "Module 6 slides 22–50 (UDP vs TCP)"
  ]
 },
 "737d675e32315ef4": {
  "sections": [
   [
    "Verdict",
    [
     "A circuit-like path — dedicated/reserved capacity (circuit switching, or packet switching with hard reservations such as MPLS-TE or TSN) — is required. Best-effort packet switching cannot promise < 5 ms and 99.999 %."
    ]
   ],
   [
    "Quantitative arguments",
    [
     {
      "table": {
       "head": [
        "Quantity",
        "Value",
        "Consequence"
       ],
       "rows": [
        [
         "Latency budget",
         "5 ms one way",
         "Light in fibre ≈ 2 × 10⁸ m/s = 5 µs/km → propagation alone limits distance to < 1000 km, leaving little slack"
        ],
        [
         "Store-and-forward per hop",
         "1500 B at 1 Gbps = 12 µs; at 100 Mbps = 120 µs",
         "10 hops at 100 Mbps = 1.2 ms before any queuing"
        ],
        [
         "Queuing (packet switching)",
         "e.g. 50 packets ahead at 100 Mbps = 6 ms",
         "One congestion burst alone breaks the 5 ms bound — delay is not guaranteed"
        ],
        [
         "Circuit after setup",
         "Constant delay = propagation + one transmission",
         "No queuing, no jitter; setup (tens of ms) is done once before surgery"
        ],
        [
         "99.999 % availability",
         "≤ 5.26 minutes outage per year",
         "Needs redundant, disjoint circuits with fast (< 50 ms) protection switching"
        ],
        [
         "Packet loss",
         "Any retransmission costs ≥ 1 RTT",
         "Reserved capacity keeps loss near zero; FEC instead of retransmission"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Evaluation",
    [
     "Packet switching: efficient and fault-tolerant (reroutes), but delay = Σ(transmission + queuing + processing) varies with load, so worst-case latency and jitter are unbounded unless every hop reserves resources.",
     "Circuit switching: setup delay once, then deterministic latency and guaranteed bandwidth — exactly the property a haptic/video control loop needs. Its drawback (idle reserved capacity) is irrelevant for a safety-critical session.",
     "Practical design: a dedicated wavelength or leased circuit (or MPLS-TE/TSN path with strict priority) plus a disjoint backup path with 1+1 protection."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)",
   "Module 6 slides 146–160 (QoS)"
  ]
 },
 "c2fc13cb6aec45df": {
  "sections": [
   [
    "a) Throughput and efficiency on a 1 Mbps satellite channel",
    [
     {
      "table": {
       "head": [
        "",
        "Pure ALOHA (Station A)",
        "Slotted ALOHA (Station B)"
       ],
       "rows": [
        [
         "Throughput formula",
         "S = G e^(−2G)",
         "S = G e^(−G)"
        ],
        [
         "Vulnerable time",
         "2 × Tfr",
         "Tfr"
        ],
        [
         "Best load",
         "G = 0.5",
         "G = 1"
        ],
        [
         "Maximum efficiency",
         "18.4 %",
         "36.8 %"
        ],
        [
         "Maximum useful rate",
         "≈ 184 kbps",
         "≈ 368 kbps"
        ]
       ]
      }
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 330\" width=\"640\" height=\"330\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"286\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><line x1=\"52\" y1=\"219\" x2=\"624\" y2=\"219\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"219\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0.1</text><line x1=\"52\" y1=\"152\" x2=\"624\" y2=\"152\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"152\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0.2</text><line x1=\"52\" y1=\"85\" x2=\"624\" y2=\"85\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"85\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0.3</text><line x1=\"52\" y1=\"18\" x2=\"624\" y2=\"18\" stroke=\"#e3e9df\" stroke-width=\"1\"/><text x=\"46\" y=\"18\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0.4</text><text x=\"52\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0</text><text x=\"147.33333333333331\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">0.5</text><text x=\"242.66666666666666\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">1</text><text x=\"338\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">1.5</text><text x=\"433.3333333333333\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">2</text><text x=\"528.6666666666667\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">2.5</text><text x=\"624\" y=\"299\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">3</text><line x1=\"52\" y1=\"286\" x2=\"624\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><line x1=\"52\" y1=\"18\" x2=\"52\" y2=\"286\" stroke=\"#152b24\" stroke-width=\"1.4\"/><polyline points=\"52,286 71.1,225.4 90.1,176.3 109.2,137.1 128.3,106.4 147.3,82.8 166.4,65.4 185.5,53.1 204.5,45.2 223.6,40.8 242.7,39.5 261.7,40.7 280.8,43.8 299.9,48.6 318.9,54.7 338,61.8 357.1,69.6 376.1,77.9 395.2,86.6 414.3,95.6 433.3,104.7 452.4,113.7 471.5,122.7 490.5,131.5 509.6,140.1 528.7,148.5 547.7,156.6 566.8,164.4 585.9,171.9 604.9,179.1 624,185.9\" fill=\"none\" stroke=\"#2c5d8f\" stroke-width=\"2\"/><circle cx=\"52\" cy=\"286\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"71.1\" cy=\"225.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"90.1\" cy=\"176.3\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"109.2\" cy=\"137.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"128.3\" cy=\"106.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"147.3\" cy=\"82.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"166.4\" cy=\"65.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"185.5\" cy=\"53.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"204.5\" cy=\"45.2\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"223.6\" cy=\"40.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"242.7\" cy=\"39.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"261.7\" cy=\"40.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"280.8\" cy=\"43.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"299.9\" cy=\"48.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"318.9\" cy=\"54.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"338\" cy=\"61.8\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"357.1\" cy=\"69.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"376.1\" cy=\"77.9\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"395.2\" cy=\"86.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"414.3\" cy=\"95.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"433.3\" cy=\"104.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"452.4\" cy=\"113.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"471.5\" cy=\"122.7\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"490.5\" cy=\"131.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"509.6\" cy=\"140.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"528.7\" cy=\"148.5\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"547.7\" cy=\"156.6\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"566.8\" cy=\"164.4\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"585.9\" cy=\"171.9\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"604.9\" cy=\"179.1\" r=\"3\" fill=\"#2c5d8f\"/><circle cx=\"624\" cy=\"185.9\" r=\"3\" fill=\"#2c5d8f\"/><rect x=\"158.9\" y=\"16.4\" width=\"167.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"242.66666666666666\" y=\"25.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11\">slotted max 0.368 @ G = 1</text><rect x=\"66.8\" y=\"169.7\" width=\"161.1\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"147.33333333333331\" y=\"178.7\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#b3412c\" font-weight=\"600\" font-size=\"11\">pure max 0.184 @ G = 0.5</text><text x=\"338\" y=\"320\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">Offered load G (frames per frame time)</text><text x=\"14\" y=\"152\" transform=\"rotate(-90 14 152)\" text-anchor=\"middle\" font-size=\"11.5\" fill=\"#52615a\">Throughput S</text><polyline points=\"52.0,286.0 71.1,231.1 90.1,196.2 109.2,175.7 128.3,165.6 147.3,162.8 166.4,164.9 185.5,170.3 204.5,177.8 223.6,186.3 242.7,195.3 261.7,204.3 280.8,213.1 299.9,221.3 318.9,229.0 338.0,236.0 357.1,242.3 376.1,248.0 395.2,253.0 414.3,257.5 433.3,261.5 452.4,264.9 471.5,267.9 490.5,270.5 509.6,272.8 528.7,274.7 547.7,276.4 566.8,277.8 585.9,279.1 604.9,280.1 624.0,281.0\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\"/><text x=\"471.4666666666667\" y=\"105.1\" font-size=\"11.5\" fill=\"#2c5d8f\">slotted: S = G e^(−G)</text><text x=\"471.4666666666667\" y=\"205.60000000000002\" font-size=\"11.5\" fill=\"#b3412c\">pure: S = G e^(−2G)</text></svg>",
      "alt": "Chart"
     },
     "With the same packet generation rate, slotted ALOHA always delivers more (e.g. at G = 0.5: pure 0.184, slotted 0.303), because a frame can only collide with frames started in the same slot."
    ]
   ],
   [
    "b) Factors behind the difference",
    [
     "Vulnerable period: frames can start any time in pure ALOHA, so a frame overlaps anything sent within ±Tfr; slots halve that window.",
     "Synchronisation: slotted ALOHA needs a common clock (the satellite can broadcast slot boundaries); misalignment erodes the gain.",
     "Offered load G: both collapse when G is too high; pure ALOHA peaks earlier.",
     "Propagation delay: a GEO satellite round trip ≈ 270 ms means collisions are known only after a long wait, so retransmissions are costly and carrier sensing is impossible (that is why ALOHA, not CSMA, is used).",
     "Frame size and back-off policy influence how many retries pile up."
    ]
   ],
   [
    "c) Optimisation strategy",
    [
     "Move Station A to slotted ALOHA as well (slot timing from the satellite beacon) — doubles maximum throughput.",
     "Keep the offered load near the optimum (G ≈ 1 slotted, 0.5 pure) with adaptive back-off / rate control.",
     "Use reservation ALOHA or TDMA/DAMA for steady traffic: contend only for a reservation slot, then send in reserved slots — avoids collisions on the long-delay link.",
     "Use longer frames (fewer contention events per bit) and FEC to reduce retransmissions from errors."
    ]
   ]
  ],
  "sources": [
   "Module 3 slides on pure and slotted ALOHA"
  ]
 },
 "d63192808502ba2c": {
  "sections": [
   [
    "Answer",
    [
     "Codeword transmitted = 11010110111110. With the 3rd bit inverted the receiver gets 11110110111110; its remainder is non-zero, so the error is detected."
    ]
   ],
   [
    "Generating the codeword",
    [
     "Generator x⁴ + x + 1 = 10011 (degree 4) → append 4 zeros: 1101011011 0000",
     "10011 ) 11010110110000\n        10011\n        ─────\n         10011\n         10011\n         ─────\n              10110\n              10011\n              ─────\n                10100\n                10011\n                ─────\n                  1110   ← remainder",
     "Remainder (CRC) = 1110 → transmitted codeword = 1101011011 1110"
    ]
   ],
   [
    "Receiver with 3rd bit inverted",
    [
     "Received: divide 11110110111110 by 10011",
     "10011 ) 11110110111110\n        10011\n        ─────\n         11011\n         10011\n         ─────\n          10001\n          10011\n          ─────\n             10011\n             10011\n             ─────\n                  1110   ← remainder",
     "Syndrome = 1110 ≠ 0 → error detected, frame discarded."
    ]
   ],
   [
    "Why",
    [
     "A valid codeword is divisible by G(x). The error adds E(x) = x¹¹ (one bit); x⁴ + x + 1 does not divide xⁱ, so the remainder cannot be zero.",
     {
      "img": "scans/networks/notes/m3-015-016.webp",
      "caption": "CRC decoder: zero syndrome → accept, non-zero → discard (notes p. 15)",
      "alt": "CRC decoder: zero syndrome → accept, non-zero → discard (notes p. 15)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)"
  ]
 },
 "6ca7af1b06da1869": {
  "sections": [
   [
    "Design",
    [
     "128 → /25, 16 → /28, 4 → /30.",
     {
      "table": {
       "head": [
        "Group",
        "Customers × size",
        "Prefix",
        "First customer",
        "Last customer",
        "Group range"
       ],
       "rows": [
        [
         "Group 1",
         "200 × 128",
         "/25",
         "150.80.0.0/25 (150.80.0.0 – 150.80.0.127)",
         "150.80.99.128/25 (150.80.99.128 – 150.80.99.255)",
         "150.80.0.0 – 150.80.99.255"
        ],
        [
         "Group 2",
         "400 × 16",
         "/28",
         "150.80.100.0/28 (150.80.100.0 – 150.80.100.15)",
         "150.80.124.240/28 (150.80.124.240 – 150.80.124.255)",
         "150.80.100.0 – 150.80.124.255"
        ],
        [
         "Group 3",
         "2000 × 4",
         "/30",
         "150.80.125.0/30 (150.80.125.0 – 150.80.125.3)",
         "150.80.156.60/30 (150.80.156.60 – 150.80.156.63)",
         "150.80.125.0 – 150.80.156.63"
        ]
       ]
      }
     },
     "Group 1: 150.80.0.0/25, 150.80.0.128/25, … , 150.80.99.128/25.",
     "Group 2: 150.80.100.0/28, 150.80.100.16/28, … , 150.80.124.240/28.",
     "Group 3: 150.80.125.0/30, 150.80.125.4/30, … , 150.80.156.60/30."
    ]
   ],
   [
    "Addresses still available",
    [
     "Allocated = 25 600 + 6400 + 8000 = 40000. Available = 65 536 − 40000 = 25536 (150.80.156.64 – 150.80.255.255).",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 132\" width=\"640\" height=\"132\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><rect x=\"20.0\" y=\"30\" width=\"234.4\" height=\"46\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"137.1875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 1</text><text x=\"137.1875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">200 × /25</text><line x1=\"20\" y1=\"76\" x2=\"20\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"22\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.0.0</text><rect x=\"254.4\" y=\"30\" width=\"58.6\" height=\"46\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"283.671875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 2</text><text x=\"283.671875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">400 × /28</text><line x1=\"254.4\" y1=\"76\" x2=\"254.4\" y2=\"96\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"256.375\" y=\"102\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.100.0</text><rect x=\"313.0\" y=\"30\" width=\"73.2\" height=\"46\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"349.58984375\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Group 3</text><text x=\"349.58984375\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">2000 × /30</text><line x1=\"313\" y1=\"76\" x2=\"313\" y2=\"108\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"314.96875\" y=\"114\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.125.0</text><rect x=\"386.2\" y=\"30\" width=\"233.8\" height=\"46\" fill=\"#f2f2ee\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"503.10546875\" y=\"46\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Free</text><text x=\"503.10546875\" y=\"63\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10\">25536</text><line x1=\"386.2\" y1=\"76\" x2=\"386.2\" y2=\"84\" stroke=\"#9fb3a5\" stroke-width=\"1\"/><text x=\"388.2109375\" y=\"90\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"9.5\">150.80.156.64</text><text x=\"320\" y=\"14\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11.5\">150.80.0.0/16</text></svg>",
      "alt": "150.80.0.0/16"
     }
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 104–126"
  ]
 },
 "7532b7be004bad23": {
  "sections": [
   [
    "Answer",
    [
     "3 fragments: sizes 1500, 1500, 1040 bytes; offsets 0, 185, 370; MF 1, 1, 0."
    ]
   ],
   [
    "Working",
    [
     "Data = 4000 − 20 = 3980 bytes. Per fragment ≤ 1500 − 20 = 1480 bytes (1480 is a multiple of 8 ✓).",
     {
      "table": {
       "head": [
        "Fragment",
        "Total length",
        "Data bytes",
        "Byte range",
        "MF",
        "Offset field"
       ],
       "rows": [
        [
         1,
         1500,
         1480,
         "0–1479",
         1,
         "0"
        ],
        [
         2,
         1500,
         1480,
         "1480–2959",
         1,
         "185 (1480/8)"
        ],
        [
         3,
         1040,
         1020,
         "2960–3979",
         0,
         "370 (2960/8)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "The fragmentation process",
    [
     "1. The router sees total length 4000 > MTU 1500 and DF = 0, so it fragments (DF = 1 → drop + ICMP).",
     "2. It splits the data into multiple-of-8 chunks and copies the header into each fragment.",
     "3. In each fragment it sets total length, MF (1 for all but the last), offset = byte position ÷ 8, and recomputes the checksum; identification is the same for all.",
     "4. Fragments travel independently (they may be fragmented again). Only the destination reassembles them, ordering by offset and using MF = 0 to find the end; if a fragment is missing when the reassembly timer expires, all are discarded."
    ]
   ]
  ],
  "sources": [
   "Module 4 slides p. 182–219"
  ]
 },
 "0b9d0f1dca0eeb16": {
  "sections": [
   [
    "Link-state packets",
    [
     {
      "table": {
       "head": [
        "Neighbour",
        "Cost"
       ],
       "rows": [
        [
         "B",
         12
        ],
        [
         "C",
         7
        ],
        [
         "D",
         10
        ]
       ]
      },
      "caption": "LSP of A (also carries: router ID A, sequence number, age)"
     },
     {
      "table": {
       "head": [
        "Neighbour",
        "Cost"
       ],
       "rows": [
        [
         "A",
         12
        ],
        [
         "C",
         3
        ],
        [
         "E",
         4
        ]
       ]
      },
      "caption": "LSP of B (also carries: router ID B, sequence number, age)"
     },
     {
      "table": {
       "head": [
        "Neighbour",
        "Cost"
       ],
       "rows": [
        [
         "B",
         4
        ],
        [
         "C",
         9
        ]
       ]
      },
      "caption": "LSP of E (also carries: router ID E, sequence number, age)"
     }
    ]
   ],
   [
    "Steps in link-state routing",
    [
     "1. Discover neighbours and measure link costs.",
     "2. Build an LSP: ID, list of (neighbour, cost), sequence number, age.",
     "3. Flood the LSP reliably to every router; keep only the newest copy (highest sequence number).",
     "4. Each router assembles the full topology (link-state database).",
     "5. Run Dijkstra with itself as root → shortest-path tree → routing table."
    ]
   ],
   [
    "Dijkstra from A",
    [
     {
      "table": {
       "head": [
        "Step",
        "N′",
        "D(B), p(B)",
        "D(C), p(C)",
        "D(D), p(D)",
        "D(E), p(E)"
       ],
       "rows": [
        [
         0,
         "A",
         "12, A",
         "7, A",
         "10, A",
         "∞"
        ],
        [
         1,
         "AC",
         "10, C",
         "7, A",
         "10, A",
         "16, C"
        ],
        [
         2,
         "ACB",
         "10, C",
         "—",
         "10, A",
         "14, B"
        ],
        [
         3,
         "ACBD",
         "—",
         "—",
         "10, A",
         "14, B"
        ],
        [
         4,
         "ACBDE",
         "—",
         "—",
         "—",
         "14, B"
        ]
       ]
      },
      "caption": "Each row fixes the closest unvisited node (added to N′). “—” = already final."
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 290\" width=\"400\" height=\"290\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"67\" y1=\"41.2\" x2=\"313\" y2=\"58.8\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"178.8\" y=\"41\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"190\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">12</text><line x1=\"63.7\" y1=\"50.1\" x2=\"186.3\" y2=\"139.9\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"117.4\" y=\"86\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"125\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">7</text><line x1=\"50\" y1=\"57\" x2=\"50\" y2=\"228\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"38.8\" y=\"133.5\" width=\"22.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"50\" y=\"142.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">10</text><line x1=\"316\" y1=\"69.7\" x2=\"214\" y2=\"140.3\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"257.4\" y=\"96\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"265\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">3</text><line x1=\"331.9\" y1=\"76.9\" x2=\"348.1\" y2=\"218.1\" stroke=\"#2f7a4f\" stroke-width=\"3.2\"/><rect x=\"332.4\" y=\"138.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"340\" y=\"147.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"700\" font-size=\"12.5\">4</text><line x1=\"214.8\" y1=\"158.4\" x2=\"335.2\" y2=\"226.6\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><rect x=\"267.4\" y=\"183.5\" width=\"15.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"275\" y=\"192.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-weight=\"700\" font-size=\"12.5\">9</text><circle cx=\"50\" cy=\"40\" r=\"17\" fill=\"#d9ecaf\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><text x=\"50\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">A</text><rect x=\"42.7\" y=\"59\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"50\" y=\"68\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">0</text><circle cx=\"330\" cy=\"60\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"330\" y=\"60.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">B</text><rect x=\"319.3\" y=\"79\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"330\" y=\"88\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><circle cx=\"200\" cy=\"150\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"200\" y=\"150.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">C</text><rect x=\"192.7\" y=\"169\" width=\"14.7\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"200\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">7</text><circle cx=\"50\" cy=\"245\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"50\" y=\"245.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">D</text><rect x=\"39.3\" y=\"264\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"50\" y=\"273\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">10</text><circle cx=\"350\" cy=\"235\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"350\" y=\"235.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">E</text><rect x=\"339.3\" y=\"254\" width=\"21.3\" height=\"18\" rx=\"3\" fill=\"#eef4fb\" opacity=\"0.92\"/><text x=\"350\" y=\"263\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"11.5\">14</text><text x=\"200\" y=\"282\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Shortest-path tree from A (green) · blue = final cost</text></svg>",
      "alt": "Shortest-path tree from A (green) · blue = final cost"
     }
    ]
   ],
   [
    "Routing table of A",
    [
     {
      "table": {
       "head": [
        "Destination",
        "Least-cost path",
        "Cost",
        "Next hop"
       ],
       "rows": [
        [
         "B",
         "A → C → B",
         10,
         "C"
        ],
        [
         "C",
         "A → C",
         7,
         "C"
        ],
        [
         "D",
         "A → D",
         10,
         "D"
        ],
        [
         "E",
         "A → C → B → E",
         14,
         "C"
        ]
       ]
      },
      "caption": "Routing table at A"
     }
    ]
   ]
  ],
  "sources": [
   "Module 5 ADHD notes p. 11–13 (link-state routing and Dijkstra)",
   "Module 5 slides 49–58 (Dijkstra worked traces)"
  ]
 },
 "2dc5e4eaa7137fb2": {
  "sections": [
   [
    "The claim is wrong",
    [
     {
      "table": {
       "head": [
        "",
        "Flow control",
        "Congestion control"
       ],
       "rows": [
        [
         "Protects",
         "The receiver (its buffer)",
         "The network (router queues and links)"
        ],
        [
         "Scope",
         "End to end between two hosts",
         "Whole path, shared by many flows"
        ],
        [
         "Signal",
         "Receiver advertises rwnd in every ACK",
         "Inferred from loss/delay (timeouts, duplicate ACKs) or ECN marks"
        ],
        [
         "Variable",
         "rwnd (advertised window)",
         "cwnd (congestion window), ssthresh"
        ],
        [
         "Mechanism",
         "Sliding window; zero window + persist timer",
         "Slow start, congestion avoidance (AIMD), fast retransmit/recovery"
        ]
       ]
      }
     },
     "Both limit the sender, which is why they look similar: TCP sends at most min(rwnd, cwnd) unacknowledged bytes."
    ]
   ],
   [
    "Scenario: 10 Gbps server → slow client over a congested WAN",
    [
     "Client: a phone that can process only 2 MB/s and has a 64 KB socket buffer. Path: a 100 Mbps congested bottleneck shared with other users.",
     "Flow control: as the client’s buffer fills, its ACKs advertise smaller rwnd (down to 0); the server pauses and probes with persist-timer segments until space reappears.",
     "Congestion control: independently, losses at the bottleneck router cause duplicate ACKs/timeouts, so the server halves cwnd and grows it slowly; cwnd tracks the server’s fair share of 100 Mbps.",
     "At any moment the tighter limit wins: when the network is busy, cwnd < rwnd; when the phone is busy, rwnd < cwnd."
    ]
   ],
   [
    "If one is removed",
    [
     "No flow control: the server sends up to cwnd even when the client’s buffer is full; the client drops the excess, the server retransmits — wasted bandwidth, and (since the losses look like congestion) needless rate cuts.",
     "No congestion control: the server blasts at line rate up to rwnd; the bottleneck queue overflows, all flows lose packets, retransmissions add more load → congestion collapse (as in the 1986 Internet)."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 105–112 (open/closed-loop congestion control)",
   "Module 6 slides 122–138 (TCP congestion control)",
   "Module 6 slides 71–100 (flow control)"
  ]
 },
 "18a096c5c6e6aa4f": {
  "sections": [
   [
    "Strategy",
    [
     "1. Classify and mark at the network edge: financial transactions (EF / highest), video streaming (AF41), e-mail (best effort / AF11).",
     "2. Police and shape: token-bucket policing of the financial class so it cannot starve others; shaping of video bursts; rate-limit bulk e-mail.",
     "3. Schedule with Class-Based Weighted Fair Queuing plus a low-latency strict-priority queue (LLQ).",
     "4. Admission control for new video sessions when the video class is full; RED/WRED in the video and e-mail queues to avoid tail-drop synchronisation.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 230\" width=\"620\" height=\"230\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m2d-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"140,115 280,62\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"140,115 195,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"140,115 280,168\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"280,62 420,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"365,115 420,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"280,168 420,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><polyline points=\"520,115 550,115\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#m2d-152b24)\"/><rect x=\"20\" y=\"93\" width=\"120\" height=\"44\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"80\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Classifier</text><text x=\"80\" y=\"122.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">(DSCP / ports)</text><rect x=\"195\" y=\"28\" width=\"170\" height=\"34\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"280\" y=\"45\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Financial — priority (policed 20 %)</text><rect x=\"195\" y=\"98\" width=\"170\" height=\"34\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"280\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Video — weight 60 %</text><rect x=\"195\" y=\"168\" width=\"170\" height=\"34\" rx=\"5\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"280\" y=\"185\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">E-mail — weight 20 %</text><rect x=\"420\" y=\"93\" width=\"100\" height=\"44\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"470\" y=\"107.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">LLQ / CBWFQ</text><text x=\"470\" y=\"122.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">scheduler</text><rect x=\"550\" y=\"100\" width=\"50\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"575\" y=\"115\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Link</text></svg>",
      "alt": "Diagram"
     }
    ]
   ],
   [
    "Why LLQ / CBWFQ",
    [
     "Financial transactions are small but critical: strict priority gives them minimum delay; the policer caps them (e.g. 20 %) so priority cannot starve other traffic.",
     "WFQ shares the remaining bandwidth by weight — video gets the large share it needs for smooth playback, e-mail still gets a guaranteed minimum, and any unused share is redistributed (work-conserving).",
     "Plain FIFO gives no protection; pure priority queuing can starve e-mail; round-robin ignores different needs — LLQ + WFQ combines priority for critical services with fairness for the rest."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "713e8218d7ab8b0c": {
  "sections": [
   [
    "Why all four cannot be maximised together",
    [
     "Throughput vs delay: high throughput needs links kept busy, i.e. queues that are rarely empty — but queuing delay rises sharply as utilisation approaches 100 % (delay ∝ 1/(1 − ρ)).",
     "Loss vs delay: bigger buffers reduce loss but add delay and jitter (bufferbloat); small buffers keep delay low but drop more packets.",
     "Reliability vs delay: recovering lost packets by retransmission costs at least one RTT; FEC adds overhead that lowers throughput.",
     "Jitter vs efficiency: smoothing jitter needs playout buffers (adds delay) or reserved capacity (wastes bandwidth when idle).",
     "Shared network: guarantees to one flow reduce what is left for others; resources and physics (propagation delay) are finite."
    ]
   ],
   [
    "How networks prioritise by application",
    [
     {
      "table": {
       "head": [
        "Application",
        "Most important",
        "Can sacrifice",
        "Mechanism"
       ],
       "rows": [
        [
         "VoIP, video calls",
         "Low delay, low jitter",
         "Some loss",
         "Priority/EF queue, small buffers, jitter buffer at receiver"
        ],
        [
         "Video streaming (stored)",
         "Throughput",
         "Delay (buffered seconds)",
         "Large client buffer, adaptive bit rate, WFQ share"
        ],
        [
         "File transfer, e-mail, backups",
         "No loss, eventually high throughput",
         "Delay and jitter",
         "TCP retransmission, best-effort/background class"
        ],
        [
         "Financial / control traffic",
         "Low loss and low delay",
         "Throughput (small volume)",
         "Priority with policing, redundant paths"
        ],
        [
         "Online gaming",
         "Low delay",
         "Throughput",
         "Priority marking, nearby servers"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 146–160 (QoS, scheduling)",
   "Module 6 slides 165–181 (leaky and token bucket)"
  ]
 },
 "f2259560a4834337": {
  "sections": [
   [
    "Trace",
    [
     "1. DNS (application, over UDP 53): the browser and mail client resolve www.example.com and smtp.example.com to IP addresses (resolver → local DNS server, cached or resolved iteratively).",
     "2. TCP (transport): the browser opens a TCP connection to the web server’s port 443/80 (three-way handshake); the mail client opens another to the SMTP server’s port 587/25. Different source ports keep the two flows apart.",
     "3. HTTP (application): GET request for the file; the server returns 200 OK with the file, which TCP segments, numbers, acknowledges and flow/congestion-controls.",
     "4. SMTP (application): EHLO, (STARTTLS/AUTH), MAIL FROM, RCPT TO, DATA, message, QUIT — the server queues it for delivery to the recipient’s mail server (via another DNS MX lookup and SMTP hop).",
     "5. IP (network): every TCP segment and UDP datagram is placed in an IP packet with source/destination addresses and routed hop by hop; the link layer (Ethernet/Wi-Fi) carries it on each hop.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 610 334\" width=\"610\" height=\"334\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m7-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"m7-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"30\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"80\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">User PC</text><line x1=\"80\" y1=\"33\" x2=\"80\" y2=\"306\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"180\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"230\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">DNS server</text><line x1=\"230\" y1=\"33\" x2=\"230\" y2=\"306\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"330\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"380\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Web server</text><line x1=\"380\" y1=\"33\" x2=\"380\" y2=\"306\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"480\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"530\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Mail server</text><line x1=\"530\" y1=\"33\" x2=\"530\" y2=\"306\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"306\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"80\" y1=\"50\" x2=\"230\" y2=\"75\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2c5d8f)\"/><rect x=\"64.4\" y=\"48.5\" width=\"133.3\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"131\" y=\"57.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">DNS query (UDP 53)</text><line x1=\"230\" y1=\"80\" x2=\"80\" y2=\"105\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2f7a4f)\"/><rect x=\"126.3\" y=\"78.5\" width=\"105.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"179\" y=\"87.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">IP of web/mail</text><line x1=\"80\" y1=\"115\" x2=\"380\" y2=\"140\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2c5d8f)\"/><rect x=\"136.2\" y=\"113.5\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"182\" y=\"122.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">TCP SYN :443</text><line x1=\"380\" y1=\"145\" x2=\"80\" y2=\"170\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2f7a4f)\"/><rect x=\"249.6\" y=\"143.5\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"278\" y=\"152.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">SYN+ACK</text><line x1=\"80\" y1=\"175\" x2=\"380\" y2=\"200\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2c5d8f)\"/><rect x=\"129.3\" y=\"173.5\" width=\"105.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"182\" y=\"182.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">HTTP GET /file</text><line x1=\"380\" y1=\"205\" x2=\"80\" y2=\"240\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2f7a4f)\"/><rect x=\"221.8\" y=\"206.9\" width=\"112.4\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"278\" y=\"215.9\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">HTTP 200 + file</text><line x1=\"80\" y1=\"155\" x2=\"530\" y2=\"185\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2c5d8f)\"/><rect x=\"187.2\" y=\"155.2\" width=\"91.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"233\" y=\"164.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">TCP SYN :587</text><line x1=\"80\" y1=\"210\" x2=\"530\" y2=\"240\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2c5d8f)\"/><rect x=\"360.9\" y=\"223.4\" width=\"140.2\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"431\" y=\"232.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">SMTP MAIL/RCPT/DATA</text><line x1=\"530\" y1=\"245\" x2=\"80\" y2=\"275\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#m7-2f7a4f)\"/><rect x=\"352.1\" y=\"245.2\" width=\"49.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"377\" y=\"254.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">250 OK</text><text x=\"305\" y=\"325\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Both TCP connections run in parallel; IP carries every segment</text></svg>",
      "alt": "Both TCP connections run in parallel; IP carries every segment"
     }
    ]
   ],
   [
    "How they cooperate across layers",
    [
     "Application protocols (DNS, HTTP, SMTP) define what is said; TCP/UDP deliver it between the right processes (ports) — reliably for HTTP/SMTP; IP delivers between hosts across networks; link layers deliver between neighbours.",
     "Encapsulation: HTTP data → TCP segment → IP packet → Ethernet/Wi-Fi frame; the receiver unwraps in reverse.",
     "Multiplexing: one IP address and network interface carry the DNS, web and mail flows at once, distinguished by protocol number and port numbers.",
     {
      "img": "scans/networks/notes/m1-019-024.webp",
      "caption": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)",
      "alt": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)",
   "Module 7 slides (DNS, HTTP, SMTP)"
  ]
 },
 "3121ee81878d4108": {
  "sections": [
   [
    "Features the protocol must have",
    [
     {
      "table": {
       "head": [
        "Goal",
        "Design features"
       ],
       "rows": [
        [
         "Low bandwidth",
         "Compact binary header (≈ 4 bytes, like CoAP) instead of text headers; small option encoding; CBOR payloads; header compression; observe/subscribe so devices send only changes"
        ],
        [
         "High scalability",
         "Publish/subscribe via brokers or resource directories; stateless servers; multicast discovery; topic/resource naming that partitions well; works over UDP to avoid per-connection state on millions of devices"
        ],
        [
         "Security",
         "DTLS/OSCORE (or TLS) end-to-end encryption and authentication; lightweight ciphers (AES-CCM); per-device credentials/certificates; access control on topics/resources; secure firmware update"
        ],
        [
         "Low latency",
         "UDP transport with optional confirmable messages (lightweight ACK + retransmit) instead of TCP handshakes; no head-of-line blocking; QoS levels per message; caching proxies at the edge"
        ],
        [
         "Constrained devices",
         "Small code and RAM footprint, sleepy-node support (store-and-forward at broker), retransmission with exponential back-off"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Comparison with existing protocols",
    [
     {
      "table": {
       "head": [
        "",
        "My design (CoAP-like)",
        "HTTP/1.1",
        "MQTT"
       ],
       "rows": [
        [
         "Transport",
         "UDP (+DTLS)",
         "TCP (+TLS)",
         "TCP (+TLS)"
        ],
        [
         "Header",
         "Binary, ~4 bytes",
         "Text, hundreds of bytes",
         "Binary, 2-byte fixed header"
        ],
        [
         "Model",
         "Request/response (REST) + observe",
         "Request/response",
         "Publish/subscribe via broker"
        ],
        [
         "Reliability",
         "Optional confirmable messages",
         "TCP",
         "QoS 0/1/2"
        ],
        [
         "Latency",
         "Lowest (no handshake)",
         "High (handshakes, text parsing)",
         "Low after connection setup"
        ],
        [
         "Scalability",
         "Multicast, proxies",
         "Needs heavy servers",
         "Excellent fan-out via brokers"
        ],
        [
         "Best for",
         "Constrained sensors/actuators",
         "Web/cloud APIs",
         "Telemetry streams to the cloud"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 7 slides 150–186 (HTTP)",
   "General IoT protocol knowledge (CoAP RFC 7252, MQTT 3.1.1/5)"
  ]
 },
 "63824de4cefe519c": {
  "sections": [
   [
    "a) Hierarchical design",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 270\" width=\"640\" height=\"270\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"128,60 152,60\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"248,60 272,60\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"368,60 392,60\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"488,60 512,60\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"80,45 80,18 560,18 560,45\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><polyline points=\"320,75 200,136\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,75 320,136\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,75 440,136\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,164 290,219\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,164 320,219\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,164 350,219\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,164 380,219\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,164 410,219\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><rect x=\"32\" y=\"45\" width=\"96\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"80\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Floor 1 switch</text><rect x=\"152\" y=\"45\" width=\"96\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Floor 2 switch</text><rect x=\"272\" y=\"45\" width=\"96\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Floor 3 switch</text><rect x=\"392\" y=\"45\" width=\"96\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"440\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Floor 4 switch</text><rect x=\"512\" y=\"45\" width=\"96\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Floor 5 switch</text><rect x=\"152\" y=\"136\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"200\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Dept 1 switch</text><rect x=\"272\" y=\"136\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Dept 2 switch</text><rect x=\"392\" y=\"136\" width=\"96\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"440\" y=\"150\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Dept 3 switch</text><rect x=\"278\" y=\"219\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"290\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"9.5\">PC</text><rect x=\"308\" y=\"219\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"9.5\">PC</text><rect x=\"338\" y=\"219\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"350\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"9.5\">PC</text><rect x=\"368\" y=\"219\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"380\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"9.5\">PC</text><rect x=\"398\" y=\"219\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"410\" y=\"230\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"9.5\">PC</text><text x=\"320\" y=\"10\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-size=\"10.5\">backbone ring of floor switches (dual-ring for resilience)</text><text x=\"432\" y=\"230\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">… 20 PCs per department (star)</text></svg>",
      "alt": "Diagram"
     },
     {
      "table": {
       "head": [
        "Level",
        "Topology",
        "Why"
       ],
       "rows": [
        [
         "Department (20 PCs)",
         "Star to a department access switch",
         "Cheap, a cable fault affects one PC, easy to add PCs; one switch/VLAN per department gives security separation"
        ],
        [
         "Floor (3 departments)",
         "Star of the three department switches to a floor distribution switch",
         "Isolates departments, aggregates traffic, central point per floor"
        ],
        [
         "Backbone (5 floors)",
         "Ring (dual ring) of floor switches (or redundant star to two core switches)",
         "Low cost (only 5 links), every floor has two paths → survives a link failure; secure because it carries only inter-floor traffic through controlled switches"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Number of physical connections",
    [
     {
      "table": {
       "head": [
        "Part",
        "Count"
       ],
       "rows": [
        [
         "PC → department switch",
         "5 × 3 × 20 = 300"
        ],
        [
         "Department switch → floor switch",
         "5 × 3 = 15"
        ],
        [
         "Backbone ring between 5 floor switches",
         "5"
        ],
        [
         "Total",
         "320 links (dual ring: 325)"
        ],
        [
         "Full mesh of all 300 PCs",
         "300 × 299 / 2 = 44,850 links (299 ports per PC)"
        ]
       ]
      }
     },
     "The hierarchical design needs about 0.7 % of the cabling of a full mesh."
    ]
   ],
   [
    "c) Mapping to OSI and data flow Floor 1 → Floor 5",
    [
     {
      "table": {
       "head": [
        "Device",
        "OSI layers",
        "Role"
       ],
       "rows": [
        [
         "PCs",
         "1–7",
         "Run applications; encapsulate data"
        ],
        [
         "Cables, NICs (signals)",
         "1",
         "Carry bits"
        ],
        [
         "Department and floor switches",
         "2 (layer-3 switches also 3)",
         "Forward frames by MAC address; VLANs"
        ],
        [
         "Backbone/core (layer-3 switch or router)",
         "3",
         "Route packets between departmental VLANs/subnets, apply ACLs"
        ]
       ]
      }
     },
     "Flow: PC on Floor 1 builds data → TCP segment → IP packet (destination = PC on Floor 5) → Ethernet frame to its gateway → department switch → floor-1 switch → backbone ring (layer-3 switch routes between VLANs, rewriting MACs) → floor-5 switch → department switch → destination PC, which de-encapsulates up to the application.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 686 274\" width=\"686\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"m9-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">PC (Floor 1)</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Access/floor switch</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">L3 backbone switch</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"607\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">PC (Floor 5)</text><rect x=\"548\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"548\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"548\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"548\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"548\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"548\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"548\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,163 323,163 323,232 363,232 363,137 499,137 499,232 539,232 539,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#m9-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"666\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><text x=\"343\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Layers used along the path</text></svg>",
      "alt": "Layers used along the path"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8, 25 (link counts)"
  ]
 },
 "36f8eafc879a59f3": {
  "sections": [
   [
    "a) Journey of the e-mail through the TCP/IP layers",
    [
     {
      "table": {
       "head": [
        "Layer",
        "What happens (sender: mobile on Wi-Fi)",
        "Unit"
       ],
       "rows": [
        [
         "Application",
         "Mail app formats the message (MIME-encodes the attachment as base64), DNS finds the outgoing server, SMTP (port 587, with TLS) hands it to the sender’s mail server; that server looks up the recipient domain’s MX record and relays via SMTP",
         "Message"
        ],
        [
         "Transport",
         "TCP opens a connection (3-way handshake), splits the large message into segments (≈ MSS 1460 bytes), numbers them, adds ports, retransmits losses, controls flow/congestion",
         "Segment"
        ],
        [
         "Internet",
         "IP adds source (phone’s private IP, translated by the home router’s NAT) and destination addresses; routers in each intermediate network forward by longest-prefix match, decrementing TTL, fragmenting if needed",
         "Packet / datagram"
        ],
        [
         "Network access",
         "Wi-Fi (802.11) frame with MAC addresses to the access point; then Ethernet/fibre/ISP links; each hop re-frames the packet with new MAC/link addresses and CRC",
         "Frame → bits"
        ]
       ]
      }
     },
     "At the receiving server the layers are unwrapped in reverse: frames checked and removed, IP delivers to the host, TCP reassembles the segments in order and delivers the byte stream to the SMTP server, which stores the mail in the recipient’s mailbox (retrieved later with IMAP/POP3).",
     {
      "img": "scans/networks/notes/m1-019-024.webp",
      "caption": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)",
      "alt": "Encapsulation: headers added on the way down, removed on the way up (notes p. 19)"
     }
    ]
   ],
   [
    "b) Systematic bottom-up troubleshooting",
    [
     {
      "table": {
       "head": [
        "Layer",
        "Check",
        "Tools"
       ],
       "rows": [
        [
         "Physical",
         "Wi-Fi signal strength, airplane mode, router powered, cables/LEDs",
         "Signal indicator, router status"
        ],
        [
         "Data link",
         "Associated to the right SSID? authentication OK? MAC filtering?",
         "Wi-Fi settings, AP logs"
        ],
        [
         "Network",
         "Valid IP/gateway/DNS from DHCP? Can reach gateway and Internet?",
         "ipconfig/ifconfig, ping gateway, ping 8.8.8.8, traceroute"
        ],
        [
         "Transport",
         "Is port 587/465/25 reachable or blocked by a firewall?",
         "telnet/nc server 587, netstat"
        ],
        [
         "Application",
         "DNS resolution of mail server, SMTP credentials, attachment size limits, server bounce messages",
         "nslookup/dig (MX), mail logs, bounce (NDR) codes"
        ]
       ]
      }
     },
     "Stop at the first layer that fails — every layer above depends on it."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)",
   "Lab: network troubleshooting commands"
  ]
 },
 "13e9f336f8da2ead": {
  "sections": [
   [
    "Formulas (k = nodes + 1 hops)",
    [
     "Circuit switching: T = setup + L/R + k × Tprop (bits flow straight through, no store-and-forward).",
     "Packet switching: T = (Np + k − 1) × P/R + k × Tprop, with Np = 30 000 / 1000 = 30 packets and P/R = 1000 / 100 kbps = 10 ms.",
     "Message transmission L/R = 30 000 / 100 kbps = 300 ms."
    ]
   ],
   [
    "Results",
    [
     {
      "table": {
       "head": [
        "Intermediate nodes",
        "Hops k",
        "Circuit switching",
        "Packet switching",
        "Faster"
       ],
       "rows": [
        [
         2,
         3,
         "332 ms",
         "350 ms",
         "circuit"
        ],
        [
         10,
         11,
         "412 ms",
         "510 ms",
         "circuit"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Comment",
    [
     "Both delays grow with the number of nodes because of propagation (10 ms per hop). Packet switching additionally pays one extra packet-transmission time (10 ms) per hop, so its delay grows faster: +20 ms per added node vs +10 ms for circuit switching.",
     "With the tiny 2 ms setup, circuit switching wins for this long message, and its advantage widens as the path gets longer. Packet switching would be preferred for short or bursty messages, or when setup is expensive.",
     {
      "img": "scans/networks/notes/m2-007-007.webp",
      "caption": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)",
      "alt": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "54b91300f3a98439": {
  "sections": [
   [
    "Topology (Fig 1)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 620 270\" width=\"620\" height=\"270\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"300,110 300,47\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"276\" y=\"69.5\" width=\"48\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"78.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">port 2</text><polyline points=\"250,130 160,130\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"181\" y=\"121\" width=\"48\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"205\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">port 3</text><polyline points=\"350,130 435,130\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"368.5\" y=\"121\" width=\"48\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"392.5\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">port 1</text><polyline points=\"300,150 300,190\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"276\" y=\"161\" width=\"48\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"300\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">port 4</text><polyline points=\"470,113 560,87\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"470,147 560,173\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"265,205 170,235\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"335,205 430,235\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"250\" y=\"110\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Switch</text><rect x=\"225\" y=\"13\" width=\"150\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"22.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC6</text><text x=\"300\" y=\"37.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">00:BB:14:66:66:66</text><rect x=\"10\" y=\"113\" width=\"150\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"85\" y=\"122.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC1</text><text x=\"85\" y=\"137.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">01:BB:14:11:11:11</text><rect x=\"435\" y=\"113\" width=\"70\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"470\" y=\"130\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Hub</text><rect x=\"500\" y=\"53\" width=\"120\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"70\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC5 …55:55:55</text><rect x=\"500\" y=\"173\" width=\"120\" height=\"34\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"560\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC4 …44:44:44</text><rect x=\"265\" y=\"190\" width=\"70\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"300\" y=\"205\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Hub</text><rect x=\"110\" y=\"235\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"170\" y=\"250\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC2 …22:22:22</text><rect x=\"370\" y=\"235\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"430\" y=\"250\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">PC3 …33:33:33</text></svg>",
      "alt": "Diagram"
     }
    ]
   ],
   [
    "(i) PC1 sends a frame to PC5",
    [
     "Learning: the frame enters on port 3 with source 01:BB:14:11:11:11 → the switch records (PC1 → port 3).",
     "Forwarding: destination PC5 is not in the table → flood out of every other port (1, 2, 4).",
     "Port 1 hub repeats it to PC4 and PC5: PC5 accepts (its MAC), PC4 discards. Port 2: PC6 discards. Port 4 hub repeats to PC2, PC3: both discard.",
     {
      "table": {
       "head": [
        "MAC address",
        "Port"
       ],
       "rows": [
        [
         "01:BB:14:11:11:11 (PC1)",
         "3"
        ]
       ]
      },
      "caption": "Table after event (i)"
     }
    ]
   ],
   [
    "(ii) PC5 replies to PC1",
    [
     "The hub on port 1 repeats PC5’s frame to PC4 (discards) and to the switch.",
     "Learning: source 00:BB:14:55:55:55 arrived on port 1 → record (PC5 → port 1).",
     "Forwarding: PC1 is known (port 3) → the frame goes out of port 3 only (filtered from ports 2 and 4).",
     {
      "table": {
       "head": [
        "MAC address",
        "Port"
       ],
       "rows": [
        [
         "01:BB:14:11:11:11 (PC1)",
         "3"
        ],
        [
         "00:BB:14:55:55:55 (PC5)",
         "1"
        ]
       ]
      },
      "caption": "Table after event (ii)"
     }
    ]
   ],
   [
    "(iii) Hub vs switch behaviour",
    [
     "Hub (physical layer): no addresses, no table — every incoming signal is regenerated out of all other ports; all its hosts share one collision domain.",
     "Switch (data-link layer): learns source MACs per port, floods only unknown/broadcast destinations, otherwise forwards to one port (filtering); each port is its own collision domain.",
     "Exam note: PC1’s address as printed starts with 01 — the I/G bit is 1, i.e. a multicast address. A real switch never learns a multicast address as a source; the table above treats it as PC1’s unicast address as the question intends."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 25–27 (Ethernet addressing and frame handling)",
   "Module 1 ADHD notes p. 5 (network devices)"
  ]
 },
 "ec3dc4dcb8911328": {
  "sections": [
   [
    "Comparison",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Virtual circuit",
        "Datagram"
       ],
       "rows": [
        [
         "Setup",
         "Required (path chosen once)",
         "None"
        ],
        [
         "Header",
         "Short VC identifier (VCI)",
         "Full source/destination address"
        ],
        [
         "Route",
         "Same path for every packet",
         "Each packet routed independently"
        ],
        [
         "Order",
         "Delivered in order",
         "May be out of order → resequencing at host"
        ],
        [
         "Per-packet routing",
         "No — table lookup by VCI",
         "Yes — longest-prefix lookup"
        ],
        [
         "Failure",
         "VC breaks; must be re-established",
         "Robust — packets take another route"
        ],
        [
         "QoS",
         "Resources can be reserved per VC",
         "Hard to guarantee"
        ],
        [
         "Examples",
         "ATM, Frame Relay, X.25, MPLS",
         "IP (Internet)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Merits and demerits",
    [
     "Virtual circuit — merits: in-order delivery, small headers, fast forwarding (VCI lookup), QoS reservation, error/flow control per hop possible. Demerits: setup delay (bad for short exchanges), state in every switch, a switch failure breaks all its VCs.",
     "Datagram — merits: no setup, no per-flow state in routers, robust (reroute around failures), adapts to congestion, good for short/bursty traffic. Demerits: per-packet routing decision, larger header, out-of-order arrival, no delay guarantee.",
     {
      "img": "scans/networks/notes/m2-006-006.webp",
      "caption": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)",
      "alt": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)"
     },
     {
      "img": "scans/networks/notes/m2-006-005.webp",
      "caption": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)",
      "alt": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "eba72b2017ae329b": {
  "sections": [
   [
    "Sender (8-bit checksum)",
    [
     "   10101001\n + 00111001\n ──────────\n   11100010   sum (no carry out of 8 bits)\n   00011101   checksum = complement",
     "Transmitted: 10101001 00111001 00011101"
    ]
   ],
   [
    "Receiver when the 3rd bit is corrupted",
    [
     "Received first byte 10001001 (bit 3 from left: 1 → 0).",
     "   10001001\n + 00111001\n + 00011101\n ──────────\n   11011111   sum after wrap-around\n   00100000   complement ≠ 00000000 → error detected",
     "Without error the sum would be 11111111 and its complement 00000000."
    ]
   ],
   [
    "Triple repetition code (0 → 000, 1 → 111)",
    [
     "Only two codewords: 000 and 111, so dmin = 3.",
     "Detection: up to s errors with dmin = s + 1 → s = 2 errors detected.",
     "Correction: up to t errors with dmin = 2t + 1 → t = 1 error corrected (majority vote: 010 → 000, 110 → 111).",
     "Three errors turn 000 into 111 — a valid codeword — so they go unnoticed.",
     {
      "img": "scans/networks/notes/m3-007-009.webp",
      "caption": "Error correction territories: dmin > 2t (notes p. 7)",
      "alt": "Error correction territories: dmin > 2t (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 21–24 (checksum, one’s-complement arithmetic)",
   "Module 3 ADHD notes p. 7–8 (dmin, detection/correction bounds)"
  ]
 },
 "9a50e3302c294f8d": {
  "sections": [
   [
    "a) Key elements of a protocol",
    [
     {
      "table": {
       "head": [
        "Element",
        "Meaning",
        "Example"
       ],
       "rows": [
        [
         "Syntax",
         "Structure/format of the data — order and size of fields",
         "First 8 bits = sender address, next 8 = receiver, rest = message"
        ],
        [
         "Semantics",
         "Meaning of each section of bits and the action to take",
         "An address field identifies the route vs the final destination; a FIN flag means close"
        ],
        [
         "Timing",
         "When data is sent and how fast",
         "A 100 Mbps sender to a 1 Mbps receiver would overrun it — speed matching/flow control"
        ]
       ]
      }
     },
     "Network protocols are these sets of rules implemented in each layer: e.g. HTTP, SMTP, DNS (application), TCP, UDP (transport), IP, ICMP (network), Ethernet, Wi-Fi (data link).",
     {
      "img": "scans/networks/notes/m1-003-000.webp",
      "caption": "Five components of data communication: message, sender, receiver, medium, protocol (notes p. 3)",
      "alt": "Five components of data communication: message, sender, receiver, medium, protocol (notes p. 3)"
     }
    ]
   ],
   [
    "b) Pros and cons of computer networks",
    [
     {
      "table": {
       "head": [
        "Pros",
        "Cons"
       ],
       "rows": [
        [
         "Resource sharing (printers, storage, Internet link)",
         "Security risks: malware, intrusion, data theft"
        ],
        [
         "Fast communication and collaboration (e-mail, messaging, video)",
         "Setup and maintenance cost (devices, cabling, administrators)"
        ],
        [
         "Centralised data, backup and management; scalability",
         "Dependence on the network — a failure (e.g. a central server/switch) disrupts many users"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–3 (protocols and standards)"
  ]
 },
 "bcba68c26ae0c075": {
  "sections": [
   [
    "Comparison",
    [
     {
      "table": {
       "head": [
        "Basis",
        "OSI model",
        "TCP/IP model"
       ],
       "rows": [
        [
         "Layers",
         "7: physical, data link, network, transport, session, presentation, application",
         "4 (or 5): network access (link), internet, transport, application"
        ],
        [
         "Origin",
         "ISO reference model, designed before the protocols",
         "Grew from the protocols of the ARPANET/Internet"
        ],
        [
         "Session & presentation",
         "Separate layers",
         "Folded into the application layer"
        ],
        [
         "Network layer service",
         "Connection-oriented and connectionless",
         "Connectionless only (IP)"
        ],
        [
         "Transport service",
         "Connection-oriented",
         "Both: TCP (connection-oriented) and UDP (connectionless)"
        ],
        [
         "Use",
         "Teaching/reference model; clear separation of service, interface, protocol",
         "Practical model actually implemented on the Internet"
        ],
        [
         "Protocol fit",
         "Generic; protocols hidden and replaceable",
         "Specific protocols (IP, TCP, UDP)"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-014-019.webp",
      "caption": "TCP/IP model vs OSI model (notes p. 14)",
      "alt": "TCP/IP model vs OSI model (notes p. 14)"
     }
    ]
   ],
   [
    "Layer functionality mapping",
    [
     {
      "table": {
       "head": [
        "TCP/IP layer",
        "OSI layers covered",
        "Function"
       ],
       "rows": [
        [
         "Application",
         "Application + Presentation + Session",
         "User services, data formats, encryption, dialog"
        ],
        [
         "Transport",
         "Transport",
         "Process-to-process delivery (TCP reliable, UDP unreliable)"
        ],
        [
         "Internet",
         "Network",
         "Logical addressing and routing (IP)"
        ],
        [
         "Network access (link + physical)",
         "Data link + Physical",
         "Framing, MAC, signalling on the medium"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-014-020.webp",
      "caption": "TCP/IP protocol suite mapped onto the layers (notes p. 14)",
      "alt": "TCP/IP protocol suite mapped onto the layers (notes p. 14)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 12–16"
  ]
 },
 "f17a3e056436ad4b": {
  "sections": [
   [
    "Phases of a virtual-circuit network",
    [
     "Setup: the source sends a setup request carrying the destination address; each switch on the way selects an outgoing channel/VCI and records it in its switching table; the destination’s acknowledgement travels back, confirming the path. Resources (bandwidth, buffers) are reserved.",
     "Data transfer: data flows over the reserved path. In a circuit-switched network the bits stream continuously; in a virtual-circuit network each packet carries only the short VCI, and each switch swaps (incoming port, VCI) → (outgoing port, VCI).",
     "Teardown: either end sends a release/teardown request; switches delete the table entries and free the resources; a confirmation follows."
    ]
   ],
   [
    "Diagram",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600.4 541.6\" width=\"600.4\" height=\"541.6\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mi-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mi-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"25.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"75.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Source A</text><line x1=\"75.2\" y1=\"33\" x2=\"75.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"175.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"225.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch 1</text><line x1=\"225.2\" y1=\"33\" x2=\"225.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"325.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"375.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch 2</text><line x1=\"375.2\" y1=\"33\" x2=\"375.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"470.4\" y=\"8\" width=\"109.6\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"525.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Destination B</text><line x1=\"525.2\" y1=\"33\" x2=\"525.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"513.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"75.2\" y1=\"50\" x2=\"225.2\" y2=\"76\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"104.8\" y=\"48.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"57.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"225.2\" y1=\"81.2\" x2=\"375.2\" y2=\"107.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"254.8\" y=\"80\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"89\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"375.2\" y1=\"112.4\" x2=\"525.2\" y2=\"138.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"404.8\" y=\"111.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"120.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"525.2\" y1=\"143.6\" x2=\"375.2\" y2=\"169.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"459.8\" y=\"142.4\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"474.20000000000005\" y=\"151.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"375.2\" y1=\"174.8\" x2=\"225.2\" y2=\"200.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"309.8\" y=\"173.6\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.2\" y=\"182.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"225.2\" y1=\"206\" x2=\"75.2\" y2=\"232\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"159.8\" y=\"204.8\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"174.2\" y=\"213.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"75.2\" y1=\"247.6\" x2=\"225.2\" y2=\"273.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"77\" y=\"246.4\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"255.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 14)</text><line x1=\"225.2\" y1=\"278.8\" x2=\"375.2\" y2=\"304.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"227\" y=\"277.6\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"286.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 66)</text><line x1=\"375.2\" y1=\"310\" x2=\"525.2\" y2=\"336\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"377\" y=\"308.8\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"317.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 22)</text><line x1=\"75.2\" y1=\"356.8\" x2=\"225.2\" y2=\"382.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"94.4\" y=\"355.6\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"364.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"225.2\" y1=\"388\" x2=\"375.2\" y2=\"414\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"244.4\" y=\"386.8\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"395.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"375.2\" y1=\"419.2\" x2=\"525.2\" y2=\"445.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"394.4\" y=\"418\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"427\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"525.2\" y1=\"450.4\" x2=\"75.2\" y2=\"481.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"343.8\" y=\"451\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"372.20000000000005\" y=\"460\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Confirm</text><path d=\"M67.2 50 q-6 0 -6 6 V226 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"141\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">setup</text><path d=\"M67.2 247.6 q-6 0 -6 6 V330 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"291.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">data</text><path d=\"M67.2 356.8 q-6 0 -6 6 V475.6 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"419.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">teardown</text><text x=\"300.2\" y=\"532.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Three phases of a virtual circuit (VCI changes hop by hop)</text></svg>",
      "alt": "Three phases of a virtual circuit (VCI changes hop by hop)"
     },
     {
      "table": {
       "head": [
        "Switch",
        "Incoming (port, VCI)",
        "Outgoing (port, VCI)"
       ],
       "rows": [
        [
         "Switch 1",
         "1, 14",
         "3, 66"
        ],
        [
         "Switch 2",
         "2, 66",
         "4, 22"
        ]
       ]
      },
      "caption": "Switching-table entries created during setup (example values)"
     },
     {
      "img": "scans/networks/notes/m2-006-006.webp",
      "caption": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)",
      "alt": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 5–8",
   "Forouzan ch. 8 (virtual-circuit networks)"
  ]
 },
 "8fa4d23212a84124": {
  "sections": [
   [
    "Model",
    [
     "Setup is a two-way exchange and teardown a one-way message, so control signalling costs three propagation times and three control-message transmission times; the data transfer then costs one propagation time plus the data transmission time (Forouzan’s method).",
     "Tp = 8000 km / 2 × 10⁸ m/s = 40 ms; control transmission = 1500 / 1.5 Mbps = 1 ms.",
     "Setup + teardown = 3 × (40 ms + 1 ms) = 123 ms."
    ]
   ],
   [
    "Total delays",
    [
     {
      "table": {
       "head": [
        "Data bits",
        "Data transmission",
        "Data phase (Tp + Tt)",
        "Total delay",
        "Delay per 1500 bits"
       ],
       "rows": [
        [
         "1,500",
         "1 ms",
         "41 ms",
         "164 ms",
         "164 ms"
        ],
        [
         "2,50,000",
         "166.667 ms",
         "206.667 ms",
         "329.667 ms",
         "1.978 ms"
        ],
        [
         "15,00,000",
         "1000 ms",
         "1040 ms",
         "1163 ms",
         "1.163 ms"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Conclusion",
    [
     "The setup/teardown overhead is fixed, so it dominates short exchanges and becomes negligible for long ones. The delay per unit of data falls sharply as the amount of data grows — circuit switching is efficient for long, continuous transfers and inefficient for short bursts."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "3a4b962cdf582d52": {
  "sections": [
   [
    "a) Latency and its components",
    [
     "Latency (delay) = time from the first bit leaving the source until the whole message arrives at the destination.",
     {
      "table": {
       "head": [
        "Component",
        "Formula",
        "Depends on",
        "Impact"
       ],
       "rows": [
        [
         "Propagation delay",
         "distance / propagation speed",
         "Length of link, medium",
         "Dominant on long-haul and satellite links; cannot be reduced by more bandwidth"
        ],
        [
         "Transmission delay",
         "message size / bandwidth",
         "Packet size, data rate",
         "Dominant on slow links or for large packets"
        ],
        [
         "Queuing delay",
         "varies with load",
         "Congestion at routers",
         "Causes jitter; grows sharply as utilisation → 1"
        ],
        [
         "Processing delay",
         "router/host processing",
         "Header checks, lookups",
         "Usually small (µs)"
        ]
       ]
      }
     },
     "Latency = propagation + transmission + queuing + processing. High latency hurts interactive applications (voice, gaming) and limits TCP throughput (window / RTT)."
    ]
   ],
   [
    "b) Bandwidth-delay product",
    [
     "BDP = bandwidth (bps) × delay (s) — the number of bits that fill the link (‘in flight’) at once.",
     "Example: 1 Mbps × 25 ms = 25 000 bits are on the wire before the first bit arrives.",
     "Significance: to keep the pipe full, a sender must be allowed to have at least BDP bits (2 × BDP using the round trip) outstanding before needing an ACK — this sets the minimum TCP window / sliding-window size and buffer sizes. Links with large BDP (‘long fat networks’) need window scaling.",
     {
      "img": "scans/networks/notes/m2-012-014.webp",
      "caption": "Bandwidth-delay product: the link as a pipe — cross-section = bandwidth, length = delay (notes p. 12)",
      "alt": "Bandwidth-delay product: the link as a pipe — cross-section = bandwidth, length = delay (notes p. 12)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 10–12 (performance: bandwidth, throughput, latency, BDP)"
  ]
 },
 "16ffc0191803e569": {
  "sections": [
   [
    "a) Layer responsible",
    [
     {
      "table": {
       "head": [
        "Responsibility",
        "Layer",
        "Explanation"
       ],
       "rows": [
        [
         "i) Transmission of bit stream across the medium",
         "Physical",
         "Defines signals, encoding, bit rate, synchronisation, connectors and media"
        ],
        [
         "ii) Defines frames",
         "Data link",
         "Packs bits into frames with header (MAC addresses) and trailer (CRC)"
        ],
        [
         "iii) Error correction and retransmission",
         "Data link (per hop) and Transport (end to end)",
         "ARQ on a link; TCP retransmits lost/corrupted segments between processes"
        ],
        [
         "iv) Reliable process-to-process delivery",
         "Transport",
         "Port addressing, segmentation, sequence numbers, ACKs, flow control"
        ],
        [
         "v) Route selection",
         "Network",
         "Routing algorithms choose the path across networks using logical (IP) addresses"
        ],
        [
         "vi) User services like e-mail and file transfer",
         "Application",
         "SMTP, FTP, HTTP give users access to network services"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-014-018.webp",
      "caption": "Summary of OSI layer responsibilities (notes p. 14)",
      "alt": "Summary of OSI layer responsibilities (notes p. 14)"
     }
    ]
   ],
   [
    "b) Star vs mesh",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Star",
        "Mesh"
       ],
       "rows": [
        [
         "Links (n devices)",
         "n",
         "n(n − 1)/2"
        ],
        [
         "Ports per device",
         "1",
         "n − 1"
        ],
        [
         "Cost",
         "Low",
         "High"
        ],
        [
         "Failure impact",
         "Link fault: one device; hub fault: everyone",
         "Link fault: only that pair; alternative paths exist"
        ],
        [
         "Traffic",
         "All through the central device",
         "Dedicated links, no sharing"
        ],
        [
         "Security",
         "Central point can monitor/filter",
         "Private point-to-point links"
        ],
        [
         "Example",
         "Office Ethernet LAN around a switch",
         "Backbone between core routers / bank data centres"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-007-004.webp",
      "caption": "Star: every device has its own link to a central hub/switch (notes p. 7)",
      "alt": "Star: every device has its own link to a central hub/switch (notes p. 7)"
     },
     {
      "img": "scans/networks/notes/m1-007-003.webp",
      "caption": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)",
      "alt": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "7ace0532a50f0649": {
  "sections": [
   [
    "a) Total time vs number of intermediate nodes",
    [
     "Rate 10 000 bps → packet time P/R = 100 ms, message time L/R = 3000 ms, 30 packets, 10 ms propagation per hop, 2 ms setup.",
     "Circuit: T = 2 + 3000 + 10k ms. Packet: T = (30 + k − 1) × 100 + 10k ms (k = nodes + 1).",
     {
      "table": {
       "head": [
        "Nodes",
        "Hops k",
        "Circuit",
        "Packet",
        "Faster"
       ],
       "rows": [
        [
         2,
         3,
         "3032 ms",
         "3230 ms",
         "circuit"
        ],
        [
         5,
         6,
         "3062 ms",
         "3560 ms",
         "circuit"
        ],
        [
         10,
         11,
         "3112 ms",
         "4110 ms",
         "circuit"
        ],
        [
         50,
         51,
         "3512 ms",
         "8510 ms",
         "circuit"
        ],
        [
         100,
         101,
         "4012 ms",
         "14010 ms",
         "circuit"
        ]
       ]
      }
     },
     "As nodes increase, circuit-switching delay grows by only 10 ms per hop (propagation), while packet switching grows by 110 ms per hop (100 ms store-and-forward + 10 ms propagation). The gap widens dramatically (≈ 3.5 s vs 14 s at 100 nodes): for long messages over many hops circuit switching is far better."
    ]
   ],
   [
    "b) Minimum link capacity for ≤ 350 ms",
    [
     "Latency = transmission on Host1→R + R’s service time + transmission on R→Host2 + propagation = 2 × 6000/C + 15 ms + 250 ms ≤ 350 ms.",
     "12 000 / C ≤ 85 ms → C ≥ 12 000 / 0.085 = 141.2 kbps (≈ 141 kbps).",
     "(If store-and-forward at R is ignored, one transmission: 6000/C ≤ 85 ms → C ≥ 70.6 kbps.)"
    ]
   ],
   [
    "c) Delay-intolerant application",
    [
     "Examples: interactive voice (VoIP), video conferencing, online gaming, remote control/telesurgery. Circuit switching (or a reserved virtual circuit) suits them because delay is fixed and there is no queuing jitter."
    ]
   ],
   [
    "d) Datagram packet switching vs circuit switching",
    [
     {
      "table": {
       "head": [
        "",
        "Datagram packet switching",
        "Circuit switching"
       ],
       "rows": [
        [
         "Merits",
         "No setup; efficient sharing of bandwidth for bursty traffic; robust to failures (rerouting); supports different data rates; priorities possible",
         "Guaranteed bandwidth; constant, low delay; in-order delivery; simple once set up"
        ],
        [
         "Demerits",
         "Variable queuing delay/jitter; out-of-order delivery; header overhead on every packet; packets may be lost under congestion",
         "Setup delay; capacity wasted when idle; calls blocked when busy; failure drops the call; both ends must use the same rate"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "6f04c50aac8105e7": {
  "sections": [
   [
    "(a) CRC-16: x¹⁶ + x¹² + x⁵ + 1",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer",
        "Reason"
       ],
       "rows": [
        [
         "i. Check bits",
         "16",
         "Degree of the generator = number of remainder bits"
        ],
        [
         "ii. Single-bit error?",
         "Yes",
         "E(x) = xⁱ; G(x) has more than one term (and a +1), so it cannot divide xⁱ → remainder ≠ 0"
        ],
        [
         "iii. Burst of 14",
         "100 %",
         "Burst length L ≤ r (14 ≤ 16): all detected"
        ],
        [
         "iv. Burst of 17",
         "1 − (1/2)¹⁵ ≈ 99.997 %",
         "L = r + 1: probability = 1 − (1/2)^(r−1)"
        ],
        [
         "v. Burst of 18",
         "1 − (1/2)¹⁶ ≈ 99.998 %",
         "L > r + 1: probability = 1 − (1/2)^r"
        ]
       ]
      }
     },
     "A burst of length L starting at bit i is E(x) = xⁱ(x^(L−1) + … + 1). Because G(x) has a +1 term it does not divide xⁱ; it divides the bracket only if L − 1 ≥ r, hence the three cases."
    ]
   ],
   [
    "(b) Block code C(5, 2)",
    [
     {
      "table": {
       "head": [
        "Dataword",
        "Codeword",
        "Weight"
       ],
       "rows": [
        [
         "00",
         "00000",
         0
        ],
        [
         "01",
         "01011",
         3
        ],
        [
         "10",
         "10101",
         3
        ],
        [
         "11",
         "11110",
         4
        ]
       ]
      }
     },
     "i. Linear? Yes — XOR of any two codewords is a codeword: 01011 ⊕ 10101 = 11110, 01011 ⊕ 11110 = 10101, 10101 ⊕ 11110 = 01011, and 00000 is included.",
     "ii. Generation: for dataword a₁a₀, codeword = a₁ a₀ a₁ a₀ (a₁⊕a₀) — the dataword written twice followed by an even-parity bit over the two data bits. (Equivalently codeword = a₁·10101 ⊕ a₀·01011.)",
     "iii. dmin = smallest weight of a non-zero codeword (linear code) = 3.",
     "iv. Detect s = dmin − 1 = 2 errors; correct t = ⌊(dmin − 1)/2⌋ = 1 error. Example: 01011 received as 01001 is closest to 01011 (distance 1) → corrected; received as 00001 (2 errors) is not a codeword → detected, but it is nearer 00000, so it would be ‘corrected’ wrongly."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)",
   "Module 3 ADHD notes p. 5–8 (block codes, dmin)"
  ]
 },
 "1a2ff48c848d5e96": {
  "sections": [
   [
    "Data processing at each layer",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 274\" width=\"510\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"ma-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Computer A</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router R1</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"196\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Computer B</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"372\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"372\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"372\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"372\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,137 323,137 323,232 363,232 363,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#ma-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"490\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><rect x=\"147.8\" y=\"237\" width=\"38.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"167\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">LAN 1</text><rect x=\"323.8\" y=\"237\" width=\"38.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"343\" y=\"246\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">LAN 2</text><text x=\"255\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">A (LAN 1) → R1 → B (LAN 2)</text></svg>",
      "alt": "A (LAN 1) → R1 → B (LAN 2)"
     },
     {
      "table": {
       "head": [
        "Layer",
        "At A (sending)",
        "At R1",
        "At B (receiving)"
       ],
       "rows": [
        [
         "Application",
         "X creates the message (e.g. a request)",
         "—",
         "Message delivered to Y"
        ],
        [
         "Presentation",
         "Translate to common format, encrypt, compress",
         "—",
         "Decrypt, decompress, translate"
        ],
        [
         "Session",
         "Open/maintain dialog, add checkpoints",
         "—",
         "Manage dialog"
        ],
        [
         "Transport",
         "Segment; add ports (X → Y), sequence numbers",
         "—",
         "Reassemble; check; ACK; deliver to Y’s port"
        ],
        [
         "Network",
         "Add IP header: source A, destination B",
         "Read destination IP, consult routing table, decrement TTL, forward to LAN 2",
         "Accept packet addressed to B"
        ],
        [
         "Data link",
         "Frame for LAN 1: destination MAC = R1’s LAN-1 interface",
         "Strip LAN-1 frame; build new frame for LAN 2: source R1, destination MAC = B",
         "Check CRC, strip frame"
        ],
        [
         "Physical",
         "Bits as signals on LAN 1",
         "Receive on LAN 1, transmit on LAN 2",
         "Receive bits"
        ]
       ]
      }
     },
     "Key point: the IP addresses (A → B) stay the same end to end, while the MAC addresses change at the router — R1 works only up to the network layer.",
     {
      "img": "scans/networks/notes/m1-018-023.webp",
      "caption": "Logical (IP) addresses stay the same end to end while physical (MAC) addresses change at every hop (notes p. 18)",
      "alt": "Logical (IP) addresses stay the same end to end while physical (MAC) addresses change at every hop (notes p. 18)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "c3f56ea9df06f147": {
  "sections": [
   [
    "a-i) CEO, President and VP connected to each other",
    [
     "Mesh (here a fully connected triangle of point-to-point links): 3 devices need 3(3 − 1)/2 = 3 dedicated links, 2 ports each.",
     "Why: each pair has a private, dedicated link — confidential executive traffic never passes through another device; a link failure affects only one pair; with only three nodes the cost is trivial.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 360 210\" width=\"360\" height=\"210\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><line x1=\"169\" y1=\"53\" x2=\"81\" y2=\"157\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><line x1=\"191\" y1=\"53\" x2=\"279\" y2=\"157\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><line x1=\"87\" y1=\"170\" x2=\"273\" y2=\"170\" stroke=\"#9fb3a5\" stroke-width=\"1.6\"/><circle cx=\"180\" cy=\"40\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"180\" y=\"40.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"11\">CEO</text><circle cx=\"70\" cy=\"170\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"70\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"11\">Pres</text><circle cx=\"290\" cy=\"170\" r=\"17\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.5\"/><text x=\"290\" y=\"170.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"13.5\">VP</text><text x=\"180\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">3 point-to-point links</text></svg>",
      "alt": "3 point-to-point links"
     }
    ]
   ],
   [
    "a-ii) Computer centre where every machine connects to every other",
    [
     "Full mesh topology: n machines need n(n − 1)/2 links and n − 1 ports each (e.g. 5 machines → 10 links, 4 ports each).",
     {
      "img": "scans/networks/notes/m1-007-003.webp",
      "caption": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)",
      "alt": "Mesh: n = 5 devices, n(n − 1)/2 = 10 dedicated links (notes p. 7)"
     }
    ]
   ],
   [
    "b) Devices used for a mail from VIT to Stanford",
    [
     {
      "table": {
       "head": [
        "Device",
        "Layer",
        "Role"
       ],
       "rows": [
        [
         "NIC / Wi-Fi adapter in your PC",
         "1–2",
         "Puts frames on the medium"
        ],
        [
         "Access point / access switch",
         "2",
         "Connects your PC to the campus LAN"
        ],
        [
         "Distribution/core switches (layer-3)",
         "2–3",
         "Carry traffic across the campus, inter-VLAN routing"
        ],
        [
         "Firewall",
         "3–7",
         "Filters traffic at the campus edge"
        ],
        [
         "Edge router",
         "3",
         "Routes to the ISP"
        ],
        [
         "Modem / optical terminal (ONT)",
         "1",
         "Converts signals for the ISP access link"
        ],
        [
         "ISP and backbone routers, undersea cables, repeaters/amplifiers",
         "1–3",
         "Carry packets across the Internet to the US"
        ],
        [
         "Stanford’s edge router, firewall, switches",
         "2–3",
         "Deliver to Stanford’s network"
        ],
        [
         "Mail servers (VIT SMTP server, Stanford’s MX server), DNS servers",
         "7",
         "Relay and store the mail; resolve stanford.edu’s MX record"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 5 (network devices), 6–8 (topologies)"
  ]
 },
 "566939adcbe75bfa": {
  "sections": [
   [
    "a) End-to-end delay",
    [
     "Each link: transmission = 10 000 bits / rate; propagation = length / 2.4 × 10⁸ m/s. Store-and-forward → add all six terms.",
     {
      "table": {
       "head": [
        "Link",
        "Rate",
        "Length",
        "Transmission",
        "Propagation"
       ],
       "rows": [
        [
         "Link 1",
         "10 Mbps",
         "2 km",
         "1 ms",
         "0.00833 ms"
        ],
        [
         "Link 2",
         "100 Mbps",
         "3 km",
         "0.1 ms",
         "0.0125 ms"
        ],
        [
         "Link 3",
         "100 Mbps",
         "1000 km",
         "0.1 ms",
         "4.16667 ms"
        ]
       ]
      }
     },
     "Total = 1 + 0.1 + 0.1 + 0.00833 + 0.0125 + 4.16667 = 5.3875 ms."
    ]
   ],
   [
    "b) Circuit switching vs datagram packet switching",
    [
     {
      "table": {
       "head": [
        "Basis",
        "Circuit switching",
        "Packet switching (datagram)"
       ],
       "rows": [
        [
         "Path",
         "Dedicated end-to-end path reserved at setup",
         "No reservation; each packet routed independently"
        ],
        [
         "Phases",
         "Setup → data transfer → teardown",
         "Data transfer only (no setup)"
        ],
        [
         "Resource use",
         "Bandwidth reserved even when idle",
         "Shared on demand (statistical multiplexing)"
        ],
        [
         "Delay",
         "Setup delay, then constant low delay, no queuing",
         "Per-hop store-and-forward + variable queuing delay (jitter)"
        ],
        [
         "Ordering",
         "In order (single path)",
         "May arrive out of order"
        ],
        [
         "Addressing",
         "Only at setup",
         "Full destination address in every packet"
        ],
        [
         "Failure",
         "Path breaks → call drops",
         "Packets re-routed around failures"
        ],
        [
         "Charging",
         "By time and distance",
         "By volume (bytes/packets)"
        ],
        [
         "Congestion",
         "Calls blocked at setup",
         "Packets delayed or dropped"
        ],
        [
         "Best for",
         "Continuous, constant-rate traffic (classic voice)",
         "Bursty data (web, e-mail, file transfer)"
        ]
       ]
      }
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "89bf0dd4bae496df": {
  "sections": [
   [
    "Answer",
    [
     "FCS = 01110; codeword T = 101000110101110. At the receiver T ÷ G leaves remainder 00000, proving there is no error."
    ]
   ],
   [
    "Transmitter",
    [
     "Generator x⁵ + x⁴ + x² + 1 = 110101 (degree 5) → append 5 zeros: 1010001101 00000",
     "110101 ) 101000110100000\n         110101\n         ──────\n          111011\n          110101\n          ──────\n            111010\n            110101\n            ──────\n              111110\n              110101\n              ──────\n                101100\n                110101\n                ──────\n                 110010\n                 110101\n                 ──────\n                   01110   ← remainder",
     "Remainder (CRC) = 01110 → transmitted codeword = 1010001101 01110"
    ]
   ],
   [
    "Receiver",
    [
     "Received codeword: divide 101000110101110 by 110101",
     "110101 ) 101000110101110\n         110101\n         ──────\n          111011\n          110101\n          ──────\n            111010\n            110101\n            ──────\n              111110\n              110101\n              ──────\n                101111\n                110101\n                ──────\n                 110101\n                 110101\n                 ──────\n                   00000   ← remainder",
     "Syndrome = 00000 (all zeros) → accepted as error-free."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m3-015-015.webp",
      "caption": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)",
      "alt": "CRC encoder: augment with zeros, divide modulo 2, append the remainder (notes p. 15)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)"
  ]
 },
 "8d4105d8c22fe57f": {
  "sections": [
   [
    "Answer",
    [
     "(a) Codeword = 1100110. (b) With bit 5 flipped the receiver gets 1110110; syndrome = 101 = 5 → invert bit 5 → 1100110."
    ]
   ],
   [
    "(a) Transmitter",
    [
     "m = 4 → r = 3 (2³ = 8 ≥ 4 + 3 + 1) → 7-bit code, parity at 1, 2, 4.",
     {
      "table": {
       "head": [
        "Position",
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Bit",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Value",
         "1",
         "1",
         "0",
         "0",
         "1",
         "1",
         "0"
        ]
       ]
      }
     },
     "P1 covers 1,3,5,7 → XOR of data at 3,5,7 = 1⊕0⊕1 → P1 = 0\nP2 covers 2,3,6,7 → XOR of data at 3,6,7 = 1⊕1⊕1 → P2 = 1\nP4 covers 4,5,6,7 → XOR of data at 5,6,7 = 0⊕1⊕1 → P4 = 0"
    ]
   ],
   [
    "(b) Receiver",
    [
     "Received: 1110110",
     "C1: positions 1,3,5,7 → 0⊕1⊕1⊕1 = 1\nC2: positions 2,3,6,7 → 1⊕1⊕1⊕1 = 0\nC4: positions 4,5,6,7 → 0⊕1⊕1⊕1 = 1\nSyndrome (C4 C2 C1) = 101 = 5",
     "Bit 5 is in error; corrected codeword 1100110, data 1101."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 },
 "7c61c5f5f06974d3": {
  "sections": [
   [
    "(a) Components of the communications model",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 120\" width=\"640\" height=\"120\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mc-152b24\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#152b24\"/></marker></defs><polyline points=\"110,50 135,50\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mc-152b24)\"/><polyline points=\"245,50 265,50\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mc-152b24)\"/><polyline points=\"395,50 420,50\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mc-152b24)\"/><polyline points=\"520,50 545,50\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" marker-end=\"url(#mc-152b24)\"/><rect x=\"10\" y=\"30\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"60\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Source</text><rect x=\"135\" y=\"30\" width=\"110\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"190\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Transmitter</text><rect x=\"265\" y=\"30\" width=\"130\" height=\"40\" rx=\"5\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"330\" y=\"42.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Transmission</text><text x=\"330\" y=\"57.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">system</text><rect x=\"420\" y=\"30\" width=\"100\" height=\"40\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"470\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Receiver</text><rect x=\"545\" y=\"30\" width=\"90\" height=\"40\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"590\" y=\"50\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Destination</text><text x=\"60\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">PC</text><text x=\"190\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">modem / NIC</text><text x=\"330\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">line or network</text><text x=\"470\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">modem / NIC</text><text x=\"590\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"10.5\">server</text><text x=\"320\" y=\"112\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Simplified communications model (Stallings)</text></svg>",
      "alt": "Simplified communications model (Stallings)"
     },
     {
      "table": {
       "head": [
        "Component",
        "Role",
        "Example"
       ],
       "rows": [
        [
         "Source",
         "Generates the data to be sent",
         "PC, telephone"
        ],
        [
         "Transmitter",
         "Converts/encodes the data into signals suitable for the medium",
         "Modem, NIC"
        ],
        [
         "Transmission system",
         "Carries the signal — a single line or a whole network",
         "Cable, fibre, wireless link, Internet"
        ],
        [
         "Receiver",
         "Accepts the signal and converts it back into data",
         "Modem, NIC"
        ],
        [
         "Destination",
         "Takes the incoming data",
         "Server, PC"
        ]
       ]
      }
     },
     "Forouzan’s equivalent view: message, sender, receiver, transmission medium and protocol (the rules both sides follow).",
     {
      "img": "scans/networks/notes/m1-003-000.webp",
      "caption": "Five components of data communication: message, sender, receiver, medium, protocol (notes p. 3)",
      "alt": "Five components of data communication: message, sender, receiver, medium, protocol (notes p. 3)"
     }
    ]
   ],
   [
    "(b) Fully connected mesh of 10 nodes",
    [
     "Links (full-duplex) = n(n − 1)/2 = 10 × 9 / 2 = 45 links.",
     "I/O ports per node = n − 1 = 9 (90 ports in total)."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–3, 7, 25"
  ]
 },
 "5858b0d6e80e61e7": {
  "sections": [
   [
    "Answer: virtual-circuit packet switching",
    [
     "The data is already packetized (so packet switching), but the end systems have no way to put packets back in order. In a datagram network packets take different routes and can arrive out of order; a virtual-circuit network sends every packet of the connection over the same pre-established path, so they arrive in sequence."
    ]
   ],
   [
    "Process",
    [
     "Setup: the source sends a setup request carrying the destination address; each switch on the way selects an outgoing channel/VCI and records it in its switching table; the destination’s acknowledgement travels back, confirming the path. Resources (bandwidth, buffers) are reserved.",
     "Data transfer: data flows over the reserved path. In a circuit-switched network the bits stream continuously; in a virtual-circuit network each packet carries only the short VCI, and each switch swaps (incoming port, VCI) → (outgoing port, VCI).",
     "Teardown: either end sends a release/teardown request; switches delete the table entries and free the resources; a confirmation follows.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600.4 541.6\" width=\"600.4\" height=\"541.6\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mi-2c5d8f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2c5d8f\"/></marker><marker id=\"mi-2f7a4f\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#2f7a4f\"/></marker></defs><rect x=\"25.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"75.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Source A</text><line x1=\"75.2\" y1=\"33\" x2=\"75.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"175.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"225.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch 1</text><line x1=\"225.2\" y1=\"33\" x2=\"225.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"325.2\" y=\"8\" width=\"100\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"375.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch 2</text><line x1=\"375.2\" y1=\"33\" x2=\"375.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><rect x=\"470.4\" y=\"8\" width=\"109.6\" height=\"25\" rx=\"5\" fill=\"#e9f2df\" stroke=\"#2f7a4f\" stroke-width=\"1.2\"/><text x=\"525.2\" y=\"20.5\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Destination B</text><line x1=\"525.2\" y1=\"33\" x2=\"525.2\" y2=\"513.6\" stroke=\"#52615a\" stroke-width=\"1.6\"/><text x=\"14\" y=\"513.6\" text-anchor=\"start\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">time ↓</text><line x1=\"75.2\" y1=\"50\" x2=\"225.2\" y2=\"76\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"104.8\" y=\"48.8\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"57.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"225.2\" y1=\"81.2\" x2=\"375.2\" y2=\"107.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"254.8\" y=\"80\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"89\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"375.2\" y1=\"112.4\" x2=\"525.2\" y2=\"138.4\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"404.8\" y=\"111.2\" width=\"42.8\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"120.2\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Setup</text><line x1=\"525.2\" y1=\"143.6\" x2=\"375.2\" y2=\"169.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"459.8\" y=\"142.4\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"474.20000000000005\" y=\"151.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"375.2\" y1=\"174.8\" x2=\"225.2\" y2=\"200.8\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"309.8\" y=\"173.6\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"324.2\" y=\"182.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"225.2\" y1=\"206\" x2=\"75.2\" y2=\"232\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"159.8\" y=\"204.8\" width=\"28.9\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"174.2\" y=\"213.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Ack</text><line x1=\"75.2\" y1=\"247.6\" x2=\"225.2\" y2=\"273.6\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"77\" y=\"246.4\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"255.4\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 14)</text><line x1=\"225.2\" y1=\"278.8\" x2=\"375.2\" y2=\"304.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"227\" y=\"277.6\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"286.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 66)</text><line x1=\"375.2\" y1=\"310\" x2=\"525.2\" y2=\"336\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"377\" y=\"308.8\" width=\"98.5\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"317.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Data (VCI 22)</text><line x1=\"75.2\" y1=\"356.8\" x2=\"225.2\" y2=\"382.8\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"94.4\" y=\"355.6\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"126.20000000000002\" y=\"364.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"225.2\" y1=\"388\" x2=\"375.2\" y2=\"414\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"244.4\" y=\"386.8\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"276.2\" y=\"395.8\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"375.2\" y1=\"419.2\" x2=\"525.2\" y2=\"445.2\" stroke=\"#2c5d8f\" stroke-width=\"1.6\" marker-end=\"url(#mi-2c5d8f)\"/><rect x=\"394.4\" y=\"418\" width=\"63.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"426.2\" y=\"427\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2c5d8f\" font-weight=\"600\" font-size=\"12\">Teardown</text><line x1=\"525.2\" y1=\"450.4\" x2=\"75.2\" y2=\"481.6\" stroke=\"#2f7a4f\" stroke-width=\"1.6\" stroke-dasharray=\"4 3\" marker-end=\"url(#mi-2f7a4f)\"/><rect x=\"343.8\" y=\"451\" width=\"56.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"372.20000000000005\" y=\"460\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"12\">Confirm</text><path d=\"M67.2 50 q-6 0 -6 6 V226 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"141\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">setup</text><path d=\"M67.2 247.6 q-6 0 -6 6 V330 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"291.8\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">data</text><path d=\"M67.2 356.8 q-6 0 -6 6 V475.6 q0 6 6 6\" fill=\"none\" stroke=\"#b7791f\" stroke-width=\"1.3\"/><text x=\"57.2\" y=\"419.2\" text-anchor=\"end\" dominant-baseline=\"middle\" fill=\"#b7791f\" font-size=\"11.5\">teardown</text><text x=\"300.2\" y=\"532.6\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Three phases of a virtual circuit (VCI changes hop by hop)</text></svg>",
      "alt": "Three phases of a virtual circuit (VCI changes hop by hop)"
     },
     {
      "img": "scans/networks/notes/m2-006-006.webp",
      "caption": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)",
      "alt": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)"
     }
    ]
   ],
   [
    "Why not the alternatives",
    [
     "Datagram switching would require resequencing at the destination (e.g. TCP sequence numbers), which these devices lack. Circuit switching would also preserve order, but it reserves capacity for the whole session and is not packet-based."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "688cc43d44e1dd7e": {
  "sections": [
   [
    "a) Bandwidth vs throughput",
    [
     "Bandwidth: the maximum rate a link can carry (bits per second) — its capacity.",
     "Throughput: the rate actually achieved end-to-end, always ≤ bandwidth (limited by load, collisions, protocol overhead, the slowest link).",
     "Throughput = 1000 frames/s × 20 bits = 20 000 bps = 20 kbps — the channel’s full 20 kbps here."
    ]
   ],
   [
    "b) Latency and bandwidth-delay product",
    [
     "Propagation = 10 000 km / 2 × 10⁸ m/s = 0.05 s = 50 ms.",
     "Transmission = 30 Mb / 10 Mbps = 3 s.",
     "Processing = 0.01 s; queuing = 0 for the first packet.",
     "Latency = 0.05 + 3 + 0.01 = 3.06 s.",
     "Bandwidth-delay product = 10 Mbps × 0.05 s = 5,00,000 bits (the number of bits in flight on the link). Using the full latency instead: 10 Mbps × 3.06 s = 30.6 Mb."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 10–12"
  ]
 },
 "98dea1869ed86966": {
  "sections": [
   [
    "Answer",
    [
     {
      "table": {
       "head": [
        "",
        "Even parity",
        "Odd parity"
       ],
       "rows": [
        [
         "Parity bit for 10010001 (three 1s)",
         "1",
         "0"
        ],
        [
         "Codeword sent",
         "100100011",
         "100100010"
        ],
        [
         "Received",
         "101100111",
         "101100111"
        ],
        [
         "Bits that differ",
         "positions 3, 7 (from left)",
         "positions 3, 7, 9"
        ],
        [
         "Hamming distance",
         "2",
         "3"
        ],
        [
         "Receiver’s check (count of 1s in 101100111 = 6)",
         "even → looks valid → NOT detected",
         "should be odd but is even → detected"
        ]
       ]
      }
     },
     "Only the odd-parity scheme detects this error."
    ]
   ],
   [
    "Justification",
    [
     "A single parity bit detects any odd number of bit errors and misses any even number, because flipping an even number of bits does not change the parity.",
     "With even parity, 2 bits changed (even) → syndrome 0 → undetected. With odd parity, 3 bits changed (odd) → syndrome 1 → detected."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 9–10 (parity-check code)"
  ]
 },
 "db63bc0f4a28a3d6": {
  "sections": [
   [
    "Answer",
    [
     "Internet checksum = 0x2E91. Transmitted data = 48 45 4C 4C 4F 20 57 4F 52 4C 44 21 followed by 2E 91."
    ]
   ],
   [
    "Sender: add 16-bit words (two characters each)",
    [
     "  Word   Chars\n  4845   HE\n  4C4C   LL\n  4F20   O \n  574F   WO\n  524C   RL\n  4421   D!\n  ─────\n  1D16D  raw sum\n  D16E   after adding carry 1\n  2E91   checksum = one’s complement"
    ]
   ],
   [
    "Receiver: no error",
    [
     "Add all six data words and the checksum: sum = 1FFFE → wrap → FFFF.",
     "Complement of FFFF = 0000 → result zero → the receiver concludes there is no error and accepts the message."
    ]
   ],
   [
    "Diagram",
    [
     {
      "img": "scans/networks/notes/m3-022-024.webp",
      "caption": "Checksum at sender and receiver with wrap-around and complement (notes p. 22)",
      "alt": "Checksum at sender and receiver with wrap-around and complement (notes p. 22)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 21–24 (checksum, one’s-complement arithmetic)"
  ]
 },
 "082092d02a3a976a": {
  "sections": [
   [
    "Suggested topology: tree (hierarchical star / star of stars)",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 290\" width=\"640\" height=\"290\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"320,45 320,80\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 110,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 320,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"320,110 530,155\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><polyline points=\"110,185 35,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 65,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 95,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 125,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 155,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"110,185 185,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 245,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 275,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 305,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 335,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 365,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"320,185 395,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 455,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 485,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 515,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 545,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 575,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"530,185 605,234\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><rect x=\"245\" y=\"15\" width=\"150\" height=\"30\" rx=\"5\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"30\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router + firewall</text><rect x=\"255\" y=\"80\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"95\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Core switch</text><rect x=\"50\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"110\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 1 switch</text><rect x=\"260\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 2 switch</text><rect x=\"470\" y=\"155\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"530\" y=\"170\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Scientist 3 switch</text><rect x=\"23\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"35\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"53\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"65\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"83\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"95\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"113\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"125\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"143\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"155\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"173\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"185\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"233\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"245\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"263\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"275\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"293\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"305\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"323\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"335\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"353\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"365\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"383\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"395\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"443\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"455\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">S</text><rect x=\"473\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"485\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"503\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"515\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"533\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"545\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"563\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"575\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><rect x=\"593\" y=\"234\" width=\"24\" height=\"22\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"605\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"10.5\">E</text><text x=\"320\" y=\"280\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">S = scientist, E = engineer · each team is its own star/VLAN</text></svg>",
      "alt": "Diagram"
     },
     "Each scientist and their 5 engineers form a separate star on their own switch (one VLAN per project). The three team switches connect in a star to a core switch, which reaches outside networks only through a router with a firewall."
    ]
   ],
   [
    "Justification",
    [
     "Confidentiality: each project’s traffic stays inside its own switch/VLAN; inter-team traffic must pass the core where access-control lists decide what is allowed — teams cannot see each other’s data.",
     "Reliability: a cable fault affects only one device; a team-switch fault affects only that team.",
     "Manageability and cost: 18 links + 3 uplinks, cheap to cable, easy to monitor centrally, easy to add engineers.",
     "Why not others: bus/ring share one medium (every station sees all traffic — poor for secrecy; one break stops all); full mesh of 18 devices needs 153 links.",
     "(Optional for higher resilience: dual uplinks from each team switch to two core switches.)"
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8"
  ]
 },
 "a46bc6875d0592b2": {
  "sections": [
   [
    "Protocols to know",
    [
     {
      "table": {
       "head": [
        "Protocol",
        "Layer",
        "Port",
        "Purpose"
       ],
       "rows": [
        [
         "HTTP / HTTPS",
         "Application",
         "80 / 443 (TCP)",
         "Web: request–response transfer of pages and APIs; HTTPS adds TLS encryption"
        ],
        [
         "DNS",
         "Application",
         "53 (UDP, TCP for large replies)",
         "Translates domain names into IP addresses"
        ],
        [
         "SMTP",
         "Application",
         "25 / 587 (TCP)",
         "Sends and relays e-mail between clients and mail servers"
        ],
        [
         "FTP",
         "Application",
         "21 control, 20 data (TCP)",
         "File transfer with separate control and data connections"
        ],
        [
         "TCP",
         "Transport",
         "—",
         "Connection-oriented, reliable, ordered byte stream with flow and congestion control"
        ],
        [
         "UDP",
         "Transport",
         "—",
         "Connectionless, unreliable, low-overhead datagrams (DNS, streaming, VoIP)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Point",
    [
     "Any four with their purpose answer the question; pairing application protocols with the transport they use (HTTP/SMTP/FTP over TCP, DNS mostly over UDP) shows understanding of both layers."
    ]
   ]
  ],
  "sources": [
   "Module 6 slides 22–66 (UDP, TCP)",
   "Module 7 slides (DNS, HTTP, SMTP, FTP)"
  ]
 },
 "b4947e2d97a6115f": {
  "sections": [
   [
    "i. Throughput",
    [
     "12 000 frames/min × 10 000 bits = 1.2 × 10⁸ bits/min ÷ 60 = 2 × 10⁶ bps = 2 Mbps (only 20 % of the 10 Mbps bandwidth)."
    ]
   ],
   [
    "ii. E-mail of 2.5 KB on 1 Gbps over 12 000 km",
    [
     "Transmission = 2.5 × 1024 × 8 / 10⁹ = 20 480 / 10⁹ = 20.48 µs.",
     "Propagation = 12 000 km / 3 × 10⁸ m/s = 40 ms.",
     "Propagation is ~2000 × longer — for a short message on a fast link, distance dominates."
    ]
   ],
   [
    "iii. Circuit-switched delay",
    [
     "Tp = 5000 km / 2 × 10⁸ = 25 ms; control transmission = 1000 / 1 Gbps = 1 µs.",
     "Setup (two-way) + teardown (one-way) = 3 × (25 ms + 1 µs) = 75.003 ms.",
     "Data phase = 25 ms + 10 000 / 1 Gbps (10 µs) = 25.01 ms.",
     "Total = 100.013 ms."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "197ad939b66575cd": {
  "sections": [
   [
    "Need for switching",
    [
     "Connecting every pair of devices directly (mesh) needs n(n − 1)/2 links — impossible at scale; switches let many devices share a smaller set of links.",
     "Devices are far apart; switching provides paths through intermediate nodes.",
     "Efficient use of expensive long-distance links through multiplexing and sharing.",
     "Allows alternative paths (fault tolerance) and growth without rewiring every device.",
     {
      "img": "scans/networks/notes/m2-002-001.webp",
      "caption": "Switched networks: circuit, packet (datagram, virtual circuit) and message switching (notes p. 2)",
      "alt": "Switched networks: circuit, packet (datagram, virtual circuit) and message switching (notes p. 2)"
     }
    ]
   ],
   [
    "Packet switching — datagram approach",
    [
     "Message split into packets, each with a full header; every packet is routed independently using the router’s forwarding table; packets may take different paths and arrive out of order; no setup, no reserved resources (connectionless, like IP).",
     {
      "img": "scans/networks/notes/m2-006-005.webp",
      "caption": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)",
      "alt": "Datagram approach: packets 1–3 take different routes and may arrive out of order (notes p. 6)"
     }
    ]
   ],
   [
    "Packet switching — virtual-circuit approach",
    [
     "A logical path is set up first (setup → data transfer → teardown); packets carry a short VCI and all follow the same path in order; resources can be reserved (connection-oriented, like ATM/Frame Relay/MPLS).",
     {
      "img": "scans/networks/notes/m2-006-006.webp",
      "caption": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)",
      "alt": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)"
     }
    ]
   ],
   [
    "Timing comparison",
    [
     {
      "img": "scans/networks/notes/m2-007-007.webp",
      "caption": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)",
      "alt": "Event timing: (a) circuit switching, (b) virtual-circuit packet switching, (c) datagram packet switching (notes p. 7)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "af5388583cfc26ae": {
  "sections": [
   [
    "a) Error the checksum cannot detect",
    [
     "If one word’s bit is increased and the same bit position in another word is decreased by the same amount, the sum stays the same, so the checksum still matches.",
     "Example with 8-bit words: send 0x0F and 0x10 (sum 0x1F). If they arrive as 0x0E and 0x11 (bit 0 goes 1→0 in the first word and 0→1 in the second), the sum is still 0x1F → checksum passes, error undetected. Swapping two words also goes unnoticed, because addition is order-independent."
    ]
   ],
   [
    "b-i) Generating the codeword",
    [
     "Generator 11011 (x⁴ + x³ + x + 1) = 11011 (degree 4) → append 4 zeros: 1111011111 0000",
     "11011 ) 11110111110000\n        11011\n        ─────\n          10111\n          11011\n          ─────\n           11001\n           11011\n           ─────\n              10110\n              11011\n              ─────\n               11010\n               11011\n               ─────\n                  0100   ← remainder",
     "Remainder (CRC) = 0100 → transmitted codeword = 1111011111 0100"
    ]
   ],
   [
    "b-ii) Checking at the receiver (no error)",
    [
     "Received codeword: divide 11110111110100 by 11011",
     "11011 ) 11110111110100\n        11011\n        ─────\n          10111\n          11011\n          ─────\n           11001\n           11011\n           ─────\n              10110\n              11011\n              ─────\n               11011\n               11011\n               ─────\n                  0000   ← remainder",
     "Syndrome = 0000 (all zeros) → accepted as error-free."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 21–24 (checksum, one’s-complement arithmetic)",
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)"
  ]
 },
 "c48055663eac4ae1": {
  "sections": [
   [
    "Answer",
    [
     "No generator is given, so the Hamming code is used. m = 11 → r = 4 (2⁴ = 16 ≥ 11 + 4 + 1) → 15-bit codeword 110101110001101. Flipping bit 6 gives syndrome 6, which locates and corrects the error."
    ]
   ],
   [
    "a. Code generation at the sender",
    [
     "Parity at positions 1, 2, 4, 8 (counted from the right); the 11 data bits fill the remaining positions from 15 down to 3.",
     {
      "table": {
       "head": [
        "Position",
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Bit",
         "D",
         "D",
         "D",
         "D",
         "D",
         "D",
         "D",
         "P8",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Value",
         "1",
         "1",
         "0",
         "1",
         "0",
         "1",
         "1",
         "1",
         "0",
         "0",
         "0",
         "1",
         "1",
         "0",
         "1"
        ]
       ]
      }
     },
     "P1 covers 1,3,5,7,9,11,13,15 → XOR of data at 3,5,7,9,11,13,15 = 1⊕0⊕0⊕1⊕0⊕0⊕1 → P1 = 1\nP2 covers 2,3,6,7,10,11,14,15 → XOR of data at 3,6,7,10,11,14,15 = 1⊕0⊕0⊕1⊕0⊕1⊕1 → P2 = 0\nP4 covers 4,5,6,7,12,13,14,15 → XOR of data at 5,6,7,12,13,14,15 = 0⊕0⊕0⊕1⊕0⊕1⊕1 → P4 = 1\nP8 covers 8,9,10,11,12,13,14,15 → XOR of data at 9,10,11,12,13,14,15 = 1⊕1⊕0⊕1⊕0⊕1⊕1 → P8 = 1",
     "Codeword: 110101110001101"
    ]
   ],
   [
    "b. Receiver (6th bit flipped)",
    [
     "Received: 110101110101101",
     "C1: positions 1,3,5,7,9,11,13,15 → 1⊕1⊕0⊕0⊕1⊕0⊕0⊕1 = 0\nC2: positions 2,3,6,7,10,11,14,15 → 0⊕1⊕1⊕0⊕1⊕0⊕1⊕1 = 1\nC4: positions 4,5,6,7,12,13,14,15 → 1⊕0⊕1⊕0⊕1⊕0⊕1⊕1 = 1\nC8: positions 8,9,10,11,12,13,14,15 → 1⊕1⊕1⊕0⊕1⊕0⊕1⊕1 = 0\nSyndrome (C8 C4 C2 C1) = 0110 = 6",
     "Non-zero syndrome → error at position 6; invert it to recover 110101110001101."
    ]
   ],
   [
    "c. What it cannot handle",
    [
     "Two-bit errors: the syndrome is the XOR of two positions and points to a third, wrong bit — it ‘corrects’ the wrong bit (miscorrection). dmin = 3 → correct 1 or detect 2, not both.",
     "Burst errors longer than 1 bit in one codeword (unless codewords are interleaved).",
     "An error pattern equal to another codeword (3 suitably placed bits) gives syndrome 0 → undetected."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 },
 "f5ac56f67423b36f": {
  "sections": [
   [
    "a) Functionalities and the layers that provide them",
    [
     {
      "table": {
       "head": [
        "Function",
        "Layer(s)",
        "Justification"
       ],
       "rows": [
        [
         "Fault tolerance (path)",
         "Network",
         "Routing finds alternative paths around failed links/routers (packet switching)"
        ],
        [
         "Speed matching",
         "Data link and Transport",
         "Flow control (sliding window) per hop and end to end; TCP congestion control matches the network’s capacity"
        ],
        [
         "Data integrity",
         "Data link and Transport",
         "CRC per frame; TCP/UDP checksums, sequence numbers and retransmission end to end"
        ],
        [
         "Segmentation and reassembly",
         "Transport (and Network)",
         "TCP splits the byte stream into segments and reassembles them; IP fragments to fit link MTUs"
        ],
        [
         "Node-to-node delivery",
         "Data link",
         "MAC addresses deliver a frame across one hop"
        ],
        [
         "Host-to-host delivery",
         "Network",
         "IP addresses deliver a packet from source host to destination host"
        ],
        [
         "Process-to-process delivery",
         "Transport",
         "Port numbers deliver data to the right application"
        ]
       ]
      }
     },
     {
      "img": "scans/networks/notes/m1-012-014.webp",
      "caption": "Node-to-node, host-to-host and process-to-process delivery (notes p. 12)",
      "alt": "Node-to-node, host-to-host and process-to-process delivery (notes p. 12)"
     }
    ]
   ],
   [
    "b) Layer visits from India to Silicon Valley through 3 routers",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 862 274\" width=\"862\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"md-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Source</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router 1</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"196\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router 2</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"607\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router 3</text><rect x=\"548\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"548\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"548\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"783\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Destination</text><rect x=\"724\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"724\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"724\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"724\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"724\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"724\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"724\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"783\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,137 323,137 323,232 363,232 363,137 499,137 499,232 539,232 539,137 675,137 675,232 715,232 715,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#md-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"842\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><text x=\"431\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Hosts use all layers; each router processes physical, data link and network</text></svg>",
      "alt": "Hosts use all layers; each router processes physical, data link and network"
     },
     {
      "table": {
       "head": [
        "Layer",
        "Source",
        "Each router (×3)",
        "Destination",
        "Total visits"
       ],
       "rows": [
        [
         "Transport",
         "1",
         "0",
         "1",
         "2"
        ],
        [
         "Network",
         "1",
         "1",
         "1",
         "5"
        ],
        [
         "Data link",
         "1",
         "2 (in + out)",
         "1",
         "8"
        ],
        [
         "Physical",
         "1",
         "2 (in + out)",
         "1",
         "8"
        ]
       ]
      }
     },
     "(If a router’s receive and send sides are counted as one visit, data link and physical are visited 5 times each.)"
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "9e5da16cf5a86e9a": {
  "sections": [
   [
    "a) One store-and-forward switch",
    [
     "The host finishes sending at L/R₁; the switch has the whole packet at that moment and starts forwarding; it finishes after another L/R₂.",
     "End-to-end delay = L/R₁ + L/R₂ (no propagation, queuing or processing)."
    ]
   ],
   [
    "b) Throughput over three links",
    [
     "i. Throughput = rate of the bottleneck link = min(500 kbps, 2 Mbps, 1 Mbps) = 500 kbps.",
     "ii. Time ≈ 4 × 10⁶ × 8 bits / 500 kbps = 32 × 10⁶ / 5 × 10⁵ = 64 s.",
     "iii. If R₂ = 100 kbps, it becomes the bottleneck: throughput = 100 kbps and time = 32 × 10⁶ / 10⁵ = 320 s (5× longer). Delay per packet on that link also rises (store-and-forward on the slow link)."
    ]
   ],
   [
    "c) Propagation of a 1000-byte packet over 2500 km",
    [
     "Propagation delay = d / s = 2.5 × 10⁶ / 2.4 × 10⁸ = 10.42 ms.",
     "It does not depend on packet length or transmission rate — only on distance and propagation speed. (The transmission time, 4 ms, is what depends on L and R.)"
    ]
   ],
   [
    "d) The two scenarios",
    [
     "Compare transmission time dtrans = L/R with propagation time dprop = d/s.",
     "Scenario 1 — sender finishes before the first bit arrives: dtrans < dprop, i.e. L/R < d/s. Long distance, high rate, small packet. Example: 1000 km (dprop = 5 ms), 1 Mbps, 100 bytes (dtrans = 0.8 ms).",
     "Scenario 2 — first bit arrives before the sender finishes: dtrans > dprop, i.e. L/R > d/s. Short distance, low rate, large packet. Example: 100 m (0.5 µs), 1 Mbps, 100 bytes (0.8 ms)."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "f9c0a6405b75f55b": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Answer",
        "Reason"
       ],
       "rows": [
        [
         "i. Users with circuit switching",
         "2",
         "Each user is given 1 Mbps permanently; 2 Mbps / 1 Mbps = 2"
        ],
        [
         "ii. Queuing with packet switching",
         "≤ 2 users: none; 3 users: yes",
         "Two users need at most 2 Mbps = link capacity; three need 3 Mbps > 2 Mbps, so packets arrive faster than they can be sent and a queue forms"
        ],
        [
         "iii. P(a given user transmits)",
         "0.2",
         "Transmits 20 % of the time"
        ],
        [
         "iv. P(all three transmit)",
         "0.2³ = 0.008",
         "Users are independent"
        ],
        [
         "Fraction of time the queue grows",
         "0.008 (0.8 %)",
         "The queue grows only when all three are active"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Point",
    [
     "Packet switching serves 3 users on a link that circuit switching could give to only 2, at the cost of queuing 0.8 % of the time — the statistical-multiplexing gain."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "73ce008f07d23c3c": {
  "sections": [
   [
    "Answer",
    [
     "CRC = 011; message transmitted = 11001001011. With the 3rd bit inverted the remainder is non-zero → detected."
    ]
   ],
   [
    "Sender",
    [
     "Generator x³ + 1 = 1001 (degree 3) → append 3 zeros: 11001001 000",
     "1001 ) 11001001000\n       1001\n       ────\n        1011\n        1001\n        ────\n          1000\n          1001\n          ────\n             1100\n             1001\n             ────\n              1010\n              1001\n              ────\n               011   ← remainder",
     "Remainder (CRC) = 011 → transmitted codeword = 11001001 011"
    ]
   ],
   [
    "Receiver with 3rd bit inverted",
    [
     "Received: divide 11101001011 by 1001",
     "1001 ) 11101001011\n       1001\n       ────\n        1111\n        1001\n        ────\n         1100\n         1001\n         ────\n          1010\n          1001\n          ────\n            1110\n            1001\n            ────\n             1111\n             1001\n             ────\n              1101\n              1001\n              ────\n               100   ← remainder",
     "Syndrome = 100 ≠ 0 → error detected, frame discarded."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 14–20 (CRC, polynomials, burst-error analysis)"
  ]
 },
 "adc7a030fe6f0774": {
  "sections": [
   [
    "a) Detecting and correcting an error in data bit 3",
    [
     "8 data bits D8…D1 (D1 rightmost) + 4 check bits C8 C4 C2 C1 = 12-bit word. Check bits occupy positions 1, 2, 4, 8; data D1…D8 occupy 3, 5, 6, 7, 9, 10, 11, 12.",
     {
      "table": {
       "head": [
        "Position",
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Bit",
         "D",
         "D",
         "D",
         "D",
         "P8",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Value",
         "0",
         "0",
         "1",
         "1",
         "0",
         "1",
         "0",
         "0",
         "1",
         "1",
         "1",
         "1"
        ]
       ]
      }
     },
     "P1 covers 1,3,5,7,9,11 → XOR of data at 3,5,7,9,11 = 1⊕0⊕1⊕1⊕0 → P1 = 1\nP2 covers 2,3,6,7,10,11 → XOR of data at 3,6,7,10,11 = 1⊕0⊕1⊕1⊕0 → P2 = 1\nP4 covers 4,5,6,7,12 → XOR of data at 5,6,7,12 = 0⊕0⊕1⊕0 → P4 = 1\nP8 covers 8,9,10,11,12 → XOR of data at 9,10,11,12 = 1⊕1⊕0⊕0 → P8 = 0",
     "Stored word: 001101001111. Data bit 3 is at position 6; it flips 0 → 1: 001101101111.",
     "C1: positions 1,3,5,7,9,11 → 1⊕1⊕0⊕1⊕1⊕0 = 0\nC2: positions 2,3,6,7,10,11 → 1⊕1⊕1⊕1⊕1⊕0 = 1\nC4: positions 4,5,6,7,12 → 1⊕0⊕1⊕1⊕0 = 1\nC8: positions 8,9,10,11,12 → 0⊕1⊕1⊕0⊕0 = 0\nSyndrome (C8 C4 C2 C1) = 0110 = 6",
     "Syndrome = 0110 = 6 → position 6 (data bit D3) is wrong → invert it to restore 001101001111."
    ]
   ],
   [
    "b) Burst errors in a 32-bit message (interleaving)",
    [
     "Split the 32-bit message into four 8-bit datawords, encode each with the 12-bit Hamming code above.",
     "Write the four 12-bit codewords as rows of a 4 × 12 matrix and transmit column by column (48 bits).",
     "A burst of up to 4 consecutive corrupted bits on the line hits each row at most once → each codeword sees a single-bit error, which Hamming corrects.",
     {
      "table": {
       "head": [
        "",
        "c12",
        "c11",
        "…",
        "c1"
       ],
       "rows": [
        [
         "Codeword 1",
         "a",
         "a",
         "…",
         "a"
        ],
        [
         "Codeword 2",
         "b",
         "b",
         "…",
         "b"
        ],
        [
         "Codeword 3",
         "c",
         "c",
         "…",
         "c"
        ],
        [
         "Codeword 4",
         "d",
         "d",
         "…",
         "d"
        ]
       ]
      },
      "caption": "Sent order: a12 b12 c12 d12 | a11 b11 c11 d11 | … — a burst of length ≤ 4 touches each row once."
     },
     {
      "img": "scans/networks/notes/m3-013-013.webp",
      "caption": "Burst-error correction with Hamming code: transmit codewords column-wise (notes p. 13)",
      "alt": "Burst-error correction with Hamming code: transmit codewords column-wise (notes p. 13)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 },
 "c7d3fb788167fbc6": {
  "sections": [
   [
    "Answers",
    [
     {
      "table": {
       "head": [
        "Part",
        "Working",
        "Answer"
       ],
       "rows": [
        [
         "a) Star segments",
         "Library 10 × 15 = 150; Science 12 × 18 = 216; Admin 8 × 12 = 96",
         "462 m"
        ],
        [
         "b) Dual ring",
         "One ring = 40 + 35 + 45 = 120 m; dual ring = 2 × 120",
         "240 m"
        ],
        [
         "c) Entire network",
         "462 + 240",
         "702 m"
        ],
        [
         "d) Cost at $1.00/m",
         "702 × 1.00",
         "$702"
        ],
        [
         "e) Fibre ring at $2.50/m",
         "Star 462 × $1 + ring 240 × $2.50 = 462 + 600",
         "$1,062 (↑ $360)"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Layout",
    [
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 560 230\" width=\"560\" height=\"230\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"160,60 395,60\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><rect x=\"250.2\" y=\"51\" width=\"54.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"277.5\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"11.5\">40 m ×2</text><polyline points=\"460,75 280,175\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><rect x=\"342.7\" y=\"116\" width=\"54.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"370\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"11.5\">35 m ×2</text><polyline points=\"280,175 100,75\" fill=\"none\" stroke=\"#2f7a4f\" stroke-width=\"2.4\"/><rect x=\"162.7\" y=\"116\" width=\"54.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"190\" y=\"125\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#2f7a4f\" font-weight=\"600\" font-size=\"11.5\">45 m ×2</text><polyline points=\"280,95 100,75\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><polyline points=\"280,95 460,75\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"/><rect x=\"40\" y=\"45\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"100\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Library switch</text><rect x=\"395\" y=\"45\" width=\"130\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"460\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Science switch</text><rect x=\"220\" y=\"175\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"280\" y=\"190\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Admin switch</text><rect x=\"220\" y=\"95\" width=\"120\" height=\"30\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"280\" y=\"110\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Data-centre router</text><text x=\"100\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">10 PCs × 15 m</text><text x=\"460\" y=\"20\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">12 PCs × 18 m</text><text x=\"280\" y=\"225\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">8 PCs × 12 m</text></svg>",
      "alt": "Diagram"
     }
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 6–8"
  ]
 },
 "b5b253a61b3a8808": {
  "sections": [
   [
    "a) Total delay of each datagram",
    [
     "Datagram = 1000 bytes = 8000 bits. Source link at 1 Mbps: Ts = 8 ms. Final link at 1 kbps: Td = 8 s. Propagation = path / 2 × 10⁸ m/s. Router delays 8, 12, 7, 15, 10 ms for routers 1–5.",
     {
      "table": {
       "head": [
        "Datagram",
        "Path",
        "Routers",
        "Router delay",
        "Propagation",
        "Arrives at last link",
        "Total (+ 8 s final hop)"
       ],
       "rows": [
        [
         1,
         "5000 km",
         "1, 3, 4, 5",
         "40 ms",
         "25 ms",
         "73 ms",
         "8.073 s"
        ],
        [
         2,
         "13500 km",
         "1, 2, 5",
         "30 ms",
         "67.5 ms",
         "105.5 ms",
         "8.1055 s"
        ],
        [
         3,
         "11200 km",
         "1, 4, 5",
         "33 ms",
         "56 ms",
         "97 ms",
         "8.097 s"
        ],
        [
         4,
         "9800 km",
         "1, 3, 5",
         "25 ms",
         "49 ms",
         "82 ms",
         "8.082 s"
        ],
        [
         5,
         "14000 km",
         "1, 2, 3, 5",
         "37 ms",
         "70 ms",
         "115 ms",
         "8.115 s"
        ],
        [
         6,
         "7500 km",
         "1, 4, 2, 5",
         "45 ms",
         "37.5 ms",
         "90.5 ms",
         "8.0905 s"
        ]
       ]
      }
     },
     "(If the 1 kbps link is shared FIFO, each later datagram also waits for the 8 s transmissions of those ahead of it, so the k-th to arrive finishes about 8k s after the start.)"
    ]
   ],
   [
    "b) Reordering",
    [
     "Yes. They reach the final link in the order 1, 4, 6, 3, 2, 5 instead of 1–6, because each datagram takes a different route with different length and router delays. The destination must reorder them."
    ]
   ],
   [
    "c) Why virtual circuits need no reordering",
    [
     "All packets of a virtual circuit follow the same pre-established path through the same switches in FIFO order, so they cannot overtake one another — they arrive in the order sent.",
     {
      "img": "scans/networks/notes/m2-006-006.webp",
      "caption": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)",
      "alt": "Virtual-circuit approach: all packets follow the pre-established path (notes p. 6)"
     }
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "a727cf2b394ce3a1": {
  "sections": [
   [
    "a) Propagation delays",
    [
     "Server ↔ node: 60 km / 2 × 10⁸ = 0.3 ms.",
     "Node ↔ node: 350 km / 2 × 10⁸ = 1.75 ms.",
     "Path (2 server links + 3 node links): 2 × 0.3 + 3 × 1.75 = 5.85 ms."
    ]
   ],
   [
    "b) Transmission time",
    [
     "Message = 250 MB = 2 × 10⁹ bits → 2 × 10⁹ / 150 × 10⁶ = 13.33 s."
    ]
   ],
   [
    "c) Total time",
    [
     "Total = transmission + propagation + processing at 4 nodes = 13.333 + 0.00585 + 4 × 0.25 = 14.339 s.",
     "More precisely, with packet headers and pipelining: 20834 packets of 12 048 bytes, 0.6426 ms each → (20834 + 4) × 0.6426 ms + 5.85 ms + 1 s ≈ 14.396 s."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "97008b274fc6192a": {
  "sections": [
   [
    "a) VRC misses an even number of inverted bits",
    [
     "VRC (single parity) adds one bit so the count of 1s is even. Inverting k bits changes the count of 1s by an amount with the same parity as k.",
     "Example (even parity): 1100001 → sent 11000011 (four 1s). Two bits flipped → 10100011: still four 1s → parity check passes → undetected. One or three flips would make the count odd → detected."
    ]
   ],
   [
    "b) LRC misses a ‘rectangle’ of errors",
    [
     "LRC computes parity for each column across several data units. If bits in the same two columns are flipped in two data units, each affected column has two flips → column parity unchanged.",
     "Example: units 11100111 and 11011101; flip bits 2 and 5 in both → 10101111 and 10010101. Every column still has the same parity, so the LRC byte matches → undetected.",
     {
      "img": "scans/networks/notes/m3-010-011.webp",
      "caption": "Two-dimensional parity: 3 errors are detected, but 4 errors in a rectangle are not (notes p. 10)",
      "alt": "Two-dimensional parity: 3 errors are detected, but 4 errors in a rectangle are not (notes p. 10)"
     }
    ]
   ],
   [
    "c) CRC catches every burst with length ≤ degree r",
    [
     "A burst of length L starting at bit i is E(x) = xⁱ·(x^(L−1) + … + 1). An error escapes only if G(x) divides E(x).",
     "G(x) has a non-zero constant term, so it shares no factor x with xⁱ; it would have to divide the bracket, whose degree is L − 1 < r = degree of G. A polynomial cannot divide a non-zero polynomial of smaller degree → remainder ≠ 0 → detected.",
     "Example: G = x³ + x + 1 (1011, r = 3). Burst 111 (L = 3) gives E = xⁱ(x² + x + 1); 1011 cannot divide 111, so it is caught."
    ]
   ],
   [
    "d) Checksum misses equal and opposite changes",
    [
     "The checksum is the one’s-complement sum. If one segment gains +2ᵏ (a 0 → 1 at bit k) and another segment loses −2ᵏ (1 → 0 at the same bit k), the total is unchanged.",
     "Example (4-bit segments): 0101 + 0010 = 0111. Received 0100 + 0011 (bit 0: 1→0 in the first, 0→1 in the second) still sums to 0111 → checksum passes."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 9–10, 14–24"
  ]
 },
 "5ae86bd3b9579a6a": {
  "sections": [
   [
    "a) Checksum (sections of 4 hex digits = 16 bits)",
    [
     "  Section  Hex    Chars\n        1  5255   RU\n        2  4259   BY\n        3  204A    J\n        4  5542   UB\n        5  494C   IL\n        6  4545   EE\n        7  2054    T\n        8  4F57   OW\n        9  4552   ER\n  ─────────────\n  Raw sum         24DC8\n  Wrapped         4DCA\n  Checksum        B235  (= FFFF − 4DCA)",
     "Receiver: sum of 9 sections + checksum = 2FFFD → wrapped FFFF → complement 0000 → no error."
    ]
   ],
   [
    "b) LSB of the first byte in sections 3 and 4 corrupted",
    [
     "Section 3 = 204A (\" J\"): first byte 0x20 → LSB 0 → 1 → 214A, i.e. +0x0100.",
     "Section 4 = 5542 (\"UB\"): first byte 0x55 → LSB 1 → 0 → 5442, i.e. −0x0100.",
     "Receiver sum (corrupted words + checksum B235) = 2FFFD → wrapped FFFF → complement 0000.",
     "The two errors are equal and opposite in the same bit position, so they cancel in the sum. The receiver gets 0000 and wrongly accepts the data — the checksum cannot detect this error.",
     "This is the known weakness of the checksum; a CRC (or Fletcher/Adler checksum, which weights by position) would catch it."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 21–24 (checksum, one’s-complement arithmetic)"
  ]
 },
 "072886c727468cf3": {
  "sections": [
   [
    "Devices required",
    [
     "NIC in every computer (provides the MAC address); twisted-pair (Cat5e/6) cables; one switch per LAN (connects hosts, forwards frames by MAC); a router (or layer-3 switch) to connect the two LANs, with one interface in each LAN acting as the default gateway.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 680 250\" width=\"680\" height=\"250\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><polyline points=\"45,54 150,105\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"115,196 150,135\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"185,54 150,105\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"255,196 150,135\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"400,54 490,105\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"460,196 490,135\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"520,54 490,105\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"580,196 490,135\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"640,54 490,105\" fill=\"none\" stroke=\"#9fb3a5\" stroke-width=\"1.5\"/><polyline points=\"195,120 275,120\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"177.6\" y=\"111\" width=\"114.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"235\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">G0/0 192.168.1.1</text><polyline points=\"365,120 445,120\" fill=\"none\" stroke=\"#152b24\" stroke-width=\"1.5\"/><rect x=\"347.6\" y=\"111\" width=\"114.7\" height=\"18\" rx=\"3\" fill=\"#fff\" opacity=\"0.92\"/><text x=\"405\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">G0/1 192.168.2.1</text><rect x=\"105\" y=\"105\" width=\"90\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"150\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Switch 1</text><rect x=\"445\" y=\"105\" width=\"90\" height=\"30\" rx=\"5\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"490\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Switch 2</text><rect x=\"275\" y=\"103\" width=\"90\" height=\"34\" rx=\"5\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"320\" y=\"120\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"12.5\">Router</text><rect x=\"15\" y=\"26\" width=\"60\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"45\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host1</text><rect x=\"85\" y=\"196\" width=\"60\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"115\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host2</text><rect x=\"155\" y=\"26\" width=\"60\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"185\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host3</text><rect x=\"225\" y=\"196\" width=\"60\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"255\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host4</text><rect x=\"372\" y=\"26\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"400\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host5</text><rect x=\"432\" y=\"196\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"460\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host6</text><rect x=\"492\" y=\"26\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"520\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host7</text><rect x=\"552\" y=\"196\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"580\" y=\"210\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host8</text><rect x=\"612\" y=\"26\" width=\"56\" height=\"28\" rx=\"5\" fill=\"#fffefa\" stroke=\"#152b24\" stroke-width=\"1.2\"/><text x=\"640\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11\">Host9</text><text x=\"150\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">LAN 1 — 192.168.1.0/24</text><text x=\"490\" y=\"245\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">LAN 2 — 192.168.2.0/24</text></svg>",
      "alt": "Diagram"
     }
    ]
   ],
   [
    "Address plan",
    [
     {
      "table": {
       "head": [
        "Device",
        "LAN",
        "IP address / mask",
        "Default gateway",
        "MAC address (example)"
       ],
       "rows": [
        [
         "Host1",
         "1",
         "192.168.1.11/24",
         "192.168.1.1",
         "00:1A:2B:00:00:01"
        ],
        [
         "Host2",
         "1",
         "192.168.1.12/24",
         "192.168.1.1",
         "00:1A:2B:00:00:02"
        ],
        [
         "Host3",
         "1",
         "192.168.1.13/24",
         "192.168.1.1",
         "00:1A:2B:00:00:03"
        ],
        [
         "Host4",
         "1",
         "192.168.1.14/24",
         "192.168.1.1",
         "00:1A:2B:00:00:04"
        ],
        [
         "Host5–Host9",
         "2",
         "192.168.2.11 – .15/24",
         "192.168.2.1",
         "00:1A:2B:00:00:05 – 09"
        ],
        [
         "Router G0/0",
         "1",
         "192.168.1.1/24",
         "—",
         "00:1A:2B:00:00:A0"
        ],
        [
         "Router G0/1",
         "2",
         "192.168.2.1/24",
         "—",
         "00:1A:2B:00:00:A1"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Communication between the LANs",
    [
     "A host compares the destination IP with its own subnet (using the mask). For a host in the other LAN it sends the frame to the router’s MAC (found with ARP for the gateway IP). The router removes the frame, looks up the destination network, and sends a new frame on the other LAN with its own MAC as source and the destination host’s MAC. IP addresses stay unchanged; MAC addresses change per hop."
    ]
   ],
   [
    "Host1 → Host4 inside LAN 1",
    [
     "1. Host1 sees 192.168.1.14 is in its own subnet (same network bits) → direct delivery, no router.",
     "2. If Host4’s MAC is not in its ARP cache, Host1 broadcasts an ARP request ‘Who has 192.168.1.14?’ (destination MAC FF:FF:FF:FF:FF:FF). The switch floods it; Host4 replies with its MAC (unicast).",
     "3. Host1 sends the IP packet in an Ethernet frame: source MAC …01, destination MAC …04.",
     "4. The switch has learned Host1’s port (from the ARP request) and Host4’s port (from the reply), so it forwards the frame only to Host4’s port.",
     "5. Host4 checks the CRC and destination MAC, passes the packet to IP and up the stack."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 5, 17–19 (devices, physical/logical addressing)",
   "Module 4 slides (IP addressing)"
  ]
 },
 "7e8bcd95583e7c94": {
  "sections": [
   [
    "Server sending an encrypted file — layer by layer",
    [
     {
      "table": {
       "head": [
        "Layer",
        "At the server (sending)",
        "At a client (receiving)"
       ],
       "rows": [
        [
         "Application",
         "File-transfer application (e.g. SFTP/HTTPS) reads the file and issues the send",
         "Application receives the file and saves it"
        ],
        [
         "Presentation",
         "Encodes the data format and encrypts it (TLS/AES), possibly compresses",
         "Decrypts, decompresses, converts the format"
        ],
        [
         "Session",
         "Establishes/maintains the session with each client, adds checkpoints so a long transfer can resume",
         "Manages the dialog; resumes from the last checkpoint after a break"
        ],
        [
         "Transport",
         "TCP connection per client; segments the encrypted stream, numbers segments, adds ports",
         "Reassembles in order, ACKs, requests retransmission of lost segments"
        ],
        [
         "Network",
         "Adds IP header with the client’s IP; checks if the client is on the same network (subnet mask)",
         "Accepts packets addressed to it"
        ],
        [
         "Data link",
         "Frames with MAC addresses and CRC (see below)",
         "Checks CRC, strips the frame"
        ],
        [
         "Physical",
         "Sends bits as signals",
         "Receives bits"
        ]
       ]
      }
     }
    ]
   ],
   [
    "Client in the same network vs a different network",
    [
     "Same network: the server ARPs for the client’s MAC and sends the frame directly; only switches (layer 2) are in between — no network-layer processing on the way.",
     "Different network: the destination is off-subnet, so the frame is addressed to the default gateway’s MAC. The router de-encapsulates to layer 3, reads the destination IP, decrements TTL, chooses the next hop and re-encapsulates in a new frame (new MAC addresses; may fragment if the MTU is smaller). This repeats at every router until the client’s network.",
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 510 274\" width=\"510\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mg-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Server</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Switch</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client 1 (same LAN)</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"372\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"372\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"372\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"372\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,163 323,163 323,232 363,232 363,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#mg-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"490\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><text x=\"255\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Same network: only layer-2 switching in between</text></svg>",
      "alt": "Same network: only layer-2 switching in between"
     },
     {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 686 274\" width=\"686\" height=\"274\" font-family=\"system-ui,-apple-system,Segoe UI,sans-serif\" font-size=\"13\"><defs><marker id=\"mh-b3412c\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\"><path d=\"M0 0L10 5L0 10z\" fill=\"#b3412c\"/></marker></defs><text x=\"79\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Server</text><rect x=\"20\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"20\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"20\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"20\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"20\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"20\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"20\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"79\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><text x=\"255\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router</text><rect x=\"196\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"196\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"196\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"255\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"431\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Router</text><rect x=\"372\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"372\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"372\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"431\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><text x=\"607\" y=\"16\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"700\" font-size=\"12.5\">Client 2 (other network)</text><rect x=\"548\" y=\"196\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6e3c8\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"209\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Physical</text><rect x=\"548\" y=\"170\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#dfe9f5\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"183\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Data link</text><rect x=\"548\" y=\"144\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#e9f2df\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"157\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Network</text><rect x=\"548\" y=\"118\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#d9ecaf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"131\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Transport</text><rect x=\"548\" y=\"92\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#eadcf2\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"105\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Session</text><rect x=\"548\" y=\"66\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f2efe0\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"79\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Presentation</text><rect x=\"548\" y=\"40\" width=\"118\" height=\"26\" rx=\"2\" fill=\"#f6d5cf\" stroke=\"#152b24\" stroke-width=\"1\"/><text x=\"607\" y=\"53\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#152b24\" font-weight=\"600\" font-size=\"11.5\">Application</text><polyline points=\"147,53 147,232 187,232 187,137 323,137 323,232 363,232 363,137 499,137 499,232 539,232 539,53\" fill=\"none\" stroke=\"#b3412c\" stroke-width=\"2\" stroke-dasharray=\"6 3\" marker-end=\"url(#mh-b3412c)\"/><line x1=\"20\" y1=\"232\" x2=\"666\" y2=\"232\" stroke=\"#52615a\" stroke-width=\"2.5\"/><text x=\"343\" y=\"262\" text-anchor=\"middle\" dominant-baseline=\"middle\" fill=\"#52615a\" font-size=\"11\">Different network: routers process up to layer 3</text></svg>",
      "alt": "Different network: routers process up to layer 3"
     },
     "Encryption at the presentation layer means intermediate devices see only ciphertext; integrity is still checked hop by hop (CRC) and end to end (TCP checksum, TLS MAC)."
    ]
   ]
  ],
  "sources": [
   "Module 1 ADHD notes p. 2–8 (components, topologies)",
   "Module 1 ADHD notes p. 9–19 (OSI and TCP/IP layers)"
  ]
 },
 "33d0902009f3d88c": {
  "sections": [
   [
    "Proposed hybrid model",
    [
     "Use a packet-switched core with circuit-like reserved paths for real-time classes — e.g. MPLS with traffic engineering (label-switched paths = virtual circuits) plus DiffServ:",
     {
      "table": {
       "head": [
        "Traffic",
        "Treatment",
        "Guarantee"
       ],
       "rows": [
        [
         "Voice",
         "Reserved LSP / strict-priority queue (EF), admission control",
         "Fixed bandwidth, bounded delay & jitter"
        ],
        [
         "Video",
         "Reserved LSP with guaranteed rate (AF), shaping at the edge",
         "Bounded delay, low loss"
        ],
        [
         "Data",
         "Best-effort packet switching over leftover capacity",
         "No guarantee; uses idle reserved capacity"
        ]
       ]
      }
     },
     "Admission control at setup rejects new voice/video sessions when reserved capacity is exhausted (circuit-like blocking) so admitted flows keep their bounds."
    ]
   ],
   [
    "Critical evaluation",
    [
     "Gains: real-time flows get circuit-like deterministic delay; bursty data still enjoys statistical multiplexing and can borrow unused reserved bandwidth — fixing circuit switching’s idle-capacity waste.",
     "Remaining weaknesses: setup and state per flow (signalling overhead, scalability limits); blocking when reservations are full; worst-case bounds hold only if every hop enforces scheduling; reroute after failure re-introduces setup delay; data traffic can still suffer congestion.",
     "Conclusion: it narrows but does not fully remove the trade-off — strict bounds need resource reservation (a circuit property), which always costs some efficiency."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)",
   "Module 6 slides 146–160 (QoS)"
  ]
 },
 "944ff378eaee5e74": {
  "sections": [
   [
    "a) Circuit-switched path, 2 Mbps, 2000 control bits, 10 000 km",
    [
     "Tp = 10 000 km / 2 × 10⁸ = 50 ms; control = 2000 / 2 Mbps = 1 ms; setup (two-way) + teardown (one-way) = 3 × (50 ms + 1 ms) = 153 ms.",
     {
      "table": {
       "head": [
        "Data bits",
        "Transmission",
        "Total = 153 ms + Tp + Tt"
       ],
       "rows": [
        [
         "10,000",
         "5 ms",
         "208 ms"
        ],
        [
         "1,00,000",
         "50 ms",
         "253 ms"
        ],
        [
         "10,00,000",
         "500 ms",
         "703 ms"
        ]
       ]
      }
     }
    ]
   ],
   [
    "b) 5 KB e-mail on 2 Gbps over 24 000 km",
    [
     "Transmission time = 5 × 1024 × 8 / 2 × 10⁹ = 20.48 µs.",
     "Propagation time = 24 000 km / 2.4 × 10⁸ m/s = 100 ms.",
     "Propagation dominates — for short messages on fast links, latency is set by distance, not bandwidth."
    ]
   ]
  ],
  "sources": [
   "Module 2 ADHD notes p. 2–8 (switching)",
   "Module 2 ADHD notes p. 10–12 (data rate, performance)"
  ]
 },
 "8323ecf2cd9d4927": {
  "sections": [
   [
    "Answer",
    [
     "Codeword = 100110101010100 (15 bits). Inverting bit 13 gives 101110101010100; syndrome = 1101 = 13 → bit 13 is corrected."
    ]
   ],
   [
    "Encoding",
    [
     "m = 11 → r = 4 (2⁴ ≥ 11 + 4 + 1). Parity at 1, 2, 4, 8; data at 15 … 3.",
     {
      "table": {
       "head": [
        "Position",
        15,
        14,
        13,
        12,
        11,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
       ],
       "rows": [
        [
         "Bit",
         "D",
         "D",
         "D",
         "D",
         "D",
         "D",
         "D",
         "P8",
         "D",
         "D",
         "D",
         "P4",
         "D",
         "P2",
         "P1"
        ],
        [
         "Value",
         "1",
         "0",
         "0",
         "1",
         "1",
         "0",
         "1",
         "0",
         "1",
         "0",
         "1",
         "0",
         "1",
         "0",
         "0"
        ]
       ]
      }
     },
     "P1 covers 1,3,5,7,9,11,13,15 → XOR of data at 3,5,7,9,11,13,15 = 1⊕1⊕1⊕1⊕1⊕0⊕1 → P1 = 0\nP2 covers 2,3,6,7,10,11,14,15 → XOR of data at 3,6,7,10,11,14,15 = 1⊕0⊕1⊕0⊕1⊕0⊕1 → P2 = 0\nP4 covers 4,5,6,7,12,13,14,15 → XOR of data at 5,6,7,12,13,14,15 = 1⊕0⊕1⊕1⊕0⊕0⊕1 → P4 = 0\nP8 covers 8,9,10,11,12,13,14,15 → XOR of data at 9,10,11,12,13,14,15 = 1⊕0⊕1⊕1⊕0⊕0⊕1 → P8 = 0"
    ]
   ],
   [
    "Correcting the inverted 13th bit",
    [
     "Received: 101110101010100",
     "C1: positions 1,3,5,7,9,11,13,15 → 0⊕1⊕1⊕1⊕1⊕1⊕1⊕1 = 1\nC2: positions 2,3,6,7,10,11,14,15 → 0⊕1⊕0⊕1⊕0⊕1⊕0⊕1 = 0\nC4: positions 4,5,6,7,12,13,14,15 → 0⊕1⊕0⊕1⊕1⊕1⊕0⊕1 = 1\nC8: positions 8,9,10,11,12,13,14,15 → 0⊕1⊕0⊕1⊕1⊕1⊕0⊕1 = 1\nSyndrome (C8 C4 C2 C1) = 1101 = 13",
     "The check bits that fail are exactly those whose groups contain position 13 (13 = 8 + 4 + 1), so the syndrome is 1101 = 13 → invert bit 13."
    ]
   ]
  ],
  "sources": [
   "Module 3 ADHD notes p. 11–13 (Hamming code, interleaving)"
  ]
 }
};
