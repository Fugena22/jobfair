import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section id="gioi-thieu">
      <div className="container">
        <div className="space-y-12 py-6 sm:py-20">
          <div
            className={cn(
              "mx-auto gap-x-12 items-start justify-between lg:flex md:pb-8 flex-row"
            )}
          >
            <div className="hidden lg:block lg:max-w-xl">
              <Image
                src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719389862/likelion/ktc-jobfair-landing/Gio%CC%9B%CC%81i_thie%CC%A3%CC%82u_mk0321.png"
                className="rounded"
                width={628}
                height={459}
                alt="Giới thiệu sự kiện K-Tech Job Fair 2024"
              />
            </div>

            <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block space-y-10">
              <div className="max-w-2xl space-y-10">
                <SectionHeading>
                  Giới thiệu sự kiện <br /> K-Tech Job Fair 2024
                </SectionHeading>

                <div className="[&_p]:mb-3">
                  <div className="space-y-8">
                    <p>
                      <b>K-TECH JOB FAIR 2024</b> là sự kiện việc làm quy tụ
                      nhiều <b>doanh nghiệp Hàn Quốc</b> do{" "}
                      <b>Chính Phủ Hàn Quốc tổ chức.</b> Đây là sự kiện đặc biệt
                      nhằm kết nối các doanh nghiệp Hàn Quốc tại Hàn Quốc và
                      Việt Nam với các <b>lập trình viên Việt Nam tài năng.</b>
                    </p>
                    <p>
                      K-Tech Job Fair 2024 sẽ là nơi để các lập trình viên, sinh
                      viên Việt Nam giao lưu và tìm kiếm các{" "}
                      <b>
                        cơ hội việc làm với mức lương và chính sách đãi ngộ cực
                        hấp dẫn
                      </b>{" "}
                      tại các công ty công nghệ Hàn Quốc.
                    </p>
                    <p>
                      <b className="text-orange-600">
                        Chương trình hoàn toàn miễn phí
                      </b>
                      . Đăng ký tham gia ngay hôm nay!
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/dang-ky">Đăng ký ngay</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
