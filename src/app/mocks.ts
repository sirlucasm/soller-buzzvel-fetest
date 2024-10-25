import UserThumb1Image from "@/assets/images/user-thumb1.jpeg"
import UserThumb2Image from "@/assets/images/user-thumb2.jpeg"

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
      profileImage: UserThumb1Image
    }
  },
  {
    review:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    user: {
      name: "Ralph Edwards",
      consumption: "32KWh",
      profileImage: UserThumb2Image
    }
  }
]