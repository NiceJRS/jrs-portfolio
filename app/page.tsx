import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Toolkit from "@/components/Toolkit";
import FeaturedProjects from "@/components/FeaturedProjects";
import Projects from "@/components/Projects";
import EducationAwards from "@/components/EducationAwards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CoreValues />
      <ExperienceTimeline />
      <Toolkit />
      <FeaturedProjects />
      <Projects />
      <EducationAwards />
      <Contact />
      <Footer />
    </main>
  );
}
