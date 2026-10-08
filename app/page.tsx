"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  Sparkles,
  Zap,
} from "lucide-react";

const navItems = ["Services", "Work", "Process", "About"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06]">
            <span className="text-sm font-bold tracking-tight">C</span>
          </div>

          <span className="text-lg font-semibold tracking-[0.22em]">
            CAIRN
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-white"
            >
              {item}
              {item === "Services" && (
                <ChevronDown
                  size={14}
                  className="transition-transform group-hover:rotate-180"
                />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/90"
        >
          Let's Talk
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 pb-20 pt-12 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
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
              className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl xl:text-[84px]"
            >
              We build
              <span className="block bg-gradient-to-r from-white via-white to-white/45 bg-clip-text text-transparent">
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
              CAIRN partners with ambitious teams to design, develop, automate,
              and test software products that are built for the real world.
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
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
              className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/35"
            >
              <span>Software Development</span>
              <span>AI & Automation</span>
              <span>UI/UX Design</span>
              <span>QA & Testing</span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

            {/* Main card */}
            <div className="relative rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[22px] border border-white/10 bg-[#080808] p-5">
                {/* Window */}
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

                {/* Architecture */}
                <div className="relative flex min-h-[330px] items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025]">
                  {/* Grid */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                      backgroundSize: "36px 36px",
                    }}
                  />

                  {/* Center */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
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

                  {/* Floating nodes */}
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

                  {/* Connecting lines */}
                  <div className="absolute left-[25%] top-[34%] h-px w-[20%] rotate-[22deg] bg-gradient-to-r from-transparent via-violet-400/40 to-violet-400/10" />
                  <div className="absolute right-[25%] top-[34%] h-px w-[20%] -rotate-[22deg] bg-gradient-to-l from-transparent via-cyan-400/40 to-cyan-400/10" />
                  <div className="absolute bottom-[31%] left-[25%] h-px w-[20%] -rotate-[20deg] bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
                  <div className="absolute bottom-[31%] right-[25%] h-px w-[20%] rotate-[20deg] bg-gradient-to-l from-transparent via-cyan-400/30 to-transparent" />
                </div>

                {/* Bottom status */}
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

            {/* Floating label */}
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
    </main>
  );
}

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