import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { ThankYouSection } from "@/components/sections/ThankYouSection";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;

export const metadata: Metadata = { ...sectionData.ThankYouPage?.variants?.InsuranceThankYouPage1?.seo };

export default function ThankYouPage() {
  return (
    <main className="flex-1">
      <ThankYouSection data={sectionData.ThankYouPage?.variants?.InsuranceThankYouPage1} />
    </main>
  );
}




