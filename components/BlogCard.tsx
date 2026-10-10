import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { formatDate } from "@/lib/blogs";

type Props = {
  href: string;
  category: string;
  date: string;
  title: string;
  titleLines?: string[];
  text: string;
  image: string;
  buttonLabel: string;
};

export default function BlogCard({ href, category, date, title, titleLines, text, image, buttonLabel }: Props) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-[12px] bg-white shadow-card transition-shadow hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)]"
    >
      <div className="relative aspect-[423/211]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 430px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute bottom-[12px] left-[16px] inline-flex h-[30px] items-center gap-[9px] rounded-full bg-white px-3 text-[12.3px] font-medium text-ink">
          <Icon name="calendar" className="size-[16px] text-primary" strokeWidth={2} />
          {formatDate(date)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[24px] pt-[14px] pb-[13px]">
        <p className="text-[14px] font-medium text-primary">{category}</p>
        <h3 className="mt-[3px] max-w-[350px] font-heading text-[19px] leading-[26px] font-bold text-ink xl:max-w-none xl:text-[20px]">
          {titleLines
            ? titleLines.map((l) => (
                <span key={l} className="xl:block">
                  {l}{" "}
                </span>
              ))
            : title}
        </h3>
        <p className="mt-[6px] max-w-[380px] flex-1 font-heading text-[14.5px] leading-[21.5px] font-medium text-body xl:text-[15.3px]">
          {text}
        </p>
        <span className="mt-[14px] inline-flex items-center gap-[9px] font-heading text-[15.5px] font-bold text-primary">
          {buttonLabel}
          <Icon name="arrow-right" className="size-[19px] transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
        </span>
      </div>
    </Link>
  );
}
