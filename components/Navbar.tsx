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
        <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 flex h-[3.875rem] items-center justify-between pb-[0.25rem] text-[0.90625rem] text-ink lg:pr-[1.25rem] lg:pl-[1.5rem] xl:pr-[1.5625rem] xl:pl-[2.375rem]">
          <ul className="flex items-center">
            <li className="flex items-center gap-2.5 pr-6">
              <Icon name="pin-solid" className="size-[1.3125rem] text-plum" />
              {contact.address}
            </li>
            <li className="flex items-center gap-3 border-l border-black/15 px-6">
              <Icon name="mail-solid" className="size-[1.5625rem] text-plum" />
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-primary">
                {contact.email}
              </a>
            </li>
            <li className="hidden items-center gap-3 border-l border-black/15 pl-6 lg:flex">
              <Icon name="phone-solid" className="size-[1.4375rem] text-plum" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-primary">
                {contact.phone}
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-[0.9375rem] border-r border-black/15 pr-[1.6875rem] text-plum">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="block transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:text-primary">
                  <Icon name={s.icon} className="size-[1.375rem]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 flex h-[4.5rem] items-center justify-between gap-4 lg:h-[4.75rem] lg:pr-[1.25rem] lg:pl-[1.5rem] xl:h-[5.625rem] xl:pr-[1.5625rem] xl:pl-[2.125rem]">
        <Link href="/" onClick={close} className="shrink-0" aria-label={site.name}>
          <Image
            src={site.logo}
            alt={site.name}
            width={1359}
            height={475}
            priority
            className="h-[3rem] w-auto lg:h-[3.25rem] xl:h-[4.125rem] w1360:h-[4.75rem]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="relative ml-3 hidden h-full flex-1 items-center self-stretch pr-[2.75rem] pl-[2.5rem] lg:flex xl:ml-4 xl:pr-[3rem] xl:pl-[3.25rem] w1360:ml-6 w1440:pr-[3.75rem] w1440:pl-[3.75rem]">
          <span
            aria-hidden="true"
            className="absolute top-[0.125rem] right-[0.125rem] bottom-0 left-[1.1875rem] -skew-x-[37deg] rounded-tl-[1.375rem] rounded-br-[1.375rem] bg-plum"
          />
          <ul className="relative flex items-center gap-[1.125rem] text-[0.8125rem] text-white xl:gap-[1.625rem] xl:text-[0.875rem] w1360:gap-[1.75rem] w1360:text-[0.9125rem] w1440:gap-[2.125rem]">
            {nav.links.map((link) => {
              const active = isActive(pathname, link.href);
              const shown = link.dropdown && dropdownOpen;
              return (
                <li key={link.href} ref={link.dropdown ? dropdownRef : undefined} className="group relative">
                  <Link
                    href={link.href}
                    onClick={link.dropdown ? onDropdownClick : undefined}
                    aria-expanded={link.dropdown ? dropdownOpen : undefined}
                    className={`relative flex h-[4.75rem] items-center gap-1 pt-[0.125rem] whitespace-nowrap xl:h-[5.625rem] xl:gap-2 ${active ? "font-semibold" : "font-normal"}`}
                  >
                    {link.label}
                    {link.dropdown && <Icon name="chevron-down" className={`size-4 transition-transform duration-300 group-hover:rotate-180 ${shown ? "rotate-180" : ""}`} strokeWidth={2.25} />}
                    <span
                      className={`absolute right-0 bottom-[1rem] left-0 h-[0.125rem] xl:bottom-[1.25rem] origin-left bg-white transition-transform duration-300 group-hover:scale-x-100 ${active || shown ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </Link>
                  {link.dropdown && (
                    <ul className={`absolute top-full left-0 w-[15rem] rounded-b-xl bg-white py-2 shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${shown ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}>
                      {plans.items.map((plan) => (
                        <li key={plan.title}>
                          <Link
                            href={plan.href}
                            onClick={close}
                            className="block px-5 py-2.5 text-[0.875rem] text-ink transition-all duration-200 hover:bg-blush hover:pl-7 hover:text-primary"
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

        <div className="flex items-center gap-3 sm:gap-5 lg:gap-0 lg:pl-[1.5rem] w1360:pl-[2rem] w1440:pl-[2.5rem]">
          {/* The w1440 values are the reference layout; from 1024px up it is scaled to the screen (see app/globals.css). */}
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            aria-label={`${site.callLabel} ${contact.phone}`}
            className="group hidden shrink-0 items-center gap-[0.625rem] lg:mr-[1rem] lg:flex w1100:mr-0 w1360:gap-[0.6875rem]"
          >
            <Loop effect="pulse-ring">
              <span className="grid size-[2.25rem] place-items-center rounded-full bg-plum/10 text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-white w1360:size-[2.6875rem]">
                <Loop effect="ring">
                  <Icon name="phone-solid" className="size-[1.125rem] w1360:size-[1.3125rem]" />
                </Loop>
              </span>
            </Loop>
            <span className="hidden leading-tight w1100:block">
              <span className="block text-[0.71875rem] text-body xl:text-[0.78125rem] w1360:text-[0.84375rem]">{site.callLabel}</span>
              <span className="block text-[0.84375rem] font-semibold whitespace-nowrap text-ink transition-colors duration-300 group-hover:text-primary xl:text-[0.90625rem] w1360:text-[1rem]">{contact.phone}</span>
            </span>
          </a>
          <span className="mx-[1rem] hidden h-[2.5rem] w-px bg-black/15 w1100:block w1360:mr-[1.25rem] w1360:ml-[1.5rem] w1360:h-[2.75rem] w1440:mr-[1.5rem] w1440:ml-[1.875rem]" />
          <Link
            href={nav.button.href}
            onClick={close}
            className="group hidden h-[2.625rem] items-center gap-3 rounded-full bg-plum px-5 text-[0.875rem] font-medium whitespace-nowrap text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[0_0.5rem_1.25rem_color-mix(in_srgb,var(--color-plum)_30%,transparent)] lg:inline-flex lg:gap-2 lg:px-3.5 lg:text-[0.8125rem] xl:h-[2.8125rem] xl:px-5 xl:text-[0.875rem] w1360:h-[2.9375rem] w1360:w-[10.1875rem] w1360:justify-center w1360:gap-3 w1360:px-0 w1360:text-[0.90625rem]"
          >
            {nav.button.label}
            <Icon name="arrow-right" className="size-[1.125rem] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? site.labels.closeMenu : site.labels.openMenu}
            aria-expanded={open}
            className="grid size-[2.625rem] place-items-center rounded-full bg-plum text-white transition-colors hover:bg-primary lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="size-[1.375rem]" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav className="absolute inset-x-0 top-full transition-opacity duration-250 ease-out starting:opacity-0 h-[calc(100dvh-4.5rem)] overflow-y-auto md:h-[calc(100dvh-8.375rem)] bg-plum text-white shadow-lg lg:hidden">
          <ul className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-3">
            {nav.links.map((link) => (
              <li key={link.href} className="border-b border-white/15 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`flex-1 py-[1.375rem] text-[1rem] md:py-7 md:text-[1.125rem] transition-all duration-200 hover:pl-1.5 hover:text-[#ffc9dc] ${isActive(pathname, link.href) ? "font-semibold" : ""}`}
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
                          className="block py-2.5 text-[0.90625rem] text-white/85 md:text-[1rem] transition-all duration-200 hover:pl-1.5 hover:text-white"
                        >
                          {plan.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-x-[1.5rem] gap-y-[1rem] pt-7 pb-2">
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                onClick={close}
                className="group flex items-center gap-3 transition-colors hover:text-[#ffc9dc]"
              >
                <span className="grid size-[2.75rem] place-items-center rounded-full bg-white/10">
                  <Icon name="phone-solid" className="size-[1.25rem]" />
                </span>
                <span className="leading-tight">
                  <span className="block text-[0.78125rem] text-white/75">{site.callLabel}</span>
                  <span className="block text-[0.9375rem] font-semibold whitespace-nowrap">{contact.phone}</span>
                </span>
              </a>
              <Link
                href={nav.button.href}
                onClick={close}
                className="group inline-flex h-[2.75rem] items-center gap-3 rounded-full border border-white bg-white px-6 text-[0.875rem] font-medium text-plum transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                {nav.button.label}
                <Icon name="arrow-right" className="size-[1.125rem] transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
