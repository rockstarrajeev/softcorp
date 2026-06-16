# Graph Report - softcorp  (2026-06-04)

## Corpus Check
- 54 files · ~86,468 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 223 nodes · 219 edges · 25 communities (19 shown, 6 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 23|Community 23]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `scripts` - 5 edges
3. `Softcorp Deployment Guide (Low Memory OCI Server)` - 5 edges
4. `serviceCategories` - 4 edges
5. `eslint` - 2 edges
6. `prisma` - 2 edges
7. `paths` - 2 edges
8. `deploy.sh script` - 1 edges
9. `eslintConfig` - 1 edges
10. `nextConfig` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (25 total, 6 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (25): dependencies, @auth/prisma-adapter, bcryptjs, better-sqlite3, framer-motion, next, next-auth, next-pwa (+17 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (6): aiCategories, highlights, aiCategories, caseStudies, steps, serviceCategories

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (9): AdminData, categoryLabels, ClientItem, MessageItem, OrderItem, ServiceItem, statusColors, statusOptions (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (10): categoryColors, categoryLabels, OrderItem, pricingLabels, Props, ServiceItem, statusColors, statusLabels (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.14
Nodes (6): geistMono, geistSans, metadata, quickLinks, socialLinks, navLinks

### Community 7 - "Community 7"
Cohesion: 0.17
Nodes (11): devDependencies, dotenv, eslint, eslint-config-next, minimatch, tailwindcss, @tailwindcss/postcss, @types/node (+3 more)

### Community 8 - "Community 8"
Cohesion: 0.18
Nodes (10): name, prisma, seed, private, scripts, build, dev, lint (+2 more)

### Community 9 - "Community 9"
Cohesion: 0.25
Nodes (5): categoryLabels, pricingLabels, Props, ServiceDetails, Window

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): Softcorp Deployment Guide (Low Memory OCI Server), Step 1: Make your changes and test locally, Step 2: Build the Production Code Locally, Step 3: Push to GitHub, Step 4: Turn it on in the OCI Server

### Community 11 - "Community 11"
Cohesion: 0.40
Nodes (3): adapter, dbPath, prisma

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **110 isolated node(s):** `deploy.sh script`, `eslintConfig`, `nextConfig`, `name`, `version` (+105 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 1` to `Community 8`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Community 7` to `Community 8`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **What connects `deploy.sh script`, `eslintConfig`, `nextConfig` to the rest of the system?**
  _110 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06538461538461539 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09782608695652174 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._