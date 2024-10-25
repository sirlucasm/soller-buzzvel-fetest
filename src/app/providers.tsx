"use client"

import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    AOS.init()
  }, [])

  return <>{children}</>
}
