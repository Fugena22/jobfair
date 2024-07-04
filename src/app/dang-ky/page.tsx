import RegisterForm from "@/components/forms/register-form";
import { site } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "K-TECH Job Fair 2024 - Registration form",
  description:
    "Sự kiện việc làm ngành công nghệ Hàn Quốc quy tụ hơn 30 công ty công nghệ Hàn Quốc do Chính phủ Hàn Quốc tài trợ, với hàng trăm cơ hội việc làm cho các lập trình viên tài năng của Việt Nam.",
  keywords: [
    "LIKELION",
    "Hàn Quốc",
    "việc làm",
    "IT jobs",
    "Korea IT job",
    "ngày hội việc làm ngành công nghệ thông tin",
    "cơ hội việc làm ngành công nghệ thông tin",
    "K-Tech job fair",
    "việc làm hàn quốc",
    "việc làm lập trình viên",
    "front-end dev",
    "back-end dev",
    "việc làm lập trình",
    "job fair hàn quốc",
    "job fair",
    "k-tech job fair 2024",
  ],
  openGraph: {
    url: "./opengraph-image.jpg",
  },
  metadataBase: new URL(site.baseUrl),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  referrer: "origin-when-cross-origin",
  // other: {
  //   "google-site-verification": "To9bBudd-R7vTgpZ5KCCm4DUwwuMpfI44qhAU2EwfqE",
  // },
};

export default function RegisterPage() {
  return (
    <div className="mx-auto container max-w-lg space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Đăng ký tham gia ngay</h1>
        <p className="text-muted-foreground">
          Vui lòng nhập đúng thông tin để ban tổ chức liên hệ hướng dẫn tham gia
          sự kiện & nhà tuyển dụng đánh giá được kinh nghiệm của bạn.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
