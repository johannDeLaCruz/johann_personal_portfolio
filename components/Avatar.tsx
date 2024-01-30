import Image from "next/image";
import TechCircle from "@/components/TechCircle";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none relative">
      <Image
        src={"/avatar.png"}
        width={500}
        height={500}
        alt="avatar"
        className="w-full h-full relative z-10"
      />
      <TechCircle />
    </div>
  );
};

export default Avatar;
