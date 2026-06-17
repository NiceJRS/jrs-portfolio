import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      eyebrow="Career Progression"
      title="Five years building and modernizing production systems."
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
                      {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-slate-500">
                      {exp.period}
                      {exp.location ? ` · ${exp.location}` : ""}
                    </span>
                  </div>

                  {/* Role progression */}
                  <div className="mt-4 space-y-2 border-l-2 border-slate-100 pl-4">
                    {exp.roles.map((role, ri) => (
                      <div
                        key={role.title}
                        className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between"
                      >
                        <span
                          className={`text-sm font-semibold ${
                            ri === 0 ? "text-accent" : "text-slate-600"
                          }`}
                        >
                          {role.title}
                        </span>
                        <span className="text-xs text-slate-400">
                          {role.period}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-700">
                    {exp.details}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
