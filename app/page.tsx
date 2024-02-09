"use client";
import Avatar from "@/components/Avatar";
import ProjectsButton from "@/components/ProjectsButton";
import { motion } from "framer-motion";
import { fadeIn } from "@/utilities/variants";

const HomePage = () => {
  return (
    <>
      <div className="h-full text-center flex flex-col xl:justify-center xl:text-left container mx-auto xl:pt-40 pt-64 mb-20 xl:mb-0">
        <motion.h1
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-h1 font-body mb-4"
        >
          Hi, It&apos;s Johann <span className="text-accent-500">.</span>{" "}
          <br />
          I&apos;m a Full Stack WebDev
          <span className="text-accent-500">.</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-body1 max-w-sm xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-10"
        >
          I&apos;m currently working with modern web development and design
          using cutting edge tech and learning all about generative AI. Take a look at
          my projects in the link below!
        </motion.p>
        <div className="flex justify-center xl:hidden relative pb-24">
          <ProjectsButton />
        </div>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex"
        >
          <ProjectsButton />
        </motion.div>
      </div>
      <div className="hidden xl:flex w-[1200px] h-full absolute right-0 bottom-0 overflow-hidden">
        <div className="bg-none xl:bg-explosion xl:bg-right-bottom xl:bg-no-repeat w-full h-full absolute -z-[1] xl:bg-[length:1400px_788px]"></div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[18%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </>
  );
};

export default HomePage;
