import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import PlansGrid from "./PlansGrid";

const title = pageTitle("/insurance-plans");

export const metadata: Metadata = { title };

export default function InsurancePlansPage() {
  return (
    <>
      <Banner title={title} />
      <PlansGrid />
    </>
  );
}
