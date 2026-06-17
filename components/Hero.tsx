import { ArrowRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-32">
        <div className="animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-300">
            <MapPin size={14} className="text-accent-light" />
            {profile.location}
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            {profile.name}
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.role}
          </h1>

          <p className="mt-5 max-w-2xl text-xl font-medium text-slate-200 sm:text-2xl">
            {profile.headline}
          </p>

          <p className="mt-4 max-w-2xl text-base text-slate-400">
            {profile.subtext}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#featured"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-light"
            >
              View My Work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
