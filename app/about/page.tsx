"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "../../utilities/variants.js";
// import Avatar from "@/components/Avatar";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

type AboutData = {
  title: string;
  info: {
    title: string;
    icons?: JSX.Element[];
    stage?: string;
  }[];
};

const aboutData: AboutData[] = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma key="figma" />,
          <SiAdobexd key="xd" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012",
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI Designer - XYZ Company",
        stage: "2012 - 2023",
      },
      {
        title: "Web Developer - ABC Agency",
        stage: "2010 - 2012",
      },
      {
        title: "Intern - DEF Corporation",
        stage: "2008 - 2010",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - ABC University, LA, CA",
        stage: "2011",
      },
      {
        title: "Computer Science Diploma - AV Technical Institute",
        stage: "2009",
      },
      {
        title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
        stage: "2006",
      },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full text-center xl:text-left">
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[378px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container h-full mx-auto flex flex-col items-center xl:flex-row">
        <div className="flex flex-1 flex-col lg:justify-center ">
          <motion.h2
            className="text-h1 font-body mb-4"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Captivating <span className="text-accent-500">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-body1 max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            10 years ago, I began freelancing as a developer. Since then
            I&apos;ve done remote work for agencies, consulted for startups, and
            colaoborated on fdigital products for business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex xl:gap-x-6 divide-x divide-primary-400/50">
              <div className="relative flex-1">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={10} duration={4} />
                </div>
                <div className="font-body text-small uppercase trancking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>{" "}
              <div className="relative flex-1 pl-4">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="font-body text-small uppercase trancking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied Clients
                </div>
              </div>{" "}
              <div className="relative flex-1 pl-4">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={10} duration={6} />
                </div>
                <div className="font-body text-small uppercase trancking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>{" "}
              <div className="relative flex-1 pl-4">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={10} duration={7} />
                </div>
                <div className="font-body text-small uppercase trancking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-8">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent-500 after:w-[100%] after:transition-all after:duration-300"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-4 after:h-[3px] after:bg-accent-500 after:absolute after:-bottom-2 after:left-0 hover:after:w-[100%] hover:after:transition-all hover:after:duration-300 hover:ease-in-out`}
                onClick={() => setIndex(itemIndex)}
              >
                <div className="font-body text-h5">{item.title}</div>
                {/* <div className="hidden md:flex">-</div> */}
                {/* <div>{item?.info[itemIndex]?.stage}</div> */}
                <div className="flex gap-x-4"></div>
              </div>
            ))}
          </div>
          <div className="bg-primary-300/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="mb-2 md:mb-0 lg:indent-6">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item?.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-primary-500 text-h5 transition-all duration-500"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
