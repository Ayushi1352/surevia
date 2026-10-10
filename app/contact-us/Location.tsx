import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { Eyebrow } from "@/components/SectionTitle";
import { contact, contactLines } from "@/lib/contact";
import data from "@/data";

const { location } = data.contact;
const { address } = contact;

export default function Location() {
  return (
    <section className="bg-[#faf8fb]">
      <div className="wrap section-pad grid gap-8 lg:grid-cols-[1.255fr_1fr] xl:grid-cols-[714px_1fr] xl:gap-[35px] xl:pr-[60px] xl:pl-[65px]">
        <Reveal effect="left" className="relative aspect-[4/3] overflow-hidden rounded-[12px] sm:aspect-[714/444]">
          <iframe
            title={`Map showing the ${data.site.name} office at ${address}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
          <div className="absolute top-[12%] left-1/2 flex w-[327px] max-w-[92%] -translate-x-1/2 items-center gap-[16px] rounded-[12px] bg-white px-[8px] py-[12px] shadow-card sm:top-[17.5%] sm:left-[53.7%] sm:py-[16px]">
            <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-rose text-primary sm:size-[72px]">
              <Icon name="pin-solid" className="size-[38px] animate-float sm:size-[52px]" />
            </span>
            <span>
              <span className="block text-[15.8px] font-semibold text-ink">{location.mapCard.title}</span>
              <span className="mt-1 block text-[14px] leading-[23px] text-body sm:text-[15.2px]">
                {contactLines(location.mapCard).map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </span>
          </div>
        </Reveal>

        <Reveal effect="right" className="rounded-[16px] bg-white px-6 py-8 shadow-[0_4px_22px_rgba(60,20,40,0.04)] sm:px-[43px] xl:pt-[17px] xl:pb-[32px]">
          <Eyebrow className="font-semibold xl:gap-[16px] [&>span]:xl:w-[58px]">{location.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-heading text-[32px] leading-tight font-extrabold tracking-[-0.01em] text-ink sm:text-[38px] xl:text-[41.6px]">
            {location.title}
          </h2>
          <p className="mt-2 max-w-[490px] text-[16px] leading-[1.55] text-body xl:mt-[3px] xl:text-[19px] xl:leading-[30px]">{location.text}</p>
          <ul className="mt-6 xl:mt-[31px]">
            {location.items.map((item) => (
              <li
                key={item.title}
                className="group flex items-center gap-5 border-b border-line py-6 first:pt-0 last:border-0 last:pb-0 xl:items-start xl:gap-[26px] xl:py-[29px]"
              >
                <span className="grid size-[66px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white xl:-mt-[3px]">
                  <Icon name={item.icon} className="size-[36px]" />
                </span>
                <span>
                  <span className="block font-heading text-[18px] font-bold text-ink xl:text-[17.5px]">{item.title}</span>
                  <span className="mt-1 block text-[15.5px] leading-[1.5] text-body xl:mt-px xl:text-[18.5px] xl:leading-[27px]">
                    {contactLines(item).map((l) => (
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
      </div>
    </section>
  );
}
