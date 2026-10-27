import type { Metadata } from "next";
import Banner from "@/components/Banner";
import BlogArticle from "@/components/BlogArticle";
import BlogSidebar from "@/components/BlogSidebar";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

// One common detail page for every blog post: all blog links point here and it shows the first post.
// The banner and breadcrumb carry the common page title from site.json, not the post title.
const post = data.blogs.posts[0];
const { bannerTitle } = data.blogDetail;

export const metadata: Metadata = { title: bannerTitle };

export default function BlogDetailPage() {
  return (
    <>
      <Banner
        title={bannerTitle}
        breadcrumbs={[
          { label: pageTitle("/"), href: "/" },
          { label: pageTitle("/blogs"), href: "/blogs" },
        ]}
      />
      <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid gap-10 lg:grid-cols-[1fr_21.25rem] xl:grid-cols-[1fr_24.25rem] xl:gap-[2.5rem] xl:px-[4.0625rem]">
        <BlogArticle post={post} />
        <BlogSidebar post={post} />
      </section>
    </>
  );
}
