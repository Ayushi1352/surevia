import { Button } from "@/components/ui/Button";
import type { NotFoundData } from "@/types/templates.types";

export const NotFoundSection = ({ data }: { data?: NotFoundData }) => {
  if (!data) return null;
  return (
    <section className="mx-auto flex w-full max-w-[60rem] flex-col items-center px-5 py-20 text-center sm:px-8 xl:py-28">
      <p className="font-heading text-[4.5rem] leading-none font-extrabold text-[var(--color-primary)] xl:text-[6rem]">{data.code}</p>
      <h1 className="mt-4 font-heading text-[1.75rem] font-bold text-[var(--color-heading)] xl:text-[2.375rem]">{data.title}</h1>
      <p className="mt-3 max-w-[32rem] text-[0.9375rem] leading-[1.6] text-[var(--color-text)] xl:text-[1rem]">{data.description}</p>
      <Button href={data.buttonUrl} label={data.buttonText} className="mt-7" />
    </section>
  );
};
