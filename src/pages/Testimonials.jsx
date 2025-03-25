import { motion } from 'framer-motion';
import React from 'react';
import TestimonialsPage from '../component/TestimonialsPage';


function Testimonials() {
  return (
    <>
         <div className="absolute top-0 h-[40vh] left-0 right-0 z-0 bg-gradient-to-b from-[#051c40] to-[#072a5e] overflow-hidden">
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
              <div className='text-white font-bold h-full flex items-center justify-center'>
                <h2 className='mt-16 text-2xl'>Testimonials</h2>
              </div>
        </div>
        <div className='mt-[20%] py-8'>
          <TestimonialsPage/>
        </div>
    </>
  )
}

export default Testimonials