import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Accent, Eyebrow } from "@/components/SectionTitle";
import { contactLines } from "@/lib/contact";
import data from "@/data";

const { contact } = data;

export default function ContactInfo() {
  return (
    <Reveal effect="left" className="xl:pt-[5px]">
      <Eyebrow className="font-semibold xl:gap-[16px] xl:text-[15.8px] [&>span]:xl:w-[58px]">{contact.eyebrow}</Eyebrow>
      <h2 className="mt-3 font-heading text-[32px] leading-[1.18] font-extrabold tracking-[-0.01em] text-ink sm:text-[42px] xl:mt-[10px] xl:text-[46.9px] xl:leading-[58px]">
        {contact.title[0]} <br className="hidden sm:block" />
        {contact.title[1]} <Accent>{contact.highlight}</Accent>
      </h2>
      <p className="mt-4 max-w-[515px] text-[16px] leading-[1.6] text-body xl:mt-[18px] xl:text-[20.2px] xl:leading-[30px]">
        {contact.text}
      </p>
      <ul className="mt-8 space-y-[20px] xl:mt-[32px]">
        {contact.cards.map((card) => (
          <li
            key={card.title}
            className="group flex max-w-[560px] items-center gap-5 rounded-[12px] bg-white p-[21px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(60,20,40,0.14)] xl:gap-[38px] xl:py-[21.5px]"
          >
            <span className="grid size-[72px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:size-[92px]">
              <Icon name={card.icon} className="size-[36px] xl:size-[46px]" />
            </span>
            <span className="min-w-0">
              <span className="block font-heading text-[18px] font-bold text-ink xl:text-[19px]">{card.title}</span>
              <span className="mt-1.5 block text-[16px] leading-[1.45] break-words text-body xl:text-[19.5px] xl:leading-[28px]">
                {contactLines(card).map((l) => (
                  <span key={l} className="block">
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
