import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import EnquireForm from "./EnquireForm";
import EnquireInfo from "./EnquireInfo";

const title = pageTitle("/enquire-now");

export const metadata: Metadata = { title };

export default function EnquireNowPage() {
  return (
    <>
      <Banner title={title} />
      <section className="wrap section-pad grid items-start gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,620px)] xl:gap-[60px] xl:pr-[60px] xl:pl-[77px]">
        <EnquireInfo />
        <EnquireForm />
      </section>
    </>
  );
}
