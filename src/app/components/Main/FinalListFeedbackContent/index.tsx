import { FinalListFeedbackContentDesktop } from "./desktop"
import { FinalListFeedbackContentMobile } from "./mobile"

export const FinalListFeedbackContent = () => {
  return (
    <>
      <FinalListFeedbackContentMobile />
      <FinalListFeedbackContentDesktop />
    </>
  )
}
