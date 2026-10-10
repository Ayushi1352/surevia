import EnquiryForm from "@/components/EnquiryForm";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { contact } = data;

export default function ContactForm() {
  return (
    <div className="rounded-[16px] bg-blush px-5 py-8 sm:px-[44px] xl:px-[43px] xl:pt-[44px] xl:pb-[46px]">
      <h2 className="font-heading text-[28px] leading-tight font-extrabold tracking-[-0.01em] text-ink sm:text-[34px] xl:text-[37.5px]">
        {contact.formTitle} <Accent>{contact.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 text-[15px] text-body xl:mb-[30px] xl:text-[18.7px]">{contact.formText}</p>
      <EnquiryForm layout="grid" />
    </div>
  );
}
