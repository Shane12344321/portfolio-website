window.ATLAS_AI_ANSWERS = {
  "3ef321ce97f4874c": {
    "answer": [
      "AI applications perform tasks such as prediction, recognition, reasoning, planning and decision-making. A model-based agent keeps track of the world using an internal state. A goal-based agent evaluates actions by whether their consequences can achieve a specified goal."
    ],
    "points": [
      "Healthcare — identify suspicious findings in medical images and flag them for clinician review. Finance — score transactions for fraud using amount, location and past behavior.",
      "Transport — perceive lanes and traffic and plan motion for an autonomous vehicle. Manufacturing — use computer vision to find defective parts on a production line.",
      "Education — adapt quiz difficulty and feedback to a student's progress. Agriculture — detect crop disease in leaf images and prioritize plots for inspection.",
      "Retail — rank product recommendations from past interactions and item features. Logistics — choose delivery routes subject to vehicle capacity and deadlines.",
      "Language processing — translate messages between languages using surrounding context. Accessibility — transcribe spoken audio into captions using acoustic and language models.",
      "Model-based agent — update internal state from the previous state, the last action and the current percept. A transition model describes how actions or the world change state, and a sensor model describes what observations mean. A model-based reflex agent chooses an action by applying rules to the updated state.",
      "Goal-based agent — represent the desired state explicitly, predict the effects of actions, then use search or planning to find a path to a goal. Changing the goal can change the plan even when the current state is identical."
    ],
    "example": [
      "Model-based reflex: percept + previous state/action → update internal state → apply rule → action. A robot remembers an obstacle after it leaves the camera's field of view.",
      "Goal-based: current state + action model + goal test → search/plan → first action. A route agent searches for a path to the destination and replans when a road closes."
    ]
  },
  "421491b80c45cad7": {
    "answer": [
      "A* removes cities from OPEN in this order: Lugoj → Mehadia → Drobeta → Craiova → Timisoara → Pitesti → Bucharest. The final route is Lugoj → Mehadia → Drobeta → Craiova → Pitesti → Bucharest, with total cost 504 km."
    ],
    "points": [
      "Use f(n)=g(n)+hSLD(n), where g is the road distance from Lugoj. At each step, remove the city with minimum f and keep the cheapest g found for each city.",
      "Craiova generates Pitesti at g=403 and f=503, plus Rimnicu Vilcea at g=411 and f=604. Timisoara is still on OPEN with f=440, so it is examined first and generates Arad with f=595.",
      "Pitesti generates Bucharest at g=403+101=504 and h=0. Its alternative route to Rimnicu Vilcea gives g=500, so the existing g=411 is kept. Bucharest is then removed as the goal."
    ],
    "example": [
      "Popped city     g     h     f\nLugoj           0   244   244\nMehadia        70   241   311\nDrobeta       145   242   387\nCraiova       265   160   425\nTimisoara     111   329   440\nPitesti       403   100   503\nBucharest     504     0   504",
      "Route cost = 70 + 75 + 120 + 138 + 101 = 504 km. Parent pointers exclude the explored Timisoara branch from the solution."
    ]
  },
  "f3cad4324949b0d4": {
    "answer": [
      "A task environment specifies what the agent must achieve, where it acts and how it interacts with the world. PEAS stands for Performance measure, Environment, Actuators and Sensors."
    ],
    "points": [
      "Fully or partially observable — all decision-relevant state is available through sensing, or some must be estimated. Single-agent or multiagent — one decision-maker acts, or other agents' decisions matter and may cooperate or compete.",
      "Deterministic or stochastic — the state and action fix the outcome, or uncertainty affects the transition. In a strategic environment, uncertainty may arise specifically from other agents' choices.",
      "Episodic or sequential — choices affect only the current episode, or influence later decisions and outcomes. Static, dynamic or semidynamic — the world stays fixed during deliberation, the world changes, or the world stays fixed while performance changes with time.",
      "Discrete or continuous — states, time, actions or observations are countable or take continuous values. Known or unknown — the agent knows the rules for actions and outcomes, or must learn them. Knowledge of rules and observability are independent."
    ],
    "example": [
      "Soccer — P: goal difference, wins, rule compliance and player safety. E: field, ball, teammates, opponents, referee. A: locomotion, kicks, turns and team signals. S: cameras, orientation sensors, joint sensors and audio or game-state feed.",
      "Subsurface ocean exploration on Titan — P: scientific coverage, valid samples, energy reserve, vehicle safety and successful data return. E: ice access point, ocean, currents, terrain and base relay. A: thrusters, steering, sampler, lighting and telemetry. S: sonar, cameras, pressure, temperature, inertial and chemical sensors.",
      "Shopping for used AI books — P: requested edition, acceptable condition, low total price and reliable delivery. E: online sellers, catalogs, marketplaces, reviews and payment services. A: submit queries, filter, add to cart, place or cancel orders. S: listings, prices, ratings, shipping estimates and confirmations."
    ]
  },
  "5041028b7e7a1f9d": {
    "answer": [
      "BFS visits the given tree in level order: A, B, C, D, E, F, G, H, I, J, K, L. The question gives neither a goal nor a depth limit, so the BFS trace exhausts the tree and the DLS comparison illustrates limit ℓ=2."
    ],
    "points": [
      "BFS dequeues at the front and appends children left to right at the rear. It is complete for finite branching and finds the shallowest goal, which is cost-optimal under equal step costs. With a depth-d goal, a goal-on-generation implementation uses O(b^d) time and space in the worst case, where b is the branching factor. A goal-on-pop implementation can generate nodes at depth d+1 before the goal is selected.",
      "DLS follows depth-first order, tests each reached node for the goal and stops expanding at depth ℓ. It uses O(b^ℓ) time and O(bℓ) space with an explicit DFS frontier. It finds reachable goals within the limit when duplicates are handled correctly, may cut off deeper solutions and can find a deeper or more expensive goal before a better one within the limit.",
      "The four evaluation measures are completeness (finds a solution when one exists), optimality (returns a least-cost solution), time complexity (work or nodes processed) and space complexity (peak memory or nodes stored)."
    ],
    "example": [
      "Removed   Queue after adding children\n—         A\nA         B C D\nB         C D E F\nC         D E F\nD         E F G H I\nE         F G H I J\nF         G H I J K\nG         H I J K L\nH         I J K L\nI         J K L\nJ         K L\nK         L\nL         empty",
      "DLS ℓ=2, root at depth 0: A, B, E, F, C, D, G, H, I. J, K and L lie beyond the limit. DLS ℓ=3 visits A, B, E, J, F, K, C, D, G, L, H, I."
    ]
  },
  "048cbdd308852134": {
    "answer": [
      "Use joint states (i,j), the cities occupied at the end of a turn. The initial state is (i₀,j₀) and a goal has i=j. Each turn has cost max of the two road distances, reflecting the wait for the slower leg. Of the proposed heuristics, only straight-line distance divided by 2 is admissible."
    ],
    "points": [
      "(a) For each neighboring pair i′∈N(i), j′∈N(j), choose the joint action (i→i′, j→j′). The successor is (i′,j′), and its step cost is max(road(i,i′),road(j,j′)). Both friends must move each turn under the stated rule. Minimize the sum of turn costs with UCS or A* using the admissible heuristic.",
      "(b) If a meeting plan takes total time T, each friend covers road distance at most T. For a common destination, the triangle inequality gives D(i,j) ≤ total road distance of both friends ≤ 2T. Thus D(i,j)/2 ≤ T. D and 2D can both exceed T when the friends start at opposite ends of a line segment and each uses a road of length 1 to its midpoint. Then D=2 while the meeting takes 1.",
      "(c) Yes. The complete two-city map K₂ has one edge. The two friends swap cities every turn and never finish a turn in the same city. On a complete map with at least three cities, both can move to a third city on turn 1. If 'connected' means merely reachable by paths, any bipartite map started in opposite parts has the same parity obstruction.",
      "(d) Yes. Use a three-edge tail A–B–C–D attached to triangle D–E–F–D, with starts A and D. A and D have no equal-length simple paths to a common endpoint: tail distances add to the odd number 3, and for E or F the simple paths from A require 4 or 5 steps while those from D require 1 or 2. Both walks must take the same number of steps. Therefore any meeting requires a repeated city for at least one friend."
    ],
    "example": [
      "Repeat-required example: (A,D) → (B,E) → (C,F) → (D,D). The second friend visits D at the start and again at the meeting. A mid-road crossing does not satisfy the joint-state goal."
    ]
  },
  "11d380033b12faf3": {
    "answer": [
      "The four approaches to AI are thinking humanly, acting humanly, thinking rationally and acting rationally. A learning agent suits the chess scenario because its move selection improves over many games using feedback from a critic."
    ],
    "points": [
      "Thinking humanly models how people reason, drawing on cognitive science. Acting humanly aims for behavior indistinguishable from human performance, as in the Turing test. Thinking rationally uses formal inference to derive correct conclusions. Acting rationally chooses actions expected to best satisfy a performance measure under the circumstances.",
      "Timeline — 1950: Turing proposes the imitation game. 1956: the Dartmouth workshop helps establish AI as a field. 1950s–60s: symbolic reasoning programs and early language systems explore search, inference and dialogue. From the 1970s, AI winters follow unmet expectations and reduced funding. In the 1980s, rule-based expert systems encode specialist decisions.",
      "Later timeline — 1997: Deep Blue defeats the reigning world chess champion in a match. 2012: AlexNet demonstrates the impact of deep convolutional networks on image recognition. 2016: AlphaGo defeats Lee Sedol using neural networks and tree search. The 2020s see widespread use of large generative models trained on extensive data.",
      "In chess, the performance element maps board positions to legal moves. A critic evaluates performance using game outcomes, tactical errors or a scoring criterion. The learning element uses feedback to improve the position evaluator or move policy. The problem generator encourages informative games or unfamiliar lines."
    ],
    "example": [
      "Board percept → performance element → chosen move → game environment\nGame outcome + performance standard → critic → learning element → updated performance element\nProblem generator → suggested exploratory games or moves",
      "An agent that repeatedly loses after exposing its king receives negative feedback and updates its evaluator, so future searches score similar exposed positions less favorably."
    ]
  },
  "5680c7be61a0701a": {
    "answer": [
      "Classify each task along six dimensions: observability, agents, outcome uncertainty, episodic versus sequential decisions, change during deliberation, and discrete versus continuous state or action variables. The assumptions below specify the task boundary in each case."
    ],
    "points": [
      "Rental bike or car booking — partially observable, multiagent, stochastic, dynamic. Users compete for inventory that can change while the system checks it. Treat independent requests as episodic. Vehicle IDs and booking choices are discrete, while hire times and geographic positions can be continuous. If the agent manages future inventory, decisions become sequential.",
      "Cooking robot — in a controlled kitchen with visible ingredients and reliable scripted actions, fully observable, single-agent, deterministic, sequential and static at a high-level recipe abstraction. Recipe actions and steps are discrete. A physical kitchen can be dynamic and continuous because food heats and robotic controls vary continuously.",
      "Grocery delivery — partially observable, multiagent, stochastic and dynamic because traffic, other couriers and stock change. Treat independent fulfilled orders as episodic at a service level and routing or stock decisions as sequential when later actions depend on earlier ones. Orders are discrete and travel time and movement can be continuous.",
      "Playing chess — fully observable, competitive multiagent, strategic, sequential, static without a clock and discrete. Each legal move has deterministic effects, while the opponent's choice is outside the agent's control. Clocked play is semidynamic while the player is thinking because the position is fixed but the remaining time changes."
    ],
    "example": [
      "A chess move changes the available later moves, so the task is sequential. A rental request modeled as one independent transaction can be episodic even though other users can change availability while that transaction is in progress."
    ]
  },
  "cc3c42c06bd092d1": {
    "answer": [
      "DFS, depth-limited search with L=2, and iterative deepening all find A → D → G. Iterative deepening first succeeds on its L=2 pass."
    ],
    "points": [
      "One graph-stack trace, matching the source's expansion order, keeps one copy of a vertex that is already pending. Starting at A, push newly discovered neighbors in reverse alphabetical order so the earliest alphabetically is popped first. C is already pending when B is popped, so B adds E and F.",
      "DFS visits A, B, E, F, I, H, C, D, G. L=2 visits A, B, E, F, C, D, G. A fresh IDS pass at L=0 visits A. At L=1 it visits A, B, C, D. At L=2 it follows the DLS trace and finds G.",
      "A recursive DFS that marks on entry and considers every neighbor alphabetically can instead visit A, B, C, H, I, F, E, D, G. Path-checking DLS under that convention may revisit C and B on distinct paths within the limit. Both conventions yield the same goal path in this graph.",
      "For general search trees with branching factor b, maximum depth m and shallowest goal depth d: DFS uses O(b^m) time and O(bm) space, can be incomplete on infinite branches and is not cost-optimal. With finite graph marking, DFS is complete for reachable vertices and takes O(V+E) time and O(V) space.",
      "DLS uses O(b^L) time and O(bL) space. With path checking or appropriate depth-aware duplicate handling it covers solutions within the limit, but cannot reach a deeper goal and does not ensure the least cost. IDS is complete for finite b, uses O(b^d) time and O(bd) space, and finds a shortest-depth goal, which is cost-optimal for equal step costs."
    ],
    "example": [
      "Stack top on left\nDFS: [A] → [B,C,D] → [E,F,C,D] → [F,C,D] → [I,C,D] → [H,C,D] → [C,D] → [D] → [G]\nL=2: [A] → [B,C,D] → [E,F,C,D] → [F,C,D] → [C,D] → [D] → [G]",
      "Every route to G must traverse D–G. Its direct parent path from A has two edges, so G cannot be reached with L=0 or L=1."
    ]
  },
  "dadefe2b5f8ccb0b": {
    "answer": [
      "A* returns a → c → f → z, total cost 4+12+9=25, when z wins the f=25 tie and equal-cost alternatives retain the original parent. The path a → b → e → z also has optimal cost 25."
    ],
    "points": [
      "Choose the node with the smallest f=g+h, where g is cumulative cost and h(z)=0. After a, c has f=4+18=22, b has f=9+14=23, and d has f=7+18=25.",
      "Expanding c adds f at g=16, f-value 24, and e at g=21, f-value 26. Expanding b improves e to g=9+11=20 and f-value 25. The next node is f, which generates z at g=16+9=25.",
      "OPEN now contains d, e and z, each with f-value 25. Taking z first gives the source key's expansion order. A different tie rule can expand d or e first. D cannot improve the cost to f, and e offers a second path to z at the same cost."
    ],
    "example": [
      "Popped    OPEN after expansion, ordered by f-value\na         c(22), b(23), d(25)\nc         b(23), f(24), d(25), e(26)\nb         f(24), d(25), e(25)\nf         d(25), e(25), z(25)\nz         goal, cost 25"
    ]
  },
  "8055eded34644848": {
    "answer": [
      "Encode a queen placement as an 8-gene chromosome with one queen per column. Each gene is the queen's row in that column. Maximize fitness equal to the number of non-attacking queen pairs. A solution has fitness C(8,2)=28."
    ],
    "points": [
      "Initialization — randomly choose eight row values from 1 through 8 for each chromosome. For columns i and j, their queens attack if xᵢ=xⱼ or |xᵢ−xⱼ|=|i−j|. Every chromosome already has distinct columns, so evaluate just row and diagonal conflicts.",
      "Evaluation — sample population: 15863725 has two attacking pairs and fitness 26. 24253722 has ten attacking pairs and fitness 18. 24253724 has eight attacking pairs and fitness 20. 12345678 has 28 attacking pairs and fitness 0.",
      "Selection — with fitness-proportionate roulette selection and total fitness 64, the four probabilities are 26/64, 18/64, 20/64 and 0. Tournament selection is another option. Suppose 15863725 and 24253722 are selected.",
      "Crossover — at a one-point cut after gene 6, combine the first parent's prefix 158637 with the second parent's suffix 22 to obtain 15863722. Columns (4,8) and (7,8) attack, giving fitness 26.",
      "Mutation — with a small probability, replace a row value with a randomly chosen value in 1..8. Here changing column 8 from row 2 to row 4 gives 15863724, with zero attacks and fitness 28.",
      "Replacement — use offspring to form the next generation and optionally keep the best parent via elitism. Repeat evaluate, select, cross, mutate and replace until fitness 28, or stop at a generation or time limit and report the best board found."
    ],
    "example": [
      "Parents: 1 5 8 6 3 7 | 2 5 and 2 4 2 5 3 7 | 2 2\nChild:   1 5 8 6 3 7 | 2 2\nMutant:  1 5 8 6 3 7 | 2 4  →  28 non-attacking pairs"
    ]
  },
  "c81f44a6717737b9": {
    "answer": [
      "PEAS describes the external success criteria, surroundings, actions and observations for each agent. Define each relative to the specific task and the agent's interface."
    ],
    "points": [
      "Taxi driver — P: safety, legal driving, travel time, comfort and revenue. E: roads, passengers, other vehicles, pedestrians, weather and signals. A: steering, throttle, brakes, indicators and display. S: cameras, radar or lidar, GPS, speed and vehicle sensors.",
      "Manufacturing robot — P: correct parts, throughput, low defects, low waste and safety. E: workstation, conveyor, part bins, tools and humans. A: arm joints, gripper, tool changer and conveyor controls. S: machine vision, joint encoders, proximity and force sensors.",
      "Soccer player — P: wins, goals scored and prevented, teamwork and rule compliance. E: pitch, ball, goals, players and referee. A: locomotion, turning, kicking and communication. S: cameras, localization, orientation and audio or team-message input.",
      "Auction bidder — P: maximize expected value minus price and fees, with a budget constraint. E: auction platform, lot, competing bidders, rules and closing time. A: place, increase or withdraw a bid when allowed. S: current bid, time left, item details and bid-status notifications.",
      "Used AI book shopper — P: correct title and edition, acceptable condition, low landed cost and reliable delivery. E: marketplaces, vendors, listings and shipping/payment services. A: query, filter, add to cart, order or cancel. S: listings, condition reports, ratings, shipping estimates and confirmations."
    ],
    "example": [
      "The auction agent reads a current bid of ₹700 through its platform API, checks its budget and valuation, and submits a bid. Reading status is sensor input, submitting a bid is an actuator action, and the net value of the outcome is part of the performance measure."
    ]
  },
  "7dc07631a458df48": {
    "answer": [
      "A learning agent with a model-based performance element fits the autonomous-driving scenario. Its internal model summarizes the percept history and current readings into a world state. Learning from accumulated driving data can improve the models used to interpret the scene and choose actions."
    ],
    "points": [
      "Use current sensor observations, previous estimates and the vehicle's recent actions to maintain an internal state with road geometry, traffic signals, tracked objects, velocities and uncertainty. This is model-based behavior in a partially observable environment.",
      "The performance element uses that internal state to predict road users' motion, evaluate candidates and issue steering, braking or acceleration. A critic evaluates safety margins, legality, comfort and outcomes, and the learning element updates perception, prediction or decision parameters from feedback and historical data.",
      "A problem generator can propose informative scenarios for simulation and testing, such as pedestrians emerging from occlusion. The performance element can use learned parameters and retain a changing scene state during a drive."
    ],
    "example": [
      "Earlier observations show a cyclist approaching behind a parked van. When the cyclist is briefly hidden, the updated world model retains an estimate of their position and motion. The performance element slows down and leaves room before the cyclist reappears.",
      "Sensor history + current observations → state estimation → prediction and planning → vehicle controls\nRecorded outcomes and feedback → learning element → improved models"
    ]
  },
  "8bc6793ef7dacca5": {
    "answer": [
      "BFS finds a → e → f in two edges. DFS that permits revisiting vertices can get trapped in the b–c–d subgraph, so prefer BFS for the pictured search."
    ],
    "points": [
      "The directed edges are a→b, a→e and e→f, with edges both ways between every pair in {b,c,d}. The left branch has cycles and no route to f.",
      "For a left-first trace, use successor order a:[b,e], b:[d,c], d:[b,c], c:[d,b]. BFS checks paths by increasing edge count. With goal test on dequeue, it removes a, ab, ae, abd, abc, aef and succeeds.",
      "Under that order, DFS examines a, ab, abd, abdb, abdbd, abdbdb, … . It repeatedly extends the b↔d cycle and leaves ae pending. Choosing c before d changes the cycle trace but still keeps this revisiting DFS in the left branch. With cycle checking, DFS can exhaust the left branch and eventually find aef."
    ],
    "example": [
      "BFS queue, next path on the left\n[a]\n[ab, ae]\n[ae, abd, abc]\n[abd, abc, aef]\n[abc, aef, abdb, abdc]\n[aef, abdb, abdc, abcd, abcb]\naef is removed: goal",
      "DFS stack, next path on the left\n[a]\n[ab, ae]\n[abd, abc, ae]\n[abdb, abdc, abc, ae]\n[abdbd, abdbc, abdc, abc, ae]\n… continues down the cycle"
    ]
  },
  "6de5ef90c1bd5380": {
    "answer": [
      "UCS reaches G2 with cost 13 via S → D → C → G2, G1 with cost 14 via S → A → G1, and G3 with cost 15 via S → D → E → G3. G2 is the minimum-cost goal."
    ],
    "points": [
      "Order the priority queue by cumulative cost and break ties alphabetically. This trace keeps one best pending entry per node, and marks a node settled when popped. Continue after settling the first goal to obtain all three goal costs.",
      "S enqueues A(5), D(6), B(9). A improves B to 8 and discovers G1(14). D discovers C(8) and E(8). B is first in the B/C/E tie, but its paths yield A(10) and C(9), which do not improve either cost.",
      "C discovers F(15) and G2(13). E discovers G3(15). F is selected before G3 at cost 15 and offers D(17) and G3(23). Neither improves a stored cost."
    ],
    "example": [
      "Popped  Priority queue after pop/expansion       Settled so far\n—       S0                                       —\nS       A5, D6, B9                               S\nA       D6, B8, G1:14                            S A\nD       B8, C8, E8, G1:14                        S A D\nB       C8, E8, G1:14                            S A D B\nC       E8, G2:13, G1:14, F15                    S A D B C\nE       G2:13, G1:14, F15, G3:15                 S A D B C E\nG2      G1:14, F15, G3:15                        S A D B C E G2\nG1      F15, G3:15                               S A D B C E G2 G1\nF       G3:15                                    S A D B C E G2 G1 F\nG3      empty                                    S A D B C E G2 G1 F G3",
      "Tree updates: S adds A, D and B. A reparents B from S to A and adds G1. D adds C and E. C adds F and G2. E adds G3. B, F and all goals add no branches to the best-parent tree.\nS\n├─ A(5)\n│  ├─ B(8)\n│  └─ G1(14)\n└─ D(6)\n   ├─ C(8)\n   │  ├─ F(15)\n   │  └─ G2(13)\n   └─ E(8)\n      └─ G3(15)"
    ]
  },
  "b048191f9bfbd176": {
    "answer": [
      "Fittest to least fit: x₂ (23) > x₁ (9) > x₃ (−16) > x₄ (−19)."
    ],
    "points": [
      "x₁ = 65413532: (6+5)−(4+1)+(3+5)−(3+2) = 11−5+8−5 = 9.",
      "x₂ = 87126601: (8+7)−(1+2)+(6+6)−(0+1) = 15−3+12−1 = 23.",
      "x₃ = 23921285: (2+3)−(9+2)+(1+2)−(8+5) = 5−11+3−13 = −16.",
      "x₄ = 41852094: (4+1)−(8+5)+(2+0)−(9+4) = 5−13+2−13 = −19."
    ],
    "example": [
      "Rank   Chromosome   Fitness\n1      87126601      23\n2      65413532       9\n3      23921285     −16\n4      41852094     −19"
    ]
  },
  "728de0fe0b2b47a5": {
    "answer": [
      "Hill climbing repeatedly moves to a neighbor with a higher objective value. A local maximum, plateau or ridge can make the permitted local moves give no useful improvement even though a better state exists elsewhere."
    ],
    "points": [
      "Local maximum — every neighbor has a lower value, but another peak is higher. Plateau — nearby states share one value. A shoulder may have an uphill exit beyond several equal steps. Ridge — useful progress follows a direction or sequence poorly represented by the current move operators, leading to slow zigzags or a stall.",
      "Simple or first-improvement hill climbing stops scanning neighbors at the first uphill move. Steepest-ascent evaluates the full neighborhood and takes the largest improvement. Stochastic hill climbing samples an uphill move, sometimes with probability weighted by improvement. These change efficiency and the routes taken, and can still stop if the state has no uphill neighbor.",
      "Limited sideways moves can cross a shoulder and cap the risk of cycling. Random-restart hill climbing samples new starting points to reach different basins. Changing or enlarging the neighborhood can make moves along a ridge accessible. Simulated annealing is a related method that can accept some downhill moves, with their probability falling as the temperature cools."
    ],
    "example": [
      "Objective ↑\n                                /\\ global maximum\n       /\\ local maximum        /  \\\n _____/  \\____ plateau _______/    \\____ → state",
      "At the top of the smaller peak, any one-step move decreases the value. A random restart on the right-hand slope or a sequence of moves that first descends can reach the higher peak."
    ]
  },
  "942c28911c476860": {
    "answer": [
      "PEAS specifies the agent’s Performance measure, Environment, Actuators, and Sensors. In (a), model the shopper as the agent. In (b) and (c), model the chatbot and home controller as the agents."
    ],
    "points": [
      "(a) Online shopper. Performance: find suitable products within budget, complete a secure checkout, and minimize search time. Environment: site, catalogue, cart, stock, sellers, and other customers. Actuators: search, filter, click, add to cart, and submit checkout. Sensors: listings, prices, availability notices, reviews, and order status.",
      "(b) Customer-service chatbot. Performance: correct resolutions, low latency, customer satisfaction, and appropriate escalations. Environment: users, conversation, service records, and human support. Actuators: send replies, request details, look up or update a ticket, and transfer to an agent. Sensors: user messages, conversation history, and authorized record or tool results.",
      "(c) Home automation controller. Performance: comfort, safety, energy efficiency, and response time. Environment: rooms, occupants, appliances, and relevant outside conditions. Actuators: adjust heating and cooling, switch or dim lights, and control devices. Sensors: temperature, light, motion, occupancy, and equipment status.",
      "The online shopping and support scenarios are partially observable, stochastic, sequential, discrete and multi-agent. Shopping has hidden inventory and other customers, and a chatbot cannot directly observe user intent. A simplified timing-sensitive model treats them as semi-dynamic while the current page or message is being processed. Live prices, inventory, or incoming messages can make a deployment dynamic.",
      "A simplified home controller is fully observable if all relevant device and room state is sensed, deterministic if the model fixes actuator effects and ignores disturbances, sequential, continuous in variables such as temperature, and single-agent if occupants are treated as inputs. The semi-dynamic assumption freezes the sampled state during a decision while delay affects performance. Actual occupancy and temperature may change during that decision."
    ],
    "example": [
      "For a room that is too cold, a temperature reading is the sensor input, the thermostat command is the actuator output, and reaching the target with low energy use is the performance criterion."
    ]
  },
  "b8987febfc61a816": {
    "answer": [
      "(a) A bank can combine transaction and behavior anomaly detection, account-network analysis, and risk scoring to flag suspicious activity early and route it for a suitable intervention.",
      "(b) An expert system uses a knowledge base and inference engine to apply domain expertise to case facts and deliver an explainable recommendation."
    ],
    "points": [
      "Fraud detection: a supervised model can learn patterns from confirmed fraud cases. Anomaly detection also catches departures from a customer’s normal amount, time, location, merchant category, or device pattern. Score at authorization time for a step-up check or review.",
      "Anti-money-laundering monitoring: aggregate activity across time and accounts to detect unusual transaction sequences such as rapid movement of money through linked entities. Graph analysis helps identify clusters of related accounts. An investigator reviews the context and determines whether to escalate.",
      "Risk assessment: combine transaction features and customer history into a score, prioritize higher-risk cases, and calibrate thresholds using false positives, missed events, and analyst feedback.",
      "Expert system components are a domain knowledge base of facts and production rules, working memory for current case facts, an inference engine, and a user or explanation interface. Forward chaining applies rules to known facts. Backward chaining tests the premises needed for a proposed diagnosis or conclusion.",
      "Applications include fault diagnosis, equipment troubleshooting, clinical decision support, and configuration or eligibility checks in narrow rule-rich domains."
    ],
    "example": [
      "For equipment diagnosis, a rule can conclude likely fan failure when the system is hot and measured fan speed is zero. The engine can show these observed facts and the rule it fired."
    ]
  },
  "05490d1df22f9519": {
    "answer": [
      "A* returns B → C → E → J at minimum cost 3 + 5 + 5 = 13. B → D → C → E → J ties at cost 2 + 1 + 5 + 5 = 13."
    ],
    "points": [
      "Rank the open frontier by f(n) = g(n) + h(n), with g the sum of traversed edge costs and h(J) = 0. Use a parent pointer for each best-known route.",
      "Pop B (g=0, h=8, f=8). Add C (3,5,8), D (2,7,9) and A (6,10,16). Pop C and add E (8,3,11).",
      "Pop D. Its route to C costs 3, tying C’s existing g. Its route to E costs 10, so retain E at g=8. Pop E and add J (13,0,13) and I (13,1,14). Pop J and recover the path using parent pointers."
    ],
    "example": [
      "g[start] = 0, g[other states] = ∞\nOPEN = min-priority queue containing start with key h(start)\nwhile OPEN is nonempty:\n    pop state u with smallest current f(u)\n    if u is goal: return reconstructed parent path and g[u]\n    for each edge u → v with cost c:\n        candidate = g[u] + c\n        if candidate < g[v]:\n            g[v] = candidate, parent[v] = u\n            insert or update v with key g[v] + h(v), reopening if needed\nreturn failure"
    ]
  },
  "4a667c3451f1ae8c": {
    "answer": [
      "Place eight queens on the 8×8 board so that no two share a row, column, or diagonal. One solution is (1, 5, 8, 6, 3, 7, 2, 4), where entry i gives the queen’s row in column i."
    ],
    "points": [
      "Initial state is the empty tuple. A state (r₁, …, rₖ) stores queen rows in the first k columns. Place a queen in column k+1 on a row in 1…8 that is unused and safe.",
      "For any existing queen (i, rᵢ), reject candidate (j, rⱼ) if rᵢ = rⱼ or |rᵢ − rⱼ| = |i − j|. Placing one per column enforces the column constraint automatically.",
      "Each legal placement costs one. The goal is a tuple of length eight. Recursive depth-first backtracking tries safe rows and undoes a placement when the next column has no safe row. Each completed solution has depth and cost eight.",
      "There are 92 placements on a labelled board, or 12 fundamental placements when rotations and reflections are considered equivalent."
    ],
    "example": [
      "Rows 1 through 8, with columns read left to right\nQ . . . . . . .\n. . . . . . Q .\n. . . . Q . . .\n. . . . . . . Q\n. Q . . . . . .\n. . . Q . . . .\n. . . . . Q . .\n. . Q . . . . ."
    ]
  },
  "c499c4bc9914335c": {
    "answer": [
      "DFS visits A, B, D, F, E, C, G. IDS first reaches G during the depth-2 pass. The solution path in both searches is A → C → G."
    ],
    "points": [
      "Use the drawing’s left-to-right child order and suppress revisiting ancestors on a path. The link F–E makes E reachable through B and F in the unrestricted DFS.",
      "DFS pursues B’s branch A → B → D until D is exhausted, returns to B, then explores F and E. After backtracking to A it explores C → G.",
      "IDS restarts depth-limited DFS from A at each limit. Depth 2 can check F but cannot proceed along F → E, which would take a third edge."
    ],
    "example": [
      "DFS: A, B, D, F, E, C, G\nIDS limit 0: A\nIDS limit 1: A, B, C, E\nIDS limit 2: A, B, D, F, C, G (stop)"
    ]
  },
  "0aa257faeddc6836": {
    "answer": [
      "Represent a candidate as a feasible order and machine assignment for the plant’s jobs. Hill climbing replaces it with the best strictly improving neighbor. Simulated annealing can accept a temporary cost increase and pass through schedules that hill climbing discards."
    ],
    "points": [
      "Build an initial schedule with a dispatch rule such as earliest due date. Enforce job precedence, machine capacity, release times, and worker availability in schedule construction. Score a schedule with a weighted combination of makespan, tardiness, and idle time.",
      "Generate neighbors by swapping eligible jobs, moving a job earlier or later, or reassigning it to a compatible machine. Recompute finish times and only consider feasible neighbors. Repeat until no neighbor reduces the objective. Local minima, equal-score plateaus, and neighborhoods that omit useful coordinated changes can halt progress.",
      "For annealing, sample a feasible neighbor and calculate Δ = cost(new) − cost(current). Accept if Δ ≤ 0, otherwise accept with probability exp(−Δ/T). Gradually lower T and retain the best schedule seen. Larger T allows more exploration, and smaller T favors improvements."
    ],
    "example": [
      "Three machines process each job in order M1 → M2 → M3, with times A=(8,9,2), B=(3,9,7), C=(6,8,1), D=(8,1,5). The order ADBC finishes at time 37. Its three adjacent swaps give DABC=43, ABDC=39, and ADCB=46, so hill climbing stops. At T=4, annealing can accept ADBC → ABDC with probability exp(−2/4) ≈ 0.61, then accept ABDC → BADC, finishing at time 34."
    ]
  },
  "801d2f7b759892a1": {
    "answer": [
      "The four listed tasks are crossword, N-queens, Tower of Hanoi, and Ludo. The first three are fully observable, deterministic, sequential, static, discrete, and single-agent in their standard puzzle models. Ludo adds dice and other players."
    ],
    "points": [
      "Crossword. Performance: fill all entries correctly, preferably quickly. Environment: fixed clue list, grid, and crossing constraints. Actuators: enter, replace, or erase letters. Sensors: clues, current cells, and crossing letters. The board and clues are visible, moves have predictable outcomes, and earlier choices constrain later ones.",
      "N-queens. Performance: place all N queens without conflict, with low search effort. Environment: N×N board and attack constraints. Actuators: place, remove, or move a queen. Sensors: occupied cells, placed-queen count, and detected attacks. All placements are visible, transitions are rule-determined, and partial placements constrain the rest.",
      "Tower of Hanoi. Performance: move the whole stack to the destination legally, using as few moves as possible. Environment: three pegs, disks and stacking rules. Actuators: move one exposed disk to a legal peg. Sensors: peg contents and disk order. Every disk is visible and an earlier move changes later legal moves.",
      "Ludo. Performance: get all own pieces home first while managing captures and risks. Environment: board, dice, current player, piece locations, and opponents. Actuators: roll the die and choose a legal piece to move. Sensors: current roll, turn and board layout. It is multi-agent, stochastic, sequential and discrete. The public board, turn, and current roll are fully observable in standard Ludo. A model that includes opponents’ hidden strategies is partially observable. A turn-based model freezes the board during deliberation. The world evolves as other players take turns, and play with a clock can be semi-dynamic."
    ],
    "example": [
      "Unlike an unknown future roll, a hidden current piece would make the board partially observable. Dice make the transition stochastic even when every current board location is visible."
    ]
  },
  "58df1e7f356564ec": {
    "answer": [
      "Use a model-based route planning agent. It maintains an updated model of the road network and the taxi’s location, and computes a route to the destination. A utility-based choice within that architecture balances time, fuel, tolls, and customer preferences."
    ],
    "points": [
      "Challenges include rapidly changing traffic, closures and unsafe roads, weather effects, uncertain or delayed sensor readings, tolls and rider constraints, and the need to replan quickly without sending drivers on constantly changing detours.",
      "Build a directed road graph with intersections as nodes and legal segments as edges. Combine GPS and traffic, weather, closure and toll feeds with historical trip estimates. Maintain current position, the destination, and time-dependent edge attributes. Reject illegal or closed segments.",
      "Use a weighted cost, for example estimated minutes plus a customer-adjusted penalty for fuel and tolls. Run Dijkstra or A* for a snapshot with nonnegative weights, or a time-dependent route algorithm if edge costs depend on arrival time. Recompute after meaningful changes and present alternatives and voice instructions.",
      "Measure trip time and fuel, arrival-time prediction error, replanning latency, and rider feedback. The model-based component updates internal state from percepts and the previous action. The planner predicts and scores the effects of possible routes."
    ],
    "example": [
      "GPS / traffic / weather / toll feeds\n                ↓\n         Internal road model ← prior route and driver position\n                ↓\n       Route planner + utility score ← destination/preferences\n                ↓\n         Navigation and rerouting → driver\n                ↑____________________ new trip feedback"
    ]
  },
  "3eca30bc69013502": {
    "answer": [
      "(a) The 7 L jug ends with exactly 4 L after (0,0) → (0,11) → (7,4) → (0,4) → (4,0).",
      "(b) UCS removes A, D, B, E, F, C, G from the frontier with the stated tie order among equal costs. The actual minimum-cost path is A → D → F → G with cost 3 + 2 + 3 = 8."
    ],
    "points": [
      "For the jugs, state (x,y) gives litres in the 7 L and 11 L jugs. Start at (0,0). The goal test is x=4. Actions fill or empty either jug, or pour between jugs until the source is empty or the destination is full. BFS with one unit per action finds a shortest action sequence.",
      "Fill the 11 L jug. Pour into the empty 7 L jug until full, leaving 4 L in the 11 L jug. Empty the 7 L jug and pour in those remaining 4 L.",
      "For UCS, use the directed arrows and rank by g. After A, the frontier contains D at 3 and B at 5. Expanding D adds E and F at 5. Take ties B, E, F. B adds C at 6 and F adds G at 8. Expanding C gives a worse route to G at 14. Stop when G is removed at 8.",
      "UCS is complete with finite branching and edge costs bounded below by a positive ε, and is optimal in this graph. In the general search-tree bound, time and space are O(b^(1+floor(C*/ε))), where b is branching factor and C* is the optimal path cost. This trace removes seven nodes, including the goal, and generates successors for six."
    ],
    "example": [
      "UCS removals by cumulative cost\nA(0) → D(3) → B(5) → E(5) → F(5) → C(6) → G(8)\nRecovered path\nA ─3→ D ─2→ F ─3→ G"
    ]
  },
  "4549f4c87eb9f7d5": {
    "answer": [
      "The optimal solution has four moves. Move the blank Right, Down, Right, Right, swapping it with tiles 1, 2, 6, and 7 in that order."
    ],
    "points": [
      "Use f = g + h, with unit cost g per move and h the count of misplaced numbered tiles, excluding the blank. Initially tiles 1, 2, 6, and 7 are misplaced, so h=4. Each slide can fix at most one numbered tile. This is an admissible lower bound of four moves.",
      "At the start, Right has f=4 and Down has f=6. After Right, Down has f=4 and the unused Right branch has f=6. After Right–Down, Right has f=4 and the unused Left and Down branches have f=6. After Right–Down–Right, Right reaches the goal with f=4 and the unused Up and Down branches have f=6. Undo moves return to a cheaper known state.",
      "Rows 3 and 4 remain 8 9 10 11 and 12 13 14 15. The four-move path reaches the goal at the initial lower bound, proving optimality."
    ],
    "example": [
      "Blank moves | Row 1    | Row 2    | g  h  f\nStart       | _ 1 3 4  | 5 2 6 7  | 0  4  4\nR           | 1 _ 3 4  | 5 2 6 7  | 1  3  4\nRD          | 1 2 3 4  | 5 _ 6 7  | 2  2  4\nRDR         | 1 2 3 4  | 5 6 _ 7  | 3  1  4\nRDRR        | 1 2 3 4  | 5 6 7 _  | 4  0  4"
    ]
  },
  "81af7a8a09672b12": {
    "answer": [
      "A hill climber that scores only immediate supports gets stuck in the block world. A heuristic that checks each block’s entire support chain lets hill climbing dismantle a misleading stack and rebuild the goal."
    ],
    "points": [
      "Use stacks written bottom to top. Start with [B C D A]. The goal is [A B C D]. A legal move takes the top block of a stack and puts it on the table or on another clear block.",
      "Local score gives +1 to each block with the right immediate support and −1 otherwise, treating the table as a support. The start scores 0 since C is on B and D is on C. Move A to the table to reach [B C D] | [A], score 2. Any next move removes a correct immediate support, so strict hill climbing stops even though B is still on the table.",
      "For a global score, let k be the number of links in a block’s actual support chain all the way to the table. Add +k if the chain matches the goal support chain, otherwise add −k. Moving a high block off an incorrect chain can now improve the score. Once a correct foundation is built, stacking the next required block earns a larger reward."
    ],
    "example": [
      "Stacks bottom → top     Move                  Global score\n[B C D A]               start                 −10\n[B C D] | [A]           A to table             −5\n[B C] | [D] | [A]       D to table             −3\n[B] | [C] | [D] | [A]   C to table             −2\n[A B] | [C] | [D]       B onto A               +1\n[A B C] | [D]           C onto B               +5\n[A B C D]               D onto C              +10"
    ]
  },
  "63ced8926bdc0639": {
    "answer": [
      "Use a utility-based agent that predicts the cost and comfort consequences of alternative schedules. It can minimize electricity charges while enforcing minimum comfort and appliance deadlines."
    ],
    "points": [
      "Performance measure — electricity cost, time spent outside the residents’ comfort range, and completion of requested appliance cycles by their deadlines.",
      "Environment — the house and its rooms, residents, controllable equipment, outdoor weather and the electricity grid with time-varying prices.",
      "Actuators — HVAC modes and setpoints, smart light switches and dimmers, and start or defer commands for the dishwasher and washing machine.",
      "Sensors — room temperature and occupancy sensors, appliance status and power readings, the weather forecast feed and the real-time tariff feed.",
      "Stochastic — residents and weather can behave differently from forecasts. Dynamic — room temperatures, occupancy and tariffs may change during planning. Sequential — pre-cooling now and scheduling appliances now affect later costs and comfort.",
      "Predict room temperatures and usage over a future window. Compare feasible schedules by their expected cost and comfort penalty. Execute the first action, update the model from fresh observations and plan again."
    ],
    "example": [
      "Temperature, occupancy, forecast and prices → estimate current state → predict outcomes for candidate schedules → score cost and comfort → send HVAC, lighting and appliance commands.",
      "Run the dishwasher in a cheaper period before its deadline. Pre-cool an occupied room on a cheap tariff if that keeps its temperature within the comfort band through the later price peak."
    ]
  },
  "404a3d38b3c58117": {
    "answer": [
      "(a) The Roomba is a model-based, goal-based agent. It uses a map and its cleaned-area record to plan actions toward a completely clean room.",
      "(b) A goal test says whether an outcome meets the objective. A utility function ranks outcomes by desirability and lets the agent compare trade-offs even when several options meet the goal."
    ],
    "points": [
      "A goal-based cleaner can represent its state by its current position and the set of cleaned cells. It predicts how actions change those quantities and creates a coverage plan that avoids unnecessary revisits. It replans if a new obstacle blocks the route.",
      "The world model supplies predicted next states. The goal and planner determine which states to pursue. That planning is why the Roomba in the question is classified as goal-based.",
      "A utility-based agent scores outcomes on a numerical scale. With uncertain outcomes it compares expected utility, using both the possible scores and their probabilities. If the Roomba explicitly scored energy, noise and cleaning quality, it could also use utility-based decision making."
    ],
    "example": [
      "Roomba schematic\nSensors → update position, map and cleaned-area record\n                      ↓\nGoal (all reachable cells clean) → coverage planner → motors and brush\n                                        ↑\n                               predicted action effects",
      "Taxi example — several routes reach the same destination. A utility-based taxi can prefer a route with lower collision risk and cost, even when a shorter route is slightly faster."
    ]
  },
  "507b905ba3be909f": {
    "answer": [
      "With zero-based (row, column) coordinates, an optimal path is (0,0) → (0,1) → (0,2) → (1,2) → (1,3) → (1,4) → (2,4) → (2,5) → (3,5) → (4,5) → (5,5). Its cost is 10, treating entry to G as a normal move of cost 1."
    ],
    "points": [
      "Set g(S)=0 and insert S into a min-priority queue. Pop the state with the smallest cumulative cost g. Generate its orthogonal non-wall neighbours and use g′=g+1 for ordinary cells and g′=g+2 for swamp cells. Store a new parent and queue entry only when g′ improves that cell’s best known cost.",
      "For example, expanding (2,2) at cost 4 gives (3,2) at cost 5 and swamp (2,3) at cost 6. Expanding (3,2) at cost 5 also reaches swamp (4,2) at cost 7.",
      "Stop once G is popped. The first pop settles that cell’s least cost because every step has positive cost. The route has ten unit-cost steps and avoids all swamps. The start-to-goal Manhattan distance is 5+5=10, an independent lower bound on any path’s cost."
    ],
    "example": [
      "Pop order grouped by g (row/column tie-break within each group)\n0:  (0,0)\n1:  (0,1) (1,0)\n2:  (0,2) (2,0)\n3:  (1,2) (3,0)\n4:  (1,3) (2,2) (3,1)\n5:  (1,4) (3,2)\n6:  (0,4) (2,3) (2,4) (4,1)\n7:  (0,5) (2,5) (4,2) (5,1)\n8:  (3,5) (4,3) (5,0) (5,2)\n9:  (4,4) (4,5) (5,3)\n10: (5,5) GOAL"
    ]
  },
  "f852a5bc5d829e8d": {
    "answer": [
      "Starting at S as stated in the setup, h₁ returns S → B → C → G at cost 6. With h₂, the key breaks the f=10 tie in favour of G and returns S → A → G at cost 10. Breaking that tie in favour of B instead gives the cost-6 route.",
      "With A as the start and the drawn edges treated as undirected, h₁ returns A → S → B → C → G at cost 7 and h₂ returns A → G at cost 9."
    ],
    "points": [
      "A* pops the lowest f=g+h from OPEN and uses the parent chain when G is popped. Starting at S with h₁, f(B)=2+3=5 and f(A)=1+8=9. Pop B and then C with f(C)=4+1=5. C generates G with f(G)=6.",
      "With h₂ from S, f(A)=1+3=4 and f(B)=2+8=10. A generates G with f(G)=10. Popping G now returns 10. Popping B first discovers C with f(C)=5, which improves G to g=6.",
      "An admissible heuristic satisfies h(n)≤h*(n) at every node. The true costs on the undirected graph for S, A, B, C, G are 6, 7, 4, 2, 0. In particular h₂(B)=8>4 and h₁(A)=8>7, so both violate admissibility on the undirected reading even though h₁ finds the shortest routes in these traces.",
      "The key treats routes as forward from S, so the only route from A is directly to G and h*(A)=9. Under that interpretation h₁ is admissible and consistent, and h₂ still overestimates at B. Admissibility gives the optimality guarantee for A* tree search or graph search with reopenings. Consistency allows graph search to settle a node once."
    ],
    "example": [
      "Literal A start, with undirected edges\nh₁: A → candidates S(f=6), G(f=9) → B(f=6) → C(f=6) → G(f=7).\nh₂: A → candidates S(f=6), G(f=9) → S offers B(f=11) → G(f=9)."
    ]
  },
  "373acf74d8b20bed": {
    "answer": [
      "Hill climbing got stuck because every immediate move from the local peak reduced the objective. Simulated annealing could accept a temporary decrease, cross to another basin and then climb to the higher peak."
    ],
    "points": [
      "Steepest-ascent hill climbing — evaluate the neighbours of x, choose a neighbour y of maximum objective, and replace x with y only if F(y)>F(x). If no strictly better neighbour exists, return x. Each accepted move improves the score.",
      "Simulated annealing — start with x and temperature T, sample a neighbour y and set Δ=F(y)−F(x). Accept if Δ≥0, and accept a negative Δ with probability exp(Δ/T) for T>0. Lower T over time and track the best state visited.",
      "At high temperature, the penalty for a decrease is more tolerable and the search explores more basins. At low temperature, it spends more effort improving promising states. A finite annealing run can still miss the global maximum, especially if it cools too quickly.",
      "Random-restart hill climbing attacks the dependence on the starting basin. Run hill climbing from several independently sampled starts and retain the best peak found. If a run reaches a global peak with probability p, k independent runs succeed at least once with probability 1−(1−p)^k."
    ],
    "example": [
      "Along a chain with scores 3 → 7 → 5 → 10, hill climbing from 3 stops at 7. Simulated annealing can take 7 → 5 with probability exp(−2/T), then accept 5 → 10. Random restart can instead begin on the far side of the valley."
    ]
  },
  "e6d170bfa4449348": {
    "answer": [
      "Use PEAS to specify each task’s performance measure, environment, actuators and sensors. Classify the environment with respect to the observations and decisions the agent actually has."
    ],
    "points": [
      "Surgical robot — P: procedural precision, patient safety and successful completion. E: patient, operating room and surgical team. A: robotic arms and instruments. S: imaging, cameras, force and vital-sign sensors. In a real procedure, it is partially observable, stochastic, dynamic, sequential and continuous. Sensor readings cover only part of the patient’s state, physiological responses can vary and each motion changes subsequent options.",
      "Real-time speech translator — P: faithful translation, natural output and low latency. E: conversation, speakers, languages and background noise. A: speech synthesis, subtitles or text display. S: microphone and available conversational context. It is partially observable, stochastic, dynamic and sequential. Intent can be ambiguous, sound is noisy, new speech arrives continuously and earlier words help resolve later ones.",
      "Pose-detection fitness trainer — P: accurate pose estimation, timely feedback and safe form. E: user, workout area, varied lighting and motion. A: visual overlays and audio or haptic feedback. S: camera, pose or motion measurements and optional wearables. It is stochastic, dynamic and sequential for live coaching. Pose can be nearly fully observable with ideal sensor coverage and partially observable when joints are occluded. Motion is continuous.",
      "Face-recognition entry system — P: low false acceptance and rejection rates, low delay and secure access. E: entrances, users, their credentials and lighting. A: lock, display and alarm. S: camera, infrared or liveness sensor and an optional badge reader. It is partially observable and stochastic because masks, lighting and presentation differences can obscure identity. It is episodic when each access attempt is judged independently. The scene is dynamic during live capture and effectively static for a frozen image. The access decision itself is discrete."
    ],
    "example": [
      "For a simplified surgical simulator, assume complete sensing and exact actuator effects to model the controlled motion as fully observable and deterministic. In the physical operating room, tissue motion and bleeding are examples of residual uncertainty."
    ]
  },
  "9f543edbbc743ed7": {
    "answer": [
      "The traffic controller combines a utility-based decision mechanism with a learning architecture. Utility ranks timing plans for the present traffic state. Learning improves its traffic model and decision policy over time."
    ],
    "points": [
      "A performance element estimates traffic state from road sensors, cameras, GPS and weather data. It predicts the effects of changing green times, coordinating intersections or giving emergency vehicles priority.",
      "The utility function can reward throughput and penalize average travel delay, fuel consumption and safety risk. City-defined priorities determine the weights. Enforce hard constraints such as safe phase changes and any mandatory emergency rules before comparing feasible actions.",
      "A critic compares outcomes such as observed queues, travel times and incidents against the performance standard. The learning element uses feedback and historical patterns to update traffic forecasts or timing policies. A problem generator can propose alternatives for evaluation in simulation.",
      "The same system can be both types. Utility describes how it chooses an action. Learning describes how it changes its future choices based on experience."
    ],
    "example": [
      "Sensors → state estimate → performance element (predict, score utility, select) → signal timers → traffic\nTraffic outcomes → critic → learning element → updated model or policy → performance element",
      "After a festival, the critic measures the observed effect of extending green time on the outbound corridor. At a similar event the updated model can anticipate the surge and favour that timing when the predicted benefits outweigh the delay elsewhere."
    ]
  },
  "1ce40de7203ffac7": {
    "answer": [
      "From A to the highlighted goal R, the first successful depth limit is 4. The path is A → C → G → L → R."
    ],
    "points": [
      "Run depth-limited DFS from the root with limits 0, 1, 2, 3, then 4. Visit children from left to right and test the goal when visiting each node, including a node at the current depth limit.",
      "At limits up to 3, the search cannot see R. At limit 4, it finishes the reachable first subtree under B, backtracks to A, enters C and follows G → L → R. It stops before visiting D in that iteration.",
      "Iterative deepening first finds a shallowest goal. This gives minimum path length when each edge has unit cost."
    ],
    "example": [
      "Left-to-right visit sequences\nLimit 0: A\nLimit 1: A B C D\nLimit 2: A B E F C G D H\nLimit 3: A B E I F J K C G L D H M N\nLimit 4: A B E I F J K O P C G L R"
    ]
  },
  "c916e84e7f8b0e73": {
    "answer": [
      "Greedy best-first search pops A, E, F and I. Its returned route is A → E → F → I with edge cost 140+99+211=450."
    ],
    "points": [
      "Order the frontier by h(n) alone and skip previously expanded states. Starting from A, E has the lowest heuristic among E, C and B. Expanding E offers F with h=178 and G with h=193, so F goes first. F offers I with h=0, which is popped next.",
      "Add actual edge costs to calculate a route’s cost. The source key also lists 431 by summing heuristic estimates. The actual edge-cost total is 450.",
      "The alternative A → E → G → H → I costs 140+80+97+101=418. Greedy best-first search can miss the cheapest route because its priority ignores the accumulated cost."
    ],
    "example": [
      "OPEN, sorted by h, after each expansion\nA: E(253), C(329), B(374)\nE: F(178), G(193), C(329), B(374)\nF: I(0), G(193), C(329), B(374)\nI: goal popped, stop"
    ]
  },
  "7d38c7e467ee84e6": {
    "answer": [
      "The printed initial board has tile 2 twice and no tile 3. Every legal move swaps the blank with an adjacent tile and preserves the tile counts. The printed goal is therefore unreachable and there is no optimal move sequence for the board as printed.",
      "If the 2 at row 2, column 1 is a typo for 3, the corrected board has an optimal solution of 42 moves."
    ],
    "points": [
      "Validate the tile set before running A*. For a valid board use g(n)=number of moves and h(n)=number of misplaced numbered tiles, excluding the blank. Each move can put at most one numbered tile in its goal position, so h is admissible and consistent. Generate legal blank swaps, pop by minimum f=g+h and recover the path from parents.",
      "For the corrected board, h=12 initially. Its U, D, L and R blank moves have f scores 14, 12, 13 and 13 respectively. The D move puts tile 6 in its goal cell and goes first under the prescribed heuristic.",
      "The key also suggests changing the other 2, at row 1, column 2, into 3. That gives 27 inversions and the blank in row 3 from the bottom. The sum 30 is even, unlike the goal’s odd sum of 1, so that alternate correction is unsolvable. Changing the lower 2 gives 26 inversions and the correct parity.",
      "To verify the 42-move optimum for the lower-2 correction, iterative-deepening A* with the stronger Manhattan-distance lower bound ruled out thresholds 30, 32, 34, 36, 38 and 40. The blank changes checkerboard colour on every move, so the path length has to be even for this start and goal. A valid 42-move solution meets that lower bound."
    ],
    "example": [
      "For the lower-2 correction only, move the blank in these directions (spaces are for readability)\nLURDRRU LLLDRDL DRULURD DRRUULL DDRRUUL LLDDRRR\nReplaying the 42 moves gives rows [1 2 3 4], [5 6 7 8], [9 10 11 12], [13 14 15 blank]."
    ]
  },
  "c96b853054b8a605": {
    "answer": [
      "A genetic algorithm searches with a population of candidate solutions. Fitness-based selection gives useful candidates more influence, crossover combines their features, and mutation introduces variation. Replacing the population repeats the search over generations."
    ],
    "points": [
      "Encoding — choose a chromosome that represents a candidate and supports sensible variation. A binary string works for an integer or subset. A tour needs a permutation-preserving crossover or a repair step.",
      "Initialization — produce a diverse population of valid candidates, randomly or with selected heuristic seeds. A narrow starting pool restricts the features available for recombination.",
      "Fitness — evaluate each candidate against the objective and enforce or penalize constraint violations. A fitness measure that rewards the wrong behaviour can lead to better scores without useful solutions.",
      "Selection — tournament or rank selection favours effective candidates while allowing some weaker candidates to reproduce. Excessive selection pressure can cause premature convergence.",
      "Crossover and mutation — recombine useful partial structures and introduce occasional new alleles. Too little mutation allows the pool to stagnate, and too much destroys useful structures.",
      "Replacement and termination — form the next generation and optionally copy a small elite to preserve the best score found. Stop at a target fitness, a generation budget or a stagnation limit. The method can find near-optimal solutions without a general finite-run guarantee of optimality."
    ],
    "example": [
      "Maximize the number of 1s in a five-bit string. Select 11100 and 00111 (fitness 3 each). Cut after the third bit. One child is 111|11 = 11111 (fitness 5, the optimum) and the other is 001|00 = 00100 (fitness 1). Selection and elitism can keep the stronger child. A low-rate bit flip can restore alleles lost elsewhere in the population."
    ]
  },
  "3bab1c9d16436065": {
    "answer": [
      "The claimed system is Artificial Superintelligence (ASI) if its ability really generalizes across domains and it consistently outperforms top human experts. Learning arbitrary new skills suggests generality, and expert-level superiority across domains is the extra claim that distinguishes ASI from human-level artificial general intelligence."
    ],
    "points": [
      "Thinking humanly asks whether internal cognitive processes resemble human reasoning, learning, and memory. Assess this by comparing mechanisms or cognitive predictions with human evidence. Human-like language alone does not identify the mechanism.",
      "Acting humanly asks whether observable behavior resembles that of humans, as in a Turing-style conversational evaluation. This concerns how a system behaves toward people and can involve language, knowledge, reasoning, and learning.",
      "Thinking rationally asks whether conclusions follow sound rules of reasoning, such as formal deduction from premises or a justified way of reasoning under uncertainty. Correct inference is the criterion.",
      "Acting rationally asks whether the system takes actions expected to achieve its goals given its evidence and available options. This accommodates planning, learning, and uncertainty. The strongest behavioral description in the prompt is its consistently better decisions, which fits acting rationally. Human-like reasoning and natural communication also relate to the two human-centered views.",
      "A narrow AI is limited to a task or task family even if it beats humans there. General intelligence transfers across domains at roughly human-level breadth. The claimed combination of breadth and consistently superhuman judgement is what suggests ASI."
    ],
    "example": [
      "A system that plans an experiment to maximize expected information gained given budget and time acts rationally. A system that explains its plan in ordinary human conversation also displays an acting-humanly capability."
    ]
  },
  "53e6be4fc5a16b0e": {
    "answer": [
      "An autonomous taxi in city traffic faces a partially observable, stochastic, sequential, dynamic, continuous and multi-agent environment. A fixed-program assembly arm in a guarded, controlled cell can be modelled as fully observable, deterministic, sequential within an assembly, static while choosing an action, continuous in physical motion, and single-agent."
    ],
    "points": [
      "Taxi observability and uncertainty: sensors have blind spots, intentions are hidden, and rain or changing traffic can alter outcomes. A maneuver affects later position and options, so the task is sequential. The world changes while the taxi deliberates, and time, location, speed, and steering are continuous. Other drivers and pedestrians act independently.",
      "Factory arm observability and uncertainty: in the ideal cell, all relevant poses and fixture states are sensed and repeatable commands have predictable effects. A guarded cell with held parts is static between choices. Joint angles, position, speed and contact forces are continuous even when command sequences are discretized.",
      "Factory arm ordering and agents: actions within each assembly depend on earlier assembly steps, making an assembly sequential. Independent completed cycles can be treated as separate episodes. A single controlled arm in an isolated cell has no competing agent. A live conveyor, slip, or nearby independent robots changes those modelling assumptions."
    ],
    "example": [
      "A taxi approaching an occluded crosswalk has to account for a pedestrian it cannot see. An arm placing a part in a known fixture can execute a calibrated pick, align, and press sequence."
    ]
  },
  "cd4b7b2dea3ae147": {
    "answer": [
      "(a) The traffic management system is a learning agent. It retains history, forecasts congestion, and improves signal timing from measured traffic outcomes.",
      "(b) The lights are a simple reflex agent. The decision maps the current light reading directly to an action."
    ],
    "points": [
      "The traffic agent’s performance element estimates traffic state and selects signal phases and timing. A critic measures delays, queue lengths, or throughput. A learning element updates predictions and decisions from daily data, and a problem generator can propose alternative timings within system constraints.",
      "The lighting agent implements a condition–action rule such as 'if measured light is below threshold, turn on, else turn off'. It has no internal history, learned model, or visibility forecast.",
      "Brightness alone does not always measure visibility. If heavy fog reduces visibility while the sensor still registers daylight, the system leaves lights off. If the reading drops below the threshold, it does switch on, but the fixed rule still cannot distinguish fog from nighttime or anticipate a change."
    ],
    "example": [
      "Traffic loop: road sensors → congestion estimate and phase policy → signals → measured delay → policy update. Fog handling could use a visibility sensor and an explicit low-visibility rule."
    ]
  },
  "6d6f45704c1aaeb3": {
    "answer": [
      "(a) BFS is A, B, C, D, E, G. DFS is A, B, D, F, K, L, E, C, G. IDS reaches G at depth limit 2, with the passes shown below.",
      "(b) Use A* on an augmented warehouse state containing the robot position, the carried item or empty marker, and the undelivered items. The goal is to deliver every requested item while minimizing total travel distance."
    ],
    "points": [
      "The tree traversal orders follow alphabetical successors. BFS, DFS and IDS rank by queue order, depth-first order, and depth limits respectively. The printed arc lengths do not affect those orders.",
      "Warehouse initial state is the starting cell, empty gripper, and set of outstanding products with known shelf positions. Move to a free neighboring cell, pick a requested item at its shelf if the gripper is empty, or drop the item at the packing station. The transition updates position, load, or the outstanding set. Reject collisions and any action that would carry a second item.",
      "Path cost sums movement distances, with the handling actions set to cost zero when only distance counts. A successful state has no outstanding items and an empty gripper. A* with a lower-bound heuristic finds a minimum-distance plan in the finite warehouse state space. Use best-cost duplicate detection.",
      "Use a four-direction grid and Manhattan distance d ignoring obstacles. While loaded, use d(current, station). While empty with remaining items, use the minimum of d(current, shelf) + d(shelf, station) over eligible first picks. Every valid plan must complete one such delivery. Use zero at the goal."
    ],
    "example": [
      "IDS limit 0: A\nIDS limit 1: A, B, C\nIDS limit 2: A, B, D, E, C, G",
      "Example: at a shelf with its requested item and an empty gripper, the robot may pick that item, navigate around obstacles to the station, drop it, then choose another shelf."
    ]
  },
  "8e54a89abc180d7b": {
    "answer": [
      "Greedy Best-First returns A → C → G at cost 8. A* with the required strict expanded list returns A → C → H → G at cost 6. The graph’s true minimum is A → B → C → H → G at cost 5, so neither required run returns the global optimum."
    ],
    "points": [
      "Greedy selects by h, with f = g + h listed for comparison. A* selects by f. The traces list the popped nodes, including the goal. As usual, the goal is tested on removal and its successors are not generated.",
      "A* first picks C at f = 3 + 1 = 4, before B at f = 1 + 4 = 5. When B is later expanded it finds C with g=2, but C is already closed and the strict list prevents reopening. H is then reached through the old route to C at g=5, and H improves G from g=8 to 6.",
      "Greedy pops three nodes and A* pops five, including G. A* finds a lower-cost route on this instance. However, h(B)=4 > c(B,C)+h(C)=2, so consistency fails. With admissible h and reopening on a cheaper g, A* can recover the cost-5 route."
    ],
    "example": [
      "Greedy (key h)\nPath         g   h   f   Popped so far\nA            0   5   5   [A]\nA–C          3   1   4   [A,C]\nA–C–G        8   0   8   [A,C,G]",
      "A* (key f, strict closed set)\nPath         g   h   f   Popped so far\nA            0   5   5   [A]\nA–C          3   1   4   [A,C]\nA–B          1   4   5   [A,C,B]\nA–C–H        5   1   6   [A,C,B,H]\nA–C–H–G      6   0   6   [A,C,B,H,G]"
    ]
  },
  "251c28568e021fc2": {
    "answer": [
      "For the corrected tree in the paper’s key, the root is MAX with value 11 and selects its left child. The three MIN children have exact minimax values 11, 9 and 7.",
      "The original printed diagram has three unlabeled terminals and puts a 7 on a node with children. Its result depends on the missing values. The working below gives both the corrected answer and the exact symbolic result for the printed tree."
    ],
    "points": [
      "Corrected minimax, left to right: the left MIN compares MAX(4,13)=13, MAX(MIN(5,10),11)=11, and 16. The middle MIN compares MAX(MIN(1,8),9,MIN(6,12))=9 and 12. The right MIN compares MAX(10,8,MIN(2,5,7))=10 and MAX(7,4)=7.",
      "Corrected pruning: the left MIN establishes root α=11. In the middle subtree, cut leaf 8 after seeing 1, and cut leaf 12 after seeing 6, because each MIN bound drops below 11. Once the middle MIN sees 9, cut its separate terminal child 12.",
      "In the corrected right subtree, cut 5 and 7 below MIN(2,5,7) as soon as 2 is examined. The first MAX child returns 10, so the right MIN cuts its entire second MAX child, including leaves 7 and 4. The 10 at the right MIN in a pruned trace is an upper bound. Full minimax gives 7."
    ],
    "example": [
      "Printed tree, read as drawn with MAX at the root: let u be the blank terminal in the left MIN, v the blank terminal in the middle MIN, and w the blank terminal beside 10 and 8. The node printed as 7 above children 2, 5, 7 backs up to 2 at MIN level. Thus the three root children are min(11,u), min(9,v), and min(max(10,w),max(2,4))=4. The root is max(min(11,u),min(9,v),4).",
      "Printed-tree pruning: set ℓ=min(11,u) after exploring the left branch. In the middle branch, the 8 under MIN(1,8) is cut if ℓ≥1. The 12 under MIN(6,12) is always cut because MAX has already seen 9. The blank terminal v is cut if ℓ≥9. On entering the right branch, α=max(ℓ,min(9,v)). Cut its entire second MAX child if α≥max(10,w). Otherwise enter that child and cut 5 and 7 below the printed internal 7 if α≥2."
    ]
  },
  "07f91efaaddfd2ec": {
    "answer": [
      "Happy(John) follows by resolution refutation. John’s luck gives both Pass(John,History) and Win(John,Lottery), which together imply happiness."
    ],
    "points": [
      "With e ranging over exams, (Study(x) ∨ Lucky(x)) → Pass(x,e) yields two clauses: ¬Study(x) ∨ Pass(x,e) and ¬Lucky(x) ∨ Pass(x,e).",
      "The remaining clauses are ¬Pass(x,History) ∨ ¬Win(x,Lottery) ∨ Happy(x), ¬Lucky(x) ∨ Win(x,Lottery), ¬Study(John), and Lucky(John). Add ¬Happy(John) for refutation.",
      "Resolve Lucky(John) against the pass and win rules with x=John, using e=History for the pass rule. Resolve the resulting two unit clauses successively against the happiness clause. The result is Happy(John)."
    ],
    "example": [
      "Lucky(John) ⇒ Pass(John,History)\nLucky(John) ⇒ Win(John,Lottery)\nPass(John,History) + happiness clause ⇒ ¬Win(John,Lottery) ∨ Happy(John)\nWin(John,Lottery) + that resolvent ⇒ Happy(John)\nHappy(John) + ¬Happy(John) ⇒ □"
    ]
  },
  "8abca1e3cb20623b": {
    "answer": [
      "(i) ∀x∀y [(House(x) ∧ In(x,Parson) ∧ Apartment(y) ∧ In(y,Chennai)) → Cost(x)<Cost(y)].",
      "(ii) ∀x∀y [(Apartment(x) ∧ Small(x) ∧ House(y) ∧ Big(y)) → Cost(x)<Cost(y)].",
      "(iii) ∃x [K(x) ∧ ∀y (K(y) → y=x)], where K(z) abbreviates House(z) ∧ In(z,Parson) ∧ Cost(z)=2000000.",
      "(iv) ∃x [House(x) ∧ In(x,Parson) ∧ ∀y ((House(y) ∧ y≠x) → Cost(x)>Cost(y))]."
    ],
    "points": [
      "Cost is a numeric function. Parson and Chennai are location constants.",
      "Part (iii) requires one witness and an equality test to exclude every second witness. In part (iv), y≠x prevents comparison of a house with itself."
    ],
    "example": [
      "If the comparison in (iv) is limited to houses in Parson, as in the paper key, add In(y,Parson) to the antecedent inside ∀y. The unqualified wording “any other house” allows comparison to all houses."
    ]
  },
  "7fd17a5cc80f8a06": {
    "answer": [
      "Statement (i) is entailed. Statement (ii) has a counterexample."
    ],
    "points": [
      "From A∨B infer A∨B∨C by disjunction introduction.",
      "Rewrite (B∧C∧D)→E as ¬B∨¬C∨¬D∨E. The premise already gives ¬C∨¬D∨E, so disjunction introduction gives the desired clause. Conjoin the two derived clauses to obtain (i).",
      "The clause ¬D∨E in (ii) removes the option ¬C from the premise. That option can be the sole reason the original clause is true."
    ],
    "example": [
      "A=T, B=F, C=F, D=T, E=F satisfies both premise clauses, while ¬D∨E=F. Hence the valuation falsifies (ii)."
    ]
  },
  "c42b3dde0cbd317a": {
    "answer": [
      "The formula is valid by repeated application of modus ponens and conditional introduction."
    ],
    "points": [
      "Assume A→(B→C). To derive (A→B)→(A→C), assume A→B, then assume A.",
      "From A and A→B derive B. From A and A→(B→C) derive B→C. From B and B→C derive C.",
      "Discharge A to obtain A→C, discharge A→B to obtain (A→B)→(A→C), then discharge A→(B→C) to obtain the entire formula."
    ],
    "example": [
      "Under A→(B→C), A→B, A:\nA, A→B       ⊢ B\nA, A→(B→C)   ⊢ B→C\nB, B→C       ⊢ C"
    ]
  },
  "871050b4998ae3f7": {
    "answer": [
      "The treasure map is in Chest 1. In that case only the message on Chest 2 is true."
    ],
    "points": [
      "Let Tᵢ mean that the map is in Chest i and let ExactlyOne(X,Y,Z) mean (X∨Y∨Z) ∧ ¬(X∧Y) ∧ ¬(X∧Z) ∧ ¬(Y∧Z).",
      "The three clues are C₁=¬T₁, C₂=¬T₂ and C₃=T₂. The knowledge base is ExactlyOne(T₁,T₂,T₃) ∧ ExactlyOne(C₁,C₂,C₃).",
      "C₂ and C₃ are complements, so exactly one of these is true in every valuation. C₁ must therefore be false, making T₁ true."
    ],
    "example": [
      "T₁ T₂ T₃ | C₁ C₂ C₃ | True clues\n T  F  F |  F  T  F | 1\n F  T  F |  T  F  T | 2\n F  F  T |  T  T  F | 2\nThe other five rows fail the one-map constraint."
    ]
  },
  "759c9c8fceb596fc": {
    "answer": [
      "Rain leaves the chance of wind at 0.60. Headache raises the chance of wind from 0.60 to about 0.754. Rain and headache are conditionally dependent given wind."
    ],
    "points": [
      "Write R, W and H for rain, wind and headache. Summing the appropriate cells gives P(W)=0.600, P(R)=0.800 and P(R∧W)=0.480. Therefore P(W|R)=0.480/0.800=0.600=P(W).",
      "P(W∧H)=0.432+0.084=0.516 and P(H)=0.432+0.160+0.084+0.008=0.684. Thus P(W|H)=0.516/0.684≈0.7544.",
      "P(R|W)=0.480/0.600=0.800, whereas P(R|W,H)=0.432/0.516≈0.8372. Equality would be required for conditional independence, so the windy stratum alone disproves it."
    ],
    "example": [
      "The other stratum also fails equality: P(R|¬W)=0.320/0.400=0.800, while P(R|¬W,H)=0.160/(0.160+0.008)≈0.9524."
    ]
  },
  "9dc3a81e33d04376": {
    "answer": [
      "Classify the query as mammal. Its unnormalized score is approximately 0.02099 versus 0.00273 for non-mammal, giving a normalized mammal posterior of about 88.49%."
    ],
    "points": [
      "Let x=(gives birth=yes, flies=no, lives in water=yes, has legs=no). The priors are P(M)=7/20 and P(N)=13/20 from 7 mammal and 13 non-mammal training examples.",
      "For mammals, the four matching feature counts are 6, 6, 2 and 2 out of 7. For non-mammals, they are 1, 10, 3 and 4 out of 13.",
      "Use s(c)=P(c)∏ᵢP(xᵢ|c), treating features as independent given the class. Compare scores and divide by their sum only if a normalized posterior is needed."
    ],
    "example": [
      "s(M)=(7/20)(6/7)(6/7)(2/7)(2/7)=36/1715≈0.02099.\ns(N)=(13/20)(1/13)(10/13)(3/13)(4/13)=6/2197≈0.00273.\nP(M|x)=s(M)/(s(M)+s(N))≈0.88488."
    ]
  },
  "8301fa65f3267d70": {
    "answer": [
      "The MAX root backs up to 8, so MAX selects the right branch. Left-to-right alpha-beta skips the entire MIN node above (9,8), the 13 beside 5, and the final 10 beside 7."
    ],
    "points": [
      "Number the eight bottom MIN nodes from left to right. Their values are 5, 7, 8, 8, 5, 11, 8, 7. The four MAX nodes above them are 7, 8, 11, 8. Their MIN parents give 7 and 8, and the root is max(7,8)=8.",
      "After the first MAX returns 7, the left MIN has β=7. Its second MAX receives 8 from the first child, so α=8≥β. Skip bottom MIN node 4 and both of its leaves (9,8).",
      "The root now has α=7. At bottom MIN node 5, seeing leaf 5 makes β=5≤7. Skip its second leaf 13.",
      "In the rightmost MAX, bottom MIN node 7 returns 8, raising α to 8. At bottom MIN node 8, seeing 7 makes β=7≤8. Skip its second leaf 10."
    ],
    "example": [
      "Bottom MIN:    5   7   8   8   5  11   8   7\nUpper MAX:       7       8      11       8\nUpper MIN:           7              8\nRoot MAX:                   8"
    ]
  },
  "c26e558890363078": {
    "answer": [
      "(a)(i) Profession(Sarah,Physician) ∨ Profession(Sarah,Solicitor).",
      "(a)(ii) Profession(Alex,Thespian) ∧ ∃j (Profession(Alex,j) ∧ j≠Thespian).",
      "(a)(iii) ∃s [Profession(s,Solicitor) ∧ ∀p (Client(p,s) → Profession(p,Physician))].",
      "(a)(iv) ∀p [Profession(p,Physician) → ∃s (Profession(s,Solicitor) ∧ Client(p,s))]."
    ],
    "points": [
      "(b)(i) Whenever two people speak a common language, they understand each other.",
      "(b)(ii) For arbitrary x,y,z, the shared-language premise implies Understands(x,y)∧Understands(y,x). Conjunction elimination gives Understands(x,y), and universal generalization gives the second sentence.",
      "(b)(iii), umbrella: let S mean it is sunny and U mean I take an umbrella. The contrapositive of ¬S→U is ¬U→S. If I take no umbrella, it is sunny.",
      "(b)(iii), loving: write ∀x [Person(x) → ∃y (Person(y) ∧ Loves(x,y))] over a domain that may include nonpeople. Contraposition inside the universal gives ∀x [(¬∃y (Person(y) ∧ Loves(x,y))) → ¬Person(x)]. In a people-only domain the original is ∀x∃y Loves(x,y), a quantified assertion without a written implication."
    ],
    "example": [
      "Client(p,s) places the customer first. In (a)(iii) the implication checks a person’s profession only when that person is a client of s. If the occupations available in (a)(ii) are exactly the listed constants, the second conjunct can instead be the disjunction of Alex holding Doctor, Physician, or Solicitor."
    ]
  },
  "6215289a1a50609d": {
    "answer": [
      "(a) Forward chaining adds exactly Mammal(Fluffy), Carnivore(Fluffy) and Tiger(Fluffy). Backward chaining proves Tiger(Fluffy) from the stripe, meat and milk facts.",
      "(b) P→(Q∧R) ≡ ¬P∨(Q∧R) ≡ (¬P∨Q)∧(¬P∨R), by material implication and distribution. This formula is satisfiable and contingent."
    ],
    "points": [
      "Start WM with A1=Stripes(Fluffy), A2=EatsMeat(Fluffy), A3=Feathers(Whiskers), A4=GivesMilk(Fluffy), A5=Flies(Whiskers). All rules keep the same animal in every premise and conclusion.",
      "Forward: R1 on A4 adds A6=Mammal(Fluffy). R3 on A2 and A6 adds A7=Carnivore(Fluffy). R4 on A1 and A7 adds A8=Tiger(Fluffy). R2 requires Feathers(x)∧Flies(x)∧LaysEggs(x). There is no egg-laying fact for Whiskers, so forward chaining reaches its fixed point with A1–A8.",
      "Backward: use R4 to reduce the tiger goal to stripes and carnivore. Use R3 to reduce carnivore to meat and mammal. Use R1 to reduce mammal to milk. Verify facts A1, A2 and A4, then close the goals in the order mammal, carnivore, tiger. When successful subgoals are cached, add A6, A7 and A8 in that order.",
      "For (b), P=Q=R=T satisfies the formula. P=T, Q=F, R=T falsifies it. These witnesses rule out both contradiction and tautology."
    ],
    "example": [
      "Forward derivation\nA4 ──R1──▶ A6\nA2 + A6 ──R3──▶ A7\nA1 + A7 ──R4──▶ A8\nA3 + A5 + missing LaysEggs(Whiskers) ──R2──▶ no bird fact",
      "Backward proof tree\nTiger(Fluffy) [R4]\n├── Stripes(Fluffy) [A1]\n└── Carnivore(Fluffy) [R3]\n    ├── EatsMeat(Fluffy) [A2]\n    └── Mammal(Fluffy) [R1]\n        └── GivesMilk(Fluffy) [A4]"
    ]
  },
  "2201fc05cc7fb5b1": {
    "answer": [
      "(a) The Naive Bayes prediction from the given rows is Medium. Its score is about 0.00617, ahead of Low at 0.00391 and High at 0.00213.",
      "(b) Using direct conditional frequencies in the table, (i) P(High score | Female, Postgraduate)=2/2=1 and (ii) P(Low score | High income, Skilled)=1/1=1."
    ],
    "points": [
      "For (a) use the five features in the order Age>40, Male, Medium income, Graduate, Skilled. Class sizes are 5 High, 3 Medium and 4 Low out of 12. Multiply the five within-class frequencies by the class prior.",
      "The printed key miscalculates the High score as 0.417. Its product actually equals 0.00213. It also counts one Skilled person among the four Low-score rows, while rows 5 and 9 both match.",
      "For (b), count jointly matching rows. Female postgraduates appear at rows 4 and 8 and both have High scores. High income and Skilled occur together only at row 9, whose score is Low.",
      "If (b) is interpreted as asking for fitted Naive Bayes posteriors, normalize class scores over all classes. Then (i) is still 1 because only High has postgraduate records. For (ii), the three class scores are High=1/20, Medium=0 and Low=1/12, giving P(Low | High income, Skilled)=5/8 under that model."
    ],
    "example": [
      "s(High)   = (5/12)(4/5)(2/5)(1/5)(2/5)(1/5) ≈ 0.00213\ns(Medium) = (3/12)(1/3)(1/3)(3/3)(2/3)(1/3) ≈ 0.00617\ns(Low)    = (4/12)(2/4)(3/4)(1/4)(1/4)(2/4) ≈ 0.00391"
    ]
  },
  "470b992080239201": {
    "answer": [
      "The premises entail that I will score well. Stella or Pearly set the paper, Stella is excluded, and Pearly setting it implies a good score."
    ],
    "points": [
      "Let L mean the paper leaked, S that Stella set it, P that Pearly set it, and W that I score well. The six premises translate to L→W, ¬L, S→¬W, S∨P, ¬S and P→W.",
      "The clauses are ¬L∨W, ¬L, ¬S∨¬W, S∨P, ¬S and ¬P∨W. Add the negated goal ¬W.",
      "Resolve S∨P with ¬S to get P. Resolve P with ¬P∨W to get W. Resolve W with ¬W to get the empty clause."
    ],
    "example": [
      "(S ∨ P), ¬S   ⇒ P\n(¬P ∨ W), P   ⇒ W\nW, ¬W         ⇒ □"
    ]
  },
  "ffc20806e652fc0c": {
    "answer": [
      "The chance of rain given cloudy weather is 0.625, or 62.5%."
    ],
    "points": [
      "Let R mean raining and C mean cloudy. The winter frequencies are P(R)=0.50, P(C)=0.80 and P(C|R)=1.",
      "By Bayes’ rule, P(R|C)=P(C|R)P(R)/P(C)=(1×0.50)/0.80=5/8.",
      "Read “given that it is just cloudy” as conditioning on observing clouds. The cloudy set includes rainy and rain-free cloudy cases."
    ],
    "example": [
      "In 100 representative winter observations, 80 are cloudy. All 50 rainy observations are among those 80, so the conditional fraction is 50/80=5/8."
    ]
  },
  "dbe3704629325901": {
    "answer": [
      "(a) MAX should move to c, which guarantees a score of 5 against optimal play.",
      "(b) With left-to-right alpha–beta search, 7 of the 9 leaves are evaluated. Both skipped leaves, −2 and 12, are under b."
    ],
    "points": [
      "Back up each MIN node. a = min(14, 4, 6) = 4, b = min(3, −2, 12) = −2, and c = min(10, 5, 7) = 5. The MAX root backs up max(4, −2, 5) = 5.",
      "Start with α = −∞ and β = +∞. At a, evaluate all three leaves, updating β from 14 to 4 and then leaving it at 4. The root now has α = 4.",
      "At b, the first leaf 3 immediately sets β = 3 ≤ α = 4. This caps b at 3, so b cannot beat a and its last two leaves can be skipped.",
      "At c, β becomes 10, then 5, and stays at 5 after evaluating 7. Since β stays above α = 4, the 7 must be checked. The root raises α to 5 and selects c."
    ],
    "example": [
      "Leaf trace\na → 14, 4, 6 → 4\nb → 3, [−2 and 12 pruned] → upper bound 3\nc → 10, 5, 7 → 5\nVisited nodes including root and internal nodes: 11 with pruning, 13 without."
    ]
  },
  "e26ad0ac1d955a88": {
    "answer": [
      "Jake gets selected. Training implies that Jake is fast, and being fast is sufficient for selection. Resolution with the negated conclusion yields the empty clause."
    ],
    "points": [
      "Let T mean Jake trains, E mean Jake exercises, F mean Jake is fast, S mean Jake is strong, and G mean Jake gets selected.",
      "The premises are (F ∨ S) → G, T → F, E → S, and T ∧ ¬E.",
      "The CNF clauses are ¬F ∨ G, ¬S ∨ G, ¬T ∨ F, ¬E ∨ S, T, and ¬E. Split the first implication by distributing G over ¬F ∧ ¬S.",
      "Add ¬G for refutation. The premise ¬E supplies no information about S because E → S only states what follows when Jake exercises."
    ],
    "example": [
      "Resolution proof\nT with (¬T ∨ F) gives F.\nF with (¬F ∨ G) gives G.\nG with ¬G gives the empty clause □.\nTherefore the premises entail G."
    ]
  },
  "785c20366728ee0c": {
    "answer": [
      "(i) Forward chaining adds exactly three facts to working memory. Speedster is motorized, Speedster is a motorcycle, and Glider is an airplane.",
      "(ii) Backward chaining proves Motorcycle(Speedster) by establishing its two premises, Motorized(Speedster) and TwoWheels(Speedster)."
    ],
    "points": [
      "For each vehicle x, use R1 Engine(x) → Motorized(x), R2 Tracks(x) ∧ Passengers(x) → Train(x), R3 Motorized(x) ∧ TwoWheels(x) → Motorcycle(x), R4 Wings(x) ∧ Flies(x) → Airplane(x), and R5 Motorized(x) ∧ FourWheels(x) ∧ Passengers(x) → Car(x).",
      "Start with WM₀ = {TwoWheels(Speedster), Tracks(Zoomer), Wings(Glider), Engine(Speedster), Flies(Glider)}. In one valid firing order, R1 adds Motorized(Speedster) to form WM₁, R3 adds Motorcycle(Speedster) to form WM₂, and R4 adds Airplane(Glider) to form WM₃.",
      "R2 lacks Passengers(Zoomer). R5 lacks FourWheels(Speedster) and Passengers(Speedster), and no other vehicle is known to be motorized. WM₃ is the fixed point, since no remaining rule instance adds a fact.",
      "Backward chaining can start from WM₀. It checks known facts at the leaves of the proof tree, returns success up the branches, and can memoize the proved Motorized(Speedster) and Motorcycle(Speedster) in that order. With WM₃ already available, the goal is a direct lookup."
    ],
    "example": [
      "Forward derivations\nEngine(Speedster) ── R1 ──→ Motorized(Speedster)\nMotorized(Speedster) AND TwoWheels(Speedster) ── R3 ──→ Motorcycle(Speedster)\nWings(Glider) AND Flies(Glider) ── R4 ──→ Airplane(Glider)",
      "Backward proof tree\nMotorcycle(Speedster) [R3, AND]\n├─ Motorized(Speedster) [R1]\n│  └─ Engine(Speedster) [A4]\n└─ TwoWheels(Speedster) [A1]"
    ]
  },
  "a3cf68ce1b510150": {
    "answer": [
      "Use universal implications for the general comparisons and respect rule. Use existential witnesses for the unique 4.0 student and the restaurant. The FOL and corresponding clause forms are listed below."
    ],
    "points": [
      "Each free variable in a CNF clause is universally quantified. Use fresh Skolem constants s for the student and r for the restaurant. Each witness is chosen before any universal variable it is compared with.",
      "In the formulas, Expensive(x,y), Efficient(x,y), LessPollution(x,y), and BetterFood(x,y) mean x is more expensive, more efficient, less polluting, and serves better food than y, respectively. GPA(x,g) means x has GPA g. Respects(y,x) means y respects x."
    ],
    "example": [
      "1. Library books vs. store magazines\nFOL  ∀x∀y[(Book(x) ∧ Library(x) ∧ Magazine(y) ∧ Store(y)) → Expensive(x,y)]\nCNF  ¬Book(x) ∨ ¬Library(x) ∨ ¬Magazine(y) ∨ ¬Store(y) ∨ Expensive(x,y)",
      "2. Electric vs. gasoline cars\nFOL  ∀x∀y[(ElectricCar(x) ∧ GasCar(y)) → (Efficient(x,y) ∧ LessPollution(x,y))]\nCNF  (¬ElectricCar(x) ∨ ¬GasCar(y) ∨ Efficient(x,y))\n   ∧ (¬ElectricCar(x) ∨ ¬GasCar(y) ∨ LessPollution(x,y))",
      "3. Exactly one student has GPA 4.0\nFOL  ∃x[Student(x) ∧ GPA(x,4.0) ∧ ∀y((Student(y) ∧ GPA(y,4.0)) → y=x)]\nCNF  Student(s) ∧ GPA(s,4.0) ∧ (¬Student(y) ∨ ¬GPA(y,4.0) ∨ y=s)",
      "4. A Paris restaurant beats all other Paris restaurants\nFOL  ∃x[Restaurant(x) ∧ Paris(x) ∧ ∀y((Restaurant(y) ∧ Paris(y) ∧ y≠x) → BetterFood(x,y))]\nCNF  Restaurant(r) ∧ Paris(r) ∧ (¬Restaurant(y) ∨ ¬Paris(y) ∨ y=r ∨ BetterFood(r,y))",
      "5. Everyone respects a person who helps others\nFOL  ∀x∀y[(Person(x) ∧ HelpsOthers(x) ∧ Person(y)) → Respects(y,x)]\nCNF  ¬Person(x) ∨ ¬HelpsOthers(x) ∨ ¬Person(y) ∨ Respects(y,x)"
    ]
  },
  "69abfb6bc1d1cf46": {
    "answer": [
      "(a) Unsmoothed Naïve Bayes predicts Flu.",
      "(b)(i) The exact sample conditional is undefined because no table row has Male, Fatigue = Yes, and Cough = Yes together. Under the Naïve Bayes model of part (a), the estimate is 30%.",
      "(b)(ii) The only row with no fever and no cough is Healthy, so the probability from the table is 1, or 100%."
    ],
    "points": [
      "For (a), there are 3 Flu, 4 COVID-19, 2 Allergies, and 1 Healthy rows. For each class c, multiply its prior P(c) by the six within-class feature frequencies for the given profile.",
      "Flu has all six frequencies positive. COVID-19 has no Sore Throat = No rows, Allergies has no Fever = Yes rows, and Healthy has several zero frequencies including Age 30–40. Thus only the Flu score is positive.",
      "For (b)(i), the only Male row with Cough = Yes and diagnosis COVID-19 has Fatigue = No. The Male Allergies row also has Fatigue = No. The Male Flu and Healthy rows have Cough = No. The observed conditioning count is zero, so a joint-frequency calculation would be 0/0.",
      "For (b)(ii), both Allergies rows have Cough = Yes. The Healthy row matches both conditions and the remaining classes have no rows with Fever = No."
    ],
    "example": [
      "(a) Flu score = (3/10)(1/3)(1/3)(3/3)(1/3)(3/3)(2/3) = 1/135. The factors after the prior follow age, gender, fever, cough, fatigue, and sore throat.",
      "(b)(i) Naïve Bayes scores with Male, Fatigue = Yes and Cough = Yes\nFlu       (3/10)(2/3)(3/3)(1/3) = 1/15\nCOVID-19  (4/10)(1/4)(2/4)(4/4) = 1/20\nAllergies (2/10)(1/2)(1/2)(2/2) = 1/20\nHealthy   (1/10)(1/1)(0/1)(0/1) = 0\nP(COVID-19 | evidence) = (1/20) / (1/15 + 1/20 + 1/20) = 0.30."
    ]
  },
  "aca15b6550d0d29b": {
    "answer": [
      "With MIN taking the first turn as stated, the root value is 9 and MIN takes the left child. Left-to-right alpha–beta pruning evaluates 11 of 16 leaves and visits 23 of 31 total nodes."
    ],
    "points": [
      "The levels from the root down alternate MIN, MAX, MIN, MAX, and terminal utilities. The deepest MAX nodes take the larger value in each adjacent pair of leaves.",
      "In the left subtree, the first MIN node backs up min(5, 3) = 3. Its sibling first gets 9 from max(8, 9), establishing β = 9 there. The next MAX node reads 10, so α = 10 ≥ β = 9 and its leaf 11 can be skipped. The second MIN node returns 9, the root's left child returns 9, and the MIN root sets β = 9.",
      "In the right subtree, the first MIN node receives backed-up values 12 and 13, so the right MAX node already has at least 12. Its α ≥ the root's β of 9, and it skips the last four leaves and their three internal nodes.",
      "The handwritten answer key illustrates a MAX-first tree, which produces a different trace. These backups and prunes follow the MIN-first instruction in the question."
    ],
    "example": [
      "Full minimax values by level, bottom to top\nMAX pairs    5   3   9   11   12   13   15   17\nMIN            3       9        12        15\nMAX                9                  15\nMIN root                    9",
      "Leaf positions visited (1-based)\n1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12\nSkipped: leaf 8 (value 11) and leaves 13–16 (15, 10, 14, 17)."
    ]
  },
  "5b4d6fed3db24b26": {
    "answer": [
      "Rahul gets a job. His recommendation satisfies one of the three sufficient conditions, so resolving the recommendation rule with the negated goal yields a contradiction."
    ],
    "points": [
      "Let G(x), I(x), R(x), J(x), P(x), and W(x) mean x codes well, is innovative, has a recommendation, gets a job, practices coding, and works on a research project, respectively. Let r be Rahul.",
      "The general rules are ∀x[(G(x) ∨ I(x) ∨ R(x)) → J(x)] and ∀x[(P(x) ∨ W(x)) → (G(x) ∧ I(x))]. The facts are R(r), ¬P(r), and ¬W(r).",
      "The first rule gives clauses ¬G(x) ∨ J(x), ¬I(x) ∨ J(x), and ¬R(x) ∨ J(x). The second gives ¬P(x) ∨ G(x), ¬P(x) ∨ I(x), ¬W(x) ∨ G(x), and ¬W(x) ∨ I(x).",
      "The proof needs only the recommendation fact and its sufficient-condition clause. A lack of practice or project work does not imply a lack of coding ability or innovation under the stated rules."
    ],
    "example": [
      "Resolution with x = r\n(¬R(r) ∨ J(r)) and R(r) resolve to J(r).\nJ(r) and the negated goal ¬J(r) resolve to □.\nTherefore J(Rahul) is entailed."
    ]
  },
  "94304c06b027eeda": {
    "answer": [
      "The first two statements and the love rule are universal implications. The JEE rank and villa statements introduce existential witnesses, with equality supplying uniqueness or excluding comparison with the witness itself."
    ],
    "points": [
      "Free variables in the clause forms are universally quantified. Use fresh Skolem constants r for the person with rank 14 and v for the Mumbai villa.",
      "Let Rank(x,k) mean x has JEE rank k and mother(x) denote x's mother. Loves(y,x) means y loves x. Cheaper(x,y), MorePower(x,y), and Costlier(x,y) compare x with y.",
      "The villa formula takes 'any other villa' literally, so the comparison ranges over all villas. To restrict the comparison to Mumbai villas, add Mumbai(y) to its antecedent and add ¬Mumbai(y) to the corresponding clause."
    ],
    "example": [
      "(i) Bhopal houses vs. Pune apartments\nFOL  ∀x∀y[(House(x) ∧ Bhopal(x) ∧ Apartment(y) ∧ Pune(y)) → Cheaper(x,y)]\nCNF  ¬House(x) ∨ ¬Bhopal(x) ∨ ¬Apartment(y) ∨ ¬Pune(y) ∨ Cheaper(x,y)",
      "(ii) Three-star vs. five-star washing machines\nFOL  ∀x∀y[(Machine(x) ∧ Stars(x,3) ∧ Machine(y) ∧ Stars(y,5)) → (Cheaper(x,y) ∧ MorePower(x,y))]\nCNF  (¬Machine(x) ∨ ¬Stars(x,3) ∨ ¬Machine(y) ∨ ¬Stars(y,5) ∨ Cheaper(x,y))\n   ∧ (¬Machine(x) ∨ ¬Stars(x,3) ∨ ¬Machine(y) ∨ ¬Stars(y,5) ∨ MorePower(x,y))",
      "(iii) Exactly one person has JEE rank 14\nFOL  ∃x[Person(x) ∧ Rank(x,14) ∧ ∀y((Person(y) ∧ Rank(y,14)) → y=x)]\nCNF  Person(r) ∧ Rank(r,14) ∧ (¬Person(y) ∨ ¬Rank(y,14) ∨ y=r)",
      "(iv) A Mumbai villa is costlier than every other villa\nFOL  ∃x[Villa(x) ∧ Mumbai(x) ∧ ∀y((Villa(y) ∧ y≠x) → Costlier(x,y))]\nCNF  Villa(v) ∧ Mumbai(v) ∧ (¬Villa(y) ∨ y=v ∨ Costlier(v,y))",
      "(v) Everyone loves a person who loves their mother\nFOL  ∀x∀y[(Person(x) ∧ Loves(x,mother(x)) ∧ Person(y)) → Loves(y,x)]\nCNF  ¬Person(x) ∨ ¬Loves(x,mother(x)) ∨ ¬Person(y) ∨ Loves(y,x)"
    ]
  },
  "442f39380c3525e4": {
    "answer": [
      "(A) Anjali is the topper. In that case, only Braian's statement is true.",
      "(B) Modus ponens derives Q from P → Q and P. Modus tollens derives ¬P from P → Q and ¬Q."
    ],
    "points": [
      "Let A, B, and C denote that Anjali, Braian, and Chenna, respectively, are the topper. The claims are ¬A, ¬B, and B, respectively.",
      "Exactly one topper means (A ∨ B ∨ C) ∧ ¬(A ∧ B) ∧ ¬(A ∧ C) ∧ ¬(B ∧ C). Exactly one statement must also be true. Because the last two statements are complements, one of those two already holds, so Anjali's statement ¬A must be false.",
      "For a shared example, assume the course registration system sends a receipt every time it accepts a payment. If payment was accepted, infer that a receipt was sent by modus ponens. If no receipt was sent, infer that payment was not accepted by modus tollens."
    ],
    "example": [
      "Truth table after retaining the rows with one topper\nA  B  C  | ¬A ¬B  B | True claims\nT  F  F  |  F  T  F | 1 ← valid\nF  T  F  |  T  F  T | 2\nF  F  T  |  T  T  F | 2"
    ]
  },
  "df869020f9b464cc": {
    "answer": [
      "(A) Bayes' rule updates a prior probability P(H) after observing evidence E. For P(E) > 0, the posterior is P(H | E) = P(E | H)P(H)/P(E).",
      "(B) The estimated probability of a placement offer for Sweta is 574/660 ≈ 86.97%."
    ],
    "points": [
      "The rule follows because both P(H | E)P(E) and P(E | H)P(H) equal the joint probability P(H ∧ E). The likelihood P(E | H) measures how often the evidence occurs when the hypothesis holds.",
      "Let J mean a student received a placement offer and C mean the student is strong in C. The table totals imply P(J) = 700/1000 = 0.70, P(C) = 660/1000 = 0.66, and P(C | J) = 0.82.",
      "Therefore P(J | C) = (0.82 × 0.70)/0.66 = 287/330. Of the 700 students with offers, 574 are strong in C. Sweta belongs to the group of 660 students strong in C."
    ],
    "example": [
      "Suppose 20% of parcels are express and 90% of express parcels arrive within one day. If 30% of all parcels arrive within one day, the probability that a one-day parcel was express is (0.90 × 0.20)/0.30 = 0.60."
    ]
  },
  "6de5e95ca60b88b5": {
    "answer": [
      "Move left from A to B. The minimax value at the MAX root A is −9."
    ],
    "points": [
      "Bottom MIN layer: H=min(5,−10)=−10, I=min(−9,15)=−9, J=min(0,−5)=−5, K=min(30,20)=20, L=min(10,25)=10, M=min(−6,99)=−6, N=min(−30,20)=−30, O=min(6,−15)=−15.",
      "MAX layer: D=max(−10,−9)=−9, E=max(−5,20)=20, F=max(10,−6)=10, G=max(−30,−15)=−15. Then B=min(−9,20)=−9 and C=min(10,−15)=−15. A chooses max(−9,−15)=−9.",
      "Left to right: E sees J=−5 against β=−9 and skips K and its leaves V,W. M sees Z=−6 against α=10 and skips AA. N sees BB=−30 against α=−9 and skips CC.",
      "Right to left: F sees M=−6 against β=−15 and skips L and its leaves X,Y. J sees U=−5 against α=20 and skips T. H sees Q=−10 against α=−9 and skips P."
    ],
    "example": [
      "Optimal play: A → B → D → I → R, with R=−9. A cut occurs when α ≥ β after updating the bound for the current node."
    ]
  },
  "2308ceeb247b5c6b": {
    "answer": [
      "(a) Use quantified predicates for people and times. (b) Formulas (i) and (iii) are valid, (ii) and (iv) are satisfiable and contingent, and (v) is unsatisfiable."
    ],
    "points": [
      "(a)(i) Let F(u,p,t) mean that you (u) fool person p at time t. The three conjuncts are:\n∃p [Person(p) ∧ ∀t (Time(t) → F(u,p,t))]\n∧ ∃t [Time(t) ∧ ∀p (Person(p) → F(u,p,t))]\n∧ ¬∀p∀t [(Person(p) ∧ Time(t)) → F(u,p,t)].",
      "The second conjunct uses a time at which everyone is fooled. The last conjunct is equivalent to ∃p∃t [Person(p) ∧ Time(t) ∧ ¬F(u,p,t)].",
      "(a)(ii) Use Lady(l), Glitters(g), SureGold(l,g), Buys(l,s) and StairwayToHeaven(s). An object-by-object reading is ∃l [Lady(l) ∧ ∀g (Glitters(g) → SureGold(l,g)) ∧ ∃s (StairwayToHeaven(s) ∧ Buys(l,s))]. To represent certainty about the universal claim itself, use Sure(l,k) where k names the proposition “all that glitters is gold.”",
      "For (b), a valid formula is true on every row, a contingent formula has both true and false rows, and an unsatisfiable formula is false on every row. In (iii) the antecedent is the contrapositive of the consequent. In (v), the two conjuncts simplify to q and ¬q."
    ],
    "example": [
      "p  q   (i)  (ii)  (iii)  (iv)  (v)\nF  F    T     F      T      F    F\nF  T    T     T      T      T    F\nT  F    T     T      T      F    F\nT  T    T     T      T      T    F"
    ]
  },
  "2aae6a147d3e4ecd": {
    "answer": [
      "The axioms entail 7 ≤ 3+9. The intermediate terms are 7+0 and 0+7."
    ],
    "points": [
      "Forward chaining: axioms (1) and (2) give 0≤3 and 7≤9. Use (7) with (w,x,y,z)=(0,7,3,9) to get 0+7≤3+9.",
      "Use (6) with (x,y)=(7,0) to get 7+0≤0+7. By (8), combine it with 0+7≤3+9 to get 7+0≤3+9. Axiom (4) gives 7≤7+0. Apply (8) again to conclude 7≤3+9.",
      "Backward chaining: match the goal against (8) with intermediate term 7+0, giving 7≤7+0 and 7+0≤3+9. The first matches (4). Use (8) on the second with intermediate term 0+7, giving 7+0≤0+7 and 0+7≤3+9. The first matches (6). Use (7) on the last subgoal, reducing it to the facts 0≤3 and 7≤9."
    ],
    "example": [
      "7 ≤ 7+0 ≤ 0+7 ≤ 3+9\n  (4)     (6)    (7), from (1) and (2)\nApply transitivity (8) twice."
    ]
  },
  "5f045dfcd6b19b17": {
    "answer": [
      "Using GPA and effort, the printed table predicts Hirable = No. Attendance appears in the prompt but the table supplies no attendance data, so the full three-feature classification is under-specified."
    ],
    "points": [
      "There are 3 Yes and 5 No records, so the priors are 3/8 and 5/8. For Yes, P(poor GPA|Yes)=0/3 and P(lots of effort|Yes)=2/3. For No, P(poor GPA|No)=2/5 and P(lots of effort|No)=2/5.",
      "Multiply the class prior and the two available likelihoods. Score(Yes)=(3/8)(0/3)(2/3)=0. Score(No)=(5/8)(2/5)(2/5)=0.10. The paper key reports Yes, which the printed data do not support."
    ],
    "example": [
      "With add-one smoothing over the 3 GPA categories and 2 effort categories, Yes scores (3/8)(1/6)(3/5)=0.0375 and No scores (5/8)(3/8)(3/7)≈0.10045. The available features still favor No."
    ]
  },
  "7a57a708a1c08e84": {
    "answer": [
      "(a) P(D=true | A=true)=0.197, or 19.7%. (b) Choose probabilities that make one child’s distribution the same for either value of Y. This is enough for X and Z to be marginally independent."
    ],
    "points": [
      "(a) Since B and C are independent given A, sum P(b|A)P(c|A)P(D|b,c) over the four (b,c) assignments. D depends only on its parents B,C, so its table supplies the last factor.",
      "Contributions for (B,C), (B,¬C), (¬B,C) and (¬B,¬C) are (0.2)(0.7)(0.30)=0.042, (0.2)(0.3)(0.25)=0.015, (0.8)(0.7)(0.10)=0.056 and (0.8)(0.3)(0.35)=0.084. Their sum is 0.197.",
      "(b) Let P(Y)=0.5, P(X|Y)=P(X|¬Y)=0.4, P(Z|Y)=0.8 and P(Z|¬Y)=0.2. Thus P(X)=0.4 and P(Z)=0.5.",
      "For either truth value x of X, P(x|y)=P(x) for every y. Hence ∑ᵧ P(y)P(x|y)P(z|y)=P(x)∑ᵧ P(y)P(z|y)=P(x)P(z) for all x,z. This verifies independence."
    ],
    "example": [
      "(b) P(X,Z)=(0.5)(0.4)(0.8)+(0.5)(0.4)(0.2)=0.20=(0.4)(0.5)."
    ]
  },
  "7e9afb416a158073": {
    "answer": [
      "The root A has minimax value 9 and chooses its right branch. With left-to-right alpha–beta search, 10 of the 27 leaves are pruned."
    ],
    "points": [
      "Read A as MAX, the next level as MIN and C1–C9 as MAX. Call the three MIN nodes B1, B2 and B3 from left to right because the figure repeats B1.",
      "The C-level values from C1 to C9 are 5, 7, 8, 6, 9, 10, 11, 9, 10. Their group minima are B1=5, B2=6 and B3=9. The root takes max(5,6,9)=9.",
      "In B1 the first child C1 yields β=5. C2 sees 7 and cuts its leaves 1,4. C3 sees 8 and cuts its leaves 6,5. In B2, C4 yields β=6. C5 sees 9 and cuts 1,0. C6 sees 10 and cuts 4,7.",
      "In B3, C7 and C8 are searched fully, narrowing β from ∞ to 11 and then 9. C9 sees 10 and cuts 2,9. Each MAX-child cutoff follows from α ≥ β."
    ],
    "example": [
      "A (MAX) = 9\n├─ B1 (MIN) = 5: C1=5, C2=7,  C3=8\n├─ B2 (MIN) = 6: C4=6, C5=9,  C6=10\n└─ B3 (MIN) = 9: C7=11, C8=9, C9=10"
    ]
  },
  "6fbd512774de81ea": {
    "answer": [
      "(A) Alice graduates by resolution refutation. (B) Quantifier placement determines whether a witness depends on an earlier variable."
    ],
    "points": [
      "(A) Write T(x) for writes the thesis, V(x) for passes the viva, G(x) for graduates, H(x) for hardworking, D(x) for has a guide and S(x) for gets support. The universal rule clauses are ¬T(x)∨¬V(x)∨G(x), ¬H(x)∨T(x), ¬D(x)∨T(x), ¬D(x)∨S(x), and ¬S(x)∨V(x). Add facts ¬H(a), D(a), where a is Alice, and the negated goal ¬G(a).",
      "Resolve D(a) with ¬D(x)∨T(x) and with ¬D(x)∨S(x), giving T(a) and S(a). Resolve S(a) with ¬S(x)∨V(x) to get V(a). Resolve ¬G(a) with the graduation clause to give ¬T(a)∨¬V(a), then with T(a) to give ¬V(a), then with V(a) to obtain the empty clause □.",
      "(B)(i) ∀x [(Smartphone(x) ∧ ∀y (Laptop(y) → Cheaper(x,y))) → BudgetPhone(x)].",
      "(B)(ii) ∀c [City(c) → ∃h (Hospital(h) ∧ LocatedIn(h,c) ∧ Open24(h))].",
      "(B)(iii) ∀s∀c [(Student(s) ∧ Course(c) ∧ Enrolled(s,c)) → ∃p (Professor(p) ∧ HasProfessor(s,p))]. To express a professor for that particular course, include Teaches(p,c) inside the existential scope.",
      "(B)(iv) ∀d [Doctor(d) → ∃p (Patient(p) ∧ Treated(d,p))]."
    ],
    "example": [
      "The guide fact suffices for both prerequisite chains: D(a) → T(a) and D(a) → S(a) → V(a). In (B)(ii), the hospital witness may vary by city."
    ]
  },
  "d9842d7334bdfcdb": {
    "answer": [
      "(A) The rules entail that the patient gets antibiotics. (B)(i) The premises entail N ∧ O. (B)(ii) Proof by cases on P ∨ Q establishes T."
    ],
    "points": [
      "Let F,C,I,A,B indicate fever, cough, infection, antibiotics and blood test. Use facts C, ¬F and rules F→I, C→I, I→A, F→B. The first two rules express (F∨C)→I.",
      "Forward chaining: C triggers C→I, and I triggers I→A. Backward chaining: to prove A, seek I. Choose C→I and match C to the given fact. The blood-test rule cannot fire on the facts supplied, so B is underived.",
      "(B)(i) Apply modus ponens to M→N and M to get N, then to N→O and N to get O. From N and O, infer N∧O by conjunction introduction. P∨O and ¬P also independently give O by disjunctive syllogism.",
      "(B)(ii) If P holds, apply modus ponens twice along P→R→T. If Q holds, do the same along Q→S→T. Since P∨Q holds and both cases imply T, conclude T by disjunction elimination."
    ],
    "example": [
      "(A) Forward: C ⇒ I ⇒ A. Backward: A needs I, and I can be established from the known C."
    ]
  },
  "1f70df0b3fc0373a": {
    "answer": [
      "(A) P(F | V ∧ C)=36/55≈0.6545 under the class-conditional independence assumption. (B) With unsmoothed Naive Bayes, predict positive (+)."
    ],
    "points": [
      "(A) Assume fever and cough are independent within both flu-status groups. Their joint likelihood is (0.9)(0.8)=0.72 for flu and (0.1)(0.2)=0.02 for no flu. The two weighted likelihoods are (0.05)(0.72)=0.036 and (0.95)(0.02)=0.019. Divide the flu term by their sum.",
      "(B) Each class has five records. For features (P=0,Q=1,R=0), the + class counts are (2,1,1) and the − class counts are (3,2,0). The priors are 0.5 each.",
      "Score(+)=(0.5)(2/5)(1/5)(1/5)=0.008. Score(−)=(0.5)(3/5)(2/5)(0/5)=0. The normalized + posterior is 1 under these unsmoothed estimates. The key overcounts two + likelihoods."
    ],
    "example": [
      "If using add-one smoothing in (B), both scores are 6/343≈0.01749. The + terms are (0.5)(3/7)(2/7)(2/7) and the − terms are (0.5)(4/7)(3/7)(1/7), so smoothing produces a tie."
    ]
  },
  "5a7e8cd0d3903f0d": {
    "answer": [
      "(a) The joint probability is 0.1751211 (17.51211%). (b) The joint probability is 0.71406522 (71.406522%)."
    ],
    "points": [
      "Use independent root nodes E and D as implied by the network description. W means the window is broken, L means lights are on, and A means the alarm is triggered. The joint distribution factors as P(E)P(D)P(L|E,D)P(W|D)P(A|W,L).",
      "(a) For E,¬D,L,¬W,¬A the factors are 0.20 for employee present, 0.95 for no delivery, 0.95 for lights on, 0.99 for intact window and 0.98 for no alarm. Multiply them to get 0.1751211.",
      "(b) For ¬E,¬D,¬L,¬W,¬A use 0.80, 0.95, 0.95, 0.99 and 0.999. In particular, 0.1% alarm probability equals 0.001, giving a no-alarm probability of 0.999."
    ],
    "example": [
      "Edges: E → L, D → L, D → W, L → A and W → A. For (b), “no one present” means both ¬E and ¬D."
    ]
  },
  "52a107c5c4dbd579": {
    "answer": [
      "(a) PEAS describes how to evaluate the Robird, where it operates, how it acts, and what it can observe.",
      "(b) A goal-based agent estimates the current state, predicts the outcomes of candidate actions, and chooses an action or plan whose predicted outcome satisfies the goal."
    ],
    "points": [
      "Performance measure: birds cleared from the protected zone, time to clear it, how long the zone stays clear, safe separation from aircraft and obstacles, and energy used per sortie.",
      "Environment: airport runways, industrial sites or farmland, local bird species and flocks, aircraft, terrain and obstacles, and changing wind and visibility.",
      "Actuators: the flapping drive and steering mechanisms for controlling direction, altitude and speed. These enable takeoff, raptor-like flight, approach and landing.",
      "Sensors: in a proposed autonomous design, GPS and an inertial unit estimate position and orientation, an altimeter measures height, and a camera or ground bird detector supplies flock locations.",
      "A state estimator uses percepts, the prior state, and the previous action. A planner uses that state, a transition model, and the goal to evaluate possible future states. It executes the chosen action and uses new percepts to update or replan."
    ],
    "example": [
      "Environment → Sensors → State estimator → Planner → Actuators → Environment\nPrior state and last action → State estimator\nGoal and transition model → Planner",
      "With a flock on the runway, the planner selects an approach within the permitted flight zone. Fresh observations show whether the flock has moved outside the zone and whether the clearing goal is satisfied."
    ]
  },
  "6079df83527771a0": {
    "answer": [
      "Keep the requested soldier bits in the order (A,L,B1,B2), with 1 for the left bank. Annotate each vertex with the raft bank L or R. Start at 1111L and finish at 0000R.",
      "Shade 0100 and 1011, since those are the two soldier assignments in which the lazy soldier is alone on a bank. The DFS below finds a legal crossing sequence in 11 moves."
    ],
    "points": [
      "Legal raft loads are A, B1, B2, B1+B2, L+B1, and L+B2. Test that all passengers are on the raft's bank, flip their bits and the raft side, then reject a shaded assignment. This produces reversible edges. Only vertices reachable from 1111L appear in the adjacency list below.",
      "Use recursive DFS with a visited set on the full vertex and try raft loads in the order A, B1, B2, B1+B2, L+B1, L+B2. The first three visits from the start are dead ends apart from returning to the start.",
      "DFS discovery order: 1111L, 0111R, 1101R, 1110R, 1100R, 1110L, 0110R, 0111L, 0101R, 1101L, 1000R, 1010L, 0010R, 0011L, 0001R, 1001L, 0000R."
    ],
    "example": [
      "Reachable search graph (each row gives left-raft → adjacent right-raft vertices; edges reversible):\n0001L → 0000R\n0010L → 0000R\n0011L → 0001R, 0010R, 0000R\n0101L → 0000R\n0110L → 0000R\n0111L → 0101R, 0110R, 0001R, 0010R\n1000L → 0000R\n1001L → 0001R, 1000R\n1010L → 0010R, 1000R\n1101L → 0101R, 1100R, 1000R\n1110L → 0110R, 1100R, 1000R\n1111L → 0111R, 1101R, 1110R, 1100R, 1001R, 1010R",
      "DFS solution path (outbound and return trips alternate):\n1111L ─B1+B2→ 1100R ─B1→ 1110L ─A→ 0110R\n─B2→ 0111L ─B1→ 0101R ─A→ 1101L ─L+B2→ 1000R\n─B1→ 1010L ─A→ 0010R ─B2→ 0011L ─B1+B2→ 0000R"
    ]
  },
  "0be0ed3d2a5418fd": {
    "answer": [
      "Greedy best-first search (GBFS) expands the smallest h. With A before B at the first tie and C before B at the second, it returns S → A → C → E → G, cost 10.",
      "A* expands the smallest f=g+h and returns S → B → C → D → F → G, cost 8. Checking the shortest remaining distances in this graph proves 8 is optimal."
    ],
    "points": [
      "GBFS: S adds A(4), B(4). A adds C(4). C adds E(1), D(3.5). E adds G(0), which is popped next. The paper leaves ties open. If B is expanded first, GBFS instead takes S → B → D → F → G at cost 9.",
      "A*: S(6) → A(6) → B(7) → C(8) → E(8) → D(8.5) → F(8) → G(8), with the numbers denoting f at pop time. After A, C has g=5. B improves C to g=4 and discovers D with g=6. C improves D to g=5, and discovers E with g=7.",
      "E generates G at g=9. D then reaches F at g=7, and F improves G to g=8 while G is still on the frontier. Stop when G is popped.",
      "At D the heuristic 3.5 exceeds the true remaining cost 3, so the general admissibility guarantee cannot prove the result for this graph. Compute exact distances backward from G instead."
    ],
    "example": [
      "True distances to G (reverse over the directed edges):\nG=0, F=1, E=2, D=2+1=3\nC=min(3+2, 1+3)=4\nB=min(1+4, 3+3)=5, A=3+4=7\nS=min(2+7, 3+5)=8"
    ]
  },
  "b475b403e33bc7ed": {
    "answer": [
      "With A as MAX and a left-to-right traversal, the minimax value at A is 10. MAX chooses B3. The full minimax continuation is A → B3 → C7 → the leaf 10."
    ],
    "points": [
      "Back up MAX values from the leaves: C1 through C9 have values 9, 10, 12, 1, 7, 3, 10, 15, 20. The MIN layer gives B1=min(9,10,12)=9, B2=min(1,7,3)=1, B3=min(10,15,20)=10. A=max(9,1,10)=10.",
      "At B1, C1 sets β=9. At C2 the first leaf 10 reaches the bound, so skip leaves 2 and 1. At C3 the second leaf 12 reaches the bound, so skip the last leaf 5. B1 returns 9, setting A's α=9.",
      "At B2, evaluate C4 to get 1. With β=1≤α=9 at B2, skip both C5 and C6.",
      "At B3, C7 sets β=10. At C8 the first leaf 15 reaches the bound, so skip 2 and 3. At C9 the second leaf 20 reaches the bound, so skip 4. B3 returns 10."
    ],
    "example": [
      "Visited leaves in order, by subtree:\nC1: 6, 3, 9  | C2: 10 | C3: 1, 12\nC4: 1, 0, −1 | C5 and C6: skipped\nC7: 10, 2, 5 | C8: 15 | C9: 1, 20\nTotal: 15 leaves evaluated, 12 leaves pruned."
    ]
  },
  "c0a3830f78ab30bb": {
    "answer": [
      "The knowledge base entails that Percy is a powerful demigod and the Minotaur is an imprisoned powerful monster. The defeat claim is underdetermined as written. “Only by” makes being a powerful demigod necessary for defeating such a monster."
    ],
    "points": [
      "Let p=Percy, s=Poseidon, and m=Minotaur. Facts: Demigod(p), Parent(s,p), God(s), Powerful(s), Powerful(m), Monster(m), Imprisoned(m). Parent(x,y) means x is a parent of y.",
      "Rules with all variables universally quantified: Parent(x,y) ∧ God(x) → Demigod(y). Parent(x,y) ∧ God(x) ∧ Powerful(x) → Powerful(y). Powerful(y) ∧ Monster(y) → Imprisoned(y).",
      "The last premise gives Defeats(x,y) ∧ Powerful(y) ∧ Monster(y) → Powerful(x) ∧ Demigod(x). In CNF it yields two clauses beginning ¬Defeats(x,y) ∨ ¬Powerful(y) ∨ ¬Monster(y), one ending in Powerful(x) and the other in Demigod(x).",
      "Resolve ¬Parent(x,y) ∨ ¬God(x) ∨ ¬Powerful(x) ∨ Powerful(y) with Parent(s,p), God(s) and Powerful(s) to derive Powerful(p). The last premise supplies only negative occurrences of Defeats. A model with Defeats empty satisfies the premises and ¬Defeats(p,m), so refutation cannot derive the empty clause."
    ],
    "example": [
      "If the intended extra premise is “any powerful demigod defeats any powerful monster,” add ¬Demigod(x) ∨ ¬Powerful(x) ∨ ¬Monster(y) ∨ ¬Powerful(y) ∨ Defeats(x,y). Resolve the instance x=p, y=m with Demigod(p), Powerful(p), Monster(m), and Powerful(m) to obtain Defeats(p,m). The negated query then resolves to the empty clause. This proof depends on the extra premise."
    ]
  },
  "7a1cc6f85dda9dd1": {
    "answer": [
      "(a) The probability of having chosen the 90% pass-rate teacher given that you failed is 1/6, about 16.67%.",
      "(b) In order, P(¬A)=0.4, P(A∪B)=0.7, P(A∩B)=0.1, and P(B|A)=1/6."
    ],
    "points": [
      "Let H mean the high-pass teacher and F mean failure. P(H)=P(¬H)=0.5, P(F|H)=0.1, and P(F|¬H)=0.5. Total probability gives P(F)=0.1×0.5+0.5×0.5=0.30. Bayes' rule gives P(H|F)=0.05/0.30.",
      "Use the complement rule for P(¬A)=1−0.6. The multiplication rule gives P(A∩B)=P(A|B)P(B)=0.5×0.2=0.1.",
      "Use inclusion–exclusion for P(A∪B)=0.6+0.2−0.1. The conditional probability P(B|A) is P(A∩B)/P(A)=0.1/0.6."
    ],
    "example": [
      "Out of 100 students choosing 50–50, expect 5 failures with the high-pass teacher and 25 with the low-pass teacher. Of the 30 failures, 5 are in the high-pass class."
    ]
  },
  "df5c6352cfb1b7de": {
    "answer": [
      "(a) P(¬A, B, ¬C, D)=0.216.",
      "(b) P(A|B,C,D)=0.0315/0.0855=7/19≈0.3684."
    ],
    "points": [
      "The network factorizes as P(A,B,C,D)=P(A)P(B)P(C|A)P(D|A,B), evaluated at the requested truth values. C has parent A and D has parents A and B.",
      "(a) Use P(¬A)=0.9 and P(¬C|¬A)=1−0.2=0.8. Then P(¬A,B,¬C,D)=0.9×0.5×0.8×0.6=0.216.",
      "(b) The numerator P(A,B,C,D)=0.1×0.5×0.7×0.9=0.0315. The other assignment consistent with the evidence contributes P(¬A,B,C,D)=0.9×0.5×0.2×0.6=0.054."
    ],
    "example": [
      "Normalize the two weights for A and ¬A given the evidence B,C,D: (0.0315, 0.054) ÷ (0.0315+0.054) = (7/19, 12/19)."
    ]
  },
  "9ce44ca0ec1fdab7": {
    "answer": [
      "Use hierarchical task network (HTN) planning to decompose Vacation(Vellore,Paris) into Prepare(Vellore,Paris) → Travel(Vellore,Paris) → Stay(Paris). A method specifies ordered subtasks, and primitive subtasks are actions with STRIPS preconditions, add lists and delete lists."
    ],
    "points": [
      "Example method: Prepare → BookFlight(ChennaiAirport,ParisAirport), ReserveRoom(Paris). Travel → Taxi(Vellore,ChennaiAirport), Fly(ChennaiAirport,ParisAirport), Taxi(ParisAirport,Paris). Stay → CheckIn(Paris), VisitParis. Assume the initial state includes At(Vellore), ValidPassport, EntryPermission, and suitable road, air and room availability.",
      "BookFlight(x,y): pre AvailableFlight(x,y), ValidPassport. Add Ticket(x,y). Delete ∅. ReserveRoom(c): pre AvailableRoom(c). Add Reservation(c). Delete ∅.",
      "Taxi(x,y): pre At(x), RoadConnection(x,y). Add At(y). Delete At(x). Fly(x,y): pre At(x), Ticket(x,y), ValidPassport, EntryPermission. Add At(y). Delete At(x), Ticket(x,y).",
      "CheckIn(c): pre At(c), Reservation(c). Add CheckedIn(c). Delete ∅. VisitParis: pre At(Paris), CheckedIn(Paris). Add VacationTaken(Paris). Delete ∅."
    ],
    "example": [
      "Book flight → Reserve room → Taxi to Chennai airport → Fly to Paris airport → Taxi to Paris → Check in → Visit Paris. Every primitive action's preconditions hold when executed, and the final state contains VacationTaken(Paris)."
    ]
  },
  "0bacc4852f28b630": {
    "answer": [
      "(a) Move C from A to the table, then put B on C and A on B. With a one-block gripper the primitive plan is Unstack(C,A) → PutDown(C) → PickUp(B) → Stack(B,C) → PickUp(A) → Stack(A,B).",
      "(b) A nondeterministic action may have several possible successor states for the same starting state. A conditional plan uses observations of the outcomes to select what to do next."
    ],
    "points": [
      "Initial: On(C,A), OnTable(A), OnTable(B), Clear(B), Clear(C), HandEmpty. Goal: On(A,B) ∧ On(B,C) ∧ OnTable(C).",
      "PickUp(x): pre OnTable(x), Clear(x), HandEmpty. Add Holding(x). Delete OnTable(x), Clear(x), HandEmpty. PutDown(x): pre Holding(x). Add OnTable(x), Clear(x), HandEmpty. Delete Holding(x).",
      "Unstack(x,y): pre On(x,y), Clear(x), HandEmpty. Add Holding(x), Clear(y). Delete On(x,y), Clear(x), HandEmpty. Stack(x,y): pre Holding(x), Clear(y). Add On(x,y), Clear(x), HandEmpty. Delete Holding(x), Clear(y).",
      "In AND–OR search for nondeterministic planning, an OR node chooses an action and an AND node covers all possible outcomes of that action. A strong plan guarantees reaching a goal for each outcome sequence. A strong cyclic plan can retry if it assumes fair outcomes."
    ],
    "example": [
      "Start [C/A] [B] → [A] [B] [C] → [B/C] [A] → [A/B/C], with the table supporting the bottom of each stack.",
      "If PickUp(B) can succeed or slip, observe the result. If Holding(B) is true, proceed to Stack(B,C). If B slipped and its position is still suitable, retry. A repeated slip remains possible unless the retry model assumes fairness or includes a guaranteed recovery branch."
    ]
  },
  "c5f46d8d71c8d97f": {
    "answer": [
      "Treat email-to-calendar conversion as event intent detection plus structured information extraction. A classifier finds scheduling messages, a sequence tagger extracts event fields, and a normalizer converts the extracted text into calendar values."
    ],
    "points": [
      "Parse the subject, sender, recipient list, timestamp and latest message body. Remove signatures and recognize quoted replies so that old meeting times are not imported as new events.",
      "Train on annotated email examples. Classify event intent (schedule, reschedule, cancel, or no event) and tag spans such as TITLE, DATE, START, END, DURATION, LOCATION, and PARTICIPANT. Associate them with the same event and use the subject to fill in a missing title when appropriate.",
      "Resolve relative dates using the message timestamp, normalize times with the stated or configured time zone, derive end time from duration, then check whether dates and times agree. Request confirmation for ambiguous, incomplete, or conflicting fields.",
      "Map to a calendar record with a title, start, end, location, attendees and a source-message identifier. The identifier can prevent duplicate entries when the same message or thread is handled again."
    ],
    "example": [
      "Example email received Mon 15 Sep 2025 in IST: “AI project review tomorrow at 2 pm for 30 minutes in Lab 3 with Meera.” Extract Title=AI project review, Date=tomorrow, Start=2 pm, Duration=30 min, Location=Lab 3, Attendee=Meera. Normalized start 2025-09-16 14:00 IST, end 14:30 IST."
    ]
  },
  "fa1e83641b363659": {
    "answer": [
      "(a) The knowledge base entails T → W. It entails ¬T, which makes the implication true.",
      "(b) (P∧Q) → (P∨R) is true in all eight rows."
    ],
    "points": [
      "From U∨W and ¬W, obtain U by disjunctive syllogism. From U and U→¬P, infer ¬P by modus ponens. From ¬P and ¬P→(R∧¬S), infer R∧¬S by modus ponens, then simplify to ¬S.",
      "From T→S and ¬S, infer ¬T by modus tollens. By disjunction introduction get ¬T∨W, which is equivalent to T→W.",
      "When P∧Q is true, P is true and therefore P∨R is true. In the other rows the antecedent is false, so the implication is true."
    ],
    "example": [
      "P Q R | P∧Q | P∨R | (P∧Q)→(P∨R)\nT T T |  T  |  T  |       T\nT T F |  T  |  T  |       T\nT F T |  F  |  T  |       T\nT F F |  F  |  T  |       T\nF T T |  F  |  T  |       T\nF T F |  F  |  F  |       T\nF F T |  F  |  T  |       T\nF F F |  F  |  F  |       T"
    ]
  },
  "f70db921f66ac9f9": {
    "answer": [
      "Steepest-ascent hill climbing starts at a candidate and moves to the neighbor with the best strictly improved objective, stopping when none improves it. For cost minimization, use the neighbor of lowest cost and move only if its cost is lower.",
      "Simulated annealing occasionally accepts uphill moves in a cost landscape. These moves allow it to cross barriers around local minima, especially early when its temperature is high."
    ],
    "points": [
      "Hill climbing normally keeps only the current state and a candidate, with no search tree. It is simple and can improve quickly when good solutions are reachable by local moves.",
      "Its answer is sensitive to the initial state and the neighborhood. It can stop at a local optimum, stall at a plateau, or make slow progress along a ridge. It offers no general global-optimality guarantee. Random restarts or bounded sideways moves can help.",
      "For a random neighbor y of x with cost E, let Δ=E(y)−E(x). Accept Δ≤0. If Δ>0, accept with probability exp(−Δ/T). Cool T over time so large cost increases are less likely and eventually the search favors improvement."
    ],
    "example": [
      "If the current cost is 8, its only neighbor costs 11, and beyond 11 there is a cost-3 state, hill climbing stops at 8. Annealing can take 8→11 with probability exp(−3/T), then accepts the improvement 11→3."
    ]
  },
  "5585a0e06faf6e35": {
    "answer": [
      "Functionality groups AI by the kind of behavior it exhibits. Technology groups it by the techniques that produce that behavior."
    ],
    "points": [
      "Reactive machines choose from the current state alone. A chess engine evaluating the current board is a standard example.",
      "Limited-memory systems use recent observations or a stored state. A driving system that estimates nearby vehicles’ motion from successive sensor readings is one example.",
      "Theory-of-mind AI would represent other agents’ beliefs, intentions and emotions. A hypothetical social robot that helps a person based on what that person falsely believes illustrates the idea.",
      "Self-aware AI would have awareness of its own mental states. An agent genuinely aware of its own thoughts is a hypothetical example.",
      "Technology families include symbolic AI (a rule-based expert system), classical machine learning (a decision-tree spam classifier), deep learning (a convolutional image classifier), and fuzzy logic (a temperature controller that reasons with degrees such as “somewhat hot”). Hybrid systems combine techniques.",
      "A related classification by capability distinguishes narrow AI (a specialised chess engine), general AI (hypothetically human-breadth learning and transfer), and superintelligence (hypothetically superior to humans across cognitive domains)."
    ],
    "example": [
      "A driving system can be limited-memory by functionality and use deep learning for perception plus symbolic rules for traffic constraints. The classifications describe different properties of the same system."
    ]
  },
  "f416f868defc9964": {
    "answer": [
      "Rahul should rest. Both chaining methods establish Cough and Migraine, the two prerequisites for Rest."
    ],
    "points": [
      "Let F, C, T, H and M denote fever, cough, fatigue, headache and migraine. Let L mean Rahul should look at bright lights and R mean Rahul should rest.",
      "The five rules are F → C, (C ∧ F) → T, (H ∧ T) → M, (M ∧ F) → ¬L, and (C ∧ M) → R. The initial facts are F and H.",
      "Forward chaining starts at F and H. F gives C, then C and F give T. H and T give M, then C and M give R. M and F also give ¬L.",
      "Backward chaining starts at R and requires C ∧ M. C requires known fact F. M requires known H and the subgoal T. T requires C and F, both proved. Thus M and then R succeed."
    ],
    "example": [
      "Backward goal tree\nR\n├─ C ← F ✓\n└─ M\n   ├─ H ✓\n   └─ T ← C ✓ and F ✓"
    ]
  },
  "a7f9526bc153d8d1": {
    "answer": [
      "Emma attends the registered event under the intended reading that it is an event hosted by the club. With explicit Host and Event predicates, the wording only identifies the Coding Hackathon as an event. The resolution proof needs the additional hosted-event premise."
    ],
    "points": [
      "Use constants m = Emma and h = Coding Hackathon. Define Member(x), ClubEvent(e), Active(x), Attends(x,e), Misses(x,e), Volunteers(x,e), Registers(x,e), and Event(e). ClubEvent(e) means the club hosts e.",
      "Translate (i) as ∀x∀e [(Member(x) ∧ ClubEvent(e)) → Attends(x,e)]. Translate (ii) as ∀x∀e [(Event(e) ∧ Misses(x,e)) → ¬Active(x)]. Translate (iii) as ∀x∀e [(Event(e) ∧ Volunteers(x,e)) → Active(x)].",
      "Translate (iv) as ∀x∀e [(Event(e) ∧ Registers(x,e)) → (Attends(x,e) ∨ Misses(x,e))]. The intended facts are Registers(m,h), Event(h), and Member(m). If “registers for an event” is read independently of the named event, write ∃e [Event(e) ∧ Registers(m,e)] as well as Event(h).",
      "Resolve the clause ¬Member(x) ∨ ¬ClubEvent(e) ∨ Attends(x,e) with Member(m), substituting x = m. Resolve ¬ClubEvent(e) ∨ Attends(m,e) with the intended ClubEvent(h), substituting e = h, to yield Attends(m,h). Resolve with the negated goal ¬Attends(m,h) to obtain the empty clause □."
    ],
    "example": [
      "Under the literal reading without ClubEvent(h), a countermodel can make Emma an inactive member who registers and misses the Coding Hackathon, with no club-hosted events or volunteers. All the premises hold in that model while Attends(m,h) is false."
    ]
  },
  "750eb9f889ea0c36": {
    "answer": [
      "With the empirical class-conditional frequencies, predict class + for x = (A=0, B=1, C=0). The unnormalised scores are 0.008 for + and 0 for −."
    ],
    "points": [
      "Compute each class prior from the number of training records in that class. For each feature value and class, divide the matching count by the class count.",
      "Assuming conditional independence of the features given the class, score each class k by P(k)·P(A=0 | k)·P(B=1 | k)·P(C=0 | k). Choose the largest score.",
      "Records 1, 5, 6, 9 and 10 are positive, so P(+) = 5/10. The query values occur 2, 1 and 1 times respectively among these records.",
      "Records 2, 3, 4, 7 and 8 are negative, so P(−) = 5/10. The query values occur 3, 2 and 0 times respectively. The zero count for C=0 makes the product zero."
    ],
    "example": [
      "Class | Prior | P(A=0 | class) | P(B=1 | class) | P(C=0 | class) | Score\n+     | 1/2   | 2/5            | 1/5            | 1/5            | 0.008\n−     | 1/2   | 3/5            | 2/5            | 0/5            | 0",
      "If explicitly asked to apply add-one smoothing to the binary likelihoods, the two scores are both 6/343 and a tie-break is needed. The question’s unsmoothed empirical estimate selects +."
    ]
  },
  "0d3d9302a2047193": {
    "answer": [
      "Using the printed P(A=true) column, (i) P(A, ¬B, ¬E, D, S) = 0.679773411 and (ii) P(B | A) ≈ 0.001902656 (0.1903%). The printed alarm table contains conflicting probabilities, so the result depends on which entries are trusted."
    ],
    "points": [
      "The graph has B → A ← E and D ← A → S. Its joint distribution factors as P(B)P(E)P(A | B,E)P(D | A)P(S | A).",
      "For (i), fix all five variables and multiply 0.998 × 0.999 × 0.999 × 0.91 × 0.75 = 0.679773411. The middle 0.999 is the printed P(A=true | ¬B, ¬E).",
      "For (ii), sum over the two earthquake cases with burglary true. P(B,A) = 0.002[0.001(0.94) + 0.999(0.95)] = 0.00189998.",
      "Add the two cases without burglary to obtain P(A) = 0.00189998 + 0.998[0.001(0.69) + 0.999(0.999)] = 0.998593598. Divide P(B,A) by P(A). The call nodes are unobserved in (ii), so their probabilities sum out."
    ],
    "example": [
      "The printed F,F row assigns 0.999 to both alarm outcomes, and two other rows also fail to sum to 1. The calculation above treats each printed true probability as authoritative and defines its false probability by complement.",
      "If trusting P(A=false | ¬B, ¬E) = 0.999 instead, set the corresponding true probability to 0.001. Keeping the other printed true probabilities gives (i) 0.000680453865 and (ii) 0.529891494. If the entire false column is instead taken as authoritative, (i) stays 0.000680453865 and (ii) becomes 0.595088803."
    ]
  },
  "a058a76e6e086721": {
    "answer": [
      "Represent the room transfer as a STRIPS problem over facts. With a carry-capable robot and an open connection from room R1 to room R2, the plan is PickUp(Box,R1) → Move(R1,R2) → PutDown(Box,R2)."
    ],
    "points": [
      "Initial state I = {RobotAt(R1), BoxAt(Box,R1), HandEmpty, Connected(R1,R2)}. Goal G = {BoxAt(Box,R2)}. Treat Connected as a static fact.",
      "PickUp(b,r). Preconditions {RobotAt(r), BoxAt(b,r), HandEmpty}. Add {Holding(b)}. Delete {BoxAt(b,r), HandEmpty}.",
      "Move(r,s). Preconditions {RobotAt(r), Connected(r,s)}. Add {RobotAt(s)}. Delete {RobotAt(r)}. Holding persists through the move.",
      "PutDown(b,r). Preconditions {RobotAt(r), Holding(b)}. Add {BoxAt(b,r), HandEmpty}. Delete {Holding(b)}.",
      "An applicable action changes the current fact set X to (X minus Delete) union Add. Facts outside those lists persist."
    ],
    "example": [
      "Ignoring the unchanged connection fact, the three states after the actions are {RobotAt(R1), Holding(Box)}, {RobotAt(R2), Holding(Box)}, and {RobotAt(R2), BoxAt(Box,R2), HandEmpty}. The final state contains the goal."
    ]
  },
  "047040ca1bcf4ef2": {
    "answer": [
      "In a nondeterministic domain, an HTN decomposes compound tasks into primitive actions and chooses later decompositions based on observed action outcomes. The resulting plan acts as a policy over outcomes and remaining tasks."
    ],
    "points": [
      "Represent each compound task with methods. A method has a context condition and an ordered or partially ordered network of subtasks. A primitive action can have multiple possible successor states.",
      "At an action with several possible effects, account for all reachable outcomes. Select different methods where the branches have different conditions. With incomplete observations, reason over possible current states and use sensing actions to separate cases.",
      "If every branch reaches the goal, the policy is a strong plan. Where action retries are permitted and fairness guarantees an eventually successful outcome, a strong cyclic policy can use retries. If permanent failure is possible, include a separate recovery method or report the infeasible branch."
    ],
    "example": [
      "A delivery robot decomposes Deliver into Navigate → Transfer → Confirm. If a corridor is blocked, Navigate selects a detour. If the recipient is absent, Transfer can select an authorised drop point, then Confirm checks that the package is recorded as delivered.",
      "A printer troubleshooting HTN runs a test print. On success it finishes. On a jam it chooses ClearJam and tests again. On low toner it chooses ReplaceCartridge and retests. A repeated fault triggers a service method."
    ]
  },
  "978fb5afffcc9210": {
    "answer": [
      "A search engine retrieves pages that match the topic, ranks them using relevance and authority signals, and removes or groups duplicates so the top results cover useful aspects of the query."
    ],
    "points": [
      "Crawl and index pages. An inverted index maps terms to pages for fast candidate retrieval. Query analysis can identify related terms and the intended topic, while term weighting or semantic models rank how well a page covers it.",
      "Combine content quality, relevance, source signals, and link authority. PageRank treats a link as a vote whose weight depends on the linking page’s importance and number of outgoing links. A linked scientific assessment can gain authority from several reputable institutions.",
      "Identify exact duplicates with fingerprints and near-duplicates with text similarity. Group copies and prefer a canonical or more useful source. Filter spam and choose a set of results that covers distinct intents, such as evidence, causes and responses.",
      "Use recency where it helps, such as finding current emissions data. An older reference can still rank well if it gives a useful overview or contains primary evidence."
    ],
    "example": [
      "For “climate change,” an IPCC synthesis can cover the scientific assessment, a national agency data page can supply temperature records, and an energy-agency report can address mitigation. Several mirrored copies of the same synthesis can be grouped into one result."
    ]
  },
  "c91432e4f5a28165": {
    "answer": [
      "(i) Greedy best-first search returns S → B → D → F → G → E. C and L are explored before the search finds the goal through B.",
      "(ii) Uniform-cost search returns S → B → D → E → G with total cost 4."
    ],
    "points": [
      "(i) Greedy best-first search uses the lowest h among all frontier nodes. After S it expands C(7), then its child L(6). L adds I(9) and J(9), so B(8) comes next. B adds D(6) and H(7). Expand D and then the lower-heuristic F and G. E has h=0. Following parent pointers gives the path.",
      "(ii) Uniform-cost search orders the frontier by accumulated cost g and stops when G is popped. Expanding S adds B(1), C(1) and A(2). Expanding B adds D(2) and E(4). C offers G(9) and A later lowers G to 8. D lowers E to 3, and E lowers G to 4."
    ],
    "example": [
      "One expansion order with alphabetical ties\nGreedy: S, C, L, B, D, F, G, E\nUCS:    S(0), B(1), C(1), A(2), D(2), E(3), G(4)\nUCS path cost = 1 + 1 + 1 + 1."
    ]
  },
  "8fc09bdffaa31034": {
    "answer": [
      "A* returns S → A → D → F → G with cost 4 + 5 + 1 + 13 = 23. A uniform-cost check also gives 23 as the shortest-path cost."
    ],
    "points": [
      "Set g(S)=0, use a min-priority frontier keyed by f(n)=g(n)+h(n), and record a parent for each improved path. Pop the lowest-f node. On each outgoing edge n → v of cost c, update g(v), the parent and the queue if g(n)+c improves the best known g(v). Reopen an expanded state when a cheaper route to it is found.",
      "After S, the frontier contains A with f=12 and B,C with f=16. A gives D at g=9 and f=14. D gives F at g=10 and f=13, H at f=32 and I at f=33.",
      "F adds G at f=23. B and C are expanded first at f=16. B’s route to D costs 25. C offers D at g=19 and F at g=13, so neither improves. C also adds E at f=34. G is next, and its parents give the path.",
      "The printed heuristic is inconsistent on D → F, where h(D)=5 > 1+3. It also overestimates from H because H → I → G costs 6 while h(H)=7. The uniform-cost check establishes optimality for this graph independently of the heuristic."
    ],
    "example": [
      "Pop order with alphabetical ties, shown as node (g,h,f)\nS (0,7,7) → A (4,8,12) → D (9,5,14) → F (10,3,13)\n→ B (10,6,16) → C (11,5,16) → G (23,0,23)"
    ]
  },
  "140633f0797714c4": {
    "answer": [
      "The minimax value of A is 8, so MAX chooses D. With left-to-right alpha–beta search, O, Q, the whole I subtree (I, T, U), and Y are skipped."
    ],
    "points": [
      "A and E through K are MAX nodes. B, C and D are MIN nodes. Back up each pair of leaf values with max, then the child values of B, C and D with min.",
      "After E gives 3, B has β=3. F’s first leaf N=8 and G’s first leaf P=7 each meet that upper bound, so skip O and Q. B returns 3, setting α=3 at A.",
      "At C, H gives 1. C lowers β to 1 ≤ α=3, so skip I and both its leaves. At D, J gives 8, setting β=8. K sees X=10, so it cuts off Y and D returns 8.",
      "Full minimax examines O(bᵈ) leaves for branching factor b and depth d. Alpha–beta with good move ordering reduces work without changing the answer. Iterative deepening, a depth cutoff with a position evaluation, and transposition tables make deeper searches practical. Quiescence search can reduce horizon effects. Games with random outcomes need chance nodes such as those in expectiminimax."
    ],
    "example": [
      "Full minimax backups\nE=max(2,3)=3   F=max(8,5)=8   G=max(7,6)=7\nH=max(0,1)=1   I=max(5,2)=5\nJ=max(8,4)=8   K=max(10,2)=10\nB=min(3,8,7)=3  C=min(1,5)=1  D=min(8,10)=8\nA=max(3,1,8)=8"
    ]
  },
  "25cd0bc913f0e9d3": {
    "answer": [
      "With MAX at the root and left-to-right order, the root minimax value is 1. The left MIN child gives 0 and the right MIN child gives 1. MAX therefore chooses the right child."
    ],
    "points": [
      "Start with α=−∞ and β=+∞. MAX keeps the greatest value returned so far and raises α. MIN keeps the least value returned so far and lowers β. A cutoff occurs when α ≥ β. At a cutoff the returned value may bound the node’s exact value, while the root still receives its exact minimax answer.",
      "Number each row’s internal nodes N(depth,index) from left to right, with the root at depth 0. Number the 25 leaves L1 through L25 in that same order.",
      "The cut branches are N(5,2)→L4, N(4,2)→N(5,4) and N(5,5), N(4,3)→N(5,7), N(2,2)→N(3,3), N(5,10)→L20, N(5,11)→L22, and N(3,5)→N(4,7). These cuts skip 14 of the 25 leaves.",
      "Left-to-right search visits leaves L1,L2,L3,L5,L11,L12,L17,L18,L19,L21,L25. Move ordering matters. In a uniform tree of depth d and branching factor b, best-case ordering reduces the leaf count to O(b^(d/2)), while poor ordering can still take O(b^d)."
    ],
    "example": [
      "Exit bounds (α,β) in the order of nodes within each depth. A dash marks a pruned node.\nDepth 0 MAX: (1,∞)\nDepth 1 MIN: (−∞,0) (0,1)\nDepth 2 MAX: (0,∞) (2,0) (1,∞) (2,1)\nDepth 3 MIN: (−∞,0) (−∞,0) — (0,1) (1,−5) (0,1)\nDepth 4 MAX: (0,∞) (3,0) (2,0) — (1,∞) (1,∞) — (2,1)\nDepth 5 MIN: (−∞,0) (0,−3) (−∞,0) — — (−∞,0) — — (0,1) (1,−3) (1,−5) — (0,1)",
      "Independent full minimax check, for depths 0 to 3\nDepth 0: 1\nDepth 1: 0, 1\nDepth 2: 0, 2, 1, 2\nDepth 3: 0, 2, 0, 1, −5, 2"
    ]
  },
  "b62f72343ce3fb92": {
    "answer": [
      "Describe the task along four independent axes. An agent's sensing, model of outcomes, decision time, and search or control method depend on where the task falls on each axis."
    ],
    "points": [
      "Fully observable environments give the agent the information needed to determine the current decision-relevant state. In a board puzzle the whole configuration is visible, so the agent can plan directly over board states. In a partially observable environment some state is hidden or readings are noisy. A robot in a building can retain its observation history and use a belief about its location and unseen rooms.",
      "In a deterministic environment each state–action pair determines a unique successor. A sliding-tile solver can plan a definite sequence. In a stochastic environment the same action at the same state can have several outcomes, as when a rover tries to move across loose gravel. Plan a policy and evaluate expected cost or risk.",
      "A static environment stays fixed while the agent deliberates, as in a crossword. A dynamic environment can change during deliberation, as traffic does. A driving agent needs timely sensing, action deadlines and replanning.",
      "A discrete environment has distinct states, actions or time steps in the chosen model. Tic-tac-toe has a finite game tree. A continuous environment can have real-valued state and action variables, such as a drone's position, velocity and thrust. Use continuous trajectory planning and feedback control or a suitable discretization."
    ],
    "example": [
      "A warehouse robot may face a partially observable, stochastic, dynamic environment with continuous movement. It estimates its pose from sensor readings, accounts for wheel slip and adjusts a planned trajectory when people move into the aisle."
    ]
  },
  "87f902e11e2d38be": {
    "answer": [
      "Write a state as three peg letters for the small, medium and large disks, in that order. The start is AAA and the goal is CCC. There are 3³ = 27 legal arrangements because the disks on each peg are stacked in size order.",
      "The shortest solution has seven moves. The medium and small disks must first form a stack on B, leaving C free for the large disk. After the large disk moves to C, two disks must form a stack on top of it. Both two-disk transfers require three moves."
    ],
    "points": [
      "An action moves the top disk from one peg to an empty peg or onto the top of a larger disk. Replace only that disk's peg letter to obtain the successor. Give each move cost 1 and use the goal test state = CCC.",
      "The tree shows a breadth-first traversal with repeated states merged. Every legal move is reversible. A tree that keeps repeating states is infinite because each move can be undone.",
      "The graph also has these reversible links between nodes already in the tree: BAA–CAA, ACA–CCA, ABA–BBA, ABA–ACA, ACB–BCB, ABC–CBC, BBB–CBB, AAB–CAB, AAB–AAC, CAB–CBB, BCC–CCC, AAC–BAC and BAC–BCC."
    ],
    "example": [
      "AAA\n├─ BAA\n│  └─ BCA\n│     ├─ ACA\n│     └─ CCA\n│        └─ CCB\n│           ├─ ACB\n│           │  └─ ABB\n│           │     ├─ BBB\n│           │     └─ CBB\n│           └─ BCB\n│              └─ BAB\n│                 ├─ AAB\n│                 └─ CAB\n└─ CAA\n   └─ CBA\n      ├─ ABA\n      └─ BBA\n         └─ BBC\n            ├─ ABC\n            │  └─ ACC\n            │     ├─ BCC\n            │     └─ CCC\n            └─ CBC\n               └─ CAC\n                  ├─ AAC\n                  └─ BAC",
      "Optimal path: AAA → CAA → CBA → BBA → BBC → ABC → ACC → CCC."
    ]
  },
  "bf817f859e5ae4c1": {
    "answer": [
      "The cheapest path to either goal is A → C → H → I with cost 5 + 2 + 1 = 8. If required to reach F specifically, continue I → F for cost 9. The edge between F and E points F → E.",
      "Breadth-first search minimizes edge count. Both routes to I through G and H have three edges, so the cost returned depends on expansion order. Depth-first search returns the first goal on its chosen traversal."
    ],
    "points": [
      "Use a visited set because A ↔ C and B ↔ E would cause repeated visits. With alphabetical successors and a goal test on removal, BFS uses a FIFO queue and expands by depth: A, then B/C/D, then E/G/H, then I. It records I's parent as G and returns A → C → G → I for cost 10. Expanding H before G gives the cost-8 path.",
      "With the same successor ordering, DFS recurses or uses a LIFO stack. It visits A, B, E, then backtracks to A and visits C, G, D and I. The first goal is I along A → C → G → I for cost 10. Choosing H first at C finds I for cost 8.",
      "BFS is complete on this finite graph and guarantees a shallowest goal, but its frontier can be large. DFS has a smaller frontier in deep search trees and can reach a deep solution early. It may first explore unproductive paths, as with B → E, and gives no shortest-depth or cost guarantee. Both graph searches may store a visited set."
    ],
    "example": [
      "Uniform-cost search removes the smallest accumulated cost first. With alphabetical cost tie-breaking, its removals run A(0), B(2), D(4), E(4), C(5), G(6), H(7), I(8). G first gives I a cost of 10 and H reduces it to 8. The test on removal ensures that the first goal settled is cheapest."
    ]
  },
  "ee9702e827d506a4": {
    "answer": [
      "On a plateau, the current state and its neighbors can have equal scores. A hill climber that requires strict improvement stops there. Simulated annealing permits equal-score moves and can also take a temporary loss to reach a better region."
    ],
    "points": [
      "At each step sample a neighbor. For a maximization score f, define Δ = f(neighbor) − f(current). Accept improvements and ties. For Δ < 0, accept with probability exp(Δ/T), where T > 0 is the current temperature.",
      "Ties are always accepted under this rule, so the search can wander across a flat region to reach an improving edge. A high temperature makes short downhill detours more likely. Cooling reduces acceptance of worse moves and favors exploitation. Keep the best state found since the current state can get worse."
    ],
    "example": [
      "Suppose consecutive states have scores 5 → 5 → 5 → 8. Strict hill climbing stops at the first 5. Annealing can take two ties and accept the jump to 8. If a detour includes 5 → 4, its acceptance probability is exp(−1/T), about 0.61 at T = 2 and 0.007 at T = 0.2."
    ]
  },
  "0840380d2225004d": {
    "answer": [
      "Assign A and B to M1 and C and D to M2. The score defined by the paper's hint, total processing time, is 3 + 2 + 2 + 3 = 10 minutes. Both machines have five minutes of work, so when they run in parallel all jobs finish by time 5."
    ],
    "points": [
      "Use four genes in the order A, B, C, D. Each gene is 1 for M1 or 2 for M2. A fitness function to minimize is f(x) = Σ p[j, x[j]], which yields the paper's 16 for 1211. A GA that maximizes fitness can use 1/f(x).",
      "A sample initial population is 1211 with cost 16, 1121 with cost 12, 1222 with cost 12 and 2212 with cost 16. Select 1121 and 1222 as the two lower-cost parents. One-point crossover after the second gene gives 1122 and 1221, with costs 10 and 14. Mutation can flip the second gene of 1221 to produce 1121. Keep the best chromosome by elitism and repeat until the termination criterion is met.",
      "Each job contributes at least its smaller processing time, giving a lower bound 3 + 2 + 2 + 3 = 10. The child 1122 attains it. For makespan, at least 10 minutes of total processing spread across two machines requires at least 5 minutes, which this assignment also attains."
    ],
    "example": [
      "Start both machines at time 0. M1 executes B from 0 to 2 and A from 2 to 5. M2 executes C from 0 to 2 and D from 2 to 5. This yields four completion times 2, 5, 2 and 5. Their sum is 14 minutes when measuring completion times from time zero."
    ]
  },
  "2d96eb1f34697b6e": {
    "answer": [
      "Use four-neighbor moves of cost 1, with 1-based coordinates (row, column). The drawing shades the square labeled G at (5,7). Treat the G label as an exception to the shading rule so the robot can enter it. If every shaded square is treated literally as a wall, the goal itself is blocked.",
      "With G traversable, the shortest plan is 10 moves: D, D, R, R, R, R, R, D, D, R. A breadth-first forward search finds it from (1,1), and a breadth-first backward search recovers the same path in reverse from (5,7)."
    ],
    "points": [
      "Forward search starts at the robot and enqueues legal neighboring cells. Record each parent at first discovery to recover the route. It uses actions exactly as the robot executes them and works with any test for goal states, but can expand dead ends away from the goal.",
      "Backward search starts at the specified goal and enumerates predecessor cells. Here moves are reversible, so predecessor generation uses the same adjacency. It initially follows a narrow corridor and is useful when the goal is specific and predecessors are cheap to generate. In directed tasks, predecessors must respect forward action direction and may be difficult to enumerate.",
      "With a FIFO queue and unit costs, the level at which a cell is discovered is its shortest distance from the search origin."
    ],
    "example": [
      "Depth   Forward discoveries\n0       (1,1)\n1       (2,1)\n2       (3,1)\n3       (3,2)\n4       (3,3)\n5       (3,4)\n6       (2,4), (3,5), (4,4)\n7       (1,4), (3,6), (5,4)\n8       (1,5), (2,6), (4,6), (5,3)\n9       (1,6), (5,6), (5,2)\n10      (5,7) goal, (5,1)",
      "Depth   Backward discoveries\n0       (5,7)\n1       (5,6)\n2       (4,6)\n3       (3,6)\n4       (2,6), (3,5)\n5       (1,6), (3,4)\n6       (1,5), (2,4), (3,3), (4,4)\n7       (1,4), (3,2), (5,4)\n8       (3,1), (5,3)\n9       (2,1), (5,2)\n10      (1,1) robot, (5,1)",
      "Path: (1,1) → (2,1) → (3,1) → (3,2) → (3,3) → (3,4) → (3,5) → (3,6) → (4,6) → (5,6) → (5,7)."
    ]
  },
  "8d17e41e2d51b5c5": {
    "answer": [
      "Give the robots a shared exploration objective such as increasing mapped area while minimizing time and duplication. Each robot estimates its pose and updates a map from sensor readings, then coordinates with its peers to select frontiers, plan safe trajectories and merge their observations."
    ],
    "points": [
      "Unknown geometry and noisy sensors make both mapping and localization uncertain. Use simultaneous localization and mapping (SLAM) with odometry and range or camera observations. Identify overlapping landmarks and loop closures, align coordinate frames, and update the joint map with the uncertainty of those alignments.",
      "To reduce repeated coverage, score frontiers by expected information gain, travel cost and reachability. Use a central assignment solver when coordination links are reliable or a distributed auction where agents bid for frontiers. Reassign work if a robot loses a route, runs low on power or fails.",
      "Continuous position and orientation mean a route must respect robot dimensions, turning radius, speed and obstacles. Generate a feasible path, commit to a short segment at a time, and use local collision avoidance or trajectory reservations to handle other robots and moving objects.",
      "Low bandwidth, latency and disconnections can produce stale maps and conflicting assignments. Exchange map updates, poses and goal claims periodically. During disconnection maintain local obstacle avoidance, keep a local submap and reconcile it once communication resumes."
    ],
    "example": [
      "Two robots start in a corridor. One claims the east frontier and the other the west frontier. They reserve time slots through a doorway when paths cross. After recognizing the same landmark on a return loop, they align their submaps, resolve overlaps and redistribute the remaining unexplored frontiers."
    ]
  },
  "7587332ec6186d80": {
    "answer": [
      "Represent database images with searchable visual features and any available text or metadata. Encode a query in the same space, retrieve likely matches through an index and rerank the candidates using a more precise comparison or feedback."
    ],
    "points": [
      "Semantic gap. Color and texture capture appearance, but a user may query an object, activity or scene. Learn semantic embeddings from labeled data or image–text pairs. Combine visual scores with captions, tags or metadata where available.",
      "Variability and occlusion. Viewpoint, scale, lighting, background and partial objects can change the representation. Use normalized or augmented features, local keypoints or region embeddings, then use geometric checks to verify near-duplicate matches.",
      "Scale and latency. Comparing a query against every high-dimensional vector is expensive. Use approximate nearest-neighbor indexing, vector compression or a coarse candidate stage followed by precise reranking. Tune the index to balance recall, query time and memory.",
      "Ambiguous intent and incomplete labels. A query such as ‘jaguar’ can refer to an animal or a car. Use text context, facets, query expansion or relevance feedback. A hybrid text-and-image system helps when tags are sparse.",
      "Key performance factors include diversity and quality of training data, query quality, feature discriminativeness, distance metric, index settings, metadata coverage and how relevance is defined. Measure precision@k, recall@k or mean average precision on representative queries, along with latency and resource cost."
    ],
    "example": [
      "For a query image of a particular bicycle, find candidate bicycle images by embedding similarity. Rerank using local feature matches on the frame and apply a metadata filter if the user supplied a brand."
    ]
  },
  "3a7211e6963ef45f": {
    "answer": [
      "Use constants Calculus and Exam. The predicate LivesIn(p,c) means person p resides in city c. HasBone(d,b) means bone b is associated with dog d."
    ],
    "points": [
      "1. ∀s [(Student(s) ∧ StudiesHard(s)) → Passes(s,Exam)].",
      "2. ∃c [City(c) ∧ ∀p (LivesIn(p,c) → Happy(p))].",
      "3. (Sunny ∧ ¬Windy) → EnjoyablePicnic.",
      "4. ∃s [Student(s) ∧ ¬Likes(s,Calculus) ∧ ∀m ((MathCourse(m) ∧ m ≠ Calculus) → Likes(s,m))].",
      "5. ∀d [Dog(d) → ∃b (Bone(b) ∧ HasBone(d,b))] ∧ ∀b [Bone(b) → ∃d (Dog(d) ∧ HasBone(d,b))]."
    ],
    "example": [
      "In the last formula, the bone can depend on the dog and the dog can depend on the bone. The existential quantifiers occur inside their respective universal quantifiers, so the formulation allows several dogs to share a bone or one dog to have several bones."
    ]
  },
  "d6005328b7f297cc": {
    "answer": [
      "The sentence is satisfiable but not valid. Its CNF is the single clause (¬P ∨ ¬Q ∨ ¬R ∨ S)."
    ],
    "points": [
      "Eliminate the outer implication using X → Y ≡ ¬X ∨ Y, giving ¬(P ∧ Q) ∨ (R → S).",
      "Eliminate the remaining implication and obtain ¬(P ∧ Q) ∨ (¬R ∨ S). Apply De Morgan's law to get (¬P ∨ ¬Q) ∨ (¬R ∨ S).",
      "Flatten the disjunction by associativity. A disjunction of literals is one CNF clause. It is false exactly when P, Q and R are true and S is false."
    ],
    "example": [
      "With P = Q = R = S = true all implications hold, giving a satisfying assignment. Changing only S to false gives a counterexample to validity."
    ]
  },
  "7e4620a2a5f3e4b1": {
    "answer": [
      "P(Influenza | fever, cough, fatigue) = 0.375 = 37.5%, assuming these are the only two diagnostic categories and the symptoms are conditionally independent given the diagnosis."
    ],
    "points": [
      "Let E be the observation that all three symptoms are present. The likelihood is P(E | Influenza) = 0.9 × 0.8 × 0.7 = 0.504 and P(E | Cold) = 0.7 × 0.6 × 0.5 = 0.21.",
      "Multiply each likelihood by its prior. The weighted terms are 0.2 × 0.504 = 0.1008 for influenza and 0.8 × 0.21 = 0.168 for a cold. The total evidence probability is 0.2688.",
      "Bayes' theorem gives P(Influenza | E) = 0.1008/0.2688 = 0.375."
    ],
    "example": [
      "The working model is one disease variable with two values, Influenza and Cold, pointing to Fever, Cough and Fatigue. The symptoms together give a likelihood ratio of 0.504/0.21 = 2.4, shifting the influenza probability from 20% to 37.5%."
    ]
  },
  "cda9cb2d23c9e4b0": {
    "answer": [
      "(i) P(Slippery = Yes | Season = Dry) = 0.317. (ii) P(Wet = Yes | Slippery = Yes) = 72/83 ≈ 0.8675."
    ],
    "points": [
      "Let W and L mean Wet = Yes and Slippery = Yes. The joint distribution factors as P(Season) P(Sprinkler | Season) P(Rain | Season) P(Wet | Rain, Sprinkler) P(Slippery | Wet). For a fixed rain value, the given wet probability is identical for sprinkler on and sprinkler off, so summing over the sprinkler probabilities gives 1.",
      "Thus P(W | Dry) = 0.8 × 0.3 + 0.1 × 0.7 = 0.31. By complementation, P(L | ¬W) = 1 − 0.9 = 0.1. The dry-season result is P(L | Dry) = 0.8 × 0.31 + 0.1 × 0.69 = 0.317.",
      "For (ii), average over both seasons. P(Rain = Yes) = 0.6 × 0.3 + 0.4 × 0.8 = 0.50, so P(W) = 0.8 × 0.50 + 0.1 × 0.50 = 0.45. Then P(L) = 0.8 × 0.45 + 0.1 × 0.55 = 0.415.",
      "Bayes' rule gives P(W | L) = P(L | W) P(W)/P(L) = 0.36/0.415 ≈ 0.8675."
    ],
    "example": [
      "Across 1,000 trials under this model, expect 360 wet-and-slippery outcomes and 55 dry-ground-and-slippery outcomes. The wet proportion among the 415 slippery outcomes is 360/415."
    ]
  },
  "22886c76a7e821b2": {
    "answer": [
      "Use machine perception for vital-sign streams, learning and probabilistic reasoning for clinical decision support, natural-language processing for patient conversations, and planning and coordination for hospital workflows."
    ],
    "points": [
      "Perception and time-series learning clean sensor measurements, track trends and flag unusual readings. Knowledge representation organizes symptoms, records and medical concepts. A probabilistic model combines uncertain evidence and ranks candidate diagnoses for clinician review.",
      "Natural-language understanding maps a patient’s question to an intent and extracts relevant details. Dialogue management asks for missing information, and language generation produces an understandable reply. Planning and multi-agent coordination schedule tasks within resource constraints and exchange requests with pharmacy and scheduling systems.",
      "Performance measures: accurate and timely alerts, few false alarms, useful diagnosis suggestions, correct and understandable conversations, successful coordination and patient-data privacy.",
      "Environment: patients, clinicians, ward equipment, records, pharmacy and scheduling systems. Actuators: monitor/dashboard alerts, messages or spoken replies, and authorized record or scheduling requests. Sensors: vital-sign devices, record feeds, patient speech/text and status messages from hospital systems.",
      "The environment is partially observable because sensors and records provide incomplete evidence, stochastic because outcomes are uncertain, sequential because current choices affect later care, and dynamic because patients and resources change while the assistant is deciding. It is mixed continuous/discrete and cooperative multi-agent. Observations and action outcomes are also only partly known."
    ],
    "example": [
      "Vital-sign stream → perception → trend and confidence estimate → reasoning with records → clinician alert. A follow-up request can pass through dialogue management to the appointment scheduler."
    ]
  },
  "0123ded5754cff0b": {
    "answer": [
      "DFS finds A → B → C → D → E → I → J with cost 26. IDDFS first reaches J at depth 4 via A → B → C → E → J with cost 19. UCS finds A → F → G → I → J with minimum cost 10."
    ],
    "points": [
      "Treat the links as undirected. Use alphabetical neighbors in DFS and depth-limited DFS, and alphabetical order for tied UCS costs. Ignore the numbers beside the nodes because these searches use no heuristic.",
      "DFS marks a node visited on entry and follows the first unvisited neighbor. It backtracks from H through F and G to I before visiting J.",
      "IDDFS reruns depth-limited DFS with limits 0, 1, 2, 3 and 4. Each iteration checks only for cycles on the current path, so a node may be visited on different branches at the same depth limit.",
      "UCS removes the frontier node with the lowest cumulative edge cost and stops when it removes J. DFS does not optimize depth or cost. IDDFS minimizes depth here, while UCS minimizes cost."
    ],
    "example": [
      "DFS visit order: A, B, C, D, E, I, G, F, H, J\nDFS cost: 6 + 3 + 1 + 8 + 5 + 3 = 26",
      "IDDFS limit 0: A\nLimit 1: A, B, F\nLimit 2: A, B, C, D, F, G, H\nLimit 3: A, B, C, D, E, D, C, E, F, G, I, H, I\nLimit 4: A, B, C, D, E, E, D, I, J\nIDDFS cost: 6 + 3 + 5 + 5 = 19",
      "UCS removal order with cumulative costs: A(0), F(3), G(4), B(6), I(7), D(8), C(9), H(9), J(10)\nUCS cost: 3 + 1 + 3 + 3 = 10"
    ]
  },
  "23c926381a97a57a": {
    "answer": [
      "Greedy best-first and A* both return A → B → E → Z with path cost 9 + 11 + 4 = 24 when ties are resolved alphabetically. Greedy removes four nodes including the goal. A* removes seven."
    ],
    "points": [
      "Set h(Z)=0 and take the graph edges as undirected. Greedy prioritizes h alone, so after A it chooses B(14), then E(5), then Z(0).",
      "A* prioritizes f=g+h. After A, OPEN contains C with f=4+18=22, B with f=9+14=23 and D with f=7+18=25. Expanding C adds F with f=16+8=24 and E with f=21+5=26.",
      "B improves E to g=20, f=25. F adds Z at g=f=25. The tied nodes D, E and Z are processed alphabetically, so E improves Z to g=f=24 before Z is removed.",
      "On this graph the shortest route costs 24. The supplied heuristic overestimates at E because h(E)=5 and the true remaining cost is 4. If a tie policy removes Z before E, A* can instead return A → C → F → Z at cost 25. The usual optimality guarantee needs an admissible heuristic."
    ],
    "example": [
      "Greedy removal order (h): A(21), B(14), E(5), Z(0)\nA* removal order (g,h,f): A(0,21,21), C(4,18,22), B(9,14,23), F(16,8,24), D(7,18,25), E(20,5,25), Z(24,0,24)"
    ]
  },
  "c5d112f426658fbe": {
    "answer": [
      "The MAX root has minimax value 6. With left-to-right expansion and cutoff at α ≥ β, prune the last two leaves of F, B’s direct leaf 4 and subtree H, C’s subtree J, and D’s subtree K."
    ],
    "points": [
      "The upward triangles take maxima: E=max(4,5,6)=6, F=max(6,1,9)=9, G=max(5,4)=5, H=max(1,3)=3, I=max(2,6)=6, J=max(1,3,6)=6 and K=max(8,6,3)=8.",
      "The downward triangles take minima: A=min(6,9,9)=6, B=min(5,4,3)=3, C=min(9,6,6)=6 and D=min(6,8)=6. The root takes max(6,3,6,6)=6.",
      "At A, E sets β=6. F sees its first leaf 6, reaching α=β=6 and pruning its leaves 1 and 9. A’s direct leaf 9 is still visited. The root raises α to 6 when A returns.",
      "At B, G returns 5, so β=5≤6 and the direct leaf 4 and all of H are skipped. At C, its direct leaf 9 and I are visited. I returns 6, so β=6 and J is skipped. At D, its first leaf 6 sets β=6 immediately, skipping K."
    ],
    "example": [
      "Leaves visited in order: 4, 5, 6, 6, 9, 5, 4, 9, 2, 6, 6. This examines 11 of the 22 leaves."
    ]
  },
  "37c46752f124988e": {
    "answer": [
      "(a) The Calculus test follows by conjunction elimination, modus ponens and disjunctive syllogism. (b) Forward chaining establishes that Jack cannot have killed Tuna and then derives that Curiosity killed Tuna."
    ],
    "points": [
      "Let M mean Monday, A an AI exam, C a Calculus exam and P that the AI professor is absent. Premises are M → (A ∨ C), P → ¬A, and M ∧ P. From M ∧ P derive M and P. Modus ponens yields A ∨ C and ¬A. Disjunctive syllogism yields C.",
      "Represent the facts as Dog(d), Owns(Jack,d), Cat(Tuna), and Killed(Jack,Tuna) ∨ Killed(Curiosity,Tuna). The first rule is Dog(y) ∧ Owns(x,y) → AnimalLover(x). The second is Cat(z) → Animal(z). The third is AnimalLover(x) ∧ Animal(z) → ¬Killed(x,z).",
      "To chain on the disjunction, use its equivalent rule ¬Killed(Jack,Tuna) → Killed(Curiosity,Tuna). Negative conclusions here are explicit facts. In a positive Horn-rule implementation, represent the signed fact ¬Killed(Jack,Tuna) by a separate predicate such as CannotKill(Jack,Tuna)."
    ],
    "example": [
      "Dog(d), Owns(Jack,d) → AnimalLover(Jack)\nCat(Tuna) → Animal(Tuna)\nAnimalLover(Jack), Animal(Tuna) → ¬Killed(Jack,Tuna)\n¬Killed(Jack,Tuna) → Killed(Curiosity,Tuna)"
    ]
  },
  "d8765451436c61ea": {
    "answer": [
      "Resolution derives Admires(John,Alice) and Person(Alice), then InfluencedBy(John,Alice). Resolving it with the negated goal yields the empty clause."
    ],
    "points": [
      "Translate the first rule as ∀x,a,b ((Reads(x,b) ∧ Wrote(a,b)) → Admires(x,a)), the second as ∀a (Author(a) → Person(a)), and the third as ∀x,y ((Admires(x,y) ∧ Person(y)) → InfluencedBy(x,y)). Variables in the corresponding clauses are universally quantified.",
      "CNF clauses are C1: ¬Reads(x,b) ∨ ¬Wrote(a,b) ∨ Admires(x,a), C2: ¬Author(a) ∨ Person(a), and C3: ¬Admires(x,y) ∨ ¬Person(y) ∨ InfluencedBy(x,y). Add the unit facts Author(Alice), Wrote(Alice,Book1) and Reads(John,Book1), and the negated goal ¬InfluencedBy(John,Alice).",
      "Resolve C1 with Reads(John,Book1) using x=John and b=Book1 to get ¬Wrote(a,Book1) ∨ Admires(John,a). Resolve with Wrote(Alice,Book1) using a=Alice. Resolve C2 with Author(Alice) to get Person(Alice).",
      "Resolve C3 with Admires(John,Alice) to get ¬Person(Alice) ∨ InfluencedBy(John,Alice), and then with Person(Alice) to get the positive goal. The positive and negative goal clauses resolve to contradiction, proving entailment."
    ],
    "example": [
      "Reads(John,Book1) + Wrote(Alice,Book1) + C1 ⇒ Admires(John,Alice)\nAuthor(Alice) + C2 ⇒ Person(Alice)\nAdmires(John,Alice) + Person(Alice) + C3 ⇒ InfluencedBy(John,Alice)\nInfluencedBy(John,Alice) + ¬InfluencedBy(John,Alice) ⇒ □"
    ]
  },
  "e585d4b80b53696c": {
    "answer": [
      "Uncertainty means the available evidence does not determine which relevant state of the world is true or which outcome an action will produce. Bayes’ theorem updates a prior distribution using new evidence. Here, P(T)=0.74 and P(C2 | T)=21/74≈0.2838."
    ],
    "points": [
      "Sources of uncertainty include noisy observations, incomplete records and stochastic outcomes. The prior P(H) represents knowledge before evidence E. The likelihood P(E | H) models how probable that evidence is given the hypothesis. The posterior is P(H | E)=P(E | H)P(H)/P(E).",
      "Posteriors let an agent compare competing hypotheses and, when utilities are supplied, choose an action that maximizes expected utility under the updated probabilities.",
      "For the three mutually exclusive colleges, the total pass probability is 0.50×0.90 + 0.30×0.70 + 0.20×0.40 = 0.45+0.21+0.08=0.74.",
      "The joint probability of college C2 and a pass is 0.30×0.70=0.21. Divide by 0.74 to obtain P(C2 | T)≈28.38%."
    ],
    "example": [
      "Among 100 expected applicants, 45 C1 applicants pass, 21 C2 applicants pass and 8 C3 applicants pass. Among the 74 passing applicants, 21 are from C2. Observing a pass lowers the C2 probability from 30% to about 28.4% because the C2 pass rate is below the overall pass rate."
    ]
  },
  "342b169e3dcbfa95": {
    "answer": [
      "Predict reject. The Naive Bayes score is 1/32 for reject and 1/64 for accept. Normalizing the two scores gives probabilities 2/3 and 1/3 respectively."
    ],
    "points": [
      "Estimate the priors as P(accept)=4/12 and P(reject)=8/12. Assume the three features are conditionally independent given the loan class.",
      "Among the four accepts, three have age <40, one has Normal CIBIL and one is employed. The accept score is (4/12)(3/4)(1/4)(1/4)=1/64.",
      "Among the eight rejects, two have age <40, two have Normal CIBIL and six are employed. The reject score is (8/12)(2/8)(2/8)(6/8)=1/32. All needed counts are positive, so the calculation can use unsmoothed frequencies."
    ],
    "example": [
      "Class    Prior   Age<40  Normal  Employed   Score\nAccept    4/12     3/4     1/4      1/4       1/64\nReject    8/12     2/8     2/8      6/8       1/32"
    ]
  },
  "b52ea8520558cfa8": {
    "answer": [
      "Move B and D to the table to clear A and C. Then place A on B and C on A. The two initial clearing moves may be done in either order."
    ],
    "points": [
      "Predicates: On(x,y), OnTable(x), Clear(x). Treat the table as having space for another block and the block moves as atomic. Initial facts are On(B,A), On(D,C), OnTable(A), OnTable(C), Clear(B) and Clear(D). Goal facts are On(C,A) and On(A,B).",
      "MoveToTable(x,y): PRE={On(x,y), Clear(x)}, ADD={OnTable(x), Clear(y)}, DEL={On(x,y)}. The moved block stays clear.",
      "MoveFromTable(x,y): PRE={OnTable(x), Clear(x), Clear(y)}, ADD={On(x,y)}, DEL={OnTable(x), Clear(y)} for distinct x and y. In a single-gripper formulation these atomic operators expand to Unstack then Putdown, and Pickup then Stack, respectively.",
      "Define U=MoveToTable(B,A), V=MoveToTable(D,C), X=MoveFromTable(A,B), Y=MoveFromTable(C,A). Require U≺X, V≺Y and X≺Y. X must precede Y because Y removes Clear(A), which X needs. Both X and Y precede Finish."
    ],
    "example": [
      "Partial order:\nStart → U → X → Y → Finish\nStart → V ─────→ Y\n\nOne valid linearization is U, V, X, Y. The final stack is C on A on B, with B and D on the table."
    ]
  },
  "98cca3f0b93030d5": {
    "answer": [
      "Decompose Vacation(London) into preparing the trip, booking travel and lodging, flying to London, checking in, visiting an attraction and returning home. Choose primitive actions whose preconditions are supported by the current state and the effects of earlier actions."
    ],
    "points": [
      "One initial state contains At(Home), ValidDocuments, BudgetReady, OutboundAvailable, ReturnAvailable, HotelAvailable and AttractionAvailable. ValidDocuments means the traveler has the required travel authorization. The goal is At(Home) ∧ Visited(Attraction).",
      "ReserveTrip decomposes into BookOutbound, BookReturn and BookHotel. Each requires its matching availability fact and BudgetReady, and adds OutboundBooked, ReturnBooked or HotelBooked. Entry booking for the chosen attraction can occur in parallel with those reservations.",
      "FlyOut requires At(Home), ValidDocuments and OutboundBooked. It adds At(London) and deletes At(Home). CheckIn requires At(London) and HotelBooked and adds CheckedIn.",
      "Visit requires At(London), CheckedIn and a reservation for the chosen attraction, and adds Visited(Attraction). CheckOut requires CheckedIn and Visited(Attraction), and deletes CheckedIn. FlyHome requires At(London), ReturnBooked and ValidDocuments and the hotel stay completed. It adds At(Home) and deletes At(London)."
    ],
    "example": [
      "Vacation(London)\n├─ Prepare: verify documents and budget\n├─ ReserveTrip: book outbound, return, hotel and attraction\n├─ LondonStay: fly out → check in → visit attraction → check out\n└─ Return: fly home",
      "A strict STRIPS encoding can add StayCompleted at CheckOut and require it at FlyHome. AcquireAttractionEntry requires AttractionAvailable and BudgetReady and adds AttractionBooked, which supplies Visit’s reservation precondition."
    ]
  },
  "be39a9c53b08e405": {
    "answer": [
      "An information retrieval system collects documents, indexes their contents, processes a query, scores candidates and displays a ranked result list. Evaluate the resulting order with judged relevance, and use link signals such as PageRank when constructing a web ranking."
    ],
    "points": [
      "Collection and indexing: crawl and deduplicate pages, extract content, tokenize and normalize terms, then build an inverted index mapping each term to its documents and useful occurrence statistics.",
      "Query and retrieval: normalize the query, retrieve candidates from posting lists and score them using signals such as BM25, semantic similarity and page authority. Sort by score and show titles and snippets. Querying “London museum” should place highly relevant museum pages near the top.",
      "To evaluate a ranker, get human relevance judgments for queries and compare metrics on the same queries. P@k is the fraction of the first k results judged relevant. AP rewards early relevant results by averaging precision at relevant positions over the total relevant documents, and MAP averages AP over queries. nDCG@k adds graded relevance and discounts lower positions.",
      "For link-based ranking, PageRank iteratively updates PR(p)=(1−d)/N+d Σ[PR(q)/outdegree(q)] over pages q linking to p. The damping factor d represents the chance of following a link. PageRank measures link authority, which a search engine can combine with query-specific relevance."
    ],
    "example": [
      "Rank evaluation: if the top five judgments are [relevant, irrelevant, relevant, relevant, irrelevant] and four documents in the collection are relevant, P@5=3/5, recall@5=3/4, and AP@5=(1+2/3+3/4)/4≈0.604.",
      "PageRank: with A→B, B→A, C→A and d=0.85, start from 1/3 per page. The first update is PR(A)≈0.6167, PR(B)≈0.3333 and PR(C)=0.05 because A receives links from two pages, B from one and C from none."
    ]
  },
  "a194b34208df7940": {
    "answer": [
      "Histogram of Oriented Gradients (HOG) with a linear SVM recognizes objects by encoding local edge directions and classifying candidate image windows. For example, it can recognize pedestrians against a street background."
    ],
    "points": [
      "Convert a candidate window to grayscale. Compute horizontal and vertical intensity derivatives, then gradient magnitude m=√(Gx²+Gy²) and orientation θ=atan2(Gy,Gx). A typical unsigned HOG uses angles in [0°,180°).",
      "Divide the window into small cells and let each pixel vote for nearby orientation bins with weight proportional to its gradient magnitude. Group neighboring cells into overlapping blocks and normalize each block’s histogram to reduce sensitivity to contrast.",
      "Concatenate normalized block histograms into the feature vector x. Train a linear SVM on labeled feature vectors for positive windows and background windows. At test time, score a candidate with w·x+b. Larger positive scores indicate better agreement with the learned shape.",
      "For detection across an image, slide windows over an image pyramid, keep sufficiently high scores and apply non-maximum suppression to merge overlapping detections. HOG works best for classes with characteristic edges and can struggle with heavy occlusion or large changes in pose."
    ],
    "example": [
      "Image → candidate windows at several scales → gradients → cell histograms → block normalization → HOG vector → SVM score → pedestrian boxes",
      "A 64×128 window with 8×8 cells contains 8×16 cells. Using overlapping 2×2-cell blocks stepped by one cell and nine bins per cell gives 7×15×4×9=3,780 features. In a pedestrian example, gradients along the head, shoulders and torso help the SVM distinguish the shape from background windows."
    ]
  },
  "bb81636c7beed226": {
    "answer": [
      "PEAS for a virtual assistant that supports routine base administration. It helps personnel find current procedures, schedule maintenance and check supply requests."
    ],
    "points": [
      "Performance measure. Correct answers that cite an up-to-date procedure, low response time, accurate records and ticket routing, appropriate handling of restricted information, and successful escalation of uncertain requests.",
      "Environment. Base offices and workshops, staff and supervisors, shared calendars, inventory and maintenance systems, and the approved procedure library.",
      "Actuators. Display or speak answers, link to approved documents, create a draft request, send a reminder, or route a ticket for review.",
      "Sensors. Receive spoken or typed queries, role and identity data, authorized calendar and inventory updates, and the current version of procedures.",
      "The environment is partially observable because records can lag behind reality, stochastic because deliveries and user responses can vary, sequential because updates affect later requests, and dynamic because staffing, inventory and schedules change while the agent operates. Tickets and roles are discrete, while quantities such as arrival time can be continuous. It is a cooperative multiagent setting with personnel and software services."
    ],
    "example": [
      "A technician reports a faulty office printer. The assistant reads the asset record and staff calendar, offers a suitable maintenance window, drafts a ticket and requests approval if its record conflicts with the technician’s report."
    ]
  },
  "b517bf2a012fcf72": {
    "answer": [
      "Uniform-cost search finds S → B → A → C → G, at total cost 1 + 2 + 3 + 4 = 10."
    ],
    "points": [
      "Order the frontier by accumulated path cost g. After expanding B, decrease A’s priority from 4 to 3 and change its predecessor to B. Accept the goal when G is removed from the priority queue at minimum cost.",
      "For tree search, let b be the branching factor, d the shallowest goal depth, m the maximum depth, ℓ the depth limit, ε the positive lower bound on step costs, and C* the optimal path cost.",
      "BFS is complete for finite b and cost-optimal with equal step costs. Time and space are O(b^d) with an early goal test on generation. Testing after removal can generate a layer deeper, giving O(b^(d+1)) in the worst case.",
      "UCS is complete for finite b and step costs at least ε > 0, and cost-optimal. Time measured in nodes generated and space are O(b^(1+⌊C*/ε⌋)).",
      "DFS has O(b^m) time and O(bm) space. It can fail to terminate on an infinite branch and does not guarantee a cheapest solution. On a finite graph, duplicate checking gives completeness.",
      "Depth-limited DFS uses O(b^ℓ) time and O(bℓ) space. It finds a reachable goal within its limit when ℓ ≥ d and b is finite. Depth limits give no general optimality guarantee.",
      "Iterative deepening is complete for finite b, optimal with equal step costs, and uses O(b^d) time and O(bd) space. Bidirectional BFS can reduce time and space to O(b^(d/2)) with a known goal, enumerable predecessors, unit costs and a correct meeting condition."
    ],
    "example": [
      "Step             Frontier in increasing g\nStart            S:0\nExpand S         B:1, A:4\nExpand B         A:3, E:11\nExpand A         C:6, D:11, E:11\nExpand C         G:10, D:11, E:11\nRemove G         Goal reached (D:11, E:11 remain)"
    ]
  },
  "cdc8bb8b346151f7": {
    "answer": [
      "Greedy best-first returns A → H with cost 7. A* returns A → C → G → H with cost 6. A → C → F → H also costs 6, so there are two optimal paths."
    ],
    "points": [
      "Greedy prioritizes h(n). A starts at h=5. Expanding it gives H with h=0, B with h=3 and C with h=4, so H is selected immediately.",
      "A* prioritizes f(n)=g(n)+h(n). Expanding A inserts B with (g,h,f)=(1,3,4), C with (2,4,6) and H with (7,0,7). B is next. Its successors are D with (5,2,7) and E with (7,6,13).",
      "Next expand C. It generates F with (5,3,8) and G with (4,1,5). Expand G and update H to (6,0,6). H is now first in the queue, and following its parents gives A → C → G → H.",
      "Since h(F)=3 exceeds the true remaining cost of 1, this heuristic is inadmissible. Verify optimality directly on this graph. The only routes into H come via A, F or G, with costs 7, 6 and 6 respectively. The branch through B terminates at E."
    ],
    "example": [
      "A* expansion      Frontier (node:f)\nStart             A:5\nAfter A           B:4, C:6, H:7\nAfter B           C:6, D:7, H:7, E:13\nAfter C           G:5, D:7, H:7, F:8, E:13\nAfter G           H:6, D:7, F:8, E:13\nRemove H          Goal reached at g=6"
    ]
  },
  "cc6de33a6be8a96e": {
    "answer": [
      "Using the apparent reading of the faint leaf L19 as −1, MAX chooses the right child and the root value is −1. Number the leaves L1 to L32 left to right and visit children in that order. For an alternate reading x of L19, keep the exact dependence v(root)=max(−4,x,−3) for the plausible negative readings of that leaf."
    ],
    "points": [
      "Work bottom-up. At the left depth-1 MIN node, its two depth-2 MAX children have values −4 and 0. These come from min-pairs (−10,−4) and (0,−3) respectively. MIN therefore gives −4, setting root α to −4.",
      "On the right, the MAX child over L17–L24 takes the larger of min(10,max(x,−3)) and −4. The other MAX child, over L25–L32, is positive. Right MIN therefore returns −1 for x=−1, or −3 if x is at most −3. Both readings choose the right child.",
      "For α–β, start (α,β)=(−∞,+∞). MAX raises α and MIN lowers β. Cut off unvisited siblings once α ≥ β. On the left, L7 reaches the bound β=−4, so skip L8. In L9–L16, β=−4 also cuts L10 and L12 at the bottom MAX nodes. The MAX node covering L9–L16 can already achieve at least 0, so cut L13–L16.",
      "On the right, the MAX node covering L17–L24 has α=−1 after L17–L20 on the apparent reading. The MIN node covering L21–L24 sees −4 from L21–L22 and cuts L23–L24. Right MIN then sets β=−1. Its last MAX child sees that L25 exceeds this β, cutting L26. L27 is below β, so evaluate L28. The MAX child has proved a score above β and cuts L29–L32. The same cuts occur if the ambiguous L19 is read as −7."
    ],
    "example": [
      "Leaves evaluated in order\n1, 2, 3, 4, 5, 6, 7, 9, 11, 17, 18, 19, 20, 21, 22, 25, 27, 28\nLeaves pruned\n8, 10, 12, 13–16, 23–24, 26, 29–32"
    ]
  },
  "245f352d6d81b4fd": {
    "answer": [
      "A genetic algorithm maintains a population of candidate solutions. It repeatedly selects comparatively fit parents, recombines their chromosomes and introduces random mutations to create the next generation."
    ],
    "points": [
      "Initial population. Pick a representation that can encode valid candidates, such as a permutation of tasks. Generate diverse chromosomes at random and optionally seed a few heuristic candidates.",
      "Fitness function. Score the quality of candidate solutions. For a schedule, rank feasible schedules by lower total tardiness or use penalties for constraint violations and repair invalid schedules.",
      "Selection. Run small tournaments and choose the best candidate in each as a parent. Occasional selection of less fit parents preserves genetic diversity. Elitism can carry the best candidate directly to the next generation.",
      "Crossover. Combine material from two parents. For a permutation, copy a segment from one parent and fill unoccupied positions in the other parent’s order, skipping duplicates.",
      "Mutation. Alter a small fraction of offspring, for example by swapping two tasks, which can introduce a useful arrangement missing from both parents. Re-evaluate and repeat until the generation budget, target fitness or stagnation limit is reached."
    ],
    "example": [
      "For a factory schedule with several interacting machines and due dates, two parents can carry different good task subsequences. A permutation crossover that preserves those subsequences can combine them in one generation. Single-state hill climbing can be trapped behind a move that initially raises tardiness. Simulated annealing can cross such a barrier through stochastic moves but may need several lucky moves at the right temperature. A diverse GA with useful crossover can reach a better schedule within the same evaluation budget on that kind of instance."
    ]
  },
  "6bf82377f11cf0be": {
    "answer": [
      "Part (a) uses quantified implications, a uniqueness condition and a ground fact. In part (b), cancellation follows if it is raining. A sunny day with dry ground and a picnic that goes ahead satisfies all four premises, so a resolution refutation is impossible with the stated facts."
    ],
    "points": [
      "(i) ∀x[(Dog(x) ∧ ¬∃m(Mountain(m) ∧ LivesNear(x,m))) → Friendly(x)]. Mountain proximity removes the default obligation to be friendly.",
      "(ii) Let F(x) ≡ CEO(x) ∧ ReportsDirectlyTo(x,Board). Exactly one means ∃x[F(x) ∧ ∀y(F(y) → y=x)].",
      "(iii) ∀x[(Person(x) ∧ ∃d(Dog(d) ∧ Owns(x,d))) → ∃y(Friend(x,y) ∧ ∃c(Cat(c) ∧ Owns(y,c)))].",
      "(iv) Student(Mary).",
      "For (b) let R, W, S and C mean raining, wet ground, sunny and picnic cancelled. The clauses are ¬R ∨ W, ¬W ∨ C, ¬S ∨ ¬R and R ∨ S. Add the negated goal ¬C.",
      "Resolve with ¬W ∨ C to derive ¬W, then with ¬R ∨ W to derive ¬R, then with R ∨ S to derive S. Both S and ¬R agree with ¬S ∨ ¬R, so the derivation can stop consistently."
    ],
    "example": [
      "Countermodel: R=false, S=true, W=false, C=false. If a further fact R were supplied, resolving it with the derived ¬R would yield the empty clause □ and prove C."
    ]
  },
  "361e56c7f0c08c57": {
    "answer": [
      "Part (a). Both forward and backward chaining derive Happy(Tweety). Part (b). An intelligent dolphin provides the witness to ∃x(Intelligent(x) ∧ ¬Read(x))."
    ],
    "points": [
      "Forward chaining. Start with Sparrow(Tweety) and Flies(Tweety). The sparrow rule yields Bird(Tweety). Substitute x= Tweety in Bird(x) ∧ Flies(x) → Happy(x) and fire it.",
      "Backward chaining. To prove Happy(Tweety), unify the goal with Happy(x) using {x ↦ Tweety}. This requires Bird(Tweety) and Flies(Tweety). Flies(Tweety) is a fact. Replace Bird(Tweety) with the subgoal Sparrow(Tweety), which is also a fact. All subgoals succeed.",
      "For (b), express the universal rules as clauses ¬Read(x) ∨ Literate(x) and ¬Dolphin(y) ∨ ¬Literate(y). Skolemize the existential premise to facts Dolphin(d) and Intelligent(d) for a fresh constant d.",
      "Unify Dolphin(y) with Dolphin(d) using {y ↦ d}, yielding ¬Literate(d). Unify Literate(x) with Literate(d) using {x ↦ d}, then resolve the complementary literals to obtain ¬Read(d). Combine it with Intelligent(d) and introduce the existential quantifier."
    ],
    "example": [
      "Dolphin(d) ⇒ ¬Literate(d) ⇒ ¬Read(d). With Intelligent(d), the same individual d is both intelligent and unable to read."
    ]
  },
  "5956ad024989e5c5": {
    "answer": [
      "Under the explicit assumption that migraine M and regular headache H are independent in this calculation, P(M | S) ≈ 0.08999, or about 9.00%. The stated marginal probabilities alone do not determine an exact value."
    ],
    "points": [
      "Partition the sample space into M, ¬M ∧ H, and ¬M ∧ ¬H. By total probability P(S)=0.98P(M)+0.05P(¬M ∧ H)+0.01P(¬M ∧ ¬H).",
      "With independence, P(¬M ∧ H)=0.995 × 0.995 = 0.990025 and P(¬M ∧ ¬H)=0.995 × 0.005 = 0.004975. This gives P(S)=0.0049 + 0.04950125 + 0.00004975 = 0.054451.",
      "Bayes’ rule gives P(M | S) = P(S | M)P(M)/P(S) = 0.0049/0.054451 ≈ 0.089989.",
      "Without independence, write x=P(M ∧ H). Then P(¬M ∧ H)=0.995−x and P(¬M ∧ ¬H)=x, so P(M | S)=0.0049/(0.05465−0.04x). The marginals allow 0 ≤ x ≤ 0.005, giving about 8.97% to 9.00%."
    ],
    "example": [
      "If the two conditions are modeled as mutually exclusive, set x=0. Then the no-migraine, no-headache branch has zero mass and the resulting posterior is about 8.97%."
    ]
  },
  "e6c815b7c3c70e3d": {
    "answer": [
      "Plan over a snapshot of the current state using forward progression from that state and backward regression from the goal. Connect a forward state to a regressed subgoal when the state satisfies every literal in the subgoal. Validate and execute the joined plan against fresh observations."
    ],
    "points": [
      "Represent the classical domain by an initial state s₀, a goal conjunction G and deterministic STRIPS operators. An action with preconditions Pre(a), add effects Add(a) and delete effects Del(a) is applicable when Pre(a) ⊆ s. Progression yields (s − Del(a)) ∪ Add(a).",
      "For positive goals, regress a goal set g through a relevant action a when Add(a) achieves a member of g and Del(a) threatens none. The preceding conjunction is (g − Add(a)) ∪ Pre(a). Keep the action as the next step of the associated suffix.",
      "Alternate expansions or expand the smaller frontier. Use a heuristic and duplicate detection, then test forward states against regressed conjunctions. Join the prefix and suffix, and simulate the full sequence to check preconditions and goal satisfaction before sending it for execution.",
      "Execution monitors action outcomes and environment changes. When an observation invalidates a precondition or suffix, update the current state, preserve any suffix still valid, and replan or repair from the observed state. Classical planning handles each modeled snapshot. Observations and replanning handle external change.",
      "Regression can focus on goal-achieving actions while progression grounds the search in reachable states. Joining can reduce the number of explored nodes, especially for long plans with useful matches. Both frontiers can still grow exponentially, and matching and search management add overhead. Cost-optimality requires suitable search bounds and a stopping rule beyond the first match."
    ],
    "example": [
      "A robot must deliver a package. Backward from Delivered(package), regress through DropOff to At(robot,desk) ∧ Carrying(robot,package). A forward search that reaches this conjunction can append DropOff. If the corridor becomes unavailable, replan the navigation segment from the observed robot position."
    ]
  },
  "fbef56097a0ed4af": {
    "answer": [
      "Represent meal preparation as a STRIPS planning problem. Start with a raw ingredient and available kitchen resources, and use the goal Served(meal). One valid plan is Wash → Chop → Cook → Serve."
    ],
    "points": [
      "Initial state s₀ = {Raw(food), Whole(food), WaterAvailable, KnifeAvailable, StoveAvailable, PlateAvailable}. Goal G = {Served(meal)}.",
      "Wash(food) requires {Raw(food), WaterAvailable}, adds {Clean(food)}, and deletes nothing. Chop(food) requires {Clean(food), Whole(food), KnifeAvailable}, adds {Chopped(food)}, and deletes {Whole(food)}.",
      "Cook(food,meal) requires {Raw(food), Chopped(food), StoveAvailable}, adds {Cooked(meal)}, and deletes {Raw(food)}. Serve(meal) requires {Cooked(meal), PlateAvailable}, adds {Served(meal)}, and deletes nothing.",
      "Progression can apply only actions whose preconditions hold, using (s − Del) ∪ Add to construct the next state. Regression can start with Served(meal), select Serve, then regress through Cook, Chop and Wash. The remaining preconditions hold in s₀.",
      "With these operators, each of the four steps establishes a required fact that is absent initially and cannot be produced another way. The plan is therefore shortest when all steps cost one unit."
    ],
    "example": [
      "Raw, Whole → Wash adds Clean → Chop replaces Whole with Chopped → Cook replaces Raw with Cooked → Serve adds Served. The water, knife, stove and plate availability facts persist in this model."
    ]
  },
  "48a8d4fe79ad22ba": {
    "answer": [
      "A probabilistic language model scores multiple interpretations using context. For an utterance u and context c, a system can choose the interpretation z with the largest P(z | u,c), or ask for clarification if the leading interpretations remain close."
    ],
    "points": [
      "N-gram models estimate P(wᵢ | recent words). Text around an ambiguous word can make one continuation or sense more plausible, but the fixed context window limits what the model can consider.",
      "A probabilistic context-free grammar assigns probabilities to grammar productions. The probability of a parse is the product of its rule probabilities. Competing parses can represent different syntactic attachments and be ranked by that probability, optionally using lexical context in a richer model.",
      "A hidden Markov model can infer likely part-of-speech tags from transition and emission probabilities. Viterbi finds the highest-probability tag sequence, helping to distinguish a noun reading from a verb reading.",
      "A contextual neural model can use words across a sentence or dialogue to classify senses, choose an intent or resolve references. A semantic parser can generate several candidate meanings, then rank them using context and knowledge about the task."
    ],
    "example": [
      "“I saw the man with the telescope” allows two parse trees. The prepositional phrase can attach to the verb phrase (I used it) or the noun phrase (the man had it). A preceding sentence such as “I aimed my telescope at the hillside” makes the instrument reading more probable."
    ]
  },
  "0c997a2ead83b101": {
    "answer": [
      "Information retrieval (IR) returns documents or passages relevant to a query. Information extraction (IE) identifies entities, attributes or relationships in text and returns structured fields."
    ],
    "points": [
      "IR builds a searchable index and ranks matches using signals such as term overlap, BM25 or embedding similarity. A campus chatbot can retrieve the most relevant paragraphs of an exam timetable or attendance policy.",
      "IE can use rules, named-entity recognition, slot filling or a relation extractor. From a retrieved timetable passage it can extract course code, day, time and room. From a user query, it can extract a course name or requested date to refine retrieval.",
      "In a typical chatbot flow, interpret the query, retrieve relevant evidence, extract the values needed for the answer, then construct the response with a link to the source. Conflicting records or absent fields can trigger clarification."
    ],
    "example": [
      "User asks when a hypothetical library workshop starts. IR selects the workshop announcement. IE converts “The reference skills workshop starts Friday at 2 pm in Room 204” to event=reference skills workshop, day=Friday, time=2 pm, location=Room 204. The chatbot returns the requested time and the announcement."
    ]
  }
};
