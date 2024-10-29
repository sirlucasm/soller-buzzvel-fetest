import UserThumb1Image from "@/assets/images/user-thumb1.jpeg"
import UserThumb2Image from "@/assets/images/user-thumb2.jpeg"
import UserThumb3Image from "@/assets/images/user-thumb3.jpeg"
import UserThumb4Image from "@/assets/images/user-thumb4.jpeg"

export interface Feedback {
  review: string
  user: {
    name: string
    consumption: string
    profileImage: typeof UserThumb1Image
  }
}

export const feedbacks: Feedback[] = [
  {
    review:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    user: {
      name: "Jane Cooper",
      consumption: "10KWh",
      profileImage: UserThumb2Image
    }
  },
  {
    review:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    user: {
      name: "Ralph Edwards",
      consumption: "32KWh",
      profileImage: UserThumb3Image
    }
  },
  {
    review:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    user: {
      name: "Courtney Henry",
      consumption: "6KWh",
      profileImage: UserThumb1Image
    }
  },
  {
    review:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    user: {
      name: "Cameron Williamson",
      consumption: "12KWh",
      profileImage: UserThumb4Image
    }
  },
  {
    review:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    user: {
      name: "Cameron Williamson",
      consumption: "12KWh",
      profileImage: UserThumb4Image
    }
  }
]
