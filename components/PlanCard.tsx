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
      className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)]"
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
          className={`absolute bottom-0 z-10 grid place-items-center rounded-full bg-rose text-primary ring-[3px] ring-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white size-[58px] ${home ? "left-[20px] translate-y-[55%]" : "left-[23px] translate-y-1/2"}`}
        >
          <Icon name={icon} className="size-[32px] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${home ? "px-[20px] pt-[44px] pb-[22px]" : "px-[27px] pt-[26px] pb-[10px]"}`}>
        <h3 className={`font-heading font-bold text-ink ${home ? "text-[16.5px] leading-[24px]" : "text-[16px] leading-[24px]"}`}>{title}</h3>
        <p
          className={`text-body ${home ? "mt-[3px] flex-1 text-[14px] leading-[20px]" : "mt-[4px] font-heading text-[14.2px] leading-[18px] font-medium"}`}
        >
          {lines
            ? lines.map((l) => (
                <span key={l} className={home ? "min-[1440px]:block" : "xl:block"}>
                  {l}{" "}
                </span>
              ))
            : text}
        </p>
        <span
          className={`inline-flex items-center gap-2.5 font-semibold text-primary ${home ? "mt-[14px] text-[15px]" : "mt-[8px] font-heading text-[14.1px] font-bold"}`}
        >
          {buttonLabel}
          <span className="grid size-[29px] place-items-center rounded-full bg-rose transition-colors group-hover:bg-primary group-hover:text-white">
            <Icon name="arrow-right" className="size-[15px] transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
          </span>
        </span>
      </div>
    </Link>
  );
}
