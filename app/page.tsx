
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  CloudCog,
  Code2,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Scalable web platforms, SaaS products, business applications, APIs, and custom software engineered around your needs.",
    tags: ["Web Apps", "SaaS", "APIs"],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Turn repetitive workflows into intelligent systems with AI, automation, agents, integrations, and data-driven solutions.",
    tags: ["AI Agents", "Automation", "LLMs"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Product experiences designed around clarity, usability, strong visual systems, and the people who use them.",
    tags: ["UX Research", "UI Design", "Design Systems"],
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "QA & Testing",
    description:
      "Reliable software through functional, automated, performance, API, security, and end-to-end testing.",
    tags: ["Automation", "API Testing", "E2E"],
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Web & Mobile",
    description:
      "Responsive web applications and mobile experiences built to perform consistently across modern devices.",
    tags: ["React", "Next.js", "Mobile"],
  },
  {
    number: "06",
    icon: CloudCog,
    title: "Cloud & DevOps",
    description:
      "Modern infrastructure, CI/CD pipelines, cloud deployments, monitoring, and reliable production environments.",
    tags: ["Cloud", "CI/CD", "Infrastructure"],
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, users, challenges, and the outcome you want to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn requirements into user journeys, interfaces, prototypes, and a clear technical direction.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Our engineers turn the product vision into scalable, maintainable, production-ready software.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Every important workflow is tested for functionality, reliability, performance, and quality.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We deploy your product and make sure everything works correctly in the real world.",
  },
  {
    number: "06",
    title: "Scale",
    description:
      "As your product grows, we improve performance, infrastructure, features, and automation.",
  },
];

const projects = [
  {
    category: "AI / AUTOMATION",
    title: "Intelligent Operations Platform",
    description:
      "An AI-powered platform designed to automate repetitive business workflows and turn operational data into actionable insights.",
    tech: ["AI", "Automation", "Next.js"],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    category: "SAAS / SOFTWARE",
    title: "Modern Business Platform",
    description:
      "A scalable SaaS application connecting teams, workflows, analytics, and business operations in one unified experience.",
    tech: ["Next.js", "TypeScript", "Node.js"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
  {
    category: "PRODUCT DESIGN",
    title: "Digital Product Experience",
    description:
      "A complete product design system focused on simplicity, usability, conversion, and a consistent digital experience.",
    tech: ["UI/UX", "Design System", "Prototype"],
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* =========================================================
          GLOBAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-[-350px] h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-violet-600/[0.13] blur-[150px]" />

        <div className="absolute right-[-250px] top-[25%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute bottom-[15%] left-[-250px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.05] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] transition-all group-hover:border-violet-400/40 group-hover:bg-violet-500/10">
            <span className="text-sm font-bold">C</span>
          </div>

          <span className="text-lg font-semibold tracking-[0.24em]">
            CAIRN
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {["Services", "Work", "Process", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 pb-24 pt-10 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Hero Content */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/60 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Digital Product Engineering
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[84px]"
            >
              We build
              <span className="block bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                digital products
              </span>
              <span className="block">
                that{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  move.
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg"
            >
              CAIRN partners with ambitious teams to design, develop,
              automate, and test software products built for the real world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.02]"
              >
                Start a Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#work"
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                View Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/30"
            >
              <span>Software Development</span>
              <span>AI & Automation</span>
              <span>UI/UX Design</span>
              <span>QA & Testing</span>
            </motion.div>
          </div>

          {/* Hero Visual */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[22px] border border-white/10 bg-[#080808] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>

                  <span className="font-mono text-[10px] text-white/25">
                    cairn.system
                  </span>
                </div>

                <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-20 flex h-28 w-28 flex-col items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 shadow-[0_0_60px_rgba(139,92,246,0.2)]"
                  >
                    <Sparkles className="mb-2 text-violet-300" size={23} />

                    <span className="text-xs font-semibold">YOUR IDEA</span>

                    <span className="mt-1 text-[9px] text-white/35">
                      PRODUCT CORE
                    </span>
                  </motion.div>

                  <FloatingNode
                    className="left-5 top-8"
                    icon={<Code2 size={16} />}
                    title="BUILD"
                    subtitle="Software"
                  />

                  <FloatingNode
                    className="right-5 top-10"
                    icon={<Sparkles size={16} />}
                    title="AI"
                    subtitle="Automation"
                  />

                  <FloatingNode
                    className="bottom-8 left-7"
                    icon={<Zap size={16} />}
                    title="TEST"
                    subtitle="Quality"
                  />

                  <FloatingNode
                    className="bottom-7 right-7"
                    icon={<ArrowUpRight size={16} />}
                    title="SHIP"
                    subtitle="Scale"
                  />

                  <div className="absolute left-[25%] top-[34%] h-px w-[20%] rotate-[22deg] bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/10" />

                  <div className="absolute right-[25%] top-[34%] h-px w-[20%] -rotate-[22deg] bg-gradient-to-l from-transparent via-cyan-400/40 to-cyan-400/10" />

                  <div className="absolute bottom-[31%] left-[25%] h-px w-[20%] -rotate-[20deg] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

                  <div className="absolute bottom-[31%] right-[25%] h-px w-[20%] rotate-[20deg] bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent" />
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.025] px-4 py-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/25">
                      System Status
                    </p>

                    <p className="mt-1 text-xs text-white/70">
                      Everything is moving
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Operational
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-16 hidden rounded-xl border border-white/10 bg-[#101010]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <p className="text-[9px] uppercase tracking-widest text-white/30">
                Built for
              </p>

              <p className="mt-1 text-xs font-medium text-white/80">
                What comes next.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          TRUST STRIP
      ========================================================= */}

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-6 py-7 lg:px-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
            Built with modern technology
          </span>

          {technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-white/30 transition-colors hover:text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="relative z-10 border-b border-white/[0.06] py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need"
            muted="to build what's next."
            description="From the first idea to production and beyond, CAIRN brings strategy, design, engineering, automation, and quality into one connected team."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.a
                  href="#contact"
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group relative min-h-[330px] overflow-hidden bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#0d0d0d] sm:p-8"
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-700 group-hover:bg-violet-500/15" />

                  <div className="relative flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-500 group-hover:border-violet-400/30 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                      <Icon size={20} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-xs text-white/20">
                      {service.number}
                    </span>
                  </div>

                  <div className="relative mt-16">
                    <h3 className="text-xl font-medium tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                      {service.description}
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-7 flex flex-wrap gap-2 sm:bottom-8 sm:left-8">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/20 group-hover:text-white sm:bottom-8 sm:right-8">
                    <ArrowUpRight size={16} />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED WORK
      ========================================================= */}

      <section
  id="work"
  className="relative z-10 border-b border-white/[0.06] py-28 sm:py-36"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <SectionHeading
      eyebrow="Selected work"
      title="Built for the"
      muted="real world."
      description="We work across software, AI, automation, and product design to turn complex ideas into simple digital experiences."
    />

    <div className="mt-16 grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.a
          href={`/work/${project.slug}`}
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
          }}
          className={`group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080808] ${
            index === 0 ? "lg:col-span-2" : ""
          }`}
        >
          {/* Background glow */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 transition-opacity duration-700 group-hover:opacity-100`}
          />

          <div
            className={`relative grid ${
              index === 0
                ? "lg:grid-cols-[0.9fr_1.1fr]"
                : "lg:grid-cols-1"
            }`}
          >
            {/* Information */}
            <div className="relative z-10 flex min-h-[380px] flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/35">
                    {project.category}
                  </span>

                  <span className="font-mono text-[10px] text-white/20">
                    {project.year}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-white/40">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] text-white/40"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center gap-2 text-sm text-white/50 transition-colors group-hover:text-white">
                  View case study
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>

            {/* Project Visual */}
            <div className="relative min-h-[380px] overflow-hidden border-t border-white/[0.06] lg:border-l lg:border-t-0">
              <div className="absolute inset-0 bg-[#060606]" />

              {/* Browser */}
              <motion.div
                className="absolute left-[8%] right-[8%] top-[12%] overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
                whileHover={{
                  y: -8,
                  rotateX: 2,
                  rotateY: -2,
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Browser header */}
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>

                  <span className="font-mono text-[8px] text-white/20">
                    {project.slug}.app
                  </span>
                </div>

                {/* Mock UI */}
                <div className="p-5">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-3 hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 sm:block">
                      <div className="h-2 w-12 rounded-full bg-white/10" />

                      <div className="mt-6 space-y-2">
                        <div className="h-2 rounded-full bg-white/[0.06]" />
                        <div className="h-2 rounded-full bg-white/[0.04]" />
                        <div className="h-2 rounded-full bg-white/[0.04]" />
                        <div className="h-2 rounded-full bg-white/[0.04]" />
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-9">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                        <div className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                        <div className="h-16 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                      </div>

                      <div className="mt-3 h-32 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                        <div className="flex h-full items-end gap-2 p-4">
                          <div className="h-[35%] w-full rounded-t bg-violet-400/20" />
                          <div className="h-[55%] w-full rounded-t bg-violet-400/30" />
                          <div className="h-[42%] w-full rounded-t bg-cyan-400/20" />
                          <div className="h-[75%] w-full rounded-t bg-violet-400/40" />
                          <div className="h-[60%] w-full rounded-t bg-cyan-400/30" />
                          <div className="h-[88%] w-full rounded-t bg-violet-400/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 right-8 rounded-xl border border-white/10 bg-[#101010]/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="text-[9px] uppercase tracking-widest text-white/25">
                  Technologies
                </p>

                <div className="mt-2 flex gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>

    {/* All work */}
    <div className="mt-10 flex justify-center">
      <a
        href="/work"
        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-white/60 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
      >
        Explore all work
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  </div>
</section>
      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        id="process"
        className="relative z-10 border-b border-white/[0.06] py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our process"
            title="From idea"
            muted="to impact."
            description="A clear, collaborative process that keeps strategy, design, engineering, and quality moving in the same direction."
          />

          <div className="mt-16 grid border-l border-t border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group min-h-[240px] border-b border-r border-white/[0.08] p-7 transition-colors hover:bg-white/[0.02] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-violet-300/60">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-white/15 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50"
                  />
                </div>

                <h3 className="mt-14 text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY
      ========================================================= */}

      <section className="relative z-10 border-b border-white/[0.06] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-400" />

                <span className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                  Technology
                </span>
              </div>

              <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                The right tools for
                <span className="text-white/35"> the right problems.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-white/35">
              We choose technology based on your product requirements,
              scalability needs, team, timeline, and long-term goals.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-white/50 transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CAIRN
      ========================================================= */}

      <section
        id="about"
        className="relative z-10 border-b border-white/[0.06] py-28 sm:py-36"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />

              <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
                Why CAIRN
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Not just another
              <span className="block text-white/35">development team.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Business first",
                text: "Technology is a means to create measurable business value, not the final destination.",
              },
              {
                title: "Built to scale",
                text: "We think beyond launch and build foundations that can evolve as your product grows.",
              },
              {
                title: "One connected team",
                text: "Design, development, automation, and QA work together instead of operating in silos.",
              },
              {
                title: "Quality by default",
                text: "Testing and reliability are part of the process from the beginning, not an afterthought.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-t border-white/[0.08] pt-6"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03]">
                  <Check size={16} className="text-violet-300" />
                </div>

                <h3 className="text-lg font-medium">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/35">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      {/* =========================================================
    CONTACT / START A PROJECT
========================================================= */}

<section
  id="contact"
  className="relative z-10 border-b border-white/[0.06] py-28 sm:py-36"
>
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
      {/* Left */}
      <div className="lg:sticky lg:top-24 lg:h-fit">
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-violet-400" />

          <span className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Start a project
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Let's build
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
            something great.
          </span>
        </h2>

        <p className="mt-7 max-w-md text-base leading-7 text-white/40">
          Have an idea, an existing product, or a problem that needs solving?
          Tell us about it. We'll figure out the right way forward.
        </p>

        <div className="mt-10 space-y-5">
          <div className="flex items-center gap-3 text-sm text-white/40">
            <Check size={16} className="text-violet-300" />
            No-obligation initial conversation
          </div>

          <div className="flex items-center gap-3 text-sm text-white/40">
            <Check size={16} className="text-violet-300" />
            Clear technical direction
          </div>

          <div className="flex items-center gap-3 text-sm text-white/40">
            <Check size={16} className="text-violet-300" />
            Transparent project communication
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-6">
          <p className="text-xs text-white/25">
            Prefer email?
          </p>

          <a
            href="mailto:hello@cairn.dev"
            className="mt-2 inline-block text-sm text-white/60 transition-colors hover:text-white"
          >
            hello@cairn.dev
          </a>
        </div>
      </div>

      {/* Form */}
      <div>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</section>
      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div>
              <a href="#" className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05]">
                  <span className="text-sm font-bold">C</span>
                </div>

                <span className="text-lg font-semibold tracking-[0.24em]">
                  CAIRN
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-6 text-white/30">
                Software, AI, automation, design, and quality engineering for
                ambitious digital products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-white/60">Explore</p>

                <div className="mt-4 space-y-3">
                  <a
                    href="#services"
                    className="block text-sm text-white/30 hover:text-white"
                  >
                    Services
                  </a>

                  <a
                    href="#work"
                    className="block text-sm text-white/30 hover:text-white"
                  >
                    Work
                  </a>

                  <a
                    href="#process"
                    className="block text-sm text-white/30 hover:text-white"
                  >
                    Process
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-white/60">Services</p>

                <div className="mt-4 space-y-3">
                  <span className="block text-sm text-white/30">
                    Software
                  </span>

                  <span className="block text-sm text-white/30">
                    AI & Automation
                  </span>

                  <span className="block text-sm text-white/30">
                    UI/UX
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-white/60">Contact</p>

                <div className="mt-4 space-y-3">
                  <a
                    href="mailto:hello@cairn.dev"
                    className="block text-sm text-white/30 hover:text-white"
                  >
                    hello@cairn.dev
                  </a>

                  <a
                    href="#contact"
                    className="block text-sm text-white/30 hover:text-white"
                  >
                    Start a project
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-white/20 sm:flex-row">
            <p>© {new Date().getFullYear()} CAIRN. All rights reserved.</p>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white/50">
                Privacy
              </a>

              <a href="#" className="hover:text-white/50">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  muted,
  description,
}: {
  eyebrow: string;
  title: string;
  muted: string;
  description: string;
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-violet-400" />

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
            {eyebrow}
          </span>
        </div>

        <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {title}

          <span className="block text-white/35">{muted}</span>
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
      >
        {description}
      </motion.p>
    </div>
  );
}

/* =========================================================
   FLOATING HERO NODE
========================================================= */

function FloatingNode({
  className,
  icon,
  title,
  subtitle,
}: {
  className: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-30 rounded-xl border border-white/10 bg-[#111]/90 px-3 py-2.5 shadow-xl backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
          {icon}
        </div>

        <div>
          <p className="text-[9px] font-semibold tracking-wider text-white/70">
            {title}
          </p>

          <p className="text-[8px] text-white/30">{subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}
