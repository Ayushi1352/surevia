import EnquiryForm from "@/components/EnquiryForm";
import { Accent } from "@/components/SectionTitle";
import data from "@/data";

const { enquire } = data;

export default function EnquireForm() {
  return (
    <div className="rounded-[16px] bg-blush px-5 py-8 shadow-[0_6px_24px_rgba(123,15,64,0.06)] sm:px-[31px] xl:px-[35px] xl:pt-[29px] xl:pb-[42px]">
      <h2 className="font-heading text-[28px] leading-tight font-extrabold tracking-[-0.01em] text-ink sm:text-[34px] xl:text-[38.5px]">
        {enquire.formTitle} <Accent>{enquire.formHighlight}</Accent>
      </h2>
      <p className="mt-2 mb-5 text-[15px] text-body xl:mb-[18px] xl:text-[18.7px] xl:whitespace-nowrap">{enquire.formText}</p>
      <EnquiryForm layout="stack" />
    </div>
  );
}
