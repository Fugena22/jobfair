import {
  FileText,
  Gift,
  Handshake,
  MailCheck,
  Network,
  Star,
} from "lucide-react";
import Link from "next/link";
// import { motion } from "framer-motion";
// import AnimationLayout from "./shared/animation-layout";

export default function Benefits() {
  const features = [
    {
      icon: <Handshake className="size-6" strokeWidth={1.5} />,
      // title: "Miễn phí 100% chi phí, bao gồm ăn trưa",
      desc: "Gặp gỡ và phỏng vấn với các doanh nghiệp đến từ Hàn Quốc",
    },
    {
      icon: <MailCheck className="size-6" strokeWidth={1.5} />,
      // title: "Hỗ trợ cho mượn laptop và màn hình",
      desc: "Cơ hội nhận được lời mời làm việc (ở Hàn Quốc) ngay sau sự kiện",
    },
    {
      icon: <FileText className="size-6" strokeWidth={1.5} />,
      // title: "Được cấp VISA làm việc tại Hàn Quốc",
      desc: "Nhận tư vấn về cách chuẩn bị hồ sơ, viết CV và kỹ năng phỏng vấn",
    },
    {
      icon: <Network className="size-6" strokeWidth={1.5} />,
      // title: "Tăng thu nhập cá nhân",
      desc: "Kết nối với các chuyên gia công nghệ và lập trình viên khác từ khắp Việt Nam",
    },
    {
      icon: <Gift className="size-6" strokeWidth={1.5} />,
      // title: "Tăng thu nhập cá nhân",
      desc: "Phần quà sự kiện khi tham gia phỏng vấn tuyển dụng",
    },
    {
      icon: <Star className="size-6" strokeWidth={1.5} />,
      title: "Tăng thu nhập cá nhân",
      desc: "Rút thăm may mắn dành cho người tham gia sự kiện",
    },
  ];

  return (
    <section className="py-14">
      {/* <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      > */}
      <div className="container text-gray-600">
        <div className="max-w-2xl mx-auto md:text-center text-left">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Lợi ích của người tham gia
          </h2>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="space-y-3 p-6 rounded-md bg-orange-100 flex gap-6 items-center"
              >
                <div className="flex-none w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center border text-white">
                  {item.icon}
                </div>
                {/* <h4 className="md:text-xl text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4> */}
                <p className="mt-0">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </AnimationLayout> */}
    </section>
  );
}
