"use client";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/utilities/variants";
import PcImage from "@/components/PcImage";
const ContactPage = () => {
  return (
    //maybe remove the wrapping div
    <div className="">
      <div className="container mx-auto pt-64 pb-32 xl:pb-0 text-center xl:text-left flex xl:items-center justify-center">
        <PcImage />
        <div className="flex flex-col w-full max-w-[700px] bg-primary-500/20 backdrop-blur-sm p-12 rounded-lg">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-h1 font-body text-center mb-12"
          >
            Let&apos;s <span className="text-accent-500">connect!</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="text" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button className="btn rounded-full border-2 border-white/50 max-w-44 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent-500 group">
              <span className="text-h5 font-body group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s <span className="text-accent-500">talk</span>
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-100 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
