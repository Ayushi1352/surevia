import type { Metadata } from "next";
import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import { pageTitle } from "@/lib/pages";

const title = pageTitle("/blogs");

export const metadata: Metadata = { title };

export default function BlogsPage() {
  return (
    <>
      <Banner title={title} />
      <Blogs />
    </>
  );
}
