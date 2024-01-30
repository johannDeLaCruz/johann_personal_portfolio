"use client"
import TestimonialSlider from "@/components/TestimonialSlider";
import { motion } from "framer-motion";
import { fadeIn } from "../../utilities/variants";

const TestimonialsPage = () => {
  return (
    <div className="h-full bg-primary-300/30 py-32 text-center">
      <div className="container mx-auto flex flex-col justify-center">
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
