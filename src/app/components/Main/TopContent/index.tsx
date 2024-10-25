import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/Button"

export const TopContent = () => {
  return (
    <div
      data-aos="fade-down"
      className="mt-[350px] flex flex-col gap-6 text-center items-center lg:mt-5 lg:items-start lg:text-start lg:max-w-[600px] relative z-20"
    >
      <h1 className="text-[40px] font-bold leading-[44px] lg:text-[72px] lg:leading-[79.2px] lg:font-extrabold">
        Get the Sun to Power Your Home
      </h1>
      <p className="text-lg leading-[28.8px] lg:leading-[38.4px] lg:text-2xl">
        Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.
      </p>
      <Button rightIcon={<ArrowRightIcon />} color="secondary">
        Request a Quote
      </Button>
    </div>
  )
}
