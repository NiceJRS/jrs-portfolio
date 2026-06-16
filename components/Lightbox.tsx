"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type LightboxProps = {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function Lightbox({
  images,
  index,
  alt,
  onClose,
  onNavigate,
}: LightboxProps) {
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const multiple = images.length > 1;

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute right-4 top-4 z-20 rounded-full bg-black/60 p-2.5 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-accent"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {multiple && (
        <button
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-accent sm:left-6"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[index]}
        alt={alt}
        className="max-h-[82vh] max-w-[78vw] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {multiple && (
        <button
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white shadow-lg ring-1 ring-white/20 transition-colors hover:bg-accent sm:right-6"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {multiple && (
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white ring-1 ring-white/20">
          {index + 1} / {images.length}
        </div>
      )}
    </div>,
    document.body
  );
}
