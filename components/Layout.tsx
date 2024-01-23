
"use client"
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
    <>
      <Header />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div className="h-full" key={pathname}>
          {" "}
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Layout;
