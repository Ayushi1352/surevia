import { Fragment } from "react";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionTitle";
import { lines } from "@/components/ui/text";
import type { ContactData, ContactLocation, ContactProps, EnquiryFormData } from "@/types/templates.types";

const ContactInfo = ({ data: contact }: { data: ContactData }) => {
  return (
    <Reveal effect="left" className="xl:pt-[0.3125rem]">
      <Eyebrow>{contact.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[2.125rem] xl:text-[2.375rem] xl:leading-[2.75rem]">
        {lines(contact.title).map((line, i) => (
          <Fragment key={i}>
            {i > 0 && <br className="hidden sm:block" />}
            {line}{" "}
          </Fragment>
        ))}
        <Accent>{contact.titleHighlight}</Accent>
      </h2>
      <p className="mt-3 max-w-[32.1875rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">
        {contact.description}
      </p>
      <ul className="mt-8 space-y-[1.25rem] xl:mt-[2rem]">
        {contact.cards.map((card) => (
          <li
            key={card.id}
            className="group flex max-w-[35rem] items-center gap-5 rounded-[0.75rem] bg-[var(--color-white)] p-[1.3125rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0.5rem_1.875rem_var(--color-shadow-strong)] xl:gap-[2.375rem] xl:py-[1.34375rem]"
          >
            <span className="grid size-[4.5rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)] xl:size-[5.75rem]">
              <Icon name={card.icon} className="size-[2.25rem] xl:size-[2.875rem]" />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-[1.125rem] font-bold text-[var(--color-heading)] xl:text-[1.1875rem]">{card.title}</span>
              <span className="mt-1.5 block text-[1rem] leading-[1.45] break-words text-[var(--color-text)] xl:text-[1.21875rem] xl:leading-[1.75rem]">
                {lines(card.text).map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

const ContactForm = ({ data: contact, form }: { data: ContactData; form?: EnquiryFormData }) => {
  return (
    <Reveal effect="right" className="rounded-[1rem] bg-[var(--color-bg-alt)] px-5 py-8 sm:px-[2.75rem] lg:px-[1.75rem] xl:px-[2.6875rem] xl:pt-[2.75rem] xl:pb-[2.875rem]">
      <h2 className="font-heading text-[1.5rem] leading-[1.2] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]">
        {contact.formTitle} <Accent>{contact.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[0.9375rem] leading-[1.6] font-medium text-[var(--color-text)] xl:text-[1rem]">{contact.formDescription}</p>
      <EnquiryForm data={form} layout="grid" />
    </Reveal>
  );
};

// Full-bleed map across the page width, with the office address pinned over it.
const Location = ({ data: location }: { data: ContactLocation }) => {
  return (
    <section className="relative h-[22.5rem] w-full overflow-hidden bg-[var(--color-surface-tint)] sm:h-[26.25rem] xl:h-[30rem]">
      <iframe
        title={location.mapTitle}
        src={location.mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] relative pt-6 sm:pt-10">
        <div className="pointer-events-auto flex w-[20.4375rem] max-w-full items-center gap-[1rem] rounded-[0.75rem] bg-[var(--color-white)] px-[0.5rem] py-[0.75rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] sm:py-[1rem]">
          <span className="grid size-[3.5rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] sm:size-[4.5rem]">
            <Loop effect="float">
              <Icon name={location.mapCard.icon} className="size-[2.375rem] sm:size-[3.25rem]" />
            </Loop>
          </span>
          <span>
            <span className="block text-[0.9875rem] font-semibold text-[var(--color-heading)]">{location.mapCard.title}</span>
            <span className="mt-1 block text-[0.875rem] leading-[1.4375rem] text-[var(--color-text)] sm:text-[0.95rem]">
              {lines(location.mapCard.text).map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export const Contact = ({ data, form }: ContactProps) => {
  if (!data) return null;
  return (
    <>
      <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,42.6875rem)] xl:gap-[3.75rem] xl:pr-[3.5rem] xl:pl-[5rem]">
        <ContactInfo data={data} />
        <ContactForm data={data} form={form} />
      </section>
      <Location data={data.location} />
    </>
  );
};
