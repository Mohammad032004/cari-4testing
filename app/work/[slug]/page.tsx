import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div
          className={`absolute left-1/2 top-[-250px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-br ${project.gradient} blur-[150px]`}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-white/70 transition-colors hover:text-white"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/[0.05]">
            <span className="text-sm font-bold">C</span>
          </div>

          <span className="text-lg font-semibold tracking-[0.24em]">
            CAIRN
          </span>
        </Link>

        <Link
          href="/work"
          className="flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft size={16} />
          All Work
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-300">
              {project.category}
            </span>

            <span className="font-mono text-xs text-white/25">
              {project.year}
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[100px]">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/45 sm:text-xl">
            {project.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/45"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#080808] p-4 shadow-2xl sm:p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-cyan-500/[0.05]" />

          <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0a0a0a]">
            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>

              <span className="font-mono text-[10px] text-white/20">
                {project.slug}.app
              </span>
            </div>

            {/* Fake application */}
            <div className="grid min-h-[550px] md:grid-cols-[190px_1fr]">
              {/* Sidebar */}
              <aside className="hidden border-r border-white/[0.06] bg-white/[0.015] p-5 md:block">
                <div className="h-7 w-20 rounded-md bg-white/[0.06]" />

                <div className="mt-10 space-y-3">
                  <PreviewLine active />
                  <PreviewLine />
                  <PreviewLine />
                  <PreviewLine />
                  <PreviewLine />
                </div>

                <div className="mt-12 rounded-xl border border-white/[0.06] p-3">
                  <div className="h-2 w-12 rounded bg-white/10" />

                  <div className="mt-3 h-2 w-full rounded bg-white/[0.05]" />
                  <div className="mt-2 h-2 w-4/5 rounded bg-white/[0.04]" />
                </div>
              </aside>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="h-3 w-24 rounded bg-white/10" />
                    <div className="mt-3 h-2 w-40 rounded bg-white/[0.04]" />
                  </div>

                  <div className="h-9 w-9 rounded-full bg-white/[0.05]" />
                </div>

                {/* Cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <PreviewCard />
                  <PreviewCard />
                  <PreviewCard />
                </div>

                {/* Chart */}
                <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-5">
                  <div className="flex items-center justify-between">
                    <div className="h-2 w-20 rounded bg-white/10" />
                    <div className="h-2 w-12 rounded bg-white/[0.05]" />
                  </div>

                  <div className="mt-8 flex h-48 items-end gap-2">
                    {[35, 48, 42, 65, 55, 78, 60, 88, 72, 94, 82, 100].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t bg-gradient-to-t from-violet-500/20 to-violet-400/50"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="h-28 rounded-2xl border border-white/[0.06] bg-white/[0.015]" />
                  <div className="h-28 rounded-2xl border border-white/[0.06] bg-white/[0.015]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project information */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Sidebar */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/25">
              Project overview
            </p>

            <div className="mt-8 space-y-7">
              <Info
                title="Category"
                value={project.category}
              />

              <Info
                title="Year"
                value={project.year}
              />

              <div>
                <p className="text-xs text-white/25">Services</p>

                <div className="mt-3 space-y-2">
                  {project.services.map((service) => (
                    <p
                      key={service}
                      className="text-sm text-white/60"
                    >
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
              The challenge
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Turning a complex problem into a simple experience.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/40">
              Every product starts with a problem. CAIRN works with teams to
              understand that problem deeply, identify the right technical
              approach, and create an experience that feels simple for the
              people using it.
            </p>

            <p className="mt-5 text-base leading-8 text-white/40">
              From product architecture and interface design to engineering,
              testing, automation, and deployment, every layer is considered
              as part of one connected system.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Feature text="Scalable architecture" />
              <Feature text="Responsive product experience" />
              <Feature text="Automated workflows" />
              <Feature text="Quality-focused development" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Have a project?
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Let's build your
            <span className="block text-white/35">
              next product.
            </span>
          </h2>

          <Link
            href="/#contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black"
          >
            Start a Project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-xs text-white/20 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} CAIRN. All rights reserved.</p>

          <Link href="/" className="hover:text-white/50">
            cairn
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function PreviewLine({ active = false }: { active?: boolean }) {
  return (
    <div
      className={`h-8 rounded-lg ${
        active
          ? "bg-violet-500/10 border border-violet-400/10"
          : "bg-white/[0.02]"
      }`}
    />
  );
}

function PreviewCard() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="h-2 w-12 rounded bg-white/10" />

      <div className="mt-5 h-6 w-16 rounded bg-white/[0.05]" />

      <div className="mt-3 h-2 w-20 rounded bg-white/[0.04]" />
    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-white/25">{title}</p>
      <p className="mt-2 text-sm text-white/60">{value}</p>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/10">
        <Check size={13} className="text-violet-300" />
      </div>

      <span className="text-sm text-white/50">{text}</span>
    </div>
  );
}