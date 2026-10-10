import BlogCard from "@/components/BlogCard";
import SectionTitle, { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { blogs } = data;

export default function BlogsGrid() {
  return (
    <section className="wrap section-pad xl:pr-[62px] xl:pl-[65px]">
      <SectionTitle eyebrow={blogs.eyebrow} text={blogs.text} className="[&_h2]:xl:mt-[3px] [&_h2]:xl:text-[36.4px] [&>p:first-child]:xl:gap-[12px] [&>p:first-child]:xl:text-[14.8px] [&>p:first-child>span]:xl:w-[32px] [&>p:last-child]:xl:text-[16.5px]">
        {blogs.title} <Accent>{blogs.highlight}</Accent>
      </SectionTitle>
      <div className="mt-8 grid gap-x-[23px] gap-y-[42px] md:grid-cols-2 lg:grid-cols-3 xl:mt-[25px] xl:gap-y-[55px]">
        {blogs.posts.map((post) => (
          <BlogCard key={post.slug} href={`/blogs/${post.slug}`} buttonLabel={blogs.buttonLabel} {...post} />
        ))}
      </div>
    </section>
  );
}
