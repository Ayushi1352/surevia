import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accent, Eyebrow } from "@/components/ui/SectionTitle";
import type { ContactData } from "@/types/templates.types";

export const ContactInfo = ({ data: contact }: { data?: ContactData }) => {
  if (!contact) return null;
  return (
    <Reveal effect="left" className="xl:pt-[0.3125rem]">
      <Eyebrow>{contact.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.01em] text-[var(--color-heading)] sm:text-[2.125rem] xl:text-[2.375rem] xl:leading-[2.75rem]">
        {contact.title[0]} <br className="hidden sm:block" />
        {contact.title[1]} <Accent>{contact.titleHighlight}</Accent>
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
                {card.lines.map((l, idx) => (
                  <span key={`${card.title}-${idx}`} className="block">
                    {l}
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
