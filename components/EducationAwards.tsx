import Section from "./Section";
import Reveal from "./Reveal";
import { GraduationCap, Trophy } from "lucide-react";
import { education, awards } from "@/data/content";

export default function EducationAwards() {
  return (
    <Section
      id="education"
      eyebrow="Education & Awards"
      title="Academic foundation and professional recognition."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* Education */}
        <Reveal delay={0}>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy/5">
              <GraduationCap size={20} className="text-navy" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Education
              </p>
              <h3 className="mt-2 text-base font-semibold text-navy">
                {education.school}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{education.degree}</p>
              <span className="mt-3 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {education.honors}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Awards */}
        <Reveal delay={80}>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <Trophy size={20} className="text-amber-500" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Awards & Recognition
              </p>
              <div className="mt-3 space-y-4">
                {awards.map((a) => (
                  <div key={a.title}>
                    <p className="text-base font-semibold text-navy">{a.title}</p>
                    <p className="text-sm font-medium text-slate-500">
                      {a.organization}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {a.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
