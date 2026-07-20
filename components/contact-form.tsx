"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

// Replace with your own Web3Forms access key (get one free at web3forms.com).
// Keeping it in an env var keeps it out of your source control history.
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="hidden"
        name="access_key"
        value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY"}
      />
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
          Your name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your Name"
          className="w-full rounded-md border border-ink-600/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-signal-teal dark:border-white/15"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
          Your email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-md border border-ink-600/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-signal-teal dark:border-white/15"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-md border border-ink-600/15 bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-signal-teal dark:border-white/15"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status === "loading"}
        whileTap={{ scale: 0.98 }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink-900 px-5 py-3.5 text-sm font-medium text-paper transition-colors disabled:opacity-60 dark:bg-signal-teal dark:text-ink-900"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            <Send size={16} /> Send message
          </>
        )}
      </motion.button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-signal-teal">
          <CheckCircle2 size={16} /> Message sent — I&apos;ll reply within a day.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-signal-coral">
          <AlertCircle size={16} /> Something went wrong. Email me directly instead.
        </p>
      )}
    </form>
  );
}
