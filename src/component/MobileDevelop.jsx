import { motion } from 'framer-motion';
import React, { useState } from 'react';

const MobileDevelop = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  };

  const buttonTap = {
    scale: 0.95
  };
  
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.div 
      className="bg-white min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
   
      {/* Content tabs */}
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-6 ${activeTab === 'overview' ? 'border-b-2 border-[#ffc451] text-[#06224C] font-semibold' : 'text-gray-500'}`}
          >
            Overview
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={() => setActiveTab('process')}
            className={`py-3 px-6 ${activeTab === 'process' ? 'border-b-2 border-[#ffc451] text-[#06224C] font-semibold' : 'text-gray-500'}`}
          >
            Our Process
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={() => setActiveTab('technologies')}
            className={`py-3 px-6 ${activeTab === 'technologies' ? 'border-b-2 border-[#ffc451] text-[#06224C] font-semibold' : 'text-gray-500'}`}
          >
            Technologies
          </motion.button>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Image first on mobile, second on md screens and up */}
            <motion.div 
              className="relative flex items-center justify-center h-full md:py-8 order-first md:order-last"
              variants={imageAnimation}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc451] opacity-20 rounded-full -z-10"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc451] opacity-20 rounded-full -z-10"></div>
              <motion.img 
                src="./src/assets/Web-Development-image.png" 
                alt="Web Development" 
                className="w-full h-auto max-h-full md:h-96 object-contain" 
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
            
            {/* Text second on mobile, first on md screens and up */}
            <div className="flex flex-col justify-center h-full order-last md:order-first">
              <h2 className="text-3xl font-semibold text-[#06224C] mb-6 text-center md:text-left">Elevate Your Online Presence</h2>
              <p className="text-lg text-gray-600 mb-4 text-center md:text-left">
                Our web development services are designed to create stunning, functional websites that convert visitors into customers. We focus on creating responsive, user-friendly, and visually appealing web solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
                Whether you need a simple business website, a complex e-commerce platform, or a custom web application, our team delivers solutions that align with your business goals.
              </p>
              <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
                <motion.button 
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="py-3 px-8 bg-[#ffc451] text-[#06224C] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md cursor-pointer"
                >
                  Request a Quote
                </motion.button>
                <motion.button 
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="py-3 px-8 border-2 border-[#ffc451] text-[#06224C] bg-transparent font-semibold rounded-full hover:bg-[#ffc451] hover:text-[#06224C] transition-all duration-300 shadow-md cursor-pointer"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Our Process Tab */}
        {activeTab === 'process' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="py-4"
          >
            <h2 className="text-3xl font-semibold text-[#06224C] mb-8 text-center">Our Development Process</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Discovery & Planning",
                  description: "We begin by understanding your business goals, target audience, and project requirements to create a comprehensive development plan."
                },
                {
                  step: 2,
                  title: "Design & Prototype",
                  description: "Our designers create wireframes and interactive prototypes that visualize the user experience and interface before development begins."
                },
                {
                  step: 3,
                  title: "Development",
                  description: "Our developers bring the designs to life, writing clean, efficient code that ensures your website performs flawlessly."
                },
                {
                  step: 4,
                  title: "Testing",
                  description: "Rigorous testing across devices and browsers ensures your website functions perfectly for all users."
                },
                {
                  step: 5,
                  title: "Deployment",
                  description: "We handle the launch process, ensuring your website goes live smoothly and securely."
                },
                {
                  step: 6,
                  title: "Maintenance & Support",
                  description: "Our relationship continues with ongoing support, updates, and improvements to keep your website performing optimally."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={slideUp}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#ffc451]"
                >
                  <div className="w-12 h-12 rounded-full bg-[#ffc451] text-[#06224C] flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-medium text-[#06224C] mb-3">{item.title}</h3>
                  <p className="text-lg text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Technologies Tab */}
        {activeTab === 'technologies' && (
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="py-4"
          >
            <h2 className="text-3xl font-semibold text-[#06224C] mb-8 text-center">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "React", icon: "⚛️" },
                { name: "Next.js", icon: "▲" },
                { name: "Node.js", icon: "🟢" },
                { name: "Angular", icon: "🔺" },
                { name: "Vue.js", icon: "🟩" },
                { name: "WordPress", icon: "🔷" },
                { name: "PHP", icon: "🐘" },
                { name: "Python", icon: "🐍" },
                { name: "Laravel", icon: "🔶" },
                { name: "MongoDB", icon: "🍃" },
                { name: "MySQL", icon: "🐬" },
                { name: "AWS", icon: "☁️" }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  variants={slideUp}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h3 className="text-xl font-medium text-[#06224C]">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
      
      {/* CTA Section */}
      <div className="bg-[#f8f9fa] my-16">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-[#06224C] mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl font-medium text-gray-600 mb-8">
              Our team of expert developers is ready to bring your vision to life with cutting-edge web development solutions.
            </p>
            <motion.button 
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="py-3 px-8 bg-[#ffc451] text-[#06224C] font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-md cursor-pointer"
            >
              Get a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MobileDevelop;