import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { AboutIntro } from "@/components/sections/AboutIntro";
import { Stats } from "@/components/sections/Stats";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.aboutBreadcrumb?.title };

export default function AboutUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.aboutBreadcrumb} ui={commonData.globalUI} />
      <AboutIntro data={sectionData.AboutUs?.variants?.InsuranceAboutUs1} />
      <Stats data={sectionData.Stats?.variants?.InsuranceStats1} />
      <WhyChooseUs data={sectionData.WhyChooseUs?.variants?.InsuranceWhyChooseUs1} />
    </main>
  );
}
