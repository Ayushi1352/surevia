import data, { type InsuranceBlogPost } from "@/data";

export type BlogPost = InsuranceBlogPost;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Posts store one ISO date; cards show "15 Aug 2026", the article shows "15 August 2026".
export function formatDate(iso: string, style: "short" | "long" = "short"): string {
  const [year, month, day] = iso.split("-");
  const name = months[Number(month) - 1];
  return `${day} ${style === "short" ? name.slice(0, 3) : name} ${year}`;
}

// Sidebar categories are counted from the posts themselves.
export const blogCategories = Object.entries(
  data.blogs.posts.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] ?? 0) + 1;
    return acc;
  }, {}),
).map(([label, count]) => ({ label, count }));
