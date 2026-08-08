import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Souza — Motion Graphic Designer",
  description:
    "Portfólio de motion graphic design: identidades animadas, direção de arte e narrativas que dão vida a marcas.",
  keywords: [
    "motion design",
    "motion graphic designer",
    "portfólio",
    "direção de arte",
    "animação",
  ],
  openGraph: {
    title: "Daniel Souza — Motion Graphic Designer",
    description:
      "Portfólio de motion graphic design: identidades animadas, direção de arte e narrativas que dão vida a marcas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
