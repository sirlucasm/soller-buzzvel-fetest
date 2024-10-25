import Image from "next/image"

import SmartphoneDashboardMobileImage from "@/assets/images/smartphone-dashboard-left-mobile.svg"
import SmartphoneDashboardRightMobileImage from "@/assets/images/smartphone-dashboard-right-mobile-2.svg"

export const ServicesContentMobile = () => {
  return (
    <>
      <section className="mt-[400px] flex flex-col text-center items-center xl:hidden">
        <h3 className="text-primary-850 font-medium leading-[16.6px]">Services</h3>
        <div className="flex flex-col gap-6 mt-2">
          <h1 className="font-bold text-[32px] leading-[35.2px]">Personalized services</h1>
          <p className="leading-[22.4px] max-w-80">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare
            maecenas lectus sed.
          </p>
        </div>
      </section>

      <section className="mt-28 flex flex-col gap-10 xl:hidden">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Et mauris</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Eget sit</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Imperdiet pellentesque</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Non libero</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={SmartphoneDashboardMobileImage}
            alt="SmartphoneDashboardMobileImage"
            className="max-w-none w-[599px] h-[523px] -ml-[260px]"
          />
        </div>
      </section>

      <section className="mt-20 flex flex-col text-center items-center xl:hidden">
        <h3 className="text-primary-850 font-medium leading-[16.6px]">Services</h3>
        <div className="flex flex-col gap-6 mt-2">
          <h1 className="font-bold text-[32px] leading-[35.2px]">Personalized services</h1>
          <p className="leading-[22.4px] max-w-80">
            Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare
            maecenas lectus sed.
          </p>
        </div>
      </section>

      <section className="mt-28 flex flex-col gap-10 xl:hidden">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Et mauris</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Eget sit</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Imperdiet pellentesque</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="font-medium text-xl leading-[22px]">Non libero</h3>
            <p className="leading-[22.4px] max-w-[140px] md:max-w-[300px] lg:max-w-[450px]">
              Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={SmartphoneDashboardRightMobileImage}
            alt="SmartphoneDashboardRightMobileImage"
            className="absolute right-0"
          />
        </div>
      </section>
    </>
  )
}
