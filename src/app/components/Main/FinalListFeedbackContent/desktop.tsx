import Image from "next/image"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import CircleSecondaryRightDesktopImage from "@/assets/images/circle-secondary-right-desktop-2.svg"
import EllipseSecondaryImage from "@/assets/images/ellipse-secondary.svg"
import MacbookDesktopImage from "@/assets/images/macbook-desktop.svg"
import MacbookImage from "@/assets/images/macbook.svg"
import UserThumb2Image from "@/assets/images/user-thumb2.jpeg"

import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/Button"

export const FinalListFeedbackContentDesktop = () => {
  return (
    <>
      <section className="mt-[580px] xl:mt-[200px] bg-secondary w-full px-20 py-20 hidden lg:flex flex-col relative">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-primary text-xl font-medium leading-[22px]">Join other Sun harvesters</h3>
            <div className="flex flex-col gap-6 mt-2">
              <h1 className="font-extrabold text-[56px] leading-[61.6px] text-white">Make something awesome</h1>
              <p className="text-xl leading-[36px] max-w-[800px] text-white">
                Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum
                congue fusce nunc, donec magnis commodo.
              </p>
            </div>
          </div>
          <Button rightIcon={<ArrowRightIcon />} className="mt-6">
            Request a Quote
          </Button>
        </div>
        <div className="mt-20">
          <div className="flex flex-col p-8 justify-end bg-white h-[490px] w-[364px] rounded-[10px]">
            <p className="leading-[28.8px] text-lg">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc
              volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo
              euismod.
            </p>
            <div className="flex items-center gap-4 mt-7">
              <Avatar src={UserThumb2Image} size={64} />
              <div className="flex flex-col">
                <h3 className="text-lg leading-[28.8px]">Rwanda Melflor</h3>
                <p className="text-font-300 leading-[22.4px]">10KWh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-12 gap-6">
          <Button isIconOnly>
            <ArrowLeftIcon />
          </Button>
          <Button isIconOnly>
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="flex mt-14 lg:hidden">
          <Image src={EllipseSecondaryImage} alt="EllipseSecondaryImage" className="absolute bottom-0 left-0 z-10" />
          <Image src={MacbookImage} alt="MacbookImage" className="z-20" />
        </div>
      </section>

      <section className="bg-secondary-400 w-full sl:px-72 px-20 pt-20 pb-6 hidden lg:flex flex-col justify-center gap-20 relative">
        <div className="flex justify-between">
          <div className="flex flex-col max-w-[894px] z-20 gap-2">
            <h3 className="text-primary font-medium leading-[22px] text-xl">Get the Sun to power your home</h3>
            <div className="flex flex-col gap-6">
              <h1 className="font-extrabold text-[56px] leading-[61.6px] text-white">
                All the power that you need for your house is now available
              </h1>
            </div>
          </div>
          <div className="absolute top-0 right-0 z-10">
            <Image
              src={CircleSecondaryRightDesktopImage}
              alt="CircleSecondaryRightDesktopImage"
              className="drag-none"
            />
          </div>
          <div className="flex flex-col items-center z-20 relative right-20 sl:-right-32 gap-4">
            <Button rightIcon={<ArrowRightIcon />} className="mt-6">
              Request a Quote
            </Button>
            <span className="text-white leading-[28.8px]">Egestas fringilla aliquam leo</span>
          </div>
        </div>
        <Image src={MacbookDesktopImage} alt="MacbookDesktopImage" className="self-center z-20 drag-none" />
      </section>
    </>
  )
}
