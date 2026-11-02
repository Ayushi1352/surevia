import rawData from "@/data/templates.json";
import type { InsuranceTemplateData } from "@/types/templates.types";
import { HeroSection } from "@/components/sections/HeroSection";
import { Highlights } from "@/components/sections/Highlights";
import { AboutUs } from "@/components/sections/AboutUs";
import { Plans } from "@/components/sections/Plans";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Cta } from "@/components/sections/Cta";
import { Blogs } from "@/components/sections/Blogs";

const templateData: InsuranceTemplateData = rawData;
const sectionData = templateData.categories.Insurance.sections;
const commonData = templateData.common;

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection data={sectionData.Hero?.variants?.InsuranceHero1} />
      <Highlights data={sectionData.Highlights?.variants?.InsuranceHighlights1} />
      <AboutUs data={sectionData.AboutUs?.variants?.InsuranceAboutUs1} />
      <Plans data={sectionData.Plans?.variants?.InsurancePlans1} ui={commonData.globalUI} />
      <Process data={sectionData.Process?.variants?.InsuranceProcess1} />
      <Stats data={sectionData.Stats?.variants?.InsuranceStats1} />
      <Testimonials data={sectionData.Testimonials?.variants?.InsuranceTestimonials1} ui={commonData.globalUI} />
      <Cta data={sectionData.Cta?.variants?.InsuranceCta1} />
      <Blogs data={sectionData.Blogs?.variants?.InsuranceBlogs1} limit={sectionData.Blogs?.variants?.InsuranceBlogs1?.homeCount} />
    </main>
  );
}
