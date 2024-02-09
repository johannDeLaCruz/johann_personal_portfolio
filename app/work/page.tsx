"use client";

import WorkSlider from "@/components/WorkSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";

const WorkPage = () => {
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
              My Work<span className="text-accent-500">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-body1 mb-4 max-w-[480px] mx-auto lg:mx-0"
            >
              I develop original full stack web apps for businesses and
              individual clients from wireframing to deployment. I usually
              design the UI with Figma, Tailwind, MUI, etc., programming with
              MERN or Next (serverless) and deploy with Vercel of Firebase.
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
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
