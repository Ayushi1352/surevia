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
    <section className="relative flex h-[10.625rem] items-center overflow-hidden bg-plum sm:h-[13.125rem] xl:h-[16.25rem]">
      <div className="[mask-image:linear-gradient(to_right,transparent_0%,#000_32%)] absolute inset-y-0 right-0 w-full md:w-[58%]">
        <Image
          src={data.site.bannerImage}
          alt=""
          fill
          preload
          quality={90}
          sizes="(min-width: 768px) 58vw, 100vw"
          className="transition-[opacity,scale] [transition-duration:840ms,7s] ease-out starting:scale-110 starting:opacity-0 object-cover object-[50%_22%]"
        />
        <div className="absolute inset-0 bg-plum/70" />
      </div>
      <div className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 relative xl:px-[7.8125rem]">
        <nav aria-label={data.site.labels.breadcrumb} className="transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 flex items-center gap-2.5 text-[0.8125rem] whitespace-nowrap text-white sm:gap-4 sm:text-[0.9375rem] xl:gap-[1.125rem] xl:text-[1.0625rem]">
          {breadcrumbItems.map((item, index) => (
            <span key={`${item.label}-${index}`} className={`flex items-center gap-2.5 sm:gap-4 xl:gap-[1.125rem] ${item.href ? "shrink-0" : "min-w-0"}`}>
              {index > 0 && <span aria-hidden="true" className="size-[0.3125rem] shrink-0 sm:size-[0.375rem] rounded-full bg-black/70" />}
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
        <h1 className="mt-2 transition-[opacity,translate] duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] starting:translate-y-[1.75rem] starting:opacity-0 delay-120 font-heading leading-[1.15] font-extrabold text-[1.375rem] text-balance text-white sm:text-[1.875rem] lg:text-[2.375rem] xl:mt-[0.5rem] xl:text-[2.75rem]">
          {title}
        </h1>
      </div>
    </section>
  );
}
