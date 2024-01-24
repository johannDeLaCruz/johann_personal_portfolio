import {} from "react-icons/rx";
import Circles from "@/components/Circles"
import Bulb from "@/components/Bulb";

const ServicesPage = () => {
  return (
    <div className="h-full bg-primary-500/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto"></div>
      <Bulb />
    </div>
  );
};

export default ServicesPage;
