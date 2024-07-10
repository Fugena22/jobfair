import Link from "next/link";
import { Button } from "./ui/button";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-[15%] right-4 z-50">
      <Button size="lg" className="hidden sm:flex" asChild>
        <Link href="/dang-ky">Đăng ký ngay</Link>
      </Button>
      <Button className="flex sm:hidden" asChild>
        <Link href="/dang-ky">Đăng ký ngay</Link>
      </Button>
    </div>
  );
}
