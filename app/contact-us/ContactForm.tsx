import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { contact } = data;

export default function ContactForm() {
  return (
    <Reveal effect="right" className="rounded-[16px] bg-blush px-5 py-8 sm:px-[44px] lg:px-[28px] xl:px-[43px] xl:pt-[44px] xl:pb-[46px]">
      <h2 className="font-heading text-[24px] leading-[1.2] font-extrabold tracking-[-0.01em] text-ink sm:text-[28px] xl:text-[30px] xl:leading-[38px]">
        {contact.formTitle} <Accent>{contact.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[15px] leading-[1.6] font-medium text-body xl:text-[16px]">{contact.formText}</p>
      <EnquiryForm layout="grid" />
    </Reveal>
  );
}
