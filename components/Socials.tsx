import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubFill,
  RiTwitterXFill,
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
  { link: "", icon: <RiTwitterXFill /> },
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
    <div className="flex items center gap-x-5 text-h5">
      {socialsData.map((item, index) => (
        <Link href={item.link} key={index} className="hover:text-accent-500 transition-all duration-300">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
