/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx"

type WrapperProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  as?: keyof HTMLElementTagNameMap
  mb?: number
}

export const Wrapper = ({ children, as = "div", className, mb = 0, ...props }: WrapperProps) => {
  const Tag = as as any
  return (
    <Tag className={clsx(`px-4 mx-auto w-full md:px-10`, className)} style={{ marginBottom: mb }} {...props}>
      {children}
    </Tag>
  )
}
