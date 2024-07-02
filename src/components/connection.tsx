import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionHeading from "./section-heading";
import { Button } from "./ui/button";

export default function Connection() {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-20">
          <div className="space-y-8">
            <SectionHeading>Tham gia nhóm Zalo ngay!</SectionHeading>

            <div className="space-y-4 max-w-md">
              <div className="flex gap-4">
                <Check className="size-6 shrink-0" strokeWidth={1.5} />
                <p>Cập nhật những thông tin mới nhất về K-TECH JOB FAIR 2024</p>
              </div>

              <div className="flex gap-4">
                <Check className="size-6 shrink-0" strokeWidth={1.5} />
                <p>
                  Nhận thông tin công ty, việc làm, cập nhật các hoạt động hấp
                  dẫn tại sự kiện và không bỏ lỡ bất kỳ thông tin quan trọng nào
                  về sự kiện lần này!
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/">Tham gia ngay</Link>
              </Button>
            </div>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719804992/likelion/ktc-jobfair-landing/702d8e01-c353-4284-9eaa-b823927755d3.png"
              alt="Zalo"
              width={230}
              height={470}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
