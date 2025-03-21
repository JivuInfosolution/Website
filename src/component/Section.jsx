import { motion } from "framer-motion";

const Section = ({ title, text, image, isReversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col md:flex-row items-center gap-6 mb-8  ${isReversed ? "md:flex-row-reverse" : ""}`}
    >
      <motion.img
        src={image}
        alt="Section Image"
        className="w-full md:w-1/2 h-[450px] rounded-lg object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="w-full md:w-1/2  text-center "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className=" text-justify text-gray-600 mt-2 text-lg">{text}</p>
      </motion.div>
    </motion.div>
  );
};

export default Section;


