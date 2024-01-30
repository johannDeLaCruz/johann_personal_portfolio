"use client";
import Avatar from "@/components/Avatar";
import ProjectsButton from "@/components/ProjectsButton";
import ParticlesContainer from "@/components/ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "@/utilities/variants";

const HomePage = () => {
  return (
    <div className="h-full">
      <div className="h-full w-full">
        <div className="text-center flex flex-col pt-10 xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-h1 font-body mb-4"
          >
            Hello, I&apos;m <span className="text-accent-500">Johann</span>.{" "}
            <br />
            Full Stack <span className="text-accent-500">WebDev</span>.
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-body1 max-w-sm xl:max-w-lg mx-auto xl:mx-0 mb-10 xl:mb-10"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            accusamus optio nostrum error modi esse numquam quos nam
            reprehenderit suscipit ab id aut.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
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
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-32 lg:bottom-0 lg:right-[18%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
