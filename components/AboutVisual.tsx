import Image from "next/image";
import Icon from "./Icon";
import data from "@/data";

const { about } = data;

// Every layer is placed in % of the frame so the composition scales as one piece.
export default function AboutVisual() {
  return (
    <div className="relative mx-auto aspect-[840/790] w-full max-w-[717px]">
      <span className="absolute top-[12%] left-[12%] z-10 aspect-square w-[4.05%] rounded-full bg-primary" />

      <div className="absolute top-[3.7%] left-[3.2%] h-[84.9%] w-[91.5%] overflow-hidden rounded-[50%] shadow-[0_12px_44px_rgba(60,20,40,0.08)]">
        <Image
          src={about.mainImage}
          alt={about.mainImageAlt}
          fill
          sizes="(min-width: 1024px) 660px, 92vw"
          className="object-cover"
        />
      </div>

      <div className="absolute top-[46.96%] left-[33.1%] aspect-square w-[45.48%] rounded-full bg-white p-[0.71%]">
        <div className="relative size-full overflow-hidden rounded-full">
          <Image
            src={about.familyImage}
            alt={about.familyImageAlt}
            fill
            sizes="(min-width: 1024px) 330px, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      <span className="absolute top-[65.7%] left-[23.45%] grid aspect-square w-[16.2%] place-items-center rounded-full bg-rose text-primary">
        <Icon name="shield-check" className="size-[52%]" strokeWidth={1.6} />
      </span>
    </div>
  );
}
