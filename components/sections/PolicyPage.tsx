import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { PolicyPageData } from "@/types/templates.types";

export const PolicyPage = ({ data, accordion = false }: {
  data?: PolicyPageData;
  // Collapses each section behind its title (FAQ); one stays open at a time.
  accordion?: boolean;
}) => {
  if (!data) return null;
  return (
      <article data-section-pad className="bg-[var(--color-white)] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
        <div className="mx-auto w-full max-w-[60rem] px-5 sm:px-8 xl:px-[3.75rem]">
          <Reveal effect="left">
            <p className="border-l-[0.1875rem] border-[var(--color-primary)] pl-5 text-[1rem] leading-8 text-[var(--color-heading)] sm:text-[1.0625rem]">{data.intro}</p>
          </Reveal>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {data.sections.map((section, i) =>
              accordion ? (
                <Reveal as="section" key={section.title}>
                  <details name="faq" open={i === 0} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-[1.0625rem] font-semibold text-[var(--color-heading)] transition-colors duration-300 group-open:text-[var(--color-primary)] hover:text-[var(--color-primary)] sm:py-6 sm:text-[1.25rem] [&::-webkit-details-marker]:hidden">
                      <h2>{section.title}</h2>
                      <span className="grid size-[2.25rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-open:rotate-180 group-open:bg-[var(--color-primary)] group-open:text-[var(--color-white)]">
                        <Icon name="FaChevronDown" className="size-[1.125rem]" />
                      </span>
                    </summary>
                    <p className="pr-[3.25rem] pb-6 text-[0.90625rem] leading-7 text-[var(--color-text)] sm:text-[0.9375rem]">
                      {section.description}
                    </p>
                  </details>
                </Reveal>
              ) : (
              <Reveal as="section" key={section.title} className="group py-7 sm:py-8">
                <h2 className="font-heading text-[1.25rem] font-semibold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-[1.375rem]">
                  <span className="text-[var(--color-primary)]">{i + 1}.</span> {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[0.90625rem] leading-7 text-[var(--color-text)] sm:text-[0.9375rem]">
                  <p>{section.description}</p>
                </div>
              </Reveal>
              ),
            )}
          </div>
          <p className="mt-8 text-[0.8125rem] leading-6 text-[var(--color-text)]">
            {data.contactPrompt}{" "}
            <a className="font-medium text-[var(--color-primary)] underline decoration-[var(--color-primary-40)] underline-offset-4 transition-colors hover:text-[var(--color-primary-dark)] hover:decoration-[var(--color-primary-dark)]" href={data.contactEmailUrl}>
              {data.contactEmail}
            </a>
            .
          </p>
        </div>
      </article>
  );
};
