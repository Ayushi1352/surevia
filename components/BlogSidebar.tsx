import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { blogCategories, formatDate, type BlogPost } from "@/lib/blogs";
import data from "@/data";

const { blogs, blogDetail: blog } = data;

export default function BlogSidebar({ post: current }: { post: BlogPost }) {
  const latest = blogs.posts.filter((post) => post.title !== current.title).slice(0, 5);

  return (
    <Reveal as="aside" effect="right" className="grid content-start gap-[28px] md:grid-cols-2 lg:grid-cols-1">
      <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)]">
        <h2 className="bg-[#f8f8fa] px-[20px] py-[15px] font-heading text-[21px] font-bold text-ink">{blog.latestTitle}</h2>
        <ul className="px-[22px] pb-[4px]">
          {latest.map((post) => (
            <li key={post.title} className="border-b border-line last:border-0">
              <Link href={post.href} className="group flex items-center gap-[18px] py-[20px]">
                <Image
                  src={post.image}
                  alt=""
                  width={218}
                  height={190}
                  className="h-[83px] w-[95px] shrink-0 rounded-[8px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span>
                  <span className="block text-[15px] leading-[25px] font-medium text-ink transition-colors group-hover:text-primary">
                    {post.titleLines.map((l) => (
                      <span key={l} className="lg:block">
                        {l}{" "}
                      </span>
                    ))}
                  </span>
                  <span className="mt-[10px] block text-[15.4px] leading-[21px] text-[#6a7083]">{formatDate(post.date, "long")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-[12px] bg-white shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)]">
        <h2 className="bg-[#f8f8fa] px-[20px] py-[16px] font-heading text-[21px] font-bold text-ink">
          {blog.categoriesTitle}
        </h2>
        <ul className="py-[10px] pr-[27px] pl-[22px]">
          {blogCategories.map((c) => (
            <li key={c.label} className="border-b border-line last:border-0">
              <Link
                href={`/blogs?category=${encodeURIComponent(c.label)}`}
                className="group flex items-center justify-between py-[5.5px] pl-[8px] text-[17px] text-body transition-all duration-300 hover:pl-[14px] hover:text-primary"
              >
                {c.label}
                <span className="grid size-[37px] place-items-center rounded-full bg-rose text-[14.5px] font-semibold text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
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
