import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Accent, Eyebrow } from "@/components/SectionTitle";
import { contactLines } from "@/lib/contact";
import data from "@/data";

const { contact } = data;

export default function ContactInfo() {
  return (
    <Reveal effect="left" className="xl:pt-[5px]">
      <Eyebrow>{contact.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[28px] leading-[1.18] font-extrabold tracking-[-0.01em] text-ink sm:text-[34px] xl:text-[38px] xl:leading-[44px]">
        {contact.title[0]} <br className="hidden sm:block" />
        {contact.title[1]} <Accent>{contact.highlight}</Accent>
      </h2>
      <p className="mt-3 max-w-[515px] font-heading text-[15px] leading-[1.6] font-medium text-body xl:text-[16px]">
        {contact.text}
      </p>
      <ul className="mt-8 space-y-[20px] xl:mt-[32px]">
        {contact.cards.map((card) => (
          <li
            key={card.title}
            className="group flex max-w-[560px] items-center gap-5 rounded-[12px] bg-white p-[21px] shadow-[0_4px_22px_color-mix(in_srgb,var(--color-plum)_8%,transparent)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)] xl:gap-[38px] xl:py-[21.5px]"
          >
            <span className="grid size-[72px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[92px]">
              <Icon name={card.icon} className="size-[36px] xl:size-[46px]" />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-[18px] font-bold text-ink xl:text-[19px]">{card.title}</span>
              <span className="mt-1.5 block text-[16px] leading-[1.45] break-words text-body xl:text-[19.5px] xl:leading-[28px]">
                {contactLines(card).map((l, idx) => (
                  <span key={`${card.title}-${idx}`} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
