import Icon from "@/components/Icon";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

export default function WhyPlan({ title }: { title: string }) {
  return (
    <div className="mt-10 xl:mt-[52px]">
      <SectionTitle eyebrow={planDetail.whyEyebrow} size="sm"
        className="[&_h2]:xl:mt-[9px] [&_h2]:xl:text-[36.2px] [&_h2]:xl:whitespace-nowrap [&>p:first-child>span]:xl:w-[63px]"
      >
        {planDetail.whyTitle}{" "}
        <Accent>
          {title} {planDetail.whySuffix}
        </Accent>
      </SectionTitle>
      <ul className="mt-6 grid gap-x-[28px] gap-y-[24px] md:grid-cols-2 xl:mt-[30px]">
        {planDetail.why.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-[26px] rounded-[12px] bg-white px-[24px] py-[19px] shadow-card"
          >
            <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-rose text-primary xl:size-[90px]">
              <Icon name={item.icon} className="size-[38px] xl:size-[46px]" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block font-heading text-[17px] font-bold text-ink xl:text-[19.4px]">{item.title}</span>
              <span className="mt-1.5 block max-w-[290px] text-[15px] leading-[1.55] text-[#6a7083] xl:text-[17.9px] xl:leading-[26px]">
                {item.text}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
