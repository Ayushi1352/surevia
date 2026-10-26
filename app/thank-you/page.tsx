import type { Metadata } from "next";
import data from "@/data";
import ThankYou from "@/components/ThankYou";
import ThankYouPoints from "@/components/ThankYouPoints";

export const metadata: Metadata = { title: data.thankYou.pageTitle };

export default function ThankYouPage() {
  return (
    <section data-section-pad className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 xl:px-[80px]">
      <ThankYou />
      <ThankYouPoints />
    </section>
  );
}
