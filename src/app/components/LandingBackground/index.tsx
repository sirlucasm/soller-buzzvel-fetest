import Image from "next/image";
import BgRightMobile from "@/assets/images/bg-right-mobile.svg";
import BgManWorking from "@/assets/images/bg-man-working.svg";

export const LandingBackground = () => {
  return (
    <>
      <div className="absolute right-0 top-0 md:hidden z-10">
        <Image src={BgRightMobile} alt="Background right mobile" />
      </div>
      <div className="hidden md:block absolute right-0 top-0 z-10">
        <Image src={BgManWorking} alt="Man working" />
      </div>
    </>
  );
};
