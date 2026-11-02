import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Enquire } from "@/components/sections/Enquire";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export const metadata: Metadata = { title: commonData.enquireBreadcrumb?.title };

export default function EnquireNowPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.enquireBreadcrumb} ui={commonData.globalUI} />
      <Enquire data={sectionData.EnquirePage?.variants?.InsuranceEnquirePage1} form={sectionData.EnquiryForm?.variants?.InsuranceEnquiryForm1} />
    </main>
  );
}
