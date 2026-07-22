<div align="center">

# Atharva Arbat

**Systems engineer who builds AI agent infrastructure.** I write the layers most people skip: schedulers, kernels, wire protocols, and now, provably fair runtimes for multi-agent LLM systems.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-atharvaarbat-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/atharvaarbat)
[![GitHub](https://img.shields.io/badge/GitHub-atharvaarbat-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/atharvaarbat)
[![Email](https://img.shields.io/badge/Email-arbatatharva130%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:arbatatharva130@gmail.com)

</div>

## About

CS undergrad at **MIT World Peace University, Pune** (B.Tech CSE, CGPA 8.25/10, expected May 2027). I've written an operating system from the boot sector up, a lock-free key-value store that hit 49,000 ops/sec, and firmware that held a hyperloop pod at 11 ms end-to-end latency under live European competition. Most recently, I proved a fairness theorem for scheduling AI agents and built the runtime that enforces it.

**Currently:** open to software engineering and AI infrastructure internships.

---

## 🧠 Latest work: AgentKernel

Multi-agent LLM systems run with concurrency but no concurrency policy: one agent's 100K-token call can stall every sibling, and nothing enforces a budget until the bill arrives. I wrote a systems paper on this problem and built the runtime that fixes it.

- Designed **Reconciled Virtual Time (RVT)**: extends virtual-time fair queueing to API calls that are non-preemptible and whose cost is unknown until completion, by charging an estimate at dispatch and reconciling the truth when the call returns
- **Proved a closed-form service-gap bound** (Theorem 1) and starvation freedom as a direct corollary, plus two negative results that delimit the design space: unreconciled estimation is provably unbounded, and non-mediating middleware cannot enforce fairness at all
- Modeled each LLM agent as an OS-style process: private context, budget vector, virtual time, and capabilities, all behind one mediated syscall interface (`infer`, `invoke`, `send`/`recv`, `clock`, `random`)
- Built the ~2,400-line Go runtime and a deterministic evaluation harness; measured a **0.9998 Jain fairness index** (vs. 0.162 for FCFS and round-robin) under 31:1 token-cost skew, at **1,847 ns/call** scheduling overhead, tested up to 50 concurrent agents

**[Read the paper and code → github.com/atharvaarbat/agent-kernel](https://github.com/atharvaarbat/agent-kernel)**

---

## 💼 Experience

**AI Agent Engineer Intern, OVRT** · Remote · Jan 2026 – Jun 2026
Built a TypeScript multi-agent orchestrator coordinating 6 LLM agents for Shopify automation; designed a secure Hono API proxy with HMAC signing that cut latency 20%; shipped a 24/7 monitoring agent processing thousands of events daily.

**Navigation and Control Lead, Vegapod Hyperloop** · Pune, India · Aug 2023 – Aug 2025
Architected the pod's C++ control unit, holding **11 ms average end-to-end latency** in live runs at European Hyperloop Week 2024 (Zurich) and 2025 (Groningen). Led a 9-engineer subsystem to an 8th/16 finish.

**Frontend Developer Intern, BytesWrite** · Pune, India · Aug 2024 – Nov 2024
Built an internal ops platform (Next.js, TypeScript) adopted by 150+ employees; raised the Lighthouse score from 54 to 91.

---

## 🚀 Featured Projects

| Project | Stack | What it does |
|---|---|---|
| **[AgentKernel](https://github.com/atharvaarbat/agent-kernel)** | Go | Fair-scheduling kernel for multi-agent LLM systems, with a proven service-gap bound. **0.9998 Jain fairness**, 1,847 ns/call overhead |
| **[ConcurrentKV](https://github.com/atharvaarbat/concurrent-kv-go)** | Go, TCP | Redis-style KV store over a custom binary protocol. **49,000 ops/sec** with a lock-free MPSC queue, benchmarked against Redis |
| **[ARBOS](https://github.com/atharvaarbat/arbos)** | C, x86 Assembly | 32-bit OS booting on real hardware: bootloader, paging, interrupts, drivers, and a round-robin scheduler |
| **[Auth4Agent](https://github.com/auth4agents/cli)** | Go, Ed25519, JWT | Decentralized identity protocol for AI agents; private keys never leave the agent |
| **[LLM Code Review Agent](https://github.com/atharvaarbat/llm-code-review-agent)** | Python | Agentic CLI that reviews git diffs into structured JSON. Cut token usage 35%, 1.8s p95 latency |
| **[System Design Mafia](https://github.com/atharvaarbat/system-design-mafia)** | TypeScript, Next.js | Live platform for learning system design through interactive diagrams: [sdmafia.hdtl.in](https://sdmafia.hdtl.in) |
| **[Gym Management](https://github.com/atharvaarbat/gym-management)** | Next.js, Prisma | Full-stack platform running live at 2 gyms in India |

<details>
<summary><strong>More projects</strong></summary>
<br>

| Project | Stack | Description |
|---|---|---|
| [SaaS Auth Starter](https://github.com/atharvaarbat/next-auth) | Next.js, Prisma, PostgreSQL | Production auth stack: JWT sessions, WebAuthn passkeys, OAuth, email OTP |
| [Track Matching System](https://github.com/HindustanDefenceTechnologiesLimited/tracking-engine) | Python | Offline AI matching engine for Army intelligence; SBERT embeddings + ANN search |
| [Huffman Compressor](https://github.com/atharvaarbat/huffman-compressor) | C | 42% average compression at ~180 MB/s, benchmarked against gzip |
| [Raytracer Engine](https://github.com/atharvaarbat/raytracer-engine-in-c) | C, SDL2 | 2D real-time raytracer with interactive light and shadows |
| [Custom Shell](https://github.com/atharvaarbat/arbShell) | C | Unix-like shell built with `fork()`/`execvp()` |
| [XORCrypt](https://github.com/atharvaarbat/xor-encryptor) | C | File encryption with 256-bit XOR key generation |
| [Terminal Image Renderer](https://github.com/atharvaarbat/image-in-terminal) | C, stb_image | Renders images as colorized ASCII art in the terminal |

</details>

---

## 🛠️ Tech Stack

**Languages**
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![x86 Assembly](https://img.shields.io/badge/x86_Assembly-6E4C13?style=flat-square)

**Systems & Infra**
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![CMake](https://img.shields.io/badge/CMake-064F8C?style=flat-square&logo=cmake&logoColor=white)

**AI & Agents**
![OpenAI API](https://img.shields.io/badge/OpenAI_API-412991?style=flat-square&logo=openai&logoColor=white)
![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-000000?style=flat-square&logo=vercel&logoColor=white)
![Multi--Agent Systems](https://img.shields.io/badge/Multi--Agent_Systems-2E2E2E?style=flat-square)
![BullMQ](https://img.shields.io/badge/BullMQ-B7178C?style=flat-square)

**Web**
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Hono](https://img.shields.io/badge/Hono-E36002?style=flat-square&logo=hono&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)

---

## 🏆 Achievements

- Speaker, **DevConf.in 2026**: "Building Real-Time Control Software" [(watch talk)](https://www.youtube.com/watch?v=p-Q2VMhGbvg)
- Competed at **European Hyperloop Week** 2024 (Zurich) and 2025 (Groningen); placed 8th of 16 international teams
- Solved **250+ LeetCode problems**: dynamic programming, graphs, trees, binary search

---

## 📊 GitHub Activity

<div align="center">

<img src="https://ghchart.rshah.org/00ADD8/atharvaarbat" alt="Atharva's GitHub contribution heatmap" width="100%" />

<br><br>

<img height="165" src="https://streak-stats.demolab.com?user=atharvaarbat&hide_border=true&background=0d1117&ring=00ADD8&fire=00ADD8&currStreakLabel=00ADD8&sideLabels=c9d1d9&currStreakNum=c9d1d9&sideNums=c9d1d9&dates=8b949e&stroke=30363d" alt="Atharva's GitHub contribution streak" />

</div>

---

<div align="center">

**Let's talk:** [LinkedIn](https://linkedin.com/in/atharvaarbat) · [Email](mailto:arbatatharva130@gmail.com) · [GitHub](https://github.com/atharvaarbat)

</div>
