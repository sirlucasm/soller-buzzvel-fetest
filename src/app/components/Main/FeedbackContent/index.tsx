import UserThumb1Image from "@/assets/images/user-thumb1.jpeg"

import { Avatar } from "@/components/Avatar"

export const FeedbackContent = () => {
  return (
    <div className="mt-20 md:max-w-[600px] z-20 relative">
      <p className="leading-[22.4px]">
        “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque
        faucibus.”
      </p>
      <div className="flex items-center gap-4 mt-4">
        <Avatar src={UserThumb1Image} size={64} />
        <div className="flex flex-col select-none">
          <h3 className="text-lg leading-[28.8px]">Rwanda Melflor</h3>
          <p className="text-font-300">zerowaste.com</p>
        </div>
      </div>
    </div>
  )
}
