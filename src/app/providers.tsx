"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      once: true
    })
  }, [])

  return <>{children}</>
}
