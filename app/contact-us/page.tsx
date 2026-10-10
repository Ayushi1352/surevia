import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Location from "./Location";

const title = pageTitle("/contact-us");

export const metadata: Metadata = { title };

export default function ContactUsPage() {
  return (
    <>
      <Banner title={title} />
      <section className="wrap section-pad grid items-start gap-12 lg:grid-cols-[1fr_minmax(0,683px)] lg:gap-10 xl:gap-[60px] xl:pr-[56px] xl:pl-[80px]">
        <ContactInfo />
        <ContactForm />
      </section>
      <Location />
    </>
  );
}
