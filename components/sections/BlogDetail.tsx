import { BlogArticle } from "@/components/sections/BlogArticle";
import { BlogSidebar } from "@/components/sections/BlogSidebar";
import type { BlogDetailData, BlogsData } from "@/types/templates.types";

// One common detail page for every blog post: all blog links point here and it shows the first post.
export const BlogDetail = ({ data, blogs }: { data?: BlogDetailData; blogs?: BlogsData }) => {
  const post = blogs?.posts[0];
  if (!data || !blogs || !post) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid gap-10 lg:grid-cols-[1fr_21.25rem] xl:grid-cols-[1fr_24.25rem] xl:gap-[2.5rem] xl:px-[4.0625rem]">
      <BlogArticle data={data} post={post} />
      <BlogSidebar data={data} blogs={blogs} post={post} />
    </section>
  );
};
