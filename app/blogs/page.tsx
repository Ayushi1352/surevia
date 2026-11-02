import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Blogs } from "@/components/sections/Blogs";
import { Suspense } from "react";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

const blogs = sectionData.Blogs?.variants?.InsuranceBlogs1;

// Reads the URL, so it streams in behind the prerendered list instead of blocking the route
async function CategoryBlogs({ searchParams }: Pick<PageProps<"/blogs">, "searchParams">) {
  const { category } = await searchParams;
  // Only a known category filters the list; anything else shows every post
  const active = blogs?.posts.find((post) => post.category === category)?.category;
  return <Blogs data={blogs} category={active} />;
}

export const metadata: Metadata = { title: commonData.blogsBreadcrumb?.title };

export default function BlogsPage({ searchParams }: PageProps<"/blogs">) {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogsBreadcrumb} ui={commonData.globalUI} />
      <Suspense fallback={<Blogs data={blogs} />}>
        <CategoryBlogs searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
