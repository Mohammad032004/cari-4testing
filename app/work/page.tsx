import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white"
        >
          <ArrowLeft size={16} />
          Back home
        </Link>

        <div className="mt-20">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300">
            Our work
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
            Digital products
            <span className="block text-white/30">
              built to make an impact.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/40">
            Explore selected software, automation, AI, and design projects
            created by CAIRN.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-8 transition-all hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/30">
                  {project.category}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </div>

              <div className="mt-20">
                <h2 className="text-3xl font-semibold">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/35">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] text-white/40"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}