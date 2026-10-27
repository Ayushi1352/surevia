import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { pageTitle } from "@/lib/pages";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Location from "@/components/Location";

const title = pageTitle("/contact-us");

export const metadata: Metadata = { title };

export default function ContactUsPage() {
  return (
    <>
      <Banner title={title} />
      <section data-section-pad className="mx-auto w-full max-w-[90rem] px-5 sm:px-8 py-12 sm:py-14 xl:py-16 [[data-section-pad]+&]:pt-0 grid items-start gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[1fr_minmax(0,42.6875rem)] xl:gap-[3.75rem] xl:pr-[3.5rem] xl:pl-[5rem]">
        <ContactInfo />
        <ContactForm />
      </section>
      <Location />
    </>
  );
}
