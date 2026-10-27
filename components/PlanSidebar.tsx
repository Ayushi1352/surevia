import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import data from "@/data";

const { plans, planDetail } = data;

type Plan = (typeof plans.items)[number];

export default function PlanSidebar({ plan }: { plan: Plan }) {
  const related = plans.items.filter((p) => p.title !== plan.title).slice(0, 4);

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[1.625rem] md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-[1rem] bg-blush px-[1.5625rem] pt-[1.5rem] pb-[1.625rem]">
        <h2 className="font-heading text-[1.625rem] leading-tight font-extrabold text-primary xl:text-[1.875rem]">
          {planDetail.formTitle}
        </h2>
        <p className="mt-2 mb-[1.25rem] max-w-[18.75rem] text-[0.9375rem] leading-[1.625rem] text-[#6a7083] xl:text-[1.0875rem]">
          {planDetail.formText.replace("{plan}", plan.title.toLowerCase())}
        </p>
        <EnquiryForm layout="compact" />
      </div>

      <div className="overflow-hidden rounded-[1rem] bg-white shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)]">
        <h2 className="bg-[#f8f8fa] px-[1.375rem] py-[1.1875rem] font-heading text-[1.25rem] font-bold text-ink xl:text-[1.375rem]">
          {planDetail.relatedTitle}
        </h2>
        <ul className="px-[1.25rem] pb-[0.5rem]">
          {related.map((p) => (
            <li key={p.title} className="border-b border-line last:border-0">
              <Link href={p.href} className="group flex items-center gap-[0.9375rem] py-[1.25rem]">
                <Image
                  src={p.thumb ?? p.image}
                  alt={p.title}
                  width={188}
                  height={186}
                  className="size-[5.125rem] shrink-0 rounded-[0.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="flex-1">
                  <span className="block font-heading text-[1rem] font-bold text-ink transition-colors duration-300 group-hover:text-primary">{p.title}</span>
                  <span className="mt-1.5 block text-[0.925rem] leading-[1.5rem] text-[#6a7083]">
                    {p.relatedText.map((l) => (
                      <span key={l} className="block whitespace-nowrap">
                        {l}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="grid size-[2.375rem] shrink-0 place-items-center rounded-full bg-rose text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name="arrow-right" className="size-[1.0625rem] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
