import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { IntroVideo } from "@/components/intro-video";
import { basePath } from "@/lib/site";
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
    images: [
      {
        url: "/photos/me.png",
        width: 1200,
        height: 630,
        alt: "Daniel Souza",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground vc-init intro-playing">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var html = document.documentElement;
                html.style.visibility = "hidden";
                function reveal() {
                  html.style.visibility = "";
                  requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                      document.body.classList.remove("intro-playing");
                    });
                  });
                }
                if (document.readyState === "complete") reveal();
                else {
                  window.addEventListener("load", reveal, { once: true });
                  setTimeout(reveal, 2500);
                }
              })();
            `,
          }}
        />
        <noscript>
          <style>{`html { visibility: visible !important; } body.intro-playing main, body.intro-playing footer { opacity: 1 !important; }`}</style>
        </noscript>
        <link
          rel="preload"
          as="video"
          media="(hover: hover) and (pointer: fine)"
          href={`${basePath}/videos/initial-video.mp4`}
        />
        {/*<IntroVideo />*/}
        {children}
      </body>
    </html>
  );
}
