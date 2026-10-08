"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  CloudCog,
  Code2,
  Palette,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Software Development",
    description:
      "Scalable web platforms, business applications, SaaS products, APIs, and custom software engineered around your needs.",
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] py-28 sm:py-36"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-violet-600/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-violet-400" />
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-violet-300">
                What we do
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Everything you need
              <span className="block text-white/35">
                to build what's next.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
          >
            From the first idea to production and beyond, CAIRN brings
            strategy, design, engineering, automation, and quality into one
            connected team.
          </motion.p>
        </div>

        {/* Services grid */}
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
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-700 group-hover:bg-violet-500/15" />

                {/* Top row */}
                <div className="relative flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-500 group-hover:border-violet-400/30 group-hover:bg-violet-400/10 group-hover:text-violet-300">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <span className="font-mono text-xs text-white/20">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-16">
                  <h3 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    {service.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="absolute bottom-7 left-7 flex flex-wrap gap-2 sm:left-8 sm:bottom-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[10px] text-white/30 transition-colors group-hover:border-white/10 group-hover:text-white/45"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-white/20 group-hover:text-white sm:bottom-8 sm:right-8">
                  <ArrowUpRight size={16} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-white/30">
            Don't see exactly what you need? We can build around your
            requirements and assemble the right team for your product.
          </p>

          <a
            href="#contact"
            className="group flex shrink-0 items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Tell us what you're building
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}