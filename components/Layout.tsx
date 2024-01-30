"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Transition from "@/components/Transition";
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <div className="page text-black xl:bg-explosion xl:bg-[length:1400px_788px] xl:bg-right-bottom xl:bg-no-repeat xl:relative">      
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          {" "}
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
