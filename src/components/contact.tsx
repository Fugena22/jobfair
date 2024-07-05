import { Clock, Mail, MapPin, Phone } from "lucide-react";
import GoogleMap from "./shared/google-map";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="size-6" />,
      contact: "(+84) 86 713 3779",
      title: "Phone",
    },
    {
      icon: <Mail className="size-6" />,
      contact: "recruitment@likelion.net",
      title: "Email",
    },
    {
      icon: <Clock className="size-6" />,
      contact: "Thứ 2 - Thứ 6 | 8:30 AM - 5:30 PM",
      title: "Time",
    },
    {
      icon: <MapPin className="size-6" />,
      contact:
        "Cobi Tower 2, 2-4 Đường số 8, Tân Phú, Quận 7, Thành phố Hồ Chí Minh",
      title: "Our office",
    },
  ];

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

  return (
    <section className="py-14">
      <div className="container space-y-10">
        <div className="flex items-center justify-center gap-8 md:gap-24">
          {partnerLogos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              width={200}
              height={50}
              alt={logo.alt}
              className="aspect-[4/1] overflow-hidden rounded object-contain object-center"
            />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="max-w-xl space-y-3">
              <SectionHeading>Liên hệ</SectionHeading>
              {/* <p>
                We’re here to help and answer any question you might have, We
                look forward to hearing from you .
              </p> */}
            </div>
            <div>
              <ul className="mt-4 sm:mt-8 flex flex-col flex-wrap gap-y-2 sm:gap-y-4">
                {contactMethods.map((item, idx) => (
                  <li key={idx}>
                    <h4 className="sr-only text-lg font-medium">
                      {item.title}
                    </h4>
                    <div className="mt-2 flex items-center gap-x-3">
                      <div className="flex-none">{item.icon}</div>
                      <p>{item.contact}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <GoogleMap />
          </div>
        </div>
      </div>
    </section>
  );
}
