import type { Metadata } from "next"

import { RobotoFont } from "@/styles/fonts"
import { cn } from "@/utils/cn"

import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Soller",
  description: "Get the Sun to Power Your Home, Viverra viverra nibh.",
  openGraph: {
    title: "Soller",
    description: "Get the Sun to Power Your Home, Viverra viverra nibh."
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(RobotoFont.className, "bg-neutral-foreground text-font-default")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
