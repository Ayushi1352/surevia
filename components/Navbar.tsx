"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { contact } from "@/lib/contact";
import data from "@/data";

const { site, nav, plans } = data;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);

  // The open menu covers the whole viewport, so the page behind must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setPlansOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f8f8f8]">
      {/* Top bar */}
      <div className="hidden border-b border-black/5 bg-[#f9f9f9] md:block">
        <div className="wrap flex h-[62px] items-center justify-between pb-[4px] text-[14.5px] text-ink lg:pr-[20px] lg:pl-[24px] xl:pr-[25px] xl:pl-[38px]">
          <ul className="flex items-center">
            <li className="flex items-center gap-2.5 pr-6">
              <Icon name="pin-solid" className="size-[21px] text-plum" />
              {contact.address}
            </li>
            <li className="flex items-center gap-3 border-l border-black/15 px-6">
              <Icon name="mail-solid" className="size-[25px] text-plum" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="hidden items-center gap-3 border-l border-black/15 pl-6 lg:flex">
              <Icon name="phone-solid" className="size-[23px] text-plum" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                {contact.phone}
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-[15px] border-r border-black/15 pr-[27px] text-plum">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="block transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-primary">
                  <Icon name={s.icon} className="size-[22px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div className="wrap flex h-[72px] items-center justify-between gap-4 lg:h-[76px] lg:pr-[20px] lg:pl-[24px] xl:h-[90px] xl:pr-[25px] xl:pl-[34px]">
        <Link href="/" onClick={close} className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logo}
            alt={site.name}
            width={1359}
            height={475}
            priority
            className="h-[48px] w-auto lg:h-[52px] xl:h-[76px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="relative ml-3 hidden h-full flex-1 items-center self-stretch pr-[44px] pl-[40px] lg:flex xl:ml-6 xl:pr-[60px] xl:pl-[60px] min-[1440px]:pl-[68px]">
          <span
            aria-hidden="true"
            className="absolute top-[2px] right-[2px] bottom-0 left-[19px] -skew-x-[37deg] rounded-tl-[22px] rounded-br-[22px] bg-plum"
          />
          <ul className="relative flex items-center gap-[18px] text-[13px] text-white xl:gap-[34px] xl:text-[14.6px] min-[1440px]:gap-[40px]">
            {nav.links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`relative flex h-[76px] items-center gap-1 pt-[2px] whitespace-nowrap xl:h-[90px] xl:gap-2 ${active ? "font-semibold" : "font-normal"}`}
                  >
                    {link.label}
                    {link.dropdown && <Icon name="chevron-down" className="size-4 transition-transform duration-300 group-hover:rotate-180" strokeWidth={2.25} />}
                    <span
                      className={`absolute right-0 bottom-[16px] left-0 h-[2px] xl:bottom-[20px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-100 ${active ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                  {link.dropdown && (
                    <ul className="invisible absolute top-full left-0 w-[240px] translate-y-2 rounded-b-xl bg-white py-2 opacity-0 shadow-card transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {plans.items.map((plan) => (
                        <li key={plan.slug}>
                          <Link
                            href={`/insurance-plans/${plan.slug}`}
                            className="block px-5 py-2.5 text-[14px] text-ink transition-all duration-200 hover:bg-blush hover:pl-7 hover:text-primary"
                          >
                            {plan.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-0 lg:pl-[32px] xl:pl-[40px]">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="group hidden items-center gap-[11px] min-[1440px]:flex">
            <span className="grid size-[36px] animate-pulse-ring place-items-center rounded-full bg-plum/10 text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white xl:size-[43px]">
              <Icon name="phone-solid" className="size-[18px] animate-ring xl:size-[21px]" />
            </span>
            <span className="leading-tight">
              <span className="block text-[12px] text-body xl:text-[13.5px]">{site.callLabel}</span>
              <span className="block text-[14px] font-semibold whitespace-nowrap text-ink transition-colors duration-300 group-hover:text-primary xl:text-[16px]">{contact.phone}</span>
            </span>
          </a>
          <span className="mr-[24px] ml-[30px] hidden h-[44px] w-px bg-black/15 min-[1440px]:block" />
          <Link
            href={nav.button.href}
            onClick={close}
            className="group hidden h-[42px] items-center gap-3 rounded-full bg-plum px-5 text-[14px] font-medium whitespace-nowrap text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_8px_20px_rgba(97,6,49,0.3)] lg:inline-flex lg:gap-2 lg:px-3.5 lg:text-[13px] xl:h-[47px] xl:w-[163px] xl:justify-center xl:gap-3 xl:px-0 xl:text-[14.5px]"
          >
            {nav.button.label}
            <Icon name="arrow-right" className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-[42px] place-items-center rounded-full bg-plum text-white transition-colors hover:bg-primary lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-[22px]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="absolute inset-x-0 top-full animate-fade-in h-[calc(100dvh-72px)] overflow-y-auto md:h-[calc(100dvh-134px)] bg-plum text-white shadow-lg [animation-duration:250ms] lg:hidden">
          <ul className="wrap py-3">
            {nav.links.map((link) => (
              <li key={link.href} className="border-b border-white/15 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`flex-1 py-[22px] text-[16px] md:py-7 md:text-[18px] transition-all duration-200 hover:pl-1.5 hover:text-[#ffc9dc] ${isActive(pathname, link.href) ? "font-semibold" : ""}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label="Toggle insurance plans"
                      aria-expanded={plansOpen}
                      onClick={() => setPlansOpen((v) => !v)}
                      className="grid size-10 place-items-center rounded-full transition-colors hover:bg-white/10"
                    >
                      <Icon
                        name="chevron-down"
                        className={`size-5 transition-transform ${plansOpen ? "rotate-180" : ""}`}
                        strokeWidth={2}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && plansOpen && (
                  <ul className="pb-3 pl-4">
                    {plans.items.map((plan) => (
                      <li key={plan.slug}>
                        <Link
                          href={`/insurance-plans/${plan.slug}`}
                          onClick={close}
                          className="block py-2.5 text-[14.5px] text-white/85 md:text-[16px] transition-all duration-200 hover:pl-1.5 hover:text-white"
                        >
                          {plan.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-7 pb-2">
              <Link
                href={nav.button.href}
                onClick={close}
                className="group inline-flex h-[44px] items-center gap-3 rounded-full border border-white bg-white px-6 text-[14px] font-medium text-plum transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {nav.button.label}
                <Icon name="arrow-right" className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
