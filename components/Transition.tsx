import { motion } from "framer-motion";

const transitionVariants = {
  intial: {
    x: "10%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div>1</motion.div>
      <motion.div>2</motion.div>
      <motion.div>3</motion.div>
    </>
  );
};

export default Transition;
