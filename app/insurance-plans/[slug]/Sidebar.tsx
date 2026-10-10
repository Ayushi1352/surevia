import Image from "next/image";
import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import Icon from "@/components/Icon";
import data from "@/data";

const { plans, planDetail } = data;

type Plan = (typeof plans.items)[number];

export default function Sidebar({ plan }: { plan: Plan }) {
  const related = plans.items.filter((p) => p.slug !== plan.slug).slice(0, 4);

  return (
    <aside className="grid content-start gap-[26px] md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-[16px] bg-blush px-[25px] pt-[24px] pb-[26px]">
        <h2 className="font-heading text-[26px] leading-tight font-extrabold text-primary xl:text-[30px]">
          {planDetail.formTitle}
        </h2>
        <p className="mt-2 mb-[20px] max-w-[300px] text-[15px] leading-[26px] text-[#6a7083] xl:text-[17.4px]">
          {planDetail.formText.replace("{plan}", plan.title.toLowerCase())}
        </p>
        <EnquiryForm layout="compact" />
      </div>

      <div className="overflow-hidden rounded-[16px] bg-white shadow-card">
        <h2 className="bg-[#f8f8fa] px-[22px] py-[19px] font-heading text-[20px] font-bold text-ink xl:text-[22px]">
          {planDetail.relatedTitle}
        </h2>
        <ul className="px-[20px] pb-[8px]">
          {related.map((p) => (
            <li key={p.slug} className="border-b border-line last:border-0">
              <Link href={`/insurance-plans/${p.slug}`} className="group flex items-center gap-[15px] py-[20px]">
                <Image
                  src={p.thumb ?? p.image}
                  alt={p.title}
                  width={188}
                  height={186}
                  className="size-[82px] shrink-0 rounded-[8px] object-cover"
                />
                <span className="flex-1">
                  <span className="block font-heading text-[16px] font-bold text-ink">{p.title}</span>
                  <span className="mt-1.5 block text-[14.8px] leading-[24px] text-[#6a7083]">
                    {p.relatedText.map((l) => (
                      <span key={l} className="block whitespace-nowrap">
                        {l}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-rose text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon name="arrow-right" className="size-[17px]" strokeWidth={2} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
