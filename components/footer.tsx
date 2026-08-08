import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row sm:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href="#inicio"
          className="text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
