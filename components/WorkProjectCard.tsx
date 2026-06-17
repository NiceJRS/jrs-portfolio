"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import type { WorkProject } from "@/data/content";

export default function WorkProjectCard({ project }: { project: WorkProject }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-slate-200/60">
      {/* Image / placeholder */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-slate-100 bg-gradient-to-br from-navy to-slate-700">
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="h-full w-full object-cover"
            onError={() => setImgOk(false)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400">
            <ImageIcon size={28} />
            <span className="px-4 text-center text-xs">{project.name}</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h4 className="text-base font-semibold text-navy">{project.name}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
