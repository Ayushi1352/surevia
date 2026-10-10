import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { pageTitle } from "@/lib/pages";
import data from "@/data";

const title = pageTitle("/privacy-policy");

export const metadata: Metadata = { title };

export default function PrivacyPolicyPage() {
  return <PolicyPage title={title} {...data.policies.privacy} />;
}
