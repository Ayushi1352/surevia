import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import type { ContactData } from "@/types/templates.types";

// Full-bleed map across the page width, with the office address pinned over it.
export const Location = ({ data }: { data?: ContactData }) => {
  if (!data) return null;
  const location = data?.location;
  return (
    <section className="relative h-[22.5rem] w-full overflow-hidden bg-[var(--color-surface-tint)] sm:h-[26.25rem] xl:h-[30rem]">
      <iframe
        title={location.mapTitle}
        src={location.mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] relative pt-6 sm:pt-10">
        <div className="pointer-events-auto flex w-[20.4375rem] max-w-full items-center gap-[1rem] rounded-[0.75rem] bg-[var(--color-white)] px-[0.5rem] py-[0.75rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] sm:py-[1rem]">
          <span className="grid size-[3.5rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] sm:size-[4.5rem]">
            <Loop effect="float">
              <Icon name="FaMapMarkerAlt" className="size-[2.375rem] sm:size-[3.25rem]" />
            </Loop>
          </span>
          <span>
            <span className="block text-[0.9875rem] font-semibold text-[var(--color-heading)]">{location.mapCard.title}</span>
            <span className="mt-1 block text-[0.875rem] leading-[1.4375rem] text-[var(--color-text)] sm:text-[0.95rem]">
              {location.mapCard.lines.map((l, idx) => (
                <span key={`${location.mapCard.title}-${idx}`} className="block">
                  {l}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
