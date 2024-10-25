import { Wrapper } from "@/components/Wrapper"

import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { LandingBackground } from "./components/LandingBackground"
import { ExplainDashboardContent } from "./components/Main/ExplainDashboardContent"
import { FeedbackContent } from "./components/Main/FeedbackContent"
import { FinalListFeedbackContent } from "./components/Main/FinalListFeedbackContent"
import { ServicesContent } from "./components/Main/ServicesContent"
import { TopContent } from "./components/Main/TopContent"

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
