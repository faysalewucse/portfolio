import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ScrollRevealer } from "./components/ScrollRevealer";
import { SmoothScroll } from "./components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faysal Ahmed — Mobile & Full-Stack Engineer",
  description:
    "Mobile Application Developer at Nerddevs Limited. I build and ship mobile and full-stack web products — Play Store, App Store, and VPS.",
  metadataBase: new URL("https://faysalahmed.dev"),
  openGraph: {
    title: "Faysal Ahmed — Mobile & Full-Stack Engineer",
    description:
      "Mobile Application Developer at Nerddevs Limited. I build and ship mobile and full-stack web products — Play Store, App Store, and VPS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        {children}
        <SmoothScroll />
        <ScrollRevealer />
      </body>
    </html>
  );
}
