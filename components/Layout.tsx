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
    <div className="page text-black bg-explosion bg-[length:1400px_788px] bg-right-bottom bg-no-repeat relative">      
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
