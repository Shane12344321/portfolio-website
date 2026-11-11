window.ATLAS_CLOUD_GUIDES = {
  "1": {
    "patterns": [
      "IAM appeared in 5/5 FAT papers. It had four dedicated questions (A2 Q1, F1 Q2, G1 Q2, G2 Q2) and appeared inside A1 Q6’s security design.",
      "Shared responsibility appeared in 2/5 papers (A1 Q1, G1 Q1). G1 Q1 also asks how AWS infrastructure supports a global application.",
      "G2 Q1 asks for the five NIST cloud characteristics, three service models, four deployment models, and a comparison diagram."
    ],
    "learn": [
      "IAM users, groups, assumed roles, least privilege, temporary credentials, and explicit deny.",
      "AWS and customer responsibilities for EC2 and managed services. Know the roles of Regions, Availability Zones, and edge locations.",
      "NIST cloud characteristics and examples of each service and deployment model."
    ],
    "write": [
      "Show who needs access, which identity they use, the actions they need, and the resources those actions target. Separate Dev and Ops permissions and give workloads their own roles.",
      "For G2 Q2, write a policy with Version and Statement. Give each statement an Effect, Action, and Resource. Scope the allows and explicitly deny the excluded table, its child resources, and the named object.",
      "For shared responsibility, name the service. On EC2, AWS handles facilities and virtualization. The customer handles the guest OS, application, data, and access settings."
    ]
  },
  "2": {
    "patterns": [
      "Elasticity was tested directly in 3/5 FAT papers (A1 Q2, A2 Q2, G2 Q3). A2 Q2 combines variable compute demand with S3 lifecycle.",
      "Shared file storage appeared in 2/5 papers (F1 Q3, G1 Q4).",
      "G1 Q3 asks for EC2 instance families and lifecycle. G2 Q4 asks for the nine launch decisions."
    ],
    "learn": [
      "ALB health checks, EC2 Auto Scaling groups, launch templates, scaling metrics, and min/desired/max capacity.",
      "EC2 instance families, purchase options, and what happens to memory and storage on reboot, stop, hibernate, and termination.",
      "EBS for block storage, EFS for a shared file tree, and S3 for objects. Match storage classes and lifecycle rules to access frequency and retrieval time."
    ],
    "write": [
      "Draw users → ALB → healthy EC2 targets across two AZs → private database. Name a scaling metric and explain scale-out, scale-in, and unhealthy instance replacement.",
      "For G2 Q4, write the nine launch decisions in order. AMI → instance type → network settings → IAM role → user data → storage → tags → security group → key pair.",
      "For a shared CMS, draw EC2 instances mounting Regional EFS through mount targets. For S3 lifecycle, state object age at each transition and the retention requirement."
    ]
  },
  "3": {
    "patterns": [
      "VPC design or configuration appeared in 5/5 FAT papers. A1 Q3 and G1 Q5 are the core subnet, routing, and security designs.",
      "A2 Q3 adds CloudFront for global content delivery. G2 Q5 offers VPC peering or Site-to-Site VPN with specific traffic requirements."
    ],
    "learn": [
      "Nonoverlapping CIDRs, subnet placement across AZs, route tables, internet gateways, and public NAT gateways.",
      "Stateful security groups and stateless network ACLs. Know where each applies and how replies are allowed.",
      "When to choose VPC peering, Site-to-Site VPN, Direct Connect, or CloudFront, and what traffic each carries."
    ],
    "write": [
      "Draw two AZs and label each subnet, CIDR, and tier. List public default route → internet gateway, private app default route → public NAT if outbound access is needed, and no internet default route for the isolated DB.",
      "Trace incoming requests and outbound updates separately. Label the allowed port and source at each tier. For custom NACLs, include ordered rules for both directions.",
      "For peering or VPN, show the routes on both sides and identify who can initiate a connection. For CloudFront, show the viewer, edge, and origin on a cache miss."
    ]
  },
  "4": {
    "patterns": [
      "RDS availability plus read scaling appeared in 4/5 FAT papers (A2 Q9, F1 Q5, G1 Q6, G2 Q6).",
      "Relational database and DynamoDB selection or combination appeared in 2/5 papers (A1 Q4, A2 Q4)."
    ],
    "learn": [
      "RDS single-standby Multi-AZ for failover, asynchronous read replicas for read scaling, and backups or point-in-time recovery for data loss. RDS Multi-AZ DB clusters have readable standbys.",
      "Aurora writer and reader roles. Choose DynamoDB keys based on the queries the app needs to run.",
      "CAT 2 practice adds DynamoDB partition and sort keys, secondary indexes, and Streams-triggered processing."
    ],
    "write": [
      "Draw two paths. Show the RDS primary synchronously replicating to a standby in another AZ, then show the application sending lag-tolerant queries to the asynchronous read replica’s own endpoint.",
      "Keep writes and reads that need the latest committed data on the primary. Explain how the app reconnects during failover and how you monitor replica lag.",
      "For Aurora plus DynamoDB, map transactions and joins to Aurora and key-based location or session lookups to DynamoDB. Give an example key and the query it supports."
    ]
  },
  "5": {
    "patterns": [
      "Monitoring, investigation, or recovery appeared in 4/5 papers. Practice G1 Q7 for incident investigation and F1 Q7 for EC2 recovery.",
      "Billing and cost controls appeared in 3/5 papers. Practice A1 Q9 for a cost-control plan and F1 Q6 for a bill spike.",
      "Systems Manager operations or remediation appeared in 2/5 papers. Practice A1 Q5(b) for automatic remediation and G2 Q7 for private fleet management."
    ],
    "learn": [
      "CloudTrail records API activity. Config records resource changes and evaluates compliance. CloudWatch tracks operational metrics, logs, and alarms.",
      "Know the roles of Systems Manager Agent, Session Manager, State Manager, Inventory, and Automation. Review the historical Change Manager and Incident Manager features named in G2 Q7.",
      "Learn cost allocation tags, Cost Explorer, actual and forecast budget thresholds, and Trusted Advisor recommendations."
    ],
    "write": [
      "For an incident, trace who changed what → before/after resource configuration → effect on metrics → alert → remediation and verification.",
      "For automatic remediation, draw Config noncompliance → EventBridge or Lambda → Systems Manager runbook → compliance recheck. Name the rule and its corrective action.",
      "For a bill spike, identify the cost by account, Region, service, or tag → set a budget threshold and recipient → justify a specific optimization. Include a Budget Action if the prompt asks for enforcement.",
      "For private fleet management, follow the four requirements in G2 Q7. Show private SSM access, configuration baselines, approved runbooks, and incident paging with follow-up."
    ]
  },
  "6": {
    "patterns": [
      "Public-facing threat protection appeared in 5/5 papers. F1 Q8 and G1 Q8 focus on Shield. A2 Q6 layers controls, and G2 Q8(a) asks for sample WAF rules.",
      "Encryption and key protection appeared in 3/5 papers. Practice A1 Q6 or A2 Q6 for layered protection and G2 Q8(b) for encryption diagrams.",
      "Shared responsibility appeared in 2/5 papers, A1 Q1 and G1 Q1."
    ],
    "learn": [
      "WAF filters HTTP requests for patterns such as SQL injection and XSS. Shield mitigates DDoS. For WAF, learn rule priority, IP sets, managed rules, Count, Block, and rate-based rules.",
      "Know how S3 Block Public Access, least-privilege access policies, KMS-backed encryption, and TLS protect different parts of the design.",
      "Practice identifying where encryption happens and who supplies or manages the key for client-side encryption, SSE-C, and SSE-KMS."
    ],
    "write": [
      "Map each finding to a control and its location. Put WAF on CloudFront or the ALB, use Shield for DDoS, block public S3 access, and label KMS encryption and TLS.",
      "For sample WAF rules, give the match, priority, and action. Block the deny list, test managed rules in Count, scope any false-positive exception narrowly, and specify a default action.",
      "For an encryption comparison, draw the client → S3 path twice. Label where plaintext becomes ciphertext and which party handles the key."
    ]
  },
  "7": {
    "patterns": [
      "Step Functions appeared in 4/5 papers. Practice G1 Q9(b) for parallel workflow steps and G2 Q9 for the SWF comparison.",
      "SNS appeared in 3/5 papers and SQS in 2/5. A2 Q10 asks you to combine both with Step Functions.",
      "Two papers explicitly ask for Well-Architected. A1 Q7 asks for three justified cost actions, and A2 Q7 asks for at least three relevant pillars."
    ],
    "learn": [
      "SQS buffers work for consumers. SNS fans an event out to subscribers. Step Functions coordinates dependent tasks and handles retries and branching.",
      "Know SQS visibility timeout, deleting after success, duplicate delivery, and dead-letter queues. Review Step Functions Task, Choice, Parallel, Retry, and Catch.",
      "Learn the six Well-Architected pillars and one design decision or measurable outcome you can connect to each."
    ],
    "write": [
      "Draw order → SQS → consumer → Step Functions → SNS subscribers. Label inventory, payment, and shipping inside the workflow.",
      "Include a failure path. Retry a transient payment error with backoff and an order-level idempotency key. Route a permanent failure to compensation or manual review.",
      "For a pillar question, give the scenario problem → specific design change → measurable result. For the full e-commerce design in A1 Q10, trace a normal request, a spike, and an AZ failure."
    ]
  },
  "8": {
    "patterns": [
      "Offline Snow-family transfer appeared in 4/5 papers. Practice F1 Q10(b) for Snowball Edge and G1 Q10(a) for choosing a device.",
      "A database migration strategy was directly asked in 3/5 papers. G2 Q10 is the cross-engine migration drill with a 15-minute cutover target.",
      "Server rehosting appeared in 3/5 papers. A2 Q8(a) and G1 Q10(b) explicitly name legacy AWS Server Migration Service."
    ],
    "learn": [
      "Classify the job first. Use rehosting for servers, DMS for a supported live database migration, and schema conversion when changing database engines. Use VPN or Direct Connect for ongoing hybrid connectivity.",
      "Know DMS full load, change data capture, replication lag, data validation, and cutover. Rehearse when to proceed and when to roll back.",
      "Learn Snowball, Snowball Edge, Snowmobile, and SMS as historical exam topics. Compare portable transfer, local processing, and truck-scale transfer."
    ],
    "write": [
      "Draw the DMS timeline. Convert and test the schema → full load plus change data capture while the source stays live → validate data and check lag → pause writes, drain changes, switch endpoints, and smoke-test. Name a rollback trigger.",
      "For historical offline transfer, justify the device from volume, bandwidth, and local compute. Show encrypted job → local copy or processing → verify → ship → S3 import and verification.",
      "For legacy SMS, write discover VMs → replicate changes → build an AMI → test EC2 → final sync and cutover. For VPN, label the tunnels and the route in each direction."
    ]
  }
};
