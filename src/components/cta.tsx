import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="relative px-8 sm:px-12  overflow-hidden md:px-24 rounded pb-80 sm:pb-40 md:pb-20 pt-8 sm:pt-12 md:pt-20 bg-neutral-950 text-neutral-50">
          <Image
            src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389861/likelion/ktc-jobfair-landing/Elements_1_ip4atx.png"
            alt="Pattern"
            width={400}
            height={400}
            className="absolute right-0 bottom-0"
          />
          <div className="relative sm:max-w-lg">
            <div className="sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold md:text-4xl">
                ĐĂNG KÝ NGAY HÔM NAY
              </h3>

              <p className="mt-4 leading-relaxed">
                CV của bạn sẽ được screening trước khi sự kiện diễn ra
              </p>

              <p className="mt-6">
                Sau khi điền form đăng ký, doanh nghiệp có thể xem được thông
                tin của bạn để đánh giá mức độ phù hợp. Do đó bạn nên đăng ký
                sớm để tạo lợi thế trước các ứng viên khác và gia tăng cơ hội
                nhận được các cơ hội việc làm hấp dẫn ngay tại sự kiện.
              </p>
            </div>
            <div className="items-center gap-3 mt-4 sm:flex">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/dang-ky" target="_blank">
                  Đăng ký ngay
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
