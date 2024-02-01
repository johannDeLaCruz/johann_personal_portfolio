import Image from "next/image";

const Circles = () => {
  return (
    <div className="hidden xl:flex relative">
      <Image
        src={"/blinking-pc1.png"}
        alt="pc-image1"
        width={500}
        height={500}
        
      />
      <div className="absolute top-0 left-0 animate-pulse duration-100">
        <Image
          src={"/blinking-pc2.png"}
          alt="pc-image2"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Circles;
