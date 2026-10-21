import Icon from "@/components/Icon";
import { contact, contactLines } from "@/lib/contact";
import data from "@/data";

const { location } = data.contact;
const { address } = contact;

// Full-bleed map across the page width, with the office address pinned over it.
export default function Location() {
  return (
    <section className="relative h-[360px] w-full overflow-hidden bg-[#faf8fb] sm:h-[420px] xl:h-[480px]">
      <iframe
        title={`Map showing the ${data.site.name} office at ${address}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none wrap relative pt-6 sm:pt-10">
        <div className="pointer-events-auto flex w-[327px] max-w-full items-center gap-[16px] rounded-[12px] bg-white px-[8px] py-[12px] shadow-card sm:py-[16px]">
          <span className="grid size-[56px] shrink-0 place-items-center rounded-full bg-rose text-primary sm:size-[72px]">
            <Icon name="pin-solid" className="size-[38px] animate-float sm:size-[52px]" />
          </span>
          <span>
            <span className="block text-[15.8px] font-semibold text-ink">{location.mapCard.title}</span>
            <span className="mt-1 block text-[14px] leading-[23px] text-body sm:text-[15.2px]">
              {contactLines(location.mapCard).map((l, idx) => (
                <span key={`${location.mapCard.title}-${idx}`} className="block">
                  {l}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
