"use client";

import * as React from "react";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All" },
  { key: "client", label: "Client work" },
  { key: "personal", label: "Personal / fun" },
] as const;

export function ProjectsGrid() {
  const [active, setActive] = React.useState<(typeof filters)[number]["key"]>("all");

  const filtered = projects.filter((p) => active === "all" || p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f.key
                ? "border-signal-teal bg-signal-teal/10 text-signal-teal"
                : "border-ink-600/15 text-ink-600 hover:border-signal-teal/50 dark:border-white/15 dark:text-paper/60"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
