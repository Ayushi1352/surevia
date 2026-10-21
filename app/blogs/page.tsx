import type { Metadata } from "next";
import { Suspense } from "react";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import { blogCategories } from "@/lib/blogs";
import { pageTitle } from "@/lib/pages";

const title = pageTitle("/blogs");

export const metadata: Metadata = { title };

// Reads the URL, so it streams in behind the prerendered list instead of blocking the route
async function CategoryBlogs({ searchParams }: Pick<PageProps<"/blogs">, "searchParams">) {
  const { category } = await searchParams;
  // Only a known category filters the list; anything else shows every post
  const active = blogCategories.find((c) => c.label === category)?.label;
  return <Blogs category={active} />;
}

export default function BlogsPage({ searchParams }: PageProps<"/blogs">) {
  return (
    <>
      <Banner title={title} />
      <Suspense fallback={<Blogs />}>
        <CategoryBlogs searchParams={searchParams} />
      </Suspense>
    </>
  );
}
