import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Impact"
      title="Five years modernizing banking and digital platforms."
      className="bg-slate-50/60"
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-2 hidden h-full w-px bg-slate-200 md:block md:left-[7px]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <div className="relative md:pl-12">
                {/* Dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-slate-50 bg-accent md:block" />

                <div className="rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-slate-200/60">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-navy">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-accent">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {exp.context}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-3 text-sm leading-relaxed text-slate-700"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/60" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-4 border-t border-slate-100 pt-5">
                    {exp.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="text-base font-bold text-navy">
                          {m.value}
                        </p>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
