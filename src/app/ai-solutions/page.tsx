import type { Metadata } from "next";
import AISolutionsClient from "./AISolutionsClient";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions, Autonomous Multi-Agent Systems & Private RAG | Softcorp Group",
  description:
    "Government of India Certified MSME (UDYAM-UP-50-0298723) Enterprise AI Solutions Architect. Deploy autonomous multi-agent fleets via Model Context Protocol (MCP), private RAG vector search (Qdrant/pgvector), and sovereign on-premise SLM inference (DeepSeek-R1, Llama 3) with zero data retention.",
  keywords: [
    "Enterprise AI Solutions",
    "Autonomous AI Agents",
    "Model Context Protocol",
    "MCP Protocol",
    "Private RAG Architecture",
    "On-Premise LLM Deployment",
    "DeepSeek R1 Enterprise",
    "Llama 3.3 Enterprise",
    "Vector Database Qdrant pgvector",
    "AIOps Self-Healing Infrastructure",
    "Enterprise AI Modernization",
    "Zero Data Retention AI",
    "Softcorp Group AI",
    "Rajeev Upadhyay AI Architect"
  ],
  alternates: {
    canonical: "/ai-solutions"
  },
  openGraph: {
    title: "Enterprise AI Solutions, Multi-Agent Systems & Private RAG | Softcorp Group",
    description:
      "Govt. MSME Certified Enterprise AI Modernization. Custom multi-agent fleets, Model Context Protocol (MCP), private vector RAG, and on-premise SLM inference with zero data leakage.",
    url: "https://wesoftcorp.com/ai-solutions",
    siteName: "SOFTCORP GROUP",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise AI Solutions & Autonomous Multi-Agent Architecture | Softcorp Group",
    description:
      "Govt. MSME Certified Enterprise AI Modernization. Private RAG vector pipelines, MCP multi-agent fleets, and air-gapped on-premise SLM inference.",
    creator: "@rajeevrockstar"
  }
};

// ─── JSON-LD Structured Data for Maximum Search Engine Indexing ───
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://wesoftcorp.com/ai-solutions#webpage",
      "url": "https://wesoftcorp.com/ai-solutions",
      "name": "Enterprise AI Solutions & Autonomous Multi-Agent Systems | Softcorp Group",
      "description":
        "Government-certified MSME AI solutions architect. Custom enterprise LLM orchestration, Model Context Protocol (MCP), private RAG vector pipelines, on-premise SLMs, and autonomous workflows.",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://wesoftcorp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Solutions",
            "item": "https://wesoftcorp.com/ai-solutions"
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://wesoftcorp.com/ai-solutions#service-mcp-agents",
      "name": "Autonomous Multi-Agent Fleets & Model Context Protocol (MCP) Orchestration",
      "provider": {
        "@type": "Organization",
        "name": "Softcorp Group LLC",
        "url": "https://wesoftcorp.com",
        "identifier": "UDYAM-UP-50-0298723"
      },
      "serviceType": "Autonomous Agent Systems & Tool-Calling Integration",
      "areaServed": "Global",
      "description":
        "Architecting and deploying self-directed fleets of specialized subagents communicating via Anthropic Model Context Protocol (MCP) with reflection loops and deterministic schemas."
    },
    {
      "@type": "Service",
      "@id": "https://wesoftcorp.com/ai-solutions#service-rag",
      "name": "Private Enterprise RAG & Hybrid Vector Retrieval Pipelines",
      "provider": {
        "@type": "Organization",
        "name": "Softcorp Group LLC",
        "url": "https://wesoftcorp.com"
      },
      "serviceType": "Information Retrieval & Knowledge Engineering",
      "areaServed": "Global",
      "description":
        "Dense vector embeddings (BGE-M3) combined with lexical BM25 search, HNSW indexing on Qdrant/pgvector, and cross-encoder rerankers to eliminate model hallucinations."
    },
    {
      "@type": "Service",
      "@id": "https://wesoftcorp.com/ai-solutions#service-onprem",
      "name": "Air-Gapped On-Premise SLM & LLM High-Throughput Inference",
      "provider": {
        "@type": "Organization",
        "name": "Softcorp Group LLC",
        "url": "https://wesoftcorp.com"
      },
      "serviceType": "Sovereign AI Infrastructure",
      "areaServed": "Global",
      "description":
        "Bare-metal GPU deployment of DeepSeek-R1, Llama 3.3, and Mistral using vLLM and TensorRT-LLM with PagedAttention and zero outbound internet connectivity."
    },
    {
      "@type": "FAQPage",
      "@id": "https://wesoftcorp.com/ai-solutions#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Softcorp prevent enterprise confidential data from training public AI models?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We operate under a strict Zero-Data-Retention architecture. For cloud models, we configure zero-retention enterprise API endpoints with cryptographically bound compliance agreements. For banking, healthcare, and defense clients, we deploy 100% air-gapped on-premise models (DeepSeek-R1, Llama 3.3) hosted on private bare-metal GPUs with zero outbound internet connections."
          }
        },
        {
          "@type": "Question",
          "name": "What is Model Context Protocol (MCP) and why is it superior to custom API scripts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Model Context Protocol (MCP) is the emerging open standard for connecting AI models to external tools and data sources. Instead of writing brittle custom API wrappers, MCP establishes an isolated, typed protocol layer allowing autonomous agents to inspect tools dynamically, request permissions, and execute sandboxed actions with full auditability."
          }
        },
        {
          "@type": "Question",
          "name": "Can we deploy AI architectures completely on-premise without cloud internet access?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Softcorp specializes in sovereign, air-gapped on-premise deployments. We install and configure dedicated GPU inference clusters using vLLM and TensorRT-LLM on bare-metal servers or private VPCs. Your models, vector databases (Qdrant/pgvector), and application code run entirely on your local network with zero external dependencies."
          }
        },
        {
          "@type": "Question",
          "name": "How does Retrieval-Augmented Generation (RAG) eliminate hallucinations for business documents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RAG forces the model to act as a pure reader: it searches your vector database for the exact, authoritative text passages relevant to the user query, and instructs the model to answer using only the retrieved context. With cross-encoder rerankers and citation guardrails, if the answer is not in your documents, the system deterministically replies that information is unavailable rather than fabricating facts."
          }
        },
        {
          "@type": "Question",
          "name": "What hardware is required to run frontier private models like DeepSeek-R1 or Llama 3?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "With 4-bit and 8-bit AWQ quantization and vLLM PagedAttention, a single enterprise workstation with an NVIDIA RTX 6000 Ada (48GB VRAM) or two RTX 4090s can comfortably host a 70B parameter model at 30+ tokens/second. For multi-thousand user clusters, we architect multi-GPU nodes (NVIDIA A100/H100) with sub-second failover."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical timeline and engagement model for an enterprise AI deployment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard engagement starts with a 1-week Architecture Discovery and PoC roadmap. Production deployment of a Private RAG or Autonomous MCP Agent pipeline typically takes 2 to 4 weeks, including data connector integration, vector database indexing, security testing, and staff training."
          }
        }
      ]
    }
  ]
};

export default function AISolutionsPage() {
  return (
    <>
      {/* Schema.org Structured Data Injection for Google Rich Snippets & PAA Indexing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AISolutionsClient />
    </>
  );
}
