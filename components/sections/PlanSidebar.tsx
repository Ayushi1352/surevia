import Image from "next/image";
import Link from "next/link";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import type { EnquiryFormData, PlanDetailData, PlanItem, PlansData } from "@/types/templates.types";

export const PlanSidebar = ({ data: planDetail, plans, form, plan }: { data?: PlanDetailData; plans: PlansData; form?: EnquiryFormData; plan: PlanItem }) => {
  if (!planDetail) return null;
  const related = plans.items.filter((p) => p.title !== plan.title).slice(0, 4);

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[1.625rem] md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-[1rem] bg-[var(--color-bg-alt)] px-[1.5625rem] pt-[1.5rem] pb-[1.625rem]">
        <h2 className="font-heading text-[1.625rem] leading-tight font-extrabold text-[var(--color-primary)] xl:text-[1.875rem]">
          {planDetail.formTitle}
        </h2>
        <p className="mt-2 mb-[1.25rem] max-w-[18.75rem] text-[0.9375rem] leading-[1.625rem] text-[var(--color-text-muted)] xl:text-[1.0875rem]">
          {planDetail.formDescription.replace("{plan}", plan.title.toLowerCase())}
        </p>
        <EnquiryForm data={form} layout="compact" />
      </div>

      <div className="overflow-hidden rounded-[1rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)]">
        <h2 className="bg-[var(--color-surface)] px-[1.375rem] py-[1.1875rem] font-heading text-[1.25rem] font-bold text-[var(--color-heading)] xl:text-[1.375rem]">
          {planDetail.relatedTitle}
        </h2>
        <ul className="px-[1.25rem] pb-[0.5rem]">
          {related.map((p) => (
            <li key={p.id} className="border-b border-[var(--color-border)] last:border-0">
              <Link href={p.url} className="group flex items-center gap-[0.9375rem] py-[1.25rem]">
                <Image
                  src={p.thumb ?? p.image}
                  alt={p.imageAlt}
                  width={188}
                  height={186}
                  className="size-[5.125rem] shrink-0 rounded-[0.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="flex-1">
                  <span className="block font-heading text-[1rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">{p.title}</span>
                  <span className="mt-1.5 block text-[0.925rem] leading-[1.5rem] text-[var(--color-text-muted)]">
                    {p.relatedText.map((l) => (
                      <span key={l} className="block whitespace-nowrap">
                        {l}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="grid size-[2.375rem] shrink-0 place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
                  <Icon name="FaArrowRight" className="size-[1.0625rem] transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};
