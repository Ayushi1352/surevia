import Banner from "@/components/Banner";
import { contact } from "@/lib/contact";
import data from "@/data";

type PolicySection = {
  title: string;
  // "{email}" is replaced with the site's contact email
  text: string;
};

export default function PolicyPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
}) {
  return (
    <>
      <Banner title={title} />
      <article className="bg-white py-12 sm:py-16 xl:py-20">
        <div className="wrap max-w-[960px]">
          <p className="border-l-[3px] border-primary pl-5 text-[16px] leading-8 text-ink sm:text-[17px]">
            {intro}
          </p>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {sections.map((section) => (
              <section key={section.title} className="py-7 sm:py-8">
                <h2 className="font-heading text-[20px] font-semibold text-ink sm:text-[22px]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[14.5px] leading-7 text-body sm:text-[15px]">
                  <p>{section.text.replace("{email}", contact.email)}</p>
                </div>
              </section>
            ))}
          </div>
          <p className="mt-8 text-[13px] leading-6 text-body">
            {data.policies.contactPrompt}{" "}
            <a className="font-medium text-primary underline decoration-primary/40 underline-offset-4" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
