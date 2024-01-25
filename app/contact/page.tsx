import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/utilities/variants";
const ContactPage = () => {
  return (
    <div className="h-full bg-primary-500/30">
      <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex">
          <h2 className="h2 text-center mb-12">
            Let&lsquo;s <span className="text-accent-500">connect!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
