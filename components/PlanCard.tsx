import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

type Props = {
  href: string;
  title: string;
  text: string;
  lines?: string[];
  image: string;
  icon: string;
  buttonLabel: string;
  variant?: "home" | "grid";
};

export default function PlanCard({ href, title, text, lines, image, icon, buttonLabel, variant = "grid" }: Props) {
  const home = variant === "home";
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[0.75rem] bg-white shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)]"
    >
      <div className={`relative ${home ? "aspect-[292/199]" : "aspect-[288/130]"}`}>
        {/* Own clip box so the hover zoom does not spill past the photo while the badge still overhangs */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <span
          className={`absolute bottom-0 z-10 grid place-items-center rounded-full bg-rose text-primary ring-[0.1875rem] ring-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white size-[3.625rem] ${home ? "left-[1.25rem] translate-y-[55%]" : "left-[1.4375rem] translate-y-1/2"}`}
        >
          <Icon name={icon} className="size-[2rem] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${home ? "px-[1.25rem] pt-[2.75rem] pb-[1.375rem]" : "px-[1.6875rem] pt-[1.625rem] pb-[0.625rem]"}`}>
        <h3 className={`font-heading font-bold text-ink ${home ? "text-[1.03125rem] leading-[1.5rem]" : "text-[1rem] leading-[1.5rem]"}`}>{title}</h3>
        <p
          className={`text-body ${home ? "mt-[0.1875rem] flex-1 text-[0.875rem] leading-[1.25rem]" : "mt-[0.25rem] font-heading text-[0.8875rem] leading-[1.125rem] font-medium"}`}
        >
          {lines
            ? lines.map((l) => (
                <span key={l} className={home ? "w1440:block" : "xl:block"}>
                  {l}{" "}
                </span>
              ))
            : text}
        </p>
        <span
          className={`inline-flex items-center gap-2.5 font-semibold text-primary ${home ? "mt-[0.875rem] text-[0.9375rem]" : "mt-[0.5rem] font-heading text-[0.88125rem] font-bold"}`}
        >
          {buttonLabel}
          <span className="grid size-[1.8125rem] place-items-center rounded-full bg-rose transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon name="arrow-right" className="size-[0.9375rem] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
          </span>
        </span>
      </div>
    </Link>
  );
}
