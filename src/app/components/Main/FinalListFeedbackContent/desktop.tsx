"use client"

import { memo, useCallback, useMemo, useRef } from "react"

import Image from "next/image"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { feedbacks } from "@/app/mocks"
import CircleSecondaryRightDesktopImage from "@/assets/images/circle-secondary-right-desktop-2.svg"
import EllipseSecondaryImage from "@/assets/images/ellipse-secondary.svg"
import MacbookDesktopImage from "@/assets/images/macbook-desktop.svg"
import MacbookImage from "@/assets/images/macbook.svg"
import { getWindowDimensions } from "@/utils/application"
import { cn } from "@/utils/cn"

import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/Button"

const FEEDBACK_ITEM_WIDTH = 364

export const FinalListFeedbackContentDesktop = memo(() => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { width } = getWindowDimensions()

  const renderingFeedbackItemsCount = useMemo(() => Math.floor(width / FEEDBACK_ITEM_WIDTH), [width])

  const handleNextPageFeedbackList = useCallback(() => {
    if (!scrollRef.current) return

    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft + FEEDBACK_ITEM_WIDTH * renderingFeedbackItemsCount,
      behavior: "smooth"
    })
  }, [renderingFeedbackItemsCount])

  const handlePreviousFeedbackItemsCount = useCallback(() => {
    if (!scrollRef.current) return

    scrollRef.current.scroll({
      left: scrollRef.current.scrollLeft - FEEDBACK_ITEM_WIDTH * renderingFeedbackItemsCount,
      behavior: "smooth"
    })
  }, [renderingFeedbackItemsCount])

  return (
    <>
      <section className="mt-[580px] xl:mt-[200px] bg-secondary w-full px-20 py-20 hidden lg:flex flex-col relative">
        <div className="flex items-center justify-between">
          <div data-aos="fade-right" className="flex flex-col">
            <h3 className="text-primary text-xl font-medium leading-[22px]">Join other Sun harvesters</h3>
            <div className="flex flex-col gap-6 mt-2">
              <h1 className="font-extrabold text-[56px] leading-[61.6px] text-white">Make something awesome</h1>
              <p className="text-xl leading-[36px] max-w-[800px] text-white">
                Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum
                congue fusce nunc, donec magnis commodo.
              </p>
            </div>
          </div>
          <Button data-aos="fade-left" rightIcon={<ArrowRightIcon />} className="mt-6">
            Request a Quote
          </Button>
        </div>
        <div
          data-aos="zoom-in"
          className="mt-20 flex items-center gap-6 overflow-x-auto pb-2 h-[550px]"
          ref={scrollRef}
        >
          {feedbacks.map((feedback, index) => {
            return (
              <div
                className={cn(
                  `flex flex-col p-8 justify-end bg-white h-[442px] rounded-[10px] hover:h-[490px] hover:pb-14 duration-300`
                )}
                style={{ minWidth: FEEDBACK_ITEM_WIDTH }}
                key={index}
              >
                <p className="leading-[28.8px] text-lg">{feedback.review}</p>
                <div className="flex items-center gap-4 mt-7">
                  <Avatar src={feedback.user.profileImage} size={64} />
                  <div className="flex flex-col">
                    <h3 className="text-lg leading-[28.8px]">{feedback.user.name}</h3>
                    <p className="text-font-300 leading-[22.4px]">{feedback.user.consumption}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center mt-12 gap-6">
          <Button isIconOnly onClick={handlePreviousFeedbackItemsCount}>
            <ArrowLeftIcon />
          </Button>
          <Button isIconOnly onClick={handleNextPageFeedbackList}>
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
          <div data-aos="fade-right" className="flex flex-col max-w-[894px] z-20 gap-2">
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
})
