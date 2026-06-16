"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Download,
  KeyRound,
  Layers,
  ImageIcon,
  Expand,
} from "lucide-react";
import type { FeaturedProject } from "@/data/content";
import Lightbox from "./Lightbox";

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
  const [active, setActive] = useState(0);
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const coverOk = !broken[active];
  const hasThumbs = project.images.length > 1;

  return (
    <div className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-2 lg:gap-12">
      {/* Gallery */}
      <div className={reversed ? "lg:order-2" : ""}>
        <button
          type="button"
          onClick={() => coverOk && setLightboxIndex(active)}
          className="group relative block aspect-[16/10] w-full cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-navy to-slate-700"
          aria-label="Enlarge image"
        >
          {coverOk ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.images[active]}
                alt={`${project.name} screenshot ${active + 1}`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                onError={() => setBroken((b) => ({ ...b, [active]: true }))}
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy opacity-0 transition-opacity group-hover:opacity-100">
                  <Expand size={14} /> Click to enlarge
                </span>
              </span>
            </>
          ) : (
            <span className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-300">
              <ImageIcon size={32} />
              <span className="text-xs">{project.name}</span>
            </span>
          )}
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "desktop" ? "bg-amber-400" : "bg-emerald-400"
              } ${project.status !== "desktop" ? "animate-pulse" : ""}`}
            />
            {statusLabel[project.status]}
          </span>
        </button>

        {hasThumbs && (
          <div className="mt-3 flex gap-2">
            {project.images.map((img, i) => (
              <button
                key={img}
                type="button"
                onClick={() => setActive(i)}
                className={`relative aspect-[16/10] w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                  i === active
                    ? "border-accent"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  onError={() => setBroken((b) => ({ ...b, [i]: true }))}
                />
              </button>
            ))}
          </div>
        )}
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

      {lightboxIndex !== null && (
        <Lightbox
          images={project.images}
          index={lightboxIndex}
          alt={project.name}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => {
            setLightboxIndex(i);
            setActive(i);
          }}
        />
      )}
    </div>
  );
}
