import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

// One common detail page for every blog post: it shows the first post, so the page is described by that post.
const post = sectionData.Blogs?.variants?.InsuranceBlogs1?.posts[0];

export const metadata: Metadata = { title: post?.title, description: post?.description };

export default function BlogDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={sectionData.BlogDetail?.variants?.InsuranceBlogDetail1} blogs={sectionData.Blogs?.variants?.InsuranceBlogs1} />
    </main>
  );
}
