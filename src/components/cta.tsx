import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
// import pattern from "/public/patterns/cta-pattern.jpg";
// import leftLine from "/public/patterns/cta-pattern-left.svg";
// import rightLine from "/public/patterns/cta-pattern-right.svg";
import { site } from "@/components/config/site";
// import AnimationLayout from "./shared/animation-layout";

export default function CTA() {
  return (
    <section className="pt-14">
      <div className="container">
        <div className="relative px-4 sm:px-8 py-8 sm:py-12 overflow-hidden md:px-8 rounded-3xl bg-[#101416]">
          {/* <Image
            src={pattern}
            className="absolute inset-0 object-cover md:hidden"
            alt="Background Pattern"
            fill
          />
          <Image
            src={leftLine}
            alt="Background Pattern"
            className="absolute h-full top-0 -left-20 hidden md:block"
          />
          <Image
            src={rightLine}
            alt="Background Pattern"
            className="absolute h-full top-0 -right-20 hidden md:block"
          /> */}
          <div className="relative sm:max-w-lg max-w-sm">
            <div className="sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 md:text-4xl">
                ĐĂNG KÝ NGAY HÔM NAY
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                CV của bạn sẽ được screening trước khi sự kiện diễn ra
              </p>

              <p className="mt-6 text-gray-300">
                Sau khi điền form đăng ký, doanh nghiệp có thể xem được thông
                tin của bạn để đánh giá mức độ phù hợp. Do đó bạn nên đăng ký
                sớm để tạo lợi thế trước các ứng viên khác và gia tăng cơ hội
                nhận được các cơ hội việc làm hấp dẫn ngay tại sự kiện.
              </p>
            </div>
            <div className="items-center justify-center gap-3 mt-4 sm:flex">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href={site.registrationUrl}>Đăng ký ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
