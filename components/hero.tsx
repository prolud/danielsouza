import Image from "next/image";
import { basePath, site } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xs uppercase tracking-[0.35em] text-muted sm:text-sm">
                {site.role}
              </p>
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-muted">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    site.available ? "bg-emerald-500" : "bg-foreground/40"
                  }`}
                />
                {site.available ? "Disponível para projetos" : "Agenda cheia"}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              {site.name}
            </h1>

            <div className="mt-8 max-w-xl space-y-4">
              {site.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#trabalhos"
                className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
              >
                Ver trabalhos
              </a>
              <a
                href="#contato"
                className="inline-flex h-12 items-center rounded-full border border-foreground/15 px-7 text-sm font-medium transition-colors hover:border-foreground"
              >
                Entrar em contato
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-none lg:justify-self-end">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-foreground/5" />
            <Image
              src={`${basePath}/photos/me.png`}
              alt={`Foto de ${site.name}`}
              width={880}
              height={880}
              priority
              className="aspect-square w-full rounded-[2rem] object-cover shadow-2xl shadow-foreground/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
