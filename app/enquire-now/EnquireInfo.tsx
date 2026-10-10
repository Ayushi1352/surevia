import Icon from "@/components/Icon";
import { Accent, Eyebrow } from "@/components/SectionTitle";
import data from "@/data";

const { enquire } = data;

export default function EnquireInfo() {
  return (
    <div className="xl:pt-[8px]">
      <Eyebrow className="xl:gap-[14px] xl:text-[16.5px] [&>span]:xl:w-[63px]">{enquire.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[32px] leading-[1.18] font-extrabold tracking-[-0.01em] text-ink sm:text-[40px] xl:mt-[14px] xl:text-[46px] xl:leading-[55.5px]">
        {enquire.title.map((l) => (
          <span key={l} className="sm:block">
            {l}{" "}
          </span>
        ))}
        <Accent>{enquire.highlight}</Accent>
      </h2>
      <p className="mt-5 max-w-[465px] text-[16px] leading-[1.6] text-[#6a7083] xl:mt-[22px] xl:max-w-[525px] xl:text-[22.4px] xl:leading-[30px]">
        {enquire.text}
      </p>
      <ul className="mt-8 space-y-6 xl:mt-[39px] xl:space-y-[31px]">
        {enquire.points.map((p) => (
          <li key={p.title} className="flex items-center gap-5 xl:gap-[30px]">
            <span className="grid size-[78px] shrink-0 place-items-center rounded-full bg-rose text-primary xl:size-[99px]">
              <Icon name={p.icon} className="size-[40px] xl:size-[52px]" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block font-heading text-[18px] font-bold text-ink xl:text-[21.5px]">{p.title}</span>
              <span className="mt-1 block font-heading text-[15.5px] leading-[1.5] font-medium text-body xl:mt-px xl:text-[19.3px] xl:leading-[27.5px]">
                {p.text.map((l) => (
                  <span key={l} className="sm:block">
                    {l}{" "}
                  </span>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
