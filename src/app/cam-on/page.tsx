import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Thankyou() {
  return (
    <div className="border max-w-xl flex flex-col items-center justify-center mx-auto text-center space-y-8">
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
