import { Files, FileSpreadsheet, MailCheck, Map } from "lucide-react";
import SectionHeading from "./section-heading";

const steps = [
  {
    icon: <FileSpreadsheet />,
    text: "Điền form đăng ký",
  },
  {
    icon: <MailCheck />,
    text: "Nhận mail xác nhận đăng ký thành công",
  },
  {
    icon: <Map />,
    text: "Nhận mail hướng dẫn đến địa điểm diễn ra sự kiện. (2 ngày trước sự kiện)",
  },
  {
    icon: <Files />,
    text: "Đến tham gia sự kiện theo email hướng dẫn",
  },
];

export default function Steps() {
  return (
    <div className="my-12">
      <div className="container">
        <div className="mt-24">
          <SectionHeading className="text-center mb-8">
            Các bước tham gia
          </SectionHeading>
          <ol className="flex flex-col gap-2 lg:flex-row  max-w-lg mx-auto lg:max-w-none lg:gap-6">
            {steps.map((step, idx) => (
              <li key={idx} className="flex-1">
                <div className="flex items-center gap-8 lg:flex-col lg:gap-2 lg:items-start text-sm lg:text-base">
                  <div className="flex items-center lg:w-full gap-2">
                    <div className="size-14 rounded-full text-2xl grid place-items-center bg-primary text-primary-foreground shrink-0">
                      {step.icon}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="relative h-1 w-full grow border-t-2 border-dashed border-orange-300 hidden lg:block">
                        <div className="h-0 w-0 border-y-[6px] border-y-transparent border-l-[12px] border-l-orange-300 absolute -top-1/2 left-full -translate-y-1/2 -translate-x-1/2"></div>
                      </div>
                    )}
                  </div>

                  <div className="border border-orange-200 bg-orange-50 p-4 w-full">
                    {step.text}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="relative h-10 w-1 ml-7 border-l-2 border-dashed border-orange-300 lg:hidden">
                    <div className="h-0 w-0 border-x-[6px] border-x-transparent border-t-[12px] border-t-orange-300 absolute bottom-0 -left-1/2 -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
