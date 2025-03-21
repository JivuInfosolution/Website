import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FileCheck, DollarSign, Lightbulb, MonitorPlay, Clock, Headset, Star, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const controls = useAnimation();
  const [activeFeature, setActiveFeature] = useState(0);
  
  const primaryColor = '#ffc451';
  const darkBlue = '#06224C'; 
  
  useEffect(() => {
    controls.start('visible');
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 6);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [controls]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }
    },
    hover: { 
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.3 }
    }
  };

  const featureItems = [
    {
      title: "Experience",
      icon: <FileCheck size={48} />,
      description: "We bring years of expertise, delivering innovative, high-quality software and website solutions tailored to your business needs.",
      highlight: "10+ years of industry experience"
    },
    {
      title: "Pricing",
      icon: <DollarSign size={48} />,
      description: "We offer competitive pricing without compromising on quality, ensuring cost-effective solutions tailored to your business needs.",
      highlight: "Transparent pricing with no hidden fees"
    },
    {
      title: "Products",
      icon: <Lightbulb size={48} />,
      description: "Our products are designed with innovation and precision, delivering reliable, scalable, and high-performance solutions for your business.",
      highlight: "Innovative solutions for modern challenges"
    },
    {
      title: "Delivery",
      icon: <Clock size={48} />,
      description: "We ensure timely delivery of high-quality software and website solutions, keeping your business ahead with efficiency and reliability.",
      highlight: "On-time delivery, every time"
    },
    {
      title: "Approach",
      icon: <MonitorPlay size={48} />,
      description: "Our approach is client-centric, focusing on innovation, efficiency, and customized solutions to meet your unique business needs.",
      highlight: "Client-centered methodology"
    },
    {
      title: "Support",
      icon: <Headset size={48} />,
      description: "We provide 24/7 dedicated support, ensuring seamless assistance and quick resolutions to keep your business running smoothly.",
      highlight: "24/7 dedicated customer support"
    }
  ];

  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '500+', label: 'Projects Completed' },
    { value: '15+', label: 'Years of Experience' },
    { value: '24/7', label: 'Customer Support' }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl mb-0" style={{ backgroundColor: '#fff' }}>
     
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 5}px`,
              color: primaryColor
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + Math.random() * 7,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          >
            <Star size={Math.random() * 10 + 5} />
          </motion.div>
        ))}
      </div>
      
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 opacity-5 rounded-bl-full -z-10" style={{ backgroundColor: darkBlue }} />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-5 rounded-tr-full -z-10" style={{ backgroundColor: primaryColor }} />
      
      
      <motion.div 
        className="text-center mb-20 relative"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold tracking-wider px-4 py-1 rounded-full" 
          style={{ backgroundColor: `${darkBlue}20`, color: darkBlue }}>
          TRUSTED BY INDUSTRY LEADERS
        </span>
        <h1 className="text-4xl font-bold mb-4 bg-clip-text" style={{ color: 'black' }}>Why Choose Us</h1>
        <motion.div 
          className="w-24 h-1 mx-auto mt-4"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ backgroundColor: primaryColor }}
        />
        <motion.p 
          className="text-xl font-medium mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          
        >
          Affordable, efficient, 24/7 support, and secure solutions.
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-2 relative z-10">
        
        <motion.div 
          className="w-full md:w-5/12 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featureItems.slice(0, 3).map((item, index) => (
            <motion.div 
              key={index} 
              className={`flex items-center justify-end text-right gap-6 group p-4 rounded-lg transition-all duration-300 ${activeFeature === index ? 'bg-white shadow-xl scale-105' : 'hover:bg-white hover:shadow-lg'}`}
              variants={itemVariants}
              whileHover={{ x: -5, transition: { duration: 0.2 } }}
              onClick={() => setActiveFeature(index)}
            >
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 group-hover:transition-colors" 
                  style={{ color: activeFeature === index ? primaryColor : darkBlue }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 max-w-md leading-relaxed">{item.description}</p>
                <motion.div 
                  className="mt-2 flex items-center justify-end gap-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeFeature === index ? 1 : 0,
                    height: activeFeature === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ color: primaryColor }}
                >
                  <span className="text-sm font-medium">{item.highlight}</span>
                  <CheckCircle size={16} />
                </motion.div>
              </div>
              <motion.div 
                className="p-4 rounded-full shadow-md"
                variants={iconVariants}
                whileHover="hover"
                style={{ backgroundColor: darkBlue, color: primaryColor }}
              >
                {item.icon}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="w-full md:w-2/12 flex justify-center items-center py-8 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            className="absolute w-64 h-64 rounded-full opacity-20"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ backgroundColor: darkBlue }}
          />
          <motion.div
            className="absolute w-80 h-80 border-2 border-dashed rounded-full"
            animate={{ 
              rotate: 360
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ borderColor: `${primaryColor}50` }}
          />
          <motion.img 
            src="/features.jpg" 
            alt="Digital globe with people working around it" 
            className="w-full max-w-xs relative z-10 shadow-lg rounded-full border-4 border-white"
            initial={{ scale: 0.8, rotateY: -20 }}
            animate={{ 
              scale: 1, 
              rotateY: 0,
              transition: { duration: 0.8, delay: 0.5 } 
            }}
            whileHover={{ 
              scale: 1.05, 
              rotateY: 5,
              transition: { duration: 0.3 } 
            }}
          />
          
          <motion.div
            className="absolute -bottom-2 text-white text-nowrap py-2 px-6 rounded-full text-sm font-bold shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ backgroundColor: darkBlue }}
          >
            TRUSTED WORLDWIDE
          </motion.div>
        </motion.div>

        <motion.div 
          className="w-full md:w-5/12 space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {featureItems.slice(3).map((item, index) => (
            <motion.div 
              key={index} 
              className={`flex items-center justify-start text-left gap-6 group p-4 rounded-lg transition-all duration-300 ${activeFeature === index + 3 ? 'bg-white shadow-xl scale-105' : 'hover:bg-white hover:shadow-lg'}`}
              variants={itemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              onClick={() => setActiveFeature(index + 3)}
            >
              <motion.div 
                className="p-4 rounded-full shadow-md"
                variants={iconVariants}
                whileHover="hover"
                style={{ backgroundColor: darkBlue, color: primaryColor }}
              >
                {item.icon}
              </motion.div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-2 group-hover:transition-colors" 
                  style={{ color: activeFeature === index + 3 ? primaryColor : darkBlue }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 max-w-md leading-relaxed">{item.description}</p>
                <motion.div 
                  className="mt-2 flex items-center gap-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeFeature === index + 3 ? 1 : 0,
                    height: activeFeature === index + 3 ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ color: primaryColor }}
                >
                  <span className="text-sm font-medium">{item.highlight}</span>
                  <CheckCircle size={16} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
  
      <motion.div 
        className="mt-24 py-10 px-6 rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ backgroundImage: `linear-gradient(to right, ${darkBlue}, #0c3a75)` }}
      >
        <div className="flex flex-wrap justify-center items-center">
          {stats.map((stat, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-4 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.2, duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-1" style={{ color: primaryColor }}>{stat.value}</h2>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-20 bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundImage: `linear-gradient(to right, ${darkBlue}, ${primaryColor})` }}></div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/4 flex justify-center">
            <motion.div 
              className="w-24 h-24 rounded-full overflow-hidden border-2"
              whileHover={{ scale: 1.05 }}
              style={{ borderColor: darkBlue }}
            >
              <img src="/images" alt="Client" className="w-full h-full object-cover" />
            </motion.div>
          </div>
          <div className="md:w-3/4">
            <div className="mb-4" style={{ color: primaryColor }}>
              <Star size={20} className="inline-block mr-1" fill="currentColor" />
              <Star size={20} className="inline-block mr-1" fill="currentColor" />
              <Star size={20} className="inline-block mr-1" fill="currentColor" />
              <Star size={20} className="inline-block mr-1" fill="currentColor" />
              <Star size={20} className="inline-block" fill="currentColor" />
            </div>
            <p className="text-gray-600 italic mb-4">"Working with this team has been an absolute pleasure. Their dedication to excellence and customer satisfaction is unparalleled. I highly recommend their services to anyone looking for quality and reliability."</p>
            <p className="font-semibold" style={{ color: darkBlue }}>Sunil Kumar Yadav, <span className="text-gray-500">CEO of Jivu Infosolution</span></p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-20 text-center py-16 px-4 rounded-2xl relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{ backgroundColor: `${darkBlue}10` }}
      >
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-1/2 translate-x-1/2" style={{ backgroundColor: `${primaryColor}20` }}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full translate-y-1/2 -translate-x-1/2" style={{ backgroundColor: `${darkBlue}20` }}></div>
        
        <h2 className="text-3xl font-bold mb-4 relative z-10" style={{ color: darkBlue }}>Ready to Get Started?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 relative z-10">Join thousands of satisfied customers who have transformed their business with our solutions.</p>
        <motion.button 
          className="px-8 py-3 text-white rounded-full font-medium shadow-lg transition-colors flex items-center gap-2 mx-auto hover:opacity-90"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{ backgroundColor: darkBlue }}
        >
          Get Started
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;