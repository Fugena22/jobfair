/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/o140sVNZswU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <Image
            src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719397500/likelion/ktc-jobfair-landing/142ffb5b-206c-4950-bf9a-d1cb19853903.png"
            alt=""
            width={273}
            height={114}
          />

          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-3xl">
            Code your dream in Korea
          </h3>

          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sự kiện việc làm IT lớn nhất năm, xây dựng sự nghiệp tại Hàn Quốc
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Đăng ký ngay
            </Link>
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
        <Image
          src="/placeholder.svg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
}
