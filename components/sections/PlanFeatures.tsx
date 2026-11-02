import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import type { PlanDetailData } from "@/types/templates.types";

export const PlanFeatures = ({ data: planDetail, title }: { data?: PlanDetailData; title: string }) => {
  if (!planDetail) return null;
  return (
    <Reveal className="mt-8 rounded-[1rem] bg-[var(--color-bg-alt)] px-5 py-7 xl:mt-[1.875rem] xl:px-[1.625rem] xl:pt-[1.4375rem] xl:pb-[1.75rem]">
      <SectionTitle eyebrow={planDetail.featuresEyebrow} size="sm">
        {planDetail.featuresTitle}{" "}
        <Accent>
          {title} {planDetail.featuresSuffix}
        </Accent>
      </SectionTitle>
      <ul className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:-mx-[1.625rem] xl:mt-[1.25rem]">
        {planDetail.features.map((f, i) => (
          <li key={f.id} className={`group px-2 text-center ${i > 0 ? "lg:border-l lg:border-[var(--color-primary-10)]" : ""}`}>
            <span className="mx-auto grid size-[5.75rem] place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[var(--color-primary)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
              <Icon name={f.icon} className="size-[3rem]" />
            </span>
            <h3 className="mt-5 font-sans text-[0.96875rem] font-semibold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:mt-[0.8125rem] xl:text-[1.01875rem]">{f.title}</h3>
            <p className="mt-2 text-[0.96875rem] leading-[1.625rem] text-[var(--color-text-muted)] xl:text-[1.06875rem]">
              {f.description.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};
