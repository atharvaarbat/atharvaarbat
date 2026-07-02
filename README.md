# Atharva Arbat

CS undergrad at MIT-WPU (graduating May 2027), building close to the metal — custom OSes, key-value stores, compression engines — with full-stack products on the side. Former **Navigation & Control Lead** at Vegapod Hyperloop, where I shipped a multi-threaded TCP/UART pod control system at **11ms average E2E latency** under live competition. Placed **8th / 16** at European Hyperloop Week 2025 (Groningen).

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/atharvaarbat)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:arbatatharva130@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/atharvaarbat)

---

## Tech

**Languages**  
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)

**Systems & Tools**  
![Linux](https://img.shields.io/badge/Linux-FCC624?style=flat-square&logo=linux&logoColor=black)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![CMake](https://img.shields.io/badge/CMake-064F8C?style=flat-square&logo=cmake&logoColor=white)
![QEMU](https://img.shields.io/badge/QEMU-FF6600?style=flat-square&logo=qemu&logoColor=white)
![GDB](https://img.shields.io/badge/GDB-A30000?style=flat-square)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

**Web & Data**  
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

---

## Experience

**Navigation & Control Lead · Vegapod Hyperloop** `Aug 2023 – Aug 2025`

- Architected **MVCU** in C++ — multi-process, multi-threaded TCP/UART system managing real-time pod state across 4 threads at **11ms average E2E latency** under live competition
- Designed a custom binary wire protocol over UART/TCP with heartbeat, error detection, and reconnection logic for fault tolerance
- Led 9 engineers across **EHW 2024 (Zurich)** and **EHW 2025 (Groningen)** — team placed **8th / 16 globally**; owned the technical roadmap and signed off on all C++ code reviews

**Frontend Developer Intern · BytesWrite** `Aug 2024 – Nov 2024`

- Built internal ops platform (Next.js + TypeScript) from scratch; shipped to **150+ employees in 3 months**, replacing manual spreadsheet workflows
- Lighthouse score **54 → 91** via SSR with ISR and route-level code splitting; cut load time **~4.2s → ~2.5s** on a 3G throttled profile
- Decomposed monolithic UI into **35+ reusable TypeScript components**, cutting code duplication ~30%

---

## Projects

### [ConcurrentKV](https://github.com/atharvaarbat/concurrentkv) — Multi-threaded Key-Value Store `Go`

~**49,000 ops/sec** · GET/SET/DEL/EXPIRE over a custom binary TCP protocol · thread pool (8 workers) with a **lock-free MPSC queue** · O(1) LRU eviction (doubly linked list + hash map) · WAL-based crash recovery · benchmarked directly against Redis via `redis-benchmark`

---

### [ARBOS](https://github.com/atharvaarbat/arbos) — Custom 32-bit x86 Operating System `C · Assembly`

Bootable OS running on real hardware and QEMU · multiboot-compliant bootloader · physical memory manager (bitmap allocator) · paging (4 KB pages) · IDT for hardware interrupt handling + PIC config for IRQ routing · PS/2 keyboard + VGA text-mode drivers via MMIO · round-robin scheduler + minimal syscall interface

---

### [Huffman Compression Engine](https://github.com/atharvaarbat/huffman) `C`

**42% average compression ratio** on text at **~180 MB/s** · min-heap priority queue built from scratch · canonical Huffman encoding for deterministic serialization · handles arbitrary binary files with correct EOF padding · O(n log n) encode / O(n) decode · benchmarked vs. gzip

---

### [LLM Code Review Agent](https://github.com/atharvaarbat/llm-code-review) `Python`

Agentic CLI: feeds `git diff` to an LLM → structured JSON reviews `{ severity, line_range, issue, fix }` across all languages · hunk-level context chunking cuts token consumption ~35% vs. naive full-file prompting · retry + exponential backoff · **~1.8s p95** on diffs ≤ 500 LOC

---

### [Gym Management Software](https://github.com/atharvaarbat/gym-management) `Next.js · TypeScript · Prisma`

Full-stack gym management platform — sold to and running at **2 gyms in India** · member & attendance tracking, payment management, diet & workout plans, revenue analytics dashboard

---

<details>
<summary>More projects</summary>

| Project | Stack | Description |
|---|---|---|
| [Track Matching System](https://github.com/HindustanDefenceTechnologiesLimited/tracking-engine) | Python | AI-powered offline matching engine for Army intelligence; SBERT embeddings + ANN search (hnswlib) |
| [Raytracer Engine](https://github.com/atharvaarbat/raytracer-engine-in-c) | C, SDL2 | 2D real-time raytracing; ray-circle intersection, interactive light source, shadow simulation |
| [Custom Shell](https://github.com/atharvaarbat/arbShell) | C | Unix-like shell with `fork()`/`execvp()`, command parser, built-in command support |
| [XORCrypt](https://github.com/atharvaarbat/xor-encryptor) | C | Lightweight file encryption/decryption with 256-bit XOR key generation; works on any file type |
| ZeroGrid | Next.js, TypeScript | Mini Power BI clone for data visualization |
| Terminal Image Renderer | C, stb_image | Converts images to colorized ASCII art in the terminal |

</details>

---

<div align="center">

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=atharvaarbat&show_icons=true&theme=github_dark&hide_border=true&count_private=true)
&nbsp;&nbsp;
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=atharvaarbat&layout=compact&theme=github_dark&hide_border=true)

</div>
