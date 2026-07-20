"use client";

import { motion } from "framer-motion";
import { profile, stack } from "@/lib/data";

const readout = [
  { label: "uptime", value: "3 yrs building" },
  { label: "stack", value: "Python · Django · JS" },
  { label: "based_in", value: "Nigeria (remote-ready)" },
  { label: "response_time", value: "< 24h" },
];

export function StatusPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="relative w-full max-w-md overflow-hidden rounded-xl border border-ink-600/10 bg-ink-900 text-paper shadow-2xl dark:border-white/10"
    >
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-signal-coral/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-teal/80" />
        </div>
        <span className="font-mono text-[11px] text-paper/40">~/prosperity/status</span>
      </div>

      <div className="space-y-5 p-5">
        <div className="flex items-center justify-between">
          <span className="label-mono">status</span>
          <span className="flex items-center gap-2 font-mono text-xs text-signal-teal">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-teal opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-teal" />
            </span>
            {profile.status}
          </span>
        </div>

        <dl className="grid grid-cols-1 gap-3 border-t border-white/10 pt-4">
          {readout.map((row) => (
            <div key={row.label} className="flex items-center justify-between gap-4">
              <dt className="font-mono text-xs text-paper/45">{row.label}</dt>
              <dd className="text-right font-mono text-xs text-paper/85">{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="border-t border-white/10 pt-4">
          <p className="label-mono mb-2">stack.json</p>
          <div className="flex flex-wrap gap-1.5">
            {stack.slice(0, 8).map((s) => (
              <span
                key={s.name}
                className="rounded border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-paper/70"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
