"use client";
import {} from "react-icons/rx";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";
const ServicesPage = () => {
  return (
    <div className="h-full flex lg:items-center xl:justify-center">
      {/* <Circles /> */}
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-h1 font-body mb-4"
            >
              My Services<span className="text-accent-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-body1 mb-4 max-w-[480px] mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              maxime voluptas? Minus culpa quod deserunt aperiam reiciendis
              eveniet asperiores fugit quisquam error vitae, beatae tempore
              dolore, voluptatibus laboriosam magnam suscipit?
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            {" "}
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default ServicesPage;
