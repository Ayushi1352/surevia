import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyPage } from "@/components/sections/PolicyPage";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

const faq = sectionData.Faq?.variants?.InsuranceFaq1;

export const metadata: Metadata = { title: faq?.pageTitle };

export default function FAQPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.faqsBreadcrumb} ui={commonData.globalUI} />
      <PolicyPage
        accordion
        data={
          faq && {
            intro: faq.intro,
            sections: faq.items.map((item) => ({ id: item.id, title: item.question, description: item.answer })),
            contactPrompt: faq.contactPrompt,
            contactEmail: faq.contactEmail,
            contactEmailUrl: faq.contactEmailUrl,
          }
        }
      />
    </main>
  );
}
