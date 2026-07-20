import type { Metadata } from "next";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} about freelance work or full-time opportunities.`,
};

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", href: profile.social.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.social.linkedin },
  { icon: Facebook, label: "Facebook", href: profile.social.facebook },
];

export default function ContactPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="container-page grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="label-mono mb-4">Contact</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s work together.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-600 dark:text-paper/65">
            Have a project, a role, or just a question? Send a message and I&apos;ll get back to
            you within a day.
          </p>

          <div className="mt-10 space-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="card-surface flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:border-signal-teal"
              >
                <link.icon size={16} className="text-signal-teal" />
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="card-surface rounded-2xl p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
