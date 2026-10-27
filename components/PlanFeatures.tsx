import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { planDetail } = data;

export default function PlanFeatures({ title }: { title: string }) {
  return (
    <Reveal className="mt-8 rounded-[1rem] bg-blush px-5 py-7 xl:mt-[1.875rem] xl:px-[1.625rem] xl:pt-[1.4375rem] xl:pb-[1.75rem]">
      <SectionTitle eyebrow={planDetail.featuresEyebrow} size="sm">
        {planDetail.featuresTitle}{" "}
        <Accent>
          {title} {planDetail.featuresSuffix}
        </Accent>
      </SectionTitle>
      <ul className="mt-6 grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:-mx-[1.625rem] xl:mt-[1.25rem]">
        {planDetail.features.map((f, i) => (
          <li key={f.title} className={`group px-2 text-center ${i > 0 ? "lg:border-l lg:border-primary/10" : ""}`}>
            <span className="mx-auto grid size-[5.75rem] place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
              <Icon name={f.icon} className="size-[3rem]" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 text-[0.96875rem] font-semibold text-ink transition-colors duration-300 group-hover:text-primary xl:mt-[0.8125rem] xl:text-[1.01875rem]">{f.title}</h3>
            <p className="mt-2 text-[0.96875rem] leading-[1.625rem] text-[#6a7083] xl:text-[1.06875rem]">
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
