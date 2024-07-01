"use client";

import { cn } from "@/lib/utils";
import { Diamond } from "lucide-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingTexts = ({
  texts,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  texts: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    const getDirection = () => {
      if (containerRef.current) {
        if (direction === "left") {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards"
          );
        } else {
          containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse"
          );
        }
      }
    };
    const getSpeed = () => {
      if (containerRef.current) {
        if (speed === "fast") {
          containerRef.current.style.setProperty("--animation-duration", "20s");
        } else if (speed === "normal") {
          containerRef.current.style.setProperty("--animation-duration", "40s");
        } else {
          containerRef.current.style.setProperty("--animation-duration", "80s");
        }
      }
    };
    addAnimation();
  }, [direction, speed]);
  const [start, setStart] = useState(false);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen-xl overflow-hidden  shadow-[8px_4px_12px_8px_rgba(255,97,0,0.2)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {texts.map((text, idx) => (
          <li
            className="max-w-full relative rounded-2xl flex-shrink-0 text-center flex items-center gap-4"
            key={idx}
          >
            <h4>{text}</h4>
            <Diamond className="size-4 fill-primary stroke-none" />
          </li>
        ))}
      </ul>
    </div>
  );
};
