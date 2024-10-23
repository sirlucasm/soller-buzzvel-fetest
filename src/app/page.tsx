import { Wrapper } from "@/components/Wrapper";
import { Header } from "./components/Header";
import { LandingBackground } from "./components/LandingBackground";
import { Button } from "@/components/Button";
import { ArrowRightIcon } from "lucide-react";
import { Avatar } from "@/components/Avatar";
import UserThumb1Image from "@/assets/images/user-thumb1.jpeg";
import LeftCircleMobileImage from "@/assets/images/left-circle-mobile.png";
import RightCircleMobileImage from "@/assets/images/right-circle-mobile.png";
import DashboardMobileImage from "@/assets/images/dashboard-mobile.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper as="main" mb={60}>
        <LandingBackground />

        <div className="mt-[350px] flex flex-col gap-6 text-center items-center">
          <h1 className="text-[40px] font-bold leading-[44px]">
            Get the Sun to Power Your Home
          </h1>
          <p className="text-lg leading-[28.8px]">
            Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque.
          </p>
          <Button rightIcon={<ArrowRightIcon />} color="secondary">
            Request a Quote
          </Button>
        </div>

        <div className="mt-20">
          <p className="leading-[22.4px]">
            “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra
            orci dui consequat turpis scelerisque faucibus.”
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Avatar src={UserThumb1Image} size={64} />
            <div className="flex flex-col">
              <h3 className="text-lg leading-[28.8px]">Rwanda Melflor</h3>
              <p className="text-font-300">zerowaste.com</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-primary-850 font-medium">No more waste</h3>
          <div className="flex flex-col gap-6 mt-2">
            <h1 className="font-bold text-[32px] leading-[35.2px]">
              Pick the Sun
            </h1>
            <p className="leading-[22.4px] max-w-80">
              Et pulvinar nec interdum integer id urna molestie porta nullam. A,
              donec ornare sed turpis pulvinar purus maecenas quam a. Erat
              porttitor pharetra sed in mauris elementum sollicitudin.
            </p>
          </div>
        </div>

        <div className="mt-20 relative">
          <Image
            src={LeftCircleMobileImage}
            alt="LeftCircleMobileImage"
            className="absolute left-0 -top-20 -ml-4 z-10"
          />
          <Image
            src={DashboardMobileImage}
            alt="DashboardMobileImage"
            className="absolute -mr-4 right-0 z-20"
          />
          <Image
            src={RightCircleMobileImage}
            alt="RightCircleMobileImage"
            className="absolute right-0 -top-12 -mr-4 z-10"
          />
        </div>

        <div className="mt-[400px] text-center">
          <h3 className="text-primary-850 font-medium leading-[16.6px]">
            Services
          </h3>
          <div className="flex flex-col gap-6 mt-2">
            <h1 className="font-bold text-[32px] leading-[35.2px]">
              Personalized services
            </h1>
            <p className="leading-[22.4px] max-w-80">
              Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et
              et. Auctor turpis semper id sit ornare maecenas lectus sed.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
