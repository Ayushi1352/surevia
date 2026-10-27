import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogCategories, formatDate, type BlogPost } from "@/lib/blogs";
import data from "@/data";

const { blogs, blogDetail: blog } = data;

export default function BlogSidebar({ post: current }: { post: BlogPost }) {
  const latest = blogs.posts.filter((post) => post.title !== current.title).slice(0, 5);

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[1.75rem] md:grid-cols-2 lg:grid-cols-1">
      <div className="overflow-hidden rounded-[0.75rem] bg-white shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)]">
        <h2 className="bg-[#f8f8fa] px-[1.25rem] py-[0.9375rem] font-heading text-[1.3125rem] font-bold text-ink">{blog.latestTitle}</h2>
        <ul className="px-[1.375rem] pb-[0.25rem]">
          {latest.map((post) => (
            <li key={post.title} className="border-b border-line last:border-0">
              <Link href={post.href} className="group flex items-center gap-[1.125rem] py-[1.25rem]">
                <Image
                  src={post.image}
                  alt=""
                  width={218}
                  height={190}
                  className="h-[5.1875rem] w-[5.9375rem] shrink-0 rounded-[0.5rem] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span>
                  <span className="block text-[0.9375rem] leading-[1.5625rem] font-medium text-ink transition-colors group-hover:text-primary">
                    {post.titleLines.map((l) => (
                      <span key={l} className="lg:block">
                        {l}{" "}
                      </span>
                    ))}
                  </span>
                  <span className="mt-[0.625rem] block text-[0.9625rem] leading-[1.3125rem] text-[#6a7083]">{formatDate(post.date, "long")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[0.75rem] bg-white shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)]">
        <h2 className="bg-[#f8f8fa] px-[1.25rem] py-[1rem] font-heading text-[1.3125rem] font-bold text-ink">
          {blog.categoriesTitle}
        </h2>
        <ul className="py-[0.625rem] pr-[1.6875rem] pl-[1.375rem]">
          {blogCategories.map((c) => (
            <li key={c.label} className="border-b border-line last:border-0">
              <Link
                href={`/blogs?category=${encodeURIComponent(c.label)}`}
                className="group flex items-center justify-between py-[0.34375rem] pl-[0.5rem] text-[1.0625rem] text-body transition-all duration-300 hover:pl-[0.875rem] hover:text-primary"
              >
                {c.label}
                <span className="grid size-[2.3125rem] place-items-center rounded-full bg-rose text-[0.90625rem] font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {c.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
