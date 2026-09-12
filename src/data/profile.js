export const profile = {
  name: "Saurabh Sahu",
  role: "Senior Software Engineer",
  headline: "Specializing in DSA, System Design, and Embedded Systems. Engineering high-scale solutions at JPMorgan Chase.",
  intro:
    "8+ years across JPMorgan Chase, Oracle OCI, Qualcomm & Samsung — now mentoring engineers one-on-one, for free, on the skills that actually move interviews and careers.",
  availability: "Available for Mentoring",
  linkedin: "https://www.linkedin.com/in/saurabh-sahu-202348273/",
  email: "saurabh.sahu622@gmail.com",
  phone: "+91 96769 15782",

  stats: [
    ["8+", "Years of experience"],
    ["3", "FAANG-tier companies"],
    ["40%", "Faster on-call resolution @ OCI"],
    ["NIT", "Warangal alumnus"]
  ],

  pillars: [
    {
      number: "01",
      eyebrow: "INTERVIEW CORE",
      title: "Data Structures & Algorithms",
      text: "Move past memorization. Build complexity intuition, edge-case rigor, and the ability to communicate trade-offs clearly.",
      tags: ["Big-O", "Graphs", "DP", "Trees", "Concurrency"]
    },
    {
      number: "02",
      eyebrow: "SCALE",
      title: "System Design",
      text: "Learn to design services that survive real traffic: sharding, caching, consistency, failure modes and observability.",
      tags: ["Distributed Systems", "Kafka", "Redis", "REST APIs", "Microservices"]
    },
    {
      number: "03",
      eyebrow: "HARDWARE",
      title: "Embedded Technologies",
      text: "Build the low-level gut feel most roadmaps skip: C/C++, serial protocols, device telemetry, and debugging close to the metal.",
      tags: ["C/C++", "UART / Serial", "Linux", "Camera2 API", "OTA"]
    }
  ],

  experience: [
    {
      period: "Jul 2026 — Present",
      company: "JPMorgan Chase",
      role: "Senior Software Engineer · India",
      bullets: [
        "Building and scaling software systems at one of the world's largest financial institutions."
      ]
    },
    {
      period: "May 2022 — Jul 2026",
      company: "Oracle · OCI",
      role: "Senior Member of Technical Staff · Bangalore",
      bullets: [
        "Led end-to-end development of C4PO, an internal ops tool for Oracle Cloud Services (Java, Dropwizard, TypeScript, React) — cut on-call resolution time by 40%, mentoring a team of 6.",
        "Led OL7→OL9 migration of an OCI service with zero customer impact; improved REST APIs for high-volume traffic, cutting response time 30%.",
        "Automated CI/CD pipelines with TeamCity — 50% faster deployments; maintained 99.9%+ availability on-call."
      ]
    },
    {
      period: "Nov 2019 — May 2022",
      company: "Qualcomm",
      role: "Software Engineer · Hyderabad",
      bullets: [
        "Built a Camera Diagnostics Platform (Java, Spring Boot, Android Camera2 API) for real-time camera telemetry.",
        "Implemented async log pipelines with ExecutorService & WebSockets, and UART serial modules for embedded device logs."
      ]
    },
    {
      period: "Jul 2018 — Nov 2019",
      company: "Samsung R&D",
      role: "Software Engineer · Bangalore",
      bullets: [
        "Optimized the SMS Vendor Management system on AWS with Redis Pub/Sub — processing time from 7 hours to 10 seconds.",
        "Enabled 500K+ SMS/day across 50+ countries.",
        "B.Tech, Electrical & Electronics Engineering, NIT Warangal (2018) · CGPA 8.07"
      ]
    }
  ],

  stack: {
    Languages: ["Java", "TypeScript", "C", "C++"],
    "Backend & Frontend": ["Spring Boot", "Dropwizard", "REST APIs", "Microservices", "React", "Kafka", "Redis", "MongoDB"],
    "Cloud & DevOps": ["OCI", "AWS", "Terraform", "Docker", "TeamCity", "Grafana", "CI/CD"],
    "Embedded & Tools": ["UART / jSerialComm", "Linux", "Shell", "Git", "Android Camera2"]
  },

  wellbeing: {
    years: "12+",
    title: "Beyond code: well-being.",
    text: "12+ years on the Bhakti path. Alongside engineering, I mentor people through the quieter battles — the ones no IDE can debug.",
    bullets: [
      "Stabilizing mental well-being with time-tested spiritual practices.",
      "Resolving personal conflicts with clarity and compassion.",
      "Uplifting mental health through purpose, devotion, and daily discipline."
    ]
  }
};