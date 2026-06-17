import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaroensak Jantaranimi — Product-Minded Software Engineer",
  description:
    "Product-Minded Software Engineer with 5 years of experience building, modernizing, and scaling enterprise systems for banking, CRM, and digital platforms.",
  keywords: [
    "Jaroensak Jantaranimi",
    "Software Engineer",
    "Product-Minded Software Engineer",
    "System Analyst",
    "Banking",
    "Krungsri WeMerchant",
    "ChocoCRM",
    "POS",
    "CRM",
  ],
  authors: [{ name: "Jaroensak Jantaranimi" }],
  openGraph: {
    title: "Jaroensak Jantaranimi — Product-Minded Software Engineer",
    description:
      "Bridging the gap between business strategy and scalable engineering.",
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
