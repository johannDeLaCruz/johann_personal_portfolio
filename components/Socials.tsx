import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubFill,
  // RiTwitterXFill,
  RiLinkedinFill,
  RiWhatsappLine,
  RiFacebookCircleFill,
  RiMailFill,
} from "react-icons/ri";
const socialsData = [
  {
    link: "https://www.instagram.com/johann.de.la.cruz/",
    icon: <RiInstagramLine />,
  },
  { link: "https://github.com/johannDeLaCruz", icon: <RiGithubFill /> },
  // { link: "", icon: <RiTwitterXFill /> },
  {
    link: "https://www.linkedin.com/in/johann-d-l-cruz/",
    icon: <RiLinkedinFill />,
  },
  { link: "", icon: <RiWhatsappLine /> },
  {
    link: "https://www.facebook.com/johann.s.m.mendez",
    icon: <RiFacebookCircleFill />,
  },
  { link: "mailto:johann.de.la.cruz2023@gmail.com", icon: <RiMailFill /> },
];
const Socials = () => {
  return (
    <div className="flex items center gap-x-3 md:gap-x-5 text-h5">
      {socialsData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-primary-500 hover:text-accent-500 transition-all duration-300"
        >
          {" "}
          <div className="border border-primary-300 rounded-full p-2">
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
