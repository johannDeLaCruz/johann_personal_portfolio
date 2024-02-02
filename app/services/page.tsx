"use client";

import Bulb from "@/components/Bulb";
import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";
const ServicesPage = () => {
  return (
    <div className="h-full flex lg:items-center xl:pt-40 pt-64">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex justify-center xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
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
              I&apos;m offering web app development and other related services
              using modern technology and best programming practices. Personal
              portfolios, e-commerce, SaaS, blog pages etc.
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
