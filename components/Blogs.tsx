import Link from "next/link";
import BlogCard from "./BlogCard";
import Reveal from "./Reveal";
import SectionTitle, { Accent } from "./SectionTitle";
import data from "@/data";

const { blogs } = data;

export default function Blogs({ limit, category }: { limit?: number; category?: string }) {
  const filtered = category ? blogs.posts.filter((post) => post.category === category) : blogs.posts;
  const posts = limit ? filtered.slice(0, limit) : filtered;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[60px] py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0">
      <Reveal>
        <SectionTitle eyebrow={blogs.eyebrow} text={blogs.text}>
          {blogs.title} <Accent>{blogs.highlight}</Accent>
        </SectionTitle>
        {category && (
          <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-heading text-[15px] font-medium text-body">
            <span>
              {blogs.categoryLabel} <span className="font-bold text-primary">{category}</span>
            </span>
            <Link href="/blogs" className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-plum">
              {blogs.allPostsLabel}
            </Link>
          </p>
        )}
      </Reveal>
      <div className="mt-8 grid gap-x-[23px] gap-y-[42px] md:grid-cols-2 lg:grid-cols-3 xl:gap-y-[48px]">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={(i % 3) * 120}>
            <BlogCard buttonLabel={blogs.buttonLabel} {...post} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
