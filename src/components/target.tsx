import { Files, GraduationCap, Luggage, Users } from "lucide-react";
import Image from "next/image";

const audiences = [
  {
    icon: <Users className="size-6" strokeWidth={1.5} />,
    title: "Các lập trình viên đang làm việc tại Việt Nam",
  },
  {
    icon: <Files className="size-6" strokeWidth={1.5} />,
    title: "Sinh viên tốt nghiệp đại học đang tìm việc trong mảng lập trình",
  },
  {
    icon: <GraduationCap className="size-6" strokeWidth={1.5} />,
    title: "Học viên của dự án K-Tech College 2024",
  },
  {
    icon: <Luggage className="size-6" strokeWidth={1.5} />,
    title: "Người mong muốn làm việc tại các công ty Hàn Quốc",
  },
];

export function Target() {
  return (
    <section id="doi-tuong" className="w-full py-6 sm:py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <Image
          src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719557375/likelion/ktc-jobfair-landing/%C4%90%E1%BB%91i%20t%C6%B0%E1%BB%A3ng%20tham%20gia.png"
          width="444"
          height="424"
          alt="Target"
          className="mx-auto aspect-video overflow-hidden rounded object-cover object-center sm:w-full hidden md:block"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Đối tượng tham gia
          </h2>
          <ul className="grid gap-4 sm:gap-8">
            {audiences.map((audience, idx) => (
              <li
                key={idx}
                className="p-6 rounded bg-orange-100 flex gap-6 items-center border-l-4 border-l-orange-200"
              >
                <div className="text-orange-400">{audience.icon}</div>
                <h4>{audience.title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
