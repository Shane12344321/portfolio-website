window.ATLAS_OS_ANSWERS = {
  "b19b0bed8557e39f": {
    "answer": [
      "The four prescribed OS structuring methods are monolithic, layered, modular and microkernel. They provide similar OS services but differ in where services execute and how they communicate."
    ],
    "points": [
      "Monolithic: scheduling, memory management, file systems and drivers execute in one kernel address space and call one another directly. This gives low communication overhead, but a faulty kernel component can damage the entire system. Traditional UNIX is the notes’ example.",
      "Layered: arrange the system as levels, from hardware at layer 0 to the user interface at the top. Each layer provides an abstraction to higher layers and uses lower-layer services. Construction and debugging are simpler, but defining a clean hierarchy is difficult and traversing layers adds overhead.",
      "Modular: retain core kernel services and add functionality through loadable modules with defined interfaces. Drivers and file systems can be added at boot or, where supported, at runtime. This supports extension without rebuilding the whole kernel; however, kernel modules remain privileged, and a faulty module can still crash the kernel.",
      "Microkernel: retain essential IPC, basic scheduling and low-level memory-management mechanisms in a small kernel; move services such as file systems into separate user processes. Message passing improves isolation and extensibility but may add IPC, copying and context-switch costs."
    ],
    "example": [
      "Monolithic sketch: Applications → system-call interface → [Scheduling | Memory | File systems | Drivers: one kernel address space] → Hardware.",
      "Layered sketch: [User interface, layer N] → [OS service layers] → [Low-level management] → [Hardware, layer 0]. Each layer hides its implementation from the layer above.",
      "Modular sketch: [File-system module] ↔ [Core kernel] ↔ [Driver module]; [Scheduling-class module] ↔ [Core kernel] → Hardware. The core and loaded kernel modules are in kernel space.",
      "Microkernel sketch: user space [Application] ⇄ [File server] ⇄ [Driver server], with each message mediated by [Microkernel: IPC + basic scheduling + low-level memory] → Hardware. Draw a user/kernel boundary above the microkernel."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 40–47 (definitions, diagrams and trade-offs).",
      "BCSE303L-FAT-B1-2023-2024.pdf, p. 1, Q1(a)."
    ]
  },
  "1b5f01647e4a024c": {
    "answer": [
      "A multiprocessor system has several processors/cores within one computer, typically sharing main memory and one OS instance. A cluster joins separate computers, each with its own memory and OS, over a network. Both can increase throughput and availability, but their coordination and failure boundaries differ.",
      "For two cluster nodes to deliver high availability, each must be able to detect peer failure, access sufficiently current application data, and take over the failed node’s service without two nodes corrupting shared state."
    ],
    "points": [
      "Coupling and communication: multiprocessors are tightly coupled through shared memory; cluster nodes are loosely coupled and exchange network messages. A node may itself be a multiprocessor.",
      "Failure domain: loss of one cluster machine need not stop another. Multiple CPUs inside one machine do not by themselves protect against failure of shared memory, the motherboard, power or a common OS.",
      "Data and software readiness: both cluster nodes need compatible service software/configuration and access to shared storage or consistently replicated data; the standby must have enough capacity to run the service.",
      "Failure detection and takeover: cluster software exchanges heartbeats, monitors the application, elects an active owner and transfers a service address/name so clients can reconnect. In active–standby clustering one node waits; in active–active clustering both run workloads and absorb failures.",
      "Correct ownership: use fencing and an ownership/quorum mechanism to prevent split brain during a network partition. A two-node design may use an external witness; a heartbeat timeout alone cannot distinguish a failed peer from a broken link.",
      "End-to-end availability: avoid single points of failure in network, power and storage; test recovery and preserve application consistency. High availability reduces interruption but does not guarantee zero lost work or uninterrupted sessions."
    ],
    "example": [
      "Multiprocessor: [CPU 1 + CPU 2] ↔ [Shared RAM + one OS]. Cluster: [Node A: CPUs, RAM, OS] ⇄ network/heartbeat ⇄ [Node B: CPUs, RAM, OS]; both access shared or replicated service data.",
      "Failover example: A owns a database service; B monitors A. After a verified failure, A is fenced from writing, B recovers the database using available durable state, and the service endpoint moves to B. Without fencing, an isolated but live A could keep writing while B also starts."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 48–52 (resource allocation, reliability and networked systems).",
      "M3/Multiprocessor.pdf, pp. 1–3 (multiprocessor and multicore organization).",
      "ClusterLabs, Clusters from Scratch 3.0.1, section “Quorum”: https://clusterlabs.org/projects/pacemaker/doc/3.0/Clusters_from_Scratch/pdf/Clusters_from_Scratch.pdf (two-node quorum, fencing and recovery; supplementary primary source beyond supplied notes).",
      "ClusterLabs FAQ: https://projects.clusterlabs.org/w/clusterlabs/faq/?v=4 (shared storage is not required by Pacemaker itself; available service state can instead come from replication).",
      "The high-availability requirements and failover example extend the supplied Module 1 notes; the processor comparison is supported by M3/Multiprocessor.pdf.",
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 1, Q1(a)."
    ]
  },
  "607f51c823438553": {
    "answer": [
      "The main advantage of a microkernel is separation of services: a small privileged kernel is easier to reason about, while most services run in isolated user address spaces. This improves extensibility, fault containment and security.",
      "User programs request services by IPC/message passing mediated by the microkernel. The cost is additional communication and scheduling work compared with direct calls inside a monolithic kernel."
    ],
    "points": [
      "Structure: keep essential communication, basic scheduling and low-level memory mechanisms in the kernel. File systems and some drivers run as servers in user mode; a microkernel means one small kernel, not many kernels.",
      "Interaction: a client invokes an IPC operation, the kernel checks the endpoint/permissions and transfers the request to the server, the server performs the operation and sends a reply. The client may block while awaiting the reply.",
      "Reliability and security: an ordinary server crash need not corrupt kernel memory or unrelated servers. Services can have only the privileges they need, reducing the trusted computing base.",
      "Maintainability and portability: replace or add a user-space service without redesigning the kernel; a smaller hardware-dependent kernel can be easier to port.",
      "Costs: more IPC operations, user/kernel transitions, address-space switches, possible data copying and scheduling dependencies. Service protocols and recovery also need careful design. Efficient IPC/shared buffers can reduce, but do not erase, these costs.",
      "Qualification: service isolation does not guarantee uninterrupted service—clients depending on a failed file server may fail or wait until it recovers, and a kernel bug can still bring down the system."
    ],
    "example": [
      "File read path: client → IPC through microkernel → file server → driver service if needed → file server → IPC reply → client. Draw client, file server and driver above the user/kernel boundary and the microkernel below it.",
      "If an audio service crashes, its process can be restarted without necessarily restarting the kernel. Applications using that service may still experience an audio interruption."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 46–47 (microkernel architecture, message passing, advantages and costs), p. 51 (least privilege).",
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 1, Q1(b).",
      "The failure-containment qualification corrects the notes’ overly absolute wording that other services always keep operating normally."
    ]
  },
  "2a541ebe4326d4f1": {
    "answer": [
      "Different OS architectures share the same basic responsibilities: an application interface, execution/process management, memory management, file/storage management, I/O management, communication and protection. Their main difference is the placement and interaction of these components.",
      "These shared abstractions give applications usable services and allow resource sharing; the implementation boundaries determine overhead, reliability and extensibility. Future designs can combine fast common paths with modular, isolated components according to workload needs."
    ],
    "points": [
      "Application/system-call interface: applications request operations such as creating a process, reading a file or communicating. A stable interface hides hardware details and supports portability at the appropriate API level.",
      "Process and CPU management: create execution contexts, choose runnable work, synchronize cooperating tasks and provide IPC. Efficient scheduling improves responsiveness and utilization.",
      "Memory management: allocate address space and physical memory, enforce protection and support virtual memory where appropriate. This allows many programs to coexist safely.",
      "Files and devices: expose files, directories and device operations rather than raw controller details. Drivers adapt common interfaces to hardware; buffering/caching can reduce I/O overhead.",
      "Protection and networking: identities, permissions and isolation control access; network protocols and sockets support communication beyond one machine.",
      "Structural impact: monolithic kernels place many services together for fast calls; layered designs organize dependencies; modular kernels support extension; microkernels use protection boundaries and IPC for isolation. No structure automatically wins on every goal.",
      "Design implication: well-defined interfaces and separation of policy from mechanism allow components or policies to evolve. A reasonable future direction is workload-specific combinations of modularity, isolation and efficient resource management; this is an inference, not a guaranteed prediction."
    ],
    "example": [
      "Common logical sketch: Applications → APIs/system calls → [Process/CPU | Memory | Files/storage | Devices | Network | Protection] → Hardware. Draw different physical boundaries around these components to obtain monolithic, modular or microkernel implementations.",
      "A read operation means the same application-level task in each architecture. A monolithic design may call its file system directly inside the kernel; a microkernel design may send the request to a file server. The function is common, but the communication cost and fault boundary differ."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (functions), 34–47 (design and structures), 48–54 (abstractions and design influences).",
      "Module 2.pptx, slides 2–10 (system-call interface and categories).",
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 1, Q1.",
      "Future-design discussion is a reasoned synthesis of the supplied notes, not a prediction asserted by the source."
    ]
  },
  "23bda0fa81bbec73": {
    "answer": [
      "A monolithic kernel can suit real-time workloads when its direct kernel calls and short I/O paths reduce overhead, but real-time suitability depends on bounded worst-case latency, preemption and resource control—not merely on whether the kernel is monolithic.",
      "Microkernels add service communication costs but can offer stronger fault isolation and can also be designed for real-time operation. Choose by the required deadlines, workload, hardware support and failure consequences."
    ],
    "points": [
      "Monolithic interaction: a user program calls an API/system-call wrapper; a trap enters kernel mode; the kernel validates the request and executes scheduling, memory, file-system or driver routines through internal calls; it returns a result to user mode. User applications do not become part of the kernel address space.",
      "Advantages in time-sensitive work: direct communication and shared kernel data avoid repeated server IPC, and integrated drivers can provide short paths for interrupts and I/O. This may help high-rate audio, video, sensor processing or network I/O.",
      "When preferred: a controlled embedded device with a small fixed set of trusted drivers, or a multimedia system with strict performance constraints and mature driver support, may favor a carefully configured monolithic design.",
      "Risks: long non-preemptible sections, interrupt handling, lock contention, priority inversion and page faults can make response times unpredictable. A fast average response does not prove a hard deadline will be met.",
      "Reliability disadvantage: a buggy privileged driver can corrupt the entire kernel. Large, coupled code is harder to isolate, verify, update and maintain.",
      "Microkernel comparison: isolated servers limit fault propagation and permit independent replacement; IPC, copying and extra scheduling may increase execution paths. Priority-aware IPC and bounded scheduling are needed for predictable end-to-end service.",
      "Decision: assess worst-case execution and blocking, permit preemption where safe, bound critical sections and select suitable priority/scheduling policies. Use a modular monolithic kernel when performance and driver integration dominate, or a microkernel when isolation/recovery dominates, after checking the actual deadline requirements."
    ],
    "example": [
      "Monolithic file operation: application → system call → [kernel: VFS/file system → driver] → device → return. Microkernel path: application → kernel-mediated IPC → file server → driver server → reply.",
      "Illustrative deadline budget: for a 10 ms control cycle, 4 ms computation + at most 1 ms I/O + at most 2 ms scheduling/lock delay = 7 ms, leaving 3 ms slack. If an unbounded kernel critical section can block for 12 ms, neither low average overhead nor the label “monolithic” guarantees correctness. These figures are an example, not paper data."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 40–47 (monolithic and microkernel structures), 53–54 (timing and multimedia).",
      "Module 2.pptx, slides 2–8 (system-call execution and interface).",
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 1, Q2.",
      "Worst-case latency, blocking and the numerical deadline budget are standard analytical extensions beyond the brief notes."
    ]
  },
  "462956be0f75629f": {
    "answer": [
      "Five critical OS design issues are CPU/process coordination, memory management, I/O/storage management, security/protection, and architecture/maintainability. Each must be designed against the intended goals of performance, reliability and usability."
    ],
    "points": [
      "1. Process management and concurrency: decide how tasks are created, scheduled and synchronized and how they communicate. The design must keep the CPU useful, preserve interactive response and prevent races, starvation or deadlock.",
      "2. Memory management: allocate/reclaim memory, translate addresses and isolate processes; choose appropriate virtual-memory policies. This determines capacity, utilization and whether one faulty task can corrupt another.",
      "3. I/O and storage management: provide driver interfaces, interrupt handling, buffering/caching, file operations and persistent-data organization. These hide hardware differences and strongly affect performance and reliability.",
      "4. Protection and security: distinguish privileged from unprivileged execution, authenticate identities, check authorization and apply least privilege. Resource access must be efficient while preventing accidental or malicious misuse.",
      "5. Structure and evolution: choose monolithic, layered, modular or microkernel organization and stable interfaces; separate policy from mechanism. This determines extension, debugging, portability and the trade-off between direct-call performance and isolation."
    ],
    "example": [
      "Example design decision: a scheduler’s timer/context-switch mechanism permits preemption; the scheduling policy decides which ready task receives the CPU. Keeping them separate allows changing from one fairness policy to another without rebuilding the low-level switching mechanism.",
      "A system running a browser and music player must schedule both, isolate their memory, buffer audio I/O, check file permissions and permit driver maintenance—one concrete requirement for each of the five issues."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (core functions), 34–38 (design goals, policy/mechanism, implementation), 40–47 (structures), 51–54 (security/networking/multimedia influences).",
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 1, Q1(a)."
    ]
  },
  "2740cec7dbe9be81": {
    "answer": [
      "Multiprogramming keeps several jobs available so the CPU can run another when one waits. Time-sharing extends this idea with frequent, usually timer-driven preemption for interactive response. Multiprocessing uses multiple processors/cores to execute tasks physically in parallel."
    ],
    "points": [
      "Multiprogramming: on one CPU only one instruction stream executes at a time; when a job blocks for I/O, another ready job runs. The main objective is CPU utilization and throughput.",
      "Time-sharing: runnable tasks receive short CPU time slices and are preempted even if they do not voluntarily block. Fast switching gives users interactive response and the appearance of simultaneous execution on one CPU.",
      "Multiprocessing: two or more processing units can execute different tasks or threads at the same instant. The OS distributes work across CPUs and coordinates access to shared resources.",
      "These are not mutually exclusive classifications: a multicore OS can use both multiprogramming and time-sharing. Concurrency through interleaving is different from physical parallelism."
    ],
    "example": [
      "One-CPU multiprogramming: A computes → A waits for disk → B computes. One-CPU time-sharing: A for one quantum → B for one quantum → A again. Two-CPU multiprocessing: CPU 1 runs A while CPU 2 runs B at the same time."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 26, 48–50 (scheduling, resource sharing and processes).",
      "M3/Multiprocessor.pdf, pp. 1–3 (multiprocessor and multicore organization).",
      "M3/Module 3 _till multilevel.pdf, pp. 4 and 6–7 (multiprogramming and CPU–I/O overlap), p. 39 (round-robin quantum and timer preemption).",
      "Module 2.pptx, slide 75 (concurrency versus parallelism).",
      "The three-way comparison is a synthesis of the supplied notes. Correction: multiprogramming improves CPU utilization; it cannot keep the CPU busy when every job is blocked.",
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 1, Q1(b)."
    ]
  },
  "6da5a8bf82c1e38d": {
    "answer": [
      "A general-purpose OS balances functionality, security and performance by providing broad services through stable interfaces, protecting those services with controlled privilege and isolation, and optimizing frequent operations. The appropriate balance depends on the workload and threat model."
    ],
    "points": [
      "Functionality: process/thread management, virtual memory, files, drivers, networking and user interfaces support many applications and devices. More supported features also increase implementation and testing complexity.",
      "Security: user/kernel separation, per-process address spaces, authentication, access checks and least privilege prevent arbitrary access to other users’ data and hardware. Protection must apply to every relevant access path.",
      "Performance: scheduling, caching, buffering and efficient I/O reduce response time and improve throughput. Resource accounting and fair allocation keep one workload from monopolizing the machine.",
      "Kernel structure trade-off: monolithic/direct-call implementations can have low service overhead; moving services into isolated user processes strengthens fault containment but can add IPC and context switches. Modular designs ease extension but loaded kernel modules still share kernel privilege.",
      "Security versus convenience/performance: permission checks, encryption and auditing consume resources or add steps, while broad permissions and unrestricted drivers are convenient but enlarge risk. Cache safe decisions carefully and give users/processes only required rights.",
      "Throughput versus responsiveness: long CPU quanta or large batches can reduce overhead but delay interactive tasks. Real-time audio needs prompt service even while a background build seeks throughput.",
      "Maintenance and compatibility: stable APIs and policy/mechanism separation enable updates and new devices; preserving every legacy behavior may increase complexity. Measure latency, throughput and failure behavior against explicit goals."
    ],
    "example": [
      "Example: during video playback and a background file copy, the OS gives audio/video threads timely CPU service, buffers media data, lets the copy use remaining I/O bandwidth, and prevents either process from reading another user’s protected files.",
      "Design sketch: Applications → checked system-call boundary → protected kernel/core services ↔ controlled modules; isolated processes communicate using approved IPC/network interfaces. This preserves usable services while controlling their cost and privilege."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 20–21, 24–30, 34–47 and 51–54 (goals, services, structures and competing requirements).",
      "Module 7.pdf, pp. 23–28 (security goals, threats, protection and least privilege), pp. 44–47 (authentication, authorization and auditing).",
      "BCSE303L-FAT-C2-2025-2026.pdf, p. 1, Q1.",
      "The workload example and design trade-off synthesis are applications of the notes, not a claim that one architecture is universally best."
    ]
  },
  "2e310f4f87333532": {
    "answer": [
      "Five OS services relevant to the intern’s scenario are the user interface, program execution, I/O operations, file-system manipulation, and error detection/recovery. Together they let users start work, let programs access devices and data safely, and keep failures manageable."
    ],
    "points": [
      "1. User interface: a CLI accepts commands and a GUI accepts visual actions. The shell or interface translates user intentions into program launches and OS requests; the kernel need not itself draw every interface.",
      "2. Program execution: load an executable, create its process/address space, provide CPU and memory resources, and handle normal or abnormal termination. This supplies the environment in which applications run.",
      "3. I/O operations: expose controlled device operations through system calls and drivers. Buffering and caching help bridge different device speeds; applications need not program disk or printer controllers directly.",
      "4. File-system manipulation: create/delete files and directories, open/read/write data, maintain attributes and enforce permissions. This provides named, persistent information instead of raw disk sectors.",
      "5. Error detection and recovery: detect invalid accesses, failed I/O and other faults, report/log errors, clean up failed processes and recover where possible. Fault handling protects stability but cannot guarantee recovery from every hardware or kernel failure."
    ],
    "example": [
      "Opening a document illustrates all five: a user clicks its icon (GUI); the editor starts (program execution); the OS reads storage through a driver (I/O); it resolves and checks the file (file service); and it reports an unreadable file or device error without silently returning corrupt data (error handling)."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 19–29 (interfaces, execution goals and resource/file/device services), pp. 21 and 25 (reliability and error prevention).",
      "Module 2.pptx, slides 10–15 (process, file, device and information-maintenance system-call categories).",
      "BCSE303L-FAT-D1-2025-2026.pdf, p. 1, Q1.",
      "The concrete error-recovery flow is a standard explanation extending the notes’ short reliability bullets."
    ]
  },
  "3e248ddcd14b7d89": {
    "answer": [
      "A. A smart-home OS must coordinate sensing and control tasks, manage limited memory and devices, provide network communication, store configuration/events and enforce protection.",
      "B. The main implementation challenges are heterogeneous devices, timing/resource limits, failures and disconnections, security/privacy and ease of use. Address each with a corresponding design mechanism rather than relying on a single feature."
    ],
    "points": [
      "A1. Process scheduling and IPC: run sensor readers, alarms, timers and automation rules concurrently; give urgent events appropriate priority and synchronize shared device state so commands do not conflict.",
      "A2. Memory/resource management: allocate RAM and buffers, reclaim finished tasks and limit resource consumption so one faulty component cannot exhaust the hub.",
      "A3. Device and network management: drivers hide sensor/actuator hardware details; communication services exchange events and commands with devices and the user interface.",
      "A4. File/storage management: keep settings, schedules and event logs persistent; provide controlled access to recorded data and recover consistent configuration after restart.",
      "A5. Security and user services: authenticate users/devices, authorize operations and provide a clear interface for schedules, device state and alerts.",
      "B1. Heterogeneity → modular drivers and defined interfaces. B2. Limited CPU/RAM/power and urgent events → lightweight services, quotas, suitable priorities and bounded queues.",
      "B3. Device/network failures → timeouts, retries with limits, health monitoring and local safe behavior when remote access is unavailable. Design commands carefully so retrying does not repeat an unsafe action.",
      "B4. Intrusion/privacy risk → least privilege, process isolation, protected credentials, authenticated encrypted communication and verified updates. B5. User complexity → consistent controls, visible status, understandable error messages and manual override where appropriate."
    ],
    "example": [
      "Example: a leak sensor event wakes a high-priority handler; the handler validates the event, records it, requests the valve driver to close the valve and notifies the user. If the internet is down, local valve control still works; notification can be retried later.",
      "Illustrative architecture: [Sensors/actuators] ↔ [Drivers + network services] ↔ [Scheduler/IPC + protected automation services] ↔ [Local/mobile UI]; [Persistent settings/logs] are accessed through controlled file services."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (functions), 34–47 (design/structuring), 48–54 (resource abstraction, security, networking and timing).",
      "BCSE303L-FAT-D2-2023-2024.pdf, p. 1, Q1(A–B).",
      "Smart-home failure handling, update practices and the leak-sensor workflow are reasoned scenario applications beyond the generic notes."
    ]
  },
  "9af62add36e06e7d": {
    "answer": [
      "The prescribed methods are monolithic, layered, modular and microkernel structures. Compare each by component placement, communication, maintainability, performance and fault isolation."
    ],
    "points": [
      "Monolithic: most OS services execute in one kernel address space and communicate by direct procedure calls. Advantages: fast internal communication and integrated resource management. Disadvantages: privileged faults can propagate widely; tightly coupled components are difficult to debug and extend. Traditional UNIX is an example.",
      "Layered: divide the OS into levels; each level uses services below and exports operations above. Advantages: clear abstractions, manageable construction and bottom-up testing. Disadvantages: difficult dependency/layer assignment and overhead when requests cross multiple layers. Layering alone does not imply separate protected address spaces.",
      "Modular: a core kernel exposes interfaces to dynamically loadable services such as drivers and file systems. Advantages: customization and independent development/testing; optional functionality can be loaded when needed. Disadvantages: careful API/dependency management is required, and privileged modules can still corrupt the kernel. Solaris is the notes’ example; Linux is also monolithic with modules.",
      "Microkernel: leave essential mechanisms in a small kernel and run most services as user-space servers. Advantages: smaller privileged code base, better service isolation, easier extension and porting. Disadvantages: IPC/context-switch/copying costs and more complex coordination. Recovery of a server does not automatically preserve all client operations.",
      "These categories can overlap in real systems: modularity describes replaceable components, while monolithic versus microkernel chiefly describes privilege/address-space placement."
    ],
    "example": [
      "Draw four sketches: (1) Apps → [one large kernel] → hardware; (2) UI → layer N−1 → … → hardware; (3) drivers/file systems ↔ core kernel; (4) user apps and servers ⇄ IPC microkernel → hardware. Label the user/kernel boundary in (1), (3) and (4).",
      "Comparison example: adding a file system may require changing a static monolithic kernel, loading a compatible module in a modular kernel, or starting a file-system server in a microkernel design. The last two improve extension but have different privilege boundaries."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 39–47 (all four structures with advantages/disadvantages).",
      "merged.pdf (OS CAT1 past-paper compilation), p. 1, 2023–24 B1/B2 Q1."
    ]
  },
  "476ac85ddfe2c522": {
    "answer": [
      "Three major sources of OS design complexity are coordinating concurrent resource use, balancing protection with performance, and choosing a maintainable structure across changing hardware and requirements."
    ],
    "points": [
      "1. Concurrent resource management: many processes compete for CPU time, memory and devices. The OS must schedule fairly, synchronize shared data and handle deadlocks, races or resource exhaustion. Correctness must hold across many possible interleavings, making design and testing difficult.",
      "2. Protection, security and reliability: untrusted applications must be isolated while still sharing files, devices and communication services. Privilege boundaries, permission checks and recovery improve safety but can add overhead and complicate interfaces.",
      "3. Architecture, portability and evolution: monolithic, layered, modular and microkernel structures trade direct-call efficiency against isolation, extensibility and debugging. Hardware-specific code, stable APIs and separation of policy from mechanism must be arranged so updates do not break existing behavior."
    ],
    "example": [
      "For issue 1, two processes updating one shared counter require synchronization. For issue 2, a file read must check rights while keeping frequent reads efficient. For issue 3, a new network device should be supported through a defined driver interface without rewriting unrelated scheduling code."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (management responsibilities), 34–47 (design goals and structures), 51–54 (additional influences).",
      "BCSE303L CAT1 2025–26 C2, Q1(a), in merged.pdf p. 24."
    ]
  },
  "2109527f815a02c8": {
    "answer": [
      "An OS manages resources and provides a safe, convenient environment for program execution. Its major functions are process management, memory management, file/storage management, device management, protection/security and user/communication services."
    ],
    "points": [
      "Process management: create/terminate processes, schedule CPU time, synchronize tasks and support IPC.",
      "Memory management: allocate/reclaim memory, protect address spaces and provide virtual-memory mechanisms where required.",
      "File/storage management: organize files/directories, implement create/read/write/delete operations, track attributes and manage persistent storage.",
      "Device management: control hardware through drivers and use buffering/caching to coordinate I/O.",
      "Protection/security: authenticate identities and enforce permissions and resource isolation.",
      "Interfaces/communication: expose system calls and CLI/GUI facilities, and support local/network communication."
    ],
    "example": [
      "Illustration: User/application → OS [CPU | Memory | Files | I/O | Protection | Communication] → Hardware. Opening a file uses the interface, process scheduling, memory buffers, the file system, a device driver and an access check."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 19–30 and 52 (interfaces, functions and networking).",
      "BCSE303L CAT1 2025–26 C2, Q1(b), in merged.pdf p. 24."
    ]
  },
  "9e4c312a591d792c": {
    "answer": [
      "(a) The LMS needs scalable process/CPU management, memory isolation, persistent file/storage services, device/network I/O and protection. (b) A modular kernel is a suitable choice: it combines efficient kernel service paths with replaceable, clearly interfaced drivers and file-system/network support.",
      "(c) Schedule and coordinate concurrent exam, video and collaboration services; allocate bounded resources and use buffered/asynchronous I/O so waiting tasks do not waste CPU time. (d) Security requires controlled privilege and isolation, networking requires scalable communication, and multimedia requires predictable delivery rather than throughput alone."
    ],
    "points": [
      "(a) Process/CPU: create and schedule service processes/threads for many concurrent sessions. Memory: isolate services and allocate buffers without permitting one workload to exhaust RAM. Storage: maintain lecture media, submissions and logs. I/O/networking: drivers and network interfaces move requests and streams. Security: protect service identities, keys and files.",
      "(b) Modular justification: stable core interfaces permit adding or updating supported drivers/file systems with limited changes to unrelated components; direct kernel calls support efficient I/O. This balances performance and maintainability better than a rigid pure-layered design for this scenario.",
      "(b) Trade-off: a kernel module remains privileged, so modularity is not fault isolation. Keep the privileged module set small and tested, isolate LMS applications in separate processes, and use safe update/restart procedures. A well-justified microkernel alternative is possible if isolation is given higher priority than service-call overhead.",
      "(c) Resource coordination: use multicore execution where available, avoid blocking a whole service on one connection, synchronize shared queues, bound queue/memory use and apply scheduling/resource limits so bulk video traffic does not starve exam submissions.",
      "(c) Media delivery: buffer data ahead, cache frequently accessed lecture data when suitable and use efficient sequential/asynchronous disk and network I/O. Give time-sensitive work timely service while tracking network and storage bottlenecks; do not promise deadlines without capacity analysis.",
      "(d) Security: least privilege, user/kernel separation and permissions protect the server. The LMS application must additionally enforce student/teacher roles and exam rules; OS file permissions alone do not implement application authorization.",
      "(d) Networking and multimedia: sockets/protocol stacks and NIC drivers support thousands of connections; concurrency, flow control and bounded resources support scale. Audio/video delay and jitter require scheduling and buffering choices. More buffering smooths jitter but increases latency, so real-time collaboration uses a different balance from recorded lectures."
    ],
    "example": [
      "Architecture: Students → network interfaces/stack → isolated LMS, exam and media services → system calls → [modular kernel core + selected file-system/NIC/storage modules] → CPU/RAM/storage/network hardware.",
      "During an online exam with a lecture stream, reserve sufficient CPU/I/O capacity for submission requests, keep video queues bounded and buffer media delivery. If media load rises, limit/adapt the media service rather than letting it consume all memory. This is a scenario design, not a measured capacity guarantee."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (functions), 34–47 (design/structures), 48–54 (resources, security, network and multimedia).",
      "merged.pdf (OS CAT1 past-paper compilation), p. 26, 2025–26 D1 Q1(a–d).",
      "LMS-specific queueing, service separation and application-versus-OS authorization are reasoned applications of the supplied principles."
    ]
  },
  "c46aa9f57a1eab7a": {
    "answer": [
      "For an AR/VR-enabled gaming console, the OS must provide predictable scheduling, efficient memory/GPU and device management, low-latency input/audio/video, storage/network services and protection. A modular kernel with carefully bounded time-critical paths is a suitable proposed structure, balancing performance with driver and feature maintenance.",
      "This is a design proposal for the question; it does not claim to describe the actual proprietary PlayStation OS."
    ],
    "points": [
      "CPU/process scheduling: coordinate the game, tracking, rendering submission, audio and background services. Timely input/tracking and frame delivery matter; long non-preemptible work and priority inversion must be controlled.",
      "Memory management: isolate applications, allocate graphics/audio buffers and keep critical working data available to avoid unpredictable stalls. Manage CPU/GPU buffer ownership and synchronization through the relevant driver interfaces.",
      "Device and multimedia support: provide drivers for controllers, headset/sensors, display, GPU and audio; service interrupts promptly and buffer continuous media. Smooth average frame rate is insufficient if latency spikes disrupt the interactive experience.",
      "Storage and networking: load game assets efficiently, preserve saved state and support multiplayer communication. Background downloads must not monopolize resources required by play.",
      "Protection/reliability: restrict game access to hardware and system data, separate services, validate requests and handle failures. Power/thermal resource management is also relevant to sustained performance.",
      "Proposed structure: keep scheduling, memory protection and fast I/O mechanisms in the core; attach well-defined graphics, audio, controller, networking and file-system modules. Run games and nonessential background services as protected user processes.",
      "Justification/trade-off: direct calls among core/modules reduce overhead and modular interfaces help hardware support and maintenance. However, loaded kernel drivers share privilege and can crash the system; use a small trusted set and isolate services when practical. A microkernel could improve isolation, but its IPC paths would need to meet the same latency budget."
    ],
    "example": [
      "Sketch: user space [Game/AR–VR engine] [System UI] [Network/background services] → checked APIs/system calls → [Core scheduler + memory protection + IPC] ↔ [GPU/display | Audio | Controller/sensor | Storage/network modules] → Hardware.",
      "Illustrative frame budget: at 90 frames/s, one frame period is 1000/90 ≈ 11.11 ms. Tracking, CPU preparation, GPU rendering and presentation must be coordinated within the required pipeline timing; a 20 ms scheduling stall misses that period. The 90 Hz value is an illustrative assumption, not a specification supplied by the question."
    ],
    "sources": [
      "Module 1 - Introduction to OS.pdf, PDF pp. 24–30 (functions), 40–47 (structures), 51–54 (security, networking and multimedia timing).",
      "merged.pdf (OS CAT1 past-paper compilation), p. 29, 2023–24 D2 Q1.",
      "AR/VR resource choices and the frame-period calculation are scenario analysis beyond the generic notes; no proprietary implementation is asserted."
    ]
  },
  "d53707551879b11f": {
    "answer": [
      "Dual-mode operation protects the operating system, hardware and other processes from faulty or malicious applications. Ordinary applications run in user mode with restricted access; the OS executes privileged operations in kernel mode.",
      "A hardware mode indicator distinguishes the modes. Privileged instructions, such as changing protection settings or configuring the interrupt timer, are rejected in user mode. A system call, trap or interrupt transfers control to an authorized kernel entry point; returning restores user-mode execution."
    ],
    "points": [
      "The protection boundary prevents one application from directly overwriting kernel memory, disabling interrupts or taking uncontrolled access to I/O.",
      "The notes use mode bit 1 for user and 0 for kernel; the underlying requirement is hardware-enforced privilege separation."
    ],
    "example": [
      "Example: an editor requests a disk write through write(); the kernel checks the file descriptor and permissions, performs the permitted I/O, and returns a result to the editor."
    ],
    "sources": [
      "Module 2.pptx, slides 3 and 20–24: dual modes, hardware mode bit and controlled transitions."
    ]
  },
  "e7ea616436cb6e82": {
    "answer": [
      "A system call is the controlled interface by which a running program requests an OS service. It crosses into a kernel service routine, commonly through a library/API wrapper, and returns a result or error.",
      "System-call categories: process control (fork, exec, wait, exit); file management (open, read, write, close); device management (request/release a device, device operations); information maintenance (time and process attributes); communication (pipes, sockets, shared memory); protection (permissions and access control).",
      "A system program is a utility that provides a convenient environment for developing, executing or managing programs. It generally uses system calls to do its work; it is not itself the system-call interface.",
      "Standard system-program categories: file management; status/information utilities; file modification; programming-language support; program loading and execution; communication; background services. Some classifications also list application utilities separately."
    ],
    "points": [
      "System call = a programmatic OS-service request. System program = a complete utility built using these services.",
      "The supplied Module 2 notes explicitly provide the six system-call groups. The fuller system-program classification is supplemental standard OS terminology; the Module 1 notes provide examples, not this complete list."
    ],
    "example": [
      "Examples of system programs: cp/ls for file management, ps/date for status, an editor for file modification, a compiler for language support, a loader/shell for execution, a remote-login utility for communication, and a service daemon for background work. cp may call open, read, write and close."
    ],
    "sources": [
      "Module 2.pptx, slides 2 and 6–17: interface and six categories of system calls.",
      "Module 1 - Introduction to OS.pdf, slide/page 18: system-program examples (compilers, loaders and editors).",
      "Supplemental standard reasoning: the expanded system-program category list and utility-to-system-call examples are explanatory additions."
    ]
  },
  "8990a11c78ec3640": {
    "answer": [
      "User-level threads are created, tracked and scheduled by a user-space runtime; kernel-level threads are individually known to and scheduled by the kernel. A user thread may still execute system calls; “user-level” describes who manages it.",
      "In a pure many-to-one implementation, creating and switching user threads can avoid entering the kernel and is inexpensive. Kernel-thread creation and scheduling require kernel work and more bookkeeping, but the OS can independently schedule each thread.",
      "With many-to-one mapping, a blocking system call can block the only kernel execution entity and therefore all user threads, and only one can execute at once. With one-to-one kernel backing, another runnable thread can continue and threads can run on different cores.",
      "User-thread libraries allow application-specific scheduling and can be portable; kernel-backed threads provide OS scheduling and multicore parallelism at higher per-thread cost. Blocking and parallelism depend on the mapping model, so they are not universal limitations of every user-level runtime."
    ],
    "points": [
      "Both types need an execution context: program counter, register state and stack. Threads of one process normally share its code, data, heap and open resources.",
      "Do not identify POSIX Pthreads as inherently many-to-one: it is an API and can be implemented with kernel-backed threads."
    ],
    "example": [
      "A library that multiplexes U1, U2 and U3 onto K1 is many-to-one. A system mapping U1→K1, U2→K2 and U3→K3 lets the OS schedule those threads independently on available cores."
    ],
    "sources": [
      "Module 2.pptx, slides 70–73 and 77–82: threads, user/kernel management and mapping models.",
      "Supplemental clarification: API choice alone does not determine the user-to-kernel thread mapping."
    ]
  },
  "7e574f9188b3d366": {
    "answer": [
      "There are 4 processes in total, including the initial parent: 3 children are newly created. Assume every fork() succeeds. The nesting means that not every process executes every fork.",
      "First fork: P0 receives a positive return value and enters the outer if; child P1 receives 0, goes to the outer else and prints 3. Second fork: only P0 executes it. P0 receives positive, so !fork() is false and prints 2; its child P2 receives 0, so !fork() is true and enters the inner if. Third fork: only P2 executes it, creating P3; both P2 and P3 print 1. All four processes then print 4."
    ],
    "points": [
      "Count the executed forks: 1 + 1 + 1 = 3 newly created processes; add the original process to obtain 4.",
      "Print counts are: “1” twice, “2” once, “3” once, “4” four times. The scheduler does not impose a single global order; within each process its branch output precedes its 4."
    ],
    "example": [
      "Process tree (F1, F2, F3 denote the three fork sites):\nP0  [prints 2, then 4]\n├── P1 via F1  [prints 3, then 4]\n└── P2 via F2  [prints 1, then 4]\n    └── P3 via F3  [prints 1, then 4]\n\nOne possible output: 2 4 3 4 1 4 1 4"
    ],
    "sources": [
      "Module 2.pptx, slides 49–54 and 63–64: fork copies a process and returns positive in the parent and zero in the child.",
      "Supplemental worked derivation: branch-by-branch trace of the actual question program; assumes successful forks."
    ]
  },
  "5095f3164926bdc7": {
    "answer": [
      "User-level threads are created, tracked and scheduled by a user-space runtime; kernel-level threads are individually known to and scheduled by the kernel. A user thread may still execute system calls; “user-level” describes who manages it.",
      "In a pure many-to-one implementation, creating and switching user threads can avoid entering the kernel and is inexpensive. Kernel-thread creation and scheduling require kernel work and more bookkeeping, but the OS can independently schedule each thread.",
      "With many-to-one mapping, a blocking system call can block the only kernel execution entity and therefore all user threads, and only one can execute at once. With one-to-one kernel backing, another runnable thread can continue and threads can run on different cores.",
      "User-thread libraries allow application-specific scheduling and can be portable; kernel-backed threads provide OS scheduling and multicore parallelism at higher per-thread cost. Blocking and parallelism depend on the mapping model, so they are not universal limitations of every user-level runtime."
    ],
    "points": [
      "User-level threads are advantageous for large numbers of small cooperative tasks, application-controlled scheduling or workloads using nonblocking I/O: switching can be cheap and kernel-thread counts can remain small.",
      "Kernel-backed threads are advantageous for a multicore compute workload or a server whose workers may block in I/O: other workers can continue, and independent workers can run in parallel.",
      "For CPU-heavy image processing on four cores, pure many-to-one user threads cannot obtain four-way parallelism; one-to-one or many-to-many mapping with enough kernel threads can. For thousands of short tasks, a user-level runtime over a smaller kernel pool may reduce overhead."
    ],
    "example": [
      "Scenario comparison: choose independently schedulable kernel-backed workers for concurrent blocking downloads; choose user-level tasks over a bounded worker pool when each task is tiny and the runtime can arrange asynchronous I/O. The best choice follows workload and mapping, not the label alone."
    ],
    "sources": [
      "Module 2.pptx, slides 73–82: economy, scalability, multicore execution and mapping models.",
      "Supplemental application: the download/short-task scenarios apply the notes’ trade-offs."
    ]
  },
  "8d4de557effc3021": {
    "answer": [
      "In the examination system, separate processes provide separate virtual address spaces and stronger fault isolation for services such as login and proctoring. Each process has its own code/data/heap mappings and OS resource bookkeeping. Threads within one process share code, data, heap and open resources; each thread keeps its own stack, program counter and registers, so per-worker memory cost is normally lower.",
      "Process switching generally saves/restores execution state and may change address-space mappings; a switch between threads in the same process can retain those mappings. Both still require a valid saved execution context. Thread communication can use shared memory directly but needs synchronization; processes usually communicate through explicit IPC such as pipes, sockets or shared-memory mappings, adding setup/protocol overhead.",
      "Lifecycle: New means creation; Ready means eligible to run but awaiting CPU; Running means currently executing; Waiting/Blocked means waiting for I/O or an event; Terminated means execution has ended. Dispatch moves Ready→Running; preemption moves Running→Ready; an I/O request moves Running→Waiting; completion moves Waiting→Ready.",
      "The PCB is the OS record for a process. It contains state, PID/identity, program counter and registers, scheduling priority/queue links, memory-management information, accounting data and I/O/open-file information. During a context switch the OS saves outgoing state and restores incoming state, using these records to suspend and resume execution correctly."
    ],
    "points": [
      "Peak-load application: use a bounded worker pool and shared read-only question data to reduce repeated creation and memory usage; protect mutable session/answer records against races. Separate processes are useful where a component’s crash should be contained.",
      "Thread sharing makes communication cheaper but also allows a faulty thread or unsynchronized update to corrupt the whole process. A large number of workers alone does not guarantee performance; CPU, memory, I/O and lock contention may remain bottlenecks."
    ],
    "example": [
      "State diagram:\nNew ──admit──> Ready ──dispatch──> Running ──exit──> Terminated\n                 ^                  │\n                 ├──preemption──────┤\n                 │                  └──I/O/event wait──> Waiting\n                 └──────────I/O/event completion─────────┘\n\nExam example: a login worker runs, blocks awaiting its database response,\nreturns to Ready when the response arrives, and runs after dispatch."
    ],
    "sources": [
      "Module 2.pptx, slides 37–46: process memory, states, PCB, queues and context switching.",
      "Module 2.pptx, slides 70–76: multithreading, resource sharing, economy and parallelism.",
      "Module 4.pdf, slides/pages 4–6: IPC models. Supplemental design reasoning: worker pools, fault isolation and the examination-system application."
    ]
  },
  "9b0095fd35305a92": {
    "answer": [
      "Complexity: a process is a resource-owning execution environment with its own address space and OS records, so creating/managing one generally costs more. A thread is an execution path inside a process and is lighter to create, but shared-state synchronization can make correct multithreaded programming harder.",
      "Structure: a process contains code, data, heap, resources and at least one thread. Each thread has its own program counter, registers and stack; threads in the same process share the process’s code, data, heap and open files.",
      "Switching overhead: switching between processes may require changing memory-management context as well as CPU state. Switching between threads of one process normally keeps the same address space and is cheaper, although scheduling and register/stack restoration still cost time.",
      "Benefits: processes give isolation, independent resource control and modularity. Threads give responsive interfaces, inexpensive resource sharing, lower creation/switching cost, and multicore parallelism when independently kernel-scheduled."
    ],
    "points": [
      "A process is not necessarily single-threaded. A thread is not an isolated miniature address space.",
      "Choose processes when failure containment matters; choose threads for cooperating tasks that benefit from shared data, while protecting concurrent updates."
    ],
    "example": [
      "A browser can isolate different sites in different processes while using several threads inside one process for networking, rendering and UI work. This illustrates isolation across processes and cooperation within a process."
    ],
    "sources": [
      "Module 2.pptx, slides 37–41 and 45–46: process structure, PCB and context switching.",
      "Module 2.pptx, slides 70–76: threads, sharing, responsiveness, economy and scalability.",
      "Supplemental illustrative application: browser organization is used as a conceptual example, not a claim about one specific browser version."
    ]
  },
  "5f1e0a15e96d812a": {
    "answer": [
      "System calls let a user program request protected OS services through a controlled kernel entry point. The kernel validates arguments, identities and access rights, performs the operation and returns a result. Every system-call handler executes in kernel mode; “privileged call” below means the operation needs elevated caller permissions, not that an ordinary call executes outside the kernel.",
      "ptrace(): observes/controls another process for debugging, including its registers and memory. Classification: restricted/conditionally privileged. Tracing an authorized same-user child may be permitted without administrator privilege; tracing arbitrary protected processes requires appropriate privilege such as CAP_SYS_PTRACE, and security policy may further restrict it. Linux ptrace manual (https://man7.org/linux/man-pages/man2/ptrace.2.html).",
      "setuid(): changes process user identity. Classification: privileged for an arbitrary identity change (Linux CAP_SETUID); an unprivileged process is allowed only restricted changes to its real or saved set-user ID. Calling it does not automatically grant root access. Linux setuid manual (https://man7.org/linux/man-pages/man2/setuid.2.html).",
      "execve(): replaces the calling process image with a specified executable and supplies arguments/environment; successful execution does not return to the old image. Classification: ordinarily non-privileged, subject to execution permissions and security policy. Linux execve manual (https://man7.org/linux/man-pages/man2/execve.2.html).",
      "read(): transfers up to the requested number of bytes from an open file descriptor into a user buffer. Classification: ordinarily non-privileged, provided the descriptor and access permissions allow reading. Linux read manual (https://man7.org/linux/man-pages/man2/read.2.html).",
      "init_module(): loads and initializes a kernel module. Classification: privileged; on Linux it requires CAP_SYS_MODULE and can still be refused by module/security settings. Linux init_module manual (https://man7.org/linux/man-pages/man2/init_module.2.html)."
    ],
    "points": [
      "A simplified exam grouping is privileged/restricted: ptrace, setuid, init_module; ordinary/non-privileged: execve, read. Retain the qualifications for ptrace and setuid for a technically correct answer.",
      "CPU privilege level and the process’s authorization are different: a non-root process enters kernel mode during read(), but the kernel does not give it unrestricted access."
    ],
    "example": [
      "An ordinary user can execute an accessible program and read its own open files. The same user cannot load an arbitrary kernel driver or set its identity to any chosen UID merely by issuing a syscall."
    ],
    "sources": [
      "Module 2.pptx, slides 2–3, 6, 10–16 and 20–24: system-call purpose, categories and protected modes.",
      "Supplemental Linux-specific semantics, not detailed in the slides: ptrace(2), setuid(2), execve(2), read(2), init_module(2), linked beside each explanation."
    ]
  },
  "f7051a437adbd461": {
    "answer": [
      "Create two child processes using fork(): one generates even numbers, and the other prints the supplied name character by character. Only the original parent performs the second fork. Each child exits after its own task; the parent calls waitpid for both children before printing the final confirmation.",
      "The program below accepts the limit and name as command-line arguments. It uses a 1-second delay between even numbers and a larger 2-second delay between characters. These delays are a concrete choice because the question specifies only their relative sizes. Zero is included as an even number; start the loop at 2 if “positive even numbers” is intended."
    ],
    "points": [
      "Three processes exist: one coordinating parent plus two worker children. Waiting for the first PID does not stop the second child from running.",
      "Check fork failures; handle waitpid interrupted by a signal; keep children from falling through into parent code. Scheduling can interleave the two output streams, but the final success message follows both successful child completions."
    ],
    "example": [
      "#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <errno.h>\n#include <limits.h>\n\nstatic void delay_seconds(unsigned n) {\n    while ((n = sleep(n)) != 0) { }\n}\nstatic int collect(pid_t pid) {\n    int status;\n    pid_t r;\n    do { r = waitpid(pid, &status, 0); }\n    while (r == -1 && errno == EINTR);\n    if (r == -1) { perror(\"waitpid\"); return 0; }\n    return WIFEXITED(status) && WEXITSTATUS(status) == 0;\n}\nint main(int argc, char **argv) {\n    if (argc != 3) {\n        fprintf(stderr, \"Usage: %s nonnegative_limit name\\n\", argv[0]);\n        return 1;\n    }\n    char *end;\n    errno = 0;\n    long limit = strtol(argv[1], &end, 10);\n    if (errno || end == argv[1] || *end || limit < 0 || limit > INT_MAX) {\n        fputs(\"Invalid limit\\n\", stderr); return 1;\n    }\n    setvbuf(stdout, NULL, _IONBF, 0); /* no inherited output buffer */\n    pid_t even_child = fork();\n    if (even_child == -1) { perror(\"fork\"); return 1; }\n    if (even_child == 0) {\n        for (long n = 0; n <= limit; n += 2) {\n            printf(\"Even: %ld\\n\", n);\n            if (limit - n >= 2) delay_seconds(1);\n        }\n        _exit(0);\n    }\n    pid_t name_child = fork(); /* reached only by the original parent */\n    if (name_child == -1) {\n        perror(\"fork\"); collect(even_child); return 1;\n    }\n    if (name_child == 0) {\n        for (size_t i = 0; argv[2][i] != '\\0'; ++i) {\n            printf(\"Character: %c\\n\", argv[2][i]);\n            if (argv[2][i + 1] != '\\0') delay_seconds(2);\n        }\n        _exit(0);\n    }\n    int even_ok = collect(even_child);\n    int name_ok = collect(name_child);\n    if (even_ok && name_ok) {\n        puts(\"Both tasks completed.\"); return 0;\n    }\n    fputs(\"A child task failed.\\n\", stderr);\n    return 1;\n}",
      "Build: cc -std=c11 -Wall -Wextra tasks.c -o tasks. Run: ./tasks 6 OS. Even output is 0, 2, 4, 6; character output is O, S. Their relative order may vary. The parent prints Both tasks completed. last.",
      "Process tree: Parent → Even child; Parent → Name child. Both children run independently while Parent waits for each."
    ],
    "sources": [
      "Module 2.pptx, slides 49–54 and 63–67: fork, separate parent/child paths, wait and termination.",
      "Supplemental implementation: complete POSIX C example using waitpid and sleep, derived from the question; timing choices and input/error handling are additions beyond the slides."
    ]
  },
  "0cbee4fb32d4c475": {
    "answer": [
      "Use three POSIX threads for audio playback, video display and user input. The audio thread checks the global audio_paused flag before each segment; it skips playback while the flag is 1. The video thread checks only the shutdown flag, so pausing audio does not pause video. The input thread changes the pause flag on p/r and requests termination on q or end of input.",
      "For correctness without application mutexes, declare shared flags as C11 atomic variables and access them through atomic_load/atomic_store. A plain shared int, even if declared volatile, is not sufficient: concurrent unsynchronized reads and writes constitute a data race. Atomics provide defined communication between the threads. The complete program also validates commands, checks thread creation, and joins every successfully created thread."
    ],
    "points": [
      "Only the input thread writes pause/resume commands during normal execution; all readers still use atomic loads. The default atomic operations are sequentially consistent. There is no multi-variable invariant requiring a larger critical section.",
      "Pause takes effect at a segment boundary: if audio has already checked the flag when p arrives, the current segment may finish. The question asks for a check before each segment, not cancellation of a segment already started. Shutdown may take up to the sleep interval for a sleeping worker to notice.",
      "pthread_join prevents main from exiting while workers remain active. A video sleep simulates frame pacing; video does not wait for the audio or input thread. Real-time deadlines and audio/video synchronization would require additional design."
    ],
    "example": [
      "#include <stdio.h>\n#include <pthread.h>\n#include <stdatomic.h>\n#include <string.h>\n#include <unistd.h>\n\natomic_int audio_paused = 0;\nstatic atomic_int running = 1;\n\nstatic void *audio(void *unused) {\n    (void)unused;\n    for (unsigned segment = 1; atomic_load(&running); ++segment) {\n        if (!atomic_load(&audio_paused))\n            printf(\"Playing audio segment %u\\n\", segment);\n        sleep(1); /* a paused segment is skipped */\n    }\n    return NULL;\n}\nstatic void *video(void *unused) {\n    (void)unused;\n    for (unsigned frame = 1; atomic_load(&running); ++frame) {\n        printf(\"Displaying video frame %u\\n\", frame);\n        sleep(1); /* audio pause never blocks this thread */\n    }\n    return NULL;\n}\nstatic void *input(void *unused) {\n    (void)unused;\n    char line[128], cmd, extra;\n    puts(\"Commands: p = pause, r = resume, q = quit\");\n    while (fgets(line, sizeof line, stdin)) {\n        if (!strchr(line, '\\n') && !feof(stdin)) {\n            int ch;\n            while ((ch = getchar()) != '\\n' && ch != EOF) { }\n            puts(\"Command too long\"); continue;\n        }\n        if (sscanf(line, \" %c %c\", &cmd, &extra) != 1) {\n            puts(\"Enter one command: p, r or q\"); continue;\n        }\n        if (cmd == 'p') {\n            atomic_store(&audio_paused, 1); puts(\"Audio paused\");\n        } else if (cmd == 'r') {\n            atomic_store(&audio_paused, 0); puts(\"Audio resumed\");\n        } else if (cmd == 'q') {\n            break;\n        } else {\n            puts(\"Unknown command\");\n        }\n    }\n    atomic_store(&running, 0); /* q or EOF requests shutdown */\n    return NULL;\n}\nint main(void) {\n    pthread_t ids[3];\n    void *(*work[3])(void *) = {audio, video, input};\n    int made = 0, failed = 0;\n    setvbuf(stdout, NULL, _IONBF, 0);\n    for (; made < 3; ++made) {\n        int err = pthread_create(&ids[made], NULL, work[made], NULL);\n        if (err != 0) {\n            fprintf(stderr, \"pthread_create: %s\\n\", strerror(err));\n            atomic_store(&running, 0); failed = 1; break;\n        }\n    }\n    for (int i = 0; i < made; ++i) {\n        int err = pthread_join(ids[i], NULL);\n        if (err != 0) {\n            fprintf(stderr, \"pthread_join: %s\\n\", strerror(err));\n            failed = 1;\n        }\n    }\n    if (!failed) puts(\"All threads stopped.\");\n    return failed;\n}",
      "Build: cc -std=c11 -Wall -Wextra -pthread media.c -o media. Run ./media, then enter p, r and q on separate lines. During p, video frames continue; after r, later audio segments play; q/EOF stops all three threads and main joins them."
    ],
    "sources": [
      "Module 2.pptx, slides 70–77: threads, shared resources, responsiveness and Pthreads.",
      "Module 4.pdf, slides/pages 23–27 and 47: races, synchronization and indivisible atomic operations.",
      "Supplemental C11 implementation details: N1570 §5.1.2.4 and §7.17, https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf. The atomic-flag program, command parser and thread lifecycle handling are newly derived for this question."
    ]
  },
  "5d64b0b924a08266": {
    "answer": [
      "A system call is a controlled request by a process for an OS service, such as file I/O, process creation or memory/resource management. Applications normally invoke an API wrapper, which enters the kernel with a call number and arguments; the kernel dispatches the correct service and returns status/results.",
      "System calls are necessary because applications must not directly perform unrestricted privileged operations. They provide a documented abstraction, validate requests, enforce access control and let the kernel coordinate shared resources.",
      "Parameter-passing method 1 — registers: put arguments in designated CPU registers before the trap. It is fast and simple, but the available registers limit the arguments that fit.",
      "Parameter-passing method 2 — memory block/table: store the argument list in memory and pass its address in a register. The kernel obtains the arguments from that block after validating access; this accommodates larger argument sets.",
      "Parameter-passing method 3 — stack: push arguments onto a designated stack according to the ABI; the kernel retrieves them using that calling convention. This avoids a small fixed register-only argument limit."
    ],
    "points": [
      "The syscall number identifies the operation; its parameters identify the object, data, count, options and other needed details.",
      "The exact ABI is OS/architecture-specific. The notes list three general mechanisms; a real implementation may combine registers and pointers."
    ],
    "example": [
      "Example request: read(fd, buffer, count)\nRegisters:      R1=fd, R2=buffer_address, R3=count → syscall\nMemory block:   args=[fd, buffer_address, count]; R1=&args → syscall\nStack:          push(count); push(buffer_address); push(fd) → syscall\n\nUser program → API wrapper → syscall/trap → kernel handler → return"
    ],
    "sources": [
      "Module 2.pptx, slides 2–9: API/system-call interface, dispatch and parameter passing.",
      "Module 2.pptx, slides 20–24: protection and user-to-kernel transitions.",
      "Supplemental explanation: the read argument layouts are illustrative, not a claim about one platform’s exact register ABI."
    ]
  },
  "33ef5f588b3184cc": {
    "answer": [
      "(i) Reading system time: ordinarily non-privileged as a request; a user program may ask for the time. Depending on implementation, it can use a user-accessible clock facility or an OS call whose handler runs in kernel mode. Reading time is different from changing the hardware/system clock.",
      "(ii) Clear memory: privileged/kernel mode if it means clearing arbitrary physical memory, kernel memory or another process’s protected memory, which is the usual protection-question interpretation. Clearing the caller’s own writable buffer, such as memset(buf, 0, n), is an ordinary non-privileged user-mode operation.",
      "(iii) Opening and reading a file: an ordinary user may invoke open/read when permitted, so the requests are not administrator-only operations. Their protected filesystem/I/O service code executes in kernel mode through system calls, with permission checks. An application must not directly perform arbitrary device I/O.",
      "(iv) Set the timer: privileged/kernel mode when configuring the hardware timer used for interrupts and CPU control; allowing unrestricted changes could defeat preemption. Requesting an application timer through an OS API is a separate, permission-checked user request.",
      "(v) Performing arithmetic: ordinary arithmetic instructions are non-privileged and execute in user mode; kernel code may also execute them."
    ],
    "points": [
      "Usual exam table (protected-operation interpretation): read system time → non-privileged/user-accessible; clear arbitrary/system memory → privileged/kernel; open/read file service → privileged/kernel-mediated; set hardware timer → privileged/kernel; ordinary arithmetic → non-privileged/user. The qualifications above distinguish these services from user-level API calls and ordinary own-buffer stores.",
      "The question mixes CPU instructions and high-level OS operations. Distinguish “may a user invoke it?” from “does the implementation execute privileged kernel instructions?”",
      "Under the usual classroom abstraction, protected memory clearing and hardware timer setting require kernel mode; reading time and arithmetic are user-permitted. File access is user-requested through a kernel-mode service, not unrestricted user-mode hardware access."
    ],
    "example": [
      "A user program can compute x+y, clear its own array and read an authorized file. It cannot clear the OS page tables or disable/reconfigure the scheduler’s hardware timer."
    ],
    "sources": [
      "Module 2.pptx, slides 3, 12–14 and 20–24: file/time services, dual modes and privileged operations.",
      "Supplemental interpretation: the ambiguous terms “clear memory” and “set the timer” are explicitly scoped; syscall authorization is distinguished from CPU execution mode."
    ]
  },
  "ad0ccd6958705925": {
    "answer": [
      "User-level threads are created, tracked and scheduled by a user-space runtime; kernel-level threads are individually known to and scheduled by the kernel. A user thread may still execute system calls; “user-level” describes who manages it.",
      "In a pure many-to-one implementation, creating and switching user threads can avoid entering the kernel and is inexpensive. Kernel-thread creation and scheduling require kernel work and more bookkeeping, but the OS can independently schedule each thread.",
      "With many-to-one mapping, a blocking system call can block the only kernel execution entity and therefore all user threads, and only one can execute at once. With one-to-one kernel backing, another runnable thread can continue and threads can run on different cores.",
      "User-thread libraries allow application-specific scheduling and can be portable; kernel-backed threads provide OS scheduling and multicore parallelism at higher per-thread cost. Blocking and parallelism depend on the mapping model, so they are not universal limitations of every user-level runtime.",
      "Advantages in multicore systems: responsiveness (one blocked task need not freeze the application); resource sharing (threads naturally share process data); economy (lower creation and switching costs); scalability (independent kernel-scheduled workers can execute on separate cores). Data parallelism applies the same operation to partitions of data; task parallelism assigns different operations to threads.",
      "Many-to-one: multiple user threads map to one kernel thread. Management is cheap, but a blocking call can stop that execution entity and there is no simultaneous multicore execution within it. One-to-one: each user thread maps to a kernel thread, enabling independent blocking and parallelism, at greater kernel-resource cost.",
      "Many-to-many: many user threads are multiplexed over several kernel threads, balancing runtime flexibility with parallelism. Two-level: a many-to-many variant additionally allows selected user threads to be bound to particular kernel threads."
    ],
    "points": [
      "Parallelism requires enough runnable work, suitable kernel backing and available cores. More threads can also increase contention and synchronization overhead.",
      "The notes identify the main three mapping models and the two-level variation. Illustrate the mappings rather than claiming every Pthreads implementation uses the same one."
    ],
    "example": [
      "Mapping diagrams (U = user thread, K = kernel thread):\nMany-to-one:   U1 ─┐\n              U2 ─┼──> K1\n              U3 ─┘\n\nOne-to-one:   U1 ───> K1\n              U2 ───> K2\n              U3 ───> K3\n\nMany-to-many: {U1,U2,U3,U4} ──runtime multiplexing──> {K1,K2}\nTwo-level:    {U1,U2,U3} ──multiplexing──> {K1,K2}; U4 ──bound──> K3\n\nExample: divide an image into four regions and process the regions on four\nkernel-backed threads. Shared output locations must be disjoint or synchronized."
    ],
    "sources": [
      "Module 2.pptx, slides 70–82: thread advantages, multicore concepts, user/kernel threads and all four illustrated mappings.",
      "Supplemental application: the image-processing example applies the notes’ data-parallelism definition."
    ]
  },
  "7a45820547a8c78d": {
    "answer": [
      "Three suitable Linux process-control interfaces are fork(), execve() and wait(). They demonstrate creation, program replacement and parent-child synchronization respectively. They are invoked by user programs through the C/POSIX interface; the kernel performs the underlying process operations.",
      "1. fork(): creates a child process. Parent and child resume after the call in separate address spaces. Return values are child PID in the parent, 0 in the child and −1 on failure. The child has a new PID and inherits the parent’s initial memory contents and open descriptors. Schematic: one parent → fork → parent branch + child branch.",
      "2. execve(path, argv, envp): replaces the calling process image with the specified program, retaining the process identity/PID. It does not create an additional process. On success it never returns to the old program; on failure it returns −1. Schematic: child running old image → execve → same child PID running new image.",
      "3. wait(&status): waits for and reaps a terminated child, returning its PID and encoded termination status. If no child has terminated yet, it blocks; if one is already a zombie, it reaps it immediately. With no eligible child it fails. Schematic: parent → wait/block; child → finish; parent → wake/reap → continue."
    ],
    "points": [
      "Check fork()<0; do not accidentally run parent logic in a failed-child branch.",
      "Use WIFEXITED/WEXITSTATUS or WIFSIGNALED on the encoded status instead of assuming it is a raw exit code.",
      "An exec failure must terminate or handle the error in the child; otherwise it may continue the old program unexpectedly."
    ],
    "example": [
      "Combined schematic:\nShell/parent P\n   └─ fork() ─┬─ P: wait(&status) ───────────────→ resumes after child ends\n              └─ C: execve(\"/bin/ls\",...) → ls → termination\nP and C have different PIDs; C keeps its PID across execve.",
      "Illustrative control flow (not a full program):\npid = fork();\nif (pid == -1) { handle_error(); }\nelse if (pid == 0) {\n    execve(\"/bin/ls\", args, env);\n    _exit(127);  /* reached only if execve failed */\n} else {\n    wait(&status);\n    /* parent continues after the child has been reaped */\n}"
    ],
    "sources": [
      "Module 2.pptx, slides 48–64: fork, exec, parent/child execution and wait examples.",
      "Module 2.pptx, slides 66–69: termination, status collection and zombies.",
      "Supplemental standard POSIX details: execve arguments, failure handling and encoded wait status.",
      "Supplemental primary Linux documentation for wait status, zombie records and reparenting: wait(2), https://man7.org/linux/man-pages/man2/wait.2.html ."
    ]
  },
  "4de1dfc94c2a20e2": {
    "answer": [
      "The I/O statements are the ones that request OS services: the prompt printf(\"Enter two integers a and b:\\n\"), scanf(\"%d%d\", &a, &b), and whichever one of the three result printf calls is selected. A write to the terminal or a read from it requires underlying kernel I/O services, causing user→kernel mode entry.",
      "Precisely, printf and scanf are C library functions, not themselves kernel system calls. Formatting/parsing runs in user space. printf enters the kernel when it flushes data through a write-like system call; scanf enters it when it needs to obtain more bytes through a read-like system call. Buffering means a particular library invocation need not immediately make a system call.",
      "Declaring int a,b, comparing a>b or b>a, choosing if/else branches and ordinary computation execute in user mode. They do not request a privilege transition by themselves.",
      "Returning from main ultimately invokes the C runtime’s termination path, which flushes pending output and asks the kernel to terminate the process. Thus the final return 0 leads indirectly to kernel activity as well; it is not itself a privileged CPU instruction."
    ],
    "points": [
      "In the expected elementary answer, identify printf and scanf as I/O operations requiring OS help, while explaining the library/system-call distinction.",
      "Only one of “a is bigger”, “b is bigger” and “Both are equal” is printed in an execution.",
      "An unrelated timer interrupt/page fault could also enter the kernel during execution, but that is not an explicit service requested by an if or declaration."
    ],
    "example": [
      "For input 9 4: prompt formatting → write to stdout → read input if needed → parse values → compare 9>4 in user mode → format “a is bigger” → flush output → process termination.",
      "Path: printf/scanf library code (user) → write/read syscall → kernel I/O handler → return to library (user)."
    ],
    "sources": [
      "Module 2.pptx, slides 2–7: API/system-call/kernel relationship.",
      "Module 2.pptx, slide 17: printf library call invoking write.",
      "Module 2.pptx, slides 20–24 and 66–67: mode transitions and termination.",
      "Supplemental standard C/POSIX reasoning: stdio buffering, scanf parsing and the runtime action after returning from main."
    ]
  },
  "914e94c2f8e5389a": {
    "answer": [
      "An orphan is created when a parent terminates while its child is still alive. The child can continue executing and is reparented to a system reaper (on Linux, an appropriate child subreaper or ultimately the namespace’s init process). Merely omitting wait does not immediately create an orphan: the parent must actually exit while the child survives.",
      "Four differences: (1) State—an orphan is a surviving process; a zombie has finished execution. (2) Cause—orphanhood results from the parent exiting first; a zombie results from child termination before its termination status has been collected. (3) Resources—an orphan still needs its execution resources and may consume CPU; a zombie has released its ordinary execution resources and retains only limited termination/accounting information and a process-table identity. (4) Resolution—an orphan is adopted and eventually reaped after it exits; a zombie is removed when a parent/reaper collects its status with wait/waitpid.",
      "These terms describe different properties. Reparenting does not itself kill a child, and a terminated orphan can briefly be a zombie until its new parent reaps it. A zombie cannot be made to execute again; sending it an ordinary kill signal cannot make an already-exited process exit again."
    ],
    "points": [
      "Orphan sequence: fork → parent exits → child continues under new parent.",
      "Zombie sequence: fork → child exits → parent is still alive but has not yet waited → retained status → wait reaps child.",
      "Prevention/cleanup: parents should reap their children; waiting before parent exit also avoids leaving that child orphaned."
    ],
    "example": [
      "Orphan illustration: parent P exits at t=1 while child C works until t=5; C is orphaned/reparented during the interval. Zombie illustration: C exits at t=1 while P delays wait until t=5; C has a retained exit-status record during the interval.",
      "Normal synchronized case: parent calls wait(); child completes and exits; wait returns the child PID and status, and the child’s retained record is removed."
    ],
    "sources": [
      "Module 2.pptx, slides 63–69: wait, process termination, orphan and zombie definitions.",
      "Supplemental standard Linux/POSIX clarification: adoption by a subreaper/init, minimal zombie resources, and the exact timing conditions; avoids interpreting “did not call wait” as sufficient by itself.",
      "Supplemental primary Linux documentation for wait status, zombie records and reparenting: wait(2), https://man7.org/linux/man-pages/man2/wait.2.html ."
    ]
  },
  "127f193fdfbc36a2": {
    "answer": [
      "The parent creates exactly two direct children before waiting. Child 1 computes 1 + 2 + ... + N; Child 2 computes N!. Each child terminates after its own task, so it cannot execute the parent’s next fork. The parent calls wait() once for each successfully created child, checks termination status, and prints all three PIDs only after both children succeed.",
      "Process tree and synchronization:\nParent P\n  +-- fork 1 --> Child C1: compute sum --> exit\n  +-- fork 2 --> Child C2: compute factorial --> exit\n  +-- wait(); wait(); --> report P, C1, C2 and successful synchronization\nC1 and C2 may execute in either order. On multiple cores they may execute in parallel.",
      "Complete C program (compile with cc -std=c11 -Wall -Wextra fork_tasks.c -o fork_tasks):\n\n#define _POSIX_C_SOURCE 200809L\n#include <stdio.h>\n#include <stdlib.h>\n#include <unistd.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <errno.h>\n#include <ctype.h>\n#include <string.h>\n\nstatic int reap_one(void) {\n    int status;\n    pid_t p;\n    do { p = wait(&status); } while (p == -1 && errno == EINTR);\n    if (p == -1) { perror(\"wait\"); return 0; }\n    return WIFEXITED(status) && WEXITSTATUS(status) == 0;\n}\n\nint main(void) {\n    char line[128], *end;\n    long n;\n    pid_t children[2];\n    int made = 0, ok = 1;\n    printf(\"Enter N (0..20): \");\n    fflush(stdout);\n    if (!fgets(line, sizeof line, stdin)) return 1;\n    errno = 0;\n    n = strtol(line, &end, 10);\n    if (end == line || errno == ERANGE) {\n        fprintf(stderr, \"Invalid integer.\\n\"); return 1;\n    }\n    while (isspace((unsigned char)*end)) ++end;\n    if (*end || n < 0 || n > 20 ||\n        (!strchr(line, '\\n') && !feof(stdin))) {\n        fprintf(stderr, \"Use one integer from 0 to 20.\\n\"); return 1;\n    }\n    fflush(NULL);  /* No inherited pending output. */\n    for (int i = 0; i < 2; ++i) {\n        pid_t p = fork();\n        if (p == -1) { perror(\"fork\"); ok = 0; break; }\n        if (p == 0) {\n            unsigned long long result = i == 0 ? 0 : 1;\n            for (long k = 1; k <= n; ++k) {\n                if (i == 0) result += (unsigned long long)k;\n                else result *= (unsigned long long)k;\n            }\n            printf(\"Child %d (PID %ld): %s = %llu\\n\",\n                   i + 1, (long)getpid(), i == 0 ? \"sum\" : \"factorial\", result);\n            int failed = fflush(stdout) == EOF;\n            _exit(failed ? 1 : 0);  /* Child never reaches the next fork. */\n        }\n        children[made++] = p;\n    }\n    for (int i = 0; i < made; ++i)\n        if (!reap_one()) ok = 0;\n    if (!ok || made != 2) {\n        fprintf(stderr, \"Tasks did not both complete successfully.\\n\");\n        return 1;\n    }\n    printf(\"Parent PID: %ld\\nChild PIDs: %ld, %ld\\n\",\n           (long)getpid(), (long)children[0], (long)children[1]);\n    puts(\"Successful synchronization using wait(): both children completed.\");\n    return 0;\n}"
    ],
    "points": [
      "Input policy: accept integers 0 through 20. This deliberate bound keeps factorial within unsigned long long: 20! = 2432902008176640000, while 21! exceeds the minimum 64-bit range. For N = 0, the empty sum is 0 and 0! = 1. The program rejects malformed input, trailing non-whitespace text, negative values and out-of-range values.",
      "fork() returns -1 on failure, 0 in the child and the new child PID in the parent. Saving positive return values records both child PIDs. The original parent obtains its own PID with getpid().",
      "Both fork calls happen before the normal wait loop, allowing independent work to overlap. One wait() reaps one child; it does not wait for every child at once. Interrupted waits are retried, and WIFEXITED/WEXITSTATUS distinguish successful completion from a crash or failure.",
      "If a later fork fails, the parent still reaps every child already created and reports failure instead of claiming successful synchronization. fflush(NULL) before forking prevents inherited buffered output from being printed twice; each child flushes its result and calls _exit().",
      "The notes support fork/wait/process relationships. Integer-overflow protection, robust input handling, interrupted-wait handling and the complete implementation are supplemental standard C/POSIX reasoning."
    ],
    "example": [
      "Sample execution with illustrative PIDs:\nEnter N (0..20): 5\nChild 1 (PID 4101): sum = 15\nChild 2 (PID 4102): factorial = 120\nParent PID: 4100\nChild PIDs: 4101, 4102\nSuccessful synchronization using wait(): both children completed.",
      "The two child result lines can exchange order. The parent’s final report follows both of them because it reaps both children first. A valid boundary example is N = 20: sum = 210 and factorial = 2432902008176640000."
    ],
    "sources": [
      "Module 2.pptx, slides 49–54: process creation, fork return paths, PIDs and parent/child execution.",
      "Module 2.pptx, slides 63–67: child termination, parent wait(), status and resource reclamation.",
      "Supplemental API reference: Linux man-pages, fork(2), https://man7.org/linux/man-pages/man2/fork.2.html ; wait(2), https://man7.org/linux/man-pages/man2/wait.2.html . Program and numeric checks are original worked reasoning."
    ]
  },
  "ea34a95d304b8d48": {
    "answer": [
      "Use one process containing the main thread and three worker threads. Main reads the patient count and total bill once, stores them in a structure that remains alive until all joins finish, creates the three workers, then joins all three. Registration displays the patient count; billing displays and simulates processing the bill; laboratory simulates preparing reports.",
      "Complete C program (compile with cc -std=c11 -Wall -Wextra -pthread hospital.c -o hospital):\n\n#define _POSIX_C_SOURCE 200809L\n#include <pthread.h>\n#include <stdio.h>\n#include <unistd.h>\n#include <math.h>\n#include <string.h>\n\ntypedef struct { int patients; double bill; } Hospital;\n\nstatic void delay(unsigned seconds) {\n    while ((seconds = sleep(seconds)) != 0) { }\n}\nstatic void *registration(void *arg) {\n    const Hospital *h = arg;\n    puts(\"Registration: started\");\n    printf(\"Registered patients: %d\\n\", h->patients);\n    delay(1);\n    puts(\"Registration: completed\");\n    return NULL;\n}\nstatic void *billing(void *arg) {\n    const Hospital *h = arg;\n    puts(\"Billing: started\");\n    printf(\"Processing billing amount: %.2f\\n\", h->bill);\n    delay(2);\n    puts(\"Billing: completed\");\n    return NULL;\n}\nstatic void *laboratory(void *arg) {\n    (void)arg;\n    puts(\"Lab reports: started\");\n    puts(\"Preparing lab reports...\");\n    delay(1);\n    puts(\"Lab reports: completed\");\n    return NULL;\n}\nint main(void) {\n    Hospital h;\n    pthread_t threads[3];\n    void *(*jobs[3])(void *) = {registration, billing, laboratory};\n    int made = 0, ok = 1;\n    printf(\"Enter patient count and total bill: \");\n    fflush(stdout);\n    if (scanf(\"%d %lf\", &h.patients, &h.bill) != 2 ||\n        h.patients < 0 || !isfinite(h.bill) || h.bill < 0) {\n        fprintf(stderr, \"Invalid input.\\n\"); return 1;\n    }\n    for (int i = 0; i < 3; ++i) {\n        int error = pthread_create(&threads[i], NULL, jobs[i], &h);\n        if (error) {\n            fprintf(stderr, \"pthread_create: %s\\n\", strerror(error));\n            ok = 0; break;\n        }\n        ++made;\n    }\n    for (int i = 0; i < made; ++i) {\n        int error = pthread_join(threads[i], NULL);\n        if (error) {\n            fprintf(stderr, \"pthread_join: %s\\n\", strerror(error));\n            ok = 0;\n        }\n    }\n    if (!ok || made != 3) return 1;\n    puts(\"All hospital services have been completed.\");\n    return 0;\n}"
    ],
    "points": [
      "Each worker prints its own start message, performs its assigned task, calls sleep() to simulate processing and prints its completion message. The delay helper retries any remaining sleep duration after an interruption.",
      "pthread_create() receives the thread ID address, NULL for default attributes, the worker function, and a pointer to input data. The required worker signature is void *function(void *argument). Returning NULL ends that worker.",
      "All three creates precede the joins, so worker execution can overlap. pthread_join() waits for a specific worker to terminate; three joins are needed. Main prints the exact required final message only after all three have completed.",
      "The input structure is read-only after creation, so these workers do not race on patient count or bill. Output ordering between workers is scheduler-dependent. No mutex is needed for these immutable inputs; a version that updates shared totals would need synchronization.",
      "pthread functions return an error number directly, so the program reports strerror(error). On partial creation failure it still joins workers already created and does not print a false success message.",
      "Module 2 provides thread concepts and the POSIX library name. The concrete pthread API, sleep-based simulation and complete C implementation are supplemental standard programming details."
    ],
    "example": [
      "One valid sample execution:\nEnter patient count and total bill: 12 4500.50\nRegistration: started\nRegistered patients: 12\nBilling: started\nProcessing billing amount: 4500.50\nLab reports: started\nPreparing lab reports...\nRegistration: completed\nLab reports: completed\nBilling: completed\nAll hospital services have been completed.",
      "The order of worker messages may vary. Within each worker, its start precedes its completion, and the main thread’s final message follows every worker completion. Billing processing is simulated because the question supplies no tax, payment or discount rule."
    ],
    "sources": [
      "Module 2.pptx, slides 70–76: threads, benefits, concurrency, parallelism and independent tasks.",
      "Module 2.pptx, slide 77: POSIX Pthreads as a thread library.",
      "Supplemental API reference: Linux man-pages, pthread_create(3), https://man7.org/linux/man-pages/man3/pthread_create.3.html ; pthread_join(3), https://man7.org/linux/man-pages/man3/pthread_join.3.html . The hospital program is an original worked implementation."
    ]
  },
  "e28379612c881163": {
    "answer": [
      "A complete parent/child solution is: create a pipe, fork a child, let the child open and read Temp.txt and compute the counts, transmit those counts through the pipe, and let the parent receive them, reap the child and print the result. This explicitly ensures the requested output comes from the parent. Separate processes do not automatically share ordinary variables after fork(), so the pipe carries the result.",
      "Definitions used: vowels are a/e/i/o/u in either case; consonants are the other English letters; a word is a maximal non-whitespace sequence, as in a whitespace-based word count. Digits and punctuation are not consonants. This policy is explicit because the question does not define how punctuation separates words.",
      "Communication diagram:\nParent --pipe() then fork()--> Parent and child\nChild: open Temp.txt -> read chunks -> count -> write counts to pipe -> close -> _exit\nParent: read counts from pipe -> close -> wait -> write result to standard output\nUnused pipe ends are closed in each process.",
      "Complete C program (compile with cc -std=c11 -Wall -Wextra count_file.c -o count_file, then run from the directory containing Temp.txt):\n\n#define _POSIX_C_SOURCE 200809L\n#include <unistd.h>\n#include <fcntl.h>\n#include <sys/types.h>\n#include <sys/wait.h>\n#include <stdio.h>\n#include <errno.h>\n#include <ctype.h>\n#include <string.h>\n\ntypedef struct { unsigned long long vowels, consonants, words; } Counts;\n\n/* Finish a complete transfer, including interrupted or short operations. */\nstatic int transfer(int fd, void *buffer, size_t size, int writing) {\n    unsigned char *p = buffer;\n    while (size) {\n        ssize_t n = writing ? write(fd, p, size) : read(fd, p, size);\n        if (n == -1 && errno == EINTR) continue;\n        if (n <= 0) return -1;\n        p += n;\n        size -= (size_t)n;\n    }\n    return 0;\n}\nint main(void) {\n    int channel[2];\n    if (pipe(channel) == -1) { perror(\"pipe\"); return 1; }\n    pid_t child = fork();\n    if (child == -1) {\n        perror(\"fork\"); close(channel[0]); close(channel[1]); return 1;\n    }\n    if (child == 0) {\n        close(channel[0]);\n        int fd = open(\"Temp.txt\", O_RDONLY);\n        if (fd == -1) { perror(\"Temp.txt\"); _exit(1); }\n        unsigned char buffer[4096];\n        Counts c = {0, 0, 0};\n        int in_word = 0;\n        for (;;) {\n            ssize_t n = read(fd, buffer, sizeof buffer);\n            if (n == -1 && errno == EINTR) continue;\n            if (n == -1) { perror(\"read\"); close(fd); _exit(1); }\n            if (n == 0) break;\n            for (ssize_t i = 0; i < n; ++i) {\n                unsigned char ch = buffer[i];\n                if (isspace(ch)) in_word = 0;\n                else if (!in_word) { ++c.words; in_word = 1; }\n                int lower = tolower(ch);\n                if (lower >= 'a' && lower <= 'z') {\n                    if (strchr(\"aeiou\", lower)) ++c.vowels;\n                    else ++c.consonants;\n                }\n            }\n        }\n        close(fd);\n        int result = transfer(channel[1], &c, sizeof c, 1);\n        close(channel[1]);\n        _exit(result == 0 ? 0 : 1);\n    }\n    close(channel[1]);\n    Counts result;\n    int received = transfer(channel[0], &result, sizeof result, 0);\n    close(channel[0]);\n    int status;\n    pid_t ended;\n    do { ended = wait(&status); } while (ended == -1 && errno == EINTR);\n    if (ended == -1 || received == -1 ||\n        !WIFEXITED(status) || WEXITSTATUS(status) != 0) {\n        fprintf(stderr, \"Could not obtain complete file counts.\\n\"); return 1;\n    }\n    char output[200];\n    int n = snprintf(output, sizeof output,\n        \"Parent PID %ld\\nVowels: %llu\\nConsonants: %llu\\nWords: %llu\\n\",\n        (long)getpid(), result.vowels, result.consonants, result.words);\n    if (n < 0 || (size_t)n >= sizeof output ||\n        transfer(STDOUT_FILENO, output, (size_t)n, 1) == -1) return 1;\n    return 0;\n}"
    ],
    "points": [
      "pipe(fd) creates a one-way communication channel: fd[0] is its read end, fd[1] its write end. Creating it before fork lets both processes inherit the descriptors. The parent closes its write end and the child closes its read end.",
      "fork() creates the child. open(\"Temp.txt\", O_RDONLY) opens the file for reading and returns a descriptor; -1 signals an error. read() returns bytes read, 0 at end-of-file, or -1 on failure. close() releases descriptors.",
      "write() sends the count structure through the pipe; the parent uses read() to retrieve it and write() to display formatted output. snprintf() only formats bytes in user space; it is not itself a system call. Pipe/file reads may be interrupted or short, so the helper completes the entire result transfer.",
      "The in_word flag is preserved across read buffers. Count a word only on transition from whitespace/outside-word to non-whitespace/inside-word. This correctly handles empty files, repeated whitespace, tabs, newlines and a word split across chunks.",
      "wait() collects child termination status and reaps it. _exit() terminates the child without continuing the parent branch. The parent rejects an incomplete pipe result or unsuccessful child termination instead of printing uninitialized counts.",
      "The parent reads the pipe before waiting; this pattern also avoids deadlock if a future version sends more than the pipe buffer capacity. A program that computes directly in the original process could also solve the counting task, but this version makes the requested parent role explicit.",
      "The file/process/communication categories are covered by the notes. Pipes, byte classification, chunk-boundary handling and this complete implementation are supplemental standard C/POSIX reasoning."
    ],
    "example": [
      "If Temp.txt contains:\nHello OS\n\nthen a sample parent output is:\nParent PID 4200\nVowels: 3\nConsonants: 4\nWords: 2",
      "Check: Hello contains e and o plus H, l, l; OS contains O and S. Thus vowels = 2 + 1 = 3, consonants = 3 + 1 = 4. An empty file produces 0, 0, 0. PIDs vary between runs."
    ],
    "sources": [
      "Module 2.pptx, slide 12: file-management calls open, read, write and close; slide 15: communication system calls.",
      "Module 2.pptx, slides 49–54 and 63–67: process creation, separate execution, child completion and parent wait().",
      "Supplemental API reference: Linux man-pages, pipe(2), https://man7.org/linux/man-pages/man2/pipe.2.html ; fork(2), https://man7.org/linux/man-pages/man2/fork.2.html ; wait(2), https://man7.org/linux/man-pages/man2/wait.2.html . Counting rules and code are original worked reasoning."
    ]
  },
  "5a8c98b8ec65af8e": {
    "answer": [
      "Assume the required lists contain positive integers from 1 through an input upper bound N. Thread1 generates 2, 4, 6, ...; Thread2 generates 1, 3, 5, .... Create both threads before joining either of them. Give each a separate result buffer so they can build their lists concurrently without a race.",
      "POSIX-style pseudocode:\nMAIN:\n  read N\n  initialize thread attributes\n  prepare even task(first = 2, limit = N), odd task(first = 1, limit = N)\n  pthread_create(Thread1, attributes, GENERATE, even task)\n  pthread_create(Thread2, attributes, GENERATE, odd task)\n  destroy attribute object\n  pthread_join(Thread1); pthread_join(Thread2)\n  print each list and its recorded times\nGENERATE(task):\n  read this thread’s CPU clock and monotonic wall clock\n  for value = task.first to task.limit step 2:\n    append value to task’s private list\n  read the same clocks again\n  task.cpu_time = CPU end - CPU start\n  task.elapsed_time = wall end - wall start\n  pthread_exit(NULL)",
      "Execution-time calculation: for either clock, T = (end.tv_sec - start.tv_sec) + (end.tv_nsec - start.tv_nsec)/1,000,000,000 seconds. Take start and end inside the worker. CLOCK_THREAD_CPUTIME_ID measures that worker’s consumed CPU time; CLOCK_MONOTONIC measures elapsed time including time not scheduled. Do not use process-wide clock() and label it an individual thread’s CPU time.",
      "No numeric running times can be derived from the paper: it supplies no clock readings, CPU speed, implementation cost or scheduler behavior. The measured values are produced at runtime. Thread1 generates floor(N/2) numbers and Thread2 generates ceil(N/2); both take O(N) work. Concurrent total elapsed time is not generally the sum of individual elapsed times.",
      "Complete C realization of the pseudocode, using separate result buffers and measuring list generation rather than console printing (compile with cc -std=c11 -Wall -Wextra -pthread even_odd.c -o even_odd):\n\n#define _POSIX_C_SOURCE 200809L\n#include <pthread.h>\n#include <time.h>\n#include <stdio.h>\n#include <string.h>\n#include <errno.h>\n\ntypedef struct {\n    int limit, first, numbers[1000], count, error;\n    double cpu_seconds, elapsed_seconds;\n} Task;\n\nstatic double difference(struct timespec end, struct timespec start) {\n    return (double)(end.tv_sec - start.tv_sec) +\n           (double)(end.tv_nsec - start.tv_nsec) / 1000000000.0;\n}\nstatic void *make_list(void *argument) {\n    Task *t = argument;\n    struct timespec c0, c1, w0, w1;\n    if (clock_gettime(CLOCK_MONOTONIC, &w0) == -1 ||\n        clock_gettime(CLOCK_THREAD_CPUTIME_ID, &c0) == -1) {\n        t->error = errno; return NULL;\n    }\n    for (int n = t->first; n <= t->limit; n += 2)\n        t->numbers[t->count++] = n;\n    if (clock_gettime(CLOCK_THREAD_CPUTIME_ID, &c1) == -1 ||\n        clock_gettime(CLOCK_MONOTONIC, &w1) == -1) {\n        t->error = errno; return NULL;\n    }\n    t->cpu_seconds = difference(c1, c0);\n    t->elapsed_seconds = difference(w1, w0);\n    pthread_exit(NULL);\n}\nint main(void) {\n    int n, error, made = 0, ok = 1;\n    printf(\"Enter upper limit N (0..1000): \");\n    fflush(stdout);\n    if (scanf(\"%d\", &n) != 1 || n < 0 || n > 1000) return 1;\n    Task task[2] = {{.limit = n, .first = 2}, {.limit = n, .first = 1}};\n    pthread_t thread[2];\n    pthread_attr_t attributes;\n    error = pthread_attr_init(&attributes);\n    if (error) { fprintf(stderr, \"%s\\n\", strerror(error)); return 1; }\n    for (int i = 0; i < 2; ++i) {\n        error = pthread_create(&thread[i], &attributes, make_list, &task[i]);\n        if (error) { fprintf(stderr, \"%s\\n\", strerror(error)); ok = 0; break; }\n        ++made;\n    }\n    pthread_attr_destroy(&attributes);\n    for (int i = 0; i < made; ++i) {\n        error = pthread_join(thread[i], NULL);\n        if (error) { fprintf(stderr, \"%s\\n\", strerror(error)); ok = 0; }\n        if (task[i].error) { fprintf(stderr, \"%s\\n\", strerror(task[i].error)); ok = 0; }\n    }\n    if (!ok || made != 2) return 1;\n    for (int i = 0; i < 2; ++i) {\n        printf(\"%s:\", i == 0 ? \"Thread1 even numbers\" : \"Thread2 odd numbers\");\n        for (int j = 0; j < task[i].count; ++j) printf(\" %d\", task[i].numbers[j]);\n        printf(\"\\nCPU seconds = %.9f; elapsed seconds = %.9f\\n\",\n               task[i].cpu_seconds, task[i].elapsed_seconds);\n    }\n    return 0;\n}"
    ],
    "points": [
      "pthread_t identifies a thread. pthread_attr_init(&attributes) initializes a default attribute object. Default threads are joinable. pthread_attr_destroy() releases the attribute object after creation; it does not destroy running threads.",
      "pthread_create(&thread, &attributes, start_function, argument) starts a worker and returns zero on success or an error number on failure. The callback has type void *(*)(void *). Each argument structure stays alive until its thread is joined.",
      "pthread_join(thread, &result) blocks until a joinable thread terminates and can retrieve its returned pointer. Each worker is joined once. The program joins all successfully created workers even if a later create fails.",
      "pthread_exit(value) terminates the calling thread; returning from a worker has equivalent termination behavior. Returning from main() terminates the process, so main must not return before required workers finish.",
      "Other standard thread operations: pthread_self() returns the current thread ID; pthread_equal(a,b) compares thread IDs portably; pthread_detach(thread) requests automatic resource reclamation. Do not detach these workers because this task needs to join them. Mutex/condition-variable APIs are needed when threads must coordinate access to shared mutable data, not for these separate list buffers.",
      "In this program N is bounded at 1000 to fit the fixed buffers. No mutex is needed: workers read only their own task and write only their own array and timing fields; main reads those results after successful joins.",
      "The notes cover concurrency, parallelism and the POSIX thread library. The API pseudocode, timing-clock distinction and implementation are supplemental standard POSIX/programming reasoning."
    ],
    "example": [
      "For N = 10:\nThread1 even numbers: 2 4 6 8 10\nThread2 odd numbers: 1 3 5 7 9\nThe program also prints the separately measured CPU and elapsed seconds for each thread; those values vary by run.",
      "Illustrative timing arithmetic only, not a measurement or a value supplied by the paper: if Thread1 CPU start = (3 s, 200000000 ns) and end = (3 s, 240000000 ns), its CPU time is 0.040 s. If Thread2 start = (5 s, 900000000 ns) and end = (6 s, 100000000 ns), its CPU time is 1 - 0.8 = 0.200 s."
    ],
    "sources": [
      "Module 2.pptx, slides 70–76: thread behavior, benefits, concurrency, parallelism and task splitting; slide 77: POSIX Pthreads.",
      "Supplemental API reference: Linux man-pages, pthread_create(3), https://man7.org/linux/man-pages/man3/pthread_create.3.html ; pthread_join(3), https://man7.org/linux/man-pages/man3/pthread_join.3.html .",
      "Supplemental timing reference: Linux man-pages, clock_gettime(3), https://man7.org/linux/man-pages/man3/clock_gettime.3.html . Pseudocode, program, list bounds and illustrative timing arithmetic are original worked reasoning."
    ]
  },
  "eff56d339ed82573": {
    "answer": [
      "Use Banker’s deadlock-avoidance algorithm. Keep every vector in the order (A, B, C, D). The stated currently available printers are the free-resource vector (3, 6, 5, 6), not the system total.",
      "The four necessary deadlock conditions are mutual exclusion, hold-and-wait, no preemption, and circular wait. Exclusive printers satisfy mutual exclusion; a department can hold printers while waiting for more, and they need not be forcibly reclaimed. A cycle alone is sufficient for deadlock only when each resource type has one instance; with multiple instances, test whether outstanding demands can finish.",
      "Need = Max − Allocation, component by component: Marketing = (1, 5, 1, 0); Production = (0, 7, 5, 0); R&D = (1, 0, 0, 2); Finance = (0, 0, 2, 0); HR = (0, 6, 4, 2).",
      "Work starts at (3, 6, 5, 6). Marketing finishes → Work (3, 6, 6, 6); R&D finishes → Work (4, 9, 11, 10); Production finishes → Work (5, 9, 11, 10); Finance finishes → Work (5, 15, 14, 12); HR finishes → Work (5, 15, 15, 16). All processes finish; one safe sequence is ⟨Marketing, R&D, Production, Finance, HR⟩.",
      "Production requests (0, 4, 2, 0). This is ≤ its Need (0, 7, 5, 0) and ≤ Available (3, 6, 5, 6), so both preliminary checks pass. Tentatively set Available = (3, 2, 3, 6), Allocation[Production] = (1, 4, 2, 0), and Need[Production] = (0, 3, 3, 0).",
      "Work starts at (3, 2, 3, 6). R&D finishes → Work (4, 5, 8, 10); Marketing finishes → Work (4, 5, 9, 10); Production finishes → Work (5, 9, 11, 10); Finance finishes → Work (5, 15, 14, 12); HR finishes → Work (5, 15, 15, 16). All processes finish; one safe sequence is ⟨R&D, Marketing, Production, Finance, HR⟩. Therefore grant the request immediately."
    ],
    "points": [
      "For each completed department, add its Allocation to Work, not its Max or Need. The requested resources have already been deducted in the tentative state.",
      "The printed phrase “necessary and sufficient conditions” needs care: the four Coffman conditions must hold for a deadlock, but their being permitted does not prove this multiple-instance snapshot is deadlocked.",
      "If (3, 6, 5, 6) were interpreted as total inventory, the snapshot would be inconsistent: allocated B, C, and D alone are (9, 10, 10). The explicitly stated “available” interpretation is used."
    ],
    "example": [
      "For R&D, Need = (2, 3, 5, 6) − (1, 3, 5, 4) = (1, 0, 0, 2). It can finish even after Production’s tentative request; its released printers start the safe sequence."
    ],
    "sources": [
      "BCSE303L-CAT-2-D2-2023-2024.pdf, pp. 1–2, Q1.",
      "Module3 _part 2.pdf, pp. 8, 13, 19–20, 28–30."
    ]
  },
  "026ad1dddcf18844": {
    "answer": [
      "The scanned data (AT, BT, priority) are P1=(0,7,3), P2=(2,4,1), P3=(3,2,5), P4=(4,4,4), P5=(5,5,2), with times in milliseconds. This is a worked solution derived from the question, not an official answer key.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. Interpret SJF as nonpreemptive and break equal bursts by earlier arrival. For priority, the question explicitly requires nonpreemptive scheduling with smaller number = higher priority. For RR, preserve arrival order in the ready queue; arrivals exactly at a quantum boundary join before the unfinished running process is requeued.",
      "FCFS — Gantt chart (ms): 0–7 P1 | 7–11 P2 | 11–13 P3 | 13–17 P4 | 17–22 P5.",
      "FCFS — P1: CT=7, TAT=7, WT=0 (ms).",
      "FCFS — P2: CT=11, TAT=9, WT=5 (ms).",
      "FCFS — P3: CT=13, TAT=10, WT=8 (ms).",
      "FCFS — P4: CT=17, TAT=13, WT=9 (ms).",
      "FCFS — P5: CT=22, TAT=17, WT=12 (ms).",
      "FCFS — average WT = 34/5 = 6.8 ms; average TAT = 56/5 = 11.2 ms.",
      "SJF — Gantt chart (ms): 0–7 P1 | 7–9 P3 | 9–13 P2 | 13–17 P4 | 17–22 P5.",
      "SJF — P1: CT=7, TAT=7, WT=0 (ms).",
      "SJF — P2: CT=13, TAT=11, WT=7 (ms).",
      "SJF — P3: CT=9, TAT=6, WT=4 (ms).",
      "SJF — P4: CT=17, TAT=13, WT=9 (ms).",
      "SJF — P5: CT=22, TAT=17, WT=12 (ms).",
      "SJF — average WT = 32/5 = 6.4 ms; average TAT = 54/5 = 10.8 ms.",
      "Nonpreemptive priority — Gantt chart (ms): 0–7 P1 | 7–11 P2 | 11–16 P5 | 16–20 P4 | 20–22 P3.",
      "Nonpreemptive priority — P1: CT=7, TAT=7, WT=0 (ms).",
      "Nonpreemptive priority — P2: CT=11, TAT=9, WT=5 (ms).",
      "Nonpreemptive priority — P3: CT=22, TAT=19, WT=17 (ms).",
      "Nonpreemptive priority — P4: CT=20, TAT=16, WT=12 (ms).",
      "Nonpreemptive priority — P5: CT=16, TAT=11, WT=6 (ms).",
      "Nonpreemptive priority — average WT = 40/5 = 8 ms; average TAT = 62/5 = 12.4 ms.",
      "RR, q=2 — Gantt chart (ms): 0–2 P1 | 2–4 P2 | 4–6 P1 | 6–8 P3 | 8–10 P4 | 10–12 P2 | 12–14 P5 | 14–16 P1 | 16–18 P4 | 18–20 P5 | 20–21 P1 | 21–22 P5.",
      "RR, q=2 — P1: CT=21, TAT=21, WT=14 (ms).",
      "RR, q=2 — P2: CT=12, TAT=10, WT=6 (ms).",
      "RR, q=2 — P3: CT=8, TAT=5, WT=3 (ms).",
      "RR, q=2 — P4: CT=18, TAT=14, WT=10 (ms).",
      "RR, q=2 — P5: CT=22, TAT=17, WT=12 (ms).",
      "RR, q=2 — average WT = 45/5 = 9 ms; average TAT = 67/5 = 13.4 ms."
    ],
    "points": [
      "FCFS follows P1, P2, P3, P4, P5 because these are their arrival times, irrespective of priority or burst.",
      "P1 is the only ready process at time 0, so every nonpreemptive policy runs it to time 7. SJF then selects P3; P2 wins its equal-burst tie with P4 by earlier arrival.",
      "For nonpreemptive priority, P2 arriving at time 2 cannot interrupt P1. At time 7 the available priority order is P2, P5, P4, P3.",
      "RR results depend on the simultaneous-arrival/requeue convention. At time 2, the chosen convention places P2 ahead of the requeued P1.",
      "For these data, among the four schedules above SJF has the lowest mean waiting time (6.4 ms) and turnaround time (10.8 ms)."
    ],
    "example": [
      "RR P1 finishes at 21: TAT₁ = 21 − 0 = 21 ms and WT₁ = 21 − 7 = 14 ms. Its waiting intervals are 2–4, 6–14, and 16–20, totalling 2 + 8 + 4 = 14 ms."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2023-2024.pdf, p. 1, Q3 (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (scheduling metrics and TAT/WT formulas).",
      "Module 3 _till multilevel.pdf, pp. 18–19 (FCFS).",
      "Module 3 _till multilevel.pdf, p. 26 (SJF and FCFS tie-breaking).",
      "Module 3 _till multilevel.pdf, p. 39 (RR).",
      "Module 3 _till multilevel.pdf, p. 52 (priority scheduling)."
    ]
  },
  "9ce6e9cdcc218f7b": {
    "answer": [
      "(a) Total resources = Available + sum of Allocation columns. Allocated totals are (7, 2, 5), so the system contains (10, 5, 7) instances of (A, B, C).",
      "(b) Need = Max − Allocation, component by component: P0 = (7, 4, 3); P1 = (1, 2, 2); P2 = (6, 0, 0); P3 = (0, 1, 1); P4 = (4, 3, 1).",
      "(c) Work starts at (3, 3, 2). P1 finishes → Work (5, 3, 2); P3 finishes → Work (7, 4, 3); P0 finishes → Work (7, 5, 3); P2 finishes → Work (10, 5, 5); P4 finishes → Work (10, 5, 7). All processes finish; one safe sequence is ⟨P1, P3, P0, P2, P4⟩.",
      "(d) P4’s request (1, 1, 1) is ≤ Need[P4] (4, 3, 1) and ≤ Available (3, 3, 2). Tentatively update Available to (2, 2, 1), Allocation[P4] to (1, 1, 3), and Need[P4] to (3, 2, 0).",
      "Work starts at (2, 2, 1). P3 finishes → Work (4, 3, 2); P1 finishes → Work (6, 3, 2); P2 finishes → Work (9, 3, 4); P4 finishes → Work (10, 4, 7); P0 finishes → Work (10, 5, 7). All processes finish; one safe sequence is ⟨P3, P1, P2, P4, P0⟩. Hence the additional request can be granted."
    ],
    "points": [
      "Vector order is (A, B, C). “Available” is free inventory, whereas “total” includes resources already allocated.",
      "A safe sequence need not be unique. Each listed process has Need ≤ Work at its turn; choosing another eligible process may produce another correct sequence."
    ],
    "example": [
      "After the tentative grant, P1 cannot go first because it needs C=2 while Work has C=1. P3 can finish: (0, 1, 1) ≤ (2, 2, 1), raising Work to (4, 3, 2)."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2023-2024.pdf, p. 1, Q4.",
      "Module3 _part 2.pdf, pp. 28–33."
    ]
  },
  "c220545bd8ef0286": {
    "answer": [
      "The scanned data (AT, BT) are P1=(5,5), P2=(4,6), P3=(3,7), P4=(1,9), P5=(2,2), P6=(6,3). The paper gives no explicit unit; results below use time units. This is a derived worked solution.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. Include the initial idle interval 0–1. In SRTF, preempt only for a strictly smaller remaining time; resolve equal candidates by earlier arrival. For RR, preserve arrival order in the ready queue; arrivals exactly at a quantum boundary join before the unfinished running process is requeued.",
      "Round Robin, q=3 — Gantt chart (time units): 0–1 idle | 1–4 P4 | 4–6 P5 | 6–9 P3 | 9–12 P2 | 12–15 P4 | 15–18 P1 | 18–21 P6 | 21–24 P3 | 24–27 P2 | 27–30 P4 | 30–32 P1 | 32–33 P3.",
      "Round Robin, q=3 — P1: CT=32, TAT=27, WT=22 (time units).",
      "Round Robin, q=3 — P2: CT=27, TAT=23, WT=17 (time units).",
      "Round Robin, q=3 — P3: CT=33, TAT=30, WT=23 (time units).",
      "Round Robin, q=3 — P4: CT=30, TAT=29, WT=20 (time units).",
      "Round Robin, q=3 — P5: CT=6, TAT=4, WT=2 (time units).",
      "Round Robin, q=3 — P6: CT=21, TAT=15, WT=12 (time units).",
      "Round Robin, q=3 — average WT = 96/6 = 16 time units; average TAT = 128/6 = 21.3333 time units.",
      "SRTF — Gantt chart (time units): 0–1 idle | 1–2 P4 | 2–4 P5 | 4–6 P2 | 6–9 P6 | 9–13 P2 | 13–18 P1 | 18–25 P3 | 25–33 P4.",
      "SRTF — P1: CT=18, TAT=13, WT=8 (time units).",
      "SRTF — P2: CT=13, TAT=9, WT=3 (time units).",
      "SRTF — P3: CT=25, TAT=22, WT=15 (time units).",
      "SRTF — P4: CT=33, TAT=32, WT=23 (time units).",
      "SRTF — P5: CT=4, TAT=2, WT=0 (time units).",
      "SRTF — P6: CT=9, TAT=3, WT=0 (time units).",
      "SRTF — average WT = 49/6 = 8.1667 time units; average TAT = 81/6 = 13.5 time units."
    ],
    "points": [
      "RR maintains a FIFO ready queue. At time 4, after P4 uses its first slice, the queue is P5, P3, P2, P4. P1 joins at 5 and P6 at 6.",
      "SRTF starts P4 at 1, but P5 arrives at 2 with burst 2 versus P4’s remaining 8, so P5 preempts P4.",
      "At time 5, arriving P1’s burst 5 equals P2’s remaining 5, so P2 continues. At time 6, P6’s burst 3 is less than P2’s remaining 4 and causes preemption.",
      "SRTF reduces average waiting time from 16 to 49/6 ≈ 8.1667 and average turnaround time from 128/6 ≈ 21.3333 to 13.5 for these data. Total burst time is 32, so both schedules finish at time 33 after one initial idle unit."
    ],
    "example": [
      "Under RR, P4 completes at 30 although it first runs at 1. Its TAT = 30 − 1 = 29 and WT = 29 − 9 = 20. Under SRTF, P4 completes at 33: TAT = 32 and WT = 23; a lower system average does not mean every individual process improves."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 2, Q3(a) (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (metrics and formulas).",
      "Module 3 _till multilevel.pdf, pp. 33–34 (SRTF).",
      "Module 3 _till multilevel.pdf, p. 39 (RR)."
    ]
  },
  "f15acb264986799e": {
    "answer": [
      "The scanned data (AT, BT, priority) are P1=(0,4,2), P2=(1,3,3), P3=(2,1,4), P4=(3,5,5), P5=(4,2,5). Units are not stated, so results use time units. This is a derived worked solution.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. The question explicitly says larger numbers mean higher priority. Equal priorities are resolved by earlier arrival, with no preemption on equality. SRTF likewise retains the current process on equal remaining time.",
      "Preemptive priority — Gantt chart (time units): 0–1 P1 | 1–2 P2 | 2–3 P3 | 3–8 P4 | 8–10 P5 | 10–12 P2 | 12–15 P1.",
      "Preemptive priority — P1: CT=15, TAT=15, WT=11 (time units).",
      "Preemptive priority — P2: CT=12, TAT=11, WT=8 (time units).",
      "Preemptive priority — P3: CT=3, TAT=1, WT=0 (time units).",
      "Preemptive priority — P4: CT=8, TAT=5, WT=0 (time units).",
      "Preemptive priority — P5: CT=10, TAT=6, WT=4 (time units).",
      "Preemptive priority — average WT = 23/5 = 4.6 time units; average TAT = 38/5 = 7.6 time units.",
      "SRTF — Gantt chart (time units): 0–2 P1 | 2–3 P3 | 3–5 P1 | 5–7 P5 | 7–10 P2 | 10–15 P4.",
      "SRTF — P1: CT=5, TAT=5, WT=1 (time units).",
      "SRTF — P2: CT=10, TAT=9, WT=6 (time units).",
      "SRTF — P3: CT=3, TAT=1, WT=0 (time units).",
      "SRTF — P4: CT=15, TAT=12, WT=7 (time units).",
      "SRTF — P5: CT=7, TAT=3, WT=1 (time units).",
      "SRTF — average WT = 15/5 = 3 time units; average TAT = 30/5 = 6 time units."
    ],
    "points": [
      "Priority preempts P1 at time 1 and P2 at time 2 as strictly higher-priority processes arrive. P3 completes at 3, when P4 starts.",
      "At time 4, P4 and newly arriving P5 both have priority 5. FCFS within a priority level lets P4 continue to 8; equal priority does not imply RR without an explicitly specified quantum.",
      "Under SRTF, P2 at time 1 ties P1’s remaining 3, so P1 continues. P3 at time 2 has burst 1 versus P1’s remaining 2 and preempts it.",
      "For these data SRTF has smaller average WT (3 versus 4.6) and TAT (6 versus 7.6). Priority implements urgency ordering rather than minimizing these averages."
    ],
    "example": [
      "Priority scheduling gives P2 one unit at 1–2 and its remaining two units at 10–12. Thus CT₂=12, TAT₂=12−1=11, and WT₂=11−3=8. In SRTF, P2 instead completes at 10, giving WT₂=10−1−3=6."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 2, Q3(b) (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (metrics and formulas).",
      "Module 3 _till multilevel.pdf, pp. 33–34 (SRTF).",
      "Module 3 _till multilevel.pdf, p. 52 (priority scheduling; the exam explicitly reverses the notes’ numerical priority direction)."
    ]
  },
  "c9ad8941da3edf5d": {
    "answer": [
      "(i) Use resource order (A, B, C, D). Need = Max − Allocation, component by component: P0 = (0, 0, 0, 0); P1 = (0, 7, 5, 0); P2 = (1, 0, 0, 2); P3 = (0, 0, 2, 0); P4 = (0, 6, 4, 2).",
      "(ii) Work starts at (1, 5, 2, 0). P0 finishes → Work (1, 5, 3, 2); P2 finishes → Work (2, 8, 8, 6); P1 finishes → Work (3, 8, 8, 6); P3 finishes → Work (3, 14, 11, 8); P4 finishes → Work (3, 14, 12, 12). All processes finish; one safe sequence is ⟨P0, P2, P1, P3, P4⟩.",
      "(iii) P1 requests (0, 4, 2, 0). It is ≤ Need[P1] (0, 7, 5, 0) and ≤ Available (1, 5, 2, 0). The tentative state is Available = (1, 1, 0, 0), Allocation[P1] = (1, 4, 2, 0), and Need[P1] = (0, 3, 3, 0).",
      "Work starts at (1, 1, 0, 0). P0 finishes → Work (1, 1, 1, 2); P2 finishes → Work (2, 4, 6, 6); P1 finishes → Work (3, 8, 8, 6); P3 finishes → Work (3, 14, 11, 8); P4 finishes → Work (3, 14, 12, 12). All processes finish; one safe sequence is ⟨P0, P2, P1, P3, P4⟩. The request can therefore be granted immediately."
    ],
    "points": [
      "P0 has Need (0, 0, 0, 0), so it can finish even when no C or D is free. Its release provides the D needed by P2.",
      "Passing Request ≤ Available alone is insufficient. The full tentative-state safety check is what justifies granting the request."
    ],
    "example": [
      "After the grant, P0 releases (0, 0, 1, 2), producing Work (1, 1, 1, 2). P2’s Need (1, 0, 0, 2) now fits; P2 releases (1, 3, 5, 4), producing Work (2, 4, 6, 6)."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 2, Q4.",
      "Module3 _part 2.pdf, pp. 28–30 and 48–63."
    ]
  },
  "b7f81c25945e8d51": {
    "answer": [
      "The scanned data (AT, BT, priority) are P1=(0,8,3), P2=(1,7,2), P3=(4,5,1), P4=(7,3,4). RR quantum is 4 ms. This is a derived worked solution.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. RT = first CPU start − AT. Use nonpreemptive SJF. The question does not specify whether priority is preemptive; use nonpreemptive priority as the main interpretation, with the preemptive alternative below. Larger priority number means higher priority. For RR, preserve arrival order in the ready queue; arrivals exactly at a quantum boundary join before the unfinished running process is requeued.",
      "SJF — Gantt chart (ms): 0–8 P1 | 8–11 P4 | 11–16 P3 | 16–23 P2.",
      "SJF — P1: CT=8, TAT=8, WT=0, RT=0 (ms).",
      "SJF — P2: CT=23, TAT=22, WT=15, RT=15 (ms).",
      "SJF — P3: CT=16, TAT=12, WT=7, RT=7 (ms).",
      "SJF — P4: CT=11, TAT=4, WT=1, RT=1 (ms).",
      "SJF — average WT = 23/4 = 5.75 ms; average TAT = 46/4 = 11.5 ms; average RT = 23/4 = 5.75 ms.",
      "Nonpreemptive priority — Gantt chart (ms): 0–8 P1 | 8–11 P4 | 11–18 P2 | 18–23 P3.",
      "Nonpreemptive priority — P1: CT=8, TAT=8, WT=0, RT=0 (ms).",
      "Nonpreemptive priority — P2: CT=18, TAT=17, WT=10, RT=10 (ms).",
      "Nonpreemptive priority — P3: CT=23, TAT=19, WT=14, RT=14 (ms).",
      "Nonpreemptive priority — P4: CT=11, TAT=4, WT=1, RT=1 (ms).",
      "Nonpreemptive priority — average WT = 25/4 = 6.25 ms; average TAT = 48/4 = 12 ms; average RT = 25/4 = 6.25 ms.",
      "RR, q=4 — Gantt chart (ms): 0–4 P1 | 4–8 P2 | 8–12 P3 | 12–16 P1 | 16–19 P4 | 19–22 P2 | 22–23 P3.",
      "RR, q=4 — P1: CT=16, TAT=16, WT=8, RT=0 (ms).",
      "RR, q=4 — P2: CT=22, TAT=21, WT=14, RT=3 (ms).",
      "RR, q=4 — P3: CT=23, TAT=19, WT=14, RT=4 (ms).",
      "RR, q=4 — P4: CT=19, TAT=12, WT=9, RT=9 (ms).",
      "RR, q=4 — average WT = 45/4 = 11.25 ms; average TAT = 68/4 = 17 ms; average RT = 16/4 = 4 ms.",
      "Comparison under the main interpretation: SJF gives the lowest average waiting time, 5.75 ms, and turnaround time, 11.5 ms. RR gives the lowest average response time, 4 ms. No one method wins all three metrics.",
      "Alternative: preemptive priority — Gantt chart (ms): 0–7 P1 | 7–10 P4 | 10–11 P1 | 11–18 P2 | 18–23 P3.",
      "Alternative: preemptive priority — P1: CT=11, TAT=11, WT=3, RT=0 (ms).",
      "Alternative: preemptive priority — P2: CT=18, TAT=17, WT=10, RT=10 (ms).",
      "Alternative: preemptive priority — P3: CT=23, TAT=19, WT=14, RT=14 (ms).",
      "Alternative: preemptive priority — P4: CT=10, TAT=3, WT=0, RT=0 (ms).",
      "Alternative: preemptive priority — average WT = 27/4 = 6.75 ms; average TAT = 50/4 = 12.5 ms; average RT = 24/4 = 6 ms.",
      "The preemptive-priority alternative interrupts P1 at time 7 for higher-priority P4. It does not change the comparison winners: SJF still has the smallest mean WT/TAT, and RR the smallest mean RT."
    ],
    "points": [
      "Response time counts only the delay until the first dispatch; waiting time adds every interval spent ready but not executing. They are equal for these nonpreemptive schedules, but not generally for RR.",
      "Nonpreemptive SJF cannot select P4 at time 0 because P4 arrives at 7. P1 runs first, then P4 is shortest among the ready processes at 8.",
      "At the RR boundary time 4, P3 joins before P1 is requeued, yielding queue P2, P3, P1. P4 arriving at 7 joins the tail.",
      "The original table is complete; the ambiguity is the missing priority preemption mode. If SJF were interpreted as SRTF with no preemption on ties, these data still produce the same SJF Gantt chart."
    ],
    "example": [
      "In RR, P4 arrives at 7, first runs at 16 and finishes at 19. RT₄ = 16−7 = 9 ms; TAT₄ = 19−7 = 12 ms; WT₄ = 12−3 = 9 ms. P1 instead has RT₁=0 but WT₁=16−0−8=8 ms."
    ],
    "sources": [
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 1, Q3 (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (response, turnaround and waiting times).",
      "Module 3 _till multilevel.pdf, p. 26 (SJF).",
      "Module 3 _till multilevel.pdf, p. 39 (RR).",
      "Module 3 _till multilevel.pdf, p. 52 (both priority modes; the exam defines larger numbers as higher priority)."
    ]
  },
  "6b48836bd6826885": {
    "answer": [
      "The printed snapshot is unsafe: no sequence can guarantee all maximum claims. Use resource order (A, B, C). Need = Max − Allocation, component by component: P0 = (1, 1, 0); P1 = (3, 3, 2); P2 = (0, 1, 1); P3 = (0, 1, 0).",
      "Work starts at (2, 1, 1). P0 finishes → Work (3, 1, 2); P2 finishes → Work (6, 1, 2); P3 finishes → Work (7, 1, 3). The check stops with P1 unfinished; no safe sequence exists. At the stopping point P1 needs (3, 3, 2), but Work = (7, 1, 3); it lacks two B instances.",
      "There is a more fundamental data problem: the total B inventory is Available B 1 + allocated B 1 = 2, yet Max[P1, B] = 4. Even giving P1 every B instance cannot satisfy its declared maximum. A standard Banker admission check would reject this claim; the printed values must not be silently changed.",
      "Unsafe does not by itself prove that a deadlock is currently occurring: Max is a possible future demand, and no current Request matrix is given. If P1 actually waits for all three remaining B instances after the other processes finish, it cannot progress with this inventory.",
      "Recovery options: detect the actual blocked set, then abort one victim at a time and reclaim its allocations, or preempt recoverable resources and roll the victim back to a checkpoint. Choose victims using priority, work already done, resources held/needed, and rollback cost; avoid repeatedly sacrificing the same process.",
      "For this particular impossible claim, preempting B from other processes is insufficient because none holds B. Aborting P1 releases (2, 1, 2) and lets the other three finish; restarting it unchanged recreates the infeasible demand. To support all printed maxima, add at least two B instances, or explicitly revise P1’s maximum to a feasible claim before readmission."
    ],
    "points": [
      "The correct conclusion is “unsafe / infeasible maximum claim,” rather than inventing a safe sequence.",
      "Termination sacrifices work; preemption requires a resource whose state can be restored safely. A printer midway through output is not generally preemptible like a saved CPU context."
    ],
    "example": [
      "If two B instances are added, Available becomes (2, 3, 1). P0 finishes → (3, 3, 2); P1 → (5, 4, 4); P2 → (8, 4, 4); P3 → (9, 4, 5). Thus ⟨P0, P1, P2, P3⟩ is safe for that explicitly modified system."
    ],
    "sources": [
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 2, Q4.",
      "Module3 _part 2.pdf, pp. 19–20, 28–29, 45–47."
    ]
  },
  "e1bf5023604b15ab": {
    "answer": [
      "The scanned data (AT, BT, priority) are P1=(0,8,5), P2=(1,4,2), P3=(2,2,4), P4=(3,1,1), P5=(4,3,2), P6=(5,2,6), in milliseconds. This is a derived worked solution.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. RT = first CPU start − AT. Smaller priority number is higher priority. Break equal scheduling keys by earlier arrival; in SRTF do not preempt on equal remaining time. Count a context switch whenever the CPU changes from one process to another, excluding the initial dispatch and final return to idle.",
      "SRTF — Gantt chart (ms): 0–1 P1 | 1–2 P2 | 2–4 P3 | 4–5 P4 | 5–7 P6 | 7–10 P2 | 10–13 P5 | 13–20 P1.",
      "SRTF — P1: CT=20, TAT=20, WT=12, RT=0 (ms).",
      "SRTF — P2: CT=10, TAT=9, WT=5, RT=0 (ms).",
      "SRTF — P3: CT=4, TAT=2, WT=0, RT=0 (ms).",
      "SRTF — P4: CT=5, TAT=2, WT=1, RT=1 (ms).",
      "SRTF — P5: CT=13, TAT=9, WT=6, RT=6 (ms).",
      "SRTF — P6: CT=7, TAT=2, WT=0, RT=0 (ms).",
      "SRTF — average WT = 24/6 = 4 ms; average TAT = 44/6 = 7.3333 ms; average RT = 7/6 = 1.1667 ms.",
      "SRTF has 8 process segments and 7 process-to-process context switches. Two are preemptions (P1→P2 at 1, P2→P3 at 2); the other five follow a process completion.",
      "Nonpreemptive priority — Gantt chart (ms): 0–8 P1 | 8–9 P4 | 9–13 P2 | 13–16 P5 | 16–18 P3 | 18–20 P6.",
      "Nonpreemptive priority — P1: CT=8, TAT=8, WT=0, RT=0 (ms).",
      "Nonpreemptive priority — P2: CT=13, TAT=12, WT=8, RT=8 (ms).",
      "Nonpreemptive priority — P3: CT=18, TAT=16, WT=14, RT=14 (ms).",
      "Nonpreemptive priority — P4: CT=9, TAT=6, WT=5, RT=5 (ms).",
      "Nonpreemptive priority — P5: CT=16, TAT=12, WT=9, RT=9 (ms).",
      "Nonpreemptive priority — P6: CT=20, TAT=15, WT=13, RT=13 (ms).",
      "Nonpreemptive priority — average WT = 49/6 = 8.1667 ms; average TAT = 69/6 = 11.5 ms; average RT = 49/6 = 8.1667 ms.",
      "Nonpreemptive priority has 6 process segments and 5 process-to-process context switches. All occur after completion. SRTF gives lower mean WT (4 versus 8.1667 ms), TAT (7.3333 versus 11.5 ms), and RT (1.1667 versus 8.1667 ms), but makes two more switches under the stated convention.",
      "If a marking convention counts the initial dispatch as a switch, the counts become 8 and 6 respectively; if it also counts the final switch to idle, they become 9 and 7. The Gantt charts are unchanged."
    ],
    "points": [
      "At time 3, P3 has one unit left and newly arriving P4 needs one unit, so the stated tie rule retains P3. P4 starts at 4.",
      "At time 5, P6’s burst 2 is shorter than P2’s remaining 3 and P5’s burst 3. At time 7, P2 and P5 tie at 3; P2 arrived earlier.",
      "Under nonpreemptive priority, P1 cannot be interrupted. At time 8 select P4 (priority 1), then P2 before P5 (both priority 2), then P3, then P6.",
      "Total burst time is 20 ms and there is no idle interval, so both schedules must end at 20. Equal-key policies can change per-process timings and switch counts; the adopted policy is part of this answer."
    ],
    "example": [
      "Under SRTF, P2 runs at 1–2 and 7–10. CT₂=10, TAT₂=10−1=9, WT₂=9−4=5, and RT₂=1−1=0 ms. Its WT is therefore different from its response time."
    ],
    "sources": [
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 2, Q3 (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 13–15 (dispatcher/context switching and scheduling metrics).",
      "Module 3 _till multilevel.pdf, pp. 33–34 (SRTF).",
      "Module 3 _till multilevel.pdf, p. 52 (priority scheduling)."
    ]
  },
  "59a5a01f57354980": {
    "answer": [
      "(i) The stated (10, 13, 9, 12) is the total inventory in order (A, B, C, D). Column sums of Allocation are (7, 9, 7, 10), hence Available = (10, 13, 9, 12) − (7, 9, 7, 10) = (3, 4, 2, 2).",
      "(ii) Need = Max − Allocation, component by component: P0 = (3, 3, 0, 0); P1 = (1, 1, 3, 1); P2 = (1, 3, 1, 3); P3 = (1, 0, 1, 2); P4 = (2, 1, 3, 3).",
      "(iii) Work starts at (3, 4, 2, 2). P0 finishes → Work (3, 4, 3, 4); P1 finishes → Work (6, 5, 5, 5); P2 finishes → Work (8, 6, 5, 8); P3 finishes → Work (9, 9, 6, 10); P4 finishes → Work (10, 13, 9, 12). All processes finish; one safe sequence is ⟨P0, P1, P2, P3, P4⟩.",
      "(iv) Request[P1] = (1, 1, 0, 1) is ≤ Need[P1] (1, 1, 3, 1) and ≤ Available (3, 4, 2, 2). Tentatively allocate it: Available = (2, 3, 2, 1), Allocation[P1] = (4, 2, 2, 2), Need[P1] = (0, 0, 3, 0).",
      "The tentative safety check cannot finish even its first process. P0 needs A=3 > 2; P1 needs C=3 > 2; P2 needs D=3 > 1; P3 needs D=2 > 1; P4 needs C=3 > 2 and D=3 > 1. Work stays (2, 3, 2, 1) and every Finish flag remains false.",
      "Therefore do not grant P1’s request now. Roll back the tentative allocation to Available (3, 4, 2, 2), Allocation[P1] (3, 1, 2, 1), and Need[P1] (1, 1, 3, 1); P1 must wait."
    ],
    "points": [
      "The system is safe before the request but unsafe after the proposed grant.",
      "The fact that resources are physically free does not mean allocating them preserves a completion guarantee."
    ],
    "example": [
      "Initially P0 needs (3, 3, 0, 0) and can finish, releasing C and D. Giving one A to P1 reduces free A to 2, blocking P0; P1 still needs three C while only two are free. This removes the route that made the original state safe."
    ],
    "sources": [
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 2, Q4.",
      "Module3 _part 2.pdf, pp. 28–30 (Need, safety algorithm, and request checks)."
    ]
  },
  "c5337ef97d3e904a": {
    "answer": [
      "The scanned data (AT, BT) are P1=(0,8), P2=(1,4), P3=(2,9), P4=(3,5). The question gives RR quantum as 4 seconds but does not label units in the table; assume all table times are seconds so the units agree. This is a derived worked solution.",
      "Use CT = finish time, TAT = CT − AT, and WT = TAT − BT. Assume one CPU, CPU-only bursts and zero scheduling/context-switch overhead. Interpret SJF as nonpreemptive; the preemptive version is SRTF. For RR, preserve arrival order in the ready queue; arrivals exactly at a quantum boundary join before the unfinished running process is requeued. The phrase “average ... for each process” is imprecise: report each process’s CT/TAT/WT and then the mean TAT/WT across the four processes.",
      "SJF — Gantt chart (s): 0–8 P1 | 8–12 P2 | 12–17 P4 | 17–26 P3.",
      "SJF — P1: CT=8, TAT=8, WT=0 (s).",
      "SJF — P2: CT=12, TAT=11, WT=7 (s).",
      "SJF — P3: CT=26, TAT=24, WT=15 (s).",
      "SJF — P4: CT=17, TAT=14, WT=9 (s).",
      "SJF — average WT = 31/4 = 7.75 s; average TAT = 57/4 = 14.25 s.",
      "RR, q=4 — Gantt chart (s): 0–4 P1 | 4–8 P2 | 8–12 P3 | 12–16 P4 | 16–20 P1 | 20–24 P3 | 24–25 P4 | 25–26 P3.",
      "RR, q=4 — P1: CT=20, TAT=20, WT=12 (s).",
      "RR, q=4 — P2: CT=8, TAT=7, WT=3 (s).",
      "RR, q=4 — P3: CT=26, TAT=24, WT=15 (s).",
      "RR, q=4 — P4: CT=25, TAT=22, WT=17 (s).",
      "RR, q=4 — average WT = 47/4 = 11.75 s; average TAT = 73/4 = 18.25 s."
    ],
    "points": [
      "P1 is the only ready process at time 0. Nonpreemptive SJF runs P1 to 8, then chooses P2 (4), P4 (5), P3 (9). It must not choose a not-yet-arrived shorter process at time 0.",
      "At time 4 the RR queue is P2, P3, P4, P1. P2 finishes in its first slice. Later P4 needs one additional second and P3 one final second after their previous slices.",
      "For this workload SJF has mean WT=7.75 s and mean TAT=14.25 s; RR has mean WT=11.75 s and mean TAT=18.25 s. Both schedules use 26 seconds of CPU time and finish at 26.",
      "The notes contain these same AT/BT values as an SRTF example on page 34. That chart is not the answer to the explicitly adopted nonpreemptive SJF interpretation here."
    ],
    "example": [
      "For RR P4, CT=25 s, TAT=25−3=22 s and WT=22−5=17 s. Its two CPU slices are 12–16 and 24–25; its ready-queue waits are 3–12 and 16–24, totalling 9+8=17 s."
    ],
    "sources": [
      "BCSE303L-FAT-C2-2025-2026.pdf, p. 2, Q3 (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (metrics and formulas).",
      "Module 3 _till multilevel.pdf, p. 26 (SJF).",
      "Module 3 _till multilevel.pdf, pp. 33–34 (distinction between SJF and SRTF).",
      "Module 3 _till multilevel.pdf, p. 39 (RR)."
    ]
  },
  "e54bda0f56b416db": {
    "answer": [
      "Use resource order (R1, R2, R3, R4). Draw process circles P0–P4 and resource boxes R1–R4 with respectively (10, 7, 4, 5) instance dots. Those totals equal column sums of Allocation (6, 4, 2, 3) plus Available (4, 3, 2, 2).",
      "RAG assignment edges, with multiplicities: R1→P0 ×2, R1→P1 ×1, R1→P2 ×1, R1→P4 ×2; R2→P1 ×1, R2→P3 ×1, R2→P4 ×2; R3→P2 ×1, R3→P4 ×1; R4→P0 ×1, R4→P3 ×1, R4→P4 ×1. Leave (4, 3, 2, 2) dots unassigned.",
      "Need = Max − Allocation, component by component: P0 = (2, 3, 2, 1); P1 = (0, 1, 1, 3); P2 = (3, 3, 3, 3); P3 = (3, 4, 3, 1); P4 = (1, 2, 2, 3).",
      "To show remaining maximum claims in the drawing, add dashed process→resource edges with these multiplicities: P0→(R1,R2,R3,R4) = (2,3,2,1); P1 = (0,1,1,3); P2 = (3,3,3,3); P3 = (3,4,3,1); P4 = (1,2,2,3). The table gives Max rather than current requests, so these must be labeled “remaining claims”; actual solid request edges cannot be uniquely inferred.",
      "Work starts at (4, 3, 2, 2). P0 finishes → Work (6, 3, 2, 3); P1 finishes → Work (7, 4, 2, 3); P4 finishes → Work (9, 6, 3, 4); P2 finishes → Work (10, 6, 4, 4); P3 finishes → Work (10, 7, 4, 5). All processes finish; one safe sequence is ⟨P0, P1, P4, P2, P3⟩. Thus the described allocation is safe under the declared maxima."
    ],
    "points": [
      "An arrow from a resource instance to a process means allocated; an arrow from a process to a resource means requested. Dashed claims represent possible future requests.",
      "For multiple-instance resources, a graph cycle alone does not establish deadlock. The Banker Work trace supplies the required safety proof."
    ],
    "example": [
      "Initially only P0’s entire Need fits. Its release changes Work (4, 3, 2, 2) to (6, 3, 2, 3), providing the third R4 instance needed by P1."
    ],
    "sources": [
      "BCSE303L-FAT-C2-2025-2026.pdf, p. 2, Q4.",
      "Module3 _part 2.pdf, pp. 9–13, 23, 28–29."
    ]
  },
  "ae49076029410d97": {
    "answer": [
      "(a) RAG: draw process circles P0, P1, P2, P3 and single-instance lock boxes L1 (build cache), L2 (package repository), L3 (test database), L4 (deployment token). Assignment edges are L1→P0, L2→P1, L3→P2, L4→P3. Request edges are P0→L2, P1→L3, P2→L1, P3→L2.",
      "(b) Replace each process→lock→holder path by a process→process edge. The complete WFG edge list is P0→P1, P1→P2, P2→P0, and P3→P1.",
      "(c) A deadlock exists because these exclusive single-instance locks produce the cycle P0→P1→P2→P0. The circular-wait participants are {P0, P1, P2}. P3 also remains blocked behind P1 but is not on the cycle; distinguish the cycle’s deadlocked core from all processes unable to progress.",
      "(d) Roll back P2 to a checkpoint that releases L3 (or abort P2 if no such checkpoint exists), then restart it after the cycle has been broken. Among cycle members, P2 has the lowest scheduling importance (priority 3) and low rollback cost; P0 has medium rollback cost and P1 has high rollback cost plus the highest priority. All hold exactly one lock, so resource count does not distinguish them.",
      "The tradeoff is P2’s 80% completed progress; a rollback may lose substantial work, but its explicitly low rollback cost and lowest priority support this choice. P3 has low cost and only 10% progress, but aborting P3 alone releases L4, which nobody in the cycle requests, so it would not break the deadlock.",
      "After P2 releases L3, P1 can acquire L3, finish, and release L2. Then P0 can acquire L2 and finish, releasing L1; P3 can also obtain L2 once free. Restarted P2 can subsequently obtain the locks it needs. Do not simply transfer a held lock without restoring the protected shared state to a consistent checkpoint."
    ],
    "points": [
      "For this WFG, “deadlocked processes” commonly means the three cycle members. A detection routine reporting every process that cannot complete will also leave P3 unfinished; state the convention explicitly.",
      "A victim must intersect the cycle. Low rollback cost alone is not enough if terminating that process cannot remove the circular wait."
    ],
    "example": [
      "The RAG cycle is P0→L2→P1→L3→P2→L1→P0. Releasing L3 by rolling back P2 removes the P1→P2 dependency and breaks that cycle."
    ],
    "sources": [
      "BCSE303L-FAT-D1-2025-2026.pdf, pp. 2–3, Q7.",
      "Module3 _part 2.pdf, pp. 8–13, 37–38, 45–47."
    ]
  },
  "79630c6dffeb07e7": {
    "answer": [
      "The scanned data (AT, BT, priority) are P1=(0,6,3), P2=(1,4,1), P3=(2,5,4), P4=(3,2,2), P5=(4,3,1), P6=(6,4,2), in milliseconds. This is a derived worked solution.",
      "The paper specifies CPU-only bursts, zero switching time, smaller number = higher priority, and earlier arrival to break equal priorities. Use CT = finish time, TAT = CT−AT and WT = TAT−BT. In the preemptive mode, only a strictly higher priority interrupts the running process.",
      "(i) Nonpreemptive priority — Gantt chart (ms): 0–6 P1 | 6–10 P2 | 10–13 P5 | 13–15 P4 | 15–19 P6 | 19–24 P3.",
      "(i) Nonpreemptive priority — P1: CT=6, TAT=6, WT=0 (ms).",
      "(i) Nonpreemptive priority — P2: CT=10, TAT=9, WT=5 (ms).",
      "(i) Nonpreemptive priority — P3: CT=24, TAT=22, WT=17 (ms).",
      "(i) Nonpreemptive priority — P4: CT=15, TAT=12, WT=10 (ms).",
      "(i) Nonpreemptive priority — P5: CT=13, TAT=9, WT=6 (ms).",
      "(i) Nonpreemptive priority — P6: CT=19, TAT=13, WT=9 (ms).",
      "(i) Nonpreemptive priority — average WT = 47/6 = 7.8333 ms; average TAT = 71/6 = 11.8333 ms.",
      "(ii) Preemptive priority — Gantt chart (ms): 0–1 P1 | 1–5 P2 | 5–8 P5 | 8–10 P4 | 10–14 P6 | 14–19 P1 | 19–24 P3.",
      "(ii) Preemptive priority — P1: CT=19, TAT=19, WT=13 (ms).",
      "(ii) Preemptive priority — P2: CT=5, TAT=4, WT=0 (ms).",
      "(ii) Preemptive priority — P3: CT=24, TAT=22, WT=17 (ms).",
      "(ii) Preemptive priority — P4: CT=10, TAT=7, WT=5 (ms).",
      "(ii) Preemptive priority — P5: CT=8, TAT=4, WT=1 (ms).",
      "(ii) Preemptive priority — P6: CT=14, TAT=8, WT=4 (ms).",
      "(ii) Preemptive priority — average WT = 40/6 = 6.6667 ms; average TAT = 64/6 = 10.6667 ms.",
      "Preemption detail: at time 1, P2 (priority 1) interrupts P1 (priority 3), leaving P1 with 5 ms. At time 4, P5 also has priority 1 but arrived later than P2, so it does not preempt. P2 completes at 5; P5 then runs to 8. P6’s arrival at 6 cannot preempt P5. There is exactly one preemption.",
      "(iii) Preemptive priority has the lower average waiting time: 40/6 = 6.6667 ms versus 47/6 = 7.8333 ms, a reduction of 7/6 ≈ 1.1667 ms. Its average turnaround time is also lower: 64/6 = 10.6667 ms versus 71/6 = 11.8333 ms. This comparison is specific to the given dataset."
    ],
    "points": [
      "Nonpreemptive scheduling lets P1 finish at 6 despite P2’s arrival at 1. P2 then precedes P5 because both have priority 1 and P2 arrived first.",
      "P4 precedes P6 in both modes because both have priority 2 and P4 arrived at 3, earlier than P6 at 6.",
      "Preemption delays P1’s completion from 6 to 19 but advances P2, P4, P5 and P6. P3 completes at 24 in both schedules.",
      "Waiting times change by +13, −5, 0, −5, −5, −5 ms in P1–P6 order, giving a net change −7 ms across all six jobs. This directly explains the lower average.",
      "Total CPU burst time is 24 ms; both complete at 24 with no idle interval. Preemption can improve priority responsiveness without guaranteeing lower average waiting time for every possible workload."
    ],
    "example": [
      "Preemptive P1 executes 0–1 and 14–19: CT₁=19, TAT₁=19−0=19 and WT₁=19−6=13 ms. Preemptive P2 executes 1–5: TAT₂=5−1=4 and WT₂=4−4=0 ms."
    ],
    "sources": [
      "BCSE303L-FAT-D1-2025-2026.pdf, p. 3, Q8(i)–(iii) (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 11–15 (preemption, dispatcher and metrics/formulas).",
      "Module 3 _till multilevel.pdf, p. 52 (preemptive and nonpreemptive priority scheduling)."
    ]
  },
  "56b4c14c451acc66": {
    "answer": [
      "The question continues from page 1 to page 2. The complete phone data (arrival, repair time) in minutes are A=(3,10), B=(5,5), C=(1,7), D=(4,9), E=(2,5). Method (a) is FCFS and method (b) is RR with quantum 5 minutes. This is a derived worked solution.",
      "Treat the repair station as one CPU with zero switching overhead and pausable repairs for RR. CT = finish time, TAT = CT−arrival, WT = TAT−repair time and RT = first repair start−arrival. Include idle 0–1. Preserve the chronological arrival order C, E, A, D, B.",
      "(a) FCFS — Gantt chart (min): 0–1 idle | 1–8 C | 8–13 E | 13–23 A | 23–32 D | 32–37 B.",
      "(a) FCFS — A: CT=23, TAT=20, WT=10, RT=10 (min).",
      "(a) FCFS — B: CT=37, TAT=32, WT=27, RT=27 (min).",
      "(a) FCFS — C: CT=8, TAT=7, WT=0, RT=0 (min).",
      "(a) FCFS — D: CT=32, TAT=28, WT=19, RT=19 (min).",
      "(a) FCFS — E: CT=13, TAT=11, WT=6, RT=6 (min).",
      "(a) FCFS — average WT = 62/5 = 12.4 min; average TAT = 98/5 = 19.6 min; average RT = 62/5 = 12.4 min.",
      "(b) RR, q=5 — Gantt chart (min): 0–1 idle | 1–6 C | 6–11 E | 11–16 A | 16–21 D | 21–26 B | 26–28 C | 28–33 A | 33–37 D.",
      "(b) RR, q=5 — A: CT=33, TAT=30, WT=20, RT=8 (min).",
      "(b) RR, q=5 — B: CT=26, TAT=21, WT=16, RT=16 (min).",
      "(b) RR, q=5 — C: CT=28, TAT=27, WT=20, RT=0 (min).",
      "(b) RR, q=5 — D: CT=37, TAT=33, WT=24, RT=12 (min).",
      "(b) RR, q=5 — E: CT=11, TAT=9, WT=4, RT=4 (min).",
      "(b) RR, q=5 — average WT = 84/5 = 16.8 min; average TAT = 120/5 = 24 min; average RT = 40/5 = 8 min.",
      "(iii) FCFS minimizes average waiting time among these two schedules: 12.4 minutes versus 16.8 minutes for RR, a 4.4-minute difference. FCFS also gives lower mean TAT, 19.6 versus 24 minutes. RR gives lower mean response time, 8 versus 12.4 minutes, because phones receive an initial turn sooner."
    ],
    "points": [
      "The original table is listed A–E, but FCFS must follow arrival order C, E, A, D, B rather than row order.",
      "After C’s first RR slice 1–6, all the other phones have arrived; the queue is E, A, D, B, C. C has only two repair minutes left.",
      "FCFS response time equals waiting time because each repair runs uninterrupted. RR response time counts only the first delay, while waiting time includes later delays between slices.",
      "The total repair time is 36 minutes; with one minute initially idle, both complete at minute 37. Every phone’s turnaround and waiting/response times are listed above for subparts (i) and (ii)."
    ],
    "example": [
      "Under RR, A arrives at 3, starts at 11 and finishes at 33. RT_A=11−3=8 min, TAT_A=33−3=30 min and WT_A=30−10=20 min. The waiting consists of 3–11 (8 min) plus 16–28 (12 min)."
    ],
    "sources": [
      "BCSE303L-FAT-D2-2023-2024.pdf, pp. 1–2, Q3 and continuation (original question and input table).",
      "Module 3 _till multilevel.pdf, pp. 14–15 (metrics and formulas).",
      "Module 3 _till multilevel.pdf, pp. 18–19 (FCFS).",
      "Module 3 _till multilevel.pdf, p. 39 (RR)."
    ]
  },
  "c7ca1da0f06ba021": {
    "answer": [
      "Use Banker’s algorithm as a deadlock-avoidance policy for the declared VM maximum demands. Resource-vector positions are R1 (CPU MIPS), R2 (memory MB), R3 (storage GB), and R4 (bandwidth Mbps); compare each resource dimension separately.",
      "(i) Need = Max − Allocation, component by component: VM1 = (1, 0, 0, 1); VM2 = (0, 0, 0, 0); VM3 = (1, 2, 0, 3); VM4 = (1, 1, 2, 2); VM5 = (1, 1, 1, 0).",
      "(ii) Work starts at (3, 2, 5, 4). VM1 finishes → Work (6, 3, 6, 5); VM2 finishes → Work (8, 5, 7, 6); VM3 finishes → Work (12, 6, 9, 7); VM4 finishes → Work (14, 10, 10, 8); VM5 finishes → Work (17, 11, 11, 9). All processes finish; one safe sequence is ⟨VM1, VM2, VM3, VM4, VM5⟩. This proves the supplied snapshot is safe and hence not deadlocked under the model.",
      "(iii) VM2 requests (1, 0, 1, 1). Although this is ≤ Available (3, 2, 5, 4), it is not ≤ Need[VM2] (0, 0, 0, 0). VM2 already holds its entire declared Max (2, 2, 1, 1). The additional request would raise its allocation to (3, 2, 2, 2), exceeding Max in R1, R3, and R4.",
      "Reject the request as exceeding the declared maximum; do not tentatively allocate it or run a safety check on that invalid grant. A revised maximum would require a separate admission/safety decision and is not part of the printed request."
    ],
    "points": [
      "Banker’s algorithm avoids unsafe allocations; it does not by itself optimize CPU throughput or resource utilization.",
      "The model assumes known maximum demands, finite completion, and release of held resources. Use the resource counts as printed rather than combining different physical units."
    ],
    "example": [
      "VM3’s Need is (5, 3, 2, 4) − (4, 1, 2, 1) = (1, 2, 0, 3). The initial Work (3, 2, 5, 4) already covers it; many safe sequences exist."
    ],
    "sources": [
      "BCSE303L-FAT-D2-2023-2024.pdf, pp. 2–3, Q5.",
      "Module3 _part 2.pdf, pp. 28–30 (Need, safety algorithm, and request checks)."
    ]
  },
  "00ca07ff8105ee94": {
    "answer": [
      "All five processes arrive at t=0. CPU bursts are 80% of total service: P1=20, P2=12, P3=16, P4=8, P5=4 ms; the corresponding I/O totals are 5,3,4,2,1 ms. Following the question’s instruction to consider only CPU burst time, model each process as one CPU burst and calculate CPU-scheduling turnaround. Ignore context-switch overhead; simultaneous FCFS arrivals use the listed P1,P2,P3,P4,P5 order. SJF is non-preemptive (all jobs are already available, so preemptive SJF would give the same order).",
      "Use TAT=CT−AT and WT=TAT−CPU burst. Here AT=0, so TAT=CT and WT equals the start time for these non-preemptive schedules.",
      "FCFS Gantt (ms): 0–20 P1 | 20–32 P2 | 32–48 P3 | 48–56 P4 | 56–60 P5.",
      "FCFS per-process results (ms):\nProcess   CPU burst   CT   TAT   WT\nP1        20          20   20     0\nP2        12          32   32    20\nP3        16          48   48    32\nP4         8          56   56    48\nP5         4          60   60    56",
      "FCFS average WT=(0+20+32+48+56)/5=156/5=31.2 ms. Average TAT=(20+32+48+56+60)/5=216/5=43.2 ms.",
      "SJF selects increasing CPU bursts: P5,P4,P2,P3,P1. Gantt (ms): 0–4 P5 | 4–12 P4 | 12–24 P2 | 24–40 P3 | 40–60 P1.",
      "SJF per-process results (ms):\nProcess   CPU burst   CT   TAT   WT\nP1        20          60   60    40\nP2        12          24   24    12\nP3        16          40   40    24\nP4         8          12   12     4\nP5         4           4    4     0",
      "SJF average WT=(40+12+24+4+0)/5=80/5=16 ms. Average TAT=(60+24+40+12+4)/5=140/5=28 ms. SJF lowers each mean by 15.2 ms for this workload.",
      "These are the CPU-only scheduling quantities requested. Literal end-to-end process turnaround including I/O cannot be determined from percentages alone: CPU/I/O burst placement and I/O-device sharing are unspecified. For example, if the entire I/O phase occurred after each CPU burst independently, final TAT would add each process’s I/O duration, increasing both means by 3 ms. Do not silently add or schedule I/O without declaring that extra model."
    ],
    "points": [
      "Convert total execution time to CPU burst before constructing either Gantt chart: B=0.8×total.",
      "FCFS needs a simultaneous-arrival tie rule; the listed process order is used. SJF uses the shortest available CPU burst.",
      "Total CPU work is 60 ms. The mean CPU burst is 12 ms, so mean TAT−mean WT=12 for both algorithms. Independent Python scheduling and arithmetic checks confirmed the results."
    ],
    "example": [
      "For FCFS P3, P1 and P2 run first for 20+12=32 ms; WT3=32 and TAT3=32+16=48 ms. Under SJF, P5,P4,P2 run first for 4+8+12=24 ms, so WT3=24 and TAT3=40 ms."
    ],
    "sources": [
      "merged.pdf, CAT1 2023–24 B1/B2 Q4, PDF p.1 (original question and service times).",
      "Module 3 _till multilevel.pdf, PDF p.4 (CPU/I/O burst cycle), p.14 (waiting and turnaround), pp.18–19 (FCFS), p.26 (SJF). Numerical results are derived from the printed workload under the stated CPU-only convention."
    ]
  },
  "8360e2f9a9f19867": {
    "answer": [
      "Transcribed (arrival, burst, priority), all times in ms: P1=(5,5,0), P2=(4,2,7), P3=(3,7,5), P4=(0,4,10), P5=(3,5,5). Assume zero context-switch overhead and smaller priority number means higher priority, as in the notes. Break simultaneous arrivals/equal priorities by listed order (P3 before P5). Use TAT=CT−AT and WT=TAT−BT.",
      "Round robin uses quantum 3 ms. Arrivals at a quantum boundary join the ready queue before the expired process is requeued; thus at t=3 the queue is P3,P5,P4. Gantt: 0–3 P4 | 3–6 P3 | 6–9 P5 | 9–10 P4 | 10–12 P2 | 12–15 P1 | 15–18 P3 | 18–20 P5 | 20–22 P1 | 22–23 P3.",
      "Round-robin results (ms):\nProcess   AT   BT   CT   TAT   WT\nP1         5    5   22    17   12\nP2         4    2   12     8    6\nP3         3    7   23    20   13\nP4         0    4   10    10    6\nP5         3    5   20    17   12",
      "Round-robin average WT=(12+6+13+6+12)/5=49/5=9.8 ms; average TAT=(17+8+20+10+17)/5=72/5=14.4 ms.",
      "The question says “priority scheduling” without specifying preemption. Primary answer: non-preemptive priority. P4 is the only arrival at t=0 and finishes at 4; P3 and P5 tie at priority 5, so P3 starts next. P1 arrives at 5 with priority 0 but waits for P3 to finish. Gantt: 0–4 P4 | 4–11 P3 | 11–16 P1 | 16–21 P5 | 21–23 P2.",
      "Non-preemptive-priority results (ms):\nProcess   CT   TAT   WT\nP1        16    11    6\nP2        23    19   17\nP3        11     8    1\nP4         4     4    0\nP5        21    18   13",
      "Non-preemptive-priority average WT=(6+17+1+0+13)/5=37/5=7.4 ms; average TAT=(11+19+8+4+18)/5=60/5=12 ms.",
      "If priority is intended to be preemptive, a strictly higher-priority arrival immediately interrupts the running process; equal priority does not preempt. Gantt: 0–3 P4 | 3–5 P3 | 5–10 P1 | 10–15 P3 | 15–20 P5 | 20–22 P2 | 22–23 P4.",
      "Alternative preemptive-priority results (ms):\nProcess   CT   TAT   WT\nP1        10     5    0\nP2        22    18   16\nP3        15    12    5\nP4        23    23   19\nP5        20    17   12\nAverage TAT=75/5=15 ms; average WT=52/5=10.4 ms.",
      "The primary non-preemptive interpretation also matches the keyed version of this same workload in merged.pdf, CAT1 2024–25 B1 Q4, PDF pp.3 and 6; it is an interpretation of the underspecified 2023–24 prompt, not an extra printed condition."
    ],
    "points": [
      "All three charts allocate exactly 23 ms of CPU service and end at t=23.",
      "RR must preserve the ready queue; do not rescan process IDs after every quantum. At t=6 P2 and P1 already wait behind P4, so P3 rejoins after them.",
      "Priority direction, preemption, equal-priority order, and quantum-boundary ordering affect the result; each convention is stated. Independent Python simulation verified Gantt boundaries, per-process CPU totals, CT/TAT/WT, and averages."
    ],
    "example": [
      "For RR P3, execution occurs at 3–6, 15–18 and 22–23, totaling 7 ms. Its completion is 23, so TAT=23−3=20 and WT=20−7=13 ms. For non-preemptive priority P1, WT=11−5=6 and TAT=16−5=11 ms."
    ],
    "sources": [
      "merged.pdf, CAT1 2023–24 B1/B2 Q5, PDF p.1 (original table and required algorithms).",
      "merged.pdf, CAT1 2024–25 B1 Q4, PDF p.3 (same workload) and p.6 (provided key explicitly uses non-preemptive priority; used to corroborate the primary interpretation).",
      "Module 3 _till multilevel.pdf, PDF pp.11 and 13–14 (preemption, dispatch cost, scheduling metrics), p.39 (RR), p.52 (priority direction and both preemption variants)."
    ]
  },
  "0f58b4fd471f9c7d": {
    "answer": [
      "The printed table gives (arrival, total CPU+I/O service): P1=(0,4), P2=(1,16), P3=(10,20), P4=(5,8), P5=(4,24). IMPORTANT: a 25% I/O fraction does not specify when a process blocks, how many CPU/I/O bursts it has, or whether I/O devices serialize requests. Therefore the literal question has no unique Gantt chart. The following is a complete conditional solution using one explicit convention: each process first performs its entire 25% I/O independently, then enters the ready queue for one CPU burst of 75%; I/O overlaps other I/O and CPU work. Context-switch overhead is zero.",
      "In P1–P5 order, I/O durations I=(1,4,5,2,6); CPU bursts B=(3,12,15,6,18); effective ready times R=A+I=(1,5,15,7,10). For these assumptions, completion C is the end of the CPU burst; TAT=C−A; ready-queue WT=C−R−B=C−A−I−B; RT=first CPU start−A. RT includes the initial I/O because the reference is the original submission time. Ties use FCFS; SRTF retains the running process on an equal remaining-time tie.",
      "(i) FCFS CPU Gantt: 0–1 idle | 1–4 P1 | 4–5 idle | 5–17 P2 | 17–23 P4 | 23–41 P5 | 41–56 P3. FCFS orders the ready arrivals as P1,P2,P4,P5,P3.",
      "FCFS results (P: C, TAT, WT, RT): P1: 4,4,0,1\nP2: 17,16,0,4\nP3: 56,46,26,31\nP4: 23,18,10,12\nP5: 41,37,13,19. Mean WT=49/5=9.8; mean TAT=121/5=24.2; mean RT=67/5=13.4 time units.",
      "(ii) Non-preemptive SJF CPU Gantt: 0–1 idle | 1–4 P1 | 4–5 idle | 5–17 P2 | 17–23 P4 | 23–38 P3 | 38–56 P5. P2 cannot be interrupted by P4 becoming ready at t=7; at t=17 select P4 (6), then P3 (15), then P5 (18).",
      "Non-preemptive SJF results (P: C, TAT, WT, RT): P1: 4,4,0,1\nP2: 17,16,0,4\nP3: 38,28,8,13\nP4: 23,18,10,12\nP5: 56,52,28,34. Mean WT=46/5=9.2; mean TAT=118/5=23.6; mean RT=64/5=12.8 time units.",
      "(iii) Preemptive SJF/SRTF CPU Gantt: 0–1 idle | 1–4 P1 | 4–5 idle | 5–7 P2 | 7–13 P4 | 13–23 P2 | 23–38 P3 | 38–56 P5. At t=7, P4 needs 6 while P2 has 10 left, so P4 preempts P2. At t=15, newly ready P3 needs 15 while P2 has only 8 left, so P2 continues.",
      "SRTF results (P: C, TAT, WT, RT): P1: 4,4,0,1\nP2: 23,22,6,4\nP3: 38,28,8,13\nP4: 13,8,0,2\nP5: 56,52,28,34. Mean WT=42/5=8.4; mean TAT=114/5=22.8; mean RT=54/5=10.8 time units.",
      "The assumption matters: if instead each process performs its CPU burst first and its independent I/O last, FCFS is 0–3 P1 | 3–15 P2 | 15–33 P5 | 33–39 P4 | 39–54 P3. Final process completion includes trailing I/O: C=(4,19,59,41,39), giving mean WT=14 and mean TAT=28.4. This equally compatible model produces different answers, so the initial-I/O results must be labeled conditional rather than a uniquely determined answer."
    ],
    "points": [
      "The CPU scheduler chooses only ready processes; blocked I/O time is not ready-queue waiting time.",
      "Do not schedule the full listed totals as CPU bursts after the question explicitly says 25% is I/O.",
      "State the CPU/I/O ordering and device concurrency before calculating; no table entry is illegible, but the burst-order specification is missing.",
      "Under the stated initial-I/O convention, total CPU work is 54 and idle time is 2; all three CPU schedules end at 56. All per-process execution totals and averages were checked with a Python scheduling calculation."
    ],
    "example": [
      "For SRTF P2, CPU execution is 5–7 and 13–23, totaling 12. It spends 4 units in initial I/O, 6 in the ready queue, and 12 executing: TAT=4+6+12=22=23−1. Its first CPU response is at 5, so RT=5−1=4."
    ],
    "sources": [
      "merged.pdf, CAT1 2025–26 C2 Q4, PDF p.25 (original question and table).",
      "Module 3 _till multilevel.pdf, PDF p.4 (CPU/I/O burst cycle), p.6 (ready-queue scheduling), p.14 (metrics), pp.17–19 (FCFS), p.26 (SJF), pp.33–34 (SRTF). Calculations are derived from the question under the stated assumption."
    ]
  },
  "8baf34f89a5cdb58": {
    "answer": [
      "Use fixed multilevel queues with Q1>Q2>Q3. Q1 uses non-preemptive SJF internally, Q2 FCFS, and Q3 round robin with quantum 2. A ready process in a higher queue immediately preempts a lower-queue process; the preempted Q2 process retains its FCFS position. Ignore context-switch cost. Within equal scheduling keys use earlier arrival, then listed process order. If Q1 were interpreted as SRTF, the equal remaining-time tie at t=3 is resolved by keeping P2, yielding the same chart.",
      "Transcribed data (arrival, burst, queue): P1=(0,7,2), P2=(1,6,1), P3=(2,4,3), P4=(3,3,2), P5=(3,4,1), P6=(4,2,2), P7=(4,1,3).",
      "Gantt: 0–1 P1 | 1–7 P2 | 7–11 P5 | 11–17 P1 | 17–20 P4 | 20–22 P6 | 22–24 P3 | 24–25 P7 | 25–27 P3.",
      "At t=1, P2 in Q1 interrupts P1 in Q2. Q1 empties at t=11. Q2 then runs P1’s remaining 6, P4’s 3, and P6’s 2 in FCFS order. Only after Q1 and Q2 are empty can Q3 alternate P3 and P7 in 2-unit turns.",
      "Use TAT=C−A and WT=TAT−B. Per-process results (P: C, TAT, WT): P1: 17,17,10\nP2: 7,6,0\nP3: 27,25,21\nP4: 20,17,14\nP5: 11,8,4\nP6: 22,18,16\nP7: 25,21,20.",
      "Mean TAT=(17+6+25+17+8+18+21)/7=112/7=16. Mean WT=(10+0+21+14+4+16+20)/7=85/7≈12.143 time units."
    ],
    "points": [
      "Preemption between queues does not turn Q2’s FCFS into SJF: P4 and P6 must not jump ahead of interrupted P1.",
      "Q3 is round robin, so its 1-unit P7 does not jump ahead of earlier P3 just because it is shorter.",
      "Total CPU work is 27, matching the final Gantt boundary; every process receives exactly its burst. Arithmetic was verified with Python."
    ],
    "example": [
      "P1 executes 1 unit before its interruption and 6 after it resumes. It completes at 17, so TAT=17−0=17 and WT=17−7=10, exactly its ready wait from 1 to 11."
    ],
    "sources": [
      "merged.pdf, CAT1 2025–26 C2 Q5, PDF p.25 (original question and table).",
      "Module 3 _till multilevel.pdf, PDF p.14 (metrics), p.18 (FCFS), p.26 (SJF), p.39 (RR), pp.61–64 (multilevel queues and queue priority)."
    ]
  },
  "5dd47da129e176ca": {
    "answer": [
      "Use non-preemptive SJF with zero context-switch overhead. Only arrived jobs are eligible; break any equal burst tie by FCFS and then process number. Transcribed (arrival, burst) in ms: P1=(4,7), P2=(0,12), P3=(6,3), P4=(2,9), P5=(8,1), P6=(5,6), P7=(3,4), P8=(1,10). The table continues onto the next PDF page.",
      "Gantt (ms): 0–12 P2 | 12–13 P5 | 13–16 P3 | 16–20 P7 | 20–26 P6 | 26–33 P1 | 33–42 P4 | 42–52 P8.",
      "At t=0 only P2 exists, so it runs its full 12 ms. At t=12 all remaining jobs have arrived; choose them by increasing burst 1,3,4,6,7,9,10. Later arrivals cannot interrupt P2.",
      "Use TAT=CT−AT and WT=TAT−BT. Per-process results (P: CT, TAT, WT), all ms: P1: 33,29,22\nP2: 12,12,0\nP3: 16,10,7\nP4: 42,40,31\nP5: 13,5,4\nP6: 26,21,15\nP7: 20,17,13\nP8: 52,51,41.",
      "Average TAT=(29+12+10+40+5+21+17+51)/8=185/8=23.125 ms. Average WT=(22+0+7+31+4+15+13+41)/8=133/8=16.625 ms."
    ],
    "points": [
      "Do not start P5 at t=0 merely because it is shortest: P5 arrives at t=8.",
      "Non-preemptive SJF chooses again only when the current CPU burst finishes.",
      "Total burst time is 52 ms; all CT/TAT/WT values and sums were independently recalculated by Python."
    ],
    "example": [
      "P4 starts at 33 after arriving at 2: WT=33−2=31 ms. It executes for 9 ms and completes at 42: TAT=42−2=40=31+9 ms."
    ],
    "sources": [
      "merged.pdf, CAT1 2025–26 D1 Q4, PDF pp.27–28 (original question, complete eight-row table, and required subparts).",
      "Module 3 _till multilevel.pdf, PDF p.14 (scheduling metrics), p.26 (SJF rule)."
    ]
  },
  "1a5f6336f8b9c796": {
    "answer": [
      "Data in ms (arrival, burst, initial priority): P1=(0,8,3), P2=(1,4,1), P3=(2,6,2), P4=(4,5,1), P5=(6,3,4). Lower numbers mean higher priority, with a floor of 0. Ignore context-switch cost as requested.",
      "Aging convention: only time spent continuously in the ready queue counts; each complete 4 ms improves priority by 1. Retain an earned priority improvement when the process runs, but reset the continuous-wait counter on dispatch. Re-evaluate at arrivals, completions and aging events. A strictly higher priority preempts; an equal priority does not interrupt the current process. For equal-priority ready processes use FCFS by ready-queue entry (then process ID). The prompt leaves priority retention implicit, so this convention is stated explicitly.",
      "Gantt (ms): 0–1 P1 | 1–5 P2 | 5–10 P4 | 10–16 P3 | 16–23 P1 | 23–26 P5.",
      "At t=1, priority-1 P2 preempts priority-3 P1. P4 arrives with the same priority as running P2 at t=4, so P2 finishes at 5. P1 has waited from 1 to 5 and ages from 3 to 2, but P4’s priority 1 is better, so P4 runs next.",
      "P3 ages from 2 to 1 at t=6; that merely ties running P4 and does not interrupt it. P1 ages to 1 at t=9. At t=10 P4 finishes, P3 completes its second 4-ms wait interval and reaches priority 0, while P1 is priority 1 and P5 has just aged from 4 to 3. Thus select P3.",
      "P1 reaches priority 0 at t=13, tying P3 rather than preempting it. P3 completes at t=16; P1 then runs its remaining 7 ms through t=23. P5 ages at t=10,14,18,22 to priorities 3,2,1,0, but its equality with P1 at 22 does not preempt. P5 finally executes from 23 to 26.",
      "Use TAT=CT−AT, WT=TAT−BT, RT=first start−AT. Results (P: CT, TAT, WT, RT), all ms: P1: 23,23,15,0\nP2: 5,4,0,0\nP3: 16,14,8,8\nP4: 10,6,1,1\nP5: 26,20,17,17.",
      "For completeness, average TAT=(23+4+14+6+20)/5=67/5=13.4 ms; average WT=(15+0+8+1+17)/5=41/5=8.2 ms; average RT=(0+0+8+1+17)/5=26/5=5.2 ms."
    ],
    "points": [
      "Apply aging while a process waits, not while it is running; use a floor of 0, so priority never becomes negative.",
      "An aging event is a scheduling event even without a new arrival; check ready processes at those timestamps.",
      "FCFS for equal priority does not mean that an older process instantly interrupts a running equal-priority process. Only a strict improvement over the current priority triggers preemption under the declared convention.",
      "Total CPU work is 8+4+6+5+3=26 ms. A separate Python aging simulation verified the event timeline, all per-process metrics, and averages."
    ],
    "example": [
      "P1 waits continuously from t=1 to t=16, aging at 5,9,13. It receives CPU during 0–1 and 16–23, totaling 8 ms; hence WT=23−0−8=15 ms while RT remains 0 because it first ran immediately at arrival."
    ],
    "sources": [
      "merged.pdf, CAT1 2025–26 D1 Q5, PDF p.28 (priority/aging rules and complete table).",
      "Module 3 _till multilevel.pdf, PDF p.14 (metrics), p.52 (priority convention, starvation and aging). The 4-ms aging interval and floor 0 come from this original question."
    ]
  },
  "0d7b9ec32281bf04": {
    "answer": [
      "Data (arrival, burst): P1=(0,7), P2=(4,3), P3=(1,1), P4=(5,6), P5=(3,8). Ignore context-switch cost; at equal remaining time retain the running process, otherwise break equal choices by FCFS then process number. Although the opening asks for non-preemptive decisions, part (b) explicitly requests preemptive SJF; apply non-preemptive SJF to (a) and SRTF to (b).",
      "(a) Non-preemptive SJF Gantt: 0–7 P1 | 7–8 P3 | 8–11 P2 | 11–17 P4 | 17–25 P5. At t=0 only P1 is available and it cannot be preempted; after t=7 choose the shortest available burst.",
      "Non-preemptive results (P: CT, TAT, WT): P1: 7,7,0\nP2: 11,7,4\nP3: 8,7,6\nP4: 17,12,6\nP5: 25,22,14. Mean WT=(0+4+6+6+14)/5=6; mean TAT=(7+7+7+12+22)/5=11.",
      "(b) Preemptive SJF/SRTF Gantt: 0–1 P1 | 1–2 P3 | 2–4 P1 | 4–7 P2 | 7–11 P1 | 11–17 P4 | 17–25 P5. At t=1, P3’s burst 1 is shorter than P1’s remaining 6. At t=4, P2’s burst 3 is shorter than P1’s remaining 4, so P2 preempts it.",
      "SRTF results (P: CT, TAT, WT): P1: 11,11,4\nP2: 7,3,0\nP3: 2,1,0\nP4: 17,12,6\nP5: 25,22,14. Mean WT=(4+0+0+6+14)/5=24/5=4.8; mean TAT=(11+3+1+12+22)/5=49/5=9.8.",
      "SRTF improves both averages by 1.2 time units: WT falls from 6 to 4.8 (20%) and TAT from 11 to 9.8 (about 10.91%). It delays P1 but finishes short P2/P3 earlier; improvement concerns the averages, not every process.",
      "CPU-utilization qualification: both charts keep the CPU busy continuously from 0 to 25 and contain exactly 25 units of CPU work. Under the stated zero-overhead, CPU-only model, utilization is already 25/25=100%; no replacement scheduling scheme can raise it further. If the intended extension is a real CPU/I/O workload, multiprogramming with asynchronous I/O can run another ready job while one waits for I/O; choosing short/I/O-bound bursts early can reduce the FCFS convoy effect. Those are workload-dependent extensions, not a numerical utilization improvement for this table."
    ],
    "points": [
      "Always use only arrived processes; non-preemptive SJF is not a global burst sort.",
      "TAT=completion−arrival and WT=TAT−burst for this no-I/O table.",
      "The part (b) preemption request overrides the opening non-preemptive instruction for that subpart.",
      "Distinguish lower waiting/turnaround from higher CPU utilization. A shorter mean does not imply more than 100% utilization. Python verified both timelines and totals."
    ],
    "example": [
      "Under SRTF, P1 receives 1+2+4=7 CPU units and completes at 11. Its waits are 1–2 and 4–7, totaling 4; equivalently WT=11−0−7=4."
    ],
    "sources": [
      "merged.pdf, CAT1 2023–24 D2 Q4, PDF pp.29–30 (opening plus full table and parts a/b).",
      "Module 3 _till multilevel.pdf, PDF p.4 (multiprogramming and CPU/I/O), p.14 (criteria), p.19 (convoy effect), p.26 (SJF), pp.33–34 (SRTF)."
    ]
  },
  "f3de7d145d8ec28c": {
    "answer": [
      "All four students arrive at t=0; reading times are S1=10, S2=12, S3=2, S4=6 minutes. Model the one book as one CPU, ignore handoff overhead, and use S1,S2,S3,S4 order for simultaneous arrivals. Thus TAT=CT and WT=CT−reading time.",
      "(a) The question is inconsistent: it lists four students but five priorities, “5, 3, 2, 4, 1 respectively.” A unique priority answer requires a correction. Conditional worked solution: treat the final “1” as an accidental extra entry, assign priorities (5,3,2,4) to (S1,S2,S3,S4), and use the notes’ lower-number-means-higher-priority convention. The priority order is then S3,S2,S4,S1. This convention is declared, not asserted to be the intended correction.",
      "Priority Gantt (minutes): 0–2 S3 | 2–14 S2 | 14–20 S4 | 20–30 S1. Results (student: CT, TAT, WT): S1: 30,30,20\nS2: 14,14,2\nS3: 2,2,0\nS4: 20,20,14. Average TAT=(30+14+2+20)/4=16.5 min; average WT=(20+2+0+14)/4=9 min. With all arrivals at zero and no later priority changes, preemptive and non-preemptive static priority give the same order.",
      "(b) One turn of at most 3 minutes is round robin, q=3. Gantt: 0–3 S1 | 3–6 S2 | 6–8 S3 | 8–11 S4 | 11–14 S1 | 14–17 S2 | 17–20 S4 | 20–23 S1 | 23–26 S2 | 26–27 S1 | 27–30 S2.",
      "RR results (student: CT, TAT, WT): S1: 27,27,17\nS2: 30,30,18\nS3: 8,8,6\nS4: 20,20,14. Average TAT=(27+30+8+20)/4=85/4=21.25 min; average WT=(17+18+6+14)/4=55/4=13.75 min.",
      "RR lets each waiting student make progress in bounded turns, while the static-priority answer favors the highest priority first. A completed student leaves the queue immediately: S3 uses only 2 minutes of its first 3-minute allowance and S1 only 1 minute of its last allowance."
    ],
    "points": [
      "Explicitly flag the five-priority/four-student mismatch; do not silently invent S5 or drop a value without explanation.",
      "Completion time is the end of a student’s final reading interval, not the end of their first RR turn.",
      "Total book use is 10+12+2+6=30 minutes in both schedules. Python verified all execution totals, completion times, and averages."
    ],
    "example": [
      "Under RR, S1 reads during 0–3, 11–14, 20–23 and 26–27, totaling 10 minutes. It completes at 27, so TAT=27 and WT=27−10=17 minutes."
    ],
    "sources": [
      "merged.pdf, CAT1 2023–24 D2 Q5, PDF p.30 (original scenario, five-number priority list, and 3-minute time slice).",
      "Module 3 _till multilevel.pdf, PDF p.14 (metrics), p.39 (RR), p.52 (priority convention)."
    ]
  },
  "d33b777fba9e2eb1": {
    "answer": [
      "For chess, turns must alternate. Let player p move first. Use two binary semaphores pTurn=1 and qTurn=0; the player whose turn token is available may modify the board. The other waits without using CPU time.",
      "Pseudocode:\nsemaphore pTurn = 1, qTurn = 0;\nshared boolean gameOver = false;\nplayer p:\n  repeat forever:\n    wait(pTurn);\n    if gameOver: signal(qTurn); break;\n    make_move(p);                   // board critical section\n    gameOver = terminal_position();\n    signal(qTurn);\n    if gameOver: break;\nplayer q:\n  repeat forever:\n    wait(qTurn);\n    if gameOver: signal(pTurn); break;\n    make_move(q);                   // board critical section\n    gameOver = terminal_position();\n    signal(pTurn);\n    if gameOver: break;",
      "Mutual exclusion: there is one logical turn token; the current player consumes it before moving and gives it to the other only after finishing the board update. Both cannot move at once. Bounded overtaking: between two moves by p, q makes exactly one move, and conversely, while the game continues. Game progress is guaranteed if the player whose turn it is eventually runs and completes a move; terminal-game signaling wakes the other player so it can exit.",
      "Important distinction: strict alternation is not a general critical-section solution satisfying unrestricted progress. If it is q’s turn but q chooses never to request entry, p is blocked even though the critical section is empty. That is correct chess behavior but violates the generic progress condition. Thus the prompt’s request for both strict chess turns and unconditional generic progress needs this qualification. If only generic mutual exclusion were intended, Peterson’s algorithm with flag[p], flag[q] and turn satisfies all three classical conditions, but does not itself enforce alternating chess moves."
    ],
    "points": [
      "Use p and q as the player names, as requested. pTurn/qTurn are synchronization signals, not two independently available locks.",
      "Finite moves and eventual scheduling are required: no algorithm can force a player who never runs to finish a turn.",
      "Progress and bounded waiting count admissible turn-taking in this game. Do not claim that the strict-turn semaphore protocol solves arbitrary independent critical-section requests."
    ],
    "example": [
      "Initial token is pTurn: p moves, signals qTurn; q moves, signals pTurn; the visible order is p,q,p,q,… . Counterexample for generic progress: after p’s move, q remains forever in unrelated work. The board is idle but p cannot take a second turn."
    ],
    "sources": [
      "OS Module 4 notes (OS_selects/Module 4.pdf), PDF pp. 27 and 32–39: generic critical-section requirements and Peterson’s progress; pp. 55–59: binary semaphore wait/signal.",
      "Original question: CAT2 2023–24 D2, Q2, paper p. 2.",
      "Supplementary worked design: alternating player semaphores, termination wakeup and explicit distinction between chess turn rules and unrestricted progress."
    ]
  },
  "be67151aef81a46b": {
    "answer": [
      "Use a phase monitor that permits two exclusive writes, then exactly five completed reads, then the next write phase. Readers in the batch may run concurrently. Counting completed reads is essential: opening the writer gate after five starts could let the third writer overlap readers still using the data. The following reusable interpretation repeats 2 writers → 5 readers; its first cycle enforces the stated third-writer condition.",
      "Monitor semantics: one procedure runs at a time; changed.wait() atomically releases the monitor and reacquires it on wakeup; changed.broadcast() wakes all waiters, each of whom rechecks its while condition.\n\nPseudocode:\nmonitor BatchRW:\n  phase = WRITE; writerBusy = false; writesDone = 0;\n  readersAdmitted = 0; readersDone = 0;\n  condition changed;\n  beginWrite():\n    while phase != WRITE or writerBusy: changed.wait();\n    writerBusy = true;\n  endWrite():\n    writerBusy = false; writesDone++;\n    if writesDone == 2:\n      phase = READ; readersAdmitted = 0; readersDone = 0;\n    changed.broadcast();\n  beginRead():\n    while phase != READ or readersAdmitted == 5: changed.wait();\n    readersAdmitted++;\n  endRead():\n    readersDone++;\n    if readersDone == 5:\n      phase = WRITE; writesDone = 0;\n    changed.broadcast();\nwriter():\n  BatchRW.beginWrite();\n  write_database();\n  BatchRW.endWrite();\nreader():\n  BatchRW.beginRead();\n  read_database();\n  BatchRW.endRead();",
      "writerBusy ensures writers are exclusive. phase=WRITE excludes all readers until the second write finishes. During phase=READ no writer enters, and at most five read operations are admitted. The transition back to WRITE occurs only after all five admitted reads finish, so the third writer cannot overlap any of them. Monitor operations are short: the actual database reads occur outside the monitor and can overlap one another.",
      "The protocol blocks rather than spins and permits the maximum five-reader concurrency allowed by the batch rule. It requires the demanded workloads to arrive: if only four readers ever arrive, the third writer must keep waiting because the question explicitly requires five completed reads. This is an unmet phase requirement, not a circular resource-lock deadlock."
    ],
    "points": [
      "Initialize in WRITE phase with zero completions. Increment writesDone/readersDone on completion, not admission.",
      "The prompt says “two writers” and “five readers”; the code counts two completed write requests and five completed read requests. If distinct process identities are required, admit at most one request per process in each batch.",
      "FIFO entry queues or explicit request tickets are needed if individual writer/reader starvation freedom is also required; the phase rule by itself does not order competitors within a phase.",
      "If the requirement is only a one-off prefix, stop applying the batch policy after the third writer is released; indefinite repetition is an explicit generalization, not an additional fact in the paper."
    ],
    "example": [
      "Trace: W1 finishes (writesDone=1); W2 finishes (writesDone=2, open READ); R1–R5 start concurrently. If R5 finishes first, readersDone=1 and W3 still waits. After the last of R1–R5 finishes, readersDone=5, WRITE opens and W3 can start. R6 remains blocked until the next read phase."
    ],
    "sources": [
      "OS Module 4 notes (OS_selects/Module 4.pdf), PDF pp. 61–63: monitor/condition synchronization; pp. 69–71: concurrent readers and exclusive writers.",
      "Original question: CAT2 2023–24 D2, Q3, paper p. 2.",
      "Supplementary worked design: completion-counted two-writer/five-reader batching; the standard reader-preference solution in the notes does not enforce this extra ordering."
    ]
  },
  "f1501db1d9e1e78c": {
    "answer": [
      "The printed algorithm satisfies mutual exclusion, but fails progress and bounded waiting. Read the exit statements exactly: P0 clears flag[1] and P1 clears flag[0], rather than clearing their own flags. Treat the printed Flag/flag capitalization as referring to the same Boolean array; otherwise the pseudocode is ill-formed.",
      "Mutual exclusion: if P0 enters first, flag[0] is true. P1 cannot pass while(flag[0]); the only statement that could clear flag[0] is P1’s own exit, which it cannot reach. The symmetric argument applies if P1 enters first. If both set their flags before either checks, neither enters. Therefore no reachable execution from (false,false) puts both inside.",
      "Progress fails: P0 sets flag[0]=true; P1 sets flag[1]=true; P0 tests flag[1] and spins; P1 tests flag[0] and spins. The critical section is empty, both want it, and neither can reach an exit to clear a flag.",
      "Bounded waiting fails in a different execution: P0 enters before P1 announces interest. P1 then sets flag[1]=true and waits on flag[0]. On exit, P0 clears flag[1], leaves flag[0]=true, and can reenter repeatedly. P1’s request is erased and it can be bypassed without bound.",
      "A proper repair is Peterson’s algorithm: shared flag[2]={false,false}; shared turn; for Pi, j=1-i: flag[i]=true; turn=j; while(flag[j] && turn==j) wait; critical_section(); flag[i]=false. Merely correcting the exit flags does not resolve the simultaneous-entry deadlock; the turn tie-breaker is needed."
    ],
    "points": [
      "Mutual exclusion: yes, under atomic reads/writes and sequential consistency.",
      "Progress: no; both flags true causes deadlock.",
      "Bounded waiting: no; the first entrant can monopolize access."
    ],
    "example": [
      "Trace: (F,F) → P0 sets (T,F) and enters → P1 sets (T,T) and waits → P0 exits to (T,F) → P0 enters again while P1 still waits."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 26–27, 33–39 (PDF page numbers).",
      "Original question: FAT 2023–24 B1, Q5(a), p. 2, including its separate code image. Supplementary: exact interleaving proof of the printed, incorrect exit statements."
    ]
  },
  "6b598c5e253de69c": {
    "answer": [
      "With the stated binary semaphores, print(0) executes either 2 or 3 times, depending on scheduling, assuming signal on an already-available binary semaphore leaves its value at 1 and every enabled process eventually executes. It is not an infinite printing loop: P1 and P2 each execute only once.",
      "Initially S0=1, so P0 consumes this permit and prints once. It then signals S1 and S2, enabling the one-shot P1 and P2. Each can issue one signal(S0). A binary semaphore stores at most one available permit, so these two signals may coalesce if P0 does not consume between them.",
      "Two-print schedule: P0 prints the first 0 and signals S1,S2; P1 consumes S1 and signals S0=1; P2 consumes S2 and signals S0, which remains 1; P0 consumes this one available permit and prints the second 0. P1 and P2 have terminated, so P0 blocks at its next wait(S0).",
      "Three-print schedule: after the initial print, P1 signals S0; P0 consumes it and prints a second time; P2 then signals S0; P0 consumes it and prints a third time. No fourth S0 permit exists.",
      "If S0 were a counting semaphore, the two signals would accumulate and the result would be exactly 3. If an API instead rejects signalling an already-available binary semaphore, that implementation needs separate treatment; the exam-style answer here uses saturating binary semantics."
    ],
    "points": [
      "P0 loops; P1 and P2 do not.",
      "Binary signal does not accumulate a count above one.",
      "Possible completed print counts: {2,3}; maximum 3."
    ],
    "example": [
      "Coalescing: signal(S0), signal(S0), wait(S0) gives only one extra print. Separated consumption: signal(S0), wait(S0), signal(S0), wait(S0) gives two extra prints."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 55–60 (PDF page numbers).",
      "Original question: FAT 2023–24 B1, Q5(b), p. 2, including its separate process table. Supplementary: binary-signal saturation assumption and scheduling analysis."
    ]
  },
  "0650596c5f7a271b": {
    "answer": [
      "A critical section is the code that accesses shared mutable state, such as updating an account balance or a shared table. A process executes an entry protocol, its critical section, an exit protocol and its remainder section. Without synchronization, interleaved read–modify–write operations can lose updates.",
      "A correct critical-section protocol requires mutual exclusion (at most one conflicting accessor inside), progress (if the section is empty, interested processes are not postponed indefinitely by uninterested processes) and bounded waiting (a finite bound on overtaking after a request). The reads-writes problem refines the exclusion rule: multiple readers may coexist, but a writer must exclude every reader and every other writer.",
      "The standard reader-preference semaphore algorithm from the notes is:\nshared semaphore mutex=1, wrt=1;\nshared integer readcount=0;\nReader():\n    wait(mutex)\n    readcount = readcount + 1\n    if readcount == 1: wait(wrt)\n    signal(mutex)\n    read_shared_data()\n    wait(mutex)\n    readcount = readcount - 1\n    if readcount == 0: signal(wrt)\n    signal(mutex)\nWriter():\n    wait(wrt)\n    update_shared_data()\n    signal(wrt)",
      "mutex serializes changes to readcount. The first reader acquires wrt for the reader group; additional readers join the group without acquiring wrt individually. The last reader releases wrt. A writer must hold wrt for its entire update, so two writers cannot overlap and a reader group cannot overlap a writer.",
      "This algorithm protects data, but it is not starvation-free: a continuous stream of overlapping readers can keep readcount positive and postpone a writer indefinitely. A FIFO admission turnstile shared by readers and writers can prevent new readers from bypassing a queued writer. Semaphore operations must be atomic, and the implementation may block waiters instead of spinning."
    ],
    "points": [
      "Initialize mutex=1, wrt=1 and readcount=0.",
      "The read operation lies outside mutex so readers can overlap.",
      "The reader-preference solution does not guarantee bounded waiting for writers."
    ],
    "example": [
      "R1 enters: readcount 0→1 and takes wrt. R2 enters: 1→2 and reads with R1. W waits on wrt. R1 exits: 2→1. R2 exits: 1→0 and signals wrt, allowing W to update."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27, 55–58, 69–71 (PDF page numbers).",
      "Original question: FAT 2023–24 B1, Q6, p. 2. Supplementary: writer-starvation counterexample and fair-admission extension."
    ]
  },
  "eca4476baa5dc165": {
    "answer": [
      "Model seat-availability checkers as readers and bookers/cancellers as writers. Concurrent checkers can safely inspect an unchanged seat map, but the availability check and seat reservation within a booking must be one exclusive operation. Otherwise two bookers can both observe the final free seat and both allocate it, or a checker can see a partially updated seat count and map.",
      "Use a readers–writers protocol. The following fair-admission version permits a reader group while ensuring that a waiting booker eventually closes admission to later checkers:\nshared FIFO semaphore gate=1;\nshared semaphore resource=1, rmutex=1;\nshared integer readers=0;\nReader():\n    wait(gate)\n    wait(rmutex)\n    if readers == 0: wait(resource)\n    readers = readers + 1\n    signal(rmutex)\n    signal(gate)\n    snapshot_seat_availability()\n    wait(rmutex)\n    readers = readers - 1\n    if readers == 0: signal(resource)\n    signal(rmutex)\nWriter():\n    wait(gate)\n    wait(resource)\n    signal(gate)\n    check_and_reserve_or_cancel_seat_atomically()\n    signal(resource)",
      "resource is held by either one booker/canceller or the entire current checker group. rmutex protects the reader counter, rather than holding a lock throughout every availability check. Consequently several checkers can read in parallel. All booking conditions and all related seat-map/count updates remain inside the writer section.",
      "FIFO gate prevents a new checker from passing a booker already queued for admission. A booker that holds gate while waiting for resource allows existing checkers to exit; their exit paths do not need gate. After the last checker releases resource, that booker proceeds. With finite operations, eventual scheduling and FIFO semaphore admission, neither class can be overtaken forever.",
      "A displayed availability result is only a snapshot: the seat may be booked after the checker releases the read lock. Therefore a later booking must recheck availability while holding the writer lock."
    ],
    "points": [
      "Allow checker–checker overlap; forbid checker–booker and booker–booker overlap.",
      "Protect the complete check-and-update transaction, not just a balance/count assignment.",
      "FIFO admission is an explicit fairness requirement; ordinary semaphores alone do not imply it."
    ],
    "example": [
      "Two checkers R1 and R2 read together. Booker W queues at gate, then waits for their group to release resource. Later checker R3 queues behind W. R1 and R2 leave; W books the last seat; R3 then reads the updated state."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27, 55–60, 69–71 (PDF page numbers).",
      "Original question: FAT 2024–25 B1, Q5(a), p. 3. Supplementary: FIFO turnstile extension and application-specific atomic booking/snapshot reasoning."
    ]
  },
  "379dbf37b687487e": {
    "answer": [
      "Allocate a complete study place consisting of one desk, its chair and its lamp. Because the question provides five desks and five lamps and each student needs exactly one of each, maintain five matched resource pairs. A FIFO counting semaphore initialized to 5 represents complete available pairs; students never hold a desk while waiting for a lamp.",
      "Pseudocode:\nshared FIFO counting semaphore places=5;\nshared FIFO semaphore mutex=1;\nshared set freePairs={0,1,2,3,4};\nStudent():\n    wait(places)\n    wait(mutex)\n    id = remove_one(freePairs)\n    signal(mutex)\n    try:\n        study_using(desk[id], chair[id], lamp[id])\n    finally:\n        wait(mutex)\n        insert(freePairs,id)\n        signal(mutex)\n        signal(places)",
      "Each successful wait(places) reserves a complete pair. mutex protects the free-pair collection so two students cannot receive the same desk/lamp. At most five students study concurrently; study itself occurs outside mutex so one long study session does not serialize all five places.",
      "Deadlock is prevented because a student acquires a complete pair instead of retaining one required resource while waiting for another. A student waiting for places holds no resource-allocation mutex. Resource release restores the pair before publishing a new permit.",
      "Starvation freedom is a separate property: FIFO places admission prevents later permit requests from repeatedly overtaking an earlier student, and the FIFO allocation mutex prevents a permit holder from being starved during pair selection or release. This requires each admitted student eventually to finish/release resources and each enabled thread eventually to run. Plain unfair semaphores limit occupancy but do not by themselves guarantee starvation freedom."
    ],
    "points": [
      "Represent availability with five complete pairs.",
      "Use a short mutex-protected allocation step and release resources reliably.",
      "FIFO queuing plus finite study sessions supplies fairness; deadlock freedom alone does not."
    ],
    "example": [
      "Five students acquire pair IDs 0–4. Student 6 blocks on places without holding mutex. When any student releases a pair, student 6 receives the next permit before a later student 7, assuming FIFO admission."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 27, 55–60, 73–77 (PDF page numbers).",
      "Original question: FAT 2024–25 B1, Q5(b), p. 3. Supplementary: paired-resource allocation design, FIFO policy and its deadlock/starvation proof."
    ]
  },
  "8f5e6cef33825bd0": {
    "answer": [
      "The final counting-semaphore value is S = 7 − 20 + 15 = 2, assuming all 20 wait operations and all 15 signal operations have completed.",
      "Each successful wait consumes one permit and each signal supplies one. The total supply is 7+15=22 permits and the 20 completed waits consume 20, leaving 2.",
      "The order affects which waits temporarily block, but not this final accounting. In the nonnegative semaphore model, a wait at zero blocks until a signal provides a permit; it does not freely decrement the available-permit count below zero. If “20 waits” meant only attempted calls that had not all completed, the final state would require their execution order and blocking status."
    ],
    "points": [
      "Initial permits: 7.",
      "Net change: 15−20=−5.",
      "Final value after all stated operations complete: 2."
    ],
    "example": [
      "A feasible order is 7 waits → S=0; 15 signals → S=15; the remaining 13 waits → S=2."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 56–60 (PDF page numbers).",
      "Original question: FAT 2024–25 B1, Q6(a), p. 3. Supplementary: completed-operation accounting and blocking clarification."
    ]
  },
  "a30e4e64a26b2fd1": {
    "answer": [
      "The scan contains an important ambiguity: P2’s exit line is printed as “S1 != S2”, which is a comparison, not an assignment. The literal algorithm and the likely intended “S1 = !S2” algorithm have different liveness behavior. Random initial Boolean values do not by themselves break mutual exclusion.",
      "Literal printed code: P1 waits while S1==S2 and can enter only when the bits differ. P2 waits while S1!=S2 and can enter only when they are equal. P1’s exit assigns S1=S2; P2’s printed comparison changes nothing. Assuming atomic sequentially consistent accesses and no other modifications, only one entry predicate can be enabled, and the relation changes only after P1 leaves. Mutual exclusion therefore holds.",
      "Literal-code progress and bounded waiting fail. If initially equal, P1 cannot enter even when P2 is uninterested, because only equality is ever preserved. If initially different, P1 may enter once, then assigns equality, after which P1 is permanently blocked. With repeated invocations, P2 can reenter indefinitely while P1 waits, violating bounded waiting.",
      "If the intended P2 exit was S1=!S2, then each exit passes the turn: P1 makes the bits equal to admit P2; P2 makes them different to admit P1. This is strict alternation. Mutual exclusion holds, but progress still fails when the process whose turn it is stays in its remainder section while the other requests entry.",
      "For that corrected interpretation, alternating participants cannot overtake each other more than once after a request. This is a bounded-bypass property, not unconditional eventual entry: a stopped or uninterested peer can still block the requester forever. Peterson’s flags plus turn overcome strict alternation by allowing entry when the other process is uninterested."
    ],
    "points": [
      "As printed: mutual exclusion yes; progress no; bounded waiting no under repeated use.",
      "State the “!=” versus “=! ” ambiguity rather than silently changing the source.",
      "If corrected to S1=!S2: strict alternation still fails progress."
    ],
    "example": [
      "Literal trace with (S1,S2)=(0,1): P1 enters → P1 exits with (1,1) → P2 enters and evaluates 1!=1 (false), changing nothing → P2 can enter again while P1 waits forever."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 26–27, 33–39 (PDF page numbers).",
      "Original question: FAT 2024–25 B1, Q6(b), p. 3; exact P2 exit text visually checked. Supplementary: literal-code and intended strict-alternation analyses."
    ]
  },
  "65cb33ea6bd46961": {
    "answer": [
      "A race arises because deposit and withdrawal are read–modify–write operations, not a single indivisible action. If the user, father and banker read the same old balance and later store separately computed values, a late store can overwrite an earlier completed update. Even a withdrawal’s “sufficient funds” check can become stale before its subtraction.",
      "Illustrative interleaving: balance=1000. Father reads 1000 for a deposit of 500; user reads 1000 for a withdrawal of 300. Father stores 1500, then user stores 700. The correct serial result is 1200, so the deposit has been lost. A banker’s concurrent interest/fee update introduces another possible stale read and overwrite.",
      "For processes sharing one in-memory account, protect the complete operation with the same per-account lock:\nshared semaphore account_mutex=1;\nUpdateAccount(delta):\n    wait(account_mutex)\n    try:\n        if balance + delta < 0:\n            result = REJECT\n        else:\n            balance = balance + delta\n            append_account_ledger_entry(delta,balance)\n            result = SUCCESS\n    finally:\n        signal(account_mutex)\n    return result\nAll readers needing a consistent balance-plus-ledger snapshot must obey the corresponding locking protocol. This in-memory illustration assumes the balance and ledger actions complete successfully; a mutex supplies concurrency exclusion, not rollback after a failed append or crash. The transactional design below supplies the all-or-nothing update boundary.",
      "Compare approaches: a single global mutex is simple but serializes unrelated accounts; per-account locks preserve parallelism across accounts while serializing conflicting updates. An atomic fetch-add can protect a simple increment but does not alone make a funds check, balance update and ledger write atomic. Optimistic version checks/CAS can detect conflicts and retry, but contention causes retries and multi-field durability requires more machinery. Message passing to one account-owning worker provides another way to serialize updates.",
      "For a persistent multi-server banking application, use a database transaction with a row lock or an atomic conditional update, and include balance and ledger changes in the same commit. The in-memory mutex alone cannot coordinate independent servers or recover a partially persisted update. Transfers that lock multiple accounts should acquire them in a common account-ID order; rollback and retry handle transaction failures.",
      "The broader lesson is to preserve invariants under every interleaving: no lost updates, no unauthorized negative balance, and a ledger consistent with the committed balance. Keep critical sections short, shard locks by account, release on all paths, and test contested executions. Fair waiting policies address starvation separately from data integrity and deadlock prevention."
    ],
    "points": [
      "Protect the whole check–modify–record operation.",
      "All users and the banker must use the same synchronization regime.",
      "Per-account serialization balances concurrency and correctness; persistence adds transaction requirements."
    ],
    "example": [
      "Correct serialized sequence: 1000 → deposit 500 → 1500 → withdraw 300 → 1200. Reversing these two accepted operations also yields 1200; the racy value 700 is not a valid result of both updates."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27, 30, 52–60, 84–86 (PDF page numbers).",
      "Original question: FAT 2024–25 B2, Q5, p. 2. Supplementary: numerical banking example, transaction/ledger design, lock granularity and multi-account ordering."
    ]
  },
  "0499f5d24a3d339c": {
    "answer": [
      "Test-and-set returns the old value and sets the target to true as one indivisible hardware operation. With shared lock=false, the process whose operation returns false has acquired the lock:\natomic TestAndSet(reference lock):\n    old = lock\n    lock = true\n    return old\n\nProcess():\n    while true:\n        while TestAndSet(lock) == true:\n            spin\n        critical_section()\n        atomic_store_release(lock,false)\n        remainder_section()\nThe conceptual TestAndSet body must be atomic; implementing it as ordinary separate loads/stores would recreate the race.",
      "Mutual exclusion holds: between one release and the next, only the first atomic operation can observe false; it simultaneously sets the lock true. Every other contender sees true and remains outside. Correct acquire/release memory ordering also makes protected data updates visible to the next owner.",
      "Progress holds under the classical assumptions that the owner eventually exits and enabled processes continue executing: when the lock is free, an interested contender can acquire it. An uninterested process outside the protocol cannot block selection. Busy waiting consumes CPU and may generate heavy cache contention.",
      "Bounded waiting does not hold: there is no queue or turn order. A fast process can repeatedly release and reacquire before another waiting process wins, so starvation is possible even though other processes continue entering.",
      "A suitable fair alternative is a ticket lock: shared atomic next=0, serving=0; acquire: mine=fetch_and_add(next,1); while(load_acquire(serving)!=mine) spin; release: atomic_increment_release(serving). Tickets determine FIFO order, so later arrivals cannot overtake a ticket holder. Under finite critical sections and eventual scheduling, waiting is bounded by the earlier outstanding tickets. For long waits, use a FIFO blocking mutex instead of spinning."
    ],
    "points": [
      "Test-and-set must be indivisible.",
      "Simple TSL: mutual exclusion and progress, but no bounded waiting.",
      "A ticket/FIFO lock provides an explicit ordering policy."
    ],
    "example": [
      "P0 performs TSL(false), gets false and changes lock to true. P1 gets true and spins. After P0 releases, P0 might win again before P1; repeating this is the starvation counterexample."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 27, 49–51, 84–85 (PDF page numbers).",
      "Original question: FAT 2025–26 C1, Q5(a), p. 3. Supplementary: memory-ordering annotation and full ticket-lock pseudocode/fairness assumptions."
    ]
  },
  "ff37f7c42221f396": {
    "answer": [
      "There are 2 distinct possible final values of C: 4 and 6. Assume each displayed assignment is one atomic interleaving step, B and D are private temporaries, and each process preserves its own statement order.",
      "Label P1’s statements A1: B=C−1 and A2: C=2B; label P2’s statements B1: D=2C and B2: C=D−2. There are choose(4,2)=6 legal interleavings preserving A1 before A2 and B1 before B2.",
      "1. A1,A2,B1,B2: C starts 3; B=2; C=4; D=8; C=6.\n2. A1,B1,A2,B2: B=2; D=6; C=4; C=4.\n3. A1,B1,B2,A2: B=2; D=6; C=4; C=4.\n4. B1,A1,A2,B2: D=6; B=2; C=4; C=4.\n5. B1,A1,B2,A2: D=6; B=2; C=4; C=4.\n6. B1,B2,A1,A2: D=6; C=4; B=3; C=6.",
      "The two fully serial executions produce 6. When both processes derive their private temporary from the original C=3 before either changes C, each subsequently writes 4, producing the other outcome. This is a read–modify–write race. Real unsynchronized language code may need a stronger memory-model analysis; the question’s interleaving model gives {4,6}."
    ],
    "points": [
      "Possible final values: {4,6}; distinct count=2.",
      "Four interleavings yield 4 and two yield 6; these counts are not probabilities.",
      "Both processes preserve their internal statement order."
    ],
    "example": [
      "To force the serial result, lock around both statements of each process as one critical section; locking each assignment separately still permits the mixed interleavings."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27 (PDF page numbers).",
      "Original question: FAT 2025–26 C1, Q5(b), p. 3. Supplementary: exhaustive enumeration of all six assignment-level interleavings; arithmetic verified by script."
    ]
  },
  "a04493e7e2136373": {
    "answer": [
      "Treat record reviews as reader operations and every diagnosis, prescription or discharge-summary change as a writer operation. A writer must exclude both readers and other writers; multiple readers may overlap while the record is unchanged. Protect an entire logically consistent record update, not individual fields separately.",
      "Use this semaphore design for each record or chosen consistency unit:\nshared FIFO semaphore gate=1;\nshared semaphore resource=1, rmutex=1;\nshared integer readers=0;\nReader():\n    wait(gate)\n    wait(rmutex)\n    if readers == 0: wait(resource)\n    readers = readers + 1\n    signal(rmutex)\n    signal(gate)\n    read_consistent_patient_record()\n    wait(rmutex)\n    readers = readers - 1\n    if readers == 0: signal(resource)\n    signal(rmutex)\nWriter():\n    wait(gate)\n    wait(resource)\n    signal(gate)\n    apply_complete_record_update()\n    signal(resource)",
      "resource is acquired either by one writer or by the first reader on behalf of the whole reader group. The last reader releases it. rmutex serializes readers counter changes so no first-reader or last-reader event is lost. Writers acquire resource directly and therefore cannot overlap each other or an admitted reader group.",
      "Fairness: every reader and writer passes FIFO gate. If a writer waits for current readers, it retains gate, so later readers cannot continuously extend that reader group. Existing readers can leave because their exit path uses rmutex, not gate. Once they finish, the writer acquires resource. Readers queued behind a writer can proceed after the writer has obtained/released the resource in turn.",
      "This gives starvation-free admission provided gate has FIFO/non-barging semantics, critical operations finish, and enabled processes eventually run. The notes’ two-semaphore reader-preference algorithm alone lacks this guarantee: overlapping incoming readers can starve a writer. Arbitrary semaphore wake-up order is not enough to claim fairness.",
      "Use locks at a record-level granularity where possible so updates to unrelated patients proceed concurrently. A read operation obtains a consistent snapshot only during its protected interval; any later read–modify–write decision must be revalidated within the exclusive update."
    ],
    "points": [
      "Concurrent readers are allowed; writers are exclusive.",
      "The reader counter and the record need distinct protection roles.",
      "A FIFO admission gate handles starvation; mutual exclusion alone does not."
    ],
    "example": [
      "R1 and R2 are reading; W arrives and takes gate, then waits on resource. R3 arrives and blocks at gate. R1/R2 finish; W updates the record; R3 then reads the complete updated record, never a partial prescription change."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27, 55–60, 69–71 (PDF page numbers).",
      "Original question: FAT 2025–26 C1, Q6, p. 3. Supplementary: FIFO turnstile extension, starvation proof and record-granularity design."
    ]
  },
  "a7ef5d43a93c4528": {
    "answer": [
      "A semaphore coordinates processes through atomic wait/P and signal/V operations. wait takes an available permit or blocks until one is supplied; signal returns a permit or wakes a waiter. A binary semaphore has at most one available permit, useful for mutual exclusion or a one-event handshake. A counting semaphore tracks several available instances, such as N buffer slots.",
      "For a bounded producer–consumer buffer, use both kinds: empty=N and full=0 are counting semaphores; mutex=1 is a binary semaphore protecting the queue and indices. A single binary semaphore cannot count all empty/filled slots for N>1, while a counting semaphore alone does not protect concurrent queue updates.",
      "Pseudocode:\nshared item buffer[N];\nshared integer in=0, out=0;\nshared semaphore empty=N, full=0, mutex=1;\nProducer():\n    while true:\n        item = produce()\n        wait(empty)\n        wait(mutex)\n        buffer[in] = item\n        in = (in+1) mod N\n        signal(mutex)\n        signal(full)\nConsumer():\n    while true:\n        wait(full)\n        wait(mutex)\n        item = buffer[out]\n        out = (out+1) mod N\n        signal(mutex)\n        signal(empty)\n        consume(item)",
      "empty prevents insertion when capacity is exhausted; full prevents removal from an empty buffer. mutex prevents producers/consumers from corrupting indices or selecting the same slot. Production and consumption themselves occur outside mutex. Blocking on empty/full happens before taking mutex, so a blocked producer does not prevent a consumer from freeing a slot, and vice versa.",
      "For N=1, the full/empty counts are themselves binary. For general N, counting semaphores are the suitable resource-count mechanism, complemented by binary mutual exclusion. Safety does not automatically imply fairness; FIFO wait queues and eventual scheduling are needed for a starvation-free implementation."
    ],
    "points": [
      "Initial state: empty=N, full=0, mutex=1.",
      "Acquire a resource-count permit before acquiring the queue mutex.",
      "At quiescent operation boundaries, empty+full=N; in-flight reservations explain temporary deviations."
    ],
    "example": [
      "For N=3: initially empty=3/full=0. Two complete insertions give 1/2. One complete removal gives 2/1. A fourth insertion into a full buffer must wait until a consumer signals empty."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 55–60, 65–68 (PDF page numbers).",
      "Original question: FAT 2025–26 C2, Q5, p. 2. Supplementary: fairness qualification and reservation-aware semaphore invariant."
    ]
  },
  "15bae1d98ec9a591": {
    "answer": [
      "A critical region is needed when concurrent operations access shared state and at least one can modify it. For example, two ticket counters may both read seats=1 and both sell the final seat. Protecting the complete availability check and decrement preserves the invariant that at most the available number of tickets are sold. Entry/exit protocols should satisfy mutual exclusion, progress and bounded waiting.",
      "A binary semaphore is more appropriate than an owned mutex for a one-time cross-thread event: shared ready=0; Producer: initialize_data(); signal(ready); Consumer: wait(ready); use_initialized_data(). The consumer waits for work done by the producer; it is not asking to own a mutual-exclusion lock. A semaphore can be signalled by a different thread, whereas an owned mutex is normally unlocked by its owner. For repeated notifications that must all be counted, use a counting semaphore or a suitable handshake because a binary signal can coalesce.",
      "Peterson’s algorithm for two ticket-selling processes:\nshared atomic boolean flag[2]={false,false};\nshared atomic integer turn=0;\nSeller(i):\n    j=1-i\n    while true:\n        request = next_ticket_request()\n        flag[i]=true\n        turn=j\n        while flag[j] && turn==j:\n            spin\n        if seats > 0:\n            seats=seats-1\n            reserve_ticket(request)\n        else:\n            reject(request)\n        flag[i]=false\n        do_other_work()\nAssume sequentially consistent atomic reads/writes and eventual scheduling.",
      "Mutual exclusion: if both flags are true, turn gives permission to only one process. Progress: an uninterested process has flag=false and cannot block the other; if both want entry, turn breaks the tie. Bounded waiting: after one process requests entry, its competitor cannot keep reentering ahead of it, because a new competitor request yields turn to the waiting process.",
      "Peterson is a teaching algorithm for exactly two participants and uses busy waiting. Plain ordinary variables on modern processors/compilers are insufficient because reordering and language-level data races can invalidate the proof. Real implementations should use correctly ordered atomic operations or an appropriate library lock."
    ],
    "points": [
      "Protect the complete shared invariant, not only the final assignment.",
      "A semaphore can signal an event across threads; an owned mutex protects an owner-held section.",
      "Peterson meets all three classical requirements under its atomicity and memory-order assumptions."
    ],
    "example": [
      "Both sellers set their flags. If seller 1 writes turn=0 last, seller 0 proceeds and sells the one remaining seat; seller 1 waits. Seller 0 clears flag[0]; seller 1 then enters, sees seats=0 and rejects the second sale."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 23–27, 32–39, 55–60 (PDF page numbers).",
      "Original question: FAT 2025–26 C2, Q6, p. 2. Supplementary: semaphore-versus-owned-mutex event example and ticket-selling application."
    ]
  },
  "215f9815f2b85cef": {
    "answer": [
      "Use one monitor to encapsulate the conveyor queue, its indices and its item count. The monitor automatically allows only one loader/dispatcher to execute a monitor operation at a time. Two condition variables represent the predicates “count<N” and “count>0”.",
      "Pseudocode using Mesa-style condition variables:\nmonitor Conveyor:\n    item buffer[N]\n    integer head=0, tail=0, count=0\n    condition notFull, notEmpty\n    procedure put(item x):\n        while count == N:\n            notFull.wait()\n        buffer[tail]=x\n        tail=(tail+1) mod N\n        count=count+1\n        notEmpty.signal()\n    procedure get() returns item:\n        while count == 0:\n            notEmpty.wait()\n        x=buffer[head]\n        head=(head+1) mod N\n        count=count-1\n        notFull.signal()\n        return x\nLoader():\n    while true:\n        x=prepare_package()\n        Conveyor.put(x)\nDispatcher():\n    while true:\n        x=Conveyor.get()\n        deliver_package(x)",
      "Only monitor procedures access buffer, head, tail and count, so loaders cannot overwrite the same slot and dispatchers cannot remove the same package. put increments count only after verifying count<N; get decrements only after verifying count>0. Thus the invariant 0≤count≤N is preserved, preventing overflow and underflow.",
      "condition.wait atomically releases the monitor lock and blocks the caller. This lets a dispatcher remove an item while a loader waits for space, or a loader insert while a dispatcher waits for an item. On waking, the caller reacquires the monitor before proceeding. signal wakes one eligible waiter, and the while loop rechecks the predicate because another robot may act before that waiter reacquires the monitor.",
      "The predicate test and transition to waiting are coordinated under the same monitor, avoiding a lost-wakeup race. Conditions do not accumulate permits: shared count records the persistent state. Waiting robots sleep instead of repeatedly polling, while package preparation and delivery run outside the monitor to preserve throughput. Fair monitor-entry and condition queues are an additional policy if starvation freedom is required."
    ],
    "points": [
      "Shared state: buffer[N], head, tail, count.",
      "Condition variables: notFull for producers and notEmpty for consumers.",
      "Use while, not if, around condition waits under Mesa semantics."
    ],
    "example": [
      "When count=N, a loader blocks on notFull and releases the monitor. A dispatcher enters, removes one package, decrements count and signals notFull. The loader reacquires the monitor, rechecks count<N and inserts safely."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 61–68 (PDF page numbers).",
      "Original question: FAT 2025–26 D1, Q4, p. 1. Supplementary: complete monitor bounded-buffer code, Mesa condition semantics and invariant proof."
    ]
  },
  "1519a2f5f69180d7": {
    "answer": [
      "Use a bounded FIFO queue for the N waiting chairs and a single barber service position. An arriving customer either joins the queue or leaves when all waiting chairs are occupied. The barber sleeps when there are no queued customers, removes the oldest customer when available, and serves exactly one customer at a time. FIFO prevents later admitted customers from repeatedly overtaking earlier ones.",
      "One explicit semaphore solution uses a private handshake record for each admitted customer. All its semaphores start at zero:\nshared FIFO semaphore mutex=1;\nshared counting semaphore customers=0;\nshared FIFO queue waiting;  // capacity N, N>=1\nrecord CustomerRecord:\n    semaphore called=0, seated=0, done=0, left=0;\n\nCustomer():\n    c=new CustomerRecord()\n    wait(mutex)\n    if size(waiting)==N:\n        signal(mutex)\n        leave_shop()\n        return\n    waiting.push(c)\n    signal(mutex)\n    signal(customers)\n    wait(c.called)\n    occupy_barber_chair()\n    signal(c.seated)\n    wait(c.done)\n    vacate_barber_chair()\n    signal(c.left)\n\nBarber():\n    while true:\n        wait(customers)\n        wait(mutex)\n        c=waiting.pop_front()\n        signal(mutex)\n        signal(c.called)\n        wait(c.seated)\n        cut_hair()\n        signal(c.done)\n        wait(c.left)",
      "Chair management: the queue-size check and enqueue are one mutex-protected operation, so simultaneous arrivals cannot overfill the room. Dequeuing frees a waiting chair before service begins. At most N customers wait and one is being served. The private called semaphore wakes the selected customer, and done/left ensures that a customer departs only after service and that the barber chair is vacated before the next customer is called.",
      "Robustness: no thread holds mutex while waiting for customers or any service handshake, so the barber can always dequeue and arriving customers can update the queue. Atomic semaphore operations prevent lost increments; a signal issued before a wait is retained as a permit. Private handshakes prevent a new arrival from accidentally consuming a completion notification meant for someone else.",
      "With the FIFO queue mutex, eventual scheduling, finite haircuts and non-cancelling admitted customers, the barber eventually accesses the queue and every queued customer has finitely many predecessors before service. This establishes starvation freedom for admitted customers. Customers turned away when the room is full are not admitted waiters; guaranteeing later service would require an external ticket/appointment queue.",
      "FIFO is fair and keeps administrative overhead low, but it cannot guarantee the smallest average waiting time for arbitrary unknown haircut lengths. Keeping bookkeeping short and letting the barber sleep when idle avoids wasted CPU and avoids overwhelming the barber. A production cancellation policy must remove cancelled queue records or finish the handshake safely."
    ],
    "points": [
      "Bound waiting-room occupancy by N and serialize only queue bookkeeping.",
      "Use FIFO selection and private service/completion handshakes.",
      "Never block on a service condition while holding the queue mutex."
    ],
    "example": [
      "For N=2, C1 is in the barber chair and C2/C3 occupy the waiting chairs. C4 leaves because the queue is full. After C1 departs, the barber calls C2, freeing one waiting chair; a new arrival may join behind C3."
    ],
    "sources": [
      "OS_selects/Module 4.pdf, pp. 27, 55–63, 65–68 (PDF page numbers).",
      "Original question: FAT 2023–24 D2, Q4(a–b), p. 2. Supplementary: sleeping-barber problem and full FIFO/handshake design; this specific algorithm is not presented in the selected notes."
    ]
  },
  "57a5dcb4995bd802": {
    "answer": [
      "The freezer wording is ambiguous: it does not say whether a freezer must hold only one flavor or whether unused capacity can be reused. These give different worst-fit allocations. State the model explicitly. Under the notes’ variable-hole model, first-fit admits 8 flavors, best-fit 9 and worst-fit 7. Under one whole freezer per flavor, the counts are 8, 9 and 6 respectively.",
      "Number freezers F1..F10 in their given order: 220, 50, 200, 300, 600, 400, 250, 450, 350, 700 L. Number requests R1..R10: 212, 417, 112, 426, 350, 500, 275, 400, 600, 50 L. Total capacity = 3520 L; total demand = 3342 L. Process requests in order, continue after a failed request, and do not split a flavor across different freezers.",
      "Variable-hole model: allocate exactly the request and retain the remaining capacity as a reusable hole. Thus internal fragmentation is 0 for every strategy. First-fit places R1→F1, R2→F5, R3→F3, R4→F8, R5→F6, R6→F10, R7→F4, R10→F2; R8=400 and R9=600 fail. Final free capacities are [8,0,88,25,183,50,250,24,350,200] L: total 1178 L, largest hole 350 L.",
      "Variable-hole best-fit places R1→F1, R2→F8, R3→F3, R4→F5, R5→F9, R6→F10, R7→F4, R8→F6, R10→F2; only R9=600 fails. Final free capacities are [8,0,88,25,174,0,250,33,0,200] L: total 778 L, largest hole 250 L.",
      "Variable-hole worst-fit places R1→F10, R2→F5, R3→F10, R4→F8, R5→F6, R7→F10, R10→F9; R6=500, R8=400 and R9=600 fail. Final free capacities are [220,50,200,300,183,50,250,24,300,101] L: total 1678 L, largest hole 300 L.",
      "For the failed requests, the final aggregate free space is sufficient but no single hole is large enough: this demonstrates external fragmentation. If “external fragmentation” is reported as the sum of the scattered free holes unusable for the waiting requests, it is 1178 L (first-fit), 778 L (best-fit) and 1678 L (worst-fit). These are still reusable free capacities for smaller future requests, not permanent memory losses.",
      "Alternative fixed-freezer model: one assigned freezer is reserved entirely, so its unused capacity is internal fragmentation. First-fit has the same flavor-to-freezer assignments as above: internal waste = 8+183+88+24+50+200+25+0 = 578 L; free unassigned freezers F7=250 and F9=350 total 600 L. Best-fit also has the same assignments as above: internal waste = 8+33+88+174+0+200+25+0+0 = 528 L; unassigned F7=250 L.",
      "Fixed-freezer worst-fit: R1→F10 (488 L unused), R2→F5 (183), R3→F8 (338), R4 fails, R5→F6 (50), R6 fails, R7→F9 (75), R8 and R9 fail, R10→F4 (250). Internal fragmentation = 488+183+338+50+75+250 = 1384 L. Free unassigned F1,F2,F3,F7 have 220+50+200+250 = 720 L.",
      "In standard fixed-partition terminology, external fragmentation is 0; the unassigned partitions are available capacity, and wasted space inside reserved freezers is internal fragmentation. If the examiner informally calls unassigned freezer capacity “external fragmentation”, the corresponding totals are 600, 250 and 720 L, but that is a different convention and must be labeled. Best-fit admits the most requests for this particular data under either model."
    ],
    "points": [
      "First-fit starts each search at the beginning; best-fit chooses the smallest adequate current hole; worst-fit chooses the largest current hole. Re-evaluate after every allocation.",
      "The notes define first/best/worst fit for variable-sized free holes (PDF pp.17–18); their distinction between internal and external fragmentation is on p.25. The one-freezer-per-flavor interpretation is a stated extension of the analogy, not a claim that the notes require it.",
      "Do not count a failed flavor’s requested size as fragmentation. Do not sum reusable residual holes as internal waste in the variable-hole model. Total demand below total capacity does not guarantee every contiguous request fits."
    ],
    "example": [
      "First-fit (residual capacity reusable)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F1         220          8\n     2  417  F5         600        183\n     3  112  F3         200         88\n     4  426  F8         450         24\n     5  350  F6         400         50\n     6  500  F10        700        200\n     7  275  F4         300         25\n     8  400  UNALLOCATED\n     9  600  UNALLOCATED\n    10   50  F2          50          0\nFinal available capacities F1..F10: 8, 0, 88, 25, 183, 50, 250, 24, 350, 200",
      "Best-fit (residual capacity reusable)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F1         220          8\n     2  417  F8         450         33\n     3  112  F3         200         88\n     4  426  F5         600        174\n     5  350  F9         350          0\n     6  500  F10        700        200\n     7  275  F4         300         25\n     8  400  F6         400          0\n     9  600  UNALLOCATED\n    10   50  F2          50          0\nFinal available capacities F1..F10: 8, 0, 88, 25, 174, 0, 250, 33, 0, 200",
      "Worst-fit (residual capacity reusable)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F10        700        488\n     2  417  F5         600        183\n     3  112  F10        488        376\n     4  426  F8         450         24\n     5  350  F6         400         50\n     6  500  UNALLOCATED\n     7  275  F10        376        101\n     8  400  UNALLOCATED\n     9  600  UNALLOCATED\n    10   50  F9         350        300\nFinal available capacities F1..F10: 220, 50, 200, 300, 183, 50, 250, 24, 300, 101",
      "First-fit (whole freezer reserved)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F1         220          8\n     2  417  F5         600        183\n     3  112  F3         200         88\n     4  426  F8         450         24\n     5  350  F6         400         50\n     6  500  F10        700        200\n     7  275  F4         300         25\n     8  400  UNALLOCATED\n     9  600  UNALLOCATED\n    10   50  F2          50          0\nFinal available capacities F1..F10: 0, 0, 0, 0, 0, 0, 250, 0, 350, 0",
      "Best-fit (whole freezer reserved)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F1         220          8\n     2  417  F8         450         33\n     3  112  F3         200         88\n     4  426  F5         600        174\n     5  350  F9         350          0\n     6  500  F10        700        200\n     7  275  F4         300         25\n     8  400  F6         400          0\n     9  600  UNALLOCATED\n    10   50  F2          50          0\nFinal available capacities F1..F10: 0, 0, 0, 0, 0, 0, 250, 0, 0, 0",
      "Worst-fit (whole freezer reserved)\nFlavor Need  Freezer  Before  Remainder\n     1  212  F10        700        488\n     2  417  F5         600        183\n     3  112  F8         450        338\n     4  426  UNALLOCATED\n     5  350  F6         400         50\n     6  500  UNALLOCATED\n     7  275  F9         350         75\n     8  400  UNALLOCATED\n     9  600  UNALLOCATED\n    10   50  F4         300        250\nFinal available capacities F1..F10: 220, 50, 200, 0, 0, 0, 250, 0, 0, 0"
    ],
    "sources": [
      "Question: BCSE303L-CAT-2-D2-2023-2024.pdf, PDF page 2; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 17–18, 25–26.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "6fde950925856f12": {
    "answer": [
      "For reference string 8,1,2,3,1,4,1,5,3,4,1,4,3,2,3,1,2,8,1,2 with three initially empty frames: FIFO causes 15 page faults and 5 hits; Optimal causes 9 page faults and 11 hits. Optimal has the minimum fault count.",
      "There are 20 references, including repeated references. FIFO page-fault probability = 15/20 = 0.75 = 75%; Optimal page-fault probability = 9/20 = 0.45 = 45%. Corresponding hit probabilities are 25% and 55%.",
      "Efficiency comparison for this string and frame count: Optimal saves 15−9 = 6 faults, a 6/15 = 40% reduction in faults relative to FIFO; the fault probability falls by 30 percentage points. FIFO is easy to implement with a queue, while Optimal needs knowledge of future references and is mainly a benchmark. These results do not measure CPU overhead or predict another workload."
    ],
    "points": [
      "FIFO evicts the oldest loaded page; a hit does not change FIFO order. Optimal evicts the page whose next reference is farthest in the future, with “never used again” treated as farthest.",
      "Use a free frame before evicting. Empty initial frames are an explicit assumption because the question does not provide an initial resident set. The initial loads count as faults.",
      "The traces below keep physical frame columns fixed. When several Optimal victims are never referenced again, any such victim is valid and the total fault count is unchanged."
    ],
    "example": [
      "FIFO: frame contents AFTER each reference; - = empty, F = fault, H = hit\nStep Ref   F1  F2  F3  Result\n   1   8    8   -   -  F\n   2   1    8   1   -  F\n   3   2    8   1   2  F\n   4   3    3   1   2  F\n   5   1    3   1   2  H\n   6   4    3   4   2  F\n   7   1    3   4   1  F\n   8   5    5   4   1  F\n   9   3    5   3   1  F\n  10   4    5   3   4  F\n  11   1    1   3   4  F\n  12   4    1   3   4  H\n  13   3    1   3   4  H\n  14   2    1   2   4  F\n  15   3    1   2   3  F\n  16   1    1   2   3  H\n  17   2    1   2   3  H\n  18   8    8   2   3  F\n  19   1    8   1   3  F\n  20   2    8   1   2  F",
      "Optimal: frame contents AFTER each reference; - = empty, F = fault, H = hit\nStep Ref   F1  F2  F3  Result\n   1   8    8   -   -  F\n   2   1    8   1   -  F\n   3   2    8   1   2  F\n   4   3    3   1   2  F\n   5   1    3   1   2  H\n   6   4    3   1   4  F\n   7   1    3   1   4  H\n   8   5    3   5   4  F\n   9   3    3   5   4  H\n  10   4    3   5   4  H\n  11   1    3   1   4  F\n  12   4    3   1   4  H\n  13   3    3   1   4  H\n  14   2    3   1   2  F\n  15   3    3   1   2  H\n  16   1    3   1   2  H\n  17   2    3   1   2  H\n  18   8    8   1   2  F\n  19   1    8   1   2  H\n  20   2    8   1   2  H",
      "Optimal decision example: at step 8 (page 5), the frames hold [3,1,4]. Their next references are at steps 9,11,10 respectively, so evict page 1; at step 11, page 5 is never used again, so evict 5 to reload 1."
    ],
    "sources": [
      "Question: BCSE303L-CAT-2-D2-2023-2024.pdf, PDF page 2; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 106, 108, 110, 112.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "d1532a7fba106c72": {
    "answer": [
      "Effective memory access time = 202.5 ns, assuming the 15 ns TLB lookup occurs before the memory access and no page fault occurs.",
      "TLB hit (probability 0.75): lookup 15 ns + one data access 150 ns = 165 ns. TLB miss (probability 0.25): lookup 15 ns + page-table access 150 ns + data access 150 ns = 315 ns.",
      "EAT = 0.75×165 + 0.25×315 = 123.75 + 78.75 = 202.5 ns. Equivalently, EAT = 15 + (2−0.75)×150 = 202.5 ns."
    ],
    "points": [
      "A single-level page-table miss requires one memory read for translation and one for the requested data. A TLB miss alone is not a page fault.",
      "The notes’ p.38 example ignores TLB lookup time; including the explicitly provided 15 ns is a standard extension of that weighted-average calculation."
    ],
    "example": [
      "Path                       Time      Probability\nTLB hit: 15 + 150            165 ns    0.75\nTLB miss: 15 + 150 + 150     315 ns    0.25\nWeighted mean               202.5 ns"
    ],
    "sources": [
      "Question: BCSE303L-FAT-B1-2023-2024.pdf, PDF page 2; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 34–38.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "8d04f36315e9e920": {
    "answer": [
      "Best-fit makes the most efficient use of memory for this request sequence because it admits all four processes; first-fit and worst-fit both leave the 426K process unallocated. Treat the given partitions as variable-sized holes and reuse leftovers, as in the notes.",
      "Name holes H1..H5 = [100,500,200,300,600]K and processes P1..P4 = [212,417,112,426]K. First-fit: P1→H2, leaving 288K; P2→H5, leaving 183K; P3→H2’s 288K remainder, leaving 176K; P4 cannot fit. Final holes = [100,176,200,300,183]K, total 959K, largest 300K.",
      "Best-fit: P1→H4=300K, leaving 88K; P2→H2=500K, leaving 83K; P3→H3=200K, leaving 88K; P4→H5=600K, leaving 174K. Final holes = [100,83,88,88,174]K, total 533K. All four processes are allocated.",
      "Worst-fit: P1→H5=600K, leaving 388K; P2→H2=500K, leaving 83K; P3→H5’s 388K remainder, leaving 276K; P4 cannot fit. Final holes = [100,83,200,300,276]K, total 959K, largest 300K.",
      "Total initial memory is 1700K. All four processes need 212+417+112+426 = 1167K; best-fit allocates 1167K and leaves 533K free. First-fit/worst-fit allocate 741K and leave 959K scattered, with no hole large enough for 426K. This is external fragmentation, not lack of aggregate capacity."
    ],
    "points": [
      "Reset the hole list to its original values before trying each strategy. Process arrival order is fixed. First-fit scans from H1 on each request; it does not continue from the last successful location.",
      "Best-fit is best for this data; it is not universally best for every workload. In this ideal variable-hole model, an allocation takes exactly its requested size, so the leftover remains free rather than internal fragmentation."
    ],
    "example": [
      "Strategy  P1=212K  P2=417K  P3=112K        P4=426K\nFirst-fit H2       H5       H2 remainder   not allocated\nBest-fit  H4       H2       H3             H5\nWorst-fit H5       H2       H5 remainder   not allocated",
      "For first-fit P3, H1=100K is too small, but H2’s remaining 288K is the first adequate hole: 288−112=176K. This is why it does not go into the later 200K hole."
    ],
    "sources": [
      "Question: BCSE303L-FAT-B1-2023-2024.pdf, PDF page 2; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 17–18, 24–26.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "ca80570015f255ca": {
    "answer": [
      "For references 1,2,3,4,2,1,5,6,2,1,2,3,7 with four initially empty frames: FIFO = 10 page faults; Optimal = 7 page faults; LRU = 8 page faults. The corresponding hits are 3, 6 and 5 out of 13 references.",
      "FIFO faults occur at steps 1,2,3,4,7,8,9,10,12,13. Optimal faults occur at steps 1,2,3,4,7,8,13. LRU faults occur at steps 1,2,3,4,7,8,12,13. Initial loads into empty frames count as faults.",
      "Optimal’s 7 faults attain the compulsory-fault lower bound here: the string contains seven distinct pages {1,2,3,4,5,6,7}, so no algorithm can have fewer than seven faults from an empty initial state."
    ],
    "points": [
      "FIFO evicts the oldest loaded page, ignoring hits for queue order. LRU evicts the page least recently referenced and updates recency on hits. Optimal uses the farthest next use.",
      "The full fixed-frame traces below specify every reference. Optimal ties between pages never used again may produce different final frame contents but the same seven faults."
    ],
    "example": [
      "FIFO: frame contents AFTER each reference; - = empty, F = fault, H = hit\nStep Ref   F1  F2  F3  F4  Result\n   1   1    1   -   -   -  F\n   2   2    1   2   -   -  F\n   3   3    1   2   3   -  F\n   4   4    1   2   3   4  F\n   5   2    1   2   3   4  H\n   6   1    1   2   3   4  H\n   7   5    5   2   3   4  F\n   8   6    5   6   3   4  F\n   9   2    5   6   2   4  F\n  10   1    5   6   2   1  F\n  11   2    5   6   2   1  H\n  12   3    3   6   2   1  F\n  13   7    3   7   2   1  F",
      "Optimal: frame contents AFTER each reference; - = empty, F = fault, H = hit\nStep Ref   F1  F2  F3  F4  Result\n   1   1    1   -   -   -  F\n   2   2    1   2   -   -  F\n   3   3    1   2   3   -  F\n   4   4    1   2   3   4  F\n   5   2    1   2   3   4  H\n   6   1    1   2   3   4  H\n   7   5    1   2   3   5  F\n   8   6    1   2   3   6  F\n   9   2    1   2   3   6  H\n  10   1    1   2   3   6  H\n  11   2    1   2   3   6  H\n  12   3    1   2   3   6  H\n  13   7    7   2   3   6  F",
      "LRU: frame contents AFTER each reference; - = empty, F = fault, H = hit\nStep Ref   F1  F2  F3  F4  Result\n   1   1    1   -   -   -  F\n   2   2    1   2   -   -  F\n   3   3    1   2   3   -  F\n   4   4    1   2   3   4  F\n   5   2    1   2   3   4  H\n   6   1    1   2   3   4  H\n   7   5    1   2   5   4  F\n   8   6    1   2   5   6  F\n   9   2    1   2   5   6  H\n  10   1    1   2   5   6  H\n  11   2    1   2   5   6  H\n  12   3    1   2   3   6  F\n  13   7    1   2   3   7  F",
      "At step 7 (page 5), LRU evicts page 3, last used at step 3; FIFO evicts page 1, first loaded at step 1; Optimal evicts page 4 because it is never referenced again. At step 8 Optimal evicts page 5, which also never appears again, keeping pages 1,2,3 for later hits."
    ],
    "sources": [
      "Question: BCSE303L-FAT-B1-2023-2024.pdf, PDF page 2; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 106, 108, 110, 112–115.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "45f6f254d4fbda64": {
    "answer": [
      "Two page-table levels are required under the standard assumption that each page-table page fits in one 1 GB page (using 1 GB = 2^30 bytes). The 72-bit virtual address splits as outer index 14 bits | inner index 28 bits | page offset 30 bits. The physical-address width is not uniquely determined by the supplied information.",
      "Page offset = log2(2^30) = 30 bits. Virtual page number (VPN) = 72−30 = 42 bits; therefore the virtual space contains 2^42 pages.",
      "A page-table entry (PTE) occupies 4 = 2^2 bytes. One page-table page holds 2^30/2^2 = 2^28 entries, so a full lower-level index has 28 bits. Number of levels = ceil(42/28) = 2. The remaining outer index uses 42−28 = 14 bits.",
      "Check by table sizes: a single-level table would require 2^42×4 = 2^44 bytes = 16 TiB and cannot fit in a 1 GiB page. Splitting it gives 2^14 inner tables, each holding 2^28 PTEs. The outer table needs 2^14 entries × 4 bytes = 2^16 bytes = 64 KiB, which fits in one page. Unused portions of a sparse address space need not have inner tables allocated.",
      "Virtual address bit positions, numbering from bit 0 at the right: outer index VA[71:58], inner index VA[57:30], offset VA[29:0]. Read the outer entry to locate the inner table, index the inner table to obtain a physical frame number (PFN), then append the unchanged 30-bit offset.",
      "Physical address = PFN | 30-bit offset. If the physical memory has 2^f page frames, the address width is f+30 bits. The question gives neither physical-memory size nor the PTE’s PFN/flag layout, so f cannot be fixed. A 4-byte PTE is not automatically a 32-bit physical address.",
      "Only under the additional idealized assumption that all 32 PTE bits encode the PFN, with no status/protection bits, may one state physical address = 32-bit PFN | 30-bit offset = 62 bits, supporting up to 2^62 byte addresses. If r PTE bits are reserved and the rest all encode the PFN, the representable bound becomes (32−r)+30 = 62−r bits. Actual physical memory may use fewer."
    ],
    "points": [
      "The 14-bit outer index is intentional: use the partially filled outermost level, rather than forcing two full 28-bit indices and incorrectly obtaining an 86-bit virtual address.",
      "The derivation generalizes the notes’ two-level paging example on PDF pp.43–47 to the stated sizes. The question’s missing physical-memory information is an ambiguity, not a license to invent a unique physical address width.",
      "The calculation concerns address-field widths and page-table levels; no concrete virtual address or PTE mappings are supplied, so no numerical physical address can be translated."
    ],
    "example": [
      "72-bit virtual address\n+----------------+----------------------------+------------------------------+\n| Outer: 14 bits | Inner: 28 bits             | Offset: 30 bits              |\n| VA[71:58]      | VA[57:30]                  | VA[29:0]                     |\n+----------------+----------------------------+------------------------------+\nPhysical address: [PFN: f bits] [same offset: 30 bits]\nIf all 32 PTE bits are PFN bits: f=32, so PA has 62 bits."
    ],
    "sources": [
      "Question: BCSE303L-FAT-B1-2024-2025.pdf, PDF page 3; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 27–28, 39, 43–48.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "5aed4411e0cf1d8e": {
    "answer": [
      "Internal fragmentation is unused space inside an allocated partition: the reserved block is larger than the process. It commonly occurs with fixed partitions or allocation units. If a 100K partition is allocated to an 80K process, 20K is internal waste and cannot be allocated separately while that partition remains reserved.",
      "External fragmentation is free space between allocated partitions, split into separate holes. Total free memory can be sufficient, but no contiguous hole is large enough for a request. It commonly occurs with variable-sized contiguous allocation as processes arrive and leave.",
      "Remedies differ: use more suitable/smaller allocation units to reduce internal waste; merge adjacent free holes or compact movable allocations to reduce external fragmentation. Compaction requires relocation support and combines separated free space, but does not remove unused space inside a fixed reserved partition."
    ],
    "points": [
      "Key distinction: internal = inside an allocated block; external = outside allocated blocks, scattered into free holes.",
      "The fragmentation labels describe the location and cause of unusable space, not simply “small versus large” memory. Smaller holes can still serve smaller future requests.",
      "The comparison is for contiguous allocation; paging avoids external fragmentation but can still have internal fragmentation in the last frame, as the notes explain on p.27."
    ],
    "example": [
      "Internal example: [80K process + 20K unused] within one reserved 100K partition. Internal fragmentation = 100−80 = 20K.",
      "External example: [40K free][allocated process][30K free]. Total free = 40+30 = 70K, yet a 60K contiguous request fails because the largest hole is 40K. If compaction is supported, combining the holes yields a 70K hole and the request can fit."
    ],
    "sources": [
      "Question: BCSE303L-FAT-B1-2024-2025.pdf, PDF page 3; original question scan visually inspected.",
      "Notes: Module 5.pdf (OS_selects/Module 5.pdf), PDF pages 17, 25–27.",
      "Worked solution derived from the cited notes; no supplied answer-key scan exists for this question. Numerical values and traces independently recalculated with Python."
    ]
  },
  "87ebbc5e4c2f90af": {
    "answer": [
      "The effective access time is 180 ns = 0.00018 ms.",
      "Assume sequential TLB lookup, no page faults, no page-walk cache, and one physical-memory access for each of the three page-table levels. On a TLB hit the final frame number is already known; on a miss all three levels must be read before the requested data."
    ],
    "points": [
      "TLB hit time = t + m = 20 + 100 = 120 ns.",
      "TLB miss time = t + 3m + m = 20 + 4(100) = 420 ns. The fourth memory access fetches the actual instruction/data.",
      "EAT = h(t+m) + (1−h)[t+(L+1)m] = 0.8(120) + 0.2(420) = 96 + 84 = 180 ns.",
      "Unit conversion: 1 ms = 10^6 ns, hence 180/10^6 = 0.00018 ms. A TLB miss is not a page fault; the question explicitly excludes page faults."
    ],
    "example": [
      "Across 100 accesses at the given 80% hit rate: 80×120 + 20×420 = 18,000 ns; divide by 100 to obtain 180 ns per access."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 34–38, 43–48.",
      "BCSE303L-FAT-B1-2024-2025.pdf, PDF page 4, Q8(a) (original question screenshot).",
      "Standard extension of the notes’ TLB effective-time calculation to three page-table levels, including the explicitly stated 20 ns lookup cost; the notes’ page 38 example neglects that cost."
    ]
  },
  "b012259a68a53cff": {
    "answer": [
      "Under the variable-sized-hole interpretation used for placement algorithms in the notes, First Fit and Best Fit satisfy all six requests. Worst Fit cannot satisfy P5 = 175 MB; it still satisfies the later P6 = 80 MB request.",
      "Label the original holes H1…H6 in address order: [100,170,40,205,300,185] MB. Process sizes P1…P6 are [200,15,185,75,175,80] MB. Split an allocated hole and retain its remainder at the same position; assume no releases or compaction.",
      "The word “partitions” does not explicitly say whether splitting is permitted. If these are fixed, single-process partitions instead, First Fit also fails P6; the fixed-partition outcomes are given below so the interpretation is explicit."
    ],
    "points": [
      "First Fit scans from H1 for each request. Best Fit chooses the smallest adequate current hole. Worst Fit chooses the largest current hole.",
      "Total initial free space = 1,000 MB; total requested = 730 MB. If all requests succeed, remaining free space is 270 MB. Worst Fit allocates 555 MB and leaves 445 MB, but no individual hole is large enough for the failed 175 MB request.",
      "In variable allocation, these residual holes are external free space, not internal waste. In fixed allocation, unused space within an assigned partition is internal fragmentation."
    ],
    "example": [
      "Variable First Fit P1=200 → H4, residual 5; holes [100,170,40,5,300,185].",
      "Variable First Fit P2=15 → H1, residual 85; holes [85,170,40,5,300,185].",
      "Variable First Fit P3=185 → H5, residual 115; holes [85,170,40,5,115,185].",
      "Variable First Fit P4=75 → H1 residual, leaving 10; holes [10,170,40,5,115,185].",
      "Variable First Fit P5=175 → H6, residual 10; holes [10,170,40,5,115,10].",
      "Variable First Fit P6=80 → H2, residual 90; final holes [10,90,40,5,115,10], total 270 MB; no failures.",
      "Variable Best Fit P1=200 → H4, residual 5; holes [100,170,40,5,300,185].",
      "Variable Best Fit P2=15 → H3, residual 25; holes [100,170,25,5,300,185].",
      "Variable Best Fit P3=185 → H6 exactly; holes [100,170,25,5,300,0].",
      "Variable Best Fit P4=75 → H1, residual 25; holes [25,170,25,5,300,0].",
      "Variable Best Fit P5=175 → H5, residual 125; holes [25,170,25,5,125,0].",
      "Variable Best Fit P6=80 → H5 residual, leaving 45; final holes [25,170,25,5,45,0], total 270 MB; no failures.",
      "Variable Worst Fit P1=200 → H5, residual 100; holes [100,170,40,205,100,185].",
      "Variable Worst Fit P2=15 → H4, residual 190; holes [100,170,40,190,100,185].",
      "Variable Worst Fit P3=185 → H4 residual, leaving 5; holes [100,170,40,5,100,185].",
      "Variable Worst Fit P4=75 → H6, residual 110; holes [100,170,40,5,100,110].",
      "Variable Worst Fit P5=175 fails: largest remaining hole is H2=170 MB, although aggregate free space is 525 MB.",
      "Variable Worst Fit P6=80 → H2, residual 90; final holes [100,90,40,5,100,110], total 445 MB.",
      "Fixed-partition alternative (no reuse of an occupied partition’s unused capacity): First Fit P1…P6 → [H4,H1,H5,H2,H6,FAIL]; Best Fit → [H4,H3,H6,H1,H5,H2]; Worst Fit → [H5,H4,H6,H2,FAIL,H1]. For example, fixed First Fit cannot reuse H1 for P4 after P2 occupies it."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 17–18, 24–27.",
      "BCSE303L-FAT-B1-2024-2025.pdf, PDF page 4, Q8(b) (original question screenshot).",
      "Worked answer derived from the stated question data and the cited lecture methods; not an official answer-key transcription."
    ]
  },
  "a4b45310127c0113": {
    "answer": [
      "Internal fragmentation is allocated space a request cannot use; external fragmentation is enough total free space scattered into holes that cannot satisfy a contiguous request. Reducing one can increase the other or increase management overhead.",
      "A practical integrated design uses paging for physical placement, variable-sized allocation with splitting/coalescing inside the process heap, and suitable size-class or slab caches for repeated small objects. Preserve logical regions and protection through segments or mapped regions; if actual segmentation is required, page each segment so that a whole segment need not occupy contiguous physical memory.",
      "This combination removes the physical contiguous-allocation requirement for ordinary pages, reduces avoidable heap gaps and object-rounding waste, and keeps allocation fast. It does not eliminate every form of waste: final pages, alignment, cached free objects and partially filled slabs still consume memory."
    ],
    "points": [
      "Paging: divide logical memory into fixed pages and RAM into equal frames, allowing any free frame to hold a page. This removes external fragmentation for allocation of individual frames. The last page may be partly unused; smaller pages reduce that waste but enlarge page tables and can increase TLB pressure. Requests requiring multiple physically contiguous pages can still fail despite sufficient scattered frames.",
      "Segmentation: size logical units such as code, stack and data to their needs, avoiding the fixed-partition rounding of those units and enabling meaningful protection/sharing. Because each segment is contiguous and variable-sized in pure segmentation, allocation and release produce external fragmentation; growing a segment may require relocation.",
      "Dynamic allocation: split a large free hole when satisfying a request; coalesce adjacent free blocks when freeing. First Fit is inexpensive; Best Fit minimizes the immediate leftover but can create tiny holes and requires more searching. Neither universally prevents fragmentation. Coalescing cannot merge separated holes while a live object remains between them.",
      "Compaction: relocate live allocations to unite free space. It can address external fragmentation if addresses can be updated or dynamically relocated, but copying costs time, may cause pauses and is complicated by pinned memory or outstanding I/O. It does not recover padding inside fixed-size allocated objects.",
      "Buddy allocation: recursively split powers-of-two blocks, then efficiently merge free buddy pairs; useful for page blocks, but rounding a request upward creates internal fragmentation. Slab/size-class allocation: reuse suitably sized object slots for frequent object types, reducing allocation overhead and repeated general-purpose fragmentation; empty slots, alignment and partly occupied slabs remain costs.",
      "Integrated policy: maintain frame-level allocation and a TLB; split/coalesce process-heap blocks; use slab-like caches for frequent kernel objects; return empty pages/slabs to the frame allocator. Use compaction or relocation only when worthwhile and possible. Balance page-table memory, TLB reach, bookkeeping, protection granularity and predictable allocation latency against memory savings."
    ],
    "example": [
      "Created illustration: a 9 KiB process needs three 4 KiB pages (12 KiB allocated, 3 KiB unused), but two 8 KiB pages (16 KiB allocated, 7 KiB unused). Smaller pages save 4 KiB here while requiring more page-table entries.",
      "Created illustration: two free holes of 4 KiB and 6 KiB separated by a live block cannot satisfy a contiguous 8 KiB request. Coalescing helps only after the intervening block becomes free; paging can satisfy an 8 KiB region using two free 4 KiB frames without requiring adjacency.",
      "The notes’ buddy example requests 21 KiB and allocates a 32 KiB block: 11 KiB is internal rounding waste. An object-specific allocator can reduce such repeated over-allocation, subject to its alignment and slab occupancy."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 17–18, 25–32, 68–73, 127–131.",
      "BCSE303L-FAT-B2-2024-2025.pdf, PDF page 2, Q6 (original question screenshot).",
      "The integrated design, paged-segmentation synthesis and qualified slab trade-offs are explanatory analysis extending the individual mechanisms in Module 5.pdf; page 130’s “no fragmentation” is an idealized benefit, not a guarantee of zero unused slab memory."
    ]
  },
  "be8e71765551bca2": {
    "answer": [
      "For the 20-reference string, FIFO with 5 frames has 9 faults and 4 replacements; LRU with 6 frames has 8 faults and 2 replacements; Optimal with 5 frames has 8 faults and 3 replacements.",
      "The corresponding fault rates are 45%, 40% and 40%. Counts include the initial empty-frame loads. Replacements are faults after the assigned frames are full, so they are not the same count as faults."
    ],
    "points": [
      "FIFO evicts the earliest loaded resident page; hits do not refresh its queue position. LRU evicts the page whose last reference is oldest. Optimal evicts the page whose next use is farthest in the future, treating “never used again” as infinitely far away.",
      "The first 18 references use six distinct pages {2,3,4,5,6,7}. Six-frame LRU retains all six after loading them; the final references to new pages 0 and 1 each add a compulsory fault. Thus its 8 faults equal the number of distinct referenced pages.",
      "Five-frame Optimal also achieves the lower bound of 8 faults: at the arrival of 7, it discards 2, which is never used again; the remaining recurring five-page set then fits. FIFO discards 5 instead and must reload it, producing one extra fault.",
      "This comparison changes both policy and capacity. LRU’s result with six frames does not show that LRU matches Optimal at equal frame counts, nor does one trace prove a universal ranking between practical policies. Optimal is a benchmark because actual systems cannot generally know future references.",
      "Under initially empty frames, replacements = faults − number of initial frame fills: FIFO 9−5=4; LRU 8−6=2; Optimal 8−5=3."
    ],
    "example": [
      "Reference string (20 references): 5, 2, 4, 3, 5, 6, 7, 5, 3, 4, 5, 6, 4, 3, 7, 5, 6, 3, 0, 1.",
      "Trace notation: [F1,F2,...] shows fixed physical frame slots after each reference. A dash means empty. Every initial load is a page fault; a replacement occurs only when an occupied frame is evicted. All frames start empty. For OPT ties, choose the lowest numbered tied frame; other tied choices can give different states with the same minimum fault count.",
      "FIFO, 5 frames: 9 faults, 11 hits, 4 replacements.",
      "FIFO-5 step 1: reference 5 → [5,-,-,-,-]; fault; fill empty frame.",
      "FIFO-5 step 2: reference 2 → [5,2,-,-,-]; fault; fill empty frame.",
      "FIFO-5 step 3: reference 4 → [5,2,4,-,-]; fault; fill empty frame.",
      "FIFO-5 step 4: reference 3 → [5,2,4,3,-]; fault; fill empty frame.",
      "FIFO-5 step 5: reference 5 → [5,2,4,3,-]; hit.",
      "FIFO-5 step 6: reference 6 → [5,2,4,3,6]; fault; fill empty frame.",
      "FIFO-5 step 7: reference 7 → [7,2,4,3,6]; fault; replace 5.",
      "FIFO-5 step 8: reference 5 → [7,5,4,3,6]; fault; replace 2.",
      "FIFO-5 step 9: reference 3 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 10: reference 4 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 11: reference 5 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 12: reference 6 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 13: reference 4 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 14: reference 3 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 15: reference 7 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 16: reference 5 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 17: reference 6 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 18: reference 3 → [7,5,4,3,6]; hit.",
      "FIFO-5 step 19: reference 0 → [7,5,0,3,6]; fault; replace 4.",
      "FIFO-5 step 20: reference 1 → [7,5,0,1,6]; fault; replace 3.",
      "LRU, 6 frames: 8 faults, 12 hits, 2 replacements.",
      "LRU-6 step 1: reference 5 → [5,-,-,-,-,-]; fault; fill empty frame.",
      "LRU-6 step 2: reference 2 → [5,2,-,-,-,-]; fault; fill empty frame.",
      "LRU-6 step 3: reference 4 → [5,2,4,-,-,-]; fault; fill empty frame.",
      "LRU-6 step 4: reference 3 → [5,2,4,3,-,-]; fault; fill empty frame.",
      "LRU-6 step 5: reference 5 → [5,2,4,3,-,-]; hit.",
      "LRU-6 step 6: reference 6 → [5,2,4,3,6,-]; fault; fill empty frame.",
      "LRU-6 step 7: reference 7 → [5,2,4,3,6,7]; fault; fill empty frame.",
      "LRU-6 step 8: reference 5 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 9: reference 3 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 10: reference 4 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 11: reference 5 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 12: reference 6 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 13: reference 4 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 14: reference 3 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 15: reference 7 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 16: reference 5 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 17: reference 6 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 18: reference 3 → [5,2,4,3,6,7]; hit.",
      "LRU-6 step 19: reference 0 → [5,0,4,3,6,7]; fault; replace 2.",
      "LRU-6 step 20: reference 1 → [5,0,1,3,6,7]; fault; replace 4.",
      "OPT, 5 frames: 8 faults, 12 hits, 3 replacements.",
      "OPT-5 step 1: reference 5 → [5,-,-,-,-]; fault; fill empty frame.",
      "OPT-5 step 2: reference 2 → [5,2,-,-,-]; fault; fill empty frame.",
      "OPT-5 step 3: reference 4 → [5,2,4,-,-]; fault; fill empty frame.",
      "OPT-5 step 4: reference 3 → [5,2,4,3,-]; fault; fill empty frame.",
      "OPT-5 step 5: reference 5 → [5,2,4,3,-]; hit.",
      "OPT-5 step 6: reference 6 → [5,2,4,3,6]; fault; fill empty frame.",
      "OPT-5 step 7: reference 7 → [5,7,4,3,6]; fault; replace 2.",
      "OPT-5 step 8: reference 5 → [5,7,4,3,6]; hit.",
      "OPT-5 step 9: reference 3 → [5,7,4,3,6]; hit.",
      "OPT-5 step 10: reference 4 → [5,7,4,3,6]; hit.",
      "OPT-5 step 11: reference 5 → [5,7,4,3,6]; hit.",
      "OPT-5 step 12: reference 6 → [5,7,4,3,6]; hit.",
      "OPT-5 step 13: reference 4 → [5,7,4,3,6]; hit.",
      "OPT-5 step 14: reference 3 → [5,7,4,3,6]; hit.",
      "OPT-5 step 15: reference 7 → [5,7,4,3,6]; hit.",
      "OPT-5 step 16: reference 5 → [5,7,4,3,6]; hit.",
      "OPT-5 step 17: reference 6 → [5,7,4,3,6]; hit.",
      "OPT-5 step 18: reference 3 → [5,7,4,3,6]; hit.",
      "OPT-5 step 19: reference 0 → [0,7,4,3,6]; fault; replace 5.",
      "OPT-5 step 20: reference 1 → [1,7,4,3,6]; fault; replace 0."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 103–115.",
      "BCSE303L-FAT-B2-2024-2025.pdf, PDF page 2, Q7 (original question screenshot).",
      "Original numerical derivation using Module 5.pdf algorithms; all traces checked by two independent simulations, and OPT fault counts also checked by exhaustive dynamic programming. No official solution is supplied for this question."
    ]
  },
  "d78c7c573740b667": {
    "answer": [
      "The single-level page table size is 4,194,304 bytes = 4 MiB (often written 4 MB in exam conventions).",
      "A byte-addressable 32-bit logical address space contains 2^32 bytes. A 4 KiB page contains 2^12 bytes, so the page number has 32−12=20 bits and the full table needs 2^20 entries."
    ],
    "points": [
      "Number of virtual pages = logical address-space size / page size = 2^32 / 2^12 = 2^20 = 1,048,576.",
      "Table size = entries × bytes per entry = 1,048,576 × 4 = 4,194,304 bytes.",
      "This is the size of a flat table covering the full logical address space. Sparse multi-level allocation can avoid allocating unused lower-level table pages, but that is a different implementation question."
    ],
    "example": [
      "Address split: [virtual page number: 20 bits | offset: 12 bits]. A table entry is indexed by the 20-bit page number; the offset selects the byte inside the mapped frame."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 27–28, 43–46.",
      "BCSE303L-FAT-C1-2025-2026.pdf, PDF page 3, Q7(a) (original question screenshot).",
      "Worked answer derived from the stated question data and the cited lecture methods; not an official answer-key transcription."
    ]
  },
  "35ba1c8c8ba7b085": {
    "answer": [
      "The main structures are a conventional linear table, hierarchical (multi-level) tables, hashed page tables and an inverted page table. The latter three address the large memory cost of a full linear table.",
      "All ultimately translate a virtual page number to a physical frame number while preserving the page offset. A TLB caches completed translations and reduces repeated table traversal."
    ],
    "points": [
      "Linear table: one entry for every virtual page of a process. Diagram: CPU [p|d] → page_table[p] → frame f → physical address [f|d]. Advantage: direct indexing and simple lookup. Limit: the table grows with virtual address-space size even when few pages are used; the 32-bit, 4 KiB, 4-byte-entry example costs 4 MiB per full table.",
      "Hierarchical table: divide p into indexes p1,p2,… and allocate lower-level tables only for used regions. Two-level diagram: CPU [p1|p2|d] → outer[p1] → inner_table[p2] → f → [f|d]. For 32 bits, 4 KiB pages and 4-byte entries, use [10|10|12]. Advantage: sparse regions need no lower-level table; tables can fit in pages. Limits: extra dependent memory reads on a TLB miss and metadata overhead; a fully populated hierarchy is not smaller than the corresponding leaf entries plus its upper levels.",
      "Three-level extension: CPU [p1|p2|p3|d] → level1[p1] → level2[p2] → level3[p3] → f → [f|d]. It supports larger spaces, but an uncached walk requires three table reads before the data access. Actual level splits depend on page and entry size.",
      "Hashed table: hash the virtual page number, then search that bucket’s chain for an exact page match. Diagram: p → hash(p) → bucket → (virtual page, frame, next) → …; matching entry supplies f; output [f|d]. Advantage: scales well for large, sparse address spaces. Limits: collisions require comparisons and linked-chain traversal; lookup time depends on the hash distribution. Clustered variants store mappings for several pages per entry.",
      "Inverted table: one system-wide entry per physical frame, storing its owning process and virtual page. Diagram: CPU [PID|p|d] → hash/search for (PID,p) in inverted table → matching row i → physical [i|d]. Advantage: table size follows physical frames rather than each process’s potentially huge virtual space. Limits: reverse lookup requires searching or hashing; shared-frame aliases need extra handling; nonresident-page information still needs other OS metadata.",
      "Protection and context: page-table entries hold permissions and residency information as required. A TLB may tag translations with an address-space identifier; without such tags, context changes may require appropriate invalidation."
    ],
    "example": [
      "Worked structural example: with 32-bit addresses, 4 KiB pages and 4-byte entries, one 4 KiB table page holds 1,024 entries. Ten bits index the outer table and ten the inner table; the low 12 bits are the byte offset. Allocating just one populated inner-table region requires one outer page plus one inner page, 8 KiB of table memory, rather than a fully allocated 4 MiB linear table. This example assumes no other inner tables exist and excludes mapped data frames."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 34–38, 43–52.",
      "BCSE303L-FAT-C1-2025-2026.pdf, PDF page 3, Q7(b) (original question screenshot).",
      "Text diagrams follow Module 5.pdf pages 37, 46, 50 and 52; the 8 KiB sparse-table example and shared-alias/nonresident metadata qualifications are standard explanatory derivations."
    ]
  },
  "dd1c952f290e5110": {
    "answer": [
      "With four initially empty frames and 20 references: FIFO produces 14 page faults (70%); LRU produces 10 page faults (50%); Optimal produces 8 page faults (40%).",
      "The corresponding hits are 6, 10 and 12. Occupied-frame replacements are 10, 6 and 4, respectively."
    ],
    "points": [
      "Page-fault rate = faults / total references. Therefore FIFO = 14/20 = 0.70; LRU = 10/20 = 0.50; OPT = 8/20 = 0.40.",
      "FIFO uses load order and never moves a page on a hit. LRU refreshes a page’s recency on every hit. Optimal chooses the resident page whose next use is farthest away.",
      "Each algorithm starts with four compulsory fills; subtract those four from its fault count to obtain replacements. The last reference 7 is part of the printed string and must be counted."
    ],
    "example": [
      "Reference string (20 references): 1, 2, 3, 4, 2, 1, 5, 7, 2, 1, 2, 3, 6, 7, 3, 2, 1, 2, 3, 7.",
      "Trace notation: [F1,F2,...] shows fixed physical frame slots after each reference. A dash means empty. Every initial load is a page fault; a replacement occurs only when an occupied frame is evicted. All frames start empty. For OPT ties, choose the lowest numbered tied frame; other tied choices can give different states with the same minimum fault count.",
      "FIFO, 4 frames: 14 faults, 6 hits, 10 replacements.",
      "FIFO-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "FIFO-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "FIFO-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "FIFO-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "FIFO-4 step 5: reference 2 → [1,2,3,4]; hit.",
      "FIFO-4 step 6: reference 1 → [1,2,3,4]; hit.",
      "FIFO-4 step 7: reference 5 → [5,2,3,4]; fault; replace 1.",
      "FIFO-4 step 8: reference 7 → [5,7,3,4]; fault; replace 2.",
      "FIFO-4 step 9: reference 2 → [5,7,2,4]; fault; replace 3.",
      "FIFO-4 step 10: reference 1 → [5,7,2,1]; fault; replace 4.",
      "FIFO-4 step 11: reference 2 → [5,7,2,1]; hit.",
      "FIFO-4 step 12: reference 3 → [3,7,2,1]; fault; replace 5.",
      "FIFO-4 step 13: reference 6 → [3,6,2,1]; fault; replace 7.",
      "FIFO-4 step 14: reference 7 → [3,6,7,1]; fault; replace 2.",
      "FIFO-4 step 15: reference 3 → [3,6,7,1]; hit.",
      "FIFO-4 step 16: reference 2 → [3,6,7,2]; fault; replace 1.",
      "FIFO-4 step 17: reference 1 → [1,6,7,2]; fault; replace 3.",
      "FIFO-4 step 18: reference 2 → [1,6,7,2]; hit.",
      "FIFO-4 step 19: reference 3 → [1,3,7,2]; fault; replace 6.",
      "FIFO-4 step 20: reference 7 → [1,3,7,2]; hit.",
      "LRU, 4 frames: 10 faults, 10 hits, 6 replacements.",
      "LRU-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "LRU-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "LRU-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "LRU-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "LRU-4 step 5: reference 2 → [1,2,3,4]; hit.",
      "LRU-4 step 6: reference 1 → [1,2,3,4]; hit.",
      "LRU-4 step 7: reference 5 → [1,2,5,4]; fault; replace 3.",
      "LRU-4 step 8: reference 7 → [1,2,5,7]; fault; replace 4.",
      "LRU-4 step 9: reference 2 → [1,2,5,7]; hit.",
      "LRU-4 step 10: reference 1 → [1,2,5,7]; hit.",
      "LRU-4 step 11: reference 2 → [1,2,5,7]; hit.",
      "LRU-4 step 12: reference 3 → [1,2,3,7]; fault; replace 5.",
      "LRU-4 step 13: reference 6 → [1,2,3,6]; fault; replace 7.",
      "LRU-4 step 14: reference 7 → [7,2,3,6]; fault; replace 1.",
      "LRU-4 step 15: reference 3 → [7,2,3,6]; hit.",
      "LRU-4 step 16: reference 2 → [7,2,3,6]; hit.",
      "LRU-4 step 17: reference 1 → [7,2,3,1]; fault; replace 6.",
      "LRU-4 step 18: reference 2 → [7,2,3,1]; hit.",
      "LRU-4 step 19: reference 3 → [7,2,3,1]; hit.",
      "LRU-4 step 20: reference 7 → [7,2,3,1]; hit.",
      "OPT, 4 frames: 8 faults, 12 hits, 4 replacements.",
      "OPT-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "OPT-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "OPT-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "OPT-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "OPT-4 step 5: reference 2 → [1,2,3,4]; hit.",
      "OPT-4 step 6: reference 1 → [1,2,3,4]; hit.",
      "OPT-4 step 7: reference 5 → [1,2,3,5]; fault; replace 4.",
      "OPT-4 step 8: reference 7 → [1,2,3,7]; fault; replace 5.",
      "OPT-4 step 9: reference 2 → [1,2,3,7]; hit.",
      "OPT-4 step 10: reference 1 → [1,2,3,7]; hit.",
      "OPT-4 step 11: reference 2 → [1,2,3,7]; hit.",
      "OPT-4 step 12: reference 3 → [1,2,3,7]; hit.",
      "OPT-4 step 13: reference 6 → [6,2,3,7]; fault; replace 1.",
      "OPT-4 step 14: reference 7 → [6,2,3,7]; hit.",
      "OPT-4 step 15: reference 3 → [6,2,3,7]; hit.",
      "OPT-4 step 16: reference 2 → [6,2,3,7]; hit.",
      "OPT-4 step 17: reference 1 → [1,2,3,7]; fault; replace 6.",
      "OPT-4 step 18: reference 2 → [1,2,3,7]; hit.",
      "OPT-4 step 19: reference 3 → [1,2,3,7]; hit.",
      "OPT-4 step 20: reference 7 → [1,2,3,7]; hit."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 103–115.",
      "BCSE303L-FAT-C1-2025-2026.pdf, PDF page 4, Q8 (original question screenshot).",
      "Original numerical derivation using Module 5.pdf algorithms; all traces checked by two independent simulations, and OPT fault counts also checked by exhaustive dynamic programming. No official solution is supplied for this question."
    ]
  },
  "b294d9bf287e1ded": {
    "answer": [
      "Paging uses fixed-size pages mapped to equal-size physical frames; segmentation uses variable-size logical units; paged segmentation divides each logical segment into pages and maps those pages independently.",
      "For the numerical part, assume binary memory units (1 KB=1,024 bytes; 1 MB=1,048,576 bytes). There are 2^20 virtual pages and 2^14 physical frames. The exact page-table size is not uniquely specified because the question omits the page-table-entry width.",
      "If the intended model stores a physical frame number in a minimum whole-byte entry, 14 frame-number bits require 2 bytes, giving a 2,097,152-byte = 2 MiB table. If entries are 4 bytes as in the lecture example, the table is 4,194,304 bytes = 4 MiB. Both are much larger than one 4 KiB page."
    ],
    "points": [
      "Paging allocation/translation/fragmentation: allocate any available fixed-size frames; translate [page p | offset d] using page_table[p]=f, then PA=f×page_size+d. No external fragmentation for individual frame allocation; partly used final pages cause internal fragmentation.",
      "Segmentation allocation/translation/fragmentation: allocate each variable-length segment contiguously; translate [segment s | offset d] by checking d<limit[s], then PA=base[s]+d. This matches logical units and supports per-segment sharing/protection, but separate free holes cause external fragmentation; there is no inherent fixed-page rounding in pure segmentation.",
      "Paged segmentation allocation/translation/fragmentation: address [segment s | page p | offset d]; check segment bounds, obtain that segment’s page-table base from segment_table[s], index page p to find frame f, then form PA=f×page_size+d. Physical pages need not be contiguous, so it removes the segment-contiguity external-fragmentation problem; each segment’s last page can have internal waste, and both segment and page tables add overhead.",
      "Virtual pages = 2^32/2^12 = 2^20 = 1,048,576. Physical frames = 64×2^20/2^12 = 2^14 = 16,384. Physical addresses need 26 bits, split as [14-bit frame | 12-bit offset]; virtual addresses split as [20-bit page | 12-bit offset].",
      "General full-table formula: size = 1,048,576 × entry_size_bytes. Minimum frame-number information is 14 bits per entry; ideal bit packing gives 2^20×14/8 = 1,835,008 bytes = 1.75 MiB, before any required status/protection bits. A byte-sized 2-byte entry gives 2 MiB; a 4-byte entry gives 4 MiB. Physical RAM size determines frame-number width, not the number of conventional virtual-page entries.",
      "The 2 MiB table spans 512 pages of 4 KiB; the 4 MiB table spans 1,024 such pages. A two-level page table can allocate only the needed inner pages and avoid demanding one huge contiguous table. A TLB helps offset the extra walk cost. A small table fitting in one page needs less hierarchy, but table size alone does not decide the memory scheme: logical protection/sharing, sparsity, fragmentation and translation overhead also matter.",
      "Paged segmentation can allocate per-segment tables for used segments, but it is not automatically smaller: many small segments can require many tables and partly filled final pages. Pure segmentation avoids page-table entries at the cost of contiguous-segment placement and external fragmentation."
    ],
    "example": [
      "Concrete translation comparison: paging [p,d] → PT[p] → f; segmentation [s,d] → (base,limit) → base+d if d<limit; paged segmentation [s,p,d] → ST[s].page_table → PTs[p] → f×page_size+d, subject to segment bounds and permissions."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 27–28, 32, 43–52, 68–73.",
      "BCSE303L-FAT-C2-2025-2026.pdf, PDF page 3, Q9(a) (original question screenshot).",
      "Paged segmentation is a standard synthesis of the notes’ separate paging and segmentation mechanisms; the PDF does not explicitly derive it. The numerical alternatives are necessary because the question omits entry width and segment layout."
    ]
  },
  "5d7130410445a5bf": {
    "answer": [
      "Using byte addressing and binary KB: logical-address length = 15 bits, page-offset length = 11 bits, and page-number length = 4 bits. The requested physical addresses are 8165 → 4069, 945 → 7089, and 256 → 6400 (all decimal byte addresses).",
      "Logical address 16384 selects page 8 with offset 0. It is within the 32 KiB logical address range, but the supplied table lists only pages 0–3. Under the intended assumption that unlisted pages are valid but nonresident, it causes a page fault. The table alone does not state whether page 8 is nonresident, unmapped, or merely omitted from a partial table, so that distinction must be made explicitly."
    ],
    "points": [
      "Logical space = 32×1024 = 32768 = 2^15 bytes. Page size = 2×1024 = 2048 = 2^11 bytes. Number of logical pages = 32768/2048 = 16 = 2^4. Hence address = [4-bit page number | 11-bit offset].",
      "Physical memory = 16×1024 = 16384 = 2^14 bytes. Number of frames = 16384/2048 = 8, so a physical address is [3-bit frame number | 11-bit offset].",
      "For any logical byte address A: p=floor(A/2048), d=A mod 2048; after finding f in the page table, physical address = f×2048+d. Keep d unchanged during translation.",
      "Given mappings: page0→frame3, page1→frame0, page2→frame2, page3→frame1. The table shown is not a complete 16-entry description of all possible logical pages.",
      "16384 is not an invalid logical address simply because it equals the physical memory size. Virtual addresses are checked against the process’s virtual mappings; here 0≤16384<32768. If page8 is legal but absent, the OS loads it and restarts the instruction; if it is unmapped/illegal, the trap is an invalid-access condition; if this is only an excerpt and page8 is resident elsewhere, no fault follows from the excerpt alone."
    ],
    "example": [
      "A=8165: 8165=3×2048+2021, so p=3,d=2021. PTE[3]=1; PA=1×2048+2021=4069.",
      "A=945: 945=0×2048+945, so p=0,d=945. PTE[0]=3; PA=3×2048+945=7089.",
      "A=256: 256=0×2048+256, so p=0,d=256. PTE[0]=3; PA=3×2048+256=6400.",
      "A=16384: 16384=8×2048+0, so p=8,d=0. There is no supplied frame mapping for p=8; no numerical physical address can be computed without additional page-table information."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 27–31, 39–40, 82–87.",
      "BCSE303L-FAT-C2-2025-2026.pdf, PDF page 3, Q9(b) (original question screenshot).",
      "Worked answer derived from the stated question data and the cited lecture methods; not an official answer-key transcription."
    ]
  },
  "fb2162adf7d6d48f": {
    "answer": [
      "For the printed 23-reference string and four initially empty frames: FIFO has 21 faults, LRU has 19 faults, and Optimal has 11 faults.",
      "Repeating FIFO with five initially empty frames gives 16 faults. Since 16 < 21, upgrading from four to five frames reduces faults by 5; Belady’s anomaly does not occur for this reference string and this capacity change.",
      "The four-frame fault rates are 21/23≈91.30% (FIFO), 19/23≈82.61% (LRU), and 11/23≈47.83% (OPT). Five-frame FIFO has 16/23≈69.57%."
    ],
    "points": [
      "FIFO replaces by arrival order; references that hit do not postpone replacement. LRU updates recency on every reference. Optimal uses the farthest next reference to choose the victim.",
      "Belady’s anomaly means more frames produce more page faults for the same string and policy. FIFO can exhibit the anomaly, but that possibility does not imply it occurs in every exam string. The calculated counts must decide this instance.",
      "Replacements exclude initial fills: FIFO-4 = 21−4 = 17; LRU-4 = 19−4 = 15; OPT-4 = 11−4 = 7; FIFO-5 = 16−5 = 11.",
      "Optimal is a lower-bound benchmark requiring future knowledge. Lower fault counts are useful for latency, but these counts alone do not establish a real-time deadline guarantee; the problem supplies no page-fault service times."
    ],
    "example": [
      "Reference string (23 references): 1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3.",
      "Trace notation: [F1,F2,...] shows fixed physical frame slots after each reference. A dash means empty. Every initial load is a page fault; a replacement occurs only when an occupied frame is evicted. All frames start empty. For OPT ties, choose the lowest numbered tied frame; other tied choices can give different states with the same minimum fault count.",
      "FIFO, 4 frames: 21 faults, 2 hits, 17 replacements.",
      "FIFO-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "FIFO-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "FIFO-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "FIFO-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "FIFO-4 step 5: reference 1 → [1,2,3,4]; hit.",
      "FIFO-4 step 6: reference 2 → [1,2,3,4]; hit.",
      "FIFO-4 step 7: reference 5 → [5,2,3,4]; fault; replace 1.",
      "FIFO-4 step 8: reference 1 → [5,1,3,4]; fault; replace 2.",
      "FIFO-4 step 9: reference 2 → [5,1,2,4]; fault; replace 3.",
      "FIFO-4 step 10: reference 3 → [5,1,2,3]; fault; replace 4.",
      "FIFO-4 step 11: reference 4 → [4,1,2,3]; fault; replace 5.",
      "FIFO-4 step 12: reference 5 → [4,5,2,3]; fault; replace 1.",
      "FIFO-4 step 13: reference 6 → [4,5,6,3]; fault; replace 2.",
      "FIFO-4 step 14: reference 1 → [4,5,6,1]; fault; replace 3.",
      "FIFO-4 step 15: reference 2 → [2,5,6,1]; fault; replace 4.",
      "FIFO-4 step 16: reference 3 → [2,3,6,1]; fault; replace 5.",
      "FIFO-4 step 17: reference 4 → [2,3,4,1]; fault; replace 6.",
      "FIFO-4 step 18: reference 5 → [2,3,4,5]; fault; replace 1.",
      "FIFO-4 step 19: reference 6 → [6,3,4,5]; fault; replace 2.",
      "FIFO-4 step 20: reference 7 → [6,7,4,5]; fault; replace 3.",
      "FIFO-4 step 21: reference 1 → [6,7,1,5]; fault; replace 4.",
      "FIFO-4 step 22: reference 2 → [6,7,1,2]; fault; replace 5.",
      "FIFO-4 step 23: reference 3 → [3,7,1,2]; fault; replace 6.",
      "LRU, 4 frames: 19 faults, 4 hits, 15 replacements.",
      "LRU-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "LRU-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "LRU-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "LRU-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "LRU-4 step 5: reference 1 → [1,2,3,4]; hit.",
      "LRU-4 step 6: reference 2 → [1,2,3,4]; hit.",
      "LRU-4 step 7: reference 5 → [1,2,5,4]; fault; replace 3.",
      "LRU-4 step 8: reference 1 → [1,2,5,4]; hit.",
      "LRU-4 step 9: reference 2 → [1,2,5,4]; hit.",
      "LRU-4 step 10: reference 3 → [1,2,5,3]; fault; replace 4.",
      "LRU-4 step 11: reference 4 → [1,2,4,3]; fault; replace 5.",
      "LRU-4 step 12: reference 5 → [5,2,4,3]; fault; replace 1.",
      "LRU-4 step 13: reference 6 → [5,6,4,3]; fault; replace 2.",
      "LRU-4 step 14: reference 1 → [5,6,4,1]; fault; replace 3.",
      "LRU-4 step 15: reference 2 → [5,6,2,1]; fault; replace 4.",
      "LRU-4 step 16: reference 3 → [3,6,2,1]; fault; replace 5.",
      "LRU-4 step 17: reference 4 → [3,4,2,1]; fault; replace 6.",
      "LRU-4 step 18: reference 5 → [3,4,2,5]; fault; replace 1.",
      "LRU-4 step 19: reference 6 → [3,4,6,5]; fault; replace 2.",
      "LRU-4 step 20: reference 7 → [7,4,6,5]; fault; replace 3.",
      "LRU-4 step 21: reference 1 → [7,1,6,5]; fault; replace 4.",
      "LRU-4 step 22: reference 2 → [7,1,6,2]; fault; replace 5.",
      "LRU-4 step 23: reference 3 → [7,1,3,2]; fault; replace 6.",
      "OPT, 4 frames: 11 faults, 12 hits, 7 replacements.",
      "OPT-4 step 1: reference 1 → [1,-,-,-]; fault; fill empty frame.",
      "OPT-4 step 2: reference 2 → [1,2,-,-]; fault; fill empty frame.",
      "OPT-4 step 3: reference 3 → [1,2,3,-]; fault; fill empty frame.",
      "OPT-4 step 4: reference 4 → [1,2,3,4]; fault; fill empty frame.",
      "OPT-4 step 5: reference 1 → [1,2,3,4]; hit.",
      "OPT-4 step 6: reference 2 → [1,2,3,4]; hit.",
      "OPT-4 step 7: reference 5 → [1,2,3,5]; fault; replace 4.",
      "OPT-4 step 8: reference 1 → [1,2,3,5]; hit.",
      "OPT-4 step 9: reference 2 → [1,2,3,5]; hit.",
      "OPT-4 step 10: reference 3 → [1,2,3,5]; hit.",
      "OPT-4 step 11: reference 4 → [1,2,4,5]; fault; replace 3.",
      "OPT-4 step 12: reference 5 → [1,2,4,5]; hit.",
      "OPT-4 step 13: reference 6 → [1,2,4,6]; fault; replace 5.",
      "OPT-4 step 14: reference 1 → [1,2,4,6]; hit.",
      "OPT-4 step 15: reference 2 → [1,2,4,6]; hit.",
      "OPT-4 step 16: reference 3 → [1,3,4,6]; fault; replace 2.",
      "OPT-4 step 17: reference 4 → [1,3,4,6]; hit.",
      "OPT-4 step 18: reference 5 → [1,3,5,6]; fault; replace 4.",
      "OPT-4 step 19: reference 6 → [1,3,5,6]; hit.",
      "OPT-4 step 20: reference 7 → [1,3,7,6]; fault; replace 5.",
      "OPT-4 step 21: reference 1 → [1,3,7,6]; hit.",
      "OPT-4 step 22: reference 2 → [2,3,7,6]; fault; replace 1.",
      "OPT-4 step 23: reference 3 → [2,3,7,6]; hit.",
      "FIFO, 5 frames: 16 faults, 7 hits, 11 replacements.",
      "FIFO-5 step 1: reference 1 → [1,-,-,-,-]; fault; fill empty frame.",
      "FIFO-5 step 2: reference 2 → [1,2,-,-,-]; fault; fill empty frame.",
      "FIFO-5 step 3: reference 3 → [1,2,3,-,-]; fault; fill empty frame.",
      "FIFO-5 step 4: reference 4 → [1,2,3,4,-]; fault; fill empty frame.",
      "FIFO-5 step 5: reference 1 → [1,2,3,4,-]; hit.",
      "FIFO-5 step 6: reference 2 → [1,2,3,4,-]; hit.",
      "FIFO-5 step 7: reference 5 → [1,2,3,4,5]; fault; fill empty frame.",
      "FIFO-5 step 8: reference 1 → [1,2,3,4,5]; hit.",
      "FIFO-5 step 9: reference 2 → [1,2,3,4,5]; hit.",
      "FIFO-5 step 10: reference 3 → [1,2,3,4,5]; hit.",
      "FIFO-5 step 11: reference 4 → [1,2,3,4,5]; hit.",
      "FIFO-5 step 12: reference 5 → [1,2,3,4,5]; hit.",
      "FIFO-5 step 13: reference 6 → [6,2,3,4,5]; fault; replace 1.",
      "FIFO-5 step 14: reference 1 → [6,1,3,4,5]; fault; replace 2.",
      "FIFO-5 step 15: reference 2 → [6,1,2,4,5]; fault; replace 3.",
      "FIFO-5 step 16: reference 3 → [6,1,2,3,5]; fault; replace 4.",
      "FIFO-5 step 17: reference 4 → [6,1,2,3,4]; fault; replace 5.",
      "FIFO-5 step 18: reference 5 → [5,1,2,3,4]; fault; replace 6.",
      "FIFO-5 step 19: reference 6 → [5,6,2,3,4]; fault; replace 1.",
      "FIFO-5 step 20: reference 7 → [5,6,7,3,4]; fault; replace 2.",
      "FIFO-5 step 21: reference 1 → [5,6,7,1,4]; fault; replace 3.",
      "FIFO-5 step 22: reference 2 → [5,6,7,1,2]; fault; replace 4.",
      "FIFO-5 step 23: reference 3 → [3,6,7,1,2]; fault; replace 5."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 103–115.",
      "BCSE303L-FAT-D1-2025-2026.pdf, PDF page 2, Q5 (original question screenshot).",
      "Original numerical derivation using Module 5.pdf algorithms; all traces checked by two independent simulations, and OPT fault counts also checked by exhaustive dynamic programming. No official solution is supplied for this question."
    ]
  },
  "0c11f16699460a89": {
    "answer": [
      "With three initially empty frames and the printed 20 book/page references, FIFO gives 12 faults and 8 hits; Optimal gives 10 faults and 10 hits; LRU gives 13 faults and 7 hits.",
      "FIFO miss ratio = 12/20 = 60% and hit ratio = 8/20 = 40%. Optimal miss ratio = 10/20 = 50% and hit ratio = 10/20 = 50%. LRU miss ratio = 13/20 = 65% and hit ratio = 7/20 = 35%.",
      "Optimal performs best on this string, and FIFO happens to outperform LRU by one fault. LRU is not guaranteed to outperform FIFO for every reference string."
    ],
    "points": [
      "Treat the three bookshelves as three page frames; a requested book already on a shelf is a hit, otherwise it is a page fault. Fill empty shelves first, then use the chosen victim rule.",
      "FIFO evicts the earliest inserted resident book; LRU evicts the least recently requested resident book; Optimal evicts the book whose next request is farthest in the future.",
      "Fault ratio + hit ratio = 1 for each algorithm. Count the repeated second request for page1 as a hit, not another fault.",
      "There are three initial empty-frame fills, so replacements are FIFO12−3=9, OPT10−3=7, and LRU13−3=10."
    ],
    "example": [
      "Reference string (20 references): 6, 1, 1, 2, 0, 3, 4, 6, 0, 2, 1, 2, 1, 2, 0, 3, 2, 1, 2, 0.",
      "Trace notation: [F1,F2,...] shows fixed physical frame slots after each reference. A dash means empty. Every initial load is a page fault; a replacement occurs only when an occupied frame is evicted. All frames start empty. For OPT ties, choose the lowest numbered tied frame; other tied choices can give different states with the same minimum fault count.",
      "FIFO, 3 frames: 12 faults, 8 hits, 9 replacements.",
      "FIFO-3 step 1: reference 6 → [6,-,-]; fault; fill empty frame.",
      "FIFO-3 step 2: reference 1 → [6,1,-]; fault; fill empty frame.",
      "FIFO-3 step 3: reference 1 → [6,1,-]; hit.",
      "FIFO-3 step 4: reference 2 → [6,1,2]; fault; fill empty frame.",
      "FIFO-3 step 5: reference 0 → [0,1,2]; fault; replace 6.",
      "FIFO-3 step 6: reference 3 → [0,3,2]; fault; replace 1.",
      "FIFO-3 step 7: reference 4 → [0,3,4]; fault; replace 2.",
      "FIFO-3 step 8: reference 6 → [6,3,4]; fault; replace 0.",
      "FIFO-3 step 9: reference 0 → [6,0,4]; fault; replace 3.",
      "FIFO-3 step 10: reference 2 → [6,0,2]; fault; replace 4.",
      "FIFO-3 step 11: reference 1 → [1,0,2]; fault; replace 6.",
      "FIFO-3 step 12: reference 2 → [1,0,2]; hit.",
      "FIFO-3 step 13: reference 1 → [1,0,2]; hit.",
      "FIFO-3 step 14: reference 2 → [1,0,2]; hit.",
      "FIFO-3 step 15: reference 0 → [1,0,2]; hit.",
      "FIFO-3 step 16: reference 3 → [1,3,2]; fault; replace 0.",
      "FIFO-3 step 17: reference 2 → [1,3,2]; hit.",
      "FIFO-3 step 18: reference 1 → [1,3,2]; hit.",
      "FIFO-3 step 19: reference 2 → [1,3,2]; hit.",
      "FIFO-3 step 20: reference 0 → [1,3,0]; fault; replace 2.",
      "OPT, 3 frames: 10 faults, 10 hits, 7 replacements.",
      "OPT-3 step 1: reference 6 → [6,-,-]; fault; fill empty frame.",
      "OPT-3 step 2: reference 1 → [6,1,-]; fault; fill empty frame.",
      "OPT-3 step 3: reference 1 → [6,1,-]; hit.",
      "OPT-3 step 4: reference 2 → [6,1,2]; fault; fill empty frame.",
      "OPT-3 step 5: reference 0 → [6,0,2]; fault; replace 1.",
      "OPT-3 step 6: reference 3 → [6,0,3]; fault; replace 2.",
      "OPT-3 step 7: reference 4 → [6,0,4]; fault; replace 3.",
      "OPT-3 step 8: reference 6 → [6,0,4]; hit.",
      "OPT-3 step 9: reference 0 → [6,0,4]; hit.",
      "OPT-3 step 10: reference 2 → [2,0,4]; fault; replace 6.",
      "OPT-3 step 11: reference 1 → [2,0,1]; fault; replace 4.",
      "OPT-3 step 12: reference 2 → [2,0,1]; hit.",
      "OPT-3 step 13: reference 1 → [2,0,1]; hit.",
      "OPT-3 step 14: reference 2 → [2,0,1]; hit.",
      "OPT-3 step 15: reference 0 → [2,0,1]; hit.",
      "OPT-3 step 16: reference 3 → [2,3,1]; fault; replace 0.",
      "OPT-3 step 17: reference 2 → [2,3,1]; hit.",
      "OPT-3 step 18: reference 1 → [2,3,1]; hit.",
      "OPT-3 step 19: reference 2 → [2,3,1]; hit.",
      "OPT-3 step 20: reference 0 → [0,3,1]; fault; replace 2.",
      "LRU, 3 frames: 13 faults, 7 hits, 10 replacements.",
      "LRU-3 step 1: reference 6 → [6,-,-]; fault; fill empty frame.",
      "LRU-3 step 2: reference 1 → [6,1,-]; fault; fill empty frame.",
      "LRU-3 step 3: reference 1 → [6,1,-]; hit.",
      "LRU-3 step 4: reference 2 → [6,1,2]; fault; fill empty frame.",
      "LRU-3 step 5: reference 0 → [0,1,2]; fault; replace 6.",
      "LRU-3 step 6: reference 3 → [0,3,2]; fault; replace 1.",
      "LRU-3 step 7: reference 4 → [0,3,4]; fault; replace 2.",
      "LRU-3 step 8: reference 6 → [6,3,4]; fault; replace 0.",
      "LRU-3 step 9: reference 0 → [6,0,4]; fault; replace 3.",
      "LRU-3 step 10: reference 2 → [6,0,2]; fault; replace 4.",
      "LRU-3 step 11: reference 1 → [1,0,2]; fault; replace 6.",
      "LRU-3 step 12: reference 2 → [1,0,2]; hit.",
      "LRU-3 step 13: reference 1 → [1,0,2]; hit.",
      "LRU-3 step 14: reference 2 → [1,0,2]; hit.",
      "LRU-3 step 15: reference 0 → [1,0,2]; hit.",
      "LRU-3 step 16: reference 3 → [3,0,2]; fault; replace 1.",
      "LRU-3 step 17: reference 2 → [3,0,2]; hit.",
      "LRU-3 step 18: reference 1 → [3,1,2]; fault; replace 0.",
      "LRU-3 step 19: reference 2 → [3,1,2]; hit.",
      "LRU-3 step 20: reference 0 → [0,1,2]; fault; replace 3."
    ],
    "sources": [
      "Module 5.pdf (OS_selects), PDF pages 103–115.",
      "BCSE303L-FAT-D2-2023-2024.pdf, PDF page 3, Q6 (original question screenshot).",
      "Original numerical derivation using Module 5.pdf algorithms; all traces checked by two independent simulations, and OPT fault counts also checked by exhaustive dynamic programming. No official solution is supplied for this question."
    ]
  },
  "cf1d81b160fed12f": {
    "answer": [
      "Contiguous allocation: store the entire file in consecutive disk blocks. The directory/FCB records its starting block b and length n. Logical block i maps to physical block b+i, for 0 <= i < n. This provides simple, fast sequential and random access with little allocation metadata.",
      "Its limitations are external fragmentation and difficult growth: enough free blocks may exist in total without one sufficiently large free run. If the next block is occupied, extending a file can require relocation. Reserving excess space wastes capacity. Extent allocation relaxes this by storing a file in several contiguous runs, each described by a start address and length.",
      "Linked allocation: a file is a chain of blocks that may lie anywhere on disk. Each block stores data and a pointer to the next block; the directory stores the first block, and often the last. Any free block can extend the file, so its size need not be known beforehand and there is no external fragmentation at block granularity.",
      "Linked allocation is good for sequential traversal but poor for random access: reaching logical block i requires following the preceding i links. Pointers consume space, scattered blocks hurt locality, and a damaged pointer can lose access to the rest of the chain.",
      "Indexed allocation: each file has an index containing the addresses of its data blocks; the directory points to this index. Index entry i identifies logical block i directly. It supports sequential and random access, flexible growth and no external fragmentation at block granularity. Costs include index storage and extra metadata reads when the index is not cached; a single index block limits file size."
    ],
    "points": [
      "Method       | Metadata               | Random access          | Main space limitation\nContiguous   | Start + length         | Direct calculation     | External fragmentation/growth\nLinked       | Start + next pointers  | Traverse chain         | Per-block pointer overhead\nIndexed      | Index-block pointer    | Lookup index entry     | Index-block overhead",
      "All three can waste space in the final partially filled allocation unit. Saying linked/indexed have no external fragmentation does not mean zero internal fragmentation or perfect physical locality.",
      "Allocation describes where a file’s blocks are stored. File access methods describe how a program requests data; directory structures describe how names are organized."
    ],
    "example": [
      "Contiguous: directory F = (start 20, length 4)\nLogical blocks:  0   1   2   3\nPhysical blocks: 20  21  22  23\nLogical block 2 is physical block 22.",
      "Linked: directory F -> 9 -> 16 -> 1 -> 10 -> 25 -> EOF\nIndexed: directory F -> index block 19\nindex[0..4] = [9, 16, 1, 10, 25]\nTo read logical block 3: linked follows three links; indexed uses index[3] = 10.",
      "FAT variation (from the notes): start = 217; FAT[217] = 618; FAT[618] = 339; FAT[339] = EOF. Next-block links are kept in a volume-wide table, rather than inside each data block. A cached FAT avoids reading intervening data blocks just to follow the chain; it is still a chain, not a per-file array indexed by logical block number."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 112–131: contiguous, linked, FAT, indexed allocation, extents, indirect blocks and performance.",
      "BCSE303L-FAT-B1-2023-2024.pdf, p. 3, Q9(b)."
    ]
  },
  "25a5d74de23cb000": {
    "answer": [
      "Contiguous allocation: store the entire file in consecutive disk blocks. The directory/FCB records its starting block b and length n. Logical block i maps to physical block b+i, for 0 <= i < n. This provides simple, fast sequential and random access with little allocation metadata.",
      "Its limitations are external fragmentation and difficult growth: enough free blocks may exist in total without one sufficiently large free run. If the next block is occupied, extending a file can require relocation. Reserving excess space wastes capacity. Extent allocation relaxes this by storing a file in several contiguous runs, each described by a start address and length.",
      "Linked allocation: a file is a chain of blocks that may lie anywhere on disk. Each block stores data and a pointer to the next block; the directory stores the first block, and often the last. Any free block can extend the file, so its size need not be known beforehand and there is no external fragmentation at block granularity.",
      "Linked allocation is good for sequential traversal but poor for random access: reaching logical block i requires following the preceding i links. Pointers consume space, scattered blocks hurt locality, and a damaged pointer can lose access to the rest of the chain.",
      "Indexed allocation: each file has an index containing the addresses of its data blocks; the directory points to this index. Index entry i identifies logical block i directly. It supports sequential and random access, flexible growth and no external fragmentation at block granularity. Costs include index storage and extra metadata reads when the index is not cached; a single index block limits file size.",
      "For larger files, use multiple or multilevel index blocks. A combined inode scheme uses direct pointers for small files and single-, double- and triple-indirect pointers as the file grows. A double-indirect pointer reaches a block of pointers to index blocks, which then point to data blocks."
    ],
    "points": [
      "Method       | Metadata               | Random access          | Main space limitation\nContiguous   | Start + length         | Direct calculation     | External fragmentation/growth\nLinked       | Start + next pointers  | Traverse chain         | Per-block pointer overhead\nIndexed      | Index-block pointer    | Lookup index entry     | Index-block overhead",
      "All three can waste space in the final partially filled allocation unit. Saying linked/indexed have no external fragmentation does not mean zero internal fragmentation or perfect physical locality.",
      "Allocation describes where a file’s blocks are stored. File access methods describe how a program requests data; directory structures describe how names are organized.",
      "Choose contiguous runs for predictable-size, locality-sensitive files; linked allocation for simple sequential growth; indexed allocation for a general workload requiring direct access and flexible sizes."
    ],
    "example": [
      "Contiguous: directory F = (start 20, length 4)\nLogical blocks:  0   1   2   3\nPhysical blocks: 20  21  22  23\nLogical block 2 is physical block 22.",
      "Linked: directory F -> 9 -> 16 -> 1 -> 10 -> 25 -> EOF\nIndexed: directory F -> index block 19\nindex[0..4] = [9, 16, 1, 10, 25]\nTo read logical block 3: linked follows three links; indexed uses index[3] = 10.",
      "FAT variation (from the notes): start = 217; FAT[217] = 618; FAT[618] = 339; FAT[339] = EOF. Next-block links are kept in a volume-wide table, rather than inside each data block. A cached FAT avoids reading intervening data blocks just to follow the chain; it is still a chain, not a per-file array indexed by logical block number."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 112–131: contiguous, linked, FAT, indexed allocation, extents, indirect blocks and performance.",
      "BCSE303L-FAT-B1-2024-2025.pdf, p. 4, Q9."
    ]
  },
  "d3daee095f2d7167": {
    "answer": [
      "Contiguous allocation: store the entire file in consecutive disk blocks. The directory/FCB records its starting block b and length n. Logical block i maps to physical block b+i, for 0 <= i < n. This provides simple, fast sequential and random access with little allocation metadata.",
      "Its limitations are external fragmentation and difficult growth: enough free blocks may exist in total without one sufficiently large free run. If the next block is occupied, extending a file can require relocation. Reserving excess space wastes capacity. Extent allocation relaxes this by storing a file in several contiguous runs, each described by a start address and length.",
      "Linked allocation: a file is a chain of blocks that may lie anywhere on disk. Each block stores data and a pointer to the next block; the directory stores the first block, and often the last. Any free block can extend the file, so its size need not be known beforehand and there is no external fragmentation at block granularity.",
      "Linked allocation is good for sequential traversal but poor for random access: reaching logical block i requires following the preceding i links. Pointers consume space, scattered blocks hurt locality, and a damaged pointer can lose access to the rest of the chain.",
      "Indexed allocation: each file has an index containing the addresses of its data blocks; the directory points to this index. Index entry i identifies logical block i directly. It supports sequential and random access, flexible growth and no external fragmentation at block granularity. Costs include index storage and extra metadata reads when the index is not cached; a single index block limits file size.",
      "For larger files, use multiple or multilevel index blocks. A combined inode scheme uses direct pointers for small files and single-, double- and triple-indirect pointers as the file grows. A double-indirect pointer reaches a block of pointers to index blocks, which then point to data blocks."
    ],
    "points": [
      "Space efficiency: contiguous allocation has compact metadata but may reserve unused growth space; linked allocation pays for pointers; indexed allocation pays for index blocks, with proportionally greater overhead for tiny files.",
      "Access speed: contiguous runs offer excellent sequential locality and arithmetic random lookup. Linked allocation follows a chain and may incur many seeks. Indexed allocation avoids traversing all earlier data blocks, but uncached index levels add I/O.",
      "Fragmentation: contiguous allocation needs a suitable free run and suffers external fragmentation. Linked/indexed can use scattered free blocks; both may still have a partly unused final block and scattered placement. Larger clusters reduce pointer-management overhead but can increase internal waste.",
      "Scenarios: a fixed-size read-mostly image favors contiguous allocation; a simple append-and-read-sequentially file can use linked allocation; large editable files and database-style random access favor indexed allocation.",
      "Design implication (reasoned application): combine indexed lookup with extents or clustered placement, cache allocation metadata, and allocate near existing blocks when possible. This balances growth, lookup cost and sequential throughput. A free-space bitmap and crash-consistent metadata updates complement allocation but are separate design choices."
    ],
    "example": [
      "Contiguous: directory F = (start 20, length 4)\nLogical blocks:  0   1   2   3\nPhysical blocks: 20  21  22  23\nLogical block 2 is physical block 22.",
      "Linked: directory F -> 9 -> 16 -> 1 -> 10 -> 25 -> EOF\nIndexed: directory F -> index block 19\nindex[0..4] = [9, 16, 1, 10, 25]\nTo read logical block 3: linked follows three links; indexed uses index[3] = 10.",
      "Extents example: F uses (start 20, length 4) and (start 100, length 3). Its seven logical blocks map to 20,21,22,23,100,101,102. Growing the file does not require moving the original four blocks."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 112–131: contiguous, linked, FAT, indexed allocation, extents, indirect blocks and performance.",
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 3, Q9(b).",
      "Workload recommendations are deductions from the access and allocation trade-offs in the notes."
    ]
  },
  "9b5c056f154c38aa": {
    "answer": [
      "Indexed allocation is the best of the three basic methods for large, frequently updated files needing both sequential and random access. For large files, use a multilevel or combined direct/indirect index, rather than assuming one index block can hold every address.",
      "Contiguous allocation provides excellent sequential performance and direct mapping of logical block i to start+i. Its metadata is small, but file growth is difficult when adjacent blocks are occupied. Reserving a large run wastes space; relocation is costly; free space becomes externally fragmented.",
      "Linked allocation grows easily by adding any free block and avoids external fragmentation. However, pointer storage consumes capacity and random lookup must traverse the chain, making updates to arbitrary positions expensive. Sequential traversal works well logically, although scattered placement may cause many disk seeks.",
      "Indexed allocation grows by allocating another free block and adding its address to the index. Updating an existing logical block requires locating its index entry, rather than reading all prior blocks or moving the whole file. Sequential access is possible by walking the index in order. The disadvantages are index space, metadata maintenance and extra I/O for uncached index levels.",
      "Therefore use indexed allocation with cached indexes and locality-aware placement. Extents or clustered runs can improve sequential throughput. This recommendation follows from the workload; indexed allocation is not inherently faster than a contiguous run for every access."
    ],
    "points": [
      "Method       | Metadata               | Random access          | Main space limitation\nContiguous   | Start + length         | Direct calculation     | External fragmentation/growth\nLinked       | Start + next pointers  | Traverse chain         | Per-block pointer overhead\nIndexed      | Index-block pointer    | Lookup index entry     | Index-block overhead",
      "All three can waste space in the final partially filled allocation unit. Saying linked/indexed have no external fragmentation does not mean zero internal fragmentation or perfect physical locality.",
      "Allocation describes where a file’s blocks are stored. File access methods describe how a program requests data; directory structures describe how names are organized.",
      "The phrase “frequently updated” need not mean every update increases size. Indexed allocation supports both in-place block updates and growth without requiring an adjacent free block."
    ],
    "example": [
      "Example: index = [100, 400, 120, 850]. Updating logical block 2 accesses block 120 through index[2]. Appending adds a free block, say 910, and records index[4] = 910.",
      "Illustrative capacity calculation: with 4 KiB blocks and 4-byte addresses, one full index block stores 4096/4 = 1024 addresses, covering 1024 × 4096 = 4 MiB of data. Larger files need additional index levels or another index organization. This example ignores header/reserved-entry overhead."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 112–131: contiguous, linked, FAT, indexed allocation, extents, indirect blocks and performance.",
      "BCSE303L-FAT-C2-2025-2026.pdf, p. 3, Q7.",
      "The 4 KiB calculation is a constructed illustration, not numerical data supplied in the question."
    ]
  },
  "acb3239d612eecb7": {
    "answer": [
      "The three observations identify contiguous allocation (adjacent blocks), linked allocation (scattered blocks connected by pointers), and indexed allocation (a separate structure records all data-block addresses).",
      "Contiguous allocation: store the entire file in consecutive disk blocks. The directory/FCB records its starting block b and length n. Logical block i maps to physical block b+i, for 0 <= i < n. This provides simple, fast sequential and random access with little allocation metadata.",
      "Its limitations are external fragmentation and difficult growth: enough free blocks may exist in total without one sufficiently large free run. If the next block is occupied, extending a file can require relocation. Reserving excess space wastes capacity. Extent allocation relaxes this by storing a file in several contiguous runs, each described by a start address and length.",
      "Linked allocation: a file is a chain of blocks that may lie anywhere on disk. Each block stores data and a pointer to the next block; the directory stores the first block, and often the last. Any free block can extend the file, so its size need not be known beforehand and there is no external fragmentation at block granularity.",
      "Linked allocation is good for sequential traversal but poor for random access: reaching logical block i requires following the preceding i links. Pointers consume space, scattered blocks hurt locality, and a damaged pointer can lose access to the rest of the chain.",
      "Indexed allocation: each file has an index containing the addresses of its data blocks; the directory points to this index. Index entry i identifies logical block i directly. It supports sequential and random access, flexible growth and no external fragmentation at block granularity. Costs include index storage and extra metadata reads when the index is not cached; a single index block limits file size.",
      "For larger files, use multiple or multilevel index blocks. A combined inode scheme uses direct pointers for small files and single-, double- and triple-indirect pointers as the file grows. A double-indirect pointer reaches a block of pointers to index blocks, which then point to data blocks."
    ],
    "points": [
      "Method       | Metadata               | Random access          | Main space limitation\nContiguous   | Start + length         | Direct calculation     | External fragmentation/growth\nLinked       | Start + next pointers  | Traverse chain         | Per-block pointer overhead\nIndexed      | Index-block pointer    | Lookup index entry     | Index-block overhead",
      "All three can waste space in the final partially filled allocation unit. Saying linked/indexed have no external fragmentation does not mean zero internal fragmentation or perfect physical locality.",
      "Allocation describes where a file’s blocks are stored. File access methods describe how a program requests data; directory structures describe how names are organized.",
      "The index is metadata; it does not contain the file’s user data. In linked allocation the next-block address forms the chain; in indexed allocation the position of a pointer identifies the logical block number."
    ],
    "example": [
      "Contiguous: directory F = (start 20, length 4)\nLogical blocks:  0   1   2   3\nPhysical blocks: 20  21  22  23\nLogical block 2 is physical block 22.",
      "Linked: directory F -> 9 -> 16 -> 1 -> 10 -> 25 -> EOF\nIndexed: directory F -> index block 19\nindex[0..4] = [9, 16, 1, 10, 25]\nTo read logical block 3: linked follows three links; indexed uses index[3] = 10.",
      "FAT variation (from the notes): start = 217; FAT[217] = 618; FAT[618] = 339; FAT[339] = EOF. Next-block links are kept in a volume-wide table, rather than inside each data block. A cached FAT avoids reading intervening data blocks just to follow the chain; it is still a chain, not a per-file array indexed by logical block number."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 112–131: contiguous, linked, FAT, indexed allocation, extents, indirect blocks and performance.",
      "BCSE303L-FAT-D1-2025-2026.pdf, p. 1, Q2."
    ]
  },
  "29e767ea2b047556": {
    "answer": [
      "Virtualization abstracts physical resources so multiple isolated execution environments share one machine. The three techniques differ mainly in whether each environment has a separate guest kernel and whether that kernel cooperates with the hypervisor.",
      "Hardware/full virtualization presents virtual CPU, memory, storage and devices to each VM. Each VM runs its own guest OS, normally without requiring that OS to be redesigned for the hypervisor. Hardware support and/or instruction handling by the VMM preserves privileged-operation control. Benefits: different supported OSs on one host, strong separation, consolidation and migration. Challenges: guest-OS memory overhead, device/I/O overhead, CPU contention and management complexity.",
      "OS-level virtualization creates isolated user spaces while sharing one host kernel. Containers isolate processes, filesystems and network views; resource controls limit CPU and memory consumption. Benefits: low per-instance overhead, fast startup and high density. Challenges: guests must be compatible with the shared kernel, a kernel failure affects every container, and secure networking and persistent storage require care.",
      "Paravirtualization makes the guest virtualization-aware. A modified kernel or supported guest interface uses hypercalls to request privileged services from the hypervisor instead of relying entirely on hardware emulation. Benefits: less emulation overhead for cooperating operations and efficient I/O. Challenges: suitable guest support is required, maintaining guest/hypervisor interfaces adds complexity, and performance benefits depend on the workload and hardware.",
      "Hypervisor placement and virtualization technique are separate classifications. Type 1 means the hypervisor operates directly on hardware; Type 2 means it is hosted by an OS. Paravirtualization does not mean Type 2. A fully virtualized VM can also use paravirtualized I/O drivers."
    ],
    "points": [
      "Efficiency: containers usually need the least additional OS memory; full VMs incur separate-kernel costs but support heterogeneous OSs; paravirtual interfaces reduce selected costs through guest cooperation. None creates extra physical CPU or RAM.",
      "Resource management: set CPU shares/limits, memory limits or reservations, storage quotas and network policies. Avoid allocating every resource to peak demand without measuring contention and preserving capacity for failures.",
      "Scenario choices: consolidate supported Windows and Linux server applications using full VMs; deploy many Linux microservices using Docker/LXC containers; use Xen PV guests where supported guest kernels and a cooperative virtualization interface are appropriate.",
      "For a mixed enterprise, containers may run inside full VMs: VMs provide separate-kernel boundaries between teams, while containers provide convenient application packaging and rapid scaling within each VM. This is an applied design example, not a claim that the techniques are mutually exclusive."
    ],
    "example": [
      "Full VM:       Apps A / Guest OS A   | Apps B / Guest OS B\n               +---------- Hypervisor ----------+\n               +---------- Hardware ------------+\nContainers:    Apps A / user space  | Apps B / user space\n               +------ Shared host kernel -------+\n               +---------- Hardware -------------+\nPV VM:         Apps -> PV-aware guest kernel\n                         | hypercalls\n                      Hypervisor -> Hardware",
      "Examples: VMware ESXi illustrates a bare-metal hypervisor running full VMs; Xen supports PV as well as hardware-assisted guests; Docker and LXC illustrate OS-level containers. Kubernetes orchestrates containers rather than being the shared kernel or a hypervisor."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 13–19, 25–38 and 57–62: virtualization, hypervisors, full/PV techniques and containers.",
      "Correction to pp. 30–33: full/PV technique must not be equated with Type 1/Type 2 architecture. Official Xen architecture/concepts: https://handbook.xenproject.org/users/introduction.html and https://handbook.xenproject.org/users/concepts.html ; Docker container isolation/resource controls: https://docs.docker.com/engine/security/",
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 2, Q8."
    ]
  },
  "f3e1a2056850f781": {
    "answer": [
      "A directory maps human-readable names to file information and supports search, creation, deletion, listing, renaming and traversal. The directory’s logical shape affects naming and sharing; its internal data structure also affects lookup speed.",
      "Single-level directory: all files share one directory and therefore need globally unique names. It is simple for a tiny single-user collection, but causes name collisions and makes organization and searching difficult as the number of users/files grows.",
      "Two-level directory: a master file directory selects a user’s file directory. Names need be unique only within that user’s directory, and lookup searches a smaller collection. This separates users, but a basic two-level scheme provides no per-user subdirectory hierarchy and makes cross-user sharing awkward without additional mechanisms.",
      "Tree-structured directory: directories contain files and subdirectories beneath a root. Absolute paths start at the root; relative paths start at the current directory. Files can be grouped by user, project or purpose, duplicate basenames can exist in different directories, and hierarchical permissions help management. Deep paths require multiple component lookups; a strict tree has one parent per object and cannot represent a single shared object in several locations.",
      "Acyclic-graph directory: links allow a file or subdirectory to appear under multiple parents while excluding cycles. Users share one object, so they see updates without maintaining duplicate copies. Management must handle multiple paths, links, deletion and reference counts; preventing cycles requires rules. With hard-link-style references, storage is reclaimed only when no names reference the object and it is no longer in use.",
      "General-graph directory: links may create cycles. It permits flexible sharing but complicates recursive search, backup and deletion. Traversal must track visited objects or otherwise bound link following; simple reference counts cannot reclaim an unreachable cycle, so cycle restrictions or tracing/reclamation techniques are needed."
    ],
    "points": [
      "Efficiency and scalability: single-level collections become unwieldy; two-level structures separate users; trees divide the namespace into manageable subdirectories; graph links avoid duplication at the cost of more complex traversal and lifetime management.",
      "Lookup is not determined by shape alone: an unsorted directory list requires linear search in its entries; a hash index can speed name lookup but must handle collisions. Cached directory information reduces repeated disk accesses. A tree path still resolves one component at a time.",
      "OS influence: UNIX/Linux absolute paths begin at /. Modern systems commonly present a hierarchy and also offer links, so their complete namespace may go beyond a strict tree. Naming convenience, access checks and shared-object semantics influence file retrieval and administration.",
      "Scenario: for a university file server, choose a tree /department/course/student/project to scale organization and apply access rules. If several lecturers need the same shared course material, introduce carefully controlled links to one shared object while avoiding directory cycles. This preserves organization and avoids divergent copies.",
      "Do not equate symbolic links with hard-link reference counts: a symbolic link stores a target path and may dangle after target deletion. The basic graph model describes sharing; actual link semantics determine deletion behavior."
    ],
    "example": [
      "Single level: / -> a.txt, b.txt, c.txt\nTwo level:    MFD -> alice -> report.txt\n                  -> bob   -> report.txt\nTree:         / -> courses -> OS -> notes.txt\nDAG sharing:  alice --+\n                     +--> shared-notes (one object)\n              bob ---+\nGeneral graph: A -> B -> C -> A  (cycle)",
      "Path example: /courses/OS/notes.txt is absolute; from /courses, OS/notes.txt is relative. Lookup resolves courses, then OS, then notes.txt; the file’s allocation metadata subsequently locates its data blocks."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 79–93: directory types and sharing; pp. 106–111: linear-list/hash implementations.",
      "BCSE303L-FAT-B2-2024-2025.pdf, p. 3, Q9(a).",
      "Cycle handling, workload recommendations and the distinction between symbolic links and counted references are standard explanatory reasoning applied to the notes."
    ]
  },
  "5cbec1b7b1080d77": {
    "answer": [
      "Virtualization creates an abstraction of physical CPU, memory, storage and networking so a host can run several virtual machines. Each VM is given virtual hardware and can run its own supported guest OS and applications. The hypervisor creates the VMs, schedules their work, allocates resources and enforces separation.",
      "Its significance is server consolidation, better use of otherwise idle hardware, rapid provisioning/cloning, reproducible test environments, support for different OSs, and easier relocation and recovery of workloads. These benefits reduce hardware and energy requirements when consolidation is planned appropriately.",
      "Type 1 (bare-metal): the hypervisor runs directly on the hardware, with guest OSs above it. This removes a general-purpose host OS from the basic resource path, gives direct control of scheduling and allocation, and usually suits predictable server performance. Example: VMware ESXi.",
      "Type 2 (hosted): the hypervisor runs as an application/service on a general-purpose host OS. It uses the host’s drivers and resource management while presenting virtual hardware to guests. Installation and desktop integration are convenient, making it suitable for development, OS experiments and compatibility testing. Example: Oracle VirtualBox.",
      "Performance comparison: Type 1 normally has fewer intervening layers and is suited to heavily consolidated servers. Type 2 shares resources with the host OS and its applications and can incur additional scheduling/I/O overhead. Actual performance still depends on hardware assistance, drivers, configuration and workload.",
      "Security comparison: Type 1 can have a smaller general-purpose software exposure, but its hypervisor and management interfaces remain critical. Type 2 additionally depends on host-OS security; compromise or failure of that OS can affect its VMs. Both require isolation controls, access restrictions and patching; neither guarantees absolute security."
    ],
    "points": [
      "Architecture | Type 1                      | Type 2\nPlacement    | Directly on hardware        | Above a host OS\nResources    | Hypervisor controls them    | Host OS also schedules them\nTypical use  | Data centre / server cloud  | Desktop / development / tests\nDependency   | Hardware + hypervisor       | Hardware + host OS + hypervisor",
      "Full versus paravirtualized describes the guest/hypervisor interface, not the Type 1/Type 2 placement. A Type 2 product can provide full virtualization.",
      "Consolidation also concentrates risk: one failed host can affect several VMs. Capacity planning, backups and a properly configured failover design address this; virtualization alone is not high availability."
    ],
    "example": [
      "TYPE 1 (bottom to top)\n+----------------+----------------+\n| Applications A | Applications B |\n| Guest OS A     | Guest OS B     |\n+----------------+----------------+\n| Bare-metal hypervisor           |\n+---------------------------------+\n| Physical CPU / RAM / I/O        |\n+---------------------------------+",
      "TYPE 2 (bottom to top)\n+----------------+----------------+\n| Applications A | Applications B |\n| Guest OS A     | Guest OS B     |\n+----------------+----------------+\n| Hosted hypervisor application   |\n+---------------------------------+\n| General-purpose host OS         |\n+---------------------------------+\n| Physical CPU / RAM / I/O        |\n+---------------------------------+",
      "Example: a student tests Linux in VirtualBox on a desktop host (Type 2). An enterprise consolidates supported production server VMs on dedicated ESXi hosts (Type 1). These examples illustrate suitability, not a universal performance ranking."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 2–10, 13–22, 35–38: VM abstraction, benefits, Type 1/Type 2 diagrams and trade-offs.",
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 4, Q9(a)."
    ]
  },
  "89579121bc0caae5": {
    "answer": [
      "Free-space management tracks unallocated storage blocks so file creation/growth can obtain space and deletion/truncation can release it. It must remain consistent with file-allocation metadata to avoid allocating one block to two files or losing track of usable space.",
      "Bitmap: one bit per block marks free/used state. It is compact and supports finding contiguous runs. Linked free list: free blocks hold next-free pointers; allocation removes entries and freeing returns them. Grouping: a free block stores several free-block addresses plus a pointer to the next group. Counting: store each free run as (start, length), reducing metadata for long runs. Bitmap scans have search cost; linked lists find long runs poorly; grouping accelerates bulk allocation; counting is less compact when free space is highly fragmented.",
      "Functions of files: provide a named, persistent logical unit for programs and data. Attributes include name, identifier, location, size, protection, owner and timestamps. Main operations are create, open, read, write, seek/reposition, delete and truncate; closing releases an open handle and associated access state.",
      "File-system implementation is layered: applications call the logical file system for naming, protection and FCB/inode handling; the file-organization module maps logical blocks to physical blocks and manages allocation/free space; the basic file system manages block I/O and caches; device drivers issue hardware-specific commands.",
      "On-disk structures include a volume control block/superblock, directories, per-file FCBs/inodes, data blocks, free-space records and, where needed, a boot control block. In-memory structures include the mount table, cached directory/metadata information, the system-wide open-file table and per-process open-file tables.",
      "Allocation implementations: contiguous allocation stores a start and length for a consecutive run; linked allocation connects scattered blocks, with FAT keeping links in a volume table; indexed allocation stores a file’s data-block addresses in index blocks. Directory implementations include a simple linear list and a hash-assisted name lookup. Sequential, direct and indexed-sequential access describe ways to access records, rather than the disk-allocation method."
    ],
    "points": [
      "Wording note: “functions of file and file implementation methods” is broad. Cover both file operations and the file-system layers/data structures, then name the allocation and directory methods to address both likely interpretations.",
      "On open(path), the OS resolves directory entries, checks access, obtains the FCB/inode and returns a handle referencing open-file state. Later read(handle) uses that state and the block mapping; it need not repeat the complete filename search for every read.",
      "Delete removes the name/reference and frees storage when the file is no longer referenced or in use; truncate reduces file length while retaining the file. Free-space and file-mapping changes must be coordinated.",
      "The detailed bitmap/list/grouping/counting explanation is a standard textbook supplement: the supplied Module 6 notes name free-space management but do not develop these four methods."
    ],
    "example": [
      "Constructed example: blocks 0..9; free blocks {2,3,4,8,9}.\nConvention: 1 = free, 0 = allocated.\nBlock:   0 1 2 3 4 5 6 7 8 9\nBitmap:  0 0 1 1 1 0 0 0 1 1\nFree list: 2 -> 3 -> 4 -> 8 -> 9 -> END\nCounting: (2,3), (8,2)  [start, run length]\nAfter allocating blocks 2 and 3:\nBitmap:  0 0 0 0 1 0 0 0 1 1\nCounting: (4,1), (8,2)",
      "Applications\n    | create / open / read / write\nLogical file system: names, permissions, FCB/inode\n    |\nFile-organization module: allocation + free space\n    |\nBasic file system: block I/O + caches\n    |\nDevice drivers -> storage device"
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 69–78: files and access; pp. 95–111: implementation, FCBs, open/read diagrams and directories; pp. 112–131: allocation.",
      "Supplement: Silberschatz, Galvin and Gagne, Operating System Concepts, 8th ed., Chapter 11 slides 11.35–11.38 (PDF pp. 35–38), free-space methods: https://os-book.com/OS8/os8c/slide-dir/PDF-dir/ch11.pdf",
      "BCSE303L-FAT-C1-2025-2026.pdf, p. 4, Q9(b).",
      "Bitmap example is constructed; the bit convention and all transitions are stated explicitly."
    ]
  },
  "7fad6da754d15fff": {
    "answer": [
      "Virtualization pools physical resources and presents isolated VMs to workloads. Instead of dedicating a lightly used physical server to each application, several VMs share one host under a hypervisor, improving utilization and reducing the number of machines, power and cooling required.",
      "Resource utilization improves through consolidation and controlled sharing: the hypervisor schedules virtual CPUs on physical CPUs, apportions memory, and mediates storage/network access. Workloads with different peak times can share capacity efficiently. Resource reservations, shares and limits help important workloads receive capacity while limiting noisy neighbors.",
      "Scalability improves because administrators can create, clone and configure VMs from templates quickly. Scale up by increasing a VM’s allocated resources where supported; scale out by adding VM instances and distributing application work. Additional physical hosts can expand a managed resource pool. Compatible migration facilities move workloads to rebalance capacity or maintain hosts.",
      "Virtualization does not create unlimited resources. Overcommitting CPU or memory can produce contention, paging and unstable latency; multiple VMs can saturate the same disk or network link. VM startup and resource changes also depend on application support and available host capacity.",
      "Other drawbacks include virtualization/I/O overhead, more complex networking and storage, VM sprawl, licensing and management costs, training needs, and security exposure in the hypervisor or management plane. A host failure can interrupt every VM on it. Separate guest failures are usually contained, but that does not eliminate shared-hardware failures.",
      "Use measured capacity planning, resource limits/reservations, monitoring, secure management access, patching, backups and tested failover. Retain spare capacity to absorb failures. Live migration reduces planned interruption where supported, while high-availability restart and disaster recovery require additional configured facilities."
    ],
    "points": [
      "Consolidation increases useful work per physical host; provisioning speed reduces the time to supply capacity. These are distinct benefits.",
      "Horizontal application scalability requires the application to support multiple instances; merely creating VMs does not distribute its workload automatically.",
      "Migrations between distant offices depend on storage accessibility, CPU compatibility, network bandwidth and latency. They should not be assumed to work with zero downtime under all conditions.",
      "The source scan clips a few initial characters on the left; the visible text clearly asks about utilization, scalability and implementation challenges."
    ],
    "example": [
      "Illustrative consolidation: four services each average 10% of an otherwise identical dedicated host’s CPU. Combining them suggests about 40% average CPU on one host before virtualization overhead, assuming compatible peak patterns. This is only an estimate: simultaneous peaks, RAM, I/O and failure capacity must be checked.",
      "Before: Service A -> Host 1; B -> Host 2; C -> Host 3\nAfter:  VM A + VM B + VM C -> Hypervisor -> Host 1\nScale out: add another host and place new VMs there.\nAvailability: reserve capacity on other hosts for restart."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 6, 9–10, 13–19, 25–38, 63–67: resource allocation, scaling, migration, drawbacks and costs.",
      "BCSE303L-FAT-C2-2025-2026.pdf, p. 4, Q10(b), including original page inspection.",
      "Capacity example and mitigations are reasoned application of the notes, not observed performance measurements."
    ]
  },
  "243fdb73f7a20e41": {
    "answer": [
      "Proposed design: deploy centrally managed clusters of Type 1 hypervisors at suitable company sites, with departmental VMs isolated by resource and network policies. Use separate guest OSs for applications that require them. This gives direct hardware control for production consolidation while keeping site failures and departmental access boundaries explicit.",
      "1. Assess requirements. Inventory servers, applications, OS versions, dependencies, hardware-attached devices and licenses. Measure CPU peaks, working memory, I/O throughput/latency and network demand. Classify business criticality, recovery time targets and acceptable data loss. Identify services that must stay near users or data in particular offices.",
      "2. Select and size the platform. Choose an enterprise Type 1 platform such as a supported ESXi or KVM-based deployment after checking hardware, guest and application compatibility and total cost. Use servers with hardware virtualization support, sufficient RAM, redundant power and suitable storage/network adapters. Plan spare capacity for growth and host failure instead of sizing only for average CPU use.",
      "3. Organize hosts into local clusters/resource pools. Give each department quotas and role-based administration while retaining central oversight. Allocate vCPU, RAM, storage and network resources according to measurements. Use reservations for critical workloads and limits/shares where appropriate; prevent excessive overcommitment and place redundant application VMs on different hosts.",
      "4. Design storage and networking. Use reliable shared or replicated storage appropriate to the cluster design, redundant paths and explicit capacity/IOPS planning. Separate management, migration, storage and VM traffic as needed. Use virtual switches, VLANs and firewall policies to isolate departments. Protect remote-site management over authenticated secure links.",
      "5. Plan geographic operation and recovery. Place latency-sensitive services at a nearby site; manage policies centrally without making every application depend on a distant office’s WAN. Replicate important data/VM backups to a second site and define recovery procedures. Do not assume that ordinary local live migration is automatically suitable for long-distance networks.",
      "6. Provide availability and security. Configure compatible live migration for planned maintenance and cluster restart/failover for host loss. These are different operations: restarting a failed VM can involve downtime and does not restore lost application data by itself. Restrict administrative access, patch hypervisors/guests, harden VM templates, segment management traffic and collect audit logs. Use independent backups and test restoration.",
      "7. Migrate in stages. Start with a pilot and low-risk workloads; benchmark them against their previous deployment. Convert or redeploy applications in small batches, verify dependencies and data integrity, and schedule cutover with rollback copies. Validate department isolation, application performance, host-failure behavior and recovery at the second site.",
      "8. Operate and expand. Monitor CPU ready/contended time, memory pressure, storage latency, network load and capacity. Rebalance workloads, right-size oversized VMs and retire unused instances. Standardize templates, change control, backup schedules and staff training. Add hosts to the pool when measured demand and recovery headroom require it."
    ],
    "points": [
      "Type 1 is appropriate for dedicated enterprise servers; Type 2 is useful for staff test/lab machines but adds a general-purpose host OS to the production dependency chain.",
      "Hardware consolidation alone is not a disaster-recovery strategy. Host redundancy, application redundancy, independent backups and geographic recovery each address different failures.",
      "Illustrative N+1 sizing: if three hosts each provide usable capacity C and any one may fail, total assigned demand must fit within the remaining 2C, while also meeting per-host and placement constraints. Apply this separately to CPU, memory and I/O; do not infer capacity from VM count alone.",
      "Costs include hardware, licensing, implementation, support, maintenance, staff training and energy. Selection must balance these against utilization and availability goals.",
      "This is a proposed deployment plan derived from the notes. The question supplies no workload measurements, site bandwidth or budget, so exact host counts, consolidation ratios and recovery targets cannot be justified."
    ],
    "example": [
      "                 Central management + policy\n                         /            \\\n              secure link            secure link\n                 /                        \\\nSite A: [Type 1 host A1] [Type 1 host A2]   Site B: [Type 1 hosts]\n        | Dept. A VMs | | Dept. B VMs |            | Recovery VMs |\n        +--- redundant storage/network ---+       +--- storage ---+\n                     |                                  |\n                     +---- replication / backups -------+\nDepartment isolation: resource pools + access roles + network rules",
      "Pilot acceptance example: a payroll VM must meet the agreed response-time target during ordinary and failover load, restore from backup successfully, and remain inaccessible to an unrelated department’s administrator. These are proposed acceptance checks, not measured results."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 13–22, 25–38: hypervisor choice, resources and trade-offs; pp. 40–55: storage virtualization; pp. 63–67: networks and costs.",
      "BCSE303L-FAT-D2-2023-2024.pdf, p. 3, Q7(a), explicitly 10 marks within the 15-mark Q7 group.",
      "The staged deployment, N+1 example and acceptance criteria are original design reasoning based on the scenario; the notes do not provide a company-specific deployment plan."
    ]
  },
  "92e1776a99e7a31d": {
    "answer": [
      "Both approaches choose a default file lifetime. Delete-by-default treats files as temporary unless the user marks them for retention; keep-by-default treats files as persistent until the user explicitly removes them. The better default depends on whether the environment mainly produces disposable job output or valuable long-lived user work.",
      "Delete-by-default advantages: automatically reclaims scratch space, prevents forgotten temporary files from accumulating, reduces later cleanup effort and limits the period during which abandoned session data is accessible. It is useful for batch scratch areas, shared lab sessions and disposable test environments.",
      "Delete-by-default disadvantages: a user who forgets to request retention may lose valuable output; users must understand the rule and identify persistent data before logout or job termination. Work spanning sessions is inconvenient, and abnormal termination can make the policy especially hazardous unless retention/recovery is designed carefully.",
      "Keep-by-default advantages: preserves documents and program output across logins and jobs, reduces accidental loss from simply ending a session, and supports collaboration, reuse and long-term projects. It suits personal documents, source code and most persistent user directories.",
      "Keep-by-default disadvantages: unused files accumulate, consume storage and increase backup/administration costs. Users or administrators must explicitly clean up; quotas, retention rules or archive policies may be needed. Old files can also remain accessible longer than intended.",
      "A practical compromise is to keep ordinary user files by default while designating temporary/job directories for automatic cleanup, with a clear retention mechanism and suitable backups for persistent data. Thus the default matches the data’s expected lifetime."
    ],
    "points": [
      "Criterion       | Delete by default       | Keep by default\nStorage cleanup | Automatic               | Requires explicit policy/action\nData-loss risk  | Forgetting to retain    | Lower at logout; deletion still possible\nUser effort     | Mark valuable files     | Remove obsolete files\nBest fit        | Temporary jobs/sessions | Long-lived documents/projects",
      "Retention is not backup: a file kept on the same failed disk can still be lost. Deletion is not guaranteed secure erasure; removing a name/allocation does not by itself prove that storage contents have been wiped.",
      "For shared/open files, cleanup must respect actual reference and open-file lifetime semantics instead of blindly freeing blocks that another process still uses."
    ],
    "example": [
      "Example: a compiler job produces source.c, a final executable and many intermediate temporary files. Keep source.c and the executable in a persistent project directory; automatically reclaim the job’s temporary workspace when the job finishes.",
      "Counterexample: applying delete-at-logout to a student’s assignment directory risks losing a week’s work if the student forgets the “keep” operation. Keeping everything in an unattended scratch directory risks exhausting storage."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 69–71: persistent files, attributes and deletion; p. 89: references and reclamation; pp. 136–138: backups and restoration.",
      "BCSE303L-FAT-D2-2023-2024.pdf, p. 3, Q7(b).",
      "The retention-policy comparison is reasoned analysis of the question; the supplied notes provide underlying file operations and recovery concepts, not this exact policy debate."
    ]
  },
  "4f255088b88c83ba": {
    "answer": [
      "The table below compares an x86 server deployment in the 2023–24 exam context. Interpret “Oracle VM” as Oracle VM Server for x86, not Oracle VirtualBox or Oracle VM Server for SPARC. The question’s “KMV” table heading is a typographical error for KVM.",
      "Feature         | Xen                 | KVM                  | Oracle VM for x86   | VMware ESXi\nPara-virt.      | Classic PV + PV I/O | PV I/O drivers*      | PVM + PVHVM         | PV I/O drivers*\nFull virt.      | Yes (HVM)           | Yes                  | Yes (HVM)           | Yes\nHost CPU**      | x86-64              | x86-64 + VT/AMD-V    | x86-64              | Supported x86-64\nGuest CPU**     | x86 / x86-64        | x86 / x86-64         | x86 / x86-64        | x86 / x86-64\nHost OS         | None below Xen;dom0 | Linux kernel         | None below Xen;dom0 | Own VMkernel\nGuest OS        | Linux/BSD; HVM:more | Linux,Windows,others | Linux,Windows,      | Windows,Linux,\n                | e.g. Windows        |                      | Solaris             | other supported OSs\nVT-x / AMD-V    | HVM:yes; PV:not req.| Required on x86      | HVM/PVHVM:required  | Used for HW virt.\nLive migration  | Yes                 | Yes via tooling      | Yes in server pools | Yes (vMotion)\nLicense         | GPLv2               | GPL                  | Component-specific  | Proprietary",
      "*PV means paravirtualization. Classic PV changes the guest’s privileged-operation interface to use hypercalls. KVM virtio and VMware VMXNET3/PVSCSI are paravirtualized I/O interfaces within otherwise hardware-virtualized VMs. Thus “supports PV” needs this qualification; neither is normally classified as a classic Xen-style PV guest-OS hypervisor.",
      "**The CPU rows intentionally scope the comparison to x86 servers and supported x86 guests; Xen and KVM also have non-x86 implementations. Virtualization does not mean arbitrary CPU instruction-set emulation, and an exact supported guest/CPU list depends on product release.",
      "Xen runs directly on hardware and commonly uses a privileged Linux management domain, dom0, above it. Oracle VM Server for x86 uses this Xen architecture with its supplied Linux dom0. KVM turns the Linux kernel into a hypervisor and typically uses QEMU in userspace for the VM/device model. ESXi uses its own VMkernel rather than requiring a separately installed general-purpose host OS."
    ],
    "points": [
      "Xen and Oracle VM: traditional x86 PV can operate without VT-x/AMD-V; HVM needs hardware virtualization. Oracle PVHVM combines a hardware-virtualized guest with PV drivers.",
      "Live migration is supported, but requires compatible processors, networking, storage and management configuration. ESXi uses vMotion, whose availability also depends on the licensed edition. “Yes” is not a promise of migration between arbitrary hosts.",
      "Licensing: Xen and KVM are open-source GPL projects. Oracle’s Xen/Linux server components have their respective open-source licenses; the Manager and distribution terms are separate. VMware ESXi is proprietary; free-edition availability and commercial entitlements vary over time, so avoid a timeless “free” label.",
      "The full-versus-PV distinction is independent of Type 1-versus-Type 2. Xen is Type 1 while supporting PV and HVM, which corrects the notes’ misleading association of paravirtualization with Type 2."
    ],
    "example": [
      "Xen / Oracle VM Server for x86:\nGuest domains + privileged Linux dom0\n                    |\n             Xen hypervisor\n                    |\n                 Hardware\n\nKVM: Guests -> QEMU + Linux/KVM -> Hardware\nESXi: Guests -> ESXi VMkernel -> Hardware",
      "Example distinction: an unmodified Windows guest using a virtio disk driver in KVM is hardware-virtualized with paravirtualized I/O. A traditional Xen PV Linux guest uses a PV-aware kernel and hypercalls. Both use guest cooperation, but at different interfaces."
    ],
    "sources": [
      "OS_selects/Module 6.pdf, pp. 16–22 and 28–34: hypervisor architecture and virtualization techniques; the detailed vendor matrix requires the following official supplements.",
      "Xen official concepts and architecture: https://handbook.xenproject.org/users/concepts.html and https://handbook.xenproject.org/users/introduction.html ; license: https://xenproject.org/about/",
      "KVM official overview and FAQ (full virtualization, Linux, hardware assistance, PV drivers, licensing and migration): https://www.linux-kvm.org/page/Main_Page and https://www.linux-kvm.org/page/FAQ",
      "Oracle VM 3.4 Concepts Guide, §§2.1–2.2 and 7.1/7.7: https://docs.oracle.com/en/virtualization/oracle-vm/3.4/concepts/vmcon-ovm.html and https://docs.oracle.com/en/virtualization/oracle-vm/3.4/concepts/vmcon-vm.html",
      "Oracle VM 3.4 Installation Guide, §2.1.1.1, host requirements: https://docs.oracle.com/en/virtualization/oracle-vm/3.4/install/vmiug-server-installation.html ; component licenses: https://oss.oracle.com/linux/legal/oracle-list-x86.html",
      "VMware vSphere 6.5 performance guide (PV I/O): https://www.vmware.com/docs/perf_best_practices_vsphere65 ; June 2023 licensing/features guide (vMotion): https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/products/vsphere/vmware-vsphere-pricing-whitepaper.pdf",
      "VMware ESXi 8 architecture/security guidance (VMkernel and hardware assistance; later revision, used for architecture rather than 2023 entitlements): https://www.vmware.com/docs/niap-common-criteria-guidance-supplement",
      "BCSE303L-FAT-B1-2023-2024.pdf, p. 3, Q9(a)."
    ]
  },
  "51e58e7c6f61f38f": {
    "answer": [
      "Use cylinders 0–199 for the stated 200-track disk, initial head 60, and queue 87, 170, 40, 150, 36, 72, 66, 15. Total seek length is the sum of absolute differences between consecutive head positions; stop when all requests have been served.",
      "FIFO/FCFS follows arrival order: 60 → 87 → 170 → 40 → 150 → 36 → 72 → 66 → 15. Movement = 27 + 83 + 130 + 110 + 114 + 36 + 6 + 51 = 557 tracks.",
      "SSTF repeatedly selects the nearest pending track: 60 → 66 → 72 → 87 → 40 → 36 → 15 → 150 → 170. Movement = 6 + 6 + 15 + 47 + 4 + 21 + 135 + 20 = 254 tracks.",
      "For “towards outer track”, assume that the outermost track is numbered 0, so SCAN/LOOK initially move downward. SCAN: 60 → 40 → 36 → 15 → 0 [edge] → 66 → 72 → 87 → 150 → 170. Movement = (60 − 0) + (170 − 0) = 230 tracks.",
      "LOOK, initially toward 0: 60 → 40 → 36 → 15 → 66 → 72 → 87 → 150 → 170. It reverses at the lowest pending request, 15. Movement = (60 − 15) + (170 − 15) = 200 tracks.",
      "If the course instead uses “outer track” to mean the high-numbered end, the direction-dependent answers change. SCAN: 60 → 66 → 72 → 87 → 150 → 170 → 199 [edge] → 40 → 36 → 15, total 139 + 184 = 323. LOOK: 60 → 66 → 72 → 87 → 150 → 170 → 40 → 36 → 15, total 110 + 155 = 265. FIFO and SSTF are unchanged."
    ],
    "points": [
      "State the interpretation of “outer” explicitly: the paper does not map physical inner/outer positions to numbers.",
      "SCAN reaches the disk boundary before reversing; LOOK reverses at the last pending request. Neither requires travelling to the other boundary after the final request.",
      "SSTF is greedy, so its result need not be the smallest total over all possible service orders; downward LOOK uses only 200 tracks here."
    ],
    "example": [
      "SSTF check at track 87: request 40 is 47 tracks away, while 150 is 63 away; therefore 40 must be next, even though the preceding moves were upward.",
      "Downward SCAN costs 30 more tracks than downward LOOK: the extra round trip from request 15 to boundary 0 is 2 × 15 = 30."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2023-2024.pdf, PDF p. 3 (original question).",
      "Module 7.pdf, PDF pp. 14–20 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "aafee9230618de16": {
    "answer": [
      "The disk bounds are 0–199. The head has moved from 35 to 55, so retain the upward direction for SCAN, LOOK, C-SCAN and C-LOOK. The initial 35 → 55 movement is historical and is not included. Count every physical movement, including circular return jumps, and stop at the final pending request.",
      "FCFS: 55 → 20 → 15 → 150 → 90 → 70 → 30 → 45 → 170 → 60 → 195. Total = 35 + 5 + 135 + 60 + 20 + 40 + 15 + 125 + 110 + 135 = 680 cylinders.",
      "SSTF: 55 → 60 → 70 → 90 → 45 → 30 → 20 → 15 → 150 → 170 → 195. Total = 5 + 10 + 20 + 45 + 15 + 10 + 5 + 135 + 20 + 25 = 290 cylinders.",
      "SCAN: 55 → 60 → 70 → 90 → 150 → 170 → 195 → 199 [edge] → 45 → 30 → 20 → 15. Total = (199 − 55) + (199 − 15) = 328 cylinders.",
      "LOOK: 55 → 60 → 70 → 90 → 150 → 170 → 195 → 45 → 30 → 20 → 15. Total = (195 − 55) + (195 − 15) = 320 cylinders.",
      "C-SCAN: 55 → 60 → 70 → 90 → 150 → 170 → 195 → 199 [edge] ⇢ 0 [wrap] → 15 → 20 → 30 → 45. Total = (199 − 55) + (199 − 0) + (45 − 0) = 388 cylinders.",
      "C-LOOK: 55 → 60 → 70 → 90 → 150 → 170 → 195 ⇢ 15 [wrap] → 20 → 30 → 45. Total = (195 − 55) + (195 − 15) + (45 − 15) = 350 cylinders.",
      "These arrow paths provide the complete movement sketches. For a conventional disk-scheduling graph, place cylinder number horizontally and service step downward, then connect each successive position; draw ⇢ return segments dashed because no intervening request is served during the wrap."
    ],
    "points": [
      "Final totals: FCFS 680; SSTF 290; SCAN 328; LOOK 320; C-SCAN 388; C-LOOK 350 cylinders.",
      "The 199 → 0 wrap has length 199, not 200; cylinder count and distance between endpoints are different.",
      "If a marking scheme explicitly excludes return jumps, C-SCAN would be 189 and C-LOOK 170; those are not the total physical distances requested here."
    ],
    "example": [
      "SSTF check at 90: 45 is 45 cylinders away, while 150 is 60 away, so the head reverses toward 45.",
      "SCAN − LOOK = 328 − 320 = 8 = 2 × (199 − 195), exactly the extra boundary excursion."
    ],
    "sources": [
      "BCSE303L-FAT-B1-2024-2025.pdf, PDF p. 4 (original question).",
      "Module 7.pdf, PDF pp. 14–20 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "b6f349547208070b": {
    "answer": [
      "Use the stated disk range 0–199, initial head 150 and queue 120, 78, 90, 38, 160, 63, 198, 10, 75. The initial direction is omitted; the main SCAN/C-SCAN solution assumes upward movement. Treat all listed requests as pending, include circular return distance, and stop once the queue is empty.",
      "FCFS: 150 → 120 → 78 → 90 → 38 → 160 → 63 → 198 → 10 → 75. Total = 30 + 42 + 12 + 52 + 122 + 97 + 135 + 188 + 65 = 743 tracks.",
      "SSTF: 150 → 160 → 198 → 120 → 90 → 78 → 75 → 63 → 38 → 10. Total = 10 + 38 + 78 + 30 + 12 + 3 + 12 + 25 + 28 = 236 tracks.",
      "SCAN upward: 150 → 160 → 198 → 199 [edge] → 120 → 90 → 78 → 75 → 63 → 38 → 10. Total = (199 − 150) + (199 − 10) = 238 tracks.",
      "C-SCAN upward: 150 → 160 → 198 → 199 [edge] ⇢ 0 [wrap] → 10 → 38 → 63 → 75 → 78 → 90 → 120. Total = (199 − 150) + 199 + 120 = 368 tracks.",
      "If initially downward, SCAN is 150 → 120 → 90 → 78 → 75 → 63 → 38 → 10 → 0 [edge] → 160 → 198, total 150 + 198 = 348. C-SCAN is 150 → 120 → 90 → 78 → 75 → 63 → 38 → 10 → 0 [edge] ⇢ 199 [wrap] → 198 → 160, total 150 + 199 + 39 = 388.",
      "For sustained high traffic, recommend SCAN when the objective is a practical balance between throughput and fairness: it avoids repeated global zigzags and gives distant requests a turn in the sweep. In this upward-direction snapshot it costs only 2 tracks more than SSTF, while SSTF can indefinitely delay distant requests when nearby requests keep arriving. C-SCAN is preferable when more uniform waiting across cylinder positions is the priority, at the cost of its return sweep."
    ],
    "points": [
      "FCFS is simple and arrival-fair but wastes travel here; SSTF minimizes the next seek rather than the full workload and can starve distant requests.",
      "SCAN improves sustained responsiveness for requests away from a busy cluster. Under admissible load its sweeps prevent SSTF-style starvation, but the table is not a hard real-time response guarantee.",
      "C-SCAN upward totals 368 including the 199-track return; excluding that return would give 169. With downward movement the corresponding values are 388 and 189.",
      "Do not select an algorithm solely from one finite queue: new-arrival patterns, fairness requirements and latency targets also matter."
    ],
    "example": [
      "At 160, SSTF chooses 198 (38 tracks away) before 120 (40 away). That small comparison determines the complete later order.",
      "Upward SCAN travels 238 rather than SSTF’s 236 because it adds the 198 → 199 → 198 boundary excursion: 2 extra tracks."
    ],
    "sources": [
      "BCSE303L-FAT-B2-2024-2025.pdf, PDF p. 3 (original question).",
      "Module 7.pdf, PDF pp. 12, 14–21 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "93af1f19b6575573": {
    "answer": [
      "The complete original question states cylinders 0–199, current head 53 and initial movement to the left, meaning decreasing cylinder numbers. Queue: 90, 181, 26, 132, 15, 125, 75, 65. Count circular return travel and stop at the last serviced request.",
      "FCFS: 53 → 90 → 181 → 26 → 132 → 15 → 125 → 75 → 65. Total = 37 + 91 + 155 + 106 + 117 + 110 + 50 + 10 = 676 cylinders.",
      "SSTF: 53 → 65 → 75 → 90 → 125 → 132 → 181 → 26 → 15. Total = 12 + 10 + 15 + 35 + 7 + 49 + 155 + 11 = 294 cylinders. The specified sweep direction does not override SSTF’s nearest-request rule.",
      "SCAN left first: 53 → 26 → 15 → 0 [edge] → 65 → 75 → 90 → 125 → 132 → 181. Total = (53 − 0) + (181 − 0) = 234 cylinders.",
      "LOOK left first: 53 → 26 → 15 → 65 → 75 → 90 → 125 → 132 → 181. Total = (53 − 15) + (181 − 15) = 204 cylinders.",
      "C-SCAN left first: 53 → 26 → 15 → 0 [edge] ⇢ 199 [wrap] → 181 → 132 → 125 → 90 → 75 → 65. Total = (53 − 0) + (199 − 0) + (199 − 65) = 386 cylinders."
    ],
    "points": [
      "Totals: FCFS 676; SSTF 294; SCAN 234; LOOK 204; C-SCAN 386.",
      "C-SCAN continues in the same service direction after wrapping: after reaching 199 it serves the upper requests in descending order.",
      "Excluding the wrap would give C-SCAN 187, but total physical arm movement includes the additional 199 cylinders.",
      "LOOK has the lowest total of the requested algorithms for this queue; SSTF’s locally nearest choices do not guarantee the lowest overall travel."
    ],
    "example": [
      "Initial SSTF choice: |65 − 53| = 12, while |26 − 53| = 27, so SSTF first moves right even though the sweep algorithms start left.",
      "SCAN − LOOK = 234 − 204 = 30 = 2 × 15, the extra visit from the lowest request to the edge and back."
    ],
    "sources": [
      "BCSE303L-FAT-C1-2025-2026.pdf, PDF p. 4 (original question).",
      "Module 7.pdf, PDF pp. 14–20 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "84ecb2ff947ee708": {
    "answer": [
      "For an HDD, service time is approximately seek time + rotational delay + actual transfer time, before queueing/controller overheads. Seek time moves the arm to the required track; shorter seeks reduce per-request service time and usually improve I/O throughput, especially for small random requests.",
      "Rotational delay is the wait for the required sector to rotate under the head. For uniformly random angular positions, the average is half a revolution: 30,000/RPM milliseconds. Faster rotation reduces this delay. This formula is a supplemental derivation of the rotational-latency concept in the notes.",
      "Actual transfer time is the time to move the data once the head is positioned; approximately bytes transferred / transfer rate. For large sequential transfers this term dominates and throughput approaches the device transfer rate. For small scattered transfers, seek and rotational overhead can dominate. Request throughput is roughly 1/mean service time for a continuously busy single disk, while byte throughput is bytes completed per unit time.",
      "Scheduling data: queue 82, 170, 43, 140, 24, 16, 190; head 50; cylinders 0–199. The question omits the initial direction, so use upward motion for the main SCAN/C-LOOK result and show the downward alternative. Count the C-LOOK wrap as physical movement.",
      "SSTF: 50 → 43 → 24 → 16 → 82 → 140 → 170 → 190. Total = 7 + 19 + 8 + 66 + 58 + 30 + 20 = 208 cylinders.",
      "SCAN upward: 50 → 82 → 140 → 170 → 190 → 199 [edge] → 43 → 24 → 16. Total = (199 − 50) + (199 − 16) = 332 cylinders.",
      "C-LOOK upward: 50 → 82 → 140 → 170 → 190 ⇢ 16 [wrap] → 24 → 43. Total = (190 − 50) + (190 − 16) + (43 − 16) = 341 cylinders.",
      "If initially downward, SCAN: 50 → 43 → 24 → 16 → 0 [edge] → 82 → 140 → 170 → 190, total 50 + 190 = 240. C-LOOK: 50 → 43 → 24 → 16 ⇢ 190 [wrap] → 170 → 140 → 82, total 34 + 174 + 108 = 316."
    ],
    "points": [
      "Total movement alone is a simplified seek-cost metric; rotational position, request size and controller overhead also influence throughput.",
      "SSTF picks a nearby pending request at every step. SCAN visits the edge before reversing. C-LOOK visits only requested extremes and serves in one direction, skipping service during its return jump.",
      "If wrap movement is deliberately excluded, C-LOOK totals are 167 upward and 142 downward; the physical totals remain 341 and 316.",
      "There is no unique SCAN or C-LOOK total without an initial-direction assumption."
    ],
    "example": [
      "Supplemental illustrative calculation, not an additional paper datum: at 7200 RPM, one revolution takes 60,000/7200 = 8.33 ms, so mean rotational delay is 4.17 ms.",
      "The initial SSTF distances are 7 to cylinder 43 and 26 to cylinder 24; therefore 43 is served first. The C-LOOK return from 190 to 16 costs 174 cylinders even though it serves no request on the way."
    ],
    "sources": [
      "BCSE303L-FAT-C2-2025-2026.pdf, PDF p. 3 (original question).",
      "Module 7.pdf, PDF pp. 9–12, 15–20 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "961bfd2c4e01120c": {
    "answer": [
      "Use the stated bounds 0–249, head 100 and upward initial sweep direction. Although the scenario says requests arrive dynamically, no arrival times are given, so the calculable interpretation is that the complete listed burst is pending at the start; FCFS retains the given arrival order. Different timed arrivals could change every schedule.",
      "FCFS: 100 → 120 → 15 → 180 → 90 → 30 → 200 → 75 → 220 → 10 → 160 → 85 → 140 → 60. Total = 20 + 105 + 165 + 90 + 60 + 170 + 125 + 145 + 210 + 150 + 75 + 55 + 80 = 1450 cylinders.",
      "SSTF: 100 → 90 → 85 → 75 → 60 → 30 → 15 → 10 → 120 → 140 → 160 → 180 → 200 → 220. Total = 10 + 5 + 10 + 15 + 30 + 15 + 5 + 110 + 20 + 20 + 20 + 20 + 20 = 300 cylinders.",
      "SCAN upward: 100 → 120 → 140 → 160 → 180 → 200 → 220 → 249 [edge] → 90 → 85 → 75 → 60 → 30 → 15 → 10. Total = (249 − 100) + (249 − 10) = 388 cylinders.",
      "C-SCAN upward: 100 → 120 → 140 → 160 → 180 → 200 → 220 → 249 [edge] ⇢ 0 [wrap] → 10 → 15 → 30 → 60 → 75 → 85 → 90. Total = (249 − 100) + 249 + 90 = 488 cylinders.",
      "LOOK upward: 100 → 120 → 140 → 160 → 180 → 200 → 220 → 90 → 85 → 75 → 60 → 30 → 15 → 10. Total = (220 − 100) + (220 − 10) = 330 cylinders.",
      "C-LOOK upward: 100 → 120 → 140 → 160 → 180 → 200 → 220 ⇢ 10 [wrap] → 15 → 30 → 60 → 75 → 85 → 90. Total = (220 − 100) + (220 − 10) + (90 − 10) = 410 cylinders.",
      "SSTF gives the smallest seek distance among these schedules: 300 cylinders. This uses distance as a proxy for seek time; exact milliseconds require a drive timing model. For fairness to distant requests under continuing traffic, SCAN and LOOK ensure progress by sweeps, while C-SCAN provides more uniform waiting across positions by serving in one direction. A common fairness-focused choice is C-SCAN, accepting its larger 488-cylinder movement here.",
      "SSTF may postpone a far-away request indefinitely while nearer requests continue arriving, so average seek efficiency does not provide a deadline guarantee. Real-time scheduling also needs deadlines, admission/load control and bounded service-time analysis; none of the six algorithms alone proves those constraints are met."
    ],
    "points": [
      "Totals: FCFS 1450; SSTF 300; SCAN 388; C-SCAN 488; LOOK 330; C-LOOK 410 cylinders.",
      "Initial upward motion applies to the sweep algorithms; SSTF independently chooses cylinder 90 first because it is closest to 100.",
      "Circular totals include the return: C-SCAN wraps 249 cylinders and C-LOOK wraps 210. If explicitly excluded, their totals become 239 and 200, respectively.",
      "Stop at the last pending request rather than adding an unrequested final trip to a boundary. Sweep fairness assumes the device is not overloaded without bound."
    ],
    "example": [
      "A lower-bound check for this finite queue: the head must visit both 10 and 220. Going to 10 first requires (100 − 10) + (220 − 10) = 300 cylinders; going to 220 first requires 120 + 210 = 330. SSTF attains the smaller bound here.",
      "LOOK saves 58 cylinders over SCAN: 388 − 330 = 2 × (249 − 220), the unnecessary trip from the highest request to the edge and back."
    ],
    "sources": [
      "BCSE303L-FAT-D1-2025-2026.pdf, PDF p. 2 (original question).",
      "Module 7.pdf, PDF pp. 12, 14–21 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "5e95ab21eb7c65a9": {
    "answer": [
      "Model shelf indices as disk cylinders. Bounds are 0–2999, initial arm position is 120, and the stated initial sweep direction is left to right (increasing indices). Queue: 58, 2100, 990, 155, 108, 65, 420, 64, 333, 50. Count physical wrap movement and stop when all requests are served.",
      "(a) SSTF: 120 → 108 → 65 → 64 → 58 → 50 → 155 → 333 → 420 → 990 → 2100. Total = 12 + 43 + 1 + 6 + 8 + 105 + 178 + 87 + 570 + 1110 = 2120 shelf intervals.",
      "(b) SCAN: 120 → 155 → 333 → 420 → 990 → 2100 → 2999 [edge] → 108 → 65 → 64 → 58 → 50. Total = (2999 − 120) + (2999 − 50) = 2879 + 2949 = 5828 shelf intervals.",
      "(c) C-SCAN: 120 → 155 → 333 → 420 → 990 → 2100 → 2999 [edge] ⇢ 0 [wrap] → 50 → 58 → 64 → 65 → 108. Total = (2999 − 120) + 2999 + 108 = 5986 shelf intervals.",
      "(d) LOOK: 120 → 155 → 333 → 420 → 990 → 2100 → 108 → 65 → 64 → 58 → 50. Total = (2100 − 120) + (2100 − 50) = 1980 + 2050 = 4030 shelf intervals.",
      "(e) The original paper prints C-SCAN again, so the literal answer is the same as (c): 5986 shelf intervals and the identical path. If this repeated label was intended to be C-LOOK, that alternative is: 120 → 155 → 333 → 420 → 990 → 2100 ⇢ 50 [wrap] → 58 → 64 → 65 → 108; total = (2100 − 120) + (2100 − 50) + (108 − 50) = 1980 + 2050 + 58 = 4088. The C-LOOK interpretation is an explicitly labelled correction hypothesis."
    ],
    "points": [
      "SSTF does not follow the sweep direction: from 120 it chooses 108, distance 12, before 155, distance 35.",
      "There are 3000 shelves, but the distance between shelves 0 and 2999 is 2999 intervals.",
      "For real total robotic-arm travel, a return jump is movement. If a classroom convention excludes it, C-SCAN would be 2987 and the optional C-LOOK would be 2038.",
      "Preserve the paper’s duplicated C-SCAN label instead of silently replacing the fifth subpart."
    ],
    "example": [
      "After servicing 108, SSTF chooses 65 (43 intervals away), ahead of 64 (44 away), 58 (50 away) and 155 (47 away).",
      "SCAN − LOOK = 5828 − 4030 = 1798 = 2 × (2999 − 2100), confirming the boundary excursion calculation."
    ],
    "sources": [
      "BCSE303L-FAT-D2-2023-2024.pdf, PDF p. 3 (original question).",
      "Module 7.pdf, PDF pp. 15–20 (supplied OS_selects notes; algorithm definitions and concepts).",
      "Worked calculations are newly derived from the original question, not an official answer key."
    ]
  },
  "02692c343ec5e305": {
    "answer": [
      "A capability is an unforgeable token or protected reference containing an object identity and permitted operations, such as ⟨results.csv, read⟩. A process presents or invokes it when requesting an operation; the protection mechanism validates the reference and its rights. Untrusted code must not be able to forge a capability or increase its authority.",
      "An ACL organizes permissions by object: a file lists the users or domains allowed to read, write or execute it. A capability list organizes permissions by subject or domain: a process holds references to the objects it may use. ACLs naturally answer “Who can access this file?”; capability lists answer “What may this process access?”. Both can represent an access matrix, and real systems may combine them.",
      "Capabilities support least privilege and delegation: a component can receive access to precisely one resource and a restricted set of operations. Passing a capability can convey authority without giving the recipient every permission associated with the sender’s identity. Delegation follows the system’s transfer rules; where attenuation is supported, the delegated capability can contain fewer rights.",
      "Advantages include fine-grained authority, isolation between mutually untrusted components, explicit resource sharing and reduced damage when a component is compromised. Limitations include capability leakage, the need for protected storage and validation, difficulty discovering all holders of a resource’s capabilities, and potentially complex revocation.",
      "Capabilities are especially useful for sandboxed parsers, browser components, plugins and services needing temporary access to a small set of resources. Conventional ACLs are convenient when administrators mainly need to inspect or revoke access to individual files for named users or groups. A combination can retain identity-based administration while delegating narrow runtime authority.",
      "Transitioning an existing application requires identifying actual resource needs, replacing implicit access through global names with explicit references where required, deciding how capabilities are created and delegated, and designing revocation and audit procedures. Existing libraries may assume broad ambient access, so compatibility work, testing and developer training are necessary. These migration considerations and the concrete applications below supplement the notes."
    ],
    "points": [
      "Possession conveys only the authority encoded in a valid capability; it does not imply unrestricted access.",
      "Revocation is a design problem, not an impossibility: systems may use indirection, tracked derivation or other explicit revocation mechanisms.",
      "Capability design can reduce confused-deputy risks when a service operates on the authority explicitly supplied for the request; safe interfaces and validation are still necessary.",
      "The comparison concerns protected object references, rather than an ordinary user-editable list of filenames and permissions."
    ],
    "example": [
      "Illustrative design: give an image-conversion worker a read-only capability for the selected image and a write capability for a designated output file. It can perform the conversion without receiving authority over the user’s entire home directory. A compromised worker is then constrained by those granted resources.",
      "Supplemental real implementation: the University of Cambridge Capsicum project refines file descriptors with fine-grained rights and provides a capability mode restricting access to global namespaces. Its researchers demonstrated compartmentalization in applications including tcpdump and gzip, illustrating containment of components processing potentially hostile input."
    ],
    "sources": [
      "BCSE303L-FAT-B2-2024-2025.pdf, PDF p. 3, Q10(b) (original question).",
      "Module 7.pdf, PDF pp. 35–39, especially pp. 37–39 (ACLs, capability lists, definition, strengths and challenges).",
      "Supplemental primary source: University of Cambridge, “Capsicum: practical capabilities for UNIX”, https://www.cl.cam.ac.uk/research/security/capsicum/ (concrete capability implementation and application examples).",
      "Newly authored explanation and illustrative design; not an official answer key. Migration discussion is supplemental analysis."
    ]
  },
  "d362f10174737977": {
    "answer": [
      "An access matrix is a protection model whose rows represent subjects or protection domains and whose columns represent objects such as files, devices or domains. Entry A[i,j] contains the operations that subject i may perform on object j. An empty entry grants no rights. The protection mechanism permits a request only when its operation belongs to the relevant entry; permission changes must themselves be authorized.",
      "University example, with columns [Alice’s result, CS101 marks, lab printer]: student Alice has [{read}, ∅, {use}]; the assigned instructor has [∅, {read, write}, {use}]; the registrar has [{read, write, owner}, {read, owner}, ∅]. This illustrative policy lets Alice inspect her result but not change marks, lets the instructor update the assigned course, and lets the registrar administer permissions on the specified owned objects.",
      "Implementation 1 — Access Control Lists: store each nonempty column with its object as subject/domain-and-rights entries. CS101 marks has ACL {instructor: read/write; registrar: read/owner}. This makes it straightforward to inspect who can access one object and revoke that object’s grants. Finding every object accessible to one user may require examining many ACLs.",
      "Implementation 2 — Capability lists: store each nonempty row as protected object/right references held by its subject or domain. The instructor’s list contains ⟨CS101 marks, read/write⟩ and ⟨lab printer, use⟩. This exposes a subject’s authority directly and supports controlled delegation. Finding every capability to an object and revoking distributed copies requires additional mechanisms. An ordinary user-editable list is insufficient because capabilities must be unforgeable.",
      "The following administrative-right details supplement the notes’ brief overview. Copy: a right marked r* can be copied to another subject for the same object, so the change stays within that object’s column. A limited copy grants r without the ability to propagate it further. Owner: owner in A[i,j] authorizes domain i to add or remove rights in object j’s column. Control: when column j represents domain Dj, control in A[i,j] authorizes domain i to remove rights from Dj’s row in the standard textbook model; it does not grant unrestricted permission to invent new rights."
    ],
    "points": [
      "Rows are subject-centered; columns are object-centered. ACLs and capability lists compactly represent the same conceptual matrix.",
      "A full matrix is often sparse, so storing all empty cells wastes space.",
      "Policy decides which permissions should exist; the OS mechanism checks requests and protects permission updates.",
      "Copy and owner concern an object’s column; control concerns a domain’s row. The supplied notes do not give the full formal control-right rule."
    ],
    "example": [
      "Copy: if an instructor holds read* on a course handout, a permitted limited-copy operation can give Alice read access to that same handout without allowing Alice to delegate it again.",
      "Owner: the registrar can remove the instructor’s write permission from the CS101 marks column when the assignment ends.",
      "Control: an administrator domain with control over a teaching-assistant domain can remove the assistant domain’s write permission from its row when that responsibility ends."
    ],
    "sources": [
      "BCSE303L-FAT-C1-2025-2026.pdf, PDF p. 4, Q10(a) (original question).",
      "Module 7.pdf, PDF pp. 35–39 (matrix, operations, ACLs and capabilities), p. 42 (policy versus mechanism), and p. 47 (university file-server case).",
      "Supplemental formal copy, owner and control semantics: Mark Llewellyn, University of Central Florida, protection.pdf, PDF pp. 11–13, https://www.cs.ucf.edu/courses/cgs3763/spr2006/protection.pdf (copy within an object column; owner grants/revokes column rights; control removes rights from a domain).",
      "Newly authored explanation and illustrative university matrix; not an official answer key."
    ]
  },
  "e92b02a826cbcb95": {
    "answer": [
      "Convert the object-centered ACL into a subject-centered capability list by collecting all granted permissions for each user. Omitted user/file entries grant no permission here because no group or default permissions are supplied.",
      "X: {⟨file1.txt, {read, write}⟩, ⟨file2.sh, {execute}⟩}. X has no listed capability for file3.cfg.",
      "Y: {⟨file1.txt, {read}⟩, ⟨file3.cfg, {read, write}⟩}. Y has no listed capability for file2.sh.",
      "Z: {⟨file2.sh, {read, write, execute}⟩, ⟨file3.cfg, {read}⟩}. Z has no listed capability for file1.txt.",
      "Only Y has both read and write access to file3.cfg: Y’s row is R=1, W=1, EXE=0. Z has read only, and X has no listed permission.",
      "Yes, X has execute permission for file2.sh because the supplied entry is R=0, W=0, EXE=1. In this abstract permission table, execute is an independently granted right; read=0 does not alter the given EXE=1."
    ],
    "points": [
      "A value of 1 grants the operation; 0 does not grant it.",
      "Changing ACL organization into capability lists must preserve every permission exactly and create no new rights.",
      "These are logical capability entries. A real capability implementation also protects them against forgery and unauthorized modification."
    ],
    "example": [
      "The ACL entry “file2.sh → X: execute” becomes X’s capability ⟨file2.sh, execute⟩. It remains execute only.",
      "For file3.cfg the reconstructed permissions are X: ∅, Y: {read, write}, Z: {read}; the users with both read and write are therefore {Y}."
    ],
    "sources": [
      "BCSE303L-FAT-C2-2025-2026.pdf, PDF p. 4, Q10(a) (all six ACL rows and three requested subparts visually checked).",
      "Module 7.pdf, PDF p. 35 (matrix and empty entries), p. 37 (ACL versus capability-list organization), and p. 38 (unforgeable capabilities).",
      "Newly derived conversion of the original ACL table; not an official answer key."
    ]
  }
};
