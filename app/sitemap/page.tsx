import type { Metadata } from "next";
import Link from "next/link";
import Banner from "@/components/Banner";
import Reveal from "@/components/Reveal";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

const { nav, footer, sitemap } = data;
const title = pageTitle("/sitemap");

export const metadata: Metadata = { title };

// Built from the footer's own link lists so the sitemap can't drift from them
const pageLinks = [...footer.columns[0].links, nav.button];
const policyLinks = footer.bottomLinks.filter((link) => link.href !== "/sitemap");

export default function SitemapPage() {
  return (
    <>
      <Banner title={title} />
      <section className="bg-white section-pad">
        <div className="wrap max-w-[1100px]">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            <Reveal>
              <h2 className="border-b border-line pb-3 font-heading text-[20px] font-semibold text-ink">{sitemap.pagesTitle}</h2>
              <ul className="mt-4 space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-block text-[14.5px] text-body transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="border-b border-line pb-3 font-heading text-[20px] font-semibold text-ink">{pageTitle("/insurance-plans")}</h2>
              <ul className="mt-4 space-y-3">
                {data.plans.items.map((plan) => (
                  <li key={plan.slug}>
                    <Link href={`/insurance-plans/${plan.slug}`} className="inline-block text-[14.5px] text-body transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                      {plan.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={240}>
              <h2 className="border-b border-line pb-3 font-heading text-[20px] font-semibold text-ink">{sitemap.policiesTitle}</h2>
              <ul className="mt-4 space-y-3">
                {policyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="inline-block text-[14.5px] text-body transition-all duration-300 hover:translate-x-1.5 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}