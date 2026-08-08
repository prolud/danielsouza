import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="sobre" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted">
              Sobre
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {site.yearsOfExperience}+ anos dando vida a marcas
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Cada projeto começa com uma boa ideia e termina com movimento que
              comunica. Trabalho lado a lado com marcas, agências e produtoras
              para criar peças que prendem a atenção e contam histórias.
            </p>
          </div>

          <div id="contato" className="flex flex-col justify-between gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Contato
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 inline-block text-2xl font-medium tracking-tight underline decoration-foreground/20 underline-offset-8 transition-colors hover:decoration-foreground sm:text-4xl"
              >
                {site.email}
              </a>
            </div>

            <ul className="flex flex-wrap gap-x-8 gap-y-4">
              {site.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
