import { cn } from "@/utils/cn";
import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "outlined" | "solid" | "light";

type ButtonColors = "primary" | "secondary" | "black" | "white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: ButtonColors;
  variant?: ButtonVariants;
  leftIcon?: string | React.ReactNode;
  leftIconClassName?: string;
  rightIcon?: string | React.ReactNode;
  rightIconClassName?: string;
}

export const Button = ({
  children,
  variant = "outlined",
  color = "primary",
  className,
  rightIcon,
  rightIconClassName,
  leftIcon,
  leftIconClassName,
  ...props
}: ButtonProps) => {
  const styleClasses = {
    light: {
      white: "border-none bg-white text-primary",
      black: "border-none bg-black text-white",
      primary: "border-none bg-primary",
      secondary: "border-none bg-secondary text-white",
    },
    outlined: {
      white: "border-2 border-white rounded-full text-secondary",
      black: "border-2 border-black rounded-full text-white",
      primary:
        "border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-primary-900",
      secondary:
        "border-2 border-secondary rounded-full text-secondary hover:bg-secondary hover:text-primary",
    },
    solid: {
      white: "bg-white text-primary",
      black: "bg-black text-white",
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-white",
    },
  };

  return (
    <button
      className={cn(
        "px-6 py-3 text-xl font-bold min-w-[280px] w-min hover:drop-shadow-md",
        styleClasses[variant][color],
        className,
        {
          "flex items-center justify-center gap-6": leftIcon || rightIcon,
        }
      )}
      {...props}
    >
      {typeof leftIcon === "string" ? (
        <Image
          src={leftIcon}
          alt="left-icon"
          className={cn(leftIconClassName)}
        />
      ) : (
        leftIcon
      )}
      {children}
      {typeof rightIcon === "string" ? (
        <Image
          src={rightIcon}
          alt="right-icon"
          className={cn(rightIconClassName)}
        />
      ) : (
        rightIcon
      )}
    </button>
  );
};
