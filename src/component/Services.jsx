import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Link} from "react-router-dom"


const WebDevelopmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
    <path d="M9 9l-2 2 2 2" strokeWidth="1.5" />
    <path d="M15 9l2 2-2 2" strokeWidth="1.5" />
    <path d="M12 7l-1 10" strokeWidth="1.5" />
  </svg>
);


const MobileApplicationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <rect x="7" y="2" width="10" height="20" rx="2" strokeWidth="1.5" />
    <line x1="7" y1="6" x2="17" y2="6" strokeWidth="1.5" />
    <line x1="7" y1="18" x2="17" y2="18" strokeWidth="1.5" />
    <circle cx="12" cy="21" r="0.5" strokeWidth="1.5" />
  </svg>
);


const SchoolERPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <path d="M12 3L2 9l10 6 10-6-10-6z" strokeWidth="1.5" />
    <path d="M2 9v6" strokeWidth="1.5" />
    <path d="M19 12v6c0 1-4 3-7 3s-7-2-7-3v-6" strokeWidth="1.5" />
  </svg>
);


const RestaurantERPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <path d="M6 2v20M18 2v20" strokeWidth="1.5" />
    <path d="M4 8h4" strokeWidth="1.5" />
    <path d="M4 12h4" strokeWidth="1.5" />
    <path d="M4 16h4" strokeWidth="1.5" />
    <path d="M12 6h6" strokeWidth="1.5" />
    <path d="M12 12h8" strokeWidth="1.5" />
    <path d="M12 18h6" strokeWidth="1.5" />
  </svg>
);


const ConstructionERPIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" strokeWidth="1.5" />
    <path d="M16 3l-4 4l-4-4" strokeWidth="1.5" />
  </svg>
);


const HotelManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" strokeWidth="1.5" />
    <path d="M3 16h18" strokeWidth="1.5" />
    <path d="M8 12h.01" strokeWidth="1.5" />
    <path d="M12 12h.01" strokeWidth="1.5" />
    <path d="M16 12h.01" strokeWidth="1.5" />
    <path d="M8 8h.01" strokeWidth="1.5" />
    <path d="M12 8h.01" strokeWidth="1.5" />
    <path d="M16 8h.01" strokeWidth="1.5" />
  </svg>
);


const HospitalManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
    <line x1="12" y1="8" x2="12" y2="16" strokeWidth="1.5" />
    <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1.5" />
  </svg>
);


const DigitalMarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 stroke-[#ffc451]">
    <path d="M12 20v-6M9 17h6" strokeWidth="1.5" />
    <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
    <path d="M3 18c0-3 3-4 6-4h6c3 0 6 1 6 4" strokeWidth="1.5" />
  </svg>
);

const ServiceCard = ({ icon, title, description, index, path }) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("Path : ", path)

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden border-b-2 border-transparent h-72 relative backdrop-blur-sm bg-white/90 z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#ffc451"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        borderBottomColor: isHovered ? "#ffc451" : "transparent",
        transition: "border-color 0.2s ease"
      }}
    >
      <div className="p-6 flex flex-col items-center h-full">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mb-4"
        >
          {icon}
        </motion.div>
        <motion.h3 
          className="text-xl font-bold mb-3 text-center"
          animate={{ 
            color: isHovered ? "#ffc451" : "#333333"
          }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 text-center"
          animate={{ 
            opacity: isHovered ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
        
        
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-transparent py-6 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Link to={path}>
          <motion.button
            className="text-[#ffc451] font-medium flex items-center hover:font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [showMoreServices, setShowMoreServices] = useState(false);
  
  const services = [
    {
      icon: <WebDevelopmentIcon />,
      title: "Web Development",
      description: "Custom, responsive websites and web applications tailored to meet your business needs and enhance your online presence.",
      path:"/WebServices"
    },
    {
      icon: <MobileApplicationIcon />,
      title: "Mobile Application",
      description: "Native and cross-platform mobile solutions that deliver exceptional user experiences across all devices.",
      path:"/MobileDevelop"
    },
    {
      icon: <SchoolERPIcon />,
      title: "School/College ERP",
      description: "Comprehensive management systems for educational institutions to streamline administration, academics, and communication.",
      path:"/SchoolErp"
    },
    {
      icon: <RestaurantERPIcon />,
      title: "Restaurant ERP",
      description: "Integrated solutions for restaurant management, including inventory, orders, billing, and customer relationship management.",
      path:"/Restaurant"
    },
    {
      icon: <ConstructionERPIcon />,
      title: "Construction ERP",
      description: "Project management tools for construction businesses to track resources, manage budgets, and monitor progress efficiently.",
      path:"/ConstructionPage"
    },
    {
      icon: <HotelManagementIcon />,
      title: "Hotel Management",
      description: "End-to-end solutions for hotel operations, including reservations, housekeeping, staff management, and guest services.",
      path:"/HotelManagePage"
    }
  ];
  
  const moreServices = [
    {
      icon: <HospitalManagementIcon />,
      title: "Hospital Management",
      description: "Comprehensive healthcare management systems for patient records, appointments, billing, inventory, and staff scheduling.",
      path:"/HospitalPage"
    },
    {
      icon: <DigitalMarketingIcon />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence, including SEO, social media, content marketing, and PPC advertising.",
      path:"/DigitalMarketingPage"
      
    },
    {
      icon: <DigitalMarketingIcon />,
      title: "E-Commerce",
      description: "Strategic marketing solutions to boost your online presence, including SEO, social media, content marketing, and PPC advertising.",
      path:"/EcommercePage"
      
    }
  ];

  
  const lineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: "4rem", 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  
  const buttonVariants = {
    rest: { 
      scale: 1,
      backgroundColor: showMoreServices ? "#f3f4f6" : "#ffc451",
      color: showMoreServices ? "#4b5563" : "#ffffff",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)"
    },
    hover: { 
      scale: 1.05,
      backgroundColor: showMoreServices ? "#e5e7eb" : "#ffcf70",
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
    },
    tap: { 
      scale: 0.95
    }
  };

  return (
    <div className="w-full bg-white py-10 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          
          
          <motion.div 
            className="h-1 bg-[#ffc451] mx-auto mb-4"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
          ></motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We provide cutting-edge solutions to help your business grow in the digital landscape.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 md:px-16 lg:px-15">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
              path={service.path}
            />
          ))}
          
          
          <AnimatePresence>
            {showMoreServices && moreServices.map((service, index) => (
              <ServiceCard
                key={`more-${index}`}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={services.length + index}
                path={service.path}

              />
            ))}
          </AnimatePresence>
        </div>
        
        
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowMoreServices(!showMoreServices)}
            className="px-6 py-3 rounded-full font-medium flex items-center transition-all duration-300 overflow-hidden relative"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span className="relative z-10 flex items-center">
              {showMoreServices ? (
                <>
                  Show Less
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </motion.svg>
                </>
              ) : (
                <>
                  View More Services
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ y: 0 }}
                    animate={{ y: [0, 3, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 1.5, 
                      ease: "easeInOut" 
                    }}
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </motion.svg>
                </>
              )}
            </motion.span>

            
            <motion.div
              className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-0"
              initial={{ opacity: 0, scale: 0 }}
              whileHover={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 0.3 }}
              style={{ borderRadius: "9999px" }}
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;