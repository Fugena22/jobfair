import {
  FileText,
  Gift,
  Handshake,
  MailCheck,
  Network,
  Star,
} from "lucide-react";
import SectionHeading from "./section-heading";

export default function Benefits() {
  const features = [
    {
      icon: <Handshake className="size-6" strokeWidth={1.5} />,
      title: "Gặp gỡ và phỏng vấn với các doanh nghiệp đến từ Hàn Quốc",
    },
    {
      icon: <MailCheck className="size-6" strokeWidth={1.5} />,
      title: "Cơ hội nhận được lời mời làm việc (ở Hàn Quốc) ngay sau sự kiện",
    },
    {
      icon: <FileText className="size-6" strokeWidth={1.5} />,
      title: "Nhận tư vấn về cách chuẩn bị hồ sơ, viết CV và kỹ năng phỏng vấn",
    },
    {
      icon: <Network className="size-6" strokeWidth={1.5} />,
      title:
        "Kết nối với các chuyên gia công nghệ và lập trình viên khác từ khắp Việt Nam",
    },
    {
      icon: <Gift className="size-6" strokeWidth={1.5} />,
      title: "Phần quà sự kiện khi tham gia phỏng vấn tuyển dụng",
    },
    {
      icon: <Star className="size-6" strokeWidth={1.5} />,
      title: "Rút thăm may mắn dành cho người tham gia sự kiện",
    },
  ];

  return (
    <section id="loi-ich-tham-gia" className="lg:py-14">
      <div className="container">
        <div className="max-w-2xl mx-auto md:text-center text-left">
          <SectionHeading>Lợi ích của người tham gia</SectionHeading>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-4 sm:gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="p-6 rounded bg-orange-100 flex gap-6 items-center border-t-4 border-t-orange-200"
              >
                <div className="text-orange-400">{item.icon}</div>
                <h4>{item.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
