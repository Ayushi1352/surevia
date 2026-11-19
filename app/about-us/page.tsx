import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutUs } from "@/components/sections/AboutUs";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.aboutBreadcrumb?.seo };

export default function AboutUsPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutUs data={sectionData.AboutUs?.variants?.InsuranceAboutUs1} variant="page" />
      <Stats data={sectionData.Stats?.variants?.InsuranceStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.InsuranceWhyChooseUs1} />
    </main>
  );
}
