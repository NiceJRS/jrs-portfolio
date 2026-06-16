"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  KeyRound,
  Layers,
  ImageIcon,
} from "lucide-react";
import type { FeaturedProject } from "@/data/content";

const statusLabel: Record<FeaturedProject["status"], string> = {
  live: "Live on Azure",
  demo: "Live Demo",
  desktop: "Desktop App",
};

export default function FeaturedProjectCard({
  project,
  reversed,
}: {
  project: FeaturedProject;
  reversed: boolean;
}) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      {/* Preview */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-navy to-slate-700">
          {imgOk ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={`${project.name} screenshot`}
              className="h-full w-full object-cover object-top"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-300">
              <ImageIcon size={32} />
              <span className="text-xs">{project.name}</span>
            </div>
          )}
          <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "desktop" ? "bg-amber-400" : "bg-emerald-400"
              } ${project.status !== "desktop" ? "animate-pulse" : ""}`}
            />
            {statusLabel[project.status]}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
          {project.category}
        </span>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-navy">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {project.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((f) => (
            <li
              key={f}
              className="flex gap-3 text-sm leading-relaxed text-slate-700"
            >
              <Layers
                size={16}
                className="mt-0.5 flex-shrink-0 text-accent/70"
              />
              {f}
            </li>
          ))}
        </ul>

        {project.credentials && (
          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <KeyRound size={14} /> Demo access
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
              {project.credentials.map((c) => (
                <span key={c.role} className="text-slate-700">
                  <span className="font-semibold text-navy">{c.role}:</span>{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-accent">
                    {c.username}
                  </code>{" "}
                  /{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-accent">
                    {c.password}
                  </code>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => {
            const isDownload = link.label.toLowerCase().includes("download");
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  link.variant === "primary"
                    ? "bg-navy text-white hover:bg-accent"
                    : "border border-slate-300 text-navy hover:bg-slate-50"
                }`}
              >
                {isDownload ? <Download size={16} /> : null}
                {link.label}
                {!isDownload && (
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                )}
              </a>
            );
          })}
        </div>

        {project.note && (
          <p className="mt-4 text-xs italic text-slate-500">{project.note}</p>
        )}
      </div>
    </div>
  );
}
