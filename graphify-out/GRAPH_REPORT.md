# Graph Report - softcorp  (2026-10-10)

## Corpus Check
- 103 files · ~234,370 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 3376 nodes · 4937 edges · 99 communities (88 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 96 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `61283920`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

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
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 34|Community 34]]
- [[_COMMUNITY_Community 35|Community 35]]
- [[_COMMUNITY_Community 36|Community 36]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 42|Community 42]]
- [[_COMMUNITY_Community 43|Community 43]]
- [[_COMMUNITY_Community 44|Community 44]]
- [[_COMMUNITY_Community 45|Community 45]]
- [[_COMMUNITY_Community 46|Community 46]]
- [[_COMMUNITY_Community 47|Community 47]]
- [[_COMMUNITY_Community 48|Community 48]]
- [[_COMMUNITY_Community 49|Community 49]]
- [[_COMMUNITY_Community 50|Community 50]]
- [[_COMMUNITY_Community 51|Community 51]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]
- [[_COMMUNITY_Community 87|Community 87]]
- [[_COMMUNITY_Community 89|Community 89]]
- [[_COMMUNITY_Community 90|Community 90]]
- [[_COMMUNITY_Community 94|Community 94]]
- [[_COMMUNITY_Community 95|Community 95]]
- [[_COMMUNITY_Community 96|Community 96]]

## God Nodes (most connected - your core abstractions)
1. `_()` - 477 edges
2. `_()` - 456 edges
3. `$()` - 42 edges
4. `L()` - 27 edges
5. `interpretNode()` - 25 edges
6. `slice()` - 23 edges
7. `kc()` - 21 edges
8. `P()` - 20 edges
9. `sc()` - 20 edges
10. `interpretNode()` - 20 edges

## Surprising Connections (you probably didn't know these)
- `POST()` --calls--> `checkRateLimit()`  [INFERRED]
  src/app/api/orders/route.ts → src/lib/rate-limit.ts
- `es()` --calls--> `N()`  [INFERRED]
  src/generated/prisma/runtime/client.js → src/generated/prisma/query_compiler_fast_bg.js
- `_o()` --calls--> `N()`  [INFERRED]
  src/generated/prisma/runtime/client.js → src/generated/prisma/query_compiler_fast_bg.js
- `request()` --calls--> `N()`  [INFERRED]
  src/generated/prisma/runtime/client.js → src/generated/prisma/query_compiler_fast_bg.js
- `requestBatch()` --calls--> `N()`  [INFERRED]
  src/generated/prisma/runtime/client.js → src/generated/prisma/query_compiler_fast_bg.js

## Import Cycles
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/Session.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/commonInputTypes.ts -> src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/commonInputTypes.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/User.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/ContactMessage.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/Service.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/Account.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/Order.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/Payment.ts -> src/generated/prisma/internal/prismaNamespace.ts`
- 3-file cycle: `src/generated/prisma/internal/prismaNamespace.ts -> src/generated/prisma/models.ts -> src/generated/prisma/models/VerificationToken.ts -> src/generated/prisma/internal/prismaNamespace.ts`

## Communities (99 total, 11 thin omitted)

### Community 1 - "Community 1"
Cohesion: 0.04
Nodes (47): dependencies, @auth/prisma-adapter, bcryptjs, better-sqlite3, framer-motion, lucide-react, next, next-auth (+39 more)

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (6): aiCategories, aiCategories, interactiveWorkflows, serviceCategories, UdyamServiceItem, udyamServicesList

### Community 3 - "Community 3"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 4 - "Community 4"
Cohesion: 0.11
Nodes (9): AdminData, categoryLabels, ClientItem, MessageItem, OrderItem, ServiceItem, statusColors, statusOptions (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.11
Nodes (10): categoryColors, categoryLabels, OrderItem, pricingLabels, Props, ServiceItem, statusColors, statusLabels (+2 more)

### Community 6 - "Community 6"
Cohesion: 0.13
Nodes (5): geistMono, geistSans, metadata, viewport, navLinks

### Community 7 - "Community 7"
Cohesion: 0.00
Nodes (776): Account, AccountAggregateArgs, AccountAvgAggregateInputType, AccountAvgAggregateOutputType, AccountAvgOrderByAggregateInput, AccountCountAggregateInputType, AccountCountAggregateOutputType, AccountCountArgs (+768 more)

### Community 8 - "Community 8"
Cohesion: 0.01
Nodes (312): AccelerateExtensionFetch, AccelerateExtensionFetchDecorator, Action, ActiveConnectorType, Aggregate, AllModelsToStringIndex, ApplyOmit, Args (+304 more)

### Community 9 - "Community 9"
Cohesion: 0.20
Nodes (5): categoryLabels, pricingLabels, Props, ServiceDetails, Window

### Community 10 - "Community 10"
Cohesion: 0.33
Nodes (5): Softcorp Deployment Guide (Low Memory OCI Server), Step 1: Make your changes and test locally, Step 2: Build the Production Code Locally, Step 3: Push to GitHub, Step 4: Turn it on in the OCI Server

### Community 11 - "Community 11"
Cohesion: 0.33
Nodes (4): PrismaClient, adapter, dbPath, prisma

### Community 12 - "Community 12"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

### Community 26 - "Community 26"
Cohesion: 0.25
Nodes (7): Critical Directives & User Rules, Legal & MSME Udyam Registration (India HQ), Project Architecture & Tech Stack, Recent Functional & Navigation Repairs, Security Hardening & Performance Optimization Audit (Oct 2026), Udyam Services & Customer Self-Service Payment Portal Integration, Workspace & Global Memory Checkpoint

### Community 28 - "Community 28"
Cohesion: 0.12
Nodes (16): 1. Research Purpose, 2. Research Sources, 3.1 NIC 62011 — Custom Software Engineering, 3.2 NIC 62012 — Web Architecture & Digital Platforms (Next.js / React), 3.3 NIC 62013 — IT Infrastructure Support & Telemetry, 3.4 NIC 62020 — IT Consultancy & Cloud Migration, 3.5 NIC 62099 — Autonomous AI Workflows & Modern IT, 3.6 NIC 63119 — Data Processing, ETL & Cloud Hosting (+8 more)

### Community 29 - "Community 29"
Cohesion: 0.07
Nodes (28): 10. Contact & Footer Polishing (`src/components/sections/Contact.tsx`, `src/components/Footer.tsx`), 1. Global Visual System & Atmosphere (`src/app/globals.css`, `src/components/ui/AmbientBackground.tsx`), 1. Vulnerability Findings & Security Hardening, 2. Navigation Experience (`src/components/Navbar.tsx`), 2. Performance & App Optimization, 3. Hero Section Overhaul (`src/components/sections/Hero.tsx`), 3. Verification & Safety Gates, 4. Next-Gen AI Solutions (`src/components/sections/AISolutions.tsx`) (+20 more)

### Community 30 - "Community 30"
Cohesion: 0.02
Nodes (64): _(), addItem(), At(), bm(), Bp(), ca(), ci(), clone() (+56 more)

### Community 31 - "Community 31"
Cohesion: 0.02
Nodes (63): _(), Ad(), am(), an(), ao(), append(), ba(), br() (+55 more)

### Community 32 - "Community 32"
Cohesion: 0.02
Nodes (109): AggregateUser, DateTimeFieldUpdateOperationsInput, GetUserAggregateType, GetUserGroupByPayload, NullableDateTimeFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput, Prisma__UserClient, StringFieldUpdateOperationsInput (+101 more)

### Community 33 - "Community 33"
Cohesion: 0.02
Nodes (107): AggregateOrder, GetOrderAggregateType, GetOrderGroupByPayload, Order$paymentArgs, OrderAggregateArgs, OrderAvgAggregateInputType, OrderAvgAggregateOutputType, OrderAvgOrderByAggregateInput (+99 more)

### Community 34 - "Community 34"
Cohesion: 0.02
Nodes (103): AccountScalarFieldEnum, Args, At, AtLeast, AtLoose, AtStrict, BatchPayload, Boolean (+95 more)

### Community 35 - "Community 35"
Cohesion: 0.02
Nodes (93): AggregatePayment, GetPaymentAggregateType, GetPaymentGroupByPayload, PaymentAggregateArgs, PaymentAvgAggregateInputType, PaymentAvgAggregateOutputType, PaymentAvgOrderByAggregateInput, PaymentCountAggregateInputType (+85 more)

### Community 36 - "Community 36"
Cohesion: 0.02
Nodes (83): AccountAggregateArgs, AccountAvgAggregateInputType, AccountAvgAggregateOutputType, AccountAvgOrderByAggregateInput, AccountCountAggregateInputType, AccountCountAggregateOutputType, AccountCountArgs, AccountCountOrderByAggregateInput (+75 more)

### Community 37 - "Community 37"
Cohesion: 0.02
Nodes (81): AggregateService, BoolFieldUpdateOperationsInput, FloatFieldUpdateOperationsInput, GetServiceAggregateType, GetServiceGroupByPayload, IntFieldUpdateOperationsInput, Prisma__ServiceClient, Service$ordersArgs (+73 more)

### Community 38 - "Community 38"
Cohesion: 0.06
Nodes (70): #a(), ai(), apiKey(), bu(), _c(), commitTransaction(), connect(), du() (+62 more)

### Community 39 - "Community 39"
Cohesion: 0.03
Nodes (75): AggregateSession, GetSessionAggregateType, GetSessionGroupByPayload, Prisma__SessionClient, SessionAggregateArgs, SessionCountAggregateInputType, SessionCountAggregateOutputType, SessionCountArgs (+67 more)

### Community 40 - "Community 40"
Cohesion: 0.06
Nodes (58): #a(), Al(), Bp(), build(), cl(), commitTransaction(), connect(), Da() (+50 more)

### Community 41 - "Community 41"
Cohesion: 0.10
Nodes (61): ac(), addErrorMessage(), addField(), addSuggestion(), asObject(), B(), cc(), co() (+53 more)

### Community 42 - "Community 42"
Cohesion: 0.11
Nodes (38): concat(), cs(), Dt(), findField(), fs(), gc(), getArgumentName(), getArgumentPath() (+30 more)

### Community 43 - "Community 43"
Cohesion: 0.04
Nodes (55): AggregateVerificationToken, GetVerificationTokenAggregateType, GetVerificationTokenGroupByPayload, Prisma__VerificationTokenClient, VerificationTokenAggregateArgs, VerificationTokenCountAggregateInputType, VerificationTokenCountAggregateOutputType, VerificationTokenCountArgs (+47 more)

### Community 44 - "Community 44"
Cohesion: 0.04
Nodes (54): AggregateContactMessage, ContactMessageAggregateArgs, ContactMessageCountAggregateInputType, ContactMessageCountAggregateOutputType, ContactMessageCountArgs, ContactMessageCountOrderByAggregateInput, ContactMessageCreateArgs, ContactMessageCreateInput (+46 more)

### Community 45 - "Community 45"
Cohesion: 0.10
Nodes (25): cancelAllTransactions(), disconnect(), Ds(), ep(), fp(), Ga(), getAllClientExtensions(), getAllComputedFields() (+17 more)

### Community 46 - "Community 46"
Cohesion: 0.07
Nodes (18): $(), a(), F, g, ge(), I(), J(), k() (+10 more)

### Community 47 - "Community 47"
Cohesion: 0.07
Nodes (42): P(), Ar(), bd(), Ca(), Cn(), Dd(), Ei(), execute() (+34 more)

### Community 48 - "Community 48"
Cohesion: 0.13
Nodes (42): $c(), outputEdge(), ac(), addErrorMessage(), addSuggestion(), asObject(), bt(), cc() (+34 more)

### Community 49 - "Community 49"
Cohesion: 0.06
Nodes (34): BoolFilter, BoolWithAggregatesFilter, DateTimeFilter, DateTimeNullableFilter, DateTimeNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, FloatFilter, FloatWithAggregatesFilter (+26 more)

### Community 50 - "Community 50"
Cohesion: 0.08
Nodes (31): addItem(), At(), bl(), ce(), De(), dm(), em(), Fe() (+23 more)

### Community 51 - "Community 51"
Cohesion: 0.09
Nodes (29): addMarginSymbol(), afterNextNewline(), getCurrentLineLength(), hr(), Hu(), indent(), indentedCurrentLine(), inputEdge() (+21 more)

### Community 52 - "Community 52"
Cohesion: 0.13
Nodes (28): addMarginSymbol(), afterNextNewline(), br(), compare(), copy(), equals(), getCurrentLineLength(), H() (+20 more)

### Community 53 - "Community 53"
Cohesion: 0.06
Nodes (46): alloc(), allocUnsafe(), allocUnsafeSlow(), Am(), au(), Bd(), byteLength(), cd() (+38 more)

### Community 54 - "Community 54"
Cohesion: 0.09
Nodes (27): Ae(), as(), bc(), dp(), fr(), hc(), includes(), indexOf() (+19 more)

### Community 55 - "Community 55"
Cohesion: 0.09
Nodes (26): Bu(), Do(), #f(), fromContent(), getLocation(), #h(), ja(), lineAt() (+18 more)

### Community 56 - "Community 56"
Cohesion: 0.12
Nodes (20): Cd(), destroy(), digest(), digestInto(), ea(), finish(), He(), Id() (+12 more)

### Community 57 - "Community 57"
Cohesion: 0.10
Nodes (24): bo(), Dp(), Ee(), En(), ep(), fr(), getAllClientExtensions(), getAllComputedFields() (+16 more)

### Community 58 - "Community 58"
Cohesion: 0.10
Nodes (20): cancelAllTransactions(), disconnect(), eo(), generate(), getPrintWidth(), Gr(), Gu(), ke() (+12 more)

### Community 59 - "Community 59"
Cohesion: 0.12
Nodes (12): config, LogOptions, PrismaClient, PrismaClientConstructor, Account, ContactMessage, Order, Payment (+4 more)

### Community 60 - "Community 60"
Cohesion: 0.14
Nodes (18): Pi(), Dd(), G(), generate(), Gi(), Hd(), ii(), iu() (+10 more)

### Community 61 - "Community 61"
Cohesion: 0.27
Nodes (9): POST(), POST(), checkRateLimit(), getClientIp(), RateLimitRecord, trackers, POST(), POST() (+1 more)

### Community 62 - "Community 62"
Cohesion: 0.13
Nodes (13): AccountScalarFieldEnum, ContactMessageScalarFieldEnum, ModelName, NullsOrder, NullTypes, OrderScalarFieldEnum, PaymentScalarFieldEnum, ServiceScalarFieldEnum (+5 more)

### Community 63 - "Community 63"
Cohesion: 0.11
Nodes (9): Contact, FAQ, ROIQuickEstimator, UdyamVerification, highlights, CaseStudies, faqs, steps (+1 more)

### Community 64 - "Community 64"
Cohesion: 0.18
Nodes (11): default, default, exports, ./client, ./generator-build, ./package.json, ./sql, default (+3 more)

### Community 65 - "Community 65"
Cohesion: 0.38
Nodes (11): import, import, browser, default, edge-light, node, types, worker (+3 more)

### Community 66 - "Community 66"
Cohesion: 0.38
Nodes (11): require, require, require, browser, default, edge-light, node, types (+3 more)

### Community 67 - "Community 67"
Cohesion: 0.12
Nodes (18): ad(), addField(), append(), build(), dispatchEngineSpans(), e(), fl(), getActiveContext() (+10 more)

### Community 68 - "Community 68"
Cohesion: 0.20
Nodes (8): Account, ContactMessage, Order, Payment, Service, Session, User, VerificationToken

### Community 69 - "Community 69"
Cohesion: 0.20
Nodes (6): config, path, Prisma, PrismaClient, {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  DbNull,
  JsonNull,
  AnyNull,
  NullTypes,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
}, empty()

### Community 70 - "Community 70"
Cohesion: 0.22
Nodes (5): {
  Decimal,
  DbNull,
  JsonNull,
  AnyNull,
  NullTypes,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
}, Prisma, PrismaClient, c(), k()

### Community 71 - "Community 71"
Cohesion: 0.18
Nodes (11): constructor(), deserialize(), Fa(), forSql(), getConnectionInfo(), il(), nl(), qi() (+3 more)

### Community 72 - "Community 72"
Cohesion: 0.25
Nodes (5): quickLinks, socialLinks, NICItem, udyamDataset, UdyamMiniBadge()

### Community 73 - "Community 73"
Cohesion: 0.22
Nodes (9): Prisma__AccountClient, Prisma__ContactMessageClient, Prisma__OrderClient, Prisma__PaymentClient, Prisma__ServiceClient, Prisma__SessionClient, Prisma__UserClient, Prisma__VerificationTokenClient (+1 more)

### Community 74 - "Community 74"
Cohesion: 0.22
Nodes (8): browser, dependencies, @prisma/client-runtime-utils, main, name, sideEffects, types, version

### Community 75 - "Community 75"
Cohesion: 0.25
Nodes (8): ./runtime/client, default, require, default, import, node, require, types

### Community 76 - "Community 76"
Cohesion: 0.25
Nodes (8): imports, #main-entry-point, #wasm-compiler-loader, default, default, edge-light, worker, workerd

### Community 77 - "Community 77"
Cohesion: 0.33
Nodes (7): AdapterInfo, DriverAdapterFactory, Queryable, SqlDriverAdapter, SqlDriverAdapterFactory, SqlQueryable, Transaction

### Community 78 - "Community 78"
Cohesion: 0.29
Nodes (6): Args, Exact, GetRuntimeOutput, Narrowable, Operation, RuntimeName

### Community 79 - "Community 79"
Cohesion: 0.17
Nodes (12): N(), es(), xn(), Bs(), de(), fu(), ia(), mapQueryEngineResult() (+4 more)

### Community 80 - "Community 80"
Cohesion: 0.33
Nodes (5): config, Prisma, PrismaClient, {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  DbNull,
  JsonNull,
  AnyNull,
  NullTypes,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
}, empty()

### Community 81 - "Community 81"
Cohesion: 0.40
Nodes (5): default, import, require, types, ./edge

### Community 82 - "Community 82"
Cohesion: 0.40
Nodes (5): ./extension, default, import, require, types

### Community 83 - "Community 83"
Cohesion: 0.40
Nodes (5): ./index, default, import, require, types

### Community 84 - "Community 84"
Cohesion: 0.40
Nodes (5): ./index-browser, default, import, require, types

### Community 85 - "Community 85"
Cohesion: 0.40
Nodes (5): ./runtime/index-browser, default, import, require, types

### Community 86 - "Community 86"
Cohesion: 0.40
Nodes (5): ./runtime/wasm-compiler-edge, default, import, require, types

### Community 94 - "Community 94"
Cohesion: 0.25
Nodes (9): hu(), id(), lr(), r(), renderAllMessages(), rm(), wu(), Xd() (+1 more)

### Community 95 - "Community 95"
Cohesion: 0.25
Nodes (8): #f(), ku(), #m(), Ru(), stop(), Tu(), vu(), zu()

### Community 96 - "Community 96"
Cohesion: 0.33
Nodes (7): El(), emit(), handleAndLogRequestError(), handleRequestError(), Lm(), Or(), Ur()

## Knowledge Gaps
- **2153 isolated node(s):** `deploy.sh script`, `eslintConfig`, `ContentSecurityPolicy`, `nextConfig`, `name` (+2148 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `_()` connect `Community 31` to `Community 69`, `Community 7`, `Community 40`, `Community 41`, `Community 71`, `Community 47`, `Community 48`, `Community 79`, `Community 50`, `Community 51`, `Community 55`, `Community 56`, `Community 57`, `Community 58`, `Community 60`?**
  _High betweenness centrality (0.214) - this node is a cross-community bridge._
- **Why does `_()` connect `Community 30` to `Community 96`, `Community 67`, `Community 38`, `Community 71`, `Community 42`, `Community 45`, `Community 79`, `Community 80`, `Community 48`, `Community 52`, `Community 53`, `Community 54`, `Community 56`, `Community 94`, `Community 58`, `Community 60`, `Community 95`, `Community 31`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Why does `$u()` connect `Community 40` to `Community 50`, `Community 47`, `Community 38`, `Community 31`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **What connects `deploy.sh script`, `eslintConfig`, `ContentSecurityPolicy` to the rest of the system?**
  _2153 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.04081632653061224 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._