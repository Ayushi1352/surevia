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

  const field = `w-full rounded-[0.5rem] border border-line bg-white text-ink outline-none transition-all duration-300 placeholder:text-[#656b81] hover:border-primary/50 focus:border-primary focus:shadow-[0_0_0_0.1875rem_color-mix(in_srgb,var(--color-primary)_12%,transparent)] ${
    compact ? "h-[3.25rem] px-4 text-[0.95rem]" : "h-[3.625rem] px-5 text-[0.9375rem] xl:h-[3.9375rem] xl:text-[1rem]"
  }`;

  return (
    <form
      onSubmit={onSubmit}
      className={`grid ${compact ? "gap-[0.8125rem]" : "gap-[0.9375rem]"} ${layout === "grid" ? "sm:grid-cols-2 sm:gap-x-[1.125rem] sm:gap-y-[1.1875rem]" : ""}`}
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
          className="pointer-events-none absolute top-1/2 right-4 size-[1.125rem] -translate-y-1/2 text-ink"
          strokeWidth={2.25}
        />
      </div>
      {!compact && (
        <textarea
          name="message"
          placeholder={form.message}
          aria-label={form.message}
          className={`${field} !h-[10.9375rem] resize-none py-5 ${layout === "grid" ? "sm:col-span-2 xl:!h-[14.3125rem]" : "xl:!h-[10.875rem]"}`}
        />
      )}
      <button
        type="submit"
        className={`group inline-flex w-full items-center justify-center gap-4 rounded-full border-[0.09375rem] border-primary bg-primary font-heading font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-primary hover:shadow-[0_0.5rem_1.25rem_color-mix(in_srgb,var(--color-plum)_22%,transparent)] ${
          compact ? "mt-[0.25rem] h-[3.6875rem] text-[1rem]" : "h-[3.875rem] text-[1.0625rem]"
        } ${layout === "grid" ? "mt-[0.125rem] sm:col-span-2 xl:h-[4.4375rem] xl:text-[1.08125rem]" : ""} ${layout === "stack" ? "mt-[0.375rem] xl:h-[4.125rem] xl:text-[1.2rem]" : ""}`}
      >
        {form.submit}
        <Icon
          name="arrow-right"
          className={`transition-transform duration-300 group-hover:translate-x-1.5 ${compact ? "size-[1.125rem]" : "size-[1.375rem]"}`}
          strokeWidth={2}
        />
      </button>
      {layout === "grid" && (
        <p className="flex items-center justify-center gap-3 pt-5 text-center text-[0.775rem] text-body sm:col-span-2">
          <Icon name="lock-solid" className="size-[1.0625rem] shrink-0 text-primary" />
          {form.note}
        </p>
      )}
    </form>
  );
}
