"use client"

import { useCallback, useRef } from "react"

import Image from "next/image"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { feedbacks } from "@/app/mocks"
import EllipseSecondaryImage from "@/assets/images/ellipse-secondary.svg"
import MacbookImage from "@/assets/images/macbook.svg"
import { getWindowDimensions } from "@/utils/application"

import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/Button"

export const FinalListFeedbackContentMobile = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { width } = getWindowDimensions()

  const handleNextPageFeedbackList = useCallback(() => {
    if (!scrollRef.current) return

    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft + (width - 8),
      behavior: "smooth"
    })
  }, [width])

  const handlePreviousFeedbackItemsCount = useCallback(() => {
    if (!scrollRef.current) return

    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft - (width - 8),
      behavior: "smooth"
    })
  }, [width])

  console.log("width", width)

  return (
    <section className="mt-[580px] bg-secondary w-full px-4 py-10 flex flex-col relative lg:hidden">
      <div className="flex flex-col text-center items-center">
        <h3 className="text-primary font-medium leading-[16.6px]">Join other Sun harvesters</h3>
        <div className="flex flex-col gap-6 mt-2">
          <h1 className="font-bold text-[32px] leading-[35.2px] text-white">Make something awesome</h1>
          <p className="leading-[22.4px] max-w-[340px] text-white">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue
            fusce nunc, donec magnis commodo.
          </p>
        </div>
        <Button rightIcon={<ArrowRightIcon />} className="mt-6">
          Request a Quote
        </Button>
      </div>
      <div className="mt-20 flex items-center gap-6 overflow-x-auto pb-4" ref={scrollRef}>
        {feedbacks.map((feedback, index) => {
          return (
            <div className="flex flex-col p-8 justify-end bg-white h-[359px] min-w-full rounded-[10px]" key={index}>
              <p className="leading-[22.4px]">{feedback.review}</p>
              <div className="flex items-center gap-4 mt-7">
                <Avatar src={feedback.user.profileImage} size={64} />
                <div className="flex flex-col">
                  <h3 className="text-lg leading-[28.8px]">{feedback.user.name}</h3>
                  <p className="text-font-300">{feedback.user.consumption}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex items-center justify-center mt-12 gap-6">
        <Button isIconOnly onClick={handlePreviousFeedbackItemsCount}>
          <ArrowLeftIcon />
        </Button>
        <Button isIconOnly onClick={handleNextPageFeedbackList}>
          <ArrowRightIcon />
        </Button>
      </div>
      <div className="mt-24 flex flex-col text-center items-center">
        <h3 className="text-primary font-medium leading-[16.6px]">Get the Sun to power your home</h3>
        <div className="flex flex-col gap-6 mt-2">
          <h1 className="font-bold text-[32px] leading-[35.2px] text-white">
            All the power that you need for your house is now available
          </h1>
        </div>
        <Button rightIcon={<ArrowRightIcon />} className="mt-6">
          Request a Quote
        </Button>
        <span className="text-white leading-[22.4px] mt-4">Egestas fringilla aliquam leo</span>
      </div>
      <div className="flex mt-14">
        <Image src={EllipseSecondaryImage} alt="EllipseSecondaryImage" className="absolute bottom-0 left-0 z-10" />
        <Image src={MacbookImage} alt="MacbookImage" className="z-20" />
      </div>
    </section>
  )
}
