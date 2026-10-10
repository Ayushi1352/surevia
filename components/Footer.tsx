import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { contactLines } from "@/lib/contact";
import data from "@/data";

const { site, footer, plans } = data;

export default function Footer() {
  return (
    <footer className="bg-plum text-white">
      <div className="wrap grid gap-x-8 gap-y-10 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[330px_minmax(0,1fr)_minmax(0,1fr)_330px] xl:gap-x-8 xl:pt-[62px] xl:pr-[34px] xl:pb-[39px] xl:pl-[34px]">
        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:pr-[50px]">
          <Link href="/" aria-label={site.name} className="inline-block">
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
                  className="grid size-[44px] place-items-center rounded-full border border-white/80 transition-colors hover:bg-white hover:text-plum"
                >
                  <Icon name={s.icon} className="size-[20px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footer.columns.map((col) => {
          const links =
            col.source === "plans"
              ? plans.items.map((plan) => ({ label: plan.title, href: `/insurance-plans/${plan.slug}` }))
              : col.links;

          return (
            <div key={col.title} className="xl:mt-[22px] xl:border-l xl:border-white/25 xl:pl-[38px]">
              <h3 className="text-[18.2px] font-semibold">{col.title}</h3>
              <ul className="mt-[14px] space-y-[7.5px]">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-[7px] text-[14.1px] leading-[22.5px] transition-opacity hover:opacity-75"
                    >
                      <Icon name="chevron-right" className="size-4 shrink-0" strokeWidth={2} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 xl:mt-[22px] xl:border-l xl:border-white/25 xl:pl-[50px]">
          <h3 className="text-[18.2px] font-semibold">{footer.contactTitle}</h3>
          <ul className="mt-[15px] space-y-[4px]">
            {footer.contact.map((item) => (
              <li key={item.icon} className="flex items-center gap-[22px]">
                <span className="grid size-[44px] shrink-0 place-items-center rounded-full bg-white/10">
                  <Icon name={item.icon} className="size-[20px]" strokeWidth={2} />
                </span>
                <span className="text-[13.2px] leading-[21px]">
                  {contactLines(item).map((l) => (
                    <span key={l} className="block xl:whitespace-nowrap">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/25">
        <div className="wrap flex flex-col items-center justify-between gap-4 py-5 text-center sm:flex-row sm:text-left xl:py-[24px]">
          <p className="text-[13.5px]">{footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-y-3 xl:-mr-[9px]">
            <ul className="flex flex-wrap items-center justify-center text-[11.3px]">
              {footer.bottomLinks.map((link) => (
                <li key={link.label} className="border-r border-white/40 px-4 last:border-0 sm:px-[27px] sm:last:border-r">
                  <Link href={link.href} className="hover:opacity-75">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#"
              aria-label="Back to top"
              className="ml-4 grid size-[40px] place-items-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-plum sm:ml-[30px]"
            >
              <Icon name="arrow-up" className="size-[18px]" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
