import Banner from "@/components/Banner";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
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
  accordion = false,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
  // Collapses each section behind its title (FAQ); one stays open at a time.
  accordion?: boolean;
}) {
  return (
    <>
      <Banner title={title} />
      <article className="bg-white section-pad">
        <div className="wrap max-w-[960px]">
          <Reveal effect="left">
            <p className="border-l-[3px] border-primary pl-5 text-[16px] leading-8 text-ink sm:text-[17px]">{intro}</p>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {sections.map((section, i) =>
              accordion ? (
                <Reveal as="section" key={section.title}>
                  <details name="faq" open={i === 0} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-[17px] font-semibold text-ink transition-colors duration-300 group-open:text-primary hover:text-primary sm:py-6 sm:text-[20px] [&::-webkit-details-marker]:hidden">
                      <h2>{section.title}</h2>
                      <span className="grid size-[36px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-open:rotate-180 group-open:bg-primary group-open:text-white">
                        <Icon name="chevron-down" className="size-[18px]" strokeWidth={2.25} />
                      </span>
                    </summary>
                    <p className="pr-[52px] pb-6 text-[14.5px] leading-7 text-body sm:text-[15px]">
                      {section.text.replace("{email}", contact.email)}
                    </p>
                  </details>
                </Reveal>
              ) : (
              <Reveal as="section" key={section.title} className="group py-7 sm:py-8">
                <h2 className="font-heading text-[20px] font-semibold text-ink transition-colors duration-300 group-hover:text-primary sm:text-[22px]">
                  <span className="text-primary">{i + 1}.</span> {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[14.5px] leading-7 text-body sm:text-[15px]">
                  <p>{section.text.replace("{email}", contact.email)}</p>
                </div>
              </Reveal>
              ),
            )}
          </div>
          <p className="mt-8 text-[13px] leading-6 text-body">
            {data.policies.contactPrompt}{" "}
            <a className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-plum hover:decoration-plum" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            .
          </p>
        </div>
      </article>
    </>
  );
}
