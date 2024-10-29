import dynamic from "next/dynamic"

import { Wrapper } from "@/components/Wrapper"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { ExplainDashboardContent } from "./components/Main/ExplainDashboardContent"
import { FeedbackContent } from "./components/Main/FeedbackContent"
import { TopContent } from "./components/Main/TopContent"

const ServicesContent = dynamic(
  () => import("./components/Main/ServicesContent").then(imported => imported.ServicesContent),
  {
    ssr: true
  }
)

const LandingBackground = dynamic(
  () => import("./components/LandingBackground").then(imported => imported.LandingBackground),
  {
    ssr: true
  }
)

const FinalListFeedbackContent = dynamic(
  () => import("./components/Main/FinalListFeedbackContent").then(imported => imported.FinalListFeedbackContent),
  {
    ssr: true
  }
)

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper as="main" mb={60} className="overflow-hidden">
        <LandingBackground />
        <TopContent />
        <FeedbackContent />
        <ExplainDashboardContent />
        <ServicesContent />
      </Wrapper>

      <FinalListFeedbackContent />

      <Footer />
    </>
  )
}
