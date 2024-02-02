"use client";
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";

const TestimonialsPage = () => {
  return (
    <div className="xl:h-full flex lg:items-center xl:pt-40 pt-64 pb-32 xl:pb-0 text-center">
      <div className="container mx-auto flex flex-col xl: justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-h1 font-body mb-8 xl:mb-0"
        >
          What Clients Say <span className="text-accent-500">.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
