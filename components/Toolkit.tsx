import { Briefcase, Code2 } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { businessSkills, techSkills } from "@/data/content";

function SkillGroup({
  icon: Icon,
  title,
  skills,
  accent,
}: {
  icon: typeof Briefcase;
  title: string;
  skills: string[];
  accent: "navy" | "blue";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${
            accent === "navy" ? "bg-navy text-white" : "bg-accent text-white"
          }`}
        >
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Toolkit() {
  return (
    <Section
      id="skills"
      eyebrow="Technical & Business Toolkit"
      title="Fluent in both business analysis and engineering."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <SkillGroup
            icon={Briefcase}
            title="Business Analysis & Delivery"
            skills={businessSkills}
            accent="navy"
          />
        </Reveal>
        <Reveal delay={100}>
          <SkillGroup
            icon={Code2}
            title="Technology & Systems"
            skills={techSkills}
            accent="blue"
          />
        </Reveal>
      </div>
    </Section>
  );
}
