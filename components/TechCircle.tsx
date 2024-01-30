import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiFireship,
  SiWebpack,
  SiEslint,
  SiRedis,
  SiExpress,
} from "react-icons/si";
import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaNpm,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandVscode } from "react-icons/tb";

type Icon = {
  icon: JSX.Element;
};

const techIcons: Icon[] = [
  { icon: <SiNextdotjs /> },
  { icon: <SiRedux /> },
  { icon: <SiTailwindcss /> },
  { icon: <SiMongodb /> },
  { icon: <SiFireship /> },
  { icon: <SiWebpack /> },
  { icon: <SiEslint /> },
  { icon: <SiRedis /> },
  { icon: <SiExpress /> },
  { icon: <FaCss3Alt /> },
  { icon: <FaHtml5 /> },
  { icon: <FaReact /> },
  { icon: <FaSass /> },
  { icon: <FaBootstrap /> },
  { icon: <FaNodeJs /> },
  { icon: <FaGit /> },
  { icon: <FaFigma /> },
  { icon: <FaNpm /> },
  { icon: <IoLogoJavascript /> },
  { icon: <TbBrandVscode /> },
  { icon: <FaWordpress /> },
];

const TechCircle = () => {
  const radius = 225; // Half of the diameter
  const iconCount = techIcons.length;
  const angleIncrement = (2 * Math.PI) / iconCount;

  return (
    <div className="absolute w-[450px] h-[450px] -top-16 right-6 animate-spin-slow">
      {techIcons.map((tech, index) => (
        <div
          key={index}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-h3 text-accent-500"
          style={{
            left: radius * Math.cos(index * angleIncrement) + radius,
            top: radius * Math.sin(index * angleIncrement) + radius,
          }}
        >
          {tech.icon}
        </div>
      ))}
    </div>
  );
};

export default TechCircle;
