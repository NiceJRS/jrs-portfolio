import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm">Built with Next.js, Tailwind CSS & deployed on Vercel.</p>
      </div>
    </footer>
  );
}
