"use client";

import { motion } from "framer-motion";

export function SkillBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="font-mono text-xs text-ink-600/70 dark:text-paper/45">{value}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-600/10 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-signal-teal"
        />
      </div>
    </div>
  );
}
