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
      className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)]"
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
          className={`absolute bottom-0 z-10 grid place-items-center rounded-full bg-rose text-primary ring-[3px] ring-white transition-colors duration-300 group-hover:bg-primary group-hover:text-white ${home ? "left-[35px] size-[66px] translate-y-[62%]" : "left-[23px] size-[58px] translate-y-1/2"}`}
        >
          <Icon name={icon} className={`transition-transform duration-300 group-hover:scale-110 ${home ? "size-[36px]" : "size-[32px]"}`} strokeWidth={1.5} />
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${home ? "px-[35px] pt-[53px] pb-[24px]" : "px-[27px] pt-[26px] pb-[10px]"}`}>
        <h3 className={`font-bold text-ink ${home ? "text-[17.9px] leading-[26px]" : "font-heading text-[16px] leading-[24px]"}`}>{title}</h3>
        <p
          className={`text-body ${home ? "mt-[3px] flex-1 text-[14.7px] leading-[20px]" : "mt-[4px] font-heading text-[14.2px] leading-[18px] font-medium"}`}
        >
          {lines
            ? lines.map((l) => (
                <span key={l} className="xl:block">
                  {l}{" "}
                </span>
              ))
            : text}
        </p>
        <span
          className={`inline-flex items-center gap-2.5 font-semibold text-primary ${home ? "mt-[17px] text-[15.5px]" : "mt-[8px] font-heading text-[14.1px] font-bold"}`}
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
