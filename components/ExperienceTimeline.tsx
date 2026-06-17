"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { experiences } from "@/data/content";

export default function ExperienceTimeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section
      id="experience"
      eyebrow="Career Progression"
      title="Five years building and modernizing production systems."
      className="bg-slate-50/60"
    >
      <div className="relative">
        <div className="absolute left-0 top-2 hidden h-full w-px bg-slate-200 md:block md:left-[7px]" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const isOpen = openIndex === i;
            const hasDetail =
              (exp.responsibilities && exp.responsibilities.length > 0) ||
              (exp.keyProjects && exp.keyProjects.length > 0);

            return (
              <Reveal key={exp.company} delay={i * 80}>
                <div className="relative md:pl-12">
                  <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-slate-50 bg-accent md:block" />

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-lg hover:shadow-slate-200/60">
                    {/* Header — always visible */}
                    <div className="p-8">
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
                                ri === 0 ? "text-accent" : "text-slate-500"
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

                      <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {exp.details}
                      </p>

                      {exp.award && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
                          {exp.award}
                        </div>
                      )}

                      {hasDetail && (
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : i)}
                          className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-accent transition-opacity hover:opacity-70"
                          aria-expanded={isOpen}
                        >
                          {isOpen ? "Show less" : "Show details"}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Expanded detail */}
                    {hasDetail && (
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="border-t border-slate-100 px-8 pb-8 pt-6">
                            {exp.responsibilities && exp.responsibilities.length > 0 && (
                              <div>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                  Responsibilities
                                </h4>
                                <ul className="space-y-2">
                                  {exp.responsibilities.map((r) => (
                                    <li
                                      key={r}
                                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                                    >
                                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                      {r}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {exp.keyProjects && exp.keyProjects.length > 0 && (
                              <div className={exp.responsibilities && exp.responsibilities.length > 0 ? "mt-6" : ""}>
                                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                                  Key Projects
                                </h4>
                                <div className="space-y-3">
                                  {exp.keyProjects.map((p) => (
                                    <div
                                      key={p.name}
                                      className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                                    >
                                      <p className="text-sm font-semibold text-navy">
                                        {p.name}
                                      </p>
                                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                        {p.detail}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
