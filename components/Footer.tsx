import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { contact, contactLines } from "@/lib/contact";
import data from "@/data";

const { site, footer, plans } = data;

// Where each "Get In Touch" row leads; rows without an entry open the contact page.
const contactHrefs: Record<string, string> = {
  address: `https://www.google.com/maps?q=${encodeURIComponent(contact.address)}`,
  phone: `tel:${contact.phone.replace(/s/g, "")}`,
  email: `mailto:${contact.email}`,
};

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 grid grid-cols-2 gap-x-4 gap-y-8 pt-14 pb-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[15rem_minmax(0,1fr)_minmax(0,1fr)_16.875rem] lg:gap-x-6 lg:gap-y-0 lg:pt-[3.875rem] lg:pb-[2.4375rem] xl:grid-cols-[20.625rem_minmax(0,1fr)_minmax(0,1fr)_20.625rem] xl:gap-x-8 xl:pt-[3.875rem] xl:pr-[2.125rem] xl:pb-[2.4375rem] xl:pl-[2.125rem]">
        <Reveal className="col-span-2 sm:col-span-1 lg:pr-[0.625rem] xl:pr-[3.125rem]">
          <Link href="/" aria-label={site.name} className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src={site.logoWhite}
              alt={site.name}
              width={1359}
              height={475}
              className="h-[3rem] w-auto lg:h-[3.75rem] xl:h-[4.75rem]"
            />
          </Link>
          <p className="mt-[0.75rem] max-w-[18.125rem] text-[0.91875rem] leading-[1.3125rem] xl:max-w-[17.25rem]">{footer.about}</p>
          <ul className="mt-[1.0625rem] flex gap-[0.875rem]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-[2.75rem] place-items-center rounded-full border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-plum"
                >
                  <Icon name={s.icon} className="size-[1.25rem]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {footer.columns.map((col, i) => {
          const links =
            col.source === "plans"
              ? plans.items.map((plan) => ({ label: plan.title, href: plan.href }))
              : col.links;

          return (
            <Reveal key={col.title} delay={(i + 1) * 100} className="lg:mt-[1.375rem] lg:border-l lg:border-white/25 lg:pl-[1.375rem] xl:pl-[2.375rem]">
              <h3 className="text-[0.875rem] font-semibold sm:text-[1.1375rem]">{col.title}</h3>
              <ul className="mt-[0.625rem] space-y-[0.3125rem] sm:mt-[0.875rem] sm:space-y-[0.46875rem]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-[0.25rem] text-[0.6875rem] leading-[1.0625rem] transition-all duration-300 hover:translate-x-1.5 hover:text-[#ffc9dc] sm:gap-[0.4375rem] sm:text-[0.88125rem] sm:leading-[1.40625rem]"
                    >
                      <Icon name="chevron-right" className="size-[0.8125rem] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-4" strokeWidth={2} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}

        <Reveal delay={300} className="col-span-2 sm:col-span-1 lg:mt-[1.375rem] lg:border-l lg:border-white/25 lg:pl-[1.375rem] xl:pl-[3.125rem]">
          <h3 className="text-[1.1375rem] font-semibold">{footer.contactTitle}</h3>
          <ul className="mt-[0.9375rem] space-y-[0.25rem]">
            {footer.contact.map((item) => {
              const href = contactHrefs[item.field] ?? "/contact-us";
              const external = href.startsWith("http");
              return (
                <li key={item.icon}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex cursor-pointer items-center gap-[1.375rem] transition-colors duration-300 hover:text-[#ffc9dc] lg:gap-[0.75rem] xl:gap-[1.375rem]"
                  >
                    <span className="grid size-[2.75rem] shrink-0 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-plum">
                      <Icon name={item.icon} className="size-[1.25rem]" strokeWidth={2} />
                    </span>
                    <span className="text-[0.825rem] leading-[1.3125rem]">
                      {contactLines(item).map((l, idx) => (
                        <span key={`${item.field ?? item.icon}-${idx}`} className="block xl:whitespace-nowrap">
                          {l}
                        </span>
                      ))}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>

      <div className="border-t border-white/25">
        <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left xl:py-[1.5rem]">
          <p className="text-[0.84375rem]">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-y-3 xl:-mr-[0.5625rem]">
            <ul className="flex flex-wrap items-center justify-center text-[0.70625rem]">
              {footer.bottomLinks.map((link) => (
                <li key={link.label} className="border-r border-white/40 px-4 last:border-0 sm:px-[1.6875rem] sm:last:border-r">
                  <Link href={link.href} className="transition-colors hover:text-[#ffc9dc] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#"
              aria-label={site.labels.backToTop}
              className="group ml-4 grid size-[2.5rem] place-items-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-plum sm:ml-[1.875rem]"
            >
              <Icon name="arrow-up" className="size-[1.125rem] group-hover:animate-bounce" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
