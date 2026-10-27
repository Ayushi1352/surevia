import Icon from "@/components/Icon";
import Loop from "@/components/Loop";
import { contact, contactLines } from "@/lib/contact";
import data from "@/data";

const { location } = data.contact;
const { address } = contact;

// Full-bleed map across the page width, with the office address pinned over it.
export default function Location() {
  return (
    <section className="relative h-[22.5rem] w-full overflow-hidden bg-[#faf8fb] sm:h-[26.25rem] xl:h-[30rem]">
      <iframe
        title={data.site.labels.map.replace("{name}", data.site.name).replace("{address}", address)}
        src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none mx-auto w-full max-w-[90rem] px-5 sm:px-8 xl:px-[3.75rem] relative pt-6 sm:pt-10">
        <div className="pointer-events-auto flex w-[20.4375rem] max-w-full items-center gap-[1rem] rounded-[0.75rem] bg-white px-[0.5rem] py-[0.75rem] shadow-[0_0.25rem_1.375rem_color-mix(in_srgb,var(--color-plum)_8%,transparent)] sm:py-[1rem]">
          <span className="grid size-[3.5rem] shrink-0 place-items-center rounded-full bg-rose text-primary sm:size-[4.5rem]">
            <Loop effect="float">
              <Icon name="pin-solid" className="size-[2.375rem] sm:size-[3.25rem]" />
            </Loop>
          </span>
          <span>
            <span className="block text-[0.9875rem] font-semibold text-ink">{location.mapCard.title}</span>
            <span className="mt-1 block text-[0.875rem] leading-[1.4375rem] text-body sm:text-[0.95rem]">
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
