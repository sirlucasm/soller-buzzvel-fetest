import Image from "next/image"
import Link from "next/link"

import { ArrowRightIcon } from "lucide-react"

import HeadsetIcon from "@/assets/icons/headset.svg"
import routes from "@/constants/routes"

import { Button } from "@/components/Button"
import { Wrapper } from "@/components/Wrapper"

export const Header = () => {
  return (
    <Wrapper as="header" className="flex items-center justify-between md:h-28 md:py-6 z-50 relative">
      <div className="flex items-center gap-[38px]">
        <Link href={routes.public.home.root} className="font-bold text-[32px]">
          soller
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-4">
            <li className="p-2">
              <Link href={routes.public.home.root}>Products</Link>
            </li>
            <li className="p-2">
              <Link href={routes.public.home.root}>Solutions</Link>
            </li>
            <li className="p-2">
              <Link href={routes.public.home.root}>Services</Link>
            </li>
            <li className="p-2">
              <Link href={routes.public.home.root}>Configure</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden xl:flex xl:items-center xl:gap-10">
        <div className="flex items-center gap-4">
          <Image src={HeadsetIcon} alt="headset icon" width={24} height={24} />
          <Link href="tel:+1555818282" className="text-states-info font-medium">
            555 818 282
          </Link>
        </div>
        <Button color="secondary" rightIcon={<ArrowRightIcon />}>
          Request a Quote
        </Button>
      </div>
    </Wrapper>
  )
}
