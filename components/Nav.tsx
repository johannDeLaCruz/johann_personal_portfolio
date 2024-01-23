"use client";
import Link from "next/link";
import {
  GoHomeFill,
  GoPersonFill,
  GoHeartFill,
  GoStarFill,
  GoBellFill,
  GoBookmarkFill,
} from "react-icons/go";

import { usePathname } from "next/navigation";

export const navData = [
  { name: "home", path: "/", icon: <GoHomeFill /> },
  { name: "about", path: "/about", icon: <GoPersonFill /> },
  {
    name: "services",
    path: "/services",
    icon: <GoBookmarkFill />,
  },
  {
    name: "work",
    path: "/work",
    icon: <GoStarFill />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <GoHeartFill />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <GoBellFill />,
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="bg-primary-100/30 text-body1 flex w-full items-center justify-between xl:rounded-full xl:justify-center xl:flex-col gap-y-10 px-4 py-8 md:px-40 xl:px-0 h-[80px] xl:h-max backdrop-blur-sm group group-hover:text-accent-500">
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathName ? "text-accent-500" : ""
            } text-primary-500 relative flex items-center hover:text-accent-500 transition-all duration-300s shadow-inner`}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative p-1 flex items-center rounded-[3px]">
                <span className="text-body2 text-black leading-none font-semibold capitalize">
                  {link.name}
                </span>
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
