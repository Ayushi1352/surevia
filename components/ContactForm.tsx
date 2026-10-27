import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { contact } = data;

export default function ContactForm() {
  return (
    <Reveal effect="right" className="rounded-[1rem] bg-blush px-5 py-8 sm:px-[2.75rem] lg:px-[1.75rem] xl:px-[2.6875rem] xl:pt-[2.75rem] xl:pb-[2.875rem]">
      <h2 className="font-heading text-[1.5rem] leading-[1.2] font-extrabold tracking-[-0.01em] text-ink sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]">
        {contact.formTitle} <Accent>{contact.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[0.9375rem] leading-[1.6] font-medium text-body xl:text-[1rem]">{contact.formText}</p>
      <EnquiryForm layout="grid" />
    </Reveal>
  );
}
