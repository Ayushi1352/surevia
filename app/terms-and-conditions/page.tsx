import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

const title = pageTitle("/terms-and-conditions");

export const metadata: Metadata = { title };

export default function TermsAndConditionsPage() {
  return <PolicyPage title={title} {...data.policies.terms} />;
}
