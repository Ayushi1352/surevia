import Image from "next/image";
import Link from "next/link";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

type BreadcrumbLink = { label: string; href: string };

export default function Banner({
  title,
  breadcrumbs = [{ label: pageTitle("/"), href: "/" }],
}: {
  title: string;
  breadcrumbs?: BreadcrumbLink[];
}) {
  const breadcrumbItems = [...breadcrumbs, { label: title, href: "" }];
  return (
    <section className="relative flex h-[170px] items-center overflow-hidden bg-plum sm:h-[210px] xl:h-[260px]">
      <div className="fade-left absolute inset-y-0 right-0 w-full md:w-[58%]">
        <Image
          src={data.site.bannerImage}
          alt=""
          fill
          preload
          quality={90}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="animate-zoom-out object-cover object-[50%_22%]"
        />
        <div className="absolute inset-0 bg-plum/70" />
      </div>
      <div className="wrap relative xl:px-[125px]">
        <nav aria-label="Breadcrumb" className="animate-fade-up flex items-center gap-2.5 text-[13px] whitespace-nowrap text-white sm:gap-4 sm:text-[15px] xl:gap-[18px] xl:text-[17px]">
          {breadcrumbItems.map((item, index) => (
            <span key={`${item.label}-${index}`} className={`flex items-center gap-2.5 sm:gap-4 xl:gap-[18px] ${item.href ? "shrink-0" : "min-w-0"}`}>
              {index > 0 && <span aria-hidden="true" className="size-[5px] shrink-0 sm:size-[6px] rounded-full bg-black/70" />}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#ffc9dc] hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="truncate">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-2 animate-fade-up font-heading [animation-delay:120ms] leading-[1.15] font-extrabold text-[22px] text-balance text-white sm:text-[30px] lg:text-[38px] xl:mt-[8px] xl:text-[44px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
