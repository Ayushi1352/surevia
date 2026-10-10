import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

const { faq } = data;

export const metadata: Metadata = { title: pageTitle("/faq") };

export default function FAQPage() {
  return (
    <PolicyPage
      title={faq.title}
      intro={faq.intro}
      accordion
      sections={faq.items.map((item) => ({
        title: item.question,
        text: item.answer,
      }))}
    />
  );
}