import Section from "./Section";
import Reveal from "./Reveal";
import WorkProjectCard from "./WorkProjectCard";
import { projectGroups } from "@/data/content";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Key Projects"
      title="Deliverables across banking, enterprise, and high-volume commerce."
      className="bg-slate-50/60"
    >
      <div className="space-y-12">
        {projectGroups.map((group) => (
          <div key={group.category}>
            <h3 className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.15em] text-navy">
              <span className="h-px w-8 bg-accent" />
              {group.category}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((project, i) => (
                <Reveal key={project.name} delay={i * 80}>
                  <WorkProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
