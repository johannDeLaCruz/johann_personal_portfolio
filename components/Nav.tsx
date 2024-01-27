"use client";
import Link from "next/link";
import { GoPersonFill, GoHeartFill } from "react-icons/go";
import { HiEnvelope, HiMiniPaintBrush } from "react-icons/hi2";
import { FaThList, FaHome } from "react-icons/fa";

import { usePathname } from "next/navigation";

export const navData = [
  { name: "home", path: "/", icon: <FaHome /> },
  { name: "about", path: "/about", icon: <GoPersonFill /> },
  {
    name: "services",
    path: "/services",
    icon: <FaThList />,
  },
  {
    name: "work",
    path: "/work",
    icon: <HiMiniPaintBrush />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <GoHeartFill />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="bg-primary-400/30 text-h5 flex w-full items-center justify-between xl:rounded-full xl:justify-center xl:flex-col gap-y-10 px-4 py-8 sm:px-40 xl:px-0 h-[80px] xl:h-max backdrop-blur-sm">
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathName ? "text-accent-500" : "text-primary-500"
            } relative flex items-center hover:text-accent-500 transition-all duration-300 group`}
          >
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-primary-400/30 relative p-2 flex items-center rounded-[3px]">
                <span className="font-body text-body2 text-primary-500 leading-none font-semibold uppercase">
                  {link.name}
                </span>
                {/* <div className="border-solid border-l-primary-400/30 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div> */}
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
