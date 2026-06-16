import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreValues from "@/components/CoreValues";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Toolkit from "@/components/Toolkit";
import Projects from "@/components/Projects";
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
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
