import { site } from "@/lib/site";

export function Marquee() {
  const items = [...site.marquee, ...site.marquee];
  return (
    <div className="overflow-hidden border-y border-foreground/10 py-5">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center text-sm uppercase tracking-[0.25em] text-muted"
          >
            <span className="px-6 sm:px-10">{item}</span>
            <span className="text-foreground/30" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
