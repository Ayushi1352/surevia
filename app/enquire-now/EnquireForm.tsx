import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { enquire } = data;

export default function EnquireForm() {
  return (
    <Reveal effect="right" className="rounded-[16px] bg-blush px-5 py-8 shadow-[0_6px_24px_rgba(123,15,64,0.06)] sm:px-[31px] xl:px-[35px] xl:pt-[29px] xl:pb-[42px]">
      <h2 className="font-heading text-[24px] leading-[1.2] font-extrabold tracking-[-0.01em] text-ink sm:text-[28px] xl:text-[30px] xl:leading-[38px]">
        {enquire.formTitle} <Accent>{enquire.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-6 font-heading text-[15px] leading-[1.6] font-medium text-body xl:text-[16px]">{enquire.formText}</p>
      <EnquiryForm layout="stack" />
    </Reveal>
  );
}
