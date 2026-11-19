import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Loop } from "@/components/ui/Loop";
import { Reveal } from "@/components/ui/Reveal";
import { Accent } from "@/components/ui/SectionTitle";
import { fill, lines } from "@/components/ui/text";
import type { BlogDetailLabels, BlogDetailProps, BlogPost, BlogsData } from "@/types/templates.types";

const BlogArticle = ({ labels, post }: { labels: BlogDetailLabels; post: BlogPost }) => {
  const { detail } = post;
  const meta = [
    { id: "date", icon: labels.dateIcon, label: post.dateLong },
    { id: "author", icon: labels.authorIcon, label: labels.author },
    { id: "comments", icon: labels.commentsIcon, label: fill(labels.commentsLabel, { count: detail.comments }) },
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
        {meta.map((item) => (
          <li key={item.id} className="flex items-center gap-2.5">
            <Icon name={item.icon} className="size-[1.1875rem] text-[var(--color-primary)]" />
            {item.label}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[0.96875rem] leading-[1.65] text-[var(--color-text)] xl:mt-[1.4375rem] xl:text-[1.125rem] xl:leading-[1.75rem]">{detail.intro}</p>

      {detail.sections.map((section) => (
        <div key={section.id} className="mt-8 xl:mt-[1.8125rem]">
          <h2 className="font-heading text-[1.3125rem] leading-tight font-bold text-[var(--color-heading)] xl:text-[1.68125rem]">
            {section.title} <Accent>{section.titleHighlight}</Accent>
          </h2>
          <p className="mt-2.5 text-[0.96875rem] leading-[1.65] text-[var(--color-text)] xl:mt-[0.5625rem] xl:text-[1.17813rem] xl:leading-[1.75rem]">{section.description}</p>
        </div>
      ))}

      <div className="mt-8 flex flex-col gap-5 rounded-[0.75rem] bg-[var(--color-bg-alt)] p-[1.375rem] sm:flex-row sm:items-center sm:gap-[1.625rem] xl:mt-[1.5rem] xl:py-[0.9375rem]">
        <Loop effect="pulse-ring">
          <span className="grid size-[4.75rem] shrink-0 place-items-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary)] xl:size-[5.8125rem]">
            <Icon name={labels.tipIcon} className="size-[2.5rem] text-[var(--color-white)] xl:size-[3.125rem]" />
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

const BlogSidebar = ({ blogs }: { blogs: BlogsData }) => {
  const labels = blogs.detail;
  const counts = blogs.posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(counts).map(([label, count]) => ({ label, count }));
  const latest = blogs.recentPostIds.flatMap((id) => blogs.posts.filter((post) => post.id === id));

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[1.75rem] md:grid-cols-2 lg:grid-cols-1">
      <div className="overflow-hidden rounded-[0.75rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)]">
        <h2 className="bg-[var(--color-surface)] px-[1.25rem] py-[0.9375rem] font-heading text-[1.3125rem] font-bold text-[var(--color-heading)]">{labels.latestTitle}</h2>
        <ul className="px-[1.375rem] pb-[0.25rem]">
          {latest.map((post) => (
            <li key={post.id} className="border-b border-[var(--color-border)] last:border-0">
              <Link href={post.url} className="group flex items-center gap-[1.125rem] py-[1.25rem]">
                <Image
                  src={post.image}
                  alt=""
                  width={218}
                  height={190}
                  className="h-[5.1875rem] w-[5.9375rem] shrink-0 rounded-[0.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span>
                  <span className="block text-[0.9375rem] leading-[1.5625rem] font-medium text-[var(--color-heading)] transition-colors group-hover:text-[var(--color-primary)]">
                    {lines(post.title).map((line, i) => (
                      <span key={i} className="lg:block">
                        {line}{" "}
                      </span>
                    ))}
                  </span>
                  <span className="mt-[0.625rem] block text-[0.9625rem] leading-[1.3125rem] text-[var(--color-text-muted)]">{post.dateLong}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[0.75rem] bg-[var(--color-white)] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-primary-dark)_8%,transparent)]">
        <h2 className="bg-[var(--color-surface)] px-[1.25rem] py-[1rem] font-heading text-[1.3125rem] font-bold text-[var(--color-heading)]">
          {labels.categoriesTitle}
        </h2>
        <ul className="py-[0.625rem] pr-[1.6875rem] pl-[1.375rem]">
          {categories.map((category) => (
            <li key={category.label} className="border-b border-[var(--color-border)] last:border-0">
              <Link
                href={fill(blogs.categoryUrl, { category: encodeURIComponent(category.label) })}
                className="group flex items-center justify-between py-[0.34375rem] pl-[0.5rem] text-[1.0625rem] text-[var(--color-text)] transition-all duration-300 hover:pl-[0.875rem] hover:text-[var(--color-primary)]"
              >
                {category.label}
                <span className="grid size-[2.3125rem] place-items-center rounded-full bg-[var(--color-bg-subtle)] text-[0.90625rem] font-semibold text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-white)]">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

// One common detail page for every blog post: all blog links point here and it shows the detailPostId post.
export const BlogDetail = ({ data: blogs, postId }: BlogDetailProps) => {
  const post = blogs?.posts.find((item) => item.id === postId);
  if (!blogs || !post) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid gap-10 lg:grid-cols-[1fr_21.25rem] xl:grid-cols-[1fr_24.25rem] xl:gap-[2.5rem] xl:px-[4.0625rem]">
      <BlogArticle labels={blogs.detail} post={post} />
      <BlogSidebar blogs={blogs} />
    </section>
  );
};
