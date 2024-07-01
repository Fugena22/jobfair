"use client";
import { ReactNode, useRef, useState } from "react";
// import AnimationLayout from "./shared/animation-layout";

interface FaqsCardProps {
  faqsList: {
    q: string;
    a: ReactNode;
  };
  idx: number;
}

const FaqsCard = (props: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div className="space-y-3 mt-5 overflow-hidden border-b" key={idx}>
      <h4
        className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="text-gray-500">{faqsList.a}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "Sự kiện có thu phí tham dự không?",
      a: "Sự kiện này hoàn toàn miễn phí bạn nhé.",
    },
    {
      q: "Yêu cầu khi đăng ký sự kiện?",
      a: "Bạn chỉ cần đăng ký thông tin trên website, lưu lại ngày giờ và địa điểm để đến tham dự thôi.",
    },
    {
      q: "Các công ty nào sẽ tham gia sự kiện này?",
      a: "Tất cả là công ty công nghệ Hàn Quốc có trụ sở tại Hàn Quốc hoặc Việt Nam.",
    },
    {
      q: "Vị trí công việc nào sẽ có tại sự kiện?",
      a: "Hàng trăm vị trí công việc tại Hàn Quốc hoặc Việt Nam dành cho các bạn lập trình viên tài năng, kể cả các bạn mới ra trường hoặc đã có nhiều năm kinh nghiệm.",
    },
    {
      q: "Vì sao cần đăng ký tham gia trước?",
      a: "Đăng ký & tải lên CV của bạn trên website giúp nhà tuyển dụng có thể xem và đánh giá trước năng lực của bạn trước ngày hội, giành lợi thế trước các ứng viên khác và gia tăng cơ hội có được việc làm ngay tại sự kiện",
    },
    {
      q: "Các công ty có yêu cầu ngoại ngữ lúc phỏng vấn không?",
      a: "Các bạn tham gia sự kiện không cần phải có ngoại ngữ vì các công ty đã có sẵn phiên dịch viên để hỗ trợ ứng viên tìm hiểu thông tin và phỏng vấn ngay tại bàn.",
    },
    {
      q: "Có yêu cầu phải tham dự toàn bộ sự kiện không?",
      a: "Chương trình không bắt buộc các bạn tham gia toàn bộ sự kiện. Ban tổ chức khuyến khích các bạn dành thời gian tham khảo các cơ hội việc làm tại tất cả công ty để tìm được việc làm phù hợp nhất với bạn.",
    },
  ];

  return (
    <section className="leading-relaxed sm:py-20 pt-14" id="faqs">
      {/* <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      > */}
      <div className="container">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl text-gray-800 font-semibold">
            Các câu hỏi thường gặp
          </h2>
          {/* <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Dưới đây là những câu hỏi phổ biến về các khóa đào tạo lập trình và
            kết nối việc làm tại Hàn Quốc.
          </p> */}
        </div>
        <div className="mt-14 max-w-2xl mx-auto">
          {faqsList.map((item, idx) => (
            <FaqsCard key={idx} idx={idx} faqsList={item} />
          ))}
        </div>
      </div>
      {/* </AnimationLayout> */}
    </section>
  );
}
