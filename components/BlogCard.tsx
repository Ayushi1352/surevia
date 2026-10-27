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
      className="group flex h-full flex-col overflow-hidden rounded-[0.75rem] bg-white shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0.5rem_1.875rem_rgba(60,20,40,0.14)]"
    >
      <div className="relative aspect-[423/211] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 430px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute bottom-[0.75rem] left-[1rem] inline-flex h-[1.875rem] items-center gap-[0.5625rem] rounded-full bg-white px-3 text-[0.76875rem] font-medium text-ink">
          <Icon name="calendar" className="size-[1rem] text-primary" strokeWidth={2} />
          {formatDate(date)}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[1.5rem] pt-[0.875rem] pb-[0.8125rem]">
        <p className="text-[0.875rem] font-medium text-primary">{category}</p>
        <h3 className="mt-[0.1875rem] max-w-[21.875rem] font-heading text-[1.1875rem] leading-[1.625rem] font-bold text-ink transition-colors duration-300 group-hover:text-primary xl:max-w-none xl:text-[1.25rem]">
          {titleLines
            ? titleLines.map((l) => (
                <span key={l} className="xl:block">
                  {l}{" "}
                </span>
              ))
            : title}
        </h3>
        <p className="mt-[0.375rem] max-w-[23.75rem] flex-1 font-heading text-[0.90625rem] leading-[1.34375rem] font-medium text-body xl:text-[0.95625rem]">
          {text}
        </p>
        <span className="mt-[0.875rem] inline-flex items-center gap-[0.5625rem] font-heading text-[0.96875rem] font-bold text-primary">
          {buttonLabel}
          <Icon name="arrow-right" className="size-[1.1875rem] transition-transform group-hover:translate-x-1" strokeWidth={2.25} />
        </span>
      </div>
    </Link>
  );
}
