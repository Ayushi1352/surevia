import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { ThankYou } from "@/components/sections/ThankYou";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).categories.Insurance.sections.ThankYou?.variants?.InsuranceThankYou1?.seo };

export default function ThankYouPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;

  if (!sectionData) return null;

  return (
    <main className="flex-1">
      <ThankYou data={sectionData.ThankYou?.variants?.InsuranceThankYou1} />
    </main>
  );
}
