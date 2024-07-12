"use client";

import { usePathname } from "next/navigation";
import RecruitmentCountdown from "./shared/recruitment-countdown";
import { cn } from "@/lib/utils";

export default function Countdown() {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "fixed left-0 right-0 bottom-0 z-50 sm:top-0 sm:bottom-auto",
        pathname === "/"
          ? "bg-yellow-500 text-neutral-50"
          : "bg-neutral-50 text-neutral-950"
      )}
    >
      <div className="container mx-auto py-2 sm:text-center sm:h-14">
        <RecruitmentCountdown />
      </div>
    </div>
  );
}
