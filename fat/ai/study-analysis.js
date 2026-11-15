window.AI_STUDY_ANALYSIS = {
  "1": {
    "chronology": "All five FAT papers put Module 1 in the ten-mark Q1 slot. B1 2023–24 split it between Robird PEAS and a goal-based architecture diagram. The following year diverged by slot. E1 asked for AI classifications with examples, while E2 asked how environment properties affect design. Both 2025–26 papers combined PEAS and environment analysis, with D1 adding a capability-by-capability account of AI subfields. Prepare for both a compound case and a self-contained explanation.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q1"
        ],
        "asks": "Write PEAS for the Robird bird-deterrent drone in part (a). In part (b), explain goal-based agent architecture and draw a suitable diagram. The printed split is six marks plus four.",
        "watch": "Separate the success measure of clearing a runway safely from the flight actions and the observations the drone needs."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q1"
        ],
        "asks": "Explain the classification of AI along two axes, functionality and technology. Name each type in the taxonomy you use and give an example that demonstrates the type's defining feature.",
        "watch": "Use separate headings so that a behavior such as relying on recent observations stays distinct from a method such as learning from data."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q1"
        ],
        "asks": "Describe the observability, determinism, dynamics and state-space dimensions named in the prompt. Give examples and explain how each distinction affects agent design and behavior.",
        "watch": "The design consequence earns its own explanation, such as keeping a state estimate when the current observation reveals only part of the relevant state."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q1"
        ],
        "asks": "Map the hospital assistant's four capabilities to AI subfields, write its PEAS and characterize its environment. Cover vital signs, clinical records and diagnosis suggestions, patient dialogue, and coordination with other hospital systems.",
        "watch": "Use one agent boundary throughout so measured vitals enter through sensors and an alert or reply leaves as an action."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q1"
        ],
        "asks": "Develop PEAS for a virtual assistant in the given setting, then describe its task environment and analyze its key properties. The brief leaves the assistant's exact duties and permissions open.",
        "watch": "State a concrete administrative scope such as answering procedure questions and scheduling routine maintenance, then make every input, output and environment label fit that scope."
      }
    ],
    "patterns": [
      {
        "title": "Build PEAS from the agent's boundary",
        "cue": "Specify what the agent achieves, observes and changes in the case it was given.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q1"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q1"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q1"
          ]
        ],
        "variations": [
          {
            "label": "Physical control",
            "text": "B1 2023–24 Q1(a) names a drone that clears birds from runways. The action is a flight manoeuvre. A sensible success measure is the fraction of birds cleared from the protected area within a time limit, subject to safe separation."
          },
          {
            "label": "Software and service interfaces",
            "text": "D1 2025–26 Q1 specifies the hospital assistant's duties. D2 Q1 gives a setting and leaves the assistant's capabilities to you. For an administrative assistant, a calendar update can be an input and a proposed maintenance booking can be an output."
          }
        ],
        "write": [
          {
            "label": "Define who acts",
            "text": "Name the agent and its responsibility in one line. If the paper leaves permissions open, state an assumption you can use consistently."
          },
          {
            "label": "Make performance observable",
            "text": "State how success would be judged. For D1, timely alerts, fewer missed events and manageable false alarms are distinct criteria."
          },
          {
            "label": "Trace inputs and outputs",
            "text": "Use a four-row table. Put the people, systems and surroundings under environment. Trace one cycle from observation through action to the performance measure it affects."
          }
        ],
        "pitfall": "A heart-rate feed is a sensor input. An alert is an actuator output. Alert accuracy measures performance."
      },
      {
        "title": "Turn an environment label into a design choice",
        "cue": "Support each label with evidence from the scenario and explain the resulting design requirement.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E2",
            "Q1"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q1"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q1"
          ]
        ],
        "variations": [
          {
            "label": "Compare the two sides of each axis",
            "text": "E2 2024–25 Q1 explicitly asks for examples and design effects. A visible board can supply the full state directly. A noisy or incomplete sensor stream may require recent observations and a state estimate."
          },
          {
            "label": "Classify one concrete assistant",
            "text": "D1 and D2 2025–26 Q1 apply several axes to one system. In D1 a patient's condition can change while the assistant deliberates. D2 can be dynamic because people and schedules change while it processes a request. Those facts justify refreshing the inputs."
          }
        ],
        "write": [
          {
            "label": "Use the chosen model",
            "text": "State what the agent can observe and control. A hospital assistant can receive continuous vital readings while choosing among discrete actions such as sending an alert."
          },
          {
            "label": "Give a reason for each axis",
            "text": "Ask whether relevant state is hidden, what can change during deliberation, and whether the same state and action can have different outcomes. Each axis answers a separate question."
          },
          {
            "label": "Convert labels into consequences",
            "text": "Partial observability can motivate tracking a state estimate. Dynamic tasks can require prompt re-sensing and replanning. Sequential decisions require considering how a present action changes future options."
          }
        ],
        "pitfall": "Delayed observations support a partial-observability argument. To argue for stochastic transitions, identify a reason the same state and action could lead to different outcomes."
      },
      {
        "title": "Explain a goal-based agent with a diagram",
        "cue": "Show where the goal enters the decision and how predicted action effects guide the next move.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q1"
          ]
        ],
        "variations": [
          {
            "label": "Part (a) specifies the task",
            "text": "B1 2023–24 Q1(a) uses the Robird case for PEAS. The desired outcome could be that the runway is clear. This gives you a concrete success condition if you choose to illustrate the architecture using the same scenario."
          },
          {
            "label": "Part (b) explains the decision process",
            "text": "B1 Q1(b) asks explicitly for an architecture diagram and explanation. Draw a reusable goal-based architecture. Show the internal state, predicted consequences and the goal driving action choice. The paper permits a separate example."
          }
        ],
        "write": [
          {
            "label": "Update the internal state",
            "text": "Route sensor observations into a state update that can use the prior state and last action. Label what the internal state represents in your example."
          },
          {
            "label": "Predict and choose",
            "text": "Draw the goal and the model of action effects as separate inputs to the planner. Describe how the planner evaluates whether candidate steps can lead to a goal state."
          },
          {
            "label": "Close the loop",
            "text": "Connect the chosen action to the actuators and the resulting environment back to the sensors. Explain what new information would make the agent reconsider its plan."
          }
        ],
        "pitfall": "A diagram showing sensors, an agent box and actuators leaves out the goal test and the reasoning that connects the goal to an action."
      },
      {
        "title": "Classify AI and choose subfields",
        "cue": "Use named categories and examples for theory. Map each capability to a technique for a system case.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q1"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q1"
          ]
        ],
        "variations": [
          {
            "label": "Taxonomy with examples",
            "text": "E1 2024–25 Q1 explicitly asks for functionality and technology. An agent can be limited-memory because it uses recent observations and can use a learned perception model as part of its implementation. The two headings describe different properties."
          },
          {
            "label": "Composition by capability",
            "text": "D1 2025–26 Q1 gives the four hospital duties explicitly. Use them as rows. Signal interpretation supports monitoring, reasoning with clinical records supports diagnosis suggestions, NLP supports conversation, and planning and coordination connect scheduling and pharmacy workflows."
          }
        ],
        "write": [
          {
            "label": "Define the classification axis",
            "text": "For functionality, explain how behavior depends on the current observation, recent history, or richer internal representations. For technology, identify the mechanism behind the behavior, such as symbolic rules or a learned model."
          },
          {
            "label": "Make each example prove its category",
            "text": "Explain the feature that earns the label. For limited memory, name what past observations the system retains and how they change the current decision."
          },
          {
            "label": "Trace the requested capability",
            "text": "For a system case, write capability, subfield and role together. For NLP, show a patient utterance becoming an interpreted request and a relevant reply."
          }
        ],
        "pitfall": "Narrow, general and superintelligence classify capability breadth. They answer a separate axis from the functionality and technology asked for in FAT E1."
      }
    ],
    "transfers": [
      {
        "source": [
          "CAT1",
          "2025–26",
          "D1",
          "Q1"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q1"
        ],
        "title": "Transfer PEAS from a smart home to a hospital",
        "match": "Direct CAT practice",
        "carry": "The CAT lists inputs and controllable systems, asks for PEAS, and names three environment axes to justify. It also asks how to balance lower bills with comfort.",
        "change": "FAT gives four hospital duties and leaves the relevant environment properties open. Add a capability-to-subfield table and swap physical appliance commands for the assistant's actual alerts, dialogue and coordination outputs.",
        "test": "From the FAT prompt alone, account for all four duties. Give one observation, action and measurable success criterion in the same information flow."
      },
      {
        "source": [
          "CAT1",
          "2026–27",
          "B1",
          "Q2"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q1"
        ],
        "title": "Turn classification reasons into design implications",
        "match": "Direct CAT practice",
        "carry": "The CAT compares a taxi and a factory arm across six named axes. You must justify each classification from the two settings.",
        "change": "FAT asks you to explain both poles of each named axis, give examples and connect them to agent behavior. Add a design consequence after each example, such as replanning from new observations when the environment changes mid-decision.",
        "test": "Write the four named FAT pairs. For each, give a case and one plausible way the agent design changes."
      },
      {
        "source": [
          "CAT1",
          "2025–26",
          "D1",
          "Q2"
        ],
        "target": [
          "FAT",
          "2023–24",
          "B1",
          "Q1"
        ],
        "title": "Draw the reusable goal-based agent",
        "match": "Direct CAT practice",
        "carry": "The CAT Roomba case gives you a map, a desired clean room and a path planner. It explicitly asks for a schematic and a separate comparison with utility-based agents.",
        "change": "FAT names the architecture in advance. Draw the generic loop for part (b), use the goal to explain action choice, and give the Robird PEAS separately for part (a).",
        "test": "From memory, draw state update, action prediction, goal, planning and execution. Trace one action and the observation that would trigger replanning."
      },
      {
        "source": [
          "CAT1",
          "2024–25",
          "E1",
          "Q2"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q1"
        ],
        "title": "Explain what the AI technique contributes",
        "match": "Direct CAT practice",
        "carry": "The CAT asks how AI supports bank fraud detection and how a rule-based expert system works. Practise tracing information to a decision or recommendation.",
        "change": "The FAT hospital assistant must combine several subfields. Make one short input-to-output explanation for each duty, then link those outputs back to PEAS.",
        "test": "For each of the four FAT capabilities, name a subfield and explain the concrete operation it performs."
      }
    ]
  },
  "2": {
    "chronology": "Three FAT papers pair Greedy and A* in Q3. Their Q2s shift from building the river-crossing state space in 2023–24 B1 to comparing or auditing uninformed searches in both 2025–26 slots. E2 2024–25 keeps Q2 and Q3 with Hanoi formulation and weighted BFS/DFS. E1 moves search to Q9, with Greedy plus UCS or a single A* trace. B1 let candidates answer any ten numbered questions, while E1 printed the OR between its Q9 alternatives.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q2"
        ],
        "asks": "Use the specified four-bit soldier order, shade the restricted bank arrangements, draw the legal state space and report a DFS traversal and solution.",
        "watch": "Annotate each bit string with the raft side so the search can distinguish identical soldier positions with different legal next moves."
      },
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q3"
        ],
        "asks": "Trace Greedy and A* from S to G, compare their route costs and establish that the A* result is optimal on this graph.",
        "watch": "The true remaining cost from D is 3 while the paper gives h(D) = 3.5, so establish the optimum by checking the actual edges."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q9(a)"
        ],
        "asks": "Work both subparts of this OR option. Find the S-to-E route by Greedy on the first map and run UCS from S to G on the second graph.",
        "watch": "Reset the frontier between the two graphs and rank the second by accumulated edge cost despite its supplied heuristic table."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q9(b)"
        ],
        "asks": "Write the A* algorithm, then run it on the directed S-to-G graph with edge weights and node heuristics. Report the cheapest route it finds.",
        "watch": "The A* trace gives S–A–D–F–G at cost 23, and a UCS check confirms that cost independently of the printed heuristic."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q2"
        ],
        "asks": "Formulate the three-disk Hanoi problem and draw the full state-space tree from the pictured start and goal under the legal move rules.",
        "watch": "Enumerate the 27 distinct peg assignments and identify repeated states when an allowed move brings the board back to an earlier configuration."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q3"
        ],
        "asks": "Apply DFS and BFS on the directed, weighted graph from A to the goal set {F, I}. Discuss the merits of the searches and address the request for an optimal path.",
        "watch": "A–C–G–I costs 10 and A–C–H–I costs 8 despite having the same three edges."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q2"
        ],
        "asks": "Run DFS, iterative-deepening DFS and UCS from A to J. List each traversal and compare the final path costs.",
        "watch": "With alphabetical DFS successors, IDDFS first reaches J at depth four via a cost-19 route, while the four-edge UCS route costs 10."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q3"
        ],
        "asks": "Apply Greedy and A* to the same A-to-Z graph and compare their performance on the given costs and heuristics.",
        "watch": "E and Z can both sit at f = 25, and expanding E first updates Z to cost 24 before the goal is removed."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q2"
        ],
        "asks": "Trace UCS on the edge list from S to G, showing the frontier every iteration and the winning route cost, then compare uninformed algorithms by completeness, optimality, time and space.",
        "watch": "The edge B→A improves A from g = 4 to g = 3 and changes its predecessor before A expands."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q3"
        ],
        "asks": "Show all search steps for Greedy and A* from A to H on the supplied directed graph, then compare the resulting routes and costs.",
        "watch": "Greedy chooses the already-discovered goal H at cost 7, while A* first expands lower-f entries and improves H to cost 6."
      }
    ],
    "patterns": [
      {
        "title": "Heuristic traces and cost comparisons",
        "cue": "Show how using h or g + h changes the frontier, the route and the work done.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q3"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q9(a)"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q9(b)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q3"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q3"
          ]
        ],
        "variations": [
          {
            "label": "Two ways the comparison ends",
            "text": "In 2025–26 D1 Q3, alphabetical ties give both searches the cost-24 route. Greedy removes four nodes and A* seven, counting the goal. In D2 Q3, Greedy takes the direct cost-7 link and A* returns cost 6. Compare search work and solution quality separately."
          },
          {
            "label": "The proof or algorithm can be the extra task",
            "text": "B1 Q3 2023–24 asks you to prove the cost-8 A* result is optimal. E1 Q9(b) 2024–25 asks you to write the algorithm and trace it. Its Q9(a) alternative puts Greedy and UCS on separate graphs with different goals."
          }
        ],
        "write": [
          {
            "label": "Set priorities",
            "text": "Write Greedy's key h and A*'s key g + h. State any tie rule and test for the goal on removal from OPEN."
          },
          {
            "label": "Show frontier changes",
            "text": "For A*, track g, h, f and each new predecessor. In D1 Q3, B improves E from g = 21 to g = 20."
          },
          {
            "label": "Compare outcomes",
            "text": "Give each route, its edge sum and the expansion counts under the same counting convention. Check the true optimum separately if asked."
          }
        ],
        "pitfall": "A successful trace alone cannot establish optimality. In B1 Q3, h(D) = 3.5 exceeds the true remaining cost of 3. Reverse shortest-path distances still prove the returned cost 8 is optimal here."
      },
      {
        "title": "Uniform-cost search and cost guarantees",
        "cue": "Use cumulative cost to explain queue updates and identify when a goal becomes final.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q9(a)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q2"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q2"
          ]
        ],
        "variations": [
          {
            "label": "A cheaper path can have the same depth",
            "text": "D1 Q2 2025–26 compares DFS, IDDFS and UCS. With alphabetical successors the first two paths cost 26 and 19. UCS reaches J at cost 10. The IDDFS and UCS routes both use four edges, so reaching a shallow goal still leaves a cost comparison to do."
          },
          {
            "label": "The frontier can be a deliverable",
            "text": "D2 Q2 2025–26 asks for every frontier and a separate comparison of uninformed algorithms. E1 Q9(a)(ii) 2024–25 provides a heuristic table alongside its UCS graph. The frontier in both traces depends on g alone."
          }
        ],
        "write": [
          {
            "label": "Initialize and relax",
            "text": "Put the start at g = 0. For each outgoing edge, add its cost to the current g and replace a pending route only if its cost improves."
          },
          {
            "label": "Show the queue and parent",
            "text": "In D2 Q2, S enqueues B:1 and A:4. Expanding B changes A to g = 3 with B as parent. Record both changes in your trace."
          },
          {
            "label": "State the guarantee with conditions",
            "text": "On these finite positive-cost graphs, the minimum-g goal popped is cheapest. Give completeness, cost optimality, time and space with each algorithm's assumptions, such as equal step costs for BFS optimality and a positive cost lower bound for general UCS completeness."
          }
        ],
        "pitfall": "An early goal discovery can be expensive. In E1 Q9(a)(ii), G can first enter the queue at cost 9 and later fall to 4 via E."
      },
      {
        "title": "BFS, DFS and depth-limit traces",
        "cue": "Show the visit order under a declared successor rule, then recover the path separately.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q2"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q3"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q2"
          ]
        ],
        "variations": [
          {
            "label": "Input can be a given graph or your own",
            "text": "In B1 Q2 2023–24, DFS runs on the state graph you build from the raft rules. In E2 Q3 2024–25, read the given arrows and handle the two goals F and I. Cycle handling matters in both graphs."
          },
          {
            "label": "One trace per depth limit",
            "text": "D1 Q2 2025–26 explicitly requests IDDFS alongside DFS and UCS. With A at depth zero, limits zero through three cut off all routes to J. A new depth-four pass reaches J, even though the first DFS solution uses six edges."
          }
        ],
        "write": [
          {
            "label": "Declare the traversal",
            "text": "Follow direction arrows and state successor order. Use a FIFO queue for BFS and a stack or recursive backtracking for DFS."
          },
          {
            "label": "Track repeats and cutoffs",
            "text": "Record visited states for finite-graph BFS and DFS. Use path-local cycle checks inside each depth-limited IDDFS pass and start each new pass from the root."
          },
          {
            "label": "Report depth and cost",
            "text": "Recover the successful path from its parents or stack. Count edges for depth and add weights for path cost."
          }
        ],
        "pitfall": "On E2 Q3, expanding G before H can give BFS the three-edge cost-10 route to I. The equally shallow route via H costs 8, so BFS depth alone does not prove the cheapest weighted path."
      },
      {
        "title": "Build the state space before searching",
        "cue": "Encode a complete state, define legal successors and draw the reachable structure the question asks for.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q2"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q2"
          ]
        ],
        "variations": [
          {
            "label": "River crossing with forbidden states and actions",
            "text": "B1 Q2 2023–24 fixes the four positions as A, L, B1, B2. The forbidden lone-L bank arrangements are 0100 and 1011. The raft side determines available passengers, and the rider constraints apply even to moves between otherwise legal arrangements."
          },
          {
            "label": "Hanoi and reversible moves",
            "text": "E2 Q2 2024–25 requests the complete state-space tree. Represent the small, medium and large disk by their peg letters, from AAA to CCC. The 27 reachable arrangements fit in a spanning tree with duplicates merged. You can annotate links back to existing states for the full graph."
          }
        ],
        "write": [
          {
            "label": "Set the state and goal",
            "text": "Give the tuple, initial state and goal test. Record the raft bank in the crossing problem and the peg of each disk in Hanoi."
          },
          {
            "label": "Define one transition precisely",
            "text": "List action preconditions, the state update and step cost. Hanoi allows a top disk to move to an empty peg or onto a larger top disk."
          },
          {
            "label": "Draw and label the structure",
            "text": "Draw from the initial state, mark invalid states or moves, and link repeated states back to the existing node. Run a trace if requested."
          }
        ],
        "pitfall": "A lone-L crossing is illegal even if it would leave legal bank assignments afterward. Check both the action and the resulting state."
      }
    ],
    "transfers": [
      {
        "source": [
          "CAT1",
          "2023–24",
          "B1",
          "Q4"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q3"
        ],
        "title": "One changed edge breaks the A* guarantee",
        "match": "Near-repeat",
        "carry": "CAT gives the exact seven-node layout and heuristic table reused by FAT. Trace A* until D, E and Z all have f = 25. The routes through F and E both cost 25 in CAT.",
        "change": "FAT adds Greedy and reduces E–Z from 5 to 4. With h(E) still 5, f(E) remains 25 even though the route via E now costs 24. A* can return 25 if it removes Z first.",
        "test": "Trace both tie orders from the shared frontier. Explain which tie order lets E improve Z and give the Greedy route and cost."
      },
      {
        "source": [
          "CAT1",
          "2023–24",
          "B2",
          "Q4"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D2",
          "Q2"
        ],
        "title": "Trace every UCS priority change",
        "match": "Direct CAT practice",
        "carry": "CAT asks for priority and visited lists, a tree at each step and three goal costs. Its alphabetical ties and cheaper pending route to B make each queue update visible.",
        "change": "FAT supplies directed edges as a list and asks for one optimal goal, each frontier and a separate theory comparison. Stop once G is popped at minimum g.",
        "test": "Show A's queue entry drop from 4 to 3, name the new parent and recover the cost-10 route. Then explain the conditions under which UCS and BFS are cost-optimal."
      },
      {
        "source": [
          "CAT1",
          "2026–27",
          "B1",
          "Q4"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q2"
        ],
        "title": "Move an IDS trace from a tree to a graph",
        "match": "Direct CAT practice",
        "carry": "CAT Q4(a) specifies alphabetical order and no visited list on a tree. Its BFS, DFS and IDS traces practise successor order, resetting depth limits and stopping at the expanded goal.",
        "change": "FAT replaces the tree with a graph that has cycles, replaces BFS with UCS and asks for total path cost. Retain the repeated IDS passes, with path-local cycle checks to keep them finite.",
        "test": "Show J first appearing on the depth-four pass and explain why the four-edge IDDFS and UCS paths end up with different costs."
      },
      {
        "source": [
          "CAT1",
          "2026–27",
          "B1",
          "Q5"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D2",
          "Q3"
        ],
        "title": "Separate A*'s trace from an optimality proof",
        "match": "Direct CAT practice",
        "carry": "CAT requires a strict expanded list. A* expands C on a cost-3 route and later discovers a cost-2 route via B. Closing C permanently produces cost 6 while the true minimum is 5.",
        "change": "In FAT, A* improves a still-pending H from cost 7 to 6. The estimate h(F) = 3 exceeds the remaining edge cost of 1, so verify cost 6 from the actual routes entering H.",
        "test": "Mark the point where the cheaper path is blocked by CLOSED in CAT and the point where OPEN improves in FAT. Independently check the best cost in both graphs."
      }
    ]
  },
  "3": {
    "chronology": "Four FAT papers asked for a game-tree trace. B1 2023–24 and both 2025–26 slots put it at Q4. E1 2024–25 moved it to Q10 and offered two tree questions as OR alternatives, each with a different written explanation. E2 tested a plateau explanation and worked genetic-algorithm scheduling. B1 let you answer any ten of twelve, so its Q12 hill-climbing question was available alongside the Q4 trace.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q4"
        ],
        "asks": "Back up scores throughout the 27-leaf tree and identify the nodes that alpha–beta can skip. The diagram has three groups of three MAX nodes below the MIN level.",
        "watch": "With MAX at the root and left-to-right expansion, B1 establishes α = 9 and B2's first child puts its upper bound at 1, which cuts both remaining B2 subtrees."
      },
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q12"
        ],
        "asks": "Explain how hill climbing selects its next state. Discuss its strengths and weaknesses, then explain how simulated annealing escapes a local minimum.",
        "watch": "Frame the example as cost minimization so the temporary rise in cost, the acceptance probability and the later improvement all have consistent signs."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q10(a)"
        ],
        "asks": "Back up every minimax score in the labelled tree, give MAX's move, and list the exact nodes skipped left to right. Explain limitations of full minimax and ways to address them.",
        "watch": "Keep the full minimax values visible alongside the separate pruning trace. At C, for example, all of I is skipped once H bounds C at 1."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q10(b)"
        ],
        "asks": "Explain the alpha–beta procedure, then compute the root value left to right. Annotate the applicable α or β at each visited node, mark cut branches and discuss how effective the pruning was.",
        "watch": "Number the unlabeled nodes consistently and count the same unit on both sides of the comparison. With a MAX root, 11 of the 25 leaves are evaluated."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q4"
        ],
        "asks": "Use a concrete example to explain how simulated annealing can move across a plateau where strict hill climbing stalls.",
        "watch": "A tied score has Δ = 0 and is accepted under the standard annealing rule, so an example with equal-score steps followed by an improvement answers the specific plateau prompt."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q5"
        ],
        "asks": "Set up and apply a genetic algorithm to the four-job, two-machine table. Use the given chromosome and baseline score to show how assignments are encoded, evaluated and improved.",
        "watch": "The hint adds processing times across jobs. That score is 10 minutes for 1122, and the parallel makespan for that assignment is 5 minutes."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q4"
        ],
        "asks": "Calculate the root's backed-up value and show which branches left-to-right alpha–beta prunes on the same tree. Some MIN nodes have direct terminal children beside deeper subtrees.",
        "watch": "Cut at equality as well as strict inequality. F's first score reaches its inherited β = 6, so the remaining two leaves under F are skipped."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q4"
        ],
        "asks": "Apply minimax and alpha–beta pruning to a deeper binary tree of 32 terminal payoffs. State a traversal order and identify cut leaves or subtrees by position.",
        "watch": "With MAX at the root, reading faint leaf 19 as −1 gives a root value of −1. The alternative reading −7 gives −3. Both lead right."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q5"
        ],
        "asks": "Explain how the initial population, fitness, selection, crossover and mutation work. Give an example where the population and genetic operators could help GA outperform both hill climbing and annealing.",
        "watch": "Choose an example with two useful partial solutions that crossover can combine. Explain the advantage for that representation and evaluation budget."
      }
    ],
    "patterns": [
      {
        "title": "Back up the game tree and justify cuts",
        "cue": "Annotate the exact minimax scores, then show where depth-first bounds make siblings unnecessary.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q4"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q10(a)"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q10(b)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q4"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q4"
          ]
        ],
        "variations": [
          {
            "label": "Regular tree, different kinds of cuts",
            "text": "B1 2023–24 Q4 uses a 27-leaf ternary tree. Under B1, seeing 10 at MAX node C2 against β = 9 skips its next two leaves. Under B2, C4 returns 1 against root α = 9, which skips the entirety of C5 and C6."
          },
          {
            "label": "Uneven branches and equality",
            "text": "D1 2025–26 Q4 places terminals directly under some MIN nodes. After a first child gives D a score of 6, β meets root α at 6 and K is cut. D2's deeper tree rewards numbering the leaves so both the cut and the source of a bound are clear."
          }
        ],
        "write": [
          {
            "label": "Read the node roles",
            "text": "Mark the root's role and alternate MAX and MIN at internal nodes. Treat a terminal as a payoff immediately, even when other children continue deeper."
          },
          {
            "label": "Separate the two passes",
            "text": "For full minimax, back up max or min over every child. In the pruning trace start at (−∞, +∞), inherit bounds, and raise α at MAX or lower β at MIN."
          },
          {
            "label": "Name the cutoff",
            "text": "When α ≥ β, show which value triggered the cutoff and list the still-unvisited siblings or whole subtrees. Finish with the root value and a best root move where requested."
          }
        ],
        "pitfall": "A stopped branch can report a bound. In D1 2025–26 Q4, F cuts off at 6 even though its full minimax value is 9."
      },
      {
        "title": "Explain what pruning saves",
        "cue": "Turn the trace into an explanation of search effort, ordering and practical limits.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q10(a)"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q10(b)"
          ]
        ],
        "variations": [
          {
            "label": "Q10(a) asks for limitations and remedies",
            "text": "The labelled tree gives a best move of D and offers concrete cutoff examples. The final subpart shifts to why exhaustive minimax becomes expensive and what techniques make deeper play practical."
          },
          {
            "label": "Q10(b) asks you to demonstrate effectiveness",
            "text": "On the larger unlabelled tree, annotate the bounds and use the trace to quantify work. With MAX at the root, left-to-right expansion evaluates 11 of 25 terminal scores and produces a root value of 1."
          }
        ],
        "write": [
          {
            "label": "Explain the guarantee",
            "text": "Once a previously explored alternative dominates the bound for a branch, that branch can be skipped without changing the minimax value of the root."
          },
          {
            "label": "Report a measured comparison",
            "text": "Use visited leaves against total leaves, or include all nodes in both counts. Explain which earlier scores created each saving and how good ordering exposes strong bounds sooner."
          },
          {
            "label": "Match the remedy to the limitation",
            "text": "With branching factor b and depth d, full search can cost O(bᵈ). Alpha–beta and ordering reduce work on the given tree. A depth limit with heuristic evaluation is a separate trade-off, since unseen outcomes can affect its accuracy."
          }
        ],
        "pitfall": "In the worst case alpha–beta still takes O(bᵈ). The O(b^(d/2)) best-case expression assumes ideal ordering on a uniform tree."
      },
      {
        "title": "Give the move that escapes the stall",
        "cue": "Build a small landscape, identify why strict improvement stops, then show an accepted annealing move.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q12"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q4"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q5"
          ]
        ],
        "variations": [
          {
            "label": "Cost barrier in B1 Q12",
            "text": "On a cost path 8 → 11 → 3, strict hill climbing stops at 8. Annealing can accept 8 → 11 with probability exp(−3/T), opening the path to 3."
          },
          {
            "label": "Flat shoulder in E2 Q4",
            "text": "With scores 5 → 5 → 5 → 8, accepting sampled ties can carry annealing across the flat region to the improving edge."
          },
          {
            "label": "Comparison inside D2 Q5",
            "text": "The GA question uses both local methods as baselines. Explain how access to a population and recombination changes the example."
          }
        ],
        "write": [
          {
            "label": "Define the neighbourhood and objective",
            "text": "Define adjacency and the optimization direction. Hill climbing stores one current state, so it is economical. Its stopping point depends on where it starts and which moves are available."
          },
          {
            "label": "Write the acceptance rule",
            "text": "For maximization, take Δ = f(next) − f(current). Accept Δ ≥ 0, and accept a worse move with probability exp(Δ/T) for T > 0. Reverse the objective convention consistently for costs."
          },
          {
            "label": "Trace the escape",
            "text": "Show the tie or temporary loss and the later improvement. Cooling reduces worse moves. A finite run can still miss the global optimum."
          }
        ],
        "pitfall": "Sideways steps help on a plateau with an exit. Crossing a strict local optimum through one-step moves needs a worse move, or a strategy that changes the start or the neighbourhood."
      },
      {
        "title": "Work a GA generation or justify its design",
        "cue": "Show how the chromosome, fitness and operators fit the task, including what can be combined or changed.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E2",
            "Q5"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q5"
          ]
        ],
        "variations": [
          {
            "label": "Calculation from a table in E2 Q5",
            "text": "Encode machines as 1 or 2 in A, B, C, D order. The hint scores 1211 at 16. Crossover of parents 1121 and 1222 after gene two yields 1122 at cost 10 and 1221 at cost 14."
          },
          {
            "label": "An explanation and comparison in D2 Q5",
            "text": "Discuss the role and implementation of all five items named in the question. In a task-ordering example, parents can carry different useful task sequences. An order-preserving crossover can combine those sequences, and mutation can explore task orders absent from the parents."
          }
        ],
        "write": [
          {
            "label": "Define a feasible chromosome",
            "text": "Explain each gene and generate a varied starting population. For permutations, choose an operator that preserves each item exactly once or state how you repair duplicates."
          },
          {
            "label": "Score and select",
            "text": "Give the objective, its direction and representative scores. A tournament or rank-based rule can favour lower cost directly."
          },
          {
            "label": "Produce and rescore offspring",
            "text": "Show the crossover cut and one mutation, calculate the updated cost, and say which candidates survive and when the process stops."
          },
          {
            "label": "Justify the claimed advantage",
            "text": "Tie the comparison to the structure of the example. A GA benefits when useful substructures survive crossover and constraints stay manageable."
          }
        ],
        "pitfall": "The E2 hint scores the sum of processing times. The machines' completion time with parallel execution is the maximum of their loads. Label each metric before using it."
      }
    ],
    "transfers": [
      {
        "source": [
          "CAT2",
          "2025–26",
          "D2",
          "Q1"
        ],
        "target": [
          "FAT",
          "2023–24",
          "B1",
          "Q4"
        ],
        "title": "Same 27-leaf layout, new scores",
        "match": "Near-repeat",
        "carry": "Both diagrams use three layers of branching by three, with C1 to C9 just above the payoffs. Practise taking the three C-level maxima under each MIN node and recording both leaf cuts and subtree cuts.",
        "change": "The leaf scores differ. In FAT, the first root child establishes α = 9 and the next MIN child skips C5 and C6 after seeing C4 = 1. The CAT trace visits the first leaf of C5 and C6 before cutting their other leaves.",
        "test": "Number the leaves and produce two independent traces under the same left-to-right convention. Check that the CAT root is 9 with 17 leaves seen and the FAT root is 10 with 15 leaves seen."
      },
      {
        "source": [
          "CAT2",
          "2025–26",
          "D1",
          "Q1"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E1",
          "Q10(b)"
        ],
        "title": "Turn a cut list into a bounds trace",
        "match": "Direct CAT practice",
        "carry": "CAT D1 explicitly asks for both left-to-right and right-to-left expansion. The root is −9 in both runs. The cut sites differ even though both runs evaluate 12 leaves under the standard equality cutoff.",
        "change": "FAT E1 fixes the order and asks you to show the operative α or β at each node. Label the unlabeled tree, retain state for each visited node and quantify the savings.",
        "test": "Without looking at the answer, annotate the path to an internal cutoff in the FAT tree and explain which earlier branch established its inherited bound."
      },
      {
        "source": [
          "CAT1",
          "2025–26",
          "D1",
          "Q5"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q4"
        ],
        "title": "Adapt a local-maximum example to a plateau",
        "match": "Direct CAT practice",
        "carry": "CAT D1 asks for both algorithms and explains how a worse move can leave a local maximum. Its hill-climbing modification lets you practise linking a change to the specific obstacle.",
        "change": "FAT E2 asks for a plateau, so give several adjacent equal-value states and an improving edge. Use Δ = 0 to justify the sideways steps before mentioning any downhill detour.",
        "test": "Sketch one landscape for each prompt. For each, point to the exact move rejected by strict hill climbing and state its acceptance probability under annealing."
      },
      {
        "source": [
          "CAT1",
          "2023–24",
          "B1",
          "Q5"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q5"
        ],
        "title": "Transfer the GA mechanics from queens to machines",
        "match": "Direct CAT practice",
        "carry": "The eight-queens question asks you to explain each GA step with calculations. Use per-column row genes, count non-attacking pairs, and show how offspring are created and rescored.",
        "change": "Replace queen rows with machine assignments and pair counting with a time sum. Use lower costs to select parents and re-evaluate machine loads after crossover and mutation.",
        "test": "Reproduce the hinted cost of 16, then show one generation that finds the assignment with total processing time 10. Give its makespan separately."
      }
    ]
  },
  "4": {
    "chronology": "Across the five FAT papers, English-to-logic translation stayed while the proof format moved. B1 in 2023–24 paired FOL resolution with a separate inference and truth table question. E1 in 2024–25 used chaining and resolution in Q2–Q3, while E2 put translation and propositional CNF on opposite sides of Q9’s OR. Both 2025–26 slots put resolution in Q6. D1 used a first-order proof with a shared book, while D2 used propositional weather rules whose conclusion does not follow.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q5"
        ],
        "asks": "Translate the Percy Jackson knowledge base into FOL and try to derive the claim that Percy defeats the Minotaur by resolution. The premises connect parentage, power, monsters and imprisonment.",
        "watch": "The ‘only by’ premise constrains who can defeat the Minotaur, so all facts can hold with nobody defeating it."
      },
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q11"
        ],
        "asks": "Use inference laws to establish T→W from the given knowledge base, then use a truth table to show (P∧Q)→(P∨R) is a tautology.",
        "watch": "The first proof runs through ¬T, which makes T→W true even though the premises state ¬W."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q2"
        ],
        "asks": "Write propositional facts and rules for Rahul’s symptoms and recommendations. Show separately how forward chaining from fever and headache and backward chaining from the rest goal both establish that he should rest.",
        "watch": "The bright-light rule has a different conclusion and adds no premise to the backward proof of rest."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q3"
        ],
        "asks": "Formalize the club’s rules about members, active members, volunteers and registrants, then attempt a resolution proof that Emma attends the event she registered for.",
        "watch": "The direct proof needs that registered event to be club-hosted, and the separately named Coding Hackathon does not identify the registration witness."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q9(a)"
        ],
        "asks": "On the translation side of the OR, formalize five statements about students passing, a city with happy residents, picnic weather, math courses with a calculus exception and the dog–bone relation.",
        "watch": "The city needs an existential witness before the universal statement about its residents."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q9(b)"
        ],
        "asks": "On the propositional side of the OR, classify (P∧Q)→(R→S) as valid, satisfiable but not valid, or unsatisfiable, justify the classification and show the CNF conversion step by step.",
        "watch": "P=Q=R=true and S=false yields a false row, while setting S=true gives a true row."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q5"
        ],
        "asks": "Use named inference rules to derive a Calculus test from the Monday and professor-absence premises. Then trace forward from the facts about Jack, Curiosity and Tuna to derive who killed the cat.",
        "watch": "Both parts use disjunctive syllogism after ruling out one option, so the second goes beyond ordinary definite Horn rule firing."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q6"
        ],
        "asks": "Translate the author, book, admiration and influence rules with the supplied predicates. Use resolution to prove InfluencedBy(John,Alice) from the facts about Alice and Book1.",
        "watch": "The same book must appear in both Reads(John,Book1) and Wrote(Alice,Book1) to obtain Admires(John,Alice)."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q6"
        ],
        "asks": "Translate four FOL statements, including a mountain exception, a unique CEO and a dog owner’s friendship with a cat owner. Separately, test the picnic cancellation claim using propositional resolution by contradiction.",
        "watch": "A sunny, dry day with the picnic going ahead satisfies every premise, so the requested contradiction cannot be derived."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q7"
        ],
        "asks": "Trace forward and backward chaining for Happy(Tweety). For the separate literacy question, show the unification steps that establish that at least one intelligent individual cannot read.",
        "watch": "Use the same intelligent dolphin as the witness for both intelligence and inability to read."
      }
    ],
    "patterns": [
      {
        "title": "Translate English into FOL",
        "cue": "Write predicates with clear argument roles, preserve direction and scope, then keep those choices consistent if a proof follows.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q5"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q3"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q9(a)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q6"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q6"
          ]
        ],
        "variations": [
          {
            "label": "2023–24 B1 Q5 and 2024–25 E1 Q3",
            "text": "You choose the vocabulary. B1 tests direction in a necessary condition for defeating monsters. E1 tests whether membership, event hosting and event registration remain distinct in your translation."
          },
          {
            "label": "2024–25 E2 Q9(a) and 2025–26 D2 Q6(a)",
            "text": "These ask for separate translations. E2’s city statement puts one witness outside a universal quantifier. D2’s dog-owner statement may need a different cat owner for each dog owner, and its CEO statement needs an equality constraint."
          },
          {
            "label": "2025–26 D1 Q6",
            "text": "The paper supplies predicate names. Here the shared book variable in Reads(x,b)∧Wrote(a,b) is what makes the writer recoverable in the next proof step."
          }
        ],
        "write": [
          {
            "label": "Fix predicate roles",
            "text": "Define which argument denotes the reader, writer, book or event. Reuse a variable when two premises concern the same object."
          },
          {
            "label": "Check the arrow",
            "text": "‘All dogs are friendly unless near a mountain’ gives Dog(x)∧¬NearMountain(x)→Friendly(x). The rule leaves the friendly status of mountain dogs open."
          },
          {
            "label": "Check existence and uniqueness",
            "text": "For the property P(x) of being a CEO who reports to the board, write ∃x(P(x)∧∀y(P(y)→y=x))."
          }
        ],
        "pitfall": "In E1 Q3, Emma’s registration introduces an event witness. Naming another event does not make it that witness."
      },
      {
        "title": "Resolution and countermodels",
        "cue": "Clausify the premises and negated goal, show the clauses used at each step, and check whether contradiction is warranted.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q5"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q3"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q6"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q6"
          ]
        ],
        "variations": [
          {
            "label": "2023–24 B1 Q5 and 2024–25 E1 Q3",
            "text": "Both request a proof with a missing link. Percy meets a necessary condition for victory. Emma has membership, but the registered event is not explicitly club-hosted. Even missing it is consistent with being a member who is not active."
          },
          {
            "label": "2025–26 D1 Q6",
            "text": "This conclusion follows. Match the reader and writer through Book1 to derive admiration. Then combine the author and person predicates with admiration to derive influence and contradict the negated goal."
          },
          {
            "label": "2025–26 D2 Q6(b)",
            "text": "Resolution runs from ¬Cancelled through ¬Wet and ¬Rain to Sunny. That leaves a consistent case. A sunny, dry day with the picnic going ahead refutes the claimed entailment."
          }
        ],
        "write": [
          {
            "label": "Prepare clauses",
            "text": "Add the negated goal. Eliminate implications and push negations inward. For FOL, rename bound variables, replace existentials with Skolem terms and drop the remaining universal quantifiers. Distribute OR over AND, then treat each conjunct as a separate clause."
          },
          {
            "label": "Show each resolution step",
            "text": "Name the parent clauses and the complementary literals. For FOL include the substitutions, such as b=Book1 in the clause linking Reads and Wrote."
          },
          {
            "label": "Establish the outcome",
            "text": "Use the empty clause to finish an entailment proof. If the goal can fail, exhibit one model where all original premises hold and the goal is false."
          }
        ],
        "pitfall": "An empty clause needs complementary literals that match after substitution. A negative literal on its own leaves a possible assignment."
      },
      {
        "title": "Trace chaining in both directions",
        "cue": "Produce a trace ordered by facts for forward chaining and by subgoals for backward chaining whenever both are requested.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q2"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q5"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q7"
          ]
        ],
        "variations": [
          {
            "label": "2024–25 E1 Q2",
            "text": "The chain branches from fever and headache. Backward from Rest, prove Cough and Migraine. Migraine in turn needs Headache and Fatigue, and Fatigue needs both Cough and Fever."
          },
          {
            "label": "2025–26 D1 Q5(b)",
            "text": "The chain rules out Jack before the final disjunctive syllogism yields Curiosity. Write the animal lover deduction and negative kills fact before consulting the either-or premise."
          },
          {
            "label": "2025–26 D2 Q7(a)",
            "text": "Tweety adds a binding that Rahul did not need. Match x=Tweety in the happy rule, then discharge both Bird(Tweety) and Flies(Tweety). Part (b) uses a single dolphin witness across the literacy rules."
          }
        ],
        "write": [
          {
            "label": "Separate facts from rules",
            "text": "List the facts available at the start, label the rules, and state the exact goal."
          },
          {
            "label": "Run forward",
            "text": "For each firing, list all prerequisites already known, the rule and any variable binding, and the new fact it adds."
          },
          {
            "label": "Run backward",
            "text": "Choose a rule whose head matches the goal, list every required premise as a subgoal and stop each branch at a known fact."
          },
          {
            "label": "Name steps outside chaining",
            "text": "When a problem supplies A∨B and derives ¬A, cite disjunctive syllogism for B. Ordinary definite Horn rules do not have disjunctive conclusions."
          }
        ],
        "pitfall": "Producing one branch of a conjunctive rule is insufficient. Bird(Tweety) still leaves Flies(Tweety) to check."
      },
      {
        "title": "Named rules, truth tables and CNF",
        "cue": "Identify whether the question asks for a derivation from a knowledge base, a classification across assignments, a formula rewrite, or several of these.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q11"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q9(b)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q5"
          ]
        ],
        "variations": [
          {
            "label": "2023–24 B1 Q11",
            "text": "The rule proof establishes T→W through ¬T. The separate tautology check needs all eight truth table rows for three variables. The two parts ask for different kinds of evidence."
          },
          {
            "label": "2024–25 E2 Q9(b)",
            "text": "Expand the inner and outer implications to obtain ¬(P∧Q)∨(¬R∨S). Apply De Morgan’s law and flatten to one clause, ¬P∨¬Q∨¬R∨S. The resulting formula has both true and false assignments."
          },
          {
            "label": "2025–26 D1 Q5(a)",
            "text": "The exam story calls for a named derivation. Use Monday to get AI∨Calculus, the absence to get ¬AI, and both to infer Calculus."
          }
        ],
        "write": [
          {
            "label": "For a rule proof",
            "text": "Number the premises and derived lines. Cite the exact inputs and rule for each line, such as modus tollens on T→S and ¬S to infer ¬T."
          },
          {
            "label": "For a semantic claim",
            "text": "Use all rows if requested. Otherwise, a satisfying assignment and a falsifying assignment establish satisfiable but not valid."
          },
          {
            "label": "For CNF",
            "text": "Eliminate implications, push negation to atoms and distribute ∨ over ∧ when needed. A single disjunction already counts as one CNF clause."
          }
        ],
        "pitfall": "A true row establishes satisfiability only. E2’s nested implication has many true rows and still fails when P, Q and R hold but S does not."
      }
    ],
    "transfers": [
      {
        "source": [
          "CAT2",
          "2025–26",
          "D2",
          "Q2"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q6"
        ],
        "title": "Build a resolution proof with a shared term",
        "match": "Direct CAT practice",
        "carry": "Use CAT part A to clausify Alice’s graduation rules, show which facts support the thesis and viva branches, and resolve against the negated graduation goal.",
        "change": "FAT has different constants and a book variable shared between two literals. Track who reads, who wrote and which book as you construct the admiration fact.",
        "test": "Annotate each resolution step. Then change the reading fact to Reads(John, Book2) and identify which step can no longer unify."
      },
      {
        "source": [
          "CAT2",
          "2025–26",
          "D2",
          "Q3"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E1",
          "Q2"
        ],
        "title": "Trace from facts and back from the goal",
        "match": "Direct CAT practice",
        "carry": "CAT part A asks for both traces of the antibiotic goal from the hospital facts. The cough branch suffices even without fever. The blood test has a separate goal.",
        "change": "FAT still has a separate recommendation, about bright lights, but the rest proof now repeatedly needs both premises of a conjunction. Draw both prerequisites at each backward step.",
        "test": "Can you give both proof traces for Rahul and then name which subgoal fails if the headache fact is removed?"
      },
      {
        "source": [
          "CAT2",
          "2024–25",
          "E1",
          "Q4"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D2",
          "Q6"
        ],
        "title": "Write existence and uniqueness together",
        "match": "Direct CAT practice",
        "carry": "The CAT’s 4.0 GPA statement asks you to assert a qualifying student exists and that any two qualifying students are the same person.",
        "change": "The FAT uniqueness property is CEO(x)∧ReportsToBoard(x). Uniqueness applies to that full property. Part (a) stops at FOL, while part (b) is an independent propositional entailment check.",
        "test": "Does your formula allow two CEOs if one reports to the board and the other does not, and rule out the case where neither reports?"
      },
      {
        "source": [
          "CAT2",
          "2025–26",
          "D1",
          "Q2"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q9(b)"
        ],
        "title": "Prove a classification and show the CNF",
        "match": "Direct CAT practice",
        "carry": "CAT part (b) drills using truth assignments to distinguish validity, satisfiability and unsatisfiability over several formulas.",
        "change": "FAT gives one nested implication. Alongside the classification evidence, write each equivalence that changes the original formula into CNF.",
        "test": "Can you supply a true and a false assignment for the FAT formula and verify that both assignments give the same results in your CNF?"
      }
    ]
  },
  "5": {
    "chronology": "All five sampled FAT papers required numerical probability work. B1 2023–24 paired a teacher posterior with a separate network question. The 2024–25 E1 slot paired classification with network inference, while E2 made supplied-likelihood Bayes and sprinkler inference alternatives under Q10. In 2025–26, D1 used both a posterior and a classifier, while D2 asked for one posterior with a missing joint assumption. Drill all three forms because the question number and mix varied across slots.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q6"
        ],
        "asks": "Find the probability of having chosen the teacher with the 90% pass rate after failing. In the separate second part, use P(A), P(B) and P(A|B) to find the complement of A, the union, the intersection and the reverse conditional.",
        "watch": "Use failure rates of 0.10 and 0.50 in part (a) and compute the intersection first in part (b)."
      },
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q7"
        ],
        "asks": "Use the four-node Boolean graph to compute the joint event P(¬A,B,¬C,D) and then the posterior P(A|B,C,D), with C true in the posterior evidence.",
        "watch": "Recompute the factors for C in part (b) and compare both values of A under the same B,C,D evidence."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q4"
        ],
        "asks": "Write the Naive Bayes classification algorithm, calculate the class-conditional feature frequencies from the ten labeled rows and predict the class of the binary query (0,1,0).",
        "watch": "The negative class contains no row with C=0, so its empirical score is zero."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q5"
        ],
        "asks": "Find the joint probability that the alarm sounds and both neighbors call while there is neither a burglary nor an earthquake. Then find the burglary posterior given just that the alarm sounds.",
        "watch": "State which Alarm CPT column governs your result because several printed true and false pairs fail to sum to one."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q10(a)"
        ],
        "asks": "Use the priors for influenza and a cold, plus the supplied conditional rates for fever, cough and fatigue, to find the influenza posterior after observing all three symptoms.",
        "watch": "State that the two diagnoses form a partition and the three symptoms are conditionally independent within each diagnosis before multiplying their rates."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q10(b)"
        ],
        "asks": "Use the Season, Sprinkler, Rain, Wet and Slippery graph to calculate the chance of slippery ground given a dry season, then the chance of wet ground given that it is slippery with season unspecified.",
        "watch": "The printed Wet probabilities are the same for both sprinkler settings at each rain setting, so summing over Sprinkler removes that factor."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q7"
        ],
        "asks": "Explain uncertainty and how Bayes updates a belief with incomplete or probabilistic evidence, with an example. Then find the overall skills-test pass probability across three colleges and the probability a passing applicant came from C2.",
        "watch": "Compare C2’s pass rate of 0.70 with the overall 0.74 to explain why observing a pass slightly lowers the C2 prior."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q8"
        ],
        "asks": "Use the 12 labeled loan records to classify an employed applicant under 40 with normal CIBIL as accept or reject. Derive the prior and the query feature frequencies separately within each class.",
        "watch": "The =40 category stays separate from <40, and only one of the four accept records is employed."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q8"
        ],
        "asks": "Find the migraine posterior after observing a scintillating scotoma. Apply Bayes and total probability to the migraine, non-migraine with headache, and non-migraine without headache cases, and state an assumption establishing their branch weights.",
        "watch": "The printed P(H) is a marginal and cannot simply be substituted for P(H|¬M)."
      }
    ],
    "patterns": [
      {
        "title": "Reverse a supplied conditional",
        "cue": "Find the probability of a cause after an outcome by summing every way the outcome could happen.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q6"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q10(a)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q7"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q8"
          ]
        ],
        "variations": [
          {
            "label": "One outcome, two or three sources",
            "text": "B1 2023–24 Q6(a) converts pass rates to failure rates before weighting the teachers. D1 2025–26 Q7(b) uses three college branches directly. C2 contributes 0.21 out of 0.74, so passing lowers its 0.30 prior."
          },
          {
            "label": "Several observations per cause",
            "text": "E2 2024–25 Q10(a) gives separate symptom rates, which become 0.504 for influenza and 0.210 for a cold after multiplying within each diagnosis under conditional independence. Only then apply the two diagnosis priors."
          },
          {
            "label": "One alternative needs a second split",
            "text": "D2 2025–26 Q8 gives one symptom rate for migraine and two rates for different non-migraine cases. The headache marginal leaves the non-migraine branch weights unresolved."
          }
        ],
        "write": [
          {
            "label": "Label the evidence",
            "text": "Name the observed event and write a set of disjoint, exhaustive cases that can produce it."
          },
          {
            "label": "Make the branch weights",
            "text": "Multiply each case probability by the likelihood of the evidence in that case. Use a complement or an independence assumption where required and state it."
          },
          {
            "label": "Normalize and explain",
            "text": "Divide the target case weight by the sum of all weights. For D1 Q7(a), use an example to say why the evidence strengthens or weakens the prior belief."
          }
        ],
        "pitfall": "In D2 Q8, let x=P(M∩H). The two non-migraine branch probabilities are 0.995−x and x, giving 0.0049/(0.05465−0.04x). Disjoint events give x=0. Independence gives x=0.004975. Both fit the marginals and give different posteriors."
      },
      {
        "title": "Train and apply Naive Bayes",
        "cue": "Turn a labeled table into class scores and defend the predicted class with counts the reader can check.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q4"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q8"
          ]
        ],
        "variations": [
          {
            "label": "Balanced classes, one zero likelihood",
            "text": "E1 2024–25 Q4 gives five positive and five negative rows and also asks for the algorithm. For (0,1,0), the positive score is 0.008 and the negative score is zero because no negative record has C=0."
          },
          {
            "label": "Unequal classes, both scores positive",
            "text": "D1 2025–26 Q8 changes the features to age band, CIBIL and employment. The class split is four accepts and eight rejects. All six conditional rates needed for the query are nonzero, so compare both scores, 1/64 versus 1/32."
          }
        ],
        "write": [
          {
            "label": "Learn the priors",
            "text": "Group the rows by class and divide each class count by the full number of rows."
          },
          {
            "label": "Count query values within class",
            "text": "For each feature value and each class, give matches over class size. In D1 Q8, Normal is 1/4 within accept and 2/8 within reject."
          },
          {
            "label": "Score and compare",
            "text": "State conditional independence given the class, then multiply the prior and the feature likelihoods. Pick the greater score. Divide by the score sum if posterior probabilities are requested."
          }
        ],
        "pitfall": "Use empirical frequencies for E1 Q4 and label any smoothing assumption. Add-one smoothing changes the result to a tie of 6/343 per class."
      },
      {
        "title": "Follow a network from given values",
        "cue": "Read the graph as a product of parent-conditioned terms, then sum whatever the question leaves unknown.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q7"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q5"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q10(b)"
          ]
        ],
        "variations": [
          {
            "label": "Every node has an assigned value",
            "text": "B1 2023–24 Q7(a) multiplies four factors for one assignment. E1 2024–25 Q5(i) multiplies five, including the two independent calls given Alarm. Each table lookup uses the states of the parents in that assignment."
          },
          {
            "label": "The input is observed and intermediate nodes are hidden",
            "text": "E2 2024–25 Q10(b)(i) fixes the season to Dry. Rain and Sprinkler affect Wet in the graph, and Wet affects Slippery. The table gives identical Wet rates across sprinkler settings, reducing the Wet calculation to 0.30×0.80 + 0.70×0.10 = 0.31."
          }
        ],
        "write": [
          {
            "label": "Read off the parents",
            "text": "Write one factor per node. For B1 Q7 use P(A)P(B)P(C|A)P(D|A,B)."
          },
          {
            "label": "Mark fixed versus hidden",
            "text": "Use the specified states, including complements for false entries. Enumerate both values for every hidden Boolean node that still affects the result."
          },
          {
            "label": "Sum along the graph",
            "text": "For E2 Q10(b)(i), first get P(Wet|Dry). Then average the two Slippery likelihoods over Wet and ¬Wet while keeping Dry fixed."
          }
        ],
        "pitfall": "P(Slippery|Dry) already conditions on Dry. Multiplying the forward calculation by P(Dry) would give a joint probability with Dry instead."
      },
      {
        "title": "Infer backward from network evidence",
        "cue": "Hold the observed nodes fixed, sum over hidden nodes and normalize competing values of the query node.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q7"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q5"
          ],
          [
            "FAT",
            "2024–25",
            "E2",
            "Q10(b)"
          ]
        ],
        "variations": [
          {
            "label": "Two complete assignments",
            "text": "B1 2023–24 Q7(b) fixes B,C,D and compares A with ¬A. The two joint weights are 0.0315 and 0.054. Their sum is the probability of the evidence."
          },
          {
            "label": "Hidden causes and unobserved children",
            "text": "E1 2024–25 Q5(ii) observes only Alarm. Sum over both earthquake states for each burglary state. David’s and Sophia’s call factors sum to one because their calls are unobserved in this part."
          },
          {
            "label": "Infer a parent using its marginal",
            "text": "E2 2024–25 Q10(b)(ii) observes only Slippery, so mix both seasons to get P(Wet)=0.45. Compare the wet-and-slippery weight 0.36 with the not-wet-and-slippery weight 0.055."
          }
        ],
        "write": [
          {
            "label": "Reset the evidence",
            "text": "List the observations separately for each part. E2 uses Dry for part (i) and Slippery as the sole observation for part (ii)."
          },
          {
            "label": "Build both weights",
            "text": "Compute P(query,evidence) and P(¬query,evidence) by summing allowed joint assignments. Remove any unobserved leaf whose conditional probabilities sum to one."
          },
          {
            "label": "Divide by total evidence",
            "text": "Divide the target weight by the sum of the two weights and report any assumption used to interpret the CPT."
          }
        ],
        "pitfall": "E1 Q5 prints 0.999 for both Alarm outcomes when both causes are false. Trusting the whole true column and taking complements gives P(B|A) about 0.19%. Trusting the whole false column gives about 59.51%. State the convention."
      }
    ],
    "transfers": [
      {
        "source": [
          "CAT2",
          "2025–26",
          "D2",
          "Q4"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E1",
          "Q4"
        ],
        "title": "Rework the same Naive Bayes table",
        "match": "Near-repeat",
        "carry": "Part B of CAT 2 has the same ten rows in the same order and the query (0,1,0). The feature names map from P, Q, R in CAT to A, B, C in FAT.",
        "change": "The FAT additionally asks you to write the algorithm. Explain how training counts become priors and likelihoods before applying the rule to the query.",
        "test": "Can you reconstruct the six conditional counts and point to the exact query feature that gives the negative class a zero score?"
      },
      {
        "source": [
          "CAT2",
          "2024–25",
          "E2",
          "Q5"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q7"
        ],
        "title": "Build the Bayes denominator",
        "match": "Direct CAT practice",
        "carry": "CAT2 asks you to explain Bayes and use it to reverse a placement and C proficiency conditional. The 660 proficient students out of 1,000 already supply the evidence probability.",
        "change": "FAT D1 asks you to build the denominator from three colleges. It also asks you to explain with an example how evidence changes an uncertain belief.",
        "test": "Can you identify the numerator and denominator on each paper, then predict whether the D1 posterior for C2 will rise or fall without dividing?"
      },
      {
        "source": [
          "CAT2",
          "2025–26",
          "D1",
          "Q5"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q10(b)"
        ],
        "title": "Sum the hidden branches",
        "match": "Direct CAT practice",
        "carry": "Part (a) fixes A and asks for P(D|A), summing four assignments of the two hidden nodes B and C in a diamond graph.",
        "change": "FAT adds Slippery below the diamond, so sum over Wet too. Its second part reverses direction with only Slippery known, which requires a fresh Wet marginal across both seasons.",
        "test": "Can you list the four hidden assignments in the CAT and show exactly where the sprinkler weights sum to one in the FAT?"
      },
      {
        "source": [
          "CAT2",
          "2025–26",
          "D2",
          "Q5"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E1",
          "Q5"
        ],
        "title": "From a complete assignment to a posterior",
        "match": "Direct CAT practice",
        "carry": "CAT2 gives two fully specified office events. Translate the verbal conditions into one factor per variable, using independent root events and complements for states such as alarm off.",
        "change": "FAT E1 starts with the same joint-product skill. Its second part observes only Alarm, so sum earthquake states for each burglary value, remove the call factors and normalize.",
        "test": "Can you write the FAT’s five-factor joint probability and show why David and Sophia disappear from the posterior calculation?"
      }
    ]
  },
  "6": {
    "chronology": "Planning moves from Q8–Q9 in 2023–24 B1 to Q6–Q7 in both 2024–25 slots. E1 separates action modeling from hierarchical planning under uncertainty. E2 asks for a maze trace and coordination between robots. Both 2025–26 papers make Q9 an OR choice. D1 requires STRIPS on either branch, with a blocks-world partial order or a London trip hierarchy. D2 lets you choose between a hybrid search design and an executable meal plan.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q8"
        ],
        "asks": "Decompose a vacation from Vellore to Paris into an HTN and write the STRIPS preconditions and effects of the primitive travel actions.",
        "watch": "Make the booking and ground-travel steps establish the ticket and departure location that the flight action requires."
      },
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q9"
        ],
        "asks": "Read the blocks-world figure, give reusable STRIPS operators, and provide a valid sequence from the shown initial stack to the shown goal stack. Part B asks separately for a short note on nondeterministic planning.",
        "watch": "C begins on A and becomes the base of the new stack, so move C to the table before stacking B and A."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q6"
        ],
        "asks": "Formulate the room-to-room box transfer in STRIPS. Give the initial and goal facts, identify the actions, and specify each action’s preconditions and effects.",
        "watch": "Make BoxAt(Box,R2) the goal, since a robot reaching R2 with an empty gripper could have left the box behind."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q7"
        ],
        "asks": "Explain how HTN methods apply when primitive actions have multiple outcomes. Use examples to show how the planner handles uncertainty and selects the next subtask.",
        "watch": "An outcome example should show what the agent observes and how that observation changes the remaining plan."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q6"
        ],
        "asks": "Trace forward and backward search separately on the supplied maze, showing every step. Compare the advantages and disadvantages of both directions on this instance.",
        "watch": "G is shaded like a wall, so state that it is traversable to obtain the intended ten-move solution under four-neighbor motion."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q7"
        ],
        "asks": "Explain the challenges and planning strategies for several robots exploring and mapping an unknown continuous environment. Cover how their actions and observations are coordinated.",
        "watch": "Give a mechanism for both spatial coordination and compatible maps, such as reserving a shared doorway and aligning overlapping landmarks."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q9(a)"
        ],
        "asks": "Encode the supplied blocks-world initial and goal states in STRIPS and give a partial-order plan for placing C on A and A on B.",
        "watch": "With atomic relocation moves, the two clearing actions can swap order, and A must be placed on B before C is placed on A."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q9(b)"
        ],
        "asks": "Define states and actions in STRIPS and give a task-consistent hierarchy for a London vacation. Connect the decomposition to an executable order of primitive travel and stay actions.",
        "watch": "State your assumed origin and trip endpoint, then check that each booked resource precedes the action that uses it."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q9(a)"
        ],
        "asks": "Design a planner that combines forward and backward search in a changing environment. Explain the relationship to classical planning and assess potential gains in efficiency, scalability and adaptability.",
        "watch": "A reachable state must satisfy the regressed conjunction at a join, and the remaining plan must be checked again when the world changes."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q9(b)"
        ],
        "asks": "Model meal preparation with an initial state, goal and STRIPS operators. Show how the search uses those operators to generate a valid, efficient meal plan.",
        "watch": "Define efficiency for your model, since the fewest actions and the shortest cooking time can yield different plans."
      }
    ],
    "patterns": [
      {
        "title": "STRIPS states, operators and valid plans",
        "cue": "Turn a scene or description into facts that an action planner can update and check.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q8"
          ],
          [
            "FAT",
            "2023–24",
            "B1",
            "Q9"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q6"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q9(a)"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q9(b)"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q9(b)"
          ]
        ],
        "variations": [
          {
            "label": "Item transfer or recipe",
            "text": "E1 Q6 is mainly a modeling task. Separate the robot’s location from the box’s location and carry the holding fact through Move. D2 Q9(b) also asks how the planner generates the sequence. If Serve requires Cooked, search must establish Cooked before it can apply Serve."
          },
          {
            "label": "Picture versus action dependencies",
            "text": "B1 Q9 asks you to read the stack drawing and produce one valid sequence. D1 Q9(a) supplies different stacks in words and asks which moves must be ordered. Its answer must expose the dependencies between clearing A, moving A onto B, and placing C on A."
          },
          {
            "label": "Operators inside an HTN",
            "text": "B1 Q8 and D1 Q9(b) use STRIPS at the leaves of a vacation task network. Booking, travel and check-in need enough effects to support each later primitive action."
          }
        ],
        "write": [
          {
            "label": "Set the facts",
            "text": "List the relevant initial facts and a goal conjunction, for example On(C,A) ∧ On(A,B)."
          },
          {
            "label": "Define parameterized actions",
            "text": "Give preconditions, add effects and delete effects. Stack(x,y) requires Holding(x) and Clear(y) and deletes both."
          },
          {
            "label": "Verify a grounded plan",
            "text": "For each step check Pre ⊆ s and update s to (s − Delete) ∪ Add. Show the final facts that satisfy the goal."
          }
        ],
        "pitfall": "Forgetting to delete Clear(y) after stacking on y lets later moves use an occupied surface."
      },
      {
        "title": "Hierarchies and uncertain outcomes",
        "cue": "Show which tasks break down into actions and which outcomes need a different continuation.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q8"
          ],
          [
            "FAT",
            "2023–24",
            "B1",
            "Q9"
          ],
          [
            "FAT",
            "2024–25",
            "E1",
            "Q7"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q9(b)"
          ]
        ],
        "variations": [
          {
            "label": "The travel hierarchy recurs",
            "text": "B1 Q8 starts the traveler in Vellore and sends them to Paris. D1 Q9(b) uses London and leaves the origin open. Both support decomposing the trip into preparation, travel and stay. Use the actual initial facts and state your assumptions when the paper leaves them open."
          },
          {
            "label": "From separate theory to applied HTN",
            "text": "B1 Q9 pairs a deterministic blocks-world plan with a standalone note on nondeterminism. E1 Q7 integrates uncertainty into the hierarchy. Explain how a travel or delivery method can choose a detour after the agent observes that the planned route is unavailable."
          }
        ],
        "write": [
          {
            "label": "Name the compound task and method",
            "text": "Draw Vacation as the root with ordered subtasks Prepare, Travel and Stay. Expand each subtask to the actions that carry it out."
          },
          {
            "label": "Resolve the leaves",
            "text": "For each primitive action specify the required facts and effects. Booking adds Ticket, which can support a later flight."
          },
          {
            "label": "Show outcome-dependent continuation",
            "text": "For the nondeterministic version, show a success branch and a recovery branch triggered by observed outcomes. If recovery is impossible on a branch, state that limit."
          }
        ],
        "pitfall": "A decomposition that assumes every action succeeds leaves E1’s question about unpredictable outcomes unanswered."
      },
      {
        "title": "Forward, backward and hybrid search",
        "cue": "Trace the direction of expansion, then show when a forward prefix can connect to a backward suffix.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E2",
            "Q6"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q9(a)"
          ]
        ],
        "variations": [
          {
            "label": "Trace a fixed maze",
            "text": "E2 Q6 wants both traces and a comparison. Treat G as open and use unit-cost orthogonal moves. The forward trace starts at (1,1) and the backward trace starts at (5,7). The ten-move route attains the Manhattan lower bound of four rows plus six columns."
          },
          {
            "label": "Design for changing facts",
            "text": "D2 Q9(a) asks how to join both searches and respond to a dynamic world. For example, regress Delivered through DropOff to At(Destination) ∧ Carrying(Parcel). Join when a forward state satisfies both conditions, then verify the suffix against fresh observations."
          }
        ],
        "write": [
          {
            "label": "Define legal moves",
            "text": "State the start, goal and action model. In the maze, list the frontier and parent at each depth so either direction can reconstruct the route."
          },
          {
            "label": "Regress through useful actions",
            "text": "For positive goals, choose an action that adds a needed fact and deletes none of the required facts. Replace its achieved facts with its preconditions."
          },
          {
            "label": "Test and compare",
            "text": "Validate the joined plan step by step. Explain that smaller frontiers can save expansions while maintaining two searches and testing joins adds work."
          }
        ],
        "pitfall": "Applying the stated shaded-wall rule to G makes it unreachable. Show the intended trace under an explicit walkable-goal assumption."
      },
      {
        "title": "Plan ordering and robot coordination",
        "cue": "Explain which actions depend on each other and where competing actions need coordination.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E2",
            "Q7"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q9(a)"
          ]
        ],
        "variations": [
          {
            "label": "Minimum order in blocks world",
            "text": "D1 Q9(a) asks for a partial order. Clear A before putting A on B. Clear C before moving C onto A. Placing C on A consumes Clear(A), so place A on B first. With each clear-to-table move treated as atomic, either clearing move can go first."
          },
          {
            "label": "Coordination in continuous space",
            "text": "E2 Q7 asks for planning with several robots and an unknown map. Task assignments should avoid duplicate exploration, and local trajectories must handle shared space and moving agents. Explain how agents merge overlapping submaps and reassign work if a path or robot becomes unavailable."
          }
        ],
        "write": [
          {
            "label": "Draw constraints and causes",
            "text": "Use arrows from each action producing a required fact to the action that needs it."
          },
          {
            "label": "Check resource conflicts",
            "text": "When expanding blocks-world moves into gripper actions, respect HandEmpty. For several robots, reserve a shared doorway or have one robot yield."
          },
          {
            "label": "Show what can change",
            "text": "Give a legal linearization for D1. For E2, show how two robots can claim separate frontiers, then align their maps after observing a shared landmark."
          }
        ],
        "pitfall": "A single valid action sequence shows one execution of the D1 plan. The partial-order diagram must also show why the independent clearing moves can swap."
      }
    ],
    "transfers": [
      {
        "source": [
          "FAT",
          "2023–24",
          "B1",
          "Q9"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q9(a)"
        ],
        "title": "From a sequence to causal order",
        "match": "FAT comparison",
        "carry": "Part A of B1 Q9 rehearses reading support facts, clearing the required block, and validating generic STRIPS operators against a concrete sequence.",
        "change": "D1 changes the starting stacks and asks for a partial order. Draw causal links, show that both clear-to-table moves can be swapped, and explain why putting C on A must follow putting A on B.",
        "test": "Write two legal orders that differ only in the order of the clearing steps. Identify the precondition violated if C is placed on A first."
      },
      {
        "source": [
          "FAT",
          "2023–24",
          "B1",
          "Q8"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q9(b)"
        ],
        "title": "Adapt the vacation hierarchy",
        "match": "FAT comparison",
        "carry": "Use the Paris prompt to practise decomposing a trip and connecting booking, transit and lodging with STRIPS effects.",
        "change": "The London OR branch leaves the origin open and asks for a task-consistent plan over states and actions. Declare the origin and scope, then check that every primitive action has support in the plan.",
        "test": "Choose three consecutive primitive actions. For each precondition, point to the initial fact or earlier action that supplies it."
      },
      {
        "source": [
          "FAT",
          "2024–25",
          "E2",
          "Q6"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D2",
          "Q9(a)"
        ],
        "title": "Turn two traces into one planner",
        "match": "FAT comparison",
        "carry": "Use the maze to practise expanding successors from the start and predecessors from the goal, then recovering the same route from either trace.",
        "change": "D2 asks for a hybrid system. Show how a reachable state supports the conditions of a backward subgoal, how to join and validate the plan, and when changed observations require replanning.",
        "test": "Give one example of a forward state that can join a regressed goal, then name a change that would invalidate the suffix."
      },
      {
        "source": [
          "CAT1",
          "2023–24",
          "B2",
          "Q3"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E2",
          "Q6"
        ],
        "title": "Use BFS mechanics in the maze",
        "match": "Prerequisite",
        "carry": "CAT 1 uses a directed graph with cycles to practise FIFO exploration, keeping paths in the frontier and reading edge direction. It is a Module 2 search question.",
        "change": "In the FAT maze, trace forward BFS and backward predecessor search. State move legality, mark previously discovered cells and show how each parent link leads to a route.",
        "test": "List the first four frontiers from each end. Explain why a directed predecessor must have an edge into the current state."
      }
    ]
  },
  "7": {
    "chronology": "B1 2023–24 used Q10 for a model that turns email into a calendar entry. Both 2024–25 slots moved to Q8 retrieval, with E1 testing web ranking and E2 testing large-scale image search. Both 2025–26 slots used Q10 as an OR choice. D1 offered retrieval and rank evaluation or an illustrated recognition method. D2 offered language ambiguity or a chatbot using retrieval and extraction. Retrieval gave four papers a common starting point, but the required outputs varied.",
    "questions": [
      {
        "ref": [
          "FAT",
          "2023–24",
          "B1",
          "Q10"
        ],
        "asks": "Design an NLP model that turns an incoming email into a calendar entry, explain how it works, and carry a specific email example through to the result.",
        "watch": "Show how the model detects scheduling intent, binds the date and time to the correct event, and normalizes relative dates using the message timestamp."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E1",
          "Q8"
        ],
        "asks": "Use a climate-change search example to explain how a search engine surfaces relevant, authoritative and informative pages while reducing repeated or irrelevant results.",
        "watch": "Give a separate reason for topical relevance, source authority and duplicate grouping, then show how each affects the results the user sees."
      },
      {
        "ref": [
          "FAT",
          "2024–25",
          "E2",
          "Q8"
        ],
        "asks": "Discuss at least four challenges in large-scale image retrieval, explain approaches that address them, and name factors that affect system effectiveness.",
        "watch": "Pair every challenge with a mechanism and a measure it could change, such as approximate vector search reducing latency at a possible cost to recall."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q10(a)"
        ],
        "asks": "Explain the steps of information retrieval and illustrate how ranks are evaluated for web-based retrieval. This is one of the two Q10 alternatives.",
        "watch": "Explain how scores create the ranked list, then use relevance judgments at one or more rank cutoffs to evaluate that list."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D1",
          "Q10(b)"
        ],
        "asks": "Choose one object recognition method and explain it in detail with diagrams and an example. This is the vision alternative to D1 Q10(a).",
        "watch": "Label the intermediate representation in the diagram, such as normalized gradient histograms, and explain how the classifier turns it into a prediction."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q10(a)"
        ],
        "asks": "Analyze how probabilistic language models handle ambiguity and illustrate several approaches to interpreting text. This is one of the two Q10 alternatives.",
        "watch": "Write down two plausible interpretations of an example and explain what probability each approach estimates, what evidence changes it and how the model selects an interpretation."
      },
      {
        "ref": [
          "FAT",
          "2025–26",
          "D2",
          "Q10(b)"
        ],
        "asks": "Explain information retrieval and information extraction with examples, then show how a chatbot uses both. This is the alternative to D2 Q10(a).",
        "watch": "Carry one query through to a retrieved passage, the structured fields extracted from it and the chatbot's final answer."
      }
    ],
    "patterns": [
      {
        "title": "Rank and evaluate web results",
        "cue": "Show how a query becomes a ranked list, then address quality, duplicates or evaluation as asked.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E1",
            "Q8"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q10(a)"
          ]
        ],
        "variations": [
          {
            "label": "Relevance and authority in 2024–25 E1 Q8",
            "text": "The climate query tests whether you can select useful pages and handle redundancy. A scientific overview and a measurements page can serve different needs. Group near-identical copies of the overview and explain which version you would show."
          },
          {
            "label": "Workflow and evaluation in 2025–26 D1 Q10(a)",
            "text": "D1 asks for the general IR workflow plus an example of rank evaluation. For the judgments [relevant, irrelevant, relevant, relevant, irrelevant], precision@3 is 2/3 and precision@5 is 3/5. Recall@5 is 3/4 if the collection has four judged relevant documents."
          }
        ],
        "write": [
          {
            "label": "Draw the data flow",
            "text": "Collect documents, build an inverted index, process the query, fetch candidates, score and display them. Name the input and output of the ranking stage."
          },
          {
            "label": "Give each signal a role",
            "text": "Term weights or semantic similarity estimate topical match. Link signals such as PageRank estimate authority. Similarity between candidate pages can identify near-duplicates for grouping."
          },
          {
            "label": "Evaluate the returned order",
            "text": "Choose an information need and judge each result against it. Compute precision and recall at two cutoffs, or use a rank-sensitive measure when earlier hits should earn more credit."
          }
        ],
        "pitfall": "Use link authority as a ranking signal and judged relevance as the basis for evaluation. At one cutoff, precision can stay the same when relevant results swap positions."
      },
      {
        "title": "Retrieve images or recognize objects",
        "cue": "Match the method to the output the prompt requests, whether a ranked image list or a class prediction.",
        "evidence": [
          [
            "FAT",
            "2024–25",
            "E2",
            "Q8"
          ],
          [
            "FAT",
            "2025–26",
            "D1",
            "Q10(b)"
          ]
        ],
        "variations": [
          {
            "label": "Search an archive in 2024–25 E2 Q8",
            "text": "E2 asks for at least four challenge–approach pairs plus effectiveness factors. A query for a bicycle must handle changes in angle and light, bridge the gap between pixel similarity and object meaning, work with sparse metadata and search a large index quickly."
          },
          {
            "label": "Explain one recognition method in 2025–26 D1 Q10(b)",
            "text": "D1 wants a labeled diagram of one method and a worked example. With HOG plus an SVM, gradients encode a pedestrian window, normalized histograms form the feature vector, and the classifier predicts pedestrian or background."
          }
        ],
        "write": [
          {
            "label": "Pair retrieval problems with mechanisms",
            "text": "Use semantic embeddings for the gap between appearance and meaning, local or multiscale features for appearance changes, hybrid visual and text search for sparse labels, and approximate nearest-neighbor indexing for scale."
          },
          {
            "label": "Explain what affects retrieval quality",
            "text": "Cover the descriptor, training data or metadata, similarity metric and index settings. Judge ranked relevance and response time, since a faster index may miss relevant images."
          },
          {
            "label": "Sketch one recognition pipeline",
            "text": "Draw image window → gradients → cell histograms → block normalization → feature vector → trained classifier. Use the example to explain which features support the predicted class."
          }
        ],
        "pitfall": "A list of challenges alone leaves E2's approaches and effectiveness factors unanswered. For D1, label the representation and the prediction in the diagram."
      },
      {
        "title": "Extract fields from language",
        "cue": "Trace how one raw text input becomes a structured event or the information a chatbot needs.",
        "evidence": [
          [
            "FAT",
            "2023–24",
            "B1",
            "Q10"
          ],
          [
            "FAT",
            "2025–26",
            "D2",
            "Q10(b)"
          ]
        ],
        "variations": [
          {
            "label": "Email to calendar in 2023–24 B1 Q10",
            "text": "Start with event intent and tag the relevant spans of the latest message. If an email received on Monday says “tomorrow at 2 pm for half an hour,” the calendar needs Tuesday's date, a start at 14:00, an end at 14:30 and a time zone."
          },
          {
            "label": "Retrieval plus extraction in 2025–26 D2 Q10(b)",
            "text": "The chatbot must first locate a relevant passage for a user query. It can find a workshop announcement by retrieval, then extract its title, time and room into fields before composing a sourced response."
          }
        ],
        "write": [
          {
            "label": "Define the input and schema",
            "text": "Name the text source and target fields. For a calendar entry, include title, start, end, location and attendees. Decide how the system handles missing fields."
          },
          {
            "label": "Describe a model",
            "text": "Use annotated messages for an intent classifier and a sequence tagger that identifies field spans. Use event context to group the spans, then normalize dates and resolve updates or ambiguous fields."
          },
          {
            "label": "Carry one example through",
            "text": "Write the input sentence, show its tagged spans and display the final values. In the chatbot case, show the retrieved passage before the fields and connect the answer back to the passage."
          }
        ],
        "pitfall": "Quoted replies may contain stale event times. Anchor relative dates to the right message and keep text selection, normalization and record creation visible."
      },
      {
        "title": "Resolve ambiguity with probabilities",
        "cue": "Show competing interpretations and what makes each one likely. This pattern occurs in one FAT option.",
        "evidence": [
          [
            "FAT",
            "2025–26",
            "D2",
            "Q10(a)"
          ]
        ],
        "variations": [
          {
            "label": "Attachment example for 2025–26 D2 Q10(a)",
            "text": "In “I saw the man with the telescope,” the phrase can attach to the act of seeing or to the man. A probabilistic grammar can score both trees by their rule probabilities. Extra discourse about the speaker's telescope can favor the instrument reading."
          },
          {
            "label": "Tagging example for the same option",
            "text": "In “fish swim,” an HMM tagger ranks possible noun and verb tag sequences. Transition probabilities favor plausible tag order, and emission probabilities capture which words occur under each tag. This illustrates a different decision from choosing a parse tree."
          }
        ],
        "write": [
          {
            "label": "Define the candidates",
            "text": "Write one ambiguous sentence and list its possible tags, senses or parses. State what contextual evidence would support each reading."
          },
          {
            "label": "Connect each model to a decision",
            "text": "An n-gram scores a continuation from nearby words. An HMM scores tag sequences using transitions and emissions. A probabilistic grammar scores competing parse trees."
          },
          {
            "label": "Choose or clarify",
            "text": "Show how the system would choose the highest-scoring interpretation. In a dialogue, describe one clarifying question if the alternatives remain difficult to distinguish."
          }
        ],
        "pitfall": "A word n-gram gives a fixed token sequence one probability. Comparing two parses of that sequence requires a model or features that distinguish the parses."
      }
    ],
    "transfers": [
      {
        "source": [
          "FAT",
          "2025–26",
          "D1",
          "Q10(a)"
        ],
        "target": [
          "FAT",
          "2024–25",
          "E1",
          "Q8"
        ],
        "title": "Use the IR workflow on a web search case",
        "match": "FAT comparison",
        "carry": "D1 gives you the collection → index → query → candidate scoring → output workflow and a way to evaluate a ranked list.",
        "change": "E1 asks how the system produces useful results for a specific topic. Apply a relevance signal, an authority signal and duplicate grouping to the same climate-change query.",
        "test": "Explain why two distinct results should rank well and why a mirrored copy should be grouped. Then evaluate a five-item list with explicit relevance judgments for the D1 version."
      },
      {
        "source": [
          "FAT",
          "2023–24",
          "B1",
          "Q10"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D2",
          "Q10(b)"
        ],
        "title": "Extend an extractor into a chatbot",
        "match": "FAT comparison",
        "carry": "B1 trains you to specify an event schema, tag the important text spans and normalize them into usable fields.",
        "change": "D2 adds a retrieval stage because the chatbot must locate evidence before it can extract fields. Show the user query, the selected passage, the field values and the resulting reply.",
        "test": "For a workshop-time query, point to the exact text span behind each field and explain how the chatbot responds when two retrieved announcements give different times."
      },
      {
        "source": [
          "FAT",
          "2024–25",
          "E2",
          "Q8"
        ],
        "target": [
          "FAT",
          "2025–26",
          "D1",
          "Q10(b)"
        ],
        "title": "Adapt a vision answer to its output",
        "match": "FAT comparison",
        "carry": "E2 makes you explain how an image descriptor handles changes in appearance and affects the quality of a ranked image list.",
        "change": "D1 wants a class prediction from an image. Draw one recognition method in detail and show how its features feed a classifier on a concrete example.",
        "test": "Write four archive-search challenge–approach pairs for E2. On a blank page, draw the steps for one D1 recognizer and label the feature vector and class output."
      }
    ]
  },
  "8": {
    "chronology": "",
    "questions": [],
    "patterns": [
      {
        "title": "Separate the claim from its evidence",
        "cue": "Explain which part of a message is supported and where its conclusion goes further.",
        "evidence": [],
        "variations": [
          {
            "label": "Incomparable measurements",
            "text": "An example post says library wait times doubled. Its chart goes from five to ten minutes, using a midday count for one day and an evening count for the other. The calculation is correct for those displayed numbers. A general increase needs comparable measurements."
          },
          {
            "label": "A misleading caption",
            "text": "A genuine photo of a flooded street is shared as evidence of flooding today. If the original publication dates it to an earlier event, the image supports the earlier event. The new date in the caption needs separate evidence."
          }
        ],
        "write": [
          {
            "label": "Name the claim",
            "text": "Specify the subject, time, place and quantity the message asserts."
          },
          {
            "label": "Identify the support",
            "text": "Distinguish a record or measurement from a caption, editorial interpretation or prediction."
          },
          {
            "label": "Explain the gap",
            "text": "Point to a missing comparison, omitted context or unsupported inference and say what it changes."
          }
        ],
        "pitfall": "To establish intent, look for separate evidence that the author knowingly shared misleading material."
      },
      {
        "title": "Verify the claim with independent evidence",
        "cue": "Turn a vague instruction to fact-check into checks that could change your conclusion.",
        "evidence": [],
        "variations": [
          {
            "label": "A screenshot of a campus notice",
            "text": "Find the original notice, confirm its date and check for a superseding announcement. A forwarded picture can reproduce an official notice accurately while giving a misleading impression about whether it still applies."
          },
          {
            "label": "A statistic repeated across sites",
            "text": "Trace each report to the underlying measurement. Five sites quoting one press release provide one line of evidence. A separately collected dataset with comparable definitions can corroborate it."
          }
        ],
        "write": [
          {
            "label": "Find the primary source",
            "text": "Check who published it, when it was measured and what population or event it describes."
          },
          {
            "label": "Look for an independent check",
            "text": "Compare the same claim against a source with its own evidence and check that the definitions match."
          },
          {
            "label": "State your provisional conclusion",
            "text": "Explain the scope of what is supported and name any remaining uncertainty."
          }
        ],
        "pitfall": "A credible author is one signal. An answer about this claim still needs the evidence and its context."
      },
      {
        "title": "Justify a proportionate response",
        "cue": "Choose a response based on the strength of the evidence, uncertainty and likely consequences.",
        "evidence": [],
        "variations": [
          {
            "label": "Conflicting evidence",
            "text": "If the date or original source remains unclear, pause sharing and ask for the missing information. Describe which decisive check is still pending."
          },
          {
            "label": "A verifiable correction",
            "text": "If a newer official notice clearly supersedes the forwarded one, report the corrected date or status, cite the primary source and avoid repeating unnecessary speculation."
          }
        ],
        "write": [
          {
            "label": "Give a decision",
            "text": "Say whether you would verify further, withhold, correct or use a reporting channel."
          },
          {
            "label": "Tie it to evidence",
            "text": "Point to the relevant fact and explain what harm or confusion the response would reduce."
          },
          {
            "label": "State what would change it",
            "text": "Name the new source or fact that would justify updating your decision."
          }
        ],
        "pitfall": "Treat unverified material as unresolved. Calling it false requires evidence that contradicts the claim."
      }
    ],
    "transfers": [],
    "exercises": [
      {
        "title": "Read a cropped chart",
        "prompt": "A campus post says bus waits doubled. It compares an average from an hour after classes ended with a day-long average from the previous month. What does the comparison establish, and what comparable data would you request?",
        "check": "Separate the arithmetic from the claimed trend. Ask for matched hours, routes and periods, with enough observations to check whether the claim holds beyond the selected samples."
      },
      {
        "title": "Check a forwarded notice",
        "prompt": "A screenshot says the library is closed Friday. The date in the screenshot is cropped. Write a verification procedure and explain which evidence would settle whether the notice applies this week.",
        "check": "Trace the screenshot to an original notice. Verify the full date, scope and issuing account, then check the official library channel for a replacement notice."
      },
      {
        "title": "Choose a response",
        "prompt": "A photo is shared as showing a road closure near campus today. Its only verified appearance is in an older report at a different location. How would you respond, and what evidence could change your decision?",
        "check": "Explain which date and location the image actually supports. Withhold or correct the caption using the original source. Check for current independent evidence of the road closure."
      }
    ]
  }
};
