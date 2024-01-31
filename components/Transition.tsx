import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
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
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[60] bg-primary-300"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"        
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        key={"firstLayer"}
      ></motion.div>{" "}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[50] bg-primary-200"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        key={"secondLayer"}
      ></motion.div>{" "}
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[40] bg-primary-100"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        key={"thirdLayer"}
      ></motion.div>
    </>
  );
};

export default Transition;
