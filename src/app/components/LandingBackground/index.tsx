import Image from "next/image"

import BgManWorkingImage from "@/assets/images/bg-man-working-desktop.svg"
import BgManWorkingMobileImage from "@/assets/images/bg-man-working-mobile.svg"

export const LandingBackground = () => {
  return (
    <>
      <div data-aos="fade-in" className="absolute right-0 top-0 lg:hidden z-10">
        <Image src={BgManWorkingMobileImage} alt="Man working mobile" />
      </div>
      <div data-aos="fade-in" className="hidden lg:block absolute right-0 top-0 z-10">
        <Image src={BgManWorkingImage} alt="Man working" className="xl:w-auto xl:h-auto lg:w-[450px]" />
      </div>
    </>
  )
}
