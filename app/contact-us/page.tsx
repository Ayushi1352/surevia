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
      <section className="wrap section-pad grid items-start gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,683px)] xl:gap-[60px] xl:pr-[56px] xl:pl-[80px]">
        <ContactInfo />
        <ContactForm />
      </section>
      <Location />
    </>
  );
}
