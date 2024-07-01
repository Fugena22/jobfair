"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "#", text: "Giới thiệu" },
  { href: "#", text: "Danh sách doanh nghiệp" },
  { href: "#", text: "Lợi ích tham gia" },
  { href: "#", text: "Đối tượng" },
  { href: "#", text: "Hoạt động chính" },
];

const matchRoutes = ["/"];

export function Navbar() {
  const pathname = usePathname();
  const isMatch = matchRoutes.includes(pathname);
  return (
    <header className="shadow-sm bg-neutral-950 text-neutral-100">
      <div className="container">
        <div className="flex items-center justify-between gap-2 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1719546783/likelion/ktc-jobfair-landing/LOGO/KTC_-_White_Logo_eggmte.svg"
              alt="logo"
              width={103}
              height={40}
            />
          </Link>
          {isMatch && (
            <>
              <nav className="hidden md:flex items-center gap-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    {item.text}
                  </Link>
                ))}
                <Button asChild>
                  <Link href="/dang-ky">Đăng ký ngay</Link>
                </Button>
              </nav>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden text-neutral-900"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="md:hidden">
                  <div className="grid gap-4 py-6">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex w-full items-center py-2 text-lg font-semibold"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="/dang-ky">Đăng ký ngay</Link>
                  </Button>
                </SheetContent>
              </Sheet>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
