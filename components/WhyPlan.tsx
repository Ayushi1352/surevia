import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

export default function WhyPlan({ title }: { title: string }) {
  return (
    <div className="mt-10 xl:mt-[3.25rem]">
      <Reveal>
        <SectionTitle eyebrow={planDetail.whyEyebrow} size="sm">
          {planDetail.whyTitle}{" "}
          <Accent>
            {title} {planDetail.whySuffix}
          </Accent>
        </SectionTitle>
      </Reveal>
      <ul className="mt-6 grid gap-x-[1.75rem] gap-y-[1.5rem] md:grid-cols-2 xl:mt-[1.875rem]">
        {planDetail.why.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={(i % 2) * 120}
            className="group flex items-center gap-[1.625rem] rounded-[0.75rem] bg-white px-[1.5rem] py-[1.1875rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)]"
          >
            <span className="grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[5.625rem]">
              <Icon name={item.icon} className="size-[2.375rem] xl:size-[2.875rem]" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block font-heading text-[1.0625rem] font-bold text-ink xl:text-[1.2125rem]">{item.title}</span>
              <span className="mt-1.5 block max-w-[18.125rem] text-[0.9375rem] leading-[1.55] text-[#6a7083] xl:text-[1.11875rem] xl:leading-[1.625rem]">
                {item.text}
              </span>
            </span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
