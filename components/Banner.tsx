
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
    <section className="relative flex h-[220px] items-center overflow-hidden bg-plum sm:h-[280px] xl:h-[362px]">
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
        <nav aria-label="Breadcrumb" className="animate-fade-up flex items-center gap-4 text-[15px] text-white xl:gap-[18px] xl:text-[17px]">
          {breadcrumbItems.map((item, index) => (
            <span key={`${item.label}-${index}`} className="flex items-center gap-4 xl:gap-[18px]">
              {index > 0 && <span aria-hidden="true" className="size-[6px] shrink-0 rounded-full bg-black/70" />}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-[#ffc9dc] hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-2 animate-fade-up text-[34px] [animation-delay:120ms] leading-[1.15] font-semibold text-white sm:text-[42px] xl:mt-[8px] xl:text-[50px]">
          {title}
        </h1>
      </div>
    </section>
  );
}
