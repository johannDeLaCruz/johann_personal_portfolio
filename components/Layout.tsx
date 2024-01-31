"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Transition from "@/components/Transition";
import ParticlesContainer from "@/components/ParticlesContainer";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  return (
    <div className="page text-black">
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          {" "}
          <Transition />
          <ParticlesContainer />
          <Nav />
          <Header />
        </motion.div>
        <div className="h-full w-full absolute right-0 top-0 z-20">
          {" "}
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
