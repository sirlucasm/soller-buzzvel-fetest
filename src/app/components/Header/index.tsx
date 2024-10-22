import { Wrapper } from "@/components/Wrapper";
import routes from "@/constants/routes";
import Link from "next/link";

export const Header = () => {
  return (
    <Wrapper as="header" className="flex items-center justify-between">
      <div className="">
        <Link href={routes.public.home.root} className="font-bold text-[32px]">
          soller
        </Link>
        <nav>
          <ul>
            <li>
              <Link href={routes.public.home.root}>Products</Link>
            </li>
            <li>
              <Link href={routes.public.home.root}>Solutions</Link>
            </li>
            <li>
              <Link href={routes.public.home.root}>Services</Link>
            </li>
            <li>
              <Link href={routes.public.home.root}>Configure</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Wrapper>
  );
};
