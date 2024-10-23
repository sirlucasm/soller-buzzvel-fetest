import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";

interface AvatarProps extends Omit<ImageProps, "alt"> {
  isRounded?: boolean;
  alt?: string;
  size?: number;
}

export const Avatar = ({
  src,
  alt = src.toString(),
  isRounded = true,
  className,
  size = 92,
  ...props
}: AvatarProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={256}
        height={256}
        className={cn("object-cover", { "rounded-full": isRounded }, className)}
        style={{
          width: size,
          height: size,
        }}
        quality={100}
        {...props}
      />
    </div>
  );
};
