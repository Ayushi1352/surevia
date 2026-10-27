import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { enquire } = data;

export default function EnquireForm() {
  return (
    <Reveal effect="right" className="rounded-[1rem] bg-blush px-5 py-8 shadow-[0_0.375rem_1.5rem_rgba(123,15,64,0.06)] sm:px-[1.9375rem] xl:px-[2.1875rem] xl:pt-[1.8125rem] xl:pb-[2.625rem]">
      <h2 className="font-heading text-[1.5rem] leading-[1.2] font-extrabold tracking-[-0.01em] text-ink sm:text-[1.75rem] xl:text-[1.875rem] xl:leading-[2.375rem]">
        {enquire.formTitle} <Accent>{enquire.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[0.9375rem] leading-[1.6] font-medium text-body xl:text-[1rem]">{enquire.formText}</p>
      <EnquiryForm layout="stack" />
    </Reveal>
  );
}
