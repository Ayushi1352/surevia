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
      <div className="wrap grid gap-x-8 gap-y-10 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[330px_minmax(0,1fr)_minmax(0,1fr)_330px] xl:gap-x-8 xl:pt-[62px] xl:pr-[34px] xl:pb-[39px] xl:pl-[34px]">
        <Reveal className="sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:pr-[50px]">
          <Link href="/" aria-label={site.name} className="inline-block transition-transform duration-300 hover:scale-105">
            <Image
              src={site.logoWhite}
              alt={site.name}
              width={1359}
              height={475}
              className="h-[48px] w-auto xl:h-[76px]"
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
            <Reveal key={col.title} delay={(i + 1) * 100} className="xl:mt-[22px] xl:border-l xl:border-white/25 xl:pl-[38px]">
              <h3 className="text-[18.2px] font-semibold">{col.title}</h3>
              <ul className="mt-[14px] space-y-[7.5px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-[7px] text-[14.1px] leading-[22.5px] transition-all duration-300 hover:translate-x-1.5 hover:text-[#ffc9dc]"
                    >
                      <Icon name="chevron-right" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}

        <Reveal delay={300} className="sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:mt-[22px] xl:border-l xl:border-white/25 xl:pl-[50px]">
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
                    className="group flex cursor-pointer items-center gap-[22px] transition-colors duration-300 hover:text-[#ffc9dc]"
                  >
                    <span className="grid size-[44px] shrink-0 place-items-center rounded-full bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-plum">
                      <Icon name={item.icon} className="size-[20px]" strokeWidth={2} />
                    </span>
                    <span className="text-[13.2px] leading-[21px]">
                      {contactLines(item).map((l) => (
                        <span key={l} className="block xl:whitespace-nowrap">
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
