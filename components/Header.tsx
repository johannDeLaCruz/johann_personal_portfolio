import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/Socials";
const Header = () => {
  return (
    <header className="z-30 absolute w-full flex items-center px-16 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 pt-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={100}
              priority={true}
            />
            {/* <h1 className="text-black text-h5 text-center font-bold font-body">J.DeLaCruz.</h1> */}
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
