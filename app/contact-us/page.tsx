import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.contactBreadcrumb?.title };

export default function ContactUsPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.contactBreadcrumb} ui={commonData.globalUI} />
      <Contact data={sectionData.Contact?.variants?.InsuranceContact1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
      <Location data={sectionData.Contact?.variants?.InsuranceContact1} />
    </main>
  );
}
