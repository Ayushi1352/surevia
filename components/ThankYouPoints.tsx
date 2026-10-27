import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import data from "@/data";

const { points } = data.thankYou;

export default function ThankYouPoints() {
  return (
    <ul className="mt-10 grid gap-y-7 rounded-[1rem] bg-blush px-6 py-8 sm:grid-cols-2 xl:mt-[2rem] xl:grid-cols-4 xl:px-0 xl:py-[2.3125rem]">
      {points.map((p, i) => (
        <Reveal
          as="li"
          key={p.title}
          delay={i * 110}
          className={`group flex items-center gap-5 xl:gap-[1.4375rem] xl:pl-[2.0625rem] ${i > 0 ? "xl:border-l xl:border-primary/10" : ""}`}
        >
          <span className="grid size-[4.375rem] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[4.75rem]">
            <Icon name={p.icon} className="size-[2.375rem] xl:size-[2.75rem]" strokeWidth={1.5} />
          </span>
          <span>
            <span className="block font-heading text-[1.03125rem] font-bold text-ink xl:text-[0.95rem]">{p.title}</span>
            <span className="mt-1 block text-[0.9375rem] leading-[1.40625rem] text-body xl:text-[0.91875rem]">
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
