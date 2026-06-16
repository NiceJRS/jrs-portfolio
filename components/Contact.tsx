import { Mail, Linkedin, Github, GraduationCap } from "lucide-react";
import { profile, education } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/* Education strip */}
        <div className="mb-16 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:gap-5">
          <div className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent text-white">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="font-semibold text-white">{education.degree}</p>
            <p className="text-sm text-slate-300">
              {education.school} — {education.honors}
            </p>
          </div>
        </div>

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
          Contact
        </p>
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something that delivers real impact.
        </h2>
        <p className="mt-4 max-w-xl text-slate-300">
          Open to roles bridging business strategy and technical execution.
          Reach out — I&apos;d love to talk.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
          >
            <Mail size={18} />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
