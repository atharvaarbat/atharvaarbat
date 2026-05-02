# Hi, I'm Atharva Arbat 👋

CS undergrad at MIT World Peace University (graduating May 2027), focused on **systems programming, concurrency, and high-performance software**. I build things close to the metal — custom OSes, key-value stores, compression engines — and occasionally ship full-stack web products.

Former **Navigation & Control Lead** at Vegapod Hyperloop. Represented the team at **European Hyperloop Week 2024** (Zurich) and **2025** (Groningen), where we placed **8th out of 16 global competitors**.

---

## 🔧 What I'm Good At

- **Low-level systems** — OS internals, memory management, interrupt handling, binary protocols
- **Concurrency & networking** — multi-threaded TCP/UART systems, lock-free queues, thread pools
- **Algorithm design** — 250+ LeetCode problems; DP, graphs, binary search, heaps, sliding window
- **Full-stack web** — Next.js, React, TypeScript, SSR/ISR, REST APIs
- **Embedded & real-time** — UART serial comm, real-time state sync under competition conditions

---

## 🛠 Tech Stack

### Languages
![C](https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Systems & Tools
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![CMake](https://img.shields.io/badge/CMake-064F8C?style=for-the-badge&logo=cmake&logoColor=white)
![QEMU](https://img.shields.io/badge/QEMU-FF6600?style=for-the-badge&logo=qemu&logoColor=white)
![GDB](https://img.shields.io/badge/GDB-red?style=for-the-badge)

### Web & Databases
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 💼 Work Experience

### 🚄 Navigation & Control Lead — Vegapod Hyperloop
*Aug 2023 – Aug 2025 · Pune, India*

- Architected and shipped **MVCU** (Master Vehicle Control Unit) in C++ — a multi-process, multi-threaded TCP/UART system managing real-time pod state across 4 concurrent threads at **11ms average end-to-end latency** under live competition conditions
- Designed a **custom binary wire protocol** over UART and TCP for reliable state synchronization; built heartbeat, error detection, and reconnection logic for fault tolerance
- Led 9 engineers across **EHW 2024 (Zurich)** and **EHW 2025 (Groningen)**; team placed **8th / 16 globally**; owned technical roadmap and signed off on all C++ code reviews

### 💻 Frontend Developer Intern — BytesWrite
*Aug 2024 – Nov 2024 · Pune, India*

- Built internal operations platform (Next.js + TypeScript) from scratch; shipped to **150+ employees in 3 months**, replacing manual spreadsheet workflows
- Improved Lighthouse score from **54 → 91** via SSR with ISR and route-level code splitting; cut initial load time from **~4.2s → ~2.5s** on a 3G throttled profile
- Decomposed monolithic UI into **35+ reusable TypeScript components**, cutting code duplication by ~30%

---

## 🔥 Featured Projects

### [ConcurrentKV — Multi-threaded Key-Value Store](https://github.com/atharvaarbat/concurrentkv)
![Go](https://img.shields.io/badge/Go-00ADD8?style=flat-square&logo=go&logoColor=white)

Redis-inspired KV store in Go with **~49,000 ops/second** throughput.

- GET/SET/DEL/EXPIRE over a custom binary TCP protocol
- Thread pool (8 workers) with a **lock-free MPSC queue**
- O(1) LRU eviction (doubly linked list + hash map) and **WAL-based crash recovery**
- Benchmarked directly against Redis via `redis-benchmark`

---

### [ARBOS — Custom 32-bit Operating System](https://github.com/atharvaarbat/arbos)
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)
![Assembly](https://img.shields.io/badge/Assembly-654FF0?style=flat-square&logo=assemblyscript&logoColor=white)

Bootable x86 OS built from scratch. Runs on real hardware and QEMU.

- Multiboot-compliant bootloader, physical memory manager (bitmap allocator), paging (4 KB pages)
- IDT for hardware interrupt handling; PIC configuration for IRQ routing
- PS/2 keyboard and VGA text-mode display drivers via memory-mapped I/O
- Round-robin scheduler and minimal syscall interface for user-space programs

---

### [Huffman Compression Engine](https://github.com/atharvaarbat/huffman)
![C](https://img.shields.io/badge/C-00599C?style=flat-square&logo=c&logoColor=white)

Lossless file compressor with **42% average compression ratio** on text at **~180 MB/s**.

- Min-heap priority queue built from scratch; canonical Huffman encoding for deterministic serialization
- Handles arbitrary binary files with correct EOF padding
- Documented O(n log n) encode / O(n) decode complexity with benchmarks vs. gzip

---

### [LLM Code Review Agent](https://github.com/atharvaarbat/llm-code-review)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

Agentic CLI that feeds `git diff` to an LLM and returns structured JSON reviews.

- Hunk-level context chunking reduces token consumption by **~35%** vs. naive full-file prompting
- Returns `{ severity, line_range, issue, fix }` across all languages
- API calls wrapped with retry logic and exponential backoff; **~1.8s p95 on diffs ≤ 500 LOC**

---

### [Gym Management Software](https://github.com/atharvaarbat/gym-management)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

Full-stack gym management platform — sold to and running at 2 gyms in India.

- Member & attendance tracking, payment management, diet & workout plans
- Revenue analytics dashboard

---

### Other Projects

| Project | Description | Stack |
|---|---|---|
| [Track Matching System](https://github.com/HindustanDefenceTechnologiesLimited/tracking-engine) | AI-powered offline matching engine for Army intelligence; semantic SBERT embeddings + ANN search (hnswlib) | Python |
| [Raytracer Engine](https://github.com/atharvaarbat/raytracer-engine-in-c) | 2D real-time raytracing with interactive light source, ray-circle intersection, shadow simulation | C, SDL2 |
| [Custom Shell](https://github.com/atharvaarbat/arbShell) | Unix-like shell with `fork()`/`execvp()`, command parser, and built-in command support | C |
| [XORCrypt](https://github.com/atharvaarbat/xor-encryptor) | Lightweight file encryption/decryption with 256-bit XOR key generation, works on any file type | C |
| ZeroGrid | Mini Power BI clone for data visualization | Next.js, TypeScript |
| Terminal Image Renderer | Converts images to colorized ASCII art | C, stb_image |


---

## 📫 Let's Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/atharvaarbat)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/atharvaarbat)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:arbatatharva130@gmail.com)
