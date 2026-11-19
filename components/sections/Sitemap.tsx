import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import type { SitemapProps } from "@/types/templates.types";

export const Sitemap = ({ data }: SitemapProps) => {
  if (!data) return null;
  return (
    <section data-section-pad className="bg-[var(--color-white)] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
        <div className="mx-auto w-full max-w-[68.75rem] px-5 sm:px-8 xl:px-[3.75rem]">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {data.groups.map((group, i) => (
              <Reveal key={group.id} delay={i * 120}>
                <h2 className="border-b border-[var(--color-border)] pb-3 font-heading text-[1.25rem] font-semibold text-[var(--color-heading)]">{group.title}</h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.url} className="inline-block text-[0.90625rem] text-[var(--color-text)] transition-all duration-300 hover:translate-x-1.5 hover:text-[var(--color-primary)]">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
  );
};
