import Link from "next/link";
import { BlogCard } from "@/components/sections/BlogCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle, Accent } from "@/components/ui/SectionTitle";
import type { BlogsData } from "@/types/templates.types";

export const Blogs = ({ data: blogs, limit, category }: { data?: BlogsData; limit?: number; category?: string }) => {
  if (!blogs) return null;
  const filtered = category ? blogs.posts.filter((post) => post.category === category) : blogs.posts;
  const posts = limit ? filtered.slice(0, limit) : filtered;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <SectionTitle eyebrow={blogs.eyebrow} text={blogs.description}>
          {blogs.title} <Accent>{blogs.titleHighlight}</Accent>
        </SectionTitle>
        {category && (
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-heading text-[0.9375rem] font-medium text-[var(--color-text)]">
            <span>
              {blogs.categoryLabel} <span className="font-bold text-[var(--color-primary)]">{category}</span>
            </span>
            <Link href="/blogs" className="text-[var(--color-primary)] underline decoration-[var(--color-primary-40)] underline-offset-4 transition-colors hover:text-[var(--color-primary-dark)]">
              {blogs.allPostsLabel}
            </Link>
          </p>
        )}
      </Reveal>
      <div className="mt-8 grid gap-x-[1.4375rem] gap-y-[2.625rem] md:grid-cols-2 lg:grid-cols-3 xl:gap-y-[3rem]">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 120}>
            <BlogCard buttonText={blogs.buttonText} {...post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
