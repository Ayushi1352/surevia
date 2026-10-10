import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import BlogsGrid from "./BlogsGrid";

const title = pageTitle("/blogs");

export const metadata: Metadata = { title };

export default function BlogsPage() {
  return (
    <>
      <Banner title={title} />
      <BlogsGrid />
    </>
  );
}
