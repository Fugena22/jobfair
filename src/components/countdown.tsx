import RecruitmentCountdown from "./shared/recruitment-countdown";

export default function Countdown() {
  return (
    <div className="bg-yellow-500 fixed left-0 right-0 bottom-0 z-50 sm:static">
      <div className="max-w-screen-xl mx-auto px-4 py-2 sm:py-3 sm:text-center md:px-8 h-14">
        <RecruitmentCountdown />
      </div>
    </div>
  );
}
