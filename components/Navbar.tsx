"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import Icon from "./Icon";
import Loop from "./Loop";
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
  // Desktop dropdown opened by a tap; mouse users get it on hover instead.
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // The open menu covers the whole viewport, so the page behind must not scroll.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // A tapped-open dropdown closes on a tap anywhere else or on Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [dropdownOpen]);

  const close = () => {
    setOpen(false);
    setPlansOpen(false);
    setDropdownOpen(false);
  };

  // Touch screens have no hover, so the first tap on a dropdown link opens it and the second follows it.
  const onDropdownClick = (e: MouseEvent) => {
    if (dropdownOpen || !window.matchMedia("(hover: none)").matches) return close();
    e.preventDefault();
    setDropdownOpen(true);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f8f8f8]">
      {/* Top bar */}
      <div className="hidden border-b border-black/5 bg-[#f9f9f9] md:block">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 flex h-[62px] items-center justify-between pb-[4px] text-[14.5px] text-ink lg:pr-[20px] lg:pl-[24px] xl:pr-[25px] xl:pl-[38px]">
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
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 flex h-[72px] items-center justify-between gap-4 lg:h-[76px] lg:pr-[20px] lg:pl-[24px] xl:h-[90px] xl:pr-[25px] xl:pl-[34px]">
        <Link href="/" onClick={close} className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logo}
            alt={site.name}
            width={1359}
            height={475}
            priority
            className="h-[48px] w-auto lg:h-[52px] xl:h-[66px] min-[85rem]:h-[76px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="relative ml-3 hidden h-full flex-1 items-center self-stretch pr-[44px] pl-[40px] lg:flex xl:ml-4 xl:pr-[48px] xl:pl-[52px] min-[85rem]:ml-6 min-[90rem]:pr-[60px] min-[90rem]:pl-[60px]">
          <span
            aria-hidden="true"
            className="absolute top-[2px] right-[2px] bottom-0 left-[19px] -skew-x-[37deg] rounded-tl-[22px] rounded-br-[22px] bg-plum"
          />
          <ul className="relative flex items-center gap-[18px] text-[13px] text-white xl:gap-[26px] xl:text-[14px] min-[85rem]:gap-[28px] min-[85rem]:text-[14.6px] min-[90rem]:gap-[34px]">
            {nav.links.map((link) => {
              const active = isActive(pathname, link.href);
              const shown = link.dropdown && dropdownOpen;
              return (
                <li key={link.href} ref={link.dropdown ? dropdownRef : undefined} className="group relative">
                  <Link
                    href={link.href}
                    onClick={link.dropdown ? onDropdownClick : undefined}
                    aria-expanded={link.dropdown ? dropdownOpen : undefined}
                    className={`relative flex h-[76px] items-center gap-1 pt-[2px] whitespace-nowrap xl:h-[90px] xl:gap-2 ${active ? "font-semibold" : "font-normal"}`}
                  >
                    {link.label}
                    {link.dropdown && <Icon name="chevron-down" className={`size-4 transition-transform duration-300 group-hover:rotate-180 ${shown ? "rotate-180" : ""}`} strokeWidth={2.25} />}
                    <span
                      className={`absolute right-0 bottom-[16px] left-0 h-[2px] xl:bottom-[20px] origin-left bg-white transition-transform duration-300 group-hover:scale-x-100 ${active || shown ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                  {link.dropdown && (
                    <ul className={`absolute top-full left-0 w-[240px] rounded-b-xl bg-white py-2 shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${shown ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                      {plans.items.map((plan) => (
                        <li key={plan.title}>
                          <Link
                            href={plan.href}
                            onClick={close}
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

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-0 lg:pl-[24px] min-[85rem]:pl-[32px] min-[90rem]:pl-[40px]">
          {/* 1440px+ (90rem) is the reference layout. From 1360px (85rem, ~110% zoom) everything keeps that size
              and only the spacing tightens; below that the bar shrinks, and under 1100px (68.75rem) only the icon shows.
              Breakpoints here are in rem: Tailwind orders px ones like min-[1440px] before xl, so xl would win. */}
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            aria-label={`${site.callLabel} ${contact.phone}`}
            className="group hidden shrink-0 items-center gap-[10px] lg:mr-[16px] lg:flex min-[68.75rem]:mr-0 min-[85rem]:gap-[11px]"
          >
            <Loop effect="pulse-ring">
              <span className="grid size-[36px] place-items-center rounded-full bg-plum/10 text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white min-[85rem]:size-[43px]">
                <Loop effect="ring">
                  <Icon name="phone-solid" className="size-[18px] min-[85rem]:size-[21px]" />
                </Loop>
              </span>
            </Loop>
            <span className="hidden leading-tight min-[68.75rem]:block">
              <span className="block text-[11.5px] text-body xl:text-[12.5px] min-[85rem]:text-[13.5px]">{site.callLabel}</span>
              <span className="block text-[13.5px] font-semibold whitespace-nowrap text-ink transition-colors duration-300 group-hover:text-primary xl:text-[14.5px] min-[85rem]:text-[16px]">{contact.phone}</span>
            </span>
          </a>
          <span className="mx-[16px] hidden h-[40px] w-px bg-black/15 min-[68.75rem]:block min-[85rem]:mr-[20px] min-[85rem]:ml-[24px] min-[85rem]:h-[44px] min-[90rem]:mr-[24px] min-[90rem]:ml-[30px]" />
          <Link
            href={nav.button.href}
            onClick={close}
            className="group hidden h-[42px] items-center gap-3 rounded-full bg-plum px-5 text-[14px] font-medium whitespace-nowrap text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_8px_20px_color-mix(in_srgb,var(--color-plum)_30%,transparent)] lg:inline-flex lg:gap-2 lg:px-3.5 lg:text-[13px] xl:h-[45px] xl:px-5 xl:text-[14px] min-[85rem]:h-[47px] min-[85rem]:w-[163px] min-[85rem]:justify-center min-[85rem]:gap-3 min-[85rem]:px-0 min-[85rem]:text-[14.5px]"
          >
            {nav.button.label}
            <Icon name="arrow-right" className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? site.labels.closeMenu : site.labels.openMenu}
            aria-expanded={open}
            className="grid size-[42px] place-items-center rounded-full bg-plum text-white transition-colors hover:bg-primary lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-[22px]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="absolute inset-x-0 top-full transition-opacity duration-250 ease-out starting:opacity-0 h-[calc(100dvh-72px)] overflow-y-auto md:h-[calc(100dvh-134px)] bg-plum text-white shadow-lg lg:hidden">
          <ul className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[60px] py-3">
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
                      aria-label={site.labels.toggleDropdown}
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
                      <li key={plan.title}>
                        <Link
                          href={plan.href}
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
            <li className="flex flex-wrap items-center gap-x-[24px] gap-y-[16px] pt-7 pb-2">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                onClick={close}
                className="group flex items-center gap-3 transition-colors hover:text-[#ffc9dc]"
              >
                <span className="grid size-[44px] place-items-center rounded-full bg-white/10">
                  <Icon name="phone-solid" className="size-[20px]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[12.5px] text-white/75">{site.callLabel}</span>
                  <span className="block text-[15px] font-semibold whitespace-nowrap">{contact.phone}</span>
                </span>
              </a>
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
