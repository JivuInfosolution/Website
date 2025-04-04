import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Afa Rose",
      title: "Web Designer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 2,
      name: "Keena Lara",
      title: "Store Owner",
      image: "images/man.jpg",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 3,
      name: "Fizzi Brandon",
      title: "Freelancer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 4,
      name: "Jessica Chen",
      title: "Marketing Specialist",
      image: "images/man.jpg",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 5,
      name: "David Smith",
      title: "Project Manager",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 6,
      name: "Michael Jordan",
      title: "Business Analyst",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
    {
      id: 7,
      name: "Emma Wilson",
      title: "UX Designer",
      image: "images/girl.png",
      rating: 5,
      text: "Amazing creativity and attention to detail! The designer perfectly captured my vision and delivered a stunning, functional design. The process was smooth, professional, and truly collaborative. I'm beyond satisfied with the final result!"
    },
  ];

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white py-8 md:py-12">
      <motion.div 
        className="text-center mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-black-600">Testimonials</h1>
        <motion.div 
          className="w-16 md:w-24 h-1 mx-auto mt-3 md:mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ backgroundColor: '#ffc451' }}
        />
        <p className="text-lg md:text-xl mt-3 md:mt-4 font-medium text-gray-600 px-2">A perfect blend of innovation, affordability, and outstanding service!</p>
      </motion.div>

      <div className="relative w-full max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                className={`bg-white rounded-lg shadow-lg p-4 md:p-6 w-full ${
                  visibleCount === 1 ? 'sm:w-full' :
                  visibleCount === 2 ? 'sm:w-1/2' : 'sm:w-full md:w-1/2 lg:w-1/3'
                } flex flex-col`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                style={{ border: '1px solid #f0f0f0' }}
              >
                <div className="flex items-center mb-4">
                  <div className="rounded-full overflow-hidden w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black-600 line-clamp-1">{testimonial.name}</h3>
                    <p className="text-sm sm:text-base text-gray-500">{testimonial.title}</p>
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
                
                <div className="relative mt-2 md:mt-4 flex-grow">
                  <Quote 
                    size={20} 
                    className="absolute -left-1 -top-1 md:-left-2 md:-top-2 opacity-20" 
                    style={{ color: '#ffc451' }} 
                  />
                  <p className="text-sm sm:text-base text-gray-600 italic pl-3 md:pl-4 line-clamp-4 sm:line-clamp-none">{testimonial.text}</p>
                  <Quote 
                    size={20} 
                    className="absolute right-0 bottom-0 opacity-20 rotate-180" 
                    style={{ color: '#ffc451' }} 
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <button 
          className="absolute top-1/2 -left-2 sm:-left-4 lg:-left-12 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md focus:outline-none"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="sm:w-6 sm:h-6" style={{ color: '#ffc451' }} />
        </button>
        <button 
          className="absolute top-1/2 -right-2 sm:-right-4 lg:-right-12 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md focus:outline-none"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="sm:w-6 sm:h-6" style={{ color: '#ffc451' }} />
        </button>
      </div>

      <div className="flex justify-center mt-6 md:mt-8 space-x-1 sm:space-x-2 mb-0">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus:outline-none ${index === currentIndex ? 'w-4 sm:w-6' : ''}`}
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