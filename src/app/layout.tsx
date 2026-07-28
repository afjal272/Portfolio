import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ScrollProgress from "@/components/animations/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // Replace with your domain

  title: {
    default: "Md Afjal Ali | Full Stack Developer",
    template: "%s | Md Afjal Ali",
  },

  description:
    "Portfolio of Md Afjal Ali, a Full Stack Developer specializing in React, Next.js, TypeScript, Node.js and modern web technologies. Explore my projects, experience and skills.",

  keywords: [
    "Md Afjal Ali",
    "Afjal",
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
  ],

  authors: [
    {
      name: "Md Afjal Ali",
    },
  ],

  creator: "Md Afjal Ali",

  publisher: "Md Afjal Ali",

  applicationName: "Md Afjal Ali Portfolio",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Md Afjal Ali Portfolio",
    title: "Md Afjal Ali | Full Stack Developer",
    description:
      "Portfolio showcasing my projects, experience and expertise in React, Next.js, TypeScript and modern web development.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md Afjal Ali Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Md Afjal Ali | Full Stack Developer",
    description:
      "Explore my portfolio, projects and experience in modern web development.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://your-domain.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <ScrollProgress />

       <SmoothScroll />

      <Navbar />

      <main>{children}</main>
      </body>
    </html>
  );
}