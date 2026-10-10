import type { ComponentType } from "react";
import {
    FiCode,
    FiLayers,
    FiServer,
    FiBriefcase,
    FiCpu,
    FiDatabase,
    FiGlobe,
    FiTool,
} from "react-icons/fi";

export interface UdyamServiceItem {
    id: string;
    nicCode: string;
    domain: "software" | "web" | "infra" | "consultancy" | "ai" | "data" | "portals" | "facilities";
    filterCategory: "all" | "infra" | "software" | "ai";
    title: string;
    subtitle: string;
    officialDescription: string;
    color: string;
    icon: ComponentType<{ className?: string; size?: number }>;
    startingPrice: number;
    pricingModel: "fixed" | "monthly" | "hourly";
    portalSlug: string;
    deliverables: { name: string; desc: string }[];
    techStack: string[];
    slaMetrics: string;
    turnaround: string;
    compliance: string;
    briefDetail: {
        architectureOverview: string;
        enterpriseUseCases: string[];
        keyBenefits: string[];
    };
}

export const udyamServicesList: UdyamServiceItem[] = [
    {
        id: "nic-62011",
        nicCode: "NIC 62011",
        domain: "software",
        filterCategory: "software",
        title: "Custom Software Engineering & Backend Systems",
        subtitle: "Mission-critical enterprise software, microservices, and distributed backend architectures.",
        officialDescription: "Writing, modifying, testing of computer program to meet the needs of a particular client",
        color: "from-blue-600 to-cyan-500",
        icon: FiCode,
        startingPrice: 2499,
        pricingModel: "fixed",
        portalSlug: "custom-software-engineering",
        deliverables: [
            { name: "Bespoke REST & gRPC Microservices", desc: "High-throughput, type-safe API backends built in Go and Node.js." },
            { name: "ERP, CRM & Legacy Connectors", desc: "Custom bridges connecting modern applications to legacy databases." },
            { name: "Automated CI/CD & Testing Pipelines", desc: "Automated regression, unit, and performance testing suites." },
            { name: "Containerized Docker & K8s Architecture", desc: "Production-ready container manifests and orchestration configs." },
        ],
        techStack: ["TypeScript", "Go / Node.js", "PostgreSQL", "Docker", "Kubernetes", "GraphQL"],
        slaMetrics: "99.9% Code Reliability & Sub-100ms Latency",
        turnaround: "2 - 4 Weeks",
        compliance: "Clean Architecture & GitOps Standards",
        briefDetail: {
            architectureOverview: "Engineered on decoupled microservices and event-driven architectures with robust data persistence, caching layers, and high-concurrency throughput.",
            enterpriseUseCases: [
                "Custom enterprise operational & workflow backends",
                "Automated billing, reconciliation, and payment settlement engines",
                "Multi-tenant B2B SaaS platforms with strict tenancy isolation",
                "High-volume inventory and supply-chain logistics integrations",
            ],
            keyBenefits: [
                "Full source code ownership with zero proprietary vendor lock-in",
                "Sub-100ms API response latency across high concurrent loads",
                "Enterprise test coverage guaranteeing minimal post-release regressions",
            ],
        },
    },
    {
        id: "nic-62012",
        nicCode: "NIC 62012",
        domain: "web",
        filterCategory: "software",
        title: "Full-Stack Web Architecture & Digital Platforms",
        subtitle: "High-performance React & Next.js digital platforms, headless stacks, and design systems.",
        officialDescription: "Writing, modifying, testing of computer program to meet the needs of a particular client including web page design",
        color: "from-emerald-600 to-teal-400",
        icon: FiLayers,
        startingPrice: 1499,
        pricingModel: "fixed",
        portalSlug: "web-architecture-platforms",
        deliverables: [
            { name: "Next.js App Router & React 19 Engineering", desc: "Server Component architecture for blazing fast initial renders." },
            { name: "Enterprise Design Systems & UI Kits", desc: "Tailwind CSS & Framer Motion component libraries for consistency." },
            { name: "Core Web Vitals & Technical SEO Optimization", desc: "Sub-second LCP and perfect 100 Lighthouse performance." },
            { name: "Role-Based Auth & Session Management", desc: "NextAuth, OAuth2, and SSO integrations with audit logging." },
        ],
        techStack: ["Next.js", "React 19", "Tailwind CSS", "TypeScript", "Framer Motion", "Redis"],
        slaMetrics: "Sub-Second LCP & 100 Core Web Vitals",
        turnaround: "1 - 3 Weeks",
        compliance: "WCAG 2.1 AA Accessibility & Responsive Standards",
        briefDetail: {
            architectureOverview: "Server-Driven UI and edge rendering optimized for global low-latency content delivery, accessible WCAG 2.1 AA compliance, and pixel-perfect mobile-first craftsmanship.",
            enterpriseUseCases: [
                "High-conversion enterprise digital showcases and client portals",
                "Customer self-service dashboards with real-time metric visualization",
                "Headless commerce frontends with sub-second page transitions",
                "Internal engineering portals and technical documentation hubs",
            ],
            keyBenefits: [
                "Instant page loads and frictionless user onboarding",
                "Maximum organic search engine discoverability through technical SEO",
                "Robust type-safety reducing client-side runtime errors to zero",
            ],
        },
    },
    {
        id: "nic-62013",
        nicCode: "NIC 62013",
        domain: "infra",
        filterCategory: "infra",
        title: "IT Infrastructure Support & 24/7 Cluster Operations",
        subtitle: "Mission-critical server support, continuous telemetry, and zero-downtime clustering.",
        officialDescription: "Providing systems infrastructure issues for clients",
        color: "from-cyan-600 to-blue-500",
        icon: FiServer,
        startingPrice: 899,
        pricingModel: "monthly",
        portalSlug: "it-infrastructure-support",
        deliverables: [
            { name: "24/7 Zabbix & Prometheus Telemetry", desc: "Continuous metric collection across servers, memory, and disks." },
            { name: "Keepalived & HAProxy Failover Clustering", desc: "Multi-node hot-standby architectures with sub-second failover." },
            { name: "Linux & Windows Kernel Hardening", desc: "Security patching, vulnerability mitigation, and OS tuning." },
            { name: "Disaster Recovery Runbooks & Automated Backups", desc: "Tested off-site snapshot protocols and rapid recovery drills." },
        ],
        techStack: ["Zabbix", "Linux (RHEL/Ubuntu)", "Keepalived", "HAProxy", "Prometheus", "Grafana"],
        slaMetrics: "99.99% Target Uptime & <15min Incident Response",
        turnaround: "24/7 Continuous Ops",
        compliance: "Enterprise SLA & Incident Management Protocols",
        briefDetail: {
            architectureOverview: "Redundant active-passive or active-active topology with automated health-check failover, heartbeat telemetry, and automated self-healing scripts.",
            enterpriseUseCases: [
                "High-traffic ecommerce and SaaS production clusters",
                "Aviation cargo logistics infrastructure (e.g., Swissport operations)",
                "Industrial manufacturing telemetry plants (e.g., Air Liquide)",
                "Telecom billing and customer-service server clusters",
            ],
            keyBenefits: [
                "Zero unplanned production downtime during hardware or network failures",
                "Guaranteed SLA response times backed by real-time human engineering",
                "Hardened attack surface eliminating common root exploit vectors",
            ],
        },
    },
    {
        id: "nic-62020",
        nicCode: "NIC 62020",
        domain: "consultancy",
        filterCategory: "infra",
        title: "Enterprise IT Consultancy & Multi-Cloud Migration",
        subtitle: "Strategic systems architecture, legacy cloud migrations, and facilities management.",
        officialDescription: "Computer consultancy and computer facilities management activities",
        color: "from-indigo-600 to-violet-500",
        icon: FiBriefcase,
        startingPrice: 1899,
        pricingModel: "fixed",
        portalSlug: "enterprise-it-consultancy",
        deliverables: [
            { name: "Infrastructure Audit & Gap Analysis", desc: "Deep-dive topology assessment identifying downtime bottlenecks." },
            { name: "Zero-Downtime Multi-Cloud Migration", desc: "Structured cutover plans to AWS, Azure, OCI, or private clouds." },
            { name: "FinOps Cloud Cost Optimization", desc: "Right-sizing instances and architectural cleanup to cut cloud bills." },
            { name: "Enterprise Facilities & Disaster Runbooks", desc: "Standard operating procedures and high-compliance runbooks." },
        ],
        techStack: ["AWS", "Microsoft Azure", "Oracle Cloud (OCI)", "Terraform", "Ansible", "GitOps"],
        slaMetrics: "Zero-Data-Loss Cutover Guarantee",
        turnaround: "2 - 6 Weeks",
        compliance: "SOC2 & ISO 27001 Alignment",
        briefDetail: {
            architectureOverview: "Infrastructure-as-Code (IaC) pipelines with automated validation, staging cutovers, rollback checkpoints, and complete network segmentation.",
            enterpriseUseCases: [
                "Legacy on-premises data center to cloud migration",
                "Multi-cloud redundant disaster recovery setups",
                "FinOps resource audits reducing cloud infrastructure burn by 30-40%",
                "High-compliance healthcare and fintech architecture design",
            ],
            keyBenefits: [
                "30-40% immediate reduction in recurring cloud infrastructure expenditures",
                "Documented runbooks ensuring internal teams can maintain systems effortlessly",
                "Fully automated Infrastructure-as-Code setups reproducible in minutes",
            ],
        },
    },
    {
        id: "nic-62099",
        nicCode: "NIC 62099",
        domain: "ai",
        filterCategory: "ai",
        title: "Autonomous AI Workflows & Zero-Trust IT Services",
        subtitle: "Autonomous AI agent fleets, enterprise RAG pipelines, and intelligent process automation.",
        officialDescription: "Other information technology and computer service activities",
        color: "from-purple-600 to-pink-500",
        icon: FiCpu,
        startingPrice: 1999,
        pricingModel: "fixed",
        portalSlug: "autonomous-ai-workflows",
        deliverables: [
            { name: "Autonomous AI Agent Fleets", desc: "Multi-agent workflows for customer support, dispatch, and triage." },
            { name: "Deterministic Enterprise RAG Pipelines", desc: "Private vector indices grounded strictly in your proprietary documentation." },
            { name: "Zero-Trust Security & mTLS Gateways", desc: "Mutual TLS cryptographic authentication and strict network boundaries." },
            { name: "AI Incident Detection & Self-Healing", desc: "AI assistants that triage alerts and run self-healing scripts." },
        ],
        techStack: ["Python", "FastAPI", "LangChain / LlamaIndex", "Qdrant / pgvector", "Claude / OpenAI", "Ollama"],
        slaMetrics: "99.5% AI Extraction Precision & Zero-Data-Retention",
        turnaround: "1 - 3 Weeks",
        compliance: "Strict Zero-Data-Retention & VPC Isolation",
        briefDetail: {
            architectureOverview: "Secure VPC-isolated AI agent architectures with strict zero-data-retention models, deterministic guardrails, semantic caching, and full audit logs.",
            enterpriseUseCases: [
                "Autonomous parsing and verification of vendor invoices and legal documents",
                "24/7 intelligent tier-1 technical support agents resolving common issues",
                "Automated infrastructure anomaly diagnosis and self-healing triage",
                "Executive briefing synthesis from distributed operational logs",
            ],
            keyBenefits: [
                "Recover hundreds of human hours monthly by automating complex repetitive tasks",
                "Sub-250ms query responses without hallucination vulnerabilities",
                "Zero risk of proprietary enterprise IP leaking into public model weights",
            ],
        },
    },
    {
        id: "nic-63119",
        nicCode: "NIC 63119",
        domain: "data",
        filterCategory: "ai",
        title: "Data Processing, ETL Pipelines & Dedicated Cloud Hosting",
        subtitle: "Scalable data engineering, high-throughput pipeline ingestion, and dedicated isolated hosting enclaves.",
        officialDescription: "Other data processing, hosting and related activities",
        color: "from-amber-600 to-orange-400",
        icon: FiDatabase,
        startingPrice: 1299,
        pricingModel: "monthly",
        portalSlug: "data-processing-cloud-hosting",
        deliverables: [
            { name: "Real-Time & Batch ETL Ingestion", desc: "Streaming pipelines processing thousands of events per second." },
            { name: "Database Clustering & Read Sharding", desc: "PostgreSQL and Redis multi-node clusters with automated failover." },
            { name: "Encrypted Isolated Hosting Enclaves", desc: "Dedicated virtual private clouds with AES-256 storage encryption." },
            { name: "Data Sanitization & Warehousing", desc: "Automated deduplication, schema normalization, and warehouse syncing." },
        ],
        techStack: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "AWS S3 / MinIO", "Python"],
        slaMetrics: "Sub-Second Query SLA & 99.99% Data Durability",
        turnaround: "1 - 2 Weeks",
        compliance: "AES-256 Encryption & Data Protection Compliance",
        briefDetail: {
            architectureOverview: "Event-stream architecture supporting tens of thousands of write events per second with automatic schema validation, deduplication, and immutable storage.",
            enterpriseUseCases: [
                "Financial transaction auditing and immutable ledger ingestion",
                "Industrial IoT sensor data aggregation and predictive analytics",
                "Centralized customer data platform (CDP) synchronization",
                "Automated daily enterprise compliance backup verification",
            ],
            keyBenefits: [
                "Eliminates internal data silos and accelerates executive reporting",
                "Ensures full compliance with strict data protection and residency regulations",
                "Ultra-scalable architecture that expands seamlessly as transaction volume grows",
            ],
        },
    },
    {
        id: "nic-63121",
        nicCode: "NIC 63121",
        domain: "portals",
        filterCategory: "ai",
        title: "Enterprise Web Portals & Semantic Search Systems",
        subtitle: "Scalable B2B customer portals, knowledge indices, and internal search systems.",
        officialDescription: "Web portals and search engine operations",
        color: "from-teal-600 to-emerald-400",
        icon: FiGlobe,
        startingPrice: 2199,
        pricingModel: "fixed",
        portalSlug: "web-portals-search-systems",
        deliverables: [
            { name: "Custom B2B Enterprise Client Portals", desc: "Secure portal for client self-service, order tracking, and billing." },
            { name: "Semantic Search & Knowledge Indexing", desc: "Instant vector and full-text search across gigabytes of documents." },
            { name: "Multi-Role RBAC & Workspace Permissions", desc: "Granular administrative control over accounts and team permissions." },
            { name: "Integrated Multi-Gateway Payments", desc: "Stripe and PayPal automated billing and invoicing." },
        ],
        techStack: ["Next.js", "Meilisearch", "Elasticsearch", "Stripe", "PayPal", "Prisma"],
        slaMetrics: "Instant Search <50ms & 100% Payment Reconciliation",
        turnaround: "2 - 4 Weeks",
        compliance: "PCI-DSS Level 1 Gateway Compliance",
        briefDetail: {
            architectureOverview: "Multi-role customer engagement portals with integrated catalog browsing, dynamic invoicing, online payments, and instant vector/full-text search.",
            enterpriseUseCases: [
                "Enterprise customer self-service portals with automated invoice generation",
                "Internal corporate knowledge bases with instant semantic search",
                "Vendor and distributor portals with automated inventory feeds",
                "B2B service subscription and recurring retainer payment systems",
            ],
            keyBenefits: [
                "Immediate self-service procurement reducing sales cycle turnaround",
                "Instant cross-platform search speeds up internal employee workflows",
                "Complete PCI-compliant payment automation across global currencies",
            ],
        },
    },
    {
        id: "nic-62020-amc",
        nicCode: "NIC 62020",
        domain: "facilities",
        filterCategory: "infra",
        title: "IT Annual Maintenance (AMC) & Facilities Management",
        subtitle: "Enterprise AMC, workstation/server fleet upkeep, preventive health drills, and IT helpdesk.",
        officialDescription: "Computer consultancy and computer facilities management activities (AMC Operations)",
        color: "from-blue-700 to-indigo-600",
        icon: FiTool,
        startingPrice: 19999,
        pricingModel: "monthly",
        portalSlug: "it-amc-facilities-management",
        deliverables: [
            { name: "Scheduled Preventive Maintenance", desc: "Periodic hardware diagnostics, thermal paste checks, and OS cleanups." },
            { name: "Break-Fix & Rapid Component Triage", desc: "Fast hardware and network fault isolation with standby unit swaps." },
            { name: "Remote Helpdesk & OS Patch Automation", desc: "Centralized patch management, antivirus definition updates, and user helpdesk." },
            { name: "Network Equipment & Rack Servicing", desc: "Switch, router, firewall, and structured cabling maintenance drills." },
        ],
        techStack: ["Remote Helpdesk RMM", "Zabbix Agent", "AnyDesk Enterprise", "Active Directory", "ManageEngine", "Fortinet"],
        slaMetrics: "<4-Hour On-Site SLA (Lucknow) & <30-Min Remote Response",
        turnaround: "Ongoing Monthly Retainer",
        compliance: "Preventive Maintenance Compliance & Asset Tagging Standards",
        briefDetail: {
            architectureOverview: "Rigorous SLA-driven facilities management spanning hardware lifecycle tracking, remote asset monitoring, scheduled preventive tune-ups, and emergency disaster recovery swaps.",
            enterpriseUseCases: [
                "Corporate office IT infrastructure & workstation fleet maintenance",
                "Educational institution and computer lab AMC management",
                "Retail POS system and branch network hardware upkeep",
                "Server room climate, UPS, and rack equipment routine inspection",
            ],
            keyBenefits: [
                "Drastically lower hardware breakdown rates via scheduled preventive checks",
                "Predictable IT OPEX budget without surprise emergency repair costs",
                "Single accountable vendor for desktops, servers, switches, and peripherals",
            ],
        },
    },
];

// Backwards-compatible export for existing components
export const serviceCategories = udyamServicesList.map((s) => ({
    title: s.title,
    icon: s.icon,
    slug: s.portalSlug,
    color: s.color,
    description: s.subtitle,
    services: s.deliverables.map((d) => ({ name: d.name, icon: s.icon })),
}));
