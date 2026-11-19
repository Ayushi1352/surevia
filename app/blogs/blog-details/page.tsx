import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { BlogDetail } from "@/components/sections/BlogDetail";
import { lines } from "@/components/ui/text";

// One common detail page for every blog post: all blog links point here and it shows the detailPostId post.
const blogs = (rawData as InsuranceTemplateData).categories.Insurance.sections.Blogs?.variants?.InsuranceBlogs1;
const post = blogs?.posts.find((item) => item.id === blogs.detailPostId);

export const metadata: Metadata = { title: post && lines(post.title).join(" "), description: post?.description };

export default function BlogDetailPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;
  const blogData = sectionData.Blogs?.variants?.InsuranceBlogs1;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.blogDetailBreadcrumb} ui={commonData.globalUI} />
      <BlogDetail data={blogData} postId={blogData?.detailPostId} />
    </main>
  );
}
