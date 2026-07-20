"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export function Timeline() {
  return (
    <ol className="relative space-y-10 border-l border-ink-600/15 pl-8 dark:border-white/15">
      {experience.map((item, i) => (
        <motion.li
          key={item.role + item.period}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative"
        >
          <span className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full border-2 border-signal-teal bg-paper dark:bg-ink-900" />
          <p className="label-mono mb-1">{item.period}</p>
          <h3 className="font-display text-lg font-semibold">{item.role}</h3>
          <p className="text-sm font-medium text-ink-600 dark:text-paper/50">{item.org}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-600 dark:text-paper/60">
            {item.description}
          </p>
        </motion.li>
      ))}
    </ol>
  );
}
