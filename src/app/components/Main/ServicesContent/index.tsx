import { ServicesContentDesktop } from "./desktop"
import { ServicesContentMobile } from "./mobile"

export const ServicesContent = () => {
  return (
    <>
      <ServicesContentMobile />
      <ServicesContentDesktop />
    </>
  )
}
