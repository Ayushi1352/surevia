import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import data from "@/data";

const { points } = data.thankYou;

export default function ThankYouPoints() {
  return (
    <ul className="mt-10 grid gap-y-7 rounded-[16px] bg-blush px-6 py-8 sm:grid-cols-2 xl:mt-[32px] xl:grid-cols-4 xl:px-0 xl:py-[37px]">
      {points.map((p, i) => (
        <Reveal
          as="li"
          key={p.title}
          delay={i * 110}
          className={`group flex items-center gap-5 xl:gap-[23px] xl:pl-[33px] ${i > 0 ? "xl:border-l xl:border-primary/10" : ""}`}
        >
          <span className="grid size-[70px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[76px]">
            <Icon name={p.icon} className="size-[38px] xl:size-[44px]" strokeWidth={1.5} />
          </span>
          <span>
            <span className="block font-heading text-[16.5px] font-bold text-ink xl:text-[15.2px]">{p.title}</span>
            <span className="mt-1 block text-[15px] leading-[22.5px] text-body xl:text-[14.7px]">
              {p.text.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </span>
          </span>
        </Reveal>
      ))}
    </ul>
  );
}
