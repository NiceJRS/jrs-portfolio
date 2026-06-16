import Section from "./Section";
import Reveal from "./Reveal";
import { coreValues } from "@/data/content";

export default function CoreValues() {
  return (
    <Section
      id="about"
      eyebrow="Core Value"
      title="A bilingual translator between business and engineering."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {coreValues.map((value, i) => (
          <Reveal key={value.title} delay={i * 100}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-slate-200/60">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
                <value.icon size={24} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-navy">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
