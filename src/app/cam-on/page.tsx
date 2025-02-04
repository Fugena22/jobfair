import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "K-TECH Job Fair 2024 - Thank you",
  description:
    "Sự kiện việc làm ngành công nghệ Hàn Quốc quy tụ hơn 30 công ty công nghệ Hàn Quốc do Chính phủ Hàn Quốc tài trợ, với hàng trăm cơ hội việc làm cho các lập trình viên tài năng của Việt Nam.",
  keywords: [
    "LIKELION",
    "Hàn Quốc",
    "việc làm",
    "IT jobs",
    "Korea IT job",
    "ngày hội việc làm ngành công nghệ thông tin",
    "cơ hội việc làm ngành công nghệ thông tin",
    "K-Tech job fair",
    "việc làm hàn quốc",
    "việc làm lập trình viên",
    "front-end dev",
    "back-end dev",
    "việc làm lập trình",
    "job fair hàn quốc",
    "job fair",
    "k-tech job fair 2024",
  ],
  openGraph: {
    url: "./opengraph-image.jpg",
  },
  metadataBase: new URL(site.baseUrl),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  referrer: "origin-when-cross-origin",
  // other: {
  //   "google-site-verification": "To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE",
  // },
};

export default function Thankyou() {
  return (
    <div className="max-w-xl flex flex-col items-center justify-center mx-auto text-center space-y-8 py-20">
      <h2 className="uppercase text-4xl">likelion cảm ơn!</h2>
      <Image
        src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389973/likelion/ktc-jobfair-landing/Thank%20you%20form.png"
        alt="Thankyou"
        width={97}
        height={160}
      />
      <p className="font-medium">
        Bạn đã đăng ký tham gia K-TECH JOB FAIR 2024 thành công. <br />
        Chúc bạn tìm được công việc mơ ước tại Hàn Quốc!
      </p>
      <div className="flex flex-col gap-2 min-[400px]:flex-row">
        <Button size="lg" asChild>
          <Link href="/">Trở về trang chủ</Link>
        </Button>
      </div>
    </div>
  );
}
