import Icon from "./Icon";
import Reveal from "./Reveal";
import data from "@/data";

export default function Highlights() {
  return (
    <section className="wrap section-pad xl:px-[72px]">
      <ul className="grid grid-cols-2 gap-y-8 rounded-[18px] bg-blush px-3 py-7 sm:grid-cols-3 xl:grid-cols-6 xl:px-0 xl:pt-[27px] xl:pb-[33px]">
        {data.highlights.map((item, i) => (
          <Reveal as="li" key={item.title} delay={i * 90} className="group relative px-2 text-center">
            {i > 0 && <span className="absolute top-[40px] left-0 hidden h-[58px] w-px bg-primary/15 xl:block" />}
            <span className="mx-auto grid size-[64px] place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_8px_18px_rgba(143,21,69,0.3)] xl:size-[75px]">
              <Icon name={item.icon} className="size-[34px] transition-transform duration-300 group-hover:scale-110 xl:size-[42px]" strokeWidth={1.5} />
            </span>
            <p className="mt-3 text-[15px] leading-[21px] font-semibold text-ink transition-colors duration-300 group-hover:text-primary xl:mt-[3px] xl:text-[15.5px]">{item.title}</p>
            <p className="text-[14px] leading-[21px] text-ink/80 xl:text-[15px]">{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
