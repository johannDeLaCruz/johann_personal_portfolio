import Image from "next/image";
const TopLeftImage = () => {
  return (
    <div className="hidden xl:flex absolute top-0 left-0">
      <Image
        src={"/top-left-image.png"}
        width={300}
        height={300}
        alt="left-image"
        className="w-full h-full relative z-10"
      />
    </div>
  );
};

export default TopLeftImage;
