import { Calendar, Clock, Leaf, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

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

export function Hero() {
  return (
    <section className="w-full py-12 md:py-20">
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
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sự kiện việc làm IT lớn nhất năm, xây dựng sự nghiệp tại Hàn Quốc
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" asChild>
              <Link href="/dang-ky">Đăng ký ngay</Link>
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">Thứ Năm, ngày 25/07/2024</p>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">09:00 ~ 16:00</p>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-muted-foreground" />
              <p className="text-muted-foreground">Khách sạn Lotte Sài Gòn</p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative max-w-lg mx-auto mt-20 lg:mt-0">
            <div>
              <Image
                src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389862/likelion/ktc-jobfair-landing/Hero_bfnqh8.png"
                width="540"
                height="400"
                alt="Hero"
                className="mx-auto aspect-[540/400] overflow-hidden rounded object-cover sm:w-full lg:order-last"
              />
            </div>
            <div className="">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="absolute bg-black text-white p-2 lg:p-2 max-w-[180px] text-center text-balance rounded"
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
