import { InfiniteMovingCards } from "./shared/infinities-moving-cards";

export default function Companies() {
  const imageGroups = [
    [
      "/gallery/Bootcamp 2.jpg",
      "/gallery/Bootcamp 3.jpg",
      "/gallery/Bootcamp 4.jpg",
      "/gallery/IUH MOU.jpg",
      "/gallery/IUH.jpg",
    ],
    [
      "/gallery/Shinhan 1.jpg",
      "/gallery/Shinhan 2.jpg",
      "/gallery/Shinhan MOU.jpg",
      "/gallery/UIT 2.jpg",
      "/gallery/USSH MOU.jpg",
    ],
  ];
  return (
    <div className="pb-14 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="space-y-10 text-center">
        <h2 className="font-semibold text-2xl">Các doanh nghiệp tham gia</h2>

        <h2 className="font-bold text-4xl">
          Tổng cộng 30 công ty tham gia Job Fair
        </h2>

        <p className="text-center">
          20 công ty liên doanh đến từ Hàn Quốc <br />
          10 công ty liên doanh Hàn Quốc tại Việt Nam
        </p>
      </div>

      {imageGroups.map((images, idx) => (
        <InfiniteMovingCards
          key={idx}
          images={images}
          direction={idx % 2 === 0 ? "right" : "left"}
          speed="slow"
          pauseOnHover={false}
        />
      ))}
    </div>
  );
}
