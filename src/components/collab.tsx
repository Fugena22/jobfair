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
    src: "https://res.cloudinary.com/dk3pxmymh/image/upload/v1719474731/likelion/ktc-jobfair-landing/LOGO/Likelion_s0na5s.svg",
    alt: "LIKELION Logo",
  },
];

export function Collab() {
  return (
    <section className="w-full py-12">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <SectionHeading>Đơn vị tổ chức</SectionHeading>
        </div>
        <div className="flex items-center justify-center gap-8 md:gap-24">
          {partnerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              width={200}
              height={50}
              alt={logo.alt}
              className="aspect-[4/1] overflow-hidden rounded-lg object-contain object-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
