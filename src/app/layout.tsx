import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thermodynamique - Adil_Err",
  description: "Mon outil de revision pour le cours de Thermodynamique. Flashcards, Quiz, Formules et Resume des 6 seances.",
  keywords: ["Thermodynamique", "Physique", "Revision", "Cours", "Flashcards", "Quiz", "Adil_Err"],
  authors: [{ name: "Adil_Err" }],
  openGraph: {
    title: "Thermodynamique - Adil_Err",
    description: "Mon outil de revision pour le cours de Thermodynamique",
    url: "https://thermodynamique.revision",
    siteName: "Thermodynamique Revision",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermodynamique - Adil_Err",
    description: "Mon outil de revision pour le cours de Thermodynamique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
