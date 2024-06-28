import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Connection() {
  return (
    <section className="">
      <div className="container">
        <div className="flex justify-center">
          <div className="space-y-8 max-w-md">
            <h2 className="font-bold text-4xl">Tham gia nhóm Zalo ngay!</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <Check className="size-6" strokeWidth={1.5} />
                <p>Cập nhật những thông tin mới nhất về K-TECH JOB FAIR 2024</p>
              </div>

              <div className="flex gap-4">
                <Check className="size-6" strokeWidth={1.5} />
                <p>
                  Nhận thông tin công ty, việc làm, cập nhật các hoạt động hấp
                  dẫn tại sự kiện và không bỏ lỡ bất kỳ thông tin quan trọng nào
                  về sự kiện lần này!
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Tham gia ngay
              </Link>
            </div>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389762/likelion/ktc-jobfair-landing/Zalo.png"
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
