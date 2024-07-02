import RecruitmentCountdown from "./shared/recruitment-countdown";

export default function Countdown() {
  return (
    <div className="bg-yellow-500 fixed left-0 right-0 bottom-0 z-50 sm:top-0 sm:bottom-auto">
      <div className="container mx-auto py-2 sm:text-center sm:h-14">
        <RecruitmentCountdown />
      </div>
    </div>
  );
}
