import type { Metadata } from "next";
import data from "@/data";
import ThankYou from "./ThankYou";
import ThankYouPoints from "./ThankYouPoints";

export const metadata: Metadata = { title: data.thankYou.pageTitle };

export default function ThankYouPage() {
  return (
    <section className="wrap section-pad xl:px-[80px]">
      <ThankYou />
      <ThankYouPoints />
    </section>
  );
}
