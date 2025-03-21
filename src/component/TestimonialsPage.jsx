import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Afa Rose",
      title: "Web Designer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 2,
      name: "Keena Lara",
      title: "Store Owner",
      image: "images/man.jpg",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 3,
      name: "Fizzi Brandon",
      title: "Freelancer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 4,
      name: "Jessica Chen",
      title: "Marketing Specialist",
      image: "images/man.jpg",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 5,
      name: "David Smith",
      title: "Project Manager",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 6,
      name: "Michael Jordan",
      title: "Business Analyst",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
    {
      id: 7,
      name: "Emma Wilson",
      title: "UX Designer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I’m beyond satisfied with the final result!"
    },
  ];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white py-0">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-black-600">Testimonials</h1>
        <motion.div 
          className="w-24 h-1 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ backgroundColor: '#ffc451' }}
        />
        <p className="text-xl mt-4 font-medium text-gray-600" >A perfect blend of innovation, affordability, and outstanding service!</p>
      </motion.div>

      <div className="relative w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                style={{ border: '1px solid #f0f0f0' }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black-600">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.title}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="#ffc451" 
                          color="#ffc451" 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative mt-4 flex-grow">
                  <Quote 
                    size={24} 
                    className="absolute -left-2 -top-2 opacity-20" 
                    style={{ color: '#ffc451' }} 
                  />
                  <p className="text-gray-600 italic pl-4">{testimonial.text}</p>
                  <Quote 
                    size={24} 
                    className="absolute right-0 bottom-0 opacity-20 rotate-180" 
                    style={{ color: '#ffc451' }} 
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button 
          className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} style={{ color: '#ffc451' }} />
        </button>
        <button 
          className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} style={{ color: '#ffc451' }} />
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2 mb-0">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${index === currentIndex ? 'w-6' : ''}`}
            style={{ 
              backgroundColor: index === currentIndex ? '#ffc451' : '#e5e7eb',
              border: index === currentIndex ? '1px solid #ffc451' : 'none'
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;