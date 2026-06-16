import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { projects } from "@/data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Key Projects"
      title="Systems built for banking and high-volume commerce."
      className="bg-slate-50/60"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-slate-200/60">
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-slate-300 transition-colors group-hover:text-accent"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-navy">{p.name}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {p.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
