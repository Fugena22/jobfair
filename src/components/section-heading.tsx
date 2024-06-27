import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export default function SectionHeading(props: HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2 {...props} className={cn("text-3xl font-semibold", props.className)} />
  );
}
