import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import MainImage from "../assets/main_image.png"

const LandingPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#051c40] to-[#072a5e]">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1 h-20 bg-blue-400 opacity-10"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                height: [20, 100, 20],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
          {Array.from({ length: 15 }).map((_, index) => (
            <motion.div
              key={`circle-${index}`}
              className="absolute w-2 h-2 rounded-full bg-[#ffc451] opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className=" container mx-auto px-4 pt-32 pb-16 flex flex-col md:flex-row items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full md:w-1/2 mb-10 md:mb-0"
        >
          <img
            src={MainImage}
            alt="IT Solutions"
            className="mx-auto w-[550px]"
          
          />
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="w-2 h-2 bg-[#ffc451] rounded-full absolute top-1/4 left-1/4"></div>
            <div className="w-3 h-3 bg-[#ffc451] rounded-full absolute top-1/2 right-1/3"></div>
            <div className="w-2 h-2 bg-[#ffc451] rounded-full absolute bottom-1/4 right-1/4"></div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full md:w-1/2 text-white"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Delivering Superior Services
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#ffc451] mb-6">
            IT Solutions.
          </h2>
          <p className="text-lg md:text-md mb-8 text-gray-200">
            Jivu Infosolution delivers cutting-edge IT services tailored to your business needs. Our expertise helps you navigate the digital landscape with confidence.
          </p>

          <div className="flex space-x-6 mb-8">
            <motion.a
              whileHover={{ y: -5, color: '#ffc451' }}
              href="#"
              className="text-white hover:text-[#ffc451] transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: '#ffc451' }}
              href="#"
              className="text-white hover:text-[#ffc451] transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: '#ffc451' }}
              href="#"
              className="text-white hover:text-[#ffc451] transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: '#ffc451' }}
              href="#"
              className="text-white hover:text-[#ffc451] transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#ffc451] hover:bg-[#e0ab44] text-[#051c40] font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Get Quotes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white hover:border-[#ffc451] text-white hover:text-[#ffc451] font-medium py-3 px-8 rounded-full transition-colors duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;