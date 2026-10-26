"use client";

import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import Icon from "./Icon";
import data from "@/data";

const { form, plans } = data;

type Props = {
  // "grid": two-column fields (contact), "stack": one field per row (enquire), "compact": sidebar
  layout?: "grid" | "stack" | "compact";
  defaultPlan?: string;
};

export default function EnquiryForm({ layout = "stack", defaultPlan = "" }: Props) {
  const router = useRouter();
  const compact = layout === "compact";

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  const field = `w-full rounded-[8px] border border-line bg-white text-ink outline-none transition-all duration-300 placeholder:text-[#656b81] hover:border-primary/50 focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] ${
    compact ? "h-[52px] px-4 text-[15.2px]" : "h-[58px] px-5 text-[15px] xl:h-[63px] xl:text-[16px]"
  }`;

  return (
    <form
      onSubmit={onSubmit}
      className={`grid ${compact ? "gap-[13px]" : "gap-[15px]"} ${layout === "grid" ? "sm:grid-cols-2 sm:gap-x-[18px] sm:gap-y-[19px]" : ""}`}
    >
      <input name="name" required placeholder={form.name} aria-label={form.name} className={field} />
      <input name="email" type="email" required placeholder={form.email} aria-label={form.email} className={field} />
      <input name="phone" type="tel" required placeholder={form.phone} aria-label={form.phone} className={field} />
      <div className="relative">
        <select
          name="plan"
          required
          defaultValue={defaultPlan}
          aria-label={form.plan}
          className={`${field} appearance-none pr-11 invalid:text-[#656b81]`}
        >
          <option value="" disabled>
            {compact ? form.planShort : form.plan}
          </option>
          {plans.items.map((p) => (
            <option key={p.title} value={p.title} className="text-ink">
              {p.title}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute top-1/2 right-4 size-[18px] -translate-y-1/2 text-ink"
          strokeWidth={2.25}
        />
      </div>
      {!compact && (
        <textarea
          name="message"
          placeholder={form.message}
          aria-label={form.message}
          className={`${field} !h-[175px] resize-none py-5 ${layout === "grid" ? "sm:col-span-2 xl:!h-[229px]" : "xl:!h-[174px]"}`}
        />
      )}
      <button
        type="submit"
        className={`group inline-flex w-full items-center justify-center gap-4 rounded-full border-[1.5px] border-primary bg-primary font-heading font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:shadow-[0_8px_20px_color-mix(in_srgb,var(--color-plum)_22%,transparent)] ${
          compact ? "mt-[4px] h-[59px] text-[16px]" : "h-[62px] text-[17px]"
        } ${layout === "grid" ? "mt-[2px] sm:col-span-2 xl:h-[71px] xl:text-[17.3px]" : ""} ${layout === "stack" ? "mt-[6px] xl:h-[66px] xl:text-[19.2px]" : ""}`}
      >
        {form.submit}
        <Icon
          name="arrow-right"
          className={`transition-transform duration-300 group-hover:translate-x-1.5 ${compact ? "size-[18px]" : "size-[22px]"}`}
          strokeWidth={2}
        />
      </button>
      {layout === "grid" && (
        <p className="flex items-center justify-center gap-3 pt-5 text-center text-[12.4px] text-body sm:col-span-2">
          <Icon name="lock-solid" className="size-[17px] shrink-0 text-primary" />
          {form.note}
        </p>
      )}
    </form>
  );
}
