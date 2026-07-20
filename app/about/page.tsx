import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { profile, stack, certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${profile.name}'s background, skills, and the tools she builds with.`,
};

const grouped = stack.reduce<Record<string, typeof stack>>((acc, item) => {
  acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
  return acc;
}, {});

export default function AboutPage() {
  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.7fr] lg:items-start">
          <div>
            <p className="label-mono mb-4">About</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Building software that runs the boring parts of a business well.
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-600 dark:text-paper/65">
              {profile.longBio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-ink-600/10 bg-ink-700 dark:border-white/10">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      {/* Tech stack */}
      <section className="mt-24">
        <div className="container-page">
          <SectionHeading eyebrow="Toolbox" title="Tech stack" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <p className="label-mono mb-3">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item.name}
                      className="card-surface rounded-md px-3 py-1.5 text-sm font-medium"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="mt-24">
        <div className="container-page">
          <SectionHeading eyebrow="Path so far" title="Experience" />
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-24">
        <div className="container-page">
          <SectionHeading eyebrow="Credentials" title="Certifications" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="card-surface flex items-start gap-3 rounded-lg p-4 text-sm"
              >
                <Award size={16} className="mt-0.5 shrink-0 text-signal-teal" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
