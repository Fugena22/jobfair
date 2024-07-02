import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";

export default function Gift() {
  return (
    <section className="bg-orange-50">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 py-10">
          <div className="max-w-[21rem] space-y-6">
            <SectionHeading>Quà tặng sự kiện</SectionHeading>
            <p>
              Tham gia K-TECH JOB FAIR 2024, ngoài cơ hội có được việc làm siêu
              xịn tại Hàn Quốc, bạn còn được tham gia các Minigame và nhận nhiều
              phần quà cực kỳ hấp dẫn từ ban tổ chức và các công ty tham gia sự
              kiện.
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
