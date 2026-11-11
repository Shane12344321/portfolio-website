window.ATLAS_CLOUD_ANSWERS = {
  "218983cba7448fd3": {
    "answer": [
      "Option A is Infrastructure as a Service (IaaS), B is Platform as a Service (PaaS), and C is Software as a Service (SaaS)."
    ],
    "points": [
      "A: The provider supplies virtual compute, storage, and networking. EduSpark installs and patches the guest OS, configures the runtime, and runs the application.",
      "B: The provider manages the infrastructure and runtime and supplies development and deployment tools. EduSpark writes the application, deploys its code, and manages its data and application settings.",
      "C: The provider runs the finished learning management system and its underlying stack. EduSpark sets up courses, manages users, and uploads content.",
      "Choose C when the hosted LMS meets the required teaching features and the team wants minimal operations. Choose B if the learning experience needs custom application code."
    ],
    "example": [
      "Stack comparison: IaaS → manage OS and application. PaaS → manage application. SaaS → configure and use the finished application."
    ]
  },
  "1628519503d597ca": {
    "answer": [
      "Give each employee an individual IAM user, then assign departmental permissions through IAM groups and least-privilege policies."
    ],
    "points": [
      "Create Sales, HR, and Finance groups and add employees according to their duties. Keep privileged IT administration in a separate group or role.",
      "Attach one customer-managed policy per department to its group. In each Allow statement, name the specific actions and resource ARNs, and add conditions where useful.",
      "Allow Sales to read approved sales reports, HR to access personnel records, and Finance to manage the invoices it owns. Access outside a person's assigned policy remains denied by default.",
      "Update group membership during transfers and remove access during offboarding. Enable MFA, review permissions periodically, and use CloudTrail for API audit records."
    ],
    "example": [
      "Employee A → Sales group → sales-report read policy → sales-reports S3 bucket. The same employee's attempt to read HR records has no matching Allow."
    ]
  },
  "e8b479dd4cb1f036": {
    "answer": [
      "Match EC2 families to the main bottleneck of each department: balanced resources, CPU, GPU, memory, or local storage throughput."
    ],
    "points": [
      "Web Development → general-purpose T family for a small, bursty site or M family for steady traffic. Both balance compute and memory.",
      "Data Analytics → compute-optimized C family when processing is CPU-bound. Benchmark with representative queries or batch jobs.",
      "Research and AI → accelerated computing P family for GPU training, or G family when a smaller GPU workload fits it.",
      "Database Team → memory-optimized R family to hold larger working sets and indexes in RAM and reduce disk reads.",
      "Media Department → storage-optimized I family for high-throughput local staging or caching of large video assets. Keep durable originals in S3 because EC2 instance store is temporary."
    ],
    "example": [
      "Illustrative family mapping: Web T/M → Analytics C → AI P/G → Database R → Media I."
    ]
  },
  "e88eafd9d3d7df9b": {
    "answer": [
      "Choose an Application Load Balancer (ALB) for EduSpark's web traffic. Elastic Load Balancing distributes incoming traffic among healthy targets."
    ],
    "points": [
      "Define listeners for incoming protocols and ports, attach target groups, and configure health checks. Spread the targets across Availability Zones for resilience.",
      "ALB works at Layer 7 and understands HTTP and HTTPS. It can terminate HTTPS and route courses, quizzes, or API requests by host or URL path.",
      "Network Load Balancer (NLB) works at Layer 4 and handles TCP, UDP, or TLS flows. Choose it for network-protocol workloads or static IP requirements.",
      "Gateway Load Balancer (GWLB) distributes IP traffic to virtual network appliances such as firewalls. GWLB endpoints insert the appliances into the traffic path, and GENEVE carries packets to the appliances.",
      "Use the ALB for browser-facing application routing. Use NLB when a transport-level requirement calls for it and GWLB when the design needs inline network inspection."
    ],
    "example": [
      "Students → HTTPS ALB → /courses target group or /quiz target group. Each group has healthy application targets in two Availability Zones."
    ]
  },
  "d4f77e5b091bac50": {
    "answer": [
      "Put the patient portal's internet-facing entry point in public subnets, the application in private subnets, and the medical-record database in isolated private subnets across two Availability Zones."
    ],
    "points": [
      "Create one VPC, for example 10.0.0.0/16, with nonoverlapping public, application, and database subnet pairs. Associate each subnet with its tier's route table.",
      "Attach an Internet Gateway and put 0.0.0.0/0 → Internet Gateway in the public route table. Run the internet-facing ALB in the two public subnets.",
      "Give private application instances no public IP. If they need outbound internet for updates, route their default IPv4 traffic to a public NAT Gateway. Keep database subnets on VPC-local routes.",
      "Allow inbound HTTPS to the ALB. Allow the application port from the ALB security group and the database port from the application security group only.",
      "Use HTTPS/TLS on required connections and encrypt patient data at rest. Run healthy application targets in both Availability Zones so the ALB can use the surviving targets if one zone is affected."
    ],
    "example": [
      "Patients → HTTPS ALB in public subnets → portal servers in private application subnets → records database in isolated private subnets."
    ]
  },
  "9e3a0726c0541b74": {
    "answer": [
      "AWS handles security of the cloud. The healthcare startup handles security in the cloud, with the exact split depending on the service it selects."
    ],
    "points": [
      "AWS controls physical data-center access and maintains facilities, hardware, the underlying network, and the EC2 virtualization layer.",
      "With EC2, the startup patches the guest OS and application, configures its security groups, and grants user and workload access through IAM.",
      "With a managed service such as RDS, AWS maintains the underlying OS and provides managed patching. The startup still manages database accounts, access rules, and applicable maintenance settings.",
      "The startup classifies patient records and chooses encryption at rest and in transit, for example KMS-backed storage and TLS. It restricts key and data access, then checks logging and compliance requirements."
    ],
    "example": [
      "EC2 example: AWS secures the physical host and hypervisor. The startup patches the EC2 guest OS, protects patient records, and controls application access."
    ]
  },
  "1e80430f3824eda2": {
    "answer": [
      "Manage recurring developer permissions through IAM groups with reusable policies. Give each developer a distinct identity for accountability."
    ],
    "points": [
      "Create groups by application or duty, for example AppA-Developers, AppB-Developers, and ReadOnly. Add IAM users to the groups that match their approved work.",
      "Attach a customer-managed policy to each group and scope its Action and Resource fields to the necessary services, operations, and resources. Use environment tags or resource ARN patterns to constrain access where supported.",
      "Keep production administration separate and give routine developers only their approved development access. Use separate workload roles with temporary credentials for deployments and applications.",
      "When access changes, update group membership or the shared policy. Review inherited access, require MFA for human users, and audit activity through CloudTrail."
    ],
    "example": [
      "Developer → AppA-Developers group → policy permits writing to App A's dev artifact bucket. A write to the production bucket is denied without a matching grant."
    ]
  },
  "c884b604f55c4077": {
    "answer": [
      "Use EC2 Spot Instances. The render jobs run intermittently and can survive interruptions, so discounted spare capacity fits their workload."
    ],
    "points": [
      "Launch render workers when jobs arrive and terminate them when the queue is empty. The workload does not require a standing capacity commitment.",
      "EC2 can reclaim Spot capacity. Split renders into independent frames or chunks and store completed output in durable storage such as S3.",
      "Checkpoint progress and make jobs retryable. If an interruption occurs, a replacement worker can resume or repeat the unfinished chunk.",
      "Use several suitable instance types or Availability Zones to improve access to capacity. Keep On-Demand as a fallback only for work with a hard delivery deadline."
    ],
    "example": [
      "Render queue → Spot workers → completed frames in S3. If a worker is interrupted, requeue its unfinished chunk."
    ]
  },
  "106fa7aee4a94d0e": {
    "answer": [
      "Use an S3 Lifecycle rule to move invoices from S3 Standard to Standard-IA at day 30, then to Glacier Deep Archive at day 120 if audit retrieval can take hours."
    ],
    "points": [
      "Days 0–29: Use S3 Standard for frequent downloads and low-latency access.",
      "Days 30–119: Use S3 Standard-IA for the 90-day rare-access period. It retains fast access at a lower storage rate and charges for retrieval.",
      "From day 120: Use S3 Glacier Deep Archive for long-term legal retention. Restore an invoice before downloading it and budget for restore time and fees.",
      "Scope the rule to invoice objects using a prefix or tag. Retain them through the full legal period measured from the legally required start date. Use S3 Object Lock with versioning if regulations require protection against deletion.",
      "For many small invoices, review the Lifecycle size filter, transition fees, and storage overhead before adopting the rule."
    ],
    "example": [
      "Upload → S3 Standard → age 30 days: Standard-IA → age 120 days: Glacier Deep Archive → expire only after the legal hold or retention period permits deletion."
    ]
  },
  "def576d14809d342": {
    "answer": [
      "Use a VPC with a public-facing web tier, a private application tier, and an isolated database tier. Repeat the subnet layout in a second Availability Zone for availability."
    ],
    "points": [
      "Put the internet-facing ALB in the public web subnets. Associate those subnets with a route table containing 0.0.0.0/0 → Internet Gateway. Web servers behind the ALB can use private IP addresses.",
      "Put application servers in private subnets with no public IPs. Use 0.0.0.0/0 → public NAT Gateway only if they need outbound internet access.",
      "Place the database in its own private subnet group with VPC-local routing and no internet default route.",
      "Set a security-group chain: clients → ALB on 443, ALB SG → web SG on the web port, web SG → app SG on the application port, and app SG → DB SG on the database port.",
      "The route tables define reachable networks. The security groups restrict which sources and ports can initiate connections at each tier, while allowing stateful replies."
    ],
    "example": [
      "Internet → public ALB → web servers → private app servers → isolated database. Draw each tier in both Availability Zones and write its route table beside it."
    ]
  },
  "17fab9a9536aa4c9": {
    "answer": [
      "Use a hybrid cloud. Keep sensitive identity and financial systems in the bank’s private data center and run the loan portal and machine learning workloads on AWS."
    ],
    "points": [
      "The private environment keeps systems of record under the bank’s existing access, residency, and audit controls.",
      "Deploy the customer portal in an AWS VPC and scale the web and application capacity as loan demand changes.",
      "Send only approved and, where feasible, de-identified data to the cloud for model training or inference. Keep raw records on premises and expose narrowly scoped services for authorized lookups.",
      "Connect the AWS VPC to the data center over an encrypted Site-to-Site VPN or a dedicated Direct Connect link with suitable encryption. Restrict routes and firewall rules to the required flows."
    ],
    "example": [
      "Loan applicant → public portal → private application tier → approved API over the hybrid link → bank records. Approved training extracts → cloud ML pipeline."
    ]
  },
  "6601015ad88c7791": {
    "answer": [
      "Choose Infrastructure as a Service (IaaS). Run the legacy application on Amazon EC2 in an Amazon VPC so the agency controls the guest system, application, and citizen data."
    ],
    "points": [
      "AWS operates and secures the physical facilities, hosts, and virtualization layer. The agency chooses the AWS Region, instance size, OS image, and storage.",
      "The agency manages guest OS patching, legacy software, application code, identities, and data protection. It also configures subnet routing and security groups in the VPC.",
      "Keep the database private, restrict network access to approved clients, encrypt storage and connections, and audit privileged actions. These choices support the agency’s compliance obligations.",
      "Use an AMI and attached EBS volumes to rehost the application while preserving its operating environment where compatibility allows."
    ],
    "example": [
      "Authorized agency users → approved private connection → EC2 legacy application → encrypted data store. AWS operates the underlying infrastructure and the agency secures the workload."
    ]
  },
  "897af47721226b8f": {
    "answer": [
      "Use AWS Identity and Access Management (IAM) to control who can access which AWS resources and what actions they can perform."
    ],
    "points": [
      "Give each person a separate identity. For an IAM user-based design, place users in groups such as Developers, Operations, and Auditors according to job function.",
      "Attach identity-based policies to groups to assign common permissions. Scope each policy by Effect, Action, and Resource, and use conditions where needed.",
      "Use IAM roles for applications and temporary elevated access. The trust policy defines who can assume a role, and the permissions policy defines what the assumed role can do.",
      "Start with least privilege, enforce MFA for privileged users, avoid routine root use, and use CloudTrail to review account activity. Federation provides centrally managed temporary human access."
    ],
    "example": [
      "Developer user → Developers group → allow s3:GetObject on arn:aws:s3:::example-dev-assets/* only.",
      "EC2 application → assumes AppReadRole → temporary credentials → approved S3 objects."
    ]
  },
  "1e1d07f6f7438b4f": {
    "answer": [
      "Use Amazon S3 object storage. Choose S3 Standard for active content, Standard-IA for infrequent fast access, Glacier Deep Archive for long-term retention, and Intelligent-Tiering for uncertain demand."
    ],
    "points": [
      "S3 Standard provides low-latency access to frequently used video, subtitles, thumbnails, and metadata. CloudFront can cache streaming assets near viewers.",
      "S3 Standard-IA preserves rapid retrieval for infrequently opened backups and older content. Check retrieval charges and minimum storage duration before transitioning objects.",
      "S3 Glacier Deep Archive fits rarely restored media and compliance logs when the business can tolerate a restore delay measured in hours. Align retention and deletion with the applicable policy.",
      "S3 Intelligent-Tiering tracks access and moves eligible objects among access tiers automatically. Account for monitoring charges and use optional archive tiers only when asynchronous retrieval is acceptable.",
      "Use separate prefixes or tags to apply S3 Lifecycle rules for predictable aging and preserve the object versions that retention policies require."
    ],
    "example": [
      "New episodes → Standard. Previous-season episodes that must play immediately → Standard-IA when viewing drops. Retained master copies → Glacier Deep Archive. Unpredictable back-catalog demand → Intelligent-Tiering."
    ]
  },
  "9e81f75dee3bf275": {
    "answer": [
      "Read c6g.4xlarge as compute-optimized family (c), sixth generation (6), AWS Graviton processor (g), and instance size (4xlarge).",
      "Label each arrow with the action that causes the EC2 state transition."
    ],
    "points": [
      "The typical naming pattern is series and generation, optional capability letters, then a dot and the size. The size determines the resource allocation within the instance family.",
      "Label AMI → pending as launch, running → running as reboot, and stopped → pending as start. Pending then progresses to running.",
      "Label the pending → stopping and running → stopping arrows as stop. Hibernating an eligible running instance also enters stopping, then stopped.",
      "Label arrows from pending, running, stopping, and stopped into shutting-down as terminate. Shutting-down then progresses to terminated.",
      "Reboot restarts the OS on the same host and preserves instance-store data. Stop/start is available for EBS-backed instances, retains EBS volumes, loses RAM and instance-store data, and pauses instance compute charges while stopped.",
      "Hibernation writes RAM to the EBS root volume and restores it at start on a supported, configured instance. Termination permanently removes the instance, and DeleteOnTermination controls whether each attached EBS volume survives."
    ],
    "example": [
      "Restart a running app on the same instance → reboot. Pause an EBS-backed development VM overnight → stop. Resume saved process state → hibernate. Retire the VM permanently → terminate."
    ]
  },
  "ae1daf7c10df125a": {
    "answer": [
      "Use an Amazon VPC with a public web tier for Apache Tomcat access and a private database tier for back-end connections."
    ],
    "points": [
      "Define a VPC CIDR and create public web and private database subnets. Use public subnets in two Availability Zones for a standard regional Application Load Balancer.",
      "Attach an Internet Gateway and route 0.0.0.0/0 to it from the public subnet. Place an internet-facing Application Load Balancer in public subnets to expose Tomcat over HTTPS.",
      "Allow internet traffic on TCP 443 to the load balancer security group, then allow the Tomcat port only from the load balancer security group.",
      "Keep the database servers on private addresses with no Internet Gateway default route. Permit the database port, for example TCP 3306 for MySQL, only from the Tomcat security group.",
      "Use VPC-local routing between tiers. If a private tier requires outbound updates, provide controlled NAT egress without opening direct inbound access."
    ],
    "example": [
      "Internet → Internet Gateway → public HTTPS ALB → Apache Tomcat targets → private database on TCP 3306. Mark each subnet boundary and security group source."
    ]
  },
  "15e41d0504095f0d": {
    "answer": [
      "AWS divides its infrastructure into geographically separated Regions, isolated Availability Zones within Regions, and edge locations near users. Use these boundaries to meet performance, resilience, and residency requirements."
    ],
    "points": [
      "A Region is a geographic location containing multiple AZs. Select a Region for user proximity, required service availability, and applicable data residency obligations.",
      "An AZ consists of one or more discrete data centers with independent infrastructure. Place application capacity across AZs so an infrastructure fault in one zone can leave the other serving requests.",
      "AWS links AZs with low-latency networking. An application can use regional load balancing, Auto Scaling, and database replication to grow capacity and recover from a zone failure.",
      "CloudFront edge locations cache suitable content near users, lowering request latency and reducing load on origins. Local Zones can place supported workloads nearer to some metro areas when lower application latency is needed.",
      "Keep regulated data, backups, and replicas in approved locations and verify service-specific behavior. Choose a secondary Region for recovery only if recovery and residency requirements permit it."
    ],
    "example": [
      "Users → nearby CloudFront edge → chosen AWS Region → load balancer → application targets in AZ A and AZ B. Mark the approved Region as the boundary for regulated storage."
    ]
  },
  "b9b5c1104b18dbb3": {
    "answer": [
      "Use campus single sign-on and role-based authorization. Give staff who manage AWS resources temporary access through IAM Identity Center, and enforce student, faculty, and administrative access inside the university application."
    ],
    "points": [
      "Map directory groups to permissions by job or affiliation. Students can view their own portal records, faculty can read assigned course or research data, and registrars can update authorized student records.",
      "Separate AWS accounts for sensitive systems where appropriate. Assign AWS console and CLI access with Identity Center permission sets scoped to the relevant accounts and duties.",
      "Attach IAM roles to the portal’s EC2, container, or Lambda workloads. Scope permissions by service action and resource ARN, then have the application enforce per-student or per-project access to individual records.",
      "Apply least privilege, MFA for privileged access, separation of duties, and periodic entitlement reviews. Remove access through the directory when people leave or change roles.",
      "Use CloudTrail to audit AWS API calls and use application logs to audit sign-ins and access to university records. Review changes to privileged roles and sensitive resources."
    ],
    "example": [
      "Campus IdP → student sign-in → portal authorization checks course enrollment → portal workload role accesses the approved database. Campus staff group → IAM Identity Center → permission set → authorized AWS account.",
      "Example research policy grants s3:GetObject on arn:aws:s3:::example-research/project-a/* to the approved project role."
    ]
  },
  "e7bdd2f72c0aa461": {
    "answer": [
      "Cover steady ticketing and scheduling usage with Reserved Instance discounts. Use On-Demand instances for critical festival peaks and reserve Spot capacity for interruptible background work."
    ],
    "points": [
      "Measure the continuously used baseline and commit only the predictable instance configuration and usage for the chosen term.",
      "Use an Application Load Balancer and an EC2 Auto Scaling group across multiple AZs. Configure scheduled scaling before festival dates and a demand-based policy for additional traffic.",
      "Add On-Demand capacity to the critical ticketing fleet when demand exceeds the baseline. Use health checks and scale-in draining to protect live requests.",
      "Use Spot for restartable work such as report generation or offline analytics. Checkpoint or queue jobs so interruptions can be handled without affecting bookings.",
      "Treat a Regional Reserved Instance as a billing discount. For peak capacity assurance, arrange a suitable zonal Capacity Reservation in advance and test availability and performance before the event."
    ],
    "example": [
      "In an illustrative plan, cover 10 always-used instances with a commitment, schedule 20 additional On-Demand instances for holiday booking, and run restartable analytics jobs on Spot."
    ]
  },
  "62e984fd7fb18a1e": {
    "answer": [
      "Use EBS block storage for an EC2-hosted catalog database and transaction logs. Use Regional EFS for manuscript scans and shared reading materials when multiple Linux application servers need the same filesystem."
    ],
    "points": [
      "EBS attaches as a block device to an EC2 instance in the same AZ. SSD types support low-latency random I/O, and gp3 lets you configure volume capacity, IOPS, and throughput for database and log activity.",
      "EFS presents a shared NFS filesystem through mount targets. Multiple application servers can access the same files concurrently, with Regional EFS supporting mount targets across AZs.",
      "EBS volume capacity is provisioned and can be expanded. EFS grows and shrinks with the stored files, with performance depending on throughput configuration and workload.",
      "EBS bills for provisioned storage and, depending on volume type, provisioned performance and snapshots. EFS bills by stored data and class, with throughput or access charges where applicable.",
      "Put book metadata and circulation records in the database on EBS for indexed lookups and transactional updates. Back up both the catalog and its logs so the university can restore the circulation history.",
      "Keep manuscript scans and reading files in shared EFS directories for concurrent app access. Use lifecycle transitions for infrequently opened files if their access and cost requirements fit."
    ],
    "example": [
      "Two portal EC2 instances → same EFS reading folders. Catalog database EC2 → gp3 EBS volumes for catalog data and check-in/check-out logs."
    ]
  },
  "84ada1bfad06db4d": {
    "answer": [
      "Give the web, application, database, monitoring, and administration tiers separate subnets inside one Amazon VPC. Reserve additional VPC address space for future subnets."
    ],
    "points": [
      "Separate subnets let the bank apply tier-specific route tables and NACLs. Pair them with security groups to limit which systems can communicate and reduce exposure if one tier is compromised.",
      "Make the web subnet public with a default route to an Internet Gateway. Give its HTTPS entry server a public address. Keep application, database, monitoring, and admin subnets private.",
      "Allow HTTPS from customers to the public entry server, app requests from the web tier, and database requests only from the app tier. Keep the database off any internet-facing route.",
      "Let monitoring collect approved logs and health signals from other tiers. Let staff reach the private admin tier through a corporate VPN or Systems Manager with scoped permissions.",
      "Reserve an unused portion of the VPC CIDR for growth, such as a new application tier, additional AZ capacity, or private endpoints. This avoids renumbering existing subnets."
    ],
    "example": [
      "Internet → public web entry → private app → private database. Private monitoring receives tier telemetry, and staff connect privately to the admin tier. Show reserved space beside the five active subnets."
    ]
  },
  "6d43a8d5760676f2": {
    "answer": [
      "Use Amazon RDS Multi-AZ for order transactions, separate read replicas for customer lookups, and a dedicated change-data pipeline for live analytics."
    ],
    "points": [
      "Keep order creation, payment updates, and reads that require the latest committed state on the primary RDS instance. Keep transactions short and give each order request a stable idempotency key so a retry cannot create a second order.",
      "In an RDS Multi-AZ DB instance deployment, the primary synchronously replicates to a standby in a second Availability Zone. During automatic failover, reconnect through the DB endpoint and retry safely. A short interruption is still possible.",
      "Route lag-tolerant order searches and lookups to asynchronous read replicas through their separate endpoints. Index the fields used by common searches, monitor replica lag and CPU, and send freshness-sensitive queries to the writer.",
      "Stream committed order changes from the database transaction log with AWS DMS change data capture into Kinesis. Feed a separate analytics store such as Amazon Redshift so dashboards query it without running reporting queries on the transaction database.",
      "Load-test the read path, measure failover recovery time and CDC lag, and rehearse reconnecting while an order is being submitted."
    ],
    "example": [
      "Order writes → RDS primary → synchronous standby. Customer lookups → read replica. Committed changes → DMS → Kinesis → Redshift dashboards."
    ]
  },
  "97c13e501d16b0b3": {
    "answer": [
      "Enable DynamoDB Streams on the bookings table and process changes asynchronously for trip notifications, near-real-time analytics, and protected audit retention."
    ],
    "points": [
      "Configure the stream with old and new item images so each change can record the booking ID, previous state, new state, and event time. Keep a stable event ID for deduplication.",
      "Use a Lambda stream consumer to detect relevant status transitions. Publish those transitions to an SNS topic and route messages to authorized passenger and driver notification endpoints.",
      "Send booking change events to Kinesis Data Streams. Aggregate counts over short time windows by region and status with a stream consumer and send the resulting demand metrics to a dashboard.",
      "Archive the complete change history from the stream pipeline in a versioned S3 bucket with Object Lock compliance-mode retention, SSE-KMS, and restricted write and read roles. Set retention according to audit requirements.",
      "Design consumers for retries and duplicates. Monitor Lambda errors and stream processing age, retain failed events for review, and archive promptly because DynamoDB Streams retains records for 24 hours."
    ],
    "example": [
      "Bookings table → DynamoDB Streams → Lambda. Status changes → SNS → rider and driver. Full event stream → Kinesis → demand dashboard and Object Lock archive."
    ]
  },
  "a4b82000e17a1984": {
    "answer": [
      "Combine CloudWatch for performance, CloudTrail for API activity, AWS Config for baseline compliance, and Systems Manager for patching and remediation."
    ],
    "points": [
      "Use CloudWatch to collect ALB latency and error metrics, EC2 CPU and status checks, and application logs. Use the CloudWatch agent for memory and disk metrics. Set alarms and send notifications to the operations team through SNS.",
      "Enable a multi-Region CloudTrail trail for management events and deliver logs to a restricted, encrypted audit bucket. Use event time, API action, identity, and source IP to investigate unexpected changes.",
      "Enable AWS Config resource recording and rules for the approved baseline, such as encrypted EBS volumes and approved security group settings. Aggregate compliance across accounts and Regions.",
      "Enroll servers as Systems Manager managed nodes using the SSM Agent and least-privilege roles. Use Patch Manager baselines and maintenance windows to scan and patch by environment. Test in development, then roll out in production and verify patch compliance.",
      "Route relevant noncompliance events into an approved Systems Manager Automation runbook or a human review queue. Recheck the Config rule and keep the audit and patch execution records."
    ],
    "example": [
      "CloudWatch flags an error spike → CloudTrail identifies the API caller → Config shows the changed security group → an approved SSM runbook restores the baseline → verify compliance and application health."
    ]
  },
  "ebad0fe36a178547": {
    "answer": [
      "Build a cost-control process around Billing and Cost Explorer for visibility, team ownership through cost tags, AWS Budgets for alerts and targeted actions, and Trusted Advisor for optimization."
    ],
    "points": [
      "Check Billing for the services, accounts, and Regions driving the increase. Check the account's Free Tier or promotional credit terms, usage, expiration, and uncovered charges.",
      "Give each workload a project, team, and owner tag. Activate the tags for cost allocation and use Cost Explorer to group historical and forecast spending by tag, service, and linked account.",
      "Create account and team budgets with actual and forecast thresholds. Send alerts to the team owner and finance through email or SNS, and assign an owner to investigate each alert.",
      "For spending controls, configure a Budget Action to apply a scoped IAM policy or stop selected noncritical resources when eligible. Use provisioning policies and service quotas to limit risky deployments. Budget data can lag, so design for additional usage before an action takes effect.",
      "Review Trusted Advisor recommendations for eligible checks, such as idle resources and underutilized instances. Validate dependencies before stopping or deleting resources. Right-size recurring workloads and measure the savings in Cost Explorer."
    ],
    "example": [
      "Dev reaches 80% of its monthly budget → notify the project owner. At the approved action threshold → restrict new nonessential provisioning in the dev account → review the bill and adjust the forecast."
    ]
  },
  "7a720099ed75c348": {
    "answer": [
      "Use the shared responsibility model to assign controls, then protect customer records with least-privilege access, KMS-backed encryption, audited key use, and tested retention and recovery."
    ],
    "points": [
      "AWS secures the data centers, physical hardware, and underlying infrastructure. The company classifies and protects its data, configures identities and networks, secures its applications, and patches EC2 guest operating systems when it runs them.",
      "Separate administrator, operator, auditor, and application roles. Require MFA for privileged users and temporary credentials for workloads. Review IAM and resource policies, remove excessive access, and use IAM Access Analyzer to identify unintended external access.",
      "Enforce TLS in transit. Use customer-managed AWS KMS keys for sensitive storage and backups. Assign separate key administrators and key users, scope key policies to approved roles and service usage, and rotate supported keys.",
      "Enable CloudTrail audit logging for key usage and policy changes and AWS Config rules for encryption and access baselines. Retain audit evidence in a separate restricted account and review exceptions.",
      "Keep encrypted, access-controlled backups on the required retention schedule, using backup vault immutability or S3 Object Lock where appropriate. Retain the keys needed to recover those backups and test restores against recovery objectives."
    ],
    "example": [
      "Approved app role → TLS → encrypted storage. KMS key policy → grants scoped key usage to the app. CloudTrail → restricted audit archive. AWS Backup → protected vault → scheduled restore test."
    ]
  },
  "862d794b46c57f10": {
    "answer": [
      "Use Amazon Timestream, a purpose-built time-series database, for time-stamped patient vitals. Use a streaming consumer for urgent anomaly detection so alerts can fire as readings arrive."
    ],
    "points": [
      "Ingest readings through AWS IoT Core or an authenticated ingest API and buffer them in Kinesis Data Streams. Partition by device or patient key as appropriate and batch database writes to absorb bursts.",
      "Model each reading with a timestamp, a pseudonymous patient ID, a device ID, and measured values such as heart rate and oxygen saturation. Query by patient and time range for recent readings, trends, and rolling aggregates.",
      "Timestream for LiveAnalytics is the historical fit for this question. It scales ingestion and querying and uses a memory store for recent data and a magnetic store for older readings with separate retention settings.",
      "For an eligible new deployment, evaluate Timestream for InfluxDB because LiveAnalytics is closed to new customers. Benchmark the selected configuration against peak ingest and recent-window query latency.",
      "Apply clinically approved thresholds and time windows in a stream consumer, suppress duplicate alerts, and send an approved notification with minimal patient information. Use TLS, encryption at rest, and scoped access for clinical and analytics teams."
    ],
    "example": [
      "Wearable → authenticated ingestion → Kinesis → Timestream for trends. In parallel, sustained low oxygen reading → stream rule → secure staff notification."
    ]
  },
  "9cb597c82155d467": {
    "answer": [
      "Use Amazon RDS for PostgreSQL with a Multi-AZ DB instance deployment for availability, read replicas for read scale, and private encrypted access for sensitive records."
    ],
    "points": [
      "Use relational tables and transactions for purchase orders, inventory, and payments. Apply indexes for frequent filters and joins and monitor query latency and database load before changing capacity.",
      "Scale up the writer instance class when CPU or memory is the constraint and use storage autoscaling for supported storage growth. Send read-heavy product lookups or reporting to separate asynchronous read replicas and monitor lag.",
      "Place the primary and synchronous standby in different Availability Zones. RDS automatically fails over to the standby. Clients reconnect through the DB endpoint and retry safely. Keep the standby reserved for failover in this deployment.",
      "Enable automated backups and point-in-time recovery and periodically test restoration. Use scheduled maintenance for managed database patching.",
      "Use private DB subnets and a security group that permits the database port from the application security group. Enable KMS encryption at rest and enforce TLS in transit. Use least-privilege DB roles and keep credentials in Secrets Manager."
    ],
    "example": [
      "Checkout writes → RDS primary → synchronous standby in AZ B. Product lookups and lag-tolerant reports → asynchronous read replica endpoint."
    ]
  },
  "e3c67a731f3101e0": {
    "answer": [
      "Combine CloudWatch metrics, logs, and alarms with CloudTrail, AWS Config, and GuardDuty for detection. Route high-priority alerts to an incident channel and add explicit checks for trade-data consistency."
    ],
    "points": [
      "Publish latency percentiles, error rates, queue lag, and trade-processing counts per microservice in CloudWatch. Collect EC2 metrics and structured logs with request and trade IDs so operators can trace failures across services.",
      "Publish a reconciliation metric that compares accepted trades with committed records and flags duplicate or missing event IDs. Alarm on sustained drift or delayed processing and link the alert to the relevant logs.",
      "Use a multi-Region CloudTrail trail to identify suspicious API actions and AWS Config rules to detect risky security group exposure. Use GuardDuty findings for threats such as anomalous credential usage or network activity.",
      "Set CloudWatch metric or anomaly-detection alarms for degraded health. Use EventBridge rules to route selected GuardDuty and Config events to SNS and the security on-call workflow.",
      "Give workloads scoped IAM roles, place the EC2 services in private subnets, and allow only the required service-to-service paths. Investigate using timestamps and trade IDs, execute the approved containment runbook, and check that health and reconciliation metrics recover."
    ],
    "example": [
      "Trading API accepts a trade → execution and analytics emit matching trade IDs → reconciliation publishes mismatch count → CloudWatch alarm → SNS and on-call review.",
      "Unexpected inbound rule → Config finding → EventBridge → security team → CloudTrail review and approved rollback."
    ]
  },
  "df103c2ddf0b0d48": {
    "answer": [
      "Give each research project spend visibility and budget owners. Track Free Tier or credit eligibility in Billing, diagnose costs in Cost Explorer, set AWS Budgets alerts, and review Trusted Advisor recommendations."
    ],
    "points": [
      "Open Billing and Account Management to identify the account plan, credit balance, expiry, and usage beyond covered allowances. Where available, enable applicable Free Tier usage alerts. Terms vary by plan and sign-up date.",
      "Activate cost allocation tags for project, lab team, and environment. Use Cost Explorer to group by these tags, account, service, and Region and identify which simulation runs or resources raised spending.",
      "Create monthly budgets per project with actual and forecast thresholds and send notifications to both research owners and finance. Use a configured Budget Action if the lab needs a supported enforcement step, such as limiting future provisioning.",
      "Use Trusted Advisor recommendations available under the support plan to find idle or underused resources. Confirm the workload impact before turning anything off.",
      "Right-size steady jobs, shut down idle development capacity, and consider Spot for checkpointable simulations. Review costs and forecasts regularly to verify each change reduced project spend."
    ],
    "example": [
      "Cost Explorer identifies an idle simulation cluster in Project B → AWS Budgets alerts the principal investigator → the owner schedules shutdown outside runs → compare Project B's spend the following week."
    ]
  },
  "baec3249469cad23": {
    "answer": [
      "Put a WAF-protected HTTPS ALB in front of a private application tier and encrypted Amazon RDS. Use AWS KMS for centralized keys, Shield for DDoS protection, and CloudWatch, CloudTrail, and SNS for detection and alerts."
    ],
    "points": [
      "Configure an HTTPS ALB listener with an ACM certificate and redirect HTTP to HTTPS. Use HTTPS from the ALB to the application targets and require TLS with certificate verification from the application to RDS.",
      "Enable RDS encryption with an approved customer-managed KMS key so the database storage and associated automated backups and snapshots are encrypted. Use key policies to separate administration from usage and record key activity with CloudTrail.",
      "Attach an AWS WAF web ACL to the ALB. Enable managed SQL injection and XSS rules, and use Bot Control or targeted bot and rate-based rules for abuse. Test candidate rules in Count mode and tune false positives before blocking.",
      "Use automatic Shield Standard protection and consider Shield Advanced for the eligible ALB if the risk justifies enhanced detection and response. Use WAF rate-based rules to help absorb excessive HTTP requests at the application layer.",
      "Keep app and RDS targets private and scope each security group to the previous tier. Use least-privilege database roles and keep application secrets in Secrets Manager.",
      "Enable WAF logs with sensitive fields redacted. Alarm on blocked-request spikes, latency, errors, and suspicious audit or security findings. Route matching CloudWatch alarms and EventBridge events to SNS and an on-call responder."
    ],
    "example": [
      "Learner → HTTPS ALB + WAF → private app over HTTPS → RDS over TLS. KMS protects RDS storage. WAF and CloudWatch signals → alarms → SNS."
    ]
  },
  "098e46fc86601a7c": {
    "answer": [
      "Use a two-AZ VPC with an internet-facing Application Load Balancer (ALB), private Auto Scaling application instances, and isolated subnets for the sensitive data tier."
    ],
    "points": [
      "Create nonoverlapping public, private application, and isolated data subnets in each AZ. Place the ALB and a public NAT gateway in the public subnet of each AZ.",
      "Attach an internet gateway. Give public subnets a default route to it and each private application subnet a default route to its AZ's NAT gateway so instances can download updates without public IPs.",
      "Give the isolated data subnets only the VPC-local route. If they need a supported AWS service, add a VPC endpoint and scope its policy.",
      "Allow HTTPS to the ALB. Allow the application port from the ALB security group and the database port from the application security group. If you add custom NACLs, allow the required traffic and ephemeral return ports.",
      "Use ALB health checks and Auto Scaling across both AZs. Enable VPC Flow Logs for accepted and rejected traffic and review them in CloudWatch Logs or S3."
    ],
    "example": [
      "Request path → Internet → public ALB → private application → isolated database. Update path → private application → NAT gateway → internet gateway."
    ]
  },
  "3566c8e799acbfea": {
    "answer": [
      "Use Amazon CloudFront to deliver video segments from edge caches close to viewers in Southeast Asia and Australia."
    ],
    "points": [
      "Store video manifests and segments in an S3 origin and restrict access to the CloudFront distribution using Origin Access Control.",
      "When a viewer requests a segment, CloudFront serves it from the edge cache if available. A cache miss fetches the segment from the origin and can populate the cache.",
      "Set a long cache lifetime for versioned video segments and a shorter lifetime for changing manifests. Limit the cache key to parameters that change the response.",
      "Use adaptive-bitrate streaming so the player can switch to a smaller rendition when the viewer's network slows. CloudFront distributes the renditions that the video pipeline creates.",
      "Track cache-hit ratio, origin requests, time to first byte, and playback rebuffering by geography. Edge hits reduce repeat origin fetches and help absorb peak demand."
    ],
    "example": [
      "Australian viewer → nearby CloudFront edge → cached video segment. On a miss, CloudFront fetches the segment from private S3."
    ]
  },
  "bcac6f8fb417114b": {
    "answer": [
      "Use AWS Direct Connect for dedicated, predictable hybrid connectivity. Add redundant paths and encrypt sensitive transaction traffic."
    ],
    "points": [
      "Connect the on-premises router to an AWS Direct Connect location over a dedicated or hosted connection. Configure a private virtual interface and exchange routes using BGP.",
      "For one VPC, associate the connection with a virtual private gateway. Use a Direct Connect gateway if you need to reach multiple eligible VPCs. Advertise nonoverlapping prefixes and configure return routes.",
      "Keep cloud application and database resources in private subnets. Permit only the necessary on-premises CIDRs and destination ports through AWS security groups and on-premises firewalls.",
      "A private Direct Connect connection does not encrypt traffic by default. Use end-to-end TLS, and use MACsec on supported links or an IPsec overlay when the design requires network-layer encryption.",
      "Use redundant connections at separate Direct Connect locations for higher resilience. Test failover and consider a Site-to-Site VPN backup if it meets the throughput and recovery requirements."
    ],
    "example": [
      "On-premises router → Direct Connect connection → private virtual interface → AWS gateway → private VPC subnets. Draw the backup connection separately."
    ]
  },
  "4800bc016952d181": {
    "answer": [
      "Use Amazon DynamoDB for high-volume key-based access to profiles, follower relationships, timelines, and conversations. Model each frequent query before choosing the keys."
    ],
    "points": [
      "Read profiles by user ID. Store posts under the author ID with a timestamp and post ID as the sort key, so the service can query recent posts in order.",
      "Store follow relationships under the follower ID and add a reverse index by followed user if you need to find that account's followers. Store conversation messages under the conversation ID and order them by timestamp and message ID.",
      "Use DynamoDB Streams to trigger an idempotent worker that updates materialized home feeds when posts arrive. For very high-fan-out accounts, merge recent posts into the feed on read to avoid millions of synchronous writes.",
      "Use Query on known keys instead of scanning. Distribute high-volume traffic over high-cardinality keys and shard hot partitions when measurements justify it.",
      "Use on-demand capacity for unpredictable demand or provisioned capacity with Auto Scaling for steadier traffic. Monitor throttles and stream processing lag.",
      "Use a strongly consistent base-table read when the latest committed item is required. Global secondary indexes and asynchronously built feeds can lag. Push live notifications through a real-time application channel."
    ],
    "example": [
      "New post → DynamoDB Streams → feed worker → per-user feed entries → recent feed Query. Message send → conversation item → live notification."
    ]
  },
  "142d11f93466171d": {
    "answer": [
      "Use Amazon CloudWatch to correlate infrastructure and application health, centralize logs, and notify the operations team when user-facing performance deteriorates."
    ],
    "points": [
      "Collect EC2 CPU, network, and status-check metrics. Install and configure the CloudWatch agent for operating-system memory, disk utilization, and application log collection.",
      "Publish per-service metrics such as vehicle-event delay, order-processing time, queue depth, p95 latency, and error rate. Add ALB unhealthy target and HTTP 5xx metrics if the services use an ALB.",
      "Use a dashboard to compare incoming traffic, queue depth, instance utilization, and end-to-end latency during a peak. Group views by environment and service.",
      "Send structured application logs to CloudWatch Logs. Include a request or order ID and use Logs Insights to find the component that timed out or returned an error.",
      "Set alarms with realistic thresholds and multiple evaluation periods, or use anomaly detection where appropriate. Route alerts to SNS and attach a runbook or a scaling action where the signal warrants it."
    ],
    "example": [
      "Order queue age breaches its threshold across three periods → CloudWatch alarm → SNS on-call notification → check worker errors and saturation."
    ]
  },
  "620c2cdd4e6526ca": {
    "answer": [
      "Use AWS Trusted Advisor to identify cost, performance, and security improvements across the telemedicine workload."
    ],
    "points": [
      "Review available checks for the account's support plan, then sort findings by affected workload, impact, and risk.",
      "For cost, investigate idle load balancers or low-utilization instances. Confirm usage and capacity requirements before deleting resources or rightsizing.",
      "For performance and reliability, review service quota headroom and fault tolerance findings. Validate recommendations against CloudWatch metrics at peak load.",
      "For security, review exposed storage, overly broad security groups, and weak account controls. Assign owners to remediate and confirm the checks clear.",
      "Record the actions and verify their impact. Use the organization's compliance controls and review process to assess healthcare obligations."
    ],
    "example": [
      "Low-utilization EC2 finding → confirm peak and baseline metrics in CloudWatch → rightsize and load-test → compare cost and p95 latency."
    ]
  },
  "9a79ca53f1bb5cc3": {
    "answer": [
      "Create a VPC such as 10.0.0.0/16 with four /24 subnets, split between public and private across two AZs. Each /24 has 256 addresses minus five AWS reservations, leaving 251 usable."
    ],
    "points": [
      "Use 10.0.0.0/24 and 10.0.1.0/24 for the public subnets, and 10.0.2.0/24 and 10.0.3.0/24 for the private subnets. Assign one public and one private subnet to each AZ.",
      "Associate the public subnets with a route table that sends 0.0.0.0/0 to the internet gateway. Place the public ALB and any public NAT gateways in these subnets.",
      "Place EC2 Auto Scaling instances in the private subnets without public IPs. For required IPv4 internet egress, point each private route table to its AZ's NAT gateway. Use an S3 gateway endpoint for S3 traffic where applicable.",
      "Use health checks and a scaling policy to add or replace application instances. Keep the database private, allow its port only from the application security group, and choose Multi-AZ deployment if required.",
      "Allow inbound HTTPS at the ALB and allow only the application port from the ALB security group at the instances. Use VPC Flow Logs and review route associations before deployment.",
      "Scale in after peaks and use measured utilization to rightsize. Choose one NAT per AZ for AZ-resilient egress when the workload requires it."
    ],
    "example": [
      "Internet → ALB in public AZ A and AZ B → EC2 Auto Scaling targets in private AZ A and AZ B → private database."
    ]
  },
  "cd61b6b5e20e16f4": {
    "answer": [
      "Use a global CloudFront distribution with private S3 buckets in multiple Regions. Send cache misses to a nearby origin based on viewer geography, while serving cache hits at the edge."
    ],
    "points": [
      "Create private versioned buckets in suitable Regions such as Singapore and Sydney. Publish the same versioned game assets to each bucket or set up S3 Cross-Region Replication and verify assets are present before release.",
      "Create the CloudFront distribution, register the regional S3 origins, and configure Origin Access Control so each bucket permits reads from the distribution. Enable HTTPS for viewers.",
      "Associate a viewer-request CloudFront Function that maps viewer countries to regional origins with a default. For example, select Sydney for Australian viewers and Singapore for Southeast Asian viewers. Include CloudFront-Viewer-Country in the origin request policy and use JavaScript runtime 2.0 for the viewer-request function.",
      "Give immutable assets a long cache lifetime, use versioned URLs for releases, and keep the cache key narrow. Identical assets can share the cache regardless of the selected origin.",
      "Configure a secondary origin for eligible read failures if required. Watch cache-hit rate, regional load times, error rate, and origin request volume to confirm performance and compare operating costs."
    ],
    "example": [
      "Viewer in Australia → nearby CloudFront edge. On a miss, CloudFront reads from the Sydney S3 bucket. A Southeast Asian cache miss reads from Singapore."
    ]
  },
  "1674f3dbb3ad9c26": {
    "answer": [
      "Use Amazon RDS for a compatible relational engine, with a single writable primary and an optional read replica for the read workload. Interpret the node limit as one writer, since a separate read replica requires another instance."
    ],
    "points": [
      "Benchmark against the stated peak of 15,000 read IOPS and 15,000 write IOPS. Select an RDS class and io2 Provisioned IOPS storage that support the required I/O, throughput, CPU, and memory with headroom.",
      "Deploy RDS in private subnets. Enable KMS encryption and automated backups. If availability requirements and the node limit allow a standby, use Multi-AZ for automatic failover.",
      "Test secure source and target connectivity. Migrate with AWS DMS full load and change data capture if supported. Convert the schema and incompatible database code first if the engine changes.",
      "Validate row counts and critical transactions, check replication lag, then pause writes and let final changes apply. Switch application connections and verify the target before reopening writes.",
      "On the RDS source instance, choose Create read replica for a supported engine, select its class, storage, and AZ, then wait for it to become available and test its endpoint.",
      "Send writes and freshness-sensitive queries to the primary, and lag-tolerant reporting reads to the replica. Monitor ReadIOPS, WriteIOPS, latency, and ReplicaLag. Tune indexes and queries after measuring."
    ],
    "example": [
      "Source database → DMS full load and ongoing replication → RDS primary. Application writes → primary. Reports → read-replica endpoint."
    ]
  },
  "25dee66a94e38b92": {
    "answer": [
      "Use Amazon DynamoDB. Store each player's score under an evenly distributed key and use a sharded global secondary index (GSI) to retrieve the highest scores."
    ],
    "points": [
      "Define the access patterns first: look up one player's score, update it after a match, and show the top K players for a game mode and season.",
      "Use a base partition key such as PLAYER#playerId with a sort key such as MODE#mode#SEASON#season. Store score, update time, and the relevant ranking attributes.",
      "Give the ranking GSI a partition key such as MODE#mode#SEASON#season#SHARD#n. Derive the shard from player ID to spread writes. Use score as the index sort key.",
      "For top K, query each shard in descending order for K items, merge the results, and return the overall top K. Use a deterministic tie-breaker if the leaderboard requires it.",
      "Use an atomic conditional update for a personal best, or deduplicate match IDs for cumulative scoring. Plan for eventual consistency on the GSI and monitor index throttling.",
      "Use on-demand capacity for irregular traffic or provisioned capacity with Auto Scaling for predictable usage. Keep the shard count large enough to spread writes and small enough to limit read fan-out."
    ],
    "example": [
      "Completed match → conditional player score update → score index. Leaderboard read → descending Query per shard → merge top K."
    ]
  },
  "8e35940e228486f7": {
    "answer": [
      "Use AWS CloudTrail to investigate AWS API access attempts and AWS Trusted Advisor to surface cost-saving and best-practice recommendations."
    ],
    "points": [
      "In CloudTrail, narrow the time window, account, Region, and service. Inspect eventName, userIdentity, sourceIPAddress, requestParameters, errorCode, and the target resource where recorded.",
      "Use the console Event history or the LookupEvents API/CLI for the last 90 days of regional management events. Check the event details for errors such as AccessDenied.",
      "Use a trail to persist selected events to S3 for retention and Athena queries, and optionally send them to CloudWatch Logs for metric filters and alarms.",
      "Enable relevant data events where needed, such as S3 object-level calls. These are separate from management events. Existing CloudTrail Lake customers can also use event data stores and SQL queries.",
      "Open Trusted Advisor and review available checks for idle resources, rightsizing, security, and resilience. Verify utilization and dependency information before making changes."
    ],
    "example": [
      "Suspected S3 object access → query enabled S3 data events for the object key and time range → identify the principal and outcome."
    ]
  },
  "0da0ea9869d9caa2": {
    "answer": [
      "Use VPC peering for direct private communication between the student portal and exam system. Traffic uses private IPs over the AWS network."
    ],
    "points": [
      "Check that the two VPC CIDRs do not overlap. Create a peering request from Department A, identify Department B’s VPC, account and Region, and have Department B accept.",
      "In the route tables associated with the communicating subnets, add the other VPC’s CIDR with the peering connection as the target. Add the route in both directions.",
      "Allow only the required application port, such as TCP 443, from the initiating workload in the receiving security group. If egress is restricted, permit that destination port on the sender. Use peer CIDRs or supported same-Region peer security group references. Stateful replies pass automatically.",
      "Peering provides a direct private path, generally with less latency variability than an internet-based VPN. Standard Site-to-Site VPN encrypts traffic in two IPsec tunnels over the internet and can connect external networks to AWS. It requires a customer gateway device and an AWS virtual private gateway or transit gateway.",
      "Peering is non-transitive. Adding many VPCs can mean many separate links. For a campus network that must reach several VPCs, terminate a Site-to-Site VPN on a Transit Gateway and attach the VPCs to that hub. Private-IP VPN over Direct Connect is an option if the VPN path must avoid the public internet."
    ],
    "example": [
      "Peering diagram: Portal VPC 10.0.0.0/16 ↔ pcx-… ↔ Exam VPC 10.3.0.0/16. Portal route: 10.3.0.0/16 → pcx-…. Exam route: 10.0.0.0/16 → pcx-….",
      "VPN diagram: Campus network → customer gateway device ↔ two IPsec tunnels ↔ AWS virtual private gateway → VPC private subnet. Add remote-network routes and a return route on the campus router."
    ]
  },
  "ddb2fa9e81af8071": {
    "answer": [
      "Combine an RDS Multi-AZ DB instance deployment for automatic failover with separate RDS read replicas for the exam-period read spike."
    ],
    "points": [
      "Deploy the primary in one AZ and a synchronous standby in a different AZ. The single-standby deployment reserves that standby for failover.",
      "On a qualifying failure, RDS promotes the standby and updates DNS for the primary endpoint. Allow the application to reconnect and retry transient failures.",
      "Create asynchronous read replicas and direct read-heavy progress reports and result views to their separate endpoints. Add replicas if demand justifies the extra cost.",
      "Send profile updates, course uploads and queries that require the latest committed data to the primary. Read replicas can lag, so check freshness requirements and monitor ReplicaLag."
    ],
    "example": [
      "Sketch: Student portal writes and fresh reads → primary in AZ A → synchronous standby in AZ B. Primary → asynchronous read replicas. Portal report reads → replica endpoints."
    ]
  },
  "da3e8f80bfed194c": {
    "answer": [
      "Use DynamoDB for high-volume, low-latency access to player profiles, scores and sessions when the application can look up data by player and item type or time."
    ],
    "points": [
      "DynamoDB is a managed key-value and document database. Its automatic partitioning supports high request volume, and on-demand capacity can suit variable gaming traffic.",
      "Use PlayerID as the partition key. DynamoDB hashes that value to distribute items, so a large number of active player IDs helps spread load. Query a known PlayerID to retrieve that player’s item collection.",
      "Use a composite primary key with a sort key such as RecordKey. Prefix values by type and add a time and unique ID where needed. Items with the same PlayerID can then hold a profile, scores and sessions with different attributes.",
      "Choose sort-key values that support the intended reads. For example, SESSION#2025-10-10T09:00:00Z#s42 supports a begins_with query on SESSION# and chronological order within that type.",
      "Trade-off: DynamoDB favors designed key and index access patterns. RDS is a better fit when the dominant workload needs flexible SQL joins or ad hoc relational queries."
    ],
    "example": [
      "Sketch: PlayerID P42 → {PROFILE, Name=Riya}, {SCORE#2025-10-10#r7, Points=940}, {SESSION#2025-10-10T09:00:00Z#s42, Device=mobile}. PlayerID P73 → a separate item collection. Label PlayerID as the partition key and RecordKey as the sort key."
    ]
  },
  "49be4fadc50aff8b": {
    "answer": [
      "Use AWS CloudTrail to identify the API actor and AWS Config to show what changed on the resource and whether the new state meets policy."
    ],
    "points": [
      "Configure a trail to capture relevant events across Regions and deliver them to a protected S3 audit bucket. Enable relevant data events if object-level activity is in scope.",
      "Read the CloudTrail record for userIdentity, eventName, eventTime and sourceIPAddress. These fields identify the caller or assumed role, the operation, the UTC time and its reported source.",
      "Enable the AWS Config recorder for the relevant resource types. Its timeline stores configuration items and shows the before and after state of a supported resource.",
      "Add a Config rule for the encryption policy, such as checking attached EBS volumes for encryption. Route a noncompliance finding to an alert or an approved Systems Manager Automation runbook, then re-evaluate the resource.",
      "Correlate the API event and configuration history by resource ID and timestamp. An auditor can link a specific identity and operation to a configuration change and its compliance result."
    ],
    "example": [
      "Sketch: User or role → AWS API → CloudTrail event → audit bucket. Changed resource → Config recorder → configuration history → encryption rule → alert or remediation → compliance recheck."
    ]
  },
  "0d35063ede6c614c": {
    "answer": [
      "Use AWS Trusted Advisor to review available cost, security, performance, fault-tolerance and service-quota checks and assign findings to the teams that can act on them."
    ],
    "points": [
      "For cost, review findings for low-utilization EC2 instances, idle load balancers and unused resources. Confirm ownership and utilization before stopping, rightsizing or removing anything.",
      "Check recommendations for commitments where available. Compare forecasted usage with a measured baseline before buying a Savings Plan or reservation.",
      "For security, review checks such as root-account MFA and unrestricted security group ports. Restrict exposure to the approved source ranges and verify each fix.",
      "For performance, review relevant findings such as high utilization on provisioned EBS volumes. Check workload metrics before changing volume performance or instance size.",
      "Review resilience findings such as single-AZ dependencies or missing backups, and check quota headroom ahead of peak demand.",
      "Schedule recurring dashboard reviews. Prioritize high-risk findings, assign owners and deadlines, and track whether actions resolve the findings. Check availability varies by AWS Support plan."
    ],
    "example": [
      "Example: Trusted Advisor flags an idle load balancer and a security group with unrestricted SSH. Confirm the load balancer is unused before removing it, restrict SSH, then recheck both findings and record the result."
    ]
  },
  "f13f312f4ae28ba6": {
    "answer": [
      "Associate one custom NACL with the public subnet and a different custom NACL with the admin subnet. Allow the specified IPv4 sources on the named TCP ports and explicitly deny the remaining inbound traffic."
    ],
    "points": [
      "Public subnet inbound\nRule  Action  Port     Source\n100   ALLOW   TCP 80   203.0.113.0/24\n110   ALLOW   TCP 22   198.51.100.0/24\n120   DENY    All      0.0.0.0/0",
      "Admin subnet inbound\nRule  Action  Port     Source\n100   ALLOW   TCP 443  192.0.2.0/24\n110   DENY    All      0.0.0.0/0",
      "NACLs evaluate the lowest rule number first and stop at the first match. Both lists also have the built-in final asterisk deny rule.",
      "NACLs are stateless. For responses to those inbound TCP sessions, permit the clients’ ephemeral destination ports in the outbound rules. For example, use TCP 1024–65535 to each listed client CIDR where that matches the client port range. Give the public ACL separate entries for its two CIDRs and the admin ACL an entry for its single CIDR.",
      "Apply each ACL to its named subnet and verify the required route and instance security group rules. Allow the specified campus CIDR through the private campus connection to the admin subnet."
    ],
    "example": [
      "Sketch: 203.0.113.0/24 → TCP 80 and 198.51.100.0/24 → TCP 22 → public NACL → portal subnet 10.0.1.0/24. Campus 192.0.2.0/24 → TCP 443 → admin NACL → admin subnet 10.0.2.0/24.",
      "Check the rule tables with three successful requests and two failures: HTTP from the public allowlist, SSH from the SSH allowlist and campus HTTPS pass. SSH from the HTTP allowlist and HTTPS from outside campus are denied."
    ]
  },
  "987b62e9012f0205": {
    "answer": [
      "Use a private RDS Multi-AZ deployment, dedicated read capacity and tested backups. Tune the writer separately and protect the database with least privilege and encryption."
    ],
    "points": [
      "Put the primary and synchronous standby of a Multi-AZ DB instance deployment in different AZs. On a qualifying failure, RDS promotes the standby. Use the DB endpoint and make application connections retry after failover.",
      "Use asynchronous read replicas for lag-tolerant history and reports, with separate reader endpoints. Keep transaction writes and balance checks requiring fresh data on the primary. Monitor replica lag.",
      "Improve write performance by measuring CPU, write latency, IOPS and slow queries. Fix slow statements and indexes, manage connections and increase writer compute or storage performance when measurements show the bottleneck.",
      "Enable automated backups with a retention period matched to recovery requirements, and take a snapshot before risky changes. For accidental deletion, restore to a point before the error into a separate DB instance, validate, then switch the application or recover the affected records.",
      "Use private DB subnets and permit the database port only from the application security group. Enable KMS-backed encryption at rest, TLS in transit, controlled database credentials and database audit logging.",
      "Test AZ failover and backup restores against recovery time and recovery point objectives. Validate transactions and monitor errors after either event."
    ],
    "example": [
      "Sketch: App → writer endpoint → primary in AZ A → synchronous standby in AZ B. Primary → asynchronous replica → report queries. Backups → point-in-time restore → separate validation DB. Label KMS at the database and TLS on the app connection."
    ]
  },
  "3070e623b168bdde": {
    "answer": [
      "Use an LSI with PlayerID and Timestamp for per-player history after giving the base table a composite key. Use a GSI with GameTitle and HighScore for a leaderboard across players.",
      "A table keyed only by PlayerID can store just one item per player. The stated simple key cannot support the intended history LSI as written."
    ],
    "points": [
      "Create the base schema with PlayerID as partition key and AchievementID as sort key, allowing each player to have many distinct achievement items. If the simple-key table already exists, create the corrected table and migrate data.",
      "Define the LSI at table creation with the same PlayerID partition key and Timestamp as its alternate sort key. Query one PlayerID and choose ascending or descending timestamp order as requested.",
      "Define the GSI with GameTitle as partition key and numeric HighScore as sort key. Query one GameTitle in descending sort-key order and limit results for a top-N leaderboard. Project PlayerID and any displayed fields. If each player should appear only once per game, index a separate best-score item for each player-game pair.",
      "An LSI shares table throughput, supports strongly consistent reads and has a 10 GB item-collection limit per partition-key value. A GSI can use different keys, has its own provisioned capacity settings when using provisioned mode, and supports eventually consistent reads."
    ],
    "example": [
      "Schema sketch: PlayerStats [PK PlayerID, SK AchievementID] → player-time LSI [PK PlayerID, SK Timestamp] and game-score GSI [PK GameTitle, SK HighScore].",
      "Example: Query the LSI with PlayerID=P42 to list P42’s achievements chronologically. Query the GSI with GameTitle=Racer, descending order and limit 10, to show the ten highest scoring indexed items."
    ]
  },
  "e0ca09a58ccd8716": {
    "answer": [
      "Use Amazon CloudWatch for metrics, alarms, a unified dashboard, and log searches that correlate crashes with system or S3 behavior."
    ],
    "points": [
      "Chart EC2 metrics such as CPUUtilization, network traffic and StatusCheckFailed. Most standard EC2 metrics publish every five minutes with basic monitoring or every minute with detailed monitoring. Install the CloudWatch Agent for guest memory, filesystem utilization and application logs.",
      "Enable S3 request metrics on the video bucket for one-minute request, latency and error measurements such as GetRequests, FirstByteLatency and 5xxErrors. Use daily S3 storage metrics to track bucket size.",
      "Publish a custom application metric such as playback failure rate. Add EC2 health, S3 errors and latency, application failures and alarm status to one CloudWatch dashboard.",
      "Define alarms with a threshold, period and evaluation count. For example, alert on repeated EC2 status check failures or an elevated S3 5xx rate. Use SNS to notify the on-call team.",
      "Ship system and application logs to CloudWatch Logs. In Logs Insights, filter for errors or stack traces around the alarm time, group by instance and exception, and correlate the result with CPU, memory and S3 metrics to isolate the fault."
    ],
    "example": [
      "Sketch: EC2 metrics + CloudWatch Agent + S3 request metrics + player errors → CloudWatch dashboard and alarms → SNS → on-call. EC2/app logs → CloudWatch Logs → Logs Insights.",
      "Example: At the playback alarm time, query for the first crash error, compare it with a memory peak on the same instance, and verify whether the error began before or after the S3 latency spike."
    ]
  },
  "2141164a78db432f": {
    "answer": [
      "Register EC2 and on-premises servers as managed nodes with SSM Agent, the required IAM permissions and service connectivity. Use a hybrid activation for on-premises nodes and target groups by environment or application tags."
    ],
    "points": [
      "Session Manager gives authorized administrators browser or CLI access without opening inbound SSH or RDP. Scope sessions with IAM, enable supported session logging, and enable the advanced-instances tier for hybrid Session Manager access.",
      "Patch Manager uses approved patch baselines to scan for missing updates and install approved patches. Roll changes out by tags in maintenance windows and review compliance after each wave.",
      "State Manager runs associations on a schedule to maintain desired configuration, such as agent settings or firewall policy, and reports association compliance.",
      "Automation executes reusable, multi-step runbooks such as snapshot, restart and health-check workflows. Add an approval before risky changes and trigger the runbook on a schedule or event.",
      "Inventory collects node metadata such as operating systems and installed software. Use it to identify unmanaged versions and plan patch or configuration work across the fleet."
    ],
    "example": [
      "Example: Tag pilot and production nodes → scan with Patch Manager → patch pilot nodes → check health and compliance → approve and patch production in batches. Use Session Manager to investigate exceptions."
    ]
  },
  "fdfc7b7c7d5afd02": {
    "answer": [
      "AWS secures the infrastructure that runs the payment system. The fintech company secures its data, application, identities, and AWS configurations."
    ],
    "points": [
      "AWS protects facilities, physical servers, networking hardware, and the virtualization layer.",
      "On EC2, the customer patches the guest OS, updates payment software, hardens the host, and configures security groups.",
      "A managed service such as RDS shifts underlying maintenance and patch execution to AWS. The company still controls database permissions, network exposure, encryption configuration, and patch scheduling options.",
      "Classify cardholder data, limit where it flows, enforce TLS and encryption at rest, and separate application, operator, and auditor access.",
      "Map each PCI DSS control to an AWS or company owner. Use AWS compliance evidence for provider controls and retain logs, vulnerability reports, and restore-test results for customer controls."
    ],
    "example": [
      "Payment path → public HTTPS entry point → private payment application → private encrypted RDS database. Record who owns the firewall rules, data access, and audit evidence."
    ]
  },
  "6defa03447b07847": {
    "answer": [
      "Run stateless EC2 web instances in an Auto Scaling group across two Availability Zones and put an Application Load Balancer in front."
    ],
    "points": [
      "Define the AMI, instance type, instance role, and security group in a launch template. Set minimum, desired, and maximum capacity.",
      "Register the group with an ALB target group. The ALB performs application health checks and spreads requests among healthy targets.",
      "Set a target tracking policy on ALB requests per target, or CPU if CPU limits throughput. Allow time for new instances to start and pass health checks.",
      "During a spike, Auto Scaling launches instances and the ALB adds them after they become healthy. During scale-in, the ALB drains connections before a target is removed.",
      "Size the minimum for normal demand and availability. Scale in after peaks to stop paying for idle instances and use the maximum to bound capacity."
    ],
    "example": [
      "Clients → ALB → EC2 Auto Scaling group, illustrative min 2 / desired 2 / max 8 → application dependencies."
    ]
  },
  "a9f0ccfda9d4f49e": {
    "answer": [
      "Place an internet-facing ALB and public NAT gateways in public subnets. Run the application in private subnets and the database in isolated subnets."
    ],
    "points": [
      "Use a VPC such as 10.0.0.0/16 and place public, application, and database subnets in each of two Availability Zones with nonoverlapping CIDRs.",
      "Associate public subnets with a route table that sends 0.0.0.0/0 to an internet gateway. Give each public NAT gateway an Elastic IP.",
      "Route 0.0.0.0/0 from each private app subnet to its AZ-local NAT gateway for outbound updates. Leave the database subnets without an internet default route.",
      "Allow TCP 443 from clients into the ALB security group. Allow the application port from the ALB security group and the database port from the application security group.",
      "The NAT gateway translates outbound app connections and returns their replies. It provides no path for unsolicited inbound internet connections."
    ],
    "example": [
      "Inbound: Client → internet-facing ALB → private app → isolated database.",
      "Outbound: Private app → NAT gateway in public subnet → internet gateway → software repository."
    ]
  },
  "b6ebe5c6f196cd42": {
    "answer": [
      "Choose Amazon RDS for relational transactions and SQL queries. Choose DynamoDB for high-volume application reads and writes with known key-based access patterns."
    ],
    "points": [
      "RDS fits related tables that need joins, foreign keys, and multi-row ACID transactions. Managed backups and Multi-AZ options support recovery and availability.",
      "DynamoDB fits key-value and document data that can be queried by partition key and, where needed, sort key. Design keys and indexes around the queries and distribute traffic across partition keys.",
      "DynamoDB supports transactions when a key-based workload needs them. Its data model works best when the access patterns are known in advance.",
      "For modest SQL reporting, use an RDS read replica where stale-tolerant reads are acceptable. For large ad hoc analytics, export or replicate data into a separate analytics system such as Amazon Redshift."
    ],
    "example": [
      "Orders, line items, and invoice joins → RDS. Session lookup by SessionID → DynamoDB. Historical sales rollups at scale → analytics warehouse."
    ]
  },
  "0bf404ae31430873": {
    "answer": [
      "Use CloudTrail to record AWS API activity, CloudWatch to detect suspicious events, and SNS to notify the security team."
    ],
    "points": [
      "Create a multi-Region trail for management events and enable data events for selected sensitive resources, such as patient-data S3 buckets, when object-level auditing is needed.",
      "Send trail events to CloudWatch Logs and retain a protected copy in an encrypted S3 bucket. Restrict access to audit logs.",
      "Use a CloudWatch Logs metric filter for AccessDenied and UnauthorizedOperation errors. Use additional filters for high-risk successful actions such as changes to privileged policies.",
      "Set a CloudWatch alarm threshold over a defined period and connect its ALARM action to an SNS topic with confirmed security-team subscriptions.",
      "Include a runbook for checking the caller identity, action, time, source IP, and affected resource. Tune thresholds after observing normal denied operations."
    ],
    "example": [
      "Denied API calls → CloudTrail event → CloudWatch Logs filter → alarm after repeated matches → SNS security notification."
    ]
  },
  "79149be70fdb7104": {
    "answer": [
      "Use AWS Config to record and evaluate configuration, Lambda to handle noncompliance events, and a Systems Manager Automation runbook to apply the approved fix."
    ],
    "points": [
      "Enable the AWS Config recorder in the required accounts and Regions. Record resource changes and evaluate resources with approved managed or custom Config rules.",
      "Use an EventBridge rule for Config compliance-change events with new state NON_COMPLIANT. Send matching events for the selected rule to Lambda.",
      "Have Lambda confirm the target and current compliance state, check for approved exceptions, and call StartAutomationExecution with the resource identifier.",
      "Use a least-privilege Automation role and a versioned runbook. Add approval before high-impact changes and make remediation safe to retry.",
      "Log the event and execution, track failures or retries, and use the next Config evaluation to confirm that the resource is compliant."
    ],
    "example": [
      "Public access enabled on a private S3 bucket → Config rule flags it → EventBridge invokes Lambda → SSM runbook reapplies Block Public Access → Config verifies."
    ]
  },
  "dbfe720674984a75": {
    "answer": [
      "Layer encryption and restricted data access with identity controls and public-facing traffic protections."
    ],
    "points": [
      "Inventory the affected repositories. Enable SSE-KMS on S3 and KMS-backed encryption for RDS or EBS as appropriate. Migrate or rewrite existing unencrypted data where required and verify the result.",
      "Use separate key policies and IAM permissions for application access, key administration, and audit. Require TLS on public and sensitive internal connections.",
      "Use workload roles with temporary credentials, least-privilege permissions, MFA for privileged human access, and S3 Block Public Access for private data.",
      "Associate an AWS WAF web ACL with CloudFront or the public ALB. Use managed inspection rules and rate-based rules for excessive requests. Use Shield for DDoS mitigation.",
      "Monitor WAF logs and CloudWatch metrics. Use CloudTrail for administrative and key-use audit events, and review alerts against normal traffic."
    ],
    "example": [
      "Users → CloudFront with WAF and Shield → ALB → private application → encrypted data stores. Send relevant security metrics and audit events to monitoring."
    ]
  },
  "eb42d97d91917039": {
    "answer": [
      "Use the Cost Optimization pillar to find costs that do not contribute to the retail workload. Measure spend and utilization before making three changes."
    ],
    "points": [
      "Rightsize overprovisioned compute. Compare sustained CPU, memory, and latency against the instance size, then test smaller sizes against service objectives. Remove unused instances and volumes after checking ownership.",
      "Commit only the measured stable baseline. After rightsizing, evaluate a Savings Plan for predictable eligible compute usage, while keeping variable or uncertain capacity on flexible terms.",
      "Tier idle data by retrieval need. Use S3 Lifecycle to move infrequently accessed objects to an appropriate lower-cost class, checking retrieval fees, minimum durations, and restore times."
    ],
    "example": [
      "Group Cost Explorer spending by service and workload tag. Compare cost per order and checkout latency before and after each change."
    ]
  },
  "dd19f0f9c908d0e0": {
    "answer": [
      "Convert the Oracle schema to the chosen Aurora engine, then use AWS DMS full load plus change data capture to migrate the data while Oracle continues serving requests."
    ],
    "points": [
      "Assess Oracle compatibility with Aurora PostgreSQL or MySQL. Convert the schema and manually fix unsupported types, PL/SQL procedures, and application SQL before the migration.",
      "Place DMS replication compute and Aurora in private subnets. Use VPN or Direct Connect for Oracle connectivity, configure routing and security groups, and test both endpoints with TLS.",
      "Enable Oracle ARCHIVELOG and required supplemental logging. Grant the DMS source user the privileges needed for full load and CDC, and retain logs long enough for replication.",
      "Run a full-load-and-CDC task. Monitor replication lag and errors, validate source and target rows, and test important application transactions on Aurora. Use a non-dropping target preparation mode such as DO_NOTHING with empty, pre-created tables to preserve the converted schema.",
      "At cutover, pause source writes, let CDC catch up, verify final data, switch the application endpoint, and run smoke tests before reopening writes. Plan for rollback and reconciliation if Aurora has accepted writes."
    ],
    "example": [
      "Oracle → secure private connection → AWS DMS full load and CDC → Aurora. Schema conversion, validation, and rehearsal happen before the final write pause."
    ]
  },
  "3adceb6ee8c3f74f": {
    "answer": [
      "Use the historical Snowball Edge storage-optimized import workflow to physically move the 50 TB archive into Amazon S3."
    ],
    "points": [
      "Select a device with enough usable capacity. Create an import job in the destination Region, choose the S3 bucket, grant the job role access, and select the AWS KMS key.",
      "Prepare the client, job manifest, and unlock code before going offline. Keep the code and manifest protected and separate in storage.",
      "Connect the device to the local network, unlock it with the manifest and code, and copy the archive with the supported S3-compatible interface. The device encrypts stored data.",
      "Verify file counts and checksums and retain the source copy. Lock the device, arrange tracked return, and monitor job status while AWS imports it.",
      "Verify the imported objects in S3 and review the import report. AWS erases the device after the job. Snowball Edge is closed to new customers."
    ],
    "example": [
      "Offline video archive → local network → encrypted Snowball Edge → tracked physical shipment → destination S3 bucket."
    ]
  },
  "1a2198a271ef9c46": {
    "answer": [
      "Make spending attributable, alert owners before forecast overruns, and review cost recommendations on a regular schedule."
    ],
    "points": [
      "Activate cost allocation tags for project, environment, and owner. Use Cost Explorer to review spending by tag, account, service, and Region.",
      "Set a monthly AWS Budget for the project with actual and forecast thresholds. Send notifications to the project owner and finance through email or SNS.",
      "Use Cost Anomaly Detection to flag unexpected spending patterns. Track operational indicators such as instance count and traffic in CloudWatch for faster usage signals.",
      "Billing and budget data arrive with a delay. For enforcement, configure a scoped Budget Action or route an alert to an approved response process.",
      "Review Trusted Advisor and Compute Optimizer findings, validate that idle resources are safe to remove, and measure the savings after rightsizing."
    ],
    "example": [
      "Project spend reaches 80% of budget or is forecast to exceed 100% → notify owner → investigate by service and tag → rightsize or stop idle resources after review."
    ]
  },
  "ee4de2f7735f18de": {
    "answer": [
      "Build a multi-AZ VPC with a public entry tier, stateless private compute, private database failover, and separate object storage."
    ],
    "points": [
      "Use Route 53 and CloudFront for public access, with AWS WAF and Shield. Send dynamic traffic to a public Application Load Balancer across two AZs. Serve cacheable assets from a private S3 origin using CloudFront Origin Access Control.",
      "Run EC2 in a private Auto Scaling group across both AZs. Use ALB health checks and target tracking. Keep sessions in a shared store or signed client session so any healthy instance can serve a request.",
      "Use a private RDS Multi-AZ DB instance for orders and payments. Enable automated backups and point-in-time recovery, and test application reconnect and retry after failover.",
      "Keep public route tables pointed at an internet gateway. Use NAT gateways for private outbound access where needed. Restrict app ingress to the ALB security group and DB ingress to the app security group.",
      "Require HTTPS and restrict the ALB origin to the CloudFront path using an origin header check and the CloudFront managed prefix list. Encrypt the database and storage, scope IAM roles, and use CloudTrail for API auditing.",
      "Monitor ALB errors, target health, latency, and RDS metrics in CloudWatch. Page through SNS and rehearse the failure of a compute target and an AZ."
    ],
    "example": [
      "Customer → Route 53 / CloudFront + WAF → public ALB → private EC2 across two AZs → private RDS primary/standby. CloudFront also serves static objects from private S3.",
      "During an instance failure, the ALB routes to healthy targets while Auto Scaling replaces the failed instance. During DB failover, the application reconnects and retries safely."
    ]
  },
  "ca3271af0b06f18b": {
    "answer": [
      "Use AWS IAM to authenticate users and workloads and authorize only the actions each one needs on HealthSync’s AWS resources.",
      "Two security features to highlight are least-privilege policies and multi-factor authentication (MFA)."
    ],
    "points": [
      "Define separate job permissions for analytics staff, data stewards, and platform administrators. Use federation and assumable roles for employees, with temporary credentials and MFA through the identity provider.",
      "Scope policies by action and resource. An analyst role can read a de-identified S3 data prefix and write approved results, while a data steward controls access to raw patient records.",
      "Require MFA for privileged human access, protect the root user with MFA, and keep root credentials for root-only tasks.",
      "Assign the analytics workload an execution role scoped to its input, output, and KMS permissions. Temporary credentials remove the need to embed long-lived access keys.",
      "Review access regularly and log relevant activity in CloudTrail. Enable S3 data events where access to individual patient-data objects must be audited."
    ],
    "example": [
      "Analyst with MFA → analytics role → read approved de-identified prefix → write reports. A request to read the raw patient-data prefix is denied."
    ]
  },
  "a8063e8ab4978743": {
    "answer": [
      "Run video encoding on an elastic EC2 worker fleet and store uploaded and encoded objects in S3 with lifecycle policies matched to access patterns."
    ],
    "points": [
      "Upload raw videos to S3 and enqueue encoding jobs in SQS. EC2 workers pick up jobs independently, so incoming bursts can wait in the queue without blocking uploads.",
      "Build a launch template with the encoder and a scoped IAM role. Choose compute-optimized instances for CPU encoding or accelerated instances when the codec and encoder benefit from hardware acceleration.",
      "Use EC2 Auto Scaling across Availability Zones. Track CloudWatch backlog per worker or age of the oldest job, add workers at peak, and scale in at night after jobs finish.",
      "If the streaming application runs on EC2, place its HTTP endpoints behind an Application Load Balancer and scale that fleet separately from the encoder fleet.",
      "Keep popular videos in S3 Standard, transition predictable infrequently accessed objects to Standard-IA, and archive cold raw footage to an S3 Glacier class if its retrieval time meets the requirement.",
      "Expire approved temporary intermediates, account for retrieval and minimum-duration charges, and keep legal or customer retention requirements in the lifecycle rules."
    ],
    "example": [
      "S3 upload → SQS job → EC2 Auto Scaling workers → encoded S3 objects → CloudFront viewers. Growing backlog scales workers out, and lifecycle rules reduce storage cost as objects age."
    ]
  },
  "30b781d986efc93c": {
    "answer": [
      "Build a three-tier VPC across two Availability Zones and place CloudFront in front of the public web entry point and static content."
    ],
    "points": [
      "Create public web subnets, private application subnets, and isolated database subnets in both AZs. Put an internet-facing ALB across the public subnets and distribute the web targets across AZs.",
      "Associate public subnet route tables with a default route to the Internet Gateway. Give private application subnets an outbound NAT route only if they need internet egress. Keep the database subnets isolated from the internet.",
      "Allow HTTPS to the public ALB from the intended sources. Allow web targets only from the ALB security group, app targets only from the web tier or an internal ALB, and the database port only from the app security group.",
      "Use an Auto Scaling group for each EC2 tier and load balancer health checks to stop routing to unhealthy instances. Use a Multi-AZ database deployment to support database failover.",
      "Configure CloudFront with a private S3 origin for static content and the public ALB as the web origin. Cache static objects at edge locations, use HTTPS, and keep authenticated or personalized responses out of shared caches.",
      "Use Origin Access Control for the S3 origin. Restrict the ALB origin to CloudFront if clients should enter only through the distribution."
    ],
    "example": [
      "Viewer → CloudFront → public ALB → web tier → private app tier → isolated database. A static cache miss goes to private S3. If an AZ fails, the ALB directs new requests to healthy web targets in the other AZ."
    ]
  },
  "d818697d817b7fb5": {
    "answer": [
      "Use Aurora PostgreSQL for relational transactions and DynamoDB for high-rate location and session access. Scale the two data paths independently."
    ],
    "points": [
      "Keep profiles, completed rides, and payments in Aurora. Send writes and freshness-sensitive reads to the writer endpoint. Offload lag-tolerant reads to the reader endpoint.",
      "Place Aurora readers in multiple AZs. Aurora replicates its cluster storage across AZs, and a suitable reader can be promoted if the writer fails. Have clients reconnect and retry safely after failover.",
      "Store current location by DriverID and sessions by SessionID. Use session TTL to expire old entries. For recent locations, retain Timestamp as the sort key in a history table if the application needs that query.",
      "For nearby drivers, use a secondary access pattern such as a GSI keyed by geographic cell, with shards if dense areas create hot keys. Query nearby cells, filter candidates by distance and freshness, and use a conditional update to prevent assigning an already-claimed driver.",
      "Use DynamoDB on-demand capacity for variable demand or provisioned capacity with auto scaling for a measured steady workload. Watch throttling and hot keys. Add Aurora reader capacity based on read demand and monitor writer pressure separately.",
      "Use Aurora backups and DynamoDB point-in-time recovery. If local access across Regions is required, consider Aurora Global Database with one write Region and DynamoDB Global Tables where the application can handle the chosen consistency model."
    ],
    "example": [
      "Driver GPS → DynamoDB current location and nearby-driver index. Confirmed ride or payment → Aurora writer. Historical rider dashboard → Aurora reader endpoint."
    ]
  },
  "63df9e9a26c83f93": {
    "answer": [
      "Use CloudTrail to trace changes, AWS Config to detect configuration drift, and CloudWatch to measure operational impact and trigger alerts."
    ],
    "points": [
      "Enable a multi-Region CloudTrail trail for relevant management events. Retain logs centrally and record who made the API call, when, and whether it succeeded. Enable data events separately where needed.",
      "Record resource configuration with AWS Config and evaluate rules for required baselines, such as blocked public S3 access or approved instance types. Use the configuration timeline to identify the changed setting.",
      "Send CloudTrail events to CloudWatch Logs and use a metric filter and alarm to notify responders through SNS. For an event-level response, use an EventBridge rule to match relevant CloudTrail events and invoke an approved handler.",
      "Track application metrics and logs such as ALB error rate, latency, and EC2 utilization. Correlate the time of the change with performance and use Cost Explorer if you need to identify the affected service or account’s spend.",
      "Remediate through an approved Systems Manager Automation runbook or a controlled Lambda action, then confirm the rule returns to compliant and application metrics recover."
    ],
    "example": [
      "CloudTrail records a security group change → Config shows the rule opened to the internet → CloudWatch flags related traffic or application errors → SNS notifies operations → an approved runbook restores the intended rule."
    ]
  },
  "248742780c4f7097": {
    "answer": [
      "Use AWS Budgets to catch actual or forecast overspend and AWS Trusted Advisor to find resources worth rightsizing, stopping, or removing."
    ],
    "points": [
      "Check Billing and Cost Management to identify the service, Region, and usage type that incurred charges. Review the account’s Free Tier plan, usage, and remaining credits or eligible allowances.",
      "Activate Environment or Project cost allocation tags. Create monthly cost budgets for dev and test, filtered by the relevant account or tags.",
      "Configure actual and forecast alerts to the responsible team by email or SNS. Alerts use updated billing data and signal a response is needed. Configure a specific Budget Action only if automated enforcement is required.",
      "Review available Trusted Advisor cost checks for idle load balancers, unattached or underused resources, or low-use EC2 capacity. Verify ownership, dependencies, and measurements before taking action.",
      "Right-size dev and test instances, schedule approved shutdowns outside working hours, and delete unused resources after checking retention requirements. Confirm savings in Cost Explorer during the next billing cycle."
    ],
    "example": [
      "Dev budget crosses 80% actual spend → alert reaches the owner → Cost Explorer identifies compute spend → utilization review confirms oversized test instances → rightsize and recheck the trend."
    ]
  },
  "bb2272bbe9ceac1d": {
    "answer": [
      "Layer AWS WAF and Shield at the public entry point, close public S3 access, and use centrally governed KMS keys to protect S3 and RDS data at rest."
    ],
    "points": [
      "Attach a WAF web ACL to CloudFront or the Application Load Balancer. Use managed SQL injection and XSS checks, observe matches in Count mode, and tune the rules before enabling blocking.",
      "Use Shield Standard for baseline infrastructure DDoS mitigation. Consider Shield Advanced for eligible critical endpoints and its enhanced detection, mitigation, and response support. Apply WAF rate-based rules to abusive HTTP traffic.",
      "Enable S3 Block Public Access and scope bucket and IAM policies to approved identities. Use CloudFront Origin Access Control if the application serves approved content from a private S3 bucket.",
      "Configure S3 default SSE-KMS with a customer-managed key. Re-encrypt existing objects where required. Use separate keys and access scopes where warranted by workload boundaries.",
      "Enable RDS encryption with a customer-managed KMS key. If an existing RDS instance is unencrypted, create an encrypted snapshot copy, restore a new encrypted instance, and plan a controlled cutover.",
      "Control key administration and key usage with key policies and scoped IAM permissions. Log KMS use in CloudTrail, require TLS for client and database connections, and retain evidence for the compliance review."
    ],
    "example": [
      "Users → HTTPS → CloudFront or ALB with WAF and Shield → app → private S3 and RDS. S3 and RDS use approved KMS keys, while CloudTrail records key activity."
    ]
  },
  "8ea9534002480d21": {
    "answer": [
      "Use the AWS Well-Architected Framework to map each incident to a design change and a measure that verifies the improvement."
    ],
    "points": [
      "Security — scope IAM roles to least privilege, use AWS Config to detect prohibited configurations, and use CloudTrail for audit evidence. Verify that baseline violations are corrected and reviewed.",
      "Reliability — distribute load-balanced application targets across AZs and use Multi-AZ data services where appropriate. Test loss of an AZ and measure recovery time.",
      "Performance efficiency — select instance types from observed workload needs, configure target-tracking Auto Scaling, and cache suitable responses. Compare peak p95 latency and error rate before and after changes.",
      "Cost optimization — use tags and Cost Explorer to identify cost drivers, rightsize underused capacity, scale in at low demand, and set forecast budget alerts. Track spend per request or transaction.",
      "Operational excellence — define CloudWatch alarms and incident runbooks, deploy infrastructure through reviewed templates, and test rollback. Track time to detect and resolve incidents."
    ],
    "example": [
      "Peak latency exceeds the target → ALB request-per-target policy adds capacity → measure p95 latency and cost per request at equivalent load. Recheck the IAM and Config baselines after deploying the change."
    ]
  },
  "7b092b335c111c9b": {
    "answer": [
      "In the historical AWS SMS workflow, replicate virtualized Windows servers incrementally into AWS, test EC2 instances from the generated AMIs, and cut over after a final sync."
    ],
    "points": [
      "Install the SMS Server Migration Connector in the supported on-premises virtualization environment, connect it to AWS with the required permissions, and import the VM inventory.",
      "Choose the Windows servers and target Region. Set up replication jobs, run the first replication, and schedule incremental runs to transfer changed blocks while the source keeps operating.",
      "Use the AMIs generated from replication runs to launch test EC2 instances. Verify Windows boot and licensing, identity and DNS, application dependencies, security groups, and performance.",
      "Schedule a final sync, pause the source workload when needed for consistency, launch production EC2 instances from the final replicated AMIs using the tested configuration, and switch DNS or traffic. Keep an agreed rollback window.",
      "For an overall migration design, use Site-to-Site VPN or Direct Connect for hybrid connectivity and DMS full load plus change data capture for the database path. SMS covered server rehosting. AWS Transform MGN is the current AWS rehosting service."
    ],
    "example": [
      "Windows VM → SMS Connector → scheduled replication → EC2 AMI → test instance → final sync and traffic switch."
    ]
  },
  "f3b7f2a9b56c2a03": {
    "answer": [
      "In the historical Snow Family, Snowball handled portable bulk import, Snowball Edge added local compute on suitable models, and Snowmobile handled truck-scale transfers."
    ],
    "points": [
      "Original Snowball — portable encrypted appliances historically offered around 50–80 TB per device. Use this pattern for offline data copy at a site that only needs bulk transfer.",
      "Snowball Edge — capacity depends on the model. Historical examples include 80 TB-class storage devices, with EC2-compatible local compute on suitable variants. Use Compute Optimized at sites that need to preprocess video offline.",
      "Snowmobile — historically up to 100 PB per vehicle. It fit a very large, consolidated site with loading access, suitable power and networking, and no need for compute on the transfer device.",
      "For more than 10 PB across multiple sites, estimate bytes and deadlines per site. Parallel portable jobs fit isolated sites, Edge fits locations needing local compute, and a historically eligible consolidated site could use Snowmobile.",
      "Use encrypted jobs and tracked shipping. Verify manifests or checksums before sending devices and verify S3 imports before deleting source copies. Snowmobile has retired, and AWS Snowball Edge is closed to new customers."
    ],
    "example": [
      "Bandwidth-limited studio with offline video processing → historical Snowball Edge workflow. Consolidated petabyte-scale archive in a truck-accessible data center → historical Snowmobile workflow."
    ]
  },
  "03d76b37066cbfc8": {
    "answer": [
      "Keep RDS PostgreSQL Multi-AZ for automatic failover and add read replicas to serve heavy dashboard and reporting queries."
    ],
    "points": [
      "Assuming a Multi-AZ DB instance deployment, use a primary and synchronous standby in separate AZs. RDS fails over to the standby and the application reconnects through the primary DB endpoint.",
      "Create asynchronous read replicas and direct report and dashboard connections to their replica endpoints. Offloading reporting queries frees primary capacity for transactional traffic.",
      "Keep writes and reads that require the latest committed data on the primary. Monitor ReplicaLag, query latency, and CPU. Size the replicas and handle stale reporting data according to the use case.",
      "Use private DB subnets, security groups restricted to approved app or reporting clients, TLS, and KMS encryption. Apply least-privilege PostgreSQL roles, audit access, and retain backups as required.",
      "Test failover and client retry behavior against the recovery objective. Configure backups and point-in-time recovery for data loss, and add a cross-Region recovery plan if the business requires regional disaster recovery."
    ],
    "example": [
      "Transactional app → primary endpoint → writer → synchronous standby. Reporting app → separate read replica endpoint → asynchronous replica."
    ]
  },
  "d411ab385a8c8749": {
    "answer": [
      "Use SQS to queue orders, Step Functions to coordinate fulfillment, and SNS to send status updates through the appropriate email or SMS channels."
    ],
    "points": [
      "Have the order API validate and enqueue an order ID in SQS. The queue absorbs bursts and lets downstream processors consume at their own pace.",
      "Use a Lambda SQS consumer to start a Standard Step Functions execution. Make submission and side effects idempotent using the order ID. Configure queue visibility timeout and a dead-letter queue for repeated start failures.",
      "Use Task states to reserve inventory, authorize or charge payment, and create shipment. Gate shipping on success with a Choice state. Persist the order state and references to payment and shipping.",
      "Retry transient failures with bounded backoff. Catch permanent failures, release reserved stock or refund when appropriate, and update the order record with the failure outcome.",
      "Publish an order-status event to SNS at meaningful transitions. Use confirmed subscriptions and filtering or a notification consumer that resolves the customer’s approved email/SMS destination. Restrict publication and protect customer details."
    ],
    "example": [
      "Order API → SQS → Lambda → Step Functions [reserve inventory → charge → ship] → SNS status event → customer email/SMS. A failed payment branches to release the reservation and send a failure update."
    ]
  },
  "a274ca35f54b52e5": {
    "answer": [
      "Choose an AWS Region near the southern users and permitted by data residency requirements. Run the workload across two Availability Zones in one VPC."
    ],
    "points": [
      "Create public subnets for an internet-facing Application Load Balancer and private subnets for EC2 application servers and the database. Route public internet traffic through an internet gateway and use NAT for private outbound access when required.",
      "Provision EC2 from a launch template in an Auto Scaling group. The load balancer distributes requests to healthy targets, and Auto Scaling adjusts capacity as demand changes.",
      "Use Amazon RDS Multi-AZ for relational records and Amazon S3 for documents, backups, and static assets. Use CloudFront to distribute cacheable content closer to viewers if needed.",
      "Give the application an IAM role with scoped permissions. Restrict traffic between tiers with security groups, and encrypt the data in transit and at rest.",
      "Define the infrastructure in CloudFormation for repeatable provisioning. Use CloudWatch metrics and alarms to monitor health and load, and CloudTrail to audit AWS API activity."
    ],
    "example": [
      "Request path → Route 53 → ALB in two public subnets → EC2 Auto Scaling targets in two private subnets → RDS Multi-AZ. Static content path → CloudFront → S3."
    ]
  },
  "1b6904ea55a65677": {
    "answer": [
      "Require MFA and use separate, short-lived administrator roles with permissions scoped to each team’s duties."
    ],
    "points": [
      "Inventory administrator accounts, role trusts, policies, and access keys. Disable unused credentials and remove unjustified administrator privileges after checking dependencies.",
      "Use individual federated sign-in through IAM Identity Center where available. Require MFA and assign separate roles for routine work and approved privileged changes.",
      "Secure the account root user with MFA and avoid root access keys. Reserve root access for tasks that require it.",
      "An IAM policy is a JSON permissions document. Its statements identify Effect, Action, and Resource, with optional Conditions. Attach identity policies to users, groups, or roles as appropriate.",
      "Requests are denied by default. An applicable Allow grants permission subject to other policy limits, and an applicable explicit Deny takes precedence.",
      "Log IAM and role activity in CloudTrail. Review access periodically and investigate new administrator permissions or unexpected sign-ins."
    ],
    "example": [
      "Development role → allow approved EC2 operations on development resources. Production administrator role → require a separate privileged session and log changes to production."
    ]
  },
  "9c3230a190ac780f": {
    "answer": [
      "Use Amazon EFS as the central shared file system for applications and Linux instances that need the same file paths."
    ],
    "points": [
      "Choose Regional EFS in a designated account and Region. Its file capacity grows as data is added, and the Regional storage class stores data across Availability Zones.",
      "Create EFS mount targets in the Availability Zones used by the application. Mount the same file system on the participating instances over NFS using the EFS mount helper.",
      "Allow NFS TCP port 2049 from approved clients, use TLS in transit and encryption at rest, and use a file system policy with IAM authorization and access points for restricted access.",
      "Connect other accounts or Regions with explicitly routed private connectivity, such as supported VPC peering. Configure mount-target addressing or DNS and check cross-Region latency and transfer cost.",
      "A CMS fleet can share uploads and templates in one directory. Analytics workers that require file access can mount the same dataset, while object-based analytics can use S3."
    ],
    "example": [
      "CMS instance A and instance B → EFS mount targets → shared uploads directory. A file written by one instance becomes available to the other without a manual copy."
    ]
  },
  "7da208cd47f0df19": {
    "answer": [
      "Build a VPC with separate public and private subnets, then give each subnet a route table appropriate to its traffic."
    ],
    "points": [
      "Choose a Region and create a VPC with a private CIDR such as 10.0.0.0/16. Allocate nonoverlapping public and private subnets across two Availability Zones.",
      "Attach an internet gateway to the VPC. Associate the public subnets with a route table containing a default route to that gateway.",
      "For private application instances that need IPv4 internet access, place a public NAT gateway in a public subnet. Add a private default route to NAT. Keep isolated database subnets on local routing.",
      "Create security groups that allow the public application entry point on HTTPS, the application port from the load balancer, and the database port from the application tier. Configure subnet NACLs if required.",
      "Place the public load balancer in public subnets, and the application and database in private subnets without public IPs. Test the allowed paths and verify the database is unreachable directly from the internet."
    ],
    "example": [
      "Public 10.0.1.0/24 → 0.0.0.0/0 to internet gateway. Private app 10.0.11.0/24 → 0.0.0.0/0 to NAT gateway. Both route tables also have the VPC-local route."
    ]
  },
  "375318e40ad6fb85": {
    "answer": [
      "Security groups filter traffic for resource network interfaces. Network ACLs filter traffic at subnet boundaries."
    ],
    "points": [
      "A security group has allow rules for inbound and outbound traffic. If several security groups apply, their allows combine.",
      "Security groups are stateful. Return traffic for an allowed connection can pass automatically.",
      "A network ACL has numbered allow and deny rules for inbound and outbound traffic. AWS evaluates lower rule numbers first and uses the first match.",
      "Network ACLs are stateless. A custom ACL must allow the response path explicitly, including ephemeral client ports where required.",
      "Use the NACL for subnet-wide controls and security groups for service-to-service permissions such as app-to-database access."
    ],
    "example": [
      "A web server security group allows incoming TCP 443. A custom subnet NACL for the same connection also needs an outbound rule for replies to the client’s ephemeral ports."
    ]
  },
  "97af11900b443968": {
    "answer": [
      "Assuming the client records use a relational engine, use Amazon RDS Multi-AZ for availability and RDS read replicas for peak-time read traffic."
    ],
    "points": [
      "Deploy the RDS primary in a private database subnet and choose a Multi-AZ DB instance deployment. RDS synchronously maintains a standby in another Availability Zone.",
      "On primary or host failure, RDS promotes the standby and updates the DB endpoint. Configure the application to reconnect and retry safe operations.",
      "Create one or more asynchronous read replicas. Point dashboards and other lag-tolerant reads to replica endpoints and direct writes and freshness-sensitive reads to the primary endpoint.",
      "Monitor replica lag, CPU, and query latency. Use automated backups and point-in-time recovery for recovery from data loss.",
      "For migration with limited downtime, copy the source to RDS, replicate ongoing changes if supported, validate records and queries, then stop writes briefly and cut over."
    ],
    "example": [
      "Writes and fresh reads → RDS primary ⇢ synchronous standby in AZ B. Primary ⇢ asynchronous read replica ← reporting queries."
    ]
  },
  "9ee32acf5ea6a90f": {
    "answer": [
      "Use consolidated billing and Cost Explorer to attribute the spike, then use utilization data and recommendations to verify which resources can be removed or resized."
    ],
    "points": [
      "Group the affected month’s cost in Cost Explorer by linked account, then filter the largest increase by Region, service, and usage type. Compare it with the previous month.",
      "Activate cost allocation tags such as Owner, Project, and Environment for tagged resource reporting. Check resource inventories in the implicated accounts and Regions to identify owners.",
      "Use Trusted Advisor or Compute Optimizer recommendations and CloudWatch utilization to identify idle or oversized resources. Verify business dependencies and backups with owners before changing them.",
      "Rightsize persistent resources, schedule nonproduction capacity, and remove confirmed unused instances, volumes, or load balancers. Review costs again after changes have taken effect.",
      "Set per-account or project Budgets for actual and forecast spend. Send alerts to accountable owners and review exceptions in Regions the company does not intend to use."
    ],
    "example": [
      "Cost Explorer flags EC2 spend in an unused Region → review the linked account and inventory → confirm utilization and ownership → schedule the approved cleanup → verify the next cost report."
    ]
  },
  "f25624250b927c13": {
    "answer": [
      "Configure an Amazon CloudWatch alarm with an EC2 Recover action for an eligible instance that fails the underlying system status check."
    ],
    "points": [
      "Select the EC2 instance and create a CloudWatch alarm on StatusCheckFailed_System for that instance. Set a failure threshold and evaluation period.",
      "Add the EC2 Recover action and send the alarm notification to the operations team through SNS.",
      "When the failure meets the alarm condition, EC2 attempts to move the instance to a healthy host. The instance retains its identity and attached EBS volumes. RAM and instance-store data are lost.",
      "Confirm recovery in the instance and AWS Health status, then verify application health and check request errors or latency in CloudWatch. If recovery fails, use the backup or failover plan."
    ],
    "example": [
      "Host fault → StatusCheckFailed_System → CloudWatch alarm → EC2 Recover and SNS alert → confirm the instance and website are healthy."
    ]
  },
  "639c2b52f88871bf": {
    "answer": [
      "AWS Shield provides managed protection against distributed denial-of-service attacks on supported AWS resources."
    ],
    "points": [
      "A DDoS attack overwhelms an endpoint with traffic from many sources, consuming capacity needed by legitimate users.",
      "Shield Standard provides automatic baseline protection against common network- and transport-layer attacks such as floods.",
      "Shield detects traffic patterns consistent with attacks and applies mitigation upstream of the protected service so legitimate traffic can continue to reach it.",
      "Shield Advanced adds protection for enrolled resources, more detailed visibility, access to the Shield Response Team under applicable support conditions, and eligible DDoS cost protection.",
      "Use WAF rules and rate-based controls alongside Shield when the workload also needs HTTP request filtering."
    ],
    "example": [
      "Viewers → CloudFront → application origin. During a network flood against the distribution, Shield mitigates attack traffic at the edge so the origin can continue serving legitimate requests."
    ]
  },
  "7a3c35245e00eb3a": {
    "answer": [
      "Put an Amazon SQS queue between the order producer and processing workers so orders can wait durably during bursts or worker outages."
    ],
    "points": [
      "Have the order API enqueue the order ID and data needed by the consumer. Workers poll the queue and scale according to backlog.",
      "SQS stores messages redundantly across multiple Availability Zones. Configure message retention to cover the processing and recovery window.",
      "When a worker receives a message, the visibility timeout temporarily hides it. Delete it after processing succeeds so a failed worker’s message can become visible again.",
      "Standard queues deliver at least once and offer best-effort ordering. Make processing idempotent by order ID. Use FIFO with an appropriate message group when ordering matters.",
      "Configure a redrive policy and dead-letter queue for repeated failures. Monitor backlog and oldest message age so operators can investigate delayed orders."
    ],
    "example": [
      "Order API → SQS → worker → persist result → delete message. Worker crash → visibility timeout expires → another worker retries the same order safely."
    ]
  },
  "8d7039a62bd49c11": {
    "answer": [
      "Use AWS Step Functions to orchestrate the microservices in an Amazon States Language state machine."
    ],
    "points": [
      "A state machine defines the execution flow. Each state receives input and can return data that the next state uses.",
      "A Task state runs a unit of work, such as invoking Lambda, calling a supported AWS service integration, or assigning work to an external activity worker.",
      "An activity worker polls Step Functions for work, performs the activity, and reports success or failure using the task token.",
      "Use Choice for conditional paths, Parallel for independent steps, and Succeed or Fail for explicit outcomes.",
      "Configure timeouts and Retry for transient errors. Use Catch for manual review or compensation. Use execution history and logs to diagnose failed steps."
    ],
    "example": [
      "Order received → reserve stock → charge payment → Choice: paid → ship and notify, failed → release stock and notify."
    ]
  },
  "d1f03859d7466a11": {
    "answer": [
      "In the legacy syllabus context, use AWS Server Migration Service (SMS) to lift and shift supported on-premises virtual servers to EC2. AWS has retired SMS. AWS Transform MGN is its current rehosting successor."
    ],
    "points": [
      "Deploy the legacy SMS connector on a supported virtualization platform and use it to discover and import the virtual server inventory.",
      "Choose the servers and set replication jobs. Copy the initial disk contents, then replicate changed blocks on a schedule to reduce subsequent transfer volume.",
      "Use the resulting Amazon Machine Images to launch test EC2 instances. Verify boot, application health, security settings, networking, and dependencies before production cutover.",
      "Complete the final replication, launch the production EC2 instances, and switch application traffic during a planned window. Keep a rollback path until validation succeeds.",
      "Agentless replication on supported hypervisors, repeatable images, and trial launches simplify migration and reduce the work needed during cutover."
    ],
    "example": [
      "On-premises virtual machines → SMS connector → incremental replication → AMIs → test EC2 → final synchronization → production EC2."
    ]
  },
  "1aea745c8ef863a3": {
    "answer": [
      "For the historical Snowball Edge scenario, use local processing for daily footage and an S3 import job for secure physical transfer to AWS."
    ],
    "points": [
      "Size device capacity for raw footage, proxy files, and working space. Plan local power, LAN throughput, job turnaround, and a secure place to operate the device.",
      "Prepare editing workstations and any required supported EC2-compatible preprocessing image ahead of time. Copy footage over the local network using the device’s supported NFS or S3 interface.",
      "Generate proxies or previews offline and place footage and required outputs in the import area. An import job can bring eligible copied data into S3 on return. A local-use-only job does not import data on return.",
      "Select the destination S3 bucket and KMS key when creating the import job. Unlock the device with the job manifest and unlock code, keep them separate, and restrict access while handling footage.",
      "Check file counts and integrity before shipment. Track the return and verify objects and the import report in S3 before discarding local copies.",
      "Snowball Edge is closed to new customers. The workflow describes the legacy service named in the question."
    ],
    "example": [
      "Cameras → local workstations and Snowball Edge → offline proxies and edits → verified encrypted payload → tracked return → S3 → cloud processing."
    ]
  },
  "be425b526aabbc8b": {
    "answer": [
      "Deploy the storefront across multiple Availability Zones in a Region, deliver cacheable content through CloudFront edge locations, and use a second Region if the recovery or global latency requirements justify it."
    ],
    "points": [
      "Select AWS Regions for proximity to users, service availability, and data residency. An AWS Region contains multiple physically separated Availability Zones.",
      "Place an Application Load Balancer and application capacity in at least two Availability Zones. Configure a Multi-AZ database so an AZ outage does not take down the entire regional deployment.",
      "Use CloudFront edge locations to serve cached static content closer to viewers. A cache miss retrieves the object from its origin, such as S3.",
      "If the business needs protection from a Region-wide outage, replicate the required data to a second Region, configure health-based routing, and test failover against recovery-time and data-loss targets.",
      "AWS secures the facilities, networking hardware, and virtualization that operate the cloud. It manages more of the software stack for services such as Amazon RDS.",
      "The customer configures identities, access policies, network rules, encryption, application security, and recovery. For EC2, the customer also patches the guest OS and installed software."
    ],
    "example": [
      "Viewer → nearest CloudFront edge → regional ALB → healthy EC2 targets in AZ A and AZ B → RDS primary with failover standby. CloudFront retrieves static assets from S3."
    ]
  },
  "3c72aa3dcdff5b64": {
    "answer": [
      "Separate developer, operator, and application permissions. Grant each identity only the actions and resource access needed for its job."
    ],
    "points": [
      "Give each person an individual identity. If IAM users are required, assign them to Developers or Operations groups. Attach reusable permissions policies to groups and require MFA.",
      "Let developers deploy and debug in development. Scope those policies to development resources by ARN or supported resource tags. Keep production administration in a separate role.",
      "Allow approved operators to assume a production role using temporary credentials. Use the role trust policy to define who may assume it and the permissions policy to define what it can do.",
      "Give the EC2 application its own IAM role through an instance profile. Scope application access to the specific buckets, tables, or secrets it uses.",
      "Review effective access with IAM Access Analyzer and review API activity in CloudTrail. Remove permissions that are no longer needed."
    ],
    "example": [
      "Developer → Developers group → read development logs and deploy to development. Operator → approved ProductionOps role → deploy the approved production release. EC2 process → workload role → read its own configuration."
    ]
  },
  "2c5a94c44675d479": {
    "answer": [
      "Choose EC2 instance families by the workload bottleneck. An instance normally moves from pending to running and ultimately from shutting-down to terminated."
    ],
    "points": [
      "General purpose instances such as M or T balance CPU, memory, and network. Use M for balanced web or application tiers and burstable T for light workloads with occasional spikes.",
      "Compute optimized C instances fit CPU-heavy jobs such as encoding or batch processing. Memory optimized R or X instances fit in-memory caches, analytics, or databases with large working sets.",
      "Storage optimized I or D instances fit high local I/O or large local data sets. Accelerated G or P instances fit graphics or GPU compute. Check whether the software needs a particular CPU architecture.",
      "At launch, choose the AMI, instance type, subnet, security group, and storage. The instance enters pending while AWS prepares it, then running when ready. Reboot restarts the guest while the EC2 state remains running.",
      "An EBS-backed instance can move through stopping to stopped and return through pending to running. EBS persists. A normal stop loses RAM and instance-store data, while supported hibernation saves RAM to the root EBS volume.",
      "Termination moves through shutting-down to terminated and is permanent. EBS volumes are deleted or retained according to DeleteOnTermination. Instance-store data is lost."
    ],
    "example": [
      "Pending → running → stopping → stopped → pending → running → shutting-down → terminated. Reboot loops at running."
    ]
  },
  "63d40ba46a0117e9": {
    "answer": [
      "Use a Regional Amazon EFS filesystem so CMS servers in multiple Availability Zones can share one set of files."
    ],
    "points": [
      "Create EFS mount targets in the AZs where the CMS instances run. Mount the filesystem over NFS from each application server.",
      "Allow NFS TCP 2049 on the mount-target security group from the application-server security group. Use encryption at rest and TLS for mounts where required.",
      "Regional EFS stores data redundantly across Availability Zones. If one application server fails, a healthy server in the other AZ can use the same files through its mount target.",
      "Scale the web tier independently of storage. Newly launched instances mount the same filesystem at startup. EFS storage grows and shrinks with the files stored.",
      "Use lifecycle management to move infrequently accessed files into an appropriate lower-cost class. Configure backups for recovery from accidental deletion and test a restore."
    ],
    "example": [
      "ALB → CMS instances in AZ A and AZ B → their respective EFS mount targets → the same Regional EFS filesystem. An uploaded image is visible to both servers through the shared filesystem."
    ]
  },
  "0221334a4faa0362": {
    "answer": [
      "Use a two-AZ VPC with a public entry tier, private application subnets, and isolated database subnets."
    ],
    "points": [
      "Use a VPC such as 10.0.0.0/16 with distinct public, private app, and private DB subnets in each AZ. Attach an internet gateway to the VPC.",
      "Give the public subnets a 0.0.0.0/0 route to the internet gateway and place the public ALB in them. Deploy an AZ-local public NAT gateway in each public subnet for resilient private IPv4 egress.",
      "Give each private app subnet a default route to the NAT gateway in its own AZ. App instances have no public IPs. DB subnets keep local routes and have no internet default route.",
      "Allow HTTPS from clients to the ALB, the application port from the ALB security group to the app security group, and the database port from the app security group to the DB security group. Security groups are stateful.",
      "Apply subnet-level NACLs as an additional boundary. NACLs are stateless, so write both directions of the allowed flows, including relevant ephemeral return ports. Use ordered allow and deny rules.",
      "Distribute app instances across AZs with an Auto Scaling group and let the ALB route to healthy targets. Use a Multi-AZ database deployment for failover."
    ],
    "example": [
      "Client → internet gateway → public ALB → private EC2 app → private database. Outbound software update → app subnet default route → same-AZ NAT → internet gateway."
    ]
  },
  "04aee2408d5e4f92": {
    "answer": [
      "Use Amazon RDS in a Multi-AZ DB instance deployment for failover and add read replicas for read-heavy workloads."
    ],
    "points": [
      "Choose an RDS engine compatible with the legacy application. Size the instance and storage for write traffic, and place the database in private DB subnets in at least two AZs.",
      "In the single-standby Multi-AZ deployment, the primary synchronously replicates to a standby in a second AZ. RDS promotes the standby during failover and the application reconnects using the primary DB endpoint.",
      "Create a separate asynchronous read replica. Route lag-tolerant workloads such as reporting, dashboards, or catalog queries to the replica endpoint. Keep writes and freshness-sensitive reads on the primary.",
      "Monitor replica lag, CPU, connections, and query latency. Add or resize replicas when observed read demand requires it.",
      "Allow database connections only from the application tier, enable encryption and automated backups, and test failover and recovery."
    ],
    "example": [
      "Orders and current inventory → primary endpoint → RDS primary → synchronous standby. Reports → read replica endpoint → asynchronous read replica."
    ]
  },
  "d493fab52ef266e0": {
    "answer": [
      "Correlate CloudTrail API activity, AWS Config resource history, and CloudWatch runtime metrics and logs to reconstruct the incident."
    ],
    "points": [
      "Identify the first symptom and its time window using CloudWatch alarms, metrics, and logs. Check what changed in latency, error rate, traffic, or application events.",
      "Search CloudTrail for relevant API events. Record the caller or assumed role, action, time, source IP, target resource, and result where available.",
      "Use AWS Config to inspect the resource timeline and before-and-after configurations. Check rule compliance and relationships to determine which resources were affected.",
      "Put the three records on one timeline. Match the API event to the configuration change, then use CloudWatch data to establish the impact and whether it persisted.",
      "Contain the issue, for example by revoking the affected session and restoring a known-good configuration. Preserve the logs and verify both Config compliance and CloudWatch recovery."
    ],
    "example": [
      "CloudWatch error alarm → CloudTrail identifies an unexpected security group rule change → Config shows the rule before and after → restore the approved rule → verify errors return to baseline."
    ]
  },
  "b81131e2a74012b9": {
    "answer": [
      "Use AWS Shield to detect and mitigate DDoS traffic. Put the live stream behind CloudFront and evaluate Shield Advanced for critical eligible endpoints."
    ],
    "points": [
      "Shield Standard is automatic and provides baseline mitigation against common infrastructure-layer DDoS attacks.",
      "Shield monitors traffic for signs of an attack. Mitigation filters or absorbs attack traffic in the AWS network so legitimate viewers can continue reaching protected endpoints.",
      "CloudFront distributes traffic across edge locations and serves cacheable stream segments at the edge. This reduces the request load reaching the origin.",
      "Shield Advanced is a paid option with enhanced detection, visibility, and response support for eligible resources such as CloudFront distributions and Application Load Balancers.",
      "Use AWS WAF rate-based rules or Shield Advanced application-layer protections with a web ACL for abusive HTTP traffic. Compare request patterns and origin errors with normal live-event traffic."
    ],
    "example": [
      "Viewers → CloudFront with Shield protection → ALB/origin. Shield mitigates an infrastructure flood at the network edge, while WAF rate controls can address abusive HTTP requests."
    ]
  },
  "0a2748625db38c7b": {
    "answer": [
      "Publish shipment events to an Amazon SNS topic and fan them out to subscribed customer and internal channels."
    ],
    "points": [
      "Have the shipment application publish one structured event containing a shipment reference and an event type such as shipped, delayed, or delivered.",
      "Use email and SMS subscriptions where appropriate. For personalized notifications to many customers, subscribe an SQS queue or Lambda worker that selects the correct recipient for each event.",
      "Use subscription filter policies to route the right event types to support, operations, and notification subscribers.",
      "Configure retries and a subscription dead-letter queue where supported. Use an SQS subscription when a backend needs buffering, and handle duplicate delivery safely.",
      "Grant sns:Publish only to the shipment service role for the named topic. Scope the SQS queue policy to that topic if using an SQS subscriber, and use KMS encryption at rest where required.",
      "Monitor publish and delivery failures. Keep unnecessary customer information out of messages and logs."
    ],
    "example": [
      "Shipment service → SNS topic → customer notification worker and internal operations queue. A delay event reaches the matching support subscription."
    ]
  },
  "579292e4df0f6e7c": {
    "answer": [
      "Use a Step Functions Standard workflow for each claim, with independent checks in parallel, explicit decisions, and retry or review paths."
    ],
    "points": [
      "Store claim documents in S3 and record a claim ID. Buffer claim submissions in SQS if bursts need smoothing, then start a workflow through a consumer.",
      "Use a Task state to validate and ingest documents. Run fraud detection and policy validation in a Parallel state when both can use the ingested data independently.",
      "Join the results and use a Choice state to approve, reject, or route the claim to a human reviewer. Update the claim status before publishing an outcome notification.",
      "Use bounded Retry with backoff for transient service errors and Catch for persistent errors or cases that need manual review. Key writes and notifications by claim ID to handle repeated execution safely.",
      "Use scoped task roles and encryption for sensitive claim data. Monitor failure rates and queue age in CloudWatch, and use execution history to investigate individual claims."
    ],
    "example": [
      "Intake → validate documents → Parallel (fraud check and policy check) → Choice (approve, reject, review) → record outcome → SNS notification. Catch → manual review."
    ]
  },
  "e6d560946496e792": {
    "answer": [
      "For the historical Snow-family comparison, Snowmobile was the truck-scale choice for a consolidated 8 PB transfer. For factories that cannot consolidate data efficiently, compare parallel Snowball Edge jobs at the sites."
    ],
    "points": [
      "Snowmobile historically supported up to 100 PB per unit. Its value was high-capacity transfer from a site with enough local throughput, power, and physical access. It has been retired.",
      "Original Snowball was a portable bulk-transfer appliance. Snowball Edge adds local processing options and can be shipped to multiple sites so copying proceeds in parallel.",
      "Inventory data at each factory. Compare local copy time, device or truck logistics, network upload time, and AWS import time against the deadline. Choose consolidation only if it can finish faster than parallel site transfers.",
      "Protect data with encrypted transfer devices and tightly scoped access to the import jobs and keys. Track custody during collection and transit.",
      "Use source manifests or checksums to verify the dataset after local copy and again after import to S3. Keep the source copies until verification passes."
    ],
    "example": [
      "Factory files → encrypted bulk copy → tracked physical transport → S3 landing bucket → checksum verification → central analytics and ML."
    ]
  },
  "1b4fbf233f6db10c": {
    "answer": [
      "Use the historical AWS Server Migration Service workflow for the VM tier, AWS DMS for live databases, and a secure hybrid connection for systems that must remain on-premises."
    ],
    "points": [
      "Inventory application dependencies, supported VM and database types, and compliance boundaries. Decide which systems can migrate and which data must remain on-premises.",
      "Connect the data center to the AWS VPC through Site-to-Site VPN or Direct Connect with the required encryption. Use private subnets, routes, firewalls, and scoped access between tiers.",
      "For the legacy SMS workflow, deploy the connector, import VM inventory, replicate VM changes incrementally, and generate AMIs. Launch test EC2 instances and validate application and network dependencies.",
      "Configure AWS DMS source and target endpoints and run a full load plus change data capture to a compatible target such as RDS. If database engines differ, convert and test the schema and code as a separate step.",
      "Validate the target data and monitor replication lag. At cutover, pause writes, drain changes, verify consistency, switch endpoints and application traffic, then smoke-test before reopening writes.",
      "Keep the source and a tested rollback plan available through validation. Retain hybrid connectivity for workloads required on-premises. AWS retired SMS, and AWS Transform MGN provides current server rehosting."
    ],
    "example": [
      "On-premises VMs → legacy SMS replication → AMIs → EC2. On-premises database → DMS full load plus CDC → RDS. VPN or Direct Connect links retained systems to the AWS VPC."
    ]
  },
  "cf1f02f926747f9b": {
    "answer": [
      "Cloud computing provides convenient, on-demand network access to a shared pool of configurable computing resources. Customers can provision and release those resources rapidly with minimal manual interaction with the provider."
    ],
    "points": [
      "On-demand self-service lets a user provision resources without waiting for the provider. Broad network access makes services available over standard network interfaces to different clients.",
      "Resource pooling shares provider capacity across customers. Rapid elasticity expands and contracts capacity with demand. Measured service meters resource usage for reporting and charging.",
      "IaaS supplies infrastructure you configure, such as Amazon EC2. PaaS supplies an application deployment environment, such as Elastic Beanstalk. SaaS delivers a finished application, such as a hosted email suite.",
      "Public cloud serves customers through a public provider, for example AWS. Private cloud serves one organization, for example an internal OpenStack cloud.",
      "Community cloud serves organizations with shared requirements, for example a cloud operated for a consortium of universities. Hybrid cloud connects distinct cloud environments, for example a private cloud integrated with AWS.",
      "Both AWS and on-premises IT need compute, storage, networking, and access controls. In AWS, customers request managed or virtualized resources through APIs. In a traditional data center, the organization provisions and maintains physical capacity."
    ],
    "example": [
      "Draw parallel stacks: on-premises servers, disks, and routed network ↔ EC2, EBS, and VPC. Put the application and its access controls above both stacks."
    ]
  },
  "c591909c418beabf": {
    "answer": [
      "Attach one identity-based policy with broad resource-scoped Allow statements and explicit Deny statements for Table1 and Object1.txt. An explicit Deny overrides an Allow."
    ],
    "points": [
      "Version identifies the policy language. Statement contains the rules. Effect specifies Allow or Deny, Action lists the API permissions, and Resource identifies the target ARNs.",
      "Sid is an optional statement identifier. Condition is optional and restricts when a statement applies. The user or role receiving this identity policy supplies the principal.",
      "Assume the standard AWS partition and ordinary DynamoDB tables and S3 buckets. Treat Object1.txt as a filename, so the deny covers a root object and any prefixed key ending in /Object1.txt. Keep only the root pattern if the question intends that exact key.",
      "Scope this policy to DynamoDB table and child resources and to S3 objects. For example, ListTables and ListBucket are separately scoped operations and these statements grant neither."
    ],
    "example": [
      "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Sid\": \"AllowDynamoDBTableResourceActions\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"dynamodb:*\",\n      \"Resource\": \"arn:aws:dynamodb:*:*:table/*\"\n    },\n    {\n      \"Sid\": \"DenyTable1AndItsSubresources\",\n      \"Effect\": \"Deny\",\n      \"Action\": \"dynamodb:*\",\n      \"Resource\": [\n        \"arn:aws:dynamodb:*:*:table/Table1\",\n        \"arn:aws:dynamodb:*:*:table/Table1/*\"\n      ]\n    },\n    {\n      \"Sid\": \"AllowS3ObjectActions\",\n      \"Effect\": \"Allow\",\n      \"Action\": \"s3:*\",\n      \"Resource\": \"arn:aws:s3:::*/*\"\n    },\n    {\n      \"Sid\": \"DenyObject1\",\n      \"Effect\": \"Deny\",\n      \"Action\": \"s3:*\",\n      \"Resource\": [\n        \"arn:aws:s3:::*/Object1.txt\",\n        \"arn:aws:s3:::*/*/Object1.txt\"\n      ]\n    }\n  ]\n}",
      "Check: PutItem on Table2 and GetObject on reports/file.txt are allowed by this policy. Query on an index of Table1 and GetObject on reports/Object1.txt are explicitly denied."
    ]
  },
  "c00f28da6e603bb0": {
    "answer": [
      "Use an internet-facing Application Load Balancer across two AZs and an EC2 Auto Scaling group across two private application subnets. Put the database in private database subnets."
    ],
    "points": [
      "Create one public ALB subnet and one private application subnet in each AZ. Route the public subnets to the internet gateway and leave the database without a public endpoint.",
      "Set the ALB security group to accept HTTPS from clients, the web-server group to accept the application port from the ALB security group, and the database group to accept the database port from the web-server security group.",
      "Create a launch template with the AMI, instance type, instance role, web security group, and bootstrap instructions. Attach the Auto Scaling group to the ALB target group, then set minimum, desired, and maximum capacity, for example 2, 2, and 6.",
      "Configure ALB health checks and enable them for Auto Scaling replacement. Use target tracking on average CPU or ALB requests per target. During a spike, Auto Scaling adds capacity and the ALB starts routing to new targets once they are healthy.",
      "If an instance or AZ fails, the ALB sends requests to the healthy targets and Auto Scaling works to restore desired capacity in available subnets. When demand falls, scale in and drain removed targets."
    ],
    "example": [
      "Internet → public ALB [AZ A and B] → private web Auto Scaling targets [AZ A and B] → private database. Draw the health-check arrow and the demand metric that triggers scaling."
    ]
  },
  "c3ed05bdf00879bd": {
    "answer": [
      "Use the course’s nine launch decisions in order. Each step chooses part of the instance’s operating environment, access, or lifecycle."
    ],
    "points": [
      "1. AMI. Select the operating system, architecture, and image baseline. 2. Instance type. Match vCPUs, memory, storage, and network capacity to the workload.",
      "3. Network settings. Select VPC, subnet, and any public IP assignment. 4. IAM role. Attach an instance profile with the minimum AWS API permissions required by the application.",
      "5. User data. Optionally provide a first-boot script for package installation or application setup. 6. Storage. Choose the root and data volumes, capacity, EBS type, encryption, and delete-on-termination behavior.",
      "7. Tags. Name the instance and record owner, environment, or cost allocation. 8. Security group. Allow required traffic by protocol, port, and trusted source.",
      "9. Key pair. Select or create the key pair for key-based login and protect the private key. Select no key pair only if an alternative access method is in place. Review the settings, launch, and verify instance status."
    ],
    "example": [
      "Example: Amazon Linux AMI → general-purpose instance → private subnet → SSM-capable role → bootstrap script → encrypted gp3 volume → Name and Environment tags → app security group → key pair or established Session Manager access."
    ]
  },
  "4880a856a800368b": {
    "answer": [
      "Connect Web-VPC and Payment-VPC through VPC peering. Expose only the web tier and use security group rules to enforce who can initiate a connection."
    ],
    "points": [
      "Place web servers in public subnet 10.0.1.0/24 within Web-VPC 10.0.0.0/16. Attach an internet gateway and give the directly exposed servers public addresses. Accept TCP 80/443 on the web security group.",
      "Place payment processors in private subnet 10.3.1.0/24 within Payment-VPC 10.3.0.0/16. Give them private addresses and no direct internet route.",
      "Create and accept a peering connection between the two non-overlapping VPCs. In the web subnet route table add 0.0.0.0/0 → internet gateway and 10.3.0.0/16 → peering. In the payment subnet route table add 10.0.0.0/16 → peering. Both tables retain their local route.",
      "Assuming the payment service listens on TCP 443, allow web egress to 10.3.1.0/24 on that port and allow payment ingress on that port from 10.0.1.0/24. Remove the payment security group’s broad outbound rule and avoid any egress that allows it to initiate connections to the web tier.",
      "Security groups are stateful, so the reply to a web-initiated connection can return without a payment egress rule. If you add custom network ACLs, permit the request and return ports in the appropriate directions."
    ],
    "example": [
      "Internet → IGW → Web-VPC public web tier → peering → Payment-VPC private payment tier. Verify internet-to-web and web-to-payment succeed, payment-to-web new sessions fail, and web-initiated replies return."
    ]
  },
  "ae33a86ce2c82c23": {
    "answer": [
      "Use AWS Site-to-Site VPN over the internet. IPsec provides encryption, and using the existing internet connection fits the fast, low-cost setup requirement."
    ],
    "points": [
      "Place the web application in a public subnet of VPC 10.0.0.0/16 and the application servers in a private subnet. The public subnet keeps its default route to the internet gateway.",
      "Create a customer gateway resource for the on-premises edge device and attach a virtual private gateway to the VPC. Configure the VPN and both IPsec tunnels on the customer router/firewall, using BGP where supported or static routing.",
      "In the application subnet route table, use 192.168.10.0/24 → virtual private gateway through route propagation or an explicit route. In the on-premises routing table, send 10.0.0.0/16 back over the VPN.",
      "Permit the SQL port from only the private application subnet on the on-premises database firewall. Scope app-tier access to the required web-tier source and app port. Keep SQL off the public internet.",
      "Test connectivity and fail over each tunnel in turn. Two tunnels protect against tunnel outages, while a second customer router or link is needed if the on-premises edge itself must be redundant."
    ],
    "example": [
      "Internet users → IGW → public web app → private app servers → virtual private gateway ⇄ two IPsec tunnels ⇄ customer gateway → SQL database in 192.168.10.0/24."
    ]
  },
  "28f32618a014daf4": {
    "answer": [
      "Combine an RDS PostgreSQL Multi-AZ DB instance deployment for automatic failover with an RDS read replica for peak read traffic."
    ],
    "points": [
      "RDS synchronously replicates primary changes to a standby in another AZ. During a primary failure or qualifying maintenance event, RDS promotes the standby and redirects the DB endpoint. Configure application reconnection and retries.",
      "Send writes and reads requiring the latest data to the primary. Send catalog, review, and other lag-tolerant reads to the separate read-replica endpoint. Replication to this read replica is asynchronous.",
      "The single standby used by a Multi-AZ DB instance does not serve read traffic. A Multi-AZ DB cluster is a distinct option with readable standbys. Compare its total cost and capacity if the workload merits it.",
      "Size the read replica using peak query throughput, CPU, latency, and replica lag. Test failover and measure recovery against the RTO. A failover may still briefly interrupt connections."
    ],
    "example": [
      "Write and fresh-read path → primary endpoint → primary ⇄ synchronous standby in another AZ. Lag-tolerant reads → read-replica endpoint. Mark the primary-to-replica link asynchronous."
    ]
  },
  "187d97f8c8976b8e": {
    "answer": [
      "Use AWS Systems Manager to manage the 250 private EC2 instances across both accounts and Regions. Map each requirement to its own configuration, remediation, approval, or incident workflow."
    ],
    "points": [
      "Onboard the fleet with an up-to-date SSM Agent, a least-privilege instance role, and private connectivity to Systems Manager endpoints in each Region. Use Session Manager for approved access without inbound SSH or RDP. Use AWS Organizations and scoped cross-account roles for central visibility.",
      "Configuration and insights. Apply State Manager associations by environment tag. Collect software and configuration data with Inventory, and aggregate supported operational data in Explorer. Use OpsCenter for actionable issues and CloudWatch for runtime metrics.",
      "Remediation. Send CloudWatch or EventBridge events to approved Automation runbooks. For example, retry a failed patch via Patch Manager or investigate high CPU. If the agent is offline, use EC2-side checks or a separate recovery process. Add an approval step for risky production changes and verify the result.",
      "Change control. For existing Change Manager customers, use change templates, approval roles, Change Calendar, and Automation execution records. Store who requested and approved the change, what ran, and its outcome.",
      "Incident response. For existing Incident Manager customers, trigger a response plan from an alarm, page the on-call rotation with escalation, run the linked runbook, and record the timeline, recovery, and post-incident follow-up.",
      "Change Manager and Incident Manager are closed to new customers. A new deployment can pair Systems Manager Automation approvals and audit logs with the organization’s ticketing and on-call incident tools."
    ],
    "example": [
      "Private EC2 → SSM Agent and private endpoints → State Manager, Inventory, and Explorer. CloudWatch/EventBridge → OpsItem or incident → page on-call → approved Automation → verify recovery and record follow-up."
    ]
  },
  "317155c7c995859c": {
    "answer": [
      "Associate a regional AWS WAF web ACL with the Application Load Balancer. Use managed rules, a source IP set, and targeted rate controls to protect the portal while keeping normal access available."
    ],
    "points": [
      "Give the deny-listed source IP rule high priority. Match against an IP set and use Block. Keep the default action Allow so requests that pass inspection reach the application.",
      "Use managed SQL injection and cross-site scripting checks on the relevant request components. Start the affected rules in Count mode and use CloudWatch metrics and appropriately redacted WAF logs to review legitimate requests and false positives.",
      "Apply a narrow exception for the verified false-positive rule on the specific medical search route or field, while retaining the other checks. For example, override that individual managed rule to Count, then use its label with a follow-up Block rule for matches outside the narrowly scoped exception.",
      "Add a rate-based rule for excessive requests to affected portal routes. AWS WAF handles HTTP-layer abuse. Use AWS Shield for infrastructure-layer DDoS protection and consider Shield Advanced if the risk justifies it.",
      "Keep application authentication, parameterized SQL queries, and output encoding in place. After testing known normal and malicious traffic, enforce the rules and monitor blocked and allowed requests."
    ],
    "example": [
      "Client HTTPS → ALB-associated web ACL [IP deny list, rate control, SQLi/XSS checks, default Allow] → ALB targets. Check that a valid medical query passes while the matching malicious test outside the exception is blocked."
    ]
  },
  "1f2a2c37b09e55c6": {
    "answer": [
      "Compare the client and S3 roles under both client-side and server-side encryption. Show where plaintext becomes ciphertext and identify who supplies or manages the key."
    ],
    "points": [
      "Client-side encryption, client role. Encrypt locally before PUT and decrypt after GET. An application or the Amazon S3 Encryption Client can perform both operations using a client-held or KMS wrapping key.",
      "Client-side encryption, S3 role. Receive, store, and return ciphertext. The client-side encryption layer remains encrypted while data passes through S3.",
      "Server-side encryption, client role. Send the object over HTTPS and specify or use the bucket’s default encryption option. With SSE-C the client supplies the key when required, and S3 performs the encryption and decryption.",
      "Server-side encryption, S3 role. Encrypt the object before writing it to storage and decrypt on authorized reads. SSE-S3 uses S3-managed keys and SSE-KMS uses KMS-protected data keys."
    ],
    "example": [
      "Client-side diagram: plaintext → client encrypts → ciphertext over TLS → S3 stores ciphertext → ciphertext on GET → client decrypts.",
      "Server-side diagram: plaintext → HTTPS PUT → S3 encrypts → ciphertext at rest → S3 decrypts on authorized GET → HTTPS response."
    ]
  },
  "c8a3643a280252d1": {
    "answer": [
      "Amazon SWF and AWS Step Functions both coordinate multi-step workflows. SWF exposes decision tasks to a coded decider. Step Functions executes a declarative state machine."
    ],
    "points": [
      "SWF records workflow history and schedules activity tasks based on decisions returned by a decider. Workers poll for activity tasks, execute work, and report completion or failure.",
      "Step Functions defines the workflow with Amazon States Language. Task states invoke integrated services or activities, Choice branches, Parallel runs independent branches, and Retry or Catch controls failure handling.",
      "SWF gives developers control over complex decision logic and workers. Step Functions provides a visual execution view, service integrations, and built-in state transitions, so many workflows require less coordination code.",
      "Both support tracking and multi-step execution. Choose SWF for an existing custom decider and worker architecture. Choose Step Functions when the process can be expressed as states and integrations."
    ],
    "example": [
      "SWF: event history → custom decider → activity task → polling worker. Step Functions: Start → Validate → Choice → integrated service Task → Success or Catch."
    ]
  },
  "624ce77f059a3fc3": {
    "answer": [
      "Separate schema conversion from row migration. Prepare and test the PostgreSQL target, then use AWS DMS full load plus change data capture (CDC) while MySQL stays live. Reserve the 15-minute window for the final write pause and cutover."
    ],
    "points": [
      "Inventory schema objects and dependencies. Use AWS DMS Schema Conversion or AWS SCT to assess and convert supported objects. Manually fix flagged data types, procedures, SQL dialect, and application dependencies. Apply the target schema and test critical transactions.",
      "Create the private RDS PostgreSQL target and secure connectivity to the on-premises MySQL source, for example through a VPN. Configure DMS source and target endpoints, permissions, and MySQL row-based binary logging with sufficient retention. Test connectivity and replication.",
      "Start DMS full load plus CDC to transfer the 500 GB before downtime and apply ongoing inserts, updates, and deletes. Monitor replication errors and target lag, validate rows or checksums, and rehearse the application switch. Use a non-dropping target preparation mode such as DO_NOTHING with empty, pre-created tables to preserve the converted schema.",
      "At cutover, pause writes, drain remaining CDC changes, and verify that the target is caught up and consistent. Switch the application connection and credentials, run smoke tests, and reopen writes only after those checks pass.",
      "Define an abort time before the 15-minute limit. Keep MySQL available during the switch. If the target has accepted writes, reconcile or reverse-replicate them before returning traffic to MySQL."
    ],
    "example": [
      "Days or hours before → schema conversion, full load, CDC, validation. Cutover window → pause writes, drain and verify, switch endpoint, smoke-test, reopen. Abort if lag or checks exceed the rehearsed threshold."
    ]
  }
};
