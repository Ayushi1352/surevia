import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Sitemap } from "@/components/sections/Sitemap";

export const metadata: Metadata = { ...(rawData as InsuranceTemplateData).common.sitemapBreadcrumb?.seo };

export default function SitemapPage() {
  const templateData: InsuranceTemplateData = rawData;
  const sectionData = templateData?.categories?.Insurance?.sections;
  const commonData = templateData?.common;

  if (!sectionData || !commonData) return null;

  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.sitemapBreadcrumb} ui={commonData.globalUI} />
      <Sitemap data={sectionData.Sitemap?.variants?.InsuranceSitemap1} />
    </main>
  );
}
