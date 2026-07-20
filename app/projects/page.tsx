import type { Metadata } from "next";
import { ProjectsGrid } from "./projects-grid";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: `Client and personal projects built by ${profile.name}, spanning full-stack web apps and desktop tools.`,
};

export default function ProjectsPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="container-page">
        <p className="label-mono mb-4">Work</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 dark:text-paper/65">
          Client builds and personal experiments — filter by type to see what fits what you need.
        </p>
      </div>

      <div className="container-page mt-14">
        <ProjectsGrid />
      </div>
    </div>
  );
}
