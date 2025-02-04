import Image from "next/image";
import logo from "/public/MSSxKOSMExLIKELION.svg";
import facebook from "/public/socials/facebook.svg";
import instagram from "/public/socials/instagram.svg";
import tiktok from "/public/socials/tiktok.svg";
import youtube from "/public/socials/youtube.svg";
import Link from "next/link";
import { site } from "@/config/site";

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
    <footer className="pb-5 mx-auto">
      <div className="container">
        <div className="mt-8 items-center justify-between sm:flex border-t pt-4">
          <div className="mt-4 sm:mt-0">
            &copy; 2024 LIKELION All rights reserved.
          </div>
          <div className="mt-6 sm:mt-0">
            <div className="flex items-center gap-10">
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
              <Link href="/chinh-sach-bao-mat" target="_blank">
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
