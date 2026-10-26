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
      <div className="group relative aspect-[881/317] overflow-hidden rounded-[10px]">
        <Image
          src={detail.image}
          alt={detail.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 880px, 100vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>

      <ul className="mt-6 flex flex-wrap gap-x-[40px] gap-y-2 text-[15px] text-body xl:mt-[27px]">
        {meta.map((m) => (
          <li key={m.label} className="flex items-center gap-2.5">
            <Icon name={m.icon} className="size-[19px] text-primary" strokeWidth={2} />
            {m.label}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[15.5px] leading-[1.65] text-body xl:mt-[23px] xl:text-[18px] xl:leading-[28px]">{detail.intro}</p>

      {detail.sections.map((s) => (
        <div key={s.title} className="mt-8 xl:mt-[29px]">
          <h2 className="font-heading text-[21px] leading-tight font-bold text-ink xl:text-[26.9px]">
            {s.title} <Accent>{s.highlight}</Accent>
          </h2>
          <p className="mt-2.5 text-[15.5px] leading-[1.65] text-body xl:mt-[9px] xl:text-[18.85px] xl:leading-[28px]">{s.text}</p>
        </div>
      ))}

      <div className="mt-8 flex flex-col gap-5 rounded-[12px] bg-blush p-[22px] sm:flex-row sm:items-center sm:gap-[26px] xl:mt-[24px] xl:py-[15px]">
        <Loop effect="pulse-ring">
          <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-primary text-primary xl:size-[93px]">
            <Icon name="shield-check" className="size-[40px] text-white xl:size-[50px]" strokeWidth={1.5} />
          </span>
        </Loop>
        <div className="sm:border-l sm:border-primary/40 sm:py-1 sm:pl-[28px]">
          <h3 className="font-heading text-[20px] font-extrabold text-primary xl:text-[24px] xl:leading-[30px]">{detail.tip.title}</h3>
          <p className="mt-1.5 max-w-[665px] text-[15.5px] leading-[1.6] text-body xl:text-[18px] xl:leading-[29px]">
            {detail.tip.text}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
