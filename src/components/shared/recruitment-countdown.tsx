"use client";

import { useEffect, useState } from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Button } from "../ui/button";
import Link from "next/link";
import useScroll from "@/hooks/use-scroll";

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="w-8 sm:w-10 rounded flex flex-col items-center leading-none">
    {zeroPad(value)}
    <span className="text-[8px] font-medium">{label}</span>
  </div>
);

const Separator = () => <span>:</span>;

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    // Render a completed state
    return <div>Sự kiện đã kết thúc</div>;
  } else {
    // Render a countdown
    return (
      <div className="flex items-center gap-4 [&>div]:flex-1">
        <div className="font-medium text-xs sm:text-sm text-balance text-left md:text-base">
          Thời gian diễn ra sự kiện còn
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1 font-bold">
            <TimeUnit value={days} label="ngày" />
            <Separator />
            <TimeUnit value={hours} label="giờ" />
            <Separator />
            <TimeUnit value={minutes} label="phút" />
            <Separator />
            <TimeUnit value={seconds} label="giây" />
          </div>
        </div>

        <div className="hidden sm:flex justify-end">
          <Button className="invisible" asChild>
            <Link href="/dang-ky" target="_blank">
              Đăng ký ngay
            </Link>
          </Button>
        </div>
      </div>
    );
  }
};

export default function RecruitmentCountdown() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isActive = useScroll(50);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    isLoaded && <Countdown date={new Date(2024, 6, 25)} renderer={renderer} />
  );
}
