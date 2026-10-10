import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import Stats from "@/components/Stats";
import AboutIntro from "./AboutIntro";
import WhyChooseUs from "./WhyChooseUs";

const title = pageTitle("/about-us");

export const metadata: Metadata = { title };

export default function AboutUsPage() {
  return (
    <>
      <Banner title={title} />
      <AboutIntro />
      <Stats />
      <WhyChooseUs />
    </>
  );
}
