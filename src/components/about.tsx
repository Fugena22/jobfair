import { cn } from "@/lib/utils";
import Link from "next/link";
// import about1 from "/public/about-1.jpg";
// import about2 from "/public/about-2.jpg";
// import about3 from "/public/about-3.jpg";
import Image from "next/image";
// import AnimationLayout from "./shared/animation-layout";

const stats = [
  {
    data: "24,000+",
    title: "Học viên",
  },
  {
    data: "10",
    title: "Năm kinh nghiệm giáo dục",
  },
  {
    data: "6",
    title: "Quốc gia",
  },
  {
    data: "95%",
    title: "Học viên hài lòng",
  },
];

const text = [
  //   {
  //     title: "Giới thiệu sự kiện K-Tech Job Fair 2024",
  //     description: (
  //       <div>
  //         <div>
  //           <p>
  //             <Link
  //               href="https://www.likelion.edu.vn"
  //               target="_blank"
  //               className="text-orange-600 font-bold"
  //             >
  //               LIKELION
  //             </Link>{" "}
  //             là công ty đào tạo lập trình hàng đầu tại Hàn Quốc với hơn 10 năm
  //             kinh nghiệm đào tạo cho hơn 24,000 sinh viên tại hơn 06 quốc gia
  //             khác nhau như Hàn Quốc, Mỹ, Úc, Hong Kong, Nhật Bản, và Việt Nam.
  //           </p>

  //           <p>
  //             Trong dự án <strong>K-tech College 2024</strong>, LIKELION vinh dự
  //             là đơn vị được tín nhiệm bởi Bộ Doanh nghiệp vừa và nhỏ và khởi
  //             nghiệp Hàn Quốc (MSS - The Ministry of SMEs and Startups), thực hiện
  //             đào tạo nhân lực Việt Nam chất lượng cao mảng CNTT và kết nối đến
  //             làm việc tại các công ty Start-up ở Hàn Quốc.
  //           </p>
  //         </div>

  //         <div className="flex-none mt-6 md:mt-0 lg:mt-8">
  //           <ul className="inline-grid gap-y-4 gap-x-12 grid-cols-2">
  //             {stats.map((item, idx) => (
  //               <li key={idx} className="">
  //                 <h4 className="text-4xl text-orange-600 font-semibold">
  //                   {item.data}
  //                 </h4>
  //                 <p className="mt-2 font-medium">{item.title}</p>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </div>
  //     ),
  //     img: about1,
  //   },
  // {
  //   title: "Cơ quan tài trợ - MSS",
  //   description: (
  //     <div>
  //       <p>
  //         Bộ Doanh nghiệp vừa và nhỏ và Khởi nghiệp Hàn Quốc (MSS - The Ministry
  //         of SMEs and Startups) là một tổ chức chính phủ có mục tiêu là tăng
  //         cường khả năng cạnh tranh và hỗ trợ đổi mới của các Doanh nghiệp vừa
  //         và nhỏ (SME) và Doanh nghiệp siêu nhỏ (ME).
  //       </p>
  //       <p>
  //         Sứ mệnh của MSS là phát triển và thực hiện các chính sách của chính
  //         phủ trong ba lĩnh vực sau:
  //       </p>
  //       <ul className="list-decimal pl-5">
  //         <li>Thúc đẩy tăng trưởng kinh doanh</li>
  //         <li>Khuyến khích khởi nghiệp kinh doanh</li>
  //         <li>Hỗ trợ doanh nghiệp siêu nhỏ</li>
  //       </ul>
  //     </div>
  //   ),

  // img: about3,
  // },
  {
    title: "Giới thiệu sự kiện K-Tech Job Fair 2024",
    description: (
      <div>
        <p>
          K-TECH JOB FAIR 2024 là sự kiện việc làm quy tụ nhiều doanh nghiệp Hàn
          Quốc do Chính Phủ Hàn Quốc tổ chức. Đây là sự kiện đặc biệt nhằm kết
          nối các doanh nghiệp Hàn Quốc tại Hàn Quốc và Việt Nam với các lập
          trình viên Việt Nam tài năng.
        </p>
        <p>
          K-Tech Job Fair 2024 sẽ là nơi để các lập trình viên, sinh viên Việt
          Nam giao lưu, kết nối và tìm kiếm các đến cơ hội việc làm với mức
          lương và chính sách đãi ngộ cực hấp dẫn tại các công ty công nghệ Hàn
          Quốc.
        </p>
        <p>Chương trình hoàn toàn miễn phí. Đăng ký tham gia ngay hôm nay!</p>
      </div>
    ),

    // img: about2,
  },
];

export default function AboutUs() {
  return (
    <section id="ve-chung-toi">
      <div className="container">
        <div className="space-y-12 py-6 sm:py-20">
          {text.map((item, idx) => (
            // <AnimationLayout
            //   className="duration-1000 delay-300"
            //   isInviewState={{
            //     trueState: "opacity-1",
            //     falseState: "opacity-0 translate-y-12",
            //   }}
            //   key={idx}
            // >
            <div
              className={cn(
                "mx-auto text-gray-600 gap-x-12 items-start justify-between lg:flex md:pb-8 flex-row"
                // idx % 2 != 1 && "lg:flex-row-reverse"
              )}
            >
              <div className="hidden lg:block lg:max-w-xl">
                <Image
                  src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389862/likelion/ktc-jobfair-landing/Gio%CC%9B%CC%81i_thie%CC%A3%CC%82u_mk0321.png"
                  className="rounded-lg"
                  width={628}
                  height={459}
                  alt={item.title}
                />
              </div>

              <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                <div className="max-w-2xl">
                  <h3 className="text-gray-800 text-2xl font-semibold sm:text-3xl mb-4">
                    {item.title}
                  </h3>

                  <div className="[&_p]:mb-3">{item.description}</div>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Đăng ký ngay
                  </Link>
                </div>
              </div>
            </div>
            // </AnimationLayout>
          ))}
        </div>
      </div>
    </section>
  );
}
