import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import GoogleMap from "./shared/google-map";
import facebook from "/public/socials/facebook.svg";
import instagram from "/public/socials/instagram.svg";
import tiktok from "/public/socials/tiktok.svg";
import youtube from "/public/socials/youtube.svg";
import Link from "next/link";

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

export default function Footer() {
  const socials = [
    {
      label: "LIKELION Facebook",
      href: "https://www.facebook.com/likelionvietnam",
      src: facebook,
    },
    {
      label: "LIKELION Instagram",
      href: "https://www.instagram.com/likelionvn",
      src: instagram,
    },
    {
      label: "LIKELION Youtube",
      href: "https://www.youtube.com/@likelionvietnam",
      src: youtube,
    },
    {
      label: "LIKELION Tiktok",
      href: "https://www.tiktok.com/@likelionvietnam",
      src: tiktok,
    },
  ];
  return (
    <footer className="bg-muted py-12 md:py-16 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:flex md:flex-col lg:gap-12">
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
        <div className="flex">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Thông tin liên hệ</h2>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <p>+84 123 456 789</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-muted-foreground" />
                <p>info@example.com</p>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-muted-foreground" />
                <p>Thứ 2 - Thứ 6: 8h - 17h</p>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                <p>
                  Cobi Tower 2, 2-4 Đường số 8, Tân Phú, quận 7, Thành phố Hồ
                  Chí Minh
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl">
            <GoogleMap />
          </div>
        </div>
      </div>
      <div className="mt-8 items-center justify-between sm:flex border-t pt-4">
        <div className="mt-4 sm:mt-0">
          &copy; 2024 LIKELION All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {socials.map((social, idx) => (
              <li
                className="w-10 h-10 border rounded-full flex items-center justify-center"
                key={idx}
              >
                <Link href={social.href} target="_blank">
                  <Image
                    src={social.src}
                    alt={social.label}
                    width={32}
                    height={32}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
