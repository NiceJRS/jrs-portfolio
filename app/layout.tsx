import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaroensak Jantaranimi — Software Engineer & Tech Business Analyst",
  description:
    "Software Engineer & Tech Business Analyst with 5 years of experience in Banking and Digital Platforms. Translating business strategy into scalable technology solutions.",
  keywords: [
    "Jaroensak Jantaranimi",
    "Software Engineer",
    "Tech Business Analyst",
    "System Analyst",
    "Banking",
    "Krungsri WeMerchant",
    "ChocoCRM",
  ],
  authors: [{ name: "Jaroensak Jantaranimi" }],
  openGraph: {
    title: "Jaroensak Jantaranimi — Software Engineer & Tech Business Analyst",
    description:
      "Translating Business Strategy into Scalable Technology Solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
