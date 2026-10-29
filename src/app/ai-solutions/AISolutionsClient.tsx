"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiZap,
  FiCpu,
  FiShield,
  FiCheckCircle,
  FiActivity,
  FiLayers,
  FiDatabase,
  FiTerminal,
  FiLock,
  FiSearch,
  FiSliders,
  FiShare2,
  FiTrendingUp,
  FiClock,
  FiFileText,
  FiChevronDown,
  FiCheck,
  FiRefreshCw
} from "react-icons/fi";
import { FaRobot, FaBrain, FaServer, FaNetworkWired } from "react-icons/fa";
import SpotlightCard from "@/components/ui/SpotlightCard";

// ─── 1. Interactive Architecture Pipelines ───
interface PipelineStep {
  name: string;
  role: string;
  tech: string;
  latency: string;
  security: string;
  detail: string;
}

interface PipelineWorkflow {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  icon: typeof FiCpu;
  p99Latency: string;
  securityGuarantee: string;
  steps: PipelineStep[];
}

const PIPELINE_WORKFLOWS: PipelineWorkflow[] = [
  {
    id: "rag",
    title: "Private Enterprise RAG & Hybrid Vector Search",
    subtitle: "Deterministic domain retrieval with zero hallucinations and air-gapped data boundaries",
    badge: "Vector DB + Hybrid Search",
    color: "from-cyan-500 to-blue-500",
    icon: FiDatabase,
    p99Latency: "180ms",
    securityGuarantee: "Zero Data Training Guarantee (Strict VPC Isolation)",
    steps: [
      {
        name: "1. Multi-Modal Ingestion",
        role: "Data Extraction",
        tech: "Unstructured / PyMuPDF",
        latency: "45ms",
        security: "TLS 1.3 In-Flight",
        detail: "Extracts unstructured text, tables, and schematics from PDFs, ERP dumps, and SQL databases without loss of relational context."
      },
      {
        name: "2. Dense + Sparse Chunking",
        role: "Semantic Embedding",
        tech: "BGE-M3 + BM25 Hybrid",
        latency: "35ms",
        security: "Local SHA-256 Hashing",
        detail: "Generates 1024-dimension dense semantic vectors alongside exact-keyword lexical indices for hybrid dual-retrieval."
      },
      {
        name: "3. Vector Index & Reranking",
        role: "Context Retrieval",
        tech: "Qdrant / pgvector + Cohere",
        latency: "50ms",
        security: "Role-Based ACL Masking",
        detail: "HNSW graph search performs sub-50ms nearest neighbor queries, reranked by cross-encoders to eliminate extraneous context."
      },
      {
        name: "4. Guardrailed Generation",
        role: "Inference Execution",
        tech: "DeepSeek-R1 / Claude 3.5",
        latency: "50ms",
        security: "Zero Data Retention API",
        detail: "Context-grounded prompt template generates cited, deterministic answers with automated NeMo guardrail checks."
      }
    ]
  },
  {
    id: "mcp-agents",
    title: "Autonomous Multi-Agent Fleets (MCP Protocol)",
    subtitle: "Coordinated subagent task execution with reflection loops and standard tool interfaces",
    badge: "Model Context Protocol",
    color: "from-indigo-500 to-purple-500",
    icon: FaRobot,
    p99Latency: "420ms",
    securityGuarantee: "Least-Privilege Token Scoping & Sandboxed Execution",
    steps: [
      {
        name: "1. Orchestrator Decomposition",
        role: "Planning & Triage",
        tech: "LangGraph / Supervisor",
        latency: "60ms",
        security: "Signed JWT Tokens",
        detail: "Analyzes high-level enterprise goals, validates permissions, and splits workflows into concurrent subagent dependency DAGs."
      },
      {
        name: "2. MCP Tool Registry Dispatch",
        role: "Protocol Bridge",
        tech: "Model Context Protocol (MCP)",
        latency: "25ms",
        security: "Mutual TLS + Schema Audit",
        detail: "Invokes sandboxed MCP microservices across databases, internal REST APIs, filesystem tools, and external services."
      },
      {
        name: "3. Subagent Parallel Execution",
        role: "Worker Execution",
        tech: "Python Isolation Workers",
        latency: "260ms",
        security: "Ephemeral Container Shell",
        detail: "Specialized agents for Database querying, Financial analytics, and Code verification execute in isolated execution environments."
      },
      {
        name: "4. Critique & Synthesis",
        role: "Verification Loop",
        tech: "Reflection Guardrails",
        latency: "75ms",
        security: "Deterministic Validation",
        detail: "Cross-checks subagent outputs against source schemas, validates numerical consistency, and produces structured deliverables."
      }
    ]
  },
  {
    id: "on-prem-slm",
    title: "On-Premise & Air-Gapped SLM/LLM Inference",
    subtitle: "Private small language models hosted on your bare-metal GPUs with zero internet dependency",
    badge: "Bare-Metal vLLM",
    color: "from-amber-500 to-orange-500",
    icon: FaServer,
    p99Latency: "85ms",
    securityGuarantee: "100% Offline Air-Gapped (Zero Outbound Packets)",
    steps: [
      {
        name: "1. Internal Query Gateway",
        role: "Network Ingress",
        tech: "NGINX + Envoy Proxy",
        latency: "5ms",
        security: "Internal Subnet Only",
        detail: "Routes internal LAN / intranet queries to the GPU inference cluster with rate limiting and enterprise LDAP / SSO auth."
      },
      {
        name: "2. High-Throughput Engine",
        role: "Tensor Acceleration",
        tech: "vLLM / TensorRT-LLM",
        latency: "15ms",
        security: "PagedAttention Memory",
        detail: "Continuous batching and PagedAttention memory management maximize token throughput across private NVIDIA RTX 6000 or A100 GPUs."
      },
      {
        name: "3. Quantized Model Inference",
        role: "Weights Execution",
        tech: "DeepSeek-R1 / Llama 3.3 AWQ",
        latency: "55ms",
        security: "Encrypted Weight Volumes",
        detail: "4-bit / 8-bit quantized models run at sub-millisecond latencies, delivering frontier reasoning on cost-effective hardware."
      },
      {
        name: "4. Local Semantic Cache",
        role: "Acceleration",
        tech: "Redis Semantic Cache",
        latency: "10ms",
        security: "In-Memory Ephemeral",
        detail: "Caches recurrent organizational queries at 95%+ vector similarity, serving instant sub-10ms responses without re-running models."
      }
    ]
  },
  {
    id: "aiops",
    title: "Autonomous SRE & Self-Healing Infrastructure",
    subtitle: "Real-time log telemetry parsing, incident root-cause triage, and automated runbook fixes",
    badge: "AIOps Auto-Remediation",
    color: "from-emerald-500 to-teal-500",
    icon: FiActivity,
    p99Latency: "14ms",
    securityGuarantee: "Immutable Audit Trails & Dual-Approval Escalation",
    steps: [
      {
        name: "1. Telemetry Ingestion",
        role: "Event Probe",
        tech: "Zabbix / Prometheus Webhooks",
        latency: "2ms",
        security: "HMAC Signed Webhooks",
        detail: "Captures CPU spikes, connection pool deadlocks, memory exhaustion, and latency anomalies across 5,000+ monitored servers."
      },
      {
        name: "2. Log Embedding Classifier",
        role: "Incident Triage",
        tech: "FastAPI + Embedding Matrix",
        latency: "4ms",
        security: "Local Classification",
        detail: "Correlates stack traces against historical post-mortems and runbooks, classifying root cause with 99.4% precision in milliseconds."
      },
      {
        name: "3. Autonomous Remediation",
        role: "Runbook Execution",
        tech: "Ansible / Bash / Docker API",
        latency: "6ms",
        security: "Restricted Sudo Sandboxing",
        detail: "Executes verified remediation scripts: gracefully flushes cache, restarts stalled microservices, or fails over read-replicas."
      },
      {
        name: "4. Notification & Log Archival",
        role: "Audit Log",
        tech: "Telegram / Slack Webhooks",
        latency: "2ms",
        security: "Tamper-Proof Audit Log",
        detail: "Dispatches comprehensive post-incident executive summaries to engineering channels with exact timing and telemetry diffs."
      }
    ]
  }
];

// ─── 2. Six Core Enterprise Domains ───
const ENTERPRISE_CAPABILITIES = [
  {
    id: "agents",
    title: "Autonomous Multi-Agent Fleets & MCP Protocol",
    domain: "Orchestration & Automation",
    badge: "Model Context Protocol",
    icon: FaRobot,
    accent: "from-indigo-500/20 to-purple-500/10 border-indigo-500/30",
    iconColor: "text-indigo-400",
    description:
      "Deploy self-directed fleets of specialized subagents communicating via Anthropic's Model Context Protocol (MCP). Agents plan, query databases, execute code, verify results, and collaborate autonomously.",
    deliverables: [
      "Custom MCP servers connecting databases, file stores & ERP systems",
      "Hierarchical Supervisor-Worker agent topologies with reflection loops",
      "Dynamic prompt routing with deterministic output validation schemas",
      "Enterprise audit ledger logging every tool execution and rationale"
    ],
    tech: ["MCP Protocol", "LangGraph", "Python 3.12", "FastAPI", "Docker Sandbox"],
    benchmark: "70% Faster Complex Workflows • Zero Manual Data Entry"
  },
  {
    id: "rag",
    title: "Enterprise RAG & Hybrid Vector Databases",
    domain: "Knowledge & Information Retrieval",
    badge: "Dense + Sparse Vector Search",
    icon: FiDatabase,
    accent: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30",
    iconColor: "text-cyan-400",
    description:
      "Transform static corporate documentation, contracts, tickets, and knowledge bases into a live neural retrieval index. Combines dense semantic embeddings with lexical BM25 search for precise context injection.",
    deliverables: [
      "Hybrid retrieval architecture using Qdrant or pgvector with HNSW indexing",
      "Cross-encoder reranking layers eliminating irrelevant context and hallucinations",
      "Document chunking strategies preserving tables, hierarchies, and footnotes",
      "Row-level security (RLS) ensuring employees only retrieve authorized data"
    ],
    tech: ["Qdrant", "pgvector", "BGE-M3", "Cohere Rerank", "Unstructured.io"],
    benchmark: "99.2% Retrieval Precision • Sub-60ms Vector Query Latency"
  },
  {
    id: "on-prem",
    title: "On-Premise & Air-Gapped SLM/LLM Inference",
    domain: "Sovereign & Private Compute",
    badge: "Air-Gapped Sovereign AI",
    icon: FaServer,
    accent: "from-amber-500/20 to-orange-500/10 border-amber-500/30",
    iconColor: "text-amber-400",
    description:
      "Operate state-of-the-art reasoning models (DeepSeek-R1, Llama 3.3, Mistral) strictly within your firewall or private cloud VPC. Eliminate data exfiltration risks and predictable monthly token bills.",
    deliverables: [
      "High-throughput inference deployment via vLLM and TensorRT-LLM",
      "Quantization optimization (AWQ / GGUF) for maximum tokens/watt",
      "Zero outbound network connection guarantees for defense & medical compliance",
      "Local semantic caching layer delivering sub-15ms cached responses"
    ],
    tech: ["vLLM", "DeepSeek-R1", "Llama 3.3", "TensorRT", "Ollama Cluster"],
    benchmark: "100% Data Sovereignty • Zero Outbound Cloud API Calls"
  },
  {
    id: "aiops",
    title: "AIOps & Self-Healing Cloud Infrastructure",
    domain: "Automated SRE & Telemetry",
    badge: "Autonomous IT Incident Response",
    icon: FiActivity,
    accent: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30",
    iconColor: "text-emerald-400",
    description:
      "End server firefighting. Our AIOps agents ingest real-time telemetry from Zabbix, Prometheus, and syslog streams, instantly diagnosing root causes and running approved self-healing runbooks in milliseconds.",
    deliverables: [
      "Zero-latency anomaly detection and automated log clustering",
      "Autonomous remediation scripts for connection pool, disk, and memory stalls",
      "AI-generated root-cause post-mortems dispatched directly to Slack / Telegram",
      "Predictive capacity forecasting warning of resource bottlenecks weeks in advance"
    ],
    tech: ["Zabbix API", "Prometheus", "FastAPI", "Ansible", "Telegram Bot API"],
    benchmark: "99.99% Production Uptime • 14ms Median Remediation"
  },
  {
    id: "erp-crm",
    title: "Legacy ERP, CRM & Database AI Connectors",
    domain: "Systems Integration",
    badge: "Deterministic Function Calling",
    icon: FiLayers,
    accent: "from-sky-500/20 to-cyan-500/10 border-sky-500/30",
    iconColor: "text-sky-400",
    description:
      "Bridge your legacy SQL databases, SAP, Tally Prime, Oracle, and Salesforce with natural language interfaces. Strict JSON Schema validation prevents invalid queries and protects transactional state.",
    deliverables: [
      "Deterministic Text-to-SQL generation with schema grounding and write-locks",
      "Automated invoice, PO, and delivery challan reconciliation into Tally & SAP",
      "Bi-directional REST and webhook bridges for automated ticket fulfillment",
      "Comprehensive data sanitization stripping PII and financial card credentials"
    ],
    tech: ["PostgreSQL", "SAP BAPI", "Tally XML", "RESTful Webhooks", "Zod Validation"],
    benchmark: "98.7% Data Reconciliation Accuracy • 10x Invoice Speed"
  },
  {
    id: "fine-tuning",
    title: "Custom Domain Fine-Tuning & Quantization",
    domain: "Specialized Intelligence",
    badge: "LoRA / QLoRA Parameter Adaptation",
    icon: FaBrain,
    accent: "from-violet-500/20 to-fuchsia-500/10 border-violet-500/30",
    iconColor: "text-violet-400",
    description:
      "When off-the-shelf models fail at your industry nomenclature, we curate synthetic datasets, fine-tune open weights using LoRA/QLoRA, and evaluate performance using rigorous automated LLM-as-a-judge benchmarks.",
    deliverables: [
      "Domain dataset curation, cleaning, deduplication, and synthetic augmentation",
      "Parameter-efficient fine-tuning (PEFT / LoRA) preventing catastrophic forgetting",
      "Automated evaluation suites measuring precision, recall, and toxicity guardrails",
      "Custom tokenizer tuning for industry-specific terminology and codebases"
    ],
    tech: ["PyTorch", "Hugging Face", "LoRA / QLoRA", "Unsloth", "DeepEval"],
    benchmark: "3.2x Domain Accuracy Lift • 4x Smaller Footprint"
  }
];

// ─── 3. Enterprise Tech Ecosystem ───
const TECH_ECOSYSTEM = [
  {
    category: "Foundational & Reasoning Models",
    items: ["DeepSeek-R1", "Llama 3.3 70B", "Claude 3.5 Sonnet", "GPT-4o", "Mistral Large", "Qwen 2.5"]
  },
  {
    category: "Agentic & Protocol Frameworks",
    items: ["Model Context Protocol (MCP)", "LangGraph", "LlamaIndex", "CrewAI", "AutoGen", "FastAPI"]
  },
  {
    category: "Vector Databases & Search",
    items: ["Qdrant", "PostgreSQL / pgvector", "Milvus", "ChromaDB", "BM25 Hybrid", "Cohere Rerank"]
  },
  {
    category: "Inference & GPU Acceleration",
    items: ["vLLM Engine", "TensorRT-LLM", "Ollama Enterprise", "Triton Server", "NVIDIA CUDA", "PagedAttention"]
  },
  {
    category: "Guardrails & Observability",
    items: ["Langfuse", "Arize Phoenix", "NeMo Guardrails", "Llama Guard", "Zod Schemas", "OpenTelemetry"]
  }
];

// ─── 4. Real-World Case Studies ───
const CASE_STUDIES = [
  {
    client: "Global Aviation Logistics (Swissport Cargo Ecosystem)",
    title: "Autonomous Airway Bill & Cargo Manifest Extraction",
    problem: "Manual transcription of multi-lingual customs documents and airway bills created 4-hour flight manifest bottlenecks.",
    solution: "Deployed private RAG pipeline with zero-shot NER and automated ERP sync directly into dispatch databases.",
    results: ["92% turnaround time compression", "99.7% extraction accuracy", "Zero human data-entry backlog"]
  },
  {
    client: "Industrial Gas Manufacturing (Air Liquide Telemetry)",
    title: "24/7 Plant Telemetry Anomaly Detection & Auto-Remediation",
    problem: "Sensor fluctuations across 1,200 industrial cryogenic pumps required continuous monitoring to prevent plant shutdowns.",
    solution: "Integrated AIOps agent analyzing real-time Zabbix telemetry streams with autonomous runbook remediation.",
    results: ["100% unassisted incident resolution", "Sub-20ms anomaly detection", "Zero unplanned plant downtime"]
  },
  {
    client: "Fintech Quantitative Execution (Tradeboard Algo)",
    title: "Sub-Millisecond Algorithmic Options Analytics Engine",
    problem: "High-frequency options Greek calculations and broker order routing suffered latency jitter on public cloud APIs.",
    solution: "Architected a local ZeroMQ high-speed message bus and Python isolation strategy host for 34+ Indian brokers.",
    results: ["Sub-15ms Greek calculation", "₹1 Crore sandbox verification", "34+ broker unified REST integration"]
  }
];

// ─── 5. Frequently Asked Questions (SEO-Indexed) ───
const FAQS = [
  {
    question: "How does Softcorp prevent enterprise confidential data from training public AI models?",
    answer:
      "We operate under a strict Zero-Data-Retention architecture. For cloud models (like Claude or GPT-4o), we configure zero-retention enterprise API endpoints with cryptographically bound compliance agreements. Furthermore, for banking, healthcare, and defense clients, we deploy 100% air-gapped on-premise models (DeepSeek-R1, Llama 3.3) hosted on your private bare-metal GPUs with zero outbound internet connections."
  },
  {
    question: "What is Model Context Protocol (MCP) and why is it superior to custom API scripts?",
    answer:
      "Model Context Protocol (MCP) is the emerging open standard for connecting AI models to external tools and data sources. Instead of writing brittle, custom API wrappers for every database and tool, MCP establishes an isolated, typed protocol layer. This allows our autonomous agents to inspect tools dynamically, request permissions, execute sandboxed actions, and maintain strict security boundaries with full auditability."
  },
  {
    question: "Can we deploy AI architectures completely on-premise without cloud internet access?",
    answer:
      "Yes. Softcorp specializes in sovereign, air-gapped on-premise deployments. We install and configure dedicated GPU inference clusters using vLLM and TensorRT-LLM on your bare-metal servers or private VPCs. Your models, vector databases (Qdrant/pgvector), and application code run entirely on your local network with zero external dependencies."
  },
  {
    question: "How does Retrieval-Augmented Generation (RAG) eliminate hallucinations for business documents?",
    answer:
      "Traditional LLMs guess answers based on broad training data. RAG forces the model to act as a pure reader: it first searches your vector database for the exact, authoritative text passages relevant to the user query, and then instructs the model to answer using ONLY the retrieved context. With cross-encoder rerankers and citation guardrails, if the answer is not in your documents, the system deterministically replies that information is unavailable rather than fabricating facts."
  },
  {
    question: "What hardware is required to run frontier private models like DeepSeek-R1 or Llama 3?",
    answer:
      "With modern 4-bit and 8-bit AWQ quantization and vLLM PagedAttention, a single enterprise workstation with an NVIDIA RTX 6000 Ada (48GB VRAM) or two RTX 4090s can comfortably host a 70B parameter model at 30+ tokens/second. For multi-thousand user enterprise clusters, we architect multi-GPU nodes (NVIDIA A100/H100) with sub-second failover and load balancing."
  },
  {
    question: "What is the typical timeline and engagement model for an enterprise AI deployment?",
    answer:
      "A standard engagement starts with a 1-week Architecture Discovery and PoC roadmap. Production deployment of a Private RAG or Autonomous MCP Agent pipeline typically takes 2 to 4 weeks, including data connector integration, vector database indexing, security testing, and staff training. Ongoing enterprise maintenance and model upgrades are supported via our monthly Retainer/AMC model."
  }
];

export default function AISolutionsClient() {
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>("rag");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  // ROI Calculator State
  const [documentVolume, setDocumentVolume] = useState<number>(25000);
  const [teamSize, setTeamSize] = useState<number>(8);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");

  const activeWorkflow = PIPELINE_WORKFLOWS.find((w) => w.id === activeWorkflowId) || PIPELINE_WORKFLOWS[0];

  // Calculations for ROI Calculator
  const hoursPerDoc = 0.15; // ~9 minutes per manual document review/triage
  const totalManualHours = Math.round(documentVolume * hoursPerDoc);
  const automatedHours = Math.round(totalManualHours * 0.88); // 88% automation rate
  const hourlyRateUSD = 32;
  const hourlyRateINR = 850;
  const annualSavingsUSD = Math.round(automatedHours * hourlyRateUSD * 12);
  const annualSavingsINR = Math.round(automatedHours * hourlyRateINR * 12);
  const responseTimeBefore = "3.8 Hours";
  const responseTimeAfter = "38 Seconds";

  return (
    <div className="min-h-screen pt-28 pb-24 font-sans antialiased text-white selection:bg-cyan-500/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono uppercase tracking-wider"
          >
            <FiArrowLeft size={14} /> Back to Overview
          </Link>
        </motion.div>

        {/* ─── Hero Section ─── */}
        <div className="max-w-4xl mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 font-mono text-xs uppercase tracking-wider shadow-sm"
          >
            <FiZap className="animate-spin-slow" />
            <span>Govt. MSME Certified Enterprise AI Modernization</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-bold">Zero Data Leakage Guarantee</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Autonomous Multi-Agent Fleets &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              Private Enterprise AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal max-w-3xl"
          >
            Softcorp architects air-gapped, zero-hallucination AI pipelines for enterprise operations. 
            We integrate <strong className="text-white font-semibold">Model Context Protocol (MCP) agents</strong>, 
            hybrid vector search (RAG), and private bare-metal SLM inference directly into your SQL, ERP, and cloud infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-slate-950 flex items-center gap-2 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all shine-sweep cursor-pointer"
            >
              <span>Schedule Architecture Discovery</span>
              <FiArrowRight size={16} />
            </Link>
            <a
              href="#pipeline-simulator"
              className="py-3.5 px-6 rounded-xl font-semibold text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <FiCpu className="text-cyan-400" />
              <span>Simulate Live Pipeline</span>
            </a>
          </motion.div>

          {/* Hero Performance Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10"
          >
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xs text-slate-400 font-mono uppercase">Retrieval Precision</div>
              <div className="text-2xl font-extrabold text-cyan-400 mt-1">99.4%</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Dual-Stage Reranked</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xs text-slate-400 font-mono uppercase">P99 Inference Latency</div>
              <div className="text-2xl font-extrabold text-emerald-400 mt-1">&lt; 180ms</div>
              <div className="text-[11px] text-slate-500 mt-0.5">PagedAttention vLLM</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xs text-slate-400 font-mono uppercase">Data Privacy</div>
              <div className="text-2xl font-extrabold text-white mt-1">0% Leakage</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Air-Gapped & Ephemeral</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <div className="text-xs text-slate-400 font-mono uppercase">Systems Integrated</div>
              <div className="text-2xl font-extrabold text-indigo-400 mt-1">34+ Brokers/ERPs</div>
              <div className="text-[11px] text-slate-500 mt-0.5">SAP, Tally, PostgreSQL</div>
            </div>
          </motion.div>
        </div>

        {/* ─── Interactive Feature 1: Live Architecture Pipeline Simulator ─── */}
        <section id="pipeline-simulator" className="mb-28 pt-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Interactive Architectural Simulator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Pipeline Execution in <span className="gradient-text-animated">Real-Time</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Select an enterprise architecture below to simulate data ingress, vector tokenization, 
              sandboxed tool-dispatch, and zero-hallucination inference.
            </p>
          </div>

          {/* Workflow Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {PIPELINE_WORKFLOWS.map((workflow) => {
              const isActive = workflow.id === activeWorkflowId;
              const Icon = workflow.icon;
              return (
                <button
                  key={workflow.id}
                  onClick={() => {
                    setActiveWorkflowId(workflow.id);
                    setActiveStepIndex(0);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 scale-[1.02]"
                      : "bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10"
                  }`}
                >
                  <Icon size={14} />
                  <span>{workflow.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Workflow Interactive Display */}
          <SpotlightCard className="p-6 sm:p-8 border-cyan-500/30 bg-slate-900/90">
            {/* Pipeline Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    {activeWorkflow.badge}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Operational Pipeline
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activeWorkflow.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {activeWorkflow.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-4 shrink-0 bg-slate-950/80 p-3 rounded-xl border border-white/5 text-xs font-mono">
                <div>
                  <div className="text-slate-500 text-[10px]">P99 Budget</div>
                  <div className="text-emerald-400 font-bold text-sm">{activeWorkflow.p99Latency}</div>
                </div>
                <div className="w-px h-8 bg-white/10"></div>
                <div>
                  <div className="text-slate-500 text-[10px]">Data Boundary</div>
                  <div className="text-cyan-400 font-bold text-sm">VPC Isolated</div>
                </div>
              </div>
            </div>

            {/* Pipeline Step Flow (Horizontal Interactive Nodes) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
              {activeWorkflow.steps.map((step, sIdx) => {
                const isSelected = sIdx === activeStepIndex;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setActiveStepIndex(sIdx)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer relative ${
                      isSelected
                        ? "bg-cyan-500/10 border-cyan-400 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                        : "bg-slate-950/60 border-white/5 hover:border-white/20 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                      <span className={isSelected ? "text-cyan-400 font-bold" : ""}>
                        Step 0{sIdx + 1}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-emerald-400 border border-white/5">
                        {step.latency}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white tracking-tight mb-1">
                      {step.name}
                    </h4>

                    <div className="text-xs text-slate-400 font-mono mb-2">
                      {step.tech}
                    </div>

                    <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                      {step.detail}
                    </p>

                    {isSelected && (
                      <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rotate-45 rounded-sm"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step Detail Deep Dive */}
            <div className="p-5 rounded-xl bg-slate-950/90 border border-cyan-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                  <FiTerminal />
                  <span>Inspecting Node: {activeWorkflow.steps[activeStepIndex].name}</span>
                </div>
                <p className="text-sm text-slate-200 max-w-3xl leading-relaxed">
                  {activeWorkflow.steps[activeStepIndex].detail}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right text-xs">
                  <div className="text-slate-500 font-mono text-[10px]">Compliance Security</div>
                  <div className="text-emerald-400 font-semibold">{activeWorkflow.steps[activeStepIndex].security}</div>
                </div>
                <Link
                  href="/contact"
                  className="py-2 px-3.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Deploy Spec</span>
                  <FiArrowRight size={13} />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ─── Feature 2: Six Core Enterprise AI Capabilities ─── */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Core Enterprise Competencies
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Disciplined Engineering, <span className="gradient-text-animated">Zero Guesswork</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Every system is engineered with deterministic guardrails, structured JSON schema outputs, 
              and strict data-sovereign boundaries certified for enterprise workloads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENTERPRISE_CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <SpotlightCard
                  key={cap.id}
                  className="p-7 flex flex-col justify-between border-white/10 hover:border-cyan-500/40 transition-all duration-300"
                  spotlightColor="rgba(6, 182, 212, 0.15)"
                >
                  <div className="space-y-4">
                    {/* Header Row */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 truncate">
                        {cap.badge}
                      </span>
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-white/5 ${cap.iconColor}`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                      {cap.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Deliverables */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Production Deliverables
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {cap.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <FiCheck className="text-cyan-400 shrink-0 mt-0.5 text-xs" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: Tech Stack & Metric */}
                  <div className="pt-5 mt-6 border-t border-white/10 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cap.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 pt-1">
                      <FiTrendingUp className="shrink-0" />
                      <span className="truncate">{cap.benchmark}</span>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* ─── Interactive Feature 3: Enterprise ROI & Efficiency Calculator ─── */}
        <section className="mb-28">
          <SpotlightCard className="p-8 sm:p-12 border-cyan-500/30 bg-gradient-to-br from-slate-900/95 via-slate-950 to-slate-900">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Sliders & Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2">
                    Executive ROI Estimator
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Quantify Your Operational <span className="gradient-text-animated">Throughput Gain</span>
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1">
                    Adjust your monthly operational triage volume and team size to model hours saved, OPEX reduction, and latency compression.
                  </p>
                </div>

                {/* Slider 1: Document / Triage Volume */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Monthly Document / Transaction Volume:</span>
                    <span className="text-cyan-400 font-bold text-sm">
                      {documentVolume.toLocaleString()} units/mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={150000}
                    step={1000}
                    value={documentVolume}
                    onChange={(e) => setDocumentVolume(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2,000</span>
                    <span>50,000</span>
                    <span>150,000+</span>
                  </div>
                </div>

                {/* Slider 2: Operations Team Size */}
                <div className="space-y-2 p-4 rounded-xl bg-slate-950/80 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Operations & Triage Team Members:</span>
                    <span className="text-emerald-400 font-bold text-sm">
                      {teamSize} Engineers / Analysts
                    </span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={40}
                    step={1}
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2 Members</span>
                    <span>20 Members</span>
                    <span>40+ Members</span>
                  </div>
                </div>

                {/* Currency Switcher */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-xs text-slate-400 font-mono">Display Currency:</span>
                  <div className="inline-flex rounded-lg bg-slate-950 border border-white/10 p-0.5">
                    <button
                      type="button"
                      onClick={() => setCurrency("USD")}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                        currency === "USD"
                          ? "bg-cyan-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      $ USD
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrency("INR")}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                        currency === "INR"
                          ? "bg-cyan-500 text-slate-950"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      ₹ INR
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Reactive ROI Scorecard */}
              <div className="lg:col-span-5 bg-slate-950/90 p-6 sm:p-8 rounded-2xl border border-cyan-500/40 space-y-5 shadow-2xl">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center justify-between">
                  <span>Projected Annual Savings</span>
                  <span className="text-emerald-400">88% Automation</span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white">
                  {currency === "USD"
                    ? `$${annualSavingsUSD.toLocaleString()} USD`
                    : `₹${(annualSavingsINR / 100000).toFixed(1)} Lakhs INR`}
                  <span className="text-xs text-slate-400 block font-normal mt-0.5">
                    estimated annual direct operational cost avoidance
                  </span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FiClock className="text-cyan-400" /> Reclaimed Engineering Time:
                    </span>
                    <span className="text-white font-mono font-bold">
                      {automatedHours.toLocaleString()} hrs / month
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FiTrendingUp className="text-emerald-400" /> Response Time Compression:
                    </span>
                    <span className="text-emerald-400 font-mono font-bold">
                      {responseTimeBefore} → {responseTimeAfter}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <FiCheckCircle className="text-amber-400" /> Payback Amortization:
                    </span>
                    <span className="text-amber-300 font-mono font-bold">
                      &lt; 45 Calendar Days
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-teal-400 hover:brightness-110 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all text-center cursor-pointer mt-4"
                >
                  <span>Request Validated Business Case</span>
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </section>

        {/* ─── Feature 4: Enterprise Tech Stack & Model Ecosystem ─── */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Battle-Tested Tooling
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Ecosystem & <span className="gradient-text-animated">Model Compatibility</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We build using open standards, preventing proprietary vendor lock-in. 
              Seamlessly swap weights, vector engines, or inference backends with zero downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECH_ECOSYSTEM.map((eco, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 transition-colors space-y-4"
              >
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  {eco.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {eco.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 border border-white/10 flex items-center gap-1.5 hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Feature 5: Real-World Case Studies ─── */}
        <section className="mb-28">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Field Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proven in High-Stakes <span className="gradient-text-animated">Enterprise Environments</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Real results from global logistics hubs, industrial cryogenic gas plants, and high-frequency fintech systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, idx) => (
              <SpotlightCard
                key={idx}
                className="p-7 flex flex-col justify-between border-white/10 hover:border-cyan-500/30"
                spotlightColor="rgba(6, 182, 212, 0.12)"
              >
                <div className="space-y-4">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">
                    {study.client}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {study.title}
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-rose-400 font-bold block text-[10px] uppercase font-mono">Bottleneck</span>
                      <p className="text-slate-400 leading-relaxed mt-0.5">{study.problem}</p>
                    </div>
                    <div>
                      <span className="text-cyan-400 font-bold block text-[10px] uppercase font-mono">Softcorp Solution</span>
                      <p className="text-slate-300 leading-relaxed mt-0.5">{study.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 space-y-2">
                  <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                    Measured Outcomes:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-200">
                    {study.results.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-center gap-1.5 font-medium">
                        <FiCheck className="text-emerald-400 shrink-0 text-xs" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ─── Feature 6: Search-Engine-Optimized Enterprise FAQ ─── */}
        <section className="mb-28 max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              Frequently Addressed Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise AI Security, Governance & <span className="gradient-text-animated">Deployment</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Clear answers to core technical, compliance, and architectural considerations for corporate leadership.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="font-bold text-sm sm:text-base text-white tracking-tight">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`shrink-0 text-cyan-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── Final Executive Call-To-Action ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-blue-950/40 border border-cyan-500/40 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 relative z-10 text-white tracking-tight">
            Ready to Modernize Your Operations with <span className="gradient-text-animated">Softcorp AI</span>?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Schedule an executive architecture discovery call with Rajeev Upadhyay and our solutions engineering team. 
            We will review your databases, workflow bottlenecks, and provide an initial technical PoC roadmap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 text-slate-950 font-bold text-sm rounded-xl hover:brightness-110 shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 shine-sweep cursor-pointer"
            >
              <span>Book Architecture Discovery</span>
              <FiArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Commercial Software Suite</span>
              <FiArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
