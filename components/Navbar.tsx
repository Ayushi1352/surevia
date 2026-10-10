"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

  const close = () => {
    setOpen(false);
    setPlansOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f8f8f8]">
      {/* Top bar */}
      <div className="hidden border-b border-black/5 bg-[#f9f9f9] md:block">
        <div className="wrap flex h-[62px] items-center justify-between pb-[4px] text-[14.5px] text-ink xl:pr-[25px] xl:pl-[38px]">
          <ul className="flex items-center">
            <li className="flex items-center gap-2.5 pr-6">
              <Icon name="pin-solid" className="size-[21px] text-plum" />
              {contact.address}
            </li>
            <li className="flex items-center gap-3 border-l border-black/15 px-6">
              <Icon name="mail-solid" className="size-[25px] text-plum" />
              <a href={`mailto:${contact.email}`} className="hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="hidden items-center gap-3 border-l border-black/15 pl-6 lg:flex">
              <Icon name="phone-solid" className="size-[23px] text-plum" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {contact.phone}
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-[15px] border-r border-black/15 pr-[27px] text-plum">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="block transition-opacity hover:opacity-70">
                  <Icon name={s.icon} className="size-[22px]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div className="wrap flex h-[72px] items-center justify-between gap-4 xl:h-[90px] xl:pr-[25px] xl:pl-[34px]">
        <Link href="/" onClick={close} className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logo}
            alt={site.name}
            width={1359}
            height={475}
            priority
            className="h-[48px] w-auto xl:h-[76px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="relative ml-6 hidden h-full flex-1 items-center self-stretch pl-[68px] xl:flex">
          <span
            aria-hidden="true"
            className="absolute top-[2px] right-[2px] bottom-0 left-[19px] -skew-x-[37deg] rounded-tl-[22px] rounded-br-[22px] bg-plum"
          />
          <ul className="relative flex items-center gap-[45px] text-[14.6px] text-white">
            {nav.links.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={`relative flex h-[90px] items-center gap-2 pt-[2px] whitespace-nowrap ${active ? "font-semibold" : "font-normal"}`}
                  >
                    {link.label}
                    {link.dropdown && <Icon name="chevron-down" className="size-4" strokeWidth={2.25} />}
                    <span
                      className={`absolute right-0 bottom-[20px] left-0 h-[2px] origin-left bg-white transition-transform group-hover:scale-x-100 ${active ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                  {link.dropdown && (
                    <ul className="invisible absolute top-full left-0 w-[240px] rounded-b-xl bg-white py-2 opacity-0 shadow-card transition-all group-hover:visible group-hover:opacity-100">
                      {plans.items.map((plan) => (
                        <li key={plan.slug}>
                          <Link
                            href={`/insurance-plans/${plan.slug}`}
                            className="block px-5 py-2.5 text-[14px] text-ink hover:bg-blush hover:text-primary"
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

        <div className="flex items-center gap-3 sm:gap-5 xl:gap-0">
          <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hidden items-center gap-[11px] xl:flex">
            <span className="grid size-[43px] place-items-center rounded-full bg-plum/10 text-plum">
              <Icon name="phone-solid" className="size-[21px]" />
            </span>
            <span className="leading-tight">
              <span className="block text-[13.5px] text-body">{site.callLabel}</span>
              <span className="block text-[16px] font-semibold whitespace-nowrap text-ink">{contact.phone}</span>
            </span>
          </a>
          <span className="mr-[24px] ml-[30px] hidden h-[44px] w-px bg-black/15 xl:block" />
          <Link
            href={nav.button.href}
            onClick={close}
            className="hidden h-[42px] items-center gap-3 rounded-full bg-plum px-5 text-[14px] font-medium whitespace-nowrap text-white transition-colors hover:bg-primary sm:inline-flex xl:h-[47px] xl:w-[163px] xl:justify-center xl:px-0 xl:text-[14.5px]"
          >
            {nav.button.label}
            <Icon name="arrow-right" className="size-[18px]" strokeWidth={2} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-[42px] place-items-center rounded-full bg-plum text-white transition-colors hover:bg-primary xl:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-[22px]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-plum text-white shadow-lg xl:hidden">
          <ul className="wrap py-3">
            {nav.links.map((link) => (
              <li key={link.href} className="border-b border-white/15 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`flex-1 py-3.5 text-[15px] ${isActive(pathname, link.href) ? "font-semibold" : ""}`}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      type="button"
                      aria-label="Toggle insurance plans"
                      aria-expanded={plansOpen}
                      onClick={() => setPlansOpen((v) => !v)}
                      className="grid size-10 place-items-center"
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
                          className="block py-2 text-[14px] text-white/85"
                        >
                          {plan.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4 pb-2 sm:hidden">
              <Link
                href={nav.button.href}
                onClick={close}
                className="inline-flex h-[44px] items-center gap-3 rounded-full bg-white px-6 text-[14px] font-medium text-plum"
              >
                {nav.button.label}
                <Icon name="arrow-right" className="size-[18px]" strokeWidth={2} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
