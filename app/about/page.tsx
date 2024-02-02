"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { fadeIn } from "../../utilities/variants.js";
import { useState } from "react";
// import {
//   FaHtml5,
//   FaCss3,
//   FaJs,
//   FaReact,
//   FaWordpress,
//   FaFigma,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiFramer,
//   SiAdobexd,
//   SiAdobephotoshop,
// } from "react-icons/si";

type AboutData = {
  title: string;
  info: {
    title: string;
    description?: string;
    icons?: JSX.Element[];
    stage?: string;
  }[];
};

const aboutData: AboutData[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End:",
        description:
          "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Vue.js, Framer Motion, GSAP, Redux Toolkit, Tailwind, Bootstrap, MUI, SASS",
        // icons: [
        //   <FaHtml5 key="html" />,
        //   <FaCss3 key="css" />,
        //   <FaJs key="js" />,
        //   <FaReact key="react" />,
        //   <SiNextdotjs key="next" />,
        //   <SiFramer key="framer" />,
        //   <FaWordpress key="wordpress" />,
        // ],
      },
      {
        title: "Back-End:",
        description:
          "Node.js, Express.js, Prisma, MongoDB, MySQL, Mongoose, Auth.js, Webpack, Redis",
        // icons: [
        //   <FaFigma key="figma" />,
        //   <SiAdobexd key="xd" />,
        //   <SiAdobephotoshop key="photoshop" />,
        // ],
      },
      {
        title: "Deployment:",
        description: "Vercel, Firebase, Netlify",
        // icons: [
        //   <FaFigma key="figma" />,
        //   <SiAdobexd key="xd" />,
        //   <SiAdobephotoshop key="photoshop" />,
        // ],
      },
      {
        title: "Other Skills:",
        description:
          "Git, Npm, Visual Studio Code, Emmet, BEM, CUBE CSS, i18n, a11y, SOLID, DRY",
        // icons: [
        //   <FaFigma key="figma" />,
        //   <SiAdobexd key="xd" />,
        //   <SiAdobephotoshop key="photoshop" />,
        // ],
      },
      {
        title: "UI/UX Design:",
        description:
          "Figma, Adobe Photoshop, Adobe Illustrator, Wordpress, DaVinci Resolve, Microsoft Visio",
        // icons: [
        //   <FaFigma key="figma" />,
        //   <SiAdobexd key="xd" />,
        //   <SiAdobephotoshop key="photoshop" />,
        // ],
      },
      {
        title: "Soft Skills:",
        description:
          "Fast Learner, Communicative, English(fluent), Portuguese (Brazilian)(fluent), Spanish(medium), Russian(fluent), Japanese(basic)",
        // icons: [
        //   <FaFigma key="figma" />,
        //   <SiAdobexd key="xd" />,
        //   <SiAdobephotoshop key="photoshop" />,
        // ],
      },
    ],
  },
  // {
  //   title: "awards",
  //   info: [
  //     {
  //       title: "Webby Awards - Honoree",
  //       stage: "2011 - 2012",
  //     },
  //     {
  //       title: "Adobe Design Achievement Awards - Finalist",
  //       stage: "2009 - 2010",
  //     },
  //   ],
  // },
  {
    title: "experience",
    info: [
      {
        title: "Full Stack Web Development Freelancing",
        stage: "2021 - Present",
      },
      {
        title: "Wordpress Page Management",
        stage: "2021 - Present",
      },
      // {
      //   title: "Intern - DEF Corporation",
      //   stage: "2008 - 2010",
      // },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Mimo Bootcamp - Full Stack Web Developer",
        // stage: "2023",
      },
      {
        title: "freeCodeCamp.org - Full Stack Web Developer",
        // stage: "2023",
      },
      // {
      //   title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
      //   stage: "2006",
      // },
    ],
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="xl:h-full text-center xl:text-left xl:pt-40 pt-64 xl:pb-0 pb-32">
      <div className="xl:h-full container mx-auto flex flex-col items-center xl:flex-row">
        <div className="flex flex-1 flex-col lg:justify-center ">
          <motion.h2
            className="text-h1 font-body mb-4"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            key={"about-header"}
          >
            Visually appealing and innovative solutions
            <span className="text-accent-500">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-body1 max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            key={"about-p"}
          >
            I&apos;m currently freelancing as a web developer and I&apos;ve done
            remote work for agencies and colaborated on digital products for
            business and consumer use.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            key={"about-buttons"}
          >
            <div className="flex xl:gap-x-6 divide-x divide-primary-400/50">
              <div className="relative flex-1">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={2} duration={4} />
                </div>
                <div className="font-body text-small uppercase trancking-[1px] leading-[1.4] max-w-[100px]">
                  Years of Experience
                </div>
              </div>{" "}
              <div className="relative flex-1 pl-4">
                <div className="font-body text-h5 xl:text-h2 font-extrabold text-accent-500 mb-2">
                  <CountUp start={0} end={20} duration={5} />
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
          className="flex flex-col w-full xl:max-w-[48%] xl:h-[480px]"
          key={"about-image"}
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
                <h3 className="font-body text-h5">{item.title}</h3>
                {/* <div className="hidden md:flex">-</div> */}
                {/* <div>{item?.info[itemIndex]?.stage}</div> */}
                <div className="flex gap-x-4"></div>
              </div>
            ))}
          </div>
          <div className="bg-primary-300/10 p-2 xl:p-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info?.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col xl:flex-row max-w-max gap-x-2 justify-start text-primary-900"
              >
                <div className="w-32 mx-auto xl:mx-0">
                  <h4 className="w-32 whitespace-nowrap self-start mb-2 md:mb-0 uppercase font-bold">
                    {item.title}
                  </h4>
                </div>
                {/* <div className="hidden md:flex">-</div> */}
                {/* <div>{item?.stage}</div> */}

                <p className="text-primary-900 transition-all duration-500">
                  {item?.description}
                </p>

                {/* {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="text-primary-500 text-h5 transition-all duration-500"
                    >
                      {icon}
                    </div>
                  ))} */}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
