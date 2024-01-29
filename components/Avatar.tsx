import Image from "next/image";
import TechCircle from "@/components/TechCircle";
const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none relative">
      <TechCircle />
      <Image
        src={"/avatar.png"}
        width={500}
        height={500}
        alt="avatar"
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;
