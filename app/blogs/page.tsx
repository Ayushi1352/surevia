import { Suspense } from "react";
import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { BlogsData, InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";

type CategoryBlogsProps = Pick<PageProps<"/blogs">, "searchParams"> & { data?: BlogsData };

// Reads the URL, so it streams in behind the prerendered list instead of blocking the route
async function CategoryBlogs({ searchParams, data }: CategoryBlogsProps) {
  const { category } = await searchParams;
  // Only a known category filters the list; anything else shows every post
  const active = data?.posts.find((post) => post.category === category)?.category;
  return <Blogs data={data} showAll category={active} />;
}

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.blogsBreadcrumb?.seo };

export default function BlogsPage({ searchParams }: PageProps<"/blogs">) {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const blogData = sectionData.Blogs?.variants?.InsuranceBlogs1;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Suspense fallback={<Blogs data={blogData} showAll />}>
        <CategoryBlogs searchParams={searchParams} data={blogData} />
      </Suspense>
    </main>
  );
}
