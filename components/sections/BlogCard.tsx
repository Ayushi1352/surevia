import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

type Props = {
  url: string;
  category: string;
  date: string;
  title: string;
  titleLines?: string[];
  description: string;
  image: string;
  imageAlt: string;
  buttonText: string;
};

export const BlogCard = ({ url, category, date, title, titleLines, description, image, imageAlt, buttonText }: Props) => {
  return (
    <Link
      href={url}
      className="group flex h-full flex-col overflow-hidden rounded-[0.75rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0.5rem_1.875rem_var(--color-shadow-strong)]"
    >
      <div className="relative aspect-[423/211] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 430px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute bottom-[0.75rem] left-[1rem] inline-flex h-[1.875rem] items-center gap-[0.5625rem] rounded-full bg-[var(--color-white)] px-3 text-[0.76875rem] font-medium text-[var(--color-heading)]">
          <Icon name="FaRegCalendarAlt" className="size-[1rem] text-[var(--color-primary)]" />
          {date}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-[1.5rem] pt-[0.875rem] pb-[0.8125rem]">
        <p className="text-[0.875rem] font-medium text-[var(--color-primary)]">{category}</p>
        <h3 className="mt-[0.1875rem] max-w-[21.875rem] font-heading text-[1.1875rem] leading-[1.625rem] font-bold text-[var(--color-heading)] transition-colors duration-300 group-hover:text-[var(--color-primary)] xl:max-w-none xl:text-[1.25rem]">
          {titleLines
            ? titleLines.map((l) => (
                <span key={l} className="xl:block">
                  {l}{" "}
                </span>
              ))
            : title}
        </h3>
        <p className="mt-[0.375rem] max-w-[23.75rem] flex-1 font-heading text-[0.90625rem] leading-[1.34375rem] font-medium text-[var(--color-text)] xl:text-[0.95625rem]">
          {description}
        </p>
        <span className="mt-[0.875rem] inline-flex items-center gap-[0.5625rem] font-heading text-[0.96875rem] font-bold text-[var(--color-primary)]">
          {buttonText}
          <Icon name="FaArrowRight" className="size-[1.1875rem] transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};
