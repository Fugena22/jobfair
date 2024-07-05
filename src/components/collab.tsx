import Image from "next/image";
import SectionHeading from "./section-heading";

const partnerLogos = [
  {
    src: "https://res.cloudinary.com/dk3pxmymh/image/upload/v1719474731/likelion/ktc-jobfair-landing/LOGO/MSS_iojccd.svg",
    alt: "MSS Logo",
  },
  {
    src: "https://res.cloudinary.com/dk3pxmymh/image/upload/v1719474731/likelion/ktc-jobfair-landing/LOGO/Cosme_ryxvsu.svg",
    alt: "COSME Logo",
  },
  {
    src: "https://res.cloudinary.com/dk3pxmymh/image/upload/v1720171190/likelion/ktc-jobfair-landing/LOGO/OITI_SVG_mk6dny.svg",
    alt: "Oiti Logo",
  },
];

export function Collab() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <SectionHeading>Đơn vị tổ chức</SectionHeading>
        </div>
        <div className="flex items-center justify-between gap-8 md:gap-24">
          {partnerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              width={234}
              height={52}
              alt={logo.alt}
              className="w-auto aspect-[234/52] overflow-hidden rounded object-contain object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
