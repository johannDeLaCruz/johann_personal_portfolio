import {} from "react-icons/rx";
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import ServiceSlider from "@/components/ServiceSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";
const ServicesPage = () => {
  return (
    <div className="h-full bg-primary-500/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8 ">
              My Services<span className="text-accent-500">.</span>
            </h2>
            <p className="mb-4 max-w-[480px] mx-auto lg>:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              maxime voluptas? Minus culpa quod deserunt aperiam reiciendis
              eveniet asperiores fugit quisquam error vitae, beatae tempore
              dolore, voluptatibus laboriosam magnam suscipit?
            </p>
          </div>
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default ServicesPage;
