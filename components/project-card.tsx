"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Download } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="card-surface group flex h-full flex-col overflow-hidden rounded-xl transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-700">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-mono text-xs text-paper/30">
            preview unavailable
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600 dark:text-paper/60">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-ink-600/10 px-2 py-0.5 font-mono text-[10px] text-ink-600 dark:border-white/10 dark:text-paper/55"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 border-t border-ink-600/10 pt-4 text-sm font-medium dark:border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-signal-teal hover:underline"
            >
              View live <ArrowUpRight size={14} />
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-ink-600 hover:text-signal-teal dark:text-paper/60"
            >
              <Github size={14} /> Code
            </a>
          )}
          {project.downloadUrl && (
            <a
              href={project.downloadUrl}
              download={project.downloadName}
              className="inline-flex items-center gap-1 text-ink-600 hover:text-signal-teal dark:text-paper/60"
            >
              <Download size={14} /> Download
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
