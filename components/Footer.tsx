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
      <div className="wrap grid grid-cols-2 gap-x-4 gap-y-8 pt-14 pb-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)_270px] lg:gap-x-6 lg:gap-y-0 lg:pt-[62px] lg:pb-[39px] xl:grid-cols-[330px_minmax(0,1fr)_minmax(0,1fr)_330px] xl:gap-x-8 xl:pt-[62px] xl:pr-[34px] xl:pb-[39px] xl:pl-[34px]">
        <Reveal className="col-span-2 sm:col-span-1 lg:pr-[10px] xl:pr-[50px]">
          <Link href="/" aria-label={site.name} className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src={site.logoWhite}
              alt={site.name}
              width={1359}
              height={475}
              className="h-[48px] w-auto lg:h-[60px] xl:h-[76px]"
            />
          </Link>
          <p className="mt-[12px] max-w-[290px] text-[14.7px] leading-[21px] xl:max-w-[276px]">{footer.about}</p>
          <ul className="mt-[17px] flex gap-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-[44px] place-items-center rounded-full border border-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-plum"
                >
                  <Icon name={s.icon} className="size-[20px]" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {footer.columns.map((col, i) => {
          const links =
            col.source === "plans"
              ? plans.items.map((plan) => ({ label: plan.title, href: `/insurance-plans/${plan.slug}` }))
              : col.links;

          return (
            <Reveal key={col.title} delay={(i + 1) * 100} className="lg:mt-[22px] lg:border-l lg:border-white/25 lg:pl-[22px] xl:pl-[38px]">
              <h3 className="text-[14px] font-semibold sm:text-[18.2px]">{col.title}</h3>
              <ul className="mt-[10px] space-y-[5px] sm:mt-[14px] sm:space-y-[7.5px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-[4px] text-[11px] leading-[17px] transition-all duration-300 hover:translate-x-1.5 hover:text-[#ffc9dc] sm:gap-[7px] sm:text-[14.1px] sm:leading-[22.5px]"
                    >
                      <Icon name="chevron-right" className="size-[13px] shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 sm:size-4" strokeWidth={2} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}

        <Reveal delay={300} className="col-span-2 sm:col-span-1 lg:mt-[22px] lg:border-l lg:border-white/25 lg:pl-[22px] xl:pl-[50px]">
          <h3 className="text-[18.2px] font-semibold">{footer.contactTitle}</h3>
          <ul className="mt-[15px] space-y-[4px]">
            {footer.contact.map((item) => {
              const href = contactHrefs[item.field] ?? "/contact-us";
              const external = href.startsWith("http");
              return (
                <li key={item.icon}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="group flex cursor-pointer items-center gap-[22px] transition-colors duration-300 hover:text-[#ffc9dc] lg:gap-[12px] xl:gap-[22px]"
                  >
                    <span className="grid size-[44px] shrink-0 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-plum">
                      <Icon name={item.icon} className="size-[20px]" strokeWidth={2} />
                    </span>
                    <span className="text-[13.2px] leading-[21px]">
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
        <div className="wrap flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left xl:py-[24px]">
          <p className="text-[13.5px]">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-y-3 xl:-mr-[9px]">
            <ul className="flex flex-wrap items-center justify-center text-[11.3px]">
              {footer.bottomLinks.map((link) => (
                <li key={link.label} className="border-r border-white/40 px-4 last:border-0 sm:px-[27px] sm:last:border-r">
                  <Link href={link.href} className="transition-colors hover:text-[#ffc9dc] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#"
              aria-label="Back to top"
              className="group ml-4 grid size-[40px] place-items-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-plum sm:ml-[30px]"
            >
              <Icon name="arrow-up" className="size-[18px] group-hover:animate-bounce" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
