import Image from "next/image";
import Icon from "@/components/Icon";
import Loop from "@/components/Loop";
import Reveal from "@/components/Reveal";
import { Accent } from "@/components/SectionTitle";
import { formatDate, type BlogPost } from "@/lib/blogs";
import data from "@/data";

const { blogDetail: blog } = data;

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { detail } = post;
  const meta = [
    { icon: "calendar", label: formatDate(post.date, "long") },
    { icon: "user", label: blog.author },
    { icon: "message", label: `${detail.comments} ${blog.commentsLabel}` },
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

      <ul className="mt-6 flex flex-wrap gap-x-[2.5rem] gap-y-2 text-[0.9375rem] text-body xl:mt-[1.6875rem]">
        {meta.map((m) => (
          <li key={m.label} className="flex items-center gap-2.5">
            <Icon name={m.icon} className="size-[1.1875rem] text-primary" strokeWidth={2} />
            {m.label}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[0.96875rem] leading-[1.65] text-body xl:mt-[1.4375rem] xl:text-[1.125rem] xl:leading-[1.75rem]">{detail.intro}</p>

      {detail.sections.map((s) => (
        <div key={s.title} className="mt-8 xl:mt-[1.8125rem]">
          <h2 className="font-heading text-[1.3125rem] leading-tight font-bold text-ink xl:text-[1.68125rem]">
            {s.title} <Accent>{s.highlight}</Accent>
          </h2>
          <p className="mt-2.5 text-[0.96875rem] leading-[1.65] text-body xl:mt-[0.5625rem] xl:text-[1.17813rem] xl:leading-[1.75rem]">{s.text}</p>
        </div>
      ))}

      <div className="mt-8 flex flex-col gap-5 rounded-[0.75rem] bg-blush p-[1.375rem] sm:flex-row sm:items-center sm:gap-[1.625rem] xl:mt-[1.5rem] xl:py-[0.9375rem]">
        <Loop effect="pulse-ring">
          <span className="grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-primary text-primary xl:size-[5.8125rem]">
            <Icon name="shield-check" className="size-[2.5rem] text-white xl:size-[3.125rem]" strokeWidth={1.5} />
          </span>
        </Loop>
        <div className="sm:border-l sm:border-primary/40 sm:py-1 sm:pl-[1.75rem]">
          <h3 className="font-heading text-[1.25rem] font-extrabold text-primary xl:text-[1.5rem] xl:leading-[1.875rem]">{detail.tip.title}</h3>
          <p className="mt-1.5 max-w-[41.5625rem] text-[0.96875rem] leading-[1.6] text-body xl:text-[1.125rem] xl:leading-[1.8125rem]">
            {detail.tip.text}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
