import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import Countdown from "@/components/countdown";
import { Navbar } from "@/components/navbar";
import ThirdParties from "@/components/third-parties";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K-Tech Job Fair 2024: Code your future in Korea",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={cn(inter.className, "overflow-x-hidden")}>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <Countdown />
          <Navbar />
          {children}
          <ThirdParties />
        </body>
      </html>
    </Providers>
  );
}
