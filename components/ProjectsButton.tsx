import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
const ProjectsButton = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link href={"/work"} className="relative w-[185px] h-[185px] flex justify-center items-center group">
        <Image
          src={"/rounded-text.png"}
          alt="arrow"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        ></Image>
        <HiArrowRight className="absolute text-h4 group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsButton;
