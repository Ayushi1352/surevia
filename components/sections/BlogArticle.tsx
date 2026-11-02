import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import { Accent } from "@/components/ui/SectionTitle";
import type { BlogDetailData, BlogPost } from "@/types/templates.types";

export const BlogArticle = ({ data: blog, post }: { data?: BlogDetailData; post: BlogPost }) => {
  if (!blog) return null;
  const { detail } = post;
  const meta = [
    { icon: "FaRegCalendarAlt", label: post.dateLong },
    { icon: "FaRegUser", label: blog.author },
    { icon: "FaRegCommentDots", label: `${detail.comments} ${blog.commentsLabel}` },
  ];

  return (
    <Reveal as="article" className="min-w-0">
      <div className="group relative aspect-[881/317] overflow-hidden rounded-[0.625rem]">
        <Image
          src={detail.image}
          alt={detail.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 880px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-[2.5rem] gap-y-2 text-[0.9375rem] text-[var(--color-text)] xl:mt-[1.6875rem]">
        {meta.map((m) => (
          <li key={m.label} className="flex items-center gap-2.5">
            <Icon name={m.icon} className="size-[1.1875rem] text-[var(--color-primary)]" />
            {m.label}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[0.96875rem] leading-[1.65] text-[var(--color-text)] xl:mt-[1.4375rem] xl:text-[1.125rem] xl:leading-[1.75rem]">{detail.intro}</p>

      {detail.sections.map((s) => (
        <div key={s.id} className="mt-8 xl:mt-[1.8125rem]">
          <h2 className="font-heading text-[1.3125rem] leading-tight font-bold text-[var(--color-heading)] xl:text-[1.68125rem]">
            {s.title} <Accent>{s.titleHighlight}</Accent>
          </h2>
          <p className="mt-2.5 text-[0.96875rem] leading-[1.65] text-[var(--color-text)] xl:mt-[0.5625rem] xl:text-[1.17813rem] xl:leading-[1.75rem]">{s.description}</p>
        </div>
      ))}

      <div className="mt-8 flex flex-col gap-5 rounded-[0.75rem] bg-[var(--color-bg-alt)] p-[1.375rem] sm:flex-row sm:items-center sm:gap-[1.625rem] xl:mt-[1.5rem] xl:py-[0.9375rem]">
        <Loop effect="pulse-ring">
          <span className="grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary)] xl:size-[5.8125rem]">
            <Icon name="FaShieldAlt" className="size-[2.5rem] text-[var(--color-white)] xl:size-[3.125rem]" />
          </span>
        </Loop>
        <div className="sm:border-l sm:border-[var(--color-primary-40)] sm:py-1 sm:pl-[1.75rem]">
          <h3 className="font-heading text-[1.25rem] font-extrabold text-[var(--color-primary)] xl:text-[1.5rem] xl:leading-[1.875rem]">{detail.tip.title}</h3>
          <p className="mt-1.5 max-w-[41.5625rem] text-[0.96875rem] leading-[1.6] text-[var(--color-text)] xl:text-[1.125rem] xl:leading-[1.8125rem]">
            {detail.tip.description}
          </p>
        </div>
      </div>
    </Reveal>
  );
};
