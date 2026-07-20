import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { SkillBar } from "@/components/skill-bar";
import { projects, skillLevels, stack } from "@/lib/data";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* Stack marquee */}
      <section className="border-y border-ink-600/10 py-4 dark:border-white/10">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee gap-10 font-mono text-sm text-ink-600/50 dark:text-paper/30">
            {[...stack, ...stack].map((s, i) => (
              <span key={`${s.name}-${i}`} className="whitespace-nowrap">
                {s.name} <span className="mx-2 text-signal-teal/60">/</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Systems shipped for real businesses"
              description="A mix of client websites and internal tools — each one solving a specific operational problem, not just looking good."
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-signal-teal hover:underline"
            >
              All projects <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills preview */}
      <section className="border-t border-ink-600/10 py-24 dark:border-white/10">
        <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Capability"
            title="What I bring to a team"
            description="Full-stack coverage with a bias toward backend logic and data — I build the interface, but I care most about whether the system underneath actually holds up."
          />
          <div className="space-y-6">
            {skillLevels.map((skill) => (
              <SkillBar key={skill.label} label={skill.label} value={skill.value} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="card-surface flex flex-col items-start gap-6 rounded-2xl p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                Have a project that needs shipping?
              </h2>
              <p className="mt-2 max-w-md text-ink-600 dark:text-paper/60">
                I&apos;m open to freelance builds and full-time roles. Tell me what you&apos;re
                trying to solve.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-ink-900 px-6 py-3.5 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-signal-teal dark:text-ink-900"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
