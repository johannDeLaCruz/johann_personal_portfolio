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
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          {" "}
          <Transition />
          <ParticlesContainer />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
