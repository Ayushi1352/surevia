import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

export default function Features({ title }: { title: string }) {
  return (
    <Reveal className="mt-8 rounded-[16px] bg-blush px-5 py-7 xl:mt-[30px] xl:px-[26px] xl:pt-[23px] xl:pb-[28px]">
      <SectionTitle eyebrow={planDetail.featuresEyebrow} size="sm">
        {planDetail.featuresTitle}{" "}
        <Accent>
          {title} {planDetail.featuresSuffix}
        </Accent>
      </SectionTitle>
      <ul className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:-mx-[26px] xl:mt-[20px]">
        {planDetail.features.map((f, i) => (
          <li key={f.title} className={`group px-2 text-center ${i > 0 ? "lg:border-l lg:border-primary/10" : ""}`}>
            <span className="mx-auto grid size-[92px] place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <Icon name={f.icon} className="size-[48px]" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 text-[15.5px] font-semibold text-ink transition-colors duration-300 group-hover:text-primary xl:mt-[13px] xl:text-[16.3px]">{f.title}</h3>
            <p className="mt-2 text-[15.5px] leading-[26px] text-[#6a7083] xl:text-[17.1px]">
              {f.text.map((l) => (
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
}
