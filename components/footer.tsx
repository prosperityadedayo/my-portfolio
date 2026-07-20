import Link from "next/link";
import { Github, Linkedin, Facebook } from "lucide-react";
import { profile, nav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink-600/10 py-12 dark:border-white/10">
      <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 max-w-xs text-sm text-ink-600 dark:text-paper/60">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <nav className="flex gap-4 text-sm text-ink-600 dark:text-paper/60">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-signal-teal">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3">
            <a
              href={profile.social.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600/10 text-ink-600 transition-colors hover:text-signal-teal dark:border-white/10 dark:text-paper/60"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.social.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600/10 text-ink-600 transition-colors hover:text-signal-teal dark:border-white/10 dark:text-paper/60"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={profile.social.facebook}
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600/10 text-ink-600 transition-colors hover:text-signal-teal dark:border-white/10 dark:text-paper/60"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-10 flex flex-col gap-2 border-t border-ink-600/10 pt-6 text-xs text-ink-600/70 sm:flex-row sm:items-center sm:justify-between dark:border-white/10 dark:text-paper/40">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="font-mono">Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
