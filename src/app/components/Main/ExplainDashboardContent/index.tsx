import Image from "next/image"

import CircleOrangeLeftDesktopImage from "@/assets/images/circle-orange-left-desktop.svg"
import CircleSecondaryRightDesktopImage from "@/assets/images/circle-secondary-right-desktop.svg"
import DashboardDesktopImage from "@/assets/images/dashboard-desktop.svg"
import DashboardMobileImage from "@/assets/images/dashboard-mobile.svg"
import LeftCircleMobileImage from "@/assets/images/left-circle-mobile.png"
import RightCircleMobileImage from "@/assets/images/right-circle-mobile.png"

export const ExplainDashboardContent = () => {
  return (
    <>
      <div className="mt-20 flex flex-col text-center items-center relative z-20">
        <div className="md:max-w-[900px]">
          <h3 className="text-primary-850 leading-[17.6px] font-medium lg:text-xl lg:leading-[22px]">No more waste</h3>
          <div className="flex flex-col gap-6 mt-2">
            <h1 className="font-bold text-[32px] leading-[35.2px] lg:leading-[61.6px] lg:text-[56px]">Pick the Sun</h1>
            <p className="leading-[22.4px] max-w-80 md:max-w-[450px] lg:max-w-none lg:text-xl lg:leading-[36px]">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus
              maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 relative lg:hidden">
        <Image
          src={LeftCircleMobileImage}
          alt="LeftCircleMobileImage"
          className="absolute left-0 -top-20 -ml-4 z-10 md:-ml-10"
        />
        <Image
          src={DashboardMobileImage}
          alt="DashboardMobileImage"
          className="absolute -mr-4 right-0 z-20 md:-mr-10"
        />
        <Image
          src={RightCircleMobileImage}
          alt="RightCircleMobileImage"
          className="absolute right-0 -top-12 -mr-4 z-10 md:-mr-10"
        />
      </div>

      <div className="mt-20 hidden lg:flex lg:justify-center w-full relative">
        <Image
          src={CircleOrangeLeftDesktopImage}
          alt="CircleOrangeLeftDesktopImage"
          className="drag-none absolute left-0 -top-32 z-10 -ml-10"
        />
        <Image
          src={DashboardDesktopImage}
          width={1520}
          height={854}
          alt="DashboardMobileImage"
          className="drag-none z-20"
        />
        <Image
          src={CircleSecondaryRightDesktopImage}
          alt="CircleSecondaryRightDesktopImage"
          className="drag-none absolute right-0 top-12 z-10 -mr-10"
        />
      </div>
    </>
  )
}
