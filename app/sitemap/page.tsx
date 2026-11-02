import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sitemap } from "@/components/sections/Sitemap";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.sitemapBreadcrumb?.title };

export default function SitemapPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.sitemapBreadcrumb} ui={commonData.globalUI} />
      <Sitemap data={sectionData.SitemapPage?.variants?.InsuranceSitemapPage1} />
    </main>
  );
}
