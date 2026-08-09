import type { Project } from "@/lib/site";
import { basePath, site } from "@/lib/site";

function ProjectVideo({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Vídeo do projeto ${project.title}`}
        data-vc-watched="true"
        data-vc-page-audio-managed="true"
      >
        <source src={`${basePath}${project.src}`} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen items-end">
        <div className="flex w-full items-end justify-between gap-6 p-6 text-white sm:p-10 lg:p-14">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              {project.tag}
            </p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {project.description}
            </p>
          </div>
          <p className="hidden shrink-0 font-mono text-lg text-white/60 sm:block">
            {number} / {String(site.projects.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="trabalhos" className="bg-black">
      <div className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted">
                Seleção de trabalhos
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
                Movimento em destaque
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted sm:text-base">
              Uma amostra de projetos que unem ritmo, direção de arte e
              storytelling. Vídeos em loop, prontos para ver.
            </p>
          </div>
        </div>
      </div>

      {site.projects.map((project, index) => (
        <ProjectVideo key={project.src} project={project} index={index} />
      ))}
    </section>
  );
}
