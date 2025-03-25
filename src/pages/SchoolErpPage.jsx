import { motion } from 'framer-motion';
import React from 'react';
import WebDevelopmentService from '../component/WebServicesPage';
import MobileDevelop from '../component/MobileDevelop';
import SchoolErp from '../component/SchoolErp';

function SchoolErpPage() {
  // Define the slideUp animation variant
  const slideUp = {
    hidden: { 
      opacity: 0,
      y: 60 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
        {/* Increased the height from 40vh to 50vh for better spacing */}
        <div className="relative h-[50vh] w-full bg-gradient-to-b from-[#051c40] to-[#072a5e] overflow-hidden">
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
              {/* Added pt-16 to ensure content starts below navbar */}
              <div className='text-white font-bold h-full flex items-center justify-center pt-16'>
              <div className="text-white w-full">
                      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20">
                        <motion.div 
                          variants={slideUp}
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 rounded-full bg-[#ffc451] flex items-center justify-center text-[#06224C]">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                              </svg>
                            </div>
                          </div>
                          <h1 className="text-4xl font-bold text-center mb-4">School/College ERP</h1>
                          <p className="text-xl font-medium text-gray-200 text-center max-w-3xl mx-auto">
                            Custom, responsive websites and web applications tailored to meet your business needs and enhance your online presence.
                          </p>
                        </motion.div>
                      </div>
                    </div>
              </div>
        </div>
        
        <div >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <SchoolErp/>
          </motion.div>
        </div>
    </>
  )
}

export default SchoolErpPage;