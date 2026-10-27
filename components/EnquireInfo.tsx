import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Accent, Eyebrow } from "@/components/SectionTitle";
import data from "@/data";

const { enquire } = data;

export default function EnquireInfo() {
  return (
    <Reveal effect="left" className="xl:pt-[0.5rem]">
      <Eyebrow>{enquire.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[1.75rem] leading-[1.18] font-extrabold tracking-[-0.01em] text-ink sm:text-[2.125rem] xl:text-[2.375rem] xl:leading-[2.75rem]">
        {enquire.title.map((l) => (
          <span key={l} className="sm:block">
            {l}{" "}
          </span>
        ))}
        <Accent>{enquire.highlight}</Accent>
      </h2>
      <p className="mt-3 max-w-[32.8125rem] font-heading text-[0.9375rem] leading-[1.6] font-medium text-body xl:text-[1rem]">
        {enquire.text}
      </p>
      <ul className="mt-8 space-y-6 xl:mt-[2.4375rem] xl:space-y-[1.9375rem]">
        {enquire.points.map((p) => (
          <li key={p.title} className="group flex items-center gap-5 xl:gap-[1.875rem]">
            <span className="grid size-[4.875rem] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[6.1875rem]">
              <Icon name={p.icon} className="size-[2.5rem] xl:size-[3.25rem]" strokeWidth={1.5} />
            </span>
            <span>
              <span className="block font-heading text-[1.125rem] font-bold text-ink transition-colors duration-300 group-hover:text-primary xl:text-[1.34375rem]">{p.title}</span>
              <span className="mt-1 block font-heading text-[0.96875rem] leading-[1.5] font-medium text-body xl:mt-px xl:text-[1.20625rem] xl:leading-[1.71875rem]">
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
    </Reveal>
  );
}
