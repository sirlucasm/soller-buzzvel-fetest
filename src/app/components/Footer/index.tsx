import Image from "next/image"
import Link from "next/link"

import LogoImage from "@/assets/images/logo.svg"
import routes from "@/constants/routes"

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between h-[198px] py-6 px-4 md:flex-row md:justify-between md:h-[95px] md:px-20">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <Image src={LogoImage} alt="LogoImage" />
          <h1 className="font-bold text-[24px] leading-[26.4px]">Soller</h1>
        </div>
        <p>@ 2023 Soller, Inc. All rights reserved.</p>
      </div>

      <nav className="flex items-center gap-6">
        <Link href={routes.public.home.root} className="hover:text-font-400 hover:underline underline-offset-4">
          Terms
        </Link>
        <Link href={routes.public.home.root} className="hover:text-font-400 hover:underline underline-offset-4">
          Privacy
        </Link>
        <Link href={routes.public.home.root} className="hover:text-font-400 hover:underline underline-offset-4">
          Support
        </Link>
      </nav>
    </footer>
  )
}
