import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import data from "@/data";
import Article from "./Article";
import Sidebar from "./Sidebar";

const { blogs, blogDetail } = data;

export function generateStaticParams() {
  return blogs.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: blogs.posts.find((p) => p.slug === slug)?.title ?? blogDetail.bannerTitle };
}

export default async function BlogDetailPage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = blogs.posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Banner
        title={post.title}
        breadcrumbs={[
          { label: pageTitle("/"), href: "/" },
          { label: pageTitle("/blogs"), href: "/blogs" },
        ]}
      />
      <section className="wrap section-pad grid gap-10 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_388px] xl:gap-[40px] xl:px-[65px]">
        <Article post={post} />
        <Sidebar post={post} />
      </section>
    </>
  );
}
