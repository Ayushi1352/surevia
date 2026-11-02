import { ThankYou } from "@/components/sections/ThankYou";
import { ThankYouPoints } from "@/components/sections/ThankYouPoints";
import type { ThankYouPageData } from "@/types/templates.types";

export const ThankYouSection = ({ data }: { data?: ThankYouPageData }) => {
  if (!data) return null;
  return (
    <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 xl:px-[5rem]">
      <ThankYou data={data} />
      <ThankYouPoints data={data} />
    </section>
  );
};
