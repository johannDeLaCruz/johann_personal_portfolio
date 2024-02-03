"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Transition from "@/components/Transition";
import TopLeftImage from "@/components/TopLeftImage";
import ParticlesContainer from "@/components/ParticlesContainer";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div className="text-black">
      <AnimatePresence mode="wait">
        <motion.div className="" key={pathname}>
          {" "}
          <Transition />
          <ParticlesContainer />
          <Nav />
          <Header />
        </motion.div>
        <div className="w-full h-dvh absolute right-0 top-0 z-20">
          <TopLeftImage /> {children}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
