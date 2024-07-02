import { Calendar, Clock, Leaf, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { InfiniteMovingTexts } from "./shared/infinities-moving-texts";

const tags = [
  {
    content: "30 công ty công nghệ Hàn Quốc",
    position: {
      top: -40,
      left: "10%",
    },
  },
  {
    content: "Hàng trăm phần quà hấp dẫn",
    position: {
      top: -20,
      right: -50,
    },
  },
  {
    content: "Tư vấn CV và kinh nghiệm phỏng vấn",
    position: {
      top: "50%",
      right: -50,
    },
  },
  {
    content: "Hàng trăm cơ hội việc làm",
    position: {
      bottom: -30,
      left: "30%",
    },
  },
  {
    content: "Phỏng vấn ngay tại sự kiện",
    position: {
      top: "40%",
      left: -100,
    },
  },
];

const eventDetails = [
  { icon: Calendar, text: "Thứ Năm, ngày 25/07/2024" },
  { icon: Clock, text: "09:00 ~ 16:00" },
  { icon: MapPin, text: "Khách sạn Lotte Sài Gòn" },
];

export function Hero() {
  return (
    <section className="w-full py-12 md:py-20 bg-neutral-950 text-neutral-100">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 max-w-sm mx-auto text-center lg:text-left flex flex-col items-center lg:items-start lg:mx-0">
          <Image
            src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719397500/likelion/ktc-jobfair-landing/KT%20jobfair%20-PNG.png"
            alt=""
            width={273}
            height={114}
          />

          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl">
            Code your dream in Korea
          </h3>
          <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sự kiện việc làm IT lớn nhất năm, xây dựng sự nghiệp tại Hàn Quốc
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/dang-ky">Đăng ký ngay</Link>
            </Button>
          </div>

          <div className="space-y-2">
            {eventDetails.map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon className="size-5" />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative max-w-lg mx-auto mt-4 sm:mt-20 lg:mt-0">
            {/* Tags mobile */}
            {/* <div className="sm:hidden -mx-8 mb-8">
              <InfiniteMovingTexts texts={tags.map((tag) => tag.content)} />
            </div> */}

            <div className="w-full aspect-[1202/926] overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719805085/likelion/ktc-jobfair-landing/Hero%20image.png"
                width="1202"
                height="926"
                alt="Hero"
                className="mx-auto rounded object-cover w-full lg:order-last"
              />
            </div>

            {/* Tags desktop */}
            <div className="hidden sm:block">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="absolute bg-neutral-950 text-neutral-50 p-2 lg:p-2 max-w-[180px] text-center text-balance rounded border border-orange-400 shadow-[4px_8px_12px_97,0,0.20]"
                  style={tag.position}
                >
                  {tag.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
