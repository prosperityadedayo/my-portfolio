"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/lib/data";
import { StatusPanel } from "@/components/status-panel";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div
        aria-hidden="true"
        className="grid-backdrop pointer-events-none absolute inset-0 text-ink-600/[0.15] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] dark:text-white/[0.06]"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="label-mono mb-5"
          >
            Full-stack developer / building since 2022
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}.
            <br />
            <span className="text-signal-teal">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 dark:text-paper/65 sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-md bg-ink-900 px-5 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5 dark:bg-signal-teal dark:text-ink-900"
            >
              View my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-ink-600/15 px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-signal-teal hover:text-signal-teal dark:border-white/15 dark:text-paper"
            >
              <Download size={16} />
              Download résumé
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 font-mono text-xs text-ink-600/70 dark:text-paper/45"
          >
            core: React · Django · Flask · Python · MySQL · WordPress
          </motion.p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <StatusPanel />
        </div>
      </div>
    </section>
  );
}
