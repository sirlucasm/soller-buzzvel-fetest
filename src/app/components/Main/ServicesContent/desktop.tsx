import Image from "next/image"

import SmartphoneDashboardLeftDesktopImage from "@/assets/images/smartphone-dashboard-left-desktop.svg"
import SmartphoneDashboardRightDesktopImage from "@/assets/images/smartphone-dashboard-right-desktop.svg"

export const ServicesContentDesktop = () => {
  return (
    <>
      <section data-aos="fade-down" className="mt-[200px] hidden xl:flex items-center">
        <Image
          src={SmartphoneDashboardLeftDesktopImage}
          alt="SmartphoneDashboardMobileImage"
          className="max-w-none w-[1146px] h-[1000px] -ml-[325px] drag-none"
          data-aos="fade-right"
        />
        <div className="flex flex-col gap-32">
          <div data-aos="fade-left">
            <h3 className="text-primary-850 font-medium leading-[22px] text-xl">Services</h3>
            <div className="flex flex-col gap-6 mt-2">
              <h1 className="font-extrabold text-[56px] leading-[61.6px]">Personalized services</h1>
              <p className="leading-[36px]">
                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare
                maecenas lectus sed.
              </p>
            </div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-2 gap-x-10 gap-y-32">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Et mauris</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan
                tristique.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Eget sit</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Imperdiet pellentesque</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Non libero</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-14 hidden xl:flex items-center">
        <div className="flex flex-col gap-32">
          <div data-aos="fade-right">
            <h3 className="text-primary-850 font-medium leading-[22px] text-xl">System features</h3>
            <div className="flex flex-col gap-6 mt-2">
              <h1 className="font-extrabold text-[56px] leading-[61.6px]">Powerful features</h1>
              <p className="leading-[36px]">
                Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare
                maecenas lectus sed.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" className="grid grid-cols-2 gap-x-10 gap-y-32">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Erat sit</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla
                nisl magna sagittis.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Ullamcorper arcu</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Et pellentesque</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit
                purus lorem vulputate.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-2xl leading-[26.4px]">Amet egestas</h3>
              <p className="leading-[28.8px] max-w-[566px] text-lg">
                Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet,
                felis.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={SmartphoneDashboardRightDesktopImage}
          alt="SmartphoneDashboardRightMobileImage"
          className="max-w-none w-[1146px] h-[1000px] -mr-[340px] drag-none"
          data-aos="fade-left"
        />
      </section>
    </>
  )
}
