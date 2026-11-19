window.ATLAS_DBMS_ANSWERS = {
  "84949b38a8f9d611": {
    "answer": [
      "(a) Data abstraction hides storage detail behind three levels — physical (internal), logical (conceptual) and view (external). Data independence is the ability to change one level without rewriting the level above it; the DBMS enforces it through the mappings between levels.",
      "(b) The catalog (data dictionary) is the DBMS's own database of metadata: table and column definitions, types, constraints, indexes, views, users and privileges. Because programs refer to names and the DBMS looks up the physical details in the catalog at run time, storage can change without changing programs."
    ],
    "points": [
      "Physical level (course platform): how COURSE, LEARNER and ENROLLMENT records are stored — heap or clustered files, B+ tree index on learner_id, partitioning of video-progress logs, compression. Only the DBA and DBMS see this.",
      "Logical level: the whole schema in relations — LEARNER(learner_id, name, email), COURSE(course_id, title, instructor_id), ENROLLMENT(learner_id, course_id, enrolled_on, progress), with keys and foreign keys.",
      "View level: each user sees a tailored subset. A learner sees ‘My courses and progress’; an instructor sees enrolment counts and grades for own courses only; finance sees payments. Views also hide data a user is not allowed to see.",
      "Physical data independence: adding an index on ENROLLMENT(course_id) or moving files to SSD changes only the internal schema and the conceptual–internal mapping; the logical schema and all queries stay the same.",
      "Logical data independence: adding a column COURSE.language or splitting LEARNER into two tables changes the conceptual schema; the external–conceptual mapping is updated so existing views and apps keep working.",
      "Catalog contents: relation names, attribute names/types, keys, foreign keys, CHECK constraints, index definitions and storage locations, view definitions, user accounts and grants, statistics used by the optimizer.",
      "How the catalog gives independence: a query names ENROLLMENT.progress; the parser and optimizer read the catalog to find the file, record format and available indexes. Change the index or file layout → update the catalog entry → the query is unchanged.",
      "Why data modelling matters: it captures requirements precisely (entities, relationships, constraints) before implementation, removes redundancy and update anomalies, gives a shared design language between users and developers, and is the input from which the logical schema and catalog entries are created."
    ],
    "example": [
      "External:  LearnerView(course_title, progress)   InstructorView(course_id, enrolled_count)\n              ↕ external/conceptual mapping  → logical data independence\nConceptual: LEARNER, COURSE, ENROLLMENT (keys, FKs, constraints)\n              ↕ conceptual/internal mapping  → physical data independence\nInternal:   heap file + B+ tree(learner_id), partitioned log files"
    ]
  },
  "4c402ca64206aceb": {
    "answer": [
      "Entities: AIRLINE, AIRPLANE, EMPLOYEE, ROUTE and TRANSACTION, with TRANSACTION specialised into BUY and SELL. An airline owns airplanes, employs employees, operates routes and records transactions; an airplane is assigned to routes."
    ],
    "points": [
      "AIRLINE(airline_id PK, name, contact_person, telephone). The question’s ‘identification number, contact person, telephone’ is the airline record kept by SFFA.",
      "AIRPLANE(aircraft_id PK, model, capacity). OWNS: AIRLINE 1 — N AIRPLANE; airplane side total (every airplane belongs to an airline), airline side partial.",
      "EMPLOYEE(emp_id PK, name, address, birthday, sex, position, qualification). Qualification can be multivalued {qualification}. WORKS_FOR: AIRLINE 1 — N EMPLOYEE, total on employee side.",
      "ROUTE(route_id PK, origin, destination, classification ∈ {domestic, international}, distance, price_per_passenger). OPERATES: AIRLINE 1 — N ROUTE (total on route side).",
      "ASSIGNED_TO: AIRPLANE M — N ROUTE (an aircraft flies many routes; a route is flown by many aircraft), partial on both sides; optional attribute schedule_date.",
      "TRANSACTION(txn_id PK, date, description, amount). RECORDS: AIRLINE 1 — N TRANSACTION, total on transaction side. Disjoint, total specialisation {BUY, SELL} on a type attribute; SELL may relate to ROUTE (ticket sold for a route).",
      "Optional extension: CREW relationship EMPLOYEE M — N AIRPLANE to show pilots/crew certified on an aircraft model."
    ],
    "example": [
      "AIRLINE ──1── OWNS ──N══ AIRPLANE ══M── ASSIGNED_TO ──N── ROUTE\n   │1                                                     ║N\n   ├──── WORKS_FOR ──N══ EMPLOYEE                          ║\n   ├──── OPERATES ────────────────────────────────────────┘\n   └──── RECORDS ──N══ TRANSACTION (txn_id, date, description, amount)\n                           │ d (disjoint, total)\n                     BUY ──┴── SELL\n\n══ = total participation   ── = partial participation   underlined key = PK"
    ]
  },
  "541b78f0d925c824": {
    "answer": [
      "(a) Candidate key = NAME, since NAME → STREET, CITY, STATE → POSTCODE. IADDR is in 2NF but not in 3NF and not in BCNF.",
      "(b) BG → D follows: from B → AI get B → A; augment to BG → AG; union with BG → C gives BG → CGA; transitivity with CGA → BDJ gives BG → BDJ; decomposition gives BG → D."
    ],
    "points": [
      "NAME⁺ = {NAME, STREET, CITY, STATE, POSTCODE}, and NAME appears on no right-hand side, so NAME is the only key. Prime attribute: NAME only.",
      "2NF: the key is a single attribute, so no partial dependency is possible → 2NF holds.",
      "3NF: POSTCODE → CITY, STATE has a non-superkey left side and non-prime right side (also STREET, CITY, STATE → POSTCODE) → transitive dependency → not 3NF.",
      "BCNF: every non-trivial FD must have a superkey on the left; POSTCODE is not a superkey → BCNF violated.",
      "Fix: decompose into R1(POSTCODE, CITY, STATE) and R2(NAME, STREET, POSTCODE), which is lossless (common attribute POSTCODE is a key of R1)."
    ],
    "example": [
      "Proof of BG → D (Armstrong's axioms)\n1. B → AI              given\n2. B → A               decomposition of 1\n3. BG → AG             augmentation of 2 by G\n4. BG → C              given\n5. BG → ACG            union of 3 and 4\n6. CGA → BDJ           given\n7. BG → BDJ            transitivity of 5, 6\n8. BG → D              decomposition of 7   ∎"
    ]
  },
  "ece18c51ae4ac944": {
    "answer": [
      "(a) Lossless: (ABC) ∩ (ADE) = A and A⁺ = ABCDE, so A is a key of both parts.",
      "(b) Lossy: (ABC) ∩ (CDE) = C and C⁺ = C, which is a key of neither part, so the join can create spurious tuples.",
      "(c) Not dependency preserving: projected FDs are {A → BC} on ABC and {A → DE, E → A} on ADE; from their union B⁺ = B and CD⁺ = CD, so B → D and CD → E are lost."
    ],
    "points": [
      "Lossless test (binary decomposition): R1 ∩ R2 → R1 or R1 ∩ R2 → R2 must be in F⁺.",
      "Closures: A⁺ = ABCDE (A→BC, B→D, CD→E); E⁺ = ABCDE (E→A); B⁺ = BD; C⁺ = C; D⁺ = D.",
      "Projection on ABC: only A → BC (and its consequences) — B and C determine nothing else inside ABC.",
      "Projection on ADE: A → DE, E → A (hence E → D), DE → A.",
      "Dependency preservation needs (F1 ∪ F2)⁺ = F⁺; B → D ∉ (F1 ∪ F2)⁺, so the check of B → D would need a join."
    ],
    "example": [
      "Counter-example for (b): R has t1 = (a1, b1, c, d1, e1), t2 = (a2, b2, c, d2, e2)  (satisfies all FDs)\nπABC = {(a1,b1,c), (a2,b2,c)}     πCDE = {(c,d1,e1), (c,d2,e2)}\nJoin on C → 4 tuples, including spurious (a1,b1,c,d2,e2) and (a2,b2,c,d1,e1)  → lossy"
    ]
  },
  "97471adc2745672f": {
    "answer": [
      "The customer is Wilmk: order 10263 contains product 11 (Queso Cabrales) with quantity 12 > 6.",
      "Different relational-algebra expressions give different execution plans; the optimised plan pushes selections down before the joins."
    ],
    "points": [
      "Plan 1 (canonical, from SQL): join everything, then select, then project — largest intermediate result.",
      "Plan 2: push σ Quantity>6 onto OrderDetails and σ ProductName onto Products before joining; only the matching rows (10263, 11, 12) reach the join.",
      "Plan 3: also push projections so each join carries only the join columns and CustomerID.",
      "Plans 2–3 are cheaper because selections and projections reduce tuple count and width early; the most selective join (Products ⋈ OrderDetails) is done first."
    ],
    "example": [
      "SELECT DISTINCT o.CustomerID\nFROM   Orders o\nJOIN   OrderDetails d ON o.OrderID = d.OrderID\nJOIN   Products p     ON d.ProductID = p.ProductID\nWHERE  p.ProductName = 'Queso Cabrales'\n  AND  d.Quantity > 6;",
      "Plan 1: π CustomerID ( σ ProductName='Queso Cabrales' ∧ Quantity>6 ( (Orders ⋈ OrderDetails) ⋈ Products ) )\nPlan 2: π CustomerID ( Orders ⋈ ( σ Quantity>6 (OrderDetails) ⋈ σ ProductName='Queso Cabrales' (Products) ) )\nPlan 3: π CustomerID ( π OrderID,CustomerID (Orders) ⋈ π OrderID ( π OrderID,ProductID (σ Quantity>6 (OrderDetails)) ⋈ π ProductID (σ ProductName='Queso Cabrales' (Products)) ) )",
      "Optimised query tree (Plan 2)\n                 π CustomerID\n                      |\n               ⋈ OrderID\n              /          \\\n          Orders        ⋈ ProductID\n                       /           \\\n           σ Quantity>6        σ ProductName='Queso Cabrales'\n                |                        |\n          OrderDetails               Products"
    ]
  },
  "104a4ec76f3362c8": {
    "answer": [
      "Assumptions: order 3 = at most 3 child pointers, so at most 2 keys per node. A full leaf splits with 2 keys left and 1 right and the first key of the right leaf is copied up; a full internal node splits and its middle key moves up.",
      "Lexicographic order: ace < ado < ban < bat < bug < cop < day < era < fax < gas < kin < let < log < max < rye < won."
    ],
    "points": [
      "Insert era, ban: one leaf [ban, era]. bat overflows → [ban, bat] | [era], root [era]. kin joins [era, kin].",
      "day overflows [ban, bat, day] → [ban, bat] | [day]; root becomes [day, era]. log splits [era, kin, log] → [era, kin] | [log]; root [day, era, log] overflows → era moves up; height 3.",
      "rye, max go to the right subtree; max splits [log, max, rye] → [log, max] | [rye].",
      "won joins [rye, won]. ace splits [ace, ban, bat] → [ace, ban] | [bat], bat copied up → [bat, day]. ado splits [ace, ado, ban] → [ace, ado] | [ban]; ban goes up, [ban, bat, day] overflows and bat moves to the root → root [bat, era]. bug joins leaf [bat, bug].",
      "cop, gas, let, fax cause further splits; the root overflows again and the tree grows to 4 levels. All leaves stay at the same depth and are linked left-to-right."
    ],
    "example": [
      "After 4 (era, ban, bat, kin)\n[era]\n├── [ban, bat]\n└── [era, kin]",
      "After 8 (+ day, log, rye, max)\n[era]\n├── [day]\n│   ├── [ban, bat]\n│   └── [day]\n└── [log, rye]\n    ├── [era, kin]\n    ├── [log, max]\n    └── [rye]",
      "After 12 (+ won, ace, ado, bug)\n[bat, era]\n├── [ban]\n│   ├── [ace, ado]\n│   └── [ban]\n├── [day]\n│   ├── [bat, bug]\n│   └── [day]\n└── [log, rye]\n    ├── [era, kin]\n    ├── [log, max]\n    └── [rye, won]",
      "After 16 (+ cop, gas, let, fax)\n[era]\n├── [bat]\n│   ├── [ban]\n│   │   ├── [ace, ado]\n│   │   └── [ban]\n│   └── [cop, day]\n│       ├── [bat, bug]\n│       ├── [cop]\n│       └── [day]\n└── [log]\n    ├── [gas, kin]\n    │   ├── [era, fax]\n    │   ├── [gas]\n    │   └── [kin, let]\n    └── [rye]\n        ├── [log, max]\n        └── [rye, won]\nLeaf chain: ace ado → ban → bat bug → cop → day → era fax → gas → kin let → log max → rye won"
    ]
  },
  "eef466c904c261c8": {
    "answer": [
      "S1: not conflict serializable — the precedence graph has cycles (T1 → T2 → T1 and T2 → T3 → T2).",
      "S2: conflict serializable — edges T3 → T1, T3 → T2, T1 → T2 are acyclic; equivalent serial schedule T3 → T1 → T2.",
      "S3: not conflict serializable — cycle T1 → T2 → T1. No transaction does a blind write in S1 or S3, so they are not view serializable either."
    ],
    "points": [
      "Method: for every pair of operations on the same item from different transactions where at least one is a write, add an edge Ti → Tj if Ti’s operation comes first. Acyclic graph ⇔ conflict serializable; a topological order gives the serial schedule.",
      "S1 edges: T1 → T2 (r1(a) before w2(a)); T2 → T1 (r2(b) before w1(b)); T2 → T3 (r2(c) before w3(c), w2(b) before r3(b)); T3 → T2 (r3(d) before w2(d)); T3 → T1 (r3(b) before w1(b)).",
      "S2 edges: T3 → T1 (r3(b)/w3(b) before w1(b)); T3 → T2 (w3(b) before r2(b), w3(c) before r2(c)); T1 → T2 (w1(a) before r2(a), w1(b) before r2(b)). No cycle.",
      "S3 edges: T1 → T2 (w1(a) before r2(a)); T2 → T1 (w2(b) before r1(b)); T1 → T3 (r1(b) before w3(b)); T2 → T3 (w2(b) before r3(b), r2(c) before w3(c))."
    ],
    "example": [
      "S1:  T1 ⇄ T2,  T2 ⇄ T3,  T3 → T1        → cycle\nS2:  T3 → T1,  T3 → T2,  T1 → T2         → serial order  T3, T1, T2\nS3:  T1 ⇄ T2,  T1 → T3,  T2 → T3         → cycle"
    ]
  },
  "5dc8795cd17c02e5": {
    "answer": [
      "Timestamp ordering (TO) gives every transaction a unique start timestamp TS(T) and forces conflicting operations to execute in timestamp order, so the schedule is equivalent to the serial schedule in timestamp order. It uses no locks, so there is no deadlock.",
      "Strict TO additionally makes a transaction that reads or writes X wait until the last writer of X has committed or aborted, so schedules are strict (recoverable, no cascading aborts); basic TO only guarantees conflict serializability."
    ],
    "points": [
      "Each item X keeps read_TS(X) = largest TS of a transaction that read X, and write_TS(X) = largest TS that wrote X.",
      "Read(X) by T: if TS(T) < write_TS(X), a younger transaction already overwrote X → abort and restart T with a new timestamp; else read and set read_TS(X) = max(read_TS(X), TS(T)).",
      "Write(X) by T: if TS(T) < read_TS(X) or TS(T) < write_TS(X) → abort and roll back T; else write and set write_TS(X) = TS(T).",
      "Basic TO: conflict serializable and deadlock-free, but may produce non-recoverable schedules or cascading rollbacks, and restarted transactions can starve.",
      "Strict TO: if T issues read/write on X and TS(T) > write_TS(X), T is delayed until the transaction that wrote X commits or aborts (like holding an implicit lock). Still deadlock-free because older transactions never wait for younger ones in a cycle.",
      "Thomas write rule (variant): if TS(T) < write_TS(X) on a write, ignore the obsolete write instead of aborting — allows some view-serializable schedules."
    ],
    "example": [
      "TS(T1)=5, TS(T2)=10\nT2: write(X) → write_TS(X)=10\nT1: read(X)  → 5 < 10 → T1 aborted (would read a ‘future’ value)\nStrict TO: if T2 later reads Y written by uncommitted T1, T2 waits for T1’s commit/abort."
    ]
  },
  "a151f16a934b60e0": {
    "answer": [
      "Shadow paging is a no-log (no-undo/no-redo) recovery technique. A transaction updates copies of pages through a current page table, while the shadow page table on disk still points to the old pages. Commit switches one pointer to make the current table the new shadow; a crash before that simply discards the new pages."
    ],
    "points": [
      "Database is treated as n fixed-size pages reached through a page table (directory) of n entries.",
      "At transaction start, the current page table is copied to the shadow page table, which is written to disk and never modified during the transaction.",
      "On write(X): the page holding X is copied to an unused disk page, the update is made on the copy, and only the current page table entry is redirected to the new page.",
      "Commit: flush all modified pages, write the current page table to disk, then atomically update the fixed disk pointer (master record) to the new table.",
      "Crash before commit: restart uses the shadow table, which still points to the unmodified pages → no undo needed. After commit there is nothing to redo.",
      "Drawbacks: data fragmentation (related pages scattered), garbage collection of old pages, copying large page tables, harder with concurrent transactions (usually combined with logs)."
    ],
    "example": [
      "Shadow table        Disk pages          Current table\n 1 ─────────────→  P1                 ←── 1\n 2 ─────────────→  P2 (old)           \n                    P2' (updated)    ←── 2\n 3 ─────────────→  P3                 ←── 3\nCommit = swap master pointer to current table; abort/crash = keep shadow table."
    ]
  },
  "b895904841c08180": {
    "answer": [
      "Both schemes use transaction timestamps (start times) and only ever let waits go in one direction of age, so a cycle in the wait-for graph is impossible. A restarted transaction keeps its original timestamp, so it eventually becomes the oldest and is never rolled back again — no starvation."
    ],
    "points": [
      "Wait-die (non-preemptive): Ti requests an item held by Tj. If TS(Ti) < TS(Tj) (Ti older) → Ti waits; else Ti (younger) dies — is rolled back and restarted with the same timestamp.",
      "Wound-wait (preemptive): if TS(Ti) < TS(Tj) (Ti older) → Ti wounds Tj (Tj rolled back); else Ti (younger) waits.",
      "Deadlock-freedom proof (wait-die): an edge Ti → Tj in the wait-for graph exists only when TS(Ti) < TS(Tj). A cycle T1 → T2 → … → T1 would need TS(T1) < TS(T2) < … < TS(T1), a contradiction.",
      "Deadlock-freedom proof (wound-wait): an edge Ti → Tj exists only when TS(Ti) > TS(Tj) (younger waits for older). A cycle would need TS(T1) > … > TS(T1), again impossible.",
      "Starvation-freedom: only the younger transaction is ever aborted. Because a restarted transaction keeps its original timestamp, after a finite time every other active transaction is younger, so it is the oldest and can never be aborted again; it eventually completes.",
      "Difference: wait-die makes the younger die repeatedly (older waits); wound-wait causes fewer rollbacks as the older preempts and the younger restarts only once per conflict."
    ],
    "example": [
      "TS(T1)=5 (old), TS(T2)=10 (young)\n             T1 requests T2's item    T2 requests T1's item\nWait-die     T1 waits                  T2 dies (restart, TS 10)\nWound-wait   T1 wounds T2 (T2 aborts)  T2 waits"
    ]
  },
  "bf726d114cb2753b": {
    "answer": [
      "(a) Use polyglot persistence: an AP (BASE) store for high-volume, availability-critical data (sessions, carts, catalog, logs, recommendations) and a CP/ACID relational store for financial data and reports.",
      "(b) A key-value store (e.g., Redis, DynamoDB) is best for sessions: each session is looked up by its session ID, needs very low latency, has a TTL, and is never joined or queried by content."
    ],
    "points": [
      "CAP theorem: a distributed store under a network partition (P) can guarantee either consistency (C) or availability (A), not both. Global systems must tolerate partitions, so each data class chooses C or A.",
      "BASE: Basically Available, Soft state, Eventually consistent — the opposite trade-off to ACID; suits data where a briefly stale value is acceptable.",
      "User sessions → key-value (AP): must always respond; a stale session for milliseconds is acceptable.",
      "Shopping cart → key-value or document store (AP), e.g. Dynamo-style: ‘always add to cart’, merge conflicting versions later.",
      "Financial data / payments → relational RDBMS (CP, ACID): no lost or double payments; refuse a write rather than accept inconsistency.",
      "Product catalog → document store (MongoDB): flexible attributes per product category, read-heavy, replicated for availability.",
      "Recommendations → graph DB (Neo4j) for user–product–similar relationships; analytics/reports and activity logs → column-family store (Cassandra/HBase) for write-heavy, time-series data and aggregations.",
      "Key-value features for sessions: get/put by key in O(1); in-memory speed; horizontal scaling by hashing keys across nodes; replication for availability; automatic expiry (TTL) for logout/timeouts; value is an opaque blob (user id, cart id, tokens, preferences)."
    ],
    "example": [
      "SET session:9f2c  '{\"user\":42, \"cart\":\"c17\", \"lang\":\"en\"}'  EX 1800\nGET session:9f2c      → value in < 1 ms; key auto-expires after 30 minutes"
    ]
  },
  "933072ec9bd6fdc1": {
    "answer": [
      "The ANSI/SPARC three-schema architecture separates a database into an internal schema (storage), a conceptual schema (whole logical structure) and external schemas (user views). Requests flow down through mappings and results flow back up, which gives data independence."
    ],
    "points": [
      "Internal schema: physical storage — record formats, file organisation, indexes, access paths, compression. Described with a physical data model.",
      "Conceptual schema: the entire database for the community of users — entities, data types, relationships, constraints, security — without storage detail. Usually a relational schema.",
      "External schemas (views): the part of the database a user group needs, hiding the rest; many external schemas per database.",
      "Interaction: a user query on an external view is transformed by the external/conceptual mapping into a query on the conceptual schema, then by the conceptual/internal mapping into operations on stored files; retrieved data is reformatted back to the user’s view.",
      "Why mappings: they let one level change without affecting the level above — logical data independence (external ↔ conceptual) and physical data independence (conceptual ↔ internal).",
      "They also support security (users see only their view) and multiple user perspectives on one stored database. Cost: mapping overhead at run time."
    ],
    "example": [
      "  External level   View 1 (Student)   View 2 (Faculty)   View 3 (Admin)\n                        └──────── external/conceptual mapping ────────┘\n  Conceptual level        STUDENT, COURSE, ENROLL (+ constraints)\n                                 conceptual/internal mapping\n  Internal level          files, B+ tree indexes, page layout\n                                       │\n                               Stored database"
    ]
  },
  "da1b9d651b551f8f": {
    "answer": [
      "Core entities: PATIENT, DOCTOR, NURSE, DEPARTMENT, ROOM, APPOINTMENT, TEST_REPORT, BILL and RECEPTIONIST, each identified by a unique ID. Relationships connect patients to doctors (consults/appointments), rooms (admitted_to), tests and bills; nurses belong to departments and work shifts."
    ],
    "points": [
      "PATIENT(patient_id PK, name, dob, gender, address, phone {multivalued}, medical_history, current_condition, age (derived from dob)).",
      "DOCTOR(doctor_id PK, name, phone, email, {specialty} multivalued, availability). Doctor directory = this entity set.",
      "NURSE(nurse_id PK, name, phone). WORKS_IN: NURSE N — 1 DEPARTMENT (total on nurse). SHIFT is a weak entity of NURSE (shift_date, start_time, end_time) via identifying relationship HAS_SHIFT (1 — N, total on SHIFT).",
      "DEPARTMENT(dept_id PK, dept_name, location). DOCTOR N — 1 DEPARTMENT (BELONGS_TO).",
      "ROOM(room_no PK, room_type, status ∈ {available, occupied}, daily_charge). ADMITTED_TO: PATIENT N — 1 ROOM with attributes admit_date, discharge_date; patient side partial (outpatients), room side partial (empty rooms).",
      "APPOINTMENT(appt_id PK, date, time, status): PATIENT 1 — N APPOINTMENT (total on appointment), DOCTOR 1 — N APPOINTMENT (total), RECEPTIONIST 1 — N APPOINTMENT (SCHEDULES). Modelled as an entity so one patient can see the same doctor many times.",
      "TEST_REPORT(report_id PK, test_name, result_details, test_date, report_date): PATIENT 1 — N TEST_REPORT (total on report); DOCTOR 1 — N TEST_REPORT (ORDERS).",
      "BILL(bill_id PK, bill_date, total_amount, payment_status, payment_mode, paid_on): PATIENT 1 — N BILL (total on bill). Optional relationships BILL–TEST_REPORT and BILL–ROOM stay itemised.",
      "RECEPTIONIST(rec_id PK, name, shift) RETRIEVES patient data and SCHEDULES appointments."
    ],
    "example": [
      "PATIENT ──1──< APPOINTMENT >──N──1── DOCTOR ──N──1── DEPARTMENT ──1──N── NURSE ══ HAS_SHIFT ══ [[SHIFT]]\n   │1               ║N                                                   (weak entity, partial key shift_date)\n   │           RECEPTIONIST (schedules)\n   ├──N── ADMITTED_TO (admit_date, discharge_date) ──1── ROOM (status)\n   ├──1──N══ TEST_REPORT (ordered by DOCTOR)\n   └──1──N══ BILL (amount, payment_status)\n\n══ total participation, ── partial; {specialty}, {phone} multivalued; age derived"
    ]
  },
  "a56a1e02d3ba2d18": {
    "answer": [
      "Specialization is top-down: define subclasses of a superclass by their distinguishing features (EMPLOYEE → SECRETARY, ENGINEER, TECHNICIAN). Generalization is bottom-up: combine entity types with common attributes into a superclass (CAR, TRUCK → VEHICLE). Both create an IS-A hierarchy in which subclasses inherit all attributes and relationships of the superclass."
    ],
    "points": [
      "Inheritance: a subclass entity is the same real-world entity as its superclass entity; it inherits keys, attributes and relationships, and adds specific ones (ENGINEER.eng_type).",
      "Predicate-defined (condition-defined) subclasses: membership decided by an attribute value, e.g. job_type = 'Engineer'. User-defined: membership decided by the user one entity at a time.",
      "Disjointness constraint — disjoint (d): an entity belongs to at most one subclass (a VEHICLE is either a CAR or a TRUCK). Overlapping (o): an entity can belong to several (a PERSON can be both EMPLOYEE and STUDENT).",
      "Completeness constraint — total: every superclass entity must belong to some subclass (double line; every ACCOUNT is SAVINGS or CURRENT). Partial: some superclass entities belong to no subclass (single line; an EMPLOYEE may be none of the listed job types).",
      "Four combinations: disjoint-total, disjoint-partial, overlapping-total, overlapping-partial. Generalization is usually total because the superclass was formed only from its subclasses.",
      "Impact on operations: inserting a superclass entity under total specialization forces insertion into a subclass; deleting a superclass entity deletes it from all subclasses; under disjoint + predicate-defined, the attribute value decides the single subclass automatically.",
      "Impact on mapping to relations: disjoint-total can map to subclass tables only; overlapping is best mapped with one table per class or one table with Boolean type flags; partial needs a superclass table so non-member entities can be stored.",
      "Hierarchy vs lattice: in a hierarchy each subclass has one superclass; in a lattice a shared subclass (ENGINEERING_MANAGER) has several superclasses and multiple inheritance."
    ],
    "example": [
      "               EMPLOYEE (ssn, name, salary)\n                    ║  total\n                   (d) on job_type          disjoint\n          ┌─────────┼─────────┐\n     SECRETARY   ENGINEER   TECHNICIAN\n    (typing_speed)(eng_type)  (tgrade)\n\n              PERSON\n                │ partial\n               (o)                      overlapping\n          ┌─────┴─────┐\n      EMPLOYEE      STUDENT"
    ]
  },
  "f301d6c07576d36e": {
    "answer": [
      "All original dependencies are preserved. Projected FDs: R1(X, Y, Z) gets X → Y, Y → Z, Z → X; R2(Z, W, V) gets Z → W, W → Z. Their union implies X → Y, Y → Z, Z → W and W → X."
    ],
    "points": [
      "Closures under F: X⁺ = Y⁺ = Z⁺ = W⁺ = {X, Y, Z, W} (the FDs form a cycle), V⁺ = {V}.",
      "F1 = πR1(F⁺): X → Y, Y → Z, and Z → X (since Z⁺ ⊇ X, X ∈ R1). Equivalently X, Y, Z all determine each other.",
      "F2 = πR2(F⁺): Z → W and W → Z (W⁺ ⊇ Z, Z ∈ R2). V determines nothing.",
      "Check each original FD with G = F1 ∪ F2: X → Y ∈ F1; Y → Z ∈ F1; Z → W ∈ F2; W → X: W⁺ under G = {W, Z, X, Y} ⊇ X ✓.",
      "Hence G⁺ = F⁺ → dependency preserving. (Lossless too: R1 ∩ R2 = Z and Z → XYZ, a key of R1.)"
    ],
    "example": [
      "W⁺ using only F1 ∪ F2:\nstart {W} → W→Z (F2) → {W,Z} → Z→X (F1) → {W,Z,X} → X→Y (F1) → {W,Z,X,Y}\nX ∈ W⁺  ⇒  W → X preserved"
    ]
  },
  "042ea99b1687b95c": {
    "answer": [
      "The key is PQ (PQ⁺ = all ten attributes). The 3NF decomposition is R1(P, Q, R), R2(P, S, T), R3(S, Y), R4(Q, U, V), R5(U, W, X)."
    ],
    "points": [
      "PQ⁺: PQ → R; P → ST; S → Y; Q → UV; U → WX ⇒ {P,Q,R,S,T,U,V,W,X,Y}. P and Q appear on no right side, so every key contains both → PQ is the only candidate key.",
      "1NF: assume atomic values. 2NF violations (partial dependencies on part of key): P → ST (and transitively Y), Q → UV (and transitively WX).",
      "3NF violations (transitive): S → Y via P → S, and U → WX via Q → U — non-key attributes determining non-key attributes.",
      "Step 1 (remove partial dependencies): R(P,Q,R) | (P,S,T,Y) | (Q,U,V,W,X).",
      "Step 2 (remove transitive dependencies): split (P,S,T,Y) into (P,S,T) and (S,Y); split (Q,U,V,W,X) into (Q,U,V) and (U,W,X).",
      "Check: each relation’s FDs have a key on the left → 3NF (in fact BCNF). R1 contains the original key → lossless; every FD lives in one relation → dependency preserving."
    ],
    "example": [
      "Relation       Attributes     Key   FD kept\nR1             P, Q, R        PQ    PQ → R\nR2             P, S, T        P     P → ST\nR3             S, Y           S     S → Y\nR4             Q, U, V        Q     Q → UV\nR5             U, W, X        U     U → WX"
    ]
  },
  "d0f38ce905cab5dd": {
    "answer": [
      "(i) Fund transfers use deferred update (NO-UNDO/REDO): changes are recorded in the log and applied to the database only after the user confirms and the transaction commits. (ii) Backup copies of database pages use shadow paging: updates go to new page copies while a shadow page table keeps the old version for instant recovery."
    ],
    "points": [
      "Deferred update: during execution, writes are kept in the transaction workspace and log as <T, X, new_value>; nothing reaches the database until <T, commit> is force-written to the log.",
      "Failure before commit: the database was never changed → no undo. Failure after commit: redo the logged writes (idempotent) from the log.",
      "Why suitable: funds are deducted only after confirmation (matches ‘deduct after confirm’), atomicity of debit+credit is guaranteed, recovery is simple. Inventory updates can still be done with locking so orders see real-time stock.",
      "Limitation of deferred update: a transaction’s updates must fit in buffer until commit; long transactions hold many pages.",
      "Shadow paging: at start, the current page table is copied as the shadow table; modified pages are written to fresh disk blocks and only the current table points to them. Commit = atomically switch the master pointer to the current table.",
      "How it enhances recovery: no log scan and no undo/redo — after a crash the shadow table is the consistent database, so restart is almost instant.",
      "Limitations: data fragmentation (pages lose physical clustering), garbage collection of old pages, overhead of writing large page tables, and difficulty supporting many concurrent transactions without additional logging/checkpoints."
    ],
    "example": [
      "Log (deferred update) for transfer ₹500 from A to B\n<T1, start>\n<T1, A, 4500>       (new value only)\n<T1, B, 2500>\n<T1, commit>        ← only now are A and B written to the database\nCrash before commit → ignore T1.  Crash after commit → redo T1."
    ]
  },
  "5be335985e8c53ee": {
    "answer": [
      "S1 has a lost update (T1’s write of x is overwritten by T2, which read the old value) and a non-recoverable dirty read (T3 reads x written by uncommitted T1 and commits first).",
      "S2 is conflict serializable (T1 → T2 → T3) but not recoverable: T2 reads T1’s uncommitted x and commits before T1, so an abort of T1 cannot be undone correctly.",
      "S3 has a dirty read and an unrepeatable read: T1 reads x twice and gets different values because T2 changed x in between; the precedence graph has a cycle T1 ⇄ T2, so S3 is not serializable."
    ],
    "points": [
      "S1 trace: r1(x), r2(x) read the same value; w1(x) then w2(x) → T1’s update is lost (lost update). r3(x) after w1(x) reads uncommitted data (dirty read); c3 happens before c1 → non-recoverable. w3(x) later overwrites T2’s committed value, and T4 reads x committed by T2 (valid).",
      "S1 graph: T1 → T2 (r1 before w2), T2 → T1 (r2 before w1), T1 → T3, T2 → T3, T3 → T2 (r3 before w2) → cycles → not serializable.",
      "S2 trace: T1 writes x, T2 reads/writes it, T2 commits, T3 reads T2’s x and commits, T1 commits last. If T1 aborted after c2, T2 and T3 would have used a value that never existed (cascading problem on committed transactions).",
      "S2 fix: delay c2 until after c1 (recoverable) or delay r2(x) until T1 commits (strict / cascadeless).",
      "S3 trace: r1(x) reads original; w1(x); r2(x) reads T1’s uncommitted value (dirty read); w2(x); r1(x) now sees T2’s value → inconsistent analysis for T1.",
      "Integrity impact: lost updates corrupt balances/stock counts; dirty reads let decisions be based on data that may be rolled back; unrepeatable reads make one transaction see different states. Strict 2PL removes all three."
    ],
    "example": [
      "S1: T1 ⇄ T2,  T1 → T3,  T2 ⇄ T3        → not serializable, non-recoverable\nS2: T1 → T2 → T3                        → serializable, NOT recoverable (c2 before c1)\nS3: T1 → T2 (w1→r2),  T2 → T1 (w2→r1)   → not serializable"
    ]
  },
  "310bc8d25329b0db": {
    "answer": [
      "The CAP theorem says a distributed database cannot guarantee all three of Consistency, Availability and Partition tolerance at once. Because network partitions must be tolerated, during a partition the system must choose between staying consistent (CP) and staying available (AP)."
    ],
    "points": [
      "Consistency: every read returns the latest committed write (all replicas agree).",
      "Availability: every request to a non-failed node receives a response, without guaranteeing it is the latest value.",
      "Partition tolerance: the system keeps operating even when messages between nodes are lost or delayed.",
      "Implication: CP systems (HBase, MongoDB with majority writes, traditional RDBMS clusters) reject or delay requests in a partition; AP systems (Cassandra, DynamoDB, CouchDB) answer with possibly stale data and reconcile later (eventual consistency, BASE). CA is only possible on a single site with no partitions.",
      "Online shopping — product catalog and reviews: AP; stale price description for seconds is acceptable, but the site must stay up.",
      "Shopping cart: AP with conflict merge (Dynamo approach — never lose an ‘add to cart’).",
      "Inventory at checkout, orders and payments: CP; overselling or double charging is unacceptable, so the system blocks or retries rather than accept conflicting writes.",
      "Sessions, recommendations, clickstream logs: AP for speed and scale.",
      "Design consequence: polyglot persistence and tunable consistency (quorum R + W > N for strong reads, R = W = 1 for speed). PACELC extends CAP: even without partitions, systems trade latency for consistency."
    ],
    "example": [
      "Partition splits replicas A | B. User buys last item on A.\nCP choice: B refuses ‘buy’ until it can confirm with A  → no oversell, lower availability\nAP choice: B also sells it                               → both orders accepted, fix later (refund/back-order)"
    ]
  },
  "54f3cfdd8fa0f04f": {
    "answer": [
      "Option 1 (B+ tree), assuming order 4 = at most 3 keys per node: after all 12 insertions the tree has 3 levels with root [mar]. Deleting dec makes leaf [feb] underflow, so it borrows jan from its right sibling; deleting mar only updates the separator to may.",
      "Option 2 (hashing): every key hashes to slot 3 because h1 = (2k + 3) mod 10 = 3 for 15, 20, 25 and 30. Quadratic probing puts the keys in slots 3, 4, 7 and 2; double hashing puts them in slots 3, 4, 9 and 5. All four keys are inserted."
    ],
    "points": [
      "Alphabetical order: apr < aug < dec < feb < jan < jul < jun < mar < may < nov < oct < sep.",
      "Leaf split rule: 4 keys → 2 left, 2 right, copy up first key of right leaf; internal split: middle key moves up. Minimum keys in a non-root node = 2 (leaf) / 1 (internal).",
      "Quadratic probing: slot = (h1 + i²) mod 10, i = 0, 1, 2, … — 15 → 3; 20: 3 ✗, 4 ✓; 25: 3 ✗, 4 ✗, 7 ✓; 30: 3 ✗, 4 ✗, 7 ✗, 3+9 = 12 → 2 ✓.",
      "Double hashing: slot = (h1 + i·h2) mod 10 with h2 = 3k + 1 — 20: h2 = 61 → 3+61 = 64 → 4; 25: h2 = 76 → 79 → 9; 30: h2 = 91 → 94 → 4 ✗, 3+182 = 185 → 5 ✓.",
      "Note: quadratic probing in a table of size 10 can visit only some slots (i² mod 10 ∈ {0,1,4,9,6,5}), so with more keys an insert could fail even with empty slots; double hashing fails if h2 mod 10 shares a factor with 10 (e.g. step 5)."
    ],
    "example": [
      "B+ tree after 12 insertions (order 4)\n[mar]\n├── [dec, jan]\n│   ├── [apr, aug]\n│   ├── [dec, feb]\n│   └── [jan, jul, jun]\n└── [oct]\n    ├── [mar, may, nov]\n    └── [oct, sep]",
      "Delete dec → [feb] underflows → borrow jan from right sibling\n[mar]\n├── [feb, jul]\n│   ├── [apr, aug]\n│   ├── [feb, jan]\n│   └── [jul, jun]\n└── [oct]\n    ├── [mar, may, nov]\n    └── [oct, sep]\n\nDelete mar → leaf becomes [may, nov]; root separator mar → may\n[may]\n├── [feb, jul]\n│   ├── [apr, aug]\n│   ├── [feb, jan]\n│   └── [jul, jun]\n└── [oct]\n    ├── [may, nov]\n    └── [oct, sep]",
      "Slot   Quadratic   Double hashing\n0      –           –\n1      –           –\n2      30          –\n3      15          15\n4      20          20\n5      –           30\n6      –           –\n7      25          –\n8      –           –\n9      –           25"
    ]
  },
  "7ba59e21e06585f2": {
    "answer": [
      "Option 1 (2PL): the given schedule is not conflict serializable, because T1 → T2 on A (W1(A) before R2(A)) and T2 → T1 on B (R2(B) before W1(B)) form a cycle. Under 2PL, T1 must lock B before it releases A, so T2’s Read B waits until T1 finishes and the result is equivalent to T1 → T2. Locking without 2PL (releasing A early, locking B later) reproduces exactly the given non-serializable schedule.",
      "Option 2 (timestamp ordering, TS = 150 < 250 < 350): every operation passes the TO checks, so no transaction aborts. The execution is equivalent to the serial order T1 → T2 → T3."
    ],
    "points": [
      "Basic 2PL: growing phase (acquire locks, release none), then shrinking phase (release, acquire none). Guarantees conflict serializability; may cause deadlock and cascading rollback.",
      "Conservative (static) 2PL: lock every item the transaction needs before it starts (predeclared read/write sets) → deadlock-free, but less concurrency and needs advance knowledge.",
      "Strict 2PL: hold all exclusive (write) locks until commit/abort → strict, cascadeless schedules; most common in practice.",
      "Rigorous 2PL: hold all locks (shared and exclusive) until commit → transactions serialise in commit order.",
      "Lock point = moment a transaction obtains its last lock; 2PL schedules are equivalent to the serial order of lock points.",
      "TO rules: Read(X) by T allowed iff TS(T) ≥ W-TS(X); Write(X) allowed iff TS(T) ≥ R-TS(X) and TS(T) ≥ W-TS(X); otherwise T aborts and restarts with a new timestamp.",
      "TO trace: R1(X) ok → R-TS(X)=150; R2(Y) ok → R-TS(Y)=250; W1(Z) ok → W-TS(Z)=150; R3(Y) ok → R-TS(Y)=350; W2(X): 250 ≥ R-TS(X)=150 → ok, W-TS(X)=250; R1(Y): 150 ≥ W-TS(Y)=0 → ok (reads never conflict with reads); W3(Z): 350 ≥ W-TS(Z)=150 and R-TS(Z)=0 → ok.",
      "Effect on consistency: no aborts, so all transactions commit, and the conflicts (R1(X)–W2(X), W1(Z)–W3(Z)) all go from older to younger. If, for example, T1 had tried W1(X) after W2(X), T1 would have been aborted, because an older transaction cannot overwrite a younger one’s value."
    ],
    "example": [
      "With 2PL (X = exclusive lock, S = shared)\nT1                          T2\nLX1[A]\nRead A, Write A\nLX1[B]          ← lock point of T1 (gets B before releasing A)\nU1[A]\n                            LS2[A]  Read A\n                            LS2[B]  → WAIT (T1 holds B)\nRead B, Write B\nU1[B], Commit\n                            LS2[B]  Read B\n                            U2[A], U2[B], Commit\n⇒ equivalent to serial T1, T2",
      "Locks without 2PL (not serializable)\nT1: L1[A] Read A  Write A  U1[A]\nT2:                              L2[A] Read A U2[A] L2[B] Read B U2[B] Commit\nT1:                                                                        L1[B] Read B Write B U1[B] Commit\nT1 locks B after unlocking A → violates 2PL → cycle T1 → T2 → T1",
      "Timestamp table (final)\nItem   R-TS   W-TS\nX      150    250\nY      350    0\nZ      0      350\nSerial equivalent: T1 (150) → T2 (250) → T3 (350); aborted: none"
    ]
  },
  "3b91aebbca179e1a": {
    "answer": [
      "(i) [Part i is cut off in the scan; it follows the three-schema architecture: internal, conceptual and external levels connected by mappings.]",
      "(ii) Logical data independence: the conceptual schema can change without changing external schemas or application programs. Physical data independence: the internal (storage) schema can change without changing the conceptual schema. Physical independence is easier to achieve than logical independence."
    ],
    "points": [
      "Physical data independence — example: add a B+ tree index on STUDENT(dept), move a table to another tablespace, change from heap to hashed file, compress data; queries on STUDENT stay the same. Only the conceptual/internal mapping changes.",
      "Logical data independence — example: add attribute STUDENT.email, split STUDENT into STUDENT_PERSONAL and STUDENT_ACADEMIC, or add a new table; a view STUDENT_VIEW(regno, name, cgpa) is redefined so old applications still work. Only the external/conceptual mapping changes.",
      "Logical independence is harder: applications depend on the meaning of data, and some changes (deleting an attribute a view uses) cannot be hidden.",
      "Benefits: lower maintenance cost, programs survive schema evolution and performance tuning, DBA can tune storage freely, multiple user views over one database, better security through views.",
      "Challenges: the DBMS must keep catalog metadata and mappings up to date; mapping adds run-time overhead; view update problem (not every view is updatable); complex changes still force application changes; full logical independence is rarely achieved in practice."
    ],
    "example": [
      "Change                                   Affects            Independence\nAdd index / reorganise file              internal schema    physical\nAdd column / split a table               conceptual schema  logical (views redefined)\nDrop a column used by a view             conceptual schema  cannot be hidden"
    ]
  },
  "8806e8ae3bda7d6c": {
    "answer": [
      "(a) EER design: entities CUSTOMER, PRODUCT, CATEGORY, ORDER, ORDER_ITEM (weak), PAYMENT, REVIEW, CART and PROMOTION. PRODUCT has a disjoint specialisation into BOOK, ELECTRONICS and CLOTHING. Cardinalities are shown as (min, max).",
      "(b) (OR) Mapping the given ER diagram gives seven relations: EXAM, PATIENT, DOCTOR, DOCTOR_TEL (multivalued tel), CLINIC (with manager FK), HOSTED_BY (M:N with dates) and UNDERTAKES (ternary with result)."
    ],
    "points": [
      "Assumptions (a): one cart per customer; a product belongs to exactly one category; a payment belongs to exactly one order; reviews are allowed only by registered customers; a promotion can cover many products and vice versa.",
      "CUSTOMER(cust_id PK, name, email, address, shipping_info). CUSTOMER (0,N) PLACES (1,1) ORDER.",
      "ORDER(order_id PK, order_date, shipping_address, total_amount — derived from items). ORDER (1,N) CONTAINS (1,1) ORDER_ITEM; ORDER_ITEM is weak with partial key line_no (or product_id), attributes quantity, price.",
      "PRODUCT(product_id PK, name, description, price, stock_qty). ORDER_ITEM (1,1) REFERS_TO (0,N) PRODUCT. PRODUCT (1,1) BELONGS_TO (0,N) CATEGORY(category_id PK, cat_name).",
      "Specialisation of PRODUCT {BOOK(author, isbn), ELECTRONICS(brand, warranty), CLOTHING(size, material)} — disjoint, partial (other products may exist).",
      "PAYMENT(transaction_id PK, method, status, amount): ORDER (1,1) HAS (1,1) PAYMENT, or (0,1) before checkout.",
      "REVIEW(review_id PK, rating 1–5, comment, review_date): CUSTOMER (0,N) WRITES (1,1) REVIEW; PRODUCT (0,N) HAS (1,1) REVIEW.",
      "CART(cart_id PK): CUSTOMER (1,1) OWNS (1,1) CART; CART (0,N) ADDS (0,N) PRODUCT with attribute quantity.",
      "PROMOTION(promo_id PK, description, discount_pct, start_date, end_date): PROMOTION (1,N) APPLIES_TO (0,N) PRODUCT.",
      "(b) Mapping rules used: strong entity → table; multivalued attribute tel → separate table; 1:N WorksIn → FK on the N-side (Doctor, which participates (1,1)); 1:1 Manages → FK in Clinic (total side); M:N HostedBy → its own table; ternary Undertakes → table with three FKs."
    ],
    "example": [
      "(b) Relational schema (PK underlined as PK, FK → referenced table)\nEXAM        (code PK, description, cost)\nPATIENT     (sin PK, pfname, plname, sex)\nCLINIC      (cname PK, rooms, manager_id FK → DOCTOR.doctorid  UNIQUE NOT NULL)\nDOCTOR      (doctorid PK, dfname, dlname, office, speciality,\n             cname FK → CLINIC.cname NOT NULL, works_start_date)\nDOCTOR_TEL  (doctorid FK → DOCTOR, tel,  PK(doctorid, tel))\nHOSTED_BY   (sin FK → PATIENT, cname FK → CLINIC, start_date, end_date,\n             PK(sin, cname, start_date))\nUNDERTAKES  (code FK → EXAM, sin FK → PATIENT, doctorid FK → DOCTOR, result,\n             PK(code, sin, doctorid))",
      "(a) EER outline\nCUSTOMER (0,N)─PLACES─(1,1) ORDER (1,N)─CONTAINS─(1,1) [[ORDER_ITEM]] (1,1)─REFERS_TO─(0,N) PRODUCT\nORDER (1,1)─HAS─(1,1) PAYMENT\nCUSTOMER (0,N)─WRITES─(1,1) REVIEW (1,1)─ON─(0,N) PRODUCT\nPRODUCT (1,1)─BELONGS_TO─(0,N) CATEGORY\nPROMOTION (1,N)─APPLIES_TO─(0,N) PRODUCT\nPRODUCT ─(d, partial)─▷ BOOK | ELECTRONICS | CLOTHING"
    ]
  },
  "ea8ab51f7b24333b": {
    "answer": [
      "(i) The only candidate key is IS. (ii) Prime attributes: I and S. Non-prime: B, O, Q and D. (iii) R is only in 1NF, because B, O and D depend on part of the key. (iv) The 2NF decomposition is (I, S, Q), (I, B, O), (S, D); the 3NF/BCNF decomposition is (I, S, Q), (I, B), (B, O), (S, D)."
    ],
    "points": [
      "IS⁺: I → B, B → O, S → D, IS → Q ⇒ {I, S, B, O, Q, D} = R. I and S never appear on a right-hand side, so every key contains both → IS is the unique key.",
      "2NF violations (partial dependencies): I → B (and I → O through B), S → D — non-prime attributes depending on part of the key.",
      "3NF violation (transitive): I → B → O, i.e. B → O where B is non-prime and not a key.",
      "Step 1 (to 2NF): R1(I, S, Q) with IS → Q; R2(I, B, O) with I → B, B → O; R3(S, D) with S → D.",
      "Step 2 (to 3NF): R2 still has B → O → split into R21(I, B) and R22(B, O).",
      "Lossless: each split shares an attribute that is a key of one side (I in R1/R2, S in R1/R3, B in R21/R22). Dependency preserving: every FD lies inside one relation. All final relations are in BCNF."
    ],
    "example": [
      "Relation      Key   FD\n(I, S, Q)     IS    IS → Q\n(I, B)        I     I → B\n(B, O)        B     B → O\n(S, D)        S     S → D"
    ]
  },
  "86382951f28163a0": {
    "answer": [
      "(i) F1 and F2 are not equivalent: F2 contains C → D, but under F1 C⁺ = {C, E}; F1 contains A → C, but under F2 A⁺ = {A, B, E}. Neither set covers the other.",
      "(ii) (a) Key BD; BC and AD is lossy (the parts share no attribute), so it is a bad decomposition. (b) Keys A and C; ABC and AD is lossless and dependency preserving, so it is good. (c) Key A; AB and ACD is lossless but loses B → C, so it is not good."
    ],
    "points": [
      "Equivalence test: F1 ≡ F2 iff every FD of F2 follows from F1 and every FD of F1 follows from F2 (compare attribute closures).",
      "F1 ⊨ F2? A → B ✓; C → D: C⁺(F1) = CE ✗; B → E: B⁺(F1) = BD ✗.",
      "F2 ⊨ F1? A → C: A⁺(F2) = ABE ✗; B → D ✗; C → E ✗.",
      "(a) B⁺ = BC, D⁺ = DA, BD⁺ = ABCD → key BD. BC ∩ AD = ∅ → the join is a Cartesian product → lossy; it also loses the key relationship between B and D.",
      "(b) A⁺ = ABCD and C⁺ = CADB → keys A, C. ABC ∩ AD = A, and A → D, so A is a key of AD → lossless. A → BC and C → A hold in ABC; C → D is derivable from C → A plus A → D → dependencies preserved. Both parts are in BCNF.",
      "(c) A⁺ = ABCD → key A. AB ∩ ACD = A, a key of both → lossless. B → C crosses the two relations and cannot be derived from projected FDs (A → B; A → C, C → D) → not dependency preserving. ACD also has transitive A → C → D (not 3NF). Better: AB, BC, CD."
    ],
    "example": [
      "Case   Key     Decomposition   Lossless?   Dep. preserving?   Good?\n(a)    BD      BC, AD          No          Yes                No\n(b)    A, C    ABC, AD         Yes         Yes                Yes\n(c)    A       AB, ACD         Yes         No (B→C lost)      No"
    ]
  },
  "46a8516aa0cee8bd": {
    "answer": [
      "Assumption: order 3 = at most 3 children, so at most 2 keys per node. A leaf split keeps 2 keys left and 1 right and copies the right leaf’s first key up; a non-root leaf needs at least 1 key and an internal node at least 1 key.",
      "After the 15 insertions the tree has 4 levels with root [19]. The five deletions cause separator updates (23, 20), one borrow (9), and merges that shrink the right subtree (30, 25)."
    ],
    "points": [
      "Delete 23: leaf [23, 25] → [25]; separator 23 in the parent is replaced by 25.",
      "Delete 9: leaf [9] becomes empty → borrow 8 from left sibling [7, 8] → leaves [7] | [8]; parent separator becomes 8.",
      "Delete 30: leaf [30] becomes empty and its sibling [25] has only 1 key → merge; the parent internal node becomes empty, so it merges with its left sibling [20] (pulling 25 down) → [20, 25]; the grandparent [25, 45] becomes [45].",
      "Delete 20: leaf [20, 21] → [21]; separator 20 → 21.",
      "Delete 25: leaf [25] empties → merge with [21]’s side; internal node [21, 25] becomes [21]."
    ],
    "example": [
      "After inserting 23, 7, 12, 20, 45, 30, 9, 14, 70, 25, 19, 8, 21, 17, 84\n[19]\n├── [12]\n│   ├── [9]   → [7, 8] | [9]\n│   └── [17]  → [12, 14] | [17]\n└── [23, 45]\n    ├── [20]  → [19] | [20, 21]\n    ├── [30]  → [23, 25] | [30]\n    └── [84]  → [45, 70] | [84]",
      "Delete 23\n[19]\n├── [12]\n│   ├── [9]   → [7, 8] | [9]\n│   └── [17]  → [12, 14] | [17]\n└── [25, 45]\n    ├── [20]  → [19] | [20, 21]\n    ├── [30]  → [25] | [30]\n    └── [84]  → [45, 70] | [84]",
      "Delete 9 (borrow from left leaf)\n[19]\n├── [12]\n│   ├── [8]   → [7] | [8]\n│   └── [17]  → [12, 14] | [17]\n└── [25, 45]\n    ├── [20]  → [19] | [20, 21]\n    ├── [30]  → [25] | [30]\n    └── [84]  → [45, 70] | [84]",
      "Delete 30 (leaf merge + internal merge)\n[19]\n├── [12]\n│   ├── [8]   → [7] | [8]\n│   └── [17]  → [12, 14] | [17]\n└── [45]\n    ├── [20, 25] → [19] | [20, 21] | [25]\n    └── [84]     → [45, 70] | [84]",
      "Delete 20\n[19]\n├── [12]\n│   ├── [8]   → [7] | [8]\n│   └── [17]  → [12, 14] | [17]\n└── [45]\n    ├── [21, 25] → [19] | [21] | [25]\n    └── [84]     → [45, 70] | [84]",
      "Delete 25\n[19]\n├── [12]\n│   ├── [8]   → [7] | [8]\n│   └── [17]  → [12, 14] | [17]\n└── [45]\n    ├── [21]  → [19] | [21]\n    └── [84]  → [45, 70] | [84]"
    ]
  },
  "0478da6f533ac211": {
    "answer": [
      "Global depth = 3. The bucket holding 14 has local depth 2: it contains {14, 42}, which share the low bits 10, and directory entries 010 and 110 both point to it."
    ],
    "points": [
      "Keys in binary (low bits used): 8 = 001000, 16 = 010000, 4 = 000100, 3 = 000011, 14 = 001110, 11 = 001011, 12 = 001100, 23 = 010111, 42 = 101010, 21 = 010101.",
      "8, 16 fill the single bucket (G = 0). 4 overflows it: 8, 16, 4 all end in 00, so the directory must double until they separate — 8 and 16 end in 000, 4 ends in 100 → G = 3.",
      "3 → bucket for x11 (shared); 14 → bucket for x10 (local depth 2); 11 joins 3; 12 joins 4 in bucket 100.",
      "23 (…111): the x11 bucket {3, 11} is full → split on 3 bits → 011 {3, 11}, 111 {23}.",
      "42 (…010) joins 14 in the x10 bucket; 21 (…101) goes to the x01 bucket (local depth 2, entries 001 and 101).",
      "Rule: split a bucket when full; if its local depth = global depth, double the directory first."
    ],
    "example": [
      "Global depth 3\nDirectory   Bucket contents   Local depth\n000         8, 16             3\n001 ┐       21                2\n101 ┘\n010 ┐       14, 42            2\n110 ┘\n011         3, 11             3\n100         4, 12             3\n111         23                3"
    ]
  },
  "3f89e8c3085633e2": {
    "answer": [
      "(1) π first_name, last_name (Author ⋈ Author_Publication)",
      "(2) π first_name, last_name (Author ⋈ (π author_id (Author) − ρ author_id (π editor (Book))))",
      "(3) It lists the authors, with their publication and book details, of publications that appeared in books published in July: Ritchie and Thompson (Unix, CACM July 1974) and Shannon (Info Theory, BST July 1948).",
      "(4) It returns the number of authors who are not book editors: |{1,…,9} − {8, 2, 7, 9}| = 5.",
      "(5) It returns 6 tuples, one for each book whose editor is a non-NULL author_id: books 1, 2, 3, 4, 7 and 8."
    ],
    "points": [
      "(1) Data result: authors 1–6 appear in Author_Publication → John McCarthy, Dennis Ritchie, Ken Thompson, Claude Shannon, Alan Turing, Alonzo Church.",
      "(2) Editors present = {8, 2, 7, 9} (NULLs drop out of the projection) → non-editors 1, 3, 4, 5, 6 → McCarthy, Thompson, Shannon, Turing, Church.",
      "(3) σ month='July'(Book) = books 2, 3, 7, 8; natural join with Publication on book_id keeps pubs 2 (Unix) and 3 (Info Theory); join with Author_Publication on pub_id → authors 2, 3 (pub 2) and 4 (pub 3); join with Author adds names → 3 tuples.",
      "(4) Set difference on author_id then cardinality |…| → a count, not names.",
      "(5) Theta join author_id = editor: book 1 → 8 (Vardi), 2 → 8, 3 → 2 (Ritchie), 4 → 7 (White), 7 → 9 (Batty), 8 → 9; books 5, 6 have NULL editor and never match."
    ],
    "example": [
      "Q5 result (author ⋈ author_id=editor book)\nauthor_id  last_name  book_id  book_title\n8          Vardi      1        CACM\n8          Vardi      2        CACM\n2          Ritchie    3        BST\n7          White      4        LMS\n9          Batty      7        AAAI\n9          Batty      8        NIPS        → 6 tuples"
    ]
  },
  "5a23020933030449": {
    "answer": [
      "(a) S1 is neither conflict nor view serializable: the precedence graph has the cycle T1 ⇄ T2 (a lost update).",
      "(b) S2 is conflict serializable: edges T1 → T3 → T2, and the only equivalent serial schedule is T1, T3, T2.",
      "(c) S3 is not conflict serializable (T1 ⇄ T2 on A) and also not view serializable; the counter-example below shows that no serial order gives the same effect."
    ],
    "points": [
      "S1 = r1(A) r2(A) w1(A) w2(A): T1 → T2 (r1(A)–w2(A), w1(A)–w2(A)); T2 → T1 (r2(A)–w1(A)) → cycle.",
      "S1 semantics: A = 100; T1: A := A + 10; T2: A := A × 2. Schedule: both read 100, T1 writes 110, T2 writes 200 → final 200. Serial T1T2 = 220, T2T1 = 210 → no serial schedule gives 200 (T1’s update is lost).",
      "S2 = r1(A) r2(B) w3(A) r2(A) r1(B): conflicts only on A — r1(A) before w3(A) ⇒ T1 → T3; w3(A) before r2(A) ⇒ T3 → T2. Reads of B never conflict. Topological order is unique: T1 → T3 → T2.",
      "S3 = r1(A) w2(A) w1(A) r3(A): T1 → T2 (r1–w2), T2 → T1 (w2–w1), T1 → T3, T2 → T3 → cycle.",
      "S3 view check: T1 reads initial A, T3 reads T1’s write, final writer T1. Any serial order with T1 reading initial must put T2 after T1, but then T2 is the final writer (or T3 reads T2’s value) → no view-equivalent serial schedule.",
      "S3 semantics: A = 100; T1: A := A + 10; T2: A := 50 (blind write); T3: print A. Schedule prints 110 and leaves A = 110. Serial results: T1T2T3 → prints 50, A = 50; T2T1T3 → prints 60, A = 60; T1T3T2 → prints 110 but A = 50; others similar → none matches."
    ],
    "example": [
      "S1:  T1 ⇄ T2                       → not serializable\nS2:  T1 → T3 → T2                  → serial: T1, T3, T2\nS3:  T1 ⇄ T2, T1 → T3, T2 → T3     → not serializable"
    ]
  },
  "138f8cb9ec436c37": {
    "answer": [
      "(a) Consistency. (b) Durability. (c) Isolation. (d) Atomicity."
    ],
    "points": [
      "(a) Consistency — a transaction takes the database from one valid state to another; total of all balances (₹/$100 + other) must be unchanged after transferring $50. Validation: compute SUM(balance) before and after in a test; CHECK constraints (balance ≥ 0); assertions/triggers; reconciliation reports.",
      "(b) Durability — once committed, effects survive crashes; uncommitted work is rolled back on restart. Validation: crash/power-failure injection tests (kill the DB process mid-transaction and after commit), verify log-based recovery (redo committed, undo uncommitted), check WAL and checkpoint configuration, restore-from-backup drills.",
      "(c) Isolation — concurrent transactions behave as if executed serially; only one buyer gets the last item. Validation: concurrent load tests with many threads buying the same item, check stock never < 0; use SERIALIZABLE isolation or SELECT … FOR UPDATE; test for lost update and dirty read anomalies.",
      "(d) Atomicity — all-or-nothing; order items and payment commit together or not at all. Validation: inject a failure after inserting some items (e.g. payment declined) and verify no partial order rows remain; unit tests for ROLLBACK paths; verify undo using the log."
    ],
    "example": [
      "BEGIN;\n  UPDATE account SET balance = balance - 50 WHERE id = 'A';\n  UPDATE account SET balance = balance + 50 WHERE id = 'B';\nCOMMIT;                -- test: SUM(balance) before = SUM(balance) after"
    ]
  },
  "df57066edfb7a612": {
    "answer": [
      "Conflict serializable: the precedence graph is acyclic. Recoverable: a transaction commits only after every transaction it read from has committed. Cascadeless: transactions read only committed data. Strict: no item is read or written until the last transaction that wrote it has committed or aborted. Strict ⊂ cascadeless ⊂ recoverable.",
      "S1 and S2: recoverable and cascadeless, but not conflict serializable and not strict. S3: recoverable, cascadeless and strict, but not conflict serializable. S4: none of the four. S5: conflict serializable and recoverable only. S6: all four."
    ],
    "points": [
      "S1: R1(X) W2(X) W1(X) A2 C1 — edges T1 → T2 (R1–W2), T2 → T1 (W2–W1) → cycle. No reads of uncommitted data → recoverable and cascadeless. W1(X) overwrites X written by uncommitted T2 → not strict.",
      "S2: R1(X) W2(X) W1(X) C2 C1 — same cycle → not CS. No dirty reads → recoverable, cascadeless. W1(X) before C2 → not strict.",
      "S3: R1(X) R2(X) W1(X) C1 W2(X) C2 — T2 → T1 (R2–W1), T1 → T2 (R1–W2, W1–W2) → cycle → not CS (lost update). No dirty reads; W2(X) happens after C1 → strict (hence cascadeless and recoverable).",
      "S4: W1(X) R2(X) W1(X) C2 A1 — T2 reads X from uncommitted T1 and commits before T1 aborts → not recoverable (so not cascadeless or strict). Edges T1 → T2, T2 → T1 → not CS.",
      "S5: W1(X) R2(Y) R1(Y) R2(X) C1 C2 — only conflict W1(X)–R2(X): T1 → T2 → CS (serial T1, T2). T2 reads X from T1 and commits after C1 → recoverable. But that read happens before C1 → not cascadeless, not strict.",
      "S6: R1(X) R2(X) C1 W2(X) C2 — only conflict R1(X)–W2(X): T1 → T2 → CS. No dirty read; W2 after C1 → strict, cascadeless, recoverable."
    ],
    "example": [
      "Schedule  Conflict-ser.  Recoverable  Cascadeless  Strict\nS1        No             Yes          Yes          No\nS2        No             Yes          Yes          No\nS3        No             Yes          Yes          Yes\nS4        No             No           No           No\nS5        Yes            Yes          No           No\nS6        Yes            Yes          Yes          Yes"
    ]
  },
  "fc78b4d06697b03c": {
    "answer": [
      "Deadlock prevention (wait-die, wound-wait, conservative 2PL, ordered locking) stops a cycle from ever forming, at the cost of unnecessary aborts or waits. Detection (wait-for graph plus victim selection) allows more concurrency but needs periodic graph checks. Timeouts are simplest but imprecise.",
      "In a distributed airline reservation system, deadlock arises when two booking transactions hold locks on seats or flights at different sites and each waits for the other. Shared/exclusive locks reduce conflicts, and timestamp-based prevention or global detection resolves them."
    ],
    "points": [
      "[Top of the question is cut in the scan; it compares deadlock prevention and detection in terms of concurrency, performance and overhead.]",
      "Concurrency: detection > prevention — prevention aborts transactions that might never have deadlocked; conservative 2PL holds locks longer.",
      "Performance: prevention is good when conflicts are frequent and transactions short; detection is good when deadlocks are rare.",
      "Overhead: prevention — timestamps and restarts; detection — maintaining the wait-for graph, running cycle detection, global graph construction across sites, and rolling back victims.",
      "Scenario: T1 at Delhi site locks seat 12A on flight AI-101 then requests seat 7C on connecting flight AI-202 (Mumbai site); T2 locks 7C and requests 12A → global cycle not visible at either single site.",
      "Binary locks (locked/unlocked): simplest, but even read-only seat lookups block each other → more waiting and more deadlock chances.",
      "Shared/exclusive locks: many agents can read seat availability with S locks; only booking takes X lock → fewer conflicts. Lock upgrade S → X by two readers is a classic deadlock — use update (U) locks or request X directly.",
      "Prevention: wait-die / wound-wait using global timestamps (site id + clock) — older booking wins; or lock all seats of an itinerary in a global order (by flight number, seat) before starting (conservative 2PL / resource ordering).",
      "Resolution: global wait-for graph at a coordinator or path-pushing detection; choose a victim (youngest, least work done) and roll back; timeouts as fallback."
    ],
    "example": [
      "Site Delhi: T1 holds X(AI-101, 12A), waits for X(AI-202, 7C)\nSite Mumbai: T2 holds X(AI-202, 7C), waits for X(AI-101, 12A)\nGlobal WFG: T1 → T2 → T1  → deadlock\nWound-wait (TS(T1) < TS(T2)): T1 wounds T2 → T2 aborts, restarts with same TS"
    ]
  },
  "29267117e64bcbd0": {
    "answer": [
      "(i) 2PL is a poor fit for B+ tree indexes because every search passes through the root and internal nodes. Holding those node locks until the shrinking phase serialises all index users at the root, so concurrency collapses. Index structure is not user data, so special tree protocols (lock-coupling / crabbing, B-link trees) release ancestor locks early once a node is known to be safe.",
      "(ii) Strict 2PL gives serializable, strict (cascadeless, recoverable) schedules, at the cost of lower concurrency and possible deadlocks. It disallows the given schedule because T2 cannot obtain X(X) while T1 still holds S(X), and T1 keeps its locks until C1."
    ],
    "points": [
      "B+ tree example: T1 inserts key 50 and T2 searches key 10. Under 2PL, T1 takes X-lock on the root (a split may propagate up) and keeps it until commit; T2 cannot even start its search at the root, although it touches completely different leaves. Every inserter blocks the whole index → the root becomes a hot spot.",
      "Tree-locking alternative (crabbing): lock child, then release parent if the child is ‘safe’ (will not split or merge). Locks are released before others are acquired, which 2PL forbids, but correctness is maintained by the tree structure.",
      "Strict 2PL advantages: conflict serializable; no cascading aborts (X-locks held to commit); simple recovery (undo by before-images); widely implemented.",
      "Strict 2PL disadvantages: deadlocks possible (needs detection/prevention); lower concurrency than timestamp or optimistic (validation) or multiversion schemes, where readers never block writers; long transactions hold locks long; lock-manager overhead.",
      "Compared with timestamp ordering: TO has no deadlocks but more restarts; optimistic control is best for low-conflict workloads; MVCC (snapshot isolation) lets reads run without locks.",
      "Schedule check: R1(X) → T1 holds S(X); R1(Y) → S(Y); R2(X) → T2 gets S(X) (compatible); W2(X) needs X(X) → blocked by T1’s S(X). Under strict 2PL T1 releases nothing until C1, so W2(X) cannot occur before W1(X), W1(Y), C1 — the schedule as written is impossible.",
      "Moreover W1(X) would need X(X) while T2 holds S(X) → T1 waits for T2 and T2 waits for T1 → deadlock; one transaction would be aborted. Either way, the given order is disallowed."
    ],
    "example": [
      "Step     Request       Locks held            Result\nR1(X)    S1(X)         T1:S(X)               granted\nR1(Y)    S1(Y)         T1:S(X),S(Y)          granted\nR2(X)    S2(X)         + T2:S(X)             granted (S–S compatible)\nW2(X)    X2(X)         T1 holds S(X)         WAIT → schedule cannot continue as given\n(W1(X) would request X1(X) while T2 holds S(X) → deadlock T1 ⇄ T2)"
    ]
  },
  "f0c35e17e90652a6": {
    "answer": [
      "Wide-column (column-family) stores such as Cassandra, and key-value stores such as DynamoDB/Redis, suit a large e-commerce workload that needs high availability, low latency and massive transaction volume. Document stores complement them for the product catalog. Graph databases are not suitable for the transactional core."
    ],
    "points": [
      "Column-family (Cassandra, HBase, ScyllaDB): masterless replication across regions (AP, tunable consistency), partitioned by key, append-optimised (LSM) writes → millions of writes/sec. Scenario: order history and clickstream: partition key customer_id, clustering key order_time DESC → ‘last 20 orders’ in one partition read.",
      "Key-value (DynamoDB, Redis, Riak): O(1) get/put by key, in-memory or SSD, horizontal scaling by consistent hashing, single-digit ms latency. Scenario: sessions, shopping carts, inventory counters, rate limiting, cached product pages during flash sales.",
      "Document (MongoDB, Couchbase): flexible JSON per product category, secondary indexes, rich queries. Scenario: product catalog where a phone and a T-shirt have different attributes. Good for reads, less ideal for the highest write volume.",
      "Why graph DBs are less suitable for the core: optimised for traversing relationships, harder to shard (edges cross partitions), lower write throughput; use only for recommendations/fraud rings.",
      "Why plain key-value alone is not enough: no queries on value contents or ranges (e.g. orders by date), so analytics and history need column-family.",
      "Why document alone is not enough at extreme scale: single-primary write path per shard and heavier indexing raise latency compared with Cassandra-style writes.",
      "Key considerations: CAP choice per data (AP for carts/sessions, stronger consistency for payments, often kept in an RDBMS), partition-key design to avoid hot spots, replication factor and quorum (R + W > N) for read-your-writes, TTL for ephemeral data."
    ],
    "example": [
      "CREATE TABLE orders_by_customer (\n  customer_id uuid, order_time timestamp, order_id uuid, total decimal,\n  PRIMARY KEY ((customer_id), order_time)\n) WITH CLUSTERING ORDER BY (order_time DESC);   -- Cassandra (CQL)"
    ]
  },
  "76812e935ed52847": {
    "answer": [
      "In a centralized DBMS, all DBMS software, data, applications and user-interface processing run on one machine, and users connect through terminals. In a client/server DBMS, work is split: clients handle the user interface and application logic, and one or more servers handle query processing, storage, transactions and recovery."
    ],
    "points": [
      "Centralized: single mainframe/host; terminals send keystrokes and display output only. Pros: simple administration, one copy of data (easy consistency, security, backup), no network-distribution complexity. Cons: single point of failure, limited scalability, the host does everything (bottleneck), expensive hardware upgrades, poor GUI/user experience.",
      "Two-tier client/server: client runs UI and application programs and talks to the DB server via ODBC/JDBC (SQL over network); server does query processing, concurrency control and recovery.",
      "Three-tier (n-tier): presentation (browser) → application/web server (business logic, security) → database server. Common for web applications.",
      "Client/server pros: processing distributed across machines; servers can be specialised (DB, file, print); clients use cheap PCs with rich GUIs; easier to scale by adding servers or app servers; better security in 3-tier (clients never touch the DB directly).",
      "Client/server cons: network dependence and latency; more complex setup, security and administration; versioning of client software (2-tier); server can still be a bottleneck; more points of failure.",
      "Typical use: centralized — legacy banking mainframes, small single-user systems; client/server — enterprise ERP, web e-commerce, university portals."
    ],
    "example": [
      "Aspect          Centralized                 Client/Server\nProcessing      all on one host             split: client UI/app, server DBMS\nScalability     vertical only               add clients/servers (horizontal)\nFailure         single point of failure     server failure still critical; clients independent\nCost            costly host, cheap terminals  commodity hardware\nAdministration  simple                      complex (network, versions, security)"
    ]
  },
  "306d166ed2f10885": {
    "answer": [
      "Entities: DEPARTMENT, COURSE, PROFESSOR and STUDENT. Relationships: OFFERS (DEPARTMENT 1:N COURSE, total on course), TEACHES (PROFESSOR M:N COURSE), ENROLLS (STUDENT M:N COURSE, with attribute grade) and MAJORS_IN (STUDENT N:1 DEPARTMENT)."
    ],
    "points": [
      "DEPARTMENT(dept_name — key, location). Location may be multivalued {location} if a department spans buildings.",
      "COURSE(course_id — key, title, credits).",
      "PROFESSOR(prof_id — key, name — composite (first, last), rank).",
      "STUDENT(student_id — key, name — composite (first, middle, last), email; {phone} multivalued if added; age derived from dob if dob stored; number_of_courses derived via ENROLLS).",
      "OFFERS: DEPARTMENT 1 — N COURSE; every course is offered by exactly one department (total participation of COURSE).",
      "TEACHES: PROFESSOR M — N COURSE; partial on both sides (new professor/course may not be assigned yet).",
      "ENROLLS: STUDENT M — N COURSE with relationship attribute grade (it belongs to the student–course pair, not to either entity).",
      "MAJORS_IN: STUDENT N — 1 DEPARTMENT (major department); total on student.",
      "Attribute classification summary — simple: credits, rank, email, location, grade; composite: name; derived: age, total_credits; multivalued: phone / location (if allowed); key: dept_name, course_id, prof_id, student_id."
    ],
    "example": [
      "Chen notation (text form)\n[DEPARTMENT]──1──<OFFERS>──N══[COURSE]══M──<TEACHES>──N──[PROFESSOR]\n(dept_name, location)          (course_id, title, credits)      (prof_id, (name), rank)\n     │1                              ║N\n<MAJORS_IN>                     <ENROLLS>──(grade)\n     ║N                              │M\n[STUDENT]────────────────────────────┘\n(student_id, (name), email, {phone}, [age])\n\n[ ] entity  < > relationship  ( ) attributes  {multivalued}  [derived]  ══ total participation"
    ]
  },
  "901ca02b41206ae7": {
    "answer": [
      "{A}⁺ = {A, B, C, D, E, F, G}, so A determines every attribute and is a key of R."
    ],
    "points": [
      "Reflexivity: A → A, so start with {A}.",
      "Given A → BC ⇒ by decomposition A → B and A → C; result {A, B, C}.",
      "B → D with A → B ⇒ transitivity A → D; result {A, B, C, D}.",
      "From A → C and A → D ⇒ union A → CD; with CD → E ⇒ transitivity A → E; result {A, B, C, D, E}.",
      "E → F ⇒ A → F (transitivity); result adds F.",
      "F → G ⇒ A → G (transitivity); result adds G — no attributes left, stop.",
      "Armstrong’s axioms used: reflexivity, augmentation (implicitly in union), transitivity; derived rules decomposition and union."
    ],
    "example": [
      "Step  FD used     Rule                        A⁺\n0     –           reflexivity                 {A}\n1     A → BC      given / decomposition        {A, B, C}\n2     B → D       transitivity                {A, B, C, D}\n3     CD → E      union (A→CD) + transitivity  {A, B, C, D, E}\n4     E → F       transitivity                {A, B, C, D, E, F}\n5     F → G       transitivity                {A, B, C, D, E, F, G}"
    ]
  },
  "30a8d81ae8b60edc": {
    "answer": [
      "The EXISTS subquery is a semi-join. A direct expression is π Name, DeptName (σ Budget>100000 (Employees ⋈ Departments ⋈ Projects)), with duplicates removed because one department can have several large projects.",
      "Optimised version: push the selection onto Projects, project out unneeded columns early, take only distinct DeptIDs (semi-join), and join the smallest inputs first."
    ],
    "points": [
      "Initial (canonical) form: π E.Name, D.DeptName ( σ E.DeptID = D.DeptID ∧ P.DeptID = D.DeptID ∧ P.Budget > 100000 ( E × D × P ) ).",
      "Rule 1 — cascade/push selection: σ Budget>100000 applied directly to Projects before any join.",
      "Rule 2 — replace σ over × with ⋈ (join conditions become join predicates).",
      "Rule 3 — push projections: from Projects keep only DeptID (π DeptID), from Employees keep Name, DeptID; from Departments keep DeptID, DeptName.",
      "Rule 4 — semi-join for EXISTS: D ⋉ σ Budget>100000(P) keeps each qualifying department once, avoiding duplicate employees.",
      "Rule 5 — join order: join the small filtered department set with Employees last (or use index on Employees.DeptID).",
      "Physical hints: index on Projects(Budget) or (DeptID, Budget); hash join on DeptID."
    ],
    "example": [
      "Optimised expression\nπ Name, DeptName (\n    π Name, DeptID (Employees)\n  ⋈ ( π DeptID, DeptName (Departments) ⋉ π DeptID ( σ Budget > 100000 (Projects) ) )\n)",
      "Query tree\n              π Name, DeptName\n                    |\n                ⋈ DeptID\n               /        \\\n   π Name,DeptID         ⋉ DeptID\n        |               /        \\\n    Employees   π DeptID,DeptName  π DeptID\n                      |               |\n                 Departments   σ Budget>100000\n                                      |\n                                  Projects"
    ]
  },
  "8ad5bfdcd1b7d4a0": {
    "answer": [
      "A schedule is conflict serializable if, by swapping adjacent non-conflicting operations, it can be transformed into some serial schedule (it is conflict equivalent to a serial schedule). Two operations conflict when they belong to different transactions, access the same item, and at least one of them is a write.",
      "Test: build a precedence graph and check it for cycles. The schedule is conflict serializable if and only if the graph is acyclic; a topological sort then gives the equivalent serial order."
    ],
    "points": [
      "Conflicting pairs: read–write, write–read, write–write on the same item. Read–read never conflicts, so it can be swapped.",
      "Precedence graph: one node per transaction; edge Ti → Tj if an operation of Ti conflicts with and precedes an operation of Tj.",
      "Algorithm: (1) list operations in order; (2) for each pair (oi, oj) with i before j that conflict, add edge; (3) detect cycle by DFS; (4) if acyclic, any topological order is an equivalent serial schedule.",
      "Example 1 (serializable): S = r1(A) w1(A) r2(A) w2(A) r1(B) w1(B) → edge T1 → T2 only → equivalent serial T1, T2.",
      "Example 2 (not serializable): S = r1(A) r2(A) w1(A) w2(A) → T1 → T2 (r1/w2), T2 → T1 (r2/w1) → cycle → lost update.",
      "Conflict serializability implies view serializability, but not conversely (blind writes can give view-serializable but non-conflict-serializable schedules)."
    ],
    "example": [
      "Example 1                       Example 2\nT1        T2                    T1        T2\nr(A)                            r(A)\nw(A)                                      r(A)\n          r(A)                  w(A)\n          w(A)                            w(A)\nr(B)\nw(B)\nGraph: T1 → T2  (acyclic)       Graph: T1 ⇄ T2  (cycle)"
    ]
  },
  "f4fb3b62ff316e85": {
    "answer": [
      "(i) Two-phase locking requires every transaction to acquire all its locks in a growing phase and release them in a shrinking phase, never acquiring a lock after releasing one. This guarantees conflict serializability, with the equivalent serial order being the order of the transactions' lock points.",
      "(ii) Basic 2PL releases locks any time after the lock point. Strict 2PL holds exclusive locks until commit or abort. Rigorous 2PL holds all locks until commit or abort. Concurrency decreases from basic to strict to rigorous, while recoverability improves (basic can cascade aborts; strict and rigorous cannot)."
    ],
    "points": [
      "Lock modes: shared (read) and exclusive (write); compatibility S–S only. Upgrades (S → X) allowed only in growing phase, downgrades only in shrinking phase.",
      "Why serializable: if Ti → Tj in the precedence graph, Ti released a lock before Tj obtained it, so Ti’s lock point precedes Tj’s; a cycle would require a lock point to precede itself.",
      "Limitations of all 2PL variants: deadlocks possible; not every serializable schedule is allowed.",
      "Basic 2PL — performance: highest concurrency (locks released early). Recoverability: another transaction can read data written by an uncommitted transaction after an early unlock → cascading rollback, even non-recoverable schedules unless commit order is controlled.",
      "Strict 2PL — X-locks held until commit/abort, S-locks may be released earlier. Produces strict schedules → no dirty reads, no cascading aborts, simple undo with before-images. Slightly lower concurrency. Used by most commercial DBMSs.",
      "Rigorous 2PL — all locks held to the end. Transactions serialise in commit order (useful in distributed commit), simplest to implement, lowest concurrency because readers keep blocking writers until commit.",
      "Conservative (static) 2PL (related): lock everything before starting → no deadlock but needs pre-declared read/write sets."
    ],
    "example": [
      "Variant     Release of S locks   Release of X locks   Cascading aborts   Concurrency\nBasic       after lock point     after lock point     possible           highest\nStrict      after lock point     at commit/abort      no                 medium\nRigorous    at commit/abort      at commit/abort      no                 lowest"
    ]
  },
  "e95cecae3a9a16fe": {
    "answer": [
      "(i) The CAP theorem (Brewer; proved by Gilbert and Lynch) says that a distributed data store cannot simultaneously provide Consistency, Availability and Partition tolerance. NoSQL systems are distributed across many nodes, so they must tolerate partitions and choose, during a partition, between consistency (CP: HBase, MongoDB) and availability (AP: Cassandra, DynamoDB, CouchDB).",
      "(ii) In a partition, a node that cannot reach its peers must either answer (and risk returning stale or conflicting data, losing C) or refuse to answer until it can synchronise (losing A). It cannot do both, so at most two properties hold at once."
    ],
    "points": [
      "Consistency: every read receives the most recent write or an error — all nodes see the same data at the same time (linearizability).",
      "Availability: every request received by a non-failing node gets a non-error response in finite time.",
      "Partition tolerance: the system continues to operate despite arbitrary loss or delay of messages between nodes.",
      "Proof idea: nodes N1, N2 separated by a partition. Client writes v1 to N1; another client reads from N2. To be available N2 must answer — it can only return the old v0 (inconsistent). To be consistent N2 must wait/refuse (unavailable).",
      "CP systems: reject writes or reads in minority partitions (quorums, single leader). AP systems: accept operations everywhere, reconcile later using vector clocks, last-write-wins or CRDTs → eventual consistency (BASE).",
      "CA: possible only without partitions — e.g. a single-node RDBMS; not realistic for large distributed NoSQL clusters.",
      "Nuance: the trade-off applies only during a partition; otherwise systems can offer both. Many NoSQL stores make it tunable (Cassandra consistency levels ONE/QUORUM/ALL). PACELC adds the latency vs consistency trade-off in normal operation."
    ],
    "example": [
      "Class   Keeps     Gives up during partition   Examples\nCP      C, P      availability                HBase, MongoDB (majority), Zookeeper\nAP      A, P      consistency (eventual)      Cassandra, DynamoDB, CouchDB, Riak\nCA      C, A      partition tolerance         single-site RDBMS"
    ]
  },
  "538e2baa3f076243": {
    "answer": [
      "(i) The final tree has root [45], internal nodes [25] and [65], and linked leaves [5, 15] → [25, 35] → [45, 55] → [65, 75]. (Convention: a full leaf of 3 keys splits 2 | 1 and copies the right leaf's first key up.)",
      "(ii) B+ trees keep all records (or record pointers) in linked leaves and use internal nodes only for routing. Internal nodes therefore hold more keys, the tree is shallower, and range or sequential scans become a single leaf-chain walk.",
      "(iii) BETWEEN 25 AND 65: search down for 25 (root 45 → go left; node 25 → go right) to leaf [25, 35], then follow the leaf pointers through [45, 55] to [65, 75] and stop at the first key above 65."
    ],
    "points": [
      "Insertion trace: 5, 15 → [5,15]; 25 splits → [5,15] | [25], root [25]; 35 → [25,35]; 45 splits → [25,35] | [45], root [25,45]; 55 → [45,55]; 65 splits → [45,55] | [65], root [25,45,65] overflows → 45 moves up, root [45] with children [25], [65]; 75 → [65,75].",
      "Higher fan-out: internal nodes store only keys + child pointers (no data), so more keys fit per disk page → fewer levels → fewer I/Os per search.",
      "Uniform search cost: every search ends at a leaf, so lookup time is predictable (height h).",
      "Range and ORDER BY queries: leaves are a sorted linked list; no need to go back up the tree as in a B-tree in-order traversal.",
      "Simpler insert/delete for data: records live only in leaves; internal keys are just copies used for routing.",
      "Range query cost = h node reads to reach the first leaf + number of leaves that contain qualifying keys (here 3 + 3 = 6 node accesses): O(log n + k)."
    ],
    "example": [
      "            [45]\n           /    \\\n        [25]    [65]\n       /   \\    /   \\\n  [5,15]→[25,35]→[45,55]→[65,75]",
      "WHERE key BETWEEN 25 AND 65\n1. root [45]: 25 < 45 → left child [25]\n2. [25]: 25 ≥ 25 → right child, leaf [25,35]  → output 25, 35\n3. next leaf [45,55] → output 45, 55\n4. next leaf [65,75] → output 65; 75 > 65 → stop\nResult: 25, 35, 45, 55, 65"
    ]
  },
  "3e315e3d671ec69a": {
    "answer": [
      "(i) Lost update: T1 and T2 both read A = 1000. T1 writes A = 800 (after taking 200 out) and T2 writes A = 1300 (after its 300 deposit), so whichever writes last wins. With T2 last, A = 1300 and B = 700: the 200 withdrawal is lost, and the total is 2000 instead of the correct A = 1100, B = 700 (1800).",
      "(ii) Deadlock: T3 holds a shared lock on A (it reads A twice, and under 2PL keeps the lock between reads), while T1 holds an exclusive lock on B and requests an exclusive lock on A. If T3 then requests B, each waits for the other."
    ],
    "points": [
      "Correct serial result (any order): A = 1000 − 200 + 300 = 1100, B = 500 + 200 = 700; total 1800.",
      "Lost update interleaving: r1(A)=1000, r2(A)=1000, w1(A)=800, r1(B)=500, w1(B)=700, w2(A)=1300 → T1’s debit overwritten.",
      "Cause: no concurrency control — both transactions read the same old value before either writes. Fix: X-lock on A for read-modify-write (2PL) or atomic UPDATE A = A + 300.",
      "Deadlock condition: hold-and-wait with circular wait among locks. T1 locks B first (or locks A late), T3 holds S(A) for a repeatable read and also needs B (e.g. to display total) → cycle in wait-for graph.",
      "Resolution/prevention: lock items in a fixed order (A then B) for all transactions, wait-die/wound-wait timestamps, or detection with wait-for graph and aborting the younger transaction (T3, cheapest to restart).",
      "T3 also shows unrepeatable read without locks: its two reads of A may return 1000 and 800/1300."
    ],
    "example": [
      "Lost update (T1, T2)\nTime  T1                    T2                    A      B\n1     read A (1000)                               1000   500\n2                           read A (1000)\n3     A = A − 200; write A                        800\n4     read B; B = B + 200; write B                       700\n5                           A = A + 300; write A  1300   ← T1’s −200 lost",
      "Deadlock (T1, T3)\nTime  T1                     T3\n1                            S-lock(A); read A\n2     X-lock(B); write B\n3     request X-lock(A) → WAIT (T3 holds S(A))\n4                            request S-lock(B) → WAIT (T1 holds X(B))\nWait-for graph: T1 → T3 → T1  ⇒ deadlock"
    ]
  },
  "42a1ab561e10b23c": {
    "answer": [
      "(i) In immediate update, a transaction may write changes to the database on disk before it commits. Recovery therefore needs UNDO for uncommitted transactions, and REDO for committed ones if pages may not have been flushed (UNDO/REDO; UNDO/NO-REDO if all writes are forced before commit). The write-ahead log (WAL) rule and force-writing the commit record ensure atomicity and durability.",
      "(ii) Compensation log records (CLRs) record each undo action, so undo is never repeated after a crash during recovery. Checkpoints limit how far back recovery must scan the log."
    ],
    "points": [
      "Log records: <T, start>, <T, X, old_value, new_value>, <T, commit>, <T, abort>.",
      "Atomicity measure — WAL: the log record (with old value) is written to stable storage before the modified page reaches the database, so any change can be undone.",
      "Durability measure — force the log (up to <T, commit>) to disk at commit; a transaction is committed when its commit record is on stable storage; redo committed transactions from the log after a crash.",
      "Recovery: undo list = transactions with <start> but no <commit>/<abort> — undo in reverse log order using old values; redo list = transactions with <commit> — redo in forward order using new values. Undo and redo must be idempotent.",
      "UNDO/NO-REDO variant: all updates flushed before commit, so only undo needed. UNDO/REDO is used with steal/no-force buffer policies (most flexible, most common, e.g. ARIES).",
      "CLR: when undoing update U of T, write a redo-only CLR containing the action and an UndoNextLSN pointing to the record before U. If the system crashes during recovery, the CLRs are redone and undo resumes at UndoNextLSN; undone work is never undone twice; CLRs themselves are never undone.",
      "Checkpoint: periodically suspend new updates, flush log buffers and dirty pages (or record them in fuzzy checkpoints), write <checkpoint L> with the list L of active transactions. On recovery, start from the last checkpoint: transactions committed before it need no redo; only those in L or started after need attention.",
      "Fuzzy checkpoint (ARIES): records dirty-page table and transaction table without stopping transactions, reducing pause time."
    ],
    "example": [
      "<T1 start>\n<T1, A, 1000, 900>\n<T2 start>\n<checkpoint {T1, T2}>\n<T1, B, 500, 600>\n<T1 commit>\n<T2, C, 70, 80>\n——— crash ———\nRedo T1 (committed): B = 600.   Undo T2 (no commit): C = 70, writing CLR <T2, C, 70> then <T2 abort>."
    ]
  },
  "6ead83c9b6de1907": {
    "answer": [
      "(10a) Key-value stores map a key to an opaque value (fast lookups, caching, sessions). Column-family stores group columns into families within rows partitioned by key (huge write-heavy, time-series workloads). Document databases store JSON/BSON documents with nested structure that can be queried (catalogs, CMS, user profiles). Graph databases store nodes and edges with properties (relationship traversal: social networks, recommendations, fraud).",
      "(10b-i) Deadlocks in lock-based concurrency control arise when the four Coffman conditions hold together: mutual exclusion, hold-and-wait, no preemption and circular wait. Typical causes are inconsistent lock ordering, lock upgrades, long transactions and fine-grained locks across many items."
    ],
    "points": [
      "Key-value (Redis, DynamoDB, Riak): get/put/delete by key only; extremely low latency; easy horizontal scaling; no query on value content. Use: session store, shopping cart, caching, leaderboards, rate limiting.",
      "Column-family (Cassandra, HBase, Bigtable): row key + column families; sparse rows; sorted storage; tunable consistency; LSM-tree writes. Use: IoT sensor readings, logs, messaging inboxes, time-series analytics.",
      "Document (MongoDB, CouchDB, Firestore): self-describing documents, flexible schema, secondary indexes, aggregation pipelines. Use: product catalog with varying attributes, blogs/CMS, user profiles, mobile app back-ends.",
      "Graph (Neo4j, Amazon Neptune, JanusGraph): index-free adjacency; Cypher/Gremlin traversal queries; ACID in many products. Use: friend-of-friend suggestions, recommendation engines, fraud-ring detection, network/IT topology, knowledge graphs.",
      "Deadlock causes — inconsistent ordering: T1 locks A then B, T2 locks B then A.",
      "Lock upgrade/conversion: two transactions hold S(X) and both request X(X) → each waits for the other to release S.",
      "Long transactions and high contention on hot items increase the probability of circular waits; 2PL forces locks to be held until the shrinking phase, so waits accumulate.",
      "Interaction between granularities (row vs table locks) and index locks; distributed transactions where waits span sites and are not locally visible."
    ],
    "example": [
      "Type           Data model                 Query style          Best for\nKey-value      key → blob                 get/put by key       sessions, caching, carts\nColumn-family  row key → column families  key + range scans    time-series, logs, IoT\nDocument       JSON/BSON documents        rich field queries   catalogs, CMS, profiles\nGraph          nodes + edges + props      traversals           social, recommendations, fraud"
    ]
  },
  "5b4ed18a0f538c90": {
    "answer": [
      "A wait-for graph (WFG) has one node per active transaction and an edge Ti → Tj when Ti is waiting for a lock held by Tj. The system is deadlocked if and only if the WFG contains a cycle. The detector periodically runs a cycle search (DFS) and breaks each cycle by rolling back a victim."
    ],
    "points": [
      "Graph maintenance: add Ti → Tj when Ti’s lock request is blocked by Tj; remove the edge when Tj releases the lock and Ti is granted it.",
      "Cycle detection: depth-first search marking nodes ‘in-stack’; reaching an in-stack node means a back edge → cycle. Cost O(V + E); run on every blocked request or at intervals (frequency trades detection delay vs overhead).",
      "Victim selection: the transaction with least work done/fewest locks/youngest timestamp/fewest previous rollbacks (avoid starvation by counting rollbacks).",
      "Rollback: total (abort and restart) or partial (roll back to a savepoint just enough to release the needed lock).",
      "Distributed case: build a global WFG at a coordinator or use edge-chasing (probe messages); beware of phantom deadlocks from stale information.",
      "Alternative: timeouts — simple, but may abort non-deadlocked transactions."
    ],
    "example": [
      "T1 holds X(A), requests X(B)\nT2 holds X(B), requests X(C)\nT3 holds X(C), requests X(A)\nWFG: T1 → T2 → T3 → T1   (DFS from T1 returns to T1 → cycle)\nResolution: choose victim T3 (youngest) → roll back T3, release C\n→ T2 gets C, finishes, releases B → T1 gets B, finishes → T3 restarts"
    ]
  },
  "c22eaf740995c9af": {
    "answer": [
      "The scenario describes the ANSI/SPARC three-schema architecture. The raw bytes and words on secondary storage form the internal level, the tables presented to users form the conceptual level, and the different presentations for diverse audiences form the external level. Mappings between the levels translate requests and data."
    ],
    "points": [
      "Internal (physical) schema: stored record types for the airline data — e.g. stored FLIGHT record with fields, byte offsets, block size, file organisation (hash on flight_no), B+ tree on (origin, date), replication across geographically distributed sites.",
      "Conceptual schema: the logical tables hiding physical detail — AIRLINE(airline_id, name), FLIGHT(flight_no, airline_id, origin, destination, dep_time), SCHEDULE(flight_no, date, aircraft_id), RESERVATION(pnr, passenger_id, flight_no, date, seat, status), PASSENGER(passenger_id, name, phone), with keys, FKs and constraints.",
      "External schemas (views) for diverse audiences: Passenger view — MyBookings(pnr, flight_no, date, seat, status); Travel agent view — Availability(flight_no, date, seats_free, fare); Airport staff view — DepartureBoard(flight_no, gate, dep_time, status); Management view — Revenue(route, month, revenue).",
      "External/conceptual mapping: converts a view query (e.g. on Availability) into queries on FLIGHT, SCHEDULE and RESERVATION; supports logical data independence.",
      "Conceptual/internal mapping: maps table rows to stored records and access paths (which file, which index, which site); supports physical data independence — e.g. moving reservation data to a new site or adding an index does not affect tables.",
      "DBMS components involved: DDL compiler stores all three schemas in the catalog; query compiler/optimizer uses the mappings; runtime processor and stored-data manager access the files."
    ],
    "example": [
      "External:   MyBookings     Availability     DepartureBoard     Revenue\n                 \\              |                 |             /\n                  ———— external/conceptual mappings ————\nConceptual: AIRLINE, FLIGHT, SCHEDULE, RESERVATION, PASSENGER\n                         conceptual/internal mapping\nInternal:   stored records (bytes/words), hash file on flight_no,\n            B+ tree on (origin, date), partitions per region"
    ]
  },
  "52ce621f2e996f7b": {
    "answer": [
      "S (as shown: R4(A), R2(A), R3(A), W1(B), W2(A), R3(B), W2(B)) is conflict serializable. The precedence graph T1 → T3, T1 → T2, T3 → T2, T4 → T2 is acyclic.",
      "One equivalent serial schedule is T1 → T3 → T4 → T2. T4 may go anywhere before T2, so T4 → T1 → T3 → T2 and T1 → T4 → T3 → T2 also work.",
      "Recoverability: T3 reads B written by T1, so S is recoverable only if T1 commits before T3 commits. No commit operations appear in the scan; if C1 precedes C3, S is recoverable (but not cascadeless, because T3 reads uncommitted B)."
    ],
    "points": [
      "Conflicts on A: R4(A) < W2(A) ⇒ T4 → T2; R3(A) < W2(A) ⇒ T3 → T2; R2(A) and W2(A) are the same transaction.",
      "Conflicts on B: W1(B) < R3(B) ⇒ T1 → T3; W1(B) < W2(B) ⇒ T1 → T2; R3(B) < W2(B) ⇒ T3 → T2.",
      "No edge leads back into T1 or T4 → no cycle → conflict serializable.",
      "Topological order constraints: T1 before T3; T1, T3, T4 before T2.",
      "Reads-from relationships: T3 reads B from T1 (dirty read unless T1 already committed); T2, T3, T4 read A’s initial value."
    ],
    "example": [
      "Precedence graph\nT1 ──→ T3\n │       │\n └──→ T2 ←┘\n       ↑\n      T4\nSerial equivalent: T1, T3, T4, T2"
    ]
  },
  "b34240512c6117a2": {
    "answer": [
      "Use a document database (MongoDB) with three collections: Residents, Amenities and BookAmenity. The answer covers the inserts, the update for the new gym in-charge, an aggregation that counts bookings per member and amenity in descending order, and a deleteMany for apartment 101."
    ],
    "points": [
      "(i) Collections are created implicitly on first insert or explicitly with db.createCollection(). A unique index on BookAmenity (AmenityID, Date, Slot) prevents double booking of a slot; a unique index on MemberID in Residents enforces unique members.",
      "(ii) insertMany adds two sample documents per collection.",
      "(iii) updateOne with $set changes InchargeName and InchargePhoneNumber for the Gym document.",
      "(iv) The aggregate pipeline uses $group on {MemberID, AmenityID} with $sum: 1, then $sort count: -1 to list the heaviest users first.",
      "(v) deleteMany({ApartmentNumber: 101}) removes every member document of that family."
    ],
    "example": [
      "db.createCollection(\"Residents\"); db.createCollection(\"Amenities\"); db.createCollection(\"BookAmenity\")\ndb.BookAmenity.createIndex({AmenityID: 1, Date: 1, Slot: 1}, {unique: true})",
      "db.Residents.insertMany([\n  {MemberID: \"M001\", Name: \"Asha\",  Phone: \"9876500001\", ApartmentNumber: 101},\n  {MemberID: \"M002\", Name: \"Ravi\",  Phone: \"9876500002\", ApartmentNumber: 205}\n])\ndb.Amenities.insertMany([\n  {AmenityID: \"A01\", Amenity: \"Gym\",           InchargeName: \"Kumar\", InchargePhoneNumber: \"9000000001\"},\n  {AmenityID: \"A02\", Amenity: \"Swimming Pool\", InchargeName: \"Meena\", InchargePhoneNumber: \"9000000002\"}\n])\ndb.BookAmenity.insertMany([\n  {AmenityID: \"A01\", MemberID: \"M001\", Date: ISODate(\"2023-05-10\"), Slot: \"8 AM-9 AM\"},\n  {AmenityID: \"A02\", MemberID: \"M002\", Date: ISODate(\"2023-05-10\"), Slot: \"6 PM-7 PM\"}\n])",
      "db.Amenities.updateOne(\n  {Amenity: \"Gym\"},\n  {$set: {InchargeName: \"Suresh\", InchargePhoneNumber: \"9000000099\"}}\n)",
      "db.BookAmenity.aggregate([\n  {$group: {_id: {MemberID: \"$MemberID\", AmenityID: \"$AmenityID\"}, count: {$sum: 1}}},\n  {$sort: {count: -1}},\n  {$project: {_id: 0, MemberID: \"$_id.MemberID\", AmenityID: \"$_id.AmenityID\", count: 1}}\n])",
      "db.Residents.deleteMany({ApartmentNumber: 101})"
    ]
  },
  "44db5854076ea3a4": {
    "answer": [
      "The four SQL queries below use joins, GROUP BY and subqueries on Hotel, Room, Booking and Guest. ‘Available at present’ means a room with no booking whose date range contains today."
    ],
    "points": [
      "(a) Hotel has no price column, so join Room to print name and room prices.",
      "(b) Group by Hotel.City after joining Room ↔ Hotel; AVG(Price).",
      "(c) Subquery finds MAX(Price); return hotel(s) owning a room at that price (handles ties).",
      "(d) NOT EXISTS against Booking for the same hotel and room where CURRENT_DATE lies between FromDate and ToDate."
    ],
    "example": [
      "-- (a)\nSELECT h.Name, r.Price\nFROM   Hotel h JOIN Room r ON r.Hotel_No = h.HotelNo\nWHERE  h.City = 'Bangalore';",
      "-- (b)\nSELECT h.City, AVG(r.Price) AS avg_price\nFROM   Hotel h JOIN Room r ON r.Hotel_No = h.HotelNo\nGROUP BY h.City;",
      "-- (c)\nSELECT DISTINCT h.Name, h.City\nFROM   Hotel h JOIN Room r ON r.Hotel_No = h.HotelNo\nWHERE  r.Price = (SELECT MAX(Price) FROM Room);",
      "-- (d)\nSELECT h.Name, r.RoomNo\nFROM   Hotel h JOIN Room r ON r.Hotel_No = h.HotelNo\nWHERE  h.City = 'Chennai'\n  AND NOT EXISTS (\n        SELECT 1 FROM Booking b\n        WHERE  b.HotelNo = r.Hotel_No AND b.RoomNo = r.RoomNo\n          AND  CURRENT_DATE BETWEEN b.FromDate AND b.ToDate);"
    ]
  },
  "c2b03b8620dfaabd": {
    "answer": [
      "Entities: CUSTOMER, ORDER, PRODUCT and PAYMENT. CUSTOMER places ORDER (1:N, every order has exactly one customer). ORDER contains PRODUCT (M:N, with quantity). ORDER has PAYMENT (1:1). The relational schema has five tables, including ORDER_ITEM for the M:N relationship."
    ],
    "points": [
      "PLACES: CUSTOMER 1 — N ORDER; customer partial (may register without ordering), order total.",
      "CONTAINS: ORDER M — N PRODUCT (an order includes one or more products; a product appears in many orders); attribute quantity (and unit_price at time of order). Order side total (≥ 1 product).",
      "HAS: ORDER 1 — 1 PAYMENT; payment total (exists only for an order), order partial until paid.",
      "Mapping step 1: each strong entity → table with its PK.",
      "Step 2: 1:N PLACES → FK customer_id in ORDERS (N side).",
      "Step 3: 1:1 HAS → FK order_id in PAYMENT (total side) with UNIQUE so one payment per order.",
      "Step 4: M:N CONTAINS → new table ORDER_ITEM(order_id, product_id, quantity) with composite PK and two FKs.",
      "Use ORDERS rather than ORDER as table name (ORDER is an SQL keyword)."
    ],
    "example": [
      "CUSTOMER ──1──<PLACES>──N══ ORDER ══M──<CONTAINS (quantity)>──N── PRODUCT\n                              │1\n                           <HAS>\n                              ║1\n                           PAYMENT",
      "CUSTOMER   (customer_id PK, name, email, address)\nPRODUCT    (product_id PK, name, price, description)\nORDERS     (order_id PK, order_date, customer_id FK → CUSTOMER)\nORDER_ITEM (order_id FK → ORDERS, product_id FK → PRODUCT, quantity,\n            PK(order_id, product_id))\nPAYMENT    (payment_id PK, payment_date, amount,\n            order_id FK → ORDERS UNIQUE NOT NULL)"
    ]
  },
  "c5fff94ecab14f53": {
    "answer": [
      "(i) CB → Y is redundant: CB⁺ computed without it is {C, B, A, X, Y}, so it is implied by C → A, B → X and AX → Y.",
      "(ii)(a) A minimal cover is {A → C, A → E, B → D, E → A, E → B}. (b) The candidate keys are A and E. (c) The BCNF decomposition is R1(B, D) and R2(A, B, C, E)."
    ],
    "points": [
      "Part (i) derivation: C → A and B → X ⇒ CB → AX (union/augmentation) and AX → Y ⇒ CB → Y (transitivity). Remaining cover {C → A, B → X, AX → Y} has no further redundancy.",
      "Minimal cover step 1 — single attribute RHS: A → B, A → C, AC → E, B → D, E → A, E → B.",
      "Step 2 — remove extraneous LHS attributes: in AC → E, A⁺ = {A, B, C, …} already contains C, so C is extraneous → A → E.",
      "Step 3 — remove redundant FDs: A → B is implied by A → E, E → B → drop it. Check the rest: A → C, A → E, B → D, E → A, E → B are each needed (removing any loses the attribute in the closure). (Another valid cover keeps A → B and drops E → B, since E → A → B.)",
      "Keys: A⁺ = {A, B, C, D, E}; E⁺ = {E, A, B, C, D}; B⁺ = {B, D}; C⁺ = {C}; D⁺ = {D}; no combination without A or E reaches C/E → keys {A}, {E}.",
      "BCNF check: B → D has LHS B, not a superkey → violation. All other FDs have A or E (keys) on the left.",
      "Decompose on B → D: R1(B, D) with key B; R2 = R − D = (A, B, C, E) with FDs A → C, A → E, E → A, E → B; A and E are keys → BCNF. Lossless (B is a key of R1) and dependency preserving."
    ],
    "example": [
      "Relation         Key(s)   FDs\nR1(B, D)         B        B → D\nR2(A, B, C, E)   A, E     A → C, A → E, E → A, E → B"
    ]
  },
  "1d68facac7766885": {
    "answer": [
      "Heuristic optimisation turns the canonical tree σ(Student × Course_student × Course) into one that applies σ stu_name='John' and σ credits>4 first, converts the Cartesian products into joins, joins the small filtered relations, and projects only the columns needed."
    ],
    "points": [
      "SQL: SELECT c.cname FROM Student s, Course_student cs, Course c WHERE s.Reg_no = cs.Regno AND cs.ccode = c.ccode AND s.stu_name = 'John' AND c.credits > 4;",
      "Step 1 — canonical tree: π cname (σ all conditions (Student × Course_student × Course)).",
      "Step 2 — break up the conjunctive selection (cascade of σ) into individual conditions.",
      "Step 3 — push selections down: σ stu_name='John' onto Student; σ credits>4 onto Course.",
      "Step 4 — apply the most restrictive selection first and order leaves so that the smallest result is joined first (John is one or few rows).",
      "Step 5 — replace × followed by join condition with ⋈ (Reg_no = Regno, then ccode = ccode).",
      "Step 6 — push projections down: keep Reg_no from Student, Regno and ccode from Course_student, ccode and cname from Course.",
      "Note: Course_student also holds stu_name, so an alternative plan selects σ stu_name='John'(Course_student) directly and skips the Student join entirely."
    ],
    "example": [
      "Initial: π cname ( σ s.Reg_no=cs.Regno ∧ cs.ccode=c.ccode ∧ stu_name='John' ∧ credits>4 ( Student × Course_student × Course ) )",
      "Optimised tree\n                  π cname\n                     |\n               ⋈ cs.ccode = c.ccode\n              /                    \\\n     π ccode                      π ccode, cname\n        |                               |\n  ⋈ Reg_no = Regno                σ credits > 4\n   /             \\                      |\nπ Reg_no      π Regno, ccode          Course\n   |               |\nσ stu_name='John'  Course_student\n   |\nStudent"
    ]
  },
  "84ed5ff10fe6e369": {
    "answer": [
      "Order 4 means at most 4 pointers, so at most 3 keys per node. A full leaf splits 2 | 2 and copies the right leaf's first key up, and a non-root leaf needs at least 2 keys. Index key = Cust_Id; the leaves hold the record pointers.",
      "Final tree: root [6666] over leaves [1111, 2222, 5555] → [6666, 7777, 8888]."
    ],
    "points": [
      "Insert 1111, 8888, 6666 → one leaf [1111, 6666, 8888].",
      "Insert 5555 → [1111, 5555, 6666, 8888] overflows → split [1111, 5555] | [6666, 8888]; root [6666].",
      "Insert 7777 → [6666, 7777, 8888]. Insert 3333 → [1111, 3333, 5555].",
      "Insert 4444 → [1111, 3333, 4444, 5555] overflows → [1111, 3333] | [4444, 5555]; root [4444, 6666].",
      "Delete 3333 → leaf [1111] underflows; sibling [4444, 5555] has only the minimum 2 keys → merge into [1111, 4444, 5555]; separator 4444 removed → root [6666].",
      "Delete 4444 → leaf [1111, 5555] (still ≥ 2 keys).",
      "Insert (2222, John, Talcum Powder, 15000, 3) → leaf [1111, 2222, 5555]; no split needed."
    ],
    "example": [
      "After all 7 inserts\n        [4444 | 6666]\n       /      |       \\\n[1111,3333] [4444,5555] [6666,7777,8888]",
      "After deleting 3333 (merge)        After deleting 4444\n      [6666]                              [6666]\n     /      \\                            /      \\\n[1111,4444,5555] [6666,7777,8888]   [1111,5555] [6666,7777,8888]",
      "After inserting 2222\n          [6666]\n         /      \\\n[1111,2222,5555] → [6666,7777,8888]\nEach leaf entry → pointer to full record, e.g. 2222 → (2222, John, Talcum Powder, 15000, 3)"
    ]
  },
  "fef1be261d47943e": {
    "answer": [
      "S1: no deadlock. The waits-for edges T2 → T1, T2 → T4 and T1 → T3 form no cycle.",
      "S2: deadlock. The waits-for graph has the cycle T1 → T2 → T4 → T1, and also T1 → T2 → T4 → T3 → T1."
    ],
    "points": [
      "Compatibility: S–S compatible; S–X, X–S, X–X conflict. A transaction may upgrade its own S to X if no one else holds S. A blocked transaction’s later request is shown as blocked (it is queued behind its current wait).",
      "S1 trace: T4:X(A) granted; T3:S(C) granted; T1:S(B) granted; T2:X(B) blocked by T1’s S(B) (T2 → T1); T3:X(C) granted (upgrade, T3 is the only holder of C); T2:X(A) blocked by T4’s X(A) (T2 → T4); T1:S(C) blocked by T3’s X(C) (T1 → T3); T4:S(B) granted (compatible with T1’s S(B)).",
      "S1 result: T3 and T4 can run to completion and release locks, then T1 proceeds, then T2 → no deadlock.",
      "S2 trace: T1:X(A) granted; T3:S(D) granted; T3:S(A) blocked by T1 (T3 → T1); T4:X(C) granted; T2:S(B) granted; T4:X(A) blocked by T1 (T4 → T1); T2:X(C) blocked by T4 (T2 → T4); T1:X(B) blocked by T2’s S(B) (T1 → T2); T4:X(D) blocked by T3’s S(D) (T4 → T3).",
      "S2 result: every transaction is waiting; cycle exists → deadlock; the DBMS must abort a victim (e.g. T4, which breaks both cycles)."
    ],
    "example": [
      "S1 request    Result             S2 request    Result\nT4:X(A)       granted            T1:X(A)       granted\nT3:S(C)       granted            T3:S(D)       granted\nT1:S(B)       granted            T3:S(A)       blocked (T1)\nT2:X(B)       blocked (T1)       T4:X(C)       granted\nT3:X(C)       granted (upgrade)  T2:S(B)       granted\nT2:X(A)       blocked (T4)       T4:X(A)       blocked (T1)\nT1:S(C)       blocked (T3)       T2:X(C)       blocked (T4)\nT4:S(B)       granted            T1:X(B)       blocked (T2)\n                                 T4:X(D)       blocked (T3)",
      "Waits-for graphs\nS1:  T2 → T1 → T3,  T2 → T4                 → acyclic, no deadlock\nS2:  T1 → T2 → T4 → T1,  T4 → T3 → T1       → cycle, DEADLOCK"
    ]
  },
  "ea80728ff30e9a87": {
    "answer": [
      "The statement holds because the three-schema architecture separates what the data means from how it is stored and how each user sees it. The internal, conceptual and external levels, with a mapping between each adjacent pair, are what make abstraction work, and they deliver both physical and logical data independence."
    ],
    "points": [
      "Internal level: physical storage structures — files, record layouts, indexes (B+ tree on roll_no), hashing, compression, block placement. Lowest abstraction.",
      "Conceptual level: complete logical structure for the whole organisation — entities, attributes, relationships, constraints (e.g. STUDENT, COURSE, ENROLL with keys), independent of storage.",
      "External level: individual user views — a student sees own grades, faculty sees class lists, accounts sees fee dues; hides irrelevant/sensitive data.",
      "Mappings: external/conceptual mapping translates view queries to the conceptual schema; conceptual/internal mapping translates to storage operations.",
      "Physical data independence example: replacing a heap file with a clustered B+ tree on STUDENT.roll_no or moving tables to SSD — only the conceptual/internal mapping changes, SQL and applications stay unchanged.",
      "Logical data independence example: adding STUDENT.aadhaar_no or splitting STUDENT into STUDENT_PERSONAL and STUDENT_ACADEMIC — the external/conceptual mapping (view definitions) is updated so existing views and programs work unchanged.",
      "Why ‘backbone’: abstraction (users see only what they need), independence (lower maintenance cost), security (views), multiple user perspectives over one database, easier tuning by DBA. Trade-off: mapping overhead and the difficulty of full logical independence."
    ],
    "example": [
      "External   StudentView   FacultyView   AccountsView\n                \\            |             /\n             external/conceptual mapping      ← logical data independence\nConceptual  STUDENT, COURSE, ENROLL, FEE (+ constraints)\n             conceptual/internal mapping       ← physical data independence\nInternal    heap/B+ tree files, indexes, blocks on disk"
    ]
  },
  "2e925dba3bed0cc8": {
    "answer": [
      "Entities: CUSTOMER, ACCOUNT (specialised into SAVINGS_ACCOUNT and CURRENT_ACCOUNT), LOAN and PAYMENT. CUSTOMER and ACCOUNT are linked M:N (joint ownership), CUSTOMER and LOAN M:N (borrowers), and LOAN to PAYMENT 1:N, where PAYMENT is a weak entity identified by its loan."
    ],
    "points": [
      "CUSTOMER(customer_id PK, name (composite), address (composite: street, city, pin)).",
      "ACCOUNT(acc_no PK, balance). Specialisation {SAVINGS_ACCOUNT(interest_rate), CURRENT_ACCOUNT(overdraft_limit)} — disjoint (an account is one type) and total (every account is one of the two).",
      "DEPOSITOR: CUSTOMER M — N ACCOUNT (a customer may hold multiple accounts; an account may be jointly owned). Account side total (every account has ≥ 1 owner); attribute access_date optional.",
      "LOAN(loan_no PK, amount, interest_rate). BORROWER: CUSTOMER M — N LOAN, loan side total.",
      "PAYMENT: weak entity (payment_no partial key, payment_date, payment_amount) identified by LOAN via LOAN_PAYMENT 1 — N, total participation of PAYMENT.",
      "Optional: BRANCH(branch_name, city, assets) with ACCOUNT and LOAN N — 1 BRANCH."
    ],
    "example": [
      "CUSTOMER ══M──<DEPOSITOR>──N══ ACCOUNT (acc_no, balance)\n   │M                               ║ (d, total)\n<BORROWER>                 SAVINGS ─┴─ CURRENT\n   ║N                   (interest_rate) (overdraft_limit)\n  LOAN ══1──<<LOAN_PAYMENT>>──N══ [[PAYMENT]] (payment_no, date, amount)\n\n══ total, ── partial, [[ ]] weak entity, << >> identifying relationship"
    ]
  },
  "635b70e009c51b2d": {
    "answer": [
      "ER-to-relational mapping follows seven standard steps (plus one more for EER specialisation). Applying them to the bank ER diagram of Q2 gives CUSTOMER, ACCOUNT, SAVINGS_ACCOUNT, CURRENT_ACCOUNT, LOAN, PAYMENT, DEPOSITOR and BORROWER."
    ],
    "points": [
      "Step 1 — strong entities: one relation each with simple attributes; composite attributes flattened; choose a PK. CUSTOMER(customer_id, name, street, city, pin), ACCOUNT(acc_no, balance), LOAN(loan_no, amount, interest_rate).",
      "Step 2 — weak entities: relation includes owner’s PK as FK; PK = owner PK + partial key. PAYMENT(loan_no FK, payment_no, payment_date, payment_amount, PK(loan_no, payment_no)), ON DELETE CASCADE.",
      "Step 3 — binary 1:1: put FK in the total-participation side (or merge).",
      "Step 4 — binary 1:N: FK on the N side (e.g. ACCOUNT.branch_name if BRANCH exists).",
      "Step 5 — binary M:N: new relation with both PKs as FKs forming a composite PK. DEPOSITOR(customer_id, acc_no), BORROWER(customer_id, loan_no).",
      "Step 6 — multivalued attributes: separate relation (entity PK + value), e.g. CUSTOMER_PHONE(customer_id, phone).",
      "Step 7 — n-ary relationships: relation with FKs to all participants.",
      "Step 8 — specialisation (EER): option A superclass + subclass tables sharing the PK; option B subclass tables only (valid because total, disjoint); option C single table with type attribute. Using option A: SAVINGS_ACCOUNT(acc_no FK, interest_rate), CURRENT_ACCOUNT(acc_no FK, overdraft_limit)."
    ],
    "example": [
      "CUSTOMER        (customer_id PK, name, street, city, pin)\nACCOUNT         (acc_no PK, balance, acc_type)\nSAVINGS_ACCOUNT (acc_no PK/FK → ACCOUNT, interest_rate)\nCURRENT_ACCOUNT (acc_no PK/FK → ACCOUNT, overdraft_limit)\nDEPOSITOR       (customer_id FK, acc_no FK, PK(customer_id, acc_no))\nLOAN            (loan_no PK, amount, interest_rate)\nBORROWER        (customer_id FK, loan_no FK, PK(customer_id, loan_no))\nPAYMENT         (loan_no FK, payment_no, payment_date, payment_amount,\n                 PK(loan_no, payment_no))"
    ]
  },
  "6ad524f0d2a7c6c7": {
    "answer": [
      "Assumed FDs: StudentID → StudentName; CourseID → CourseName, InstructorID (one instructor per course); InstructorID → InstructorName, InstructorDept. The key is (StudentID, CourseID). The 3NF result is STUDENT(StudentID, StudentName), COURSE(CourseID, CourseName, InstructorID), INSTRUCTOR(InstructorID, InstructorName, InstructorDept) and ENROLLMENT(StudentID, CourseID)."
    ],
    "points": [
      "1NF: assume each cell is atomic (one course per row); if a row stored several courses, split them into separate rows. Key = (StudentID, CourseID) since (StudentID, CourseID)⁺ = all attributes.",
      "Anomalies in the single table: instructor details repeated per student (update anomaly); cannot add a course with no student (insertion anomaly); deleting the last student of a course loses the course and instructor (deletion anomaly).",
      "2NF: remove partial dependencies on part of the key — StudentID → StudentName; CourseID → CourseName, InstructorID, InstructorName, InstructorDept. Result: STUDENT(StudentID, StudentName); COURSE_INFO(CourseID, CourseName, InstructorID, InstructorName, InstructorDept); ENROLLMENT(StudentID, CourseID).",
      "3NF: COURSE_INFO has transitive CourseID → InstructorID → InstructorName, InstructorDept (non-key determines non-key). Split into COURSE(CourseID, CourseName, InstructorID) and INSTRUCTOR(InstructorID, InstructorName, InstructorDept).",
      "Justification: in every final relation each non-key attribute depends on the key, the whole key and nothing but the key; lossless (each split shares a key: CourseID, InstructorID, StudentID); all FDs preserved. Each relation is also in BCNF.",
      "If a course could have several instructors, InstructorID would move into a COURSE_INSTRUCTOR(CourseID, InstructorID) table instead."
    ],
    "example": [
      "Relation     Attributes                                   Key                  FD\nSTUDENT      StudentID, StudentName                       StudentID            StudentID → StudentName\nCOURSE       CourseID, CourseName, InstructorID           CourseID             CourseID → CourseName, InstructorID\nINSTRUCTOR   InstructorID, InstructorName, InstructorDept InstructorID         InstructorID → InstructorName, InstructorDept\nENROLLMENT   StudentID, CourseID                          (StudentID, CourseID) –"
    ]
  },
  "def79bad58792408": {
    "answer": [
      "A multilevel index treats a large single-level index as a sorted file and builds an index on that index, repeating until the top level fits in one disk block. A search then reads one block per level (about log_fo(b) blocks) instead of binary searching the whole index (log₂ b). Static multilevel indexes (ISAM) and dynamic multilevel indexes (B-trees and B+ trees) are the main techniques."
    ],
    "points": [
      "Single-level basics — primary index: on the ordering key field of a sorted file, one entry per block (sparse). Clustering index: on a non-key ordering field, one entry per distinct value. Secondary index: on a non-ordering field, dense, one entry per record (or per value with a pointer block).",
      "Multilevel construction: first (base) level = ordinary index with r₁ entries; second level = primary index on the first level (one entry per block of level 1); continue until top level t fits in a block; t = ⌈log_fo(r₁)⌉ where fo = blocking factor of index (fan-out).",
      "Worked figure: 30,000 index entries, fo = 68 → level 1 has 442 blocks, level 2 has 7 blocks, level 3 has 1 block → 3 index block reads + 1 data block = 4 accesses vs ⌈log₂ 442⌉ + 1 = 10 for binary search.",
      "ISAM (static multilevel): fixed index levels built on a sorted file with overflow chains for inserts. Real-world: older IBM mainframe files, read-mostly archives (library catalog, census records). Weakness: overflow chains grow and degrade performance.",
      "B-tree (dynamic): balanced, nodes 50–100% full, keys + data pointers in all nodes; inserts split, deletes merge, so it never needs reorganisation.",
      "B+ tree (dynamic): data pointers only in leaves, leaves linked; higher fan-out and fast range scans. Real-world: default index in MySQL InnoDB (clustered primary key), PostgreSQL, Oracle; file systems (NTFS, ext4 directories, Btrfs).",
      "Other real-world uses: bank customer lookup by account number (B+ tree), e-commerce price range filter (B+ tree range scan), library catalog by ISBN (ISAM/B+ tree)."
    ],
    "example": [
      "Level 3 (top)    [1 | 2041 | 4100 …]                  1 block\n                       ↓\nLevel 2          [1 … 2040] [2041 … 4099] …              7 blocks\n                       ↓\nLevel 1 (base)   [1,5,9 …] [13,17 …] …                    442 blocks\n                       ↓\nData file        sorted blocks of records\nSearch key 15: read 1 block per level (3) + 1 data block = 4 I/Os"
    ]
  },
  "b7c3b601fb42e2e9": {
    "answer": [
      "Relational algebra answers are given below. Query (iv) needs the aggregate operator 𝒢, and (iii) and (v) use selection on NULL and set difference."
    ],
    "points": [
      "(i) Join BORROW with the selected book, then MEMBER, and project MemberName.",
      "(ii) Select the publisher, join BOOK on PublisherID, project Title.",
      "(iii) ‘Not yet returned’ = ReturnDate IS NULL.",
      "(iv) Group by PublisherName, count BookID (publishers with zero books would need an outer join ⟕).",
      "(v) All BookIDs minus borrowed BookIDs, then join back to get titles."
    ],
    "example": [
      "(i)   π MemberName ( MEMBER ⋈ BORROW ⋈ σ Title='Database Systems' (BOOK) )\n(ii)  π Title ( BOOK ⋈ σ PublisherName='Pearson' (PUBLISHER) )\n(iii) π MemberName ( MEMBER ⋈ σ ReturnDate IS NULL (BORROW) )\n(iv)  PublisherName 𝒢 COUNT(BookID) → TotalBooks ( PUBLISHER ⋈ BOOK )\n(v)   π Title ( BOOK ⋈ ( π BookID (BOOK) − π BookID (BORROW) ) )"
    ]
  },
  "66a534c09b2b7ff2": {
    "answer": [
      "(a) S1 is not conflict serializable (cycle T1 ⇄ T2 on A). S2 is conflict serializable. S3 is not conflict serializable (T1 → T2 on A and T2 → T1 on B).",
      "(b) S2's only edge is T2 → T1 (w2(Y) before w1(Y)), so the equivalent serial schedule is T2, T1.",
      "(c) For T1 = r(A) w(A) r(B) w(B) and T2 = r(B) w(B) r(A) w(A), only the serial schedules T1;T2 or T2;T1 are conflict serializable, so construct T1 then T2, for example by enforcing 2PL."
    ],
    "points": [
      "S1 = r1(A) r2(A) w1(A) w2(A): r1(A)–w2(A) ⇒ T1 → T2; r2(A)–w1(A) ⇒ T2 → T1 → cycle (lost update).",
      "S2 = r1(X) w2(Y) w1(Y) r2(X): r1(X)/r2(X) do not conflict; w2(Y) before w1(Y) ⇒ T2 → T1 → acyclic.",
      "S3 = r1(A) r2(B) w1(B) w2(A) r3(A) w3(B): T1 → T2 (r1(A)–w2(A)), T2 → T1 (r2(B)–w1(B)), T1 → T3 (w1(B)–w3(B)), T2 → T3 (w2(A)–r3(A), r2(B)–w3(B)) → cycle T1 ⇄ T2.",
      "(c) Why only serial works: if T1 is first on A, T2’s r(A) must follow w1(A); then on B, T1 must also precede T2, so T2’s first operation r(B) must follow w1(B) — T1’s last operation → T2 starts after T1 ends. Symmetric argument for T2 first.",
      "(c) Steps used: identify conflicting pairs (A: r/w both; B: r/w both), choose a single direction T1 → T2 for every pair, order operations accordingly; with 2PL, T2’s lock request on B waits until T1 releases B, producing exactly this order.",
      "(d) A schedule is conflict serializable if it is conflict equivalent to a serial schedule. Precedence graph: node per transaction, edge Ti → Tj for each conflicting pair with Ti’s operation first; acyclic ⇔ conflict serializable; a topological sort gives the serial order."
    ],
    "example": [
      "S1: T1 ⇄ T2                          → not CS\nS2: T2 → T1                          → serial T2, T1\nS3: T1 ⇄ T2, T1 → T3, T2 → T3        → not CS",
      "(c) Conflict-serializable schedule (T1 → T2)\nT1: r(A) w(A) r(B) w(B)\nT2:                     r(B) w(B) r(A) w(A)\nGraph: T1 → T2 only"
    ]
  },
  "12426c7185bbf1a6": {
    "answer": [
      "(a) A transaction moves through the states Active, Partially committed, Committed, or Failed then Aborted, and finally Terminated.",
      "(b) Shadow paging keeps two page tables. Updates go to fresh copies of pages through the current page table, while the shadow table preserves the old database. Commit atomically switches the database pointer to the current table, so no undo or redo log is needed."
    ],
    "points": [
      "Active: executing reads/writes. Partially committed: final statement executed; output may still be in buffers. Committed: changes permanent (commit record on disk). Failed: normal execution cannot proceed (error, constraint violation, crash, deadlock victim). Aborted: rolled back to the state before the transaction; may be restarted (if failure was not logical) or killed. Terminated: left the system.",
      "Transitions: Active → Partially committed → Committed; Active → Failed; Partially committed → Failed (e.g. write to disk fails); Failed → Aborted; Committed/Aborted → Terminated.",
      "Shadow paging working: database = n pages addressed through a page table. At transaction start, copy current page table to shadow page table (saved on disk). For write(X): allocate free page, copy and modify, point the current table to the new page. Commit: flush modified pages and current table, then atomically overwrite the disk pointer to make the current table the new shadow.",
      "Recovery: after a crash before commit, the shadow table still describes the old consistent database — discard new pages (garbage collect). No undo, no redo (NO-UNDO/NO-REDO).",
      "Significance: very fast recovery, no log processing; used in some embedded databases, CouchDB/LMDB-style copy-on-write B-trees and file systems (ZFS/Btrfs).",
      "Drawbacks: copying large page tables, data fragmentation (loss of locality), garbage collection, commit overhead (flush many pages), hard to support concurrent transactions without logs."
    ],
    "example": [
      "Transaction state diagram\n           ┌──────────────→ Partially committed ──→ Committed ──┐\nActive ────┤                      │                             ├──→ Terminated\n           └──→ Failed ←──────────┘                             │\n                  └──→ Aborted ─────────────────────────────────┘",
      "Shadow table   Pages        Current table\n1 ──────────→ P1 ←──────── 1\n2 ──────────→ P2  (old)\n              P2' (new) ←── 2\n3 ──────────→ P3 ←──────── 3\nCommit = switch DB pointer to current table"
    ]
  },
  "4f7c2727cd0fae91": {
    "answer": [
      "Each transaction locks its first item and then needs an item held by the next transaction (T1: A then B; T2: B then C; T3: C then A). If all three take their first lock before any requests its second, the waits form the cycle T1 → T2 → T3 → T1, which is a deadlock.",
      "Avoid it with a global lock order (always A < B < C), conservative 2PL, or wait-die/wound-wait. Resolve it by detecting the cycle in the wait-for graph and rolling back a victim."
    ],
    "points": [
      "(i) A deadlock-free 2PL schedule: T1 locks A and B, finishes, unlocks; T2 then locks B and C; T3 locks C, then A. Each transaction obeys growing then shrinking phases (equivalent to serial T1, T2, T3).",
      "(ii) Deadlock point: after X1(A), X2(B), X3(C) are granted, the requests X1(B), X2(C), X3(A) all block — no transaction can enter its shrinking phase, so none releases a lock.",
      "Resource ordering: T3 must request A before C. Then T3 blocks on A (held by T1) without holding C, so T2 gets C, finishes, T1 gets B, finishes, and T3 proceeds — no cycle is possible.",
      "Conservative (static) 2PL: each transaction acquires all its locks (e.g. T1: A, B) atomically before starting; if any is unavailable it holds none → no hold-and-wait.",
      "Timestamp schemes with TS(T1) < TS(T2) < TS(T3): wait-die — T3 (younger) requesting A from T1 dies and restarts; wound-wait — when T1 requests B from T2, T1 wounds T2.",
      "Detection: maintain wait-for graph, find the cycle, abort the victim with least work (e.g. T3), release C → T2 continues → chain resolves; restart T3 later. Timeouts as a simple fallback."
    ],
    "example": [
      "Deadlocking 2PL schedule\nTime  T1             T2             T3\n1     X(A) R/W A\n2                    X(B) R/W B\n3                                   X(C) R/W C\n4     X(B) → wait T2\n5                    X(C) → wait T3\n6                                   X(A) → wait T1\nWait-for graph: T1 → T2 → T3 → T1   ⇒ deadlock",
      "Deadlock-free 2PL schedule\nT1: X(A) R(A) W(A) X(B) R(B) W(B) U(A) U(B) commit\nT2:                                      X(B) R(B) W(B) X(C) R(C) W(C) U(B) U(C) commit\nT3:                                                                       X(C) R(C) W(C) X(A) R(A) W(A) U(C) U(A) commit"
    ]
  },
  "77a5964e1811c767": {
    "answer": [
      "T1 requests IX(Database), IX(Table A), IX on each affected page, then X on each tuple it updates. T2 requests IS(Database) and then S(Table A). S and IX are incompatible on Table A, so whichever comes second waits at the table level, before it holds any tuple locks.",
      "Intention locks detect the conflict at one coarse node instead of tuple by tuple, which removes the partial-lock deadlocks of a scan meeting an updater. MGL also lets transactions working on different parts of a table lock only what they touch."
    ],
    "points": [
      "Lock rules: lock a node in S or IS only if the parent is held in IS or IX; lock in X, IX or SIX only if the parent is held in IX or SIX; lock top-down, release bottom-up; follow 2PL.",
      "(i) T1 (update tuples t5, t9 on page p2): IX(DB) → IX(A) → IX(p2) → X(t5), X(t9). Alternative: SIX(A) if T1 also reads the whole table.",
      "(i) T2 (scan all tuples): IS(DB) → S(A) — one lock covers every page and tuple implicitly.",
      "If T1 first: T2’s S(A) conflicts with T1’s IX(A) → T2 waits until T1 commits. If T2 first: T1’s IX(A) conflicts with S(A) → T1 waits. In both cases the waiting transaction holds nothing inside Table A.",
      "(ii) Without intention locks, T2 would S-lock tuples one by one; it could hold S on t1…t8 and request t9 (X-locked by T1), while T1 requests X on t3 (S-locked by T2) → deadlock. With IX/S at table level, the conflict is caught before any tuple lock is taken, so this cycle cannot form between them.",
      "(iii) Compared with table-level only locking: two updaters of different tuples both get IX(A) (IX–IX compatible) and run in parallel, readers of other tuples use IS; with plain table locks each would X-lock the whole table and serialize.",
      "Compared with tuple-only locking: a full-table scan needs one lock instead of millions (lower lock-manager overhead), and the lock manager checks conflicts quickly at the coarse node. Lock escalation can convert many tuple locks into a table lock when needed."
    ],
    "example": [
      "Compatibility matrix (✓ = compatible)\n       IS   IX   S    SIX  X\nIS     ✓    ✓    ✓    ✓    ✗\nIX     ✓    ✓    ✗    ✗    ✗\nS      ✓    ✗    ✓    ✗    ✗\nSIX    ✓    ✗    ✗    ✗    ✗\nX      ✗    ✗    ✗    ✗    ✗",
      "Database        T1: IX        T2: IS     (compatible)\n └ Table A      T1: IX        T2: S      (conflict → one waits)\n    └ Page p2   T1: IX\n       └ t5,t9  T1: X"
    ]
  },
  "925c142986df81cb": {
    "answer": [
      "CAP: in a distributed NoSQL database, when a network partition occurs the system can stay consistent (every read sees the latest write) or available (every request gets a response), but not both. Because partitions are unavoidable at scale, the design choice is effectively CP vs AP, which drives replication, quorum and conflict-resolution decisions."
    ],
    "points": [
      "C — consistency (single up-to-date copy semantics); A — availability (every non-failed node answers); P — partition tolerance (system works despite lost messages).",
      "CP design (HBase, MongoDB with majority writes, etcd/Zookeeper): single leader or majority quorum; minority side rejects writes/reads → correctness first. Use: inventory, banking, configuration.",
      "AP design (Cassandra, DynamoDB, CouchDB, Riak): any replica accepts reads/writes; replicas reconcile later with vector clocks, last-write-wins or CRDTs; hinted handoff and read repair → eventual consistency (BASE). Use: shopping carts, social feeds, sensor data.",
      "Trade-off levers: replication factor N, read quorum R, write quorum W — R + W > N gives strong consistency, small R/W gives low latency and high availability.",
      "Data modelling impact: AP systems favour denormalised, idempotent, commutative updates (counters, sets) because concurrent conflicting writes may occur.",
      "PACELC refinement: if Partition → choose A or C; Else → choose Latency or Consistency (e.g. Cassandra PA/EL, HBase PC/EC).",
      "Many systems are tunable per operation (Cassandra consistency ONE / QUORUM / ALL; DynamoDB eventually vs strongly consistent reads)."
    ],
    "example": [
      "N = 3 replicas\nW = 2, R = 2 → R + W = 4 > 3 → every read overlaps the latest write (CP-leaning)\nW = 1, R = 1 → fastest, survives 2 node failures, may read stale data (AP-leaning)"
    ]
  },
  "57927088a71111eb": {
    "answer": [
      "There are four major NoSQL types. Key-value stores keep opaque values by key, column-family stores keep sparse rows of column families, document stores keep nested JSON documents, and graph databases keep nodes and edges. Each one fits a different access pattern."
    ],
    "points": [
      "Key-value — model: dictionary key → value (string, blob, JSON). Usage: caching, session management, shopping carts, leaderboards (Redis sorted sets), feature flags. Advantages: O(1) access, very low latency, simple horizontal scaling, high availability. Limits: no queries by value, no relationships.",
      "Column-family (wide-column) — model: row key → column families → columns with timestamps; rows can have different columns; sorted by key. Usage: time-series/IoT, event logging, messaging (Facebook inbox history), analytics. Advantages: massive write throughput (LSM trees), efficient range scans by key, linear scalability, tunable consistency. Limits: query-driven modelling, limited joins/ad-hoc queries.",
      "Document — model: collections of JSON/BSON documents with nested arrays/objects and flexible schema. Usage: product catalogs, CMS/blogs, user profiles, mobile back-ends. Advantages: natural mapping to application objects, secondary indexes, rich queries and aggregation, schema evolution without migrations. Limits: cross-document joins and multi-document transactions are costlier.",
      "Graph — model: nodes, edges and properties; relationships are first-class. Usage: social networks (friends-of-friends), recommendations, fraud detection, network topology, knowledge graphs. Advantages: constant-time traversal per hop, expressive pattern queries (Cypher). Limits: harder to shard, less suited to bulk aggregate analytics.",
      "Common advantages over RDBMS: schema flexibility, horizontal scale-out, high availability via replication; trade-off — weaker consistency/transactions in many systems (BASE)."
    ],
    "example": [
      "Key-value:     SET user:42:session \"{cart: c17}\"\nColumn-family: row 'sensor7' → readings:{2025-01-01T10:00 = 21.4, 10:01 = 21.6, …}\nDocument:      {\"_id\": 101, \"name\": \"Phone\", \"specs\": {\"ram\": \"8GB\"}, \"tags\": [\"5G\"]}\nGraph:         (Asha)-[:FRIEND]->(Ravi)-[:BOUGHT]->(Phone)"
    ]
  },
  "18bf469dba4e3b6c": {
    "answer": [
      "For Z-Bank, the internal level stores accounts and transaction histories efficiently, the conceptual level defines the complete logical banking schema, and the external level gives customers, tellers, managers and auditors their own views. The two mappings between levels give data independence, and views, together with the DBMS components, give security and efficient management."
    ],
    "points": [
      "Internal level: ACCOUNT stored in a file clustered by account_no with a B+ tree index; TRANSACTION history partitioned by month and indexed on (account_no, txn_time); write-ahead log and backups on separate disks; encryption at rest.",
      "Conceptual level: CUSTOMER(cust_id, name, address, kyc_status), ACCOUNT(acc_no, cust_id, type, balance, branch_id), TRANSACTION(txn_id, acc_no, txn_time, type, amount), BRANCH(branch_id, city), LOAN(loan_no, cust_id, amount); constraints such as balance ≥ 0 for savings, FKs, triggers for audit.",
      "External level: Customer view — own accounts, balance, mini-statement; Teller view — deposits/withdrawals for accounts at branch; Manager view — branch totals, loan portfolio; Auditor view — read-only full transaction history.",
      "Data independence: adding an index or partitioning TRANSACTION by month changes only the internal level (physical independence); adding a column ACCOUNT.nominee or splitting CUSTOMER is hidden from existing views (logical independence).",
      "Security: users are granted privileges on views, not base tables; a customer’s view is restricted to WHERE cust_id = CURRENT_USER; sensitive columns (PAN, KYC docs) hidden.",
      "Efficient management: DBA tunes storage without touching applications; one integrated schema avoids redundancy; the optimizer uses internal statistics to execute view queries efficiently."
    ],
    "example": [
      "External   CustomerView   TellerView   ManagerView   AuditorView\n                 \\            |             |            /\n              external / conceptual mapping  (logical independence, view security)\nConceptual  CUSTOMER, ACCOUNT, TRANSACTION, BRANCH, LOAN + constraints\n              conceptual / internal mapping  (physical independence)\nInternal    B+ tree on acc_no, partitioned TXN files, WAL log, encrypted blocks"
    ]
  },
  "f740ddddd1b4bdbb": {
    "answer": [
      "Three DBMS components keep concurrent banking transactions consistent and recoverable: the transaction manager, the concurrency-control manager (lock manager or scheduler), and the recovery manager working with the log manager and buffer manager. Together they enforce ACID."
    ],
    "points": [
      "Transaction manager: marks BEGIN/COMMIT/ROLLBACK, coordinates commit, ensures atomicity — a withdrawal either completes fully or not at all.",
      "Concurrency-control manager (lock manager / scheduler): applies strict 2PL or MVCC so simultaneous deposits and withdrawals on the same account do not cause lost updates or dirty reads → isolation and consistency; handles deadlocks.",
      "Log manager: writes log records (old and new values) using write-ahead logging, and forces the commit record to disk at commit.",
      "Recovery manager: after a crash, uses the log and checkpoints to redo committed and undo uncommitted transactions → durability and atomicity; also restores from backup after media failure.",
      "Buffer manager: decides when dirty pages are flushed (steal/no-force) while respecting WAL.",
      "Justification: in a multi-user bank, without locking two withdrawals could both see ₹10,000 and overdraw; without logging a crash after debit but before credit would lose money. These components make transactions reliable and allow high concurrency."
    ],
    "example": [
      "T1: withdraw 2000 from A        T2: deposit 500 to A\nlock X(A) → T2 waits            (lock manager → isolation)\nlog <T1, A, 10000, 8000>        (log manager → WAL)\ncommit → force log              (transaction manager → atomicity)\ncrash later → redo T1 from log  (recovery manager → durability)"
    ]
  },
  "c69c7fe1d6f9f0fd": {
    "answer": [
      "Core hierarchy: FACULTY 1:N SCHOOL 1:N PROGRAM M:N COURSE. COURSE_OFFERING is a weak entity of COURSE identified by (semester, year). LECTURER M:N COURSE_OFFERING (TEACHES). STUDENT N:1 PROGRAM (ENROLLED_IN) and STUDENT M:N COURSE_OFFERING (REGISTERS, with grade). STUDENT has a disjoint, total specialisation into UG and PG, PG is SUPERVISED_BY a LECTURER, and there is a recursive PREREQUISITE relationship on COURSE."
    ],
    "points": [
      "Assumptions: a school belongs to exactly one faculty; a program belongs to exactly one school; a course can be part of many programs (core in some, elective in others); each student is in exactly one program; an offering is unique per course, semester and year; dean and head are names (or could be FKs to LECTURER).",
      "FACULTY(FacultyID PK, name, dean) 1 — N SCHOOL(SchoolID PK, name, head): HAS, total on SCHOOL.",
      "SCHOOL 1 — N PROGRAM(ProgramID PK, name, duration, degree_type): OFFERS, total on PROGRAM.",
      "PROGRAM M — N COURSE(CourseID PK, title, credits, semester_offered): CONSISTS_OF with attribute course_type ∈ {core, elective}. Electives open to any program are modelled by course_type = elective (or a separate disjoint specialisation of COURSE into CORE/ELECTIVE).",
      "PREREQUISITE: recursive COURSE M — N COURSE with roles ‘prerequisite’ and ‘dependent’.",
      "COURSE_OFFERING: weak entity, partial key (semester, year), derived attribute num_enrolled (count of registrations); identifying relationship OF_COURSE (COURSE 1 — N COURSE_OFFERING, total).",
      "LECTURER(LecturerID PK, name, email, specialization) M — N COURSE_OFFERING: TEACHES (offering total — at least one lecturer).",
      "STUDENT(StudentID PK, name, email, year_of_study) N — 1 PROGRAM: ENROLLED_IN (total on student).",
      "REGISTERS: STUDENT M — N COURSE_OFFERING with grade ∈ {A, B, C, D, F}. Aggregation option: treat REGISTERS as an aggregate if grades must link to an assessment entity.",
      "Specialisation STUDENT → {UNDERGRADUATE, POSTGRADUATE(thesis_title)}: disjoint, total. SUPERVISED_BY: POSTGRADUATE N — 1 LECTURER (partial on PG — ‘may have’)."
    ],
    "example": [
      "FACULTY ─1─<HAS>─N═ SCHOOL ─1─<OFFERS>─N═ PROGRAM ─M─<CONSISTS_OF (core/elective)>─N─ COURSE ⟲ PREREQUISITE\n                                              ║1                                            │1\n                                        <ENROLLED_IN>                               <<OF_COURSE>>\n                                              │N                                            ║N\n                                           STUDENT ─M─<REGISTERS (grade)>─N─ [[COURSE_OFFERING]] (semester, year, [num_enrolled])\n                                              ║ (d, total)                                   ║N\n                                     UNDERGRADUATE  POSTGRADUATE (thesis_title)          <TEACHES>\n                                                         │N                                  │M\n                                                  <SUPERVISED_BY>──────1────────────── LECTURER\n\n═ total participation, [[ ]] weak entity, << >> identifying relationship, [ ] derived attribute"
    ]
  },
  "e0634f1fd38bcee4": {
    "answer": [
      "(a) FDs (adding Marks M): S → SN, D; SN → S; D → DN, DD; DN → D; C → CN, CR; CN → C; S C → SM, Y, M; C SM Y → CI. The canonical cover is the singleton-RHS form of these, with no extraneous attributes and no redundant FDs. The key is (S, C).",
      "(b) A → G follows: A → BC, decomposition, transitivity through B → D, union to get A → CD, then transitivity through CD → E, E → F and F → G."
    ],
    "points": [
      "Mapping assumptions → FDs: unique student name ⇒ S → SN and SN → S; single department ⇒ S → D; unique dept name and dean ⇒ D → DN, DN → D, D → DD; unique course name and credits ⇒ C → CN, CN → C, C → CR; student-course determines semester and year ⇒ SC → SM, SC → Y; one instructor per course per semester ⇒ C SM Y → CI (C SM → CI if the semester label already includes the year); marks ⇒ SC → M.",
      "Step 1 — decompose RHS to single attributes: S → SN, S → D, SN → S, D → DN, D → DD, DN → D, C → CN, C → CR, CN → C, SC → SM, SC → Y, SC → M, C SM Y → CI.",
      "Step 2 — remove extraneous LHS attributes: in SC → SM, S⁺ = {S, SN, D, DN, DD} and C⁺ = {C, CN, CR} — neither alone gives SM, so both needed (same for Y, M). In C SM Y → CI, no proper subset determines CI.",
      "Step 3 — remove redundant FDs: test each X → A by computing X⁺ without it; none can be derived from the others (e.g. S → D is the only source of D from S) → the set above is the canonical cover.",
      "Candidate keys: (S, C); because S ↔ SN and C ↔ CN, also (SN, C), (S, CN), (SN, CN).",
      "Part (b) derivation is shown in the table; rules used: decomposition, transitivity, union."
    ],
    "example": [
      "Step  Derived       From              Rule\n1     A → BC        given             –\n2     A → B         1                 decomposition\n3     A → C         1                 decomposition\n4     A → D         2, B → D          transitivity\n5     A → CD        3, 4              union\n6     A → E         5, CD → E         transitivity\n7     A → F         6, E → F          transitivity\n8     A → G         7, F → G          transitivity   ∎"
    ]
  },
  "ea96c70214d65837": {
    "answer": [
      "(i) The table repeats order data across multi-valued cells, which causes update, insertion and deletion anomalies (examples below).",
      "(ii) Product_ID and Qty_Supplied hold lists, so the table is not even in 1NF. After making it atomic, the key is (SO_ID, Product_ID). Removing the partial dependency gives SUPPLY_ORDER(SO_ID, Farm_ID, Sdate, Total_Price) and ORDER_LINE(SO_ID, Product_ID, Qty_Supplied), which are in 3NF (and BCNF)."
    ],
    "points": [
      "Update anomaly: when flattened, order 102 appears in 3 rows; changing its Sdate or Total_Price must be done in every row — missing one leaves inconsistent dates. In list form, changing P203’s quantity in 102 requires editing positions inside strings ‘P201, P203, P205’ / ‘4,2,4’.",
      "Insertion anomaly: a new product P209 or a new farm F06 cannot be recorded until an order exists (SO_ID is part of the key / required).",
      "Deletion anomaly: deleting order 105 removes the only record that product P207 was ever supplied and that farm F05 exists.",
      "Assumptions: each SO_ID belongs to one farm and one date; Total_Price is the order total; product details (name, unit price) and farm details are not in this table (if present they go to PRODUCT and FARM).",
      "1NF: one row per product per order — (SO_ID, Farm_ID, Sdate, Product_ID, Qty_Supplied, Total_Price); candidate key (SO_ID, Product_ID).",
      "FDs: SO_ID → Farm_ID, Sdate, Total_Price; (SO_ID, Product_ID) → Qty_Supplied.",
      "2NF: SO_ID → Farm_ID, Sdate, Total_Price is a partial dependency → move to SUPPLY_ORDER(SO_ID PK, Farm_ID, Sdate, Total_Price); keep ORDER_LINE(SO_ID, Product_ID, Qty_Supplied) with composite PK.",
      "3NF: no non-key attribute determines another non-key attribute in either table (Farm_ID does not determine Sdate or Total_Price) → already 3NF. If Farm_Name/location existed, SO_ID → Farm_ID → Farm_Name would be transitive → separate FARM(Farm_ID, Farm_Name). Total_Price is derivable if PRODUCT(Product_ID, unit_price) exists, and can then be computed instead of stored."
    ],
    "example": [
      "SUPPLY_ORDER                              ORDER_LINE\nSO_ID  Farm_ID  Sdate       Total_Price   SO_ID  Product_ID  Qty_Supplied\n101    F01      6-10-2025   10000         101    P201        4\n102    F02      6-10-2025   15000         101    P202        3\n103    F03      4-11-2024   13000         102    P201        4\n104    F04      8-10-2024   11000         102    P203        2\n105    F05      7-10-2025   5000          102    P205        4\n                                          103    P203        3\n                                          103    P202        2\n                                          104    P201        6\n                                          104    P205        4\n                                          105    P207        1"
    ]
  },
  "211e8f1443575b39": {
    "answer": [
      "Order 4 means at most 3 keys per node. A full leaf (4 keys) splits 2 | 2 and copies the right leaf's first key up; a full internal node (4 keys) splits and pushes its third key up. Lexicographic order: Aaron < Harini < Harish < Ishan < Kapil < Noushad < Ritan < Robert < Rohit < Salman < Sana < Vincent < Vinu < Yash.",
      "Final tree: root [Ritan] over [Harish | Kapil] and [Rohit | Vincent]. Deleting Sana and Vincent needs no restructuring (Vincent's separator becomes Vinu); deleting Rohit merges two leaves."
    ],
    "points": [
      "Ritan, Harini, Vinu → single leaf [Harini, Ritan, Vinu].",
      "Noushad → leaf overflow [Harini, Noushad, Ritan, Vinu] → split [Harini, Noushad] | [Ritan, Vinu]; Ritan promoted → root [Ritan].",
      "Harish → [Harini, Harish, Noushad]; Vincent → [Ritan, Vincent, Vinu].",
      "Kapil → [Harini, Harish, Kapil, Noushad] splits → [Harini, Harish] | [Kapil, Noushad]; Kapil promoted → root [Kapil, Ritan].",
      "Rohit → [Ritan, Rohit, Vincent, Vinu] splits → [Ritan, Rohit] | [Vincent, Vinu]; Vincent promoted → root [Kapil, Ritan, Vincent].",
      "Aaron → [Aaron, Harini, Harish]. Ishan → [Aaron, Harini, Harish, Ishan] splits → [Aaron, Harini] | [Harish, Ishan]; Harish promoted → root [Harish, Kapil, Ritan, Vincent] overflows → internal split: Ritan moves up to new root; children [Harish, Kapil] and [Vincent]. Height becomes 3.",
      "Yash → [Vincent, Vinu, Yash]. Robert → [Ritan, Robert, Rohit]. Salman → [Ritan, Robert, Rohit, Salman] splits → [Ritan, Robert] | [Rohit, Salman]; Rohit promoted → [Rohit, Vincent]. Sana → [Rohit, Salman, Sana].",
      "Delete Sana: leaf [Rohit, Salman] keeps ≥ 2 keys → no change in structure.",
      "Delete Vincent: leaf [Vinu, Yash] still has 2 keys; separator Vincent replaced by Vinu → [Rohit, Vinu].",
      "Delete Rohit: leaf [Salman] underflows (< 2); siblings [Ritan, Robert] and [Vinu, Yash] have only 2 keys, so they cannot lend → merge with left: [Ritan, Robert, Salman]; separator Rohit removed → parent [Vinu]."
    ],
    "example": [
      "Final tree after 14 insertions\n                          [Ritan]\n               /                        \\\n       [Harish | Kapil]               [Rohit | Vincent]\n      /       |        \\            /        |          \\\n[Aaron,Harini][Harish,Ishan][Kapil,Noushad] [Ritan,Robert][Rohit,Salman,Sana][Vincent,Vinu,Yash]",
      "Delete Sana                       → leaf [Rohit, Salman]; no merge or redistribution\nDelete Vincent                    → leaf [Vinu, Yash]; parent [Rohit | Vinu]\nDelete Rohit (merge)\n                          [Ritan]\n               /                        \\\n       [Harish | Kapil]                  [Vinu]\n      /       |        \\               /        \\\n[Aaron,Harini][Harish,Ishan][Kapil,Noushad] [Ritan,Robert,Salman] [Vinu,Yash]"
    ]
  },
  "c25e89d50dc86d50": {
    "answer": [
      "(a) With h(K) = K mod 7, 2 records per bucket and overflow chaining, B5 receives three keys, so 2987 goes to an overflow block. (b)(i) With 7 single-record slots and quadratic probing, only 7 keys fit; 2987, 4756, 6890 and 7543 are not mapped. (ii) Use a prime table size at least twice the number of keys, for example m = 23 with h(K) = K mod 23; with quadratic probing all 11 keys are placed."
    ],
    "points": [
      "Hash values (K mod 7): 1025 → 3, 2378 → 5, 3541 → 6, 4680 → 4, 5297 → 5, 6432 → 6, 7189 → 0, 2987 → 5, 4756 → 3, 6890 → 2, 7543 → 4.",
      "Quadratic probing: slot = (h + i²) mod 7, i = 0, 1, 2, …",
      "5297: 5 ✗, 6 ✗, (5+4) mod 7 = 2 ✓. 6432: 6 ✗, 0 ✓. 7189: 0 ✗, 1 ✓. Table is now full.",
      "2987, 4756, 6890, 7543 cannot be placed: the table has only 7 slots for 11 keys, and in a size-7 table i² mod 7 ∈ {0, 1, 2, 4}, so each key can probe only 4 distinct slots even when space exists.",
      "Fix: (1) table size m prime and m ≥ 2n (load factor ≤ 0.5) — for prime m with load factor ≤ ½ quadratic probing is guaranteed to find a free slot; (2) h(K) = K mod 23; (3) alternatively double hashing or chaining.",
      "Probes with m = 23: 7189: 13 ✗ → 14 ✓; 6890: 13 ✗, 14 ✗, 13+4 = 17 ✓; 7543: 22 ✗ → (22+1) mod 23 = 0 ✓; all others land at their home slot."
    ],
    "example": [
      "(a) Buckets (capacity 2)\nB0: 7189\nB1: –\nB2: 6890\nB3: 1025, 4756\nB4: 4680, 7543\nB5: 2378, 5297 → overflow block: 2987\nB6: 3541, 6432",
      "(b)(i) Quadratic probing, 7 slots\nSlot: 0     1     2     3     4     5     6\nKey:  6432  7189  5297  1025  4680  2378  3541\nNot mapped: 2987, 4756, 6890, 7543",
      "(b)(ii) h(K) = K mod 23, quadratic probing\nSlot  0     7     9     11    13    14    15    17    18    20    22\nKey   7543  5297  2378  4680  1025  7189  6432  6890  4756  2987  3541\n(other slots empty; all 11 keys mapped)"
    ]
  },
  "101527743d6c79dd": {
    "answer": [
      "(a) Yes. The edges T1 → T2, T1 → T3, T1 → T4, T2 → T3, T2 → T4, T3 → T5 and T4 → T5 contain no cycle, so the schedule is conflict serializable. Valid serial schedules: T1, T2, T3, T4, T5 and T1, T2, T4, T3, T5.",
      "(b) T1 and T3 committed before the crash; T2 and T4 did not. Under NO-UNDO/REDO, redo T1 and T3 and ignore T2 and T4. Under UNDO/REDO, undo T4 and T2, then redo T1 and T3. The final value of A is ₹700 under both protocols."
    ],
    "points": [
      "(a) T1 has no incoming edge → first; then T2 (only depends on T1); T3 and T4 both depend only on T1, T2 → either order; T5 depends on T3 and T4 → last. (The T4–T5 edge is read as T4 → T5.)",
      "(b) Value trace: T1 reads 1000, writes 800, commits (t5). T2 read 1000 at t2 and writes 1500 at t8 (stale read). T3 reads 800 at t6, writes 700 at t10, commits. T4 reads 700, writes 1000 at t14. Crash at t15.",
      "NO-UNDO/REDO (deferred update): log holds only new values; writes reach the database only after commit. Recovery: redo committed T1 (A = 800) then T3 (A = 700) in log order; T2, T4 never changed the database → nothing to undo. A = 700.",
      "UNDO/REDO (immediate update): log holds old and new values. Undo uncommitted transactions in reverse log order: undo T4 (A ← 700), undo T2 (A ← 800); then redo committed in forward order: T1 (A ← 800), T3 (A ← 700). A = 700.",
      "Observation: T3 overwrote a value written by uncommitted T2 (non-strict schedule) and T2’s update was based on a stale read (lost-update pattern). Strict 2PL would have prevented this."
    ],
    "example": [
      "NO-UNDO/REDO log           UNDO/REDO log\n<T1, start>                <T1, start>\n<T2, start>                <T2, start>\n<T1, A, 800>               <T1, A, 1000, 800>\n<T1, commit>               <T1, commit>\n<T3, start>                <T3, start>\n<T2, A, 1500>              <T2, A, 800, 1500>\n<T3, A, 700>               <T3, A, 1500, 700>\n<T3, commit>               <T3, commit>\n<T4, start>                <T4, start>\n<T4, A, 1000>              <T4, A, 700, 1000>\n— crash —                  — crash —\nRedo: T1, T3               Undo: T4, T2   Redo: T1, T3\nFinal A = ₹700             Final A = ₹700"
    ]
  },
  "9fbf2716979557d6": {
    "answer": [
      "(a) Wait-for graph: T2 → T1 (waiting for X) and T3 → T1 (waiting for Y). There is no cycle, because T1 is not waiting for anyone, so there is no deadlock. T1 finishes and releases X and Y, then T2 and T3 proceed.",
      "(b) Use strict, conservative 2PL. Each transaction acquires all its locks before it starts (no deadlock possible) and keeps exclusive locks until commit (no dirty reads, so no cascading rollback). T2 therefore reads X only after T1 commits."
    ],
    "points": [
      "(a) Deadlock requires a cycle; T3 holds Z but nobody waits for Z, and T1 holds X, Y and waits for nothing.",
      "(b) T1 needs X(X) and X(Y) (both written). T2 needs S(X) (read only) and X(Z) (written).",
      "T1 growing phase: lock-X(X), lock-X(Y) at t1 → lock point right after lock-X(Y). Shrinking phase: unlock X and Y after commit.",
      "T2 growing phase: lock-X(Z) granted at t3; lock-S(X) must wait until T1 releases X(X) at commit → lock point when S(X) is granted. Then R(X) sees T1’s committed value, so Display(X + Z) is consistent; shrinking: unlock after commit.",
      "Why no rollback: strict 2PL prevents T2 from reading uncommitted X (no cascading abort). Why no deadlock: conservative locking (predeclare and lock all items upfront) removes hold-and-wait; also both lock in the same order X < Y < Z.",
      "Variant: conservative strict 2PL (rigorous if shared locks are also held to commit)."
    ],
    "example": [
      "Time  T1                         T2\nt1    lock-X(X); lock-X(Y)  ← lock point\n      R(X); X = X + 200\nt3    W(X)                       lock-X(Z); lock-S(X) → WAIT\nt4    R(Y)\nt5    Y = Y − 100\nt6    W(Y); commit; unlock(X); unlock(Y)\nt7                               (S(X) granted ← lock point) R(Z); R(X)\n                                 Z = Z − 150; W(Z); Display(X + Z)\n                                 commit; unlock(X); unlock(Z)"
    ]
  },
  "1f0c4008b75602fc": {
    "answer": [
      "(a) W1(X) is rejected because TS(T1) = 10 < ReadTS(X) = 25, so T1 is rolled back (and restarted later with a new timestamp). All of T2's operations execute. The committed schedule contains only T2's operations, so it is conflict serializable, equivalent to T2 followed by the restarted T1.",
      "(b) Under Thomas's write rule, T1 is still rolled back at W1(A), because 15 < ReadTS(A) = 30. The rule only lets an obsolete write be ignored when TS(T) < WriteTS(X) but TS(T) ≥ ReadTS(X), which never happens here. T2 commits."
    ],
    "points": [
      "Basic TO rules: Read(X) by T — if TS(T) < WTS(X) reject, else RTS(X) = max(RTS(X), TS(T)). Write(X) — if TS(T) < RTS(X) or TS(T) < WTS(X) reject; else WTS(X) = TS(T).",
      "(a) t1 R1(X): 10 ≥ WTS 0 → RTS(X) = 10. t2 R2(X): RTS(X) = 25. t3 W1(X): 10 < RTS 25 → reject, roll back T1. t4 W2(X): 25 ≥ 25 and ≥ 0 → WTS(X) = 25. t5 R2(Y): RTS(Y) = 25. t6 W1(Y): T1 already aborted (it would also fail: 10 < RTS(Y) = 25). t7 T2 commits.",
      "Modified TO (Thomas write rule): Write(X) by T — if TS(T) < RTS(X) → roll back; else if TS(T) < WTS(X) → ignore the write (it is obsolete), continue; else write.",
      "(b) t1 R1(A): RTS(A) = 15. t2 R2(A): RTS(A) = 30. t3 W1(A): 15 < RTS 30 → roll back T1 (Thomas rule does not apply: a younger transaction has already read A). t4 W2(A): WTS(A) = 30. t5 R2(B): RTS(B) = 30. t6 W1(B): not executed (T1 aborted; would also violate 15 < RTS(B)). t7 W2(B): 30 ≥ 30 → WTS(B) = 30. t8 T2 commits.",
      "Where Thomas’s rule would help: e.g. if T2 had written A (WTS = 30) without reading it, T1’s later W1(A) would simply be ignored and T1 would not be rolled back."
    ],
    "example": [
      "(a) Basic TO                  RTS(X) WTS(X) RTS(Y) WTS(Y)\nt1 R1(X)  executed           10     0      0      0\nt2 R2(X)  executed           25     0      0      0\nt3 W1(X)  REJECT → abort T1  25     0      0      0\nt4 W2(X)  executed           25     25     0      0\nt5 R2(Y)  executed           25     25     25     0\nt6 W1(Y)  — (T1 aborted)     25     25     25     0",
      "(b) Thomas write rule         RTS(A) WTS(A) RTS(B) WTS(B)\nt1 R1(A)  executed           15     0      0      0\nt2 R2(A)  executed           30     0      0      0\nt3 W1(A)  REJECT → abort T1  30     0      0      0\nt4 W2(A)  executed           30     30     0      0\nt5 R2(B)  executed           30     30     30     0\nt6 W1(B)  — (T1 aborted)     30     30     30     0\nt7 W2(B)  executed           30     30     30     30"
    ]
  },
  "ad58950af35a69ea": {
    "answer": [
      "(a) Key-value stores map a unique key to a value, and their key feature is O(1) hashing-based lookup. Document stores hold self-describing JSON/BSON documents, and their key feature is indexing and querying on nested fields. Column-family stores keep rows of column families distributed by row key, and their key feature is LSM-tree storage for very high write throughput. Graph databases hold nodes, edges and properties, and their key feature is index-free adjacency for fast traversals.",
      "(b) Comparing document and column-family stores: both scale horizontally. Column-family scales writes better, while document stores offer more flexible modelling and richer ad-hoc queries."
    ],
    "points": [
      "Key-value (Redis, DynamoDB): values opaque to DB; consistent hashing distributes keys; in-memory options; TTL. Example: session store.",
      "Document (MongoDB, CouchDB): flexible schema per document; secondary/compound indexes; aggregation pipeline. Example: product catalog.",
      "Column-family (Cassandra, HBase): partition key + clustering columns; sparse wide rows; tunable consistency; append-only SSTables. Example: IoT time series.",
      "Graph (Neo4j): relationships stored as pointers; Cypher pattern matching; ACID transactions. Example: social network / fraud rings.",
      "Scalability — Cassandra: masterless ring, linear scale-out, writes at any node, multi-datacenter; MongoDB: sharding by shard key with a primary per shard (replica sets), writes go to primaries — scales well but slightly more coordination.",
      "Data-modelling flexibility — MongoDB: any nested structure, change schema per document, model by entity; Cassandra: table-per-query design, denormalised, schema defined per table (CQL), changes require new tables for new access patterns.",
      "Query capabilities — MongoDB: ad-hoc queries on any indexed field, range, text, geo, aggregation, lookups (joins); Cassandra: efficient only by partition key + clustering-range; secondary indexes limited, no joins, aggregation minimal.",
      "Example: an e-commerce catalog (varied attributes, search by many fields) → MongoDB; per-user activity events at millions/sec → Cassandra."
    ],
    "example": [
      "Criterion       MongoDB (document)                 Cassandra (column-family)\nScalability     sharding, primary per shard         masterless, linear, multi-DC writes\nModelling       flexible nested JSON, per document  query-driven tables, denormalised\nQueries         rich ad-hoc, indexes, aggregation   by partition key + clustering range\nBest fit        catalogs, CMS, profiles             time series, logs, event streams"
    ]
  },
  "68985e0124b67652": {
    "answer": [
      "(a) HappyShoppy should use a three-tier (n-tier) client/server architecture with a distributed, replicated database tier. Browsers and mobile apps form the presentation tier; load-balanced web/application servers form the business-logic tier; and the data tier holds a primary DBMS with read replicas, caching and partitioning as the data grows.",
      "(b) Benefits: scalability (add servers per tier), availability (replicas and failover), security (clients never access the DB directly), easier maintenance, and better performance through caching and load balancing."
    ],
    "points": [
      "Presentation tier (client): web browser, Android/iOS app — UI only, sends HTTPS requests.",
      "Application tier: load balancer → multiple stateless app servers (catalog, cart, order, payment services); business rules, validation, authentication; connection pooling to the DB; a cache (Redis) for sessions, carts and hot products.",
      "Data tier: RDBMS primary for orders and payments (ACID), read replicas for browsing queries, horizontal partitioning/sharding of customers and orders by region or customer_id as volume grows; object storage/CDN for product images; optional NoSQL document store for flexible catalog; data warehouse for analytics.",
      "DBMS internals in the data tier: query processor, transaction manager, buffer manager, recovery manager with backups and logs.",
      "Why not centralized/two-tier: a single server becomes a bottleneck and single point of failure; thick clients are hard to update and expose DB credentials.",
      "Benefits detail: independent scaling of web and DB tiers; fault tolerance; centralised business logic; security layers (firewall between tiers, least-privilege DB accounts); flexibility to add channels (mobile, partner APIs) without touching the DB."
    ],
    "example": [
      "[Browser / Mobile app]           presentation tier\n           │ HTTPS\n     [Load balancer]\n      /      |      \\\n[App srv 1][App srv 2][App srv 3]  ←→ [Redis cache]     application tier\n           │ SQL (connection pool)\n   [Primary DB] ──replication──→ [Read replica 1] [Read replica 2]   data tier\n        │ shards by customer region         [CDN / object storage for images]"
    ]
  },
  "ad3d9631399b7499": {
    "answer": [
      "Mapping: STUDENT (address flattened, AGE derived and not stored), STUDENT_HOBBY (multivalued), COURSE, LECTURER (FK student_id for the 1:M Teaches as drawn), SUBJECTS (FK course_id for HAS and a UNIQUE lecturer_id for the 1:1 Teaches), ATTENDS (M:N) and TAKES (M:N). PK, FK, UNIQUE, NOT NULL and CHECK constraints are listed with their purpose."
    ],
    "points": [
      "Strong entities → tables: STUDENT, COURSE, LECTURER, SUBJECTS.",
      "Composite ADDRESS (door#, street, city, state, pin) → separate simple columns in STUDENT.",
      "Derived AGE (dashed) → not stored; computed from DOB (or a view/computed column).",
      "Multivalued HOBBY (double oval) → new table STUDENT_HOBBY(student_id, hobby) with composite PK.",
      "Attends STUDENT M — N COURSE → ATTENDS(student_id, course_id). The COURSE_ID attribute drawn on STUDENT and LECTURER is captured by these relationship tables rather than repeated.",
      "Takes COURSE N — M LECTURER → TAKES(course_id, lecturer_id).",
      "HAS COURSE 1 — M SUBJECTS → FK course_id in SUBJECTS.",
      "Teaches LECTURER 1 — 1 SUBJECTS → FK lecturer_id in SUBJECTS with UNIQUE (one subject per lecturer, one lecturer per subject).",
      "Teaches STUDENT 1 — M LECTURER (as drawn) → FK student_id in LECTURER. (If the intended meaning is M:N, map it to a TEACHES(lecturer_id, student_id) table instead.)",
      "Constraint purposes: PRIMARY KEY — entity integrity (unique, not null); FOREIGN KEY — referential integrity (no attendance for a non-existent course; ON DELETE CASCADE for hobbies); UNIQUE — enforces 1:1; NOT NULL — mandatory participation; CHECK — domain rules (pin is 6 digits, dob < current date)."
    ],
    "example": [
      "STUDENT       (student_id PK, student_name NOT NULL, door_no, street, city, state,\n               pin CHECK (pin BETWEEN 100000 AND 999999), dob)\nSTUDENT_HOBBY (student_id FK → STUDENT ON DELETE CASCADE, hobby, PK(student_id, hobby))\nCOURSE        (course_id PK, course_name NOT NULL)\nLECTURER      (lecturer_id PK, lecturer_name NOT NULL, student_id FK → STUDENT)\nSUBJECTS      (subject_id PK, subject_name, course_id FK → COURSE NOT NULL,\n               lecturer_id FK → LECTURER UNIQUE)\nATTENDS       (student_id FK → STUDENT, course_id FK → COURSE, PK(student_id, course_id))\nTAKES         (course_id FK → COURSE, lecturer_id FK → LECTURER, PK(course_id, lecturer_id))"
    ]
  },
  "1c1e73d29c732f1c": {
    "answer": [
      "The table is not in 1NF because PHONE NUMBER holds several values. Phones depend on the tutor (Tut1 has the same two numbers on every row), and Block Number depends on Room. The 3NF result is BOOK(BookID, PublishedDate, TutorID, Title, Room), ROOM(Room, Block) and TUTOR_PHONE(TutorID, Phone)."
    ],
    "points": [
      "Observed FDs (from data and semantics): BookID → PublishedDate, TutorID, Title, Room; Room → Block (AB3310 → AB3, AB2310/AB2332 → AB2, DB321 → DB); TutorID →→ Phone (a tutor has a set of phones; Tut1 always 9940497934, 9940497938).",
      "1NF violation: non-atomic PHONE NUMBER. Make atomic: one row per (BookID, Phone) → R1(BookID, PublishedDate, TutorID, Title, Room, Phone, Block) with key (BookID, Phone).",
      "2NF violation: PublishedDate, TutorID, Title, Room, Block depend only on BookID (part of the key) → partial dependencies. Phone belongs to the tutor, not the book → split: BOOK(BookID, PublishedDate, TutorID, Title, Room, Block) and TUTOR_PHONE(TutorID, Phone).",
      "3NF violation in BOOK: BookID → Room → Block, a transitive dependency (non-key Room determines non-key Block) → split ROOM(Room, Block) and keep Room as an FK in BOOK.",
      "Final check: each non-key attribute depends on the key, the whole key and nothing but the key; decompositions are lossless (common attributes BookID/TutorID/Room are keys of one side) and dependency preserving.",
      "Benefit: changing Tut1’s phone is one update in TUTOR_PHONE (no update anomaly); a room’s block is stored once; a tutor’s phone can be stored even if they have no book yet."
    ],
    "example": [
      "BOOK                                         ROOM              TUTOR_PHONE\nBookID PublishedDate TutorID Title  Room     Room    Block     TutorID Phone\nB1     23.02.23      Tut1    PYTHON AB3310   AB3310  AB3       Tut1    9940497934\nB2     18.11.23      Tut3    SQL    AB1331   AB1331  AB1       Tut1    9940497938\nB3     23.02.23      Tut1    MATLAB AB2310   AB2310  AB2       Tut3    9876123456\nB5     05.02.23      Tut3    JAVA   AB2332   AB2332  AB2       Tut3    9876123459\nB4     04.07.23      Tut5    AZURE  DB321    DB321   DB        Tut5    9876543210\n\n(Tut3 has two numbers in the data; if phone actually varies per book, keep (BookID, Phone) instead.)"
    ]
  },
  "ea730e50cbcea5fd": {
    "answer": [
      "(a) Recovery techniques for a banking system: log-based recovery (deferred or immediate update, undo/redo), checkpointing, shadow paging, ARIES-style recovery for system crashes, and backup with log replay (plus replication/standby) for media failure or data corruption.",
      "(b) Values: T0 sets A = 1100 − 550 = 550 and B = 1200 + 550 = 1750; T1 sets C = 1000 − 300 = 700. Deferred modification logs only new values; immediate modification logs old and new values."
    ],
    "points": [
      "Transaction failure (logical error, deadlock victim): roll back using the log’s old values (undo) so atomicity holds.",
      "System crash: restart recovery — redo committed transactions, undo uncommitted ones from the last checkpoint (UNDO/REDO, WAL rule).",
      "Deferred update (NO-UNDO/REDO): database written only after commit; recovery redoes committed transactions.",
      "Immediate update (UNDO/REDO): database may be written before commit; recovery needs both undo and redo.",
      "Checkpoints: bound the log scan; fuzzy checkpoints avoid stopping transactions.",
      "Shadow paging: copy-on-write pages; commit switches the page table — no log needed.",
      "Media failure/corruption: restore last full + incremental backup, then roll forward with archived logs to the point of failure (point-in-time recovery); remote standby/replica for disaster recovery.",
      "Recovery rules for (b): deferred — crash after <T0 commit> but before <T1 commit> → redo T0, ignore T1. Immediate — same crash → redo T0, undo T1 (C ← 1000)."
    ],
    "example": [
      "Deferred modification log        Immediate modification log\n<T0 start>                       <T0 start>\n<T0, A, 550>                     <T0, A, 1100, 550>\n<T0, B, 1750>                    <T0, B, 1200, 1750>\n<T0 commit>                      <T0 commit>\n<T1 start>                       <T1 start>\n<T1, C, 700>                     <T1, C, 1000, 700>\n<T1 commit>                      <T1 commit>\nDB writes happen after commit    DB writes may happen any time after the log record"
    ]
  },
  "b2626019f6cdc722": {
    "answer": [
      "(a) The grade data is replicated on nodes XYZ (where faculty post) and PQR (where students read). If the link between them fails, the system must choose: either PQR refuses to answer until it syncs (consistent but not available), or PQR shows the possibly old grade (available but not consistent).",
      "(b) The statement is true. Network partitions cannot be ruled out in a distributed system, so during a partition only C or A can be kept alongside P; all three hold only when the network is healthy."
    ],
    "points": [
      "Consistency: after the faculty posts grade ‘A’ at XYZ, any read at PQR must return ‘A’ — requires XYZ to replicate to PQR before acknowledging (synchronous replication / quorum).",
      "Availability: the student’s request at PQR always gets an answer, even if XYZ is unreachable.",
      "Partition tolerance: the system keeps working when messages between XYZ and PQR are lost.",
      "No partition: write at XYZ propagates to PQR, student sees the new grade — C, A and P all satisfied.",
      "Partition + CP choice: PQR cannot confirm it has the latest grade → returns error or ‘try later’ (or XYZ blocks the post) → consistent but unavailable. Suitable for official result publication.",
      "Partition + AP choice: PQR returns whatever it has (old/no grade) and syncs later → available but temporarily inconsistent (eventual consistency). Suitable for a preview portal.",
      "CA without P is possible only if XYZ and PQR are one site/one database — not truly distributed."
    ],
    "example": [
      "Faculty ──post grade A──▶ [XYZ] ──✗ network partition ✗── [PQR] ◀──view grade── Student A\nCP: PQR → \"Grades temporarily unavailable\"      (consistent, not available)\nAP: PQR → old value \"Not published\"              (available, not consistent)"
    ]
  },
  "167776588d77d391": {
    "answer": [
      "The SQL for parts (a)–(e) on the student table is below. Assume the table is named Student, with columns RegNo, Name, Physics, Chemistry, Maths, Age, Department and City."
    ],
    "points": [
      "(a) ALTER TABLE adds the column; UPDATE fills it with the mean of the three marks.",
      "(b) IN (or OR) filters on two cities → Harish, Ram, Gokul.",
      "(c) UPPER() converts names; condition Age = 19 AND Department = 'SENSE' → HARISH, SURESH, PRATHIK.",
      "(d) MIN/MAX aggregates → 18 and 20.",
      "(e) Interpreted as: per department, students whose average is above 80. Using the new column: Harish (89.33), Ram (78.33 ✗), Suresh (80 ✗, not above), Dhamu (81.67), Prathik (80 ✗), Gokul (52.33 ✗) → Harish (SENSE), Dhamu (SCOPE). A department-level version uses GROUP BY with HAVING AVG(Average) > 80."
    ],
    "example": [
      "-- (a)\nALTER TABLE Student ADD Average DECIMAL(5,2);\nUPDATE Student SET Average = (Physics + Chemistry + Maths) / 3;",
      "-- (b)\nSELECT Name FROM Student WHERE City IN ('Chennai', 'Bangalore');",
      "-- (c)\nSELECT UPPER(Name) FROM Student WHERE Age = 19 AND Department = 'SENSE';",
      "-- (d)\nSELECT MIN(Age) AS min_age, MAX(Age) AS max_age FROM Student;",
      "-- (e) students above 80, listed department-wise\nSELECT Name, Department FROM Student\nWHERE  Average > 80\nORDER BY Department;\n\n-- departments whose average mark is above 80\nSELECT Department, AVG(Average) FROM Student\nGROUP BY Department HAVING AVG(Average) > 80;"
    ]
  },
  "777d188e8e1137ce": {
    "answer": [
      "(a) A PL/SQL function looks up the faculty in the faculty table and returns 'Employed' if a row exists, or 'Not Employed' when NO_DATA_FOUND is raised.",
      "(b) An explicit cursor university_cur loops over the SENSE students; SQL%ROWCOUNT, the implicit cursor attribute, reports how many rows the last DML statement affected."
    ],
    "points": [
      "Function: parameter p_emp_id; SELECT COUNT(*) INTO v_cnt (avoids exceptions) or SELECT … INTO with NO_DATA_FOUND handler; RETURN VARCHAR2.",
      "Explicit cursor life cycle: DECLARE → OPEN → FETCH in a loop until %NOTFOUND → CLOSE (or use a cursor FOR loop which does all steps).",
      "Explicit cursor attributes: %ISOPEN, %FOUND, %NOTFOUND, %ROWCOUNT (rows fetched so far).",
      "Implicit cursor (SQL): created automatically for each DML or SELECT INTO; SQL%ROWCOUNT = rows affected; SQL%FOUND / SQL%NOTFOUND."
    ],
    "example": [
      "CREATE OR REPLACE FUNCTION check_employment (p_emp_id IN faculty.emp_id%TYPE)\nRETURN VARCHAR2 IS\n  v_cnt NUMBER;\nBEGIN\n  SELECT COUNT(*) INTO v_cnt FROM faculty WHERE emp_id = p_emp_id;\n  IF v_cnt > 0 THEN\n    RETURN 'Employed';\n  ELSE\n    RETURN 'Not Employed';\n  END IF;\nEND;\n/\n-- usage\nBEGIN\n  DBMS_OUTPUT.PUT_LINE(check_employment(1023));\nEND;\n/",
      "DECLARE\n  CURSOR university_cur IS\n    SELECT regno, name, department FROM student WHERE department = 'SENSE';\n  v_rec university_cur%ROWTYPE;\nBEGIN\n  OPEN university_cur;\n  LOOP\n    FETCH university_cur INTO v_rec;\n    EXIT WHEN university_cur%NOTFOUND;\n    DBMS_OUTPUT.PUT_LINE(v_rec.regno || ' ' || v_rec.name);\n  END LOOP;\n  DBMS_OUTPUT.PUT_LINE('Rows fetched: ' || university_cur%ROWCOUNT);\n  CLOSE university_cur;\n\n  -- implicit cursor\n  UPDATE student SET age = age + 1 WHERE department = 'SENSE';\n  DBMS_OUTPUT.PUT_LINE('Rows updated: ' || SQL%ROWCOUNT);\nEND;\n/"
    ]
  },
  "4668d30147404bc6": {
    "answer": [
      "(a) π Name, Phno ( σ DateOfJoining > '01-01-2023' ∧ CourseName = 'DBMS' ( Faculty ⋈ EmpId = AEmpId CourseAllocation ⋈ ACourseCode = CourseCode Course ) )",
      "(b) Optimised: push σ DateOfJoining onto Faculty and σ CourseName = 'DBMS' onto Course, replace the products with joins, and project only the needed columns.",
      "(c) With linear probing, h(k) = k mod 8, the final table is: 0: 5, 1: 15, 2: 18, 3: 2, 4: 12, 5: 13, 6: 3, 7: 23."
    ],
    "points": [
      "Canonical tree: π Name, Phno at root → single σ with all conditions → × of Faculty, CourseAllocation, Course (leaves).",
      "Heuristic 1: break conjunctive σ into a cascade.",
      "Heuristic 2: push each σ to the relation it refers to (DateOfJoining → Faculty, CourseName → Course).",
      "Heuristic 3: combine × with join conditions into ⋈.",
      "Heuristic 4: place the most restrictive leaf first — σ CourseName='DBMS'(Course) returns ~1 row, so join it with CourseAllocation first, then with the filtered Faculty.",
      "Heuristic 5: push projections: Course → CourseCode; CourseAllocation → AEmpId, ACourseCode; Faculty → EmpId, Name, Phno.",
      "Hashing: 12 → 4; 18 → 2; 13 → 5; 2 → 2 ✗ → 3; 3 → 3 ✗, 4 ✗, 5 ✗ → 6; 23 → 7; 5 → 5 ✗, 6 ✗, 7 ✗ → 0; 15 → 7 ✗, 0 ✗ → 1."
    ],
    "example": [
      "Optimised tree\n                    π Name, Phno\n                         |\n                 ⋈ EmpId = AEmpId\n                /                  \\\n   π EmpId,Name,Phno           π AEmpId\n          |                        |\nσ DateOfJoining > '01-01-2023'  ⋈ ACourseCode = CourseCode\n          |                   /                     \\\n       Faculty      π AEmpId,ACourseCode       π CourseCode\n                            |                       |\n                     CourseAllocation      σ CourseName = 'DBMS'\n                                                    |\n                                                 Course",
      "Key   h(k)   Probes        Slot\n12    4      4             4\n18    2      2             2\n13    5      5             5\n2     2      2✗ 3          3\n3     3      3✗ 4✗ 5✗ 6    6\n23    7      7             7\n5     5      5✗ 6✗ 7✗ 0    0\n15    7      7✗ 0✗ 1       1\n\nFinal: [0]=5 [1]=15 [2]=18 [3]=2 [4]=12 [5]=13 [6]=3 [7]=23"
    ]
  },
  "36561c8570130cf1": {
    "answer": [
      "(a) Running Tx and Ty without control causes a lost update on B and C, a dirty read of C (Tx reads C right after Ty's uncommitted write), unrepeatable reads (Tx re-reads A and B after Ty changed B), and a blind write (Ty computes C = C + B·2 without having read C). The result matches neither serial order.",
      "(b) Lock-based fix: basic 2PL makes the schedule conflict serializable; strict 2PL also prevents dirty reads and cascading rollback; rigorous 2PL also holds read locks to commit, so re-reads are repeatable and the serialization order equals the commit order."
    ],
    "points": [
      "Initial A = 200, B = 200, C = 380. Serial Tx then Ty: Tx → B = 300, C = 380 + 600 = 980; Ty → B = 300, C = 980 + 600 = 1580. Interleaved: Ty overwrites B and C using values it read before Tx’s writes, so Tx’s effect on C is lost (C ends at 380 + 600 = 980 or another inconsistent value) — lost update.",
      "Both read A and B at T1–T2, then both write B at T3/T4 → write-write conflict on stale data.",
      "Tx reads C at T5 while Ty writes C at T5 → dirty/inconsistent read; Tx re-reads A, B at T6–T7 and gets different B than at T2 → unrepeatable read.",
      "Precedence graph: Tx → Ty (Tx wrote B before Ty wrote B) and Ty → Tx (Ty read B before Tx wrote B) → cycle → not serializable.",
      "Basic 2PL: Tx takes S(A), X(B), X(C) in growing phase; Ty’s X(B) must wait until Tx releases B (after its lock point). Ensures serializability but Ty might read C released early before Tx commits → cascading rollback possible.",
      "Strict 2PL: Tx holds X(B), X(C) until commit; Ty cannot read/write B or C until Tx commits → no dirty reads, recoverable, cascadeless.",
      "Rigorous 2PL: also keeps S(A) until commit; Ty cannot change anything Tx has read during Tx’s lifetime → Tx’s second reads of A and B return the same values; transactions serialise in commit order. Cost: lowest concurrency.",
      "Possible deadlock: if Tx and Ty both hold S(B) and request X(B) → upgrade deadlock; avoid by requesting X(B) directly (update lock) or use wait-die."
    ],
    "example": [
      "Strict 2PL schedule\nTime  Tx                                  Ty\n1     S(A) R(A)  X(B) R(B)\n2                                         S(A) R(A)\n3     B = A + 100  W(B)                   X(B) → WAIT\n4     X(C) R(C)  C = C + 2B  W(C)  (980)\n5     R(A) R(B)  commit, unlock all\n6                                         X(B) granted R(B) B = A + 100 W(B)\n7                                         X(C) R(C) C = C + 2B W(C) (1580) commit\nResult equals serial Tx → Ty"
    ]
  },
  "2aebaa7d94a026e5": {
    "answer": [
      "The database approach keeps a single, centrally defined repository whose structure is stored in a catalog and shared by many applications through a DBMS. File processing gives each application its own files, with structure embedded in the programs. The database approach is self-describing, insulates programs from data, supports multiple views, and controls concurrent multi-user access."
    ],
    "points": [
      "Self-describing nature: DBMS catalog stores data definitions (metadata); in file systems the record layout is coded in each program.",
      "Program–data independence (insulation): changing a file structure breaks all programs in file processing; in a DBMS only the catalog/mapping changes. Program–operation independence through abstract operations.",
      "Data abstraction: users see a conceptual model, not storage details.",
      "Multiple views: different users see tailored views of the same data.",
      "Sharing and multi-user transaction processing: concurrency control and recovery guarantee correct simultaneous updates; file systems have little or no such control.",
      "Redundancy control and consistency: integrated data avoids duplicate files per department (e.g. student address in both library and accounts files) and update anomalies.",
      "Other DBMS advantages: integrity constraints, security/authorisation, backup and recovery, query languages (SQL) instead of writing a new program for each request.",
      "File system drawbacks: data isolation in scattered formats, atomicity problems, difficulty of ad-hoc access."
    ],
    "example": [
      "Aspect             File processing                     Database approach\nMetadata           inside programs                     in DBMS catalog\nRedundancy         high (one file per app)             controlled, integrated\nIndependence       none — programs depend on format    physical + logical independence\nConcurrency        manual or none                      concurrency control + recovery\nQueries            new program per request             declarative SQL\nSecurity           OS file permissions only            fine-grained privileges, views"
    ]
  },
  "8eaffefee14d705a": {
    "answer": [
      "A three-tier (n-tier) client/server architecture fits best: a thin web client, a scalable application-server tier, and a database-server tier with a full DBMS providing concurrency control, security and fast indexed access. It can be extended with replication, partitioning and caching for huge volumes."
    ],
    "points": [
      "Presentation tier: browser/mobile UI, sends HTTPS requests; holds no data or credentials.",
      "Application tier: web/app servers implement business logic, authentication, authorisation and input validation; stateless so they scale horizontally behind a load balancer; connection pooling; cache layer for hot data.",
      "Database tier: DBMS server(s) handling query optimisation, indexing (B+ trees, hashing), transactions with ACID properties, concurrency control (locking/MVCC) so many users operate without conflicts, logging and recovery.",
      "Huge volume: partitioning/sharding tables across servers, read replicas for read-heavy workloads, archiving cold data, clustered/parallel DB servers.",
      "Security: clients never connect to the DB directly; firewall between tiers; least-privilege DB accounts; encryption in transit and at rest; views and GRANTs.",
      "Fast access: indexes, caching (Redis), query optimisation, CDN for static content.",
      "Why not centralized or 2-tier: single host bottleneck/failure point; 2-tier exposes DB to every client and is hard to scale."
    ],
    "example": [
      "Client (browser) ⇄ HTTPS ⇄ Load balancer ⇄ App servers (logic, auth) ⇄ Cache\n                                                  ⇅ SQL\n                          DB server cluster: primary + replicas, partitioned tables"
    ]
  },
  "97999dbcfe19876f": {
    "answer": [
      "A DBMS is made of three groups of modules that work together: user/query interfaces, the query processor (DDL compiler, query compiler and optimizer, precompiler, runtime processor), and the storage/transaction manager (stored-data manager, buffer manager, concurrency control, recovery). All of them consult the system catalog."
    ],
    "points": [
      "Users: DBA (DDL, privileges, tuning), casual users (interactive queries), application programmers (host-language programs), parametric/naive users (canned transactions).",
      "DDL compiler: processes schema definitions and stores metadata in the system catalog / data dictionary.",
      "Interactive query interface → query compiler: parses SQL, validates against catalog, translates to internal form.",
      "Query optimizer: rewrites the query (algebraic heuristics), chooses access paths and join orders using catalog statistics, generates executable code.",
      "Precompiler: extracts DML from application programs (embedded SQL) → DML compiler; host code goes to host-language compiler; linked into canned transactions.",
      "Runtime database processor: executes compiled queries and transactions; works with the stored data manager.",
      "Stored data manager: controls access to data on disk; uses OS services; the buffer manager moves pages between disk and main memory.",
      "Concurrency control / lock manager and backup & recovery subsystem: integrated with the runtime processor to give isolation and durability (logs, checkpoints).",
      "System catalog: consulted by compilers, optimizer and runtime processor. Utilities: loading, backup, reorganisation, performance monitoring."
    ],
    "example": [
      "DBA ──DDL──▶ DDL compiler ──▶ System catalog / data dictionary ◀──┐\nCasual users ──▶ Interactive query ──▶ Query compiler ──▶ Query optimizer ─┐\nApp programmers ──▶ Precompiler ──▶ DML compiler ──▶ compiled transactions ─┤\nParametric users ──▶ canned transactions ───────────────────────────────────┤\n                                                                           ▼\n                    Runtime DB processor ⇄ Concurrency control / Recovery\n                              │\n                    Stored data manager ⇄ Buffer manager\n                              │\n                    Stored database + catalog on disk"
    ]
  },
  "86162a127c213302": {
    "answer": [
      "Applying the mapping steps (strong entities, composite attributes, 1:1, 1:N, M:N, ternary and recursive relationships) to the retail ER diagram gives ten relations: CUSTOMER, BILL, ORDERS, PRODUCT_CATEGORY, PRODUCT, VENDOR, SUPPLIED_BY, EMPLOYEE, DELIVERY and HAVE."
    ],
    "points": [
      "Step 1 — strong entities: CUSTOMER, ORDERS, BILL, PRODUCT, VENDOR, EMPLOYEE, PRODUCT_CATEGORY, DELIVERY become tables; composite NAME (first, initial, last) and ADDRESS (door no, street, area, pincode) are flattened into simple columns.",
      "Step 2 — 1:1 GETS (CUSTOMER 1 — 1 BILL): FK cust_id in BILL (bill has total participation), declared UNIQUE.",
      "Step 3 — 1:N relationships: ORDERS (CUSTOMER 1 — N ORDERS) → cust_id FK in ORDERS; HAS (BILL 1 — N ORDERS) → bill_id FK in ORDERS; BELONG TO (PRODUCT N — 1 CATEGORY) → category_id FK in PRODUCT; WORKS FOR (EMPLOYEE N — 1 VENDOR, total) → vendor_id FK NOT NULL in EMPLOYEE.",
      "Step 4 — recursive 1:N UPGRADE on PRODUCT → self-referencing FK upgraded_from in PRODUCT.",
      "Step 5 — M:N SUPPLIED BY (VENDOR M — N PRODUCT) → SUPPLIED_BY(vendor_id, product_id).",
      "Step 6 — ternary HAVE (ORDERS 1, PRODUCT N, DELIVERY N) with attribute quantity → HAVE(order_id, product_id, delivery_id, quantity). Because ORDERS has cardinality 1, each (product, delivery) pair determines the order, so PK = (product_id, delivery_id); order_id is FK NOT NULL.",
      "Constraints: PKs for entity integrity, FKs with ON DELETE rules for referential integrity, NOT NULL for total participation."
    ],
    "example": [
      "CUSTOMER         (cust_id PK, first_name, initial, last_name, door_no, street, area, pincode, mobile_number)\nBILL             (bill_id PK, bill_date, bill_amount, cust_id FK → CUSTOMER UNIQUE NOT NULL)\nORDERS           (order_id PK, order_date, delivery_date, cust_id FK → CUSTOMER NOT NULL,\n                  bill_id FK → BILL)\nPRODUCT_CATEGORY (category_id PK, category_name)\nPRODUCT          (product_id PK, product_name, unit_price, category_id FK → PRODUCT_CATEGORY,\n                  upgraded_from FK → PRODUCT(product_id))\nVENDOR           (vendor_id PK, vendor_name, location, contact_no)\nSUPPLIED_BY      (vendor_id FK → VENDOR, product_id FK → PRODUCT, PK(vendor_id, product_id))\nEMPLOYEE         (emp_id PK, first_name, initial, last_name, address, mobile_number,\n                  vendor_id FK → VENDOR NOT NULL)\nDELIVERY         (delivery_id PK, delivery_type, charges)\nHAVE             (product_id FK → PRODUCT, delivery_id FK → DELIVERY, order_id FK → ORDERS NOT NULL,\n                  quantity, PK(product_id, delivery_id))"
    ]
  },
  "daaf7e0c3146cb7c": {
    "answer": [
      "(i) No: a foreign key must reference a PRIMARY KEY or any UNIQUE (candidate key) column of the parent table. (ii) Yes, unless it is declared NOT NULL or is part of the child's primary key. (iii) Yes: ON DELETE CASCADE only controls deleting the parent; a child row can always be deleted directly. (iv) Yes, because many child rows may reference the same parent (1:N). (v) Yes: a relation can have several foreign keys, even several to the same table."
    ],
    "points": [
      "(i) Example: EMPLOYEE(emp_id PK, email UNIQUE); PROJECT(lead_email REFERENCES EMPLOYEE(email)) — valid, email is a candidate key, not the PK.",
      "(ii) EMPLOYEE(emp_id, dept_id FK → DEPARTMENT, NULL allowed) — a new employee not yet assigned to a department has dept_id NULL; this represents partial participation. In ENROLL(regno, course_id) where FKs are part of the PK, NULL is not allowed (entity integrity).",
      "(iii) DEPARTMENT(d1) ← EMPLOYEE(e5, d1): DELETE FROM EMPLOYEE WHERE emp_id = 'e5' succeeds; referential integrity is violated only by orphan children, never by removing a child. CASCADE means deleting d1 would also delete e5.",
      "(iv) EMPLOYEE rows e1, e2, e3 all with dept_id = 10 — duplicates are normal (many employees per department). Duplicates are prevented only if a UNIQUE constraint is added (1:1).",
      "(v) ENROLL(regno FK → STUDENT, course_id FK → COURSE); EMPLOYEE(emp_id, manager_id FK → EMPLOYEE, dept_id FK → DEPARTMENT); FLIGHT(source FK → AIRPORT, destination FK → AIRPORT) — two FKs to the same table with different roles."
    ],
    "example": [
      "CREATE TABLE enroll (\n  regno     VARCHAR(10) REFERENCES student(regno) ON DELETE CASCADE,\n  course_id VARCHAR(8)  REFERENCES course(course_id),\n  PRIMARY KEY (regno, course_id)        -- two FKs, both NOT NULL here\n);"
    ]
  },
  "183225726267dca1": {
    "answer": [
      "The report has repeating groups: several visits and procedures per pet. The 3NF result is PET(pet_id, pet_name, pet_type, pet_age, owner), PROCEDURE(proc_id, proc_name) and VISIT(pet_id, visit_date, proc_id). An optional OWNER table can be added if owners get attributes of their own."
    ],
    "points": [
      "Unnormalised: one row per pet with multiple (visit date, procedure) values → violates 1NF.",
      "1NF: one row per pet per visit per procedure → PET_VISIT(pet_id, pet_name, pet_type, pet_age, owner, visit_date, proc_id, proc_name). Key = (pet_id, visit_date, proc_id) — proc_id is needed because Tweedy has two procedures on APR 30/2002.",
      "FDs: pet_id → pet_name, pet_type, pet_age, owner; proc_id → proc_name; (pet_id, visit_date, proc_id) → (nothing else).",
      "2NF: remove partial dependencies — pet attributes depend only on pet_id, proc_name only on proc_id → PET, PROCEDURE, VISIT.",
      "3NF: no transitive dependencies remain (owner name is a plain attribute; if owner phone/address were stored, owner → owner details would be transitive → OWNER(owner_id, owner_name, …) with owner_id FK in PET). pet_age is time-dependent; better to store date_of_birth.",
      "Anomalies removed: renaming ‘HEART WORM TEST’ is a single update; a new procedure can be added before any pet receives it; deleting a visit does not delete pet data."
    ],
    "example": [
      "PET                                         PROCEDURE                       VISIT\npet_id  pet_name pet_type pet_age owner     proc_id proc_name               pet_id visit_date  proc_id\n246     ROVER    DOG      12      SAM COOK  01      RABIES VACCINATION      246    JAN 13/2002 01\n298     SPOT     DOG      2       TERRY KIM 05      HEART WORM TEST         246    MAR 27/2002 10\n341     MORRIS   CAT      4       SAM COOK  08      TETANUS VACCINATION     246    APR 02/2002 05\n519     TWEEDY   BIRD     2       TERRY KIM 10      EXAMINE and TREAT WOUND 298    JAN 21/2002 08\n                                            12      EYE WASH                298    MAR 10/2002 05\n                                            20      ANNUAL CHECK UP         341    JAN 23/2001 01\n                                                                            341    JAN 13/2002 01\n                                                                            519    APR 30/2002 20\n                                                                            519    APR 30/2002 12"
    ]
  },
  "f18bf09da8b170c9": {
    "answer": [
      "Four kinds of users work with a DBMS: the DBA, casual users, application programmers and parametric (naive) users. Each reaches different modules. The DBA uses DDL and privileged commands, casual users use the interactive query interface, application programmers use the precompiler and compilers, and parametric users run canned transactions. Everything converges on the runtime processor, the stored-data manager and the system catalog."
    ],
    "points": [
      "DBA staff: write DDL → DDL compiler → system catalog; issue privileged commands (create users, grant/revoke, set storage and tuning parameters, backup).",
      "Casual users: occasional ad-hoc queries via the interactive query interface → query compiler → query optimizer → runtime database processor.",
      "Application programmers: write programs in Java/C with embedded SQL → precompiler separates DML (→ DML compiler) from host code (→ host-language compiler) → linked into canned transactions.",
      "Parametric (naive) end users: bank tellers, reservation clerks — execute canned transactions repeatedly with parameters through forms/menus.",
      "Sophisticated users (analysts, scientists) use query tools or data-analysis software directly; stand-alone users use personal DB packages.",
      "Shared back-end: runtime DB processor executes queries and transactions using the catalog; concurrency control/backup & recovery subsystem integrated; stored data manager and buffer manager access the disk.",
      "Workers behind the scene: DBMS designers/implementers, tool developers, operators and maintenance personnel."
    ],
    "example": [
      "DBA ──DDL──▶ DDL compiler ──▶ System catalog / data dictionary ◀──┐\nCasual users ──▶ Interactive query ──▶ Query compiler ──▶ Query optimizer ─┐\nApp programmers ──▶ Precompiler ──▶ DML compiler ──▶ compiled transactions ─┤\nParametric users ──▶ canned transactions ───────────────────────────────────┤\n                                                                           ▼\n                    Runtime DB processor ⇄ Concurrency control / Recovery\n                              │\n                    Stored data manager ⇄ Buffer manager\n                              │\n                    Stored database + catalog on disk"
    ]
  },
  "9ad1b2aca33d1d6a": {
    "answer": [
      "(a) The DBMS supports the three-schema architecture with separate languages. SDL (storage definition language) defines the internal schema, DDL defines the conceptual schema, VDL (view definition language) defines external schemas, and DML manipulates data. In modern relational DBMSs, SQL plays all the DDL, VDL and DML roles, and storage parameters act as the SDL.",
      "(b) Physical data independence means changing the internal schema without changing the conceptual schema. Logical data independence means changing the conceptual schema without changing external schemas or programs. Physical independence is easier to achieve."
    ],
    "points": [
      "Internal level example: CREATE INDEX idx_reg ON student(regno); tablespace, file organisation — SDL/storage parameters.",
      "Conceptual level example: CREATE TABLE student(regno CHAR(9) PRIMARY KEY, name VARCHAR(40), dept_id INT REFERENCES dept) — DDL.",
      "External level example: CREATE VIEW cse_students AS SELECT regno, name FROM student WHERE dept_id = 1 — VDL.",
      "DML: high-level/declarative (set-at-a-time SELECT, INSERT, UPDATE) or low-level/procedural (record-at-a-time, embedded in host languages with cursors).",
      "Architecture followed by present DBMSs: the ANSI/SPARC three-schema architecture, implemented on client/server or three-tier system architectures.",
      "Comparison: physical independence — e.g. adding an index or moving data to SSD; achieved through conceptual/internal mapping; common in all DBMSs. Logical independence — e.g. adding a column or splitting a table; achieved via external/conceptual mapping (views); harder because applications depend on logical structure."
    ],
    "example": [
      "Feature              Physical data independence       Logical data independence\nShields              conceptual schema from storage   external schemas/apps from logical change\nMapping used         conceptual ↔ internal            external ↔ conceptual\nExample change       new index, file reorganisation   new column, split/merge tables\nDifficulty           easier, widely achieved          harder (views, view-update limits)"
    ]
  },
  "639a1b24b0948c7e": {
    "answer": [
      "Relational schema: NATION, CUSTOMER, ORDERS (a weak entity owned by CUSTOMER), SUPPLIER, PART, PROVIDES (M:N) and CONSISTS_OF. CONSISTS_OF is the order–part relationship with quantity, price and shipdate, and it also records which supplier ships each line."
    ],
    "points": [
      "NATION(name PK, region) — strong entity.",
      "CUSTOMER(id PK, name, address, phone, nation_name FK → NATION) — ‘is from’ CUSTOMER M — 1 NATION → FK on the M side.",
      "SUPPLIER(id PK, name, address, phone, nation_name FK → NATION) — same rule for the second ‘is from’.",
      "PART(id PK, price, size, brand).",
      "ORDER is a weak entity (double rectangle, dashed partial key number) identified through ‘places’ (CUSTOMER 1 — N ORDER, total) → ORDERS(customer_id FK, number, status, date, price) with PK(customer_id, number) and ON DELETE CASCADE.",
      "PROVIDES: SUPPLIER M — N PART → PROVIDES(supplier_id, part_id) with composite PK.",
      "CONSISTS_OF: ORDER M — N PART, with SUPPLIER also connected (the small marking on that line is read as 1: each order line is shipped by one supplier) → CONSISTS_OF(customer_id, number, part_id, supplier_id, quantity, price, shipdate), PK(customer_id, number, part_id), FK (customer_id, number) → ORDERS, part_id → PART, supplier_id → SUPPLIER. If the supplier side were many, supplier_id would join the PK.",
      "Name ORDER as ORDERS to avoid the SQL keyword."
    ],
    "example": [
      "NATION      (name PK, region)\nCUSTOMER    (id PK, name, address, phone, nation_name FK → NATION)\nSUPPLIER    (id PK, name, address, phone, nation_name FK → NATION)\nPART        (id PK, price, size, brand)\nORDERS      (customer_id FK → CUSTOMER, number, status, date, price,\n             PK(customer_id, number))\nPROVIDES    (supplier_id FK → SUPPLIER, part_id FK → PART, PK(supplier_id, part_id))\nCONSISTS_OF (customer_id, number, part_id FK → PART, supplier_id FK → SUPPLIER,\n             quantity, price, shipdate,\n             PK(customer_id, number, part_id),\n             FK(customer_id, number) → ORDERS)"
    ]
  },
  "5fdaebfa9967389f": {
    "answer": [
      "(a) No. Product breaks entity integrity, because the ‘iphone 6 plus 128GB’ row has a NULL primary key P_id. Purchase_order breaks referential integrity, because P104 refers to P_id = 4, which does not exist in Product.",
      "(b) (i) Disjoint: an account is either Savings or Current, never both. (ii) Overlapping: a person can be a Customer and an Employee at the same time."
    ],
    "points": [
      "Entity integrity: no primary-key attribute may be NULL, since the PK identifies tuples; a NULL P_id cannot be referenced or distinguished. Fix: assign P_id 4 (or any unique value) to the iPhone row.",
      "Referential integrity: every non-null FK value must match an existing PK value in the referenced table; Purchase_order.P_id = 4 is an orphan. Fix: insert product 4 first, or correct the FK, or reject the insert.",
      "Key constraint: all present P_id values (1, 2, 3) and Purchase_id values are unique → satisfied. Domain constraints: dates and quantities are valid values → satisfied.",
      "Disjoint (d): subclasses are mutually exclusive; often predicate-defined on a type attribute (account_type ∈ {Savings, Current}); EER symbol ‘d’.",
      "Overlapping (o): an entity may be a member of several subclasses; e.g. a bank employee who also holds an account; EER symbol ‘o’; usually mapped with Boolean flags or separate subclass tables sharing the PK."
    ],
    "example": [
      "ACCOUNT            PERSON\n   │                  │\n  (d)                (o)\n  / \\                / \\\nSAVINGS CURRENT  CUSTOMER EMPLOYEE"
    ]
  },
  "e49da74f4919c1f3": {
    "answer": [
      "Key = (emp_id, job_code), because an employee can hold several jobs. The 3NF result is EMPLOYEE(emp_id, name, state_code), STATE(state_code, home_state), JOB(job_code, job) and EMP_JOB(emp_id, job_code)."
    ],
    "points": [
      "FDs: emp_id → name, state_code; state_code → home_state; job_code → job.",
      "Issues: Arun’s name and state repeated per job (update anomaly); cannot add a new job J04 without an employee (insertion anomaly); deleting Suganya loses that Chef is J01 only if no one else holds it (deletion anomaly).",
      "1NF: all values atomic → already 1NF.",
      "2NF: partial dependencies on part of the key — emp_id → name, state_code, home_state and job_code → job → split into EMP(emp_id, name, state_code, home_state), JOB(job_code, job), EMP_JOB(emp_id, job_code).",
      "3NF: in EMP, emp_id → state_code → home_state is transitive → split EMPLOYEE(emp_id, name, state_code) and STATE(state_code, home_state).",
      "All decompositions lossless (shared attribute is a key of one side) and dependency preserving."
    ],
    "example": [
      "EMPLOYEE                 STATE                 JOB              EMP_JOB\nemp_id name    state     state_code home_state job_code job     emp_id job_code\nE001   Arun    KA        KA         Karnataka  J01      Chef    E001   J01\nE002   Tej     KE        KE         Kerala     J02      Waiter  E001   J02\nE003   Suganya KE                              J03      Cashier E002   J02\n                                                                E002   J03\n                                                                E003   J01"
    ]
  },
  "651c0e1041c224ef": {
    "answer": [
      "The database approach keeps a single, centrally defined repository whose structure is stored in a catalog and shared by many applications through a DBMS. File processing gives each application its own files, with structure embedded in the programs. The database approach is self-describing, insulates programs from data, supports multiple views, and controls concurrent multi-user access."
    ],
    "points": [
      "Self-describing nature: DBMS catalog stores data definitions (metadata); in file systems the record layout is coded in each program.",
      "Program–data independence (insulation): changing a file structure breaks all programs in file processing; in a DBMS only the catalog/mapping changes. Program–operation independence through abstract operations.",
      "Data abstraction: users see a conceptual model, not storage details.",
      "Multiple views: different users see tailored views of the same data.",
      "Sharing and multi-user transaction processing: concurrency control and recovery guarantee correct simultaneous updates; file systems have little or no such control.",
      "Redundancy control and consistency: integrated data avoids duplicate files per department (e.g. student address in both library and accounts files) and update anomalies.",
      "Other DBMS advantages: integrity constraints, security/authorisation, backup and recovery, query languages (SQL) instead of writing a new program for each request.",
      "File system drawbacks: data isolation in scattered formats, atomicity problems, difficulty of ad-hoc access."
    ],
    "example": [
      "Aspect             File processing                     Database approach\nMetadata           inside programs                     in DBMS catalog\nRedundancy         high (one file per app)             controlled, integrated\nIndependence       none — programs depend on format    physical + logical independence\nConcurrency        manual or none                      concurrency control + recovery\nQueries            new program per request             declarative SQL\nSecurity           OS file permissions only            fine-grained privileges, views"
    ]
  },
  "7e16cb244e930764": {
    "answer": [
      "Choose a three-tier (n-tier) client/server architecture with a replicated or distributed database tier. Users book through browsers or apps, application servers enforce booking rules and payment, and a transactional DBMS guarantees that no seat is sold twice, even under heavy load (for example, tatkal rush)."
    ],
    "points": [
      "Presentation tier: web/mobile client — search trains, choose seats, pay; no business logic or DB access.",
      "Application tier: load-balanced app servers for availability, fare calculation, booking, waitlist/RAC logic, payment gateway integration, authentication, session handling; caching of train schedules.",
      "Database tier: ACID RDBMS for bookings and seat inventory — row-level locking/MVCC so concurrent requests for the last berth are serialised; replicas for read-heavy enquiries (PNR status, availability); partitioning by zone/train; backup and log-based recovery.",
      "Why not centralized (mainframe + terminals): cannot serve millions of internet users, single point of failure, no web/mobile clients.",
      "Why not two-tier: each client would hold DB connections and business logic — insecure (credentials on client), hard to update, DB overwhelmed by connections.",
      "Why not a purely distributed eventually consistent store for bookings: could double-sell seats during partitions; acceptable only for non-critical data (logs, analytics)."
    ],
    "example": [
      "Browser/App ─HTTPS→ Load balancer → App servers (booking, payment, waitlist) → Cache\n                                          │ SQL transactions\n                         Primary DB (seat inventory, PNR) ──→ Read replicas (enquiry)"
    ]
  },
  "2a127608d46f4f46": {
    "answer": [
      "Data abstraction means hiding the complex details of how data is stored and maintained, and showing users only what they need. A DBMS gives three views of data, corresponding to three levels: the physical (internal) level, the logical (conceptual) level and the view (external) level."
    ],
    "points": [
      "Physical level: lowest; describes how data is stored — blocks, records, pointers, indexes, hashing. E.g. STUDENT records stored in a B+ tree file sorted on regno.",
      "Logical level: describes what data is stored and the relationships — STUDENT(regno, name, dept_id), DEPT(dept_id, dname); used by the DBA and designers; hides storage detail (physical data independence).",
      "View level: highest; describes only part of the database for a particular user group — e.g. the exam cell sees regno and marks; the hostel office sees regno, name and room. Hides other data for simplicity and security; many views per database.",
      "Analogy: a programming-language record type (logical) vs its memory layout (physical) vs an application screen that shows only some fields (view).",
      "Schema vs instance: the schema describes each level’s structure; the instance is the data at a moment.",
      "Benefits: simplicity for users, data independence, security through views, multiple perspectives on the same data."
    ],
    "example": [
      "View level      ExamCellView(regno, marks)   HostelView(regno, name, room)\n                         ↑ mapping\nLogical level    STUDENT(regno, name, dept_id, room, marks …)\n                         ↑ mapping\nPhysical level   B+ tree file on regno, 4 KB blocks, record layout"
    ]
  },
  "99fb2d3a6e85da97": {
    "answer": [
      "Database users are the DBA, database designers, end users (casual, naive/parametric, sophisticated and stand-alone) and system analysts or application programmers. Behind the scenes are DBMS designers, tool developers and operators. The DBA is the central authority who manages the database resource."
    ],
    "points": [
      "Database designers: identify data to be stored, choose structures, build the conceptual design and views with users.",
      "Casual end users: occasional access with ad-hoc queries (managers).",
      "Naive/parametric end users: run canned transactions constantly (bank tellers, reservation clerks).",
      "Sophisticated end users: engineers, analysts using complex query and analysis tools.",
      "Stand-alone users: maintain personal databases with ready-made packages.",
      "System analysts and application programmers: specify and implement canned transactions.",
      "DBA role 1 — schema definition and modification: creates the conceptual schema via DDL, changes it as requirements evolve.",
      "DBA role 2 — storage structure and access-method definition: decides file organisation, indexes, physical design.",
      "DBA role 3 — granting authorisation: creates accounts, grants/revokes privileges, enforces security policies.",
      "DBA role 4 — routine maintenance: periodic backups, recovery after failures, ensuring free disk space, monitoring and performance tuning, software upgrades.",
      "DBA role 5 — integrity and liaison: defines integrity constraints, coordinates with users and resolves conflicts in requirements."
    ],
    "example": [
      "GRANT SELECT, INSERT ON student TO exam_clerk;   -- authorisation (DBA)\nCREATE INDEX idx_regno ON student(regno);         -- access method (DBA)\nBACKUP DATABASE univ TO DISK = 'univ.bak';         -- maintenance (DBA)"
    ]
  },
  "371f7a96dd4417a6": {
    "answer": [
      "Entities: COURSE, COURSE_OFFERING (weak, owned by COURSE), STUDENT, INSTRUCTOR and DEPARTMENT. Relationships: PREREQUISITE (recursive on COURSE), OFFERS (INSTRUCTOR–COURSE_OFFERING), ENROLLS (STUDENT–COURSE_OFFERING, with grade), PROCTORS (INSTRUCTOR 1:N STUDENT), HOD_OF (INSTRUCTOR 1:1 DEPARTMENT), WORKS_IN (INSTRUCTOR N:1 DEPARTMENT) and DESIGNS_SYLLABUS (INSTRUCTOR M:N COURSE)."
    ],
    "points": [
      "COURSE(number PK, title, credits, syllabus). PREREQUISITE: recursive M:N on COURSE with roles prereq/main; zero or more prerequisites (partial).",
      "COURSE_OFFERING: weak entity with partial key (year, semester, section_no), attributes timings and classroom; identifying relationship OF (COURSE 1 — N COURSE_OFFERING), total on offering.",
      "STUDENT(student_id PK, name, program).",
      "INSTRUCTOR(instructor_id PK, name, title, {qualification} multivalued). WORKS_IN: INSTRUCTOR N — 1 DEPARTMENT (department attribute modelled as a relationship).",
      "DEPARTMENT(dept_name PK). HOD_OF: INSTRUCTOR 1 — 1 DEPARTMENT; department total (every department has one HOD), instructor partial.",
      "OFFERS / TEACHES: INSTRUCTOR 1 — N COURSE_OFFERING (each offering offered by one instructor; an instructor offers one or more → total on instructor if every instructor teaches).",
      "ENROLLS: STUDENT M — N COURSE_OFFERING with attribute grade (registration for an offering, not just a course).",
      "PROCTORS: INSTRUCTOR 1 — N STUDENT; student side total (exactly one proctor), instructor side partial (zero or more students).",
      "DESIGNS_SYLLABUS: INSTRUCTOR M — N COURSE; course side total (one or more designers).",
      "Assumptions: section numbers are unique only within a course/year/semester; one classroom per offering; grade recorded once per enrolment."
    ],
    "example": [
      "COURSE ⟲ PREREQUISITE (M:N)\nCOURSE ─1─<<OF>>─N═ [[COURSE_OFFERING]] (year, semester, section_no, timings, classroom)\nINSTRUCTOR ─1─<OFFERS>─N═ COURSE_OFFERING\nSTUDENT ─M─<ENROLLS (grade)>─N─ COURSE_OFFERING\nINSTRUCTOR ─1─<PROCTORS>─N═ STUDENT\nINSTRUCTOR ─M─<DESIGNS_SYLLABUS>─N═ COURSE\nINSTRUCTOR ─N═<WORKS_IN>─1─ DEPARTMENT\nINSTRUCTOR ─1─<HOD_OF>─1═ DEPARTMENT\nINSTRUCTOR attributes: instructor_id, name, title, {qualification}\n═ total participation, [[ ]] weak entity"
    ]
  },
  "bbb5ea8db25fb273": {
    "answer": [
      "This is the classic AIRLINE ER schema. It maps to nine relations: AIRPORT, FLIGHT, FLIGHT_LEG, LEG_INSTANCE, FARE, AIRPLANE_TYPE, CAN_LAND, AIRPLANE and SEAT_RESERVATION. FLIGHT_LEG, LEG_INSTANCE, FARE and SEAT are weak entities, so their keys include their owners' keys."
    ],
    "points": [
      "Strong entities: AIRPORT(Airport_code), FLIGHT(Number), AIRPLANE_TYPE(Type_name), AIRPLANE(Airplane_id).",
      "Weak FLIGHT_LEG (owner FLIGHT via LEGS, partial key Leg_no) → PK(Flight_number, Leg_no). DEPARTURE_AIRPORT and ARRIVAL_AIRPORT are 1:N from AIRPORT → two FKs with their relationship attributes Scheduled_dep_time, Scheduled_arr_time.",
      "Weak LEG_INSTANCE (owner FLIGHT_LEG via INSTANCE_OF, partial key Date) → PK(Flight_number, Leg_no, Date); ASSIGNED (AIRPLANE 1 — N, total) → Airplane_id FK NOT NULL; DEPARTS/ARRIVES (AIRPORT 1 — N) → Dep_airport_code + Dep_time, Arr_airport_code + Arr_time.",
      "Weak FARE (owner FLIGHT via FARES, partial key Code) → PK(Flight_number, Fare_code).",
      "TYPE (AIRPLANE_TYPE 1 — N AIRPLANE, total) → Airplane_type FK NOT NULL in AIRPLANE.",
      "CAN_LAND (AIRPLANE_TYPE M — N AIRPORT) → CAN_LAND(Airplane_type_name, Airport_code).",
      "Weak SEAT with identifying RESERVATION (LEG_INSTANCE 1 — N SEAT) and attributes Customer_name, Cphone → SEAT_RESERVATION with PK(Flight_number, Leg_no, Date, Seat_no).",
      "Constraints: PK (entity integrity), composite FKs to owner tables with ON DELETE CASCADE for weak entities, NOT NULL on FKs representing total participation, CHECK (No_of_avail_seats ≥ 0 and ≤ Total_no_of_seats), CHECK (Max_seats > 0)."
    ],
    "example": [
      "AIRPORT          (Airport_code PK, Name, City, State)\nFLIGHT           (Number PK, Airline, Weekdays)\nFLIGHT_LEG       (Flight_number FK → FLIGHT, Leg_no,\n                  Departure_airport_code FK → AIRPORT, Scheduled_dep_time,\n                  Arrival_airport_code FK → AIRPORT, Scheduled_arr_time,\n                  PK(Flight_number, Leg_no))\nLEG_INSTANCE     (Flight_number, Leg_no, Date, No_of_avail_seats,\n                  Airplane_id FK → AIRPLANE NOT NULL,\n                  Departure_airport_code FK → AIRPORT, Dep_time,\n                  Arrival_airport_code FK → AIRPORT, Arr_time,\n                  PK(Flight_number, Leg_no, Date),\n                  FK(Flight_number, Leg_no) → FLIGHT_LEG)\nFARE             (Flight_number FK → FLIGHT, Fare_code, Amount, Restrictions,\n                  PK(Flight_number, Fare_code))\nAIRPLANE_TYPE    (Type_name PK, Max_seats, Company)\nCAN_LAND         (Airplane_type_name FK → AIRPLANE_TYPE, Airport_code FK → AIRPORT,\n                  PK(Airplane_type_name, Airport_code))\nAIRPLANE         (Airplane_id PK, Total_no_of_seats, Airplane_type FK → AIRPLANE_TYPE NOT NULL)\nSEAT_RESERVATION (Flight_number, Leg_no, Date, Seat_no, Customer_name, Customer_phone,\n                  PK(Flight_number, Leg_no, Date, Seat_no),\n                  FK(Flight_number, Leg_no, Date) → LEG_INSTANCE)"
    ]
  },
  "73e1db39281c97ff": {
    "answer": [
      "(a) The key is (staffNo, branchNo), but name and position depend on staffNo alone and branchAddress on branchNo alone. These partial dependencies of non-key attributes on part of the key violate 2NF.",
      "(b) The 3NF result is STAFF(staffNo, name, position), BRANCH(branchNo, branchAddress) and STAFF_BRANCH(staffNo, branchNo, hoursPerWeek)."
    ],
    "points": [
      "FDs: staffNo → name, position; branchNo → branchAddress; (staffNo, branchNo) → hoursPerWeek.",
      "Anomalies: Ellen’s name repeated per branch (update anomaly); a new branch cannot be stored without staff (insertion anomaly); deleting the last staff row for B004 loses its address (deletion anomaly).",
      "1NF: values atomic → in 1NF.",
      "2NF: move each partially dependent group into its own relation keyed by the determinant: STAFF(staffNo → name, position), BRANCH(branchNo → branchAddress); keep hoursPerWeek with the full key.",
      "3NF: check for transitive dependencies — none (position does not determine name; address is atomic per branch) → all three are in 3NF (and BCNF).",
      "Lossless: STAFF_BRANCH joins to STAFF on staffNo and BRANCH on branchNo, each a key of the referenced table."
    ],
    "example": [
      "STAFF                          BRANCH                                    STAFF_BRANCH\nstaffNo name         position  branchNo branchAddress                    staffNo branchNo hoursPerWeek\nS4555   Ellen Layman Assistant B002     City Center Plaza, Seattle 98122 S4555   B002     16\nS4612   Dave Sinclair Assistant B004    16 – 14th Avenue, Seattle 98128  S4555   B004     9\n                                                                         S4612   B002     14\n                                                                         S4612   B004     10"
    ]
  },
  "eaab3de34cbe5219": {
    "answer": [
      "(i) The only candidate key is AB, since AB⁺ = {A, B, C, D, E} and neither A nor B appears on any right-hand side. (ii) R is in 2NF but not in 3NF, because of the transitive dependencies C → E and D → E (also BC → D)."
    ],
    "points": [
      "AB⁺: AB → CD gives C, D; D → E (or C → E) gives E → all attributes.",
      "A⁺ = {A}, B⁺ = {B} → no proper subset of AB is a key → AB is minimal.",
      "Prime attributes: A, B. Non-prime: C, D, E.",
      "2NF check: no non-prime attribute depends on A alone or B alone → no partial dependency → 2NF holds.",
      "3NF check: C → E — C is not a superkey and E is not prime → violation; D → E similarly; BC → D — BC not a superkey, D non-prime → violation.",
      "3NF decomposition (for completeness): minimal cover is {AB → C, BC → D, C → E, D → E} (AB → D is implied by AB → C and BC → D). Synthesis gives R1(A, B, C), R2(B, C, D), R3(C, E), R4(D, E); R1 contains the key AB, so the join is lossless."
    ],
    "example": [
      "FD        LHS superkey?   RHS prime?   Status\nAB → CD   yes             –            OK\nBC → D    no              no           violates 3NF\nD → E     no              no           violates 3NF\nC → E     no              no           violates 3NF   → highest normal form: 2NF"
    ]
  },
  "2d68ec8f7817daf6": {
    "answer": [
      "Use a database system when data is shared, large, long-lived and needs integrity, concurrency, security and recovery. A DBMS provides these centrally, whereas OS files leave every application to implement them itself. Skipping a DBMS makes sense for small, simple, single-user or real-time applications where its overhead is not justified."
    ],
    "points": [
      "Data independence and self-describing catalog: programs do not depend on file formats.",
      "Controlled redundancy and consistency: one integrated copy instead of duplicate files per application.",
      "Declarative querying (SQL) and query optimisation: no new program for every request; indexes for fast access.",
      "Concurrency control: many users update simultaneously without lost updates.",
      "Backup and recovery: logs, checkpoints, crash recovery — files may be left half-updated.",
      "Security and authorisation: per-user privileges, views; OS gives only file-level permissions.",
      "Integrity constraints: keys, foreign keys, CHECK enforced centrally.",
      "When not to use a DBMS: high initial cost (software, hardware, training); simple, well-defined applications not expected to change (e.g. a config file); single-user apps with no sharing; stringent real-time or embedded requirements where DBMS overhead is unacceptable; very small data volume; specialised data that DBMS models poorly (some scientific or streaming formats)."
    ],
    "example": [
      "Use a DBMS: university records, banking, e-commerce orders, hospital management\nAvoid a DBMS: a sensor firmware log on a microcontroller, a one-off CSV for a personal script, a game save file"
    ]
  },
  "b3ff43f36b3ce5b3": {
    "answer": [
      "Logical data independence is the ability to change the conceptual schema without changing external schemas or application programs. Physical data independence is the ability to change the internal schema without changing the conceptual schema."
    ],
    "points": [
      "Logical — mapping used: external/conceptual. Examples: add a column EMPLOYEE.email, add a new table, split EMPLOYEE into two tables; views are redefined so old programs still work.",
      "Physical — mapping used: conceptual/internal. Examples: add/drop an index, change file organisation (heap → hash), move data to new disks, compress pages.",
      "Difficulty: physical independence is easier and supported by almost every DBMS; logical independence is harder because applications depend on the meaning and structure of data (dropping a column used by a view cannot be hidden).",
      "Benefit of both: lower maintenance cost and freedom to evolve and tune the database."
    ],
    "example": [
      "Feature              Physical data independence       Logical data independence\nShields              conceptual schema from storage   external schemas/apps from logical change\nMapping used         conceptual ↔ internal            external ↔ conceptual\nExample change       new index, file reorganisation   new column, split/merge tables\nDifficulty           easier, widely achieved          harder (views, view-update limits)"
    ]
  },
  "7f4410b1bb7c277b": {
    "answer": [
      "Entities: COURSE, COURSE_OFFERING (weak, owned by COURSE), STUDENT, INSTRUCTOR and DEPARTMENT. Relationships: PREREQUISITE (recursive on COURSE), OFFERS (INSTRUCTOR–COURSE_OFFERING), ENROLLS (STUDENT–COURSE_OFFERING, with grade), PROCTORS (INSTRUCTOR 1:N STUDENT), HOD_OF (INSTRUCTOR 1:1 DEPARTMENT), WORKS_IN (INSTRUCTOR N:1 DEPARTMENT) and DESIGNS_SYLLABUS (INSTRUCTOR M:N COURSE)."
    ],
    "points": [
      "COURSE(number PK, title, credits, syllabus). PREREQUISITE: recursive M:N on COURSE with roles prereq/main; zero or more prerequisites (partial).",
      "COURSE_OFFERING: weak entity with partial key (year, semester, section_no), attributes timings and classroom; identifying relationship OF (COURSE 1 — N COURSE_OFFERING), total on offering.",
      "STUDENT(student_id PK, name, program).",
      "INSTRUCTOR(instructor_id PK, name, title, {qualification} multivalued). WORKS_IN: INSTRUCTOR N — 1 DEPARTMENT (department attribute modelled as a relationship).",
      "DEPARTMENT(dept_name PK). HOD_OF: INSTRUCTOR 1 — 1 DEPARTMENT; department total (every department has one HOD), instructor partial.",
      "OFFERS / TEACHES: INSTRUCTOR 1 — N COURSE_OFFERING (each offering offered by one instructor; an instructor offers one or more → total on instructor if every instructor teaches).",
      "ENROLLS: STUDENT M — N COURSE_OFFERING with attribute grade (registration for an offering, not just a course).",
      "PROCTORS: INSTRUCTOR 1 — N STUDENT; student side total (exactly one proctor), instructor side partial (zero or more students).",
      "DESIGNS_SYLLABUS: INSTRUCTOR M — N COURSE; course side total (one or more designers).",
      "Assumptions: section numbers are unique only within a course/year/semester; one classroom per offering; grade recorded once per enrolment."
    ],
    "example": [
      "COURSE ⟲ PREREQUISITE (M:N)\nCOURSE ─1─<<OF>>─N═ [[COURSE_OFFERING]] (year, semester, section_no, timings, classroom)\nINSTRUCTOR ─1─<OFFERS>─N═ COURSE_OFFERING\nSTUDENT ─M─<ENROLLS (grade)>─N─ COURSE_OFFERING\nINSTRUCTOR ─1─<PROCTORS>─N═ STUDENT\nINSTRUCTOR ─M─<DESIGNS_SYLLABUS>─N═ COURSE\nINSTRUCTOR ─N═<WORKS_IN>─1─ DEPARTMENT\nINSTRUCTOR ─1─<HOD_OF>─1═ DEPARTMENT\nINSTRUCTOR attributes: instructor_id, name, title, {qualification}\n═ total participation, [[ ]] weak entity"
    ]
  },
  "84d393834dd51fe0": {
    "answer": [
      "Relations: PATIENT (plus derived age, not stored), EMPLOYEE with subclass tables DOCTOR, NURSE and RECEPTIONIST, ROOMS, BILLS, TEST_REPORT, RECORDS, CONSULTS (M:N), GOVERNS (M:N) and MAINTAINS (M:N). Constraints are PKs, FKs, NOT NULL for total participation and CHECKs on domains."
    ],
    "points": [
      "Strong entities: PATIENT(P-ID), EMPLOYEE(E-ID), ROOMS(R-ID), RECORDS(Record-no). Composite Address (State, City, Pin-no) is flattened; Age is derived from DOB and not stored.",
      "Specialisation ISA: EMPLOYEE → DOCTOR (Dept, Qualification), NURSE, RECEPTIONIST. Mapped with superclass + subclass tables sharing E-ID as PK and FK (works for overlapping or partial specialisation).",
      "CONSULTS: PATIENT M — N DOCTOR → CONSULTS(p_id, doctor_eid).",
      "PAYS: PATIENT 1 — N BILLS → BILLS has p_id FK NOT NULL (diagram already shows P-ID in Bills).",
      "HAS: PATIENT 1 — N TEST_REPORT → TEST_REPORT(p_id FK); R-ID drawn on the report is taken as the report id (report_id).",
      "ASSIGNED: PATIENT N — 1 ROOMS → r_id FK in PATIENT (nullable for outpatients).",
      "GOVERNS: NURSE M — M ROOMS → GOVERNS(nurse_eid, r_id).",
      "MAINTAINS: RECEPTIONIST M — M RECORDS → MAINTAINS(rec_eid, record_no).",
      "Constraint list: entity integrity on every PK; referential integrity on FKs (ON DELETE CASCADE for BILLS/TEST_REPORT when a patient is deleted, or RESTRICT for audit); domain CHECKs — gender ∈ {M, F, O}, capacity > 0, availability ∈ {Y, N}, amount ≥ 0; UNIQUE on mobile numbers if required."
    ],
    "example": [
      "PATIENT      (p_id PK, name, dob, gender CHECK (gender IN ('M','F','O')), mob_no, r_id FK → ROOMS)\nEMPLOYEE     (e_id PK, name, salary, sex, mob_no, state, city, pin_no)\nDOCTOR       (e_id PK/FK → EMPLOYEE, dept, qualification)\nNURSE        (e_id PK/FK → EMPLOYEE)\nRECEPTIONIST (e_id PK/FK → EMPLOYEE)\nROOMS        (r_id PK, type, capacity CHECK (capacity > 0), availability)\nBILLS        (b_id PK, amount CHECK (amount >= 0), p_id FK → PATIENT NOT NULL)\nTEST_REPORT  (report_id PK, test_type, result, p_id FK → PATIENT NOT NULL)\nRECORDS      (record_no PK, app_no)\nCONSULTS     (p_id FK → PATIENT, doctor_eid FK → DOCTOR, PK(p_id, doctor_eid))\nGOVERNS      (nurse_eid FK → NURSE, r_id FK → ROOMS, PK(nurse_eid, r_id))\nMAINTAINS    (rec_eid FK → RECEPTIONIST, record_no FK → RECORDS, PK(rec_eid, record_no))"
    ]
  },
  "e0d3d01a71ce93e1": {
    "answer": [
      "In the EER model, a supertype (superclass) is a general entity type, and its subtypes (subclasses) are subsets of its entities with extra attributes or relationships. Each subtype entity IS-A supertype entity and inherits all of the supertype's attributes and relationships. Subtypes are found top-down by specialization or bottom-up by generalization."
    ],
    "points": [
      "Example: VEHICLE(vehicle_id, reg_no, price) is the supertype; CAR(no_of_seats, max_speed) and TRUCK(tonnage, no_of_axles) are subtypes.",
      "Attribute inheritance: a CAR has vehicle_id, reg_no, price + its own attributes. Relationship inheritance: if VEHICLE is OWNED_BY PERSON, so are cars and trucks.",
      "Specific relationships: only TRUCK participates in CARRIES_GOODS; only CAR in RENTED_BY.",
      "Disjointness: disjoint (d) — a vehicle is either car or truck; overlapping (o) — a PERSON can be EMPLOYEE and STUDENT.",
      "Completeness: total (double line) — every vehicle must be a car or truck; partial (single line) — some employees are none of the subtypes.",
      "Defining predicate: predicate-defined subclasses use an attribute (vehicle_type = 'Car'); otherwise user-defined.",
      "Hierarchy vs lattice: single inheritance vs shared subclasses with multiple supertypes (e.g. TEACHING_ASSISTANT is both STUDENT and EMPLOYEE).",
      "Benefits: avoids many NULLs in one big entity, models specific attributes and relationships accurately, and supports semantic clarity."
    ],
    "example": [
      "            VEHICLE (vehicle_id, reg_no, price)\n                 ║  total\n                (d)  on vehicle_type\n            ┌────┴────┐\n           CAR       TRUCK\n (no_of_seats,       (tonnage,\n  max_speed)          no_of_axles)"
    ]
  },
  "895955d3e7822413": {
    "answer": [
      "NULLs waste space and make the meaning of a value ambiguous (unknown, not applicable, or exists but not recorded). They also complicate joins, aggregates and comparisons. Spurious tuples are wrong extra rows produced when a badly decomposed relation is joined back on attributes that are not keys. They are prevented by decomposing only in ways that satisfy the lossless (non-additive) join property."
    ],
    "points": [
      "Why avoid NULLs: storage waste when many attributes do not apply (e.g. office_no for non-office staff); ambiguous interpretation; COUNT(*) vs COUNT(col) and SUM/AVG ignore NULLs; outer vs inner joins give different results; comparisons with NULL yield UNKNOWN (three-valued logic).",
      "Guideline: place attributes that are frequently NULL in a separate relation with the key (e.g. EMP_OFFICE(emp_id, office_no)), so NULLs appear only rarely.",
      "Spurious tuples example: EMP_PROJ(ssn, pnumber, hours, ename, pname, plocation) decomposed into EMP_LOCS(ename, plocation) and EMP_PROJ1(ssn, pnumber, hours, pname, plocation); joining on plocation (not a key of either) creates rows pairing employees with projects they never worked on.",
      "Prevention: design so that relations are joined on equality of attributes that are primary keys or foreign keys; test binary decompositions with R1 ∩ R2 → R1 or R1 ∩ R2 → R2; use the chase/matrix test for multi-way decompositions; follow normalisation algorithms that guarantee lossless joins (3NF synthesis, BCNF decomposition)."
    ],
    "example": [
      "R(student, course, instructor) with t1 = (Asha, DB, Ravi), t2 = (John, OS, Ravi)\nBad split on instructor: R1(student, instructor), R2(course, instructor)\nR1 ⋈ R2 → (Asha, DB, Ravi), (Asha, OS, Ravi), (John, DB, Ravi), (John, OS, Ravi)\n                     ↑ spurious           ↑ spurious\nGood split: R1(student, course), R2(course, instructor) if course → instructor (common attribute course is a key of R2)"
    ]
  },
  "573a93e985a7a54c": {
    "answer": [
      "R is not in 3NF. The key is ABD (ABD⁺ covers all ten attributes), and there are partial dependencies (AB → C, AD → GH, BD → EF, A → I) and a transitive dependency (H → J). The 3NF decomposition is R1(A, B, C), R2(A, D, G, H), R3(B, D, E, F), R4(A, I), R5(H, J) and R6(A, B, D)."
    ],
    "points": [
      "ABD⁺: AB → C; AD → G, H; BD → E, F; A → I; H → J ⇒ {A, B, C, D, E, F, G, H, I, J}. A, B, D never appear on a right-hand side → every key contains ABD → ABD is the only key.",
      "Prime: A, B, D. Non-prime: C, E, F, G, H, I, J.",
      "Violations: AB → C, AD → GH, BD → EF, A → I — non-prime attributes depend on part of the key (not even 2NF). H → J — non-key determines non-key (transitive).",
      "3NF synthesis: the FDs form a minimal cover already (single determinants, no redundancy) → one relation per FD group: (A, B, C), (A, D, G, H), (B, D, E, F), (A, I), (H, J).",
      "No relation contains the key ABD → add R6(A, B, D) to guarantee a lossless join.",
      "Result is dependency preserving and lossless; every relation is in 3NF (in fact BCNF)."
    ],
    "example": [
      "Relation         Key   FD\nR1(A, B, C)      AB    AB → C\nR2(A, D, G, H)   AD    AD → GH\nR3(B, D, E, F)   BD    BD → EF\nR4(A, I)         A     A → I\nR5(H, J)         H     H → J\nR6(A, B, D)      ABD   (key relation)"
    ]
  },
  "2239a87ec036aaa9": {
    "answer": [
      "Anomalies are problems caused by redundancy in a poorly designed relation. Insertion anomalies stop you adding data without unrelated data; deletion anomalies lose unrelated facts when a row is deleted; update (modification) anomalies force the same fact to be changed in many rows, risking inconsistency. Normalisation removes them."
    ],
    "points": [
      "Example relation EMP_DEPT(emp_id, ename, dept_no, dname, dmgr_id) — department data repeated for every employee.",
      "Insertion anomaly: a new department D9 with no employees cannot be inserted (emp_id is the key, cannot be NULL); inserting an employee requires repeating dept details consistently.",
      "Deletion anomaly: deleting the last employee of D5 also deletes the only record of department D5 (its name and manager).",
      "Update anomaly: changing the manager of D1 requires updating every employee row of D1; missing one leaves the database inconsistent.",
      "Cause: mixing two entity types (employee and department) in one relation → partial/transitive dependencies.",
      "Fix: decompose into EMPLOYEE(emp_id, ename, dept_no) and DEPARTMENT(dept_no, dname, dmgr_id) — 3NF."
    ],
    "example": [
      "emp_id  ename  dept_no  dname     dmgr_id\nE1      Asha   D1       Research  M10\nE2      Ravi   D1       Research  M10     ← update D1 manager in 2 rows (update anomaly)\nE3      John   D5       Admin     M20     ← delete E3 → D5 lost (deletion anomaly)\n(new dept D9, no employees → cannot insert: insertion anomaly)"
    ]
  },
  "0548f864c19c312d": {
    "answer": [
      "(a) The database system environment has users and interfaces at the top, the DBMS's query processor and storage/transaction managers in the middle, and the stored database and catalog at the bottom, supported by the OS, compilers and utilities. (b) User categories: DBA, database designers, end users (casual, naive/parametric, sophisticated, stand-alone), system analysts and application programmers, plus tool developers and operators behind the scenes."
    ],
    "points": [
      "DDL compiler: processes schema definitions (STUDENT, COURSE, REGISTRATION, RESULT tables) and stores them in the system catalog.",
      "Query compiler + optimizer: parse ad-hoc queries (e.g. list students with backlogs), choose efficient plans using catalog statistics.",
      "Precompiler / DML compiler + host-language compiler: turn application programs (registration portal, result processing) into canned transactions.",
      "Runtime database processor: executes queries and transactions; works with the transaction manager — concurrency control (locking during simultaneous course registration) and recovery (logs, backups).",
      "Stored data manager and buffer manager: read/write pages on disk via the OS.",
      "Utilities: loading (bulk import of student data), backup, reorganisation, performance monitoring; tools such as CASE design tools and report generators.",
      "DBA (role 1): authorises access (students see only their results), defines physical design, monitors performance, manages backup/recovery.",
      "Database designers (role 2): gather requirements from exam cell, registrar and faculty; design the conceptual schema and views for each group.",
      "Parametric end users (role 3): office staff and students who repeatedly use canned transactions — register for a course, enter marks, view grade card.",
      "Application programmers: implement and test the registration and exam-processing programs; casual users (dean, HOD) run ad-hoc reports."
    ],
    "example": [
      "DBA ──DDL──▶ DDL compiler ──▶ System catalog / data dictionary ◀──┐\nCasual users ──▶ Interactive query ──▶ Query compiler ──▶ Query optimizer ─┐\nApp programmers ──▶ Precompiler ──▶ DML compiler ──▶ compiled transactions ─┤\nParametric users ──▶ canned transactions ───────────────────────────────────┤\n                                                                           ▼\n                    Runtime DB processor ⇄ Concurrency control / Recovery\n                              │\n                    Stored data manager ⇄ Buffer manager\n                              │\n                    Stored database + catalog on disk"
    ]
  },
  "d126767058055468": {
    "answer": [
      "Tables: UNIVERSITY, PARTICIPANT, COACH, EVENT, REGISTRATION (participant–event, M:N), PAYMENT, PAYMENT_EVENT (which events a payment covers), STAFF_FACILITY with EVENT_SUPPORT for events that need extra support, and PERFORMANCE_REPORT (one per participant, event and day)."
    ],
    "points": [
      "Each sports event has one assigned coach/referee → coach_id FK in EVENT (1:N).",
      "A participant enrols in many events and an event has many participants → REGISTRATION(participant_id, event_id) with registration_date.",
      "A payment covers one or more events for one participant → PAYMENT(payment_id, participant_id, date, amount, mode) + PAYMENT_EVENT(payment_id, event_id) for ‘covered events’.",
      "Some events need extra support staff/facilities → STAFF_FACILITY + EVENT_SUPPORT (M:N, optional).",
      "Performance reports: a participant may receive several, one per event per day → PERFORMANCE_REPORT(report_id, participant_id, event_id, report_date, result, remarks, recommendations) with UNIQUE(participant_id, event_id, report_date). FK (participant_id, event_id) → REGISTRATION ensures reports only for registered events.",
      "Integrity: amount > 0; mode ∈ {cash, card, UPI}; category ∈ {athletics, team, aquatics, mind}; schedule as date-time."
    ],
    "example": [
      "Table               Primary key                     Foreign keys (→ referenced table)\nUNIVERSITY          univ_id                         –\nPARTICIPANT         participant_id                  univ_id → UNIVERSITY\n  (name, dob, gender, phone, email, course, year)\nCOACH               coach_id                        –   (name, role ∈ {coach, referee}, phone)\nEVENT               event_id                        coach_id → COACH\n  (event_name, category, venue, schedule)\nREGISTRATION        (participant_id, event_id)      participant_id → PARTICIPANT, event_id → EVENT\nPAYMENT             payment_id                      participant_id → PARTICIPANT\n  (payment_date, amount, mode)\nPAYMENT_EVENT       (payment_id, event_id)          payment_id → PAYMENT, event_id → EVENT\nSTAFF_FACILITY      sf_id                           –   (name, type ∈ {staff, facility})\nEVENT_SUPPORT       (event_id, sf_id)               event_id → EVENT, sf_id → STAFF_FACILITY\nPERFORMANCE_REPORT  report_id                       (participant_id, event_id) → REGISTRATION\n  (report_date, result, remarks, recommendations)"
    ]
  },
  "9bf298137b726198": {
    "answer": [
      "Entities: POWER_DISTRIBUTION_ZONE, ELECTRICITY_EMPLOYEE (specialised into PERMANENT_EMPLOYEE and CONTRACT_EMPLOYEE), CONSUMER, POWER_CONNECTION and the weak entity ENERGY_USAGE_RECORD. Relationships: a zone employs employees, serves connections and has a supervising employee; a consumer owns connections; an employee installs connections; and each usage record belongs to its connection through an identifying relationship."
    ],
    "points": [
      "POWER_DISTRIBUTION_ZONE(ZoneID key, ZoneName, City, GridType, {HelplineNumber} multivalued).",
      "ELECTRICITY_EMPLOYEE(EmployeeID key, Name composite (First, Middle, Last), OfficialEmail, DateOfBirth, AlternateContact optional, Age derived from DateOfBirth).",
      "Specialisation: PERMANENT_EMPLOYEE(MonthlySalary, Designation), CONTRACT_EMPLOYEE(ContractPeriod, ContractorCompany) — disjoint (d), total (every employee is one of the two).",
      "CONSUMER(ConsumerID key, Name, {PhoneNumber} multivalued, Address composite (HouseNo, Street, City, PIN)).",
      "POWER_CONNECTION(ConnectionID key, ConnectionType, InstallationDate, LoadCapacity).",
      "ENERGY_USAGE_RECORD: weak entity, partial key RecordID, BillingMonth, UnitsConsumed, BillAmount; identifying relationship HAS_USAGE: POWER_CONNECTION 1 — N RECORD, total on the record side.",
      "WORKS_IN: EMPLOYEE N — 1 ZONE (total on employee). MANAGES: one employee (role: zone manager) 1 — 1 ZONE (total on zone).",
      "OWNS: CONSUMER 1 — N POWER_CONNECTION (total on connection; a consumer may own several connections).",
      "LOCATED_IN: POWER_CONNECTION N — 1 ZONE (total). INSTALLED_BY: EMPLOYEE 1 — N POWER_CONNECTION (role: installer; partial on employee).",
      "Notation: double ellipse = multivalued, dashed ellipse = derived, ellipse with sub-ellipses = composite, double rectangle/diamond = weak entity/identifying relationship, double line = total participation."
    ],
    "example": [
      "ZONE (ZoneID, ZoneName, City, GridType, {HelplineNumber})\n  ║1                         │1\n<WORKS_IN>N══ EMPLOYEE ─1─<MANAGES>─1═ ZONE\n                 (EmployeeID, (Name), OfficialEmail, DOB, [Age], AlternateContact?)\n                 ║ (d, total)\n      PERMANENT_EMPLOYEE        CONTRACT_EMPLOYEE\n  (MonthlySalary, Designation)  (ContractPeriod, ContractorCompany)\nCONSUMER (ConsumerID, Name, {PhoneNumber}, (Address)) ─1─<OWNS>─N═ POWER_CONNECTION\nPOWER_CONNECTION (ConnectionID, ConnectionType, InstallationDate, LoadCapacity)\n   ─N═<LOCATED_IN>─1─ ZONE      EMPLOYEE ─1─<INSTALLED_BY>─N─ POWER_CONNECTION\nPOWER_CONNECTION ─1─<<HAS_USAGE>>─N═ [[ENERGY_USAGE_RECORD]] (RecordID (partial), BillingMonth, UnitsConsumed, BillAmount)"
    ]
  },
  "4c4ca980de8a2b8e": {
    "answer": [
      "(a) No. The value d is not in dom(A₂) = {a, b, c}, so the tuple violates the domain constraint and cannot appear in any valid state of R.",
      "(b) The state is not valid. A₁ is the key, but the value 3 appears in two tuples, ⟨3, c, 40⟩ and ⟨3, b, 10⟩, which violates the key (uniqueness) constraint. All other values are within their domains."
    ],
    "points": [
      "Domain constraint: each attribute value must be an atomic value from dom(Ai) (or NULL if allowed). In (2, d, 20): 2 ∈ dom(A₁) ✓, d ∉ dom(A₂) ✗, 20 ∈ dom(A₃) ✓.",
      "Key constraint: no two distinct tuples may have the same key value; t[A₁] must be unique.",
      "Check (b): A₁ values 0, 1, 2, 3, 3 → duplicate 3. A₂ values a, b, a, c, b ⊆ dom(A₂) ✓. A₃ values 10, 20, 30, 40, 10 ⊆ dom(A₃) ✓.",
      "Consequence: since dom(A₁) has only 4 values, any valid state of R with key A₁ can contain at most 4 tuples.",
      "Fix: remove one of the tuples with A₁ = 3 (e.g. keep ⟨3, c, 40⟩) to obtain a valid state."
    ],
    "example": [
      "Tuple          A₁ ∈ dom?   A₂ ∈ dom?   A₃ ∈ dom?   Key unique?\n⟨0, a, 10⟩     ✓           ✓           ✓           ✓\n⟨1, b, 20⟩     ✓           ✓           ✓           ✓\n⟨2, a, 30⟩     ✓           ✓           ✓           ✓\n⟨3, c, 40⟩     ✓           ✓           ✓           ✗ (3 repeated)\n⟨3, b, 10⟩     ✓           ✓           ✓           ✗ (3 repeated)"
    ]
  },
  "be3c4a89e2ef90b4": {
    "answer": [
      "(a) Decomposition: CourseID → CourseName and CourseID → InstructorID. (b) Transitivity: CourseID → InstructorID and InstructorID → InstructorName give CourseID → InstructorName. (c) Augmentation of StudentID → StudentName by CourseID gives (StudentID, CourseID) → (StudentName, CourseID)."
    ],
    "points": [
      "Decomposition rule: if X → YZ then X → Y and X → Z.",
      "Transitivity rule: if X → Y and Y → Z then X → Z.",
      "Step 1: CourseID → InstructorID (from (a)). Step 2: InstructorID → InstructorName (decomposition of FD 3, InstructorID → InstructorName, Department). Step 3: transitivity ⇒ CourseID → InstructorName.",
      "Augmentation rule: if X → Y then XZ → YZ for any Z. With X = StudentID, Y = StudentName, Z = CourseID ⇒ StudentID CourseID → StudentName CourseID (and by decomposition StudentID CourseID → StudentName).",
      "Use in design: these derived FDs show partial dependencies (StudentID → StudentName, CourseID → CourseName) and a transitive dependency (CourseID → InstructorID → InstructorName), which is why the relation should be decomposed into STUDENT, COURSE, INSTRUCTOR and GRADE tables."
    ],
    "example": [
      "FD                                   Rule\nCourseID → CourseName, InstructorID   given (2)\nCourseID → CourseName                 decomposition\nCourseID → InstructorID               decomposition\nInstructorID → InstructorName         decomposition of (3)\nCourseID → InstructorName             transitivity\nStudentID, CourseID → StudentName, CourseID   augmentation of (1) by CourseID"
    ]
  },
  "39223efb18623853": {
    "answer": [
      "(i) In the hierarchical model, E_TRAX data is a tree of parent–child records (Customer → Orders → Order items), so many-to-many links need duplicate records. The network model stores records joined by owner–member sets and can express M:N links directly through pointers. The relational model stores tables linked by foreign keys, and the relational model is the best choice here.",
      "(ii) A layered (three-tier) architecture separates the presentation, application/business-logic and data layers. (iii) The DBA has full administrative access, the system analyst has design-level access, the application programmer has development access through the application tier, and naive end users only run canned transactions."
    ],
    "points": [
      "Hierarchical: root CUSTOMER with child ORDER segments, each ORDER with child ORDER_ITEM segments; PRODUCT must be duplicated under each item or modelled as a separate tree with virtual pointers; 1:N natural, M:N awkward; navigation along fixed paths (IMS).",
      "Network (CODASYL): record types CUSTOMER, ORDER, PRODUCT, ORDER_ITEM; sets CUSTOMER–ORDER (owner–member), ORDER–ITEM, PRODUCT–ITEM; M:N via the linking record ORDER_ITEM; record-at-a-time pointer navigation.",
      "Relational: CUSTOMER(cust_id, …), PRODUCT(prod_id, …), ORDERS(order_id, cust_id FK, …), ORDER_ITEM(order_id FK, prod_id FK, qty), PAYMENT(txn_id, order_id FK, …); relationships through matching key values; declarative SQL; most flexible → preferred.",
      "Presentation layer: web/mobile UI for browsing, cart, checkout; validates input; calls APIs.",
      "Application/business layer: services for catalog, cart, order, payment, inventory; enforces business rules (stock check, pricing, discounts), authentication, transactions.",
      "Data layer: DBMS with tables, indexes, transactions, backup/recovery; may include cache and replicas.",
      "DBA: full privileges — creates schema and users, grants/revokes, performance tuning, backup/recovery, security policies.",
      "System analyst: gathers requirements, specifies canned transactions and views; read access to schema/metadata and test data, not production write access.",
      "Application programmer: implements and tests programs (stored procedures, APIs) using DML; privileges on development/test databases and on specific tables via application roles.",
      "Naive end user (customer, order clerk): uses forms — place order, track shipment; no direct SQL; access limited to own data through views/application."
    ],
    "example": [
      "Hierarchical          Network                         Relational\nCUSTOMER              CUSTOMER ─owns─▶ ORDER          CUSTOMER(cust_id PK)\n └ ORDER              ORDER ─owns─▶ ORDER_ITEM        ORDERS(order_id PK, cust_id FK)\n    └ ORDER_ITEM      PRODUCT ─owns─▶ ORDER_ITEM      ORDER_ITEM(order_id FK, prod_id FK, qty)\n       └ PRODUCT*     (M:N via linking record)        PRODUCT(prod_id PK)\n(* duplicated)"
    ]
  },
  "1910080c63e01e30": {
    "answer": [
      "Entities: DEPARTMENT, FACULTY, RESEARCH_STUDENT, PROJECT and FUNDING_AGENCY, with FUNDING_AGENCY specialised into GOVERNMENT_AGENCY and PRIVATE_AGENCY. Faculty and students are affiliated to departments; faculty guide students; faculty and students work on projects (M:N team membership); each project is sponsored by one funding agency; and interdisciplinary projects span several departments."
    ],
    "points": [
      "DEPARTMENT(dept_id key, name, location, {contact_number} multivalued).",
      "FACULTY(employee_id key, name, designation, DOB, Age derived, email, contact_number, cabin composite (building_name, room_no), research_domain, publication_count).",
      "RESEARCH_STUDENT(research_student_id key, name). AFFILIATED_TO: FACULTY N — 1 DEPARTMENT and RESEARCH_STUDENT N — 1 DEPARTMENT, both total.",
      "GUIDES: FACULTY 1 — N RESEARCH_STUDENT (a faculty takes one or more students; each student has one guide → total on student).",
      "PROJECT(project_id key, title, start_date, duration, status ∈ {ongoing, completed}); end_date derivable from start_date + duration.",
      "WORKS_ON (team membership): FACULTY M — N PROJECT (total on faculty side if every faculty undertakes ≥ 1 project; total on project) and RESEARCH_STUDENT M — N PROJECT; attribute role.",
      "INVOLVES (interdisciplinary): PROJECT M — N DEPARTMENT — derived from members’ departments or stored explicitly.",
      "FUNDING_AGENCY(reg_or_license_no key, name, email_id, geographical_scope ∈ {national, international}). Specialisation on organisational nature: GOVERNMENT_AGENCY, PRIVATE_AGENCY — disjoint, total.",
      "SPONSORS: FUNDING_AGENCY 1 — N PROJECT; total on project (every project is sponsored), partial on agency.",
      "No weak entity is strictly required; if project milestones were tracked, MILESTONE would be weak with partial key milestone_no."
    ],
    "example": [
      "DEPARTMENT (dept_id, name, location, {contact_number})\n   │1                          │1                     │M\n<AFFILIATED_TO>N═ FACULTY   <AFFILIATED_TO>N═ STUDENT   <INVOLVES>N── PROJECT\nFACULTY (employee_id, name, designation, DOB, [Age], email, phone,\n         (cabin: building, room_no), domain, publication_count)\nFACULTY ─1─<GUIDES>─N═ RESEARCH_STUDENT (research_student_id, name)\nFACULTY ─M─<WORKS_ON (role)>─N═ PROJECT (project_id, title, duration, status)\nRESEARCH_STUDENT ─M─<WORKS_ON>─N─ PROJECT\nFUNDING_AGENCY (reg_no, name, email_id, scope) ─1─<SPONSORS>─N═ PROJECT\nFUNDING_AGENCY ─(d, total)─▷ GOVERNMENT_AGENCY | PRIVATE_AGENCY"
    ]
  },
  "29738c84ca37d543": {
    "answer": [
      "Each of the five queries joins PERFORMANCE with PLAYER and/or MATCH, and uses aggregates with GROUP BY or HAVING where totals or counts are needed."
    ],
    "points": [
      "(i) Join all three tables on match_date; DISTINCT avoids duplicates.",
      "(ii) SUM(runs) across all matches for Indian players.",
      "(iii) Filter rows with runs > 50.",
      "(iv) LEFT JOIN keeps matches with no performance rows (total 0 via COALESCE).",
      "(v) COUNT(DISTINCT match_id) > 10 in HAVING."
    ],
    "example": [
      "-- (i)\nSELECT DISTINCT p.player_name, p.country\nFROM   PLAYER p\nJOIN   PERFORMANCE pf ON pf.player_id = p.player_id\nJOIN   MATCH m        ON m.match_id  = pf.match_id\nWHERE  m.match_date = DATE '2024-05-10';",
      "-- (ii)\nSELECT SUM(pf.runs) AS total_runs\nFROM   PERFORMANCE pf JOIN PLAYER p ON p.player_id = pf.player_id\nWHERE  p.country = 'India';",
      "-- (iii)\nSELECT p.player_name, m.match_date, m.opponent_team\nFROM   PERFORMANCE pf\nJOIN   PLAYER p ON p.player_id = pf.player_id\nJOIN   MATCH m  ON m.match_id  = pf.match_id\nWHERE  pf.runs > 50;",
      "-- (iv)\nSELECT m.match_id, m.match_date, m.opponent_team,\n       COALESCE(SUM(pf.wickets), 0) AS total_wickets\nFROM   MATCH m LEFT JOIN PERFORMANCE pf ON pf.match_id = m.match_id\nGROUP BY m.match_id, m.match_date, m.opponent_team;",
      "-- (v)\nSELECT p.player_name\nFROM   PLAYER p JOIN PERFORMANCE pf ON pf.player_id = p.player_id\nGROUP BY p.player_id, p.player_name\nHAVING COUNT(DISTINCT pf.match_id) > 10;"
    ]
  },
  "c62a0df72edc09b8": {
    "answer": [
      "Mapping the food-delivery ER diagram gives CUSTOMER, RESTAURANT, DELIVERY_BOY, MENU, MENU_ITEMS (multivalued), PAYMENT_DETAILS, ORDERS (with FKs for place, finalise, deliver and order-payment) and FOOD (with FKs for manage, contain and listed)."
    ],
    "points": [
      "Step 1 — strong entities: CUSTOMER(C_ID), ORDER(ID), PAYMENT_DETAILS(ID), DELIVERY_BOY(ID; composite Name → F_Name, L_Name), RESTAURANT(S_ID), FOOD(ID), MENU(ID).",
      "Step 2 — weak entities: none in the diagram.",
      "Step 3 — 1:1 relationships: order_payment (ORDER 1 — 1 PAYMENT_DETAILS) → payment_id FK UNIQUE in ORDERS (or order_id in PAYMENT_DETAILS); deliver (ORDER 1 — 1 DELIVERY_BOY) → delivery_boy_id FK UNIQUE in ORDERS (if a delivery boy handles many orders over time, drop UNIQUE).",
      "Step 4 — 1:N relationships: place (CUSTOMER 1 — N ORDER) → cust_id FK in ORDERS; finalise (RESTAURANT 1 — N ORDER) → restaurant_id FK in ORDERS; manage (RESTAURANT 1 — N FOOD) → restaurant_id FK in FOOD; contain (ORDER 1 — N FOOD) → order_id FK in FOOD; listed (FOOD N — 1 MENU) → menu_id FK in FOOD.",
      "Step 5 — M:N relationships: none as drawn. Realistically ORDER–FOOD is M:N, which would give ORDER_FOOD(order_id, food_id, qty).",
      "Step 6 — multivalued attribute Items (double ellipse) of MENU → MENU_ITEMS(menu_id, item) with composite PK.",
      "Step 7 — n-ary relationships: none."
    ],
    "example": [
      "CUSTOMER        (c_id PK, c_name, phone, address)\nRESTAURANT      (s_id PK, user_name UNIQUE, password)\nDELIVERY_BOY    (id PK, f_name, l_name, phone)\nPAYMENT_DETAILS (id PK, amount, payment_mode)\nMENU            (id PK, price)\nMENU_ITEMS      (menu_id FK → MENU, item, PK(menu_id, item))\nORDERS          (id PK, total, time,\n                 c_id FK → CUSTOMER NOT NULL,\n                 restaurant_id FK → RESTAURANT,\n                 payment_id FK → PAYMENT_DETAILS UNIQUE,\n                 delivery_boy_id FK → DELIVERY_BOY UNIQUE)\nFOOD            (id PK, f_name, price, amount,\n                 restaurant_id FK → RESTAURANT,\n                 order_id FK → ORDERS,\n                 menu_id FK → MENU)"
    ]
  },
  "40a69d44536b400b": {
    "answer": [
      "(i) The candidate keys are CF and ABF. (ii) The canonical cover is {AB → C, BC → A, BC → D, D → E, CF → B}; in combined form {AB → C, BC → AD, D → E, CF → B}. (iii) F and G are equivalent: each set implies every FD of the other."
    ],
    "points": [
      "F appears on no right-hand side → every key contains F. F⁺ = {F}.",
      "CF⁺: CF → B; BC → A, D; D → E ⇒ {A, B, C, D, E, F} → CF is a key (C⁺ = C, F⁺ = F, so minimal).",
      "ABF⁺: AB → C; then CF → B, BC → AD, D → E ⇒ all → ABF is a key; AF⁺ = {A, F}, BF⁺ = {B, F} → minimal. No other minimal key (DF, EF, AEF … do not reach C).",
      "Canonical cover step 1: split RHS → AB → C, BC → A, BC → D, D → E, CF → B.",
      "Step 2 (extraneous LHS): AB → C — A⁺ = A, B⁺ = B, none extraneous; BC → A/D — B⁺ = B, C⁺ = C; CF → B — C⁺ = C, F⁺ = F → none.",
      "Step 3 (redundant FDs): removing any FD loses its RHS from the closure of its LHS → none redundant. Union back: {AB → C, BC → AD, D → E, CF → B}.",
      "(iii) G from F: A → C (given) and AC → D ⇒ A → D, so A → CD ✓; E → AD and E → H ⇒ E → AH ✓.",
      "(iii) F from G: A → CD ⇒ A → C ✓ and AC → D ✓ (A alone gives D); E → AH ⇒ E → A → CD, so E → AD ✓, E → H ✓. Hence F ≡ G."
    ],
    "example": [
      "Closure        Result              Key?\nF⁺             {F}                 –\nCF⁺            {A, B, C, D, E, F}  yes (minimal)\nABF⁺           {A, B, C, D, E, F}  yes (minimal)\nAF⁺ / BF⁺      {A, F} / {B, F}     no"
    ]
  },
  "0a41985c36d94292": {
    "answer": [
      "The minimum is three tables: USER(user_no, name), USER_MOBILE(user_no, mobile) for the multivalued attribute, and ITEM(item_no, name, qty, user_no, ordered_date). The 1:M orders relationship is absorbed into ITEM as a foreign key plus the relationship attribute orderedDate."
    ],
    "points": [
      "Strong entities USER and ITEM → one table each.",
      "mobile is multivalued (double ellipse) → must go in a separate table USER_MOBILE(user_no, mobile) with composite PK; storing several numbers in one column would violate 1NF.",
      "orders is 1:M (one user orders many items, each item ordered by one user) → no separate table; put user_no FK and ordered_date in ITEM (the M side). This gives the minimum number of tables.",
      "PK user_no in USER, item_no in ITEM: entity integrity — unique, non-null identifiers.",
      "PK (user_no, mobile) in USER_MOBILE: prevents the same number being stored twice for a user.",
      "FK USER_MOBILE.user_no → USER (ON DELETE CASCADE): numbers disappear with the user.",
      "FK ITEM.user_no → USER: an item cannot be ordered by a non-existent user (referential integrity); nullable if an item may exist unordered.",
      "Other constraints: NOT NULL on name; CHECK (qty > 0); CHECK on mobile format (10 digits); ordered_date NOT NULL when user_no is not null."
    ],
    "example": [
      "CREATE TABLE app_user (\n  user_no   INT PRIMARY KEY,\n  name      VARCHAR(50) NOT NULL\n);\nCREATE TABLE user_mobile (\n  user_no   INT REFERENCES app_user(user_no) ON DELETE CASCADE,\n  mobile    CHAR(10) CHECK (mobile ~ '^[0-9]{10}$'),\n  PRIMARY KEY (user_no, mobile)\n);\nCREATE TABLE item (\n  item_no      INT PRIMARY KEY,\n  name         VARCHAR(50) NOT NULL,\n  qty          INT CHECK (qty > 0),\n  user_no      INT REFERENCES app_user(user_no),\n  ordered_date DATE\n);"
    ]
  },
  "4b5e6b54e2d07d16": {
    "answer": [
      "(a) Actors on the scene: the DBA, database designers, end users (deans, faculty, staff and students as casual, parametric or sophisticated users) and the system analysts and application programmers of the Software Development Cell. Workers behind the scene: DBMS designers and implementers, tool developers, and operators and maintenance staff.",
      "(b) A VTOP request flows from the user interface through the application programs and the DBMS query processor (compiler, optimizer, runtime processor) to the stored data manager and buffer manager. Results come back through the same path, filtered by each user's view and privileges."
    ],
    "points": [
      "DBA: grants role-based privileges (dean = all, faculty = own + student details, student = own data), backup/recovery, tuning.",
      "Database designers: model entities such as STUDENT, FACULTY, COURSE, ATTENDANCE, MARKS and define views per role.",
      "End users — Deans (casual/sophisticated: ad-hoc reports across all records), Faculty (parametric: upload marks, attendance; view student details), Staff (parametric: fee and hostel entries), Students (naive: view timetable, grades, register courses).",
      "Software Development Cell — system analysts determine requirements and specify canned transactions; application programmers implement, test and fix VTOP programs and resolve data-retrieval issues.",
      "Behind the scenes: DBMS vendor designers/implementers (query processor, concurrency, recovery modules), tool developers (report generators, CASE tools), operators/maintenance personnel (run hardware and software, backups).",
      "(b) Processing flow: 1) user action on VTOP form → application program issues SQL; 2) query compiler parses and checks it against the system catalog; 3) query optimizer chooses an execution plan using indexes and statistics; 4) runtime DB processor executes it, coordinating with concurrency control (locks for simultaneous course registration) and recovery (logging); 5) stored data manager/buffer manager fetch pages from disk; 6) results pass back through the view/authorisation layer so a student sees only own records.",
      "DDL changes by the DBA go through the DDL compiler into the catalog; utilities handle bulk loading of new-semester data and backups."
    ],
    "example": [
      "DBA ──DDL──▶ DDL compiler ──▶ System catalog / data dictionary ◀──┐\nCasual users ──▶ Interactive query ──▶ Query compiler ──▶ Query optimizer ─┐\nApp programmers ──▶ Precompiler ──▶ DML compiler ──▶ compiled transactions ─┤\nParametric users ──▶ canned transactions ───────────────────────────────────┤\n                                                                           ▼\n                    Runtime DB processor ⇄ Concurrency control / Recovery\n                              │\n                    Stored data manager ⇄ Buffer manager\n                              │\n                    Stored database + catalog on disk"
    ]
  },
  "aa01e9fd2edab28a": {
    "answer": [
      "EER design: SPORTS_CLUB generalises CRICKET_CLUB, FOOTBALL_CLUB, TENNIS_CLUB and CHESS_CLUB (disjoint, total). CLUB_MEMBER, identified by jersey_id, is specialised into STUDENT_MEMBER, FACULTY_MEMBER and DEPENDENT_MEMBER (disjoint, total). A COACH trains each club (1:1). A student joins exactly one club (N:1), a faculty member joins many clubs (M:N), and DEPENDENT is a weak entity of FACULTY who may also be a club member."
    ],
    "points": [
      "SPORTS_CLUB(club_id key, club_name, ground, founded_on); specialisation by club_type — CRICKET_CLUB(no_of_nets), FOOTBALL_CLUB(field_size), TENNIS_CLUB(no_of_courts), CHESS_CLUB(no_of_boards); disjoint and total.",
      "COACH(coach_id key, name, experience, salary, field_of_expertise). TRAINS: COACH 1 — 1 SPORTS_CLUB, total on club (each club has a coach).",
      "CLUB_MEMBER(jersey_id key, name, phone, join_date) — generalisation of the people who can be members.",
      "Specialisation of CLUB_MEMBER: STUDENT_MEMBER(reg_no, programme), FACULTY_MEMBER(emp_id, school), DEPENDENT_MEMBER(relationship) — disjoint, total.",
      "STUDENT_MEMBER N — 1 SPORTS_CLUB (JOINS_ONE): a student can join only one club.",
      "FACULTY_MEMBER M — N SPORTS_CLUB (JOINS_MANY) with attribute membership_date.",
      "FACULTY(emp_id key, name, school) and weak DEPENDENT (partial key dep_name, relationship, dob) via HAS_DEPENDENT (total on dependent). A dependent who registers becomes a DEPENDENT_MEMBER (link 1 — 1).",
      "TRAINS_MEMBERS is implied: a coach trains all registered members of their club (derivable through membership)."
    ],
    "example": [
      "                    SPORTS_CLUB (club_id, club_name)\n                         ║ (d, total) on club_type\n     CRICKET_CLUB   FOOTBALL_CLUB   TENNIS_CLUB   CHESS_CLUB\nCOACH (coach_id, name, experience, salary, expertise) ─1─<TRAINS>─1═ SPORTS_CLUB\n\n                    CLUB_MEMBER (jersey_id, name, phone)\n                         ║ (d, total)\n     STUDENT_MEMBER       FACULTY_MEMBER        DEPENDENT_MEMBER\n          │N                   │M                       │1\n     <JOINS_ONE>          <JOINS_MANY>             <IS_A_DEP>\n          │1                   │N                       │1\n     SPORTS_CLUB          SPORTS_CLUB        [[DEPENDENT]] ══<<HAS_DEPENDENT>>── FACULTY"
    ]
  },
  "aa38cc62f02682aa": {
    "answer": [
      "(i) Use the relational model, designed from an ER/EER conceptual model. Library entities (BOOK, AUTHOR, MEMBER, LOAN, PUBLISHER, DIGITAL_COPY) map naturally to tables linked by keys, and SQL supports catalog search and borrowing transactions. (ii) Achieve data independence through the three-schema architecture: views for logical independence, and the conceptual/internal mapping for physical independence."
    ],
    "points": [
      "Entities: BOOK(isbn, title, year, publisher_id), AUTHOR(author_id, name), BOOK_AUTHOR(isbn, author_id) for M:N, MEMBER(member_id, name, type), DIGITAL_COPY(copy_id, isbn, format, url), LOAN(copy_id, member_id, issue_date, due_date, return_date), PUBLISHER(publisher_id, name).",
      "Why relational: well-defined structure, integrity constraints (FKs prevent loans of non-existent copies), ACID transactions for issue/return, powerful queries (search by author, subject), mature indexing (full-text index on title).",
      "Alternatives: document model for heterogeneous metadata (e-books, journals, videos) or a hybrid with a search engine; hierarchical/network models are too rigid for M:N author–book links.",
      "Physical data independence: move e-book files to cloud storage, add a full-text index or partition LOAN by year — only the internal schema and conceptual/internal mapping change; queries unchanged.",
      "Logical data independence: add attribute BOOK.language or split MEMBER into STUDENT_MEMBER and FACULTY_MEMBER — define views (e.g. CATALOG_VIEW(isbn, title, author_name)) so the web application keeps working.",
      "Other means: access through stored procedures/APIs rather than direct table access; DBMS catalog holds metadata so programs do not embed file formats."
    ],
    "example": [
      "PUBLISHER ─1──N─ BOOK ─M──N─ AUTHOR        (via BOOK_AUTHOR)\n                   │1\n                   N\n             DIGITAL_COPY ─1──N─ LOAN ─N──1─ MEMBER\nExternal views: MemberView(title, due_date)  LibrarianView(all loans)\nConceptual: tables above   Internal: B+ tree on isbn, full-text index, blob storage"
    ]
  },
  "050e61fc44721157": {
    "answer": [
      "Create the three tables with the requested PRIMARY KEY, NOT NULL, FOREIGN KEY and CHECK constraints, then query customers whose balance is above 50,000. BranchId must be the PK of Bank so that Customer.BranchId can reference it."
    ],
    "points": [
      "PK constraints: Bank(BranchId), Employee(Eid), Customer(AcNo) as PK and Cid UNIQUE (or composite PK (Cid, AcNo) if one customer holds many accounts).",
      "NOT NULL: BankName, Address (Employee and Customer), Ename.",
      "FK: Customer.BranchId → Bank.BranchId.",
      "CHECK: balance ≥ 5000.",
      "Result format (ii): a one-column table of Cname values; with sample rows, only customers above 50000 appear."
    ],
    "example": [
      "CREATE TABLE Bank (\n  BankName VARCHAR(50)  NOT NULL,\n  Branch   VARCHAR(50),\n  BranchId VARCHAR(10)  PRIMARY KEY,\n  Asset    DECIMAL(15,2)\n);\n\nCREATE TABLE Employee (\n  Eid         VARCHAR(10) PRIMARY KEY,\n  Ename       VARCHAR(50) NOT NULL,\n  Designation VARCHAR(30),\n  Address     VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE Customer (\n  Cid      VARCHAR(10) UNIQUE NOT NULL,\n  AcNo     VARCHAR(15) PRIMARY KEY,\n  Cname    VARCHAR(50),\n  balance  DECIMAL(12,2) CHECK (balance >= 5000),\n  mobileno CHAR(10),\n  Address  VARCHAR(100) NOT NULL,\n  BranchId VARCHAR(10) REFERENCES Bank(BranchId)\n);",
      "SELECT Cname FROM Customer WHERE balance > 50000;\n\nSample result\nCname\n-------\nAnita\nRahul"
    ]
  },
  "d284320745b0a8d3": {
    "answer": [
      "(a)(i) The candidate keys are A and F. (ii) A minimal cover is {A → C, A → D, A → E, A → F, F → A, F → B}.",
      "(b) P and Q are equivalent: every FD of Q follows from P, and every FD of P follows from Q."
    ],
    "points": [
      "A⁺: A → BC; AC → DEF ⇒ {A, B, C, D, E, F} → A is a key. F⁺: F → AB ⇒ then A gives everything → F is a key. B⁺ = B, C⁺ = C, D⁺ = D, E⁺ = E; no other single attribute and every key contains A or F → keys {A}, {F}.",
      "Minimal cover step 1: A → B, A → C, AC → D, AC → E, AC → F, F → A, F → B.",
      "Step 2 (extraneous LHS): in AC → D/E/F, A⁺ already contains C ⇒ C is extraneous → A → D, A → E, A → F.",
      "Step 3 (redundant FDs): A → B is implied by A → F and F → B → remove. F → B is needed (F → A → B was just removed, so B now comes only from F → B). Others are required.",
      "Result: {A → C, A → D, A → E, A → F, F → A, F → B}. (Another valid cover keeps A → B and removes F → B.)",
      "(b) Q from P: A → B and AB → C ⇒ A → C, so A → BC ✓. D → AC ⇒ D → A, and D → E ⇒ D → AE ✓.",
      "(b) P from Q: A → BC ⇒ A → B ✓ and AB → C ✓. D → AE ⇒ D → A → BC ⇒ D → AC ✓; D → E ✓. Therefore P ≡ Q."
    ],
    "example": [
      "Check        Using   Closure                Holds?\nA → BC       P       A⁺ = {A, B, C}         ✓\nD → AE       P       D⁺ = {D, A, C, E, B}   ✓\nAB → C       Q       AB⁺ = {A, B, C}        ✓\nD → AC       Q       D⁺ = {D, A, E, B, C}   ✓\n⇒ P ≡ Q"
    ]
  },
  "ae28fd1f4103aa11": {
    "answer": [
      "(a) The table is not in 4NF. Subject and Activity are independent facts about a student, so Student →→ Subject and Student →→ Activity hold while Student is not a superkey. Decompose into STUDENT_SUBJECT(Student, Subject) and STUDENT_ACTIVITY(Student, Activity).",
      "(b) Both resulting tables are in 5NF. Each has only two attributes, both forming the key, so no non-trivial join dependency can exist."
    ],
    "points": [
      "Key of the original table: (Student, Subject, Activity) — all three attributes.",
      "Multivalued dependency X →→ Y: for one X value, the set of Y values is independent of the other attributes. Because Subject and Activity are independent, every Subject of a student must pair with every Activity of that student (e.g. Bella needs rows for all four combinations of {Algorithms, Computation} × {P03, P06, P07, P08}) → redundancy and insertion/deletion anomalies.",
      "4NF rule: for every non-trivial MVD X →→ Y, X must be a superkey. Student is not → violation.",
      "Decomposition is lossless because Student →→ Subject (R1 ∩ R2 = Student and R1 ∩ R2 →→ R1 − R2).",
      "5NF (PJNF): every join dependency must be implied by candidate keys. In two-attribute all-key relations, any decomposition would only produce single-attribute projections whose join is a Cartesian product (lossy), so the only JDs are trivial → 5NF."
    ],
    "example": [
      "STUDENT_SUBJECT                 STUDENT_ACTIVITY\nStudent  Subject                Student  Activity\nJones    Data Structures        Jones    P01\nBella    Algorithms             Bella    P03\nBella    Computation            Bella    P06\nMargot   Database               Bella    P07\nMargot   Compiler               Bella    P08\nPricy    Network                Margot   P09\n                                Pricy    P06"
    ]
  },
  "a3dcf1646d524fcf": {
    "answer": [
      "The relational algebra expressions for (a)–(e) are below. In them, emp-name is abbreviated to emp and company-name to company."
    ],
    "points": [
      "(a) A selection on works, then a projection.",
      "(b) Join employee with the selected works tuples to get street and city.",
      "(c) Join employee, works and company with an equality on both city attributes (rename to distinguish).",
      "(d) Set difference: all employees minus those working for Honda.",
      "(e) The aggregate (grouping) operator 𝒢 with SUM, MIN and MAX grouped by company."
    ],
    "example": [
      "(a) π emp ( σ salary > 5000 (works) )\n(b) π emp, street, city ( employee ⋈ σ company = 'Honda' ∧ salary > 10000 (works) )\n(c) π employee.emp ( σ employee.city = company.city ( employee ⋈ works ⋈ company ) )\n     — or with renaming: π emp ( employee ⋈ works ⋈ ρ c(company, city)(company) )\n(d) π emp (employee) − π emp ( σ company = 'Honda' (works) )\n(e) company 𝒢 SUM(salary), MIN(salary), MAX(salary) (works)"
    ]
  },
  "36c169e8593f5910": {
    "answer": [
      "(a) The file needs 5,000 blocks. (b) A binary search on the data file needs ⌈log₂ 5000⌉ = 13 block accesses.",
      "(c) Primary index: 13-byte entries, index file of 65,000 bytes, blocking factor 39, 5,000 entries in 129 blocks, so a search costs 8 + 1 = 9 block accesses.",
      "(d) Secondary index: 15-byte entries, index of 750,000 bytes, blocking factor 34, 1,471 blocks, so a search costs 11 + 1 = 12 block accesses."
    ],
    "points": [
      "Blocking factor of data file: bfr = ⌊B / R⌋ = ⌊512 / 50⌋ = 10 records per block (unspanned).",
      "Data blocks b = ⌈50,000 / 10⌉ = 5,000.",
      "Primary index is sparse: one entry per data block → 5,000 entries; entry size = key 8 + pointer 5 = 13 bytes; index size = 5,000 × 13 = 65,000 bytes.",
      "Index bfr = ⌊512 / 13⌋ = 39 entries per block; index blocks = ⌈5,000 / 39⌉ = 129.",
      "Search with primary index = binary search on index ⌈log₂ 129⌉ = 8 + 1 data block = 9 accesses (vs 13 without index).",
      "Secondary index on a non-ordering key is dense: one entry per record → 50,000 entries; entry = 10 + 5 = 15 bytes; size = 750,000 bytes.",
      "Secondary index bfr = ⌊512 / 15⌋ = 34; blocks = ⌈50,000 / 34⌉ = 1,471.",
      "Search = ⌈log₂ 1,471⌉ = 11 + 1 data block = 12 accesses (vs linear search average b/2 = 2,500 on the unordered field)."
    ],
    "example": [
      "Quantity                     Data file   Primary index   Secondary index\nEntry/record size (bytes)    50          8 + 5 = 13      10 + 5 = 15\nBlocking factor              10          39              34\nNumber of entries/records    50,000      5,000           50,000\nBlocks                       5,000       129             1,471\nSize (bytes)                 —           65,000          750,000\nBlock accesses per search    13 (binary) 8 + 1 = 9       11 + 1 = 12"
    ]
  },
  "4ee0526f8c814bf2": {
    "answer": [
      "(a) Durability. (b) Atomicity. (c) Isolation. (d) Consistency."
    ],
    "points": [
      "Atomicity — all operations of a transaction are executed or none: transferring ₹500 from A to B must debit A and credit B together; if the system fails after the debit, the recovery manager undoes it using the log.",
      "Consistency — a transaction moves the database from one valid state to another, preserving constraints: total A + B stays the same before and after the transfer; balance ≥ 0 remains true.",
      "Isolation — concurrent transactions do not see each other’s intermediate results: while the transfer is in progress, a balance-report transaction must not see A debited but B not yet credited; enforced by locking or MVCC.",
      "Durability — once committed, changes survive failures: after the ‘Transfer successful’ message, a power failure cannot undo it, because the commit record and redo log are on stable storage.",
      "Responsible components: atomicity — transaction and recovery manager; consistency — programmer and integrity constraints; isolation — concurrency-control manager; durability — recovery manager and logging."
    ],
    "example": [
      "T: read(A); A := A − 500; write(A); read(B); B := B + 500; write(B); commit\nA (Atomicity): crash after write(A) → undo → A restored\nC (Consistency): A + B constant\nI (Isolation): no other T sees A − 500 before B + 500\nD (Durability): after commit, a crash → redo from log"
    ]
  },
  "3e8896f3871f5799": {
    "answer": [
      "R1 is not in BCNF: building_no → building_name has a non-superkey on the left. Decompose it into R11(elevator_no, building_no, capacity) and R12(building_no, building_name). R2 is already in BCNF because its only determinant, elevator_no, is its key."
    ],
    "points": [
      "R1 key: elevator_no⁺ = {elevator_no, building_no, capacity, building_name} → elevator_no is the only candidate key.",
      "BCNF test on R1: elevator_no → building_no, capacity ✓ (superkey); building_no → building_name ✗ (building_no is not a superkey) — a transitive dependency elevator_no → building_no → building_name.",
      "Decompose on the violating FD X → Y: R11 = R1 − Y = (elevator_no, building_no, capacity), R12 = X ∪ Y = (building_no, building_name).",
      "Lossless: R11 ∩ R12 = building_no, a key of R12. Dependency preserving: each FD lies in one relation.",
      "R2(elevator_no, building_no, capacity): only FD elevator_no → building_no, capacity with elevator_no as key → BCNF. (R2 is identical to R11.)"
    ],
    "example": [
      "R11 (elevator_no PK, building_no FK → R12, capacity)\nR12 (building_no PK, building_name)\nR2  (elevator_no PK, building_no, capacity)   — already BCNF"
    ]
  },
  "b07a2a13952a4263": {
    "answer": [
      "The MVDs are Name →→ {Areacode, Phone} and Name →→ {likes, manufacturer}: a person's phone numbers are independent of the products they like. There is also the FD likes → manufacturer. The 4NF result is R1(Name, Areacode, Phone), R2(Name, likes) and R3(likes, manufacturer)."
    ],
    "points": [
      "Evidence: every (Areacode, Phone) pair of Abi appears with every (likes, manufacturer) pair — 2 × 2 = 4 rows, the signature of independent MVDs.",
      "Key of the table: (Name, Phone, likes) — all non-trivial MVDs have Name on the left, which is not a superkey → 4NF violated (redundancy: adding a new phone would need 2 new rows).",
      "Step 1 (4NF split on Name →→ Areacode, Phone): R1(Name, Areacode, Phone) and R2'(Name, likes, manufacturer). Lossless because R1 ∩ R2' = Name and Name →→ R1 − R2'.",
      "Step 2: in R2', likes → manufacturer (Strawberry → Tata, chocolate → Britania), and likes is not a key of R2' → BCNF/4NF violation → R2(Name, likes) and R3(likes, manufacturer).",
      "Phone → Areacode may also hold; R1 is still in BCNF with key Phone (or (Name, Phone)).",
      "Final relations have no non-trivial MVDs other than those implied by keys → 4NF."
    ],
    "example": [
      "R1                         R2                 R3\nName  Areacode  Phone      Name  likes        likes       manufacturer\nAbi   632014    555-1111   Abi   Strawberry   Strawberry  Tata\nAbi   632224    555-1199   Abi   chocolate    chocolate   Britania"
    ]
  },
  "af8c93a46f63af44": {
    "answer": [
      "(i) Blocking factors: data file 12, primary index 23, clustering index 28. (ii) Blocks: data file 4,167, primary index 182, clustering index 18. (iii) Accesses: 8 + 1 = 9 with the primary index, and 5 + 1 = 6 (plus any further blocks of the cluster) with the clustering index, compared with 13 for a binary search on the data file."
    ],
    "points": [
      "Data file: bfr = ⌊256 / 20⌋ = 12 records/block; blocks = ⌈50,000 / 12⌉ = 4,167.",
      "Primary index (sparse, one entry per data block): entry = key 5 + block pointer 6 = 11 bytes; bfr = ⌊256 / 11⌋ = 23; entries = 4,167; blocks = ⌈4,167 / 23⌉ = 182.",
      "Clustering index (one entry per distinct zipcode): entry = key 3 + block pointer 6 = 9 bytes; bfr = ⌊256 / 9⌋ = 28; entries = 500; blocks = ⌈500 / 28⌉ = 18.",
      "Accesses with primary index = ⌈log₂ 182⌉ + 1 = 8 + 1 = 9.",
      "Accesses with clustering index = ⌈log₂ 18⌉ + 1 = 5 + 1 = 6 to reach the first data block of the cluster; each zipcode has ≈ 50,000 / 500 = 100 records ≈ ⌈100 / 12⌉ = 9 blocks, so retrieving all of them costs about 5 + 9 = 14 accesses.",
      "Without an index: binary search on data file = ⌈log₂ 4,167⌉ = 13 accesses. (The record pointer of 5 bytes would be used only for a dense/secondary index.)"
    ],
    "example": [
      "File               Entry size   bfr   Entries   Blocks   Accesses\nData file          20           12    50,000    4,167    13 (binary search)\nPrimary index      5 + 6 = 11   23    4,167     182      8 + 1 = 9\nClustering index   3 + 6 = 9    28    500       18       5 + 1 = 6 (first block of cluster)"
    ]
  },
  "723ee27b7bfd0de0": {
    "answer": [
      "Each expression is converted to its SQL equivalent, and each SQL query to relational algebra; see the code block below."
    ],
    "points": [
      "(i) σ with a conjunction maps to WHERE … AND …; π maps to the SELECT list. (Comparing starName = name inside one MovieStar tuple matches stars whose name fields agree.)",
      "(ii) ρ_M renames the projected subquery; × followed by σ is an equi-join → join with a derived table or a subquery with IN.",
      "(iii) Selection with two conditions on employee.",
      "(iv) OR maps to ∨ inside σ (equivalently the union of two selections).",
      "(v) != maps to ≠ in the selection predicate."
    ],
    "example": [
      "(i)   SELECT movieTitle FROM MovieStar\n      WHERE starName = name AND birthdate = 1960;",
      "(ii)  SELECT movieTitle\n      FROM   StarsIn, (SELECT name FROM MovieStar WHERE birthdate = 1960) AS M\n      WHERE  starName = M.name;\n      -- or: SELECT movieTitle FROM StarsIn\n      --     WHERE starName IN (SELECT name FROM MovieStar WHERE birthdate = 1960);",
      "(iii) SELECT fname, lname FROM employee WHERE dno = 4 AND salary > 50000;",
      "(iv)  π Id, Name ( σ Hobby = 'stamps' ∨ Hobby = 'coins' (Person) )\n      ≡ π Id, Name (σ Hobby='stamps'(Person)) ∪ π Id, Name (σ Hobby='coins'(Person))",
      "(v)   π StudId, CrsCode ( σ Grade ≠ 'F' (Transcript) )"
    ]
  },
  "c3af41514b03f5d2": {
    "answer": [
      "The optimal tree applies σ location='SJT' ∧ name='CSE' to Department first, projects Department down to Dnumber and Address and Project down to Pnumber and Dnum, then does a single join on P.Dnum = D.Dnumber, with the final projection at the root."
    ],
    "points": [
      "Step 1 — canonical tree: π Pnumber, Dnum, Address ( σ P.Dnum = D.Dnumber ∧ D.location = 'SJT' ∧ D.name = 'CSE' ( Project × Department ) ).",
      "Step 2 — cascade the conjunctive selection into three separate σ operations.",
      "Step 3 — push σ location = 'SJT' and σ name = 'CSE' down to the Department leaf (they mention only Department attributes).",
      "Step 4 — combine × with σ P.Dnum = D.Dnumber into a join ⋈ P.Dnum = D.Dnumber.",
      "Step 5 — push projections down: from Department keep Dnumber, Address; from Project keep Pnumber, Dnum.",
      "Step 6 — order leaves by selectivity: the filtered Department (likely one row) becomes the outer/build input; use an index on Project.Dnum for an index nested-loop join.",
      "Result: intermediate results shrink from |Project| × |Department| to a handful of tuples."
    ],
    "example": [
      "Canonical                         Optimised\nπ Pnumber,Dnum,Address            π Pnumber, Dnum, Address\n        |                                  |\nσ Dnum=Dnumber ∧ loc='SJT'         ⋈ P.Dnum = D.Dnumber\n   ∧ name='CSE'                    /                  \\\n        |                   π Pnumber,Dnum       π Dnumber, Address\n        ×                         |                     |\n      /   \\                    Project       σ location='SJT' ∧ name='CSE'\n Project  Department                                    |\n                                                    Department"
    ]
  },
  "069cd43eedac6bb7": {
    "answer": [
      "The schedule is not conflict serializable. The precedence graph has the cycle T1 → T3 → T4 → T1, so no equivalent serial schedule exists."
    ],
    "points": [
      "Schedule: W3(B), R1(C), W4(B), W4(A), R1(A), W3(C), W2(A), R2(D), W2(B), R3(D).",
      "On B: W3(B) before W4(B) ⇒ T3 → T4; W3(B) before W2(B) ⇒ T3 → T2; W4(B) before W2(B) ⇒ T4 → T2.",
      "On A: W4(A) before R1(A) ⇒ T4 → T1; W4(A) before W2(A) ⇒ T4 → T2; R1(A) before W2(A) ⇒ T1 → T2.",
      "On C: R1(C) before W3(C) ⇒ T1 → T3.",
      "On D: R2(D) and R3(D) are both reads → no edge.",
      "Cycle: T1 → T3 (C), T3 → T4 (B), T4 → T1 (A) → not conflict serializable; no serial order can satisfy all three precedences."
    ],
    "example": [
      "Edges: T1 → T2, T1 → T3, T3 → T2, T3 → T4, T4 → T1, T4 → T2\n\n   T1 ──→ T3\n   ↑  ↘    │\n   │   T2  │\n   │  ↗    ↓\n   T4 ←────┘   (T3 → T4)\nCycle T1 → T3 → T4 → T1  ⇒ not conflict serializable"
    ]
  },
  "293c6fc2f638eece": {
    "answer": [
      "(i) The candidate keys are AB and BC. (ii) R is not in BCNF, because B → D and C → A have non-superkey left sides. The BCNF decomposition is R1(B, D), R2(C, A) and R3(B, C). (iii) It is not dependency preserving: AB → C spans R2 and R3 and cannot be enforced without a join."
    ],
    "points": [
      "AB⁺ = {A, B, C, D}; BC⁺ = {B, C, A, D}; B⁺ = {B, D}; A⁺ = {A}; C⁺ = {C, A} → keys AB and BC (B is in every key since it is on no RHS).",
      "BCNF violations: B → D (B is not a superkey), C → A (C is not a superkey). AB → C is fine.",
      "Decompose on B → D: R1(B, D), R(A, B, C).",
      "In R(A, B, C): FDs AB → C, C → A; keys AB, BC; C → A violates BCNF → split R2(C, A), R3(B, C).",
      "Final: R1(B, D) key B; R2(C, A) key C; R3(B, C) key BC. Each is in BCNF; all decompositions are lossless.",
      "Preserved: B → D (R1), C → A (R2). Not preserved: AB → C — A and B are in different relations and no projected FDs imply it; checking it requires joining R2 and R3. (This is the classic case where BCNF cannot preserve all FDs; 3NF would keep R(A, B, C).)"
    ],
    "example": [
      "Relation   Key   FDs held\nR1(B, D)   B     B → D\nR2(C, A)   C     C → A\nR3(B, C)   BC    (none)\nLost: AB → C"
    ]
  },
  "6723a53fbe2f4b4f": {
    "answer": [
      "With m = 4 pointers (at most 3 keys per node; a full leaf splits 2 | 2 and the right leaf's first key is copied up), the final tree is: root [19]; internal nodes [5 | 11] and [29]; leaves [2, 3] [5, 7] [11, 17] [19, 23] [29, 31].",
      "Inserting 9 needs no split. Inserting 10 splits [5, 7, 9]. Deleting 19 forces a leaf merge and a borrow at the internal level; deleting 23 only updates a separator."
    ],
    "points": [
      "Inserts 2, 3, 5 → [2, 3, 5]; 7 splits → [2, 3] | [5, 7], root [5]; 11 → [5, 7, 11]; 17 splits → [5, 7] | [11, 17], root [5, 11]; 19 → [11, 17, 19]; 23 splits → [11, 17] | [19, 23], root [5, 11, 19]; 29 → [19, 23, 29]; 31 splits → [19, 23] | [29, 31] and root [5, 11, 19, 29] overflows → 19 moves up.",
      "Insert 9: leaf [5, 7] → [5, 7, 9] (no split).",
      "Insert 10: leaf [5, 7, 9, 10] splits → [5, 7] | [9, 10]; 9 copied up → internal node [5, 9, 11] (3 keys, no overflow).",
      "Delete 19: leaf [19, 23] → [23] underflows (min 2 keys); sibling [29, 31] has only 2 → merge into [23, 29, 31]; internal node [29] becomes empty → borrow from left sibling [5, 9, 11]: 11 moves up to the root, root key 19 moves down, child [11, 17] moves across. Separator 19 is replaced by 23 (the first key of its right subtree).",
      "Delete 23: leaf [23, 29, 31] → [29, 31]; separator 23 → 29."
    ],
    "example": [
      "(i) After inserting 2 … 31\n               [19]\n             /      \\\n        [5 | 11]      [29]\n       /   |    \\     /    \\\n  [2,3] [5,7] [11,17] [19,23] [29,31]",
      "(ii) Insert 9, 10\n               [19]\n             /      \\\n      [5 | 9 | 11]     [29]\n     /   |   |   \\     /    \\\n[2,3] [5,7] [9,10] [11,17] [19,23] [29,31]",
      "(iii) Delete 19 (merge + borrow)          Delete 23\n               [11]                               [11]\n             /      \\                           /      \\\n        [5 | 9]      [23]                   [5 | 9]      [29]\n       /   |   \\     /    \\                /   |   \\     /    \\\n  [2,3] [5,7] [9,10] [11,17] [23,29,31]  [2,3] [5,7] [9,10] [11,17] [29,31]"
    ]
  },
  "a42c70ed836a9801": {
    "answer": [
      "Relational algebra answers are below. ‘Boeing aircraft’ means aname LIKE 'Boeing%', and a pilot is any employee who appears in Certified."
    ],
    "points": [
      "(i) Certified ⋈ Aircraft (Boeing) ⋈ Employees, project ename.",
      "(ii) ‘Every pilot whose salary > 150000’ needs division: flights whose required range is met by an aircraft each such pilot is certified for. Pair each pilot with the flights they can fly (some certified aircraft with range ≥ distance), then divide by the set of high-salary pilots.",
      "(iii) Aggregate SUM over the distinct Boeing-certified pilots (project first to avoid counting a pilot twice).",
      "(iv) Pilots certified for some aircraft with range > 3000 minus pilots certified on any Boeing.",
      "(v) Select Chennai→Delhi flights, then join with Aircraft on range ≥ distance (theta join)."
    ],
    "example": [
      "Boeing ← σ aname LIKE 'Boeing%' (Aircraft)\nPilots ← π eid (Certified)",
      "(i)   π ename ( Employees ⋈ Certified ⋈ π aid (Boeing) )",
      "(ii)  CanFly  ← π eid, flno ( Certified ⋈ Aircraft ⋈ range ≥ distance Flights )\n      RichPil ← π eid ( σ salary > 150000 (Employees) ⋈ Pilots )\n      Result  ← CanFly ÷ RichPil        -- flno values flyable by every such pilot",
      "(iii) 𝒢 SUM(salary) ( π eid, salary ( Employees ⋈ Certified ⋈ π aid (Boeing) ) )",
      "(iv)  π ename ( Employees ⋈ ( π eid (Certified ⋈ σ range > 3000 (Aircraft))\n                             − π eid (Certified ⋈ π aid (Boeing)) ) )",
      "(v)   π aid ( Aircraft ⋈ range ≥ distance σ from='Chennai' ∧ to='Delhi' (Flights) )"
    ]
  },
  "169d145ace54e1cc": {
    "answer": [
      "The initial tree is a projection over one combined selection over Student × Grades × Course. The optimised tree pushes σ Major='AI', σ Grade='S' and σ Dept='DataScience' to their leaves, replaces the products with joins on StudId and CrsId, and keeps only the columns each join needs."
    ],
    "points": [
      "Initial (canonical) expression: π StudId, Fname ( σ s.StudId = g.StudId ∧ g.CrsId = c.CrsId ∧ Grade = 'S' ∧ Dept = 'DataScience' ∧ Major = 'AI' ( (Student × Grades) × Course ) ).",
      "Rule 1 — break the conjunctive selection into a cascade of σ.",
      "Rule 2 — push σ Major='AI' to Student, σ Grade='S' to Grades, σ Dept='DataScience' to Course.",
      "Rule 3 — replace × + join predicate with ⋈ (StudId, then CrsId).",
      "Rule 4 — reorder: join the most restrictive relations first — σ Dept='DataScience'(Course) ⋈ σ Grade='S'(Grades) produces few tuples, then join with σ Major='AI'(Student).",
      "Rule 5 — push projections: Course → CrsId; Grades → StudId, CrsId; Student → StudId, Fname.",
      "Benefit: avoids the huge Cartesian product; intermediate results contain only relevant, narrow tuples."
    ],
    "example": [
      "Initial tree\n            π StudId, Fname\n                  |\nσ s.StudId=g.StudId ∧ g.CrsId=c.CrsId ∧ Grade='S' ∧ Dept='DataScience' ∧ Major='AI'\n                  |\n                  ×\n                /   \\\n              ×     Course\n            /   \\\n      Student   Grades",
      "Optimised tree\n                  π StudId, Fname\n                        |\n                  ⋈ StudId\n                 /         \\\n   π StudId,Fname           π StudId\n         |                     |\n  σ Major='AI'             ⋈ CrsId\n         |                /         \\\n      Student   π StudId,CrsId     π CrsId\n                       |              |\n                 σ Grade='S'   σ Dept='DataScience'\n                       |              |\n                    Grades          Course"
    ]
  },
  "732913c0f377b06a": {
    "answer": [
      "S1 is conflict serializable: the edges T2 → T1, T2 → T3 and T3 → T1 are acyclic, so it is equivalent to the serial schedule T2, T3, T1.",
      "S2 is not conflict serializable: r1(C) comes before w2(C) (T1 → T2) and r2(C) comes before w1(C) (T2 → T1), which forms a cycle."
    ],
    "points": [
      "S1 = r1(A) r3(B) r3(A) r2(B) r2(C) w3(B) w2(C) r1(C) w1(A) w1(C).",
      "S1 conflicts on A: r3(A) before w1(A) ⇒ T3 → T1 (r1(A)/r3(A) are both reads).",
      "S1 conflicts on B: r2(B) before w3(B) ⇒ T2 → T3.",
      "S1 conflicts on C: r2(C) before w1(C), w2(C) before r1(C), w2(C) before w1(C) ⇒ T2 → T1.",
      "S1 graph acyclic → topological order T2, T3, T1.",
      "S2 = r1(A) r3(B) r2(B) r3(A) r1(C) r2(C) w3(B) w1(A) w2(C) w1(C).",
      "S2 edges: T2 → T3 (r2(B) before w3(B)); T3 → T1 (r3(A) before w1(A)); T1 → T2 (r1(C) before w2(C)); T2 → T1 (r2(C) before w1(C), w2(C) before w1(C)).",
      "Cycle T1 → T2 → T1 (also T1 → T2 → T3 → T1) → not conflict serializable; in effect T1’s read of C is stale when it later writes C (lost update)."
    ],
    "example": [
      "S1:  T2 → T3 → T1,  T2 → T1          → acyclic → serial T2, T3, T1\nS2:  T1 ⇄ T2,  T2 → T3 → T1           → cycle   → not conflict serializable"
    ]
  },
  "da48b772e3711342": {
    "answer": [
      "(i) The candidate keys are AD, BCD and BDE. R is not in BCNF, because A → BC, BC → A and E → C all have non-superkey left sides. Decompose into R1(A, B, C) and R2(A, D, E). (ii) This is not dependency preserving: E → C is lost, because E and C end up in different relations. BCD → E is still implied, via BC → A and AD → E."
    ],
    "points": [
      "Closures: AD⁺ = {A, B, C, D, E}; BCD⁺ = {B, C, D, A, E}; BDE⁺ = {B, D, E, C, A}. D is on no RHS so every key has D; A⁺ = ABC, BC⁺ = ABC, E⁺ = EC, so keys are AD, BCD, BDE.",
      "BCNF check: A → BC (A not a superkey) ✗; BC → A ✗; BCD → E ✓ (BCD is a key); E → C ✗.",
      "Decompose on A → BC: R1 = (A, B, C) with FDs A → BC, BC → A; keys A and BC → BCNF.",
      "R2 = R − {B, C} = (A, D, E); projected FDs: AD → E (AD is a key of R2); A⁺ ∩ R2 = {A}; E⁺ ∩ R2 = {E}; DE⁺ = {D, E, C} ∩ R2 = {D, E} → only key AD → BCNF.",
      "Lossless: R1 ∩ R2 = A, and A → ABC is a key of R1.",
      "Preservation test with G = F1 ∪ F2 = {A → BC, BC → A, AD → E}: BCD⁺(G) = {B, C, D, A, E} ⊇ E → BCD → E preserved; E⁺(G) = {E} ∌ C → E → C not preserved.",
      "Reason: E and C lie in different relations, and no FD in R1 or R2 links them, so enforcing E → C would need a join of R1 and R2. A 3NF decomposition could keep E → C (e.g. add R3(E, C))."
    ],
    "example": [
      "Relation      Keys     FDs\nR1(A, B, C)   A, BC    A → BC, BC → A\nR2(A, D, E)   AD       AD → E\nPreserved: A → BC, BC → A, BCD → E (via BCD → A, AD → E)\nNot preserved: E → C"
    ]
  },
  "a65bf92be75ef833": {
    "answer": [
      "(I) 10 records per block and 10,000 blocks. (II) If blocks are full and the 2,000 inserts land in random positions, nearly every insert overflows a block: expect about 1,800–2,000 block splits or overflow events (one per insert in the worst case), and in a strictly sequential file each insert may also shift on average half the file. (III) The primary index has 10,000 entries of 14 bytes each, 71 per block, so it needs 141 index blocks. (IV) Use a B+ tree index (or blocks with free space, or hashing) so an insert costs about log blocks instead of shifting half the file."
    ],
    "points": [
      "bfr = ⌊1000 / 100⌋ = 10 records/block; b = 100,000 / 10 = 10,000 blocks.",
      "Insertion into a full ordered file: the target block (random among 10,000) is full → split it or chain an overflow block. 2,000 inserts over 10,000 blocks rarely hit the same block twice (expected distinct blocks ≈ 10,000 × (1 − e^(−0.2)) ≈ 1,813), so ≈ 1,800 splits/overflow blocks; with physical shifting instead, each insert moves ≈ b/2 = 5,000 blocks → ≈ 10⁷ block writes in total → periodic reorganisation required.",
      "Primary index: one entry per data block → 10,000 entries; entry = 10 + 4 = 14 bytes; index bfr = ⌊1000 / 14⌋ = 71; index blocks = ⌈10,000 / 71⌉ = 141. Search = ⌈log₂ 141⌉ + 1 = 8 + 1 = 9 accesses.",
      "Alternative 1 — B+ tree on EmployeeID: fan-out ≈ 71 → height ⌈log₇₁ 100,000⌉ ≈ 3; insert = ~3 reads + 1–2 writes, occasional node split (local), no global reorganisation.",
      "Alternative 2 — leave free space (e.g. load blocks 80% full = 8 records): 12,500 blocks, each has 2 free slots; 2,000 random inserts almost never overflow (expected overflows ≈ 0), insert cost = index lookup + 1 write.",
      "Alternative 3 — hash file on EmployeeID: insert ≈ 1–2 block accesses, but loses ordering for range queries; heap file + secondary index: insert = 1 block write (append) + index update."
    ],
    "example": [
      "Quantity                 Value\nRecords per block        ⌊1000/100⌋ = 10\nData blocks              100,000 / 10 = 10,000\nIndex entry size         10 + 4 = 14 bytes\nIndex blocking factor    ⌊1000/14⌋ = 71\nIndex blocks             ⌈10,000/71⌉ = 141\nSearch via index         ⌈log₂ 141⌉ + 1 = 9 accesses\nB+ tree insert           ≈ 3 reads + 1 write (height ≈ 3)"
    ]
  },
  "c5eb45d839b024d8": {
    "answer": [
      "Relational algebra queries (i)–(iv) are below. Query (ii) needs an intersection, because a single tuple of describes can never hold both keywords at once."
    ],
    "points": [
      "(i) Find Smith’s StId, join borrows to get BIds, join has-written to get authors.",
      "(ii) BIds with ‘database’ ∩ BIds with ‘programming’, then join BOOKS for the titles.",
      "(iii) Simple conjunctive selection with ≠.",
      "(iv) Selection on Publisher and Year."
    ],
    "example": [
      "(i)   π AName ( has-written ⋈ borrows ⋈ σ StName = 'Smith' (STUDENTS) )\n(ii)  π Title ( BOOKS ⋈ ( π BId (σ Keyword = 'database' (describes))\n                          ∩ π BId (σ Keyword = 'programming' (describes)) ) )\n(iii) π StName ( σ Age > 30 ∧ Major ≠ 'Computer Science' (STUDENTS) )\n(iv)  π Title ( σ Publisher = 'McGraw-Hill' ∧ Year < 1990 (BOOKS) )"
    ]
  },
  "767ab447c79bb586": {
    "answer": [
      "The initial tree is a projection over one selection over PROJ × ASG × EMP. The optimised tree pushes σ PNAME='CAD/CAM' onto PROJ, σ DUR=12 ∨ DUR=24 onto ASG and σ ENAME≠'J. Doe' onto EMP. It joins the small PROJ result with ASG first, then joins with EMP, keeping only the columns needed."
    ],
    "points": [
      "Canonical expression: π ENAME ( σ G.ENO=E.ENO ∧ G.PNO=P.PNO ∧ ENAME≠'J. Doe' ∧ PNAME='CAD/CAM' ∧ (DUR=12 ∨ DUR=24) ( (PROJ × ASG) × EMP ) ).",
      "Step 1 — split the conjunctive selection into a cascade (the OR condition stays together as one predicate on ASG).",
      "Step 2 — push each selection to its relation: PNAME on PROJ, DUR on ASG, ENAME on EMP.",
      "Step 3 — turn σ over × into joins: ASG ⋈ PNO PROJ, then ⋈ ENO EMP.",
      "Step 4 — order joins by selectivity: σ PNAME='CAD/CAM'(PROJ) is about one tuple, so join it with the filtered ASG first; EMP (largest) last.",
      "Step 5 — push projections: PROJ → PNO; ASG → ENO, PNO; EMP → ENO, ENAME.",
      "ENAME ≠ 'J. Doe' is not very selective; it can also be applied after the final join with little cost difference."
    ],
    "example": [
      "Initial tree\n                 π ENAME\n                    |\nσ G.ENO=E.ENO ∧ G.PNO=P.PNO ∧ ENAME≠'J. Doe' ∧ PNAME='CAD/CAM' ∧ (DUR=12 ∨ DUR=24)\n                    |\n                    ×\n                  /   \\\n                ×      EMP\n              /   \\\n          PROJ     ASG",
      "Optimised tree\n                    π ENAME\n                       |\n                   ⋈ ENO\n                 /        \\\n          π ENO           π ENO, ENAME\n             |                  |\n         ⋈ PNO          σ ENAME ≠ 'J. Doe'\n        /       \\               |\n π ENO,PNO     π PNO           EMP\n     |            |\nσ DUR=12 ∨ DUR=24   σ PNAME='CAD/CAM'\n     |            |\n    ASG          PROJ"
    ]
  },
  "595a9890186010f8": {
    "answer": [
      "(i) Reading % as modulo (as the answer key does): A = 200 + 200 mod 20 = 200, so A ends at 200 × 1.15 = 230 and B at (150 + 230) × 1.04 = 395.2, then 395.2 + 20 = 415.2. (If % means percent, A = 240 → 276, B = (150 + 276) × 1.04 = 443.04 → 463.04.)",
      "(ii) Yes, there are conflicts: W1(A) and R2(A) at t4–t5, W1(A) and W2(A) at t4–t7, W2(B) and R1(B) at t10–t12, and W2(B) and W1(B) at t10–t14. These give T1 → T2 and T2 → T1, a cycle, so the schedule is not conflict serializable.",
      "(iii) Isolation is at risk, and with it recoverability and atomicity: T2 reads and commits on T1's uncommitted A. (iv) The anomaly is a dirty read (uncommitted dependency), and the schedule is non-recoverable because T2 commits before T1."
    ],
    "points": [
      "Trace: t2 R1(A) = 200; t3 A = 200 + 200 % 20 = 200; t4 W1(A) = 200 (uncommitted); t5 R2(A) = 200 read from T1’s uncommitted write; t6–t7 A = 230; t8–t10 B = (150 + 230) × 1.04 = 395.2; t11 T2 commits; t12–t14 T1 reads 395.2 and writes 415.2; t15 commits.",
      "Conflict rule: different transactions, same item, at least one write.",
      "Precedence graph: T1 → T2 (A: W1 before R2/W2), T2 → T1 (B: W2 before R1/W1) → cycle → not conflict serializable (although the final values happen to match the serial order T2 → T1 here only because T1’s A update was 0).",
      "Isolation: T2 sees intermediate data of T1; the interleaving behaves like READ UNCOMMITTED.",
      "Atomicity/recoverability: if T1 aborted after t11, T2 would already have committed a value derived from T1’s write → cannot undo T2 → violates atomicity of T1’s rollback (non-recoverable schedule).",
      "Consistency and durability: no constraint is broken and both commit, so these are not directly violated.",
      "Prevention: strict 2PL (T2’s Read(A) waits until T1 commits) or delaying T2’s commit until after T1 (recoverable schedule)."
    ],
    "example": [
      "Time  T1                 T2                 A      B\nt2    R(A)                                  200    150\nt3    A = A + A%20                          200\nt4    W(A)  (uncommitted)                   200\nt5                       R(A) ← dirty read  200\nt7                       W(A)               230\nt10                      W(B)                      395.2\nt11                      Commit\nt14   W(B)                                         415.2\nt15   Commit\nFinal: A = 230, B = 415.2"
    ]
  },
  "85f06697b7723ef8": {
    "answer": [
      "(a) The candidate key is {StudentID, CourseID, Hobby}. Nothing determines StudentID or Hobby, and CourseID determines only Instructor, InstructorOffice and CourseDept.",
      "(b) StudentID →→ Hobby is a non-trivial MVD whose left side, StudentID, is not a superkey, so 4NF is violated. Every hobby of a student must be repeated with every course of that student.",
      "(c) The final 4NF relations are STUDENT_HOBBY(StudentID, Hobby), ENROLLMENT(StudentID, CourseID), COURSE(CourseID, Instructor, CourseDept) and INSTRUCTOR(Instructor, InstructorOffice)."
    ],
    "points": [
      "Closure: {StudentID, CourseID, Hobby}⁺ = all attributes (CourseID → Instructor, CourseDept; Instructor → InstructorOffice). No FD has StudentID or Hobby on its right → both must be in every key; CourseID also (nothing determines it).",
      "Redundancy example: a student with 2 courses and 3 hobbies needs 6 rows; adding a hobby means adding a row per course (insertion anomaly).",
      "Step 1 — split on the MVD StudentID →→ Hobby: R1(StudentID, Hobby) and R2(StudentID, CourseID, Instructor, InstructorOffice, CourseDept). Lossless because R1 ∩ R2 = StudentID →→ R1 − R2.",
      "Step 2 — R2 has key (StudentID, CourseID) and partial FDs CourseID → Instructor, CourseDept → split COURSE(CourseID, Instructor, InstructorOffice, CourseDept) and ENROLLMENT(StudentID, CourseID).",
      "Step 3 — COURSE has the transitive FD CourseID → Instructor → InstructorOffice → split COURSE(CourseID, Instructor, CourseDept) and INSTRUCTOR(Instructor, InstructorOffice).",
      "Check: each relation is in BCNF and has no non-trivial MVD other than those implied by its key → 4NF."
    ],
    "example": [
      "Relation                                 Key                    Dependency\nSTUDENT_HOBBY(StudentID, Hobby)          (StudentID, Hobby)     trivial MVD only\nENROLLMENT(StudentID, CourseID)          (StudentID, CourseID)  –\nCOURSE(CourseID, Instructor, CourseDept) CourseID               CourseID → Instructor, CourseDept\nINSTRUCTOR(Instructor, InstructorOffice) Instructor             Instructor → InstructorOffice"
    ]
  },
  "f6bff10e1369f6b3": {
    "answer": [
      "Relational algebra answers are below. Queries (b) and (d) use the aggregate operator 𝒢, and (d) adds a selection on the computed count."
    ],
    "points": [
      "(a) Selection on Specialization, then projection.",
      "(b) Group Doctor by Specialization and count DoctorID.",
      "(c) Join Appointment with Doctor and the Neurology patients; select Status = 'Confirmed'.",
      "(d) Group the appointment–patient join by doctor, count distinct departments, keep counts > 1, then join to get names."
    ],
    "example": [
      "(a) π DoctorName, Specialization ( σ Specialization = 'Paediatrics' (Doctor) )\n\n(b) Specialization 𝒢 COUNT(DoctorID) → TotalDoctors (Doctor)\n\n(c) π PatientName, DoctorName, Specialization, AppointmentDate (\n        σ Status = 'Confirmed' (Appointment)\n      ⋈ σ Department = 'Neurology' (Patient)\n      ⋈ Doctor )\n\n(d) D ← DoctorID 𝒢 COUNT-DISTINCT(Department) → NumDepts ( Appointment ⋈ Patient )\n    π DoctorName, NumDepts ( σ NumDepts > 1 (D) ⋈ Doctor )"
    ]
  },
  "9bdcc31fc18ea12c": {
    "answer": [
      "Order 4 means at most 3 keys per node. A full leaf splits 2 | 2 and the right leaf's first key is copied up; a full internal node pushes its middle key up. After 12 insertions the root is [55], with internal nodes [27 | 42] and [73].",
      "Deleting 61 needs no restructuring. Deleting 42 empties its leaf below the minimum, so it merges with the left sibling and the separator 42 is removed."
    ],
    "points": [
      "Note: the question says 15 keys but lists 12; the 12 listed keys are used.",
      "42, 18, 73 → [18, 42, 73]; 55 splits → [18, 42] | [55, 73], root [55].",
      "61 → [55, 61, 73]; 27 → [18, 27, 42]; 84 splits [55, 61, 73, 84] → [55, 61] | [73, 84], root [55, 73].",
      "12 splits [12, 18, 27, 42] → [12, 18] | [27, 42], root [27, 55, 73]; 67 → [55, 61, 67].",
      "30 → [27, 30, 42]; 49 splits [27, 30, 42, 49] → [27, 30] | [42, 49] → root [27, 42, 55, 73] overflows → 55 moves up: new root [55], children [27, 42] and [73]; 75 → [73, 75, 84].",
      "Delete 61: leaf [55, 61, 67] → [55, 67] (still ≥ 2) → no change elsewhere.",
      "Delete 42: leaf [42, 49] → [49] underflows; left sibling [27, 30] has only 2 keys and cannot lend → merge into [27, 30, 49]; parent [27, 42] loses 42 → [27]."
    ],
    "example": [
      "After inserting all keys\n                    [55]\n                 /        \\\n          [27 | 42]          [73]\n         /    |    \\        /     \\\n  [12,18] [27,30] [42,49] [55,61,67] [73,75,84]",
      "After deleting 61\n                    [55]\n                 /        \\\n          [27 | 42]          [73]\n         /    |    \\        /     \\\n  [12,18] [27,30] [42,49] [55,67] [73,75,84]",
      "After deleting 42 (merge)\n                 [55]\n               /      \\\n            [27]        [73]\n           /    \\      /     \\\n     [12,18] [27,30,49] [55,67] [73,75,84]"
    ]
  },
  "fe6c8ac9093c21f8": {
    "answer": [
      "Query: π StudentName, CourseName, InstructorName, Marks ( σ Category='Data Science' ( Student ⋈ Enrollment ⋈ Course ⋈ Instructor ) ). The optimised tree applies σ Category='Data Science' to Course first, joins that small set with Enrollment, then joins Student and Instructor, projecting columns early."
    ],
    "points": [
      "Initial (canonical) form: π StudentName, CourseName, InstructorName, Marks ( σ S.StudentID=E.StudentID ∧ E.CourseID=C.CourseID ∧ E.InstructorID=I.InstructorID ∧ Category='Data Science' ( ((Student × Enrollment) × Course) × Instructor ) ).",
      "Rule 1 — break up the conjunctive σ into a cascade.",
      "Rule 2 — push σ Category='Data Science' down to Course.",
      "Rule 3 — combine each × with its join condition into ⋈.",
      "Rule 4 — reorder joins: the filtered Course is the smallest input, so σ(Course) ⋈ Enrollment first, then Student, then Instructor.",
      "Rule 5 — push projections: Course → CourseID, CourseName; Enrollment → StudentID, CourseID, InstructorID, Marks; Student → StudentID, StudentName; Instructor → InstructorID, InstructorName.",
      "Result: the Cartesian product of four relations is replaced by a chain of joins on small, narrow intermediate results."
    ],
    "example": [
      "Initial tree\n            π StudentName, CourseName, InstructorName, Marks\n                              |\n   σ S.SID=E.SID ∧ E.CID=C.CID ∧ E.IID=I.IID ∧ Category='Data Science'\n                              |\n                              ×\n                            /   \\\n                          ×      Instructor\n                        /   \\\n                      ×      Course\n                    /   \\\n              Student   Enrollment",
      "Optimised tree\n              π StudentName, CourseName, InstructorName, Marks\n                                 |\n                         ⋈ InstructorID\n                        /              \\\n                  ⋈ StudentID        π InstructorID, InstructorName\n                 /           \\               |\n          ⋈ CourseID    π StudentID,     Instructor\n          /        \\      StudentName\nπ CourseID,      π SID,CID,IID,Marks     |\n  CourseName          |               Student\n     |            Enrollment\nσ Category='Data Science'\n     |\n   Course"
    ]
  },
  "34f2d3b596149b64": {
    "answer": [
      "S1 is conflict serializable: the edges T2 → T1, T2 → T3 and T3 → T1 are acyclic, so it is equivalent to the serial schedule T2, T3, T1.",
      "S2 is not conflict serializable: r1(C) comes before w2(C) (T1 → T2) and r2(C) comes before w1(C) (T2 → T1), which forms a cycle."
    ],
    "points": [
      "S1 = r1(A) r3(B) r3(A) r2(B) r2(C) w3(B) w2(C) r1(C) w1(A) w1(C).",
      "S1 conflicts on A: r3(A) before w1(A) ⇒ T3 → T1 (r1(A)/r3(A) are both reads).",
      "S1 conflicts on B: r2(B) before w3(B) ⇒ T2 → T3.",
      "S1 conflicts on C: r2(C) before w1(C), w2(C) before r1(C), w2(C) before w1(C) ⇒ T2 → T1.",
      "S1 graph acyclic → topological order T2, T3, T1.",
      "S2 = r1(A) r3(B) r2(B) r3(A) r1(C) r2(C) w3(B) w1(A) w2(C) w1(C).",
      "S2 edges: T2 → T3 (r2(B) before w3(B)); T3 → T1 (r3(A) before w1(A)); T1 → T2 (r1(C) before w2(C)); T2 → T1 (r2(C) before w1(C), w2(C) before w1(C)).",
      "Cycle T1 → T2 → T1 (also T1 → T2 → T3 → T1) → not conflict serializable; in effect T1’s read of C is stale when it later writes C (lost update).",
      "(c) Only S1 is conflict serializable; its equivalent serial order is T2 → T3 → T1. S2 has no equivalent serial order."
    ],
    "example": [
      "S1:  T2 → T3 → T1,  T2 → T1          → acyclic → serial T2, T3, T1\nS2:  T1 ⇄ T2,  T2 → T3 → T1           → cycle   → not conflict serializable"
    ]
  },
  "8c2f2780a4e4c5ed": {
    "answer": [
      "The table is not in 1NF, because Project Code, Name, Type and Hours are repeating groups. The 3NF result is DEPARTMENT(DeptCode, DeptName), EMPLOYEE(EmpID, EmpName, EmpGrade, DeptCode), PROJECT(ProjectCode, ProjectName, ProjectType) and EMP_PROJECT(EmpID, ProjectCode, Hours)."
    ],
    "points": [
      "FDs: EmpID → EmpName, EmpGrade, DeptCode; DeptCode → DeptName; ProjectCode → ProjectName, ProjectType; (EmpID, ProjectCode) → Hours.",
      "1NF: split the lists so each row holds one project — EMP_PROJ(EmpID, EmpName, EmpGrade, DeptCode, DeptName, ProjectCode, ProjectName, ProjectType, Hours) with key (EmpID, ProjectCode).",
      "2NF violation: employee and department attributes depend only on EmpID; project attributes only on ProjectCode (partial dependencies) → EMPLOYEE(EmpID, EmpName, EmpGrade, DeptCode, DeptName), PROJECT(ProjectCode, ProjectName, ProjectType), EMP_PROJECT(EmpID, ProjectCode, Hours).",
      "3NF violation: EmpID → DeptCode → DeptName (transitive) → split DEPARTMENT(DeptCode, DeptName) and keep DeptCode as an FK in EMPLOYEE.",
      "Result: every non-key attribute depends on the whole key and only the key; lossless (shared attributes are keys) and dependency preserving.",
      "Anomalies removed: P103 ‘Client Visit / Field Work’ stored once (no update anomaly); a new project can be added before assignment; deleting John does not delete project P105."
    ],
    "example": [
      "DEPARTMENT           EMPLOYEE                           PROJECT\nDeptCode DeptName    EmpID EmpName EmpGrade DeptCode    ProjectCode ProjectName    ProjectType\n10       Sales       201   Alex    A        10          P101        Market Study   Research\n12       Finance     305   Maria   B        12          P102        Budgeting      Analysis\n                     412   John    A        10          P103        Client Visit   Field Work\n                                                        P104        Auditing       Compliance\nEMP_PROJECT                                             P105        Campaign       Marketing\nEmpID ProjectCode Hours\n201   P101        10\n201   P103        25\n305   P102        20\n305   P104        16\n412   P103        20\n412   P105        22"
    ]
  },
  "4b0c39505b54e9a1": {
    "answer": [
      "(i) Hash value = the last d bits of the ASCII code of the first letter, with 4 records per bucket. The trace is: Aarav, Reena, Riyas, Abdul, Cathy, John and Bheem fit at global depth 1; David forces the first doubling (d = 2); Ananya fits; Balu forces two more doublings (d = 3, then 4).",
      "(ii) Initially the global depth is 1 and both local depths are 1. Finally the global depth is 4, and the local depths are 1 for the …1 bucket, 2 for the …00 bucket, 3 for the empty …110 bucket, and 4 for the …0010 and …1010 buckets.",
      "(iii) There are 3 bucket splits and 3 directory doublings."
    ],
    "points": [
      "ASCII: A = 65 = 1000001, R = 82 = 1010010, C = 67 = 1000011, J = 74 = 1001010, B = 66 = 1000010, D = 68 = 1000100.",
      "d = 1: odd codes (A, C) → bucket 1; even (R, J, B, D) → bucket 0. Bucket 0 gets Reena, Riyas, John, Bheem (full); bucket 1 gets Aarav, Abdul, Cathy.",
      "David (…0) → bucket 0 is full, local depth 1 = global depth → double directory (d = 2) and split: 00 → {David}; 10 → {Reena, Riyas, John, Bheem}. Bucket …1 is shared by 01 and 11 (local depth 1).",
      "Ananya (…1) → bucket {Aarav, Abdul, Cathy, Ananya} (now full, no split needed).",
      "Balu (66 → …10) → bucket 10 full → double (d = 3) and split on 3 bits: 010 → {Reena, Riyas, John, Bheem} (all end in 010), 110 → {} — still full → double again (d = 4) and split on 4 bits: 0010 → {Reena, Riyas, Bheem, Balu}, 1010 → {John}.",
      "Count: splits occurred at David, Balu (3-bit) and Balu (4-bit) = 3; doublings 1→2, 2→3, 3→4 = 3."
    ],
    "example": [
      "Final directory (global depth 4)\nEntries                                   Bucket                          Local depth\n0001,0011,0101,0111,1001,1011,1101,1111   Aarav, Abdul, Cathy, Ananya     1\n0000,0100,1000,1100                       David                           2\n0110,1110                                 (empty)                         3\n0010                                      Reena, Riyas, Bheem, Balu       4\n1010                                      John                            4"
    ]
  },
  "a6d9c43df648af13": {
    "answer": [
      "SQL and relational algebra for (i)–(v) are below. Dates use ISO format; ‘both dates’ needs an intersection of flight ids; ‘more than two flights’ needs grouping."
    ],
    "points": [
      "(i) Flights (fid) scheduled at 16:00 on both dates: intersect the two fid sets, then return details.",
      "(ii) Join passenger, booking and agency with pgender = 'M' and aname = 'Jet'.",
      "(iii) Join booking with flight for pid 123, dest Chennai, fdate < 2025-11-06.",
      "(iv) Simple selection on src and dest.",
      "(v) Group booking by pid with COUNT > 2."
    ],
    "example": [
      "-- (i)\nSELECT * FROM flight\nWHERE fid IN (SELECT fid FROM flight WHERE fdate = DATE '2025-12-01' AND time = '16:00')\n  AND fid IN (SELECT fid FROM flight WHERE fdate = DATE '2025-12-02' AND time = '16:00');\nRA: flight ⋈ ( π fid σ fdate='01/12/2025' ∧ time='16:00' (flight) ∩ π fid σ fdate='02/12/2025' ∧ time='16:00' (flight) )",
      "-- (ii)\nSELECT DISTINCT p.* FROM passenger p\nJOIN booking b ON b.pid = p.pid JOIN agency a ON a.aid = b.aid\nWHERE p.pgender = 'M' AND a.aname = 'Jet';\nRA: π pid,pname,pgender,pcity ( σ pgender='M' (passenger) ⋈ booking ⋈ σ aname='Jet' (agency) )",
      "-- (iii)\nSELECT DISTINCT b.fid FROM booking b\nJOIN flight f ON f.fid = b.fid AND f.fdate = b.fdate\nWHERE b.pid = 123 AND f.dest = 'Chennai' AND f.fdate < DATE '2025-11-06';\nRA: π fid ( σ pid=123 (booking) ⋈ σ dest='Chennai' ∧ fdate<'06/11/2025' (flight) )",
      "-- (iv)\nSELECT * FROM flight WHERE src = 'Chennai' AND dest = 'New Delhi';\nRA: σ src='Chennai' ∧ dest='New Delhi' (flight)",
      "-- (v)\nSELECT p.* FROM passenger p\nWHERE p.pid IN (SELECT pid FROM booking GROUP BY pid HAVING COUNT(*) > 2);\nRA: passenger ⋈ π pid ( σ cnt > 2 ( pid 𝒢 COUNT(fid) → cnt (booking) ) )"
    ]
  },
  "f54d3ffdf3510852": {
    "answer": [
      "(i) The SQL joins BOOKS, AUTHORS and BORROW with three filters. (ii) Its canonical relational algebra form is π Title, Name ( σ Name='J.K. Rowling' ∧ CopiesAvailable ≥ 1 ∧ BorrowID='L1000' ∧ joins ( BOOKS × AUTHORS × BORROW ) ). (iii) The optimised form pushes each filter to its relation, so BORROW reduces to one row before the joins."
    ],
    "points": [
      "Step 1 — canonical expression from SQL: Cartesian product, single selection, projection.",
      "Step 2 — cascade the conjunctive selection.",
      "Step 3 — push selections: BorrowID = 'L1000' → BORROW (≈ 1 row); Name = 'J.K. Rowling' → AUTHORS; CopiesAvailable ≥ 1 → BOOKS.",
      "Step 4 — replace × + join predicates with ⋈ (BookID, AuthorID).",
      "Step 5 — order joins: the one-row σ(BORROW) joins BOOKS first (index on BOOKS.BookID), then AUTHORS.",
      "Step 6 — push projections: BORROW → BookID; BOOKS → BookID, Title, AuthorID; AUTHORS → AuthorID, Name."
    ],
    "example": [
      "SELECT b.Title, a.Name\nFROM   BOOKS b\nJOIN   AUTHORS a ON a.AuthorID = b.AuthorID\nJOIN   BORROW  r ON r.BookID   = b.BookID\nWHERE  a.Name = 'J.K. Rowling'\n  AND  b.CopiesAvailable >= 1\n  AND  r.BorrowID = 'L1000';",
      "Optimised RA:\nπ Title, Name (\n   ( π BookID ( σ BorrowID='L1000' (BORROW) )\n     ⋈ π BookID, Title, AuthorID ( σ CopiesAvailable ≥ 1 (BOOKS) ) )\n   ⋈ π AuthorID, Name ( σ Name='J.K. Rowling' (AUTHORS) ) )",
      "Optimised tree\n                    π Title, Name\n                          |\n                    ⋈ AuthorID\n                  /             \\\n            ⋈ BookID         π AuthorID, Name\n           /        \\               |\n     π BookID    π BookID,Title,  σ Name='J.K. Rowling'\n        |          AuthorID          |\nσ BorrowID='L1000'    |           AUTHORS\n        |      σ CopiesAvailable ≥ 1\n     BORROW           |\n                    BOOKS"
    ]
  },
  "c35fc1ce2541483d": {
    "answer": [
      "(a) S1 is conflict serializable. Its precedence graph has the edges T2 → T1, T2 → T3, T2 → T4, T3 → T1, T3 → T4 and T4 → T1, with no cycle. The equivalent serial schedule is T2 → T3 → T4 → T1.",
      "(b) S2 is recoverable and cascadeless, because it has no dirty reads. It is not strict, because w2(B) overwrites B after w3(B) while T3 is still uncommitted."
    ],
    "points": [
      "S1 conflicting pairs — on Y: w3(Y)–r4(Y) ⇒ T3 → T4; w3(Y)–r1(Y) ⇒ T3 → T1.",
      "On Z: w2(Z)–r3(Z) ⇒ T2 → T3.",
      "On B: r2(B)–w4(B), w2(B)–r4(B), w2(B)–w4(B) ⇒ T2 → T4; w2(B)–r1(B) ⇒ T2 → T1; w4(B)–r1(B) ⇒ T4 → T1.",
      "X and A are accessed by only one transaction → no conflicts.",
      "Conflict equivalence: the serial schedule must keep every conflicting pair in the same order; a topological sort of the acyclic graph gives T2, T3, T4, T1 (unique).",
      "S2 = r1(A) r2(C) r3(A) r1(C) r2(B) r3(B) w1(A) c1 w2(C) w3(B) w2(B) c3 c2.",
      "Recoverable: no transaction reads an item written by another uncommitted transaction (all reads come before any write) → trivially recoverable.",
      "Cascadeless: no dirty reads at all → cascadeless.",
      "Strict: requires no read or write of X until the last writer of X commits or aborts; w2(B) writes B after w3(B) while T3 has not committed (c3 comes later) → not strict."
    ],
    "example": [
      "S1 precedence graph\nT2 → T3,  T2 → T4,  T2 → T1\nT3 → T4,  T3 → T1\nT4 → T1\nAcyclic ⇒ serial order T2, T3, T4, T1",
      "S2 classification\nRecoverable  ✓   (no reads of uncommitted data)\nCascadeless  ✓\nStrict       ✗   (w2(B) after uncommitted w3(B))"
    ]
  },
  "0c28735a3516fd8e": {
    "answer": [
      "SQL and relational algebra for (i)–(vi) are below. (iii) uses set difference, (iv) uses an intersection with a count, and (vi) uses the rename operator ρ."
    ],
    "points": [
      "(i) Selection on Runs.",
      "(ii) ‘More significantly than 10 matches’ is read as MatchesPlayed > 10.",
      "(iii) Players whose ids are not in IPL.",
      "(iv) ids present in both IPL and TestMatch, counted once each.",
      "(v) Join Player with IPL rows for team CSK.",
      "(vi) SQL: ALTER TABLE … RENAME TO (or RENAME IPL TO IPLCricket in Oracle); RA: ρ."
    ],
    "example": [
      "(i)   SELECT * FROM Player WHERE Runs >= 50;\n      σ Runs ≥ 50 (Player)",
      "(ii)  SELECT PlayerId, TeamId, MatchesPlayed FROM IPL WHERE MatchesPlayed > 10;\n      π PlayerId, TeamId, MatchesPlayed ( σ MatchesPlayed > 10 (IPL) )",
      "(iii) SELECT * FROM Player WHERE PlayerId NOT IN (SELECT PlayerId FROM IPL);\n      Player ⋈ ( π PlayerId (Player) − π PlayerId (IPL) )",
      "(iv)  SELECT COUNT(*) FROM (SELECT PlayerId FROM IPL INTERSECT SELECT PlayerId FROM TestMatch) t;\n      𝒢 COUNT(PlayerId) ( π PlayerId (IPL) ∩ π PlayerId (TestMatch) )",
      "(v)   SELECT p.PlayerName, p.Age FROM Player p JOIN IPL i ON i.PlayerId = p.PlayerId\n      WHERE i.TeamName = 'CSK';\n      π PlayerName, Age ( Player ⋈ σ TeamName = 'CSK' (IPL) )",
      "(vi)  ALTER TABLE IPL RENAME TO IPLCricket;\n      ρ IPLCricket (IPL)"
    ]
  },
  "865c9d483ba9866d": {
    "answer": [
      "(i) With h1 = k mod 10 and h2 = 1 + (k mod 8), the final tables are: linear probing 1:11, 2:2, 3:3, 4:13, 5:73, 6:6, 8:18; quadratic probing 1:11, 2:2, 3:3, 4:13, 6:6, 7:73, 8:18; double hashing 1:11, 2:2, 3:3, 5:73, 6:6, 8:18, 9:13.",
      "(ii) A dense index has one entry per RegisterNo; a sparse index has one entry per block of a file sorted on RegisterNo. For exact lookups on the unique key in a file ordered by RegisterNo, a sparse primary index suits best (it is smaller, and one block read finds the record); if the file is not ordered on RegisterNo, a dense index is required."
    ],
    "points": [
      "Home slots: 3→3, 2→2, 13→3, 18→8, 11→1, 6→6, 73→3.",
      "Linear (h1 + i): 13: 3 ✗ → 4 ✓. 73: 3 ✗, 4 ✗ → 5 ✓.",
      "Quadratic (h1 + i²): 13: 3 ✗ → 4 ✓. 73: 3 ✗, 4 ✗, 3 + 4 = 7 ✓.",
      "Double hashing (h1 + i·h2): 13: h2 = 1 + 5 = 6 → 3 ✗, 9 ✓. 73: h2 = 1 + 1 = 2 → 3 ✗, 5 ✓.",
      "Dense index: entry for every record (RegNo, pointer to record); works for unsorted files; larger index but can answer ‘does RegNo exist?’ from the index alone.",
      "Sparse index: entry for the first RegNo of each block (anchor); file must be sorted on RegNo; search the largest anchor ≤ key, then scan that block; much smaller index."
    ],
    "example": [
      "Slot   Linear   Quadratic   Double\n0      –        –           –\n1      11       11          11\n2      2        2           2\n3      3        3           3\n4      13       13          –\n5      73       –           73\n6      6        6           6\n7      –        73          –\n8      18       18          18\n9      –        –           13",
      "Dense index                         Sparse index (file sorted, 3 records/block)\n21BCE001 → rec 1                    21BCE001 → block 1 (001, 002, 003)\n21BCE002 → rec 2                    21BCE004 → block 2 (004, 005, 006)\n21BCE003 → rec 3                    21BCE007 → block 3 (007, 008, 009)\n…  (one entry per record)            …  (one entry per block)"
    ]
  },
  "06f54577004e1de9": {
    "answer": [
      "The table violates 1NF, because MAIL-ID holds two values for E005. The 3NF result is EMPLOYEE(EMP_ID, NAME, STATE_CODE), EMP_MAIL(EMP_ID, MAIL_ID), EMP_JOB(EMP_ID, JOB_CODE), JOB(JOB_CODE, JOB) and STATE(STATE_CODE, HOME_STATE)."
    ],
    "points": [
      "FDs: EMP_ID → NAME, STATE_CODE; STATE_CODE → HOME_STATE; JOB_CODE → JOB; EMP_ID →→ MAIL_ID (multivalued).",
      "1NF: make MAIL-ID atomic. Best: move mail ids to EMP_MAIL(EMP_ID, MAIL_ID); otherwise one row per mail id with key (EMP_ID, MAIL_ID).",
      "Key of the remaining table: if an employee can hold several jobs (common in such questions), the key is (EMP_ID, JOB_CODE); in the data each employee has one job, so EMP_ID → JOB_CODE could also hold.",
      "2NF: with key (EMP_ID, JOB_CODE), NAME and STATE_CODE depend only on EMP_ID and JOB only on JOB_CODE (partial dependencies) → EMPLOYEE(EMP_ID, NAME, STATE_CODE, HOME_STATE), JOB(JOB_CODE, JOB), EMP_JOB(EMP_ID, JOB_CODE).",
      "3NF: EMP_ID → STATE_CODE → HOME_STATE is transitive → STATE(STATE_CODE, HOME_STATE); EMPLOYEE keeps STATE_CODE as an FK.",
      "Final relations are in 3NF (and BCNF); lossless and dependency preserving."
    ],
    "example": [
      "EMPLOYEE                    STATE                   JOB                  EMP_JOB          EMP_MAIL\nEMP_ID NAME    STATE_CODE   STATE_CODE HOME_STATE   JOB_CODE JOB         EMP_ID JOB_CODE  EMP_ID MAIL_ID\nE001   Kevin   26           26         Michigan     J01      Chef        E001   J01       E001   kevink@gmail.com\nE005   Melvin  26           56         Wyoming      J02      Waiter      E005   J02       E005   melvin@gmail.com\nE002   Morish  56           53         Washington   J03      Bartender   E002   J02       E005   mwaiter@gmail.com\nE006   Shyam   56           59         Washington   J04      Manager     E006   J03       E002   morish@gmail.com\nE003   Steve   53                                                        E003   J01       E006   Shyam@gmail.com\nE004   Jackson 59                                                        E004   J04       E003   stevemurphy@hotmail.com\n                                                                                          E004   mjack@yyahoo.com"
    ]
  },
  "0cce8c5b5db6be48": {
    "answer": [
      "(i) The only minimal superkey (candidate key) is DF, since DF⁺ = {B, C, D, E, F, G}. Every superset of DF is a superkey, giving 2⁴ = 16 superkeys in all. (ii) Implied FDs include F → C, F → BC, BD → G, BD → EG, DF → BE, DF → BCEG and FD → E."
    ],
    "points": [
      "(i) D and F appear on no right-hand side → every key contains D and F.",
      "DF⁺: D → G; F → B; FD → E; B → C ⇒ {B, C, D, E, F, G} = R → DF is a superkey; D⁺ = {D, G}, F⁺ = {F, B, C} → neither alone → DF is minimal.",
      "All superkeys = DF ∪ any subset of {B, C, E, G} → 16: DF, BDF, CDF, DEF, DFG, BCDF, BDEF, BDFG, CDEF, CDFG, DEFG, BCDEF, BCDFG, BDEFG, CDEFG, BCDEFG.",
      "(ii) F → B and B → C ⇒ F → C (transitivity); union ⇒ F → BC.",
      "BD → E and D → G ⇒ BD → G (augmentation of D → G by B, then decomposition) ⇒ BD → EG (union).",
      "F → B ⇒ DF → BD (augmentation by D); BD → E ⇒ DF → E (transitivity); DF → BCEG by union of DF → B, DF → C, DF → E, D → G.",
      "B → C ⇒ BD → CD (augmentation); hence BD → CEG and BD is not a key of the full R only because F is missing (BD⁺ = {B, C, D, E, G})."
    ],
    "example": [
      "Implied FD    Derivation\nF → C         F → B, B → C (transitivity)\nF → BC        union\nBD → G        D → G, augment by B, decomposition\nBD → EG       BD → E, BD → G (union)\nDF → E        F → B ⇒ DF → BD (augmentation), BD → E (transitivity)\nDF → BCDEFG   DF is a key (closure)"
    ]
  }
};
