import Section from "./Section";
import Reveal from "./Reveal";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { featuredProjects } from "@/data/content";

export default function FeaturedProjects() {
  return (
    <Section
      id="featured"
      eyebrow="Featured Builds"
      title="Products I designed, built, and shipped end-to-end."
    >
      <div className="space-y-10">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.name} delay={i * 60}>
            <FeaturedProjectCard project={project} reversed={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
