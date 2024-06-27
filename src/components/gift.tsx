import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";

export default function Gift() {
  return (
    <section className="mt-40">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
          <div className="max-w-md space-y-6">
            <SectionHeading>Quà tặng sự kiện</SectionHeading>

            <p>
              Tham gia ngày hội việc làm và nhận ngay những phần quà như bình
              nước, ly, sổ, và nhiều phần quà giá trị khác từ các nhà tài trợ.
            </p>
          </div>

          <div>
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389861/likelion/ktc-jobfair-landing/Element_Qua%CC%80_ta%CC%A3%CC%86ng_k6ioy2.png"
              alt="Gift"
              width={600}
              height={380}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
